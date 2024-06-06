import React, { useState } from "react";

import User from "./components/User";
import ErrorModal from "./UI/ErrorModal";

import styles from "./App.module.css";

const DUMMY_USER = [
	{ id: "u1", name: "Rambabu Patidar", age: 23 },
	{ id: "u2", name: "Vedika Patidar", age: 8 },
];

const App = () => {
	const [users, setUsers] = useState(DUMMY_USER);
	const [isError, setIsError] = useState([false, false]);
	const [isNameError, isAgeError] = isError;
	const addUserHandler = (newUser) => {
		setUsers((prevUsers) => {
			return [newUser, ...prevUsers];
		});
	};

	const errorHandler = (nameError, ageError) => {
		setIsError([nameError, ageError]);
	};

	const errorCloseHandler = () => {
		setIsError([false, false]);
	};

	let title;
	let message;

	if (isNameError && isAgeError) {
		title = "Invalid user input!";
		message = "Enter valid Name and Age";
	} else if (isNameError) {
		title = "Invalid user name!";
		message = "User name cann't be empty!";
	} else if (isAgeError) {
		title = "Invalid user age!";
		message = "User age must be positive or greater than 0";
	}

	return (
		<div className={styles.container}>
			{(isNameError || isAgeError) && (
				<ErrorModal
					title={title}
					message={message}
					onRemoveOverlay={errorCloseHandler}
				/>
			)}

			<User user={users} onAddNewUser={addUserHandler} onError={errorHandler} />
		</div>
	);
};
export default App;

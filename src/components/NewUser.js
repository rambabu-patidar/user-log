import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import styles from "./NewUser.module.css";

const NewUser = (props) => {
	const [userInput, setUserInput] = useState({ name: "", age: "" });
	const [validUserInput, setValidUserInput] = useState({
		name: true,
		age: true,
	});
	const nameRef = useRef();

	const nameChangeHandler = (event) => {
		setValidUserInput((prevState) => {
			return { ...prevState, name: true };
		});
		setUserInput((prevUserInput) => {
			return { ...prevUserInput, name: event.target.value };
		});
	};

	const ageChangeHandler = (event) => {
		setValidUserInput((prevState) => {
			return { ...prevState, age: true };
		});

		setUserInput((prevUserInput) => {
			return { ...prevUserInput, age: event.target.value };
		});
	};

	const userSubmitHandler = (event) => {
		event.preventDefault();
		const isValidName = userInput.name.trim().length === 0 ? false : true;
		const isValidAge = +userInput.age <= 0 ? false : true;
		if (!isValidName && !isValidAge) {
			setValidUserInput({ name: false, age: false });
			props.onError(true, true);
			return;
		}
		if (!isValidName) {
			setValidUserInput((prevState) => {
				return { ...prevState, name: false };
			});
			props.onError(true, !validUserInput.age);
			return;
		}
		if (!isValidAge) {
			setValidUserInput((prevState) => {
				return { ...prevState, age: false };
			});
			props.onError(!validUserInput.name, true);
			return;
		}
		props.onAddNewUser(userInput);
		setUserInput({ name: "", age: "" });
		nameRef.current.focus();
	};

	return (
		<Card className={styles["form-card"]}>
			<form onSubmit={userSubmitHandler}>
				<div className={styles.controls}>
					<div className={styles.control}>
						<label htmlFor="name">Name</label>
						<input
							type="text"
							onChange={nameChangeHandler}
							value={userInput.name}
							ref={nameRef}
							className={!validUserInput.name ? styles.invalid : ""}
						/>
					</div>
					<div className={styles.control}>
						<label htmlFor="age">Age</label>
						<input
							type="number"
							max="100"
							step="1"
							value={userInput.age}
							onChange={ageChangeHandler}
							className={!validUserInput.age ? styles.invalid : ""}
						/>
					</div>
				</div>
				<div className={styles.actions}>
					<Button type="submit">Add</Button>
				</div>
			</form>
		</Card>
	);
};

export default NewUser;

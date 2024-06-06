import React from "react";

import Card from "../UI/Card";
import UserList from "./UserList";
import NewUser from "./NewUser";

const User = (props) => {
	const addNewUserHandler = (enteredUser) => {
		const addedUser = { ...enteredUser };
		addedUser.id = Math.random().toString();
		props.onAddNewUser(addedUser);
	};
	return (
		<Card>
			<NewUser onAddNewUser={addNewUserHandler} onError={props.onError} />
			<UserList users={props.user} />
		</Card>
	);
};

export default User;

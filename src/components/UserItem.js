import React from "react";

import Card from "../UI/Card";

import styles from "./UserItem.module.css";

const UserItem = (props) => {
	return (
		<li className={styles["user-item"]}>
			<Card className={styles["item-card"]}>
				<p className={styles["user-name"]}>{props.name}</p>
				<p className={styles["user-age"]}>
					<i>age:</i>
					{props.age}
				</p>
			</Card>
		</li>
	);
};

export default UserItem;

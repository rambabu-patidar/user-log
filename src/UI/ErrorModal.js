import React from "react";

import Button from "./Button";
import Card from "./Card";

import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {
	const overlayClickHandler = (event) => {
		props.onRemoveOverlay();
	};

	return (
		<div>
			<div onClick={overlayClickHandler} className={styles.backdrop}></div>
			<Card className={styles.modal}>
				<header className={styles.header}>
					<h1>{props.title}</h1>
				</header>
				<main className={styles.main}>
					<p>{props.message}</p>
				</main>
				<footer className={styles.footer}>
					<Button onClick={overlayClickHandler}>Okay</Button>
				</footer>
			</Card>
		</div>
	);
};

export default ErrorModal;

import React, { useEffect, useState } from "react";
import Button from "../UI/Button";
import "../get/Get.css";
import Input from "../UI/Input";

const Get = () => {
	const [getUsers, setGetUsers] = useState([]);
	const [inputValue, setInputValue] = useState("");

	useEffect(() => {
		const localStorages = JSON.parse(localStorage.getItem("inputName"));
		if (localStorages) {
			setInputValue(localStorages);
		}
	}, []);

	useEffect(() => {
		console.log(`${inputValue.length} ${inputValue}`);
		localStorage.setItem("inputName", JSON.stringify(inputValue));
	}, [inputValue]);

	const addButton = () => {
		fetch(`https://jsonplaceholder.typicode.com/users`)
			.then((response) => response.json())
			.then((json) => setGetUsers(json));
	};

	useEffect(() => {
		addButton();
	}, []);

	const deleteButton = () => {
		setGetUsers([]);
	};
	return (
		<div>
			<div className="buttons">
				<Button
					className="button1"
					onClick={() => addButton()}
					text="Показать ползователей"
				/>
				<Button
					className="button2"
					onClick={() => deleteButton()}
					text="Удалить пользователей"
				/>
			</div>
			<Input
				placeholder="text"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<div className="userNames">
				{getUsers.map((item) => (
					<div className="users" key={item.id}>
						<h2>{item.name}</h2>
						<p>UserName: {item.username}</p>
						<p>Email: {item.email}</p>
						<p>
							Address: {item.address.street} {item.address.suite}{" "}
							{item.address.city}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Get;

import React, { useState } from "react";
import "./LoginPage.css";
import { useDispatch } from "react-redux";
import { setUser, setLogin } from "./actions";

import { useHistory } from "react-router-dom";

const LoginPage = () => {
	// selector is used of geting the user state from the reducer
	// const { users } = useSelector((state) => state.LoginPage);
	// gets the state of the users inside the LoginPage reducer

	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [email, setEmail] = useState("");

	const dispatch = useDispatch();
	const history = useHistory();

	const addUser = () => {
		const userDetails = {
			userName: name,
			password: password,
			emailId: email,
		};

		dispatch(setUser(userDetails));
		dispatch(setLogin());
		history.push("/create-profile");
	};

	return (
		<div className="login">
			<form action="" className="login__form">
				<h1 className="login__heading">Signup here for Awesomeness 🎶</h1>
				<input
					type="text"
					placeholder="Enter your Name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<input
					type="email"
					placeholder="email id"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>

				<button type="submit" onClick={addUser}>
					SignUp
				</button>
			</form>
		</div>
	);
};

export default LoginPage;

import React from "react";
import "./ProfilePage.css";
import { useSelector, useDispatch } from "react-redux";
import { setLogin } from "../LoginPage/actions";
import { useHistory } from "react-router-dom";
import { newProfileCreation } from "../CreateProfile/actions";

const ProfilePage = () => {
	// get the states from loginpage
	const { userName, emailId } = useSelector((state) => state.loginPage);
	const { profilePic, bgImg, bio } = useSelector(
		(state) => state.createProfile
	);

	const dispatch = useDispatch();

	const history = useHistory();

	const logOut = () => {
		dispatch(setLogin());
		dispatch(newProfileCreation());
		history.push("/");
	};

	return (
		<div className="profile">
			<div className="profile__wrapper">
				<div
					className="profile__bg"
					style={{
						backgroundImage: `url(${bgImg})`,
					}}
				>
					{/* didnt use the avatar image */}
					<img
						src="https://st2.depositphotos.com/1009634/7235/v/600/depositphotos_72350117-stock-illustration-no-user-profile-picture-hand.jpg"
						alt="avatar"
						className="profile__avatar"
					/>
				</div>
				<div className="profile__info">
					Welcome Back 💜,
					<h2 className="info__name">{userName}</h2>
					<p className="info__email">{emailId}</p>
				</div>
				<div className="profile__about">
					<h3>About</h3>
					<p>{bio}</p>
				</div>
				<button className="profile__btn" onClick={logOut}>
					Logout
				</button>
			</div>
		</div>
	);
};

export default ProfilePage;

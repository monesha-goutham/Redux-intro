import React, { useState } from "react";
import "./CreateProfile.css";

import { useSelector, useDispatch } from "react-redux";
import { setProfile, newProfileCreation } from "./actions";
import { useHistory } from "react-router-dom";

const CreateProfile = () => {
	const [profileImg, setProfileImg] = useState();
	const [bg, setBg] = useState("");
	const [bio, setBio] = useState("");

	const { userName } = useSelector((state) => state.loginPage);
	const dispatch = useDispatch();
	const history = useHistory();

	const createNewProfile = () => {
		const newProfile = {
			profilePic: profileImg,
			bgImg: bg,
			bio: bio,
		};
		dispatch(setProfile(newProfile));
		dispatch(newProfileCreation());
		history.push("/profile");
	};

	return (
		<div className="create">
			<form action="" className="create__form">
				<h1>
					Hi <span className="create__name">{userName}</span>,{" "}
				</h1>
				<h1>Lets set up your profile 🎵</h1>
				<div className="create__info">
					<label htmlFor="DP">Profile Pic</label>
					<input
						type="file"
						name="DP"
						value={profileImg}
						onChange={(e) => setProfileImg(e.target.value)}
					/>

					<label htmlFor="BG">Set a cool BG</label>
					<input
						type="text"
						placeholder="URL for background image"
						name="BG"
						value={bg}
						onChange={(e) => setBg(e.target.value)}
					/>

					<label htmlFor="bio">A little about you</label>
					<textarea
						cols="30"
						rows="5"
						name="bio"
						placeholder="A short bio..."
						value={bio}
						onChange={(e) => setBio(e.target.value)}
					/>
				</div>
				<button
					type="submit"
					className="create__btn"
					onClick={createNewProfile}
				>
					Create Profile
				</button>
			</form>
		</div>
	);
};

export default CreateProfile;

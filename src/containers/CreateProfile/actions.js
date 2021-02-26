export const setProfile = (userProfile) => {
	return { type: "SET_PROFILE", payload: userProfile };
};

export const newProfileCreation = () => {
	return { type: "CREATE_PROFILE" };
};

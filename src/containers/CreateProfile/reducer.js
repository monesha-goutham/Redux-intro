const defaultProfileState = {
	profilePic: null,
	bgImg: "",
	bio: "",

	isProfileCreated: false,
};

const createProfileReducer = (state = defaultProfileState, action) => {
	switch (action.type) {
		case "SET_PROFILE":
			return {
				...state,
				profilePic: action.payload.profilePic,
				bgImg: action.payload.bgImg,
				bio: action.payload.bio,
			};

		case "CREATE_PROFILE":
			return {
				...state,
				isProfileCreated: !state.isProfileCreated,
			};
		default:
			return state;
	}
};

export default createProfileReducer;

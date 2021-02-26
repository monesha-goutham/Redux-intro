const defaultState = {
	// temp treu
	isLoggedIn: false,
	userName: "",
	password: "",
	emailId: "",
};

const loginPageReducer = (state = defaultState, action) => {
	switch (action.type) {
		case "SET_USER":
			return {
				...state,
				userName: action.payload.userName,
				password: action.payload.password,
				emailId: action.payload.emailId,
			};

		case "LOG_IN":
			return {
				...state,
				// temp true
				isLoggedIn: !state.isLoggedIn,
				// isLoggedIn: true,
			};

		default:
			return state;
	}
};

export default loginPageReducer;

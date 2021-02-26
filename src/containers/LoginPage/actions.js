export const setUser = (user) => {
	return { type: "SET_USER", payload: user };
};

export const setLogin = () => {
	return { type: "LOG_IN" };
};
// export const setPassword = (password) =>{
// 	return {type : "SET_PASSWORD", payload : password}
// }

// export const setEmailId = (emailId) =>{
// 	return {type : "SET_EMAILID", }
// }

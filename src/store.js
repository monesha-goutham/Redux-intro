import { createStore, combineReducers } from "redux";

import loginPageReducer from "./containers/LoginPage/reducers";
import createProfileReducer from "./containers/CreateProfile/reducer";

const reducers = combineReducers({
	loginPage: loginPageReducer,
	createProfile: createProfileReducer,
});

const store = createStore(
	reducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

import "./App.css";
import LoginPage from "./containers/LoginPage/index";
import ProfilePage from "./containers/ProfilePage/index";
import { useSelector } from "react-redux";
import CreateProfile from "./containers/CreateProfile/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	const { isLoggedIn } = useSelector((state) => state.loginPage);
	const { isProfileCreated } = useSelector((state) => state.createProfile);
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route exact path="/">
						<LoginPage />
					</Route>

					{isLoggedIn && (
						<Route path="/create-profile">
							<CreateProfile />
						</Route>
					)}

					{isProfileCreated && (
						<Route path="/profile">
							<ProfilePage />
						</Route>
					)}
				</Switch>
			</div>
		</Router>
	);
}

export default App;

// signup page (signup btn) ---> Create a profile Page (make a profile btn)---> Profile Page (logout Btn)

// if (userdetails) = enable loginbtn @auth
// make a profile page : write bio, set up profile photo and background img
// show the Profile and logout button.

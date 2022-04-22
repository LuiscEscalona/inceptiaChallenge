import { Login, Reports } from "./pages";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { PrivateRoute } from "./components";
import { isEmpty } from "lodash";

export default function App() {
	const { profileData } = useSelector((store) => store.user);
	const isAuthenticated = !isEmpty(profileData);
	return (
		<div className="app">
			<Switch>
				<PrivateRoute
					isAuthenticated={isAuthenticated}
					path="/reports"
					component={Reports}
				/>
				<Route path="/">
					<Login />
				</Route>
			</Switch>
		</div>
	);
}

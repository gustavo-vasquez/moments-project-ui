import React, {Component} from 'react';
import {Routes, Route} from "react-router-dom";
import Home from 'components/Home';
import {Login} from 'components/authentication/Login';
import Register from 'components/authentication/Register';
import {Dashboard} from 'components/profile/Dashboard';
import Error404 from 'components/error/Error404';

class Layout extends Component {
	render() {
		return (
			<Routes>
				<Route exact path="/" element={<Home/>}>
					<Route path="/auth/signin" element={<Login/>}/>
					<Route path="/auth/signup" element={<Register/>}/>
				</Route>
				<Route path="/profile/dashboard" element={<Dashboard/>}/>
				<Route path="*" element={<Error404/>}/>
			</Routes>
		);
	}
}

export default Layout;
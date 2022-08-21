import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';
import {Search} from 'components/Search';

class Home extends Component {
	render() {
		return (
			<div className="anonymous-layout">
    			<h1 className="display-1">M<i className="bi bi-camera-fill"></i>ments</h1>
    			<p>Comparte momentos de tu vida cotidiana con gente de todo el mundo</p>
    			<Search/>
				<div className="pt-4 pb-3"><Link to="/auth/signup">Registrarme</Link></div>
				<div className="p-2">¿Ya tienes cuenta?, <Link to="auth/signin">Identificarme</Link></div>
				<Outlet/>
			</div>
		)
	}
}

export default Home;
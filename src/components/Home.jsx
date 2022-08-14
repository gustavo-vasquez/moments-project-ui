import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';

class Home extends Component {
	render() {
		return (
			<div className="anonymous-layout">
    			<h1 className="display-1">M<i className="bi bi-camera-fill"></i>ments</h1>
    			<p>Comparte momentos de tu vida cotidiana con gente de todo el mundo</p>
    			<div className="input-group mb-3">
					<input type="text" className="form-control" placeholder="Busca personas" aria-label="Buscar por nombre de usuario" autoFocus/>
					<button type="button" id="search_button"><i className="bi bi-search"></i></button>
				</div>
				<div className="p-3"><Link to="/auth/signup">Registrarme</Link></div>
				<div className="p-2">¿Ya tienes cuenta?, <Link to="auth/signin">Identificarme</Link></div>
				<Outlet/>
			</div>
		)
	}
}

export default Home;
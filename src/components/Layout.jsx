import React, { Component } from 'react';

class Layout extends Component {
	render() {
		return (
			<div className="anonymous-layout">
    			<h1 className="display-1">M<i className="bi bi-camera-fill"></i>ments</h1>
    			<div className="input-group mb-3">
					<input type="text" className="form-control" placeholder="Buscar" aria-label="Buscar por nombre de usuario" autoFocus/>
					<button type="button" id="search_button"><i className="bi bi-search"></i></button>
				</div>
				<div className="p-3"><a href="/signup">Registrarme</a></div>
				<div className="p-2">¿Ya tienes cuenta?, <a href="/signin">Identificarme</a></div>
			</div>
		)
	}
}

export default Layout;
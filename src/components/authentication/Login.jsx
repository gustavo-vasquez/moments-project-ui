import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
	render() {
		return (
			<div id="login_wrapper" className="card">
				<div className="card-body">
			    	<form>
			    		<legend>Accede a tu cuenta</legend><hr/>
			    		<div className="mb-3">
			    			<input type="text" className="form-control" placeholder="Usuario o correo electrónico" autoFocus/>
			    		</div>
			    		<div className="mb-3">
			    			<input type="text" className="form-control" placeholder="Contraseña"/>
			    		</div>
			    		<div className="mb-3">
			    			<Link to="/auth/forgottenpassword">¿Olvidaste tu contraseña?</Link>
			    		</div>
			    		<button type="submit" className="btn btn-primary">Ingresar</button>
			    	</form>
				</div>
			</div>
		);
	}
}

export default Login;
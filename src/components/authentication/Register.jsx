import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'components/helpers/withRouter';

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = { didMount: false };
	}

	componentDidMount() {
		document.addEventListener("keydown", this.goBack, false);
		document.addEventListener("click", this.goBack, false);
	}

	goBack = (event) => {
		this.setState({didMount: true});
		
		if(this.state.didMount && (event.key === 'Escape' || !event.target.closest('#authentication_wrapper')))
			this.props.navigate(-1);
	}

	componentWillUnmount() {
		document.removeEventListener("keydown", this.goBack, false);
		document.removeEventListener("click", this.goBack, false);
	}

	render() {
		return (
			<div id="authentication_wrapper" className="card">
				<div className="card-body">
			    	<form>
			    		<legend>Únete y empieza a compartir</legend><hr/>
			    		<div className="mb-3">
			    			<input type="text" className="form-control" placeholder="Nombre de usuario" autoFocus/>
			    		</div>
			    		<div className="mb-3">
			    			<input type="text" className="form-control" placeholder="Correo electrónico"/>
			    		</div>
			    		<div className="mb-3">
			    			<input type="text" className="form-control" placeholder="Contraseña"/>
			    		</div>
			    		<div className="mb-3">
			    			<input type="text" className="form-control" placeholder="Repetir contraseña"/>
			    		</div>
			    		<div className="mb-3 form-check text-start">
					    	<input type="checkbox" className="form-check-input" id="terms_and_conditions"/>
					    	<label className="form-check-label" htmlFor="terms_and_conditions">Acepto los <Link to="/auth/terms">términos y condiciones</Link>.</label>
					  	</div>
			    		<button type="submit" className="btn btn-primary">Crea tu cuenta</button>
			    	</form>
				</div>
			</div>
		);
	}
}

export default withRouter(Register);
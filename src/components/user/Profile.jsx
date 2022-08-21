import React from 'react';
import {useLocation, Link} from 'react-router-dom';
import {Search} from 'components/Search';

export const Profile = (props) => {
	const location = useLocation();
	let {username, email, profilePicture} = location.state;
	
	return (
		<div>
			<nav className="navbar navbar-expand-md">
			  <div className="container-fluid">
			    <Link className="navbar-brand" to="/">M<i className="bi bi-camera-fill"></i>ments</Link>
			    <div className="collapse navbar-collapse" id="navbarSupportedContent">
			      <div className="d-flex mx-auto">
			        <Search/>
			      </div>
			      <span className="navbar-text nav-text-username">{username}</span>
			      <ul className="navbar-nav">
			        <li className="nav-item">
			          <Link className="nav-link" to="/user/profile" title={email}><img className="img-fluid nav-profile-picture" src={profilePicture} alt="profile_picture"/></Link>
			        </li>
			        <li className="nav-item">
			          <Link className="nav-link" to="/user/settings" title="Configuración"><i className="bi bi-gear-fill"></i></Link>
			        </li>
			        <li className="nav-item">
			          <Link className="nav-link" to="/user/logout" title="Salir"><i className="bi bi-box-arrow-in-right"></i></Link>
			        </li>
			      </ul>
			    </div>
			  </div>
			</nav>
			<div className="row">
				<div className="col-12 col-md-4 user-information">
					<img className="img-fluid" src={profilePicture} alt="profile_picture"/>
					<h4><b>Cosme Fulanito</b></h4>
					<h6 className="text-muted">@cosme_fulanito</h6>
					<div className="statistics-wrapper">
						<div>
							<span className="d-block">100.9K</span>
							<span>siguiendo</span>
						</div>
						<div>
							<span className="d-block">100.9K</span>
							<span>publicaciones</span>
						</div>
						<div>
							<span className="d-block">100.9K</span>
							<span>seguidores</span>
						</div>
					</div>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the.</p>
					<Link to="/" className="d-block">https://www.google.com.ar</Link>
					<Link to="/" className="d-block">https://www.google.com.ar</Link>
					<Link to="/" className="d-block">https://www.google.com.ar</Link>
					<Link to="/" className="d-block">https://www.google.com.ar</Link>
				</div>
				<div className="col-12 col-md-8"></div>
			</div>
			{/*<h1>Datos obtenidos:</h1>
			<p>Access token: {location.state.accessToken}</p>
			<p>Refresh token: {location.state.refreshToken}</p>*/}
		</div>
	);
}
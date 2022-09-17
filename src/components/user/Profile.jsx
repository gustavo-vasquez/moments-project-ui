import React from 'react';
import {useLocation, Link} from 'react-router-dom';
import {Search} from 'components/Search';

export const Profile = (props) => {
	const location = useLocation();
	let {username, email, profilePicture} = location.state;

	function thumbnail_loop() {
		let thumbs = [];
		for(let i=0;i<16;i++) {
			thumbs.push(<div className='col-md-3' key={i}>
			<img className='img-fluid' src='https://dummyimage.com/600x400/000/fff' alt='post_thumbnail'/>
		</div>);
		}
		return thumbs;
	}
	
	return (
		<div>
			<nav className="navbar navbar-expand-md">
			  <div className="container-fluid">
			    <Link className="navbar-brand" to="/">M<i className="bi bi-camera-fill"></i>ments</Link>
			    <div className="collapse navbar-collapse" id="navbarSupportedContent">
			      <div className="d-flex mx-auto">
			        <Search/>
			      </div>
			      <span className="nav-text-username">{username}</span>
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
				<div className="col-12 col-md-8">
					<ul className="nav nav-pills justify-content-center" id="pills-tab" role="tablist">
						<li className="nav-item" role="presentation">
							<button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Fotos y videos</button>
						</li>
						<li className="nav-item" role="presentation">
							<button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Fotos</button>
						</li>
						<li className="nav-item" role="presentation">
							<button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Videos</button>
						</li>
						<li className="nav-item" role="presentation">
							<button className="nav-link" id="pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled" aria-selected="false" disabled>Disabled</button>
						</li>
					</ul>
					<div className="tab-content" id="pills-tabContent">
						<div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
							<div className='row post-thumbnails'>
								{thumbnail_loop()}
							</div>
						</div>
						<div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">Coming soon...</div>
						<div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex="0">Coming soon...</div>
						<div className="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab" tabIndex="0">...</div>
					</div>
				</div>
			</div>
			{/*<h1>Datos obtenidos:</h1>
			<p>Access token: {location.state.accessToken}</p>
			<p>Refresh token: {location.state.refreshToken}</p>*/}
		</div>
	);
}
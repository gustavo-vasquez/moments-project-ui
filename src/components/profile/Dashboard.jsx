import React from 'react';
import {useLocation} from 'react-router-dom';

export const Dashboard = (props) => {
	const location = useLocation();
	
	return (
		<div>
			<h1>Datos obtenidos:</h1>
			<p>Access token: {location.state.accessToken}</p>
			<p>Refresh token: {location.state.refreshToken}</p>
		</div>
	);
}
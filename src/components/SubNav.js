import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const SubNav = (props) => {
	return(
		<Link to={props.page}></Link>
	)
}

export default SubNav;
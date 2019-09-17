import React from 'react';
import Nav from './Nav';

const NavWrapper = ({ menu }) => {
	return (
		<header>
			<Nav menu={menu} />
		</header>
	)
}

export default NavWrapper;
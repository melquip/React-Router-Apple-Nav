import React from 'react';
import { NavLink } from 'react-router-dom';
import SubNav from './SubNav';

const Nav = ({ menu }) => {
	return (
		<nav>
			<ul>
				{menu.map(page => (
					<li key={page.id}>
						<NavLink to={page.url} key={page.url} activeClassName="active">
							{page.img ? <img src={page.img} alt={page.title} /> : page.title}
						</NavLink>
						{page.submenu ? <SubNav submenu={page.submenu} /> : null}
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Nav;
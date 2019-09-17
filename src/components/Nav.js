import React from 'react';
import { Link } from 'react-router-dom';
import SubNav from './SubNav';

const Nav = ({ menu }) => {
	return (
		<nav>
			<ul>
				{menu.map(page => (
					<li>
						<Link to={page.url} key={page.url}>{page.name}</Link>
						<SubNav />
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Nav;
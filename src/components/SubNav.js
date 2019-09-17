import React from 'react';
import { Link } from 'react-router-dom';

const SubNav = ({ submenu }) => {
	return (
		<div className="submenu">
		{
			submenu.map(subm => (
				<Link key={subm.title} to={'/' + subm.title.toLowerCase()}>
					<img src={subm.img} alt={subm.title} />
					<span>{subm.title}</span>
				</Link>
			))
		}
		</div>
	);
}

export default SubNav;
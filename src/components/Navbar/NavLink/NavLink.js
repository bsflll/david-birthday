import React from "react";

const NavLink = ({ link, hide, children }) => {
	return (
		<a href={link} onClick={hide}>
			{children}
		</a>
	);
};

export default NavLink;

import React, { useState } from 'react';

import './NavItem.css';

import IconArrowDown from '../../assets/icon-arrow-down.svg';

const NavItem = props => {
	const [open, setOpen] = useState(false);

	const onClickHandler = () => {
		setOpen(!open);
	};

	return (
		<>
			<li
				className='navbar__item'
				onClick={onClickHandler}
			>
				{props.item}
				{props.isDropdown ? <img src={IconArrowDown} /> : ''}
			</li>
			{open && props.children}
		</>
	);
};

export default NavItem;

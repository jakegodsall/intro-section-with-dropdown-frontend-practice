import React, { useState } from 'react';

import './Navbar.css';

import SnapLogo from '../../assets/logo.svg';
import IconArrowDown from '../../assets/icon-arrow-down.svg';
import IconPlanning from '../../assets/icon-planning.svg';
import IconCalendar from '../../assets/icon-calendar.svg';
import IconReminders from '../../assets/icon-reminders.svg';
import IconTodo from '../../assets/icon-todo.svg';
import NavItem from '../NavItem/NavItem';
import Dropdown from '../Dropdown/Dropdown';
import DropdownItem from '../DropdownItem/DropdownItem';

const Navbar = () => {
	return (
		<div className='navbar__container'>
			<img
				src={SnapLogo}
				alt=''
			/>
			<ul className='navbar__list'>
				<NavItem
					item='Features'
					isDropdown={true}
				>
					<Dropdown>
						<DropdownItem
							image={IconTodo}
							alt='to do'
							text='Todo List'
						/>
						<DropdownItem
							image={IconCalendar}
							alt='calendar'
							text='Calendar'
						/>
						<DropdownItem
							image={IconReminders}
							alt='reminders'
							text='Reminders'
						/>
						<DropdownItem
							image={IconPlanning}
							alt='planning'
							text='Planning'
						/>
					</Dropdown>
				</NavItem>
				<NavItem
					item='Company'
					isDropdown={true}
				>
					<Dropdown>
						<DropdownItem text='History' />
						<DropdownItem text='Our Team' />
						<DropdownItem text='Blog' />
					</Dropdown>
				</NavItem>
				<NavItem item='Careers' />
				<NavItem item='About' />
			</ul>
			<div className='navbar__account-section'>
				<div className='navbar__login'>Login</div>
				<div className='navbar__register'>Register</div>
			</div>
		</div>
	);
};

export default Navbar;

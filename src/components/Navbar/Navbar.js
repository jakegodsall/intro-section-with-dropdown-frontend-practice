import React, { useState } from 'react';

import './Navbar.css';

import SnapLogo from '../../assets/logo.svg';
import IconArrowDown from '../../assets/icon-arrow-down.svg';
import IconPlanning from '../../assets/icon-planning.svg';
import IconCalendar from '../../assets/icon-calendar.svg';
import IconReminders from '../../assets/icon-reminders.svg';
import IconTodo from '../../assets/icon-todo.svg';

const Navbar = () => {
    const dropdownHandler = (event) => {
        const dropdownClass = event.target.firstChild.textContent.toLowerCase();
    };

    return (
        <div className='navbar__container'>
            <img src={SnapLogo} alt='' />
            <div className='navbar__list'>
                <div className='navbar__item' onClick={dropdownHandler}>
                    Features
                    <img
                        className='navbar__arrow'
                        src={IconArrowDown}
                        alt='Navigation Item'
                    />
                    <div className='navbar__dropdown features'>
                        <div className='navbar__dropdown-item'>
                            <img src={IconTodo} alt='' />
                            Todo List
                        </div>
                        <div className='navbar__dropdown-item'>
                            <img src={IconCalendar} alt='' />
                            Calendar
                        </div>
                        <div className='navbar__dropdown-item'>
                            <img src={IconReminders} alt='' />
                            Reminders
                        </div>
                        <div className='navbar__dropdown-item'>
                            <img src={IconPlanning} alt='' />
                            Planning
                        </div>
                    </div>
                </div>
                <div className='navbar__item' onClick={dropdownHandler}>
                    Company
                    <img
                        className='navbar__arrow'
                        src={IconArrowDown}
                        alt='Navigation Item'
                    />
                    <div className='navbar__dropdown company'>
                        <div className='navbar__dropdown-item'>History</div>
                        <div className='navbar__dropdown-item'>Our Team</div>
                        <div className='navbar__dropdown-item'>Blog</div>
                    </div>
                </div>
                <div className='navbar__item'>Careers</div>
                <div className='navbar__item'>About</div>
            </div>
            <div className='navbar__account-section'>
                <div className='navbar__login'>Login</div>
                <div className='navbar__register'>Register</div>
            </div>
        </div>
    );
};

export default Navbar;

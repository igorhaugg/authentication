import React from 'react';
import { pushRotate as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';

import ListImage from '../images/list.png';
import HelpImage from '../images/help.png';

import './SlideMenu.css';

const SlideMenu = () => {
  return (
    <Menu menuClassName={'slide-menu'}>
      <NavLink
        to="/dashboard"
        exact
        activeClassName="sidebar__active"
        className="sidebar__item"
      >
        <li>
          <img src={ListImage} alt="Dashboard" className="sidebar__icon" />
          <span>Dashboard</span>
        </li>
      </NavLink>
      <NavLink
        to="/dashboard/item1"
        activeClassName="sidebar__active"
        className="sidebar__item"
      >
        <li>
          <img src={ListImage} alt="Item" className="sidebar__icon" />
          <span>Item 1</span>
        </li>
      </NavLink>
      <NavLink
        to="/dashboard/item2"
        activeClassName="sidebar__active"
        className="sidebar__item"
      >
        <li>
          <img src={ListImage} alt="Item" className="sidebar__icon" />
          <span>Item 2</span>
        </li>
      </NavLink>
      <NavLink
        to="/dashboard/item3"
        activeClassName="sidebar__active"
        className="sidebar__item"
      >
        <li>
          <img src={ListImage} alt="Item" className="sidebar__icon" />
          <span>Item 3</span>
        </li>
      </NavLink>
      <NavLink
        to="/dashboard/item4"
        activeClassName="sidebar__active"
        className="sidebar__item"
      >
        <li>
          <img src={ListImage} alt="Item" className="sidebar__icon" />
          <span>Item 4</span>
        </li>
      </NavLink>
      <NavLink to="/dashboard/help" className="sidebar__item">
        <li>
          <img src={HelpImage} alt="Help" className="sidebar__icon" />{' '}
          <span>Help</span>
        </li>
      </NavLink>
    </Menu>
  );
};

export default SlideMenu;

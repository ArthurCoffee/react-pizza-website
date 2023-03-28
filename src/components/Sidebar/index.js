import React from 'react';
import { FaPizzaSlice } from 'react-icons/fa';
import { FaIceCream } from "react-icons/fa";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';


const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon> 
      <SidebarMenu>  
        <SidebarLink to='/productData'><FaPizzaSlice />&nbsp;&nbsp; &nbsp;Pizzas</SidebarLink>
        <SidebarLink to='/'><FaIceCream />&nbsp;&nbsp; &nbsp;Desserts</SidebarLink>
        <SidebarLink to='/'>Full Menu</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to='/'>Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;

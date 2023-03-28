import React, { useState } from 'react';
import Modal from '../Modal';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import "../Modal.css";

import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn
} from './HeroElements';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

const [openModal, setOpenModal] = useState(false);


  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>Greatest Pizza Ever</HeroH1>
          <HeroP>Ready in 60 seconds</HeroP>
          <div className='App'>
          <HeroBtn className="openModalBtn" onClick={() => {setOpenModal(true)}}>Place Order</HeroBtn>
          {openModal && <Modal closeModal={setOpenModal} />}
          </div>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;

// src/components/Header.tsx
import React from 'react'; 
// import Image from 'next/image';
import { HeaderContainer, Logo } from '../header/styles';
import logoIbpv from '../../public/logo-ibpv.png'

const Header: React.FC = () => {
  return (
    <HeaderContainer> 
      {/* <Logo src={logoIbpv} alt="Logo IBPV" /> */}
      <h1>Gerenciamento de Usuários</h1> 
    </HeaderContainer>
  );
};

export default Header;

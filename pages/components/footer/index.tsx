// src/components/Footer.tsx
import React from 'react';  
import { FooterContainer } from '../footer/styles';  
import { Logo } from '../footer/styles';
import logoIbpv from '../../public/logo ibpv branco.png'

const Footer: React.FC = () => {
  return (
    <FooterContainer>  
      <Logo src={logoIbpv} alt="Logo IBPV" />
      <div className="footer-content">
        {/* <p>© 2024 Instituto Pedra Vida</p>  */}
      </div>
    </FooterContainer>
  );
};

export default Footer;

// src/components/Footer.tsx
import React from 'react';  
import { FooterContainer } from './styles';  
import { Logo } from './styles';
import logoIbpv from 'src/public/logo ibpv branco.png'

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

import React from 'react';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className='footerLine' />
      <p>ⓒ {year} Created by Joyjet Digital Space Agency</p>
    </footer>
  );
}

export default Footer;

import React from 'react';

function StickyBar() {
  window.onscroll = function addClass() {
    if (window.scrollY > 662) {
      document.getElementById('stickyBar').classList.add('stickyBarFixed');
    } else if (window.scrollY <= 662) {
      document.getElementById('stickyBar').classList.remove('stickyBarFixed');
    }
  };

  return (
    <div id='stickyBar' className='stickyBar'>
      <img src='/logo.png' alt='Joyjet Logo' />

      <nav>
        <ul>
          <li>
            <a href='#blog'>Blog</a>
          </li>
          <li>
            <a href='#popular'>Popular</a>
          </li>
          <li>
            <a href='#archive'>Archive</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default StickyBar;

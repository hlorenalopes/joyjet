import React from 'react';

function Intro() {
  return (
    <div>
      <main className='intro container-fluid'>
        <div className='header container-fluid'>
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
        <div className='space'>
          <h1>
            SPACE<span>.</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            molestie elit at lacus…
          </p>
          <button type='button' className='btn btn-primary'>
            click
          </button>
        </div>
      </main>
    </div>
  );
}

export default Intro;

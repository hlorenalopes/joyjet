import React from 'react';

function Blog() {
  return (
    <section className='container-fluid blog'>
      <div id='cardsContainer' className='row'>
        <button>
          <img src='/arrow-left.svg' alt='Arrow Left' />
        </button>
        <div className='cardBox col'>
          <div className='cardImg cardImg1' />
          <div className='cardText'>
            <h1>International Space Station</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              luctus aliquet sapien….
            </p>
          </div>
        </div>

        <div className='cardBox cardBoxHidden col'>
          <div className='cardImg cardImg2' />
          <div className='cardText'>
            <h1>My capsule</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              luctus aliquet sapien….
            </p>
          </div>
        </div>

        <div className='cardBox cardBoxHidden col'>
          <div className='cardImg cardImg3' />
          <div className='cardText'>
            <h1>My moon</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              luctus aliquet sapien….
            </p>
          </div>
        </div>
        <button>
          <img src='/arrow-right.svg' alt='Arrow Left' />
        </button>
      </div>

      <div className='circles'>
        <div className='firstCircle' />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </section>
  );
}

export default Blog;

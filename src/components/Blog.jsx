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
            <h1>Card title</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              luctus aliquet sapien….
            </p>
          </div>
        </div>

        <div className='cardBox col'>
          <div className='cardImg cardImg1' />
          <div className='cardText'>
            <h1>Card title</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              luctus aliquet sapien….
            </p>
          </div>
        </div>

        <div className='cardBox col'>
          <div className='cardImg cardImg1' />
          <div className='cardText'>
            <h1>Card title</h1>
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
    </section>
  );
}

export default Blog;

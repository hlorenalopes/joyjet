import React from 'react';
import Intro from './Intro';
import Trending from './Trending';
import StickyBar from './StrickyBar';
import Blog from './Blog';
import About from './About';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Intro />
      <Trending />
      <StickyBar />
      <Blog />
      <About />
      <Footer />
    </div>
  );
}

export default App;

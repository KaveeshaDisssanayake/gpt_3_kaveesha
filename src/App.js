import React from 'react'



import {Blog , Features , Footer , Header , Posibility , whatGPT3} from './containers';
import {CTA, Brand , Navbar} from './components';
import './App.css';

const App = () => {
  return (
    <div>
        <div className='App'>
          <div className='gradient__bg'>
            <Navbar/>
            <Header/>

          </div>
          <Brand/>
          <whatGPT3/>
          <Features/>
          <Posibility/>
          <CTA/>
          <Blog/>
          <Footer/>


        </div>
    </div>
  )
}

export default App
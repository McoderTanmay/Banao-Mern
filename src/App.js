import { useState,useEffect } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import AppNav from './components/appNav/AppNav';
import Cards from './components/cards/Card';
import Nav from './components/navbar/Nav';
import Signup from './components/popup/Signup';
import img1 from "./static/cards/1.png";
import img2 from "./static/cards/2.png";
import profile1 from "./static/profile/1.png";
import profile2 from "./static/profile/2.png";
import Filter from './components/appNav/AppFilter';

function App() {
  const [createAc, setCreateAc] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 960);

  const createPageHandeler = () => {
    setCreateAc(true);
  }

  const crossPage = () => {
    setCreateAc(false);
  }

  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 960);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <>
      <Nav onCreateAC={createPageHandeler}></Nav>
      <div className="App">
        <div className="rectangle">
          <h2>Computer Engineering</h2>
          <p>142,765 Computer Engineers follow this</p>
        </div>
      </div>
      {isDesktop ? <AppNav></AppNav>:<Filter></Filter>}
      <div className="content">
        <Cards bgImg={img1} type={"Article"} profile={profile1} name={"Sarthak Kamra"}></Cards>
        <Cards bgImg={img2} type={"Education"} profile={profile2} name={"Sarah West"}></Cards>
      </div>
      {createAc && <Signup onCancel={crossPage}></Signup>}
    </>
  );

}

export default App;
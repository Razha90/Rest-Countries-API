import './App.css';
import PagesDetail from './Pages/pageDetail';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {useState , useEffect} from 'react';
import flagData from './data.json';
import moon from './Pages/icons/moon.png';
import sun from './Pages/icons/sun.png';
import glass from './Pages/icons/magnifying-glass.png';
import glassBlack from './Pages/icons/magnifying-glass-black.png';
import HomePage from './Pages/homePage';

function App() {
  const [data, setData] = useState([]);
  const [background, setBackGround] = useState(true);

  useEffect(() => {
    if (data !== null) {setData(flagData)};
  }, []);
 
  const elementBack = background === true ? 'hsl(207, 26%, 17%)' : 'hsl(0, 0%, 98%)';
  const textColor = background === true ?'hsl(0, 0%, 100%)' :'hsl(200, 15%, 8%)';
  const modeBackground = background === true ? 'VeryDarkBlue' : 'VeryLightGray';
  const glasses = background === true ? glass : glassBlack;
  let filterRegion = document.getElementsByClassName('region-choose')[0];


  function searchText(value) {
    return flagData.filter((el) => {
      return el.name.common.toLowerCase().indexOf(value) !== -1;
    })
  }

  function africaFilter(value) {
    return flagData.filter((el) => {
      return el.region.toLowerCase().indexOf(value) !== -1;
    })
  }
  

  return (
    <div className="App">
      <Router>
      <div className={`header ${modeBackground}`}>
        <div>Where in the world?</div>
        <div onClick={() => background === true ? setBackGround(false) : setBackGround(true)} className='select-none'><img src={background === true ? moon : sun}/> <span>{background === true ? 'Dark' : 'Light'}</span> <span>Mode</span></div>
      </div>
        <Routes>
          
            <Route exact path='/' element={
                <>
                  <div className='seacrh'>
                    <div className={`${modeBackground} search-input`}><img src={glasses}/> <input type='text' onChange={(e) => setData(searchText(e.target.value.toLowerCase()))} className={`${modeBackground}`} placeholder='Search for a country..'/></div>
                    <div className='region select-none'>
                      <div className={`${modeBackground} region-box`} onClick={() => filterRegion.classList.toggle('babi1')}><p>Filter by Region </p> <p>&#187;</p></div>
                      <div className={`${modeBackground} region-choose`}>
                        <div onClick={() => setData(africaFilter('africa'))}>Africa</div>
                        <div onClick={() => setData(africaFilter('america'))}>America</div>
                        <div onClick={() => setData(africaFilter('asia'))}>Asia</div>
                        <div onClick={() => setData(africaFilter('europe'))}>Europe</div>
                        <div onClick={() => setData(africaFilter('oceania'))}>Oceania</div>
                        <div onClick={() => setData(flagData)}>None Filter</div>
                      </div>
                    </div>
                  </div>
                
                <HomePage 
                data={data}
                modeBackground={modeBackground}
                elementBlack={elementBack}
                textColor={textColor}
                background={background}
                />
                </>
            }
            /> 
          
          <Route path='/pagedetail' element={<PagesDetail 
          background={background}
          elementBlack={elementBack}
          textColor={textColor}
          modeBackground={modeBackground}
          />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import leftArrow from './icons/left-arrow.png';
import leftArrowWhite from './icons/left-arrow-white.png';
import Detail from './detail';
import { useLocation } from 'react-router-dom';
import { useState,useEffect } from 'react';
import dataOff from '../data.json';
import { useNavigate } from 'react-router-dom';
import './style/detailStyle.css';
      
const PagesDetail = ({
        background,
        elementBlack,
        textColor,
        modeBackground,
    }) => {
    const [data , setData] = useState([]);
    const location = useLocation();
    const dataOn = location.state;

    function chooseCountry(value) { 
        return dataOff.map(e => e).filter(f => f.name.common === value[0]); 
    }

    useEffect(() => {
        const myData = () => {
            let why = dataOff.map(e => e).filter(f => f.name.common === dataOn.name);
            setData(why);
        } 
        if (data.length === 0) {
            myData();
        }
    }, [dataOn, data]);
      
    useEffect(() => {
        let cok = data.map(e=> e.borders);
        for (let i = 0; i < cok.length; i++) {
            const boy = dataOff.filter(ef => ef.cca3 === cok[i]).map(e => e.name.common);
            console.log('juju', boy)
        }
    },[])
      
    const myselection = (arr) => {
        return dataOff.filter(ef => ef.cca3 === arr).map(e => e.name.common);
    };
      
    const myNavigate = useNavigate();
    const backNavigate = () => {
        myNavigate('/')
    } 

    useEffect(() => {
        document.querySelector('body').style.backgroundColor = elementBlack;
        document.querySelector('body').style.color = textColor;
        document.querySelector('a').style.color = textColor;
    } , [background]);

    return (
        <div className='container-detail'>
            <a onClick={() => backNavigate()} className='back-button select-none'><div className={modeBackground}><img src={background === true ? leftArrowWhite : leftArrow} alt='left arrow'/><p>Back</p></div></a>
                {
                    data.map(e => {
                        return <Detail
                        key={e.area}
                        data={e} 
                        setData={setData}
                        modeBackground={modeBackground}
                        myselection={myselection}
                        chooseCountry={chooseCountry}
                        />
                    })
                }
        </div>
    )
}
      
export default PagesDetail;
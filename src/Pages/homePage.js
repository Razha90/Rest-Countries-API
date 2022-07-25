import Home from "./home";
import { useEffect } from "react";
function HomePage({
    data,
    selection,
    modeBackground,
    elementBlack,
    textColor,
    background,
}) {
    useEffect(() => {
        document.querySelector('body').style.backgroundColor = elementBlack;
        document.querySelector('body').style.color = textColor;
        document.querySelector('input').style.color = textColor;
        } , [background]);

    const notFound = data.length === 0;
    return (
        <div className='homeContainer'>
                  {
                    data.map(baby => <Home 
                      data={baby}
                      selection={selection}
                      modeBackground={modeBackground}
                      />)
                  }
                  {
                    notFound &&
                    <h1 style={{opacity:'0.5'}}>Not Found Country 404</h1>
                  }
        </div>
    )
}

export default HomePage;
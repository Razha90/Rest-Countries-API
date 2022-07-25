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

    return (
        <div className='homeContainer'>
                  {
                    data.map(baby => <Home 
                      data={baby}
                      selection={selection}
                      modeBackground={modeBackground}
                      />)
                  }
        </div>
    )
}

export default HomePage;
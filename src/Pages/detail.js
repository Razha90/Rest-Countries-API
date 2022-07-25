function Detail({
    data,
    setData,
    modeBackground,
    myselection,
    chooseCountry,
}) {
    const currencies = data.currencies[Object.keys(data.currencies)[0]].name;
    const nativeName = data.name.nativeName[Object.keys(data.name.nativeName)[0]].common;
    const languages = Object.keys(data.languages).map(e => data.languages[e]).join(' , ');
    const styleFlex = {
        display:'flex',
        flexDirection:'column',
        gap:'5px'
    }
    const unBorder = data.borders === undefined;
    const myBorder = data.borders !== undefined;

    return (
        <div className='detailPage' key={data.area}>
            <div className='detailPage-1'><img src={data.flags.png} alt={data.name.common}/></div>
            <div className='detailPage-1'>
                <div className="detailPage-judul">{data.name.common}</div>
                <div className="detailPage-txt">
                    <div style={styleFlex}>
                        <div>Native Name: <span>{nativeName}</span></div>
                        <div>Population: <span>{data.population}</span></div>
                        <div>Region: <span>{data.region}</span></div>
                        <div>Sub Region: <span>{data.subregion}</span></div>
                        <div>Capital: <span>{data.capital}</span></div>
                    </div>
                    <div style={styleFlex}>
                        <div>Top Level Domain: <span>{data.tld}</span></div>
                        <div>Currencies: <span>{currencies}</span></div>
                        <div>Languages: <span>{languages}</span></div>
                    </div>
                </div>
                <div className='detailPage-borders'>Border Coutries: 
                        {myBorder && data.borders.map(e => { 
                            return <div className={`${modeBackground}`} onClick={() => setData(chooseCountry(myselection(e)))}>{myselection(e)}</div>})
                        }
                        {
                            unBorder && <div>No Border</div>
                        }
                </div>
            </div>

        </div>
    )
}

export default Detail;
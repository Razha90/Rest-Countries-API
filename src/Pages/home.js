import { useNavigate } from "react-router-dom";

const Home = ({
    data,
    modeBackground,
}) => {
    const navigate = useNavigate();
    const aprilMop = async () => {
        navigate('/pagedetail', { state: {name: data.name.common } });
    }
    return (
        <>
            <div className={`${modeBackground} container`}   onClick={() => aprilMop()} key={data.area}>
                    <div className="container-img"><img src={data.flags.png} alt={data.name.common}/></div>
                        <div className="container-txt">
                            <div>{data.name.common}</div>
                            <div>Population: <span>{data.population}</span></div>
                            <div>Region: <span>{data.region}</span></div>
                            <div>Capital: <span>{data.capital}</span>
                        </div> 
                    </div>
            </div>
        </>
    )
}

export default Home;
import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';

const Card = () =>{
    const[data,setData]=useState([]);

    
    useEffect(()=>{
        const fetchData = async() => {
            const response = await fetch("/discos.json")
            const jsonData = await response.json();
            setData(jsonData);
        }
        fetchData();
    },[])

    const getRandomElements = (arr, numElements) => {
        const shuffled = arr.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, numElements);
    }

    const randomData = getRandomElements(data, 20);

    return(
        <>
            <div className="content">
                <div className="content-card">
                    {randomData.map((item) => (
                        <div className="card" key={ item.id}>
                            <Link to={"../Produtos" + item.slug}>
                                <img src={"/imagens/" + item.slug + ".jpg"} alt="Teste" width={100} height={100}></Image>                            
                            </Link>
                            <h2>{ item.album}</h2>
                            <br/>
                            <h3>{item.banda}</h3>
                        </div>
                    ))}                
                </div>
            </div>
        </>
    )
}
export default Card;
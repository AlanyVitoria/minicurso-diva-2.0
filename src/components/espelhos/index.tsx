import './style.css';
import brasil from '../../assets/brasil.jpg';
import cloud from '../../assets/cloud.jpg';
import water from '../../assets/water.jpg';

interface EspelhoProps {
    image: string;
    title: string;
    price: string;
}

const Espelho = (props:EspelhoProps) => {
    return (
        <div className="espelho-box">
            <img className="image" src={props.image} alt="Espelho no formato do Brasil"/>
            <div className="text">
                <h1>{props.title}</h1>
                <p>{props.price}</p>
            </div>
        </div>
    );
}

export default Espelho;
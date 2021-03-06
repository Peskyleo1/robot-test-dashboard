import React, {useState} from 'react';
import Map from './map.jsx';
import Data from '../assets/data/coordinates.json';

export default (props) => {

    const [Rot, setRot] = useState('');
    Data.rotation = Rot;
    const {data} = props;

    return (
        <div className="inputs">
            <div style={{width: '100%'}}>
                <h2>POSITION</h2>
                <p>x: </p>
                <input value={Data.x}></input>
                <p>y: </p>
                <input value={Data.y}></input>
                <h2>ROTATION</h2>
                <p>deg:</p>
                <input onChange={event => setRot(event.target.value)}></input>
            </div>
        </div>
    )
}
import React from 'react';
import Map from './map.jsx';

export default () => {
    
    return (
        <div className="inputs">
            <div style={{width: '100%'}}>
                <h2>POSITION</h2>
                <p>x: </p>
                <input value={Map.posX}></input>
                <p>y: </p>
                <input value={Map.posY}></input>
                <h2>ROTATION</h2>
                <p>deg:</p>
                <input></input>
            </div>
        </div>
    )
}
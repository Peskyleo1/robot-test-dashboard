import React, { useState } from 'react';
import image from '../assets/img/map.PNG';
import Data from '../assets/data/coordinates.json';

let Coordinates = {
    x: 0,
    y: 0,
    rotation: 0
}



export default (props) => {

    const y = Data.y;
    const x = Data.x;

    const divStyle = {
                backgroundColor: "red",
                width: "10px",
                height: "10px",
                position: "absolute",
                top: y-5+"px",
                left: x-5+"px",
                transform: "rotate("+Data.rotation+"deg)"
    }
    const [inputValue, setInputValue] = React.useState('');

    function onChange() {
        //setInputValue(event.target.value);
    }

    return (
        
        <div className="MapContainer">
                <img src={image} ismap onClick={
                    function getImageCoords(e, img) {
                        var posX = e.nativeEvent.offsetX;
                        var posY = e.nativeEvent.offsetY;
                        //alert("x: " + posX + "\ny: " + posY);
                        Data.x = posX;
                        Data.y = posY;
                        props.onSubmit([posX, posY]);
                        //alert("x: " + Data.x + "\ny: " + Data.y);
                        return {x: posX, y: posY};
                    }

                    //{(e) => console.log(e.clientY - e.target.offsetTop) + console.log(e.clientX - e.target.offsetLeft)}
                }></img><div style={divStyle}></div>
        </div>
    )
}


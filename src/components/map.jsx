import React, { useState } from 'react';
import image from '../assets/img/map.PNG';

let Coordinates = {
    x: 0,
    y: 0,
    rotation: 0
}



export default () => {

    return (
        <div className="MapContainer">
                <img src={image} ismap onClick={
                    function getImageCoords(e, img) {
                        var posX = e.nativeEvent.offsetX;
                        var posY = e.nativeEvent.offsetY;
                        alert("x: " + posX + "\ny: " + posY);
                        return {x: posX, y: posY};
                    }

                    //{(e) => console.log(e.clientY - e.target.offsetTop) + console.log(e.clientX - e.target.offsetLeft)}
                }></img>
        </div>
    )
}


import React, { useState } from 'react';
import Map from './map.jsx';
import Inputs from './inputs.jsx';

export default () => {

    const [coordinates, setCoordinates] = useState(['','']);

    function onSubmit(formState) {
        setCoordinates(formState);
        //alert('Data: ' + formState);
    }
    return (
        <div className="MapTool">
            <Map onSubmit={onSubmit}></Map>
            <Inputs dataFromParent={coordinates}></Inputs>
        </div>
    )
}
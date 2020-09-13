import React from 'react';
import './SeasonsDisplay.css'

const seasonsConfig = {
    Summer: {
        text : 'Lets hit the Beach ',
        iconName : 'sun'
    },
    Winter : {
        text : 'Burr, its Chilly ',
        iconName : 'snowflake'
    }
};

const getseasons=(lat,month)=>{
    if(month>2 && month<9){
        return (lat >0 ? 'Summer' : 'Winter')
    }else{
        return (lat >0 ? 'Winter' : 'Summer')
    }
}

const SeasonsDisplay=props=>{
    const season = getseasons(props.lat,new Date().getMonth())
    // const text = season === 'Winter' ? 'Burr, its Chilly ' : 'Lets hit the Beach'
    // const iconName = season === 'Winter' ? 'snowflake' : 'sun';
    const { text , iconName } = seasonsConfig[season];

    return(
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    );  
};

export default SeasonsDisplay;
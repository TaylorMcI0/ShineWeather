import React from "react";

const Weather = (props) => {

    const info ={
        city: props.info.city,
        temp: props.info.temp,
        cond: props.info.cond,
        main: props.info.main,
    }

    const color = {
        greyTen: props.color.greyTen,
        greyNine: props.color.greyNine,
        greyEight: props.color.greyEight,
        greyFive: props.color.greyFive,
        greyTwo: props.color.greyTwo,
        greyOne: props.color.greyOne,

        greyHigh1: props.color.greyHigh1,

        thirty: props.color.thirty,
    }

    return <>
        <svg height={props.h} width={props.w} >
            <text className='header' x='50%' y='15%' textAnchor='middle' dominant-baseline='middle' fontSize='7rem' fill={color.greyTwo}>{info.city}</text>
            <circle className='el' cx='50%' cy='50%' r='15rem' strokeWidth='2px' fill={color.greyHigh1} stroke={color.thirty} />
            <text className='temp' x='50%' y='50%' textAnchor='middle' dominant-baseline='middle' fontWeight='bold' fontSize='10rem' fill={color.greyTwo}>{info.temp}</text>
            <text className='header' x='50%' y='90%' textAnchor='middle' dominant-baseline='middle' fontSize='7rem' fill={color.greyTwo}>{info.cond}</text>
        </svg>
    </>

}

export default Weather
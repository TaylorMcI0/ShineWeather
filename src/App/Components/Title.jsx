import React from "react";

const Title = (props) => {

    const color = {
        greyTen: props.color.greyTen,
        greyNine: props.color.greyNine,
        greyEight: props.color.greyEight,
        greyFive: props.color.greyFive,
        greyTwo: props.color.greyTwo,
        greyOne: props.color.greyOne,
    }

    return <>
        <div style={{
            height: '3rem',
            margin: '0rem 1rem',
        }} >
            <header style={{
                fontSize: '3rem',
                color: `${color.greyTwo}`,
            }} >Shine Weather</header>
        </div>
    </>

}

export default Title
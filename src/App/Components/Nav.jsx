import React, { useState } from "react";

const Nav = (props) => {

    //Props
    const ref = props.refNav
    const pg = props.pg

    const [hover, setHover] = useState(false)
    switch(hover) {
        case false:
            var color = {
                greyTen: props.color.greyTen,
                greyNine: props.color.greyNine,
                greyEight: props.color.greyEight,
                greyFive: props.color.greyFive,
                greyTwo: props.color.greyTwo,
                greyOne: props.color.greyOne,
        
                high1: props.color.greyHigh1,
                high2: props.color.greyHigh1,
        
                thirty: props.color.thirty,
                ten: props.color.ten,
            }
        break

        case true:
            var color = {
                greyTen: props.color.greyTen,
                greyNine: props.color.greyNine,
                greyEight: props.color.greyEight,
                greyFive: props.color.greyFive,
                greyTwo: props.color.greyTwo,
                greyOne: props.color.greyOne,
        
                high1: props.color.thirty,
                high2: props.color.ten,
        
                thirty: props.color.thirty,
                ten: props.color.ten,
            }
    }

    return <>
        <div id='nav'>
            <button id='btnPg1' type='button' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={() => ref.current.scrollTo(pg)} style={{
                background: `${color.high1}`,
                border: `1px solid ${color.high2}`,
                boxShadow: `2px 2px 2px ${color.thirty}`,
            }} >
                <svg height='3rem' width='3rem' style={{
                    transform: 'translateY(2px)'
                }} >
                <circle cx='50%' cy='50%' r='1.4rem' fill='transparent' stroke={color.greyTwo} />
                </svg>
            </button>
        </div>
    </>

}

export default Nav
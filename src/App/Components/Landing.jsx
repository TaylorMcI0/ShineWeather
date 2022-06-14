import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import React, { useRef, useState } from 'react';
import Nav from './Nav';
import Title from './Title';
import Weather from './Weather';

const Landing = () => {

    //Set Initial Data
    const h = window.innerHeight
    const w = window.innerWidth

    const api = '5c3719064a54df73b8e20ea80f7726ee'
    const kal = 272.15

    const [place, setPlace] = useState('')
    const [info, setInfo] = useState({
        city: 'Welcome To',
        temp: 'SHINE',
        cond: 'Weather',
        main: '',

        wind: '',

        data: '',
        hue: 2 * ((0 - kal) * -1) + 120, 
    })

    //Fetch Data from Api
    const handleFetch = () => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${api}`)
            .then((response) => response.json())
            .then((data) => setInfo({
                city: data.name + `, ` + data.sys.country,
                temp: Math.round(data.main.temp - kal) + `°c`,
                cond: data.weather[0].description,
                main: data.weather[0].main,

                windSpd: Math.round(((data.wind.speed * (18 / 5)) + Number.EPSILON) * 100) / 100 + ` km/h`,
                windDeg: data.wind.deg,
                windGust: data.wind.gust,

                data: data,
                hue: 3 * ((data.main.temp - kal) * -1) + 120,
            }))
    }

    console.log(info)

    //Page Scroll Ref
    const ref = useRef()

        //Color Change && DarkMode
        const [mode, setMode] = useState('light')
        const toggleMode = () => {
            if (mode === 'light') {
                setMode('dark')
            }
            else {
                setMode('light')
            }
        }
    
        switch(mode) {
            case 'light':
                var color = {
                    greyTen: '#FAFAFA',
                    greyNine: '#E0E0E0',
                    greyEight: '#BDBDBD',
                    greyFive: '#9E9E9E',
                    greyTwo: '#212121',
                    greyOne: '#000000',

                    greyHigh1: '#FAFAFA',

                    thirty: `hsl(${info.hue}, 75%, 75%)`,
                    ten: `hsl(${info.hue}, 50%, 75%)`,
                }
            break;
    
            case 'dark':
                var color = {
                    greyTen: '#000000',
                    greyNine: '#212121',
                    greyEight: '#424242',
                    greyFive: '#9E9E9E',
                    greyTwo: '#E0E0E0',
                    greyOne: '#FAFAFA',

                    greyHigh1: '#424242',

                    thirty: `hsl(${info.hue}, 60%, 50%)`,
                    ten: `hsl(${info.hue}, 75%, 30%)`,
                }
            break
        }

    return <>
        <Parallax pages={3} ref={ref} >
            <ParallaxLayer offset={0} sticky={{ start: 0, end: 2 }} >
                <input id='btnNigh' type='button' onClick={toggleMode} style={{
                    background: `${color.greyHigh1}`,
                }} />
                
                <Title color={color} />

                <form id='form' >
                    {/* Search Input */}
                    <input id='inpt' type='input' onChange={(e) => setPlace(e.target.value)} style={{
                        background: `${color.greyHigh1}`,
                        color: `${color.greyTwo}`,
                    }} />
                    {/* Search Button */}
                    <button id='btnSrch' type='button' onClick={handleFetch} style={{
                        background: `${color.greyHigh1}`,
                    }}>
                        <svg height='3rem' width='3rem' >
                            <text x='50%' y='50%' textAnchor='middle' dominant-baseline='middle' fontSize='1.5rem' fill={color.greyTwo}>srch</text>
                        </svg>
                    </button>
                </form>

                <Nav refNav={ref} color={color} pg={0} />
                <Nav refNav={ref} color={color} pg={1} />
                <Nav refNav={ref} color={color} pg={2} />

            </ParallaxLayer>

            <ParallaxLayer id='pg1' offset={0} style={{background: `${color.greyNine}`}} >
                
                <Weather info={info} color={color} h={h} w={w} />

            </ParallaxLayer>

            <ParallaxLayer id='pg2' offset={1} style={{background: `${color.greyNine}`}} >
                <header>Wind</header>

                <svg height={h}width={w} >
                    <text className='header' x='50%' y='15%' textAnchor='middle' dominant-baseline='middle' fontSize='7rem' fill='black'>{info.windSpd}</text>
                    <circle className='el' cx='50%' cy='50%' r='15rem' fill='transparent' stroke='black' />
                    <text className='temp' x='50%' y='50%' textAnchor='middle' dominant-baseline='middle' fontWeight='bold' fontSize='10rem' fill='black'>{info.windDeg}</text>
                    <text className='header' x='50%' y='90%' textAnchor='middle' dominant-baseline='middle' fontSize='7rem' fill='black'>{info.windGust}</text>
                </svg>
            </ParallaxLayer>

            <ParallaxLayer id='pg3' offset={2} style={{background: `${color.greyNine}`}} >
                <header>3</header>
            </ParallaxLayer>
        </Parallax>
    </>
}

export default Landing
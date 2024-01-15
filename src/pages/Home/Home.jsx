import React from 'react'
import Circle from "../../assets/circle.png"
import Baraka from '../../assets/baraka.png'
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <div className="home__circle">
                <img className='home__img' src={Circle} alt="" />
                <button>Omad shouni online oynash</button>
            </div>
            <div className="home__baraka">
                <img className='home__img' src={Baraka} alt="" />
                <button>Boriga barakani online oynash </button>
            </div>
        </div>
    )
}

export default Home
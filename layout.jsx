import React from 'react'
import Navbar from './src/component/Navbar/Navbar'
import Footer from './src/component/Footer/Footer'

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}

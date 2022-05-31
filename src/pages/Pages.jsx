import React from 'react'
import Home from './Home'
import Genre from './Genre'
import { Route, Routes, useLocation } from 'react-router-dom'
import Searched from './Searched'
import Recipe from './Recipe'
import { AnimatePresence } from 'framer-motion'

function Pages() {

    const location = useLocation();
    return (
        <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/genre/:type" element={<Genre />} />
                <Route path="/searched/:search" element={<Searched />} />
                <Route path="/recipe/:name" element={<Recipe />} />
            </Routes>
        </AnimatePresence>
    )
}

export default Pages
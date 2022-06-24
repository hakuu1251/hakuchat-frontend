import React, { FC } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";

type Props = {}

const AppRouter: FC<Props> = () => {
    return (
       <Routes>

           <Route
               path="/"
               element={<Home />}
           />

       </Routes>
    )
}

export default AppRouter

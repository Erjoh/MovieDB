import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import PopularPage from "./pages/PopularPage";
import Genres from "./pages/Genres";
import TVPage from "./pages/TVPage";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<HomePage />}/>
            <Route path={'/popular'} element={<PopularPage />}/>
            <Route path={'/genres'} element={<Genres />}/>
            <Route path={'/tvs'} element={<TVPage />}/>
        </Routes>
);
};

export default App;

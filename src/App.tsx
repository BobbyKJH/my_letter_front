import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StyledEngineProvider } from '@mui/styled-engine';

import HomePage from "@/page/HomePage";
/** Style */
import AppStyled from "@/App.styled";


const App: React.FC = () => {

  return (
    <StyledEngineProvider injectFirst>
        <BrowserRouter>
          <AppStyled/>

          <Routes>
            <Route path="/" element={<HomePage/>}/>
          </Routes>

        </BrowserRouter>
    </StyledEngineProvider>
  )
}

export default App;

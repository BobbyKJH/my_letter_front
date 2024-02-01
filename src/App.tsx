import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StyledEngineProvider } from '@mui/styled-engine';

import HomePage from "@/page/HomePage";
import WeekPage from "@/page/week/WeekPage";
import YearPage from "@/page/year/YearPage";
import MonthPage from "@/page/month/MonthPage";
/** Style */
import AppStyled from "@/App.styled";


const App: React.FC = () => {

  return (
    <StyledEngineProvider injectFirst>
        <BrowserRouter>
          <AppStyled/>

          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/week" element={<WeekPage/>}/>
            <Route path="/month" element={<MonthPage/>}/>
            <Route path="/year" element={<YearPage/>}/>
          </Routes>

        </BrowserRouter>
    </StyledEngineProvider>
  )
}

export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StyledEngineProvider } from '@mui/styled-engine';

import HomePage from "@/page/HomePage";
import WeekPage from "@/page/week/WeekPage";
import YearPage from "@/page/year/YearPage";
import MonthPage from "@/page/month/MonthPage";
/** Style */
import AppStyled from "@/App.styled";
import AuthRoutes from "./page/router/AuthRouter";


const App: React.FC = () => {

  return (
    <StyledEngineProvider injectFirst>
        <BrowserRouter>
          <AppStyled/>

          <Routes>
            <Route element={<AuthRoutes/>}>
              <Route path="/" element={<HomePage/>}/>
              <Route path="/week" element={<WeekPage/>}/>
              <Route path="/month" element={<MonthPage/>}/>
              <Route path="/year" element={<YearPage/>}/>
            </Route>
          </Routes>

        </BrowserRouter>
    </StyledEngineProvider>
  )
}

export default App;

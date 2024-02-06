import React from 'react';
import { Outlet, Navigate } from "react-router-dom";
/** Components */
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

const AuthRoutes: React.FC = () => {
	return (
		!sessionStorage.getItem("uuid") ?
			<>
				<Header/>

				<Outlet/>

        <Footer/>
			</>
			:
			// @ts-ignore
			<Navigate to={"/"} {...alert("로그인이 필요합니다.")}/>
	)
}

export default AuthRoutes;
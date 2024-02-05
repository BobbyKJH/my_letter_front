import React from 'react';
import { Outlet, Navigate } from "react-router-dom";
/** Components */
import Header from '@/components/common/Header';

const AuthRoutes: React.FC = () => {
	return (
		!sessionStorage.getItem("uuid") ?
			<>
				<Header/>


				<Outlet/>
			</>
			:
			// @ts-ignore
			<Navigate to={"/"} {...alert("로그인이 필요합니다.")}/>
	)
}

export default AuthRoutes;
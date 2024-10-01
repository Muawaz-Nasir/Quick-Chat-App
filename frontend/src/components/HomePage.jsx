import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import MessageContainer from "./MessageContainer";
import { useNavigate } from "react-router-dom";
import cookie from "js-cookie";

const HomePage = () => {
	const [token, setToken] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		// retrieve the token on every render
		const tokenFromCookie = cookie.get("token");
		setToken(tokenFromCookie);

		console.log("Token: ", tokenFromCookie);

		if (!tokenFromCookie) {
			navigate("/login");
		}
	}, [token, navigate]);
	return (
		<div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
			<Sidebar />
			<MessageContainer />
		</div>
	);
};

export default HomePage;

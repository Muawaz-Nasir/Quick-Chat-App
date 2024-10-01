import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messageSlice";

const useGetRealTimeMessage = () => {
	const { socket } = useSelector((store) => store.socket);
	const dispatch = useDispatch();

	useEffect(() => {
		const handleNewMessage = (newMessage) => {
			// Use functional dispatch to get the latest state
			dispatch(setMessages((prevMessages) => [...prevMessages, newMessage]));
		};

		socket?.on("newMessage", handleNewMessage);

		return () => {
			socket?.off("newMessage", handleNewMessage);
		};
	}, [socket, dispatch]);
};

export default useGetRealTimeMessage;

// useEffect(() => {
// 	socket?.on("newMessage", (newMessage) => {
// 		dispatch(setMessages([...messages, newMessage]));
// 	});
// }, [socket, setMessages, messages]);

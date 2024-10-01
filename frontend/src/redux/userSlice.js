import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "user",
	initialState: {
		authUser: null,
		otherUsers: [],
		selectedUser: null,
		onlineUsers: [],
		fullUserList: [],
	},
	reducers: {
		setAuthUser: (state, action) => {
			state.authUser = action.payload;
		},
		setOtherUsers: (state, action) => {
			state.otherUsers = action.payload;
		},
		setSelectedUser: (state, action) => {
			state.selectedUser = action.payload;
		},
		setOnlineUsers: (state, action) => {
			console.log("Setting online users:", action.payload);
			state.onlineUsers = action.payload;
		},
		setFullUserList: (state, action) => {
			state.fullUserList = action.payload;
		},
	},
});

export const {
	setAuthUser,
	setOtherUsers,
	setSelectedUser,
	setOnlineUsers,
	setFullUserList,
} = userSlice.actions;
export default userSlice.reducer;

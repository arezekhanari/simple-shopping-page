import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserBookmarksState {
  bookmarks: boolean[];
}

const initialState: UserBookmarksState = {
  bookmarks: [],
};

const userBookmarksSlice = createSlice({
  name: "userBookmarks",

  initialState,

  reducers: {
    setBookmarks(state, action: PayloadAction<boolean[]>) {
      state.bookmarks = action.payload;
    },
  },
});

export const { setBookmarks } = userBookmarksSlice.actions;

export default userBookmarksSlice.reducer;

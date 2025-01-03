import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userBookmarks from "./features/userBookmarks";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, userBookmarks);

const store = configureStore({
  reducer: {
    userBookmarks: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const isClient = typeof window !== "undefined";

const persistor = isClient && store ? persistStore(store) : null;

export { store, persistor };

// Infer the type of makeStore
export type AppStore = typeof store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState> | null;
export type AppDispatch = typeof store.dispatch;

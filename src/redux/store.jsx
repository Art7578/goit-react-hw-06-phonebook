import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import contactsReducer from "./contacts/contactsReducer";
import { persistStore, 
        persistReducer,
        FLUSH,
        REHYDRATE,
        PAUSE,
        PERSIST,
        PURGE,
        REGISTER,
    } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const contactPersistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter'],
};

export const store = configureStore({
    reducer: {
        contacts: persistReducer(contactPersistConfig, contactsReducer),
    },
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
        logger,
        devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

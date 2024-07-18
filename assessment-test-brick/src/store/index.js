import { createStore, applyMiddleware, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { thunk } from 'redux-thunk';
import searchReducer from './searchReducer';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    search: persistReducer(persistConfig, searchReducer),
});

const store = createStore(rootReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

export { store, persistor };

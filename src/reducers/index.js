import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectedLibraryReducer from './SelectedLibraryReducer';

export default combineReducers({
	libraries: LibraryReducer,
	selectedLibraryId: SelectedLibraryReducer
})
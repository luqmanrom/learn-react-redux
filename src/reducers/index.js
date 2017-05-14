import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectedLibraryReducer from './SelectedLibraryReducer';


// Format of our state
export default combineReducers({
	libraries: LibraryReducer,
	selectedLibraryId: SelectedLibraryReducer
})
import React, { Component } from 'react';
import { connect } from 'react-redux';


class LibraryList extends Component {

	render() {

		console.log(this.props)
		return;
	}
}

// Set the props for the component. Wire up the state and the props
const mapStateToProps = state => {
	//console.log(state);
	return { libraries : state.libraries }; 
}



export default connect(mapStateToProps)(LibraryList); // To get access to the state
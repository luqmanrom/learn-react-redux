import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import ListItem from './ListItem';


class LibraryList extends Component {

	componentWillMount() {

		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => {
				return r1 !== r2;
			}
 		})

 		this.dataSource = ds.cloneWithRows(this.props.libraries);
	}

	renderRow(library) {

		return <ListItem library={library} />
	}

	render() {
  
		return (
			<ListView 
				dataSource={this.dataSource}
				renderRow={this.renderRow}
			/>
		);
	}
}

// Set the props for the component. Wire up the state and the props
const mapStateToProps = state => {
	//console.log(state);
	return { libraries : state.libraries }; 
}



export default connect(mapStateToProps)(LibraryList); // To get access to the state
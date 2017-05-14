import React, { Component } from 'react';
import { CardSection } from './common';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux'; 
import * as actions from '../actions';


class ListItem extends Component {

	render() {

		return (

			// @todo Destructure this.props.library

			<TouchableWithoutFeedback
				onPress={() => this.props.selectLibrary(this.props.library.id)}>

				<View> 
					<CardSection>	
						<Text> {this.props.library.title}</Text>
					</CardSection>
					{this.renderDescription()}
				</View>

			
			</TouchableWithoutFeedback>
	
		);

	}

	renderDescription() {

		if (this.props.library.id == this.props.selectedLibraryId) {

			return (

				<Text> {this.props.library.description}</Text>
			);
		}
	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	}
}

const mapStateToProps = (state) => {

	return {
		selectedLibraryId : state.selectedLibraryId
	}
}

export default connect(mapStateToProps, actions)(ListItem);
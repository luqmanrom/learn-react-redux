import React, { Component } from 'react';
import { CardSection } from './common';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux'; 
import * as actions from '../actions';


class ListItem extends Component {


	// Called when component is being re-rendered before render function is called
	// https://facebook.github.io/react/docs/react-component.html
	componentWillUpdate() {
		LayoutAnimation.spring();
	}

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

				<CardSection>
					<Text style={{flex:1}}> {this.props.library.description}</Text>
				</CardSection>
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
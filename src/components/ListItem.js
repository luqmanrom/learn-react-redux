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
				</View>
			
			</TouchableWithoutFeedback>
	
		);

	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	}
}

export default connect(null, actions)(ListItem);
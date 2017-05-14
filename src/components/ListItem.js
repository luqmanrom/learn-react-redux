import React, { Component } from 'react';
import { CardSection } from './common';
import { Text } from 'react-native';


class ListItem extends Component {

	render() {

		return (
			<CardSection>	

				<Text> {this.props.library.title}</Text>

			</CardSection>
		);

	}
}

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	}
}

export default ListItem;
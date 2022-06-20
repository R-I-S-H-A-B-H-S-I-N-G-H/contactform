import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
export default function Navbar() {
	return (
		<View style={styles.container}>
			<Text style={styles.heading}>Contact Us</Text>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: '#A7C7E7',
		height: '16%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	heading: {
		// backgroundColor: 'blue',
		fontWeight: 'bold',
		fontSize: 40,
		padding: 10,
		paddingBottom: 10,
	},
});

import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
export default function Sent() {
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<Text style={styles.message}>Email Sent Successfully</Text>
			<TouchableOpacity onPress={() => navigation.goBack()}>
				<Text>Send Another</Text>
			</TouchableOpacity>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	message: {
		backgroundColor: '#90ee90',
		padding: 20,
		fontWeight: '900',
		borderRadius: 10,
		marginBottom: 50,
	},
});

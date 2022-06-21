import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Form from './Form';
import Navbar from './Navbar';

export default function Home() {
	return (
		<View style={styles.container}>
			<Navbar />
			<Form />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFFF',
		height: '100%',
	},
});

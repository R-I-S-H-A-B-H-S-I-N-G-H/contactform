import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Form from './components/Form';
import Navbar from './components/Navbar';

export default function App() {
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

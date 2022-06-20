import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

export default function Form() {
	const [email, setemail] = useState('');
	const [name, setname] = useState('');
	const [phone, setephone] = useState('');
	const [message, setemessage] = useState('');
	async function submit() {
		if (email.length == 0 || name.length == 0 || phone.length == 0 || message.length == 0) return;
		let url = `https://email-api-dusky.vercel.app/?email=${email}&name=${name}&phone=${phone}&message=${message}`;
		let res = await fetch(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
		});
		console.log(res);
	}
	return (
		<View style={styles.container}>
			<TextInput value={name} onChangeText={(val) => setname(val)} placeholder='Name' style={[styles.input]} />
			<TextInput value={email} onChangeText={(val) => setemail(val)} placeholder='Email' style={[styles.input]} />
			<TextInput
				value={phone}
				onChangeText={(val) => setephone(val)}
				placeholder='Phone'
				style={[styles.input]}
			/>
			<TextInput
				value={message}
				onChangeText={(val) => setemessage(val)}
				multiline={true}
				editable
				placeholder='Message'
				style={[styles.input, styles.message]}
			/>
			<TouchableOpacity onPress={() => submit()} style={styles.button}>
				<Text style={styles.buttontxt}>Submit</Text>
			</TouchableOpacity>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		padding: 5,
		margin: 5,
	},
	input: {
		padding: 10,
		backgroundColor: 'white',
		margin: 10,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: ['black', 'white', 'white', 'white'],
	},
	message: {
		paddingVertical: 40,
	},
	button: {
		backgroundColor: '#90ee90',
		padding: 20,
		marginHorizontal: 30,
		borderRadius: 10,
	},
	buttontxt: {
		textAlign: 'center',
		fontWeight: 'bold',
	},
});
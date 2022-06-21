import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function Form() {
	const navigation = useNavigation();
	const [emailerror, setemailerror] = useState(false);
	const [phoneerror, setephoneerror] = useState(false);

	const [email, setemail] = useState('');
	const [name, setname] = useState('');
	const [phone, setephone] = useState('');
	const [message, setemessage] = useState('');

	function check() {
		setemailerror(false);
		setephoneerror(false);
		if (email.length == 0 || name.length == 0 || phone.length == 0 || message.length == 0) return false;

		if (validateEmail(email) === null || validatePhone(phone) === null) {
			if (validateEmail(email) === null) setemailerror(true);
			if (validatePhone(phone) === null) setephoneerror(true);
			return false;
		}

		return true;
	}

	async function submit() {
		if (check() === false) return;
		console.log('every thing is correct');
		let url = `https://email-api-dusky.vercel.app/?email=${email}&name=${name}&phone=${phone}&message=${message}`;

		let res = await fetch(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
		});
		console.log(res.status);
		if (res.status == 200) {
			navigation.navigate('Sent');
		}
	}
	return (
		<View style={styles.container}>
			<TextInput value={name} onChangeText={(val) => setname(val)} placeholder='Name' style={[styles.input]} />
			<TextInput value={email} onChangeText={(val) => setemail(val)} placeholder='Email' style={[styles.input]} />
			<Text style={[styles.error, emailerror === false ? { display: 'none' } : { display: 'flex' }]}>
				Email is not correct
			</Text>

			<TextInput
				value={phone}
				onChangeText={(val) => setephone(val)}
				placeholder='Phone'
				style={[styles.input]}
			/>
			<Text style={[styles.error, phoneerror === false ? { display: 'none' } : { display: 'flex' }]}>
				Phone number is not correct
			</Text>
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
	error: {
		marginHorizontal: 10,
		paddingHorizontal: 10,
		fontWeight: '900',
		color: 'red',
	},
});

function validateEmail(email) {
	return String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
}

function validatePhone(phone) {
	return String(phone)
		.toLowerCase()
		.match(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/);
}

import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { MONUMENTS } from '../data/monuments'
import { useNavigation } from 'react-router-native'

export const Main = () => {
	const history = useNavigation()

	const handlePress = (ruta) => {
		history.push(ruta)
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Mexico</Text>
			<Image source={{ uri: uriImage }} width={250} height={200} />
			{MONUMENTS.map((monuments) => (
				<TouchableOpacity
					key={monuments.id}
					style={styles.button}
					onPress={() => handlePress(monuments.ruta)}>
					<Text style={{ color: '#fff' }}>{monuments.nombre}</Text>
				</TouchableOpacity>
			))}
		</View>
	)
}

const uriImage =
	'https://i.natgeofe.com/n/6c02ad5a-977b-4f12-b9c0-02ffb0736e07/metropolitan-cathedral-zocalo-mexico-city.JPG'

const styles = {
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 20
	},
	title: {
		fontSize: 24,
		fontWeigth: 'bold'
	},
	button: {
		backgroundColor: 'blue',
		padding: 10,
		borderRadius: 5
	}
}

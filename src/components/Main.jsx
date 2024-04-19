import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { MONUMENTS } from '../data/monuments'
import { Link } from 'react-router-native';

export const Main = () => {

	return (
		<View style={styles.container} >
			<Text style={styles.title} >Mexico</Text>
			<Image source={{ uri: uriImage }} style={styles.image} />
			<Text style={{ color: '#fff' }}>Explora algunos de estos monumentos mexicanos</Text>

			<View style={styles.containerButton}>
				{MONUMENTS.map((monuments) => (
					<Link
						key={monuments.id}
						to={`/ciudad/${monuments.id}`}
						style={styles.button}
						component={TouchableOpacity}
					>
						<Text style={{ color: '#fff' }}>{monuments.name}</Text>
					</Link>
				))}
			</View>
		</View>
	)
}

const uriImage =
	'https://i.natgeofe.com/n/6c02ad5a-977b-4f12-b9c0-02ffb0736e07/metropolitan-cathedral-zocalo-mexico-city.JPG'

const styles = {
	container: {
		flex: 1,
		backgroundColor: '#000',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 20
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold', 
		color: '#fff',
	},
	containerButton: {
	 flexDirection: "col",
		gap: 10,
		justifyContent: "center",
		alignItems: "center"

	},
	button: {
		backgroundColor: '#0A2E36',
		padding: 10,
		borderRadius: 5
	}, 
	image: { 
		width: 250, 
		height: 200, 
		borderRadius: 10,
	}
}

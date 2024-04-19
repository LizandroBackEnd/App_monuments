import { StyleSheet, View } from 'react-native'
import { NativeRouter, Routes, Route } from 'react-router-native'
import { Main } from './src/components/Main'
import  MonumentDetail  from './src/components/MonumentDetail'

export default function App() {
	return (
		<View style={styles.container}>
			<NativeRouter>
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/ciudad/:id' element={ <MonumentDetail/>} />
				</Routes>
			</NativeRouter>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000',
		alignItems: 'center',
		justifyContent: 'center'
	}
})

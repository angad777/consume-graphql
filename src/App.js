import React, { Component } from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import logo from './logo.svg'
import carbon from './carbon.svg'
import './App.css'

// Apollo Client Setup
const client = new ApolloClient({
	// Add your GraphQL API below for e.g :
	// uri: 'https://consumegraphql.io/graphql'
	uri: ''
})

class App extends Component {
	render() {
		return (
			<ApolloProvider client={client}>
				<div className="App">
					<header className="App-header">
						<img
							src={logo}
							className="App-logo"
							alt="logo"
						/>
						<p>
							Minimalistic React / Apollo / GraphQL
							Boilerplate
						</p>

						<img
							src={carbon}
							className=""
							width="700px"
							alt="code-snippet"
						/>


					</header>
				</div>
			</ApolloProvider>
		)
	}
}

export default App

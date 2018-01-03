import React from 'react'
import ReactDOM from 'react-dom'
import './index.styl'

class App extends React.Component {
	constructor () {
		super()
	}

	render () {
		return (
			<div className="container">
				<div className="row">
					<ServiceBlock
						image="images/service-icons/airdrop.svg"
						content="Smart Contract Auditing"
					/>
					<ServiceBlock
						image="images/service-icons/development.svg"
						content="ICO Development"
					/>
					<ServiceBlock
						image="images/service-icons/programming.svg"
						content="Smart Contract Programming"
					/>
					<ServiceBlock
						image="images/service-icons/dapp.svg"
						content="dApp Development"
					/>
					<ServiceBlock
						image="images/service-icons/token.svg"
						content="ERC20 Token Creation"
					/>
					<ServiceBlock
						image="images/service-icons/airdrop.svg"
						content="ERC20 Token Airdrop"
					/>
				</div>
			</div>
		)
	}
}

function ServiceBlock (props) {
	return (
		<div className="service-block col-lg-2">
			<img src={props.image} />
			<p>{props.content}</p>
		</div>
	)
}

ReactDOM.render(
	<App />,
	document.querySelector('#root')
)

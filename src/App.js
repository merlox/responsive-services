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
				<div className="row justify-content-center services-container">
					<div className="col-xs">
						<ServiceBlock
							image="images/service-icons/auditing.svg"
							content="Smart Contract Auditing"
						/>
					</div>
					<div className="col-xs">
						<ServiceBlock
							image="images/service-icons/development.svg"
							content="ICO Development"
						/>
					</div>
					<div className="col-xs">
						<ServiceBlock
							image="images/service-icons/programming.svg"
							content="Smart Contract Programming"
						/>
					</div>
					<div className="col-xs">
						<ServiceBlock
							image="images/service-icons/dapp.svg"
							content="dApp Development"
						/>
					</div>
					<div className="col-xs">
						<ServiceBlock
							image="images/service-icons/token.svg"
							content="ERC20 Token Creation"
						/>
					</div>
					<div className="col-xs">
						<ServiceBlock
							image="images/service-icons/airdrop.svg"
							content="ERC20 Token Airdrop"
						/>
					</div>
				</div>
			</div>
		)
	}
}

function ServiceBlock (props) {
	return (
		<div className="service-block">
			<img src={props.image} />
			<p>{props.content}</p>
		</div>
	)
}

ReactDOM.render(
	<App />,
	document.querySelector('#root')
)

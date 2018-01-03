import React from 'react'
import ReactDOM from 'react-dom'
import './index.styl'

class App extends React.Component {
	constructor () {
		super()
	}

	render () {
		return (
			<div>
				<ServiceBlock
					image="images/service-icons/airdrop.svg"
					content="Hi"
				/>
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

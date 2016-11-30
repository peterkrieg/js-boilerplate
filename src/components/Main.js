import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
	render() {
		return (
			<div>
				<h1>
					<Link to="/">Reduxstagram</Link>
				</h1>
				<h2>Hello world!</h2>
				<button>Click to increment</button>
				{React.cloneElement({...this.props}.children, {...this.props})}
			</div>
		)
	}
});

export default Main;

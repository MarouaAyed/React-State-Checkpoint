import React, { Component } from "react";
import "./App.css";
import { Button, Image } from "react-bootstrap";

export default class ClassComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fullName: "Maroua",
			bio: "developpeuse",
			imgSrc: "maroua.jpg",
			profession: "formatrice",
			hourAdd: 0,
		};
	}
	addhours = () => {
		this.setState({ hourAdd: this.state.hourAdd + 1 });
	};
	componentDidMount() {
		setInterval(this.addhours, 1000);
	}

	render() {
		const ShowFun = () => {
			this.setState({
				show: !this.state.show,
			});
		};

		return (
			<div className="App">
				{this.state.show && (
					<>
						<p className="profile">
							My name is {this.state.fullName}, i'm a {this.state.bio} and{" "}
							{this.state.profession}
						</p>
						<Image src={this.state.imgSrc} className="image" rounded />
					</>
				)}
				<br />
				<br />
				<Button variant="primary" onClick={ShowFun}>
					Click me
				</Button>
				<h4> {this.state.hourAdd} </h4>
			</div>
		);
	}
}

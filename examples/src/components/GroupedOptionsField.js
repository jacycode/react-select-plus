import React from 'react';
import Select from 'react-select-plus-2';

var ops = [{
	label: 'Black',
	value: 'black',
}, {
	options: [{
		label: 'Yellow',
		value: 'yellow',
		type:'label'
	}, {
		label: 'Red',
		value: 'red'
	}, {
		label: 'Blue',
		value: 'blue'
	}]
}, {
	label: 'Secondary Colors',
	options: [{
		label: 'Orange',
		value: 'orange'
	}, {
		label: 'Purple',
		options: [{
			label: 'Light Purple',
			value: 'light_purple'
		}, {
			label: 'Medium Purple',
			value: 'medium_purple'
		}, {
			label: 'Dark Purple',
			value: 'dark_purple'
		}]
	}, {
		label: 'Green',
		value: 'green'
	}]
}, {
	label: 'White',
	value: 'white',
}];

var GroupedOptionsField = React.createClass({
	displayName: 'GroupedOptionsField',
	propTypes: {
		delimiter: React.PropTypes.string,
		label: React.PropTypes.string,
		multi: React.PropTypes.bool,
	},

	getInitialState () {
		return {
			value: null,
		};
	},

	onChange(value) {
		this.setState({ value });
		console.log('Option Groups Select value changed to', value);
	},

	render () {
		return (
			<div className="section">
				<h3 className="section-heading">{this.props.label}</h3>
				<Select
					onChange={this.onChange}
					options={ops}
					placeholder="Select a color"
					value={this.state.value} />
			</div>
		);
	}
});

module.exports = GroupedOptionsField;

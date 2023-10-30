// CheckedButton.js
import React, { Component } from 'react';
import { ToggleButton } from 'react-bootstrap';

class ToggleButtonExample extends Component {
    state = {
        selected: false,
    }
    render() {




        return (
            <ToggleButton
                key={1}
                className="mb-2"
                type="checkbox"
                variant={'primary'}
                onChange={() => this.setState({ selected: !this.state.selected })}
                style={{ border: this.state.selected ? '3px solid red' : 'none' }}
            >
                Check
            </ToggleButton>
        );
    }
}

export default ToggleButtonExample;


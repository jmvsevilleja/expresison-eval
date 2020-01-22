import React, { Component } from "react";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import Typography from "@material-ui/core/Typography";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

class Operation extends Component {

    state = {
        operands: [],
        operator: '+',
    };
    // adding the first number
    handleAddNumber = e => {
        e.preventDefault();
        this.setState({ operands: [(e.target.number.value * 1)] });
    };
    // set operator
    handleOperator = e => {
        this.setState({ operator: e.target.value });
    };
    // adding the rest of operands
    handleAddOperation = e => {
        e.preventDefault();
        this.setState({ operands: [...this.state.operands, (e.target.operand.value * 1)] })
    };

    // return all operand
    getOperand() {
        return this.state.operands.join(" ");
    }

    // return the result of operation
    getResult() {
        switch (this.state.operator) {
            case '+':
                return this.state.operands.reduce(function (a, b) { return a + b })
            case '-':
                return this.state.operands.reduce(function (a, b) { return a - b })
            case '*':
                return this.state.operands.reduce(function (a, b) { return a * b })
            case '/':
                return this.state.operands.reduce(function (a, b) { return a / b })
            default:
        }
    }

    render() {
        if (this.state.operands.length) {
            return (
                <form onSubmit={this.handleAddOperation}>
                    <Grid container justify="center" alignItems="center" spacing={2}>
                        <Grid item xs={12} sm={12}>
                            <Typography variant="h2">{this.getOperand()} {this.state.operator} <div>=  {this.getResult()} </div></Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth >
                                <InputLabel id="operator" style={{ marginLeft: '10px' }}  >Operator</InputLabel>
                                <Select
                                    id="operator"
                                    name="operator"
                                    variant="outlined"
                                    fullWidth
                                    onChange={this.handleOperator}
                                    value={this.state.operator}
                                >
                                    <MenuItem value="+">+</MenuItem>
                                    <MenuItem value="-">-</MenuItem>
                                    <MenuItem value="*">*</MenuItem>
                                    <MenuItem value="/">/</MenuItem>
                                </Select>
                            </FormControl>

                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="operand"
                                label="Operand"
                                margin="normal"
                                variant="outlined"
                                fullWidth
                                style={{ marginTop: '8px', minHeight: '56px' }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <Button
                                type="submit"
                                color="primary"
                                variant="contained"
                                size="large"
                                fullWidth
                                style={{ marginTop: '8px', minHeight: '56px' }}
                            >Add Operation</Button>
                        </Grid>
                    </Grid>
                </form >
            );
        } else {
            return (
                <form onSubmit={this.handleAddNumber}>
                    <Typography variant="h2">Expression Evaluator</Typography>
                    <Grid container justify="center" alignItems="center" spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="number"
                                label="Please enter a number"
                                margin="normal"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button
                                type="submit"
                                color="primary"
                                variant="contained"
                                size="large"
                                fullWidth
                                style={{ marginTop: '8px', minHeight: '56px' }}
                            >Add Number</Button>
                        </Grid>
                    </Grid>
                </form >
            );

        }

    }
}

export default Operation;

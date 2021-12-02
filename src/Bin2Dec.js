import { Alert, Stack, TextField } from "@mui/material";
import React from "react";

class Bin2Dec extends React.Component {
    constructor(props) {
        super(props);

        this.state = { binary: 0, decimal: 0, message: "" }

        this.handleBinaryInput = this.handleBinaryInput.bind(this)
    }
    componentDidMount() { }
    componentWillUnmount() { }
    validateBinary(binary) {
        let pattern = new RegExp('^[0,1]*$')
        return pattern.test(binary)
    }
    convertToDecimal(binary) {
        binary = Number(binary)
        let decimal = 0
        let i = 0
        while (binary !== 0) {
            let rem = binary % 10;
            binary = Math.floor(binary / 10);

            decimal = decimal + (rem * Math.pow(2, i++))
        }
        return decimal
    }
    handleBinaryInput(event) {
        let binary = event.target.value
        if (binary === "") {
            this.setState(({ binary: "", decimal: "", message: "Enter a binary number" }))
            return;
        }
        if (this.validateBinary(binary)) {
            this.setState({ binary: binary })
            const decimal = this.convertToDecimal(binary)
            this.setState(({ decimal: decimal, message: "" }))
        } else {
            this.setState(({ message: "Unexpected input !!!" }))
        }
    }
    render() {
        const decimal = this.state.decimal
        const binary = this.state.binary
        const message = this.state.message
        return (
            <Stack spacing={2}>
                <TextField label="Binary" id="binaryInput" type="text" value={binary} onChange={this.handleBinaryInput} />
                <TextField label="Decimal" id="decimal" type="text" value={decimal} InputProps={{
                    readOnly: true,
                }} />
                {message &&

                    <Alert severity="error">
                        {message}
                    </Alert>
                }
            </Stack>
        );
    }
}

export default Bin2Dec;
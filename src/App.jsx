import {useState} from 'react'
import './App.css'
import {Box, FormControl, TextField,} from "@mui/material";

function App() {

    const [contractAddress, setContractAddress] = useState('');

    return (
        <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
            <div>
                <FormControl fullWidth sx={{m: 1}} variant="standard">
                    <TextField
                        sx = {{
                            width: '50ch'
                        }}
                        label="Input contract address"
                        id="ca"
                        onChange={(event) => {
                            setContractAddress(event.target.value);
                        }}
                    />
                </FormControl>
            </div>
        </Box>
    )
}

export default App

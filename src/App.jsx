import {useState} from 'react'
import './App.css'
import {Box, Button, FormControl, TextField,} from "@mui/material";
import {Link} from 'react-router-dom';

function App() {

    const [contractAddress, setContractAddress] = useState('');

    return (
        <Box sx={{display: 'flex', flexWrap: 'wrap', mr: 0}}>
            <div>
                <FormControl fullWidth sx={{}} variant="standard">
                    <TextField
                        sx={{
                            width: '500px'
                        }}
                        label="Input contract address"
                        id="ca"
                        onChange={(event) => {
                            setContractAddress(event.target.value);
                        }}
                    />
                    <Button component={Link}
                            to={`/fee/${contractAddress}`}
                            variant="contained"
                            color="primary"
                            sx={{
                                marginTop: '10px',
                                width: '500px'
                            }}
                    >
                        Find dynamic fee for contact address
                    </Button>
                </FormControl>
            </div>
        </Box>
    )
}

export default App

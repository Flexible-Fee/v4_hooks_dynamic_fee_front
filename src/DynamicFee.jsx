// import {useState} from "react";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import {Box, Typography, Grid2} from "@mui/material";
import {useParams} from "react-router-dom";


function DynamicFee() {
    const {contractAddress} = useParams();
    console.log(contractAddress);
    //todo WIP for fetch data from backend. Because we have some issues with this
    // const [data, setData] = useState([]);

    const data = [
        {timestamp: '2024-10-19 10:00', fee: 10},
        {timestamp: '2024-10-19 11:00', fee: 15},
        {timestamp: '2024-10-19 12:00', fee: 8},
        {timestamp: '2024-10-19 13:00', fee: 20},
        {timestamp: '2024-10-19 14:00', fee: 18},
        {timestamp: '2024-10-19 15:00', fee: 2},
        {timestamp: '2024-10-19 16:00', fee: 3},
        {timestamp: '2024-10-19 17:00', fee: 4},
        {timestamp: '2024-10-19 18:00', fee: 6},
        {timestamp: '2024-10-19 19:00', fee: 31},
        {timestamp: '2024-10-19 20:00', fee: 2},
        {timestamp: '2024-10-19 21:00', fee: 6},
        {timestamp: '2024-10-19 22:00', fee: 8},
        {timestamp: '2024-10-19 23:00', fee: 1},
    ];
    // x=timestamp and y=fee
    // setData([])
    console.log(data)
    return (
        <Box style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh'
        }}>
            <Grid2 style={{width: 1500, height: 500}}>
                <Typography
                    fontSize='50px'
                    fontWeight='bold'
                    sx={{
                        weight: 'bold',
                        size: 25
                    }}>Axis dynamic fee</Typography>
                <ResponsiveContainer>
                    <LineChart data={data} sx={{}}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="timestamp" tick={{fill: '#000000', fontWeight: 'bold'}}/>
                        <YAxis tick={{fill: '#000000', fontWeight: 'bold'}}/>
                        <Tooltip/>
                        <Legend wrapperStyle={{color: '#000000', fontWeight: 'bold'}}/>
                        <Line type="monotone" dataKey="fee" stroke="#8884d8" dot={{stroke: '#000000', strokeWidth: 2}}/>
                    </LineChart>
                </ResponsiveContainer>
            </Grid2>
        </Box>
    );
}

export default DynamicFee;
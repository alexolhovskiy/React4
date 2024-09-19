import {Box,Typography} from '@mui/material';
import { Link } from 'react-router-dom';

export const About=()=>{
    const style={
        margin:"10px",
        display:"flex",
        justifyContent:"center",
        gap:"20px"
    }
    return(
        <Box>
            <Box style={style}>
                <Typography gutterBottom variant="h3" component="div">
                    <Link to='/about'>About</Link>
                </Typography>
                <Typography gutterBottom variant="h3" component="div">
                    <Link to='/'>Home</Link>
                </Typography>
            </Box>
            <Typography gutterBottom variant="h3" component="div">
                the future is coming...
            </Typography>
        </Box>
    );
}
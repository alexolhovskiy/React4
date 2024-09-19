import {Box,Typography} from '@mui/material';
import { MyList } from '../MyList/mylist';
import { Link } from 'react-router-dom';

export const Home=()=>{
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
                    <Link to='/'>Home</Link>
                </Typography>
                <Typography gutterBottom variant="h3" component="div">
                    <Link to='/about'>About</Link>
                </Typography>
            </Box>
            <MyList/>
        </Box>
    );
}
import {Card,CardMedia,CardContent,Typography,Button,CardActions} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const MyCard=({item})=>{
    const navigate = useNavigate();
    
    let extention=item.images.includes('jpg') ? 'jpg':'png';
    // console.log(`${item.folder}/1..${extention}`);

    const goToItemDetail = () => {
        navigate(`/item`, { state: { item } });
    };


    return(
        <Card sx={{width: 165}}>
            <CardMedia
                sx={{ width: 145,height: 140 }}
                
                image={`${item.folder}/1..${extention}`}
                title={item.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {item.price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={goToItemDetail}>Learn More</Button>
            </CardActions>
        </Card>
    );
}
import {Box,Card,CardMedia,Typography} from '@mui/material';
import { useParams,useLocation } from 'react-router-dom';

export const Details = () => {
  const { id } = useParams(); // Получаем id из URL
  const location = useLocation();
  const { item } = location.state || {}; // Получение переданного объекта

  if (!item) {
     return <p>Item not found!</p>;
  }
  const imgList=[];
  let extention=item.images.includes('jpg') ? 'jpg':'png';
  for(let i=0;i<item.count;i++){
    imgList.push({id:i,path:`${item.folder}/${i+1}..${extention}`});
  }

  const style={
    margin:"20px auto",
    width:"60vw",
    display:"grid",
    gridTemplateColumns:"repeat(auto-fit,minmax(185px,1fr))",
    justifyContent:"center",
    justifyItems:"center",
    alignItems:"center",
    gap:"20px",
  }

  return (
    <Box>
        <Typography gutterBottom variant="h5" component="div">
            {item.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {item.description}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
            {item.price}
        </Typography>
        <Box style={style}>
            {
                imgList.map((obj)=>(
                    <Card key={obj.id} sx={{width: 165}}>
                        <CardMedia
                            sx={{ width: 145,height: 140 }}
                            image={obj.path}
                        />
                    </Card>
                ))
            }
        </Box>
    </Box>
  );
};
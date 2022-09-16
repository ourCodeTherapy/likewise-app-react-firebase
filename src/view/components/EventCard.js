import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';



const BasicCard = ({nameOfEvent,goToEvent}) =>{
  let navigate=useNavigate();
  return (
    <Card sx={{ minWidth: 50 }}>
      <CardContent>
        <h1>{nameOfEvent}</h1>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>navigate('/ChatRoom')}>Go to</Button>
      </CardActions>
    </Card>
  );
}

export default BasicCard;
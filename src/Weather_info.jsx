import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./Info_box.css"


export default function ({info}) {
    let imga = "https://images.unsplash.com/photo-1651523862184-5663390bea44?q=80&w=1858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    
    return (
        <div className='info-box'>
            <div className="card">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={imga}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>Temprature : {info.temp}&deg;C</p>
                            <p>Max-Temp : {info.maxtemp}</p>
                            <p>Min-Temp : {info.mintemp}</p>
                            <p>humidity : {info.humidity}</p>
                            <p>Wind : {info.wind}</p>
                            <p>The weather in {info.city} is {info.wheater} and it feels like : {info.felllike}</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
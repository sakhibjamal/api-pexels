import { Box, Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { GetNewsByCategory } from "../../api";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Section = () => {
  const [data, setData] = React.useState([]);

  useEffect(async () => {
    const obj = await GetNewsByCategory("car");
    if (obj.success) setData(obj.data.photos);
  }, []);

  console.log(data);
  return (
    <Container>
      <Grid container spacing={2} marginY="50px">
        {data.map((item) => {
          return (
            <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="100%"
                    image={item.src.original}
                    alt="green iguana"
                  />
                  {/* <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent> */}
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Section;

import { Box, Container, Grid, Typography } from "@mui/material";

import React from "react";
import { styled } from "@mui/material/styles";

const HeroContainer = styled(Box)({
  position: "relative",
  height: "400px",
  display: "flex",
  alignItems: "center",
  backgroundColor: "#f5f5f5",
});

const HeroImage = styled("img")({
  width: "100%",
  height: "auto",
  maxWidth: "100%",
  borderRadius: "8px",
});

const HeroContent = styled(Box)(({ theme }) => ({
  textAlign: "left",
  padding: theme.spacing(2),
}));

function Hero() {
  return (
    <HeroContainer>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
            <HeroContent>
              <Typography variant="h2" component="h1" gutterBottom>
                Welcome to MUI
              </Typography>
              <Typography variant="h5" component="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio porro excepturi doloribus eveniet! Aliquid, iste.
              </Typography>
            </HeroContent>
          </Grid>
          <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
            <HeroImage src="https://mui.com/static/logo.png" alt="Hero" />
          </Grid>
        </Grid>
      </Container>
    </HeroContainer>
  );
}

export default Hero;

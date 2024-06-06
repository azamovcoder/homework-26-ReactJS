import { Box, Container, Typography } from "@mui/material";

import React from "react";

function About() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box>
        <Typography variant="h4" component="h2" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1" paragraph>
          MyApp is a leading provider of innovative solutions in the tech
          industry. Our mission is to empower businesses and individuals by
          delivering cutting-edge technologies that drive growth and success.
        </Typography>
        <Typography variant="body1" paragraph>
          With a dedicated team of experts, we strive to exceed expectations and
          provide exceptional value to our clients. From software development to
          digital marketing, we offer a wide range of services tailored to meet
          the unique needs of each client.
        </Typography>
        <Typography variant="body1" paragraph>
          At MyApp, we believe in continuous improvement and staying ahead of
          the curve. We are committed to staying abreast of the latest trends
          and technologies to ensure that our clients always receive the best
          solutions possible.
        </Typography>
        <Typography variant="body1" paragraph>
          Contact us today to learn more about how we can help you achieve your
          goals and take your business to the next level.
        </Typography>
      </Box>
    </Container>
  );
}

export default About;

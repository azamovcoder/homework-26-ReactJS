import { Box, Container, Typography } from "@mui/material";

import React from "react";

function Footer() {
  return (
    <Box sx={{ bgcolor: "primary.main", color: "white", py: 3 }}>
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          © {new Date().getFullYear()} MyApp. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;

import { Box, Button, Grid2, TextField } from "@mui/material";
import Image from "next/image";
import React from "react";
import image from "@/img/svg/Signup-amico.svg";
import SocialSignupAndLogin from "../common/SocialSignupAndLogin";
const SignUp = () => {
  return (
    <Box
      component={"main"}
      className={` bg-lightPrimary h-screen overflow-hidden flex flex-row md:items-end items-center `}
    >
      <Box
        component={"section"}
        className={`md:w-[60%] w-0 p-0 md:p-25 bg-lightPrimary h-full `}
      >
        <Image className="w-full h-full" src={image} alt="image" />
      </Box>
      <Box
        component={"section"}
        className="md:w-[40%] md:px-6 md:py-25 h-full bg-white w-full"
      >
        <h3 className={`text-2xl font-bold text-center py-5`}>Sign Up</h3>
        <form className="flex flex-col items-center gap-4">
          <Grid2
            container
            spacing={2}
            sx={{
              justifyContent: "center",
            }}
          >
            <Grid2 size={{ xs: 10, md: 12 }}>
              <TextField
                className="w-full"
                id="outlined-basic"
                label="Username"
                variant="outlined"
                required
              />
            </Grid2>
            <Grid2 size={{ xs: 10, md: 12 }}>
              <TextField
                className="w-full"
                id="outlined-basic"
                type="email"
                label="Email"
                variant="outlined"
                required
              />
            </Grid2>
            <Grid2 size={{ xs: 10, md: 12 }}>
              <TextField
                className="w-full"
                type="number"
                id="outlined-basic"
                label="Number"
                variant="outlined"
                required
              />
            </Grid2>
            <Grid2 size={{ xs: 10, md: 12 }}>
              <TextField
                className="w-full"
                id="outlined-basic"
                type="password"
                label="password"
                variant="outlined"
                required
              />
            </Grid2>
            <Grid2 size={{ xs: 10, md: 12 }}>
              <TextField
                className="w-full"
                type="password"
                id="outlined-basic"
                label="confirm password"
                variant="outlined"
                required
              />
            </Grid2>
            <Grid2 size={{ xs: 10, md: 12 }}>
              <Button
                className="items-center my-4 w-full"
                variant="contained"
                color="success"
              >
                Sign Up
              </Button>
            </Grid2>
          </Grid2>
        </form>
        <p className="text-center my-4">
          Already have an account? <b className="text-red-500">Login</b>
        </p>
        <p className="text-center">Or</p>
        <SocialSignupAndLogin />
      </Box>
    </Box>
  );
};

export default SignUp;

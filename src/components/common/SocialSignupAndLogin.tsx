import { Tooltip } from "@mui/material";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const SocialSignupAndLogin = () => {
  return (
    <section className="flex justify-center flex-row items-center gap-5 my-4">
      <Tooltip title="facebook login">
        <FaFacebookF style={{ color: "blue" }} />
      </Tooltip>
      <Tooltip title="google login">
        <FaGoogle style={{ color: "red" }} />
      </Tooltip>
    </section>
  );
};

export default SocialSignupAndLogin;

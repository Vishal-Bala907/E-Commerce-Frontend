import Header from "@/components/common/Header";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Login & Signup Page",
  description: "Login page to get logged in",
};
const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default layout;

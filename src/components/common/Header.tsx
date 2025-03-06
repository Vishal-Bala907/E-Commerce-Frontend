"use client";
import header from "@/layouts/header/header";
import { useEffect, useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
const Header = () => {
  const [button, setbutton] = useState<string>("CLOSE");
  const [initialRender, setinitialRender] = useState<boolean>(true);
  const handleMobileViewNavOpenClick = () => {
    setbutton((state) => (state === "OPEN" ? "CLOSE" : "OPEN"));
  };

  useEffect(() => {
    if (initialRender) {
      if (window.innerWidth >= 640) {
        setbutton("CLOSE");
      } else {
        setbutton("OPEN");
      }
      setinitialRender(false);
    }
    const handleWindowSizeChange = () => {
      if (window.innerWidth >= 640) {
        setbutton("CLOSE");
      } else {
        setbutton("OPEN");
      }
    };
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <div
      className={`relative   ${
        button === "OPEN" ? "h-[50px] " : "h-fit absolute"
      } bg-headerPrimary text-white `}
    >
      <nav
        className={` ${
          button === "OPEN"
            ? "invisible max-h-[0px] overflow-hidden "
            : "max-h-screen"
        } transition-all duration-500 ease-in-out flex sm:flex-row flex-col sm:justify-between justify-start md:ps-0 ps-3 px-4  py-4`}
      >
        <ul
          className={`${
            button === "OPEN"
              ? "opacity-0 transition-all duration-500 ease-in-out"
              : "opacity-100 transition-all duration-600 ease-in-out"
          } flex sm:flex-row flex-col sm:justify-between mx-3 justify-start gap-4`}
        >
          {header[0].headerLeft?.map((item, idx) => (
            <Link href={item.path} className="hover:cursor-pointer" key={idx}>
              {item.name}
            </Link>
          ))}
        </ul>
        <ul
          className={`${
            button === "OPEN"
              ? "opacity-0 transition-all duration-500 ease-in-out"
              : "opacity-100 transition-all duration-600 ease-in-out"
          } flex sm:flex-row flex-col sm:justify-between  mx-3 justify-start gap-4`}
        >
          {header[1].headerRight?.map((item, idx) => (
            <Link href={item.path} className="hover:cursor-pointer" key={idx}>
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div
        className="absolute sm:hidden  top-4 right-4 "
        onClick={handleMobileViewNavOpenClick}
      >
        {button === "OPEN" ? <RxHamburgerMenu /> : <IoClose />}
      </div>
    </div>
  );
};

export default Header;

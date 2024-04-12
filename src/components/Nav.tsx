import React, { useState, useEffect, MutableRefObject } from "react";
import { useLocation } from "react-router-dom";
import ScrollLink from "./ScrollLink";

interface NavProps {
    homeRef: MutableRefObject<HTMLDivElement | null>;
    featureRef: MutableRefObject<HTMLDivElement | null>;
    contactRef: MutableRefObject<HTMLDivElement | null>;
    blogRef: MutableRefObject<HTMLDivElement | null>;
  }
const Nav: React.FC<NavProps> = ({ homeRef, featureRef, contactRef, blogRef }) => {
  const location = useLocation();
  const pathname = location.pathname;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const pathsToScrollTo = ['/home', '/feature', '/contact', '/blog'];
    if (pathsToScrollTo.includes(pathname)) {
      const targetRef =
        pathname === '/home'
          ? homeRef
          : pathname === '/about'
          ? featureRef
          : pathname === '/contact'
          ? contactRef
          : pathname === '/blog'
          ? blogRef
          : null;

      if (targetRef?.current) {
        window.scrollTo({
          top: targetRef.current.offsetTop,
          behavior: 'smooth',
        });
      }
    }
  }, []);


  

  return (
    <nav className="bg-primary-100">
      <div className="grid lg:grid-cols-[200px_minmax(400px,_1fr)_200px] grid-cols-[1fr_50px] items-center lg:px-28 px-4 py-5 h-24">
        <ScrollLink path="/" toRef={homeRef}>
          <p className="text-white font-bold text-xl">ISW5</p>
        </ScrollLink>
        <div className="justify-self-start lg:pl-16 hidden lg:flex items-center justify-center gap-2 md:gap-8">
          <ScrollLink path="/home"
            toRef={homeRef} 
          >
            Home
          </ScrollLink>
          <ScrollLink path="/feature"
            toRef={featureRef}
          >
            Features
          </ScrollLink>
          <ScrollLink
            toRef={blogRef} path="/blog"
          >
            Blog
          </ScrollLink>
          <ScrollLink
            toRef={contactRef} path="/contact"
          >
            Contact
          </ScrollLink>

        </div>
        <div className="flex gap-4 hidden lg:flex">
          <div>
            <button className="border-white border-2 py-2 px-4">Login</button>
          </div>
          <div>
            <button className="bg-white py-2 px-4 text-black">Sign up</button>
          </div>
        </div>
        <div className="lg:hidden flex justify-self-end cursor-pointer">
          {isOpen ? (
            <img
              src="/assets/xmark.svg"
              alt="close-icon"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <img
              src="/assets/bars.svg"
              alt="bars-icon"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>
      <div
        className={`block lg:hidden fixed h-64 mt-4 transform left-0 w-full bg-black transition-transform duration-300 ease-in-out overflow-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:relative lg:translate-x-0 lg:justify-self-start lg:pl-32 lg:flex lg:items-center lg:justify-center lg:gap-2 lg:md:gap-8 lg:bg-transparent`}
      >
        <div className="flex flex-col space-y-5 ml-5">
          <ScrollLink
            toRef={homeRef} path="/home"
          >
            Home
          </ScrollLink>
          <ScrollLink
            toRef={featureRef} path="/feature"
          >
            Feature
          </ScrollLink>

          <ScrollLink
            toRef={blogRef} path="/blog"
          >
            Blog
          </ScrollLink>
          <ScrollLink
            toRef={contactRef} path="/contact"
          >
            Contact
          </ScrollLink>
          <div className="flex flex-col items-center gap-4">
          <div>
            <button className="border-white border-2 py-2 px-4">Login</button>
          </div>
          <div>
            <button className="bg-white py-2 px-4 text-black">Sign up</button>
          </div>
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
import React from "react";
import Headers from "../components/Headers"
import Navbar from "../components/Navbar";
//import Features from "../components/Features";
import Footer from "../components/Footer"
import ReciboGenerador from "../components/ReciboGenerador";

const Principal = () => {
return(
    <>
        <Headers />
        <Navbar />
        <ReciboGenerador />
        <Footer />
      </>
);
}
export default Principal;
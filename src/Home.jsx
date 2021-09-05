import React from "react";
import web from "../src/Images/pic1.webp";
import Common from "./Common";
import { NavLink } from "react-router-dom";


const Home = () => {


    return (
        <>

            <Common
                name='Grow Your Business With'
                imgsrc={web}
                visit="/service"
                btnname="Get Started"
            />

        </>
    );
};
export default Home;

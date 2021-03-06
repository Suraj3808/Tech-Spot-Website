import React from "react";
import { Redirect, Route, Switch } from "react-router";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';


import Home from "./Home";
import Contact from "./Contact";
import Service from "./Service";
import About from "./About";
import Footer from "./Footer";
import Navbar from "./Navbar";



const App = () => {


    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/service" component={Service} />
                <Route exact path="/about" component={About} />
                <Redirect to="/" />

            </Switch>
            <Footer />


        </>
    );
};
export default App;

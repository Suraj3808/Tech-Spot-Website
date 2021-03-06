import React from "react";
import { NavLink } from "react-router-dom";


const Common = (props) => {


    return (
        <>

            <section id="header" className=" d-flex container align-items-center">
                <div className="container-fluid ">
                    <div className="row ">
                        <div className="col-10 mx-auto">
                            <div className="row">


                                <div className="col-lg-6 pt-2 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column ">
                                    <h1> {props.name}
                                        <br />
                                        <strong className="brand-name"> Tech Spot </strong>
                                    </h1>
                                    <h2 className="my-3">
                                        We are the team of talented developer making websites
                                    </h2>
                                    <div className="mt-1 mb-2">
                                        <NavLink to={props.visit} className="btn btn-primary btn-lg">
                                            {props.btnname}
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={props.imgsrc} className="img-fluid animated" alt="Common img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>


        </>
    );
};
export default Common;

import React from "react";
import IMAGE1 from "../IMG/logo.png";
import { Link } from 'react-router-dom';
function Signup() {

    return (
        <div>
            <div className="container bg-white w-50 rounded">
                <div className="img2 ">
                    <img src={IMAGE1} alt="" className="mt-2" />
                </div>
                <div className="Signuppage mt-2">
                    <h4>Sign up</h4>
                </div>
                <div class="formdata">
                    <form class="form-group ">
                        <i class="fa-solid fa-user text-danger"></i>
                        <input type="text" className="w-100 form-control m-2" placeholder="Name" />
                        <i class="fa-solid fa-envelope text-danger"></i>
                        <input type="text" className="w-100 form-control m-2" placeholder="Email" />
                        <i class="fa-solid fa-eye text-danger"></i>
                        <input type="text" className="w-100 form-control m-2" placeholder="Password" />

                        <div className='row mt-2'>
                            <div className='col-1 e-0'>
                                <input type="checkbox" required />
                            </div>
                            <div className='col-11 ms-0 ps-0'>
                                <small class="hello">By clicking Create Account you agree to the<span className='text-danger'>
                                    <a href="hello" className='link-danger' alt="">Terms of service </a></span> and<span className='text-danger'><a href="hello" className='link-danger' alt=""> <br />Privacy policy</a></span></small>
                            </div>
                        </div>

                    </form>

                </div>

                <div className="continue mt-2">
                    <button class="w-100 rounded border-0 p-2 text-white" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ backgroundColor: "#EB1D36" }}>Sign in</button>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title text-center" id="exampleModalLabel">Email Varfication</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <p>Thanks for Signing up! we just need to verfily your email address to complete to setting up your account</p>
                                </div>
                                <div class="modal-footer">
                                    
                                    <button type="button" class="btn btn-primary w-100" data-bs-dismiss="modal">Send link</button>
                                </div>
                            </div>
                        </div>
                    </div>



















                </div>
                <div className="already mt-2">
                    <p className="p-2">You have already account?<Link to={'/signin'}><a href="#"> Sign in</a></Link></p>
                </div>

            </div>


        </div>

    );

}
export default Signup;
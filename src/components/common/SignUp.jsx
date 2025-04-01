import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import {  useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  //const submitHandler = async (formData) => {
   // console.log("Form Data Submitted:", formData);
  
//     try {
//       // Create a new object instead of modifying formData directly
//       const userData = {
//         ...formData,
//         roleId: "67c037045fe99d382472bf61",
//       };
  
//       // Sending request to the backend
//       const res = await axios.post("/user",data)
//       console.log(data);
      
  
//       // Check if response status is successful
//       if (res.status === 201 || res.status === 200) {
//         alert("User created successfully!");
//         navigate("/login");
//       } else {
//         alert("User not created. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error creating user:", error);
  
//       // Provide better error messages
//       if (error.response) {
//         alert(`Error: ${error.response.data.message || "Something went wrong!"}`);
//       } else if (error.request) {
//         alert("No response from the server. Please check your connection.");
//       } else {
//         alert("Request error. Please try again.");
//       }
//     }
//   };
useEffect(() => {
  //sendEmail();
}, []);
// const sendEmail = async () => {
//   try {
//     const response = await fetch("http://localhost:3000/send-email", {

//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         to: "ayush.ta400@gmail.com", // Replace with dynamic email
//         subject: "Welcome to Our Platform",
//         message: "Thank you for signing up!",
//       }),
//     });
    
//     if (!response.ok) {
//       throw new Error("Email sending failed");
//     }
//     console.log("Email sent successfully");
//   } catch (error) {
//     console.error("Error sending email:", error);
//   }
// };


const submitHandler = async(data) => {
    console.log(data);
    data.roleId = "67bfee6416f095f812d5f443"
    const res = await axios.post("/user",data)
    console.log(res)
    console.log(res.data)
    if(res.status===201){
alert("user created successfully...")
navigate("/login")
    }
    else{
alert("user not created..")
    }
};


  

  return (
    <>
      <section className="background-radial-gradient overflow-hidden">
      <style>
  {`
  .background-radial-gradient {
    background-color: hsl(218, 41%, 15%);
    background-image: radial-gradient(650px circle at 0% 0%,
        hsl(218, 41%, 35%) 15%,
        hsl(218, 41%, 30%) 35%,
        hsl(218, 41%, 20%) 75%,
        hsl(218, 41%, 19%) 80%,
        transparent 100%),
      radial-gradient(1250px circle at 100% 100%,
        hsl(218, 41%, 45%) 15%,
        hsl(218, 41%, 30%) 35%,
        hsl(218, 41%, 20%) 75%,
        hsl(218, 41%, 19%) 80%,
        transparent 100%);
    width: 100vw; /* Full width */
    min-height: 100vh; /* Full height */
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0; /* Remove any extra padding */
    margin: 0; /* Ensure no margin is causing gaps */
  }

  .bg-glass {
    background-color: hsla(0, 0%, 100%, 0.9) !important;
    backdrop-filter: saturate(200%) blur(25px);
    padding: 40px;
    border-radius: 15px;
    width: 100%;
    max-width: 500px; /* Control form width */
  }
  `}
</style>



        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="my-5 display-5 fw-bold ls-tight" style={{ color: "hsl(218, 81%, 95%)" }}>
                welcome to our project managment website <br />
                {/* <span style={{ color: "hsl(218, 81%, 75%)" }}>for your business</span> */}
              </h1>
              <p className="mb-4 opacity-70" style={{ color: "hsl(218, 81%, 85%)" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus, expedita iusto veniam atque, magni tempora mollitia
                dolorum consequatur nulla, neque debitis eos reprehenderit quasi
                ab ipsum nisi dolorem modi. Quos?
              </p>
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div className="card bg-glass">
                <div className="card-body px-4 py-5 px-md-5">
                  <form onSubmit={handleSubmit(submitHandler)}>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="firstName"
                            className="form-control"
                            {...register("firstName", { required: "First name is required" })}
                          />
                          <label className="form-label" htmlFor="firstName">First name</label>
                          {errors.firstName && <span className="text-danger">{errors.firstName.message}</span>}
                        </div>
                      </div>

                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            id="lastName"
                            className="form-control"
                            {...register("lastName", { required: "Last name is required" })}
                          />
                          <label className="form-label" htmlFor="lastName">Last name</label>
                          {errors.lastName && <span className="text-danger">{errors.lastName.message}</span>}
                        </div>
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="email"
                        className="form-control"
                        {...register("email", { required: "Email is required" })}
                      />
                      <label className="form-label" htmlFor="email">Email address</label>
                      {errors.email && <span className="text-danger">{errors.email.message}</span>}
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="password"
                        className="form-control"
                        {...register("password", { required: "Password is required" })}
                      />
                      <label className="form-label" htmlFor="password">Password</label>
                      {errors.password && <span className="text-danger">{errors.password.message}</span>}
                    </div>

                    <div className="form-check d-flex justify-content-center mb-4">
                      <input className="form-check-input me-2" type="checkbox" value="" id="newsletter" />
                      <label className="form-check-label" htmlFor="newsletter">
                        Subscribe to our newsletter
                      </label>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block mb-4">
                      Sign up
                    </button>

                    <div className="text-center">
                      <p>or sign up with:</p>
                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-facebook-f"></i>
                      </button>
                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-google"></i>
                      </button>
                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-twitter"></i>
                      </button>
                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="fab fa-github"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;

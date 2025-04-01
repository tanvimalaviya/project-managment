import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import {data, useNavigate } from 'react-router-dom';
import { Bounce,toast,ToastContainer } from 'react-toastify';

export const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
   

    const submitHandler = async(data) => {
       // console.log(data);
       const res = await axios.post("/role1",data)
       console.log(res.data);
       
       if(res.status === 200){
        // alert("Login Success") //tost...
       
        localStorage.setItem("id",res.data.data._id)
        localStorage.setItem("role",res.data.data.roleId)
        toast.error('Log in Successful !!', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
            setTimeout(()=>{
              navigate("/navbar")
            },(2000 ))
        
        // if(res.data.data.roleId.name === "USER"){
        //    //check in app.js
        // }
      }
      else{
        alert("Login Failed")
      }
    
  
    };

    const validationSchema = {
        emailValidator: {
            required: {
                value: true,
                message: "Email is required"
            }
        },
        passwordValidator: {
            required: {
                value: true,
                message: "Password is required"
            }
        }
    };

    return (
        <>
            <style>
                {`
                .login-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    background: #f5f5f5;
                }

                .login-box {
                    background: white;
                    padding: 30px;
                    width: 350px;
                    border-radius: 10px;
                    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
                    text-align: center;
                }
                     html, body {
                    height: 100%;
                    margin: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }


                /* Form input fields */
                .input-group {
                    margin-bottom: 15px;
                    text-align: left;
                }

                .input-group label {
                    font-size: 14px;
                    font-weight: bold;
                    display: block;
                    margin-bottom: 5px;
                }

                .input-group input {
                    width: 100%;
                    padding: 10px;
                    font-size: 16px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    box-sizing: border-box;
                }

                .error-text {
                    color: red;
                    font-size: 12px;
                    margin-top: 5px;
                    display: block;
                }

                .submit-btn {
                    width: 100%;
                    background: #007BFF;
                    color: white;
                    font-size: 16px;
                    border-radius: 5px;
                    padding: 10px;
                    border: none;
                    cursor: pointer;
                    transition: 0.3s;
                }

                .submit-btn:hover {
                    background: #0056b3;
                }
                `}
            </style>

            <div className="login-container">
            <ToastContainer
      position="top-left"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      transition={Bounce}
    />
                <div className="login-box">
                    <h1>LOGIN</h1>
                    <form onSubmit={handleSubmit(submitHandler)}>
                        <div className="input-group">
                            <label>Email</label>
                            <input type="text" {...register("email", validationSchema.emailValidator)} />
                            <span className="error-text">{errors.email?.message}</span>
                        </div>
                        <div className="input-group">
                            <label>Password</label>
                            <input type="password" {...register("password", validationSchema.passwordValidator)} />
                            <span className="error-text">{errors.password?.message}</span>
                        </div>
                        <div>
                            <input type="submit" value="Login" className="submit-btn" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
import React from 'react';
import { useForm } from 'react-hook-form';

export const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const submitHandler = (data) => {
        console.log(data);
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
import React, { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if both email and password are entered
        if (!email || !password) {
            toast.error("Please enter both email and password.");
            return;
        }

        // Retrieve user details from local storage
        const storedEmail = localStorage.getItem("email");
        const storedPassword = localStorage.getItem("password");

        if (email === storedEmail && password === storedPassword) {
            toast.success("Login Success");
        } else {
            toast.error("Invalid Credentials");
        }
    };

    return (
        <>
            <div className="form__container d-flex felx-column align-items-center justify-content-center">
                <form>
                    <h4 className="form__heading">Login </h4>
                    <hr />
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="form__signupLink mb-3">
                        <p>
                            Don't Have An Account? Register!
                        </p>
                    </div>
                    <button type="submit" className="form__button" onClick={handleSubmit}>
                        Login
                    </button>
                </form>
            </div>
        </>
    );
};

export default Login;

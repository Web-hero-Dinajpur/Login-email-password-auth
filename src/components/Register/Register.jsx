import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase/firebase.init";
import { useState } from "react";

const Register = () => {

    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmited = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);

        // resert error message 
        setErrorMessage('');

        // createUserWithEmailAndPassword 
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.log('ERROR', error.message);
            setErrorMessage(error.message)
        })
      
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmited} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register Now</button>
                            </div>
                        </form>
                        {
                            errorMessage && <p className="text-red-600 text-center pb-6">{errorMessage}</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
import { Link } from "react-router-dom";
import React, {useState} from "react";

export default function Registration() {

    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPass, setUserPass] = useState("");

    const handleNameChange = (event) => {
        setUserName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setUserEmail(event.target.value);
    };

    const handlePassChange = (event) => {
        setUserPass(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Display Name:", userName);
        console.log("Email:", userEmail);
        console.log("Password:", userPass);
        
      };

    return (
        <>
            
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        alt="Your Company"
                        src="/icon.svg"
                        className="mx-auto h-10 w-auto"
                    />
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                        Create your new account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="flex flex-col items-start">
                            <label
                                htmlFor="display-name"
                                className="block text-sm font-medium text-gray-900"
                            >
                                Display Name
                            </label>
                            <div className="mt-2 w-full">
                                <input
                                    id="name-input"
                                    name="name-input"
                                    type="text"
                                    value={userName}
                                    onChange={handleNameChange}
                                    required
                                    autoComplete="off"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col items-start">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-900"
                            >
                                Email address
                            </label>
                            <div className="mt-2 w-full">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={userEmail}
                                    onChange={handleEmailChange}
                                    required
                                    autoComplete="email"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="mt-[-10px] flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-sm/6 font-medium text-gray-900"
                                >
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={userPass}
                                    onChange={handlePassChange}
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="mt-10 flex w-full justify-center rounded-md text-blue-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                            >
                                Sign up
                            </button>
                        </div>
                    </form>

                    <p className="mt-2 text-center text-sm/6 text-gray-500">
                        Already registered?{" "}
                        <Link
                            to="/login"
                            className="font-semibold text-indigo-600 hover:text-indigo-500"
                        >
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
}
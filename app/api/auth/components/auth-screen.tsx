'use client'
import { useState } from "react";

import { SignInFlow } from "../types"
import { SignInCard } from "../components/sign-in-card";
import { SignUpCard } from "../components/sign-up-card";

export const AuthScreen = () => {
    const [state, setState] = useState<SignInFlow>("signIn");

    return (
        <div className="h-full flex items-center"> 
            <div className="w-full max-w-md mx-auto">
                <div className="text-center mb-6">
                    <h1 className="text-3xl font-bold">Welcome to the Web app</h1>
                    <p className="text-gray-600">Sign in or create an account</p>
                </div>
                {state === "signIn" ? <SignInCard setState={setState} /> : <SignUpCard setState={setState} />}
            </div>
            
        </div>
    );
}

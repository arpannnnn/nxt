'use client'
import { useState } from "react"
import {FcGoogle} from "react-icons/fc"
import {FaGithub} from "react-icons/fa"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import { Separator  } from "@/components/ui/separator"
import { SignInFlow } from "../types"
import { Button } from "@/components/ui/button"
interface SignUpCardProps {
    setState: (state: SignInFlow) => void
}

export const SignUpCard = ({ setState}:SignUpCardProps ) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    return(
        <Card className="w-full h-full p-8">
            <CardHeader className="px-0 pt-o ">
                <CardTitle>
                    SignUp to your account
                </CardTitle>
                <CardDescription>
                    Use your credentials to access your account
                </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col space-y-4">
                <form className="flex flex-col space-y-4">
                    <Input 
                        type="email"
                        placeholder="Email"
                        required
                        disabled={false}    
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}   
                    />
                    <Input 
                        type="password"
                        placeholder="Password"
                        required
                        disabled={false}    
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    <Input 
                        type="password"
                        placeholder="Confirm Password"
                        required
                        disabled={false}    
                        value={confirmPassword}
                        onChange={(e)=>setConfirmPassword(e.target.value)}
                    />
                    <Button className="btn btn-primary">
                        Sign In
                    </Button>

                </form>
                <Separator />
                <div className="flex flex-col gap-y-2.5">
                    <Button
                        disabled={false}
                        onClick={() => { }}
                        size="lg"
                        variant="outline"
                        className="w-full relative"
                    >
                        <FcGoogle className="size-5 absolute top-2.5 left-2.5" />
                        Continue with Google
                    </Button>

                    <Button
                        disabled={false}
                        className="w-full relative"
                        onClick={() => { }}
                        variant="outline"
                            size="lg" >
                        <FaGithub className="size-5 absolute top-2.5 left-2.5" />
                        Continue with Github
                    </Button>
                </div>
                <p className="text-xs text-muted-foreground dark:text-muted-foreground">
                    Already have an account ? <span onClick={()=> setState("signIn")} className="text-primary cursor-pointer text-sky-700 hover:underline ">Sign In</span>
                </p>
            </CardContent>

        </Card>
    )
}
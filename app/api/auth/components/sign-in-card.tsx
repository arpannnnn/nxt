'use client'
import { useAuthActions } from "@convex-dev/auth/react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { SignInFlow } from "../types"

interface SignInCardProps {
    setState: (state: SignInFlow) => void
}

export const SignInCard = ({ setState}:SignInCardProps ) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signIn } = useAuthActions();

    return (
        <Card className="w-full h-full p-8">
            <CardHeader className="px-0 pt-o ">
                <CardTitle>
                    Login to your account
                </CardTitle>
                <CardDescription>
                    Use your credentials to access your account
                </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col space-y-4">
                <form className="flex flex-col space-y-4">
                    <Input
                        disabled={false}
                        value={email}
                        onChange={(e) => setEmail(e.target.value) }
                        type="email"
                        placeholder="Email"
                        required
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        required
                        disabled={false}
                        value={password}
                        onChange={(e) => setPassword(e.target.value) }
                    />
                    <Button type="submit" className="w-full " size="lg" disabled={false}>
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
                    <Button onClick={() => void signIn("github")}>Sign in with GitHub</Button>
                </div>
                <p className="text-xs text-muted-foreground dark:text-muted-foreground">
                    Don&apos;t have an account? <span onClick={()=> setState("signUp")} className="text-primary cursor-pointer text-sky-700 hover:underline ">Sign Up</span>
                </p>
            </CardContent>

        </Card>
    )
}
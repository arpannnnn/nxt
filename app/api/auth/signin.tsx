import { signIn } from 'next-auth/react';

export default function SignIn() {
    return (
        <div>
            <h1>Sign In</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button onClick={() => signIn('credentials', { redirect: false })}>
                    Sign In
                </button>
            </form>
        </div>
    );
}

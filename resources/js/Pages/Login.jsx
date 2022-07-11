export default function Login(props) {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <h1 className="text-4xl mb-6">Login</h1>
            <div className="flex flex-col">
                <label htmlFor="Email" className="mt-4">
                    Email
                </label>
                <input type="email" />
                <label htmlFor="password" className="mt-4">
                    Password
                </label>
                <input type="password" />
            </div>
            <button className="bg-slate-400 text-2xl rounded-md px-5 py-1.5 mt-6">
                Login
            </button>
        </div>
    );
}

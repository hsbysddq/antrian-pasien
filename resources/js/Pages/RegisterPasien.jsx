export default function RegisterPasien(props) {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <h1 className="text-4xl mb-6">DAFTAR</h1>
            <div className="flex flex-col">
                <label htmlFor="NIK">NIK</label>
                <input type="text" />
                <label htmlFor="ALamat" className="mt-4">
                    ALamat
                </label>
                <input type="text" />
                <label htmlFor="Email" className="mt-4">
                    Email
                </label>
                <input type="email" />
                <label htmlFor="Password" className="mt-4">
                    Password
                </label>
                <input type="password" />
            </div>
            <button className="text-2xl px-5 py-1.5 rounded-md bg-slate-400 mt-6">
                Daftar
            </button>
        </div>
    );
}

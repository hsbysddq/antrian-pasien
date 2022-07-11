export default function NewPasien(props) {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <h1 className="text-4xl mb-8">Anda Pasien Baru ?</h1>
            <div className="text-2xl">
                <button className="bg-slate-400 px-4 py-2 rounded-md mr-8">
                    IYA
                </button>
                <button className="bg-slate-400 px-4 rounded-md py-2">
                    TIDAK
                </button>
            </div>
        </div>
    );
}

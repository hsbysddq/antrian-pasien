import React from "react";

export default function Petugas(props) {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <h1 className="text-4xl mb-8">Pilih Layanan</h1>
            <div className="text-xl">
                <button className="bg-slate-400 px-3 py-1 mr-8 rounded-md">
                    Petugas Panggil
                </button>
                <button className="bg-slate-400 px-3 py-1 mr-8 rounded-md">
                    Display
                </button>
                <button className="bg-slate-400 px-3 py-1 mr-8 rounded-md">
                    Administrasi
                </button>
            </div>
        </div>
    );
}

import React from "react";

export default function Homepage(props) {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <h1 className="text-4xl mb-3">Dashboard</h1>
            <h1 className="text-2xl mb-8">
                Faskes Tingkat lanjut "Rumah Sakit Ambunten"
            </h1>
            <div className="text-2xl">
                <button className="mr-8 px-4 py-1 bg-slate-500 rounded-md">
                    Pasien
                </button>
                <button className="px-4 py-1 bg-slate-500 rounded-md">
                    Petugas
                </button>
            </div>
        </div>
    );
}

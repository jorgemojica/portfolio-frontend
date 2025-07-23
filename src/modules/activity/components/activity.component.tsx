import React from 'react'

export default function Activity() {
    return (
        <div className=" flex gap-2 bg-gradient-to-br from-neutral-800 to-[#222222] px-4 py-8 rounded-xl shadow-lg">
            <div className="px-3">icono</div>
            <div className="flex flex-col gap-1">
                <h3 className="font-semibold text-white text-xl">Nombre de la actividad</h3>
                <p className="text-white">Resumen de la actividad</p>
            </div>
        </div>
    )
}
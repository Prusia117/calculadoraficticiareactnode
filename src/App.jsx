import { useState, useEffect } from 'react';
import Header from './components/Header';
import Button from './components/Button'
import { formatearDinero, calcularTotal } from './helpers/index';

export default function App() {

    const [cantidad, setCantidad] = useState(10000);
    const [meses, setMeses] = useState(6);
    const [total , setTotal] = useState(0);
    const [pagos, setPagos] = useState(0);

    useEffect(() => {
        setTotal(calcularTotal(cantidad, meses));
    },[cantidad, meses]);

    useEffect(() => {
        setPagos(total / meses);
    } , [total]);

    const MIN = 0;
    const MAX = 20000;
    const STEP = 100;

    const handleChange = function (e) {
        setCantidad(+e.target.value);
    }

    const handleClickMinus = function () {

        if (cantidad <= MIN) {
            alert('No puedes seleccionar menos de $0');
            return;
        }

        setCantidad(cantidad - STEP);
    }

    const handleClickPlus = function () {

        if (cantidad >= MAX) {
            alert('No puedes seleccionar más de $20,000');
            return;
        }

        setCantidad(cantidad + STEP);
    }

    return (
        <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
            <Header />



            <div className="flex justify-between my-6">

                <Button
                    operador="-"
                    fn={handleClickMinus}
                />

                <Button
                    operador="+"
                    fn={handleClickPlus}
                />

            </div>

            <input
                type="range"
                min={MIN}
                max={MAX}
                step={STEP}
                value={cantidad}
                className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
                onChange={handleChange}
            />

            <p className="text-center my-10 text-5xl font-extrabold text-indigo-600">
                {formatearDinero(cantidad)}
            </p>

            <h2 className="text-2xl font-extrabold text-gray-500 text-center">
                Elige un <span className="text-indigo-600"> Plazo </span> a pagar
            </h2>

            <select
                className="mt-5 w-full p-2 bg-white border border-gray-300 rounded-lg text-center text-xl font-bold"
                value={meses}
                onChange={e => setMeses(+e.target.value)}
            >

                <option value="6">6 Meses</option>
                <option value="12">12 Meses</option>
                <option value="24">24 Meses</option>


            </select>

            <div className="my-5 space-y-4 bg-gray-50 p-5">
                <h2 className="text-2xl font-extrabold text-gray-500 text-center">
                    Resumen <span className="text-indigo-600"> de pagos </span>
                </h2>
            </div>

            <div className="text-xl text-gray-500 text-center font-bold"> {meses} Meses</div>
            <div className="text-xl text-gray-500 text-center font-bold">{formatearDinero(total)} Total a pagar</div>
            <div className="text-xl text-gray-500 text-center font-bold">{formatearDinero(pagos)} Mensuales</div>

        </div>
    )
}
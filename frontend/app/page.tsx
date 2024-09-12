"use client";

import React from 'react';
import CandlestickChart from './charts/CandlestickChart';
import BarChart from './charts/BarChart';
import PieChart from './charts/PieChart';
import LineChart from './charts/LineChart';

const Dashboard = () => {
    return (
        <div className="container mx-auto p-4">
            <header className="items-center w-full h-16 shadow-lg bg-gray-100 rounded-2xl">
                <div className="relative z-20 justify-center p-4">
                    <h1 className='px-2 text-lg font-bold text-gray-800'>
                        GraphCore
                    </h1>
                </div>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10">
                <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-4 text-center">Candlestick Chart</h2>
                    <CandlestickChart />
                </div>
                <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-4 text-center">Line Chart</h2>
                    <LineChart />
                </div>
                <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-4 text-center">Bar Chart</h2>
                    <BarChart />
                </div>
                <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-4 text-center">Pie Chart</h2>
                    <PieChart />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
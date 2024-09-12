"use client";

import React from 'react';
import CandlestickChart from './charts/CandlestickChart';
import BarChart from './charts/BarChart';
import PieChart from './charts/PieChart';
import LineChart from './charts/LineChart';

const Dashboard = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6 text-center">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4 text-center">Candlestick Chart</h2>
                    <CandlestickChart />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4 text-center">Line Chart</h2>
                    <LineChart />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4 text-center">Bar Chart</h2>
                    <BarChart />
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4 text-center">Pie Chart</h2>
                    <PieChart />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
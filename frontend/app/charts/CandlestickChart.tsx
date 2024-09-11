import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    TimeScale,
    Tooltip,
    Legend,
} from 'chart.js';
import { CandlestickController, CandlestickElement } from 'chartjs-chart-financial';
import 'chartjs-adapter-date-fns';

// Register the necessary components and scales
ChartJS.register(
    CategoryScale,
    LinearScale,
    TimeScale,
    Tooltip,
    Legend,
    CandlestickController,
    CandlestickElement
);

// Define the Props Interface
interface CandlestickChartProps {
    width?: number;
    height?: number;
}

// Define the Data Interface
interface CandlestickData {
    t: number; // timestamp
    o: number; // open
    h: number; // high
    l: number; // low
    c: number; // close
}

const CandlestickChart: React.FC<CandlestickChartProps> = ({ width = 700, height = 400 }) => {
    const [data, setData] = useState<CandlestickData[]>([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/candlestick-data/')
            .then(response => {
                const formattedData = response.data.map((item: any) => ({
                    t: new Date(item.x).getTime(), // Convert date string to timestamp
                    o: item.o,
                    h: item.h,
                    l: item.l,
                    c: item.c,
                }));
                setData(formattedData);
            })
            .catch(error => {
                console.error('Error fetching candlestick data:', error);
            });
    }, []);

    if (data.length === 0) {
        return <div>Loading...</div>;
    }

    const chartData = {
        datasets: [
            {
                label: 'Candlestick Chart',
                data: data,
                borderColor: 'rgba(75,192,192,1)',
                backgroundColor: 'rgba(75,192,192,0.2)',
            },
        ],
    };

    const options = {
        scales: {
            x: {
                type: 'time' as const,
                time: {
                    unit: 'day' as const,
                },
            },
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div style={{ width: width, height: height }}>
            <Chart type="candlestick" data={chartData} options={options}/>
        </div>
    );
};

export default CandlestickChart;
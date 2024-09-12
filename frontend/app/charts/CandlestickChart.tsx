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
    ChartData,
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
    x: number; // timestamp
    o: number; // open
    h: number; // high
    l: number; // low
    c: number; // close
}

const CandleChart = ({ width = 700, height = 400 }: CandlestickChartProps) => {
    const [candlestickData, setCandlestickData] = useState<ChartData<'candlestick'>>({ datasets: [] });

    useEffect(() => {
        axios.get('http://localhost:8000/api/candlestick-data/')
            .then(response => {
                const fetchedData: CandlestickData[] = response.data;
                setCandlestickData({
                    datasets: [
                        {
                            label: 'Candlestick Chart',
                            data: fetchedData,
                            borderColor: 'rgba(75,192,192,1)',
                            backgroundColor: 'rgba(75,192,192,0.2)',
                        },
                    ],
                });
            })
            .catch(error => {
                console.error('Error fetching candlestick chart data:', error);
            });
    }, []);

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

    if (candlestickData.datasets.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ width: width, height: height }}>
            <Chart type="candlestick" data={candlestickData} options={options} />
        </div>
    );
};

export default CandleChart;
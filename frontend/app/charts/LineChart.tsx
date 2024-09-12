// frontend/app/charts/LineChart.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
    ChartData,
} from 'chart.js';

// Register the necessary components and scales
ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
);

// Define the Props Interface
interface LineChartProps {
    width?: number;
    height?: number;
}

const LineChart = ({ width = 700, height = 400 }: LineChartProps) => {
    const [lineData, setLineData] = useState<ChartData<'line'>>({ datasets: [] });

    useEffect(() => {
        axios.get('http://localhost:8000/api/line-chart-data/')
            .then(response => {
                const data = response.data;
                setLineData({
                    labels: data.labels,
                    datasets: [
                        {
                            label: 'Line Chart',
                            data: data.data,
                            borderColor: 'rgba(75,192,192,1)',
                            backgroundColor: 'rgba(75,192,192,0.2)',
                        },
                    ],
                });
            })
            .catch(error => {
                console.error('Error fetching line chart data:', error);
            });
    }, []);

    if (lineData.datasets.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ width: width, height: height }}>
            <Chart type="line" data={lineData} />
        </div>
    );
};

export default LineChart;
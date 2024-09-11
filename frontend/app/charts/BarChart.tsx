// frontend/app/charts/BarChart.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartData,
} from 'chart.js';

// Register the necessary components and scales
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

// Define the Props Interface
interface BarChartProps {
    width?: number;
    height?: number;
}

const BarChart: React.FC<BarChartProps> = ({ width = 700, height = 400 }) => {
    const [barData, setBarData] = useState<ChartData<'bar'>>({ datasets: [] });

    useEffect(() => {
        axios.get('http://localhost:8000/api/bar-chart-data/')
            .then(response => {
                const data = response.data;
                setBarData({
                    labels: data.labels,
                    datasets: [
                        {
                            label: 'Bar Chart',
                            data: data.data,
                            backgroundColor: 'rgba(75,192,192,0.2)',
                            borderColor: 'rgba(75,192,192,1)',
                            borderWidth: 1,
                        },
                    ],
                });
            })
            .catch(error => {
                console.error('Error fetching bar chart data:', error);
            });
    }, []);

    if (barData.datasets.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ width: width, height: height }}>
            <Chart type="bar" data={barData} />
        </div>
    );
};

export default BarChart;
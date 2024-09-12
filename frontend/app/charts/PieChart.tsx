// frontend/app/charts/PieChart.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    ChartData,
} from 'chart.js';

// Register the necessary components and scales
ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

// Define the Props Interface
interface PieChartProps {
    width?: number;
    height?: number;
}

const PieChart = ({ width = 400, height = 400 }: PieChartProps) => {
    const [pieData, setPieData] = useState<ChartData<'pie'>>({ datasets: [] });

    useEffect(() => {
        axios.get('http://localhost:8000/api/pie-chart-data/')
            .then(response => {
                const data = response.data;
                setPieData({
                    labels: data.labels,
                    datasets: [
                        {
                            label: 'Pie Chart',
                            data: data.data,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)',
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)',
                            ],
                            borderWidth: 1,
                        },
                    ],
                });
            })
            .catch(error => {
                console.error('Error fetching pie chart data:', error);
            });
    }, []);

    if (pieData.datasets.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div style={{ width: width, height: height }}>
            <Chart type="pie" data={pieData} />
        </div>
    );
};

export default PieChart;
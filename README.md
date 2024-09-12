# GraphCore

GraphCore a full-stack application with a Django backend and a Next.js frontend. The application includes various charts such as bar charts, line charts, pie charts, and candlestick charts.

## Table of Contents

- [Setup and Run](#setup-and-run)
- [Libraries and Tools Used](#libraries-and-tools-used)
- [Approach and Thought Process](#approach-and-thought-process)

## Setup and Run

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [Python](https://www.python.org/) (v3.8 or higher)
- [pip](https://pip.pypa.io/en/stable/installation/)
- [virtualenv](https://virtualenv.pypa.io/en/latest/installation.html)

### Backend Setup

1. **Navigate to the backend directory:**

    ```sh
    cd backend
    ```

2. **Create a virtual environment:**

    ```sh
    python -m venv venv
    ```

3. **Activate the virtual environment:**

    - On Windows:

        ```sh
        venv\Scripts\activate
        ```

    - On macOS/Linux:

        ```sh
        source venv/bin/activate
        ```

4. **Install the required packages:**

    ```sh
    pip install -r requirements.txt
    ```

5. **Run the Django development server:**

    ```sh
    python manage.py runserver
    ```

### Frontend Setup

1. **Navigate to the frontend directory:**

    ```sh
    cd frontend
    ```

2. **Install the required packages:**

    ```sh
    npm install
    ```

3. **Run the Next.js development server:**

    ```sh
    npm run dev
    ```

### Access Application

- The Django backend will be running at `http://localhost:8000`.
- The Next.js frontend will be running at `http://localhost:3000`.

## Libraries and Tools Used

### Backend (Django)

- **Django**: A high-level Python web framework that encourages rapid development and clean, pragmatic design.
- **Django REST framework**: A powerful and flexible toolkit for building Web APIs.

### Frontend (Next.js)

- **Next.js**: A React framework for production.
- **React**: A JavaScript library for building user interfaces.
- **Chart.js**: A simple yet flexible JavaScript charting library.
- **react-chartjs-2**: A React wrapper for Chart.js.
- **axios**: A promise-based HTTP client for the browser and Node.js.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.

## Approach and Thought Process

### Backend

- **Django**: Chosen for its robustness and ease of setting up a RESTful API.
- **Django REST framework**: Used to create API endpoints for fetching chart data.
- **Data Handling**: The backend handles data processing and serves it to the frontend in a format suitable for charting.

### Frontend

- **Next.js**: Selected for its server-side rendering capabilities and ease of integration with React.
- **Chart.js and react-chartjs-2**: Used for creating various types of charts due to their simplicity and flexibility.
- **axios**: Utilized for making HTTP requests to the backend API.
- **Tailwind CSS**: Chosen for its utility-first approach, making it easy to style components quickly.

### Integration

- **Data Fetching**: Each chart component fetches data from the Django backend using axios and renders it using Chart.js.
- **Component-Based Architecture**: The frontend is built using reusable React components, making it easy to manage and extend.

### Example Code Snippet

Here is an excerpt from the [`CandlestickChart.tsx`](command:_github.copilot.openRelativePath?%5B%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2Fc%3A%2FUsers%2Fishaa%2Fcode%2FfullStack%2Fgraphcore%2Ffrontend%2Fapp%2Fcharts%2FCandlestickChart.tsx%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%2263d7aa3c-8c83-4a95-b75e-f3515ae5cfe6%22%5D "c:\Users\ishaa\code\fullStack\graphcore\frontend\app\charts\CandlestickChart.tsx") file:

```tsx
// Define the Data Interface
interface CandlestickData {
    x: number; // timestamp
    o: number; // open
    h: number; // high
    l: number; // low
    c: number; // close
}

const CandleChart = () => {
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

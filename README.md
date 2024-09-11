# Weather Dashboard App

A Weather Dashboard application built with Node.js, Express, and React.js. The app provides real-time weather updates for multiple locations using a public weather API. Users can add locations, view current weather, and set weather alerts. The backend is powered by Node.js and Express, while the frontend is built using React.

## Features

- Real-time weather updates from a public API (e.g., OpenWeatherMap).
- Add and remove locations to get weather updates.
- Display graphical representation of weather trends over time.
- (Optional) User authentication to save preferences.
- Responsive design for both desktop and mobile devices.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js with Express.js
- **Database**: MongoDB or SQLite (for user data and preferences)
- **API**: OpenWeatherMap API or similar

## Project Structure

# Weather Dashboard App

A Weather Dashboard application built with Node.js, Express, and React.js. The app provides real-time weather updates for multiple locations using a public weather API. Users can add locations, view current weather, and set weather alerts. The backend is powered by Node.js and Express, while the frontend is built using React.

## Features

- Real-time weather updates from a public API (e.g., OpenWeatherMap).
- Add and remove locations to get weather updates.
- Display graphical representation of weather trends over time.
- (Optional) User authentication to save preferences.
- Responsive design for both desktop and mobile devices.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js with Express.js
- **Database**: MongoDB or SQLite (for user data and preferences)
- **API**: OpenWeatherMap API or similar

## Project Structure

```plaintext
weather-dashboard-app/
|-- backend
|   |-- README.md
|   |-- node_modules
|   |-- package-lock.json
|   |-- package.json
|   `-- src
|-- frontend
|   |-- README.md
|   |-- node_modules
|   |-- package-lock.json
|   |-- package.json
|   |-- public
|   `-- src
|-- readme.md
```
## To start

1. Clone the repo

```
git clone https://github.com/your-username/weather-dashboard-app.git
cd weather-dashboard-app
```
2. Install Backend dependencies

```
cd backend
npm install
```
3. Put below in .env file of backend

```
PORT=5000
WEATHER_API_KEY=your_openweathermap_api_key

```

4. Install frontend dependencies 

```
cd ../frontend
npm install
```

5. Start Backend

```
cd backend
npx nodemon src/app.js

```

6. Start Frontend

```
cd ../frontend
npm start
```

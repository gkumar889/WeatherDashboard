export const fetchWeatherData = async () => {
  const response = await fetch('/api/weather');
  const data = await response.json();
  return data;
};


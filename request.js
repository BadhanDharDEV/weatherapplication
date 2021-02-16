const key = '84b5348a6f5932ad338633780a010381';

const requestCity = async (city) => {
    const baseURL = 'http://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&appid=${key}`;


    const response = await fetch(baseURL + query);


    const data = await response.json();
    return data;

}

import LandingPage from "./components/landingpage";
import WeatherData from "./components/weatherdata";


const PATHS = {
    LANDING_PAGE:"/",
    WEATHERDATA:"/weatherdata"
}

export const PATHS_MAP = [
    {
    path: PATHS.LANDING_PAGE,
    component : <LandingPage />,
},
{
    path : PATHS.WEATHERDATA,
    component : <WeatherData />,
},
];
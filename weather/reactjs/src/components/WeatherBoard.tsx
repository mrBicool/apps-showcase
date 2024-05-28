import { Icon } from '@iconify-icon/react';
import { useEffect, useState } from 'react';
import WeatherBoardDay from './WeatherBoardDay';

// Define the types for location and error state
interface Location {
  lat: number | null;
  lon: number | null;
}


function WeatherBoard() {
    const [location, setLocation] = useState<Location>({ lat: null, lon: null });
    const [error, setError] = useState<string | null>(null);

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                setLocation({
                    lat: position.coords.latitude,
                    lon: position.coords.longitude,
                });
                    setError(null);
                    
                },
                (error) => {
                setError(error.message);
                }
            );
        } else {
            setError('Geolocation is not supported by this browser.');
        }
    };


    useEffect(() => {
        getLocation();
    }, []);
    
    return <>
        <div>
            <div className='text-center'>
                {error ? (
                    <p className="error">Error: {error}</p>
                ) : location.lat !== null && location.lon !== null ? (
                    <div>
                        {/* <p>Latitude: {location.lat}</p>
                        <p>Longitude: {location.lon}</p> */}
                            {location.lat}, {location.lon}
                    </div>
                ) : (
                    <p>Loading location...</p>
                )}
            </div>

            <div className="p-4 ring-8 ring-cyan-800 max-w-xl rounded-md bg-cyan-950 w-[500px] mt-4">
                <div className="font-semibold text-center">Olongapo Philippines</div>

                <div className="grid grid-cols-3 py-4">
                    <div className="h-[100px] flex items-start justify-center">
                        <div className="text-center">
                            <div>
                                <Icon icon="wi:day-cloudy" height={42}/>
                            </div>
                            <div>
                            Party Cloudy
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-start text-3xl font-thin">
                        <span >
                            29c
                        </span>
                    </div>
                    <div className='flex flex-col items-start justify-center'>
                        <div>
                            Wind:
                        </div>
                    
                        <div>
                            Precip:
                        </div> 

                        <div>
                            Pressure:
                        </div>
                        
                    </div>
                </div>

                <div className='grid grid-cols-5'>
                    <WeatherBoardDay dayOfWeek='Tue' iconName='wi:day-cloudy' temp='29c'/>
                    <WeatherBoardDay dayOfWeek='Wed' iconName='wi:day-cloudy' temp='29c'/>
                    <WeatherBoardDay dayOfWeek='Thu' iconName='wi:day-cloudy' temp='29c'/>
                    <WeatherBoardDay dayOfWeek='Fri' iconName='wi:day-cloudy' temp='29c'/>
                    <WeatherBoardDay dayOfWeek='Sat' iconName='wi:day-cloudy' temp='29c'/>
                </div>
            </div>
        </div>
    </>
}

export default WeatherBoard;
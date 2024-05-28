import { Icon } from '@iconify-icon/react';

interface Props {
    dayOfWeek: string,
    iconName: string,
    temp: string
}

const WeatherBoardDay = ({dayOfWeek, iconName, temp}: Props) => {
    return <>
        <div className='text-center'>
            <div>{dayOfWeek}</div>
            <div><Icon icon={iconName} height={42}/></div>
            <div>{temp}</div>
        </div>
  
    </>
  
}

export default WeatherBoardDay
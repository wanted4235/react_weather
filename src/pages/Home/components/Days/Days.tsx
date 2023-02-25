import React from 'react'
import s from '../Days/Days.module.scss';
import { Card } from './Card';

type Props = {}

export interface Day {
    day: string;
    day_info: string;
    icon_id: string,
    temp_day: string,
    temp_night: string,
    info: string,
};

export const Days = (props: Props) => {

    const days: Day[] = [
        {
            day: 'Сегодня',
            day_info: '28 авг',
            icon_id: 'wheather1',
            temp_day: '+18°',
            temp_night: '+15°',
            info: 'Облачно',
        },
        {
            day: 'Завтра',
            day_info: '29 авг',
            icon_id: 'wheather2',
            temp_day: '+15°',
            temp_night: '+10°',
            info: 'Небольшой дождь',
        },
        {
            day: 'Пн',
            day_info: '28 авг',
            icon_id: 'wheather1',
            temp_day: '+18°',
            temp_night: '+15°',
            info: 'Облачно',
        },
        {
            day: 'Вт',
            day_info: '28 авг',
            icon_id: 'wheather1',
            temp_day: '+18°',
            temp_night: '+15°',
            info: 'Облачно',
        },
        {
            day: 'Ср',
            day_info: '28 авг',
            icon_id: 'wheather1',
            temp_day: '+18°',
            temp_night: '+15°',
            info: 'Облачно',
        },
        {
            day: 'Чт',
            day_info: '28 авг',
            icon_id: 'wheather1',
            temp_day: '+18°',
            temp_night: '+15°',
            info: 'Облачно',
        },
        {
            day: 'Пт',
            day_info: '28 авг',
            icon_id: 'wheather1',
            temp_day: '+18°',
            temp_night: '+15°',
            info: 'Облачно',
        },
    ];

    return (
        <div className={s.days}>
            {days.map((day: Day) => (
                <Card day_item={day} />
            ))}
        </div>
    )
}
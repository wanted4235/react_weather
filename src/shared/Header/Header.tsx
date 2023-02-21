import React from 'react'
import Select from 'react-select'
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector'
import s from '../Header/Header.module.scss'

type Props = {}

export const Header = (props: Props) => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}>
                    <GlobalSvgSelector id='header-logo' />
                </div>
                <div className={s.title}>React weather</div>
            </div>
            <div className={s.wrapper}>
                <div className={s.change_theme}>
                    <GlobalSvgSelector id='change-theme' />
                    <Select options={options} />
                </div>
            </div>
        </header>
    )
}
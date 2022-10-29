import React, {useState} from 'react'
import Affairs from './affairs/Affairs'
import s2 from '../../s1-main/App.module.css'
import {constants} from "os";
//import priority = module

/*
* 1 - описать типы AffairPriorityType, AffairType OK
* 2 - указать нужный тип для defaultAffairs OK
* 3 - дописать типы и логику функции filterAffairs и проверить её тестами OK
* 4 - выполнить пункт 3 для функции deleteAffair OK
* 5 - указать нужный тип в useState с affairs OK
* 6 - дописать тип и логику функции deleteAffairCallback OK
* 7 - в файле Affairs.tsx дописать типизацию пропсов OK
* 8 - в файле Affairs.tsx дописать логику функций setAll, setHigh, setMiddle, setLow
* 9 - в файле Affair.tsx дописать типизацию пропсов
* 10 - в файле Affair.tsx дописать функции deleteCallback и использовать
* 11 - в файле Affair.tsx отобразить приходящие данные
* */

// types
// export type AffairPriorityType = any // need to fix any /1
export type AffairPriorityType = 'low' | 'middle' | 'high'  // need to fix any
export type AffairType = {
    // _id: any //2 need to fix any
    _id: number // need to fix any
    // name: any // need to fix any
    name: string //3 need to fix any
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

// constants
// const defaultAffairs: any = [ //4 need to fix any
const defaultAffairs: Array<AffairType> = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'}, // студенты могут изменить содержимое name и количество элементов в массиве, ...priority не менять!
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
// export const filterAffairs = (affairs: any, filter: any): any => { //5 need to fix any
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): Array<AffairType> => { // need to fix any
    //ДОБАВИЛ
    if (filter === 'all') {
        return affairs
    }

    return affairs.filter(el => el.priority === filter) // need to fix
}
/////////////////
// export const deleteAffair = (affairs: any, _id: any): any => { // need to fix any
export const deleteAffair = (affairs: Array<AffairType>, _id: number): Array<AffairType> => { //6 need to fix any
    //ДОБАВИЛ
    return affairs.filter((t) => t._id !== _id)
}

function HW2() {
    // const [affairs, setAffairs] = useState<any>(defaultAffairs) // need to fix any
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) //7 need to fix any
    const [filter, setFilter] = useState<FilterType>('all') //

    const filteredAffairs = filterAffairs(affairs, filter)
    // const deleteAffairCallback = (_id: any) => { //8 need to fix any
    const deleteAffairCallback = (_id: number) => { // need to fix any
        setAffairs(deleteAffair(affairs, _id))
        // need to fix
    }

    return (
        <div id={'hw2'}>
            <div className={s2.hwTitle}>Homework #2</div>
            <div className={s2.hw}>
                <Affairs
                    data={filteredAffairs}
                    setFilter={setFilter}
                    deleteAffairCallback={deleteAffairCallback}
                    filter={filter}
                />
            </div>
        </div>
    )
}

export default HW2

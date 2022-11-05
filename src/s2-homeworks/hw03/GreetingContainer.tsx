import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import {pureAddUserCallback, UserType} from './HW3'

// type GreetingContainerPropsType = {
//     users: any // need to fix any
//     addUserCallback: any // need to fix any
// }
type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: () => void // need to fix any
}

// export const pureAddUser = (name: any, setError: any, setName: any, addUserCallback: any) => {
//     // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
// }

export const pureAddUser = (name: string, setError: boolean, setName: any, addUserCallback: any) => {
    if (name.trim() === '') {
        pureOnBlur('', setError)
    } else {

        pureOnEnter('Enter', name)
    }
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
}

export const pureOnBlur = (name: string, setError: any) => { // если имя пустое - показать ошибку
    if(name.trim() === '') {
        setError('Ошибка! Введите имя!')
    }
}

export const pureOnEnter = (e: any, addUser: any) => { // если нажата кнопка Enter - добавить
    if (e.key === 'Enter') {
        addUser(addUser)
    }
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    // const [name, setName] = useState<any>('') // need to fix any
    const [name, setName] = useState<any>('') // need to fix any
    // const [error, setError] = useState<any>('') // need to fix any
    const [error, setError] = useState<any>(false) // need to fix any

    // const setNameCallback = (e: any) => { // need to fix any
    //     setName('some name') // need to fix
    //
    //     error && setError('')
    // }

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
            setName(e.currentTarget.value) // need to fix

            error && setError(false)
        }

    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: any) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = 0 // need to fix
    const lastUserName = 'some name' // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer

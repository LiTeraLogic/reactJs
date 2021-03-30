import React, { useEffect, useState, useCallback } from "react";
import Message from "./message";
import {AUTHORS} from "../utils/constants"
import "./app.scss";

const MessageField = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([{text: 'New chat create', author: AUTHORS.BOT}]);

    /**
     * Ловит изменения поля input
     * @param event
     */
    const handleChange = (event) => {
        setMessage(event.target.value);
    }


    /**
     * Ответ бота
     */
    useEffect(() => {
        if (messages[messages.length - 1].author === AUTHORS.ME){
            setTimeout(() => {
                setMessages([...messages, {text: 'This answer from bot', author: AUTHORS.BOT}])},
                1000);
        }
    }, [messages]);

    //
    /**
     * Добавление отправленного сообщения в массив сообщений
     * @param event
     */
    const handleSubmit = (event) => {
        setMessages([...messages, {text: message, author: AUTHORS.ME}]);
        event.preventDefault();
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Input message:
                    <input type="text" placeholder='Text here' onChange={handleChange} />
                </label>
                <input className="button-line" type="submit" value="Отправить" />
            </form>
            <h1>
                Messages
            </h1>
            {messages.map((text, i) => (
                <Message author={text.author} text={text.text} i={i} key={i}/>
            ))}


        </>
    );
};


export default MessageField;
import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default ({ language, text }) => {
    const [translated, setTranslated] = useState('')
    const [debouncedText, setDebouncedText] = useState(text)

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text) // means that if text dependency is change this useEffect will run
        }, 500);

        return () => clearTimeout(timerId)
    }, [text])

    useEffect(() => {
        const doTranslation = async () => {
            const { data: { data: { translations } } } = await axios.post(`https://translation.googleapis.com/language/translate/v2`, {}, {
                params: {
                    q: debouncedText,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            })
            setTranslated(translations[0].translatedText)
        }
        doTranslation()

    }, [language, debouncedText])

    
    return (
        <div>
            <h1 className="ui header">{translated}</h1>
        </div>
    )
}
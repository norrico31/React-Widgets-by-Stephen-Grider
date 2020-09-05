import React, { useState } from 'react'
import Dropdown from './Dropdown'
import Convert from './Convert'

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Dutch',
        value: 'nl'
    }
]

export default () => {
    const [language, setLanguage] = useState(options[0])
    const [text, setText] = useState('')

    const handleOnChange = e => {
        setText(e.target.value)
    }

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label htmlFor="toEnterText">Enter Text</label>
                    <input type="text" id="toEnterText" value={text} onChange={handleOnChange}/>
                </div>
            </div>
            <Dropdown label="Select a Language" options={options} language={language} setLanguage={setLanguage} />
            <hr />
            <h3 className="ui header">Output</h3>
            <Convert text={text} language={language} />
        </div>
    )
}
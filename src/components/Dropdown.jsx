import React, { useState, useEffect, useRef } from 'react'

const Dropdown = ({ options, language, setLanguage, label }) => {
    const [open, setOpen] = useState(false)
    const ref = useRef()

    useEffect(() => {
        const onBodyClick = event => {
            if (ref.current.contains(event.target)) return

            setOpen(prevOpen => prevOpen = false)
        }

        document.body.addEventListener('click', onBodyClick)

        return () => {
            document.body.removeEventListener('click', onBodyClick)
        }
    }, [])
    
    const renderedOptions = options.map(option => {
        if (option.value === language.value) return null
         
        return (
            <div key={option.value} className="item" onClick={() => setLanguage(option)}>
                {option.label}
            </div>
        )
    })

    return (
        <div className="ui form" ref={ref}>
            <div className="field">
                <label className="label">{label}</label>
                <div className={`ui selection dropdown ${open ? 'visible active' : '' }`} onClick={() => setOpen(prevOpen => !prevOpen)}>
                    <i className="dropdown icon"></i>
                    <div className="text">{language.label}</div>
                    <div className={`menu ${open && 'visible transition'}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown

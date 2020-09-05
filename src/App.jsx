import React, { useState } from 'react'
import Translate from './components/Translate'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Dropdown from './components/Dropdown'
import Route from './components/Route'
import Header from './components/Header'
import Link from './components/Link'

const items = [
    {
        title: 'What is React?',
        content: 'React is a front-end javascript library'
    },
    {
        title: 'Why use React',
        content: 'React is a favorite js library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating small pieces of components'
    }
]

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'A Shade of Blue',
        value: 'blue'
    }
]

const App = () => {
    const [language, setLanguage] = useState(options[0])
    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items} /> 
            </Route>
            <Route path="/list">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown label="Select a Color" options={options} language={language} setLanguage={setLanguage}/>
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    )
}

export default App

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Result from './SearchResult'

export default () => {
    const [term, setTerm] = useState('tokyo ravens')
    const [debouncedTerm, setDebouncedTerm] = useState(term)
    const [results, setResults] = useState([])

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term)
        }, 1000)

        return () => {
            clearTimeout(timerId)
        }
    }, [term])

    useEffect(() => {
        const search = async () => {
            const { data: { query: { search } } } = await axios.get(`https://en.wikipedia.org/w/api.php`, {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm
                }
            })
            setResults(search)
        }

        search()
    }, [debouncedTerm])

    const result = results.map(result => (
        <Result result={result} key={result.pageid} />
    ))

    return (
        <>
            <div className="ui form">
                <div className="field">
                    <label htmlFor="">Enter Search Term</label>
                    <input type="text" className="input" value={term} onChange={e => setTerm(e.target.value)}/>
                </div>
            </div>
            <div className="ui celled list">
                {result}
            </div>
        </>
    )
}
import React from 'react'

export default ({ href, className, children}) => {
    const handleOnClick = event => {
        if (event.metaKey || event.ctrlKey) return 
        
        event.preventDefault()
        window.history.pushState({}, '', href)

        const navEvent = new PopStateEvent('popstate')
        window.dispatchEvent(navEvent)
    }

    return <a href={href} className={className} onClick={handleOnClick}>{children}</a>
}
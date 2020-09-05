import React from 'react'

export default ({ result }) => {
    return (
        <div className="item">
            <div className="right floated content">
                {/* eslint-disable-next-line react/jsx-no-target-blank */}
                <a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`} target="_blank">Go</a>
            </div>
            <div className="content">
                <div className="header">
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                    {result.title}
                </div>
            </div>
        </div>
    )
}
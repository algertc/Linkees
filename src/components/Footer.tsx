import React from 'react'

import '../css/skeleton.css'
import '../css/normalize.css'
import '../css/components.css'

function Footer(): JSX.Element {
    return (
        <div className="Footer container">
            <p>Source For This Page Can Be Found on My <a href={"https://github.com/algertc/Linkees"}>GitHub!</a></p>
        </div>
    )
}

export default Footer

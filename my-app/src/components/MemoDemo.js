import React from 'react'

function MemoDemo({name}) {
    console.log('Memo Demo')
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoDemo)

import React, {useState} from 'react'

function Sort({displayListings, setDisplayListings}) {
    function handleSort() {
        const newList = [...displayListings].sort((a, b) => {
            const locationA = a.location.toLowerCase()
            const locationB = b.location.toLowerCase()

            if (locationA < locationB) {
                return -1
            }
            if (locationA > locationB) {
                return 1
            }
            return 0
        })

        setDisplayListings(newList)
    }
    
    return(
        <button onClick={handleSort}>Sort</button>
    )
}

export default Sort
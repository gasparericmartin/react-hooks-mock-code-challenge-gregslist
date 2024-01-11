import React, {useState} from 'react'

function AddNewListing({displayListings, setDisplayListings}) {
    const emptyListing = {
        description: '',
        image: '',
        location: ''
        }
   const [newListing, setNewListing] = useState(emptyListing)
   
    function handleSubmit(e) {
        e.preventDefault()
        fetch('http://localhost:6001/listings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newListing)
        })
        .then((response) => response.json())
        .then((newItemObject) => setDisplayListings([...displayListings, newItemObject]))
        .then(setNewListing(emptyListing))
    }
    
    return(
        <form className='addNewListing' onSubmit={handleSubmit}>
            <div>
            <input
            type='text'
            placeholder='Description'
            value={newListing.description}
            onChange={(e) => {
                setNewListing({...newListing, description: e.target.value})
            }}
            />
            </div>
            <div>
            <input 
            type='text'
            placeholder='Image'
            value={newListing.image}
            onChange={(e) => {
                setNewListing({...newListing, image: e.target.value})
            }}
            />
            </div>
            <div>
            <input 
            type='text'
            placeholder='Location'
            value={newListing.location}
            onChange={(e) => {
                setNewListing({...newListing, location: e.target.value})
            }}/>
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default AddNewListing
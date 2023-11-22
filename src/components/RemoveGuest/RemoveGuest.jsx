import axios from "axios"

function RemoveGuest() {

    function DeleteGuestItem(event) {
        console.log('deleting....')
        console.log(event.target.closest)
        // axios({
        //     method: 'DELETE',
        //     url: '/guests'
        //     data: 
        // })
    }

    return(
        <button onClick={DeleteGuestItem}>
            Delete
        </button>
    )
}

export default RemoveGuest

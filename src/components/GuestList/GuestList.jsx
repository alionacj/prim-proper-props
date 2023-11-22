import RemoveGuest from "../RemoveGuest/RemoveGuest"

function GuestList({guestList}) {
    return (
        <>
            <h2>Guest List</h2>
            <table>
            <thead>
                <tr>
                <th>Name</th>
                <th>Kid's Meal</th>
                <th>Remove Guest</th>
                </tr>
            </thead>
            <tbody>
                {guestList.map(guest => (
                <tr key={guest.id}>
                    <td>{guest.name}</td>
                    <td>{String(guest.kidsMeal)}</td>
                    <td><RemoveGuest /></td>
                </tr>
                ))}
            </tbody>
            </table>
        </>
    )
}

export default GuestList

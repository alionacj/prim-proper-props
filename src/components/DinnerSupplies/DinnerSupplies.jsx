import SilverWare from "../SilverWare/SilverWare"

function DinnerSupplies({guestList}) {
    return (
        <>
            <h2>Dinner Supplies</h2>
            <SilverWare guestList={guestList} supplyType={"Spoons"}/>
            <SilverWare guestList={guestList} supplyType={"Forks"}/>
            <SilverWare guestList={guestList} supplyType={"Knives"}/>
        </>
    )
}

export default DinnerSupplies

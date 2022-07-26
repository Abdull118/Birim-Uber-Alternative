import { DragRotateHandler } from "mapbox-gl";
import {useEffect, useState} from "react";
import tw from "tailwind-styled-components"
import Map from './components/Map'
import {useRouter} from 'next/router'
import RideSelector from "./components/RideSelector";
import Link from 'next/link'

const Confirm = () => {
    const router = useRouter()
    const {pickup, dropoff} = router.query
    const [pickupCoordinates, setPickUpCoordinates] = useState([0, 0])
    const [dropOffCoordinates, setDropOffCoordinates] = useState([0, 0])
    
const getCoorindatesPickup = (pickup) => {
    fetch (`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` + 
    new URLSearchParams({
        access_token: "pk.eyJ1IjoiYWJkdWxsMTE4IiwiYSI6ImNsNXhyYmNwbjA5bHIzY3J6aGM0N3U2cWkifQ.6iy9G49UGoRv3r6RGR_BiQ",
        limit: 1
    })
)
    .then(res => res.json())
    .then(data =>{
        setPickUpCoordinates(data.features[0].center)
    })
}

const getCoorindatesDropOff = (dropoff) => {
    fetch (`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` + 
    new URLSearchParams({
        access_token: "pk.eyJ1IjoiYWJkdWxsMTE4IiwiYSI6ImNsNXhyYmNwbjA5bHIzY3J6aGM0N3U2cWkifQ.6iy9G49UGoRv3r6RGR_BiQ",
        limit: 1
    })
)
    .then(res => res.json())
    .then(data =>{
        setDropOffCoordinates(data.features[0].center)
    })
}


useEffect(()=>{
    getCoorindatesPickup(pickup);
    getCoorindatesDropOff(dropoff);
}, [pickup, dropoff])



    return (
        <Wrapper>
            
            <ButtonContainer>
            <Link href='search'>
                <BackButton src ="http://img.icons8.com/ios-filled/50/000000/left.png" />
            </Link>
            </ButtonContainer>
            <Map 
                pickupCoordinates = {pickupCoordinates}
                dropOffCoordinates = {dropOffCoordinates}/>
    


            <RideContainer>
                <RideSelector 
                pickupCoordinates = {pickupCoordinates}
                dropOffCoordinates = {dropOffCoordinates}/>
                <ConfirmContainer>
                <ConfirmButton>Confirm</ConfirmButton>
                </ConfirmContainer>
            </RideContainer>
        </Wrapper>
    )

}

export default Confirm

const Wrapper = tw.div`
flex
flex-col
h-screen`

const RideContainer = tw.div`
flex
flex-col
flex-1
h-1/2`

const ConfirmContainer = tw.div`
border-t-2`

const ConfirmButton = tw.div`
flex
bg-white
m-4
h-30
px-4
items-center
flex-col
transform hover:scale-105
transition
text-lg
text-black
rounded-full
cursor-pointer
`

const BackButton = tw.img`
h-full
object-contain`

const ButtonContainer = tw.div`
bg-white
px-4
rounded-full
absolute
top-4
left-4
z-10
bg-white
shadow-md
cursor-pointer
`



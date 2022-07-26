import {useState} from "react";
import tw from "tailwind-styled-components"
import Link from 'next/link'

const Search = () => {

    const [pickup, setPickUp] = useState('')
    const [dropoff, setDropOff] = useState('')

    return (
        <Wrapper>
            <Link href='/'>
            <ButtonContainer>
                <BackButton src ="http://img.icons8.com/ios-filled/50/000000/left.png" />
            </ButtonContainer>
            </Link>
            <InputContainer>
                <FronToIcons>
                    <CircleImg src ="http://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png"/>
                    <Line src="http://img.icons8.com/ios/50/9CA3AF/vertical-line.png" />
                    <DarkCircle src ="https://img.icons8.com/windows/32/000000/square-full.png"/>
                </FronToIcons>
                <InputBoxes>
                    <Input 
                    value ={pickup}
                    placeholder="Enter Pick Up Location" 
                    onChange={(e)=> setPickUp(e.target.value)}/>

                    <Input 
                    value = {dropoff}
                    placeholder="Enter Destination" 
                    onChange={(e)=> setDropOff(e.target.value)}/>
                </InputBoxes>

                <PlusButton src="http://img.icons8.com/ios/50/000000/plus-math.png"/>
            </InputContainer>

            <SavedPlaces>
                <StarIcon src="http://img.icons8.com/ios-filled/ffffff/star--v1.png" />
                Saved Places
            </SavedPlaces>

        <Link href={{
            pathname: "/confirm",
            query: {
                pickup: pickup,
                dropoff: dropoff,
            }
        }}>
            <ConfirmButton>
                Confirm Location
            </ConfirmButton>
            </Link>
        </Wrapper>
    )
}

export default Search

const Wrapper = tw.div`
bg-gray-200
h-screen`

const BackButton = tw.img`
h-12
cursor-pointer`

const ButtonContainer = tw.div`
bg-white
px-4`

const InputContainer =tw.div`
bg-white
flex
items-center
px-4
mb-2`

const FronToIcons = tw.div`
w-10
flex
flex-col
mr-2
items-center
`

const CircleImg = tw.img`
h-2.5
w-2.5
`
const Line = tw.img`
h-10`

const DarkCircle = tw.img`
h-3
w-3`

const InputBoxes = tw.div`
flex
flex-col
flex-1
`

const Input = tw.input`
h-10
bg-gray-200
my-2
rounded-5
p-2
outline-none
border-none
text-black
`

const PlusButton = tw.img`
h-10
w-10
bg-gray-200
rounded-full
ml-3`

const SavedPlaces = tw.div`
flex
items-center
bg-white
px-4
py-2
text-black`

const StarIcon = tw.img`
bg-gray-400
w-10
h-10
p-2
rounded-full
m-2`

const ConfirmButton = tw.div`
flex
bg-black
flex-1
m-4
h-30
px-4
items-center
flex-col
transform hover:scale-105
transition
text-lg
cursor-pointer`


import {useEffect, useState} from "react";
import tw from "tailwind-styled-components"
import {useRouter} from 'next/router'
import {signInWithPopup, onAuthStateChanged, signInAnonymously} from 'firebase/auth'
import {auth, provider} from '../firebase'
import Link from 'next/link'
import { sign } from "crypto";

const Login = () => {
    const router = useRouter()

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if(user) {
                router.push('/')
            }
        })
    }, [])
    return (
        <Wrapper>
            <Birim>Birim</Birim>
            <Title>Log in to Access your account</Title>
            <HeadImage src='https://i.ibb.co/CsV9RYZ/login-image.png' />
            <SignButton onClick = {() => signInWithPopup(auth, provider)}> Sign In with Google</SignButton>
            <SignGButton onClick = {() => signInAnonymously(auth, provider)}> Sign In as Guest</SignGButton>
        </Wrapper>
    )
}

export default Login

const Wrapper = tw.div`
bg-black
flex
flex-col
h-screen
w-screen
p-4
`

const SignButton = tw.button`
bg-white
text-black
text-center
py-4
mt-8
self-center
w-full
cursor-pointer
transform hover:scale-105
transition
rounded-full
`

const Birim = tw.div`
text-4xl
self-start
`

const Title = tw.div`
text-5xl
pt-4
text-gray-500`

const HeadImage = tw.img`
    object-contain w-full
`

const SignGButton = tw.div`
bg-white
text-black
text-center
py-4
mt-8
self-center
w-full
cursor-pointer
transform hover:scale-105
transition
rounded-full
`
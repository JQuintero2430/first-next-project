// import {useEffect} from 'react'
import Head from 'next/head'
import Image from 'next/image';


function About(/*{data}*/){

    // useEffect(() => {
    //     alert('You are in About')
    // }, [])
    return(
        <div>
            <Head>
                <title>About</title>
                <meta name="description" content='First page with Next.js'/>
            </Head>
            <h1 id="firstTitle">About Page</h1>
            <Image src='/background.jpg' alt='' width="626px" height="352px" layout='responsive'/>
            <p>This is the about page</p>

            <button id="buttonClick" onClick={()=> alert('Clicked')}>
                Click
            </button>
        </div>
    )
}

/*
export async function getServerSideProps(context){
    //fetch
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()
    console.log(data)

    return {
        props: {
            data
        }
    }
}*/

export default About;
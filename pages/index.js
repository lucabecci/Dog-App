import Head from "next/head";
import { useContext, useEffect } from "react";
import FirstSection from "../components/Home/FirstSection";
import SecondSection from "../components/Home/SecondSection";
import Navbar from "../components/Navbar";
import DogContext from "../context/Dog/DogContext";

export default function Home() {
    const dogContext = useContext(DogContext);
    useEffect(() => {
        dogContext.getDogs();
    }, []);

    return (
        <>
            <Head>
                <title>Dog App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <FirstSection />
            <SecondSection />
        </>
    );
}

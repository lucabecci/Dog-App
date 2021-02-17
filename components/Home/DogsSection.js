import { useContext, useEffect } from "react";
import DogContext from "../../context/Dog/DogContext";
import Card from "../Card";

const DogsSection = () => {
    const dogContext = useContext(DogContext);
    let i = 0;
    useEffect(() => {}, [dogContext.dogs]);
    return (
        <>
            {dogContext.dogs.map((dog) => (
                <Card img={dog} key={i++} />
            ))}
        </>
    );
};

export default DogsSection;

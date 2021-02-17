import { useContext } from "react";
import DogContext from "../../context/Dog/DogContext";
import DogsSection from "./DogsSection";

const SecondSection = () => {
    const dogContext = useContext(DogContext);
    const change = (e) => {
        e.preventDefault();
        dogContext.getDogs();
    };

    return (
        <>
            <section className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                            DOGS GALLERY
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            Get pretties images of dogs for your PC, SMARTPHONE
                            or other dispositives. Use the reload for change the
                            images and get others
                        </p>
                        <button
                            className="flex mx-auto mt-5 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                            onClick={(e) => change(e)}
                        >
                            RELOAD
                        </button>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        <DogsSection />
                    </div>
                </div>
            </section>
        </>
    );
};

export default SecondSection;

const Card = ({ img }) => {
    return (
        <>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                <a className="block relative h-48 rounded overflow-hidden">
                    <img
                        alt="dog"
                        className="object-cover object-center w-full h-full block rounded"
                        src={img}
                    ></img>
                </a>
                <a href={img} target="blank">
                    <button className="flex mx-auto mt-5 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        Get Image
                    </button>
                </a>
            </div>
        </>
    );
};

export default Card;

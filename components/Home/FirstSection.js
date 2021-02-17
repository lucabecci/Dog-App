const FirstSection = () => {
    return (
        <>
            <section className="text-gray-900 bg-white body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            Dogs Gallery APP
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            Where you can find images for your dispositive and
                            other systems. You can see the full image and
                            download in the URL.
                        </p>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-4/6">
                        <img
                            src="https://ouch-cdn.icons8.com/preview/256/66bd31f3-7d8b-4959-8d62-bcc8164192c9.png"
                            alt=""
                        />
                    </div>
                </div>
            </section>
        </>
    );
};

export default FirstSection;

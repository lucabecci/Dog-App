import "../styles/tailwind.css";
import DogState from "../context/Dog/DogState";
function MyApp({ Component, pageProps }) {
    return (
        <DogState>
            <Component {...pageProps} />
        </DogState>
    );
}

export default MyApp;

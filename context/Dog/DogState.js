import React, { useReducer } from "react";
import axios from "axios";

import DogContext from "./DogContext";
import DogReducer from "./DogReducer";

import { GET_DOGS } from "../types";

const DogState = (props) => {
    const proxy = process.env.PROXY || "https://dog.ceo/api";
    const initialState = {
        dogs: [],
        error: false,
        message: "",
    };

    const [state, dispatch] = useReducer(DogReducer, initialState);

    const getDogs = async () => {
        let data = {
            dogs: [],
            error: false,
            message: "",
        };
        try {
            const dogsResponse = await axios.get(
                `${proxy}/breeds/image/random/8`
            );
            data.dogs = dogsResponse.data.message;
            dispatch({ type: GET_DOGS, payload: data });
            return data;
        } catch (e) {
            data.error = true;
            data.message = e.response.data.message;
            dispatch({ type: GET_DOGS, payload: data });
            return data;
        }
    };
    return (
        <DogContext.Provider
            value={{
                dogs: state.dogs,
                error: state.error,
                message: state.message,
                getDogs,
            }}
        >
            {props.children}
        </DogContext.Provider>
    );
};

export default DogState;

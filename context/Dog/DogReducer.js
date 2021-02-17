import { GET_DOGS } from "../types";

export default (state, action) => {
    const { payload, type } = action;

    switch (type) {
        case GET_DOGS:
            return {
                ...state,
                dogs: payload.dogs,
                error: payload.error,
                message: payload.message,
            };
    }
};

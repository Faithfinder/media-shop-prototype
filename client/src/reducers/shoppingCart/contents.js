import {
    CART_ADD_RESPONSE,
    CART_CHECK_RESPONSE,
    CART_EMPTY
} from "../../actions/types";

export default (state = {}, { type, payload, error }) => {
    switch (type) {
        case CART_ADD_RESPONSE:
        case CART_CHECK_RESPONSE:
            if (!error) {
                return payload;
            }
            return state;
        case CART_EMPTY:
            return {};
        default:
            return state;
    }
};
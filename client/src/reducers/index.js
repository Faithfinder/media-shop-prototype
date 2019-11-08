import { combineReducers } from "redux";
import user from "./user";
import socket from "./socket";
import shoppingCart from "./shoppingCart";
import items from "./items";
import ui from "./ui";

export default combineReducers({ user, socket, shoppingCart, items, ui });

import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

function* fetchOrder() {
  try {
    const response = yield axios.get("/api/orders");
    const order = response.data;
    console.log("get all ", order);

    yield put({ type: "SET_ORDER", payload: order });
  } catch (error) {
    console.log("User get order failed", error);
  }
}

function* getNewOrder(action) {
  try {
    console.log("new order payload", Number(action.payload));
    const response = yield axios.get(
      `/api/orders/new-order/${Number(action.payload.id)}`
    );
    yield put({ type: "SET_NEW_ORDER", payload: response.data });
  } catch (err) {
    console.log("Error in GETting new order", err);
  }
}

function* addOrder(action) {
  try {
    yield axios.post("/api/orders/add-order", action.payload);
    // yield put({
    //   type: "FETCH_ORDER",
    // });
  } catch (error) {
    console.log("User post order failed", error);
  }
}

function* getSpecificOrder(action) {
  try {
    // passes the username and password from the payload to the server
    const response = yield axios.get(
      `/api/events/specific-orders/${Number(action.payload.id)}`
    );
    yield put({ type: "SET_SPECIFIC_ORDER", payload: response.data });
  } catch (err) {
    console.log("Error with getting specific user events", err);
  }
}

function* orderSaga() {
  yield takeLatest("FETCH_ORDER", fetchOrder);
  yield takeLatest("ADD_ORDER", addOrder);
  yield takeLatest("GET_SPECIFIC_ORDER", getSpecificOrder);
  yield takeLatest("GET_NEW_ORDER", getNewOrder);
}

export default orderSaga;

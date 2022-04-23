import { AppDispatch } from "../..";
import UserService from "../../../api/UserService";
import { IEvent } from "../../../models/IEvent";
import { IUser } from "./../../../models/IUser";
import { EventActionEnum, SetEventsActions, SetGuestsActions } from "./types";

export const EventActionCreators = {
  setGuests: (payload: IUser[]): SetGuestsActions => ({
    type: EventActionEnum.SET_GUESTS,
    payload,
  }),
  setEvents: (payload: IEvent[]): SetEventsActions => ({
    type: EventActionEnum.SET_EVENTS,
    payload,
  }),
  fetchGuests: () => async (dispatch: AppDispatch) => {
    try {
      const response = await UserService.getUsers();
      dispatch(EventActionCreators.setGuests(response.data));
    } catch (e) {
      console.log(e);
    }
  },
  createEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem("events") || "[]";
      const json = JSON.parse(events) as IEvent[];
      json.push(event);
      dispatch(EventActionCreators.setEvents(json));
      localStorage.setItem("events", JSON.stringify(json));
    } catch (e) {
      console.log(e);
    }
  },
  fetchEvent: (username: string) => async (dispatch: AppDispatch) => {
    try {
      const events = localStorage.getItem("events") || "[]";
      const json = JSON.parse(events) as IEvent[];
      const currentEvents = json.filter(
        (event) => event.author === username || event.guest === username
      );
      dispatch(EventActionCreators.setEvents(currentEvents));
    } catch (e) {
      console.log(e);
    }
  },
};

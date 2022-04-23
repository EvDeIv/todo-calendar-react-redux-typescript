import { Calendar } from "antd";
import { FC } from "react";
import { IEvent } from "../models/IEvent";
import { Moment } from "moment";
import { formatDate } from "./../utils/date";

interface EventCalendarProps {
  events: IEvent[] | [];
}

export const EventCalendar: FC<EventCalendarProps> = (props) => {
  function dateCellRender(value: Moment) {
    const formattedDate = formatDate(value.toDate());
    const currentDayEvents = props.events.filter(
      (event) => event.date === formattedDate
    );
    return (
      <>
        {currentDayEvents.map((event, idx) => (
          <div key={idx}>{event.description}</div>
        ))}
      </>
    );
  }
  return <Calendar dateCellRender={dateCellRender} />;
};

import React, { FC, useState } from "react";
import { DatePicker, Form, Input, Button, Row, Select } from "antd";
import { rules } from "../utils/rules";
import { IUser } from "../models/IUser";
import { IEvent } from "./../models/IEvent";
import { Moment } from "moment";
import { formatDate } from "./../utils/date";
import { useTypedSelector } from "./../hooks/useTypedSelector";

interface EventFormProps {
  guests: IUser[];
  submit: (event: IEvent) => void;
}

export const EventForm: FC<EventFormProps> = (props) => {
  const [event, setEvent] = useState<IEvent>({
    author: "",
    description: "",
    date: "",
    guest: "",
  } as IEvent);

  const { user } = useTypedSelector((state) => state.auth);

  const selectDate = (date: Moment | null) => {
    if (date) {
      setEvent({ ...event, date: formatDate(date.toDate()) });
    }
  };

  const submitForm = () => {
    props.submit({ ...event, author: user.username });
  };

  return (
    <Form onFinish={submitForm}>
      <Form.Item
        label="Event description"
        name="description"
        rules={[rules.required()]}
      >
        <Input
          value={event.description}
          onChange={(e) => {
            setEvent({ ...event, description: e.target.value });
          }}
        />
      </Form.Item>
      <Form.Item
        label="Date"
        name="date"
        rules={[rules.required(), rules.isDateAfter("Selected past data")]}
      >
        <DatePicker onChange={(date) => selectDate(date)} />
      </Form.Item>
      <Form.Item label="Guest" name="guest" rules={[rules.required()]}>
        <Select
          onChange={(guest: string) => {
            setEvent({ ...event, guest });
          }}
        >
          {props.guests.map((guest) => (
            <Select.Option key={guest.username} value={guest.username}>
              {guest.username}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item>
        <Row justify="center">
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Row>
      </Form.Item>
    </Form>
  );
};

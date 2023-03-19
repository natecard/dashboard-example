import React from "react";
import { User } from "../Interfaces";

export default function UserInfo(props: User) {
  return (
    <tr key={props.id}>
      <td>{props.account}</td>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.title}</td>
      <td>{props.email}</td>
      <td>{props.phone}</td>
      <td>{props.company}</td>
      <td>{props.industry}</td>
    </tr>
  );
}

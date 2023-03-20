import React from "react";
import { User } from "../Interfaces";

export default function UserInfo(props: User) {
  return (
    <tr key={props.id} className="table-row">
      <td className="col-1">
        {props.account}
        <div className="line"></div>
      </td>
      <td className="col-2">
        {props.firstName}
        <div className="line"></div>
      </td>
      <td className="col-3">
        {props.lastName}
        <div className="line"></div>
      </td>
      <td className="col-4">
        {props.title}
        <div className="line"></div>
      </td>
      <td className="col-5">
        {props.email}
        <div className="line"></div>
      </td>
      <td className="col-6">
        {props.phone}
        <div className="line"></div>
      </td>
      <td className="col-7">
        {props.company}
        <div className="line"></div>
      </td>
      <td className="col-8">
        {props.industry}
        <div className="line"></div>
      </td>
    </tr>
  );
}

import React from "react";
import { User } from "../Interfaces";

export default function TailwindTable(props: User) {
  return (
    <tr key={props.id} className="">
      <td className="">
        {props.account}
        <div className=""></div>
      </td>
      <td className="">
        {props.firstName}
        <div className=""></div>
      </td>
      <td className="">
        {props.lastName}
        <div className=""></div>
      </td>
      <td className="">
        {props.title}
        <div className=""></div>
      </td>
      <td className="">
        {props.email}
        <div className=""></div>
      </td>
      <td className="">
        {props.phone}
        <div className=""></div>
      </td>
      <td className="">
        {props.company}
        <div className=""></div>
      </td>
      <td className="">
        {props.industry}
        <div className=""></div>
      </td>
    </tr>
  );
}

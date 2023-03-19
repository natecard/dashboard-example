import { User } from "../Interfaces";

export default function UserInfo(props: User) {
    return (
        <table>
        <tr>
            <th>{props.Account}</th>
            <th>{props.Client}</th>
            <th>{props.Title}</th>
            <th>{props.Email}</th>
            <th>{props.Phone}</th>
            <th>{props.Company}</th>
            <th>{props.Industry}</th>
        </tr>
    </table>
    )
}
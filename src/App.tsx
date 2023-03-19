import React, { ReactNode } from "react";
import "./App.css";
import { faker } from "@faker-js/faker/locale/en_CA";
import TableHeader from "./Components/TableHeader";
import UserInfo from "./Components/UserInfo";
import { User } from "./Interfaces";

function App() {
  function createUser(): User {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email(firstName, lastName);
    return {
      id: faker.datatype.uuid(),
      title: faker.name.jobTitle(),
      lastName,
      firstName,
      email,
      phone: faker.phone.number(),
      account: faker.finance.account(),
      company: faker.company.name(),
      industry: faker.company.bsNoun(),
    };
  }
  const usersArray: User[] = [];
  for (let i = 0; i < 16; i++) {
    let user = createUser();
    usersArray.push(user);
  }
  const usersElements: any = usersArray.map((user) => {
    return (
      <UserInfo
        account={user.account}
        firstName={user.firstName}
        lastName={user.lastName}
        title={user.title}
        email={user.email}
        phone={user.phone}
        company={user.company}
        industry={user.industry}
        id={user.id}
      />
    );
  });
  return (
    <div>
      <h1>Header</h1>
      <table>
        <thead>
          <tr>
            <th>Account #</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Title</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Company Name</th>
            <th>Industry</th>
          </tr>
        </thead>
        <tbody>{usersElements}</tbody>
      </table>
    </div>
  );
}

export default App;

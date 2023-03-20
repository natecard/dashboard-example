import React, { useState, useEffect } from "react";
import { faker } from "@faker-js/faker/locale/en_CA";
import UserInfo from "./Components/UserInfo";
import { User } from "./Interfaces";

function App() {
  const [usersList, setUsersList] = useState<User[]>([]);
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
  useEffect(() => {
    setUsersList(usersArray);
  }, []);
  const usersElements: any = usersList.map((user) => {
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
        key={user.id}
        id={user.id}
      />
    );
  });
  return (
    <div>
      <h1>Header</h1>
      <div className="table-wrapper">
        <table className="table">
          <thead className="table-headrow">
            <tr>
              <th className="col-1">Account #</th>
              <th className="col-2">First Name</th>
              <th className="col-3">Last Name</th>
              <th className="col-4">Title</th>
              <th className="col-5">Email</th>
              <th className="col-6">Phone Number</th>
              <th className="col-7">Company Name</th>
              <th className="col-8">Industry</th>
            </tr>
          </thead>
          <tbody>{usersElements}</tbody>
        </table>
      </div>
    </div>
  );
}

export default App;

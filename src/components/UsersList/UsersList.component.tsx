import { FC } from "react";

import { ColumnItem, User } from "../../types";
import DataTable from "../DataTable";
import { USERS } from "./data";

const columns: ColumnItem<User>[] = [
  {
    fieldId: "name",
    columnName: "Name",
  },
  {
    fieldId: "email",
    columnName: "Email",
  },
  {
    fieldId: "gender",
    columnName: "Gender",
    valueFormatter: (value) => (value === "male" ? "👨" : "👩"),
  },
  {
    fieldId: "isVerified",
    columnName: "Verified",
    valueFormatter: (value) => (value ? "🟢" : "🔴"),
  },
  {
    fieldId: "dateOfBirth",
    columnName: "Date of Birth",
    valueFormatter: (value) => new Date(value).toLocaleDateString(),
  },
];

const UserList: FC = () => <DataTable<User> columns={columns} data={USERS} />;

export default UserList;

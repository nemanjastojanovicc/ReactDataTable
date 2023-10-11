import classNames from "classnames";

import { ColumnItem } from "types";
import { TableHead, TableRows } from "./components";

import "./DataTable.styles.css";

export type DataTableProps<T> = {
  columns: ColumnItem<T>[];
  data: T[];
  className?: string;
};

const DataTable = <T extends Record<string, any>>({
  columns,
  data,
  className,
}: DataTableProps<T & { id: string | number }>): JSX.Element => (
  <table className={classNames("data-table", className)}>
    <TableHead columns={columns} />
    <TableRows columns={columns} data={data} />
  </table>
);

export default DataTable;

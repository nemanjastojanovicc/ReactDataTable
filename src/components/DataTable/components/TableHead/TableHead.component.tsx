import { DataTableProps } from "components/DataTable/DataTable.component";

export type TableHeadProps<T> = Pick<DataTableProps<T>, "columns">;

const TableHead = <T extends Record<string, any>>({
  columns,
}: TableHeadProps<T>): JSX.Element => (
  <thead>
    <tr>
      {columns.map(({ columnName }) => (
        <th key={columnName}>{columnName}</th>
      ))}
    </tr>
  </thead>
);

export default TableHead;

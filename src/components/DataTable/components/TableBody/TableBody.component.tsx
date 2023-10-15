import { DataTableProps } from "components/DataTable/DataTable.component";
import { renderCell } from "./utils";

const TableBody = <T extends Record<string, any>>({
  columns,
  data,
}: DataTableProps<T>): JSX.Element => (
  <tbody>
    {data.map((row) => (
      <tr key={row.id}>
        {columns.map((column) => (
          <td key={column.columnName}>{renderCell<T>(row, column)}</td>
        ))}
      </tr>
    ))}
  </tbody>
);

export default TableBody;

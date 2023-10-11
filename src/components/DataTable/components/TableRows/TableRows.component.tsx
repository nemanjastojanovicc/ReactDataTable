import { DataTableProps } from "components/DataTable/DataTable.component";
import { renderCellContent } from "./utils";

const TableRows = <T extends Record<string, any>>({
  columns,
  data,
}: DataTableProps<T>): JSX.Element => (
  <tbody>
    {data.map((row) => (
      <tr key={row.id}>
        {columns.map((column) => (
          <td key={column.columnName}>{renderCellContent<T>(row, column)}</td>
        ))}
      </tr>
    ))}
  </tbody>
);

export default TableRows;

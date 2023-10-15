import classNames from "classnames";

import { ColumnItem } from "types";
import { TableBody, TableHead } from "./components";

import "./DataTable.styles.css";

export type DataTableProps<T> = {
  columns: ColumnItem<T>[];
  data: T[];
  className?: string;
};

/**
 *
 * The DataTable component is used to display tabular data with customizable columns.
 *
 * @param {Object} props - The properties for the DataTable component.
 *
 * @param {Array<ColumnItem<T>>} props.columns - An array of column definitions, specifying column names, field IDs, and optional formatting functions.
 * @param {Array<T>} props.data - An array of data to be displayed in the table.
 * @param {string} [props.className] - An optional custom CSS class name for the table.
 *
 * @returns {JSX.Element} - A JSX element representing the rendered table.
 *
 * See more on: ...
 *
 */
const DataTable = <T extends Record<string, any>>({
  columns,
  data,
  className,
}: DataTableProps<T & { id: string | number }>): JSX.Element => (
  <table className={classNames("data-table", className)}>
    <TableHead columns={columns} />
    <TableBody columns={columns} data={data} />
  </table>
);

export default DataTable;

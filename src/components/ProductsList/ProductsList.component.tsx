import { FC } from "react";

import { ColumnItem, ProductItem } from "types";

import DataTable from "../DataTable";
import { PRODUCTS } from "./data";

const columns: ColumnItem<ProductItem>[] = [
  {
    fieldId: "name",
    columnName: "Name",
  },
  {
    fieldId: "price",
    columnName: "Price",
    valueFormatter: (value) => `$${value.toFixed(2)}`,
  },
  {
    fieldId: "discount",
    columnName: "Discount",
    valueFormatter: (value) => `${value}%`,
  },
  {
    fieldId: "available",
    columnName: "Availability",
    valueFormatter: (value) => (value ? "✅" : "❌"),
  },
  {
    fieldId: "materials",
    columnName: "Materials",
    valueFormatter: (value) => value.join(", "),
  },
];

const ProductsList: FC = () => (
  <DataTable<ProductItem> columns={columns} data={PRODUCTS} />
);

export default ProductsList;

import { ReactNode } from "react";
import { ColumnItem } from "types";

export const renderCellContent = <T extends Record<string, any>>(
  row: T,
  column: ColumnItem<T>
): ReactNode => {
  const { fieldId, valueFormatter } = column;
  const cellValue = row[fieldId];

  return valueFormatter?.(cellValue, row) ?? cellValue;
};

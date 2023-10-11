export type ColumnItem<T> = {
  [K in keyof T]: {
    fieldId: K;
    columnName: string;
    valueFormatter?: (value: T[K], row: T) => React.ReactNode;
  };
}[keyof T];

export type ColumnItemInitial<T> = {
  fieldId: keyof T;
  columnName: string;
  renderCell?: (rowProp: T[keyof T], row: T, rows: T[]) => JSX.Element | null;
};

export type ProductItem = {
  id: number;
  discount: number;
  available: boolean;
  materials: string[];
  name: string;
  price: number;
};

export type Products = ProductItem[];

export type User = {
  id: number;
  name: string;
  email: string;
  gender: "male" | "female" | "other";
  isVerified: boolean;
  dateOfBirth: string;
};

export type Users = User[];

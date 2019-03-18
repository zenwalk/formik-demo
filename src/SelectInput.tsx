import React from "react";

interface IProps<T> extends React.SelectHTMLAttributes<HTMLSelectElement> {
  value: string;
  options: T[];
  getLabel(T): string;
  getValue(T): string;
}

export function SelectInput<T>(props: IProps<T>) {
  const { getLabel, getValue, options, ...htmlProps } = props;
  return (
    <select defaultValue="" {...htmlProps}>
      <option value="" disabled>
        Please, select
      </option>
      {options.map(option => (
        <option value={getValue(option)}>{getLabel(option)}</option>
      ))}
    </select>
  );
}

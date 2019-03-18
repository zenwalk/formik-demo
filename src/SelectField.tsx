import React from "react";
import { Field } from "formik";
import { SelectInput } from "./SelectInput";

interface IProps<T> {
  name: string;
  options: T[];
  getLabel(T): string;
  getValue(T): string;
  onChange?: (event: any) => any;
}

export function SelectField<T>(props: IProps<T>) {
  return (
    <Field name={props.name}>
      {fieldProps => (
        <SelectInput
          {...props}
          {...fieldProps.field}
          onChange={event => {
            fieldProps.field.onChange(event);
            props.onChange && props.onChange(event);
          }}
        />
      )}
    </Field>
  );
}

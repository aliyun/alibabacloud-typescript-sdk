// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTableColumnsResponseBodyColumnListColumn extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the field is an auto-increment field. Valid values:
   * 
   * *   true: The field is an auto-increment field.
   * *   false: The field is not an auto-increment field.
   * 
   * @example
   * false
   */
  autoIncrement?: boolean;
  /**
   * @remarks
   * The ID of the field.
   * 
   * @example
   * 12345
   */
  columnId?: string;
  /**
   * @remarks
   * The field name.
   * 
   * @example
   * c1
   */
  columnName?: string;
  /**
   * @remarks
   * The data type of the field.
   * 
   * @example
   * varchar
   */
  columnType?: string;
  /**
   * @remarks
   * The length of the field.
   * 
   * @example
   * 32
   */
  dataLength?: number;
  /**
   * @remarks
   * The number of valid digits for the column.
   * 
   * @example
   * 0
   */
  dataPrecision?: number;
  /**
   * @remarks
   * The number of decimal places of the field data.
   * 
   * @example
   * 0
   */
  dataScale?: number;
  /**
   * @remarks
   * The default value of the column.
   * 
   * @example
   * aaa
   */
  defaultValue?: string;
  /**
   * @remarks
   * The description of the field.
   * 
   * @example
   * column desc
   */
  description?: string;
  /**
   * @remarks
   * The type of the masking algorithm that is used for the field. Valid values:
   * 
   * *   null: No masking algorithm is used.
   * *   DEFAULT: A full masking algorithm is used.
   * *   FIX_POS: The fixed position is masked.
   * *   FIX_CHAR: The fixed characters are replaced.
   * 
   * @example
   * NULL
   */
  functionType?: string;
  /**
   * @remarks
   * Indicates whether the field can be empty. Valid values:
   * 
   * *   true: The field can be empty.
   * *   false: The field cannot be empty.
   * 
   * @example
   * true
   */
  nullable?: boolean;
  /**
   * @remarks
   * The security level of the field. Valid values:
   * 
   * *   INNER: The field is an internal field but not sensitive.
   * *   SENSITIVE: The field is sensitive.
   * *   CONFIDENTIAL: The field is a confidential column.
   * 
   * @example
   * INNER
   */
  securityLevel?: string;
  /**
   * @remarks
   * Indicates whether the field is a sensitive column. Valid values:
   * 
   * *   true: The field is a sensitive field.
   * *   false: The field is not a sensitive field.
   * 
   * @example
   * false
   */
  sensitive?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoIncrement: 'AutoIncrement',
      columnId: 'ColumnId',
      columnName: 'ColumnName',
      columnType: 'ColumnType',
      dataLength: 'DataLength',
      dataPrecision: 'DataPrecision',
      dataScale: 'DataScale',
      defaultValue: 'DefaultValue',
      description: 'Description',
      functionType: 'FunctionType',
      nullable: 'Nullable',
      securityLevel: 'SecurityLevel',
      sensitive: 'Sensitive',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoIncrement: 'boolean',
      columnId: 'string',
      columnName: 'string',
      columnType: 'string',
      dataLength: 'number',
      dataPrecision: 'number',
      dataScale: 'number',
      defaultValue: 'string',
      description: 'string',
      functionType: 'string',
      nullable: 'boolean',
      securityLevel: 'string',
      sensitive: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTableColumnsResponseBodyColumnList extends $dara.Model {
  column?: ListTableColumnsResponseBodyColumnListColumn[];
  static names(): { [key: string]: string } {
    return {
      column: 'Column',
    };
  }

  static types(): { [key: string]: any } {
    return {
      column: { 'type': 'array', 'itemType': ListTableColumnsResponseBodyColumnListColumn },
    };
  }

  validate() {
    if(Array.isArray(this.column)) {
      $dara.Model.validateArray(this.column);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTableColumnsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about fields in the table.
   */
  columnList?: ListTableColumnsResponseBodyColumnList;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message that is returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0C1CB646-1DE4-4AD0-B4A4-7D47DD52E931
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      columnList: 'ColumnList',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnList: ListTableColumnsResponseBodyColumnList,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.columnList && typeof (this.columnList as any).validate === 'function') {
      (this.columnList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


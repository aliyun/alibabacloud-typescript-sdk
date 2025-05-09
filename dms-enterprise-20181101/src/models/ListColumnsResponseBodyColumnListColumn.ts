// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListColumnsResponseBodyColumnListColumn extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the column is an auto-increment column. Valid values:
   * 
   * *   true: The column is an auto-increment column.
   * *   false: The column is not an auto-increment column.
   * 
   * @example
   * false
   */
  autoIncrement?: boolean;
  /**
   * @remarks
   * The ID of the column.
   * 
   * @example
   * 62589****
   */
  columnId?: string;
  /**
   * @remarks
   * The name of the column.
   * 
   * @example
   * name
   */
  columnName?: string;
  /**
   * @remarks
   * The data type of the column.
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
   * 4
   */
  dataLength?: number;
  /**
   * @remarks
   * The number of valid digits for the field.
   * 
   * @example
   * 0
   */
  dataPrecision?: number;
  /**
   * @remarks
   * The number of decimal places for the field.
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
   * def_value
   */
  defaultValue?: string;
  /**
   * @remarks
   * The description of the column.
   * 
   * @example
   * test
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
   * DEFAULT
   */
  functionType?: string;
  /**
   * @remarks
   * Indicates whether the column can be empty. Valid values:
   * 
   * *   **true**: The column can be empty.
   * *   **false**: The column cannot be empty.
   * 
   * @example
   * false
   */
  nullable?: boolean;
  /**
   * @remarks
   * The security level of the column. Valid values:
   * 
   * *   INNER: The column is an internal column but not sensitive.
   * *   SENSITIVE: The column is a sensitive column.
   * *   CONFIDENTIAL: The column is a confidential column.
   * 
   * > For more information, see [Sensitivity levels of fields](https://help.aliyun.com/document_detail/66091.html).
   * 
   * @example
   * INNER
   */
  securityLevel?: string;
  /**
   * @remarks
   * Indicates whether the column is a sensitive column. Valid values:
   * 
   * *   **true**: The column is a sensitive column.
   * *   **false**: The column is not a sensitive column.
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


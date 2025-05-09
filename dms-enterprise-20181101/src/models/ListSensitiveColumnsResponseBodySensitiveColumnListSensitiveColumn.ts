// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSensitiveColumnsResponseBodySensitiveColumnListSensitiveColumn extends $dara.Model {
  /**
   * @remarks
   * The number of sensitive fields.
   * 
   * @example
   * 1
   */
  columnCount?: number;
  /**
   * @remarks
   * The name of the field.
   * 
   * @example
   * test_column
   */
  columnName?: string;
  /**
   * @remarks
   * The type of the de-identification algorithm. Valid values:
   * 
   * *   DEFAULT: All characters are masked. This is the default value.
   * *   FIX_POS: The characters at specific positions are masked.
   * *   FIX_CHAR: Specific characters are masked.
   * 
   * @example
   * DEFAULT
   */
  functionType?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * test_schema
   */
  schemaName?: string;
  /**
   * @remarks
   * The sensitivity level of the field. Valid values:
   * 
   * *   SENSITIVE
   * *   CONFIDENTIAL
   * 
   * @example
   * SENSITIVE
   */
  securityLevel?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * test_table
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      columnCount: 'ColumnCount',
      columnName: 'ColumnName',
      functionType: 'FunctionType',
      schemaName: 'SchemaName',
      securityLevel: 'SecurityLevel',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnCount: 'number',
      columnName: 'string',
      functionType: 'string',
      schemaName: 'string',
      securityLevel: 'string',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


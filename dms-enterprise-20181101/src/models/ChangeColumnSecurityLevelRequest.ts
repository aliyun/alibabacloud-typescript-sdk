// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChangeColumnSecurityLevelRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_column
   */
  columnName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 325**
   */
  dbId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  isLogic?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * S2
   */
  newSensitivityLevel?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_schema
   */
  schemaName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_table
   */
  tableName?: string;
  /**
   * @example
   * 10****
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      dbId: 'DbId',
      isLogic: 'IsLogic',
      newSensitivityLevel: 'NewSensitivityLevel',
      schemaName: 'SchemaName',
      tableName: 'TableName',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      dbId: 'number',
      isLogic: 'boolean',
      newSensitivityLevel: 'string',
      schemaName: 'string',
      tableName: 'string',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


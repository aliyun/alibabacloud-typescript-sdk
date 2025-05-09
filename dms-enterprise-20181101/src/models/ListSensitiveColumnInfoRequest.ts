// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSensitiveColumnInfoRequest extends $dara.Model {
  /**
   * @example
   * test_column
   */
  columnName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 183****
   */
  instanceId?: number;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @example
   * test_schema
   */
  schemaName?: string;
  /**
   * @example
   * test_table
   */
  tableName?: string;
  /**
   * @example
   * 3***
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      schemaName: 'SchemaName',
      tableName: 'TableName',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      instanceId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
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


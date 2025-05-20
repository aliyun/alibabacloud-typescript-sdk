// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAutoIncrementUsageStatisticResponseBodyDataAutoIncrementUsageList extends $dara.Model {
  /**
   * @remarks
   * The latest auto-increment ID.
   * 
   * @example
   * 2147483647
   */
  autoIncrementCurrentValue?: number;
  /**
   * @remarks
   * The usage ratio of auto-increment IDs.
   * 
   * @example
   * 1
   */
  autoIncrementRatio?: number;
  /**
   * @remarks
   * The column name.
   * 
   * @example
   * id
   */
  columnName?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * db01
   */
  dbName?: string;
  /**
   * @remarks
   * The maximum auto-increment ID that is supported by the current data type.
   * 
   * @example
   * 2147483647
   */
  maximumValue?: number;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * test_table
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      autoIncrementCurrentValue: 'AutoIncrementCurrentValue',
      autoIncrementRatio: 'AutoIncrementRatio',
      columnName: 'ColumnName',
      dbName: 'DbName',
      maximumValue: 'MaximumValue',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoIncrementCurrentValue: 'number',
      autoIncrementRatio: 'number',
      columnName: 'string',
      dbName: 'string',
      maximumValue: 'number',
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


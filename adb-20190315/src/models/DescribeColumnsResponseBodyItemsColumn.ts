// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeColumnsResponseBodyItemsColumn extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the column is auto-incremented.
   * 
   * @example
   * true
   */
  autoIncrementColumn?: boolean;
  /**
   * @remarks
   * The name of the column.
   * 
   * @example
   * id
   */
  columnName?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * am-bp1xxxxxxxx47
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Indicates whether the column is a primary key column.
   * 
   * @example
   * false
   */
  primaryKey?: boolean;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * adb_demo
   */
  schemaName?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * test
   */
  tableName?: string;
  /**
   * @remarks
   * The data type of the column.
   * 
   * @example
   * bigint
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      autoIncrementColumn: 'AutoIncrementColumn',
      columnName: 'ColumnName',
      DBClusterId: 'DBClusterId',
      primaryKey: 'PrimaryKey',
      schemaName: 'SchemaName',
      tableName: 'TableName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoIncrementColumn: 'boolean',
      columnName: 'string',
      DBClusterId: 'string',
      primaryKey: 'boolean',
      schemaName: 'string',
      tableName: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExcessivePrimaryKeysResponseBodyTables extends $dara.Model {
  /**
   * @remarks
   * The total number of columns.
   * 
   * @example
   * 26
   */
  columnCount?: number;
  /**
   * @remarks
   * The queried primary key fields.
   * 
   * @example
   * id,date
   */
  primaryKeyColumns?: string;
  /**
   * @remarks
   * The number of primary key fields.
   * 
   * @example
   * 1
   */
  primaryKeyCount?: number;
  /**
   * @remarks
   * The data size of primary key indexes. Unit: bytes.
   * 
   * @example
   * 2345
   */
  primaryKeyIndexSize?: number;
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
   * The percentage of the table size. Unit: %.
   * 
   * >  Formula: Table storage percentage = Total data size of a table/Total data size of the cluster × 100%.
   * 
   * @example
   * 20
   */
  spaceRatio?: number;
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
   * The cold data size. Unit: bytes.
   * 
   * >  Formula: Cold data size = Data size of table records + Data size of regular indexes + Data size of primary key indexes + Size of other data.
   * 
   * @example
   * 1073741824
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      columnCount: 'ColumnCount',
      primaryKeyColumns: 'PrimaryKeyColumns',
      primaryKeyCount: 'PrimaryKeyCount',
      primaryKeyIndexSize: 'PrimaryKeyIndexSize',
      schemaName: 'SchemaName',
      spaceRatio: 'SpaceRatio',
      tableName: 'TableName',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnCount: 'number',
      primaryKeyColumns: 'string',
      primaryKeyCount: 'number',
      primaryKeyIndexSize: 'number',
      schemaName: 'string',
      spaceRatio: 'number',
      tableName: 'string',
      totalSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


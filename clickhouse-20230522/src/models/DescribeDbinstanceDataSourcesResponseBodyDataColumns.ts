// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceDataSourcesResponseBodyDataColumns extends $dara.Model {
  /**
   * @remarks
   * The column name.
   * 
   * @example
   * c31
   */
  columnName?: string;
  /**
   * @remarks
   * The description of the database account.
   * 
   * @example
   * Used for test
   */
  comment?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * dbtest
   */
  DBName?: string;
  /**
   * @remarks
   * Indicates whether the column is the primary key of the table. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  primaryKey?: string;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * tableTest
   */
  tableName?: string;
  /**
   * @remarks
   * The type of the stored data.
   * 
   * @example
   * UInt64
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      columnName: 'ColumnName',
      comment: 'Comment',
      DBName: 'DBName',
      primaryKey: 'PrimaryKey',
      tableName: 'TableName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnName: 'string',
      comment: 'string',
      DBName: 'string',
      primaryKey: 'string',
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


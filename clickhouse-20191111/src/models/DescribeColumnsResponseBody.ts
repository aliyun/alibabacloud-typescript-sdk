// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeColumnsResponseBodyItemsColumn extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the column is an auto-increment column. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  autoIncrementColumn?: boolean;
  /**
   * @remarks
   * The column name.
   * 
   * @example
   * name
   */
  columnName?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cc-2zeux3ua25242****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Indicates whether the column is the primary key of the table. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  primaryKey?: boolean;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * database
   */
  schemaName?: string;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * table
   */
  tableName?: string;
  /**
   * @remarks
   * The column type.
   * 
   * @example
   * String
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

export class DescribeColumnsResponseBodyItems extends $dara.Model {
  column?: DescribeColumnsResponseBodyItemsColumn[];
  static names(): { [key: string]: string } {
    return {
      column: 'Column',
    };
  }

  static types(): { [key: string]: any } {
    return {
      column: { 'type': 'array', 'itemType': DescribeColumnsResponseBodyItemsColumn },
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

export class DescribeColumnsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of the columns.
   */
  items?: DescribeColumnsResponseBodyItems;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 66428721-FFEC-5023-B4E5-3BD1B67837E0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeColumnsResponseBodyItems,
      requestId: 'string',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


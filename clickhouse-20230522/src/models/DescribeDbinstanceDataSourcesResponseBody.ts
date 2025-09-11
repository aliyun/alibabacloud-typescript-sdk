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

export class DescribeDBInstanceDataSourcesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The columns.
   */
  columns?: DescribeDBInstanceDataSourcesResponseBodyDataColumns[];
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * cc-bp100p4q1g9z3****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The account.
   * 
   * @example
   * default
   */
  schemas?: string;
  /**
   * @remarks
   * The tables.
   */
  tables?: string[];
  static names(): { [key: string]: string } {
    return {
      columns: 'Columns',
      DBInstanceId: 'DBInstanceId',
      schemas: 'Schemas',
      tables: 'Tables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: { 'type': 'array', 'itemType': DescribeDBInstanceDataSourcesResponseBodyDataColumns },
      DBInstanceId: 'string',
      schemas: 'string',
      tables: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.columns)) {
      $dara.Model.validateArray(this.columns);
    }
    if(Array.isArray(this.tables)) {
      $dara.Model.validateArray(this.tables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceDataSourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   */
  data?: DescribeDBInstanceDataSourcesResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F543E6CC-6868-523D-8D28-0E92CF977ED2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeDBInstanceDataSourcesResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


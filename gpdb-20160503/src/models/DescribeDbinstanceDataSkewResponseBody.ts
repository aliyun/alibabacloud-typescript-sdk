// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceDataSkewResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * adbtest
   */
  databaseName?: string;
  /**
   * @remarks
   * The distribution key of the table.
   * 
   * @example
   * ItemId
   */
  distributeKey?: string;
  /**
   * @remarks
   * The owner of the table.
   * 
   * @example
   * adbpguser
   */
  owner?: string;
  /**
   * @remarks
   * The name of the schema.
   * 
   * @example
   * schema1
   */
  schemaName?: string;
  /**
   * @remarks
   * The sequence number. The entries are sorted in descending order of data skew.
   * 
   * @example
   * 1
   */
  sequence?: number;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * tab1
   */
  tableName?: string;
  /**
   * @remarks
   * The total number of rows in the table.
   * 
   * @example
   * 100000
   */
  tableSize?: string;
  /**
   * @remarks
   * The data skew percentage of the table. Valid values: 0 to 100. Unit: %. A larger value indicates more severe data skew. A smaller value is more beneficial to the query performance of the database. A value of 0 indicates no data skew.
   * 
   * @example
   * 10.23
   */
  tableSkew?: string;
  /**
   * @remarks
   * The time when the table was last updated by a DELETE, INSERT, or UPDATE operation.
   * 
   * @example
   * 2020-09-08T20:00:00Z
   */
  timeLastUpdated?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      distributeKey: 'DistributeKey',
      owner: 'Owner',
      schemaName: 'SchemaName',
      sequence: 'Sequence',
      tableName: 'TableName',
      tableSize: 'TableSize',
      tableSkew: 'TableSkew',
      timeLastUpdated: 'TimeLastUpdated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      distributeKey: 'string',
      owner: 'string',
      schemaName: 'string',
      sequence: 'number',
      tableName: 'string',
      tableSize: 'string',
      tableSkew: 'string',
      timeLastUpdated: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceDataSkewResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of data skew details.
   */
  items?: DescribeDBInstanceDataSkewResponseBodyItems[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B4CAF581-2AC7-41AD-8940-D56DF7AADF5B
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeDBInstanceDataSkewResponseBodyItems },
      pageNumber: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


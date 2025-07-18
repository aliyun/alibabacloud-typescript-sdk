// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceIndexUsageResponseBodyItems extends $dara.Model {
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
   * The definition of the index.
   * 
   * @example
   * CREATE INDEX idx1 ON schema1.tab1_ptr_2010
   */
  indexDef?: string;
  /**
   * @remarks
   * The name of the index.
   * 
   * @example
   * idx1
   */
  indexName?: string;
  /**
   * @remarks
   * The number of index scans.
   * 
   * @example
   * 50000
   */
  indexScanTimes?: number;
  /**
   * @remarks
   * The size of the index. Unit: bytes.
   * 
   * @example
   * 10000
   */
  indexSize?: string;
  /**
   * @remarks
   * Indicates whether the table is a partitioned table. Valid values:
   * 
   * *   **true**: The table is a partitioned table.
   * *   **false**: The table is not a partitioned table.
   * 
   * @example
   * true
   */
  isPartitionTable?: boolean;
  /**
   * @remarks
   * The name of the parent table.
   * 
   * @example
   * tab1
   */
  parentTableName?: string;
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
   * The name of the table.
   * 
   * @example
   * tab1_ptr_2010
   */
  tableName?: string;
  /**
   * @remarks
   * The time when the table was last deleted, inserted, or updated.
   * 
   * @example
   * 2022-08-08T20:00:00Z
   */
  timeLastUpdated?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      indexDef: 'IndexDef',
      indexName: 'IndexName',
      indexScanTimes: 'IndexScanTimes',
      indexSize: 'IndexSize',
      isPartitionTable: 'IsPartitionTable',
      parentTableName: 'ParentTableName',
      schemaName: 'SchemaName',
      tableName: 'TableName',
      timeLastUpdated: 'TimeLastUpdated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      indexDef: 'string',
      indexName: 'string',
      indexScanTimes: 'number',
      indexSize: 'string',
      isPartitionTable: 'boolean',
      parentTableName: 'string',
      schemaName: 'string',
      tableName: 'string',
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

export class DescribeDBInstanceIndexUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried index usage.
   */
  items?: DescribeDBInstanceIndexUsageResponseBodyItems[];
  /**
   * @remarks
   * The page number.
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
   * The total number of entries returned.
   * 
   * @example
   * 1
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
      items: { 'type': 'array', 'itemType': DescribeDBInstanceIndexUsageResponseBodyItems },
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


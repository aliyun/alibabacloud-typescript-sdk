// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOversizeNonPartitionTableInfosResponseBodyDetectionItems extends $dara.Model {
  /**
   * @remarks
   * The information about the detection result.
   * 
   * @example
   * Multiple oversized non-partitioned tables are detected.
   */
  message?: string;
  /**
   * @remarks
   * The name of the detection item.
   * 
   * @example
   * Oversized non-partitioned tables
   */
  name?: string;
  /**
   * @remarks
   * The severity level of the detection result.
   * 
   * @example
   * NORMAL
   * WARNING
   * CRITICAL
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      name: 'Name',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      name: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeOversizeNonPartitionTableInfosResponseBodyTables extends $dara.Model {
  /**
   * @remarks
   * The data size of the table. Unit: bytes.
   * 
   * @example
   * 2921132457984
   */
  dataSize?: number;
  /**
   * @remarks
   * The data size of regular indexes. Unit: bytes.
   * 
   * @example
   * 111
   */
  indexSize?: number;
  /**
   * @remarks
   * The size of hot data. Unit: bytes.
   * 
   * @example
   * 1223
   */
  localDataSize?: number;
  /**
   * @remarks
   * The data size of the primary key index. Unit: bytes.
   * 
   * @example
   * 123
   */
  primaryKeySize?: number;
  /**
   * @remarks
   * The size of cold data. Unit: bytes.
   * 
   * @example
   * 122
   */
  remoteDataSize?: number;
  /**
   * @remarks
   * The number of rows in the table.
   * 
   * @example
   * 1222
   */
  rowCount?: number;
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
   * 0.3
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
  static names(): { [key: string]: string } {
    return {
      dataSize: 'DataSize',
      indexSize: 'IndexSize',
      localDataSize: 'LocalDataSize',
      primaryKeySize: 'PrimaryKeySize',
      remoteDataSize: 'RemoteDataSize',
      rowCount: 'RowCount',
      schemaName: 'SchemaName',
      spaceRatio: 'SpaceRatio',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSize: 'number',
      indexSize: 'number',
      localDataSize: 'number',
      primaryKeySize: 'number',
      remoteDataSize: 'number',
      rowCount: 'number',
      schemaName: 'string',
      spaceRatio: 'number',
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

export class DescribeOversizeNonPartitionTableInfosResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * am-bp16t5ci7r74s****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The queried detection items and detection results.
   */
  detectionItems?: DescribeOversizeNonPartitionTableInfosResponseBodyDetectionItems[];
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
   * The number of entries per page. Valid values:
   * 
   * *   **30** (default)
   * *   **50**
   * *   **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @remarks
   * The queried oversized non-partitioned tables.
   */
  tables?: DescribeOversizeNonPartitionTableInfosResponseBodyTables[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      detectionItems: 'DetectionItems',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      tables: 'Tables',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      detectionItems: { 'type': 'array', 'itemType': DescribeOversizeNonPartitionTableInfosResponseBodyDetectionItems },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      tables: { 'type': 'array', 'itemType': DescribeOversizeNonPartitionTableInfosResponseBodyTables },
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.detectionItems)) {
      $dara.Model.validateArray(this.detectionItems);
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


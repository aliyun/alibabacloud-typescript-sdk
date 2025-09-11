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
   * The severity level of the detection result. Valid values:
   * 
   * *   NORMAL
   * *   WARNING
   * *   CRITICAL
   * 
   * @example
   * WARNING
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
   * The data size of table records. Unit: bytes.
   * 
   * >  The data size of table records does not include the data size of regular and primary key indexes.
   * 
   * @example
   * 21474836480
   */
  dataSize?: number;
  /**
   * @remarks
   * The data size of regular indexes. Unit: bytes.
   * 
   * @example
   * 1073741824
   */
  indexSize?: number;
  /**
   * @remarks
   * The size of hot data. Unit: bytes.
   * 
   * @example
   * 24696061952
   */
  localDataSize?: number;
  /**
   * @remarks
   * The data size of the primary key index. Unit: bytes.
   * 
   * @example
   * 2147483648
   */
  primaryKeySize?: number;
  /**
   * @remarks
   * The size of cold data. Unit: bytes.
   * 
   * @example
   * 0
   */
  remoteDataSize?: number;
  /**
   * @remarks
   * The number of rows in the table.
   * 
   * @example
   * 3294
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
   * The storage percentage of the table. Unit: %.
   * 
   * >  Formula: Table storage percentage = Total data size of a table/Total data size of the cluster × 100%.
   * 
   * @example
   * 23
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
   * am-8vb46cpn2aaxxxxxx
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
   * The number of entries per page.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F67B5AC5-6CDE-5187-9E25-B1EEE9AC4D91
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
   * 21
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


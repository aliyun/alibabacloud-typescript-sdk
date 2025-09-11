// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTableStatisticsResponseBodyItemsTableStatisticRecords extends $dara.Model {
  /**
   * @remarks
   * The cold data size. Unit: bytes.
   * 
   * >  The parameter is returned only for AnalyticDB for MySQL clusters of V3.1.3.4 or later.
   * 
   * @example
   * 0
   */
  coldDataSize?: number;
  /**
   * @remarks
   * The data size of table records. Unit: bytes.
   * 
   * >  The data size of table records, excluding the data size of regular index and primary key indexes.
   * 
   * @example
   * 15592
   */
  dataSize?: number;
  /**
   * @remarks
   * The hot data size. Unit: bytes.
   * 
   * @example
   * 1048576
   */
  hotDataSize?: number;
  /**
   * @remarks
   * The data size of regular indexes. Unit: bytes.
   * 
   * @example
   * 3076
   */
  indexSize?: number;
  /**
   * @remarks
   * The data size of other data. Unit: bytes.
   * 
   * @example
   * 1048576
   */
  otherSize?: number;
  /**
   * @remarks
   * The number of partitions.
   * 
   * @example
   * 1
   */
  partitionCount?: number;
  /**
   * @remarks
   * The data size of primary key indexes. Unit: bytes.
   * 
   * @example
   * 16340
   */
  primaryKeyIndexSize?: number;
  /**
   * @remarks
   * The number of rows in the table.
   * 
   * @example
   * 3
   */
  rowCount?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * test_schema
   */
  schemaName?: string;
  /**
   * @remarks
   * The percentage of the table size. Unit: %.
   * 
   * >  Formula: Table storage percentage = Total data size of a table/Total data size of the cluster × 100%.
   * 
   * @example
   * 66.23
   */
  spaceRatio?: number;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * test_table
   */
  tableName?: string;
  /**
   * @remarks
   * The total data size. Unit: bytes.
   * 
   * >  The following formulas can be used to calculate the total data size: Formula 1: Total data size = Hot data size + Cold data size. Formula 2: Total data size = Data size of table records + Data size of regular indexes + Data size of primary key indexes + Data size of other data.
   * 
   * @example
   * 1577
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      coldDataSize: 'ColdDataSize',
      dataSize: 'DataSize',
      hotDataSize: 'HotDataSize',
      indexSize: 'IndexSize',
      otherSize: 'OtherSize',
      partitionCount: 'PartitionCount',
      primaryKeyIndexSize: 'PrimaryKeyIndexSize',
      rowCount: 'RowCount',
      schemaName: 'SchemaName',
      spaceRatio: 'SpaceRatio',
      tableName: 'TableName',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coldDataSize: 'number',
      dataSize: 'number',
      hotDataSize: 'number',
      indexSize: 'number',
      otherSize: 'number',
      partitionCount: 'number',
      primaryKeyIndexSize: 'number',
      rowCount: 'number',
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

export class DescribeTableStatisticsResponseBodyItems extends $dara.Model {
  tableStatisticRecords?: DescribeTableStatisticsResponseBodyItemsTableStatisticRecords[];
  static names(): { [key: string]: string } {
    return {
      tableStatisticRecords: 'TableStatisticRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tableStatisticRecords: { 'type': 'array', 'itemType': DescribeTableStatisticsResponseBodyItemsTableStatisticRecords },
    };
  }

  validate() {
    if(Array.isArray(this.tableStatisticRecords)) {
      $dara.Model.validateArray(this.tableStatisticRecords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTableStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * am-****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The queried table statistics.
   */
  items?: DescribeTableStatisticsResponseBodyItems;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4C4433FF-5D3A-4C3E-A19C-6D93B2******
   */
  requestId?: string;
  schemaNames?: string;
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
      items: 'Items',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      schemaNames: 'SchemaNames',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      items: DescribeTableStatisticsResponseBodyItems,
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      schemaNames: 'string',
      totalCount: 'string',
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


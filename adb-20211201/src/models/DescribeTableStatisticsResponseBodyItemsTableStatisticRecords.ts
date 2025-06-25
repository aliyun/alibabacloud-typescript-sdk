// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTableStatisticsResponseBodyItemsTableStatisticRecords extends $dara.Model {
  /**
   * @remarks
   * The size of cold data. Unit: bytes.
   * 
   * >  This parameter is supported only for AnalyticDB for MySQL clusters of V3.1.3.4 or later.
   * 
   * @example
   * 4428120064
   */
  coldDataSize?: number;
  /**
   * @remarks
   * The data size of the table. Unit: bytes.
   * 
   * @example
   * 15592
   */
  dataSize?: number;
  /**
   * @remarks
   * The size of hot data. Unit: bytes.
   * 
   * @example
   * 1048576
   */
  hotDataSize?: number;
  /**
   * @remarks
   * The data size of indexes. Unit: bytes.
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
   * The data size of the primary key index. Unit: bytes.
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
   * The total data size of the table. Unit: bytes.
   * 
   * >  The following formulas can be used to calculate the total data size:
   * 
   * *   Formula 1: Total data size = Hot data size + Cold data size.
   * *   Formula 2: Total data size = Data size of table records + Data size of regular indexes + Data size of primary key indexes + Data size of other data.
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


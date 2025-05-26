// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTableStatisticsResponseBodyItemsTableStatisticRecords extends $dara.Model {
  /**
   * @example
   * 4428120064
   */
  coldDataSize?: number;
  /**
   * @example
   * 15592
   */
  dataSize?: number;
  /**
   * @example
   * 1048576
   */
  hotDataSize?: number;
  /**
   * @example
   * 3076
   */
  indexSize?: number;
  /**
   * @example
   * 1048576
   */
  otherSize?: number;
  /**
   * @example
   * 1
   */
  partitionCount?: number;
  /**
   * @example
   * 16340
   */
  primaryKeyIndexSize?: number;
  /**
   * @example
   * 3
   */
  rowCount?: number;
  /**
   * @example
   * test_schema
   */
  schemaName?: string;
  /**
   * @example
   * 66.23
   */
  spaceRatio?: number;
  /**
   * @example
   * test_table
   */
  tableName?: string;
  /**
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


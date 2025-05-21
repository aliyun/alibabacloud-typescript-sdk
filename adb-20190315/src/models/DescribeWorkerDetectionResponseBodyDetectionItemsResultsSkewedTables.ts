// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWorkerDetectionResponseBodyDetectionItemsResultsSkewedTables extends $dara.Model {
  /**
   * @remarks
   * The SQL statement that is used to create the table.
   * 
   * @example
   * create table(id varchar)
   */
  DDL?: string;
  /**
   * @remarks
   * The number of partitions.
   * 
   * @example
   * 3
   */
  partitionCount?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * kp_ods
   */
  schemaName?: string;
  /**
   * @remarks
   * The number of skewed rows in the table.
   * 
   * @example
   * 345
   */
  shardSkewedRows?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * train_data_test
   */
  tableName?: string;
  /**
   * @remarks
   * The total data size of the table. Unit: bytes.
   * 
   * @example
   * 2345
   */
  totalDataSize?: number;
  /**
   * @remarks
   * The size of hot data. Unit: bytes.
   * 
   * @example
   * 211
   */
  totalLocalDataSize?: string;
  /**
   * @remarks
   * The data size of the primary key. Unit: bytes.
   * 
   * @example
   * 1234
   */
  totalPkSize?: number;
  /**
   * @remarks
   * The size of cold data. Unit: bytes.
   * 
   * @example
   * 23456
   */
  totalRemoteDataSize?: number;
  /**
   * @remarks
   * The total number of rows in the table.
   * 
   * @example
   * 2335
   */
  totalRowCount?: number;
  static names(): { [key: string]: string } {
    return {
      DDL: 'DDL',
      partitionCount: 'PartitionCount',
      schemaName: 'SchemaName',
      shardSkewedRows: 'ShardSkewedRows',
      tableName: 'TableName',
      totalDataSize: 'TotalDataSize',
      totalLocalDataSize: 'TotalLocalDataSize',
      totalPkSize: 'TotalPkSize',
      totalRemoteDataSize: 'TotalRemoteDataSize',
      totalRowCount: 'TotalRowCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DDL: 'string',
      partitionCount: 'number',
      schemaName: 'string',
      shardSkewedRows: 'string',
      tableName: 'string',
      totalDataSize: 'number',
      totalLocalDataSize: 'string',
      totalPkSize: 'number',
      totalRemoteDataSize: 'number',
      totalRowCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


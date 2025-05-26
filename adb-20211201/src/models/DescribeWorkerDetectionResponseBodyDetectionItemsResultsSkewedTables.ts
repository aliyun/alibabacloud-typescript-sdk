// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWorkerDetectionResponseBodyDetectionItemsResultsSkewedTables extends $dara.Model {
  /**
   * @remarks
   * The SQL statement that is used to create the table.
   * 
   * @example
   * create table test(id varchar)
   */
  DDL?: string;
  /**
   * @remarks
   * The number of partitions.
   * 
   * @example
   * 2
   */
  partitionCount?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * platfunc
   */
  schemaName?: string;
  /**
   * @remarks
   * The number of skewed rows in the table.
   * 
   * @example
   * 1234
   */
  shardSkewedRows?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * sls_log_cheat_action
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
   * 2345
   */
  totalLocalDataSize?: string;
  /**
   * @remarks
   * The data size of the primary key. Unit: bytes.
   * 
   * @example
   * 234
   */
  totalPkSize?: number;
  /**
   * @remarks
   * The size of cold data. Unit: bytes.
   * 
   * @example
   * 234
   */
  totalRemoteDataSize?: number;
  /**
   * @remarks
   * The number of rows in the table.
   * 
   * @example
   * 34
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


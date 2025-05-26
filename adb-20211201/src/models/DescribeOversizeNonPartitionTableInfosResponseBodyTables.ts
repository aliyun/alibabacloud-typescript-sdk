// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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


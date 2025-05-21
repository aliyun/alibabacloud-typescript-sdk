// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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


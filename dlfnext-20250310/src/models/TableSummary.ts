// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TableSummary extends $dara.Model {
  /**
   * @remarks
   * The timestamp, in milliseconds, indicating when the table was created.
   * 
   * @example
   * 1744970111419
   */
  createdAt?: number;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * default
   */
  databaseName?: string;
  /**
   * @remarks
   * The generation date of the storage summary.
   * 
   * @example
   * 2025-06-01
   */
  generatedDate?: string;
  /**
   * @remarks
   * The timestamp, in milliseconds, indicating when the table data was last accessed.
   * 
   * @example
   * 1744970111419
   */
  lastAccessTime?: number;
  lastRequester?: string;
  /**
   * @remarks
   * The total size of data files in the Archive storage class, in bytes.
   * 
   * @example
   * 10240
   */
  objTypeArchiveSize?: number;
  /**
   * @remarks
   * The total size of data files in the Cold Archive storage class, in bytes.
   * 
   * @example
   * 10240
   */
  objTypeColdArchiveSize?: number;
  /**
   * @remarks
   * The total size of data files in the Infrequent Access storage class, in bytes.
   * 
   * @example
   * 10240
   */
  objTypeIaSize?: number;
  /**
   * @remarks
   * The total size of data files in the Standard storage class, in bytes.
   * 
   * @example
   * 10240
   */
  objTypeStandardSize?: number;
  /**
   * @remarks
   * The total number of partitions in the table.
   * 
   * @example
   * 10
   */
  partitionCount?: number;
  /**
   * @remarks
   * The storage location of the table.
   * 
   * @example
   * oss://clg-xxxx/db-xxxx/tbl-xxxx
   */
  path?: string;
  /**
   * @remarks
   * The storage action parameters.
   */
  storageActionParams?: { [key: string]: string };
  storageActionTimestamp?: number;
  /**
   * @remarks
   * The storage class.
   */
  storageClass?: string;
  /**
   * @remarks
   * The name of the table.
   * 
   * @example
   * table1
   */
  tableName?: string;
  topRequester?: string;
  /**
   * @remarks
   * Total file access count.
   */
  totalFileAccessNum?: number;
  /**
   * @remarks
   * Total file access count over the last 30 days.
   */
  totalFileAccessNum30d?: number;
  /**
   * @remarks
   * Total file access count over the last 7 days.
   */
  totalFileAccessNum7d?: number;
  /**
   * @remarks
   * The total number of files in the table.
   * 
   * @example
   * 100
   */
  totalFileCount?: number;
  /**
   * @remarks
   * The total storage capacity of the table, in bytes.
   * 
   * @example
   * 1024
   */
  totalFileSizeInBytes?: number;
  /**
   * @remarks
   * The total number of metadata files.
   * 
   * @example
   * 10
   */
  totalMetaFileCount?: number;
  /**
   * @remarks
   * The total size of metadata files, in bytes.
   * 
   * @example
   * 10240
   */
  totalMetaSizeInBytes?: number;
  /**
   * @remarks
   * The number of Standard or Infrequent Access partitions unaccessed in the last 180 days.
   * 
   * @example
   * 0
   */
  unaccessedStdIaPartitionCount180d?: number;
  /**
   * @remarks
   * The number of Standard partitions unaccessed in the last 30 days.
   * 
   * @example
   * 1
   */
  unaccessedStdPartitionCount30d?: number;
  /**
   * @remarks
   * The update time.
   */
  updatedAt?: number;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      databaseName: 'databaseName',
      generatedDate: 'generatedDate',
      lastAccessTime: 'lastAccessTime',
      lastRequester: 'lastRequester',
      objTypeArchiveSize: 'objTypeArchiveSize',
      objTypeColdArchiveSize: 'objTypeColdArchiveSize',
      objTypeIaSize: 'objTypeIaSize',
      objTypeStandardSize: 'objTypeStandardSize',
      partitionCount: 'partitionCount',
      path: 'path',
      storageActionParams: 'storageActionParams',
      storageActionTimestamp: 'storageActionTimestamp',
      storageClass: 'storageClass',
      tableName: 'tableName',
      topRequester: 'topRequester',
      totalFileAccessNum: 'totalFileAccessNum',
      totalFileAccessNum30d: 'totalFileAccessNum30d',
      totalFileAccessNum7d: 'totalFileAccessNum7d',
      totalFileCount: 'totalFileCount',
      totalFileSizeInBytes: 'totalFileSizeInBytes',
      totalMetaFileCount: 'totalMetaFileCount',
      totalMetaSizeInBytes: 'totalMetaSizeInBytes',
      unaccessedStdIaPartitionCount180d: 'unaccessedStdIaPartitionCount180d',
      unaccessedStdPartitionCount30d: 'unaccessedStdPartitionCount30d',
      updatedAt: 'updatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      databaseName: 'string',
      generatedDate: 'string',
      lastAccessTime: 'number',
      lastRequester: 'string',
      objTypeArchiveSize: 'number',
      objTypeColdArchiveSize: 'number',
      objTypeIaSize: 'number',
      objTypeStandardSize: 'number',
      partitionCount: 'number',
      path: 'string',
      storageActionParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      storageActionTimestamp: 'number',
      storageClass: 'string',
      tableName: 'string',
      topRequester: 'string',
      totalFileAccessNum: 'number',
      totalFileAccessNum30d: 'number',
      totalFileAccessNum7d: 'number',
      totalFileCount: 'number',
      totalFileSizeInBytes: 'number',
      totalMetaFileCount: 'number',
      totalMetaSizeInBytes: 'number',
      unaccessedStdIaPartitionCount180d: 'number',
      unaccessedStdPartitionCount30d: 'number',
      updatedAt: 'number',
    };
  }

  validate() {
    if(this.storageActionParams) {
      $dara.Model.validateMap(this.storageActionParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


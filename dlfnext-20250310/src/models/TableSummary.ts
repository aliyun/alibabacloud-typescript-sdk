// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TableSummary extends $dara.Model {
  /**
   * @remarks
   * The table creation time.
   * 
   * @example
   * 1744970111419
   */
  createdAt?: number;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * default
   */
  databaseName?: string;
  /**
   * @remarks
   * The update date of the storage overview data.
   * 
   * @example
   * 2025-06-01
   */
  generatedDate?: string;
  /**
   * @remarks
   * The last data access time of the table.
   * 
   * @example
   * 1744970111419
   */
  lastAccessTime?: number;
  /**
   * @remarks
   * The last requester.
   * 
   * @example
   * acs:ram::[accountId]:root
   */
  lastRequester?: string;
  /**
   * @remarks
   * The storage size of the latest snapshot, in bytes.
   * 
   * @example
   * 1024
   */
  latestSnapshotDataSizeInBytes?: number;
  /**
   * @remarks
   * The storage size of archive data files.
   * 
   * @example
   * 10240
   */
  objTypeArchiveSize?: number;
  /**
   * @remarks
   * The storage size of cold archive data files.
   * 
   * @example
   * 10240
   */
  objTypeColdArchiveSize?: number;
  /**
   * @remarks
   * The storage size of infrequent access data files.
   * 
   * @example
   * 10240
   */
  objTypeIaSize?: number;
  /**
   * @remarks
   * The storage size of standard data files.
   * 
   * @example
   * 10240
   */
  objTypeStandardSize?: number;
  /**
   * @remarks
   * The total number of partitions.
   * 
   * @example
   * 10
   */
  partitionCount?: number;
  /**
   * @remarks
   * The storage location.
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
  /**
   * @remarks
   * The storage class transition time.
   * 
   * @example
   * 1767491579459
   */
  storageActionTimestamp?: number;
  /**
   * @remarks
   * The storage class.
   * 
   * @example
   * STANDARD
   */
  storageClass?: string;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * table1
   */
  tableName?: string;
  /**
   * @remarks
   * The top requester of the day.
   * 
   * @example
   * acs:ram::[accountId]:root
   */
  topRequester?: string;
  /**
   * @remarks
   * The total number of file accesses.
   * 
   * @example
   * 10
   */
  totalFileAccessNum?: number;
  /**
   * @remarks
   * The total number of file accesses in the last 7 days.
   * 
   * @example
   * 100
   */
  totalFileAccessNum30d?: number;
  /**
   * @remarks
   * The total number of file accesses in the last 30 days.
   * 
   * @example
   * 30
   */
  totalFileAccessNum7d?: number;
  /**
   * @remarks
   * The total number of table files.
   * 
   * @example
   * 100
   */
  totalFileCount?: number;
  /**
   * @remarks
   * The table storage capacity, in bytes.
   * 
   * @example
   * 1024
   */
  totalFileSizeInBytes?: number;
  /**
   * @remarks
   * The number of metadata files.
   * 
   * @example
   * 10
   */
  totalMetaFileCount?: number;
  /**
   * @remarks
   * The storage size of metadata files.
   * 
   * @example
   * 10240
   */
  totalMetaSizeInBytes?: number;
  /**
   * @remarks
   * The number of standard or infrequent access partitions that have not been accessed in the last 180 days.
   * 
   * @example
   * 0
   */
  unaccessedStdIaPartitionCount180d?: number;
  /**
   * @remarks
   * The number of standard storage partitions that have not been accessed in the last 30 days.
   * 
   * @example
   * 1
   */
  unaccessedStdPartitionCount30d?: number;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 1764555981383
   */
  updatedAt?: number;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      databaseName: 'databaseName',
      generatedDate: 'generatedDate',
      lastAccessTime: 'lastAccessTime',
      lastRequester: 'lastRequester',
      latestSnapshotDataSizeInBytes: 'latestSnapshotDataSizeInBytes',
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
      latestSnapshotDataSizeInBytes: 'number',
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


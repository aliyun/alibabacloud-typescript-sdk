// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TableSummary extends $dara.Model {
  /**
   * @remarks
   * Latest snapshot storage size
   * 
   * @example
   * 1744970111419
   */
  createdAt?: number;
  /**
   * @remarks
   * Database name
   * 
   * @example
   * default
   */
  databaseName?: string;
  /**
   * @example
   * 2025-06-01
   */
  generatedDate?: string;
  /**
   * @example
   * 1744970111419
   */
  lastAccessTime?: number;
  objTypeArchiveSize?: number;
  objTypeColdArchiveSize?: number;
  objTypeIaSize?: number;
  objTypeStandardSize?: number;
  /**
   * @remarks
   * Creation timestamp in milliseconds
   * 
   * @example
   * 10
   */
  partitionCount?: number;
  /**
   * @example
   * oss://clg-xxxx/db-xxxx/tbl-xxxx
   */
  path?: string;
  storageActionParams?: { [key: string]: string };
  storageActionTimestamp?: number;
  storageClass?: string;
  /**
   * @remarks
   * Table name
   * 
   * @example
   * table1
   */
  tableName?: string;
  /**
   * @remarks
   * 30-day access count
   * 
   * @example
   * 100
   */
  totalFileCount?: number;
  /**
   * @example
   * 1024
   */
  totalFileSizeInBytes?: number;
  totalMetaFileCount?: number;
  totalMetaSizeInBytes?: number;
  /**
   * @remarks
   * Creation timestamp in milliseconds
   */
  unaccessedStdIaPartitionCount180d?: number;
  /**
   * @remarks
   * Creation timestamp in milliseconds
   */
  unaccessedStdPartitionCount30d?: number;
  updatedAt?: number;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      databaseName: 'databaseName',
      generatedDate: 'generatedDate',
      lastAccessTime: 'lastAccessTime',
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TableSummary extends $dara.Model {
  /**
   * @remarks
   * Latest snapshot storage size
   */
  createdAt?: number;
  /**
   * @remarks
   * Database name
   */
  databaseName?: string;
  generatedDate?: string;
  lastAccessTime?: number;
  objTypeArchiveSize?: number;
  objTypeColdArchiveSize?: number;
  objTypeIaSize?: number;
  objTypeStandardSize?: number;
  /**
   * @remarks
   * Creation timestamp in milliseconds
   */
  partitionCount?: number;
  path?: string;
  storageActionParams?: { [key: string]: string };
  storageActionTimestamp?: number;
  storageClass?: string;
  /**
   * @remarks
   * Table name
   */
  tableName?: string;
  /**
   * @remarks
   * 30-day access count
   */
  totalFileCount?: number;
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


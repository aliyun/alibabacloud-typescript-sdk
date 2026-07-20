// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PartitionSummary extends $dara.Model {
  /**
   * @remarks
   * Partition creation timestamp in milliseconds
   */
  createdAt?: number;
  /**
   * @remarks
   * Database name
   */
  databaseName?: string;
  /**
   * @remarks
   * Total files in partition
   */
  lastAccessTime?: number;
  lastRequester?: string;
  /**
   * @remarks
   * Partition identifier
   */
  partitionName?: string;
  storageActionParams?: { [key: string]: string };
  storageActionTimestamp?: number;
  storageClass?: string;
  /**
   * @remarks
   * Table name
   */
  tableName?: string;
  topRequester?: string;
  totalFileAccessNum?: number;
  totalFileAccessNum30d?: number;
  totalFileAccessNum7d?: number;
  /**
   * @remarks
   * 24h access count
   */
  totalFileCount?: number;
  /**
   * @remarks
   * Last data access timestamp in milliseconds
   */
  totalFileSizeInBytes?: number;
  updatedAt?: number;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      databaseName: 'databaseName',
      lastAccessTime: 'lastAccessTime',
      lastRequester: 'lastRequester',
      partitionName: 'partitionName',
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
      updatedAt: 'updatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      databaseName: 'string',
      lastAccessTime: 'number',
      lastRequester: 'string',
      partitionName: 'string',
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


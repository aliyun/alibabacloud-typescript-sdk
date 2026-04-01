// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PartitionSummary extends $dara.Model {
  /**
   * @remarks
   * Partition creation timestamp in milliseconds
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
   * @remarks
   * Total files in partition
   * 
   * @example
   * 1744970111419
   */
  lastAccessTime?: number;
  lastRequester?: string;
  /**
   * @remarks
   * Partition identifier
   * 
   * @example
   * hh=18
   */
  partitionName?: string;
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
  topRequester?: string;
  totalFileAccessNum?: number;
  totalFileAccessNum30d?: number;
  totalFileAccessNum7d?: number;
  /**
   * @remarks
   * 24h access count
   * 
   * @example
   * 2
   */
  totalFileCount?: number;
  /**
   * @remarks
   * Last data access timestamp in milliseconds
   * 
   * @example
   * 2048
   */
  totalFileSizeInBytes?: number;
  /**
   * @example
   * 1744970111419
   */
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


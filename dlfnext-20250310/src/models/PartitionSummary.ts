// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PartitionSummary extends $dara.Model {
  /**
   * @remarks
   * The creation timestamp for the partition.
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
   * The last access timestamp for the partition\\"s data.
   * 
   * @example
   * 1744970111419
   */
  lastAccessTime?: number;
  /**
   * @remarks
   * The last requester.
   */
  lastRequester?: string;
  /**
   * @remarks
   * The name of the partition.
   * 
   * @example
   * hh=18
   */
  partitionName?: string;
  /**
   * @remarks
   * The storage action parameters.
   */
  storageActionParams?: { [key: string]: string };
  /**
   * @remarks
   * The storage action timestamp.
   */
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
  /**
   * @remarks
   * The top requester.
   */
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
   * The total number of files in the partition.
   * 
   * @example
   * 2
   */
  totalFileCount?: number;
  /**
   * @remarks
   * The total size, in bytes, of all files in the partition.
   * 
   * @example
   * 2048
   */
  totalFileSizeInBytes?: number;
  /**
   * @remarks
   * The last update timestamp for the partition.
   * 
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


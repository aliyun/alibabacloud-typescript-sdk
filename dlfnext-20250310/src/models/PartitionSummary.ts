// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PartitionSummary extends $dara.Model {
  /**
   * @remarks
   * The partition creation time.
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
   * The last data access time.
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
   * The partition name.
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
   * The storage class transition time.
   * 
   * @example
   * 1764556155852
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
   * table_name
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
   * The total number of file accesses in the last 30 days.
   * 
   * @example
   * 100
   */
  totalFileAccessNum30d?: number;
  /**
   * @remarks
   * The total number of file accesses in the last 7 days.
   * 
   * @example
   * 70
   */
  totalFileAccessNum7d?: number;
  /**
   * @remarks
   * The total number of files.
   * 
   * @example
   * 2
   */
  totalFileCount?: number;
  /**
   * @remarks
   * The storage capacity in bytes.
   * 
   * @example
   * 2048
   */
  totalFileSizeInBytes?: number;
  /**
   * @remarks
   * The last update time.
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


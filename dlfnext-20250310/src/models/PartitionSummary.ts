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
  /**
   * @remarks
   * Partition identifier
   */
  partitionName?: string;
  /**
   * @remarks
   * Table name
   */
  tableName?: string;
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
      partitionName: 'partitionName',
      tableName: 'tableName',
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
      partitionName: 'string',
      tableName: 'string',
      totalFileCount: 'number',
      totalFileSizeInBytes: 'number',
      updatedAt: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


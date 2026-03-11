// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DatabaseSummary extends $dara.Model {
  /**
   * @remarks
   * Creation timestamp in milliseconds
   * 
   * @example
   * 1744970111419
   */
  createdAt?: number;
  /**
   * @remarks
   * 库名 - Database name
   * 
   * @example
   * default
   */
  databaseName?: string;
  /**
   * @remarks
   * Last profile update date in format yyyyMMdd
   * 
   * @example
   * 2025-06-01
   */
  generatedDate?: string;
  /**
   * @remarks
   * Storage location URI
   * 
   * @example
   * oss://clg-paimon-xxx/db-xxx
   */
  location?: string;
  objTypeArchiveSize?: number;
  objTypeColdArchiveSize?: number;
  objTypeIaSize?: number;
  objTypeStandardSize?: number;
  /**
   * @example
   * 1000
   */
  partitionCount?: number;
  /**
   * @remarks
   * Total storage in bytes
   * 
   * @example
   * 50
   */
  tableCount?: number;
  /**
   * @example
   * 2000
   */
  totalFileCount?: number;
  /**
   * @remarks
   * Total file count
   * 
   * @example
   * 1048576
   */
  totalFileSizeInBytes?: number;
  totalMetaFileCount?: number;
  totalMetaSizeInBytes?: number;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      databaseName: 'databaseName',
      generatedDate: 'generatedDate',
      location: 'location',
      objTypeArchiveSize: 'objTypeArchiveSize',
      objTypeColdArchiveSize: 'objTypeColdArchiveSize',
      objTypeIaSize: 'objTypeIaSize',
      objTypeStandardSize: 'objTypeStandardSize',
      partitionCount: 'partitionCount',
      tableCount: 'tableCount',
      totalFileCount: 'totalFileCount',
      totalFileSizeInBytes: 'totalFileSizeInBytes',
      totalMetaFileCount: 'totalMetaFileCount',
      totalMetaSizeInBytes: 'totalMetaSizeInBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      databaseName: 'string',
      generatedDate: 'string',
      location: 'string',
      objTypeArchiveSize: 'number',
      objTypeColdArchiveSize: 'number',
      objTypeIaSize: 'number',
      objTypeStandardSize: 'number',
      partitionCount: 'number',
      tableCount: 'number',
      totalFileCount: 'number',
      totalFileSizeInBytes: 'number',
      totalMetaFileCount: 'number',
      totalMetaSizeInBytes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DatabaseSummary extends $dara.Model {
  /**
   * @remarks
   * The database creation time.
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
   * The date when the storage overview data was updated.
   * 
   * @example
   * 2025-06-01
   */
  generatedDate?: string;
  /**
   * @remarks
   * The storage location.
   * 
   * @example
   * oss://clg-paimon-xxx/db-xxx
   */
  location?: string;
  /**
   * @remarks
   * The storage size of Archive data files.
   * 
   * @example
   * 10240
   */
  objTypeArchiveSize?: number;
  /**
   * @remarks
   * The storage size of Cold Archive data files.
   * 
   * @example
   * 10240
   */
  objTypeColdArchiveSize?: number;
  /**
   * @remarks
   * The storage size of Infrequent Access data files.
   * 
   * @example
   * 10240
   */
  objTypeIaSize?: number;
  /**
   * @remarks
   * The storage size of Standard data files.
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
   * 1000
   */
  partitionCount?: number;
  /**
   * @remarks
   * The total number of tables.
   * 
   * @example
   * 50
   */
  tableCount?: number;
  /**
   * @remarks
   * The total number of files.
   * 
   * @example
   * 2000
   */
  totalFileCount?: number;
  /**
   * @remarks
   * The storage capacity.
   * 
   * @example
   * 1048576
   */
  totalFileSizeInBytes?: number;
  /**
   * @remarks
   * The total number of metadata files.
   * 
   * @example
   * 1500
   */
  totalMetaFileCount?: number;
  /**
   * @remarks
   * The storage size of metadata files, in bytes.
   * 
   * @example
   * 10240
   */
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


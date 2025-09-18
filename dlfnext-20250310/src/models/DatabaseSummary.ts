// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DatabaseSummary extends $dara.Model {
  /**
   * @remarks
   * Creation timestamp in milliseconds
   */
  createdAt?: number;
  /**
   * @remarks
   * 库名 - Database name
   */
  databaseName?: string;
  /**
   * @remarks
   * Last profile update date in format yyyyMMdd
   */
  generatedDate?: string;
  /**
   * @remarks
   * Storage location URI
   */
  location?: string;
  objTypeArchiveSize?: number;
  objTypeColdArchiveSize?: number;
  objTypeIaSize?: number;
  objTypeStandardSize?: number;
  partitionCount?: number;
  /**
   * @remarks
   * Total storage in bytes
   */
  tableCount?: number;
  totalFileCount?: number;
  /**
   * @remarks
   * Total file count
   */
  totalFileSizeInBytes?: number;
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


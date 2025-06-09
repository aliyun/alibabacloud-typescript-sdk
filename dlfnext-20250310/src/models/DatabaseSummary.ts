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
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      databaseName: 'databaseName',
      generatedDate: 'generatedDate',
      location: 'location',
      partitionCount: 'partitionCount',
      tableCount: 'tableCount',
      totalFileCount: 'totalFileCount',
      totalFileSizeInBytes: 'totalFileSizeInBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      databaseName: 'string',
      generatedDate: 'string',
      location: 'string',
      partitionCount: 'number',
      tableCount: 'number',
      totalFileCount: 'number',
      totalFileSizeInBytes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


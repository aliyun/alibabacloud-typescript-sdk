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
  /**
   * @remarks
   * Creation timestamp in milliseconds
   */
  partitionCount?: number;
  path?: string;
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
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      databaseName: 'databaseName',
      generatedDate: 'generatedDate',
      lastAccessTime: 'lastAccessTime',
      partitionCount: 'partitionCount',
      path: 'path',
      tableName: 'tableName',
      totalFileCount: 'totalFileCount',
      totalFileSizeInBytes: 'totalFileSizeInBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      databaseName: 'string',
      generatedDate: 'string',
      lastAccessTime: 'number',
      partitionCount: 'number',
      path: 'string',
      tableName: 'string',
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


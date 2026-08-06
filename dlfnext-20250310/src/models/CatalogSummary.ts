// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MoMValues } from "./MoMvalues";


export class CatalogSummary extends $dara.Model {
  /**
   * @remarks
   * The total number of metadata requests in the current month.
   * 
   * @example
   * 1000
   */
  apiVisitCountMonthly?: number;
  /**
   * @remarks
   * The month-over-month data on the total number of databases.
   */
  databaseCount?: MoMValues;
  /**
   * @remarks
   * The total number of file requests for the current month.
   * 
   * @example
   * 10000
   */
  fileAccessCountMonthly?: number;
  /**
   * @remarks
   * The date when the storage overview data was updated.
   * 
   * @example
   * 2025-01-01
   */
  generatedDate?: string;
  /**
   * @remarks
   * The storage usage for Archive data files.
   * 
   * @example
   * 10240
   */
  objTypeArchiveSize?: number;
  /**
   * @remarks
   * The storage usage for Cold Archive data files.
   * 
   * @example
   * 10240
   */
  objTypeColdArchiveSize?: number;
  /**
   * @remarks
   * The storage usage for Infrequent Access (IA) data files.
   * 
   * @example
   * 10240
   */
  objTypeIaSize?: number;
  /**
   * @remarks
   * The storage usage for Standard data files.
   * 
   * @example
   * 10240
   */
  objTypeStandardSize?: number;
  /**
   * @remarks
   * The month-over-month data on the total number of partitions.
   */
  partitionCount?: MoMValues;
  /**
   * @remarks
   * The month-over-month data on the total number of tables.
   */
  tableCount?: MoMValues;
  /**
   * @remarks
   * The data access traffic for the current month, in bytes.
   * 
   * @example
   * 1024
   */
  throughputMonthly?: number;
  /**
   * @remarks
   * The month-over-month data on the total number of files.
   */
  totalFileCount?: MoMValues;
  /**
   * @remarks
   * The change in storage capacity from the previous period, in bytes.
   */
  totalFileSizeInBytes?: MoMValues;
  /**
   * @remarks
   * The month-over-month data for the total number of metadata files.
   */
  totalMetaFileCount?: MoMValues;
  /**
   * @remarks
   * The month-over-month data for the storage usage of metadata files, in bytes.
   */
  totalMetaSizeInBytes?: MoMValues;
  static names(): { [key: string]: string } {
    return {
      apiVisitCountMonthly: 'apiVisitCountMonthly',
      databaseCount: 'databaseCount',
      fileAccessCountMonthly: 'fileAccessCountMonthly',
      generatedDate: 'generatedDate',
      objTypeArchiveSize: 'objTypeArchiveSize',
      objTypeColdArchiveSize: 'objTypeColdArchiveSize',
      objTypeIaSize: 'objTypeIaSize',
      objTypeStandardSize: 'objTypeStandardSize',
      partitionCount: 'partitionCount',
      tableCount: 'tableCount',
      throughputMonthly: 'throughputMonthly',
      totalFileCount: 'totalFileCount',
      totalFileSizeInBytes: 'totalFileSizeInBytes',
      totalMetaFileCount: 'totalMetaFileCount',
      totalMetaSizeInBytes: 'totalMetaSizeInBytes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVisitCountMonthly: 'number',
      databaseCount: MoMValues,
      fileAccessCountMonthly: 'number',
      generatedDate: 'string',
      objTypeArchiveSize: 'number',
      objTypeColdArchiveSize: 'number',
      objTypeIaSize: 'number',
      objTypeStandardSize: 'number',
      partitionCount: MoMValues,
      tableCount: MoMValues,
      throughputMonthly: 'number',
      totalFileCount: MoMValues,
      totalFileSizeInBytes: MoMValues,
      totalMetaFileCount: MoMValues,
      totalMetaSizeInBytes: MoMValues,
    };
  }

  validate() {
    if(this.databaseCount && typeof (this.databaseCount as any).validate === 'function') {
      (this.databaseCount as any).validate();
    }
    if(this.partitionCount && typeof (this.partitionCount as any).validate === 'function') {
      (this.partitionCount as any).validate();
    }
    if(this.tableCount && typeof (this.tableCount as any).validate === 'function') {
      (this.tableCount as any).validate();
    }
    if(this.totalFileCount && typeof (this.totalFileCount as any).validate === 'function') {
      (this.totalFileCount as any).validate();
    }
    if(this.totalFileSizeInBytes && typeof (this.totalFileSizeInBytes as any).validate === 'function') {
      (this.totalFileSizeInBytes as any).validate();
    }
    if(this.totalMetaFileCount && typeof (this.totalMetaFileCount as any).validate === 'function') {
      (this.totalMetaFileCount as any).validate();
    }
    if(this.totalMetaSizeInBytes && typeof (this.totalMetaSizeInBytes as any).validate === 'function') {
      (this.totalMetaSizeInBytes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


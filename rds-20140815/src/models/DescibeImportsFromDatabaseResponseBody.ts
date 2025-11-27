// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescibeImportsFromDatabaseResponseBodyItemsImportResultFromDB extends $dara.Model {
  /**
   * @remarks
   * The status of the migration task. Valid values:
   * 
   * *   **NotStart**: The migration task has not started.
   * *   **FullExporting**: The migration task is exporting full data.
   * *   **FullImporting**: The migration task is importing full data.
   * *   **Success**: The migration task is successful.
   * *   **Failed**: The migration task failed.
   * *   **Canceled**: The migration task is canceled.
   * *   **Canceling**: The migration task is being canceled.
   * *   **IncrementalWaiting**: The migration task is waiting to synchronize incremental data.
   * *   **IncrementalImporting**: The migration task is synchronizing incremental data.
   * *   **StopSyncing**: The migration task stops synchronizing data.
   * 
   * @example
   * NotStart
   */
  importDataStatus?: string;
  /**
   * @remarks
   * The description of the migration task.
   * 
   * @example
   * Description
   */
  importDataStatusDescription?: string;
  /**
   * @remarks
   * The type of the migration task. Valid values:
   * 
   * *   **Full**: full migration
   * *   **Incremental:**: incremental migration
   * 
   * @example
   * Full
   */
  importDataType?: string;
  /**
   * @remarks
   * The ID of the migration task.
   * 
   * @example
   * 123
   */
  importId?: number;
  /**
   * @remarks
   * The time when the migration task synchronized incremental data. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2011-06-11T15:00Z
   */
  incrementalImportingTime?: string;
  static names(): { [key: string]: string } {
    return {
      importDataStatus: 'ImportDataStatus',
      importDataStatusDescription: 'ImportDataStatusDescription',
      importDataType: 'ImportDataType',
      importId: 'ImportId',
      incrementalImportingTime: 'IncrementalImportingTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      importDataStatus: 'string',
      importDataStatusDescription: 'string',
      importDataType: 'string',
      importId: 'number',
      incrementalImportingTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescibeImportsFromDatabaseResponseBodyItems extends $dara.Model {
  importResultFromDB?: DescibeImportsFromDatabaseResponseBodyItemsImportResultFromDB[];
  static names(): { [key: string]: string } {
    return {
      importResultFromDB: 'ImportResultFromDB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      importResultFromDB: { 'type': 'array', 'itemType': DescibeImportsFromDatabaseResponseBodyItemsImportResultFromDB },
    };
  }

  validate() {
    if(Array.isArray(this.importResultFromDB)) {
      $dara.Model.validateArray(this.importResultFromDB);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescibeImportsFromDatabaseResponseBody extends $dara.Model {
  /**
   * @remarks
   * The migration tasks.
   */
  items?: DescibeImportsFromDatabaseResponseBodyItems;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 1
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B000AA91-393D-46F9-8D9B-098E28931A3A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescibeImportsFromDatabaseResponseBodyItems,
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


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


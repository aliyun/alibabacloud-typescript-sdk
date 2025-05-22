// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMigrationJobDetailResponseBodyDataSynchronizationDetailListDataSynchronizationDetail extends $dara.Model {
  /**
   * @remarks
   * The status of incremental data migration. Valid values:
   * 
   * *   **NotStarted**: Incremental data migration is not started.
   * *   **Migrating**: Incremental data migration is in progress.
   * *   **Failed**: Incremental data migration failed.
   * *   **Finished**: Incremental data migration is completed.
   * 
   * @example
   * dtstestdata
   */
  destinationOwnerDBName?: string;
  /**
   * @remarks
   * The total number of records that are supposed to be migrated by the task.
   * 
   * @example
   * The details of incremental data migration.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The time taken by full data migration.
   * 
   * @example
   * dtstestdata
   */
  sourceOwnerDBName?: string;
  /**
   * @remarks
   * The number of records that have been migrated.
   * 
   * @example
   * Migrating
   */
  status?: string;
  /**
   * @remarks
   * The name of the database to which the migration object in the destination instance belongs.
   * 
   * @example
   * customer
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      destinationOwnerDBName: 'DestinationOwnerDBName',
      errorMessage: 'ErrorMessage',
      sourceOwnerDBName: 'SourceOwnerDBName',
      status: 'Status',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationOwnerDBName: 'string',
      errorMessage: 'string',
      sourceOwnerDBName: 'string',
      status: 'string',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMigrationJobStatusResponseBodyDataSynchronizationStatus extends $dara.Model {
  /**
   * @remarks
   * The UNIX timestamp generated when the latest incremental data is migrated. Unit: seconds.
   * 
   * @example
   * 1612507847
   */
  checkpoint?: string;
  /**
   * @remarks
   * The latency of incremental data migration. Unit: seconds.
   * 
   * @example
   * 0
   */
  delay?: string;
  /**
   * @remarks
   * The error message returned if incremental data migration failed.
   * 
   * @example
   * The task has failed for too long and cannot be restored
   */
  errorMessage?: string;
  /**
   * @remarks
   * The progress of incremental data migration. Unit: %.
   * 
   * @example
   * 95
   */
  percent?: string;
  /**
   * @remarks
   * The status of incremental data migration. Valid values:
   * 
   * *   **NotStarted**: Incremental data migration is not started.
   * *   **Migrating**: Incremental data migration is in progress.
   * *   **Failed**: Incremental data migration failed.
   * *   **Finished**: Incremental data migration is completed.
   * *   **Catched**: Incremental data migration is not delayed.
   * 
   * @example
   * Catched
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      checkpoint: 'Checkpoint',
      delay: 'Delay',
      errorMessage: 'ErrorMessage',
      percent: 'Percent',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkpoint: 'string',
      delay: 'string',
      errorMessage: 'string',
      percent: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


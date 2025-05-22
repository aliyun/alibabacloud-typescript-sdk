// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDtsJobDetailResponseBodySubDistributedJobReverseJobDataSynchronizationStatus extends $dara.Model {
  /**
   * @remarks
   * The error message returned if the task failed.
   * 
   * @example
   * DTS-070211: Connect Source DB failed. cause by ****
   */
  errorMessage?: string;
  /**
   * @remarks
   * Indicates whether the instance class needs to be upgraded. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  needUpgrade?: boolean;
  /**
   * @remarks
   * The progress of incremental data migration or synchronization.
   * 
   * @example
   * 95
   */
  percent?: string;
  /**
   * @remarks
   * The number of rows and size of data that is synchronized or migrated to the destination table per second during incremental data synchronization or migration.
   * 
   * @example
   * 0.00RPS/(0.000MB/s)
   */
  progress?: string;
  /**
   * @remarks
   * The state of incremental data migration or synchronization. Valid values:
   * 
   * *   **NotStarted**: The task is not started.
   * *   **Migrating**: The task is in progress.
   * *   **Suspending**: The task is paused.
   * *   **Checking**: The task is in precheck.
   * *   **Failed**: The task failed.
   * *   **Finished**: The task is complete.
   * *   **Catched**: The task has no latency.
   * 
   * @example
   * Catched
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      needUpgrade: 'NeedUpgrade',
      percent: 'Percent',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      needUpgrade: 'boolean',
      percent: 'string',
      progress: 'string',
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


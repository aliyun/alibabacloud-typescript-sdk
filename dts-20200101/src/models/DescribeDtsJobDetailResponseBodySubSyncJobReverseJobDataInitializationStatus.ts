// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDtsJobDetailResponseBodySubSyncJobReverseJobDataInitializationStatus extends $dara.Model {
  /**
   * @remarks
   * The error message returned if full data migration or initial full data synchronization failed.
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
   * The progress of full data migration or initial full data synchronization. Unit: percentage.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The number of entries that are migrated or synchronized during full data migration or initial full data synchronization.
   * 
   * @example
   * 16
   */
  progress?: string;
  /**
   * @remarks
   * The state of full data migration or initial full data synchronization. Valid values:
   * 
   * *   **NotStarted**: The task is not started.
   * *   **Migrating**: The task is in progress.
   * *   **Failed**: The task failed.
   * *   **Finished**: The task is complete.
   * 
   * @example
   * Finished
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


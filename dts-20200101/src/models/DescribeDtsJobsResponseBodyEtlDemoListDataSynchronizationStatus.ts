// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDtsJobsResponseBodyEtlDemoListDataSynchronizationStatus extends $dara.Model {
  /**
   * @remarks
   * The error message returned if incremental data migration or synchronization failed.
   * 
   * @example
   * The task has failed for a long time and cannot be recovered.
   */
  errorMessage?: string;
  /**
   * @remarks
   * Indicates whether the instance needs to be upgraded. Valid values:
   * 
   * - **true**
   * - **false**
   * 
   * > To upgrade a DTS instance, call the [TransferInstanceClass](https://help.aliyun.com/document_detail/281093.html) operation.
   * 
   * @example
   * true
   */
  needUpgrade?: boolean;
  /**
   * @remarks
   * The progress of incremental data migration or synchronization. Unit: percentage.
   * 
   * @example
   * 95
   */
  percent?: string;
  /**
   * @remarks
   * The number of entries that have been migrated or synchronized during incremental data migration or synchronization.
   * 
   * @example
   * 0/0
   */
  progress?: string;
  /**
   * @remarks
   * The state of incremental data migration or synchronization. Valid values:
   * 
   * - **NotStarted**: The task is not started. 
   * - **Migrating**: The task is in progress. 
   * - **Failed**: The task failed. 
   * - **Finished**: The task is complete. 
   * - **Catched**: The task is not delayed.
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


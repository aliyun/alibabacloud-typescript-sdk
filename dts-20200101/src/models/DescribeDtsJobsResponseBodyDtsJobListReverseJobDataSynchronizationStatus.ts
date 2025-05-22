// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDtsJobsResponseBodyDtsJobListReverseJobDataSynchronizationStatus extends $dara.Model {
  /**
   * @remarks
   * The error message returned if incremental data synchronization failed.
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
   * The progress of incremental data synchronization. Unit: percentage.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The number of entries that have been migrated or synchronized during incremental data migration or synchronization.
   * 
   * @example
   * 20001
   */
  progress?: string;
  /**
   * @remarks
   * The state of incremental data synchronization.
   * 
   * @example
   * Migrating
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


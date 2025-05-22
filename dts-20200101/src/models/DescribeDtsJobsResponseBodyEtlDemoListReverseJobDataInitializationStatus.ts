// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDtsJobsResponseBodyEtlDemoListReverseJobDataInitializationStatus extends $dara.Model {
  /**
   * @remarks
   * The error message returned if initial full data synchronization failed.
   * 
   * @example
   * java.lang.NumberFormatException: For input string: ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The progress of initial full data synchronization. Unit: percentage.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The number of entries that have been synchronized during initial full data synchronization.
   * 
   * @example
   * 43071
   */
  progress?: string;
  /**
   * @remarks
   * The state of initial full data synchronization. Valid values:
   * 
   * - **NotStarted**: The task is not started. 
   * - **Migrating**: The task is in progress. 
   * - **Failed**: The task failed. 
   * - **Finished**: The task is complete.
   * 
   * @example
   * Finished
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
      percent: 'Percent',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
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


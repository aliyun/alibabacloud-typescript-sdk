// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDtsJobsResponseBodyDtsJobListReverseJobFullDataCheckStatus extends $dara.Model {
  canSwitch?: boolean;
  /**
   * @remarks
   * The error message returned if the task failed.
   * 
   * @example
   * java.lang.NumberFormatException: For input string: ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The progress of the full data verification task. Unit: percentage.
   * 
   * @example
   * 100
   */
  percent?: string;
  /**
   * @remarks
   * The progress of the full data verification task.
   * 
   * @example
   * 1 rows/s (row: 5/5, table: 1/1)
   */
  progress?: string;
  /**
   * @remarks
   * The state of the full data verification task. Valid values:
   * 
   * - **NotStarted**: The verification is not started. 
   * - **Checking**: The verification is in progress. 
   * - **Failed**: The verification failed. 
   * - **Finished**: The verification is complete.
   * 
   * @example
   * Checking
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      canSwitch: 'CanSwitch',
      errorMessage: 'ErrorMessage',
      percent: 'Percent',
      progress: 'Progress',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canSwitch: 'boolean',
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


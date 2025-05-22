// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDtsJobsResponseBodyDtsJobListIncDataCheckStatus extends $dara.Model {
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
   * The progress of the incremental data verification task. Unit: percentage.
   * 
   * @example
   * 95
   */
  percent?: string;
  /**
   * @remarks
   * The progress of the incremental data verification task.
   * 
   * @example
   * 1 rows/s (row: 5/5, table: 1/1)
   */
  progress?: string;
  /**
   * @remarks
   * The state of the incremental data verification task. Valid values:
   * 
   * - **Catched**: The verification is delayed. 
   * - **NotStarted**: The verification is not started. 
   * - **Checking**: The verification is in progress. 
   * - **Failed**: The verification failed.
   * 
   * @example
   * Checking
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


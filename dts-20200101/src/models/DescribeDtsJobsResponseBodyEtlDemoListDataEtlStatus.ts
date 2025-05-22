// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDtsJobsResponseBodyEtlDemoListDataEtlStatus extends $dara.Model {
  /**
   * @remarks
   * The error message returned if the ETL task failed.
   * 
   * @example
   * The task has failed for a long time and cannot be recovered.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The progress of the ETL task. Unit: percentage.
   * 
   * @example
   * 95
   */
  percent?: string;
  /**
   * @remarks
   * The number of entries that have been processed by the ETL task.
   * 
   * @example
   * 0/0
   */
  progress?: string;
  /**
   * @remarks
   * The state of the ETL task. Valid values:
   * 
   * - **NotStarted**: The task is not started. 
   * - **Migrating**: The task is in progress. 
   * - **Failed**: The task failed. 
   * - **Finished**: The task is complete. 
   * - **Catched**: The task is not delayed.
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


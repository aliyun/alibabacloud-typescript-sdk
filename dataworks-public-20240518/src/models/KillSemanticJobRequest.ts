// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class KillSemanticJobRequest extends $dara.Model {
  /**
   * @remarks
   * The executor job ID of the run to stop. Use the Data.ExecutorJobId value from the RunSemanticJob response or the ExecutorJobId from a ListSemanticJobRuns record.
   * 
   * This parameter is required.
   * 
   * @example
   * exec-job-demo
   */
  executorJobId?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace to which the job belongs. Use the ProjectId from the CreateSemanticJob response or a ListSemanticJobs list item.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  projectId?: number;
  /**
   * @remarks
   * The number of retries when sending the stop request to the executor. This parameter is optional. Specify a non-negative integer. After the call, confirm the final status by calling GetSemanticJobDetail.
   * 
   * @example
   * 1
   */
  retryTimes?: number;
  static names(): { [key: string]: string } {
    return {
      executorJobId: 'ExecutorJobId',
      projectId: 'ProjectId',
      retryTimes: 'RetryTimes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executorJobId: 'string',
      projectId: 'number',
      retryTimes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


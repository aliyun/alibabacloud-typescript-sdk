// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunSemanticJobResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The current SQL fragment index returned by the executor in the submission response.
   * 
   * @example
   * 0
   */
  currentSqlIndex?: number;
  /**
   * @remarks
   * The runtime environment identifier returned by the executor in the submission response.
   * 
   * @example
   * PROD
   */
  env?: string;
  /**
   * @remarks
   * The list of execution type codes returned by the executor in the submission response.
   */
  execTypes?: number[];
  /**
   * @remarks
   * The executor job identifier. Pass this value to the ExecutorJobId parameter of GetSemanticJobDetail, GetSemanticJobLog, or KillSemanticJob.
   * 
   * @example
   * exec-job-demo
   */
  executorJobId?: string;
  /**
   * @remarks
   * The unique identifier of this run. Pass this value to the JobRunId parameter of DownloadSemanticResults to obtain the output of this run.
   * 
   * @example
   * 01H00000000000000000000000
   */
  jobRunId?: string;
  /**
   * @remarks
   * The list of status codes returned by the executor in the submission response. The status at the submission stage does not indicate that the results are complete.
   */
  statuses?: number[];
  static names(): { [key: string]: string } {
    return {
      currentSqlIndex: 'CurrentSqlIndex',
      env: 'Env',
      execTypes: 'ExecTypes',
      executorJobId: 'ExecutorJobId',
      jobRunId: 'JobRunId',
      statuses: 'Statuses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentSqlIndex: 'number',
      env: 'string',
      execTypes: { 'type': 'array', 'itemType': 'number' },
      executorJobId: 'string',
      jobRunId: 'string',
      statuses: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.execTypes)) {
      $dara.Model.validateArray(this.execTypes);
    }
    if(Array.isArray(this.statuses)) {
      $dara.Model.validateArray(this.statuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunSemanticJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The run information for this submission. A successful submission does not mean that the semantic model output has been generated. Use the detail operation to confirm the status before downloading results.
   */
  data?: RunSemanticJobResponseBodyData;
  /**
   * @remarks
   * The request ID. Used for locating logs and troubleshooting issues.
   * 
   * @example
   * 676271D6-53B4-57BE-89FA-72F7AE1418DF
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RunSemanticJobResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


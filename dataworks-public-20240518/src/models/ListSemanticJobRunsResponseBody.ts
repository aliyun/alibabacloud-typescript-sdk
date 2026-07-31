// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSemanticJobRunsResponseBodyDataJobRuns extends $dara.Model {
  /**
   * @remarks
   * The executor job ID. Pass this value to the ExecutorJobId parameter of GetSemanticJobDetail, GetSemanticJobLog, or KillSemanticJob.
   * 
   * @example
   * exec-job-demo
   */
  executorJobId?: string;
  /**
   * @remarks
   * The time when the run record was created. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1700000000000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The name of the job to which this run belongs. This value can be used to re-run the job, query run records, or download results.
   * 
   * @example
   * semantic-job-demo
   */
  jobName?: string;
  /**
   * @remarks
   * The semantic job run ID. Pass this value to the JobRunId parameter of DownloadSemanticResults to download the results of this run.
   * 
   * @example
   * 01H00000000000000000000000
   */
  jobRunId?: string;
  /**
   * @remarks
   * The ID of the user who submitted this run.
   * 
   * @example
   * user-demo
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      executorJobId: 'ExecutorJobId',
      gmtCreate: 'GmtCreate',
      jobName: 'JobName',
      jobRunId: 'JobRunId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executorJobId: 'string',
      gmtCreate: 'number',
      jobName: 'string',
      jobRunId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSemanticJobRunsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of run records.
   */
  jobRuns?: ListSemanticJobRunsResponseBodyDataJobRuns[];
  /**
   * @remarks
   * The page number returned, starting from 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records per page returned.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of run records that match the current job criteria.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      jobRuns: 'JobRuns',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobRuns: { 'type': 'array', 'itemType': ListSemanticJobRunsResponseBodyDataJobRuns },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.jobRuns)) {
      $dara.Model.validateArray(this.jobRuns);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSemanticJobRunsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The paginated run record results. Use the JobRunId to download the results of a specific run, and use the ExecutorJobId to query details, logs, or stop a run.
   */
  data?: ListSemanticJobRunsResponseBodyData;
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
      data: ListSemanticJobRunsResponseBodyData,
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


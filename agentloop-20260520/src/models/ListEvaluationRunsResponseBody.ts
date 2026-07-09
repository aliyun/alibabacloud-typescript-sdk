// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEvaluationRunsResponseBodyEvaluationRuns extends $dara.Model {
  /**
   * @remarks
   * The creation time, in seconds-level UNIX timestamp.
   * 
   * @example
   * 1782816000
   */
  createdAt?: number;
  /**
   * @remarks
   * The end time of the data window for this run, in seconds-level UNIX timestamp.
   * 
   * @example
   * 1782902400
   */
  dataEndTime?: number;
  /**
   * @remarks
   * The start time of the data window for this run, in seconds-level UNIX timestamp.
   * 
   * @example
   * 1782816000
   */
  dataStartTime?: number;
  /**
   * @remarks
   * The number of failed entries.
   * 
   * @example
   * 4
   */
  failedCount?: number;
  /**
   * @remarks
   * The run ID.
   * 
   * @example
   * eval-run-4fd47f3d7e684e15b1d3d178c6a5b81a
   */
  runId?: string;
  /**
   * @remarks
   * The run name.
   * 
   * @example
   * trace_task_completion_eval-backfill
   */
  runName?: string;
  /**
   * @remarks
   * The run type.
   * 
   * @example
   * backfill
   */
  runType?: string;
  /**
   * @remarks
   * The run status.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The number of successful entries.
   * 
   * @example
   * 96
   */
  successCount?: number;
  /**
   * @remarks
   * The evaluation task ID.
   * 
   * @example
   * eval-task-8b36f2e2b1f94f9c91ce7a4b0f6d9c25
   */
  taskId?: string;
  /**
   * @remarks
   * The total number of evaluation entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  /**
   * @remarks
   * The update time, in seconds-level UNIX timestamp.
   * 
   * @example
   * 1782816600
   */
  updatedAt?: number;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      dataEndTime: 'dataEndTime',
      dataStartTime: 'dataStartTime',
      failedCount: 'failedCount',
      runId: 'runId',
      runName: 'runName',
      runType: 'runType',
      status: 'status',
      successCount: 'successCount',
      taskId: 'taskId',
      totalCount: 'totalCount',
      updatedAt: 'updatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      dataEndTime: 'number',
      dataStartTime: 'number',
      failedCount: 'number',
      runId: 'string',
      runName: 'string',
      runType: 'string',
      status: 'string',
      successCount: 'number',
      taskId: 'string',
      totalCount: 'number',
      updatedAt: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEvaluationRunsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of run summaries.
   * 
   * @example
   * [{"runId":"eval-run-4fd47f3d7e684e15b1d3d178c6a5b81a","runType":"backfill","status":"Running","totalCount":100}]
   */
  evaluationRuns?: ListEvaluationRunsResponseBodyEvaluationRuns[];
  /**
   * @remarks
   * The number of entries per page used in this request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page. An empty value indicates that no more pages exist.
   * 
   * @example
   * eyJsYXN0SWQiOjEyMH0=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3FE4CD1E-FF41-56BE-B590-7A021D9C1524
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of runs that match the filter conditions.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      evaluationRuns: 'evaluationRuns',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      evaluationRuns: { 'type': 'array', 'itemType': ListEvaluationRunsResponseBodyEvaluationRuns },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.evaluationRuns)) {
      $dara.Model.validateArray(this.evaluationRuns);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


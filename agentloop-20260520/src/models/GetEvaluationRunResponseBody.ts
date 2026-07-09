// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEvaluationRunResponseBodyEvaluatorProgress extends $dara.Model {
  /**
   * @remarks
   * The evaluator name.
   * 
   * @example
   * Builtin.agent_task_completion
   */
  evaluatorName?: string;
  /**
   * @remarks
   * The number of failed entries for this evaluator.
   * 
   * @example
   * 4
   */
  failedCount?: number;
  /**
   * @remarks
   * The number of successful entries for this evaluator.
   * 
   * @example
   * 96
   */
  successCount?: number;
  /**
   * @remarks
   * The total number of entries for this evaluator.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      evaluatorName: 'evaluatorName',
      failedCount: 'failedCount',
      successCount: 'successCount',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      evaluatorName: 'string',
      failedCount: 'number',
      successCount: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEvaluationRunResponseBody extends $dara.Model {
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
   * The end time of the data window for the run, in seconds-level UNIX timestamp.
   * 
   * @example
   * 1782902400
   */
  dataEndTime?: number;
  /**
   * @remarks
   * The start time of the data window for the run, in seconds-level UNIX timestamp.
   * 
   * @example
   * 1782816000
   */
  dataStartTime?: number;
  /**
   * @remarks
   * The list of progress details by evaluator.
   * 
   * @example
   * [{"evaluatorName":"Builtin.agent_task_completion","totalCount":100,"successCount":96,"failedCount":4}]
   */
  evaluatorProgress?: GetEvaluationRunResponseBodyEvaluatorProgress[];
  /**
   * @remarks
   * The evaluator configuration snapshot at the time the run was created, in JSON string format.
   * 
   * @example
   * [{"evaluatorRef":"Builtin.agent_task_completion"}]
   */
  evaluators?: string;
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
   * The request ID.
   * 
   * @example
   * 3FE4CD1E-FF41-56BE-B590-7A021D9C1524
   */
  requestId?: string;
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
      evaluatorProgress: 'evaluatorProgress',
      evaluators: 'evaluators',
      failedCount: 'failedCount',
      requestId: 'requestId',
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
      evaluatorProgress: { 'type': 'array', 'itemType': GetEvaluationRunResponseBodyEvaluatorProgress },
      evaluators: 'string',
      failedCount: 'number',
      requestId: 'string',
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
    if(Array.isArray(this.evaluatorProgress)) {
      $dara.Model.validateArray(this.evaluatorProgress);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunStrategies } from "./RunStrategies";


export class ListEvaluationTasksResponseBodyEvaluationTasks extends $dara.Model {
  /**
   * @remarks
   * The data source and execution configuration summary.
   * 
   * @example
   * {"storeName":"logstore-tracing","dataScope":"trace"}
   */
  config?: { [key: string]: string };
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
   * The data source type of the evaluation object.
   * 
   * @example
   * trace
   */
  dataType?: string;
  /**
   * @remarks
   * The evaluation task description.
   * 
   * @example
   * 评估线上 Agent 链路任务完成度
   */
  description?: string;
  /**
   * @remarks
   * The evaluator configuration summary, in JSON string format.
   * 
   * @example
   * [{"evaluatorRef":"Builtin.agent_task_completion"}]
   */
  evaluators?: string;
  /**
   * @remarks
   * The structured run strategy configuration, including the parsed backfill strategy and continuous evaluation strategy.
   * 
   * @example
   * {"backfill":{"enabled":true,"startTime":1782816000000,"endTime":1782902400000},"continuous":{"enabled":true,"intervalUnit":"HOUR","intervalValue":1,"dataDelayMinutes":5}}
   */
  runStrategyConfig?: RunStrategies;
  /**
   * @remarks
   * The evaluation task status.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The key-value pairs of task tags. This parameter is empty if no tags are set.
   * 
   * @example
   * {"serviceId":"checkout-service","env":"prod"}
   */
  tags?: { [key: string]: string };
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
   * The evaluation task mode.
   * 
   * @example
   * batch
   */
  taskMode?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * trace_task_completion_eval
   */
  taskName?: string;
  /**
   * @remarks
   * The last update time, in seconds-level UNIX timestamp.
   * 
   * @example
   * 1782816600
   */
  updatedAt?: number;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      createdAt: 'createdAt',
      dataType: 'dataType',
      description: 'description',
      evaluators: 'evaluators',
      runStrategyConfig: 'runStrategyConfig',
      status: 'status',
      tags: 'tags',
      taskId: 'taskId',
      taskMode: 'taskMode',
      taskName: 'taskName',
      updatedAt: 'updatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      createdAt: 'number',
      dataType: 'string',
      description: 'string',
      evaluators: 'string',
      runStrategyConfig: RunStrategies,
      status: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      taskId: 'string',
      taskMode: 'string',
      taskName: 'string',
      updatedAt: 'number',
    };
  }

  validate() {
    if(this.config) {
      $dara.Model.validateMap(this.config);
    }
    if(this.runStrategyConfig && typeof (this.runStrategyConfig as any).validate === 'function') {
      (this.runStrategyConfig as any).validate();
    }
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEvaluationTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of evaluation task summaries.
   * 
   * @example
   * [{"taskId":"eval-task-8b36f2e2b1f94f9c91ce7a4b0f6d9c25","taskName":"trace_task_completion_eval","taskMode":"batch","dataType":"trace","status":"Running"}]
   */
  evaluationTasks?: ListEvaluationTasksResponseBodyEvaluationTasks[];
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
   * The pagination token for the next page. An empty value indicates that no more pages are available.
   * 
   * @example
   * eyJsYXN0SWQiOjEwMSwib2Zmc2V0IjoyMH0=
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
   * The total number of records. The total count is returned only on the first page. This value may be empty on subsequent pages.
   * 
   * @example
   * 126
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      evaluationTasks: 'evaluationTasks',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      evaluationTasks: { 'type': 'array', 'itemType': ListEvaluationTasksResponseBodyEvaluationTasks },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.evaluationTasks)) {
      $dara.Model.validateArray(this.evaluationTasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


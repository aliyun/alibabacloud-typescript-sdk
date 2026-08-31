// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Evaluator } from "./Evaluator";
import { RunStrategies } from "./RunStrategies";


export class GetEvaluationTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The AgentSpace name.
   * 
   * @example
   * prod-agentspace
   */
  agentSpace?: string;
  /**
   * @remarks
   * The task source.
   * 
   * @example
   * default
   */
  channel?: string;
  /**
   * @remarks
   * The data source and execution configuration. Tasks with `dataType=trace` typically contain `project`, `storeName`, and `dataScope` fields that are populated by the backend.
   * 
   * @example
   * {"project":"agentspace-project","storeName":"logstore-tracing","dataScope":"trace"}
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
   * The evaluation data filter condition, returned by the backend as a JSON string.
   * 
   * @example
   * {"query":"serviceName=\\"checkout-service\\"","maxRecords":10,"samplingRate":100}
   */
  dataFilter?: string;
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
   * Evaluate the task completion rate of the online Agent pipeline
   */
  description?: string;
  /**
   * @remarks
   * The list of evaluator configurations.
   * 
   * @example
   * [{"evaluatorRef":"Builtin.agent_task_completion","resultName":"agent_task_completion","resultType":"score","variableMapping":{"input":"trace.input","output":"trace.output","agent_trajectory":"trace.agent_trajectory"}}]
   */
  evaluators?: Evaluator[];
  /**
   * @remarks
   * The region to which the task belongs.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
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
   * The structured configuration of the run strategy, including the parsed backfill strategy and continuous evaluation strategy.
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
   * The key-value pairs of task tags. Empty if not set.
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
      agentSpace: 'agentSpace',
      channel: 'channel',
      config: 'config',
      createdAt: 'createdAt',
      dataFilter: 'dataFilter',
      dataType: 'dataType',
      description: 'description',
      evaluators: 'evaluators',
      regionId: 'regionId',
      requestId: 'requestId',
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
      agentSpace: 'string',
      channel: 'string',
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      createdAt: 'number',
      dataFilter: 'string',
      dataType: 'string',
      description: 'string',
      evaluators: { 'type': 'array', 'itemType': Evaluator },
      regionId: 'string',
      requestId: 'string',
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
    if(Array.isArray(this.evaluators)) {
      $dara.Model.validateArray(this.evaluators);
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


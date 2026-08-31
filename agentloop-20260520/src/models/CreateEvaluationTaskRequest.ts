// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Evaluator } from "./Evaluator";
import { RunStrategies } from "./RunStrategies";


export class CreateEvaluationTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The task source. If not specified, the backend defaults to `default`.
   * 
   * @example
   * default
   */
  channel?: string;
  /**
   * @remarks
   * The data source and execution configuration. When `dataType=trace`, the backend automatically populates the SLS Project and sets `storeName=logstore-tracing`. For trace-level evaluation, set `dataScope=trace`.
   * 
   * @example
   * {"dataScope":"trace"}
   */
  config?: { [key: string]: string };
  /**
   * @remarks
   * The evaluation data filter conditions. Supports a JSON object or JSON string. Common fields include `query`, `provided`, `maxRecords`, and `samplingRate`.
   * 
   * @example
   * {"query":"serviceName=\\"checkout-service\\"","maxRecords":10,"samplingRate":100}
   */
  dataFilter?: string;
  /**
   * @remarks
   * The data source type of the evaluation target. Use `trace` for trace-based evaluation.
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
   * Evaluate the task completion of online Agent traces
   */
  description?: string;
  /**
   * @remarks
   * The evaluator configuration list. This parameter cannot be empty. Within the same task, `evaluatorRef` takes precedence as the unique identifier. Otherwise, `name` is used.
   * 
   * @example
   * [{"evaluatorRef":"Builtin.agent_task_completion","resultName":"agent_task_completion","resultType":"score","variableMapping":{"input":"trace.input","output":"trace.output","agent_trajectory":"trace.agent_trajectory"}}]
   */
  evaluators?: Evaluator[];
  /**
   * @remarks
   * The task execution strategies. Supports a JSON object or JSON string. `backfill` is used for historical data backfill, and `continuous` is used for continuous evaluation of new data.
   */
  runStrategies?: RunStrategies;
  /**
   * @remarks
   * The task tag key-value pairs. You do not need to specify this parameter by default. Specify this parameter only when you need to associate or filter tasks by business tags.
   * 
   * @example
   * {"env":"prod","serviceId":"checkout-service","planId":"plan-20260703"}
   */
  tags?: { [key: string]: string };
  /**
   * @remarks
   * The evaluation task mode. `batch` creates a persistent evaluation task.
   * 
   * @example
   * batch
   */
  taskMode?: string;
  /**
   * @remarks
   * The task name. The name must be unique among non-deleted tasks under the same user and AgentSpace. The name can be up to 256 characters in length.
   * 
   * @example
   * trace_task_completion_eval
   */
  taskName?: string;
  /**
   * @remarks
   * The idempotency token. This query parameter is declared in CloudSpec, but the backend does not currently perform idempotency comparison.
   * 
   * @example
   * a1b2c3d4-1234-5678-90ab-cdef12345678
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'channel',
      config: 'config',
      dataFilter: 'dataFilter',
      dataType: 'dataType',
      description: 'description',
      evaluators: 'evaluators',
      runStrategies: 'runStrategies',
      tags: 'tags',
      taskMode: 'taskMode',
      taskName: 'taskName',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      dataFilter: 'string',
      dataType: 'string',
      description: 'string',
      evaluators: { 'type': 'array', 'itemType': Evaluator },
      runStrategies: RunStrategies,
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      taskMode: 'string',
      taskName: 'string',
      clientToken: 'string',
    };
  }

  validate() {
    if(this.config) {
      $dara.Model.validateMap(this.config);
    }
    if(Array.isArray(this.evaluators)) {
      $dara.Model.validateArray(this.evaluators);
    }
    if(this.runStrategies && typeof (this.runStrategies as any).validate === 'function') {
      (this.runStrategies as any).validate();
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


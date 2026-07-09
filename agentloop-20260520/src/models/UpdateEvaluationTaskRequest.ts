// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Evaluator } from "./Evaluator";
import { RunStrategies } from "./RunStrategies";


export class UpdateEvaluationTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The new task configuration. Some fields that are set during creation cannot be modified.
   * 
   * @example
   * {"dataScope":"trace"}
   */
  config?: { [key: string]: string };
  /**
   * @remarks
   * The filter condition for evaluation data. A JSON object or JSON string is supported.
   * 
   * @example
   * {"query":"serviceName=\\"checkout-service\\" AND status=\\"OK\\"","maxRecords":10,"samplingRate":50}
   */
  dataFilter?: string;
  /**
   * @remarks
   * The description of the evaluation task.
   * 
   * @example
   * 更新后的链路 Trace 任务完成度评估
   */
  description?: string;
  /**
   * @remarks
   * The new list of evaluator configurations. When specified, this list entirely replaces the existing evaluator list of the task, and the system re-validates evaluator uniqueness and variable mappings.
   * 
   * @example
   * [{"evaluatorRef":"Builtin.agent_task_completion","resultName":"agent_task_completion","resultType":"score","variableMapping":{"input":"trace.input","output":"trace.output","agent_trajectory":"trace.agent_trajectory"}}]
   */
  evaluators?: Evaluator[];
  /**
   * @remarks
   * The new task execution strategies. A JSON object or JSON string is supported. If the task is in `Completed`, `Terminated`, or `Failed` status and the new strategy enables backfill or continuous mode, the backend resets the task to `Pending` and triggers orchestration.
   */
  runStrategies?: RunStrategies;
  /**
   * @remarks
   * The task status. Currently the backend only allows users to explicitly set this to `Terminated`. Other statuses are managed by the system.
   * 
   * @example
   * Terminated
   */
  status?: string;
  /**
   * @remarks
   * The key-value pairs of task tags. You do not need to specify this parameter by default. Specify this parameter only when you want to associate or filter tasks by business tags.
   * 
   * @example
   * {"env":"prod","serviceId":"checkout-service","planId":"plan-20260703"}
   */
  tags?: { [key: string]: string };
  /**
   * @remarks
   * The idempotency token. CloudSpec declares this query parameter, but the backend does not currently perform idempotency comparison.
   * 
   * @example
   * a1b2c3d4-1234-5678-90ab-cdef12345678
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      dataFilter: 'dataFilter',
      description: 'description',
      evaluators: 'evaluators',
      runStrategies: 'runStrategies',
      status: 'status',
      tags: 'tags',
      clientToken: 'clientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      dataFilter: 'string',
      description: 'string',
      evaluators: { 'type': 'array', 'itemType': Evaluator },
      runStrategies: RunStrategies,
      status: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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


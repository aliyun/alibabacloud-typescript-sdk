// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAiOutboundTaskRequestRecallRule extends $dara.Model {
  /**
   * @remarks
   * The number of failed recall attempts. Valid values: **1 to 3**.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The interval between failed recall attempts. Valid values: **1 to 60**. Unit: minutes.
   * 
   * @example
   * 5
   */
  interval?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      interval: 'Interval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      interval: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAiOutboundTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The concurrency for automatic outbound calls.
   * 
   * @example
   * 10
   */
  concurrentRate?: number;
  /**
   * @remarks
   * The task description. The description can be up to 100 characters in length.
   * 
   * @example
   * PropertySales
   */
  description?: string;
  /**
   * @remarks
   * The task execution time. Use a JSON object to configure time periods by day of the week. The start and end values must be in the HH:mm format. The end time must be later than the start time.
   * 
   * This parameter is required.
   * 
   * @example
   * {"TUESDAY":[{"start":"06:00","end":"06:05"}],"MONDAY":[{"start":"09:00","end":"18:00"},{"start":"20:30","end":"21:45"},{"start":"22:30","end":"22:50"}],"WEDNESDAY":[{"start":"09:00","end":"18:00"}],"THURSDAY":[{"start":"09:00","end":"18:00"}],"FRIDAY":[{"start":"09:00","end":"18:00"}],"SATURDAY":[{"start":"09:00","end":"18:00"}],"SUNDAY":[{"start":"17:00","end":"23:45"}]}
   */
  executionTime?: string;
  /**
   * @remarks
   * The fixed call ratio for predictive outbound calls. Valid values: **≥ 1**.
   * 
   * @example
   * 1.2
   */
  forecastCallRate?: number;
  /**
   * @remarks
   * The skill group ID for predictive outbound calls, or the IVR ID for automatic outbound calls.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  handlerId?: number;
  /**
   * @remarks
   * The ID of the Artificial Intelligence Cloud Call Service (AICCS) instance.
   * You can obtain the instance ID from **Instance Management** in the left-side navigation pane of the [Artificial Intelligence Cloud Call Service console](https://aiccs.console.aliyun.com/overview).
   * 
   * This parameter is required.
   * 
   * @example
   * agent_***
   */
  instanceId?: string;
  /**
   * @remarks
   * The task name. The name must be 1 to 15 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * SampleOutboundCall
   */
  name?: string;
  /**
   * @remarks
   * The called number deduplication policy. Valid values:
   * - **0**: Deduplicate within the task.
   * - **1**: Do not deduplicate within the task.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  numRepeated?: number;
  /**
   * @remarks
   * The outbound caller numbers.
   * 
   * This parameter is required.
   */
  outboundNums?: string[];
  /**
   * @remarks
   * The failed recall policy.
   * 
   * > If this parameter is left empty, the system does not recall when an outbound call fails.
   */
  recallRule?: UpdateAiOutboundTaskRequestRecallRule;
  /**
   * @remarks
   * The task ID.
   * 
   * You can call the [CreateAiOutboundTask](https://help.aliyun.com/document_detail/312260.html) operation and check the **Data** parameter in the response, or call the [GetAiOutboundTaskList](https://help.aliyun.com/document_detail/2718026.html) operation and check the **TaskId** parameter in the response.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  taskId?: number;
  static names(): { [key: string]: string } {
    return {
      concurrentRate: 'ConcurrentRate',
      description: 'Description',
      executionTime: 'ExecutionTime',
      forecastCallRate: 'ForecastCallRate',
      handlerId: 'HandlerId',
      instanceId: 'InstanceId',
      name: 'Name',
      numRepeated: 'NumRepeated',
      outboundNums: 'OutboundNums',
      recallRule: 'RecallRule',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrentRate: 'number',
      description: 'string',
      executionTime: 'string',
      forecastCallRate: 'number',
      handlerId: 'number',
      instanceId: 'string',
      name: 'string',
      numRepeated: 'number',
      outboundNums: { 'type': 'array', 'itemType': 'string' },
      recallRule: UpdateAiOutboundTaskRequestRecallRule,
      taskId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.outboundNums)) {
      $dara.Model.validateArray(this.outboundNums);
    }
    if(this.recallRule && typeof (this.recallRule as any).validate === 'function') {
      (this.recallRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


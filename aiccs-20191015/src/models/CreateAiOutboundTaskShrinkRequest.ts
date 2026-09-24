// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAiOutboundTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The call concurrency for automatic outbound calls.
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
   * RealEstateSales
   */
  description?: string;
  /**
   * @remarks
   * The task execution time. The value is in JSON format.
   * 
   * > The end time (end) must be later than the start time (start).
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
   * 1.5
   */
  forecastCallRate?: number;
  /**
   * @remarks
   * The skill group ID (for predictive outbound calls) or IVR ID (for automatic outbound calls). You can obtain this information from the [Artificial Intelligence Cloud Call Service console](https://aiccs.console.aliyun.com/overview).
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
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
   * cc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * The task name. The name must be 1 to 15 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * TestTask
   */
  name?: string;
  /**
   * @remarks
   * The callee number deduplication policy. Valid values:
   * - **0**: deduplicate within the task.
   * - **1**: no deduplication.
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
   * > The numbers must be purchased numbers. Separate multiple numbers with commas (,).
   * 
   * This parameter is required.
   */
  outboundNumsShrink?: string;
  /**
   * @remarks
   * The failed call retry policy.
   * 
   * > If the value is empty, no retry is performed.
   */
  recallRuleShrink?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * - **2**: predictive outbound call.
   * - **3**: automatic outbound call.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   * 
   * **if can be null:**
   * false
   */
  type?: number;
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
      outboundNumsShrink: 'OutboundNums',
      recallRuleShrink: 'RecallRule',
      type: 'Type',
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
      outboundNumsShrink: 'string',
      recallRuleShrink: 'string',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


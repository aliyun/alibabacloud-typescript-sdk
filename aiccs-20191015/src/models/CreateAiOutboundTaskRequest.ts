// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAiOutboundTaskRequestRecallRule extends $dara.Model {
  /**
   * @remarks
   * Number of retries. Valid values: **1 to 3**.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * Retry interval. Valid values: **1 to 60**, unit: minutes.
   * 
   * @example
   * 1
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

export class CreateAiOutboundTaskRequest extends $dara.Model {
  /**
   * @remarks
   * Concurrent call rate for automated outbound calls.
   * 
   * @example
   * 10
   */
  concurrentRate?: number;
  /**
   * @remarks
   * Job description. Length: 0 to 100 characters.
   * 
   * @example
   * 房产销售
   */
  description?: string;
  /**
   * @remarks
   * Job execution time, in JSON format.
   * 
   * > The end time must be later than the start time.
   * 
   * This parameter is required.
   * 
   * @example
   * {"TUESDAY":[{"start":"06:00","end":"06:05"}],"MONDAY":[{"start":"09:00","end":"18:00"},{"start":"20:30","end":"21:45"},{"start":"22:30","end":"22:50"}],"WEDNESDAY":[{"start":"09:00","end":"18:00"}],"THURSDAY":[{"start":"09:00","end":"18:00"}],"FRIDAY":[{"start":"09:00","end":"18:00"}],"SATURDAY":[{"start":"09:00","end":"18:00"}],"SUNDAY":[{"start":"17:00","end":"23:45"}]}
   */
  executionTime?: string;
  /**
   * @remarks
   * Fixed outbound ratio for predictive dialing. Valid values: **≥1**.
   * 
   * @example
   * 1.5
   */
  forecastCallRate?: number;
  /**
   * @remarks
   * The skill group ID (for predictive outbound calls) or IVR ID (for automated outbound calls). You can obtain this information in the [Artificial Intelligence Cloud Call Service console](https://aiccs.console.aliyun.com/overview).
   * 
   * This parameter is required.
   * 
   * @example
   * 123456
   */
  handlerId?: number;
  /**
   * @remarks
   * AICCS instance ID.  
   * You can obtain it from **Instance Management** in the left-side navigation pane of the [Artificial Intelligence Cloud Call Service console](https://aiccs.console.aliyun.com/overview).
   * 
   * This parameter is required.
   * 
   * @example
   * cc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * Job name. Length: 1 to 15 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * 测试任务
   */
  name?: string;
  /**
   * @remarks
   * Called number deduplication policy. Valid values:
   * - **0**: Remove duplicates within the job.
   * - **1**: Do not remove duplicates.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  numRepeated?: number;
  /**
   * @remarks
   * Outbound caller numbers.  
   * 
   * > Must be purchased numbers. Separate multiple numbers with commas (,).
   * 
   * This parameter is required.
   */
  outboundNums?: string[];
  /**
   * @remarks
   * Failed call retry policy.  
   * 
   * > If empty, no retries are performed.
   */
  recallRule?: CreateAiOutboundTaskRequestRecallRule;
  /**
   * @remarks
   * Task Type. Valid values:  
   * - **2**: Predictive outbound call.  
   * - **3**: Automated outbound call.
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
      outboundNums: 'OutboundNums',
      recallRule: 'RecallRule',
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
      outboundNums: { 'type': 'array', 'itemType': 'string' },
      recallRule: CreateAiOutboundTaskRequestRecallRule,
      type: 'number',
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


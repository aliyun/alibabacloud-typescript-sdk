// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAiOutboundTaskShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The concurrent rate for automated outbound calls.
   * 
   * @example
   * 10
   */
  concurrentRate?: number;
  /**
   * @remarks
   * The job description. It can contain 0 to 100 characters.
   * 
   * @example
   * 房产销售
   */
  description?: string;
  /**
   * @remarks
   * The job execution time.
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
   * Fixed dialing ratio for predictive outbound calls. Valid values: **≥1**.
   * 
   * @example
   * 1.2
   */
  forecastCallRate?: number;
  /**
   * @remarks
   * The skill group ID (for predictive outbound calls) or IVR ID (for automated outbound calls).
   * 
   * This parameter is required.
   * 
   * @example
   * 123
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
   * agent_***
   */
  instanceId?: string;
  /**
   * @remarks
   * Job name. Length: 1 to 15 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * xxxx外呼
   */
  name?: string;
  /**
   * @remarks
   * The policy for handling duplicate callee numbers.
   * - **0**: Remove duplicates within the job.
   * - **1**: Do not remove duplicates within the job.
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
   * This parameter is required.
   */
  outboundNumsShrink?: string;
  /**
   * @remarks
   * Failed-call retry policy.
   * 
   * > If empty, no retry is performed when an outbound call fails.
   */
  recallRuleShrink?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * You can invoke the [CreateAiOutboundTask](https://help.aliyun.com/document_detail/312260.html) API and check the **Data** field in the response, or invoke the [GetAiOutboundTaskList](https://help.aliyun.com/document_detail/2718026.html) API and check the **TaskId** field in the response.
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
      outboundNumsShrink: 'OutboundNums',
      recallRuleShrink: 'RecallRule',
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
      outboundNumsShrink: 'string',
      recallRuleShrink: 'string',
      taskId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


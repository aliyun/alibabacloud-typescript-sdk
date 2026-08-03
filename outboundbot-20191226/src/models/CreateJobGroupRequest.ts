// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateJobGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The list of calling numbers. If not specified, all numbers bound to the instance are selected by default.
   */
  callingNumber?: string[];
  /**
   * @remarks
   * The configuration parameters for flash SMS in JSON format, including third-party flash SMS configuration information.  
   * - templateId: the flash SMS template ID.  
   * - configId: the flash SMS configuration ID.
   * - templateContent: the flash SMS content.
   * 
   * > Obtain the value of templateContent from the corresponding flash SMS capability provider.
   * 
   * @example
   * {"templateId":"104xx","configId":"8037f524-6fxxxxx", "templateContent": "【智能外呼机器人】给您来电，敬请接听！"}
   */
  flashSmsExtras?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 174952ab-9825-4cc9-a5e2-de82d7fa4cdd
   */
  instanceId?: string;
  /**
   * @remarks
   * The task description.
   * 
   * @example
   * 任务描述
   */
  jobGroupDescription?: string;
  /**
   * @remarks
   * The task name.
   * 
   * This parameter is required.
   * 
   * @example
   * 第一个任务
   */
  jobGroupName?: string;
  /**
   * @remarks
   * The guaranteed concurrency value.  
   * - When the task starts, a minimum of N concurrent calls are guaranteed.
   * - The sum of guaranteed concurrency values for tasks with the same priority cannot exceed the instance concurrency.  
   * - If the guaranteed concurrency value is set to 0, the system intelligently allocates idle concurrency.
   * 
   * @example
   * 1
   */
  minConcurrency?: number;
  /**
   * @remarks
   * The job group priority. Valid values:
   * - **Urgent**: urgent task.
   * - **Daily**: daily task.
   * 
   * @example
   * Daily
   */
  priority?: string;
  /**
   * @remarks
   * The list of redial calling numbers.
   */
  recallCallingNumber?: string[];
  /**
   * @remarks
   * The redial strategy in JSON format. Parameter values default to false.
   * 
   * - **emptyNumberIgnore**: does not call nonexistent numbers.
   * - **inArrearsIgnore**: does not call numbers with overdue payments.
   * - **outOfServiceIgnore**: does not call numbers that are out of service.
   * 
   * @example
   * {"emptyNumberIgnore":true,"inArrearsIgnore":true,"outOfServiceIgnore":true}
   */
  recallStrategyJson?: string;
  /**
   * @remarks
   * The optimal ringing duration. Default value: 25.
   * 
   * @example
   * 25
   */
  ringingDuration?: number;
  /**
   * @remarks
   * Deprecated.
   * 
   * @example
   * b9ff4e88-65f9-4eb3-987c-11ba51f3f24d
   */
  scenarioId?: string;
  /**
   * @remarks
   * The scenario ID.
   * 
   * @example
   * b9ff4e88-65f9-4eb3-987c-11ba51f3f24d
   */
  scriptId?: string;
  /**
   * @remarks
   * The task execution strategy.  
   * - repeatBy: the repeat type. Valid values: Once (no repeat), Week (repeat weekly), and Month (repeat monthly).  
   * - startTime: the strategy start time for time-based execution.
   * - endTime: the strategy end time for time-based execution.  
   * > The execution mode is determined as follows:
   * > - If no strategy start time or end time is specified, the task is executed immediately.
   * > - If a strategy time is specified, the task is executed based on the schedule. You must also specify the repeat type repeatBy.
   * - workingTime: the time window during which outbound calls can be made.
   * - maxAttemptsPerDay: the maximum number of call attempts per day for each number in the task.
   * - minAttemptInterval: the retry interval for a number, in minutes.
   * - routingStrategy: the number strategy. Valid values: None (not specified), LocalFirst (local city numbers preferred), and LocalProvinceFirst (local province numbers preferred).
   * - repeatDays: the execution days corresponding to the repeat type. If RepeatBy is set to Week, 0 indicates Sunday and 1-6 indicate Monday through Saturday. If RepeatBy is set to Month, 1-31 indicate the 1st through 31st day. The task is not executed in months that do not have the specified day. For example, if the 30th is selected, the task is not executed in February.
   * - repeatable: specifies whether to enable cyclic tasks. Valid values: true and false.
   * 
   * @example
   * {"maxAttemptsPerDay":"3","minAttemptInterval":"10","routingStrategy":"LocalProvinceFirst","repeatDays":["1","2","3"],"workingTime":[{"beginTime":"10:00:00","endTime":"11:00:00"},{"beginTime":"14:00:00","endTime":"15:00:00"}],"repeatable":true,"endTime":1707494400000,"startTime":1706976000000,"repeatBy":"Week"}
   */
  strategyJson?: string;
  static names(): { [key: string]: string } {
    return {
      callingNumber: 'CallingNumber',
      flashSmsExtras: 'FlashSmsExtras',
      instanceId: 'InstanceId',
      jobGroupDescription: 'JobGroupDescription',
      jobGroupName: 'JobGroupName',
      minConcurrency: 'MinConcurrency',
      priority: 'Priority',
      recallCallingNumber: 'RecallCallingNumber',
      recallStrategyJson: 'RecallStrategyJson',
      ringingDuration: 'RingingDuration',
      scenarioId: 'ScenarioId',
      scriptId: 'ScriptId',
      strategyJson: 'StrategyJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callingNumber: { 'type': 'array', 'itemType': 'string' },
      flashSmsExtras: 'string',
      instanceId: 'string',
      jobGroupDescription: 'string',
      jobGroupName: 'string',
      minConcurrency: 'number',
      priority: 'string',
      recallCallingNumber: { 'type': 'array', 'itemType': 'string' },
      recallStrategyJson: 'string',
      ringingDuration: 'number',
      scenarioId: 'string',
      scriptId: 'string',
      strategyJson: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.callingNumber)) {
      $dara.Model.validateArray(this.callingNumber);
    }
    if(Array.isArray(this.recallCallingNumber)) {
      $dara.Model.validateArray(this.recallCallingNumber);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


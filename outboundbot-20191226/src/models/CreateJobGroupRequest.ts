// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateJobGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The list of caller numbers. If not specified, all numbers bound to the instance are selected by default.
   */
  callingNumber?: string[];
  /**
   * @remarks
   * The configuration parameters for flash SMS push in JSON format, including the configuration information of third-party flash SMS.  
   * - templateId: the flash SMS template ID.  
   * - configId: the flash SMS configuration ID.
   * - templateContent: the flash SMS content.
   * 
   * > The value of templateContent must be obtained from the corresponding flash SMS capability partner.
   * 
   * @example
   * {"templateId":"104xx","configId":"8037f524-6fxxxxx", "templateContent": "[Outbound Robot] is calling you. Please answer!"}
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
   * The description of the job.
   * 
   * @example
   * Job description
   */
  jobGroupDescription?: string;
  /**
   * @remarks
   * The name of the job.
   * 
   * This parameter is required.
   * 
   * @example
   * First job
   */
  jobGroupName?: string;
  /**
   * @remarks
   * The guaranteed concurrency.  
   * - When the job starts, a minimum of N concurrent calls are guaranteed.
   * - The sum of guaranteed concurrency for jobs of the same priority cannot exceed the instance concurrency.  
   * - If the guaranteed concurrency is set to 0, the system intelligently allocates idle concurrency.
   * 
   * @example
   * 1
   */
  minConcurrency?: number;
  /**
   * @remarks
   * The priority of the job group. Valid values:
   * - **Urgent**: urgent job.
   * - **Daily**: daily job.
   * 
   * @example
   * Daily
   */
  priority?: string;
  /**
   * @remarks
   * The list of caller numbers for redialing.
   */
  recallCallingNumber?: string[];
  /**
   * @remarks
   * The redial strategy in JSON format. The default value of the parameters in the JSON object is false.
   * 
   * - **emptyNumberIgnore**: specifies whether to skip nonexistent numbers.
   * - **inArrearsIgnore**: specifies whether to skip numbers with overdue payments.
   * - **outOfServiceIgnore**: specifies whether to skip suspended numbers.
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
   * **[Deprecated]**
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
   * The execution strategy of the job.  
   * - repeatBy: the repetition type. Valid values: Once (no repetition), Week (weekly repetition), and Month (monthly repetition).  
   * - startTime: the start time of the time-based strategy.
   * - endTime: the end time of the time-based strategy.  
   * > Execution methods:
   * > - If the start and end times of the strategy are not specified, the execution method is immediate execution.
   * > - If the strategy time is specified, the job is executed based on the time, and the repetition type repeatBy must be selected.
   * - workingTime: the time period during which outbound calls can be made.
   * - maxAttemptsPerDay: the maximum number of call attempts per day for numbers under this job.
   * - minAttemptInterval: the retry interval for numbers, in minutes.
   * - routingStrategy: the number strategy. Valid values: None (not specified), LocalFirst (local numbers first), and LocalProvinceFirst (local province numbers first).
   * - repeatDays: the execution days corresponding to the repetition type. If the repetition type RepeatBy is Week, 0 represents Sunday, and 1 to 6 represent Monday to Saturday. If the repetition cycle RepeatBy is Month, 1 to 31 represent the 1st to the 31st day. Months without the specified date are not executed. For example, if the 30th is selected, the job is not executed in February.
   * - repeatable: specifies whether to enable cyclic jobs. Valid values: true and false.
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


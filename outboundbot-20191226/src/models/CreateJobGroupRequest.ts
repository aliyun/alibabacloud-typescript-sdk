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
   * > To obtain the value of templateContent, contact the partner that provides the corresponding flash SMS capability.
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
   * The job description.
   * 
   * @example
   * Job description
   */
  jobGroupDescription?: string;
  /**
   * @remarks
   * The job name.
   * 
   * This parameter is required.
   * 
   * @example
   * First job
   */
  jobGroupName?: string;
  /**
   * @remarks
   * The guaranteed concurrency value.  
   * - When the job starts, a minimum of N concurrent calls are guaranteed.
   * - The sum of guaranteed concurrency values for jobs of the same priority cannot exceed the instance concurrency.  
   * - If the guaranteed concurrency value is set to 0, the system intelligently allocates idle concurrency.
   * 
   * @example
   * 1
   */
  minConcurrency?: number;
  /**
   * @remarks
   * The job group priority. Valid values:
   * - **Urgent**: urgent job.
   * - **Daily**: daily job.
   * 
   * @example
   * Daily
   */
  priority?: string;
  /**
   * @remarks
   * The list of caller numbers for recall.
   */
  recallCallingNumber?: string[];
  /**
   * @remarks
   * The recall strategy in JSON format. The default value of parameters in the JSON string is false.
   * 
   * - **emptyNumberIgnore**: does not call nonexistent numbers.
   * - **inArrearsIgnore**: does not call numbers with overdue payments.
   * - **outOfServiceIgnore**: does not call suspended numbers.
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
   * The script ID.
   * 
   * @example
   * b9ff4e88-65f9-4eb3-987c-11ba51f3f24d
   */
  scriptId?: string;
  /**
   * @remarks
   * The job execution strategy.  
   * - repeatBy: the recurrence type. Valid values: Once (no recurrence), Week (weekly recurrence), and Month (monthly recurrence).  
   * - startTime: the start time of the strategy when executed by time.
   * - endTime: the end time of the strategy when executed by time.  
   * > Execution methods are divided into:
   * > - If the start and end times are not specified, the job is executed immediately.
   * > - If the start and end times are specified, the job is executed by time, and the repeatBy recurrence type must be selected.
   * - workingTime: the time period during which outbound calls can be made.
   * - maxAttemptsPerDay: the maximum number of call attempts per day for numbers in this job.
   * - minAttemptInterval: the retry interval for calling a number, in minutes.
   * - routingStrategy: the number routing strategy. Valid values: None (not specified), LocalFirst (local city numbers first), and LocalProvinceFirst (local province numbers first).
   * - repeatDays: the execution days corresponding to the recurrence type. If the repeatBy recurrence type is Week, 0 indicates Sunday, and 1 to 6 indicate Monday to Saturday. If the repeatBy recurrence type is Month, 1 to 31 indicate the 1st to the 31st day. Months without the specified date are not executed. For example, if the 30th is selected, the job is not executed in February.
   * - repeatable: specifies whether to enable recurring jobs. Valid values: true and false.
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


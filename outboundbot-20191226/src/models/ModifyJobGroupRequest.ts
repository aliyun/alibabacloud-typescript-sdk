// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyJobGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The caller number.
   */
  callingNumber?: string[];
  /**
   * @remarks
   * The job description.
   * 
   * @example
   * Modified job group
   */
  description?: string;
  /**
   * @remarks
   * The configuration parameters for flash message push in JSON format, including the configuration information of third-party flash messages.
   * 
   * templateId: the flash message template ID.  
   * configId: the flash message configuration ID.
   * 
   * @example
   * {"templateId":"10471","configId":"8037f524-6ff2-4dbe-bb28-f59234ea7a64"}
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
   * The job ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 3edc0260-6f7c-4de4-8535-09372240618b
   */
  jobGroupId?: string;
  /**
   * @remarks
   * The job status. Valid values:
   * - Draft: draft.
   * - Paused: paused.
   * 
   * @example
   * Draft
   */
  jobGroupStatus?: string;
  /**
   * @remarks
   * The guaranteed concurrency.
   * When a job starts, a minimum of N concurrent calls are guaranteed.
   * The sum of guaranteed concurrency values for jobs of the same priority cannot exceed the instance concurrency.
   * If the guaranteed concurrency is set to 0, the system intelligently allocates idle concurrency.
   * 
   * @example
   * 1
   */
  minConcurrency?: number;
  /**
   * @remarks
   * The job name.
   * 
   * This parameter is required.
   * 
   * @example
   * Modified job group
   */
  name?: string;
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
   * The JSON string of the recall strategy.
   * 
   * @example
   * {"emptyNumberIgnore":false,"inArrearsIgnore":false,"outOfServiceIgnore":false}
   */
  recallStrategyJson?: string;
  /**
   * @remarks
   * The optimal ringing duration.
   * 
   * @example
   * 25
   */
  ringingDuration?: number;
  /**
   * @remarks
   * The scenario ID. This is a legacy parameter. Use ScriptId instead.
   * 
   * > This parameter is a legacy parameter. You can pass any value. Keep it consistent with the ScriptId.
   * 
   * @example
   * c6a668d1-3145-4048-9101-cb3678bb8884
   */
  scenarioId?: string;
  /**
   * @remarks
   * The script ID.
   * 
   * @example
   * 5a3940ce-a12f-4222-9f0f-605a9b89ea7c
   */
  scriptId?: string;
  /**
   * @remarks
   * The job execution strategy.
   * - id: the job group strategy ID. You can obtain it from the StrategyId response parameter of the DescribeJobGroup operation.
   * - repeatBy: the recurrence type. Valid values: Once (no recurrence), Day (daily), Week (weekly), and Month (monthly).
   * - startTime: the start time of the strategy.
   * - endTime: the end time of the strategy.
   * - workingTime: the time period during which outbound calls are allowed.
   * - maxAttemptsPerDay: the maximum number of call attempts per day for a phone number under this job.
   * - minAttemptInterval: the retry interval for a phone number, in minutes.
   * - routingStrategy: the phone number strategy. Valid values: None (not specified), LocalFirst (local numbers first), and LocalProvinceFirst (local province numbers first).
   * - repeatDays: the execution days corresponding to the recurrence type. If RepeatBy is Week, 0 indicates Sunday, and 1 to 6 indicate Monday to Saturday. If RepeatBy is Month, 1 to 31 indicate the 1st to the 31st day of the month. If a month does not have the specified day, the job is not executed in that month. For example, if the 30th is selected, the job is not executed in February.
   * - repeatable: specifies whether to enable recurring jobs. Valid values: true and false.
   * 
   * @example
   * {"maxAttemptsPerDay":"3","minAttemptInterval":"10","routingStrategy":"LocalProvinceFirst","repeatDays":["1","2","3"],"workingTime":[{"beginTime":"10:00:00","endTime":"11:00:00"},"id":"cdca9ed7-6470-42d0-afb3-a41e08b41383",{"beginTime":"14:00:00","endTime":"15:00:00"}],"repeatable":true,"endTime":1707494400000,"startTime":1706976000000,"repeatBy":"Week"}
   */
  strategyJson?: string;
  static names(): { [key: string]: string } {
    return {
      callingNumber: 'CallingNumber',
      description: 'Description',
      flashSmsExtras: 'FlashSmsExtras',
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
      jobGroupStatus: 'JobGroupStatus',
      minConcurrency: 'MinConcurrency',
      name: 'Name',
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
      description: 'string',
      flashSmsExtras: 'string',
      instanceId: 'string',
      jobGroupId: 'string',
      jobGroupStatus: 'string',
      minConcurrency: 'number',
      name: 'string',
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateJobGroupRequest extends $dara.Model {
  /**
   * @remarks
   * List of caller numbers. If not specified, all numbers attached to the instance are selected by default.
   */
  callingNumber?: string[];
  /**
   * @remarks
   * Configuration parameters for flash SMS push, in JSON format, containing third-party flash SMS configuration information.  
   * - templateId: Flash SMS Template ID.  
   * - configId: Flash SMS configuration ID.  
   * - templateContent: Flash SMS Content.  
   * 
   * > Obtain the value of templateContent from the partner providing the flash SMS capability.
   * 
   * @example
   * {"templateId":"104xx","configId":"8037f524-6fxxxxx", "templateContent": "【智能外呼机器人】给您来电，敬请接听！"}
   */
  flashSmsExtras?: string;
  /**
   * @remarks
   * Instance ID
   * 
   * This parameter is required.
   * 
   * @example
   * 174952ab-9825-4cc9-a5e2-de82d7fa4cdd
   */
  instanceId?: string;
  /**
   * @remarks
   * Task description.
   * 
   * @example
   * 任务描述
   */
  jobGroupDescription?: string;
  /**
   * @remarks
   * Task name.
   * 
   * This parameter is required.
   * 
   * @example
   * 第一个任务
   */
  jobGroupName?: string;
  /**
   * @remarks
   * Concurrent guarantee value.  
   * - When a job starts, it is guaranteed a minimum of N concurrent executions.  
   * - The sum of concurrent guarantee values for jobs with the same priority must not exceed the instance concurrency limit.  
   * - If the concurrent guarantee value is configured as 0, the system intelligently assigns idle concurrency resources.
   * 
   * @example
   * 1
   */
  minConcurrency?: number;
  /**
   * @remarks
   * Job group priority. Valid values:
   * - **Urgent**: Urgent job.
   * - **Daily**: Daily job.
   * 
   * @example
   * Daily
   */
  priority?: string;
  /**
   * @remarks
   * List of caller numbers for redial.
   */
  recallCallingNumber?: string[];
  /**
   * @remarks
   * Redial policy in JSON format. The default value of parameters in the JSON is false.
   * 
   * - **emptyNumberIgnore**: Do not make outbound calls to nonexistent numbers.
   * - **inArrearsIgnore**: Do not make outbound calls for overdue payments.
   * - **outOfServiceIgnore**: Do not make outbound calls to out-of-service numbers.
   * 
   * @example
   * {"emptyNumberIgnore":true,"inArrearsIgnore":true,"outOfServiceIgnore":true}
   */
  recallStrategyJson?: string;
  /**
   * @remarks
   * Optimal ringing duration. Default value is 25.
   * 
   * @example
   * 25
   */
  ringingDuration?: number;
  /**
   * @remarks
   * Deprecated
   * 
   * @example
   * b9ff4e88-65f9-4eb3-987c-11ba51f3f24d
   */
  scenarioId?: string;
  /**
   * @remarks
   * Scenario ID.
   * 
   * @example
   * b9ff4e88-65f9-4eb3-987c-11ba51f3f24d
   */
  scriptId?: string;
  /**
   * @remarks
   * Job execution policy.  
   * - repeatBy: Recurrence type. Options are Once (no recurrence), Week (weekly recurrence), and Month (monthly recurrence).  
   * - startTime: Policy start time for time-based execution.  
   * - endTime: Policy end time for time-based execution.  
   * > Execution modes are as follows:  
   * > - If no start or end time is specified, the job executes immediately.  
   * > - If start and end times are provided, the job executes based on the schedule, and a recurrence type (repeatBy) must be selected.  
   * - workingTime: Allowed outbound calling time segment.  
   * - maxAttemptsPerDay: Maximum number of call attempts per day for numbers under this job.  
   * - minAttemptInterval: Minimum time interval between retry calls for a number, in minutes.  
   * - routingStrategy: Number routing strategy. Options are None (not specified), LocalFirst (local city numbers prioritized), and LocalProvinceFirst (local province numbers prioritized).  
   * - repeatDays: Execution dates corresponding to the recurrence type. If repeatBy is Week, 0 represents Sunday and 1–6 represent Monday through Saturday. If repeatBy is Month, values 1–31 represent the 1st through the 31st day of the month; months without the specified date skip execution (for example, if the 30th is selected, February skips execution).  
   * - repeatable: Whether loop task is enabled, true/false.
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


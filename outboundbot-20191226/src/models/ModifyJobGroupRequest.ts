// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyJobGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The calling numbers for the job group.
   */
  callingNumber?: string[];
  /**
   * @remarks
   * The description of the job group.
   * 
   * @example
   * 修改后的作业组
   */
  description?: string;
  /**
   * @remarks
   * The flash SMS configuration, specified as a JSON string. This may include settings for third-party flash SMS services.
   * 
   * `templateId`: The flash SMS template ID.<br>
   * `configId`: The flash SMS configuration ID.<br>
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
   * The job group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 3edc0260-6f7c-4de4-8535-09372240618b
   */
  jobGroupId?: string;
  /**
   * @remarks
   * The status of the job group. Valid values:
   * 
   * - `Draft`: The job group is in a draft state.
   * 
   * - `Paused`: The job group is paused.
   * 
   * @example
   * Draft
   */
  jobGroupStatus?: string;
  /**
   * @remarks
   * The guaranteed minimum number of concurrent calls for the job group. The sum of this value for all job groups with the same priority cannot exceed the instance\\"s total concurrency. If you set this parameter to `0`, the system dynamically allocates available lines from a shared pool.
   * 
   * @example
   * 1
   */
  minConcurrency?: number;
  /**
   * @remarks
   * The name of the job group.
   * 
   * This parameter is required.
   * 
   * @example
   * 修改后的作业组
   */
  name?: string;
  /**
   * @remarks
   * The priority of the job group. Valid values:
   * 
   * - **Urgent**: An urgent job.
   * 
   * - **Daily**: A routine job.
   * 
   * @example
   * Daily
   */
  priority?: string;
  /**
   * @remarks
   * The recall calling numbers.
   */
  recallCallingNumber?: string[];
  /**
   * @remarks
   * A JSON string that defines the recall strategy.
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
   * The scenario ID. (This is a legacy parameter. Use `ScriptId` instead.)
   * 
   * > You can pass any value for this legacy parameter, but we recommend using the same value as `ScriptId` for consistency.
   * 
   * @example
   * c6a668d1-3145-4048-9101-cb3678bb8884
   */
  scenarioId?: string;
  /**
   * @remarks
   * The ID of the script for the scenario.
   * 
   * @example
   * 5a3940ce-a12f-4222-9f0f-605a9b89ea7c
   */
  scriptId?: string;
  /**
   * @remarks
   * A JSON string that defines the execution strategy for the job group.
   * 
   * - `id`: The ID of the job group strategy. You can obtain this ID from the `StrategyId` parameter returned by the `DescribeJobGroup` operation.
   * 
   * - `repeatBy`: The frequency of the job. Valid values: `Once` (does not repeat), `Day` (repeats daily), `Week` (repeats weekly), and `Month` (repeats monthly).
   * 
   * - `startTime`: The start time of the strategy.
   * 
   * - `endTime`: The end time of the strategy.
   * 
   * - `workingTime`: The time windows for making outbound calls.
   * 
   * - `maxAttemptsPerDay`: The maximum number of call attempts per day for a number in this job group.
   * 
   * - `minAttemptInterval`: The minimum interval, in minutes, between call retries to the same number.
   * 
   * - `routingStrategy`: The number routing strategy. Valid values: `None` (not specified), `LocalFirst` (prioritizes numbers in the same city), and `LocalProvinceFirst` (prioritizes numbers in the same province).
   * 
   * - `repeatDays`: The specific days to run the job, based on the `repeatBy` value. If `repeatBy` is `Week`, `0` indicates Sunday, and `1` through `6` indicate Monday through Saturday. If `repeatBy` is `Month`, valid values are `1` through `31`. If a month does not have the specified day (for example, day 30 in February), the job does not run on that day.
   * 
   * - `repeatable`: Whether the job is recurring. Valid values are `true` and `false`.
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


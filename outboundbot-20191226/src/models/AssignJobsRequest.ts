// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssignJobsRequest extends $dara.Model {
  /**
   * @remarks
   * These numbers are displayed as the caller ID to the contact.
   * 
   * > If unspecified, all available calling numbers are used.
   */
  callingNumber?: string[];
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12f3dd08-0c55-44ce-9b64-e69d35ed3a76
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether the task is asynchronous.
   * 
   * You can omit this parameter if you create jobs by calling this API. The default value is `false`.
   * 
   * @example
   * false
   */
  isAsynchrony?: boolean;
  /**
   * @remarks
   * The ID of the data parsing task for the outbound call job.
   * 
   * You can omit this parameter if you create jobs by calling this API.
   * 
   * > If you create jobs by uploading a file, you must call the `CreateJobDataParsingTask` operation to obtain a value for this parameter.
   * 
   * @example
   * d004cfd2-6a81-491c-83c6-cbe186620c95
   */
  jobDataParsingTaskId?: string;
  /**
   * @remarks
   * The job group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * d004cfd2-6a81-491c-83c6-cbe186620c95
   */
  jobGroupId?: string;
  /**
   * @remarks
   * >Notice: 
   * 
   * This parameter is required.
   * 
   * 
   * 
   * The job data, a JSON array where each object represents a contact. For formatting details, see the example.
   * 
   * The array can contain up to 99 elements.
   */
  jobsJson?: string[];
  /**
   * @remarks
   * The roster type.
   * 
   * If you create jobs by calling this API, you can omit this parameter. The default value is `json`. If you upload a contact list file, set this parameter to `excel`.
   * 
   * @example
   * json
   */
  rosterType?: string;
  /**
   * @remarks
   * The execution strategy for the job group.
   * 
   * - `repeatBy`: The recurrence type. Valid values: `Once` (runs once), `Day` (repeats daily), `Week` (repeats weekly), and `Month` (repeats monthly).
   * 
   * - `startTime`: The start time of the strategy.
   * 
   * - `endTime`: The end time of the strategy.
   * 
   * - `workingTime`: The time windows during which calls can be made.
   * 
   * - `maxAttemptsPerDay`: The maximum daily call attempts per phone number.
   * 
   * - `minAttemptInterval`: The minimum interval between call retries, in minutes.
   * 
   * - `routingStrategy`: The number routing strategy. Valid values: `None` (no preference), `LocalFirst` (prioritizes numbers in the same city), and `LocalProvinceFirst` (prioritizes numbers in the same province).
   * 
   * - `repeatDays`: The specific days on which the job runs, based on the `repeatBy` type. If `repeatBy` is set to `Week`, `0` represents Sunday, and `1` through `6` represent Monday through Saturday. If `repeatBy` is set to `Month`, values from `1` to `31` represent the days of the month. If a month does not have a specified day (for example, February 30), the job is skipped for that month.
   * 
   * - `repeatable`: Specifies whether the job is recurring. Valid values are `true` and `false`.
   * 
   * @example
   * {"maxAttemptsPerDay":"3","minAttemptInterval":"10","routingStrategy":"LocalProvinceFirst","repeatDays":["1","2","3"],"workingTime":[{"beginTime":"10:00:00","endTime":"11:00:00"},{"beginTime":"14:00:00","endTime":"15:00:00"}],"repeatable":true,"endTime":1707494400000,"startTime":1706976000000,"repeatBy":"Week"}
   */
  strategyJson?: string;
  static names(): { [key: string]: string } {
    return {
      callingNumber: 'CallingNumber',
      instanceId: 'InstanceId',
      isAsynchrony: 'IsAsynchrony',
      jobDataParsingTaskId: 'JobDataParsingTaskId',
      jobGroupId: 'JobGroupId',
      jobsJson: 'JobsJson',
      rosterType: 'RosterType',
      strategyJson: 'StrategyJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callingNumber: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      isAsynchrony: 'boolean',
      jobDataParsingTaskId: 'string',
      jobGroupId: 'string',
      jobsJson: { 'type': 'array', 'itemType': 'string' },
      rosterType: 'string',
      strategyJson: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.callingNumber)) {
      $dara.Model.validateArray(this.callingNumber);
    }
    if(Array.isArray(this.jobsJson)) {
      $dara.Model.validateArray(this.jobsJson);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssignJobsAsyncRequest extends $dara.Model {
  /**
   * @remarks
   * The list of calling numbers to be displayed to callees.
   * 
   * > If you omit this parameter, the system uses all available calling numbers by default.
   */
  callingNumber?: string[];
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 12f3dd08-0c55-44ce-9b64-e69d35ed3a76
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the job group.
   * 
   * This parameter is required.
   * 
   * @example
   * d004cfd2-6a81-491c-83c6-cbe186620c95
   */
  jobGroupId?: string;
  /**
   * @remarks
   * A JSON array containing job data. For the required format, see the example.
   * 
   * Each JSON object in the array represents a job for a single contact.
   */
  jobsJson?: string[];
  /**
   * @remarks
   * A JSON string that defines the job group execution strategy. This object has the following properties:
   * 
   * - `repeatBy`
   * 
   * Specifies the repetition frequency. Valid values include `Once` (does not repeat), `Day` (repeats daily), `Week` (repeats weekly), and `Month` (repeats monthly).
   * 
   * - `startTime`
   * 
   * The start time of the execution strategy.
   * 
   * - `endTime`
   * 
   * The end time of the execution strategy.
   * 
   * - `workingTime`
   * 
   * The time range during which outbound calls can be made.
   * 
   * - `maxAttemptsPerDay`
   * 
   * The maximum number of daily call attempts for a single phone number.
   * 
   * - `minAttemptInterval`
   * 
   * The minimum interval between retry attempts, in minutes.
   * 
   * - `routingStrategy`
   * 
   * The routing strategy for calling numbers. Valid values: `None` (not specified), `LocalFirst` (prioritizes numbers in the same city), and `LocalProvinceFirst` (prioritizes numbers in the same province).
   * 
   * - `repeatDays`
   * 
   * The days on which the job repeats. If `repeatBy` is set to `Week`, valid values are `0` for Sunday and `1` to `6` for Monday to Saturday. If `repeatBy` is set to `Month`, valid values are `1` to `31`. If a specified day does not exist in a given month (e.g., February 30), the job is skipped for that month.
   * 
   * - `repeatable`
   * 
   * Specifies whether to enable recurring jobs. Valid values: `true` and `false`.
   * 
   * @example
   * {"maxAttemptsPerDay":"3","minAttemptInterval":"10","routingStrategy":"LocalProvinceFirst","repeatDays":["1","2","3"],"workingTime":[{"beginTime":"10:00:00","endTime":"11:00:00"},{"beginTime":"14:00:00","endTime":"15:00:00"}],"repeatable":true,"endTime":1707494400000,"startTime":1706976000000,"repeatBy":"Week"}
   */
  strategyJson?: string;
  static names(): { [key: string]: string } {
    return {
      callingNumber: 'CallingNumber',
      instanceId: 'InstanceId',
      jobGroupId: 'JobGroupId',
      jobsJson: 'JobsJson',
      strategyJson: 'StrategyJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callingNumber: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      jobGroupId: 'string',
      jobsJson: { 'type': 'array', 'itemType': 'string' },
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


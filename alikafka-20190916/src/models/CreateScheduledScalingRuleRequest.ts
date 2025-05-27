// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScheduledScalingRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The duration of each scheduled scaling task. Unit: minutes.
   * 
   * >  The value of this parameter must be greater than or equal to 15.
   * 
   * This parameter is required.
   * 
   * @example
   * 60
   */
  durationMinutes?: number;
  /**
   * @remarks
   * Specifies whether to enable the scheduled scaling rule. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The time when the scheduled scaling task is executed.
   * 
   * If you set ScheduleType to at, make sure that the value of this parameter is at least 30 minutes later than the current point in time.
   * 
   * >Notice: To prevent the broker from repeatedly executing instance upgrade and downgrade tasks, make sure that the interval between two consecutive scheduled scaling tasks is at least 60 minutes.
   * 
   * This parameter is required.
   * 
   * @example
   * 1714467540000
   */
  firstScheduledTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * alikafka_serverless-cn-vxxxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the region where the instance resides.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The frequency to execute the scheduled scaling task. This parameter is required only if you set ScheduleType to repeat. Valid values:
   * 
   * *   Daily: The scheduled scaling task is executed every day.
   * 
   * *   Weekly: The scheduled scaling task is executed every week.
   * 
   * @example
   * Weekly
   */
  repeatType?: string;
  /**
   * @remarks
   * The reserved production capacity for scheduled scaling. Unit: MB/s.
   * 
   * >  You must specify a higher value than the instance specification for at least one of ReservedPubFlow and ReservedSubFlow.
   * 
   * This parameter is required.
   * 
   * @example
   * 120
   */
  reservedPubFlow?: number;
  /**
   * @remarks
   * The reserved consumption capacity for scheduled scaling. Unit: MB/s.
   * 
   * >  You must specify a higher value than the instance specification for at least one of ReservedPubFlow and ReservedSubFlow.
   * 
   * This parameter is required.
   * 
   * @example
   * 120
   */
  reservedSubFlow?: number;
  /**
   * @remarks
   * The name of the scheduled scaling rule.
   * 
   * >  The name of the scheduled scaling rule cannot be the same as the names of other rules for the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  ruleName?: string;
  /**
   * @remarks
   * The type of the scheduled scaling task. Valid values:
   * 
   * *   at: The scheduled scaling task is executed only once.
   * *   repeat: The scheduled scaling task is repeatedly executed.
   * 
   * This parameter is required.
   * 
   * @example
   * at
   */
  scheduleType?: string;
  /**
   * @remarks
   * The time zone in Coordinated Universal Time (UTC).
   * 
   * This parameter is required.
   * 
   * @example
   * GMT+8
   */
  timeZone?: string;
  /**
   * @remarks
   * The day on which the scheduled scaling task is executed every week. You can specify multiple days.
   */
  weeklyTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      durationMinutes: 'DurationMinutes',
      enable: 'Enable',
      firstScheduledTime: 'FirstScheduledTime',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      repeatType: 'RepeatType',
      reservedPubFlow: 'ReservedPubFlow',
      reservedSubFlow: 'ReservedSubFlow',
      ruleName: 'RuleName',
      scheduleType: 'ScheduleType',
      timeZone: 'TimeZone',
      weeklyTypes: 'WeeklyTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationMinutes: 'number',
      enable: 'boolean',
      firstScheduledTime: 'number',
      instanceId: 'string',
      regionId: 'string',
      repeatType: 'string',
      reservedPubFlow: 'number',
      reservedSubFlow: 'number',
      ruleName: 'string',
      scheduleType: 'string',
      timeZone: 'string',
      weeklyTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.weeklyTypes)) {
      $dara.Model.validateArray(this.weeklyTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


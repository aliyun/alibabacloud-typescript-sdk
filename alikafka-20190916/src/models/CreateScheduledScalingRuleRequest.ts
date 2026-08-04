// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScheduledScalingRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The duration (unit: minutes) of a single scheduled elastic scaling task.
   * 
   * > The value must be at least 15 minutes.
   * 
   * This parameter is required.
   * 
   * @example
   * 60
   */
  durationMinutes?: number;
  /**
   * @remarks
   * Specifies whether to enable or disable the scheduled policy. Valid values:
   * 
   * - **true**: Enabled.
   * - **false**: Disabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The time when the scheduled policy starts to take effect.
   * 
   * If the schedule type is single execution, the start time must be at least 30 minutes later than the current time.
   * 
   * 
   * 
   * >Notice: To prevent the server from continuously performing scale-up and scale-down tasks, the interval between different scheduled tasks must be at least 60 minutes.
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
   * The region ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The repeat type. This parameter is required when ScheduleType is set to repeat. Valid values:
   *       <li> Daily: timed scheduling every day.
   *       <li> Weekly: timed scheduling every week.
   * 
   * @example
   * Weekly
   */
  repeatType?: string;
  /**
   * @remarks
   * The reserved production specification for scheduled elastic scaling (unit: MB/s).
   * 
   * > At least one of ReservedPubFlow and ReservedSubFlow must be higher than the current specification.
   * 
   * This parameter is required.
   * 
   * @example
   * 120
   */
  reservedPubFlow?: number;
  /**
   * @remarks
   * The reserved consumption specification for scheduled elastic scaling (unit: MB/s).
   * > At least one of ReservedSubFlow and ReservedPubFlow must be higher than the current specification.
   * 
   * This parameter is required.
   * 
   * @example
   * 120
   */
  reservedSubFlow?: number;
  /**
   * @remarks
   * The name of the scheduled policy rule.
   * 
   * > The name must be unique among all rules of the same instance.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  ruleName?: string;
  /**
   * @remarks
   * The schedule type. Valid values:
   * 
   * - at: scheduled once only.
   * 
   * - repeat: scheduled repeatedly.
   * 
   * This parameter is required.
   * 
   * @example
   * at
   */
  scheduleType?: string;
  /**
   * @remarks
   * The time zone (Coordinated Universal Time).
   * 
   * This parameter is required.
   * 
   * @example
   * GMT+8
   */
  timeZone?: string;
  /**
   * @remarks
   * The days of the week. Multiple days are supported for repeated execution.
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


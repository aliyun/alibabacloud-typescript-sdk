// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScheduledScalingRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The duration of a scheduled elastic scaling task. Unit: minutes.
   * 
   * > The value must be at least 15.
   * 
   * This parameter is required.
   * 
   * @example
   * 60
   */
  durationMinutes?: number;
  /**
   * @remarks
   * Specifies whether to enable or disable the scheduled task policy. Valid values:
   * 
   * - **true**: enables the policy.
   * - **false**: disables the policy.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The start time of the scheduled policy.
   * 
   * If the schedule type is set to one-time execution, the start time must be at least 30 minutes later than the current time.
   * 
   * 
   * 
   * >Notice: To prevent the server from continuously executing scale-up and scale-down tasks, the interval between different scheduled tasks must be at least 60 minutes.</notice>
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
   *       <li> Daily: Daily timed scheduling.
   *       <li> Weekly: Weekly timed scheduling.
   * 
   * @example
   * Weekly
   */
  repeatType?: string;
  /**
   * @remarks
   * The reserved production specification for scheduled elastic scaling. Unit: MB/s.
   * 
   * > At least one of the ReservedPubFlow and ReservedSubFlow parameters must be greater than the current specification.
   * 
   * This parameter is required.
   * 
   * @example
   * 120
   */
  reservedPubFlow?: number;
  /**
   * @remarks
   * The reserved consumption specification for scheduled elastic scaling. Unit: MB/s.
   * > At least one of the ReservedSubFlow and ReservedPubFlow parameters must be greater than the current specification.
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
   * - at: The policy is executed only once.
   * 
   * - repeat: The policy is executed repeatedly.
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
   * The days of the week. Multiple days can be selected for repeated execution.
   */
  weeklyTypesShrink?: string;
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
      weeklyTypesShrink: 'WeeklyTypes',
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
      weeklyTypesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


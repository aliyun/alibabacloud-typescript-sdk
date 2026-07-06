// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScheduledScalingRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The duration (unit: minutes) of a scheduled elastic task.
   * 
   * > The parameter value must be at least 15 minutes.
   * 
   * This parameter is required.
   * 
   * @example
   * 60
   */
  durationMinutes?: number;
  /**
   * @remarks
   * Enables or disables the scheduled task policy. Valid values:
   * 
   * - **true**: Enables the policy.
   * - **false**: Disables the policy.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The time when the scheduled policy starts to execute.
   * 
   * For a one-time scheduling policy type, the start execution time must be more than 30 minutes later than the current time.
   * 
   * >Notice: 
   * 
   * To avoid the service from continuously executing upgrade and downgrade tasks, the time interval between different scheduled tasks must be at least 60 minutes.
   * 
   * </notice>
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
   * When ScheduleType is set to repeat, you need to fill in this parameter. Enumeration values are:
   * 
   * - Daily: Daily scheduled task.
   * 
   * - Weekly: Weekly scheduled task.
   * 
   * @example
   * Weekly
   */
  repeatType?: string;
  /**
   * @remarks
   * The scheduled elastic reserved production specification (unit: MB/s).
   * 
   * > At least one of the ReservedPubFlow and ReservedSubFlow parameters must be higher than the current specification.
   * 
   * This parameter is required.
   * 
   * @example
   * 120
   */
  reservedPubFlow?: number;
  /**
   * @remarks
   * The scheduled elastic reserved consumption specification (unit: MB/s).
   * 
   * > At least one of the ReservedSubFlow and ReservedPubFlow parameters must be higher than the current specification.
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
   * > The name cannot be the same as other rule names for the same instance.
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
   * - at: Scheduled only once.
   * - repeat: Scheduled repeatedly.
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
   * The weekly types. Supports execution on multiple days.
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


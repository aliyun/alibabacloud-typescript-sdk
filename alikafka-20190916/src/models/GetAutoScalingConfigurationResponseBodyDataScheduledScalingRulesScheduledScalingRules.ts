// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAutoScalingConfigurationResponseBodyDataScheduledScalingRulesScheduledScalingRulesWeeklyTypes } from "./GetAutoScalingConfigurationResponseBodyDataScheduledScalingRulesScheduledScalingRulesWeeklyTypes";


export class GetAutoScalingConfigurationResponseBodyDataScheduledScalingRulesScheduledScalingRules extends $dara.Model {
  /**
   * @remarks
   * The duration of a scheduled scaling task. Unit: minutes.
   * 
   * @example
   * 60
   */
  durationMinutes?: number;
  /**
   * @remarks
   * Indicates whether the scheduled scaling rule is enabled. Valid values:
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
   * The estimated scale-in duration. Unit: seconds.
   * 
   * @example
   * 780
   */
  estimatedElasticScalingDownTimeSecs?: number;
  /**
   * @remarks
   * The estimated scale-out duration. Unit: seconds.
   * 
   * @example
   * 780
   */
  estimatedElasticScalingUpTimeSecs?: number;
  /**
   * @remarks
   * The timestamp that indicates the start time of the scheduled scaling task.
   * 
   * @example
   * 1714467540000
   */
  firstScheduledTime?: number;
  /**
   * @remarks
   * The frequency at which the scheduled scaling task is executed. This parameter is returned only if ScheduleType is set to repeat. Valid values:
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
   * @example
   * 120
   */
  reservedPubFlow?: number;
  /**
   * @remarks
   * The reserved consumption capacity for scheduled scaling. Unit: MB/s.
   * 
   * @example
   * 120
   */
  reservedSubFlow?: number;
  /**
   * @remarks
   * The ID of the scheduled scaling rule.
   * 
   * @example
   * 64
   */
  ruleId?: number;
  /**
   * @remarks
   * The name of the scheduled scaling rule.
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
   * @example
   * at
   */
  scheduleType?: string;
  /**
   * @remarks
   * The time zone in Coordinated Universal Time (UTC).
   * 
   * @example
   * GMT+8
   */
  timeZone?: string;
  /**
   * @remarks
   * The day on which the scheduled scaling task is repeatedly executed. You can specify multiple days for this parameter.
   */
  weeklyTypes?: GetAutoScalingConfigurationResponseBodyDataScheduledScalingRulesScheduledScalingRulesWeeklyTypes;
  static names(): { [key: string]: string } {
    return {
      durationMinutes: 'DurationMinutes',
      enable: 'Enable',
      estimatedElasticScalingDownTimeSecs: 'EstimatedElasticScalingDownTimeSecs',
      estimatedElasticScalingUpTimeSecs: 'EstimatedElasticScalingUpTimeSecs',
      firstScheduledTime: 'FirstScheduledTime',
      repeatType: 'RepeatType',
      reservedPubFlow: 'ReservedPubFlow',
      reservedSubFlow: 'ReservedSubFlow',
      ruleId: 'RuleId',
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
      estimatedElasticScalingDownTimeSecs: 'number',
      estimatedElasticScalingUpTimeSecs: 'number',
      firstScheduledTime: 'number',
      repeatType: 'string',
      reservedPubFlow: 'number',
      reservedSubFlow: 'number',
      ruleId: 'number',
      ruleName: 'string',
      scheduleType: 'string',
      timeZone: 'string',
      weeklyTypes: GetAutoScalingConfigurationResponseBodyDataScheduledScalingRulesScheduledScalingRulesWeeklyTypes,
    };
  }

  validate() {
    if(this.weeklyTypes && typeof (this.weeklyTypes as any).validate === 'function') {
      (this.weeklyTypes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


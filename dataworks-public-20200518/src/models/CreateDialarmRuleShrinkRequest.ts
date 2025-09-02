// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDIAlarmRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the task with which the alert rule is associated.
   * 
   * This parameter is required.
   * 
   * @example
   * 11265
   */
  DIJobId?: number;
  /**
   * @remarks
   * The description of the task.
   * 
   * @example
   * mysql synchronizes to hologres heartbeat alert
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable the alert rule. By default, the alert rule is disabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The metric type in the alert rule. Valid values:
   * 
   * *   Heartbeat
   * *   FailoverCount
   * *   Delay
   * 
   * This parameter is required.
   * 
   * @example
   * Heartbeat
   */
  metricType?: string;
  /**
   * @remarks
   * The alert notification settings.
   * 
   * This parameter is required.
   */
  notificationSettingsShrink?: string;
  /**
   * @remarks
   * The conditions that are used to trigger the alert rule.
   * 
   * This parameter is required.
   */
  triggerConditionsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      DIJobId: 'DIJobId',
      description: 'Description',
      enabled: 'Enabled',
      metricType: 'MetricType',
      notificationSettingsShrink: 'NotificationSettings',
      triggerConditionsShrink: 'TriggerConditions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobId: 'number',
      description: 'string',
      enabled: 'boolean',
      metricType: 'string',
      notificationSettingsShrink: 'string',
      triggerConditionsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


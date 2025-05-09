// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDIAlarmRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * ABFUOEUOTRTRJKE
   */
  clientToken?: string;
  /**
   * @remarks
   * The ID of the synchronization task with which the alert rule is associated.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  DIJobId?: number;
  /**
   * @remarks
   * The description of the alert rule.
   * 
   * @example
   * The description of the alert rule.
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
   * *   DdlReport
   * *   ResourceUtilization
   * 
   * This parameter is required.
   * 
   * @example
   * Heartbeat
   */
  metricType?: string;
  /**
   * @remarks
   * The name of the alert rule.
   * 
   * This parameter is required.
   * 
   * @example
   * alartRule
   */
  name?: string;
  /**
   * @remarks
   * The alert notification settings.
   * 
   * This parameter is required.
   */
  notificationSettingsShrink?: string;
  /**
   * @remarks
   * The conditions that can trigger the alert rule.
   * 
   * This parameter is required.
   */
  triggerConditionsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DIJobId: 'DIJobId',
      description: 'Description',
      enabled: 'Enabled',
      metricType: 'MetricType',
      name: 'Name',
      notificationSettingsShrink: 'NotificationSettings',
      triggerConditionsShrink: 'TriggerConditions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      DIJobId: 'number',
      description: 'string',
      enabled: 'boolean',
      metricType: 'string',
      name: 'string',
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


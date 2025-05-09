// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateDIAlarmRuleRequestNotificationSettings } from "./UpdateDialarmRuleRequestNotificationSettings";
import { UpdateDIAlarmRuleRequestTriggerConditions } from "./UpdateDialarmRuleRequestTriggerConditions";


export class UpdateDIAlarmRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated. Use the Id parameter instead.
   * 
   * @example
   * 34982
   * 
   * @deprecated
   */
  DIAlarmRuleId?: number;
  /**
   * @remarks
   * The ID of the synchronization task.
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
   * The alert rule Id
   * 
   * @example
   * 34982
   */
  id?: number;
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
   * @example
   * Heartbeat
   */
  metricType?: string;
  /**
   * @remarks
   * The name of the alert rule.
   * 
   * @example
   * alarm_rule_name
   */
  name?: string;
  /**
   * @remarks
   * The alert notification settings.
   */
  notificationSettings?: UpdateDIAlarmRuleRequestNotificationSettings;
  /**
   * @remarks
   * The conditions that can trigger the alert rule.
   */
  triggerConditions?: UpdateDIAlarmRuleRequestTriggerConditions[];
  static names(): { [key: string]: string } {
    return {
      DIAlarmRuleId: 'DIAlarmRuleId',
      DIJobId: 'DIJobId',
      description: 'Description',
      enabled: 'Enabled',
      id: 'Id',
      metricType: 'MetricType',
      name: 'Name',
      notificationSettings: 'NotificationSettings',
      triggerConditions: 'TriggerConditions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIAlarmRuleId: 'number',
      DIJobId: 'number',
      description: 'string',
      enabled: 'boolean',
      id: 'number',
      metricType: 'string',
      name: 'string',
      notificationSettings: UpdateDIAlarmRuleRequestNotificationSettings,
      triggerConditions: { 'type': 'array', 'itemType': UpdateDIAlarmRuleRequestTriggerConditions },
    };
  }

  validate() {
    if(this.notificationSettings && typeof (this.notificationSettings as any).validate === 'function') {
      (this.notificationSettings as any).validate();
    }
    if(Array.isArray(this.triggerConditions)) {
      $dara.Model.validateArray(this.triggerConditions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


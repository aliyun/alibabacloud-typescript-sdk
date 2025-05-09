// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDIAlarmRuleRequestNotificationSettings } from "./CreateDialarmRuleRequestNotificationSettings";
import { CreateDIAlarmRuleRequestTriggerConditions } from "./CreateDialarmRuleRequestTriggerConditions";


export class CreateDIAlarmRuleRequest extends $dara.Model {
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
  notificationSettings?: CreateDIAlarmRuleRequestNotificationSettings;
  /**
   * @remarks
   * The conditions that can trigger the alert rule.
   * 
   * This parameter is required.
   */
  triggerConditions?: CreateDIAlarmRuleRequestTriggerConditions[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      DIJobId: 'DIJobId',
      description: 'Description',
      enabled: 'Enabled',
      metricType: 'MetricType',
      name: 'Name',
      notificationSettings: 'NotificationSettings',
      triggerConditions: 'TriggerConditions',
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
      notificationSettings: CreateDIAlarmRuleRequestNotificationSettings,
      triggerConditions: { 'type': 'array', 'itemType': CreateDIAlarmRuleRequestTriggerConditions },
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


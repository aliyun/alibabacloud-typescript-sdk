// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDIAlarmRulesResponseBodyPagingInfoDIJobAlarmRulesNotificationSettings } from "./ListDialarmRulesResponseBodyPagingInfoDijobAlarmRulesNotificationSettings";
import { ListDIAlarmRulesResponseBodyPagingInfoDIJobAlarmRulesTriggerConditions } from "./ListDialarmRulesResponseBodyPagingInfoDijobAlarmRulesTriggerConditions";


export class ListDIAlarmRulesResponseBodyPagingInfoDIJobAlarmRules extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated. Use the Id parameter instead.
   * 
   * @example
   * 72402
   * 
   * @deprecated
   */
  DIAlarmRuleId?: number;
  /**
   * @remarks
   * The ID of the synchronization task.
   * 
   * @example
   * 32594
   */
  DIJobId?: number;
  /**
   * @remarks
   * The description of the alert rule.
   * 
   * @example
   * rule descrition
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the alert rule is enabled. Valid values: True and False.
   * 
   * @example
   * True
   */
  enabled?: boolean;
  /**
   * @remarks
   * The ID of the alert rule.
   * 
   * @example
   * 72402
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
   * rule_name
   */
  name?: string;
  /**
   * @remarks
   * The alert notification method and recipient settings.
   */
  notificationSettings?: ListDIAlarmRulesResponseBodyPagingInfoDIJobAlarmRulesNotificationSettings;
  /**
   * @remarks
   * The conditions that are used to trigger the alert rule.
   */
  triggerConditions?: ListDIAlarmRulesResponseBodyPagingInfoDIJobAlarmRulesTriggerConditions[];
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
      notificationSettings: ListDIAlarmRulesResponseBodyPagingInfoDIJobAlarmRulesNotificationSettings,
      triggerConditions: { 'type': 'array', 'itemType': ListDIAlarmRulesResponseBodyPagingInfoDIJobAlarmRulesTriggerConditions },
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


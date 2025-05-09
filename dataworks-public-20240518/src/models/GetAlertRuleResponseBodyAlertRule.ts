// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAlertRuleResponseBodyAlertRuleNotification } from "./GetAlertRuleResponseBodyAlertRuleNotification";
import { GetAlertRuleResponseBodyAlertRuleTriggerCondition } from "./GetAlertRuleResponseBodyAlertRuleTriggerCondition";


export class GetAlertRuleResponseBodyAlertRule extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the rule is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 16035
   */
  id?: number;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * error_rule
   */
  name?: string;
  /**
   * @remarks
   * The configuration for the alert notification.
   */
  notification?: GetAlertRuleResponseBodyAlertRuleNotification;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used by the owner of the rule.
   * 
   * @example
   * 279961421580845157
   */
  owner?: string;
  /**
   * @remarks
   * The alert triggering condition.
   */
  triggerCondition?: GetAlertRuleResponseBodyAlertRuleTriggerCondition;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      id: 'Id',
      name: 'Name',
      notification: 'Notification',
      owner: 'Owner',
      triggerCondition: 'TriggerCondition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      id: 'number',
      name: 'string',
      notification: GetAlertRuleResponseBodyAlertRuleNotification,
      owner: 'string',
      triggerCondition: GetAlertRuleResponseBodyAlertRuleTriggerCondition,
    };
  }

  validate() {
    if(this.notification && typeof (this.notification as any).validate === 'function') {
      (this.notification as any).validate();
    }
    if(this.triggerCondition && typeof (this.triggerCondition as any).validate === 'function') {
      (this.triggerCondition as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


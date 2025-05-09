// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateAlertRuleRequestNotification } from "./CreateAlertRuleRequestNotification";
import { CreateAlertRuleRequestTriggerCondition } from "./CreateAlertRuleRequestTriggerCondition";


export class CreateAlertRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the rule is enabled.
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The name of the rule.
   * 
   * This parameter is required.
   * 
   * @example
   * xm_create_test
   */
  name?: string;
  /**
   * @remarks
   * The configuration for the alert notification.
   */
  notification?: CreateAlertRuleRequestNotification;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used by the owner of the rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 279114181716147735
   */
  owner?: string;
  /**
   * @remarks
   * The alert triggering condition.
   * 
   * This parameter is required.
   */
  triggerCondition?: CreateAlertRuleRequestTriggerCondition;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      name: 'Name',
      notification: 'Notification',
      owner: 'Owner',
      triggerCondition: 'TriggerCondition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      name: 'string',
      notification: CreateAlertRuleRequestNotification,
      owner: 'string',
      triggerCondition: CreateAlertRuleRequestTriggerCondition,
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


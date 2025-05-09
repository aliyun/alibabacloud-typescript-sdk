// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateAlertRuleRequestNotification } from "./UpdateAlertRuleRequestNotification";
import { UpdateAlertRuleRequestTriggerCondition } from "./UpdateAlertRuleRequestTriggerCondition";


export class UpdateAlertRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable the rule.
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
   * 105412
   */
  id?: number;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * collection_name
   */
  name?: string;
  /**
   * @remarks
   * The configuration for the alert notification.
   */
  notification?: UpdateAlertRuleRequestNotification;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used by the owner of the rule.
   * 
   * @example
   * 193379****
   */
  owner?: string;
  /**
   * @remarks
   * The alert triggering condition.
   */
  triggerCondition?: UpdateAlertRuleRequestTriggerCondition;
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
      notification: UpdateAlertRuleRequestNotification,
      owner: 'string',
      triggerCondition: UpdateAlertRuleRequestTriggerCondition,
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


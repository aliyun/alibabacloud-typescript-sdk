// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AlertRuleAction } from "./AlertRuleAction";
import { AlertRuleNotification } from "./AlertRuleNotification";


export class AlertRuleSend extends $dara.Model {
  action?: AlertRuleAction;
  notification?: AlertRuleNotification;
  notifyStrategies?: string[];
  sendToArms?: boolean;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      notification: 'notification',
      notifyStrategies: 'notifyStrategies',
      sendToArms: 'sendToArms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: AlertRuleAction,
      notification: AlertRuleNotification,
      notifyStrategies: { 'type': 'array', 'itemType': 'string' },
      sendToArms: 'boolean',
    };
  }

  validate() {
    if(this.action && typeof (this.action as any).validate === 'function') {
      (this.action as any).validate();
    }
    if(this.notification && typeof (this.notification as any).validate === 'function') {
      (this.notification as any).validate();
    }
    if(Array.isArray(this.notifyStrategies)) {
      $dara.Model.validateArray(this.notifyStrategies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


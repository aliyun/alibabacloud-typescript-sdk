// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AlertRuleAction } from "./AlertRuleAction";
import { AlertRuleNotification } from "./AlertRuleNotification";


export class AlertRuleSend extends $dara.Model {
  action?: AlertRuleAction;
  notification?: AlertRuleNotification;
  sendToArms?: boolean;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      notification: 'notification',
      sendToArms: 'sendToArms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: AlertRuleAction,
      notification: AlertRuleNotification,
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


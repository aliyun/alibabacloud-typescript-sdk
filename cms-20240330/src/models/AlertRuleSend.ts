// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AlertRuleAction } from "./AlertRuleAction";
import { AlertRuleNotification } from "./AlertRuleNotification";
import { AlertRuleRcaConfig } from "./AlertRuleRcaConfig";


export class AlertRuleSend extends $dara.Model {
  /**
   * @remarks
   * The integrated alert action configuration.
   */
  action?: AlertRuleAction;
  /**
   * @remarks
   * The alert notification configuration.
   */
  notification?: AlertRuleNotification;
  /**
   * @remarks
   * The list of notification policies. Each policy defines the notification method or policy name to use for a specific alert state, such as trigger or recovery.
   */
  notifyStrategies?: string[];
  rcaConfig?: AlertRuleRcaConfig;
  /**
   * @remarks
   * Specifies whether to deliver alert events to Alert Management of Application Real-Time Monitoring Service (ARMS).
   * 
   * @example
   * true
   */
  sendToArms?: boolean;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      notification: 'notification',
      notifyStrategies: 'notifyStrategies',
      rcaConfig: 'rcaConfig',
      sendToArms: 'sendToArms',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: AlertRuleAction,
      notification: AlertRuleNotification,
      notifyStrategies: { 'type': 'array', 'itemType': 'string' },
      rcaConfig: AlertRuleRcaConfig,
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
    if(this.rcaConfig && typeof (this.rcaConfig as any).validate === 'function') {
      (this.rcaConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


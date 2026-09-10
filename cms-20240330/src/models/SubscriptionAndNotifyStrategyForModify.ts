// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NotifyStrategyForSNSModify } from "./NotifyStrategyForSnsmodify";
import { IncidentResponsePlanForSNSModify } from "./IncidentResponsePlanForSnsmodify";
import { SubscriptionForSNSModify } from "./SubscriptionForSnsmodify";
import { SubscriptionOp } from "./SubscriptionOp";


export class SubscriptionAndNotifyStrategyForModify extends $dara.Model {
  /**
   * @remarks
   * The description of the alert policy.
   * 
   * @example
   * Used to monitor the CPU utilization of ECS instances
   */
  description?: string;
  /**
   * @remarks
   * Read-only. This parameter does not take effect even if specified. The backend forcibly sets this parameter to true during creation and retains the current value during updates. To enable or disable the policy, call the EnableAlertPolicy or DisableAlertPolicy operation.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * Policy Name of the alert policy. If this parameter is not specified, the backend derives Policy Name from notifyStrategy.
   * 
   * @example
   * my-alert-policy
   */
  name?: string;
  /**
   * @remarks
   * The notification configuration that defines noise reduction rules, notification channel routing, and templates. This parameter is required for Create operations.
   */
  notifyStrategy?: NotifyStrategyForSNSModify;
  /**
   * @remarks
   * The event management configuration that defines recovery notifications, repeat notifications, automatic recovery, and escalation policies.
   */
  responsePlan?: IncidentResponsePlanForSNSModify;
  /**
   * @remarks
   * The single primary subscription configuration that defines event filter conditions. This parameter is mutually exclusive with subscriptions. Do not specify both parameters at the same time.
   */
  subscription?: SubscriptionForSNSModify;
  /**
   * @remarks
   * Dedicated to Update operations. Performs batch create, update, or remove adjustments on member subscriptions.
   */
  subscriptions?: SubscriptionOp[];
  /**
   * @remarks
   * The unique identifier of the alert policy. This parameter is required for Update operations. Do not specify this parameter for Create operations because the backend automatically generates the value.
   * 
   * @example
   * 7076c75c-c804-461e-975f-c6f9ed5af745
   */
  uuid?: string;
  /**
   * @remarks
   * The optimistic lock version number. This parameter is required for Update operations and must match the current value on the backend. Otherwise, a 409 VersionConflict error is returned. The version number increments by 1 after each successful update.
   * 
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      enabled: 'enabled',
      name: 'name',
      notifyStrategy: 'notifyStrategy',
      responsePlan: 'responsePlan',
      subscription: 'subscription',
      subscriptions: 'subscriptions',
      uuid: 'uuid',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      enabled: 'boolean',
      name: 'string',
      notifyStrategy: NotifyStrategyForSNSModify,
      responsePlan: IncidentResponsePlanForSNSModify,
      subscription: SubscriptionForSNSModify,
      subscriptions: { 'type': 'array', 'itemType': SubscriptionOp },
      uuid: 'string',
      version: 'number',
    };
  }

  validate() {
    if(this.notifyStrategy && typeof (this.notifyStrategy as any).validate === 'function') {
      (this.notifyStrategy as any).validate();
    }
    if(this.responsePlan && typeof (this.responsePlan as any).validate === 'function') {
      (this.responsePlan as any).validate();
    }
    if(this.subscription && typeof (this.subscription as any).validate === 'function') {
      (this.subscription as any).validate();
    }
    if(Array.isArray(this.subscriptions)) {
      $dara.Model.validateArray(this.subscriptions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


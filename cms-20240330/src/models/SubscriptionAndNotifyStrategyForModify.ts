// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NotifyStrategyForSNSModify } from "./NotifyStrategyForSnsmodify";
import { IncidentResponsePlanForSNSModify } from "./IncidentResponsePlanForSnsmodify";
import { SubscriptionForSNSModify } from "./SubscriptionForSnsmodify";
import { SubscriptionOp } from "./SubscriptionOp";


export class SubscriptionAndNotifyStrategyForModify extends $dara.Model {
  description?: string;
  enabled?: boolean;
  /**
   * @remarks
   * Optional. If omitted, the backend derives the name from `notifyStrategy`.
   */
  name?: string;
  notifyStrategy?: NotifyStrategyForSNSModify;
  responsePlan?: IncidentResponsePlanForSNSModify;
  subscription?: SubscriptionForSNSModify;
  /**
   * @remarks
   * For update operations only. Use this parameter to batch create, update, and remove member subscriptions.
   */
  subscriptions?: SubscriptionOp[];
  /**
   * @remarks
   * Required for update operations but optional for create operations. If omitted during creation, the backend automatically generates a UUID.
   */
  uuid?: string;
  /**
   * @remarks
   * Required for update operations. The value must match the current version of the record. If the versions do not match, the request fails with an `OPTIMISTIC_LOCK_FAILED` error.
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


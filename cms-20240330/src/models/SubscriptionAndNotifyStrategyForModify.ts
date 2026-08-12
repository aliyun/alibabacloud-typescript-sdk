// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NotifyStrategyForSNSModify } from "./NotifyStrategyForSnsmodify";
import { IncidentResponsePlanForSNSModify } from "./IncidentResponsePlanForSnsmodify";
import { SubscriptionForSNSModify } from "./SubscriptionForSnsmodify";
import { SubscriptionOp } from "./SubscriptionOp";


export class SubscriptionAndNotifyStrategyForModify extends $dara.Model {
  /**
   * @remarks
   * The description.
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to enable the subscription. Enabled by default during creation.
   */
  enabled?: boolean;
  /**
   * @remarks
   * Optional. The backend derives the name from notifyStrategy if this parameter is not specified.
   */
  name?: string;
  notifyStrategy?: NotifyStrategyForSNSModify;
  responsePlan?: IncidentResponsePlanForSNSModify;
  subscription?: SubscriptionForSNSModify;
  /**
   * @remarks
   * Used exclusively for Update operations. Performs batch create, update, or remove adjustments on member subscriptions.
   */
  subscriptions?: SubscriptionOp[];
  /**
   * @remarks
   * Required for Update. Can be omitted for Create, in which case the backend generates it.
   */
  uuid?: string;
  /**
   * @remarks
   * Required for Update. The value must match the backend record for the write to succeed. If the values do not match, OPTIMISTIC_LOCK_FAILED is returned.
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


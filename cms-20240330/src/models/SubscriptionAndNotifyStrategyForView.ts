// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NotifyStrategyForSNSView } from "./NotifyStrategyForSnsview";
import { IncidentResponsePlanForSNSView } from "./IncidentResponsePlanForSnsview";
import { SubscriptionForSNSView } from "./SubscriptionForSnsview";
import { SubscriptionForView } from "./SubscriptionForView";


export class SubscriptionAndNotifyStrategyForView extends $dara.Model {
  createTime?: string;
  description?: string;
  enabled?: boolean;
  migrationBatchId?: string;
  migrationMeta?: string;
  name?: string;
  notifyStrategy?: NotifyStrategyForSNSView;
  notifyStrategyUuid?: string;
  responsePlan?: IncidentResponsePlanForSNSView;
  subscription?: SubscriptionForSNSView;
  subscriptionUuid?: string;
  subscriptions?: SubscriptionForView[];
  updateTime?: string;
  userId?: string;
  uuid?: string;
  version?: number;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      enabled: 'enabled',
      migrationBatchId: 'migrationBatchId',
      migrationMeta: 'migrationMeta',
      name: 'name',
      notifyStrategy: 'notifyStrategy',
      notifyStrategyUuid: 'notifyStrategyUuid',
      responsePlan: 'responsePlan',
      subscription: 'subscription',
      subscriptionUuid: 'subscriptionUuid',
      subscriptions: 'subscriptions',
      updateTime: 'updateTime',
      userId: 'userId',
      uuid: 'uuid',
      version: 'version',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      enabled: 'boolean',
      migrationBatchId: 'string',
      migrationMeta: 'string',
      name: 'string',
      notifyStrategy: NotifyStrategyForSNSView,
      notifyStrategyUuid: 'string',
      responsePlan: IncidentResponsePlanForSNSView,
      subscription: SubscriptionForSNSView,
      subscriptionUuid: 'string',
      subscriptions: { 'type': 'array', 'itemType': SubscriptionForView },
      updateTime: 'string',
      userId: 'string',
      uuid: 'string',
      version: 'number',
      workspace: 'string',
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


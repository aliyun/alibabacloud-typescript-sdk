// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NotifyStrategyForSNSView } from "./NotifyStrategyForSnsview";


export class SubscriptionAndNotifyStrategyForListView extends $dara.Model {
  createTime?: string;
  description?: string;
  enabled?: boolean;
  migrationBatchId?: string;
  migrationMeta?: string;
  name?: string;
  notifyStrategy?: NotifyStrategyForSNSView;
  notifyStrategyUuid?: string;
  subscriptionUuid?: string;
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
      subscriptionUuid: 'subscriptionUuid',
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
      subscriptionUuid: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


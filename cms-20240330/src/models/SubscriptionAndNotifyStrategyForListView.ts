// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NotifyStrategyForSNSView } from "./NotifyStrategyForSnsview";


export class SubscriptionAndNotifyStrategyForListView extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1700000000
   */
  createTime?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Sample description
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the policy is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The migration batch ID. This field is empty for user-created entries and has a value for migration artifacts.
   * 
   * @example
   * example-id-001
   */
  migrationBatchId?: string;
  /**
   * @remarks
   * The migration metadata JSON string.
   * 
   * @example
   * Sample value
   */
  migrationMeta?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * Sample name
   */
  name?: string;
  /**
   * @remarks
   * The notification policy snapshot.
   */
  notifyStrategy?: NotifyStrategyForSNSView;
  /**
   * @remarks
   * The UUID of the associated notifyStrategy, which is shared with the responsePlan UUID.
   * 
   * @example
   * example-id-001
   */
  notifyStrategyUuid?: string;
  /**
   * @remarks
   * The UUID of the directly bound primary subscription, which has a 1:1 association in the NOTIFY mode.
   * 
   * @example
   * example-id-001
   */
  subscriptionUuid?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 1700000000
   */
  updateTime?: string;
  /**
   * @remarks
   * The user ID of the owner.
   * 
   * @example
   * example-id-001
   */
  userId?: string;
  /**
   * @remarks
   * The UUID of the aggregate entity.
   * 
   * @example
   * example-id-001
   */
  uuid?: string;
  /**
   * @remarks
   * The optimistic lock version number.
   * 
   * @example
   * 1
   */
  version?: number;
  /**
   * @remarks
   * The workspace identifier.
   * 
   * @example
   * Sample value
   */
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


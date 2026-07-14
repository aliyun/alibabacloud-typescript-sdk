// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NotifyStrategyDetail } from "./NotifyStrategyDetail";
import { ResponsePlanDetail } from "./ResponsePlanDetail";
import { SubscriptionDetail } from "./SubscriptionDetail";


export class NotifyPolicy extends $dara.Model {
  /**
   * @remarks
   * The creation time. The value is a UNIX timestamp string in milliseconds.
   * 
   * @example
   * 1710000000000
   */
  createTime?: string;
  /**
   * @remarks
   * The policy description.
   * 
   * @example
   * 生产环境告警通知策略
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the policy is enabled. This is a read-only field controlled by the Enable or Disable operation.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * 生产环境告警通知策略
   */
  name?: string;
  /**
   * @remarks
   * The notification policy sub-entity details.
   * 
   * @example
   * {}
   */
  notifyStrategy?: NotifyStrategyDetail;
  /**
   * @remarks
   * The response plan sub-entity details.
   * 
   * @example
   * {}
   */
  responsePlan?: ResponsePlanDetail;
  /**
   * @remarks
   * The subscription sub-entity details.
   * 
   * @example
   * {}
   */
  subscription?: SubscriptionDetail;
  /**
   * @remarks
   * The update time. The value is a UNIX timestamp string in milliseconds.
   * 
   * @example
   * 1710000000000
   */
  updateTime?: string;
  /**
   * @remarks
   * The Alibaba Cloud account UID.
   * 
   * @example
   * 1234567890123456
   */
  userId?: string;
  /**
   * @remarks
   * The unique identifier of the policy.
   * 
   * @example
   * 04779a183add4f2ca06ab440f16cc580
   */
  uuid?: string;
  /**
   * @remarks
   * The optimistic locking version number.
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
   * default-cms-xxxx-cn-hangzhou
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      enabled: 'enabled',
      name: 'name',
      notifyStrategy: 'notifyStrategy',
      responsePlan: 'responsePlan',
      subscription: 'subscription',
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
      name: 'string',
      notifyStrategy: NotifyStrategyDetail,
      responsePlan: ResponsePlanDetail,
      subscription: SubscriptionDetail,
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


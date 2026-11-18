// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddShardingNodeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * * **true**: enables automatic payment. Make sure that your account has sufficient balance.
   * * **false**: disables automatic payment. You must manually renew the instance in the console. For more information, see [Manual renewal](https://help.aliyun.com/document_detail/26352.html).
   * 
   * > Default value: **true**.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The additional parameter that contains business information.
   * 
   * @example
   * 000000000
   */
  businessInfo?: string;
  /**
   * @remarks
   * The coupon code.
   * 
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  couponNo?: string;
  /**
   * @remarks
   * Specifies whether to enable forced transition. Valid values:
   * - **false** (default): Before the upgrade/downgrade, the system checks the current minor engine version of the instance. If the engine version is too low, an error is reported. You must upgrade the minor engine version and retry.
   * - **true**: skips the check to directly execute the upgrade/downgrade operation.
   * 
   * @example
   * false
   */
  forceTrans?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The number of shards to add. Default value: **1**.
   * > The total number of shards in the instance must be at least 2. The maximum number of shards that can be added in a single operation is 64, and the maximum total number of shards for an instance is 256. Make sure that the number of shards does not exceed these limits.
   * 
   * @example
   * 2
   */
  shardCount?: number;
  /**
   * @remarks
   * The source of the call. This parameter is used only for internal maintenance and does not need to be specified.
   * 
   * @example
   * SDK
   */
  sourceBiz?: string;
  /**
   * @remarks
   * The ID of a different vSwitch in the same VPC. The new data shards are created in the specified vSwitch.
   * If you do not specify this parameter, the new data shards are created in the original vSwitch.
   * 
   * @example
   * vsw-bp1e7clcw529l773d****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      businessInfo: 'BusinessInfo',
      couponNo: 'CouponNo',
      forceTrans: 'ForceTrans',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      shardCount: 'ShardCount',
      sourceBiz: 'SourceBiz',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      businessInfo: 'string',
      couponNo: 'string',
      forceTrans: 'boolean',
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      shardCount: 'number',
      sourceBiz: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddShardingNodeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * 
   * *   **true**: enables auto-renewal. Make sure that your account has sufficient balance.
   * *   **false**: disables auto-renewal. You must manually renew the instance in the console before the instance expires. For more information, see [Instance renewal](https://help.aliyun.com/document_detail/26352.html).
   * 
   * >  Default value: **true**.
   * 
   * @example
   * false
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The business information. This is an additional parameter.
   * 
   * @example
   * 000000000
   */
  businessInfo?: string;
  /**
   * @remarks
   * The ID of the coupon.
   * 
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  couponNo?: string;
  /**
   * @remarks
   * Specifies whether to enable forced transmission during a configuration change. Valid values:
   * 
   * *   **false** (default): Before the configuration change, the system checks the minor version of the instance. If the minor version of the instance is outdated, an error is reported. You must update the minor version of the instance and try again.
   * *   **true**: The system skips the version check and directly performs the configuration change.
   * 
   * @example
   * false
   */
  forceTrans?: boolean;
  /**
   * @remarks
   * The ID of the instance.
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
   * The number of data shards that you want to add. Default value: **1**.
   * 
   * >  The instance can contain 2 to 256 data shards. You can add up to 64 data shards at a time. Make sure that the number of shards does not exceed this limit.
   * 
   * @example
   * 2
   */
  shardCount?: number;
  /**
   * @remarks
   * The source of the operation. This parameter is used only for internal maintenance. You do not need to specify this parameter.
   * 
   * @example
   * SDK
   */
  sourceBiz?: string;
  /**
   * @remarks
   * The vSwitch ID. You can specify a different vSwitch within the same virtual private cloud (VPC). In this case, the new data shards are created in the specified vSwitch. If you do not specify this parameter, the new data shards are created in the original vSwitch.
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyNodeSpecBatchRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * - **true**: Automatic payment is enabled. Make sure that your account has a sufficient balance.
   * 
   * <props="china">
   * 
   * - **false**: Manual payment is enabled. Log on to the ApsaraDB for MongoDB console. In the upper-right corner, choose **Expenses** > **Expenses and Costs**. In the navigation pane on the left, choose **Subscription Orders** > **My Orders**. On the **Product Orders** tab, find the target order and pay for it.
   * 
   * 
   * 
   * 
   * <props="intl">
   * 
   * - **false**: Manual payment is enabled. Log on to the ApsaraDB for MongoDB console. In the upper-right corner, choose **Expenses** > **Expenses and Costs**. In the navigation pane on the left, click **Order Management**. On the **Product Orders** page, find the target order and pay for it.
   * 
   * 
   * 
   * 
   * Default value: **true**.
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The business information.
   * 
   * @example
   * {“ActivityId":"000000000"}
   */
  businessInfo?: string;
  /**
   * @remarks
   * A client token. It is used to ensure the idempotence of the request. You can use the client to generate the value, but you must make sure that the value is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to use a coupon. Valid values:
   * 
   * - **default** or **null** (default): A coupon is used.
   * 
   * - **youhuiquan_promotion_option_id_for_blank**: A coupon is not used.
   * 
   * @example
   * default
   */
  couponNo?: string;
  /**
   * @remarks
   * The ID of the instance for which you want to change configurations.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp1337621e8f****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The effective period of the configuration change. Valid values:
   * 
   * - **Immediately**: The change takes effect immediately.
   * 
   * - **MaintainTime**: The change takes effect during the maintenance window of the instance.
   * 
   * > * You can call the [ModifyDBInstanceMaintainTime](https://help.aliyun.com/document_detail/62008.html) operation to change the maintenance window of an instance.
   * >
   * > * You can call the [DescribeDBInstanceAttribute](https://help.aliyun.com/document_detail/62010.html) operation to view the maintenance window of an instance.
   * 
   * Default value: **Immediately**.
   * 
   * @example
   * Immediately
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The instance types of the Mongos and shard nodes that you want to change. For more information, see [Instance types](https://help.aliyun.com/document_detail/57141.html).
   * 
   * This parameter is required.
   * 
   * @example
   * {"Shards":[{"DBInstanceClass":"dds.shard.mid","DBInstanceName":"d-bp14ae4572fd****","Storage":20},{"DBInstanceClass":"dds.shard.mid","DBInstanceName":"d-bp19f4f92dc5****","Storage":30}]}
   */
  nodesInfo?: string;
  /**
   * @remarks
   * The type of configuration change. Valid values:
   * 
   * - **UPGRADE**: Upgrades the instance configuration.
   * 
   * - **DOWNGRADE**: Downgrades the instance configuration.
   * 
   * > This parameter is available only when the billing method of the instance is subscription.
   * 
   * @example
   * UPGRADE
   */
  orderType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The destination zone of the hidden node for a configuration change that involves a zone migration.
   * 
   * >Notice: 
   * 
   * This parameter applies only to instances that use disks.
   * 
   * 
   * 
   * >Notice: 
   * 
   * The value of this parameter cannot be the same as the value of the TargetZoneId or TargetSecondaryZoneId parameter.
   * 
   * 
   * 
   * > - This parameter is required only for a configuration change that involves a zone migration.
   * 
   * @example
   * cn-hangzhou-e
   */
  targetHiddenZoneId?: string;
  /**
   * @remarks
   * The destination zone of the secondary node for a configuration change that involves a zone migration.
   * 
   * >Notice: 
   * 
   * This parameter applies only to instances that use disks.
   * 
   * 
   * 
   * >Notice: 
   * 
   * The value of this parameter cannot be the same as the value of the TargetZoneId or TargetHiddenZoneId parameter.
   * 
   * 
   * 
   * > - This parameter is required only for a configuration change that involves a zone migration.
   * 
   * @example
   * cn-hangzhou-j
   */
  targetSecondaryZoneId?: string;
  /**
   * @remarks
   * The ID of the destination virtual switch for a configuration change that involves a zone migration.
   * 
   * >Notice: 
   * 
   * This parameter applies only to instances that use disks.
   * 
   * 
   * 
   * > - This parameter is required only for a configuration change that involves a zone migration.
   * 
   * @example
   * vsw-xxxxxxxx
   */
  targetVswitchId?: string;
  /**
   * @remarks
   * The destination zone of the primary node for a configuration change that involves a zone migration.
   * 
   * >Notice: 
   * 
   * This parameter applies only to instances that use disks.
   * 
   * 
   * 
   * >Notice: 
   * 
   * The value of this parameter cannot be the same as the value of the TargetSecondaryZoneId or TargetHiddenZoneId parameter.
   * 
   * 
   * 
   * > - This parameter is required only for a configuration change that involves a zone migration.
   * 
   * @example
   * cn-hangzhou-h
   */
  targetZoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      businessInfo: 'BusinessInfo',
      clientToken: 'ClientToken',
      couponNo: 'CouponNo',
      DBInstanceId: 'DBInstanceId',
      effectiveTime: 'EffectiveTime',
      nodesInfo: 'NodesInfo',
      orderType: 'OrderType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      targetHiddenZoneId: 'TargetHiddenZoneId',
      targetSecondaryZoneId: 'TargetSecondaryZoneId',
      targetVswitchId: 'TargetVswitchId',
      targetZoneId: 'TargetZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      businessInfo: 'string',
      clientToken: 'string',
      couponNo: 'string',
      DBInstanceId: 'string',
      effectiveTime: 'string',
      nodesInfo: 'string',
      orderType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      targetHiddenZoneId: 'string',
      targetSecondaryZoneId: 'string',
      targetVswitchId: 'string',
      targetZoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


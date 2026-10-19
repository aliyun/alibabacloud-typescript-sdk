// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyNodeSpecBatchRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically align the primary node to the primary zone after operations such as configuration changes for a multi-zone instance. If you choose not to align the node, one primary/secondary switchover (transient connection) is prevented. Default value: true.
   */
  alignPrimaryZone?: boolean;
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * - **true**: enables automatic payment. Make sure that your account has sufficient balance.
   * <props="china">- **false**: disables automatic payment. You can log on to the ApsaraDB for MongoDB console, choose **Expenses** > **Expenses and Costs** in the upper-right corner, choose **Orders** > **My Orders** in the left-side navigation pane, and then find the target order on the **Orders** tab to complete the payment.
   * <props="intl">- **false**: disables automatic payment. You can log on to the ApsaraDB for MongoDB console, choose **Expenses** > **Expenses and Costs** in the upper-right corner, click **Order Management** in the left-side navigation pane, and then find the target order on the **Orders** page to complete the payment.
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
   * The client token that is used to ensure the idempotence of the request and prevent duplicate submissions. You can use the client to generate the token, but you must ensure that it is unique among different requests. The token can contain a maximum of 64 ASCII characters and cannot contain non-ASCII characters.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to use a coupon. Valid values:
   * - **default** or **null**: uses a coupon. This is the default value.
   * - **youhuiquan_promotion_option_id_for_blank**: does not use a coupon.
   * 
   * @example
   * default
   */
  couponNo?: string;
  /**
   * @remarks
   * The instance ID of the instance whose configurations you want to modify.
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
   * - **Immediately**: The configuration change takes effect immediately.
   * - **MaintainTime**: The configuration change takes effect during the maintenance window of the instance.
   * 
   * > - You can invoke the [ModifyDBInstanceMaintainTime](https://help.aliyun.com/document_detail/62008.html) operation to modify the maintenance window of the instance.
   * > - You can invoke the [DescribeDBInstanceAttribute](https://help.aliyun.com/document_detail/62010.html) operation to view the maintenance window of the instance.
   * 
   * Default value: **Immediately**.
   * 
   * @example
   * Immediately
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The specifications of the Mongos or shard nodes to be modified. For more information, see [Instance types](https://help.aliyun.com/document_detail/57141.html).
   * 
   * This parameter is required.
   * 
   * @example
   * {"Shards":[{"DBInstanceClass":"dds.shard.mid","DBInstanceName":"d-bp14ae4572fd****","Storage":20},{"DBInstanceClass":"dds.shard.mid","DBInstanceName":"d-bp19f4f92dc5****","Storage":30}]}
   */
  nodesInfo?: string;
  /**
   * @remarks
   * The type of the configuration change. Valid values:
   * 
   * - **UPGRADE**: upgrades the configurations.
   * - **DOWNGRADE**: downgrades the configurations.
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
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query available regions.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The destination zone of the hidden node when you migrate the instance across zones and change its configurations at the same time.
   * >Notice: This parameter is supported only for cloud disk instances.</notice>
   * >Notice: The value of this parameter cannot be the same as the value of the TargetZoneId or TargetSecondaryZoneId parameter.</notice>
   * 
   * > 
   * > - You must specify this parameter only when you migrate the instance across zones and change its configurations at the same time.
   * 
   * @example
   * cn-hangzhou-e
   */
  targetHiddenZoneId?: string;
  /**
   * @remarks
   * The destination zone of the secondary node when you migrate the instance across zones and change its configurations at the same time.
   * >Notice: This parameter is supported only for cloud disk instances.</notice>
   * >Notice: The value of this parameter cannot be the same as the value of the TargetZoneId or TargetHiddenZoneId parameter.</notice>
   * > 
   * > - You must specify this parameter only when you migrate the instance across zones and change its configurations at the same time.
   * 
   * @example
   * cn-hangzhou-j
   */
  targetSecondaryZoneId?: string;
  /**
   * @remarks
   * The ID of the destination vSwitch when you migrate the instance across zones and change its configurations at the same time.
   * >Notice: This parameter is supported only for cloud disk instances.</notice>
   * > 
   * > - You must specify this parameter only when you migrate the instance across zones and change its configurations at the same time.
   * 
   * @example
   * vsw-xxxxxxxx
   */
  targetVswitchId?: string;
  /**
   * @remarks
   * The destination zone of the primary node when you migrate the instance across zones and change its configurations at the same time.
   * >Notice: This parameter is supported only for cloud disk instances.</notice>
   * >Notice: The value of this parameter cannot be the same as the value of the TargetSecondaryZoneId or TargetHiddenZoneId parameter.</notice>
   * > 
   * > - You must specify this parameter only when you migrate the instance across zones and change its configurations at the same time.
   * 
   * @example
   * cn-hangzhou-h
   */
  targetZoneId?: string;
  static names(): { [key: string]: string } {
    return {
      alignPrimaryZone: 'AlignPrimaryZone',
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
      alignPrimaryZone: 'boolean',
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceSpecRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment for the instance. Valid values:
   * 
   * - **true**: enables automatic payment. Make sure that your account has a sufficient balance. This is the default value.
   * 
   * <props="china">
   * 
   * - **false**: disables automatic payment. You can log on to the ApsaraDB for MongoDB console to pay for the instance. In the upper-right corner of the page, choose **Billing Management** > **Billing Management**. In the left-side navigation pane, choose **Orders** > **My Orders**. On the **Product Orders** tab, find the order and complete the payment.
   * 
   * 
   * 
   * 
   * <props="intl">
   * 
   * - **false**: disables automatic payment. You can log on to the ApsaraDB for MongoDB console to pay for the instance. In the upper-right corner of the page, choose **Billing Management** > **Billing Management**. In the left-side navigation pane, click **Orders**. On the **Product Orders** page, find the order and complete the payment.
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
   * Specifies whether to use a coupon. Valid values:
   * 
   * - **default** or **null** (default): A coupon is used.
   * 
   * - **youhuiquan_promotion_option_id_for_blank**: No coupon is used.
   * 
   * @example
   * default
   */
  couponNo?: string;
  /**
   * @remarks
   * The instance type. <props="intl">For more information, see [Instance types](https://help.aliyun.com/document_detail/57141.html). You can also call the [DescribeAvailableResource](https://help.aliyun.com/document_detail/149719.html) operation to query instance types.<props="china">
   * 
   * - For a standalone instance or a replica set instance, this parameter specifies the instance type. For more information, see [Instance types](https://help.aliyun.com/document_detail/57141.html). You can also call the [DescribeAvailableResource](https://help.aliyun.com/document_detail/149719.html) operation to query the instance types of standalone and replica set instances.
   * 
   * - For a serverless instance, this parameter specifies the computing capacity of the instance. Valid values: 100 to 8000.
   * 
   * > You must configure one of the **DBInstanceStorage** and DBInstanceClass parameters.
   * 
   * @example
   * dds.sn4.xlarge.1
   */
  DBInstanceClass?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dds-bp1ea17b41ab****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The storage capacity of the instance. <props="intl">The value must be an integer that is greater than or equal to 10. The value increases in increments of 10. Unit: GB. The values that can be specified for this parameter are subject to the instance type. For more information, see [Instance types](https://help.aliyun.com/document_detail/57141.html).
   * 
   * <props="china">
   * 
   * - The storage capacity of a standalone instance or a replica set instance must be a multiple of 10. The valid values are 10 to 3000. Unit: GB. The values that can be specified for this parameter are subject to the instance type. For more information, see [Instance types](https://help.aliyun.com/document_detail/57141.html).
   * 
   * - The storage capacity of a serverless instance must be a multiple of 1. The valid values are 1 to 100. Unit: GB.
   * 
   * 
   * 
   * > - You must configure one of the **DBInstanceClass** and DBInstanceStorage parameters.
   * >
   * > - You cannot decrease the storage capacity of an instance.
   * 
   * @example
   * 50
   */
  DBInstanceStorage?: string;
  /**
   * @remarks
   * The effective time of the configuration change. Valid values:
   * 
   * - **Immediately**: The configuration change immediately takes effect. This is the default value.
   * 
   * - **MaintainTime**: The configuration change takes effect during the maintenance window of the instance.
   * 
   * @example
   * Immediately
   */
  effectiveTime?: string;
  /**
   * @remarks
   * Additional parameters. Valid values:
   * 
   * - **async**: The result is returned after the specification change order is created.
   * 
   * - **sync**: The result is returned after the instance specification change is delivered.
   * 
   * @example
   * async
   */
  extraParam?: string;
  /**
   * @remarks
   * The specification change type. Valid values:
   * 
   * - **UPGRADE**: upgrades the specifications. This is the default value.
   * 
   * - **DOWNGRADE**: downgrades the specifications.
   * 
   * > This parameter is available only for subscription instances.
   * 
   * @example
   * UPGRADE
   */
  orderType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of read-only nodes. Valid values: **0** to **5**.
   * 
   * If the network type of the instance is set to only **classic network** and **VPC**, you need to enable public access or release the classic network endpoint before you can change the **number of read-only nodes**.
   * 
   * > You can log on to the ApsaraDB for MongoDB console and go to the **Database Connections** page to view the network types that have been enabled.
   * 
   * @example
   * 1
   */
  readonlyReplicas?: string;
  /**
   * @remarks
   * The number of nodes in the instance. Default value: 3.
   * 
   * - Valid values for replica set instances: **3**, **5**, and **7**.
   * 
   * - The value for standalone instances is fixed at **1**.
   * 
   * - The value for replica set instances with shared storage (available only in the China site) is fixed at **2**.
   * 
   * > This parameter is not required for serverless instances (available only in the China site).
   * 
   * @example
   * 3
   */
  replicationFactor?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The specifications of the Search node to be changed.
   * 
   * @example
   * mdb.shard.2x.xlarge.d
   */
  searchNodeClass?: string;
  /**
   * @remarks
   * The number of Search nodes to be changed.
   * 
   * @example
   * 2
   */
  searchNodeCount?: number;
  /**
   * @remarks
   * The capacity of the Search node to be changed.
   * 
   * @example
   * 20
   */
  searchNodeStorage?: number;
  /**
   * @remarks
   * The destination zone for the hidden node when you change the specifications and migrate the instance across zones.
   * >Notice: This parameter applies only to cloud disk instances.
   * >Notice: The value of this parameter cannot be the same as the value of the TargetZoneId or TargetSecondaryZoneId parameter.
   * 
   * > - You must specify this parameter only when you change the specifications and migrate the instance across zones.
   * >
   * > - This parameter is available only for multi-zone migration.
   * >
   * > - The destination zone and the current zone must be in the same region.
   * >
   * > - You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query zone IDs.
   * 
   * @example
   * cn-hangzhou-i
   */
  targetHiddenZoneId?: string;
  /**
   * @remarks
   * The destination secondary zone for the secondary node when you change the specifications and migrate the instance across zones.
   * >Notice: This parameter applies only to cloud disk instances.
   * >Notice: The value of this parameter cannot be the same as the value of the TargetZoneId or TargetHiddenZoneId parameter.
   * 
   * > - You must specify this parameter only when you change the specifications and migrate the instance across zones.
   * >
   * > - This parameter is available only for multi-zone migration.
   * >
   * > - The destination zone and the current zone must be in the same region.
   * >
   * > - You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query zone IDs.
   * 
   * @example
   * cn-hangzhou-h
   */
  targetSecondaryZoneId?: string;
  /**
   * @remarks
   * The destination vSwitch ID when you change the specifications and migrate the instance across zones.
   * >Notice: This parameter applies only to cloud disk instances.
   * 
   * > - You must specify this parameter only when you change the specifications and migrate the instance across zones.
   * 
   * @example
   * vsw-bp1buy0h9myt5i9e7****
   */
  targetVswitchId?: string;
  /**
   * @remarks
   * The destination zone to which you want to migrate the instance when you change the specifications and migrate the instance across zones.
   * >Notice: This parameter applies only to cloud disk instances.
   * >Notice: The value of this parameter cannot be the same as the value of the TargetSecondaryZoneId or TargetHiddenZoneId parameter.
   * 
   * > - You must specify this parameter only when you change the specifications and migrate the instance across zones.
   * >
   * > - The destination zone and the current zone must be in the same region.
   * >
   * > - You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query zone IDs.
   * 
   * @example
   * cn-hangzhou-j
   */
  targetZoneId?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      businessInfo: 'BusinessInfo',
      couponNo: 'CouponNo',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceId: 'DBInstanceId',
      DBInstanceStorage: 'DBInstanceStorage',
      effectiveTime: 'EffectiveTime',
      extraParam: 'ExtraParam',
      orderType: 'OrderType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      readonlyReplicas: 'ReadonlyReplicas',
      replicationFactor: 'ReplicationFactor',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      searchNodeClass: 'SearchNodeClass',
      searchNodeCount: 'SearchNodeCount',
      searchNodeStorage: 'SearchNodeStorage',
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
      couponNo: 'string',
      DBInstanceClass: 'string',
      DBInstanceId: 'string',
      DBInstanceStorage: 'string',
      effectiveTime: 'string',
      extraParam: 'string',
      orderType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      readonlyReplicas: 'string',
      replicationFactor: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      searchNodeClass: 'string',
      searchNodeCount: 'number',
      searchNodeStorage: 'number',
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


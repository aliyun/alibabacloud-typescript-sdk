// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceSpecRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically align the primary node to the primary zone for a multi-zone instance after operations such as configuration changes. If you choose not to align the node, one primary/secondary switchover (transient disconnection) is avoided. Default value: true (aligned).
   */
  alignPrimaryZone?: boolean;
  /**
   * @remarks
   * Specifies whether to enable automatic payment for the instance. Valid values:
   * - **true**: enables automatic payment. This is the default value. Make sure that your account has sufficient balance.
   * <props="china">- **false**: disables automatic payment. You must manually pay for the order in the console. Log on to the ApsaraDB for MongoDB console. In the upper-right corner of the page, choose **Expenses** > **Expenses and Costs**. In the left-side navigation pane, choose **Orders** > **My Orders**. On the **Orders** tab, find the order and complete the payment.
   * <props="intl">- **false**: disables automatic payment. You must manually pay for the order in the console. Log on to the ApsaraDB for MongoDB console. In the upper-right corner of the page, choose **Expenses** > **Expenses and Costs**. In the left-side navigation pane, click **Order Management**. On the **Orders** page, find the order and complete the payment.
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
   * - **default** or **null**: uses a coupon. This is the default value.
   * - **youhuiquan_promotion_option_id_for_blank**: does not use a coupon.
   * 
   * @example
   * default
   */
  couponNo?: string;
  /**
   * @remarks
   * The instance type. <props="intl"><ph>For more information, see [Instance types](https://help.aliyun.com/document_detail/57141.html). You can also call the [DescribeAvailableResource](https://help.aliyun.com/document_detail/149719.html) operation to query instance types.</ph>
   * <props="china">
   * - For standalone instances and replica set instances, this parameter specifies the instance type. For more information, see [Instance types](https://help.aliyun.com/document_detail/57141.html). You can also call the [DescribeAvailableResource](https://help.aliyun.com/document_detail/149719.html) operation to query the instance types of standalone instances and replica set instances.
   * - For serverless instances, this parameter specifies the compute specifications of the instance. Valid values: 100 to 8000.
   * 
   * 
   * > You must specify at least one of the **DBInstanceClass** and **DBInstanceStorage** parameters.
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
   * Instance storage space of the instance. <props="intl"><ph>Valid values: 10 to 3000. Unit: GB. The step size is 10 GB. The valid values are subject to the instance type. For more information, see [Instance types](https://help.aliyun.com/document_detail/57141.html).</ph>
   * 
   * <props="china">
   * - For standalone instances and replica set instances, valid values are 10 to 3000. Unit: GB. The step size is 10 GB. The valid values are subject to the instance type. For more information, see [Instance types](https://help.aliyun.com/document_detail/57141.html).
   * - For serverless instances, valid values are 1 to 100. Unit: GB. The step size is 1 GB.
   * 
   * 
   * > - You must specify at least one of the **DBInstanceStorage** and **DBInstanceClass** parameters.
   * > - You cannot downgrade instance storage space.
   * 
   * @example
   * 50
   */
  DBInstanceStorage?: string;
  /**
   * @remarks
   * The time when the configuration change takes effect. Valid values:
   * - **Immediately**: takes effect immediately. This is the default value.
   * - **MaintainTime**: takes effect during the maintenance window of the instance.
   * 
   * @example
   * Immediately
   */
  effectiveTime?: string;
  /**
   * @remarks
   * The additional parameter. Valid values:
   * 
   * - **async**: returns the result after the configuration change order is created.
   * - **sync**: returns the result when the configuration change is delivered after the order is created.
   * 
   * @example
   * async
   */
  extraParam?: string;
  /**
   * @remarks
   * The type of configuration change. Valid values:
   * - **UPGRADE**: upgrades the configurations. This is the default value.
   * - **DOWNGRADE**: downgrades the configurations.
   * 
   * > You can specify this parameter only when the instance uses the subscription billing method.
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
   * If the instance is connected only over the **classic network** and a **VPC**, you must enable Internet access or release the classic network before you can change the **number of read-only nodes**.
   * > You can log on to the ApsaraDB for MongoDB console and view the enabled network types on the **Database Connections** page.
   * 
   * @example
   * 1
   */
  readonlyReplicas?: string;
  /**
   * @remarks
   * The number of nodes in the instance. Default value: 3.
   * - For a replica set instance, valid values are **3**, **5**, and **7**.
   * - For a standalone instance, the value is fixed to **1**.
   * - For a replica set instance that uses shared storage (supported only on the Alibaba Cloud China site), the value is fixed to **2**.
   * 
   * > You do not need to specify this parameter for a serverless instance (supported only on the Alibaba Cloud China site).
   * 
   * @example
   * 3
   */
  replicationFactor?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The specifications of the search node for the configuration change.
   * 
   * @example
   * mdb.shard.2x.xlarge.d
   */
  searchNodeClass?: string;
  /**
   * @remarks
   * The number of search nodes for the configuration change.
   * 
   * @example
   * 2
   */
  searchNodeCount?: number;
  /**
   * @remarks
   * The storage capacity of the search node for the configuration change.
   * 
   * @example
   * 20
   */
  searchNodeStorage?: number;
  /**
   * @remarks
   * The destination zone for the hidden node when you cloud disk instance across zones and change its configurations at the same time.
   * >Notice: This parameter is supported only for instances that use cloud disks.</notice>
   * >Notice: The value of this parameter cannot be the same as the value of the TargetZoneId or TargetSecondaryZoneId parameter.</notice>
   * 
   * > 
   * > - You must specify this parameter only when you cloud disk instance across zones and change its configurations at the same time.
   * > - This parameter is available only for multi-zone migration.
   * > - The destination zone and the current zone of the instance must be in the same region.
   * > - You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query zone IDs.
   * 
   * @example
   * cn-hangzhou-i
   */
  targetHiddenZoneId?: string;
  /**
   * @remarks
   * The destination zone for the secondary node when you cloud disk instance across zones and change its configurations at the same time.
   * >Notice: This parameter is supported only for instances that use cloud disks.</notice>
   * >Notice: The value of this parameter cannot be the same as the value of the TargetZoneId or TargetHiddenZoneId parameter.</notice>
   * > 
   * > - You must specify this parameter only when you cloud disk instance across zones and change its configurations at the same time.
   * > - This parameter is available only for multi-zone migration.
   * > - The destination zone and the current zone of the instance must be in the same region.
   * > - You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query zone IDs.
   * 
   * @example
   * cn-hangzhou-h
   */
  targetSecondaryZoneId?: string;
  /**
   * @remarks
   * The ID of the destination vSwitch when you cloud disk instance across zones and change its configurations at the same time.
   * >Notice: This parameter is supported only for instances that use cloud disks.</notice>
   * > 
   * > - You must specify this parameter only when you cloud disk instance across zones and change its configurations at the same time.
   * 
   * @example
   * vsw-bp1buy0h9myt5i9e7****
   */
  targetVswitchId?: string;
  /**
   * @remarks
   * The destination zone for instance migration when you migrate the instance across zones and change its configurations at the same time.
   * >Notice: This parameter is supported only for cloud disk instances.</notice>
   * >Notice: The value of this parameter cannot be the same as the value of the TargetSecondaryZoneId or TargetHiddenZoneId parameter.</notice>
   * > - You must specify this parameter only when you migrate the instance across zones and change its configurations at the same time.
   * > - The destination zone and the current zone of the instance must be in the same region.
   * > - You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query zone IDs.
   * 
   * @example
   * cn-hangzhou-j
   */
  targetZoneId?: string;
  static names(): { [key: string]: string } {
    return {
      alignPrimaryZone: 'AlignPrimaryZone',
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
      alignPrimaryZone: 'boolean',
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


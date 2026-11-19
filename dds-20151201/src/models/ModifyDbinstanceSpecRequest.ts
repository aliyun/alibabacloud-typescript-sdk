// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDBInstanceSpecRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically align the primary node to the primary zone after operations such as configuration changes for a multi-zone instance. If you choose not to align the node, one primary/secondary switchover (transient disconnection) is avoided. Default value: true, which indicates that the node is aligned.
   */
  alignPrimaryZone?: boolean;
  /**
   * @remarks
   * Specifies whether to enable automatic payment for the instance. Valid values:
   * - **true**: enables automatic payment. This is the default value. Make sure that your account has sufficient balance.
   * <props="china">- **false**: disables automatic payment. You can manually pay for the order in the ApsaraDB for MongoDB console. Log on to the console, choose **Expenses** > **Expenses and Costs** in the upper-right corner, choose **Purchase Orders** > **My Orders** in the left-side navigation pane, and then find the target order on the **Product Orders** tab to complete the payment.
   * <props="intl">- **false**: disables automatic payment. You can manually pay for the order in the ApsaraDB for MongoDB console. Log on to the console, choose **Expenses** > **Expenses and Costs** in the upper-right corner, click **Order Management** in the left-side navigation pane, and then find the target order on the **Product Orders** page to complete the payment.
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
   * The client token that is used to ensure the idempotence of the request and prevent duplicate submissions. You can generate the value of this parameter on the client side. The value must be unique across different requests and can be up to 64 ASCII characters in length. The value cannot contain non-ASCII characters.
   * 
   * @example
   * qwertyui1234567
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
   * The instance storage. <props="intl"><ph>Valid values: 10 to 3000. Unit: GB. Step size: 10 GB. The valid values are subject to the instance type. For details, see [Instance types](https://help.aliyun.com/document_detail/57141.html).</ph>
   * 
   * <props="china">
   * - For standalone instances and replica set instances, valid values are 10 to 3000. Unit: GB. Step size: 10 GB. The valid values are subject to the instance type. For details, see [Instance types](https://help.aliyun.com/document_detail/57141.html).
   * - For serverless instances, valid values are 1 to 100. Unit: GB. Step size: 1 GB.
   * 
   * 
   * > - You must specify at least one of this parameter and the **DBInstanceClass** parameter.
   * > - You cannot decrease the quota of storage space.
   * 
   * @example
   * 50
   */
  DBInstanceStorage?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run on the request. Valid values:
   * true: performs a dry run without calling the operation. The system checks the request parameters, request format, business limits, and inventory. If the request fails the dry run, the corresponding error is returned. If the request passes the dry run, the DryRunOperation error code is returned.
   * false: sends the normal request and directly performs the operation after the request passes the check. This is the default value.
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The effective period of the configuration change. Valid values:
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
   * - **sync**: returns the result when the configuration change is delivered to the instance after the order is created.
   * 
   * @example
   * async
   */
  extraParam?: string;
  /**
   * @remarks
   * The type of the configuration change. Valid values:
   * - **UPGRADE**: upgrades the configurations. This is the default value.
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
   * The number of read-only nodes. Valid values: **0** to **5**.
   * 
   * If the network type of the instance includes only the **classic network** and **VPC**, you must enable Internet access or release the classic network before you can change the **number of read-only nodes**.
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
   * - For a replica set instance that uses shared storage (supported only on the China site), the value is fixed to **2**.
   * 
   * > You do not need to specify this parameter for a serverless instance (supported only on the China site).
   * 
   * @example
   * 3
   */
  replicationFactor?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The node specifications of the search node for the configuration change.
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
   * > - You need to specify this parameter only when you cloud disk instance across zones and change its configurations at the same time.
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
   * > - You need to specify this parameter only when you cloud disk instance across zones and change its configurations at the same time.
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
   * > - You need to specify this parameter only when you cloud disk instance across zones and change its configurations at the same time.
   * 
   * @example
   * vsw-bp1buy0h9myt5i9e7****
   */
  targetVswitchId?: string;
  /**
   * @remarks
   * The destination active zone for instance migration during a configuration change across zones.
   * >Notice: This parameter is supported only for cloud disk instances.</notice>
   * >Notice: The value of this parameter cannot be the same as the value of the TargetSecondaryZoneId or TargetHiddenZoneId parameter.</notice>
   * > - You need to specify this parameter only during a configuration change across zones.
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
      clientToken: 'ClientToken',
      couponNo: 'CouponNo',
      DBInstanceClass: 'DBInstanceClass',
      DBInstanceId: 'DBInstanceId',
      DBInstanceStorage: 'DBInstanceStorage',
      dryRun: 'DryRun',
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
      clientToken: 'string',
      couponNo: 'string',
      DBInstanceClass: 'string',
      DBInstanceId: 'string',
      DBInstanceStorage: 'string',
      dryRun: 'boolean',
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


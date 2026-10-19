// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceSpecRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * * **true**: Automatic payment is enabled. This is the default value.
   * * **false**: Manual payment is enabled. If this parameter is set to **false**, you must manually renew the instance in the console before the instance expires. For more information, refer to [Manual renewal](https://help.aliyun.com/document_detail/26352.html).
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The activity ID and business information.
   * 
   * @example
   * 000000001
   */
  businessInfo?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that it is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * The coupon code. Default value: `youhuiquan_promotion_option_id_for_blank`.
   * 
   * @example
   * youhuiquan_promotion_option_id_for_blank
   */
  couponNo?: string;
  /**
   * @remarks
   * The time when the modification takes effect. Valid values:
   * * **Immediately**: The modification takes effect immediately. This is the default value.
   * * **MaintainTime**: The modification takes effect during the maintenance window of the instance. You can call the [ModifyInstanceMaintainTime](https://help.aliyun.com/document_detail/473775.html) operation to modify the maintenance window.
   * 
   * @example
   * Immediately
   */
  effectiveTime?: string;
  /**
   * @remarks
   * Specifies whether to enable forced transmission. Valid values:
   * - **false** (default): Before the specification change, the system checks the current minor engine version of the instance. If the minor engine version is too low, an error is reported. You must upgrade the minor engine version and retry.
   * - **true**: The check is skipped, and the system directly executes the specification change.
   * 
   * @example
   * false
   */
  forceTrans?: boolean;
  /**
   * @remarks
   * Specifies whether to forcibly modify the specifications. Valid values:
   * * **false**: No.
   * * **true**: Yes. This is the default value.
   * 
   * @example
   * true
   */
  forceUpgrade?: boolean;
  /**
   * @remarks
   * The instance type code after the modification. You can call the [DescribeAvailableResource](https://help.aliyun.com/document_detail/473765.html) operation to query the instance types available for modification in the zone to which the instance belongs.
   * 
   * > For more information about instance types, refer to [Instance type overview](https://help.aliyun.com/document_detail/26350.html).
   * 
   * @example
   * redis.master.small.default
   */
  instanceClass?: string;
  /**
   * @remarks
   * The instance ID. You can call the [DescribeInstances](https://help.aliyun.com/document_detail/473778.html) operation to obtain the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The major engine version to which you want to upgrade a classic instance. Valid values: **2.8**, **4.0**, and **5.0**.
   * > When you upgrade the major engine version, the **InstanceClass** parameter is required. This indicates that this operation only supports upgrading the major engine version when you update the instance specifications. If you only need to upgrade the major engine version, call the [ModifyInstanceMajorVersion](https://help.aliyun.com/document_detail/473776.html) operation.
   * 
   * @example
   * 5.0
   */
  majorVersion?: string;
  /**
   * @remarks
   * The node type. Valid values:
   * * **MASTER_SLAVE**: high-availability (dual-replica)
   * * **STAND_ALONE**: single-replica
   * * **double**: dual-replica
   * * **single**: single-replica
   * > Select **MASTER_SLAVE** or **STAND_ALONE** for cloud-native instances, and select **double** or **single** for classic instances.
   * 
   * @example
   * MASTER_SLAVE
   */
  nodeType?: string;
  /**
   * @remarks
   * The modification type. This parameter is required when you modify the specifications of a subscription instance. Valid values:
   * 
   * * **UPGRADE**: Upgrades the configurations. This is the default value.
   * * **DOWNGRADE**: Downgrades the configurations.
   * 
   * > * When you downgrade the configurations of a subscription instance, you must set this parameter to **DOWNGRADE**.
   * > * If the price of the target instance type is higher than that of the current instance type, the configurations are upgraded. Otherwise, the configurations are downgraded. For example, the price of the 8 GB read/write splitting edition (5 read-only nodes) is higher than that of the 16 GB cluster edition. Changing the instance type from the latter to the former is considered an upgrade.
   * 
   * @example
   * DOWNGRADE
   */
  orderType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of read-only nodes in the primary zone. This parameter applies only when you create a cloud-native read/write splitting instance.
   * * If the instance uses the standard architecture, valid values are 0 to 9. A value of 0 indicates the shutdown of read/write splitting and an instance switchover to the standard architecture.
   * * If the instance uses the cluster architecture, valid values are 1 to 4, which indicates the number of read-only nodes per shard.
   * > If you create a multi-zone instance, you can use this parameter and the SlaveReadOnlyCount parameter to specify the number of read-only nodes in the primary and secondary zones.
   * > * If the instance uses the standard architecture, the sum of this parameter and SlaveReadOnlyCount cannot be greater than 9.
   * > * If the instance uses the cluster architecture, the sum of this parameter and SlaveReadOnlyCount cannot be greater than 4.
   * 
   * @example
   * 5
   */
  readOnlyCount?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/473763.html) operation to query the region ID. Use this parameter to specify the region of the instance that you want to modify.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The number of secondary nodes in the primary zone. This parameter applies only to cloud-native multi-replica cluster instances. You can use this parameter to specify a custom number of secondary nodes. Valid values: 1 to 4.
   * 
   * > If the instance is deployed across multiple zones, you can use this parameter and the SlaveReplicaCount parameter to specify the number of secondary nodes in the primary and secondary zones. The sum of this parameter and the SlaveReplicaCount parameter cannot exceed 4.
   * 
   * @example
   * 1
   */
  replicaCount?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the secondary zone. This parameter is required when you modify the specifications of a single-zone instance and migrate it to multiple zones. You can call the [DescribeZones](https://help.aliyun.com/document_detail/473764.html) operation to query the zone ID.
   * > The value of this parameter cannot be the same as the value of the ZoneId parameter, and you cannot specify the ID of a multi-zone deployment.
   * 
   * @example
   * cn-hangzhou-h
   */
  secondaryZoneId?: string;
  securityToken?: string;
  /**
   * @remarks
   * The number of shards. This parameter applies only to cloud-native cluster instances. You can use this parameter to specify a custom number of shards.
   * 
   * > 
   * > - To change a cloud-native cluster instance to a standard instance, you must explicitly set ShardCount to 1 and specify a standard instance type.
   * > - To change a cloud-native standard instance to a cluster instance, you must explicitly set ShardCount to a value greater than 1 and specify a cluster instance type.
   * 
   * @example
   * 8
   */
  shardCount?: number;
  /**
   * @remarks
   * The number of read-only nodes in the secondary zone.
   * 
   * @example
   * 2
   */
  slaveReadOnlyCount?: number;
  /**
   * @remarks
   * The number of secondary nodes in the secondary zone.
   * 
   * @example
   * 1
   */
  slaveReplicaCount?: number;
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
   * The storage capacity of the disk instance. The value range varies based on the instance type. For more information, refer to [Disk instance types](https://help.aliyun.com/document_detail/2527111.html).
   * > This parameter is required only when **InstanceType** is set to **tair_essd** and you create a Tair ESSD instance. When you create a Tair SSD instance, the capacity field is defined as different fixed values based on different instance types, and you do not need to specify this field.
   * 
   * @example
   * 60
   */
  storage?: number;
  /**
   * @remarks
   * The storage type. Valid values: **essd_pl1**, **essd_pl2**, and **essd_pl3**.
   * > This parameter is required only when **InstanceType** is set to **tair_essd** and the instance is a Tair ESSD instance.
   * 
   * @example
   * essd_pl1
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      autoPay: 'AutoPay',
      businessInfo: 'BusinessInfo',
      clientToken: 'ClientToken',
      couponNo: 'CouponNo',
      effectiveTime: 'EffectiveTime',
      forceTrans: 'ForceTrans',
      forceUpgrade: 'ForceUpgrade',
      instanceClass: 'InstanceClass',
      instanceId: 'InstanceId',
      majorVersion: 'MajorVersion',
      nodeType: 'NodeType',
      orderType: 'OrderType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      readOnlyCount: 'ReadOnlyCount',
      regionId: 'RegionId',
      replicaCount: 'ReplicaCount',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      secondaryZoneId: 'SecondaryZoneId',
      securityToken: 'SecurityToken',
      shardCount: 'ShardCount',
      slaveReadOnlyCount: 'SlaveReadOnlyCount',
      slaveReplicaCount: 'SlaveReplicaCount',
      sourceBiz: 'SourceBiz',
      storage: 'Storage',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPay: 'boolean',
      businessInfo: 'string',
      clientToken: 'string',
      couponNo: 'string',
      effectiveTime: 'string',
      forceTrans: 'boolean',
      forceUpgrade: 'boolean',
      instanceClass: 'string',
      instanceId: 'string',
      majorVersion: 'string',
      nodeType: 'string',
      orderType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      readOnlyCount: 'number',
      regionId: 'string',
      replicaCount: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      secondaryZoneId: 'string',
      securityToken: 'string',
      shardCount: 'number',
      slaveReadOnlyCount: 'number',
      slaveReplicaCount: 'number',
      sourceBiz: 'string',
      storage: 'number',
      storageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


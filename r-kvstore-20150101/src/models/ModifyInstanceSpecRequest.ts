// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceSpecRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * * **true**: Automatic payment is enabled. This is the default value.
   * * **false**: Automatic payment is disabled. If you set this parameter to **false**, you must manually renew the instance before the instance expires in the console. For details, see [Manual renewal](https://help.aliyun.com/document_detail/26352.html).
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
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
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
   * The time when the specification change takes effect. Valid values:
   * * **Immediately**: The specification change takes effect immediately. This is the default value.
   * * **MaintainTime**: The specification change takes effect during the maintenance window of the instance. You can call [ModifyInstanceMaintainTime](https://help.aliyun.com/document_detail/473775.html) to modify the maintenance window.
   * 
   * @example
   * Immediately
   */
  effectiveTime?: string;
  /**
   * @remarks
   * Specifies whether to enable forced transmission. Valid values:
   * - **false** (default): Before the specification change, the system checks the current minor engine version of the instance. If the minor engine version is too old, an error is returned. You must upgrade the minor engine version and retry.
   * - **true**: Skips the check and directly executes the specification change operation.
   * 
   * @example
   * false
   */
  forceTrans?: boolean;
  /**
   * @remarks
   * Specifies whether to forcibly change the specifications. Valid values:
   * * **false**: does not forcibly change the specifications.
   * * **true**: forcibly changes the specifications. This is the default value.
   * 
   * @example
   * true
   */
  forceUpgrade?: boolean;
  /**
   * @remarks
   * The new instance type. You can call [DescribeAvailableResource](https://help.aliyun.com/document_detail/473765.html) to query the instance types available for specification changes in the zone where the instance resides.
   * 
   * > For more information about instance types, see [Instance type navigation](https://help.aliyun.com/document_detail/26350.html).
   * 
   * @example
   * redis.master.small.default
   */
  instanceClass?: string;
  /**
   * @remarks
   * The instance ID. You can call [DescribeInstances](https://help.aliyun.com/document_detail/473778.html) to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The major engine version for upgrading a classic instance. Valid values: **2.8**, **4.0**, and **5.0**.
   * > When you upgrade the version, the **InstanceClass** parameter is required. This indicates that this operation supports version upgrades only when the instance specifications are also changed. To upgrade only the instance version, call [ModifyInstanceMajorVersion](https://help.aliyun.com/document_detail/473776.html).
   * 
   * @example
   * 5.0
   */
  majorVersion?: string;
  /**
   * @remarks
   * The node type. Valid values:
   * * **MASTER_SLAVE**: high availability (dual-replica)
   * * **STAND_ALONE**: single replica
   * * **double**: dual-replica
   * * **single**: single replica
   * > For cloud-native instances, select **MASTER_SLAVE** or **STAND_ALONE**. For classic instances, select **double** or **single**.
   * 
   * @example
   * MASTER_SLAVE
   */
  nodeType?: string;
  /**
   * @remarks
   * The type of specification change. This parameter is required when you change the specifications of a subscription instance. Valid values:
   * 
   * * **UPGRADE**: Upgrade. This is the default value.
   * * **DOWNGRADE**: Downgrade.
   * 
   * > * You must set this parameter to **DOWNGRADE** when you downgrade a subscription instance.
   * > * If the price of the target instance type is higher than that of the current instance type, the change is an upgrade. Otherwise, the change is a downgrade. For example, the price of the read/write splitting 8 GB edition (5 read-only nodes) is higher than that of the 16 GB cluster edition. Changing from the latter to the former is an upgrade.
   * 
   * @example
   * DOWNGRADE
   */
  orderType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of read-only nodes in the primary zone. This parameter is applicable only to cloud-native read/write splitting instances.
   * * For standard architecture instances, valid values are 0 to 9. A value of 0 indicates that read/write splitting is shutdown and the instance is switched to the standard architecture.
   * * For cluster architecture instances, valid values are 1 to 4, which specifies the number of read-only nodes per data shard.
   * > For multi-zone instances, you can use this parameter together with the SlaveReadOnlyCount parameter to specify the number of read-only nodes in the primary and secondary zones.
   * > * For standard architecture instances, the sum of this parameter and SlaveReadOnlyCount cannot exceed 9.
   * > * For cluster architecture instances, the sum of this parameter and SlaveReadOnlyCount cannot exceed 4.
   * 
   * @example
   * 5
   */
  readOnlyCount?: number;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/473763.html) to query available regions. Use this parameter to specify the region of the instance whose specifications you want to change.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The number of replica nodes in the primary zone. This parameter is applicable only to cloud-native cluster multi-replica instances. You can use this parameter to specify a custom number of replica nodes. Valid values: 1 to 4.
   * 
   * > For multi-zone instances, you can use this parameter together with the SlaveReplicaCount parameter to specify the number of replica nodes in the primary and secondary zones. The sum of this parameter and the SlaveReplicaCount parameter cannot exceed 4.
   * 
   * @example
   * 1
   */
  replicaCount?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The secondary zone ID. This parameter is required when you change the specifications of a single-zone instance and migrate it to a multi-zone deployment. You can call [DescribeZones](https://help.aliyun.com/document_detail/473764.html) to query available zones.
   * > The value of this parameter must be different from the value of the ZoneId parameter. Do not set this parameter to the ID of a multi-zone.
   * 
   * @example
   * cn-hangzhou-h
   */
  secondaryZoneId?: string;
  securityToken?: string;
  /**
   * @remarks
   * The number of shards. This parameter is applicable only to cloud-native cluster instances. You can use this parameter to specify a custom number of shards.
   * 
   * > 
   * > - To change a cloud-native cluster instance to a standard architecture, set ShardCount to 1 and set the instance type to a standard instance type.
   * > - To change a cloud-native standard instance to a cluster architecture, set ShardCount to a value greater than 1 and set the instance type to a cluster instance type.
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
   * The number of replica nodes in the secondary zone.
   * 
   * @example
   * 1
   */
  slaveReplicaCount?: number;
  /**
   * @remarks
   * The source of the request. This parameter is used only for internal maintenance and does not need to be specified.
   * 
   * @example
   * SDK
   */
  sourceBiz?: string;
  /**
   * @remarks
   * The storage capacity of a cloud disk instance. The valid values vary based on the instance type. For more information, see [Cloud disk-based instance types](https://help.aliyun.com/document_detail/2527111.html).
   * > This parameter is required only when **InstanceType** is set to **tair_essd** and you are creating a Tair ESSD-based cloud disk instance. For Tair SSD-based cloud disk instances, the storage capacity is a fixed value based on the instance type, and you do not need to specify this parameter.
   * 
   * @example
   * 60
   */
  storage?: number;
  /**
   * @remarks
   * The storage type. Valid values: **essd_pl1**, **essd_pl2**, and **essd_pl3**.
   * > This parameter is required only when **InstanceType** is set to **tair_essd** and the instance is a Tair ESSD-based cloud disk instance.
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


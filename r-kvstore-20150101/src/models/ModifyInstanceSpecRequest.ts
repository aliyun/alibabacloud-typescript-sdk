// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceSpecRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable automatic payment. Valid values:
   * 
   * *   **true** (default): enables automatic payment.
   * *   **false**: disables automatic payment. If you set this parameter to **false**, the instance must be manually renewed before it expires. For more information, see [Renew an instance](https://help.aliyun.com/document_detail/26352.html).
   * 
   * @example
   * true
   */
  autoPay?: boolean;
  /**
   * @remarks
   * The ID of the promotional event or the business information.
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
   * The time when you want the configurations to be changed. Valid values:
   * 
   * *   **Immediately** (default): immediately changes the configurations.
   * *   **MaintainTime**: changes the configurations within the maintenance window. You can call the [ModifyInstanceMaintainTime](https://help.aliyun.com/document_detail/473775.html) operation to change the maintenance window.
   * 
   * @example
   * Immediately
   */
  effectiveTime?: string;
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
   * Specifies whether to forcibly change the configurations. Valid values:
   * 
   * *   **false**: The system does not forcefully change the configurations.
   * *   **true** (default): The system forcefully changes the configurations.
   * 
   * @example
   * true
   */
  forceUpgrade?: boolean;
  /**
   * @remarks
   * The new instance type. You can call the [DescribeAvailableResource](https://help.aliyun.com/document_detail/473765.html) operation to query the instance types available for configuration change within the zone to which the instance belongs.
   * 
   * >  For more information about the instance types, see [Overview](https://help.aliyun.com/document_detail/26350.html).
   * 
   * @example
   * redis.master.small.default
   */
  instanceClass?: string;
  /**
   * @remarks
   * The instance ID. You can call the [DescribeInstances](https://help.aliyun.com/document_detail/473778.html) operation to query the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The major version of the classic instance that you want to upgrade. Valid values: **2.8**, **4.0**, and **5.0**.
   * 
   * >  The **InstanceClass** parameter is required when you upgrade the instance version. This parameter indicates that you can upgrade the instance version only when you update the instance specifications. If you only need to upgrade the instance version, call the [ModifyInstanceMajorVersion](https://help.aliyun.com/document_detail/473776.html) operation.
   * 
   * @example
   * 5.0
   */
  majorVersion?: string;
  /**
   * @remarks
   * The type of the node. Valid values:
   * 
   * *   **MASTER_SLAVE**: high availability (master-replica)
   * *   **STAND_ALONE**: standalone
   * *   **double**: master-replica
   * *   **single**: standalone
   * 
   * >  To create a cloud-native instance, set this parameter to **MASTER_SLAVE** or **STAND_ALONE**. To create a classic instance, set this parameter to **double** or **single**.
   * 
   * @example
   * MASTER_SLAVE
   */
  nodeType?: string;
  /**
   * @remarks
   * The change type. This parameter is required when you change the configurations of a subscription instance. Valid values:
   * 
   * *   **UPGRADE** (default): upgrades the configurations of the subscription instance.
   * *   **DOWNGRADE**: downgrades the configurations of the subscription instance.
   * 
   * > 
   * 
   * *   To downgrade a subscription instance, you must set this parameter to **DOWNGRADE**.
   * 
   * *   If the price of an instance increases after its configurations are changed, the instance is upgraded. If the price decreases, the instance is downgraded. For example, the price of an 8 GB read/write splitting instance with five read replicas is higher than that of a 16 GB cluster instance. If you want to change a 16 GB cluster instance to an 8 GB read/write splitting instance with five read replicas, you must upgrade the instance.
   * 
   * @example
   * DOWNGRADE
   */
  orderType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of read replicas in the primary zone. Valid values: 0 to 5. This parameter applies only to the following scenarios:
   * 
   * *   If the instance is a cloud-native standard instance, you can set this parameter to a value greater than 0 to enable the read/write splitting architecture.
   * *   If the instance is a cloud-native read/write splitting instance, you can use this parameter to customize the number of read replicas. You can also set this parameter to 0 to disable the read/write splitting architecture and switch the instance to the standard architecture.
   * 
   * @example
   * 5
   */
  readOnlyCount?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/473763.html) operation to query the most recent region list.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The number of replica nodes in the primary zone. This parameter is applicable only to cloud-native multi-replica cluster instances. Valid values: 1 to 4.
   * 
   * > 
   * 
   * *   The sum of the values of this parameter and the SlaveReplicaCount parameter cannot be greater than 4.
   * 
   * *   You can specify either ReplicaCount or ReadOnlyCount.
   * 
   * *   A master-replica instance cannot contain multiple replica nodes.
   * 
   * @example
   * 1
   */
  replicaCount?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The number of shards. This parameter is applicable only to cloud-native cluster instances.
   * 
   * > 
   * 
   * *   If you want to change a cloud-native cluster instance to a standard instance, you must explicitly set the ShardCount parameter to 1 and specify the specifications of the master-replica instance.
   * 
   * *   To change a cloud-native standard instance to a cluster instance, you must explicitly set the ShardCount parameter to a value greater than 1 and specify the specifications of the cluster instance.
   * 
   * @example
   * 8
   */
  shardCount?: number;
  /**
   * @remarks
   * The number of read replicas in the secondary zone when you create a read/write splitting instance that is deployed across multiple zones. Valid values: 1 to 9. The sum of the values of this parameter and the ReadOnlyCount parameter cannot be greater than 9.
   * 
   * @example
   * 2
   */
  slaveReadOnlyCount?: number;
  /**
   * @remarks
   * The number of replica nodes in the secondary zone when you create a cloud-native multi-replica cluster instance that is deployed across multiple zones. The sum of the values of this parameter and the ReplicaCount parameter cannot be greater than 4.
   * 
   * >  When you create a cloud-native multi-replica cluster instance that is deployed across multiple zones, you must specify both SlaveReplicaCount and SecondaryZoneId.
   * 
   * @example
   * 1
   */
  slaveReplicaCount?: number;
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
   * The storage capacity of the ESSD/SSD-based instance. The valid values vary based on the instance type. For more information, see [ESSD/SSD-based instances](https://help.aliyun.com/document_detail/2527111.html).
   * 
   * >  This parameter is required only when you set the **InstanceType** parameter to **tair_essd** to create an ESSD-based instance. If you create a Tair **SSD**-based instance, the Storage parameter is automatically specified based on predefined specifications. You do not need to specify this parameter.
   * 
   * @example
   * 60
   */
  storage?: number;
  /**
   * @remarks
   * The storage type. Valid values: **essd_pl1**, **essd_pl2**, and **essd_pl3**.
   * 
   * >  This parameter is required only when you set the **InstanceType** parameter to **tair_essd** to create an ESSD-based instance.
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


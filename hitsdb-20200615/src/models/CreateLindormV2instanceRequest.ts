// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLindormV2InstanceRequestEngineListNodeGroupList extends $dara.Model {
  /**
   * @remarks
   * The number of nodes in the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * 7
   */
  nodeCount?: number;
  /**
   * @remarks
   * The disk size per node. Default unit: GB.
   * 
   * @example
   * 100
   */
  nodeDiskSize?: number;
  /**
   * @remarks
   * The cloud disk type of the node. This parameter is optional. **This parameter is used in special scenarios and is available only to whitelisted users.**
   * 
   * @example
   * cloud_essd
   */
  nodeDiskType?: string;
  /**
   * @remarks
   * The node specifications. If you select performance cloud storage or standard cloud storage, valid values are:
   * 
   * - **lindorm.c.2xlarge**: 8 vCPUs and 16 GB of memory.
   * - **lindorm.g.2xlarge**: 8 vCPUs and 32 GB of memory.
   * - **lindorm.c.4xlarge**: 16 vCPUs and 32 GB of memory.
   * - **lindorm.g.4xlarge**: 16 vCPUs and 64 GB of memory.
   * - **lindorm.c.8xlarge**: 32 vCPUs and 64 GB of memory.
   * - **lindorm.g.8xlarge**: 32 vCPUs and 128 GB of memory.
   * - **lindorm.r.2xlarge**: 8 vCPUs and 64 GB of memory.
   * - **lindorm.r.4xlarge**: 16 vCPUs and 128 GB of memory.
   * - **lindorm.r.8xlarge**: 32 vCPUs and 256 GB of memory.
   * 
   * If you select the local SSD type, valid values are:
   * 
   * - **lindorm.i4.xlarge**: 4 vCPUs and 32 GB of memory (I4).
   * - **lindorm.i4.2xlarge**: 8 vCPUs and 64 GB of memory (I4).
   * - **lindorm.i4.4xlarge**: 16 vCPUs and 128 GB of memory (I4).
   * - **lindorm.i4.8xlarge**: 32 vCPUs and 256 GB of memory (I4).
   * - **lindorm.i3.xlarge**: 4 vCPUs and 32 GB of memory (I3).
   * - **lindorm.i3.2xlarge**: 8 vCPUs and 64 GB of memory (I3).
   * - **lindorm.i3.4xlarge**: 16 vCPUs and 128 GB of memory (I3).
   * - **lindorm.i3.8xlarge**: 32 vCPUs and 256 GB of memory (I3).
   * - **lindorm.i2.xlarge**: 4 vCPUs and 32 GB of memory (I2).
   * - **lindorm.i2.2xlarge**: 8 vCPUs and 64 GB of memory (I2).
   * - **lindorm.i2.4xlarge**: 16 vCPUs and 128 GB of memory (I2).
   * - **lindorm.i2.8xlarge**: 32 vCPUs and 256 GB of memory (I2).
   * 
   * If you select the big data type, valid values are:
   * 
   * - **lindorm.sd3c.3xlarge**: 14 vCPUs and 56 GB of memory (D3C PRO).
   * - **lindorm.sd3c.7xlarge**: 28 vCPUs and 112 GB of memory (D3C PRO).
   * - **lindorm.sd3c.14xlarge**: 56 vCPUs and 224 GB of memory (D3C PRO).
   * - **lindorm.d2c.6xlarge**: 24 vCPUs and 88 GB of memory (D2C).
   * - **lindorm.d2c.12xlarge**: 48 vCPUs and 176 GB of memory (D2C).
   * - **lindorm.d2c.24xlarge**: 96 vCPUs and 352 GB of memory (D2C).
   * - **lindorm.d2s.5xlarge**: 20 vCPUs and 88 GB of memory (D2S).
   * - **lindorm.d2s.10xlarge**: 40 vCPUs and 176 GB of memory (D2S).
   * - **lindorm.d1.2xlarge**: 8 vCPUs and 32 GB of memory (D1NE).
   * - **lindorm.d1.4xlarge**: 16 vCPUs and 64 GB of memory (D1NE).
   * - **lindorm.d1.6xlarge**: 24 vCPUs and 96 GB of memory (D1NE).
   * 
   * This parameter is required.
   * 
   * @example
   * lindorm.g.2xlarge
   */
  nodeSpec?: string;
  /**
   * @remarks
   * The name of the node group. This parameter is optional.
   * 
   * @example
   * group_name_01
   */
  resourceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      nodeCount: 'NodeCount',
      nodeDiskSize: 'NodeDiskSize',
      nodeDiskType: 'NodeDiskType',
      nodeSpec: 'NodeSpec',
      resourceGroupName: 'ResourceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeCount: 'number',
      nodeDiskSize: 'number',
      nodeDiskType: 'string',
      nodeSpec: 'string',
      resourceGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLindormV2InstanceRequestEngineList extends $dara.Model {
  /**
   * @remarks
   * The engine type. Valid values:
   * 
   * - **TABLE**: LindormTable.
   * - **TSDB**: LindormTSDB.
   * - **LSEARCH**: Search engine.
   * - **LTS**: Lindorm Tunnel Service.
   * - **LVECTOR**: Vector engine.
   * - **LCOLUMN**: Column store engine.
   * - **LAI**: AI engine.
   * 
   * This parameter is required.
   * 
   * @example
   * TABLE
   */
  engineType?: string;
  /**
   * @remarks
   * The list of engine nodes.
   */
  nodeGroupList?: CreateLindormV2InstanceRequestEngineListNodeGroupList[];
  static names(): { [key: string]: string } {
    return {
      engineType: 'EngineType',
      nodeGroupList: 'NodeGroupList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engineType: 'string',
      nodeGroupList: { 'type': 'array', 'itemType': CreateLindormV2InstanceRequestEngineListNodeGroupList },
    };
  }

  validate() {
    if(Array.isArray(this.nodeGroupList)) {
      $dara.Model.validateArray(this.nodeGroupList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLindormV2InstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The vSwitch ID of the arbiter zone for a multi-zone instance. The vSwitch must be deployed in the zone specified by **ArbiterZoneId**. **This parameter is required if you want to create a multi-zone instance.**
   * 
   * @example
   * vsw-uf6664pqjawb87k36****
   */
  arbiterVSwitchId?: string;
  /**
   * @remarks
   * The zone ID of the arbiter zone for a multi-zone instance. **This parameter is required if you want to create a multi-zone instance.**
   * 
   * @example
   * cn-shanghai-g
   */
  arbiterZoneId?: string;
  /**
   * @remarks
   * The deployment architecture. Valid values:
   * 
   * - **1.0**: Single-zone.
   * - **2.0**: Multi-zone Basic Edition.
   * - **3.0**: Multi-zone High-availability Edition.
   * 
   * @example
   * 2.0
   */
  archVersion?: string;
  /**
   * @remarks
   * The auto-renewal duration. Unit: months. Valid values: **1** to **12**.
   * 
   * > This parameter takes effect only when **AutoRenewal** is set to **true**.
   * 
   * @example
   * 1
   */
  autoRenewDuration?: string;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the instance. Valid values:
   * 
   * - **true**: Enables auto-renewal.
   * - **false**: Disables auto-renewal.
   * 
   * Default value: false.
   * 
   * > This parameter is valid only when **PayType** is set to **PREPAY** (subscription).
   * 
   * @example
   * false
   */
  autoRenewal?: boolean;
  /**
   * @remarks
   * The size of the capacity storage. Unit: GB.
   * 
   * @example
   * 10000
   */
  capacityStorageSize?: number;
  /**
   * @remarks
   * The size of the cloud storage space. Unit: GB.
   * 
   * @example
   * 320
   */
  cloudStorageSize?: number;
  /**
   * @remarks
   * The storage type. If you select the **big data** or **local SSD** type, you can leave this parameter empty. Valid values:
   * 
   * - **PerformanceStorage**: Performance cloud storage.
   * - **StandardStorage**: Standard cloud storage.
   * - **CapacityStorage**: Capacity cloud storage.
   * 
   * @example
   * PerformanceStorage
   */
  cloudStorageType?: string;
  /**
   * @remarks
   * The instance mode. This parameter is optional. Valid values:
   * 
   * - **BASIC**: General mode.
   * 
   * @example
   * BASIC
   */
  clusterMode?: string;
  /**
   * @remarks
   * The cluster pattern. Valid values:
   * 
   * - **basic**: Production.
   * 
   * @example
   * basic
   */
  clusterPattern?: string;
  /**
   * @remarks
   * The subscription duration of the instance. Valid values:
   * 
   * - If **PricingCycle** is set to **Month**, the value ranges from **1** to **9**.
   * - If **PricingCycle** is set to **Year**, the value ranges from **1** to **3**.
   * 
   * > This parameter is available and required only when **PayType** is set to **PREPAY**.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * Specifies whether to enable capacity storage.
   * 
   * @example
   * false
   */
  enableCapacityStorage?: boolean;
  /**
   * @remarks
   * The list of engine information.
   * 
   * This parameter is required.
   */
  engineList?: CreateLindormV2InstanceRequestEngineList[];
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * lindorm-test
   */
  instanceAlias?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * - **PREPAY**: Subscription.
   * - **POSTPAY**: Pay-as-you-go.
   * 
   * This parameter is required.
   * 
   * @example
   * PREPAY
   */
  payType?: string;
  /**
   * @remarks
   * The billing cycle of the instance. Valid values:
   * 
   * - **Month**: Month.
   * - **Year**: Year.
   * 
   * > This parameter is available and required only when **PayType** is set to **PREPAY**.
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * The vSwitch ID of the primary zone for a multi-zone instance. The vSwitch must be deployed in the zone specified by **PrimaryZoneId**. **This parameter is required if you want to create a multi-zone instance.**
   * 
   * @example
   * vsw-uf6fdqa7c0pipnqzq****
   */
  primaryVSwitchId?: string;
  /**
   * @remarks
   * The zone ID of the primary zone for a multi-zone instance. **This parameter is required if you want to create a multi-zone instance.**
   * 
   * @example
   * cn-shanghai-e
   */
  primaryZoneId?: string;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/426062.html) operation to query the most recent region list. Use this parameter to specify the region where you want to create the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aek2i6weeb4nfii
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The vSwitch ID of the secondary zone for a multi-zone instance. The vSwitch must be deployed in the zone specified by **StandbyZoneId**. **This parameter is required if you want to create a multi-zone instance.**
   * 
   * @example
   * vsw-2zec0kcn08cgdtr6****
   */
  standbyVSwitchId?: string;
  /**
   * @remarks
   * The zone ID of the secondary zone for a multi-zone instance. **This parameter is required if you want to create a multi-zone instance.**
   * 
   * @example
   * cn-shanghai-f
   */
  standbyZoneId?: string;
  /**
   * @remarks
   * The VPC ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-wz9ydz3vg93s1ozsd****
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp1e7clcw529l773d****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai-f
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      arbiterVSwitchId: 'ArbiterVSwitchId',
      arbiterZoneId: 'ArbiterZoneId',
      archVersion: 'ArchVersion',
      autoRenewDuration: 'AutoRenewDuration',
      autoRenewal: 'AutoRenewal',
      capacityStorageSize: 'CapacityStorageSize',
      cloudStorageSize: 'CloudStorageSize',
      cloudStorageType: 'CloudStorageType',
      clusterMode: 'ClusterMode',
      clusterPattern: 'ClusterPattern',
      duration: 'Duration',
      enableCapacityStorage: 'EnableCapacityStorage',
      engineList: 'EngineList',
      instanceAlias: 'InstanceAlias',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      payType: 'PayType',
      pricingCycle: 'PricingCycle',
      primaryVSwitchId: 'PrimaryVSwitchId',
      primaryZoneId: 'PrimaryZoneId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      standbyVSwitchId: 'StandbyVSwitchId',
      standbyZoneId: 'StandbyZoneId',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arbiterVSwitchId: 'string',
      arbiterZoneId: 'string',
      archVersion: 'string',
      autoRenewDuration: 'string',
      autoRenewal: 'boolean',
      capacityStorageSize: 'number',
      cloudStorageSize: 'number',
      cloudStorageType: 'string',
      clusterMode: 'string',
      clusterPattern: 'string',
      duration: 'number',
      enableCapacityStorage: 'boolean',
      engineList: { 'type': 'array', 'itemType': CreateLindormV2InstanceRequestEngineList },
      instanceAlias: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      payType: 'string',
      pricingCycle: 'string',
      primaryVSwitchId: 'string',
      primaryZoneId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      standbyVSwitchId: 'string',
      standbyZoneId: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.engineList)) {
      $dara.Model.validateArray(this.engineList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


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
   * The disk size of a single node. The default unit is GB.
   * 
   * @example
   * 100
   */
  nodeDiskSize?: number;
  /**
   * @remarks
   * The disk type of the node. This parameter is not required. **This parameter is available only for specific scenarios. To use this parameter, you must be added to the whitelist.**
   * 
   * @example
   * cloud_essd
   */
  nodeDiskType?: string;
  /**
   * @remarks
   * The node specifications.
   * 
   * If you select performance cloud storage or standard cloud storage, set this parameter to one of the following values:
   * 
   * - **lindorm.c.2xlarge**: 8 cores, 16 GB.
   * 
   * - **lindorm.g.2xlarge**: 8 cores, 32 GB.
   * 
   * - **lindorm.c.4xlarge**: 16 cores, 32 GB.
   * 
   * - **lindorm.g.4xlarge**: 16 cores, 64 GB.
   * 
   * - **lindorm.c.8xlarge**: 32 cores, 64 GB.
   * 
   * - **lindorm.g.8xlarge**: 32 cores, 128 GB.
   * 
   * - **lindorm.r.2xlarge**: 8 cores, 64 GB.
   * 
   * - **lindorm.r.4xlarge**: 16 cores, 128 GB.
   * 
   * - **lindorm.r.8xlarge**: 32 cores, 256 GB.
   * 
   * If you select the local SSD type, set this parameter to one of the following values:
   * 
   * - **lindorm.i4.xlarge**: 4 cores, 32 GB (I4).
   * 
   * - **lindorm.i4.2xlarge**: 8 cores, 64 GB (I4).
   * 
   * - **lindorm.i4.4xlarge**: 16 cores, 128 GB (I4).
   * 
   * - **lindorm.i4.8xlarge**: 32 cores, 256 GB (I4).
   * 
   * - **lindorm.i3.xlarge**: 4 cores, 32 GB (I3).
   * 
   * - **lindorm.i3.2xlarge**: 8 cores, 64 GB (I3).
   * 
   * - **lindorm.i3.4xlarge**: 16 cores, 128 GB (I3).
   * 
   * - **lindorm.i3.8xlarge**: 32 cores, 256 GB (I3).
   * 
   * - **lindorm.i2.xlarge**: 4 cores, 32 GB (I2).
   * 
   * - **lindorm.i2.2xlarge**: 8 cores, 64 GB (I2).
   * 
   * - **lindorm.i2.4xlarge**: 16 cores, 128 GB (I2).
   * 
   * - **lindorm.i2.8xlarge**: 32 cores, 256 GB (I2).
   * 
   * If you select the big data type, set this parameter to one of the following values:
   * 
   * - **lindorm.sd3c.3xlarge**: 14 cores, 56 GB (D3C PRO).
   * 
   * - **lindorm.sd3c.7xlarge**: 28 cores, 112 GB (D3C PRO).
   * 
   * - **lindorm.sd3c.14xlarge**: 56 cores, 224 GB (D3C PRO).
   * 
   * - **lindorm.d2c.6xlarge**: 24 cores, 88 GB (D2C).
   * 
   * - **lindorm.d2c.12xlarge**: 48 cores, 176 GB (D2C).
   * 
   * - **lindorm.d2c.24xlarge**: 96 cores, 352 GB (D2C).
   * 
   * - **lindorm.d2s.5xlarge**: 20 cores, 88 GB (D2S).
   * 
   * - **lindorm.d2s.10xlarge**: 40 cores, 176 GB (D2S).
   * 
   * - **lindorm.d1.2xlarge**: 8 cores, 32 GB (D1NE).
   * 
   * - **lindorm.d1.4xlarge**: 16 cores, 64 GB (D1NE).
   * 
   * - **lindorm.d1.6xlarge**: 24 cores, 96 GB (D1NE).
   * 
   * This parameter is required.
   * 
   * @example
   * lindorm.g.2xlarge
   */
  nodeSpec?: string;
  /**
   * @remarks
   * The name of the node group. **This parameter is required.**
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
   * 
   * - **TSDB**: LindormTSDB.
   * 
   * - **LSEARCH**: search engine.
   * 
   * - **LTS**: LTS engine.
   * 
   * - **LVECTOR**: vector engine.
   * 
   * - **LCOLUMN**: column store engine.
   * 
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
   * The ID of the vSwitch in the arbiter zone for a multi-zone instance. The vSwitch must be in the zone specified by ArbiterZoneId. **This parameter is required if you want to create a multi-zone instance.**
   * 
   * @example
   * vsw-uf6664pqjawb87k36****
   */
  arbiterVSwitchId?: string;
  /**
   * @remarks
   * The ID of the arbiter zone for a multi-zone instance. **This parameter is required if you want to create a multi-zone instance.**
   * 
   * @example
   * cn-shanghai-g
   */
  arbiterZoneId?: string;
  /**
   * @remarks
   * The deployment architecture. Valid values:
   * 
   * - **1.0**: single zone.
   * 
   * - **2.0**: multi-zone Basic Edition.
   * 
   * - **3.0**: multi-zone High-availability Edition.
   * 
   * @example
   * 2.0
   */
  archVersion?: string;
  /**
   * @remarks
   * The auto-renewal duration. Unit: month.
   * 
   * Valid values: **1** to **12**.
   * 
   * > This parameter is valid only when you set **AutoRenewal** to **true**.
   * 
   * @example
   * 1
   */
  autoRenewDuration?: string;
  /**
   * @remarks
   * Specifies whether to enable auto-renewal for the instance. Valid values:
   * 
   * - **true**: Enable auto-renewal.
   * 
   * - **false**: Disable auto-renewal.
   * 
   * The default value is false.
   * 
   * > This parameter is valid only when you set **PayType** to **PREPAY**.
   * 
   * @example
   * false
   */
  autoRenewal?: boolean;
  /**
   * @remarks
   * The size of the storage-optimized storage. Unit: GB.
   * 
   * @example
   * 10000
   */
  capacityStorageSize?: number;
  /**
   * @remarks
   * The size of the cloud storage. Unit: GB.
   * 
   * @example
   * 320
   */
  cloudStorageSize?: number;
  /**
   * @remarks
   * The storage class. This parameter is not required if you select **Big Data** or **Local SSD**.
   * 
   * - **PerformanceStorage**: performance cloud storage
   * 
   * - **StandardStorage**: standard cloud storage
   * 
   * @example
   * PerformanceStorage
   */
  cloudStorageType?: string;
  /**
   * @remarks
   * The instance mode. This parameter is not required.
   * 
   * - **BASIC**: general-purpose mode
   * 
   * @example
   * BASIC
   */
  clusterMode?: string;
  /**
   * @remarks
   * The cluster type. Valid value:
   * 
   * - **basic**: production
   * 
   * @example
   * basic
   */
  clusterPattern?: string;
  /**
   * @remarks
   * The subscription duration of the instance. Valid values:
   * 
   * - If you set PricingCycle to **Month**, the valid values are **1** to **9**.
   * 
   * - If you set PricingCycle to **Year**, the valid values are **1** to **3**.
   * 
   * > This parameter is required only when you set PayType to **PREPAY**.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * Specifies whether to enable storage-optimized storage.
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
   * - **PREPAY**: subscription.
   * 
   * - **POSTPAY**: pay-as-you-go.
   * 
   * This parameter is required.
   * 
   * @example
   * PREPAY
   */
  payType?: string;
  /**
   * @remarks
   * The subscription period of the instance. Valid values:
   * 
   * - **Month**: The unit is month.
   * 
   * - **Year**: The unit is year.
   * 
   * > This parameter is required only when you set PayType to **PREPAY**.
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * The ID of the vSwitch in the primary zone for a multi-zone instance. The vSwitch must be in the zone specified by PrimaryZoneId. **This parameter is required if you want to create a multi-zone instance.**
   * 
   * @example
   * vsw-uf6fdqa7c0pipnqzq****
   */
  primaryVSwitchId?: string;
  /**
   * @remarks
   * The ID of the primary zone for a multi-zone instance. **This parameter is required if you want to create a multi-zone instance.**
   * 
   * @example
   * cn-shanghai-e
   */
  primaryZoneId?: string;
  /**
   * @remarks
   * The ID of the region where you want to create the instance. To query the available regions, call the [DescribeRegions](https://help.aliyun.com/document_detail/426062.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
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
   * The ID of the vSwitch in the secondary zone for a multi-zone instance. The vSwitch must be in the zone specified by StandbyZoneId. **This parameter is required if you want to create a multi-zone instance.**
   * 
   * @example
   * vsw-2zec0kcn08cgdtr6****
   */
  standbyVSwitchId?: string;
  /**
   * @remarks
   * The ID of the secondary zone for a multi-zone instance. **This parameter is required if you want to create a multi-zone instance.**
   * 
   * @example
   * cn-shanghai-f
   */
  standbyZoneId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) for the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-wz9ydz3vg93s1ozsd****
   */
  VPCId?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-bp1e7clcw529l773d****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the zone for the instance.
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


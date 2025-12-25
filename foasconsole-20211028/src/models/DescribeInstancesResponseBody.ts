// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesResponseBodyInstancesClusterStateClusterStageTotalStageWithWeight extends $dara.Model {
  stepIndex?: number;
  stepName?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      stepIndex: 'StepIndex',
      stepName: 'StepName',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stepIndex: 'number',
      stepName: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesClusterStateClusterStage extends $dara.Model {
  clusterId?: string;
  currentStage?: number;
  message?: string;
  status?: string;
  totalStageWithWeight?: DescribeInstancesResponseBodyInstancesClusterStateClusterStageTotalStageWithWeight[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      currentStage: 'CurrentStage',
      message: 'Message',
      status: 'Status',
      totalStageWithWeight: 'TotalStageWithWeight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      currentStage: 'number',
      message: 'string',
      status: 'string',
      totalStageWithWeight: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesClusterStateClusterStageTotalStageWithWeight },
    };
  }

  validate() {
    if(Array.isArray(this.totalStageWithWeight)) {
      $dara.Model.validateArray(this.totalStageWithWeight);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesClusterStateUserSlbDtoUserSlbListeners extends $dara.Model {
  listenersStatus?: string;
  port?: string;
  static names(): { [key: string]: string } {
    return {
      listenersStatus: 'ListenersStatus',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listenersStatus: 'string',
      port: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesClusterStateUserSlbDto extends $dara.Model {
  existSlb?: boolean;
  slbId?: string;
  slbIp?: string;
  slbStatus?: string;
  userSlbListeners?: DescribeInstancesResponseBodyInstancesClusterStateUserSlbDtoUserSlbListeners[];
  static names(): { [key: string]: string } {
    return {
      existSlb: 'ExistSlb',
      slbId: 'SlbId',
      slbIp: 'SlbIp',
      slbStatus: 'SlbStatus',
      userSlbListeners: 'UserSlbListeners',
    };
  }

  static types(): { [key: string]: any } {
    return {
      existSlb: 'boolean',
      slbId: 'string',
      slbIp: 'string',
      slbStatus: 'string',
      userSlbListeners: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesClusterStateUserSlbDtoUserSlbListeners },
    };
  }

  validate() {
    if(Array.isArray(this.userSlbListeners)) {
      $dara.Model.validateArray(this.userSlbListeners);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesClusterState extends $dara.Model {
  clusterId?: string;
  clusterStage?: DescribeInstancesResponseBodyInstancesClusterStateClusterStage;
  createTimeout?: boolean;
  status?: string;
  subStatus?: string;
  url?: string;
  userSlbDto?: DescribeInstancesResponseBodyInstancesClusterStateUserSlbDto;
  vpcCidr?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterStage: 'ClusterStage',
      createTimeout: 'CreateTimeout',
      status: 'Status',
      subStatus: 'SubStatus',
      url: 'Url',
      userSlbDto: 'UserSlbDto',
      vpcCidr: 'VpcCidr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterStage: DescribeInstancesResponseBodyInstancesClusterStateClusterStage,
      createTimeout: 'boolean',
      status: 'string',
      subStatus: 'string',
      url: 'string',
      userSlbDto: DescribeInstancesResponseBodyInstancesClusterStateUserSlbDto,
      vpcCidr: 'string',
    };
  }

  validate() {
    if(this.clusterStage && typeof (this.clusterStage as any).validate === 'function') {
      (this.clusterStage as any).validate();
    }
    if(this.userSlbDto && typeof (this.userSlbDto as any).validate === 'function') {
      (this.userSlbDto as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesClusterUsedResources extends $dara.Model {
  clusterId?: string;
  elasticUsedCpu?: number;
  elasticUsedMemory?: number;
  elasticUsedResource?: number;
  guaranteedUsedCpu?: number;
  guaranteedUsedMemory?: number;
  guaranteedUsedResource?: number;
  ha?: boolean;
  haUsedCpu?: number;
  haUsedMemory?: number;
  haUsedResource?: number;
  usedCpu?: number;
  usedMemory?: number;
  usedResource?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      elasticUsedCpu: 'ElasticUsedCpu',
      elasticUsedMemory: 'ElasticUsedMemory',
      elasticUsedResource: 'ElasticUsedResource',
      guaranteedUsedCpu: 'GuaranteedUsedCpu',
      guaranteedUsedMemory: 'GuaranteedUsedMemory',
      guaranteedUsedResource: 'GuaranteedUsedResource',
      ha: 'Ha',
      haUsedCpu: 'HaUsedCpu',
      haUsedMemory: 'HaUsedMemory',
      haUsedResource: 'HaUsedResource',
      usedCpu: 'UsedCpu',
      usedMemory: 'UsedMemory',
      usedResource: 'UsedResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      elasticUsedCpu: 'number',
      elasticUsedMemory: 'number',
      elasticUsedResource: 'number',
      guaranteedUsedCpu: 'number',
      guaranteedUsedMemory: 'number',
      guaranteedUsedResource: 'number',
      ha: 'boolean',
      haUsedCpu: 'number',
      haUsedMemory: 'number',
      haUsedResource: 'number',
      usedCpu: 'number',
      usedMemory: 'number',
      usedResource: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesClusterUsedStorage extends $dara.Model {
  clusterId?: string;
  usedStorage?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      usedStorage: 'UsedStorage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      usedStorage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesElasticResourceSpec extends $dara.Model {
  cpu?: number;
  memoryGB?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      memoryGB: 'MemoryGB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      memoryGB: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesHaResourceSpec extends $dara.Model {
  cpu?: number;
  memoryGB?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      memoryGB: 'MemoryGB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      memoryGB: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesHaVSwitchInfo extends $dara.Model {
  availableIpAddressCount?: number;
  description?: string;
  regionId?: string;
  vSwitchCidr?: string;
  vSwitchId?: string;
  vSwitchName?: string;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      availableIpAddressCount: 'AvailableIpAddressCount',
      description: 'Description',
      regionId: 'RegionId',
      vSwitchCidr: 'VSwitchCidr',
      vSwitchId: 'VSwitchId',
      vSwitchName: 'VSwitchName',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableIpAddressCount: 'number',
      description: 'string',
      regionId: 'string',
      vSwitchCidr: 'string',
      vSwitchId: 'string',
      vSwitchName: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesHostAliases extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  hostNames?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  ip?: string;
  static names(): { [key: string]: string } {
    return {
      hostNames: 'HostNames',
      ip: 'Ip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostNames: { 'type': 'array', 'itemType': 'string' },
      ip: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.hostNames)) {
      $dara.Model.validateArray(this.hostNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesOssInfo extends $dara.Model {
  accessId?: string;
  accessKey?: string;
  bucket?: string;
  bucketVersioningStatus?: string;
  endpoint?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'AccessId',
      accessKey: 'AccessKey',
      bucket: 'Bucket',
      bucketVersioningStatus: 'BucketVersioningStatus',
      endpoint: 'Endpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      accessKey: 'string',
      bucket: 'string',
      bucketVersioningStatus: 'string',
      endpoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesResourceSpec extends $dara.Model {
  /**
   * @example
   * 10
   */
  cpu?: number;
  /**
   * @example
   * 40
   */
  memoryGB?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      memoryGB: 'MemoryGB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      memoryGB: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesStorageOss extends $dara.Model {
  /**
   * @example
   * oss_flink
   */
  bucket?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesStorage extends $dara.Model {
  fullyManaged?: boolean;
  orderState?: string;
  oss?: DescribeInstancesResponseBodyInstancesStorageOss;
  supportCreateFullyManagedStorage?: boolean;
  supportMigrationProgressDetection?: boolean;
  static names(): { [key: string]: string } {
    return {
      fullyManaged: 'FullyManaged',
      orderState: 'OrderState',
      oss: 'Oss',
      supportCreateFullyManagedStorage: 'SupportCreateFullyManagedStorage',
      supportMigrationProgressDetection: 'SupportMigrationProgressDetection',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fullyManaged: 'boolean',
      orderState: 'string',
      oss: DescribeInstancesResponseBodyInstancesStorageOss,
      supportCreateFullyManagedStorage: 'boolean',
      supportMigrationProgressDetection: 'boolean',
    };
  }

  validate() {
    if(this.oss && typeof (this.oss as any).validate === 'function') {
      (this.oss as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesTags extends $dara.Model {
  /**
   * @example
   * flink
   */
  key?: string;
  /**
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesVSwitchInfo extends $dara.Model {
  availableIpAddressCount?: string;
  description?: string;
  regionId?: string;
  vSwitchCidr?: string;
  vSwitchId?: string;
  vSwitchName?: string;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      availableIpAddressCount: 'AvailableIpAddressCount',
      description: 'Description',
      regionId: 'RegionId',
      vSwitchCidr: 'VSwitchCidr',
      vSwitchId: 'VSwitchId',
      vSwitchName: 'VSwitchName',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableIpAddressCount: 'string',
      description: 'string',
      regionId: 'string',
      vSwitchCidr: 'string',
      vSwitchId: 'string',
      vSwitchName: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstancesVpcInfo extends $dara.Model {
  cidrBlock?: string;
  description?: string;
  regionId?: string;
  status?: string;
  vpcId?: string;
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      description: 'Description',
      regionId: 'RegionId',
      status: 'Status',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      description: 'string',
      regionId: 'string',
      status: 'string',
      vpcId: 'string',
      vpcName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBodyInstances extends $dara.Model {
  ansm?: boolean;
  architectureType?: string;
  askClusterId?: string;
  /**
   * @example
   * PRE
   */
  chargeType?: string;
  clusterState?: DescribeInstancesResponseBodyInstancesClusterState;
  /**
   * @example
   * RUNNING
   */
  clusterStatus?: string;
  clusterUsedResources?: DescribeInstancesResponseBodyInstancesClusterUsedResources;
  clusterUsedStorage?: DescribeInstancesResponseBodyInstancesClusterUsedStorage;
  elastic?: boolean;
  /**
   * @example
   * f-cn-e3afbd321
   */
  elasticInstanceId?: string;
  elasticOrderState?: string;
  elasticResourceSpec?: DescribeInstancesResponseBodyInstancesElasticResourceSpec;
  ha?: boolean;
  haResourceSpec?: DescribeInstancesResponseBodyInstancesHaResourceSpec;
  haVSwitchIds?: string[];
  haVSwitchInfo?: DescribeInstancesResponseBodyInstancesHaVSwitchInfo[];
  haZoneId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  hostAliases?: DescribeInstancesResponseBodyInstancesHostAliases[];
  /**
   * @example
   * f-cn-zvp2q0zik06
   */
  instanceId?: string;
  /**
   * @example
   * vvp1
   */
  instanceName?: string;
  monitorType?: string;
  /**
   * @example
   * NORMAL
   */
  orderState?: string;
  ossInfo?: DescribeInstancesResponseBodyInstancesOssInfo;
  /**
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @example
   * 1629879567394
   */
  resourceCreateTime?: number;
  /**
   * @example
   * 1637337600000
   */
  resourceExpiredTime?: number;
  resourceGroupId?: string;
  /**
   * @example
   * b3690a1655da47
   */
  resourceId?: string;
  resourceSpec?: DescribeInstancesResponseBodyInstancesResourceSpec;
  storage?: DescribeInstancesResponseBodyInstancesStorage;
  tags?: DescribeInstancesResponseBodyInstancesTags[];
  /**
   * @example
   * 1838996687368452
   */
  uid?: string;
  vSwitchIds?: string[];
  vSwitchInfo?: DescribeInstancesResponseBodyInstancesVSwitchInfo[];
  /**
   * @example
   * vpc-2ze9*******nxfmfcdi
   */
  vpcId?: string;
  vpcInfo?: DescribeInstancesResponseBodyInstancesVpcInfo;
  /**
   * @example
   * cn-beijing-g
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      ansm: 'Ansm',
      architectureType: 'ArchitectureType',
      askClusterId: 'AskClusterId',
      chargeType: 'ChargeType',
      clusterState: 'ClusterState',
      clusterStatus: 'ClusterStatus',
      clusterUsedResources: 'ClusterUsedResources',
      clusterUsedStorage: 'ClusterUsedStorage',
      elastic: 'Elastic',
      elasticInstanceId: 'ElasticInstanceId',
      elasticOrderState: 'ElasticOrderState',
      elasticResourceSpec: 'ElasticResourceSpec',
      ha: 'Ha',
      haResourceSpec: 'HaResourceSpec',
      haVSwitchIds: 'HaVSwitchIds',
      haVSwitchInfo: 'HaVSwitchInfo',
      haZoneId: 'HaZoneId',
      hostAliases: 'HostAliases',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      monitorType: 'MonitorType',
      orderState: 'OrderState',
      ossInfo: 'OssInfo',
      region: 'Region',
      resourceCreateTime: 'ResourceCreateTime',
      resourceExpiredTime: 'ResourceExpiredTime',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
      resourceSpec: 'ResourceSpec',
      storage: 'Storage',
      tags: 'Tags',
      uid: 'Uid',
      vSwitchIds: 'VSwitchIds',
      vSwitchInfo: 'VSwitchInfo',
      vpcId: 'VpcId',
      vpcInfo: 'VpcInfo',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ansm: 'boolean',
      architectureType: 'string',
      askClusterId: 'string',
      chargeType: 'string',
      clusterState: DescribeInstancesResponseBodyInstancesClusterState,
      clusterStatus: 'string',
      clusterUsedResources: DescribeInstancesResponseBodyInstancesClusterUsedResources,
      clusterUsedStorage: DescribeInstancesResponseBodyInstancesClusterUsedStorage,
      elastic: 'boolean',
      elasticInstanceId: 'string',
      elasticOrderState: 'string',
      elasticResourceSpec: DescribeInstancesResponseBodyInstancesElasticResourceSpec,
      ha: 'boolean',
      haResourceSpec: DescribeInstancesResponseBodyInstancesHaResourceSpec,
      haVSwitchIds: { 'type': 'array', 'itemType': 'string' },
      haVSwitchInfo: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesHaVSwitchInfo },
      haZoneId: 'string',
      hostAliases: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesHostAliases },
      instanceId: 'string',
      instanceName: 'string',
      monitorType: 'string',
      orderState: 'string',
      ossInfo: DescribeInstancesResponseBodyInstancesOssInfo,
      region: 'string',
      resourceCreateTime: 'number',
      resourceExpiredTime: 'number',
      resourceGroupId: 'string',
      resourceId: 'string',
      resourceSpec: DescribeInstancesResponseBodyInstancesResourceSpec,
      storage: DescribeInstancesResponseBodyInstancesStorage,
      tags: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesTags },
      uid: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      vSwitchInfo: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstancesVSwitchInfo },
      vpcId: 'string',
      vpcInfo: DescribeInstancesResponseBodyInstancesVpcInfo,
      zoneId: 'string',
    };
  }

  validate() {
    if(this.clusterState && typeof (this.clusterState as any).validate === 'function') {
      (this.clusterState as any).validate();
    }
    if(this.clusterUsedResources && typeof (this.clusterUsedResources as any).validate === 'function') {
      (this.clusterUsedResources as any).validate();
    }
    if(this.clusterUsedStorage && typeof (this.clusterUsedStorage as any).validate === 'function') {
      (this.clusterUsedStorage as any).validate();
    }
    if(this.elasticResourceSpec && typeof (this.elasticResourceSpec as any).validate === 'function') {
      (this.elasticResourceSpec as any).validate();
    }
    if(this.haResourceSpec && typeof (this.haResourceSpec as any).validate === 'function') {
      (this.haResourceSpec as any).validate();
    }
    if(Array.isArray(this.haVSwitchIds)) {
      $dara.Model.validateArray(this.haVSwitchIds);
    }
    if(Array.isArray(this.haVSwitchInfo)) {
      $dara.Model.validateArray(this.haVSwitchInfo);
    }
    if(Array.isArray(this.hostAliases)) {
      $dara.Model.validateArray(this.hostAliases);
    }
    if(this.ossInfo && typeof (this.ossInfo as any).validate === 'function') {
      (this.ossInfo as any).validate();
    }
    if(this.resourceSpec && typeof (this.resourceSpec as any).validate === 'function') {
      (this.resourceSpec as any).validate();
    }
    if(this.storage && typeof (this.storage as any).validate === 'function') {
      (this.storage as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    if(Array.isArray(this.vSwitchInfo)) {
      $dara.Model.validateArray(this.vSwitchInfo);
    }
    if(this.vpcInfo && typeof (this.vpcInfo as any).validate === 'function') {
      (this.vpcInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstancesResponseBody extends $dara.Model {
  instances?: DescribeInstancesResponseBodyInstances[];
  /**
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * C8DF2A5B-6FBA-5651-A3D4-960F36640E6B
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 15
   */
  totalCount?: number;
  /**
   * @example
   * 2
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': DescribeInstancesResponseBodyInstances },
      pageIndex: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


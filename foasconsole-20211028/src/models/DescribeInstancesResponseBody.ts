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
  /**
   * @example
   * f0957e82de6e47
   */
  clusterId?: string;
  currentStage?: number;
  /**
   * @remarks
   * The error message.
   */
  message?: string;
  /**
   * @remarks
   * The status of the project space. Valid values:
   * - CREATING: Being created.
   * - DELETING: Being deleted.
   * - MODIFYING: Resource specifications are being modified.
   * - SUCCESS: The previous operation was successful.
   * - FAILED: The previous operation failed.
   */
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
  /**
   * @example
   * a6f35c0ff73448
   */
  clusterId?: string;
  clusterStage?: DescribeInstancesResponseBodyInstancesClusterStateClusterStage;
  createTimeout?: boolean;
  /**
   * @remarks
   * The cluster status. Valid values:
   * 
   * - CREATING: Being created.
   * 
   * - RUNNING: Running.
   * 
   * - DISABLE: Invalid.
   * 
   * - DELETING: Being deleted.
   * 
   * - DELETED: Deleted.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The cluster status. Valid values:
   * 
   * - CREATING: Being created.
   * 
   * - RUNNING: Running.
   * 
   * - DISABLE: Invalid.
   * 
   * - DELETING: Being deleted.
   * 
   * - DELETED: Deleted.
   */
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
  /**
   * @example
   * ea2e9545fdc942
   */
  clusterId?: string;
  elasticUsedCpu?: number;
  elasticUsedMemory?: number;
  elasticUsedResource?: number;
  guaranteedUsedCpu?: number;
  guaranteedUsedMemory?: number;
  guaranteedUsedResource?: number;
  /**
   * @remarks
   * Indicates whether zone-disaster recovery resources are selected.
   * 
   * @example
   * true
   */
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
  /**
   * @example
   * f0957e82de6e47
   */
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
  /**
   * @remarks
   * The number of CPUs.
   * 
   * @example
   * 5
   */
  cpu?: number;
  /**
   * @remarks
   * The amount of memory used.
   * 
   * @example
   * 280
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

export class DescribeInstancesResponseBodyInstancesHaResourceSpec extends $dara.Model {
  /**
   * @remarks
   * The number of CPUs for zone-disaster recovery.
   * 
   * @example
   * 12
   */
  cpu?: number;
  /**
   * @remarks
   * The memory size of zone-disaster recovery resources.
   * 
   * @example
   * 48
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

export class DescribeInstancesResponseBodyInstancesHaVSwitchInfo extends $dara.Model {
  /**
   * @remarks
   * The number of available IP addresses in the vSwitch.
   * 
   * @example
   * 64
   */
  availableIpAddressCount?: number;
  /**
   * @remarks
   * The description of the VPC.
   * 
   * @example
   * “”
   */
  description?: string;
  /**
   * @remarks
   * The region.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The vSwitch CIDR block information.
   * 
   * @example
   * 192.168.16.0/24
   */
  vSwitchCidr?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-wz9e9zt38b9f3l6*****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The vSwitch name.
   * 
   * @example
   * Test vSwitch
   */
  vSwitchName?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-uf6d0akr6lzd75v****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID of the workspace.
   * 
   * @example
   * cn-hangzhou-h
   */
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
  /**
   * @remarks
   * The name of the bound OSS bucket.
   * 
   * @example
   * flink-log-john
   */
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
   * @remarks
   * The number of CPUs.
   * 
   * @example
   * 10
   */
  cpu?: number;
  /**
   * @remarks
   * The configured memory size.
   * 
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
   * @remarks
   * The name of the bound OSS bucket.
   * 
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
  /**
   * @remarks
   * Indicates whether fully managed storage is selected. Valid values:
   * - true: Used.
   * - false: Not used.
   * 
   * @example
   * true
   */
  fullyManaged?: boolean;
  /**
   * @remarks
   * The order status of fully managed storage. Valid values:
   * 
   * - NOT_INIT: The order is placed but components are not yet deployed.
   * 
   * - NORMAL: Normal.
   * 
   * - CEASE: Expired.
   * 
   * - RELEASE: Overdue.
   * 
   * @example
   * NORMAL
   */
  orderState?: string;
  /**
   * @remarks
   * The OSS storage information.
   */
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
   * @remarks
   * The tag key.
   * 
   * @example
   * flink
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
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
  /**
   * @remarks
   * The number of available IP addresses in the vSwitch.
   * 
   * @example
   * 256
   */
  availableIpAddressCount?: string;
  /**
   * @remarks
   * The description of the vSwitch group.
   * 
   * @example
   * “”
   */
  description?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The vSwitch CIDR block.
   * 
   * @example
   * 192.168.16.0/24
   */
  vSwitchCidr?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-8vb6jk75wfcwnuq****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The name of the vSwitch.
   * 
   * @example
   * “”
   */
  vSwitchName?: string;
  /**
   * @remarks
   * VPC ID。
   * 
   * @example
   * vpc-bp16h9ru9gvz2tygo*****
   */
  vpcId?: string;
  /**
   * @remarks
   * The zone ID of the workspace.
   * 
   * @example
   * cn-hangzhou-h
   */
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
  /**
   * @remarks
   * The VPC CIDR block.
   * 
   * @example
   * 172.16.5.0/24
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The VPC description.
   * 
   * @example
   * “”
   */
  description?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The VPC status. Valid values:
   * 
   * - Pending: Being configured.
   * 
   * - Available: Available.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-gw8c6nhjta3eq12y****
   */
  vpcId?: string;
  /**
   * @remarks
   * The VPC name.
   * 
   * @example
   * flink集群vpc
   */
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
  /**
   * @remarks
   * The processor architecture.
   * 
   * @example
   * X86
   */
  architectureType?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c20c******404
   */
  askClusterId?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * - POST: pay-as-you-go.
   * - PRE: subscription.
   * 
   * @example
   * PRE
   */
  chargeType?: string;
  /**
   * @remarks
   * The cluster state.
   */
  clusterState?: DescribeInstancesResponseBodyInstancesClusterState;
  /**
   * @remarks
   * The cluster status. Valid values:
   * - CREATING: Being created.
   * - RUNNING: Running.
   * - DISABLE: Invalid.
   * - DELETING: Being deleted.
   * - DELETED: Deleted.
   * 
   * @example
   * RUNNING
   */
  clusterStatus?: string;
  /**
   * @remarks
   * The overall resource usage of the Flink service.
   */
  clusterUsedResources?: DescribeInstancesResponseBodyInstancesClusterUsedResources;
  clusterUsedStorage?: DescribeInstancesResponseBodyInstancesClusterUsedStorage;
  /**
   * @remarks
   * Indicates whether deletion protection is enabled.
   * 
   * @example
   * false
   */
  deletionProtection?: boolean;
  elastic?: boolean;
  /**
   * @remarks
   * The elastic order ID.
   * 
   * @example
   * f-cn-e3afbd321
   */
  elasticInstanceId?: string;
  elasticOrderState?: string;
  elasticResourceSpec?: DescribeInstancesResponseBodyInstancesElasticResourceSpec;
  /**
   * @remarks
   * Indicates whether zone-disaster recovery resources are selected.
   * 
   * @example
   * true
   */
  ha?: boolean;
  /**
   * @remarks
   * The zone-disaster recovery resource description.
   */
  haResourceSpec?: DescribeInstancesResponseBodyInstancesHaResourceSpec;
  /**
   * @remarks
   * The vSwitch group in the secondary zone for zone-disaster recovery.
   */
  haVSwitchIds?: string[];
  /**
   * @remarks
   * The vSwitch group information for the secondary zone of zone-disaster recovery.
   */
  haVSwitchInfo?: DescribeInstancesResponseBodyInstancesHaVSwitchInfo[];
  /**
   * @remarks
   * The secondary zone ID for zone-disaster recovery.
   * 
   * @example
   * cn-hongkong-b
   */
  haZoneId?: string;
  /**
   * @remarks
   * The domain name information added by the user.
   * 
   * This parameter is required.
   */
  hostAliases?: DescribeInstancesResponseBodyInstancesHostAliases[];
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * f-cn-zvp2q0z****
   */
  instanceId?: string;
  /**
   * @remarks
   * The workspace name.
   * 
   * @example
   * vvp1
   */
  instanceName?: string;
  /**
   * @remarks
   * The type of the monitoring and alerting service. You can select ARMS or CloudMonitor.
   * 
   * @example
   * TAIHAO
   */
  monitorType?: string;
  /**
   * @remarks
   * The order status of the Flink compute service. Valid values:
   * - NOT_INIT: The order is placed but components are not yet deployed.
   * - NORMAL: Normal.
   * - CEASE: Expired.
   * - RELEASE: Overdue.
   * 
   * @example
   * NORMAL
   */
  orderState?: string;
  ossInfo?: DescribeInstancesResponseBodyInstancesOssInfo;
  /**
   * @remarks
   * The region to which the instance belongs.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 1629879567394
   */
  resourceCreateTime?: number;
  /**
   * @remarks
   * The overdue time.
   * 
   * @example
   * 1637337600000
   */
  resourceExpiredTime?: number;
  /**
   * @remarks
   * The resource group.
   * 
   * @example
   * rg-***
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * b3690a1655****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource specification information.
   */
  resourceSpec?: DescribeInstancesResponseBodyInstancesResourceSpec;
  /**
   * @remarks
   * The storage information.
   */
  storage?: DescribeInstancesResponseBodyInstancesStorage;
  supportDisasterRecoveryDrill?: boolean;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: DescribeInstancesResponseBodyInstancesTags[];
  /**
   * @remarks
   * The ID of the user to whom the instance belongs.
   * 
   * @example
   * 183899668736****
   */
  uid?: string;
  /**
   * @remarks
   * The vSwitch ID group.
   */
  vSwitchIds?: string[];
  /**
   * @remarks
   * The information about the primary vSwitch group.
   */
  vSwitchInfo?: DescribeInstancesResponseBodyInstancesVSwitchInfo[];
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-2ze9*******nxfmfcdi
   */
  vpcId?: string;
  /**
   * @remarks
   * The VPC information.
   */
  vpcInfo?: DescribeInstancesResponseBodyInstancesVpcInfo;
  /**
   * @remarks
   * The zone ID of the instance.
   * 
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
      deletionProtection: 'DeletionProtection',
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
      supportDisasterRecoveryDrill: 'SupportDisasterRecoveryDrill',
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
      deletionProtection: 'boolean',
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
      supportDisasterRecoveryDrill: 'boolean',
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
  /**
   * @remarks
   * The details of the instance group.
   */
  instances?: DescribeInstancesResponseBodyInstances[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of instances per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C8DF2A5B-6FBA-5651-A3D4-960F3664****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * - true: Successful.
   * - false: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of instances.
   * 
   * @example
   * 15
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
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


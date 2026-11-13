// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesResponseBodyInstancesClusterStateClusterStageTotalStageWithWeight extends $dara.Model {
  /**
   * @remarks
   * The stage sequence number.
   * 
   * @example
   * 0
   */
  stepIndex?: number;
  /**
   * @remarks
   * The stage name.
   */
  stepName?: string;
  /**
   * @remarks
   * The stage weight.
   * 
   * @example
   * 0
   */
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
   * @remarks
   * The cluster ID.
   * 
   * @example
   * f0957e82de6e47
   */
  clusterId?: string;
  /**
   * @remarks
   * The sequence number of the current stage.
   * 
   * @example
   * 0
   */
  currentStage?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Resource creation failed
   */
  message?: string;
  /**
   * @remarks
   * The status of the workspace. Valid values:
   * - CREATING: The workspace is being created.
   * - DELETING: The workspace is being deleted.
   * - MODIFYING: The resource specifications are being modified.
   * - SUCCESS: The previous operation succeeded.
   * - FAILED: The previous operation failed.
   * 
   * @example
   * CREATING
   */
  status?: string;
  /**
   * @remarks
   * The list of stages and weights.
   */
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
  /**
   * @remarks
   * The listener status.
   */
  listenersStatus?: string;
  /**
   * @remarks
   * The listener port.
   * 
   * @example
   * 8080
   */
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
  /**
   * @remarks
   * Indicates whether a user-side load balancing instance exists.
   */
  existSlb?: boolean;
  /**
   * @remarks
   * The load balancing instance ID.
   */
  slbId?: string;
  /**
   * @remarks
   * The IP address of the load balancing instance.
   * 
   * @example
   * 192.168.1.10
   */
  slbIp?: string;
  /**
   * @remarks
   * The instance status of the load balancing instance.
   */
  slbStatus?: string;
  /**
   * @remarks
   * The list of user-side load balancing listeners.
   */
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
   * @remarks
   * The cluster ID.
   * 
   * @example
   * a6f35c0ff73448
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster stage information.
   */
  clusterStage?: DescribeInstancesResponseBodyInstancesClusterStateClusterStage;
  /**
   * @remarks
   * Indicates whether the cluster creation timed out.
   * 
   * @example
   * true
   */
  createTimeout?: boolean;
  /**
   * @remarks
   * The cluster status. Valid values:
   * - CREATING: The cluster is being created.
   * - RUNNING: The cluster is running.
   * - DISABLE: The cluster is invalid.
   * - DELETING: The cluster is being deleted.
   * - DELETED: The cluster is deleted.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The cluster status. Valid values:
   * - CREATING: The cluster is being created.
   * - RUNNING: The cluster is running.
   * - DISABLE: The cluster is invalid.
   * - DELETING: The cluster is being deleted.
   * - DELETED: The cluster is deleted.
   * 
   * @example
   * RUNNING
   */
  subStatus?: string;
  /**
   * @remarks
   * The cluster-related URLs.
   * 
   * @example
   * https://flink-cn-hongkong.data.aliyun.com
   */
  url?: string;
  /**
   * @remarks
   * The user-side load balancing information.
   */
  userSlbDto?: DescribeInstancesResponseBodyInstancesClusterStateUserSlbDto;
  /**
   * @remarks
   * The CIDR block of the VPC where the cluster is deployed.
   * 
   * @example
   * 10.0.0.0/16
   */
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
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ea2e9545fdc942
   */
  clusterId?: string;
  /**
   * @remarks
   * The number of elastic CPUs used.
   * 
   * @example
   * 0
   */
  elasticUsedCpu?: number;
  /**
   * @remarks
   * The amount of elastic memory used.
   * 
   * @example
   * 0
   */
  elasticUsedMemory?: number;
  /**
   * @remarks
   * The resource count of used elastic resources.
   * 
   * @example
   * 0
   */
  elasticUsedResource?: number;
  /**
   * @remarks
   * The number of guaranteed CPUs used.
   * 
   * @example
   * 0
   */
  guaranteedUsedCpu?: number;
  /**
   * @remarks
   * The amount of guaranteed memory used.
   * 
   * @example
   * 0
   */
  guaranteedUsedMemory?: number;
  /**
   * @remarks
   * The resource count of used guaranteed resources.
   * 
   * @example
   * 0
   */
  guaranteedUsedResource?: number;
  /**
   * @remarks
   * Indicates whether cross-zone high-availability resources are selected.
   * 
   * @example
   * true
   */
  ha?: boolean;
  /**
   * @remarks
   * The number of cross-zone high-availability CPUs used.
   * 
   * @example
   * 0
   */
  haUsedCpu?: number;
  /**
   * @remarks
   * The amount of active memory used for cross-zone high availability.
   * 
   * @example
   * 0
   */
  haUsedMemory?: number;
  /**
   * @remarks
   * The number of cross-zone high-availability compute units used.
   * 
   * @example
   * 0
   */
  haUsedResource?: number;
  /**
   * @remarks
   * The total number of CPUs used.
   * 
   * @example
   * 0
   */
  usedCpu?: number;
  /**
   * @remarks
   * The total amount of memory used.
   * 
   * @example
   * 0
   */
  usedMemory?: number;
  /**
   * @remarks
   * The total number of compute units used.
   * 
   * @example
   * 0
   */
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
   * @remarks
   * The cluster ID.
   * 
   * @example
   * f0957e82de6e47
   */
  clusterId?: string;
  /**
   * @remarks
   * The amount of storage used by the cluster.
   * 
   * @example
   * 0
   */
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
   * The number of cross-zone high-availability CPUs.
   * 
   * @example
   * 12
   */
  cpu?: number;
  /**
   * @remarks
   * The memory size of cross-zone high-availability resources.
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
   * The region ID.
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
   * The ID of the zone to which the workspace belongs.
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
   * The list of hostnames.
   * 
   * This parameter is required.
   */
  hostNames?: string[];
  /**
   * @remarks
   * The IP address that corresponds to the hostname.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.1.20
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
  /**
   * @remarks
   * The AccessKey ID for OSS.
   */
  accessId?: string;
  /**
   * @remarks
   * The AccessKey secret for OSS.
   */
  accessKey?: string;
  /**
   * @remarks
   * The name of the bound OSS bucket.
   * 
   * @example
   * flink-log-john
   */
  bucket?: string;
  /**
   * @remarks
   * The versioning status of the OSS bucket.
   * 
   * @example
   * OFF
   */
  bucketVersioningStatus?: string;
  /**
   * @remarks
   * The OSS endpoint.
   * 
   * @example
   * oss-cn-hangzhou-internal.aliyuncs.com
   */
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
   * Specifies whether fully managed storage is selected. Valid values:
   * - true: Yes.
   * - false: No.
   * 
   * @example
   * true
   */
  fullyManaged?: boolean;
  /**
   * @remarks
   * The order status of the fully managed storage. Valid values:
   * 
   * - NOT_INIT: The order is placed but components are not deployed.
   * 
   * - NORMAL: The order is in the normal state.
   * 
   * - CEASE: The order is expired.
   * 
   * - RELEASE: The order is overdue.
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
  /**
   * @remarks
   * Specifies whether the creation of fully managed storage is supported.
   * 
   * @example
   * true
   */
  supportCreateFullyManagedStorage?: boolean;
  /**
   * @remarks
   * Specifies whether migration progress detection is supported.
   * 
   * @example
   * true
   */
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
   * The VPC ID.
   * 
   * @example
   * vpc-bp16h9ru9gvz2tygo*****
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the zone to which the workspace belongs.
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
   * The CIDR block of the VPC.
   * 
   * @example
   * 172.16.5.0/24
   */
  cidrBlock?: string;
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
   * - Pending: Configuring.
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
   * The name of the VPC.
   * 
   * @example
   * Flink cluster VPC
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
  /**
   * @example
   * true
   */
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
   * - POST: pay-as-you-go
   * - PRE: subscription
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
   * - CREATING: The cluster is being created.
   * - RUNNING: The cluster is running.
   * - DISABLE: The cluster is invalid.
   * - DELETING: The cluster is being deleted.
   * - DELETED: The cluster is deleted.
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
  /**
   * @remarks
   * The storage resource usage information of the cluster.
   */
  clusterUsedStorage?: DescribeInstancesResponseBodyInstancesClusterUsedStorage;
  /**
   * @remarks
   * Indicates whether deletion protection is enabled.
   * 
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @remarks
   * Indicates whether elastic resources are enabled.
   * 
   * @example
   * false
   */
  elastic?: boolean;
  /**
   * @remarks
   * The elastic order ID.
   * 
   * @example
   * f-cn-e3afbd321
   */
  elasticInstanceId?: string;
  /**
   * @remarks
   * The status of the elastic resource order.
   * 
   * @example
   * NORMAL
   */
  elasticOrderState?: string;
  /**
   * @remarks
   * The specifications of pay-as-you-go elastic resources.
   */
  elasticResourceSpec?: DescribeInstancesResponseBodyInstancesElasticResourceSpec;
  /**
   * @remarks
   * Indicates whether cross-zone high-availability resources are selected.
   * 
   * @example
   * true
   */
  ha?: boolean;
  /**
   * @remarks
   * The description of cross-zone high-availability resources.
   */
  haResourceSpec?: DescribeInstancesResponseBodyInstancesHaResourceSpec;
  /**
   * @remarks
   * The vSwitch group in the secondary zone for cross-zone high availability.
   */
  haVSwitchIds?: string[];
  /**
   * @remarks
   * The vSwitch group information in the secondary zone for cross-zone high availability.
   */
  haVSwitchInfo?: DescribeInstancesResponseBodyInstancesHaVSwitchInfo[];
  /**
   * @remarks
   * The ID of the secondary zone for zone-disaster recovery.
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
   * The name of the workspace.
   * 
   * @example
   * vvp1
   */
  instanceName?: string;
  /**
   * @remarks
   * The type of the monitoring and alerting service. Valid values: ARMS and CloudMonitor.
   * 
   * @example
   * TAIHAO
   */
  monitorType?: string;
  /**
   * @remarks
   * The order status of the Flink compute service. Valid values:
   * - NOT_INIT: The order is placed but components are not deployed.
   * - NORMAL: The order is in the normal state.
   * - CEASE: The order is expired.
   * - RELEASE: The order is overdue.
   * 
   * @example
   * NORMAL
   */
  orderState?: string;
  /**
   * @remarks
   * The access configuration information for OSS.
   */
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
   * The time when the instance was created. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1629879567394
   */
  resourceCreateTime?: number;
  /**
   * @remarks
   * The time when the instance expires. The value is a UNIX timestamp in milliseconds.
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
   * The resource specifications.
   */
  resourceSpec?: DescribeInstancesResponseBodyInstancesResourceSpec;
  /**
   * @remarks
   * The storage information.
   */
  storage?: DescribeInstancesResponseBodyInstancesStorage;
  /**
   * @remarks
   * Specifies whether disaster recovery drills are supported.
   */
  supportDisasterRecoveryDrill?: boolean;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: DescribeInstancesResponseBodyInstancesTags[];
  /**
   * @remarks
   * The ID of the user that owns the instance.
   * 
   * @example
   * 183899668736****
   */
  uid?: string;
  /**
   * @remarks
   * The vSwitch IDs.
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
   * The ID of the zone to which the instance belongs.
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
   * The instance group details.
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
   * Specifies whether the request is successful. Valid values:
   * - true: The request is successful.
   * - false: The request fails.
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryClusterInfoResponseBodyDataInstanceModels extends $dara.Model {
  /**
   * @remarks
   * The reserved field.
   * 
   * @example
   * null
   */
  creationTimestamp?: string;
  /**
   * @remarks
   * The reserved field.
   * 
   * @example
   * null
   */
  healthStatus?: string;
  /**
   * @remarks
   * The reserved field.
   * 
   * @example
   * null
   */
  internetIp?: string;
  /**
   * @remarks
   * The reserved field.
   * 
   * @example
   * null
   */
  ip?: string;
  /**
   * @remarks
   * The reserved field.
   * 
   * @example
   * null
   */
  podName?: string;
  /**
   * @remarks
   * The reserved field.
   * 
   * @example
   * null
   */
  role?: string;
  /**
   * @remarks
   * The reserved field.
   * 
   * @example
   * null
   */
  singleTunnelVip?: string;
  /**
   * @remarks
   * The reserved field.
   * 
   * @example
   * null
   */
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      creationTimestamp: 'CreationTimestamp',
      healthStatus: 'HealthStatus',
      internetIp: 'InternetIp',
      ip: 'Ip',
      podName: 'PodName',
      role: 'Role',
      singleTunnelVip: 'SingleTunnelVip',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTimestamp: 'string',
      healthStatus: 'string',
      internetIp: 'string',
      ip: 'string',
      podName: 'string',
      role: 'string',
      singleTunnelVip: 'string',
      zone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryClusterInfoResponseBodyDataMaintenancePeriod extends $dara.Model {
  /**
   * @remarks
   * The start time of the O&M time window.
   * 
   * @example
   * 02:00
   */
  endTime?: string;
  /**
   * @remarks
   * The end time of the O&M time window.
   * 
   * @example
   * 06:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryClusterInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The public network whitelist.
   * 
   * @example
   * ["127.0.0.0/32"]
   */
  aclEntryList?: string;
  /**
   * @remarks
   * The instance ID of the Internet whitelist.
   * 
   * @example
   * acl-bp144q24cgqvzckmxxxx
   */
  aclId?: string;
  /**
   * @remarks
   * The cluster version number.
   * 
   * @example
   * 2.1.0
   */
  appVersion?: string;
  /**
   * @remarks
   * Indicates whether the cluster has a minor version available for upgrade.
   * 
   * @example
   * true
   */
  canUpdate?: boolean;
  /**
   * @remarks
   * The billing method. Valid values: subscription and pay-as-you-go.
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The alias of the cluster.
   * 
   * @example
   * Development environment
   */
  clusterAliasName?: string;
  /**
   * @remarks
   * The full name of the cluster.
   * 
   * @example
   * mse-74355150-xxxxxxx
   */
  clusterName?: string;
  /**
   * @remarks
   * The engine specifications.
   * 
   * @example
   * MSE_SC_2_4_60_c
   */
  clusterSpecification?: string;
  /**
   * @remarks
   * The cluster type. Valid values: ZooKeeper, Nacos-Ans, and Eureka.
   * 
   * @example
   * Nacos-Ans
   */
  clusterType?: string;
  /**
   * @remarks
   * The order version.
   * 
   * @example
   * NACOS_2_0_0
   */
  clusterVersion?: string;
  /**
   * @remarks
   * The deprecated field.
   * 
   * @example
   * null
   */
  connectionType?: string;
  /**
   * @remarks
   * The deprecated field.
   * 
   * @example
   * null
   */
  cpu?: number;
  /**
   * @remarks
   * The time when the cluster was created.
   * 
   * @example
   * 2022-12-15 10:02:07
   */
  createTime?: string;
  /**
   * @remarks
   * The deprecated field.
   * 
   * @example
   * null
   */
  diskCapacity?: number;
  /**
   * @remarks
   * The deprecated field.
   * 
   * @example
   * null
   */
  diskType?: string;
  /**
   * @remarks
   * The instance ID of the elastic IP address (EIP).
   * 
   * @example
   * eip-bp1uujshd5funmyy8rcl9
   */
  eipInstanceId?: string;
  /**
   * @remarks
   * The expiration time for subscription instances.
   * 
   * @example
   * 2021-08-01 00:00:00
   */
  endDate?: string;
  /**
   * @remarks
   * The list of zones to which the current cluster can be distributed.
   */
  expectZones?: string[];
  /**
   * @remarks
   * The cluster status.
   * 
   * @example
   * INIT_SUCCESS
   */
  healthStatus?: string;
  /**
   * @remarks
   * The time taken to initialize the cluster, in milliseconds.
   * 
   * @example
   * 53353
   */
  initCostTime?: number;
  /**
   * @remarks
   * The initialization status.
   * 
   * @example
   * INIT_SUCCESS
   */
  initStatus?: string;
  /**
   * @remarks
   * The number of instances in the cluster.
   * 
   * @example
   * 3
   */
  instanceCount?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * mse-cn-st21ri2****
   */
  instanceId?: string;
  /**
   * @remarks
   * The reserved structure.
   */
  instanceModels?: QueryClusterInfoResponseBodyDataInstanceModels[];
  /**
   * @remarks
   * The reserved field.
   * 
   * @example
   * null
   */
  internetAddress?: string;
  /**
   * @remarks
   * The public domain name.
   * 
   * @example
   * mse-xxxxxx-p.nacos-ans.mse.aliyuncs.com
   */
  internetDomain?: string;
  /**
   * @remarks
   * The open ports for the Internet cluster.
   * 
   * @example
   * 8848,6443,9848,8761
   */
  internetPort?: string;
  /**
   * @remarks
   * The reserved field.
   * 
   * @example
   * null
   */
  intranetAddress?: string;
  /**
   * @remarks
   * The internal domain name.
   * 
   * @example
   * mse-xxxxx-nacos-ans.mse.aliyuncs.com
   */
  intranetDomain?: string;
  /**
   * @remarks
   * The internal network port opened for the cluster.
   * 
   * @example
   * 8848,6443,9848,8761
   */
  intranetPort?: string;
  /**
   * @remarks
   * The O&M time window.
   */
  maintenancePeriod?: QueryClusterInfoResponseBodyDataMaintenancePeriod;
  /**
   * @remarks
   * The deprecated field.
   * 
   * @example
   * null
   */
  memoryCapacity?: number;
  /**
   * @remarks
   * The cluster version.
   * 
   * @example
   * mse_pro
   */
  mseVersion?: string;
  /**
   * @remarks
   * The network connectivity type of the cluster.
   * 
   * @example
   * privatenet
   */
  netType?: string;
  /**
   * @remarks
   * The billing method.
   * 
   * @example
   * Pay-as-you-go
   */
  payInfo?: string;
  /**
   * @remarks
   * The Internet bandwidth. Unit: Mbit/s. Valid values: 0 to 5000. A value of 0 indicates that the cluster is not connected to the Internet.
   * 
   * @example
   * 1
   */
  pubNetworkFlow?: string;
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
   * The ID of the security group for ENI network access.
   * 
   * @example
   * sg-uf6hgwe067prhg68agfa
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The type of the security group for ENI network access.
   * 
   * @example
   * enterprise
   */
  securityGroupType?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp1egfakxxxxx
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The current version code of the cluster.
   * 
   * @example
   * NACOS_2_1_0_1
   */
  versionCode?: string;
  /**
   * @remarks
   * The version lifecycle.
   * 
   * @example
   * STABLE
   */
  versionLifecycle?: string;
  /**
   * @remarks
   * The ID of the VPC where the cluster is deployed.
   * 
   * @example
   * vpc-bp1v5nbauzh8xxxxxxx
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      aclEntryList: 'AclEntryList',
      aclId: 'AclId',
      appVersion: 'AppVersion',
      canUpdate: 'CanUpdate',
      chargeType: 'ChargeType',
      clusterAliasName: 'ClusterAliasName',
      clusterName: 'ClusterName',
      clusterSpecification: 'ClusterSpecification',
      clusterType: 'ClusterType',
      clusterVersion: 'ClusterVersion',
      connectionType: 'ConnectionType',
      cpu: 'Cpu',
      createTime: 'CreateTime',
      diskCapacity: 'DiskCapacity',
      diskType: 'DiskType',
      eipInstanceId: 'EipInstanceId',
      endDate: 'EndDate',
      expectZones: 'ExpectZones',
      healthStatus: 'HealthStatus',
      initCostTime: 'InitCostTime',
      initStatus: 'InitStatus',
      instanceCount: 'InstanceCount',
      instanceId: 'InstanceId',
      instanceModels: 'InstanceModels',
      internetAddress: 'InternetAddress',
      internetDomain: 'InternetDomain',
      internetPort: 'InternetPort',
      intranetAddress: 'IntranetAddress',
      intranetDomain: 'IntranetDomain',
      intranetPort: 'IntranetPort',
      maintenancePeriod: 'MaintenancePeriod',
      memoryCapacity: 'MemoryCapacity',
      mseVersion: 'MseVersion',
      netType: 'NetType',
      payInfo: 'PayInfo',
      pubNetworkFlow: 'PubNetworkFlow',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      securityGroupType: 'SecurityGroupType',
      tags: 'Tags',
      vSwitchId: 'VSwitchId',
      versionCode: 'VersionCode',
      versionLifecycle: 'VersionLifecycle',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntryList: 'string',
      aclId: 'string',
      appVersion: 'string',
      canUpdate: 'boolean',
      chargeType: 'string',
      clusterAliasName: 'string',
      clusterName: 'string',
      clusterSpecification: 'string',
      clusterType: 'string',
      clusterVersion: 'string',
      connectionType: 'string',
      cpu: 'number',
      createTime: 'string',
      diskCapacity: 'number',
      diskType: 'string',
      eipInstanceId: 'string',
      endDate: 'string',
      expectZones: { 'type': 'array', 'itemType': 'string' },
      healthStatus: 'string',
      initCostTime: 'number',
      initStatus: 'string',
      instanceCount: 'number',
      instanceId: 'string',
      instanceModels: { 'type': 'array', 'itemType': QueryClusterInfoResponseBodyDataInstanceModels },
      internetAddress: 'string',
      internetDomain: 'string',
      internetPort: 'string',
      intranetAddress: 'string',
      intranetDomain: 'string',
      intranetPort: 'string',
      maintenancePeriod: QueryClusterInfoResponseBodyDataMaintenancePeriod,
      memoryCapacity: 'number',
      mseVersion: 'string',
      netType: 'string',
      payInfo: 'string',
      pubNetworkFlow: 'string',
      regionId: 'string',
      securityGroupId: 'string',
      securityGroupType: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      vSwitchId: 'string',
      versionCode: 'string',
      versionLifecycle: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.expectZones)) {
      $dara.Model.validateArray(this.expectZones);
    }
    if(Array.isArray(this.instanceModels)) {
      $dara.Model.validateArray(this.instanceModels);
    }
    if(this.maintenancePeriod && typeof (this.maintenancePeriod as any).validate === 'function') {
      (this.maintenancePeriod as any).validate();
    }
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryClusterInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data overview.
   */
  data?: QueryClusterInfoResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * mse-100-000
   */
  errorCode?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * - If the request is successful, a success message is returned.
   * - If the request fails, the cause of the failure is returned.
   * 
   * @example
   * Request processed successfully
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 415088B3-A7BE-56F6-9CD9-C42DE895CD41
   */
  requestId?: string;
  /**
   * @remarks
   * The request result. Valid values:
   * - `true`: The request is successful.
   * - `false`: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryClusterInfoResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


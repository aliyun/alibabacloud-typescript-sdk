// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryClusterInfoResponseBodyDataInstanceModels extends $dara.Model {
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * null
   */
  creationTimestamp?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * null
   */
  healthStatus?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * null
   */
  internetIp?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * null
   */
  ip?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * null
   */
  podName?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * null
   */
  role?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * null
   */
  singleTunnelVip?: string;
  /**
   * @remarks
   * A reserved parameter.
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
   * The start time of the O\\&M time window.
   * 
   * @example
   * 02:00
   */
  endTime?: string;
  /**
   * @remarks
   * The end time of the O\\&M time window.
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
   * The public IP address whitelist.
   * 
   * @example
   * ["127.0.0.0/32"]
   */
  aclEntryList?: string;
  /**
   * @remarks
   * The ID of the instance in the public IP address whitelist.
   * 
   * @example
   * acl-bp144q24cgqvzckmxxxx
   */
  aclId?: string;
  /**
   * @remarks
   * The version of the instance.
   * 
   * @example
   * 2.1.0
   */
  appVersion?: string;
  canUpdate?: boolean;
  /**
   * @remarks
   * The billing method, such as subscription or pay-as-you-go.
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The alias of the instance.
   * 
   * @example
   * Development environment
   */
  clusterAliasName?: string;
  /**
   * @remarks
   * The full name of the instance.
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
   * The type of the instance. Valid values: ZooKeeper, Nacos-Ans, and Eureka.
   * 
   * @example
   * Nacos-Ans
   */
  clusterType?: string;
  /**
   * @remarks
   * The version of the order.
   * 
   * @example
   * NACOS_2_0_0
   */
  clusterVersion?: string;
  /**
   * @remarks
   * A deprecated parameter.
   * 
   * @example
   * null
   */
  connectionType?: string;
  /**
   * @remarks
   * A deprecated parameter.
   * 
   * @example
   * null
   */
  cpu?: number;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 2022-12-15 10:02:07
   */
  createTime?: string;
  /**
   * @remarks
   * A deprecated parameter.
   * 
   * @example
   * null
   */
  diskCapacity?: number;
  /**
   * @remarks
   * A deprecated parameter.
   * 
   * @example
   * null
   */
  diskType?: string;
  /**
   * @remarks
   * The ID of the instance that is associated with the Elastic IP Address (EIP).
   * 
   * @example
   * eip-bp1uujshd5funmyy8rcl9
   */
  eipInstanceId?: string;
  /**
   * @remarks
   * The time when the subscription instance expires.
   * 
   * @example
   * 2021-08-01 00:00:00
   */
  endDate?: string;
  /**
   * @remarks
   * The zones to which the current cluster can be distributed.
   */
  expectZones?: string[];
  /**
   * @remarks
   * The status of the instance.
   * 
   * @example
   * INIT_SUCCESS
   */
  healthStatus?: string;
  /**
   * @remarks
   * The time that is required to initialize the instance. Unit: milliseconds.
   * 
   * @example
   * 53353
   */
  initCostTime?: number;
  /**
   * @remarks
   * The initial status of the instance.
   * 
   * @example
   * INIT_SUCCESS
   */
  initStatus?: string;
  /**
   * @remarks
   * The number of instance nodes.
   * 
   * @example
   * 3
   */
  instanceCount?: number;
  /**
   * @remarks
   * The ID of the instance
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
   * A reserved parameter.
   * 
   * @example
   * null
   */
  internetAddress?: string;
  /**
   * @remarks
   * The public endpoint.
   * 
   * @example
   * mse-xxxxxx-p.nacos-ans.mse.aliyuncs.com
   */
  internetDomain?: string;
  /**
   * @remarks
   * The instance ports that are accessible over the Internet.
   * 
   * @example
   * 8848,6443,9848,8761
   */
  internetPort?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * @example
   * null
   */
  intranetAddress?: string;
  /**
   * @remarks
   * The internal endpoint.
   * 
   * @example
   * mse-xxxxx-nacos-ans.mse.aliyuncs.com
   */
  intranetDomain?: string;
  /**
   * @remarks
   * The instance ports that are accessible over an internal network.
   * 
   * @example
   * 8848,6443,9848,8761
   */
  intranetPort?: string;
  /**
   * @remarks
   * The O\\&M time window.
   */
  maintenancePeriod?: QueryClusterInfoResponseBodyDataMaintenancePeriod;
  /**
   * @remarks
   * A deprecated parameter.
   * 
   * @example
   * null
   */
  memoryCapacity?: number;
  /**
   * @remarks
   * The version of the instance.
   * 
   * @example
   * mse_pro
   */
  mseVersion?: string;
  /**
   * @remarks
   * The network connection type of the instance.
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
   * The public bandwidth. Unit: Mbit/s.\\
   * Valid values: 0 to 5000. The value 0 indicates no access to the Internet.
   * 
   * @example
   * 1
   */
  pubNetworkFlow?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the security group to which the elastic network interface (ENI) is connected.
   * 
   * @example
   * sg-uf6hgwe067prhg68agfa
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The type of the security group to which the ENI is connected.
   * 
   * @example
   * enterprise
   */
  securityGroupType?: string;
  /**
   * @remarks
   * The tag.
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-bp1egfakxxxxx
   */
  vSwitchId?: string;
  versionCode?: string;
  versionLifecycle?: string;
  /**
   * @remarks
   * The ID of the VPC where the instance resides.
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
   * The details of the data.
   */
  data?: QueryClusterInfoResponseBodyData;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * mse-100-000
   */
  errorCode?: string;
  /**
   * @remarks
   * The message returned.
   * 
   * *   If the request is successful, a success message is returned.
   * *   If the request fails, an error message is returned.
   * 
   * @example
   * The request is successfully processed.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 415088B3-A7BE-56F6-9CD9-C42DE895CD41
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   `true`: The request was successful.
   * *   `false`: The request failed.
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


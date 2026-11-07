// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryClusterDetailResponseBodyDataInstanceModels extends $dara.Model {
  /**
   * @remarks
   * The creation timestamp.
   * 
   * @example
   * 1578575377732
   */
  creationTimestamp?: string;
  /**
   * @remarks
   * The health status of the instance.
   * 
   * @example
   * Running
   */
  healthStatus?: string;
  /**
   * @remarks
   * The public IP address.
   * 
   * @example
   * 47.98.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The IP address of the instance.
   * 
   * @example
   * 10.12.XX.XX
   */
  ip?: string;
  /**
   * @remarks
   * The name of the pod.
   * 
   * @example
   * mse-7413****-159616656****-reg-center-0-0
   */
  podName?: string;
  /**
   * @remarks
   * The role.
   * 
   * @example
   * Peer
   */
  role?: string;
  /**
   * @remarks
   * The single-tunnel IP address.
   * 
   * @example
   * 192.168.XX.XX
   */
  singleTunnelVip?: string;
  /**
   * @remarks
   * The zone.
   * 
   * @example
   * cn-shanghai-f
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

export class QueryClusterDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The whitelist.
   * 
   * @example
   * []
   */
  aclEntryList?: string;
  /**
   * @remarks
   * The whitelist ID.
   * 
   * @example
   * acl-bp17020kiqvzutwwj****
   */
  aclId?: string;
  /**
   * @remarks
   * The application version.
   * 
   * @example
   * 1.2.1
   */
  appVersion?: string;
  /**
   * @remarks
   * The billing method, including subscription and pay-as-you-go.
   * 
   * @example
   * Pay-as-you-go
   */
  chargeType?: string;
  /**
   * @remarks
   * The alias of the cluster.
   * 
   * @example
   * mse-7413****
   */
  clusterAliasName?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * mse-bc1a29b0-160230875****
   */
  clusterName?: string;
  /**
   * @remarks
   * The engine specifications.
   * 
   * @example
   * MSE_SC_1_2_200_c
   */
  clusterSpecification?: string;
  /**
   * @remarks
   * The cluster type, including ZooKeeper, Nacos-Ans, and Eureka.
   * 
   * @example
   * Nacos-Ans
   */
  clusterType?: string;
  /**
   * @remarks
   * The cluster version.
   * 
   * @example
   * 1.2.1
   */
  clusterVersion?: string;
  /**
   * @remarks
   * The network connectivity type. Valid values:
   * - slb
   * - eni
   * 
   * @example
   * slb
   */
  connectionType?: string;
  /**
   * @remarks
   * The number of CPUs.
   * 
   * @example
   * 1
   */
  cpu?: number;
  /**
   * @remarks
   * The time when the cluster was created.
   * 
   * @example
   * 2020-07-31 11:36:08
   */
  createTime?: string;
  /**
   * @remarks
   * The disk capacity. Unit: GB.
   * 
   * @example
   * 60
   */
  diskCapacity?: number;
  /**
   * @remarks
   * The disk type.
   * 
   * @example
   * alicloud-disk-ssd-multi-zone
   */
  diskType?: string;
  /**
   * @remarks
   * The health status of the cluster.
   * 
   * @example
   * RESTART_SUCCESS
   */
  healthStatus?: string;
  /**
   * @remarks
   * The time taken to create the cluster. Unit: ms.
   * 
   * @example
   * 98408
   */
  initCostTime?: number;
  /**
   * @remarks
   * The creation status of the cluster.
   * 
   * @example
   * RESTART_SUCCESS
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
   * The list of instances.
   */
  instanceModels?: QueryClusterDetailResponseBodyDataInstanceModels[];
  /**
   * @remarks
   * The public endpoint.
   * 
   * @example
   * 47.98.XX.XX
   */
  internetAddress?: string;
  /**
   * @remarks
   * The public domain name.
   * 
   * @example
   * mse-7413****-p.eureka.mse.aliyuncs.com
   */
  internetDomain?: string;
  /**
   * @remarks
   * The private port.
   * 
   * @example
   * 8761
   */
  internetPort?: string;
  /**
   * @remarks
   * The private endpoint.
   * 
   * @example
   * 192.168.XX.XX
   */
  intranetAddress?: string;
  /**
   * @remarks
   * The private domain name.
   * 
   * @example
   * mse-7413****-eureka.mse.aliyuncs.com
   */
  intranetDomain?: string;
  /**
   * @remarks
   * The private port.
   * 
   * @example
   * 8761
   */
  intranetPort?: string;
  /**
   * @remarks
   * The memory size. Unit: GB.
   * 
   * @example
   * 2
   */
  memoryCapacity?: number;
  /**
   * @remarks
   * The MSE version.
   * 
   * @example
   * mse_basic
   */
  mseVersion?: string;
  /**
   * @remarks
   * The network type. Valid values:
   * - privatenet: VPC.
   * - pubnet: Internet.
   * 
   * @example
   * privatenet
   */
  netType?: string;
  /**
   * @remarks
   * The original order version number.
   * 
   * @example
   * 1.2.0
   */
  orderClusterVersion?: string;
  /**
   * @remarks
   * The billing method, including subscription and pay-as-you-go.
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
   * 3
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
   * The resource group ID.
   * 
   * @example
   * rg-aek2dhgysj*****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags bound to the instance.
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-xxx-xxxx
   */
  vSwitchId?: string;
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
   * The VPC ID.
   * 
   * @example
   * vpc-bp1hcg467ekqsv0zr****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      aclEntryList: 'AclEntryList',
      aclId: 'AclId',
      appVersion: 'AppVersion',
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
      memoryCapacity: 'MemoryCapacity',
      mseVersion: 'MseVersion',
      netType: 'NetType',
      orderClusterVersion: 'OrderClusterVersion',
      payInfo: 'PayInfo',
      pubNetworkFlow: 'PubNetworkFlow',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
      vSwitchId: 'VSwitchId',
      versionLifecycle: 'VersionLifecycle',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclEntryList: 'string',
      aclId: 'string',
      appVersion: 'string',
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
      healthStatus: 'string',
      initCostTime: 'number',
      initStatus: 'string',
      instanceCount: 'number',
      instanceId: 'string',
      instanceModels: { 'type': 'array', 'itemType': QueryClusterDetailResponseBodyDataInstanceModels },
      internetAddress: 'string',
      internetDomain: 'string',
      internetPort: 'string',
      intranetAddress: 'string',
      intranetDomain: 'string',
      intranetPort: 'string',
      memoryCapacity: 'number',
      mseVersion: 'string',
      netType: 'string',
      orderClusterVersion: 'string',
      payInfo: 'string',
      pubNetworkFlow: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      vSwitchId: 'string',
      versionLifecycle: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceModels)) {
      $dara.Model.validateArray(this.instanceModels);
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

export class QueryClusterDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data overview.
   */
  data?: QueryClusterDetailResponseBodyData;
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
   * @example
   * Request processed successfully
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9515ACA4-E94D-440D-989E-C379FCED****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * - true: The request was successful.
   * - false: The request failed.
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
      data: QueryClusterDetailResponseBodyData,
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryClusterDetailResponseBodyDataInstanceModels extends $dara.Model {
  /**
   * @remarks
   * The timestamp when the instance was created.
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
   * The single-thread IP address.
   * 
   * @example
   * 192.168.XX.XX
   */
  singleTunnelVip?: string;
  /**
   * @remarks
   * The zone ID.
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
   * The ID of the whitelist.
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
   * The billing method, such as subscription or pay-as-you-go.
   * 
   * @example
   * Pay-as-you-go
   */
  chargeType?: string;
  /**
   * @remarks
   * The alias of the instance.
   * 
   * @example
   * mse-7413****
   */
  clusterAliasName?: string;
  /**
   * @remarks
   * The name of the instance.
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
   * The type of the instance. Valid values: ZooKeeper, Nacos-Ans, and Eureka.
   * 
   * @example
   * Nacos-Ans
   */
  clusterType?: string;
  /**
   * @remarks
   * The version of the instance.
   * 
   * @example
   * 1.2.1
   */
  clusterVersion?: string;
  /**
   * @remarks
   * The network connection type. Valid values:
   * 
   * *   slb
   * *   eni
   * 
   * @example
   * slb
   */
  connectionType?: string;
  /**
   * @remarks
   * The number of vCPUs.
   * 
   * @example
   * 1
   */
  cpu?: number;
  /**
   * @remarks
   * The time when the instance was created.
   * 
   * @example
   * 2020-07-31 11:36:08
   */
  createTime?: string;
  /**
   * @remarks
   * The capacity of the disk. Unit: GB.
   * 
   * @example
   * 60
   */
  diskCapacity?: number;
  /**
   * @remarks
   * The type of the disk.
   * 
   * @example
   * alicloud-disk-ssd-multi-zone
   */
  diskType?: string;
  /**
   * @remarks
   * The health status of the instance.
   * 
   * @example
   * RESTART_SUCCESS
   */
  healthStatus?: string;
  /**
   * @remarks
   * The amount of time taken to create the instance. Unit: milliseconds.
   * 
   * @example
   * 98408
   */
  initCostTime?: number;
  /**
   * @remarks
   * The creation status of the instance.
   * 
   * @example
   * RESTART_SUCCESS
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
   * The ID of the instance.
   * 
   * @example
   * mse-cn-st21ri2****
   */
  instanceId?: string;
  /**
   * @remarks
   * The list of instance nodes.
   */
  instanceModels?: QueryClusterDetailResponseBodyDataInstanceModels[];
  /**
   * @remarks
   * The public IP address of the instance.
   * 
   * @example
   * 47.98.XX.XX
   */
  internetAddress?: string;
  /**
   * @remarks
   * The public endpoint of the instance.
   * 
   * @example
   * mse-7413****-p.eureka.mse.aliyuncs.com
   */
  internetDomain?: string;
  /**
   * @remarks
   * The private port number.
   * 
   * @example
   * 8761
   */
  internetPort?: string;
  /**
   * @remarks
   * The internal IP address.
   * 
   * @example
   * 192.168.XX.XX
   */
  intranetAddress?: string;
  /**
   * @remarks
   * The internal endpoint of the instance.
   * 
   * @example
   * mse-7413****-eureka.mse.aliyuncs.com
   */
  intranetDomain?: string;
  /**
   * @remarks
   * The private port number.
   * 
   * @example
   * 8761
   */
  intranetPort?: string;
  /**
   * @remarks
   * The size of the memory. Unit: GB.
   * 
   * @example
   * 2
   */
  memoryCapacity?: number;
  /**
   * @remarks
   * The edition of Microservices Engine (MSE).
   * 
   * @example
   * mse_basic
   */
  mseVersion?: string;
  /**
   * @remarks
   * The network type of the instance. Valid values:
   * 
   * *   `privatenet`: VPC
   * *   `pubnet`: Internet
   * 
   * @example
   * privatenet
   */
  netType?: string;
  /**
   * @remarks
   * The version number of the original order.
   * 
   * @example
   * 1.2.0
   */
  orderClusterVersion?: string;
  /**
   * @remarks
   * The billing method, such as subscription or pay-as-you-go.
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
   * The ID of the resource group.
   * 
   * @example
   * rg-aek2dhgysj*****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags that are attached to the instance.
   */
  tags?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-xxx-xxxx
   */
  vSwitchId?: string;
  versionLifecycle?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
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
   * The details of the data.
   */
  data?: QueryClusterDetailResponseBodyData;
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
   * @example
   * The request is successfully processed.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9515ACA4-E94D-440D-989E-C379FCED****
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


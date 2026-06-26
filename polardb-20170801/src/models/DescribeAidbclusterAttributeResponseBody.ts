// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAIDBClusterAttributeResponseBodyDBNodesChildVolumes extends $dara.Model {
  /**
   * @remarks
   * The actual mount path.
   * 
   * @example
   * /tmp/CrowdStrike
   */
  mountPath?: string;
  /**
   * @remarks
   * The cloud disk name.
   * 
   * @example
   * jueming
   */
  name?: string;
  /**
   * @remarks
   * The storage size.
   * 
   * @example
   * 8192
   */
  sizeGB?: string;
  /**
   * @remarks
   * The storage type.
   * 
   * @example
   * PolarFs
   */
  storageCategory?: string;
  /**
   * @remarks
   * The storage class.
   * 
   * @example
   * PL1
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      mountPath: 'MountPath',
      name: 'Name',
      sizeGB: 'SizeGB',
      storageCategory: 'StorageCategory',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPath: 'string',
      name: 'string',
      sizeGB: 'string',
      storageCategory: 'string',
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

export class DescribeAIDBClusterAttributeResponseBodyDBNodes extends $dara.Model {
  /**
   * @remarks
   * The list of data cloud disks.
   */
  childVolumes?: DescribeAIDBClusterAttributeResponseBodyDBNodesChildVolumes[];
  /**
   * @remarks
   * The number of CPU cores of the node.
   * 
   * @example
   * 2
   */
  cpuCores?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2020-08-14T05:58:42Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The cluster specifications.
   * 
   * @example
   * polar.pg.g8.8xlarge.gu30
   */
  DBNodeClass?: string;
  /**
   * @remarks
   * The node description.
   * 
   * @example
   * test
   */
  DBNodeDescription?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * pi-****************
   */
  DBNodeId?: string;
  /**
   * @remarks
   * The node status. Valid values:
   * * **Creating**: being created 
   * * **Running**: running 
   * * **Deleting**: being deleted  
   * * **Rebooting**: restarting  
   * * **DBNodeCreating**: adding a node  
   * * **DBNodeDeleting**: deleting a node 
   * * **ClassChanging**: changing node specifications  
   * * **MinorVersionUpgrading**: upgrading the minor engine version
   * * **Maintaining**: under maintenance  
   * * **Switching**: switching.
   * 
   * @example
   * Running
   */
  DBNodeStatus?: string;
  /**
   * @remarks
   * The number of GPU cards.
   * 
   * @example
   * 2
   */
  GPU?: string;
  /**
   * @remarks
   * The private IP address.
   * 
   * @example
   * 10.*.*12
   */
  linkIP?: string;
  /**
   * @remarks
   * The memory size of the node. Unit: MB.
   * 
   * @example
   * 8192
   */
  memorySize?: string;
  /**
   * @remarks
   * The public IP address.
   * 
   * @example
   * 101.101.101.101
   */
  publicIp?: string;
  /**
   * @remarks
   * The Kubernetes virtual node ID.
   * 
   * @example
   * vn-***************
   */
  VNodeId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-*******************
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-*********************
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-d
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      childVolumes: 'ChildVolumes',
      cpuCores: 'CpuCores',
      creationTime: 'CreationTime',
      DBNodeClass: 'DBNodeClass',
      DBNodeDescription: 'DBNodeDescription',
      DBNodeId: 'DBNodeId',
      DBNodeStatus: 'DBNodeStatus',
      GPU: 'GPU',
      linkIP: 'LinkIP',
      memorySize: 'MemorySize',
      publicIp: 'PublicIp',
      VNodeId: 'VNodeId',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      childVolumes: { 'type': 'array', 'itemType': DescribeAIDBClusterAttributeResponseBodyDBNodesChildVolumes },
      cpuCores: 'string',
      creationTime: 'string',
      DBNodeClass: 'string',
      DBNodeDescription: 'string',
      DBNodeId: 'string',
      DBNodeStatus: 'string',
      GPU: 'string',
      linkIP: 'string',
      memorySize: 'string',
      publicIp: 'string',
      VNodeId: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.childVolumes)) {
      $dara.Model.validateArray(this.childVolumes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAIDBClusterAttributeResponseBodyEndpointListNetInfoItems extends $dara.Model {
  /**
   * @remarks
   * The database connection address.
   * 
   * @example
   * pc-**********.rwlb.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The network type of the connection string. Valid values:
   * * **Public**: public endpoint
   * * **Private**: private endpoint
   * * **Inner**: private endpoint (classic network).
   * 
   * @example
   * Public
   */
  netType?: string;
  /**
   * @remarks
   * The port number.
   * 
   * @example
   * 3306
   */
  port?: string;
  static names(): { [key: string]: string } {
    return {
      connectionString: 'ConnectionString',
      netType: 'NetType',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectionString: 'string',
      netType: 'string',
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

export class DescribeAIDBClusterAttributeResponseBodyEndpointList extends $dara.Model {
  /**
   * @remarks
   * The list of network information of the instance.
   */
  netInfoItems?: DescribeAIDBClusterAttributeResponseBodyEndpointListNetInfoItems[];
  static names(): { [key: string]: string } {
    return {
      netInfoItems: 'NetInfoItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      netInfoItems: { 'type': 'array', 'itemType': DescribeAIDBClusterAttributeResponseBodyEndpointListNetInfoItems },
    };
  }

  validate() {
    if(Array.isArray(this.netInfoItems)) {
      $dara.Model.validateArray(this.netInfoItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAIDBClusterAttributeResponseBodyVolumes extends $dara.Model {
  /**
   * @remarks
   * The mount path in the container.
   * 
   * @example
   * /var/run/secrets/kubernetes.io/serviceaccount
   */
  mountPath?: string;
  /**
   * @remarks
   * The cloud disk name.
   * 
   * @example
   * jueming
   */
  name?: string;
  /**
   * @remarks
   * The storage size.
   * 
   * @example
   * 8192
   */
  sizeGB?: string;
  /**
   * @remarks
   * The storage type.
   * 
   * @example
   * PL1
   */
  storageCategory?: string;
  /**
   * @remarks
   * The storage class.
   * 
   * @example
   * PolarFs
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      mountPath: 'MountPath',
      name: 'Name',
      sizeGB: 'SizeGB',
      storageCategory: 'StorageCategory',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPath: 'string',
      name: 'string',
      sizeGB: 'string',
      storageCategory: 'string',
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

export class DescribeAIDBClusterAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The node type. Valid values:
   * - vnode: managed by ACK
   * - container: logon-enabled container
   * - maas: model service.
   * 
   * @example
   * vnode
   */
  aiNodeType?: string;
  /**
   * @remarks
   * The API key.
   * 
   * @example
   * x********
   */
  apiKey?: string;
  /**
   * @remarks
   * The cluster creation time.
   * 
   * @example
   * 2020-08-14T05:58:42Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The cluster description. Fuzzy match is supported.
   * 
   * @example
   * test
   */
  DBClusterDescription?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The cluster status. Valid values:
   * 
   * - **Creating**: being created
   * - **Running**: running
   * - **Deleting**: being released
   * - **DBNodeCreating**: adding a node
   * - **DBNodeDeleting**: deleting a node
   * - **ClassChanging**: changing node specifications 
   * - **Deleted**: released.
   * 
   * @example
   * Running
   */
  DBClusterStatus?: string;
  /**
   * @remarks
   * The node details.
   */
  DBNodes?: DescribeAIDBClusterAttributeResponseBodyDBNodes[];
  /**
   * @remarks
   * The cluster version. Valid values:
   * 
   * **1.0**
   * 
   * **2.0**
   * 
   * **3.0**.
   * 
   * @example
   * 1.0
   */
  DBVersion?: string;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-xxxxxx
   */
  ecsSecurityGroupId?: string;
  /**
   * @remarks
   * The list of network connection addresses of the instance.
   */
  endpointList?: DescribeAIDBClusterAttributeResponseBodyEndpointList[];
  /**
   * @remarks
   * The cluster expiration time.
   * 
   * > This parameter is returned only for **Prepaid** (subscription) clusters. An empty value is returned for **Postpaid** (pay-as-you-go) clusters.
   * 
   * @example
   * 2020-11-14T16:00:00Z
   */
  expireTime?: string;
  /**
   * @remarks
   * Indicates whether the cluster has expired. Valid values:
   * 
   * - **true**
   * 
   * - **false**.
   * 
   * @example
   * false
   */
  expired?: boolean;
  gatewayId?: string;
  /**
   * @remarks
   * The internal IP address.
   * 
   * @example
   * 10.*.*.72
   */
  internalIp?: string;
  /**
   * @remarks
   * The KVCache instance ID.
   * 
   * @example
   * pkv-xxxxx
   */
  KVCacheInstanceId?: string;
  /**
   * @remarks
   * The ACK cluster ID.
   * 
   * @example
   * xxxxxxxxxxxxxxxxxxxxxxx
   */
  kubeClusterId?: string;
  /**
   * @remarks
   * The instance lock mode. The value **lock** indicates that the instance is automatically locked due to expiration or overdue payment.
   * 
   * @example
   * Unlock
   */
  lockMode?: string;
  /**
   * @remarks
   * The maximum number of requests per minute.
   * 
   * @example
   * 20
   */
  maxQPM?: string;
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * Qwen3-Embedding-8B
   */
  modelName?: string;
  /**
   * @remarks
   * The model type.
   * 
   * @example
   * custom
   */
  modelType?: string;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * - **Postpaid**: pay-as-you-go.
   * - **Prepaid**: subscription.
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The public IP address.
   * 
   * @example
   * 8.xxx.xxx.xxx
   */
  publicIp?: string;
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
   * Id of the request
   * 
   * @example
   * EBEAA83D-1734-42E3-85E3-E25F6E******
   */
  requestId?: string;
  /**
   * @remarks
   * The architecture type. Valid values:
   * - container: AI container
   * - ainode: AI node.
   * 
   * @example
   * container
   */
  runType?: string;
  /**
   * @remarks
   * Valid values for PolarDB Enterprise Edition:
   * - **PSL5**
   * - **PSL4**
   * 
   * Valid values for PolarDB for MySQL Standard Edition:
   * - **ESSDPL0**
   * - **ESSDPL1**
   * - **ESSDPL2**
   * - **ESSDPL3**
   * - **ESSDAUTOPL**.
   * 
   * @example
   * essdpl1
   */
  storageType?: string;
  /**
   * @remarks
   * The VPC ID specified for the zone switchover.
   * 
   * @example
   * vpc-*******************
   */
  VPCId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * > If VPCId is specified, VSwitchId is required.
   * 
   * @example
   * vsw-*********************
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The list of data cloud disks.
   */
  volumes?: DescribeAIDBClusterAttributeResponseBodyVolumes[];
  /**
   * @remarks
   * The zone ID of the PolarDB cluster node.
   * 
   * @example
   * cn-hangzhou-d
   */
  zoneId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-i,cn-hangzhou-g
   */
  zoneIds?: string;
  static names(): { [key: string]: string } {
    return {
      aiNodeType: 'AiNodeType',
      apiKey: 'ApiKey',
      creationTime: 'CreationTime',
      DBClusterDescription: 'DBClusterDescription',
      DBClusterId: 'DBClusterId',
      DBClusterStatus: 'DBClusterStatus',
      DBNodes: 'DBNodes',
      DBVersion: 'DBVersion',
      ecsSecurityGroupId: 'EcsSecurityGroupId',
      endpointList: 'EndpointList',
      expireTime: 'ExpireTime',
      expired: 'Expired',
      gatewayId: 'GatewayId',
      internalIp: 'InternalIp',
      KVCacheInstanceId: 'KVCacheInstanceId',
      kubeClusterId: 'KubeClusterId',
      lockMode: 'LockMode',
      maxQPM: 'MaxQPM',
      modelName: 'ModelName',
      modelType: 'ModelType',
      payType: 'PayType',
      publicIp: 'PublicIp',
      regionId: 'RegionId',
      requestId: 'RequestId',
      runType: 'RunType',
      storageType: 'StorageType',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      volumes: 'Volumes',
      zoneId: 'ZoneId',
      zoneIds: 'ZoneIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiNodeType: 'string',
      apiKey: 'string',
      creationTime: 'string',
      DBClusterDescription: 'string',
      DBClusterId: 'string',
      DBClusterStatus: 'string',
      DBNodes: { 'type': 'array', 'itemType': DescribeAIDBClusterAttributeResponseBodyDBNodes },
      DBVersion: 'string',
      ecsSecurityGroupId: 'string',
      endpointList: { 'type': 'array', 'itemType': DescribeAIDBClusterAttributeResponseBodyEndpointList },
      expireTime: 'string',
      expired: 'boolean',
      gatewayId: 'string',
      internalIp: 'string',
      KVCacheInstanceId: 'string',
      kubeClusterId: 'string',
      lockMode: 'string',
      maxQPM: 'string',
      modelName: 'string',
      modelType: 'string',
      payType: 'string',
      publicIp: 'string',
      regionId: 'string',
      requestId: 'string',
      runType: 'string',
      storageType: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      volumes: { 'type': 'array', 'itemType': DescribeAIDBClusterAttributeResponseBodyVolumes },
      zoneId: 'string',
      zoneIds: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.DBNodes)) {
      $dara.Model.validateArray(this.DBNodes);
    }
    if(Array.isArray(this.endpointList)) {
      $dara.Model.validateArray(this.endpointList);
    }
    if(Array.isArray(this.volumes)) {
      $dara.Model.validateArray(this.volumes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


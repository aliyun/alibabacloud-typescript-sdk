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

export class DescribeAIDBClusterAttributeResponseBodyDBNodesSupportedApis extends $dara.Model {
  apiName?: string;
  generationMode?: string;
  path?: string;
  protocol?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      generationMode: 'GenerationMode',
      path: 'Path',
      protocol: 'Protocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      generationMode: 'string',
      path: 'string',
      protocol: 'string',
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
   * * **Rebooting**: being restarted  
   * * **DBNodeCreating**: adding a node  
   * * **DBNodeDeleting**: deleting a node 
   * * **ClassChanging**: changing node specifications  
   * * **MinorVersionUpgrading**: upgrading the minor version
   * * **Maintaining**: being maintained  
   * * **Switching**: being switched
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
  modelName?: string;
  /**
   * @remarks
   * The public IP address.
   * 
   * @example
   * 101.101.101.101
   */
  publicIp?: string;
  supportedApis?: DescribeAIDBClusterAttributeResponseBodyDBNodesSupportedApis[];
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
      modelName: 'ModelName',
      publicIp: 'PublicIp',
      supportedApis: 'SupportedApis',
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
      modelName: 'string',
      publicIp: 'string',
      supportedApis: { 'type': 'array', 'itemType': DescribeAIDBClusterAttributeResponseBodyDBNodesSupportedApis },
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
    if(Array.isArray(this.supportedApis)) {
      $dara.Model.validateArray(this.supportedApis);
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
   * The database endpoint.
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
   * * **Inner**: private endpoint (classic network)
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

export class DescribeAIDBClusterAttributeResponseBodyTimeSlicesInfoTimeSlices extends $dara.Model {
  beginTime?: string;
  endTime?: string;
  static names(): { [key: string]: string } {
    return {
      beginTime: 'BeginTime',
      endTime: 'EndTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTime: 'string',
      endTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAIDBClusterAttributeResponseBodyTimeSlicesInfo extends $dara.Model {
  timeSlices?: DescribeAIDBClusterAttributeResponseBodyTimeSlicesInfoTimeSlices[];
  static names(): { [key: string]: string } {
    return {
      timeSlices: 'TimeSlices',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timeSlices: { 'type': 'array', 'itemType': DescribeAIDBClusterAttributeResponseBodyTimeSlicesInfoTimeSlices },
    };
  }

  validate() {
    if(Array.isArray(this.timeSlices)) {
      $dara.Model.validateArray(this.timeSlices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAIDBClusterAttributeResponseBodyVnodeKubernetesConfigLabels extends $dara.Model {
  key?: string;
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

export class DescribeAIDBClusterAttributeResponseBodyVnodeKubernetesConfigTaints extends $dara.Model {
  effect?: string;
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      effect: 'Effect',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effect: 'string',
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

export class DescribeAIDBClusterAttributeResponseBodyVnodeKubernetesConfig extends $dara.Model {
  labels?: DescribeAIDBClusterAttributeResponseBodyVnodeKubernetesConfigLabels[];
  taints?: DescribeAIDBClusterAttributeResponseBodyVnodeKubernetesConfigTaints[];
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
      taints: 'Taints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': DescribeAIDBClusterAttributeResponseBodyVnodeKubernetesConfigLabels },
      taints: { 'type': 'array', 'itemType': DescribeAIDBClusterAttributeResponseBodyVnodeKubernetesConfigTaints },
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(Array.isArray(this.taints)) {
      $dara.Model.validateArray(this.taints);
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
   * The mount path inside the container.
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
   * - container: loginable container
   * - maas: model service
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
   * - **Deleted**: released
   * 
   * @example
   * Running
   */
  DBClusterStatus?: string;
  DBInstanceStatusDesc?: string;
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
   * **3.0**
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
   * > A specific value is returned only for clusters whose billing method is **Prepaid** (subscription). An empty value is returned for **Postpaid** (pay-as-you-go) clusters.
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
   * - **false**
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
   * The instance lock mode. The value **lock** indicates that the instance is automatically expired or has an overdue payment.
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
  maxTPM?: string;
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * Qwen3-Embedding-8B
   */
  modelName?: string;
  modelSpaceName?: string;
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
   * - ainode: AI node
   * 
   * @example
   * container
   */
  runType?: string;
  /**
   * @remarks
   * The storage type for Enterprise Edition. Valid values:
   * - **PSL5**
   * - **PSL4**
   * 
   * The storage type for Standard Edition. Valid values:
   * - **ESSDPL0**
   * - **ESSDPL1**
   * - **ESSDPL2**
   * - **ESSDPL3**
   * - **ESSDAUTOPL**
   * 
   * @example
   * essdpl1
   */
  storageType?: string;
  timeSlicesInfo?: DescribeAIDBClusterAttributeResponseBodyTimeSlicesInfo;
  timeSlicesType?: string;
  /**
   * @remarks
   * The VPC ID that can be specified when switching zones.
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
  vnodeKubernetesConfig?: DescribeAIDBClusterAttributeResponseBodyVnodeKubernetesConfig;
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
      DBInstanceStatusDesc: 'DBInstanceStatusDesc',
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
      maxTPM: 'MaxTPM',
      modelName: 'ModelName',
      modelSpaceName: 'ModelSpaceName',
      modelType: 'ModelType',
      payType: 'PayType',
      publicIp: 'PublicIp',
      regionId: 'RegionId',
      requestId: 'RequestId',
      runType: 'RunType',
      storageType: 'StorageType',
      timeSlicesInfo: 'TimeSlicesInfo',
      timeSlicesType: 'TimeSlicesType',
      VPCId: 'VPCId',
      vSwitchId: 'VSwitchId',
      vnodeKubernetesConfig: 'VnodeKubernetesConfig',
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
      DBInstanceStatusDesc: 'string',
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
      maxTPM: 'string',
      modelName: 'string',
      modelSpaceName: 'string',
      modelType: 'string',
      payType: 'string',
      publicIp: 'string',
      regionId: 'string',
      requestId: 'string',
      runType: 'string',
      storageType: 'string',
      timeSlicesInfo: DescribeAIDBClusterAttributeResponseBodyTimeSlicesInfo,
      timeSlicesType: 'string',
      VPCId: 'string',
      vSwitchId: 'string',
      vnodeKubernetesConfig: DescribeAIDBClusterAttributeResponseBodyVnodeKubernetesConfig,
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
    if(this.timeSlicesInfo && typeof (this.timeSlicesInfo as any).validate === 'function') {
      (this.timeSlicesInfo as any).validate();
    }
    if(this.vnodeKubernetesConfig && typeof (this.vnodeKubernetesConfig as any).validate === 'function') {
      (this.vnodeKubernetesConfig as any).validate();
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


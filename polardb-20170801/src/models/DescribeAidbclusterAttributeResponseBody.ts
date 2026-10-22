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
   * The disk name.
   * 
   * @example
   * jueming
   */
  name?: string;
  /**
   * @remarks
   * The size of the cloud disk.
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
   * The storage category.
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
  /**
   * @remarks
   * The name of the API supported by the database node.
   * 
   * @example
   * Completions
   */
  apiName?: string;
  /**
   * @remarks
   * The generation mode of the API.
   * 
   * @example
   * stream
   */
  generationMode?: string;
  /**
   * @remarks
   * The path of the supported API.
   * 
   * @example
   * /v1/chat/completions
   */
  path?: string;
  /**
   * @remarks
   * The protocol type of the supported API.
   * 
   * @example
   * HTTP
   */
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
   * The startup command currently used by the model. If no record exists, an empty string is returned.
   * 
   * @example
   * python -m vllm.entrypoints.openai.api_server
   */
  command?: string;
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
   * The time when the node was created.
   * 
   * The time follows the ISO 8601 standard in UTC (format: YYYY-MM-DDTHH:mm:ssZ).
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
   * The description of the node.
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
   * The status of the node. Valid values:
   * * **Creating**: The node is being created. 
   * * **Running**: The node is running. 
   * * **Deleting**: The node is being deleted.  
   * * **Rebooting**: The node is being restarted.  
   * * **DBNodeCreating**: Nodes are being added.  
   * * **DBNodeDeleting**: Nodes are being deleted. 
   * * **ClassChanging**: The node specifications are being changed.  
   * * **MinorVersionUpgrading**: The minor version is being upgraded.
   * * **Maintaining**: The instance is being maintained.  
   * * **Switching**: A switchover is in progress.
   * 
   * @example
   * Running
   */
  DBNodeStatus?: string;
  /**
   * @remarks
   * The number of GPUs.
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
   * The log indexing of the worker node.
   * 
   * @example
   * worker-0
   */
  logIndex?: string;
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
   * The model name.
   * 
   * @example
   * Qwen3-Embedding-8B
   */
  modelName?: string;
  /**
   * @remarks
   * The name of the workspace to which the model belongs.
   * 
   * @example
   * my-model-space
   */
  modelSpaceName?: string;
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
   * The supported APIs.
   */
  supportedApis?: DescribeAIDBClusterAttributeResponseBodyDBNodesSupportedApis[];
  /**
   * @remarks
   * The ID of the Kubernetes virtual node.
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
   * The zone.
   * 
   * @example
   * cn-hangzhou-d
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      childVolumes: 'ChildVolumes',
      command: 'Command',
      cpuCores: 'CpuCores',
      creationTime: 'CreationTime',
      DBNodeClass: 'DBNodeClass',
      DBNodeDescription: 'DBNodeDescription',
      DBNodeId: 'DBNodeId',
      DBNodeStatus: 'DBNodeStatus',
      GPU: 'GPU',
      linkIP: 'LinkIP',
      logIndex: 'LogIndex',
      memorySize: 'MemorySize',
      modelName: 'ModelName',
      modelSpaceName: 'ModelSpaceName',
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
      command: 'string',
      cpuCores: 'string',
      creationTime: 'string',
      DBNodeClass: 'string',
      DBNodeDescription: 'string',
      DBNodeId: 'string',
      DBNodeStatus: 'string',
      GPU: 'string',
      linkIP: 'string',
      logIndex: 'string',
      memorySize: 'string',
      modelName: 'string',
      modelSpaceName: 'string',
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
   * The database connection address.
   * 
   * @example
   * pc-**********.rwlb.rds.aliyuncs.com
   */
  connectionString?: string;
  /**
   * @remarks
   * The network type of the connection string. Valid values:
   * * **Public**: Public network address.
   * * **Private**: Private network address.
   * * **Inner**: Private network address (classic network).
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
  /**
   * @remarks
   * The start time of the time slice, in the HH:mm format.
   * 
   * @example
   * 08:00
   */
  beginTime?: string;
  /**
   * @remarks
   * The end time of the time slice, in the HH:mm format.
   * 
   * @example
   * 18:00
   */
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
  /**
   * @remarks
   * The list of time slices for pay-as-you-go billing.
   */
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
  /**
   * @remarks
   * The key of the node label.
   * 
   * @example
   * environment
   */
  key?: string;
  /**
   * @remarks
   * The value of the node label.
   * 
   * @example
   * production
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

export class DescribeAIDBClusterAttributeResponseBodyVnodeKubernetesConfigTaints extends $dara.Model {
  /**
   * @remarks
   * The scheduling effect of the node taint.
   * 
   * @example
   * NoSchedule
   */
  effect?: string;
  /**
   * @remarks
   * The key of the node taint.
   * 
   * @example
   * dedicated
   */
  key?: string;
  /**
   * @remarks
   * The value of the node taint.
   * 
   * @example
   * groupName
   */
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
  /**
   * @remarks
   * The list of Kubernetes node labels.
   */
  labels?: DescribeAIDBClusterAttributeResponseBodyVnodeKubernetesConfigLabels[];
  /**
   * @remarks
   * The list of Kubernetes node taints.
   */
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
   * The mount path in the container.
   * 
   * @example
   * /var/run/secrets/kubernetes.io/serviceaccount
   */
  mountPath?: string;
  /**
   * @remarks
   * The disk name.
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
   * The storage category.
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
   * - vnode: ACK-managed node.
   * - container: container that supports logon.
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
   * The startup command currently used by the model service.
   * 
   * @example
   * python -m vllm.entrypoints.openai.api_server
   */
  command?: string;
  /**
   * @remarks
   * The time when the cluster was created.
   * 
   * The time follows the ISO 8601 standard in UTC (format: YYYY-MM-DDTHH:mm:ssZ).
   * 
   * @example
   * 2020-08-14T05:58:42Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The current measured model capacity of the instance. The abstract capacity unit is 1000, which is equivalent to one L20N card.
   * 
   * @example
   * 8000
   */
  currentCapacity?: number;
  /**
   * @remarks
   * The custom Object Storage Service (OSS) path of the model currently used by the instance.
   * 
   * @example
   * /my-model-bucket/models/qwen3
   */
  customOssPath?: string;
  /**
   * @remarks
   * The description of the cluster. Fuzzy match is supported.
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
   * The status of the cluster. Valid values:
   * 
   * - **Creating**: The cluster is being created.
   * - **Running**: The cluster is running.
   * - **Deleting**: The cluster is being released.
   * - **DBNodeCreating**: Nodes are being added.
   * - **DBNodeDeleting**: Nodes are being deleted.
   * - **ClassChanging**: The node specifications are being changed. 
   * - **Deleted**: The cluster is released.
   * 
   * @example
   * Running
   */
  DBClusterStatus?: string;
  /**
   * @remarks
   * The database instance status description. A value of ACTIVATION indicates that the database instance is running.
   * 
   * @example
   * ACTIVATION
   */
  DBInstanceStatusDesc?: string;
  /**
   * @remarks
   * The details of the node information.
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
   * Specifies whether the dedicated host mode is used.
   */
  dedicatedHostModel?: boolean;
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
   * The list of network endpoint addresses of the instance.
   */
  endpointList?: DescribeAIDBClusterAttributeResponseBodyEndpointList[];
  /**
   * @remarks
   * The expiration time of the cluster.
   * 
   * > A specific value is returned only for clusters whose billing method is **Prepaid** (subscription). For clusters whose billing method is **Postpaid** (pay-as-you-go), an empty value is returned.
   * 
   * The time follows the ISO 8601 standard in UTC (format: YYYY-MM-DDTHH:mm:ssZ).
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
  /**
   * @remarks
   * The ID of the AI gateway instance.
   * 
   * @example
   * pg-2ze24rr575j5b18cg
   */
  gatewayId?: string;
  /**
   * @remarks
   * The model inference engine.
   * 
   * @example
   * sglang
   */
  inferenceEngine?: string;
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
   * The lock mode of the instance. A value of **lock** indicates that the instance has expired or has an overdue payment.
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
   * The maximum number of tokens allowed per minute.
   * 
   * @example
   * 10000
   */
  maxTPM?: string;
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
   * The name of the workspace to which the model belongs.
   * 
   * @example
   * my-model-space
   */
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
   * - **Postpaid**: pay-as-you-go
   * - **Prepaid**: subscription
   * 
   * @example
   * Postpaid
   */
  payType?: string;
  /**
   * @remarks
   * The custom model OSS path before the last change.
   * 
   * @example
   * /my-model-bucket/models/qwen2
   */
  previousCustomOssPath?: string;
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
   * The storage type. Valid values for Enterprise Edition:
   * - **PSL5**
   * - **PSL4**
   * 
   * Valid values for Standard Edition:
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
  /**
   * @remarks
   * The time slice configuration for pay-as-you-go billing.
   */
  timeSlicesInfo?: DescribeAIDBClusterAttributeResponseBodyTimeSlicesInfo;
  /**
   * @remarks
   * The cycle type of the time slice configuration.
   * 
   * @example
   * daily
   */
  timeSlicesType?: string;
  /**
   * @remarks
   * The VPC ID specified for zone switching.
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
   * The Kubernetes configuration of the virtual node.
   */
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
   * The zone IDs.
   * 
   * @example
   * cn-hangzhou-i,cn-hangzhou-g
   */
  zoneIds?: string;
  static names(): { [key: string]: string } {
    return {
      aiNodeType: 'AiNodeType',
      apiKey: 'ApiKey',
      command: 'Command',
      creationTime: 'CreationTime',
      currentCapacity: 'CurrentCapacity',
      customOssPath: 'CustomOssPath',
      DBClusterDescription: 'DBClusterDescription',
      DBClusterId: 'DBClusterId',
      DBClusterStatus: 'DBClusterStatus',
      DBInstanceStatusDesc: 'DBInstanceStatusDesc',
      DBNodes: 'DBNodes',
      DBVersion: 'DBVersion',
      dedicatedHostModel: 'DedicatedHostModel',
      ecsSecurityGroupId: 'EcsSecurityGroupId',
      endpointList: 'EndpointList',
      expireTime: 'ExpireTime',
      expired: 'Expired',
      gatewayId: 'GatewayId',
      inferenceEngine: 'InferenceEngine',
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
      previousCustomOssPath: 'PreviousCustomOssPath',
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
      command: 'string',
      creationTime: 'string',
      currentCapacity: 'number',
      customOssPath: 'string',
      DBClusterDescription: 'string',
      DBClusterId: 'string',
      DBClusterStatus: 'string',
      DBInstanceStatusDesc: 'string',
      DBNodes: { 'type': 'array', 'itemType': DescribeAIDBClusterAttributeResponseBodyDBNodes },
      DBVersion: 'string',
      dedicatedHostModel: 'boolean',
      ecsSecurityGroupId: 'string',
      endpointList: { 'type': 'array', 'itemType': DescribeAIDBClusterAttributeResponseBodyEndpointList },
      expireTime: 'string',
      expired: 'boolean',
      gatewayId: 'string',
      inferenceEngine: 'string',
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
      previousCustomOssPath: 'string',
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


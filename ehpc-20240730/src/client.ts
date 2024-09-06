// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddonNodeTemplate extends $tea.Model {
  /**
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  dataDisks?: AddonNodeTemplateDataDisks[];
  /**
   * @example
   * 1
   */
  duration?: number;
  /**
   * @example
   * true
   */
  enableHT?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * aliyun_3_x64_20G_alibase_20221102.vhd
   */
  imageId?: string;
  /**
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ecs.c7.4xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CentOS  7.6 64 位
   */
  osName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CentOS  7.6 64 bit
   */
  osNameEN?: string;
  /**
   * @example
   * 1
   */
  period?: number;
  /**
   * @example
   * Month
   */
  periodUnit?: string;
  privateIpAddress?: string;
  /**
   * @example
   * 0.97
   */
  spotPriceLimit?: number;
  /**
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  systemDisk?: AddonNodeTemplateSystemDisk;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      dataDisks: 'DataDisks',
      duration: 'Duration',
      enableHT: 'EnableHT',
      imageId: 'ImageId',
      instanceChargeType: 'InstanceChargeType',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      osName: 'OsName',
      osNameEN: 'OsNameEN',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      privateIpAddress: 'PrivateIpAddress',
      spotPriceLimit: 'SpotPriceLimit',
      spotStrategy: 'SpotStrategy',
      systemDisk: 'SystemDisk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      dataDisks: { 'type': 'array', 'itemType': AddonNodeTemplateDataDisks },
      duration: 'number',
      enableHT: 'boolean',
      imageId: 'string',
      instanceChargeType: 'string',
      instanceId: 'string',
      instanceType: 'string',
      osName: 'string',
      osNameEN: 'string',
      period: 'number',
      periodUnit: 'string',
      privateIpAddress: 'string',
      spotPriceLimit: 'number',
      spotStrategy: 'string',
      systemDisk: AddonNodeTemplateSystemDisk,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodeTemplate extends $tea.Model {
  /**
   * @example
   * false
   */
  autoRenew?: boolean;
  /**
   * @example
   * 1
   */
  autoRenewPeriod?: number;
  dataDisks?: NodeTemplateDataDisks[];
  /**
   * @example
   * 1
   */
  duration?: number;
  /**
   * @example
   * true
   */
  enableHT?: boolean;
  /**
   * @example
   * aliyun_3_x64_20G_alibase_20221102.vhd
   */
  imageId?: string;
  /**
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @example
   * ecs.c7.4xlarge
   */
  instanceType?: string;
  /**
   * @example
   * 1
   */
  period?: number;
  /**
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @example
   * 0.97
   */
  spotPriceLimit?: number;
  /**
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  systemDisk?: NodeTemplateSystemDisk;
  static names(): { [key: string]: string } {
    return {
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      dataDisks: 'DataDisks',
      duration: 'Duration',
      enableHT: 'EnableHT',
      imageId: 'ImageId',
      instanceChargeType: 'InstanceChargeType',
      instanceType: 'InstanceType',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      spotPriceLimit: 'SpotPriceLimit',
      spotStrategy: 'SpotStrategy',
      systemDisk: 'SystemDisk',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenew: 'boolean',
      autoRenewPeriod: 'number',
      dataDisks: { 'type': 'array', 'itemType': NodeTemplateDataDisks },
      duration: 'number',
      enableHT: 'boolean',
      imageId: 'string',
      instanceChargeType: 'string',
      instanceType: 'string',
      period: 'number',
      periodUnit: 'string',
      spotPriceLimit: 'number',
      spotStrategy: 'string',
      systemDisk: NodeTemplateSystemDisk,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueueTemplate extends $tea.Model {
  /**
   * @example
   * PriorityInstanceType
   */
  allocationStrategy?: string;
  computeNodes?: NodeTemplate[];
  /**
   * @example
   * true
   */
  enableScaleIn?: boolean;
  /**
   * @example
   * true
   */
  enableScaleOut?: boolean;
  /**
   * @example
   * compute
   */
  hostnamePrefix?: string;
  hostnameSuffix?: string;
  /**
   * @example
   * 0
   */
  initialCount?: number;
  /**
   * @example
   * erdma
   */
  interConnect?: string;
  keepAliveNodes?: string[];
  /**
   * @example
   * 1000
   */
  maxCount?: number;
  /**
   * @example
   * 99
   */
  maxCountPerCycle?: number;
  /**
   * @example
   * 0
   */
  minCount?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * comp
   */
  queueName?: string;
  /**
   * @example
   * AliyunECSInstanceForEHPCRole
   */
  ramRole?: string;
  vSwitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      allocationStrategy: 'AllocationStrategy',
      computeNodes: 'ComputeNodes',
      enableScaleIn: 'EnableScaleIn',
      enableScaleOut: 'EnableScaleOut',
      hostnamePrefix: 'HostnamePrefix',
      hostnameSuffix: 'HostnameSuffix',
      initialCount: 'InitialCount',
      interConnect: 'InterConnect',
      keepAliveNodes: 'KeepAliveNodes',
      maxCount: 'MaxCount',
      maxCountPerCycle: 'MaxCountPerCycle',
      minCount: 'MinCount',
      queueName: 'QueueName',
      ramRole: 'RamRole',
      vSwitchIds: 'VSwitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationStrategy: 'string',
      computeNodes: { 'type': 'array', 'itemType': NodeTemplate },
      enableScaleIn: 'boolean',
      enableScaleOut: 'boolean',
      hostnamePrefix: 'string',
      hostnameSuffix: 'string',
      initialCount: 'number',
      interConnect: 'string',
      keepAliveNodes: { 'type': 'array', 'itemType': 'string' },
      maxCount: 'number',
      maxCountPerCycle: 'number',
      minCount: 'number',
      queueName: 'string',
      ramRole: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SharedStorageTemplate extends $tea.Model {
  /**
   * @example
   * 008b63****
   */
  fileSystemId?: string;
  /**
   * @example
   * /home
   */
  mountDirectory?: string;
  /**
   * @example
   * -t nfs -o vers=3,nolock,noresvport
   */
  mountOptions?: string;
  /**
   * @example
   * 008b****-sihc.cn-hangzhou.extreme.nas.aliyuncs.com
   */
  mountTargetDomain?: string;
  /**
   * @example
   * /
   */
  NASDirectory?: string;
  /**
   * @example
   * NFS
   */
  protocolType?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      mountDirectory: 'MountDirectory',
      mountOptions: 'MountOptions',
      mountTargetDomain: 'MountTargetDomain',
      NASDirectory: 'NASDirectory',
      protocolType: 'ProtocolType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      mountDirectory: 'string',
      mountOptions: 'string',
      mountTargetDomain: 'string',
      NASDirectory: 'string',
      protocolType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachSharedStoragesRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sharedStorages?: AttachSharedStoragesRequestSharedStorages[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      sharedStorages: 'SharedStorages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      sharedStorages: { 'type': 'array', 'itemType': AttachSharedStoragesRequestSharedStorages },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachSharedStoragesShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sharedStoragesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      sharedStoragesShrink: 'SharedStorages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      sharedStoragesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachSharedStoragesResponseBody extends $tea.Model {
  /**
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @example
   * F9B7BEF8-E42E-5090-9880-55FB7872****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachSharedStoragesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AttachSharedStoragesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AttachSharedStoragesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequest extends $tea.Model {
  additionalPackages?: CreateClusterRequestAdditionalPackages[];
  addons?: CreateClusterRequestAddons[];
  /**
   * @example
   * 2.1.0
   */
  clientVersion?: string;
  /**
   * @example
   * Standard
   */
  clusterCategory?: string;
  clusterCredentials?: CreateClusterRequestClusterCredentials;
  clusterCustomConfiguration?: CreateClusterRequestClusterCustomConfiguration;
  /**
   * @example
   * slurm22.05.8-cluster-20240718
   */
  clusterDescription?: string;
  /**
   * @example
   * Integrated
   */
  clusterMode?: string;
  /**
   * @example
   * slurm22.05.8-cluster-20240718
   */
  clusterName?: string;
  /**
   * @example
   * vsw-f8za5p0mwzgdu3wgx****
   */
  clusterVSwitchId?: string;
  /**
   * @example
   * vpc-m5efjevmclc0xdmys****
   */
  clusterVpcId?: string;
  /**
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @example
   * false
   */
  isEnterpriseSecurityGroup?: boolean;
  manager?: CreateClusterRequestManager;
  /**
   * @example
   * 10000
   */
  maxCoreCount?: number;
  /**
   * @example
   * 500
   */
  maxCount?: number;
  queues?: QueueTemplate[];
  /**
   * @example
   * rg-acfmxazb4******
   */
  resourceGroupId?: string;
  /**
   * @example
   * sg-bp13n61xsydodfyg****
   */
  securityGroupId?: string;
  sharedStorages?: SharedStorageTemplate[];
  tags?: CreateClusterRequestTags[];
  static names(): { [key: string]: string } {
    return {
      additionalPackages: 'AdditionalPackages',
      addons: 'Addons',
      clientVersion: 'ClientVersion',
      clusterCategory: 'ClusterCategory',
      clusterCredentials: 'ClusterCredentials',
      clusterCustomConfiguration: 'ClusterCustomConfiguration',
      clusterDescription: 'ClusterDescription',
      clusterMode: 'ClusterMode',
      clusterName: 'ClusterName',
      clusterVSwitchId: 'ClusterVSwitchId',
      clusterVpcId: 'ClusterVpcId',
      deletionProtection: 'DeletionProtection',
      isEnterpriseSecurityGroup: 'IsEnterpriseSecurityGroup',
      manager: 'Manager',
      maxCoreCount: 'MaxCoreCount',
      maxCount: 'MaxCount',
      queues: 'Queues',
      resourceGroupId: 'ResourceGroupId',
      securityGroupId: 'SecurityGroupId',
      sharedStorages: 'SharedStorages',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalPackages: { 'type': 'array', 'itemType': CreateClusterRequestAdditionalPackages },
      addons: { 'type': 'array', 'itemType': CreateClusterRequestAddons },
      clientVersion: 'string',
      clusterCategory: 'string',
      clusterCredentials: CreateClusterRequestClusterCredentials,
      clusterCustomConfiguration: CreateClusterRequestClusterCustomConfiguration,
      clusterDescription: 'string',
      clusterMode: 'string',
      clusterName: 'string',
      clusterVSwitchId: 'string',
      clusterVpcId: 'string',
      deletionProtection: 'boolean',
      isEnterpriseSecurityGroup: 'boolean',
      manager: CreateClusterRequestManager,
      maxCoreCount: 'number',
      maxCount: 'number',
      queues: { 'type': 'array', 'itemType': QueueTemplate },
      resourceGroupId: 'string',
      securityGroupId: 'string',
      sharedStorages: { 'type': 'array', 'itemType': SharedStorageTemplate },
      tags: { 'type': 'array', 'itemType': CreateClusterRequestTags },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterShrinkRequest extends $tea.Model {
  additionalPackagesShrink?: string;
  addonsShrink?: string;
  /**
   * @example
   * 2.1.0
   */
  clientVersion?: string;
  /**
   * @example
   * Standard
   */
  clusterCategory?: string;
  clusterCredentialsShrink?: string;
  clusterCustomConfigurationShrink?: string;
  /**
   * @example
   * slurm22.05.8-cluster-20240718
   */
  clusterDescription?: string;
  /**
   * @example
   * Integrated
   */
  clusterMode?: string;
  /**
   * @example
   * slurm22.05.8-cluster-20240718
   */
  clusterName?: string;
  /**
   * @example
   * vsw-f8za5p0mwzgdu3wgx****
   */
  clusterVSwitchId?: string;
  /**
   * @example
   * vpc-m5efjevmclc0xdmys****
   */
  clusterVpcId?: string;
  /**
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @example
   * false
   */
  isEnterpriseSecurityGroup?: boolean;
  managerShrink?: string;
  /**
   * @example
   * 10000
   */
  maxCoreCount?: number;
  /**
   * @example
   * 500
   */
  maxCount?: number;
  queuesShrink?: string;
  /**
   * @example
   * rg-acfmxazb4******
   */
  resourceGroupId?: string;
  /**
   * @example
   * sg-bp13n61xsydodfyg****
   */
  securityGroupId?: string;
  sharedStoragesShrink?: string;
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      additionalPackagesShrink: 'AdditionalPackages',
      addonsShrink: 'Addons',
      clientVersion: 'ClientVersion',
      clusterCategory: 'ClusterCategory',
      clusterCredentialsShrink: 'ClusterCredentials',
      clusterCustomConfigurationShrink: 'ClusterCustomConfiguration',
      clusterDescription: 'ClusterDescription',
      clusterMode: 'ClusterMode',
      clusterName: 'ClusterName',
      clusterVSwitchId: 'ClusterVSwitchId',
      clusterVpcId: 'ClusterVpcId',
      deletionProtection: 'DeletionProtection',
      isEnterpriseSecurityGroup: 'IsEnterpriseSecurityGroup',
      managerShrink: 'Manager',
      maxCoreCount: 'MaxCoreCount',
      maxCount: 'MaxCount',
      queuesShrink: 'Queues',
      resourceGroupId: 'ResourceGroupId',
      securityGroupId: 'SecurityGroupId',
      sharedStoragesShrink: 'SharedStorages',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalPackagesShrink: 'string',
      addonsShrink: 'string',
      clientVersion: 'string',
      clusterCategory: 'string',
      clusterCredentialsShrink: 'string',
      clusterCustomConfigurationShrink: 'string',
      clusterDescription: 'string',
      clusterMode: 'string',
      clusterName: 'string',
      clusterVSwitchId: 'string',
      clusterVpcId: 'string',
      deletionProtection: 'boolean',
      isEnterpriseSecurityGroup: 'boolean',
      managerShrink: 'string',
      maxCoreCount: 'number',
      maxCount: 'number',
      queuesShrink: 'string',
      resourceGroupId: 'string',
      securityGroupId: 'string',
      sharedStoragesShrink: 'string',
      tagsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterResponseBody extends $tea.Model {
  /**
   * @example
   * ehpc-hz-FYUr******
   */
  clusterId?: string;
  /**
   * @example
   * F6757FA4-8FED-4602-B7F5-3550C0******
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * F6757FA4-8FED-4602-B7F5-3550C0******
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNodesRequest extends $tea.Model {
  /**
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  computeNode?: NodeTemplate;
  /**
   * @example
   * 10
   */
  count?: number;
  /**
   * @example
   * vpc
   */
  HPCInterConnect?: string;
  /**
   * @example
   * compute
   */
  hostnamePrefix?: string;
  /**
   * @example
   * demo
   */
  hostnameSuffix?: string;
  /**
   * @example
   * false
   */
  keepAlive?: string;
  /**
   * @example
   * test1
   */
  queueName?: string;
  /**
   * @example
   * AliyunServiceRoleForOOSBandwidthScheduler
   */
  ramRole?: string;
  /**
   * @example
   * vsw-bp1lfcjbfb099rrjn****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      computeNode: 'ComputeNode',
      count: 'Count',
      HPCInterConnect: 'HPCInterConnect',
      hostnamePrefix: 'HostnamePrefix',
      hostnameSuffix: 'HostnameSuffix',
      keepAlive: 'KeepAlive',
      queueName: 'QueueName',
      ramRole: 'RamRole',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      computeNode: NodeTemplate,
      count: 'number',
      HPCInterConnect: 'string',
      hostnamePrefix: 'string',
      hostnameSuffix: 'string',
      keepAlive: 'string',
      queueName: 'string',
      ramRole: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNodesShrinkRequest extends $tea.Model {
  /**
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  computeNodeShrink?: string;
  /**
   * @example
   * 10
   */
  count?: number;
  /**
   * @example
   * vpc
   */
  HPCInterConnect?: string;
  /**
   * @example
   * compute
   */
  hostnamePrefix?: string;
  /**
   * @example
   * demo
   */
  hostnameSuffix?: string;
  /**
   * @example
   * false
   */
  keepAlive?: string;
  /**
   * @example
   * test1
   */
  queueName?: string;
  /**
   * @example
   * AliyunServiceRoleForOOSBandwidthScheduler
   */
  ramRole?: string;
  /**
   * @example
   * vsw-bp1lfcjbfb099rrjn****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      computeNodeShrink: 'ComputeNode',
      count: 'Count',
      HPCInterConnect: 'HPCInterConnect',
      hostnamePrefix: 'HostnamePrefix',
      hostnameSuffix: 'HostnameSuffix',
      keepAlive: 'KeepAlive',
      queueName: 'QueueName',
      ramRole: 'RamRole',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      computeNodeShrink: 'string',
      count: 'number',
      HPCInterConnect: 'string',
      hostnamePrefix: 'string',
      hostnameSuffix: 'string',
      keepAlive: 'string',
      queueName: 'string',
      ramRole: 'string',
      vSwitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNodesResponseBody extends $tea.Model {
  instanceIds?: string[];
  /**
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateNodesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQueueRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The configurations of the queue to be created.
   */
  queue?: QueueTemplate;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      queue: 'Queue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      queue: QueueTemplate,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQueueShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The configurations of the queue to be created.
   */
  queueShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      queueShrink: 'Queue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      queueShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQueueResponseBody extends $tea.Model {
  /**
   * @remarks
   * The name of the created queue.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQueueResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateQueueResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateQueueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUsersRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  user?: CreateUsersRequestUser[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      user: { 'type': 'array', 'itemType': CreateUsersRequestUser },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUsersShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  userShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      userShrink: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      userShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUsersResponseBody extends $tea.Model {
  /**
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUsersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ehpc-hz-QKKVqO****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F1AB6D8D-E185-4D94-859C-7CE7B8B7****
   */
  requestId?: string;
  /**
   * @remarks
   * The request result. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * F1AB6D8D-E185-4D94-859C-7CE7B8B7****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobsRequest extends $tea.Model {
  jobSpec?: DeleteJobsRequestJobSpec[];
  static names(): { [key: string]: string } {
    return {
      jobSpec: 'JobSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobSpec: { 'type': 'array', 'itemType': DeleteJobsRequestJobSpec },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobsShrinkRequest extends $tea.Model {
  jobSpecShrink?: string;
  static names(): { [key: string]: string } {
    return {
      jobSpecShrink: 'JobSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobSpecShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobsResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNodesRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID. You can call the [listclusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The instance IDs of the compute nodes that you want to delete.
   */
  instanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNodesShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID. You can call the [listclusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The instance IDs of the compute nodes that you want to delete.
   */
  instanceIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      instanceIdsShrink: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      instanceIdsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNodesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNodesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQueuesRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The queues that you want to delete.
   */
  queueNames?: string[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      queueNames: 'QueueNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      queueNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQueuesShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The queues that you want to delete.
   */
  queueNamesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      queueNamesShrink: 'QueueNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      queueNamesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQueuesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQueuesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteQueuesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteQueuesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUsersRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The users that you want to delete.
   * 
   * This parameter is required.
   */
  user?: DeleteUsersRequestUser[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      user: { 'type': 'array', 'itemType': DeleteUsersRequestUser },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUsersShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The users that you want to delete.
   * 
   * This parameter is required.
   */
  userShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      userShrink: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      userShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUsersResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUsersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddonTemplateRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Login
   */
  addonName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1.0
   */
  addonVersion?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      addonName: 'AddonName',
      addonVersion: 'AddonVersion',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonName: 'string',
      addonVersion: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddonTemplateResponseBody extends $tea.Model {
  addon?: DescribeAddonTemplateResponseBodyAddon;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      addon: 'Addon',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addon: DescribeAddonTemplateResponseBodyAddon,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddonTemplateResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeAddonTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DescribeAddonTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachSharedStoragesRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The information about mounted shared storage resources.
   * 
   * This parameter is required.
   */
  sharedStorages?: DetachSharedStoragesRequestSharedStorages[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      sharedStorages: 'SharedStorages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      sharedStorages: { 'type': 'array', 'itemType': DetachSharedStoragesRequestSharedStorages },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachSharedStoragesShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The information about mounted shared storage resources.
   * 
   * This parameter is required.
   */
  sharedStoragesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      sharedStoragesShrink: 'SharedStorages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      sharedStoragesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachSharedStoragesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachSharedStoragesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DetachSharedStoragesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DetachSharedStoragesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAddonRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Login-1.0-W4g****
   */
  addonId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      addonId: 'AddonId',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonId: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAddonResponseBody extends $tea.Model {
  addon?: GetAddonResponseBodyAddon;
  /**
   * @example
   * BBC2F93D-003A-49C4-850C-B826EECF****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      addon: 'Addon',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addon: GetAddonResponseBodyAddon,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAddonResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetAddonResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetAddonResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterRequest extends $tea.Model {
  /**
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponseBody extends $tea.Model {
  /**
   * @example
   * 2.0.31
   */
  clientVersion?: string;
  /**
   * @example
   * Standard
   */
  clusterCategory?: string;
  /**
   * @example
   * 2024-08-06T12:43:01.000Z
   */
  clusterCreateTime?: string;
  clusterCustomConfiguration?: GetClusterResponseBodyClusterCustomConfiguration;
  /**
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @example
   * Integrated
   */
  clusterMode?: string;
  /**
   * @example
   * 2024-08-06T12:43:01.000Z
   */
  clusterModifyTime?: string;
  /**
   * @example
   * slurm22.05.8-cluster-20240614
   */
  clusterName?: string;
  /**
   * @example
   * running
   */
  clusterStatus?: string;
  /**
   * @example
   * vsw-bp1p2uugqsjppno******
   */
  clusterVSwitchId?: string;
  /**
   * @example
   * vpc-uf6u3lk1pjy28eg*****
   */
  clusterVpcId?: string;
  /**
   * @example
   * true
   */
  deleteProtection?: string;
  /**
   * @example
   * 2.0.0
   */
  ehpcVersion?: string;
  /**
   * @example
   * true
   */
  enableScaleIn?: boolean;
  /**
   * @example
   * true
   */
  enableScaleOut?: boolean;
  /**
   * @example
   * 2
   */
  growInterval?: number;
  /**
   * @example
   * 4
   */
  idleInterval?: number;
  manager?: GetClusterResponseBodyManager;
  /**
   * @example
   * 10000
   */
  maxCoreCount?: string;
  /**
   * @example
   * 100
   */
  maxCount?: string;
  /**
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @example
   * rg-acfmxazb4ph****
   */
  resourceGroupId?: string;
  /**
   * @example
   * sg-f8z9vb2zaezpkr69a21k
   */
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clientVersion: 'ClientVersion',
      clusterCategory: 'ClusterCategory',
      clusterCreateTime: 'ClusterCreateTime',
      clusterCustomConfiguration: 'ClusterCustomConfiguration',
      clusterId: 'ClusterId',
      clusterMode: 'ClusterMode',
      clusterModifyTime: 'ClusterModifyTime',
      clusterName: 'ClusterName',
      clusterStatus: 'ClusterStatus',
      clusterVSwitchId: 'ClusterVSwitchId',
      clusterVpcId: 'ClusterVpcId',
      deleteProtection: 'DeleteProtection',
      ehpcVersion: 'EhpcVersion',
      enableScaleIn: 'EnableScaleIn',
      enableScaleOut: 'EnableScaleOut',
      growInterval: 'GrowInterval',
      idleInterval: 'IdleInterval',
      manager: 'Manager',
      maxCoreCount: 'MaxCoreCount',
      maxCount: 'MaxCount',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientVersion: 'string',
      clusterCategory: 'string',
      clusterCreateTime: 'string',
      clusterCustomConfiguration: GetClusterResponseBodyClusterCustomConfiguration,
      clusterId: 'string',
      clusterMode: 'string',
      clusterModifyTime: 'string',
      clusterName: 'string',
      clusterStatus: 'string',
      clusterVSwitchId: 'string',
      clusterVpcId: 'string',
      deleteProtection: 'string',
      ehpcVersion: 'string',
      enableScaleIn: 'boolean',
      enableScaleOut: 'boolean',
      growInterval: 'number',
      idleInterval: 'number',
      manager: GetClusterResponseBodyManager,
      maxCoreCount: 'string',
      maxCount: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      securityGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCommonLogDetailRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1703821542
   */
  from?: number;
  /**
   * @example
   * true
   */
  hiddenProcess?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  logRequestId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1703821666
   */
  to?: number;
  static names(): { [key: string]: string } {
    return {
      from: 'From',
      hiddenProcess: 'HiddenProcess',
      logRequestId: 'LogRequestId',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      hiddenProcess: 'boolean',
      logRequestId: 'string',
      to: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCommonLogDetailResponseBody extends $tea.Model {
  /**
   * @example
   * CreateCluster
   */
  action?: string;
  /**
   * @example
   * ehpc-hz-abc***
   */
  clusterId?: string;
  logDetail?: GetCommonLogDetailResponseBodyLogDetail[];
  /**
   * @example
   * operation
   */
  logType?: string;
  /**
   * @example
   * 239***
   */
  operatorUid?: string;
  /**
   * @example
   * 464E9919-D04F-4D1D-B375-15989492****
   */
  requestId?: string;
  /**
   * @example
   * 137***
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      clusterId: 'ClusterId',
      logDetail: 'LogDetail',
      logType: 'LogType',
      operatorUid: 'OperatorUid',
      requestId: 'RequestId',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      clusterId: 'string',
      logDetail: { 'type': 'array', 'itemType': GetCommonLogDetailResponseBodyLogDetail },
      logType: 'string',
      operatorUid: 'string',
      requestId: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCommonLogDetailResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetCommonLogDetailResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetCommonLogDetailResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueRequest extends $tea.Model {
  /**
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @example
   * comp
   */
  queueName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      queueName: 'QueueName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      queueName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueResponseBody extends $tea.Model {
  queue?: GetQueueResponseBodyQueue;
  /**
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      queue: 'Queue',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queue: GetQueueResponseBodyQueue,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: GetQueueResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetQueueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallAddonRequest extends $tea.Model {
  /**
   * @remarks
   * The addon name.
   * 
   * This parameter is required.
   * 
   * @example
   * Login
   */
  addonName?: string;
  /**
   * @remarks
   * The addon version.
   * 
   * This parameter is required.
   * 
   * @example
   * 1.0
   */
  addonVersion?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The resource configurations of the addon.
   * 
   * This parameter is required.
   * 
   * @example
   * `{"EipResource": {"AutoCreate": true}, "EcsResources": [{"InstanceType": "ecs.c7.xlarge", "ImageId": "centos_7_6_xxx.vhd", "SystemDisk": {"Category": "cloud_essd", "Size": 40, "Level": "PL0"}]}`
   */
  resourcesSpec?: string;
  /**
   * @remarks
   * The service configurations of the addon.
   * 
   * This parameter is required.
   * 
   * @example
   * `[{"ServiceName": "SSH", "ServiceAccessType": null, "ServiceAccessUrl": null, "NetworkACL": [{"IpProtocol": "TCP", "Port": 22, "SourceCidrIp": "0.0.0.0/0"}]}, {"ServiceName": "VNC", "ServiceAccessType": null, "ServiceAccessUrl": null, "NetworkACL": [{"IpProtocol": "TCP", "Port": 12016, "SourceCidrIp": "0.0.0.0/0"}]}]`
   */
  servicesSpec?: string;
  static names(): { [key: string]: string } {
    return {
      addonName: 'AddonName',
      addonVersion: 'AddonVersion',
      clusterId: 'ClusterId',
      resourcesSpec: 'ResourcesSpec',
      servicesSpec: 'ServicesSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonName: 'string',
      addonVersion: 'string',
      clusterId: 'string',
      resourcesSpec: 'string',
      servicesSpec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallAddonResponseBody extends $tea.Model {
  /**
   * @remarks
   * The addon ID.
   * 
   * This parameter is required.
   * 
   * @example
   * Login-1.0-W4g****
   */
  addonId?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B745C159-3155-4B94-95D0-4B73D4D2****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      addonId: 'AddonId',
      clusterId: 'ClusterId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonId: 'string',
      clusterId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallAddonResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InstallAddonResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: InstallAddonResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallSoftwaresRequest extends $tea.Model {
  /**
   * @remarks
   * The information about the software systems that you want to install.
   */
  additionalPackages?: InstallSoftwaresRequestAdditionalPackages[];
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      additionalPackages: 'AdditionalPackages',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalPackages: { 'type': 'array', 'itemType': InstallSoftwaresRequestAdditionalPackages },
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallSoftwaresShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The information about the software systems that you want to install.
   */
  additionalPackagesShrink?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      additionalPackagesShrink: 'AdditionalPackages',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalPackagesShrink: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallSoftwaresResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallSoftwaresResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: InstallSoftwaresResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: InstallSoftwaresResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAddonTemplatesRequest extends $tea.Model {
  addonNames?: string[];
  /**
   * @example
   * Standard
   */
  clusterCategory?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      addonNames: 'AddonNames',
      clusterCategory: 'ClusterCategory',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonNames: { 'type': 'array', 'itemType': 'string' },
      clusterCategory: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAddonTemplatesResponseBody extends $tea.Model {
  addons?: ListAddonTemplatesResponseBodyAddons[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      addons: 'Addons',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addons: { 'type': 'array', 'itemType': ListAddonTemplatesResponseBodyAddons },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAddonTemplatesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAddonTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAddonTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAddonsRequest extends $tea.Model {
  addonIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      addonIds: 'AddonIds',
      clusterId: 'ClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonIds: { 'type': 'array', 'itemType': 'string' },
      clusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAddonsShrinkRequest extends $tea.Model {
  addonIdsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      addonIdsShrink: 'AddonIds',
      clusterId: 'ClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonIdsShrink: 'string',
      clusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAddonsResponseBody extends $tea.Model {
  addons?: ListAddonsResponseBodyAddons[];
  /**
   * @example
   * 20
   */
  pageNumber?: number;
  /**
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      addons: 'Addons',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addons: { 'type': 'array', 'itemType': ListAddonsResponseBodyAddons },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAddonsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAddonsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAddonsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableFileSystemsRequest extends $tea.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableFileSystemsResponseBody extends $tea.Model {
  fileSystemList?: ListAvailableFileSystemsResponseBodyFileSystemList[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * BF4E8AB1-02A3-5ECF-87CC-3AB7BE98**
   */
  requestId?: string;
  /**
   * @example
   * 65
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      fileSystemList: 'FileSystemList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemList: { 'type': 'array', 'itemType': ListAvailableFileSystemsResponseBodyFileSystemList },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableFileSystemsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAvailableFileSystemsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAvailableFileSystemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableImagesRequest extends $tea.Model {
  directoryService?: ListAvailableImagesRequestDirectoryService;
  /**
   * @example
   * true
   */
  enableHT?: boolean;
  /**
   * @example
   * vpc
   */
  HPCInterConnect?: string;
  /**
   * @example
   * self
   */
  imageOwnerAlias?: string;
  /**
   * @example
   * ecs.c7.large
   */
  instanceType?: string;
  /**
   * @example
   * true
   */
  isPublic?: boolean;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 1
   */
  pageSize?: number;
  scheduler?: ListAvailableImagesRequestScheduler;
  static names(): { [key: string]: string } {
    return {
      directoryService: 'DirectoryService',
      enableHT: 'EnableHT',
      HPCInterConnect: 'HPCInterConnect',
      imageOwnerAlias: 'ImageOwnerAlias',
      instanceType: 'InstanceType',
      isPublic: 'IsPublic',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      scheduler: 'Scheduler',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryService: ListAvailableImagesRequestDirectoryService,
      enableHT: 'boolean',
      HPCInterConnect: 'string',
      imageOwnerAlias: 'string',
      instanceType: 'string',
      isPublic: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      scheduler: ListAvailableImagesRequestScheduler,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableImagesShrinkRequest extends $tea.Model {
  directoryServiceShrink?: string;
  /**
   * @example
   * true
   */
  enableHT?: boolean;
  /**
   * @example
   * vpc
   */
  HPCInterConnect?: string;
  /**
   * @example
   * self
   */
  imageOwnerAlias?: string;
  /**
   * @example
   * ecs.c7.large
   */
  instanceType?: string;
  /**
   * @example
   * true
   */
  isPublic?: boolean;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 1
   */
  pageSize?: number;
  schedulerShrink?: string;
  static names(): { [key: string]: string } {
    return {
      directoryServiceShrink: 'DirectoryService',
      enableHT: 'EnableHT',
      HPCInterConnect: 'HPCInterConnect',
      imageOwnerAlias: 'ImageOwnerAlias',
      instanceType: 'InstanceType',
      isPublic: 'IsPublic',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      schedulerShrink: 'Scheduler',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryServiceShrink: 'string',
      enableHT: 'boolean',
      HPCInterConnect: 'string',
      imageOwnerAlias: 'string',
      instanceType: 'string',
      isPublic: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      schedulerShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableImagesResponseBody extends $tea.Model {
  images?: ListAvailableImagesResponseBodyImages[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': ListAvailableImagesResponseBodyImages },
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableImagesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAvailableImagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListAvailableImagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersRequest extends $tea.Model {
  clusterIds?: string[];
  clusterNames?: string[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterIds: 'ClusterIds',
      clusterNames: 'ClusterNames',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterIds: { 'type': 'array', 'itemType': 'string' },
      clusterNames: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersShrinkRequest extends $tea.Model {
  clusterIdsShrink?: string;
  clusterNamesShrink?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterIdsShrink: 'ClusterIds',
      clusterNamesShrink: 'ClusterNames',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterIdsShrink: 'string',
      clusterNamesShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBody extends $tea.Model {
  clusters?: ListClustersResponseBodyClusters[];
  /**
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      clusters: 'Clusters',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusters: { 'type': 'array', 'itemType': ListClustersResponseBodyClusters },
      pageNumber: 'string',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListClustersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListClustersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommonLogsRequest extends $tea.Model {
  actionName?: string[];
  /**
   * @example
   * Finished
   */
  actionStatus?: string;
  /**
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1703821542
   */
  from?: number;
  /**
   * @example
   * true
   */
  isReverse?: boolean;
  /**
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  logRequestId?: string;
  /**
   * @example
   * Operation
   */
  logType?: string;
  /**
   * @example
   * 137***
   */
  operatorUid?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * i-abc***
   */
  resource?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1703821666
   */
  to?: number;
  static names(): { [key: string]: string } {
    return {
      actionName: 'ActionName',
      actionStatus: 'ActionStatus',
      clusterId: 'ClusterId',
      from: 'From',
      isReverse: 'IsReverse',
      logRequestId: 'LogRequestId',
      logType: 'LogType',
      operatorUid: 'OperatorUid',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resource: 'Resource',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionName: { 'type': 'array', 'itemType': 'string' },
      actionStatus: 'string',
      clusterId: 'string',
      from: 'number',
      isReverse: 'boolean',
      logRequestId: 'string',
      logType: 'string',
      operatorUid: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resource: 'string',
      to: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommonLogsShrinkRequest extends $tea.Model {
  actionNameShrink?: string;
  /**
   * @example
   * Finished
   */
  actionStatus?: string;
  /**
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1703821542
   */
  from?: number;
  /**
   * @example
   * true
   */
  isReverse?: boolean;
  /**
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  logRequestId?: string;
  /**
   * @example
   * Operation
   */
  logType?: string;
  /**
   * @example
   * 137***
   */
  operatorUid?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * i-abc***
   */
  resource?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1703821666
   */
  to?: number;
  static names(): { [key: string]: string } {
    return {
      actionNameShrink: 'ActionName',
      actionStatus: 'ActionStatus',
      clusterId: 'ClusterId',
      from: 'From',
      isReverse: 'IsReverse',
      logRequestId: 'LogRequestId',
      logType: 'LogType',
      operatorUid: 'OperatorUid',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resource: 'Resource',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionNameShrink: 'string',
      actionStatus: 'string',
      clusterId: 'string',
      from: 'number',
      isReverse: 'boolean',
      logRequestId: 'string',
      logType: 'string',
      operatorUid: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resource: 'string',
      to: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommonLogsResponseBody extends $tea.Model {
  logs?: ListCommonLogsResponseBodyLogs[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 464E9919-D04F-4D1D-B375-15989492****
   */
  requestId?: string;
  /**
   * @example
   * 15
   */
  totalCount?: number;
  /**
   * @example
   * 137***
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      logs: 'Logs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logs: { 'type': 'array', 'itemType': ListCommonLogsResponseBodyLogs },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommonLogsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCommonLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListCommonLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstalledSoftwaresRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      pageNumber: 'string',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstalledSoftwaresResponseBody extends $tea.Model {
  /**
   * @remarks
   * The list of installed software.
   */
  additionalPackages?: ListInstalledSoftwaresResponseBodyAdditionalPackages;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      additionalPackages: 'AdditionalPackages',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalPackages: ListInstalledSoftwaresResponseBodyAdditionalPackages,
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstalledSoftwaresResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstalledSoftwaresResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListInstalledSoftwaresResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesRequest extends $tea.Model {
  /**
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  hostnames?: string[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 1
   */
  pageSize?: number;
  privateIpAddress?: string[];
  queueNames?: string[];
  /**
   * @example
   * Forward
   */
  sequence?: string;
  /**
   * @example
   * AddedTime
   */
  sortBy?: string;
  status?: string[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      hostnames: 'Hostnames',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      privateIpAddress: 'PrivateIpAddress',
      queueNames: 'QueueNames',
      sequence: 'Sequence',
      sortBy: 'SortBy',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      hostnames: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      privateIpAddress: { 'type': 'array', 'itemType': 'string' },
      queueNames: { 'type': 'array', 'itemType': 'string' },
      sequence: 'string',
      sortBy: 'string',
      status: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesShrinkRequest extends $tea.Model {
  /**
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  hostnamesShrink?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 1
   */
  pageSize?: number;
  privateIpAddressShrink?: string;
  queueNamesShrink?: string;
  /**
   * @example
   * Forward
   */
  sequence?: string;
  /**
   * @example
   * AddedTime
   */
  sortBy?: string;
  statusShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      hostnamesShrink: 'Hostnames',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      privateIpAddressShrink: 'PrivateIpAddress',
      queueNamesShrink: 'QueueNames',
      sequence: 'Sequence',
      sortBy: 'SortBy',
      statusShrink: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      hostnamesShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      privateIpAddressShrink: 'string',
      queueNamesShrink: 'string',
      sequence: 'string',
      sortBy: 'string',
      statusShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBody extends $tea.Model {
  nodes?: ListNodesResponseBodyNodes[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @example
   * 89A1AC0F-4A6C-4F3D-98F9-BEF9A823****
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': ListNodesResponseBodyNodes },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueuesRequest extends $tea.Model {
  /**
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  queueNames?: string[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      queueNames: 'QueueNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      queueNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueuesShrinkRequest extends $tea.Model {
  /**
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  queueNamesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      queueNamesShrink: 'QueueNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      queueNamesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueuesResponseBody extends $tea.Model {
  /**
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  queues?: ListQueuesResponseBodyQueues[];
  /**
   * @example
   * C6E5005C-00B0-4F27-98BB-95AB88016C22
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queues: 'Queues',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      queues: { 'type': 'array', 'itemType': ListQueuesResponseBodyQueues },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueuesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListQueuesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListQueuesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSharedStoragesRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the attached file system.
   * 
   * @example
   * 0bd504b0**
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The type of the attached file system. Valid values:
   * 
   * *   nas
   * *   cpfs
   * 
   * @example
   * nas
   */
  fileSystemType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      fileSystemId: 'FileSystemId',
      fileSystemType: 'FileSystemType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      fileSystemId: 'string',
      fileSystemType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSharedStoragesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F6757FA4-8FED-4602-B7F5-3550C084****
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the attached shared storage.
   */
  sharedStorages?: ListSharedStoragesResponseBodySharedStorages[];
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sharedStorages: 'SharedStorages',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sharedStorages: { 'type': 'array', 'itemType': ListSharedStoragesResponseBodySharedStorages },
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSharedStoragesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSharedStoragesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSharedStoragesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwaresRequest extends $tea.Model {
  /**
   * @remarks
   * The application category.
   * 
   * @example
   * NWP
   */
  category?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The software name.
   * 
   * @example
   * gromacs
   */
  name?: string;
  /**
   * @remarks
   * The operating system (OS) information.
   */
  osInfos?: ListSoftwaresRequestOsInfos[];
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      clusterId: 'ClusterId',
      name: 'Name',
      osInfos: 'OsInfos',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      clusterId: 'string',
      name: 'string',
      osInfos: { 'type': 'array', 'itemType': ListSoftwaresRequestOsInfos },
      pageNumber: 'string',
      pageSize: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwaresResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about the software that can be installed in the cluster.
   */
  additionalPackages?: ListSoftwaresResponseBodyAdditionalPackages;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      additionalPackages: 'AdditionalPackages',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalPackages: ListSoftwaresResponseBodyAdditionalPackages,
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwaresResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListSoftwaresResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListSoftwaresResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 50.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBody extends $tea.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
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
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 15
   */
  totalCount?: number;
  /**
   * @remarks
   * The information about the users.
   */
  users?: ListUsersResponseBodyUsers;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      users: ListUsersResponseBodyUsers,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnInstallAddonRequest extends $tea.Model {
  /**
   * @remarks
   * The addon ID.
   * 
   * This parameter is required.
   * 
   * @example
   * Login-1.0-W2g****
   */
  addonId?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      addonId: 'AddonId',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonId: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnInstallAddonResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnInstallAddonResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UnInstallAddonResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UnInstallAddonResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallSoftwaresRequest extends $tea.Model {
  /**
   * @remarks
   * The information about the software systems that you want to uninstall.
   */
  additionalPackages?: UninstallSoftwaresRequestAdditionalPackages[];
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      additionalPackages: 'AdditionalPackages',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalPackages: { 'type': 'array', 'itemType': UninstallSoftwaresRequestAdditionalPackages },
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallSoftwaresShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The information about the software systems that you want to uninstall.
   */
  additionalPackagesShrink?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      additionalPackagesShrink: 'AdditionalPackages',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalPackagesShrink: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallSoftwaresResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallSoftwaresResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UninstallSoftwaresResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UninstallSoftwaresResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClusterRequest extends $tea.Model {
  /**
   * @example
   * 2.1.0
   */
  clientVersion?: string;
  clusterCustomConfiguration?: UpdateClusterRequestClusterCustomConfiguration;
  /**
   * @example
   * slurm22.05.8-serverless-cluster-20240805
   */
  clusterDescription?: string;
  /**
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @example
   * slurm22.05.8-serverless-cluster-20240805
   */
  clusterName?: string;
  /**
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @example
   * true
   */
  enableScaleIn?: boolean;
  /**
   * @example
   * true
   */
  enableScaleOut?: boolean;
  /**
   * @example
   * 2
   */
  growInterval?: number;
  /**
   * @example
   * 4
   */
  idleInterval?: number;
  /**
   * @example
   * 10000
   */
  maxCoreCount?: number;
  /**
   * @example
   * 500
   */
  maxCount?: number;
  static names(): { [key: string]: string } {
    return {
      clientVersion: 'ClientVersion',
      clusterCustomConfiguration: 'ClusterCustomConfiguration',
      clusterDescription: 'ClusterDescription',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      deletionProtection: 'DeletionProtection',
      enableScaleIn: 'EnableScaleIn',
      enableScaleOut: 'EnableScaleOut',
      growInterval: 'GrowInterval',
      idleInterval: 'IdleInterval',
      maxCoreCount: 'MaxCoreCount',
      maxCount: 'MaxCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientVersion: 'string',
      clusterCustomConfiguration: UpdateClusterRequestClusterCustomConfiguration,
      clusterDescription: 'string',
      clusterId: 'string',
      clusterName: 'string',
      deletionProtection: 'boolean',
      enableScaleIn: 'boolean',
      enableScaleOut: 'boolean',
      growInterval: 'number',
      idleInterval: 'number',
      maxCoreCount: 'number',
      maxCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClusterShrinkRequest extends $tea.Model {
  /**
   * @example
   * 2.1.0
   */
  clientVersion?: string;
  clusterCustomConfigurationShrink?: string;
  /**
   * @example
   * slurm22.05.8-serverless-cluster-20240805
   */
  clusterDescription?: string;
  /**
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @example
   * slurm22.05.8-serverless-cluster-20240805
   */
  clusterName?: string;
  /**
   * @example
   * false
   */
  deletionProtection?: boolean;
  /**
   * @example
   * true
   */
  enableScaleIn?: boolean;
  /**
   * @example
   * true
   */
  enableScaleOut?: boolean;
  /**
   * @example
   * 2
   */
  growInterval?: number;
  /**
   * @example
   * 4
   */
  idleInterval?: number;
  /**
   * @example
   * 10000
   */
  maxCoreCount?: number;
  /**
   * @example
   * 500
   */
  maxCount?: number;
  static names(): { [key: string]: string } {
    return {
      clientVersion: 'ClientVersion',
      clusterCustomConfigurationShrink: 'ClusterCustomConfiguration',
      clusterDescription: 'ClusterDescription',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      deletionProtection: 'DeletionProtection',
      enableScaleIn: 'EnableScaleIn',
      enableScaleOut: 'EnableScaleOut',
      growInterval: 'GrowInterval',
      idleInterval: 'IdleInterval',
      maxCoreCount: 'MaxCoreCount',
      maxCount: 'MaxCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientVersion: 'string',
      clusterCustomConfigurationShrink: 'string',
      clusterDescription: 'string',
      clusterId: 'string',
      clusterName: 'string',
      deletionProtection: 'boolean',
      enableScaleIn: 'boolean',
      enableScaleOut: 'boolean',
      growInterval: 'number',
      idleInterval: 'number',
      maxCoreCount: 'number',
      maxCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClusterResponseBody extends $tea.Model {
  /**
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClusterResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNodesRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The information about the compute nodes that you want to update.
   */
  instances?: UpdateNodesRequestInstances[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      instances: 'Instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      instances: { 'type': 'array', 'itemType': UpdateNodesRequestInstances },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNodesShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The information about the compute nodes that you want to update.
   */
  instancesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      instancesShrink: 'Instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      instancesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNodesResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The request result. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNodesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQueueRequest extends $tea.Model {
  /**
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  queue?: UpdateQueueRequestQueue;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      queue: 'Queue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      queue: UpdateQueueRequestQueue,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQueueShrinkRequest extends $tea.Model {
  /**
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  queueShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      queueShrink: 'Queue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      queueShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQueueResponseBody extends $tea.Model {
  /**
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQueueResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateQueueResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateQueueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserRequest extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @example
   * users
   */
  group?: string;
  /**
   * @example
   * 123****
   */
  password?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * testuser
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      group: 'Group',
      password: 'Password',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      group: 'string',
      password: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserResponseBody extends $tea.Model {
  /**
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateUserResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddonNodeTemplateDataDisks extends $tea.Model {
  /**
   * @example
   * cloud_auto
   */
  category?: string;
  /**
   * @example
   * false
   */
  deleteWithInstance?: boolean;
  /**
   * @example
   * PL0
   */
  level?: string;
  /**
   * @example
   * 40
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      deleteWithInstance: 'DeleteWithInstance',
      level: 'Level',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      deleteWithInstance: 'boolean',
      level: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddonNodeTemplateSystemDisk extends $tea.Model {
  /**
   * @example
   * cloud_auto
   */
  category?: string;
  /**
   * @example
   * PL0
   */
  level?: string;
  /**
   * @example
   * 40
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      level: 'Level',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      level: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodeTemplateDataDisks extends $tea.Model {
  /**
   * @example
   * cloud_auto
   */
  category?: string;
  /**
   * @example
   * false
   */
  deleteWithInstance?: boolean;
  /**
   * @example
   * PL0
   */
  level?: string;
  /**
   * @example
   * 40
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      deleteWithInstance: 'DeleteWithInstance',
      level: 'Level',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      deleteWithInstance: 'boolean',
      level: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodeTemplateSystemDisk extends $tea.Model {
  /**
   * @example
   * cloud_auto
   */
  category?: string;
  /**
   * @example
   * PL0
   */
  level?: string;
  /**
   * @example
   * 40
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      level: 'Level',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      level: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachSharedStoragesRequestSharedStorages extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0bd504b0**
   */
  fileSystemId?: string;
  /**
   * @example
   * PublicCloud
   */
  location?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * /test
   */
  mountDirectory?: string;
  /**
   * @example
   * -t nfs -o vers=3,nolock,proto=tcp,noresvport
   */
  mountOptions?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0bd504b***-ngq26.cn-hangzhou.nas.aliyuncs.com
   */
  mountTarget?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * NFS
   */
  protocolType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * /testehpc
   */
  storageDirectory?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * nas
   */
  volumeType?: string;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      location: 'Location',
      mountDirectory: 'MountDirectory',
      mountOptions: 'MountOptions',
      mountTarget: 'MountTarget',
      protocolType: 'ProtocolType',
      storageDirectory: 'StorageDirectory',
      volumeType: 'VolumeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      location: 'string',
      mountDirectory: 'string',
      mountOptions: 'string',
      mountTarget: 'string',
      protocolType: 'string',
      storageDirectory: 'string',
      volumeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestAdditionalPackages extends $tea.Model {
  /**
   * @example
   * mpich
   */
  name?: string;
  /**
   * @example
   * 4.0.3
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestAddons extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Login
   */
  name?: string;
  /**
   * @example
   * "{\\\\"EipResource\\\\": {\\\\"AutoCreate\\\\": true}, \\\\"EcsResources\\\\": [{\\\\"InstanceType\\\\": \\\\"ecs.c7.xlarge\\\\", \\\\"ImageId\\\\": \\\\"centos_7_6_x64_20G_alibase_20211130.vhd\\\\", \\\\"SystemDisk\\\\": {\\\\"Category\\\\": \\\\"cloud_essd\\\\", \\\\"Size\\\\": 40, \\\\"Level\\\\": \\\\"PL0\\\\"}, \\\\"EnableHT\\\\": true, \\\\"InstanceChargeType\\\\": \\\\"PostPaid\\\\", \\\\"SpotStrategy\\\\": \\\\"NoSpot\\\\"}]}"
   */
  resourcesSpec?: string;
  /**
   * @example
   * "[{\\\\"ServiceName\\\\": \\\\"SSH\\\\", \\\\"ServiceAccessType\\\\": null, \\\\"ServiceAccessUrl\\\\": null, \\\\"NetworkACL\\\\": [{\\\\"IpProtocol\\\\": \\\\"TCP\\\\", \\\\"Port\\\\": 22, \\\\"SourceCidrIp\\\\": \\\\"0.0.0.0/0\\\\"}]}, {\\\\"ServiceName\\\\": \\\\"VNC\\\\", \\\\"ServiceAccessType\\\\": null, \\\\"ServiceAccessUrl\\\\": null, \\\\"NetworkACL\\\\": [{\\\\"IpProtocol\\\\": \\\\"TCP\\\\", \\\\"Port\\\\": 12016, \\\\"SourceCidrIp\\\\": \\\\"0.0.0.0/0\\\\"}]}, {\\\\"ServiceName\\\\": \\\\"CLIENT\\\\", \\\\"ServiceAccessType\\\\": \\\\"URL\\\\", \\\\"ServiceAccessUrl\\\\": \\\\"\\\\", \\\\"NetworkACL\\\\": [{\\\\"IpProtocol\\\\": \\\\"TCP\\\\", \\\\"Port\\\\": 12011, \\\\"SourceCidrIp\\\\": \\\\"0.0.0.0/0\\\\"}]}]"
   */
  servicesSpec?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      resourcesSpec: 'ResourcesSpec',
      servicesSpec: 'ServicesSpec',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      resourcesSpec: 'string',
      servicesSpec: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestClusterCredentials extends $tea.Model {
  /**
   * @example
   * ali0824
   */
  keyPairName?: string;
  /**
   * @example
   * **********
   */
  password?: string;
  static names(): { [key: string]: string } {
    return {
      keyPairName: 'KeyPairName',
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPairName: 'string',
      password: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestClusterCustomConfiguration extends $tea.Model {
  /**
   * @example
   * E-HPC cn-hangzhou
   */
  args?: string;
  /**
   * @example
   * http://*****
   */
  script?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'Args',
      script: 'Script',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: 'string',
      script: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestManagerDNS extends $tea.Model {
  /**
   * @example
   * NIS
   */
  type?: string;
  /**
   * @example
   * 2.31
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestManagerDirectoryService extends $tea.Model {
  /**
   * @example
   * NIS
   */
  type?: string;
  /**
   * @example
   * 2.31
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestManagerScheduler extends $tea.Model {
  /**
   * @example
   * SLURM
   */
  type?: string;
  /**
   * @example
   * 22.05.8
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestManager extends $tea.Model {
  DNS?: CreateClusterRequestManagerDNS;
  directoryService?: CreateClusterRequestManagerDirectoryService;
  managerNode?: NodeTemplate;
  scheduler?: CreateClusterRequestManagerScheduler;
  static names(): { [key: string]: string } {
    return {
      DNS: 'DNS',
      directoryService: 'DirectoryService',
      managerNode: 'ManagerNode',
      scheduler: 'Scheduler',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DNS: CreateClusterRequestManagerDNS,
      directoryService: CreateClusterRequestManagerDirectoryService,
      managerNode: NodeTemplate,
      scheduler: CreateClusterRequestManagerScheduler,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestTags extends $tea.Model {
  /**
   * @example
   * ClusterId
   */
  key?: string;
  /**
   * @example
   * ehpc-hz-******
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateUsersRequestUser extends $tea.Model {
  /**
   * @example
   * Abc****
   */
  authKey?: string;
  /**
   * @example
   * users
   */
  group?: string;
  /**
   * @example
   * 1@a2****
   */
  password?: string;
  /**
   * @example
   * testuser
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      authKey: 'AuthKey',
      group: 'Group',
      password: 'Password',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authKey: 'string',
      group: 'string',
      password: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobsRequestJobSpecTaskSpec extends $tea.Model {
  arrayIndex?: number[];
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      arrayIndex: 'ArrayIndex',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayIndex: { 'type': 'array', 'itemType': 'number' },
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobsRequestJobSpec extends $tea.Model {
  jobId?: string;
  taskSpec?: DeleteJobsRequestJobSpecTaskSpec[];
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      taskSpec: 'TaskSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      taskSpec: { 'type': 'array', 'itemType': DeleteJobsRequestJobSpecTaskSpec },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUsersRequestUser extends $tea.Model {
  /**
   * @remarks
   * The name of user N that you want to delete.
   * 
   * Valid values of N: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * testuser
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddonTemplateResponseBodyAddonResourcesSpecEipResource extends $tea.Model {
  /**
   * @example
   * True
   */
  autoCreate?: boolean;
  /**
   * @example
   * 100
   */
  bandwidth?: string;
  /**
   * @example
   * eip-bp1jwtsuoiif2qf90****
   */
  eipInstanceId?: string;
  /**
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  static names(): { [key: string]: string } {
    return {
      autoCreate: 'AutoCreate',
      bandwidth: 'Bandwidth',
      eipInstanceId: 'EipInstanceId',
      instanceChargeType: 'InstanceChargeType',
      internetChargeType: 'InternetChargeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCreate: 'boolean',
      bandwidth: 'string',
      eipInstanceId: 'string',
      instanceChargeType: 'string',
      internetChargeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddonTemplateResponseBodyAddonResourcesSpec extends $tea.Model {
  ecsResources?: AddonNodeTemplate[];
  eipResource?: DescribeAddonTemplateResponseBodyAddonResourcesSpecEipResource;
  static names(): { [key: string]: string } {
    return {
      ecsResources: 'EcsResources',
      eipResource: 'EipResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsResources: { 'type': 'array', 'itemType': AddonNodeTemplate },
      eipResource: DescribeAddonTemplateResponseBodyAddonResourcesSpecEipResource,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddonTemplateResponseBodyAddonServicesSpecInputParams extends $tea.Model {
  helpText?: string;
  label?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MYSQL_HOME
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * String
   */
  type?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * usr/local/mysql
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      helpText: 'HelpText',
      label: 'Label',
      name: 'Name',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      helpText: 'string',
      label: 'string',
      name: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddonTemplateResponseBodyAddonServicesSpecNetworkACL extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TCP
   */
  ipProtocol?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 172.16.0.0/12
   */
  sourceCidrIp?: string;
  static names(): { [key: string]: string } {
    return {
      ipProtocol: 'IpProtocol',
      port: 'Port',
      sourceCidrIp: 'SourceCidrIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipProtocol: 'string',
      port: 'number',
      sourceCidrIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddonTemplateResponseBodyAddonServicesSpec extends $tea.Model {
  inputParams?: DescribeAddonTemplateResponseBodyAddonServicesSpecInputParams[];
  networkACL?: DescribeAddonTemplateResponseBodyAddonServicesSpecNetworkACL[];
  /**
   * @example
   * URL
   */
  serviceAccessType?: string;
  /**
   * @example
   * https://47.96.xx.xx:12008
   */
  serviceAccessUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Web Portal
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      inputParams: 'InputParams',
      networkACL: 'NetworkACL',
      serviceAccessType: 'ServiceAccessType',
      serviceAccessUrl: 'ServiceAccessUrl',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputParams: { 'type': 'array', 'itemType': DescribeAddonTemplateResponseBodyAddonServicesSpecInputParams },
      networkACL: { 'type': 'array', 'itemType': DescribeAddonTemplateResponseBodyAddonServicesSpecNetworkACL },
      serviceAccessType: 'string',
      serviceAccessUrl: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAddonTemplateResponseBodyAddon extends $tea.Model {
  description?: string;
  /**
   * @example
   * /assets/icons/your_icon.svg
   */
  icon?: string;
  label?: string;
  /**
   * @example
   * 2024-08-22 18:11:17
   */
  lastUpdate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Login
   */
  name?: string;
  resourcesSpec?: DescribeAddonTemplateResponseBodyAddonResourcesSpec;
  servicesSpec?: DescribeAddonTemplateResponseBodyAddonServicesSpec[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      icon: 'Icon',
      label: 'Label',
      lastUpdate: 'LastUpdate',
      name: 'Name',
      resourcesSpec: 'ResourcesSpec',
      servicesSpec: 'ServicesSpec',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      icon: 'string',
      label: 'string',
      lastUpdate: 'string',
      name: 'string',
      resourcesSpec: DescribeAddonTemplateResponseBodyAddonResourcesSpec,
      servicesSpec: { 'type': 'array', 'itemType': DescribeAddonTemplateResponseBodyAddonServicesSpec },
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachSharedStoragesRequestSharedStorages extends $tea.Model {
  /**
   * @remarks
   * The local mount directory of the mounted file system.
   * 
   * This parameter is required.
   * 
   * @example
   * /test
   */
  mountDirectory?: string;
  static names(): { [key: string]: string } {
    return {
      mountDirectory: 'MountDirectory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountDirectory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAddonResponseBodyAddonResourcesSpecEipResource extends $tea.Model {
  /**
   * @example
   * True
   */
  autoCreate?: boolean;
  /**
   * @example
   * 100
   */
  bandwidth?: string;
  /**
   * @example
   * 39.108.xx.xx
   */
  eipAddress?: string;
  /**
   * @example
   * eip-bp1vi9124tbx1g3kr****
   */
  eipInstanceId?: string;
  /**
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  static names(): { [key: string]: string } {
    return {
      autoCreate: 'AutoCreate',
      bandwidth: 'Bandwidth',
      eipAddress: 'EipAddress',
      eipInstanceId: 'EipInstanceId',
      instanceChargeType: 'InstanceChargeType',
      internetChargeType: 'InternetChargeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoCreate: 'boolean',
      bandwidth: 'string',
      eipAddress: 'string',
      eipInstanceId: 'string',
      instanceChargeType: 'string',
      internetChargeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAddonResponseBodyAddonResourcesSpec extends $tea.Model {
  ecsResources?: AddonNodeTemplate[];
  eipResource?: GetAddonResponseBodyAddonResourcesSpecEipResource;
  static names(): { [key: string]: string } {
    return {
      ecsResources: 'EcsResources',
      eipResource: 'EipResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsResources: { 'type': 'array', 'itemType': AddonNodeTemplate },
      eipResource: GetAddonResponseBodyAddonResourcesSpecEipResource,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAddonResponseBodyAddonServicesSpecInputParams extends $tea.Model {
  helpText?: string;
  label?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MYSQL_HOME
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * String
   */
  type?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * usr/local/mysql
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      helpText: 'HelpText',
      label: 'Label',
      name: 'Name',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      helpText: 'string',
      label: 'string',
      name: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAddonResponseBodyAddonServicesSpecNetworkACL extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TCP
   */
  ipProtocol?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 172.16.0.0/12
   */
  sourceCidrIp?: string;
  static names(): { [key: string]: string } {
    return {
      ipProtocol: 'IpProtocol',
      port: 'Port',
      sourceCidrIp: 'SourceCidrIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipProtocol: 'string',
      port: 'number',
      sourceCidrIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAddonResponseBodyAddonServicesSpec extends $tea.Model {
  inputParams?: GetAddonResponseBodyAddonServicesSpecInputParams[];
  networkACL?: GetAddonResponseBodyAddonServicesSpecNetworkACL[];
  /**
   * @example
   * URL
   */
  serviceAccessType?: string;
  /**
   * @example
   * https://47.96.xx.xx:12008
   */
  serviceAccessUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Web Portal
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      inputParams: 'InputParams',
      networkACL: 'NetworkACL',
      serviceAccessType: 'ServiceAccessType',
      serviceAccessUrl: 'ServiceAccessUrl',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inputParams: { 'type': 'array', 'itemType': GetAddonResponseBodyAddonServicesSpecInputParams },
      networkACL: { 'type': 'array', 'itemType': GetAddonResponseBodyAddonServicesSpecNetworkACL },
      serviceAccessType: 'string',
      serviceAccessUrl: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAddonResponseBodyAddon extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Login-1.0-W2g****
   */
  addonId?: string;
  description?: string;
  /**
   * @example
   * /assets/icons/your_icon.svg
   */
  icon?: string;
  /**
   * @example
   * 2024-08-22 18:11:17
   */
  installTime?: string;
  label?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Login
   */
  name?: string;
  resourcesSpec?: GetAddonResponseBodyAddonResourcesSpec;
  servicesSpec?: GetAddonResponseBodyAddonServicesSpec[];
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      addonId: 'AddonId',
      description: 'Description',
      icon: 'Icon',
      installTime: 'InstallTime',
      label: 'Label',
      name: 'Name',
      resourcesSpec: 'ResourcesSpec',
      servicesSpec: 'ServicesSpec',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonId: 'string',
      description: 'string',
      icon: 'string',
      installTime: 'string',
      label: 'string',
      name: 'string',
      resourcesSpec: GetAddonResponseBodyAddonResourcesSpec,
      servicesSpec: { 'type': 'array', 'itemType': GetAddonResponseBodyAddonServicesSpec },
      status: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponseBodyClusterCustomConfiguration extends $tea.Model {
  /**
   * @example
   * E-HPC cn-hangzhou
   */
  args?: string;
  /**
   * @example
   * http://*****
   */
  script?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'Args',
      script: 'Script',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: 'string',
      script: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponseBodyManagerDNS extends $tea.Model {
  /**
   * @example
   * running
   */
  status?: string;
  /**
   * @example
   * nis
   */
  type?: string;
  /**
   * @example
   * 2.31
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      type: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponseBodyManagerDirectoryService extends $tea.Model {
  /**
   * @example
   * running
   */
  status?: string;
  /**
   * @example
   * nis
   */
  type?: string;
  /**
   * @example
   * 2.31
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      type: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponseBodyManagerManagerNode extends $tea.Model {
  /**
   * @example
   * 2099-12-31T15:59Z
   */
  expiredTime?: string;
  /**
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @example
   * i-bp1a170jgea1vl******
   */
  instanceId?: string;
  /**
   * @example
   * ecs.g6.4xlarge
   */
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      expiredTime: 'ExpiredTime',
      instanceChargeType: 'InstanceChargeType',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiredTime: 'string',
      instanceChargeType: 'string',
      instanceId: 'string',
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponseBodyManagerScheduler extends $tea.Model {
  /**
   * @example
   * running
   */
  status?: string;
  /**
   * @example
   * SLURM
   */
  type?: string;
  /**
   * @example
   * 22.05.8
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      type: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterResponseBodyManager extends $tea.Model {
  DNS?: GetClusterResponseBodyManagerDNS;
  directoryService?: GetClusterResponseBodyManagerDirectoryService;
  managerNode?: GetClusterResponseBodyManagerManagerNode;
  scheduler?: GetClusterResponseBodyManagerScheduler;
  static names(): { [key: string]: string } {
    return {
      DNS: 'DNS',
      directoryService: 'DirectoryService',
      managerNode: 'ManagerNode',
      scheduler: 'Scheduler',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DNS: GetClusterResponseBodyManagerDNS,
      directoryService: GetClusterResponseBodyManagerDirectoryService,
      managerNode: GetClusterResponseBodyManagerManagerNode,
      scheduler: GetClusterResponseBodyManagerScheduler,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCommonLogDetailResponseBodyLogDetailStages extends $tea.Model {
  /**
   * @example
   * INFO
   */
  logLevel?: string;
  /**
   * @example
   * Successfully created security group sg-bcd***
   */
  message?: string;
  /**
   * @example
   * CreateSecurityGroup
   */
  method?: string;
  /**
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  /**
   * @example
   * Finished
   */
  status?: string;
  /**
   * @example
   * sg-bcd***
   */
  target?: string;
  /**
   * @example
   * 2024-08-22 14:21:54
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      logLevel: 'LogLevel',
      message: 'Message',
      method: 'Method',
      requestId: 'RequestId',
      status: 'Status',
      target: 'Target',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logLevel: 'string',
      message: 'string',
      method: 'string',
      requestId: 'string',
      status: 'string',
      target: 'string',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCommonLogDetailResponseBodyLogDetail extends $tea.Model {
  /**
   * @example
   * ConfigNetwork
   */
  stageName?: string;
  stages?: GetCommonLogDetailResponseBodyLogDetailStages[];
  static names(): { [key: string]: string } {
    return {
      stageName: 'StageName',
      stages: 'Stages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stageName: 'string',
      stages: { 'type': 'array', 'itemType': GetCommonLogDetailResponseBodyLogDetailStages },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueResponseBodyQueue extends $tea.Model {
  /**
   * @example
   * PriorityInstanceType
   */
  allocationStrategy?: string;
  computeNodes?: NodeTemplate[];
  /**
   * @example
   * true
   */
  enableScaleIn?: boolean;
  /**
   * @example
   * true
   */
  enableScaleOut?: boolean;
  /**
   * @example
   * compute
   */
  hostnamePrefix?: string;
  /**
   * @example
   * demo
   */
  hostnameSuffix?: string;
  /**
   * @example
   * 0
   */
  initialCount?: number;
  /**
   * @example
   * erdma
   */
  interConnect?: string;
  keepAliveNodes?: string[];
  /**
   * @example
   * 1000
   */
  maxCount?: number;
  /**
   * @example
   * 99
   */
  maxCountPerCycle?: number;
  /**
   * @example
   * 0
   */
  minCount?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * comp
   */
  queueName?: string;
  /**
   * @example
   * AliyunECSInstanceForEHPCRole
   */
  ramRole?: string;
  vSwitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      allocationStrategy: 'AllocationStrategy',
      computeNodes: 'ComputeNodes',
      enableScaleIn: 'EnableScaleIn',
      enableScaleOut: 'EnableScaleOut',
      hostnamePrefix: 'HostnamePrefix',
      hostnameSuffix: 'HostnameSuffix',
      initialCount: 'InitialCount',
      interConnect: 'InterConnect',
      keepAliveNodes: 'KeepAliveNodes',
      maxCount: 'MaxCount',
      maxCountPerCycle: 'MaxCountPerCycle',
      minCount: 'MinCount',
      queueName: 'QueueName',
      ramRole: 'RamRole',
      vSwitchIds: 'VSwitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationStrategy: 'string',
      computeNodes: { 'type': 'array', 'itemType': NodeTemplate },
      enableScaleIn: 'boolean',
      enableScaleOut: 'boolean',
      hostnamePrefix: 'string',
      hostnameSuffix: 'string',
      initialCount: 'number',
      interConnect: 'string',
      keepAliveNodes: { 'type': 'array', 'itemType': 'string' },
      maxCount: 'number',
      maxCountPerCycle: 'number',
      minCount: 'number',
      queueName: 'string',
      ramRole: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallSoftwaresRequestAdditionalPackages extends $tea.Model {
  /**
   * @remarks
   * The software name.
   * 
   * @example
   * gromacs
   */
  name?: string;
  /**
   * @remarks
   * The software version.
   * 
   * @example
   * 2024.1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAddonTemplatesResponseBodyAddons extends $tea.Model {
  description?: string;
  label?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Login
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      label: 'Label',
      name: 'Name',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      label: 'string',
      name: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAddonsResponseBodyAddons extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Login-1.0-W4g****
   */
  addonId?: string;
  description?: string;
  /**
   * @example
   * 2024-08-22 18:11:17
   */
  installTime?: string;
  label?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Login
   */
  name?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      addonId: 'AddonId',
      description: 'Description',
      installTime: 'InstallTime',
      label: 'Label',
      name: 'Name',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonId: 'string',
      description: 'string',
      installTime: 'string',
      label: 'string',
      name: 'string',
      status: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableFileSystemsResponseBodyFileSystemListMountTargetList extends $tea.Model {
  /**
   * @example
   * c0967****.cn-hangzhou.cpfs.nas.aliyuncs.com
   */
  mountTargetDomain?: string;
  /**
   * @example
   * vpc
   */
  networkType?: string;
  /**
   * @example
   * Active
   */
  status?: string;
  /**
   * @example
   * vsw-2ze0c41hwu7lc29ris***
   */
  vSwitchId?: string;
  /**
   * @example
   * vpc-8vbvb34rtyh6xb3zrehs1****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      mountTargetDomain: 'MountTargetDomain',
      networkType: 'NetworkType',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountTargetDomain: 'string',
      networkType: 'string',
      status: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableFileSystemsResponseBodyFileSystemList extends $tea.Model {
  /**
   * @example
   * 2024-7-29 15:43:53
   */
  createTime?: string;
  /**
   * @example
   * 2fa0248***
   */
  fileSystemId?: string;
  /**
   * @example
   * cpfs
   */
  fileSystemType?: string;
  mountTargetList?: ListAvailableFileSystemsResponseBodyFileSystemListMountTargetList[];
  /**
   * @example
   * cpfs
   */
  protocolType?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * Performance
   */
  storageType?: string;
  /**
   * @example
   * vpc-bp132kgui8n0targb****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      fileSystemId: 'FileSystemId',
      fileSystemType: 'FileSystemType',
      mountTargetList: 'MountTargetList',
      protocolType: 'ProtocolType',
      status: 'Status',
      storageType: 'StorageType',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      fileSystemId: 'string',
      fileSystemType: 'string',
      mountTargetList: { 'type': 'array', 'itemType': ListAvailableFileSystemsResponseBodyFileSystemListMountTargetList },
      protocolType: 'string',
      status: 'string',
      storageType: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableImagesRequestDirectoryService extends $tea.Model {
  /**
   * @example
   * NIS
   */
  type?: string;
  /**
   * @example
   * 1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableImagesRequestScheduler extends $tea.Model {
  /**
   * @example
   * SLURM
   */
  type?: string;
  /**
   * @example
   * 22.05.8
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableImagesResponseBodyImages extends $tea.Model {
  /**
   * @example
   * x86_64
   */
  architecture?: string;
  /**
   * @example
   * BIOS
   */
  bootMode?: string;
  /**
   * @example
   * ExampleDescription
   */
  description?: string;
  /**
   * @example
   * centos_7_06_64_20G_alibase_2019071****
   */
  imageId?: string;
  /**
   * @example
   * CHESS5V5.0.27
   */
  imageName?: string;
  /**
   * @example
   * self
   */
  imageOwnerAlias?: string;
  OSName?: string;
  /**
   * @example
   * CentOS  7.9 64 bit
   */
  OSNameEn?: string;
  /**
   * @example
   * windows
   */
  platform?: string;
  /**
   * @example
   * 40
   */
  size?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      bootMode: 'BootMode',
      description: 'Description',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageOwnerAlias: 'ImageOwnerAlias',
      OSName: 'OSName',
      OSNameEn: 'OSNameEn',
      platform: 'Platform',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      bootMode: 'string',
      description: 'string',
      imageId: 'string',
      imageName: 'string',
      imageOwnerAlias: 'string',
      OSName: 'string',
      OSNameEn: 'string',
      platform: 'string',
      size: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClustersAdditionalPackages extends $tea.Model {
  /**
   * @example
   * gromacs
   */
  name?: string;
  /**
   * @example
   * 2024.1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClustersAddonsResourcesSpec extends $tea.Model {
  /**
   * @example
   * i-bp1bg85d2q6laic8****
   */
  ecsInstanceId?: string;
  /**
   * @example
   * eip-bp1vi9124tbx1g3kr****
   */
  eipInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      ecsInstanceId: 'EcsInstanceId',
      eipInstanceId: 'EipInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsInstanceId: 'string',
      eipInstanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClustersAddonsServicesSpec extends $tea.Model {
  /**
   * @example
   * URL
   */
  serviceAccessType?: string;
  /**
   * @example
   * https://47.96.xx.xx:12008
   */
  serviceAccessUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Web Portal
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      serviceAccessType: 'ServiceAccessType',
      serviceAccessUrl: 'ServiceAccessUrl',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceAccessType: 'string',
      serviceAccessUrl: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClustersAddons extends $tea.Model {
  /**
   * @example
   * Login-1.0-W2g****
   */
  addonId?: string;
  description?: string;
  label?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Login
   */
  name?: string;
  resourcesSpec?: ListClustersResponseBodyClustersAddonsResourcesSpec;
  servicesSpec?: ListClustersResponseBodyClustersAddonsServicesSpec[];
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      addonId: 'AddonId',
      description: 'Description',
      label: 'Label',
      name: 'Name',
      resourcesSpec: 'ResourcesSpec',
      servicesSpec: 'ServicesSpec',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonId: 'string',
      description: 'string',
      label: 'string',
      name: 'string',
      resourcesSpec: ListClustersResponseBodyClustersAddonsResourcesSpec,
      servicesSpec: { 'type': 'array', 'itemType': ListClustersResponseBodyClustersAddonsServicesSpec },
      status: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClustersClusterCustomConfiguration extends $tea.Model {
  /**
   * @example
   * demo
   */
  args?: string;
  /**
   * @example
   * https://xxxxx
   */
  script?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'Args',
      script: 'Script',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: 'string',
      script: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClustersManagerDNS extends $tea.Model {
  /**
   * @example
   * NIS
   */
  type?: string;
  /**
   * @example
   * 2.31
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClustersManagerDirectoryService extends $tea.Model {
  /**
   * @example
   * NIS
   */
  type?: string;
  /**
   * @example
   * 2.31
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClustersManagerScheduler extends $tea.Model {
  /**
   * @example
   * SLURM
   */
  type?: string;
  /**
   * @example
   * 22.05.8
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClustersManager extends $tea.Model {
  DNS?: ListClustersResponseBodyClustersManagerDNS;
  directoryService?: ListClustersResponseBodyClustersManagerDirectoryService;
  scheduler?: ListClustersResponseBodyClustersManagerScheduler;
  static names(): { [key: string]: string } {
    return {
      DNS: 'DNS',
      directoryService: 'DirectoryService',
      scheduler: 'Scheduler',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DNS: ListClustersResponseBodyClustersManagerDNS,
      directoryService: ListClustersResponseBodyClustersManagerDirectoryService,
      scheduler: ListClustersResponseBodyClustersManagerScheduler,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClustersNodes extends $tea.Model {
  /**
   * @example
   * 0
   */
  abnormalCounts?: number;
  /**
   * @example
   * 0
   */
  creatingCounts?: number;
  /**
   * @example
   * 1
   */
  runningCounts?: number;
  static names(): { [key: string]: string } {
    return {
      abnormalCounts: 'AbnormalCounts',
      creatingCounts: 'CreatingCounts',
      runningCounts: 'RunningCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abnormalCounts: 'number',
      creatingCounts: 'number',
      runningCounts: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClustersUsers extends $tea.Model {
  /**
   * @example
   * 2
   */
  normalCounts?: number;
  /**
   * @example
   * 2
   */
  sudoCounts?: number;
  static names(): { [key: string]: string } {
    return {
      normalCounts: 'NormalCounts',
      sudoCounts: 'SudoCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      normalCounts: 'number',
      sudoCounts: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClusters extends $tea.Model {
  additionalPackages?: ListClustersResponseBodyClustersAdditionalPackages[];
  addons?: ListClustersResponseBodyClustersAddons[];
  /**
   * @example
   * Standard
   */
  clusterCategory?: string;
  /**
   * @example
   * 2024-08-06T12:43:01.000Z
   */
  clusterCreateTime?: string;
  clusterCredentials?: string[];
  clusterCustomConfiguration?: ListClustersResponseBodyClustersClusterCustomConfiguration;
  /**
   * @example
   * Demo
   */
  clusterDescription?: string;
  /**
   * @example
   * ehpc-hz-VMKe******
   */
  clusterId?: string;
  /**
   * @example
   * Integrated
   */
  clusterMode?: string;
  /**
   * @example
   * 2024-08-06T12:43:01.000Z
   */
  clusterModifyTime?: string;
  /**
   * @example
   * slurm22.05.8-cluster-20240227
   */
  clusterName?: string;
  /**
   * @example
   * running
   */
  clusterStatus?: string;
  /**
   * @example
   * 1000
   */
  clusterUsedCoreTime?: number;
  /**
   * @example
   * vsw-f8za5p0mwzgdu3wgx****
   */
  clusterVSwitchId?: string;
  /**
   * @example
   * vpc-m5efjevmclc0xdmys****
   */
  clusterVpcId?: string;
  /**
   * @example
   * true
   */
  deletionProtection?: boolean;
  /**
   * @example
   * 2.0.0
   */
  ehpcVersion?: string;
  manager?: ListClustersResponseBodyClustersManager;
  /**
   * @example
   * 10000
   */
  maxCoreCount?: number;
  /**
   * @example
   * 500
   */
  maxCount?: number;
  nodes?: ListClustersResponseBodyClustersNodes;
  /**
   * @example
   * rg-acfmxazb4ph****
   */
  resourceGroupId?: string;
  /**
   * @example
   * sg-bp13n61xsydodfyg****
   */
  securityGroupId?: string;
  users?: ListClustersResponseBodyClustersUsers;
  static names(): { [key: string]: string } {
    return {
      additionalPackages: 'AdditionalPackages',
      addons: 'Addons',
      clusterCategory: 'ClusterCategory',
      clusterCreateTime: 'ClusterCreateTime',
      clusterCredentials: 'ClusterCredentials',
      clusterCustomConfiguration: 'ClusterCustomConfiguration',
      clusterDescription: 'ClusterDescription',
      clusterId: 'ClusterId',
      clusterMode: 'ClusterMode',
      clusterModifyTime: 'ClusterModifyTime',
      clusterName: 'ClusterName',
      clusterStatus: 'ClusterStatus',
      clusterUsedCoreTime: 'ClusterUsedCoreTime',
      clusterVSwitchId: 'ClusterVSwitchId',
      clusterVpcId: 'ClusterVpcId',
      deletionProtection: 'DeletionProtection',
      ehpcVersion: 'EhpcVersion',
      manager: 'Manager',
      maxCoreCount: 'MaxCoreCount',
      maxCount: 'MaxCount',
      nodes: 'Nodes',
      resourceGroupId: 'ResourceGroupId',
      securityGroupId: 'SecurityGroupId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalPackages: { 'type': 'array', 'itemType': ListClustersResponseBodyClustersAdditionalPackages },
      addons: { 'type': 'array', 'itemType': ListClustersResponseBodyClustersAddons },
      clusterCategory: 'string',
      clusterCreateTime: 'string',
      clusterCredentials: { 'type': 'array', 'itemType': 'string' },
      clusterCustomConfiguration: ListClustersResponseBodyClustersClusterCustomConfiguration,
      clusterDescription: 'string',
      clusterId: 'string',
      clusterMode: 'string',
      clusterModifyTime: 'string',
      clusterName: 'string',
      clusterStatus: 'string',
      clusterUsedCoreTime: 'number',
      clusterVSwitchId: 'string',
      clusterVpcId: 'string',
      deletionProtection: 'boolean',
      ehpcVersion: 'string',
      manager: ListClustersResponseBodyClustersManager,
      maxCoreCount: 'number',
      maxCount: 'number',
      nodes: ListClustersResponseBodyClustersNodes,
      resourceGroupId: 'string',
      securityGroupId: 'string',
      users: ListClustersResponseBodyClustersUsers,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommonLogsResponseBodyLogs extends $tea.Model {
  /**
   * @example
   * CreaterCluster
   */
  action?: string;
  /**
   * @example
   * ehpc-hz-9T3xPNezoS
   */
  clusterId?: string;
  /**
   * @example
   * Operation
   */
  logType?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * 137***
   */
  operatorUid?: string;
  /**
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  /**
   * @example
   * Finished
   */
  status?: string;
  /**
   * @example
   * i-abc***
   */
  target?: string;
  /**
   * @example
   * 2024-08-22 14:21:54
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      clusterId: 'ClusterId',
      logType: 'LogType',
      message: 'Message',
      operatorUid: 'OperatorUid',
      requestId: 'RequestId',
      status: 'Status',
      target: 'Target',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      clusterId: 'string',
      logType: 'string',
      message: 'string',
      operatorUid: 'string',
      requestId: 'string',
      status: 'string',
      target: 'string',
      time: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstalledSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfos extends $tea.Model {
  /**
   * @remarks
   * The category into which the software falls.
   * 
   * @example
   * NWP
   */
  category?: string;
  /**
   * @remarks
   * The time when the software was installed.
   * 
   * @example
   * 2024-03-05 18:24:08
   */
  createTime?: string;
  /**
   * @remarks
   * The software description.
   */
  description?: string;
  /**
   * @remarks
   * The URL of the software icon.
   * 
   * @example
   * https://gw.alicdn.com/imgextra/i2/O1CN01FIkxZ81LmE0fvrAyR_!!6000000001341-55-tps-6349-1603.svg
   */
  icon?: string;
  /**
   * @remarks
   * The software name.
   * 
   * @example
   * gromacs
   */
  name?: string;
  /**
   * @remarks
   * The installation status of the software.
   * 
   * Valid values:
   * 
   * *   Installed
   * *   Uninstalled
   * *   Installing
   * *   Exception
   * 
   * @example
   * Installed
   */
  status?: string;
  /**
   * @remarks
   * The software version.
   * 
   * @example
   * 2024.1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      createTime: 'CreateTime',
      description: 'Description',
      icon: 'Icon',
      name: 'Name',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      createTime: 'string',
      description: 'string',
      icon: 'string',
      name: 'string',
      status: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstalledSoftwaresResponseBodyAdditionalPackages extends $tea.Model {
  additionalPackageInfos?: ListInstalledSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfos[];
  static names(): { [key: string]: string } {
    return {
      additionalPackageInfos: 'AdditionalPackageInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalPackageInfos: { 'type': 'array', 'itemType': ListInstalledSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyNodesTotalResources extends $tea.Model {
  /**
   * @example
   * 1
   */
  cpu?: number;
  /**
   * @example
   * 0
   */
  gpu?: number;
  /**
   * @example
   * 1024
   */
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      gpu: 'Gpu',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      gpu: 'number',
      memory: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyNodes extends $tea.Model {
  /**
   * @example
   * 2020-06-09T06:22:02.000Z
   */
  addTime?: string;
  /**
   * @example
   * 2020-06-09T06:22:02.000Z
   */
  expiredTime?: string;
  /**
   * @example
   * edas.cn-shanghai.aliyuncs.com
   */
  hostname?: string;
  /**
   * @example
   * true
   */
  htEnabled?: boolean;
  /**
   * @example
   * i-bp15707mys2rsy0j****
   */
  id?: string;
  /**
   * @example
   * centos_7_06_64_20G_alibase_20190711.vhd
   */
  imageId?: string;
  /**
   * @example
   * ecs.c5.large
   */
  instanceType?: string;
  /**
   * @example
   * 172.16.\*\*.**
   */
  ipAddress?: string;
  /**
   * @example
   * true
   */
  keepAlive?: boolean;
  /**
   * @example
   * 172.16.\*\*.**
   */
  publicIpAddress?: string;
  /**
   * @example
   * autoque3
   */
  queueName?: string;
  /**
   * @example
   * NoSpot
   */
  spotStrategy?: string;
  /**
   * @example
   * active
   */
  stateInSched?: string;
  /**
   * @example
   * running
   */
  status?: string;
  totalResources?: ListNodesResponseBodyNodesTotalResources;
  /**
   * @example
   * vsw-bp1e47optm9g58zcu****
   */
  vSwitchId?: string;
  /**
   * @example
   * vpc-bp1gnu8br4ay7beb2w****
   */
  vpcId?: string;
  /**
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      addTime: 'AddTime',
      expiredTime: 'ExpiredTime',
      hostname: 'Hostname',
      htEnabled: 'HtEnabled',
      id: 'Id',
      imageId: 'ImageId',
      instanceType: 'InstanceType',
      ipAddress: 'IpAddress',
      keepAlive: 'KeepAlive',
      publicIpAddress: 'PublicIpAddress',
      queueName: 'QueueName',
      spotStrategy: 'SpotStrategy',
      stateInSched: 'StateInSched',
      status: 'Status',
      totalResources: 'TotalResources',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addTime: 'string',
      expiredTime: 'string',
      hostname: 'string',
      htEnabled: 'boolean',
      id: 'string',
      imageId: 'string',
      instanceType: 'string',
      ipAddress: 'string',
      keepAlive: 'boolean',
      publicIpAddress: 'string',
      queueName: 'string',
      spotStrategy: 'string',
      stateInSched: 'string',
      status: 'string',
      totalResources: ListNodesResponseBodyNodesTotalResources,
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueuesResponseBodyQueuesNodes extends $tea.Model {
  /**
   * @example
   * 2
   */
  creatingCounts?: number;
  /**
   * @example
   * 0
   */
  exceptionCounts?: number;
  /**
   * @example
   * 1
   */
  runningCounts?: number;
  static names(): { [key: string]: string } {
    return {
      creatingCounts: 'CreatingCounts',
      exceptionCounts: 'ExceptionCounts',
      runningCounts: 'RunningCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatingCounts: 'number',
      exceptionCounts: 'number',
      runningCounts: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueuesResponseBodyQueues extends $tea.Model {
  computeNodes?: NodeTemplate[];
  /**
   * @example
   * 2023-11-10T02:04:00Z
   */
  createTime?: string;
  /**
   * @example
   * true
   */
  enableScaleIn?: boolean;
  /**
   * @example
   * true
   */
  enableScaleOut?: boolean;
  /**
   * @example
   * 100
   */
  maxCount?: number;
  /**
   * @example
   * 1
   */
  maxCountPerCycle?: number;
  /**
   * @example
   * 0
   */
  minCount?: number;
  nodes?: ListQueuesResponseBodyQueuesNodes;
  /**
   * @example
   * comp
   */
  queueName?: string;
  /**
   * @example
   * 24
   */
  totalCores?: number;
  /**
   * @example
   * 2024-04-25T02:02:32
   */
  updateTime?: string;
  vSwitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      computeNodes: 'ComputeNodes',
      createTime: 'CreateTime',
      enableScaleIn: 'EnableScaleIn',
      enableScaleOut: 'EnableScaleOut',
      maxCount: 'MaxCount',
      maxCountPerCycle: 'MaxCountPerCycle',
      minCount: 'MinCount',
      nodes: 'Nodes',
      queueName: 'QueueName',
      totalCores: 'TotalCores',
      updateTime: 'UpdateTime',
      vSwitchIds: 'VSwitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeNodes: { 'type': 'array', 'itemType': NodeTemplate },
      createTime: 'string',
      enableScaleIn: 'boolean',
      enableScaleOut: 'boolean',
      maxCount: 'number',
      maxCountPerCycle: 'number',
      minCount: 'number',
      nodes: ListQueuesResponseBodyQueuesNodes,
      queueName: 'string',
      totalCores: 'number',
      updateTime: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSharedStoragesResponseBodySharedStoragesMountInfo extends $tea.Model {
  /**
   * @remarks
   * The local mount directory of the attached file system.
   * 
   * @example
   * /test
   */
  mountDirectory?: string;
  /**
   * @remarks
   * The mount options for the attached file system. Valid values:
   * 
   * *   \\-t nfs -o vers=3,nolock,proto=tcp,noresvport
   * *   \\-t nfs -o vers=4.0,noresvport
   * 
   * @example
   * -t nfs -o vers=4.0,noresvport
   */
  mountOptions?: string;
  /**
   * @remarks
   * The mount target of the attached file system.
   * 
   * @example
   * 0bd504b***-ngq26.cn-hangzhou.nas.aliyuncs.com
   */
  mountTarget?: string;
  /**
   * @remarks
   * The protocol used by the mount target of the attached file system. Valid values:
   * 
   * *   nfs3
   * *   nfs4
   * *   cpfs
   * 
   * @example
   * nfs3
   */
  protocolType?: string;
  /**
   * @remarks
   * The storage directory of the attached file system.
   * 
   * @example
   * /testehpc
   */
  storageDirectory?: string;
  static names(): { [key: string]: string } {
    return {
      mountDirectory: 'MountDirectory',
      mountOptions: 'MountOptions',
      mountTarget: 'MountTarget',
      protocolType: 'ProtocolType',
      storageDirectory: 'StorageDirectory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountDirectory: 'string',
      mountOptions: 'string',
      mountTarget: 'string',
      protocolType: 'string',
      storageDirectory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSharedStoragesResponseBodySharedStorages extends $tea.Model {
  /**
   * @remarks
   * The ID of the attached file system.
   * 
   * @example
   * 08c7f4b***
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The protocol used by the attached file system. Valid values:
   * 
   * *   nfs3
   * *   nfs4
   * *   cpfs
   * 
   * @example
   * nfs4
   */
  fileSystemProtocol?: string;
  /**
   * @remarks
   * The type of the attached file system. Valid values:
   * 
   * *   nas
   * *   cpfs
   * 
   * @example
   * nas
   */
  fileSystemType?: string;
  /**
   * @remarks
   * The mount information.
   */
  mountInfo?: ListSharedStoragesResponseBodySharedStoragesMountInfo[];
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      fileSystemProtocol: 'FileSystemProtocol',
      fileSystemType: 'FileSystemType',
      mountInfo: 'MountInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      fileSystemProtocol: 'string',
      fileSystemType: 'string',
      mountInfo: { 'type': 'array', 'itemType': ListSharedStoragesResponseBodySharedStoragesMountInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwaresRequestOsInfos extends $tea.Model {
  /**
   * @remarks
   * The OS architecture. Valid values:
   * 
   * *   x86_64
   * *   arm64
   * 
   * @example
   * x86_64
   */
  architecture?: string;
  /**
   * @remarks
   * The image tag.
   * 
   * @example
   * CentOS_7.9_64
   */
  osTag?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      osTag: 'OsTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      osTag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfosVersionsVersionInfosSupportOsSupportOsInfos extends $tea.Model {
  /**
   * @remarks
   * The OS architecture. Valid values:
   * 
   * *   x86_64
   * *   arm64
   * 
   * @example
   * x86_64
   */
  architecture?: string;
  /**
   * @remarks
   * The image tag.
   * 
   * @example
   * Alibaba Cloud Linux  3.2104 LTS 64 bit ARM Edition
   */
  osTag?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      osTag: 'OsTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      osTag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfosVersionsVersionInfosSupportOs extends $tea.Model {
  supportOsInfos?: ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfosVersionsVersionInfosSupportOsSupportOsInfos[];
  static names(): { [key: string]: string } {
    return {
      supportOsInfos: 'SupportOsInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportOsInfos: { 'type': 'array', 'itemType': ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfosVersionsVersionInfosSupportOsSupportOsInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfosVersionsVersionInfos extends $tea.Model {
  /**
   * @remarks
   * Indicates whether the version is the latest.
   * 
   * @example
   * false
   */
  latest?: string;
  /**
   * @remarks
   * The information about the supported OSs.
   */
  supportOs?: ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfosVersionsVersionInfosSupportOs;
  /**
   * @remarks
   * The software version.
   * 
   * @example
   * 2024.1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      latest: 'Latest',
      supportOs: 'SupportOs',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latest: 'string',
      supportOs: ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfosVersionsVersionInfosSupportOs,
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfosVersions extends $tea.Model {
  versionInfos?: ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfosVersionsVersionInfos[];
  static names(): { [key: string]: string } {
    return {
      versionInfos: 'VersionInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionInfos: { 'type': 'array', 'itemType': ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfosVersionsVersionInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfos extends $tea.Model {
  /**
   * @remarks
   * The application category.
   * 
   * @example
   * NWP
   */
  category?: string;
  /**
   * @remarks
   * The software description.
   */
  description?: string;
  /**
   * @remarks
   * The URL of the software icon.
   * 
   * @example
   * https://gw.alicdn.com/imgextra/i2/O1CN01FIkxZ81LmE0fvrAyR_!!6000000001341-55-tps-6349-1603.svg
   */
  icon?: string;
  /**
   * @remarks
   * The software name.
   * 
   * @example
   * gromacs
   */
  name?: string;
  /**
   * @remarks
   * The information about the software versions that can be installed in the cluster.
   */
  versions?: ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfosVersions;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      description: 'Description',
      icon: 'Icon',
      name: 'Name',
      versions: 'Versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      description: 'string',
      icon: 'string',
      name: 'string',
      versions: ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfosVersions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwaresResponseBodyAdditionalPackages extends $tea.Model {
  additionalPackageInfos?: ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfos[];
  static names(): { [key: string]: string } {
    return {
      additionalPackageInfos: 'AdditionalPackageInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalPackageInfos: { 'type': 'array', 'itemType': ListSoftwaresResponseBodyAdditionalPackagesAdditionalPackageInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyUsersUserInfo extends $tea.Model {
  /**
   * @remarks
   * The time when the user was first added.
   * 
   * @example
   * 2014-08-22T17:46:47
   */
  addTime?: string;
  /**
   * @remarks
   * The name of the permission group. Valid values:
   * 
   * users: ordinary permissions, which are suitable for regular users that need only to submit and debug jobs.
   * 
   * wheel: sudo permissions, which are suitable for administrators who need to manage clusters. In addition to submitting and debugging jobs, you can also run sudo commands to install software and restart nodes.
   * 
   * @example
   * users
   */
  group?: string;
  /**
   * @remarks
   * The permission group ID.
   * 
   * @example
   * 100
   */
  groupId?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1001
   */
  userId?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * testuser
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      addTime: 'AddTime',
      group: 'Group',
      groupId: 'GroupId',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addTime: 'string',
      group: 'string',
      groupId: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyUsers extends $tea.Model {
  userInfo?: ListUsersResponseBodyUsersUserInfo[];
  static names(): { [key: string]: string } {
    return {
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userInfo: { 'type': 'array', 'itemType': ListUsersResponseBodyUsersUserInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallSoftwaresRequestAdditionalPackages extends $tea.Model {
  /**
   * @remarks
   * The software name.
   * 
   * @example
   * gromacs
   */
  name?: string;
  /**
   * @remarks
   * The software version.
   * 
   * @example
   * 2024.1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClusterRequestClusterCustomConfiguration extends $tea.Model {
  /**
   * @example
   * E-HPC cn-hangzhou
   */
  args?: string;
  /**
   * @example
   * http://*****
   */
  script?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'Args',
      script: 'Script',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: 'string',
      script: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateNodesRequestInstances extends $tea.Model {
  /**
   * @remarks
   * The instance ID of the compute node.
   * 
   * @example
   * i-bp1bzqq1ddeemuddn****
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether to enable deletion protection for the compute node.
   * 
   * @example
   * true
   */
  keepAlive?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      keepAlive: 'KeepAlive',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      keepAlive: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQueueRequestQueue extends $tea.Model {
  /**
   * @example
   * PriorityInstanceType
   */
  allocationStrategy?: string;
  computeNodes?: NodeTemplate[];
  /**
   * @example
   * true
   */
  enableScaleIn?: boolean;
  /**
   * @example
   * true
   */
  enableScaleOut?: boolean;
  /**
   * @example
   * compute
   */
  hostnamePrefix?: string;
  /**
   * @example
   * hpc
   */
  hostnameSuffix?: string;
  /**
   * @example
   * 0
   */
  initialCount?: number;
  /**
   * @example
   * erdma
   */
  interConnect?: string;
  keepAliveNodes?: string[];
  /**
   * @example
   * 1000
   */
  maxCount?: number;
  /**
   * @example
   * 99
   */
  maxCountPerCycle?: number;
  /**
   * @example
   * 0
   */
  minCount?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * comp
   */
  queueName?: string;
  /**
   * @example
   * AliyunECSInstanceForEHPCRole
   */
  ramRole?: string;
  vSwitchIds?: string[];
  static names(): { [key: string]: string } {
    return {
      allocationStrategy: 'AllocationStrategy',
      computeNodes: 'ComputeNodes',
      enableScaleIn: 'EnableScaleIn',
      enableScaleOut: 'EnableScaleOut',
      hostnamePrefix: 'HostnamePrefix',
      hostnameSuffix: 'HostnameSuffix',
      initialCount: 'InitialCount',
      interConnect: 'InterConnect',
      keepAliveNodes: 'KeepAliveNodes',
      maxCount: 'MaxCount',
      maxCountPerCycle: 'MaxCountPerCycle',
      minCount: 'MinCount',
      queueName: 'QueueName',
      ramRole: 'RamRole',
      vSwitchIds: 'VSwitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationStrategy: 'string',
      computeNodes: { 'type': 'array', 'itemType': NodeTemplate },
      enableScaleIn: 'boolean',
      enableScaleOut: 'boolean',
      hostnamePrefix: 'string',
      hostnameSuffix: 'string',
      initialCount: 'number',
      interConnect: 'string',
      keepAliveNodes: { 'type': 'array', 'itemType': 'string' },
      maxCount: 'number',
      maxCountPerCycle: 'number',
      minCount: 'number',
      queueName: 'string',
      ramRole: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("ehpc", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 挂载共享存储
   * 
   * @param tmpReq - AttachSharedStoragesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns AttachSharedStoragesResponse
   */
  async attachSharedStoragesWithOptions(tmpReq: AttachSharedStoragesRequest, runtime: $Util.RuntimeOptions): Promise<AttachSharedStoragesResponse> {
    Util.validateModel(tmpReq);
    let request = new AttachSharedStoragesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.sharedStorages)) {
      request.sharedStoragesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sharedStorages, "SharedStorages", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.sharedStoragesShrink)) {
      query["SharedStorages"] = request.sharedStoragesShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AttachSharedStorages",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AttachSharedStoragesResponse>(await this.callApi(params, req, runtime), new AttachSharedStoragesResponse({}));
  }

  /**
   * 挂载共享存储
   * 
   * @param request - AttachSharedStoragesRequest
   * @returns AttachSharedStoragesResponse
   */
  async attachSharedStorages(request: AttachSharedStoragesRequest): Promise<AttachSharedStoragesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachSharedStoragesWithOptions(request, runtime);
  }

  /**
   * 创建一个按量付费或者预付费（包年包月） 集群
   * 
   * @param tmpReq - CreateClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateClusterResponse
   */
  async createClusterWithOptions(tmpReq: CreateClusterRequest, runtime: $Util.RuntimeOptions): Promise<CreateClusterResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateClusterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.additionalPackages)) {
      request.additionalPackagesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.additionalPackages, "AdditionalPackages", "json");
    }

    if (!Util.isUnset(tmpReq.addons)) {
      request.addonsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.addons, "Addons", "json");
    }

    if (!Util.isUnset(tmpReq.clusterCredentials)) {
      request.clusterCredentialsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.clusterCredentials, "ClusterCredentials", "json");
    }

    if (!Util.isUnset(tmpReq.clusterCustomConfiguration)) {
      request.clusterCustomConfigurationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.clusterCustomConfiguration, "ClusterCustomConfiguration", "json");
    }

    if (!Util.isUnset(tmpReq.manager)) {
      request.managerShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.manager, "Manager", "json");
    }

    if (!Util.isUnset(tmpReq.queues)) {
      request.queuesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.queues, "Queues", "json");
    }

    if (!Util.isUnset(tmpReq.sharedStorages)) {
      request.sharedStoragesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sharedStorages, "SharedStorages", "json");
    }

    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.additionalPackagesShrink)) {
      query["AdditionalPackages"] = request.additionalPackagesShrink;
    }

    if (!Util.isUnset(request.addonsShrink)) {
      query["Addons"] = request.addonsShrink;
    }

    if (!Util.isUnset(request.clientVersion)) {
      query["ClientVersion"] = request.clientVersion;
    }

    if (!Util.isUnset(request.clusterCategory)) {
      query["ClusterCategory"] = request.clusterCategory;
    }

    if (!Util.isUnset(request.clusterCredentialsShrink)) {
      query["ClusterCredentials"] = request.clusterCredentialsShrink;
    }

    if (!Util.isUnset(request.clusterCustomConfigurationShrink)) {
      query["ClusterCustomConfiguration"] = request.clusterCustomConfigurationShrink;
    }

    if (!Util.isUnset(request.clusterDescription)) {
      query["ClusterDescription"] = request.clusterDescription;
    }

    if (!Util.isUnset(request.clusterMode)) {
      query["ClusterMode"] = request.clusterMode;
    }

    if (!Util.isUnset(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!Util.isUnset(request.clusterVSwitchId)) {
      query["ClusterVSwitchId"] = request.clusterVSwitchId;
    }

    if (!Util.isUnset(request.clusterVpcId)) {
      query["ClusterVpcId"] = request.clusterVpcId;
    }

    if (!Util.isUnset(request.deletionProtection)) {
      query["DeletionProtection"] = request.deletionProtection;
    }

    if (!Util.isUnset(request.isEnterpriseSecurityGroup)) {
      query["IsEnterpriseSecurityGroup"] = request.isEnterpriseSecurityGroup;
    }

    if (!Util.isUnset(request.managerShrink)) {
      query["Manager"] = request.managerShrink;
    }

    if (!Util.isUnset(request.maxCoreCount)) {
      query["MaxCoreCount"] = request.maxCoreCount;
    }

    if (!Util.isUnset(request.maxCount)) {
      query["MaxCount"] = request.maxCount;
    }

    if (!Util.isUnset(request.queuesShrink)) {
      query["Queues"] = request.queuesShrink;
    }

    if (!Util.isUnset(request.resourceGroupId)) {
      query["ResourceGroupId"] = request.resourceGroupId;
    }

    if (!Util.isUnset(request.securityGroupId)) {
      query["SecurityGroupId"] = request.securityGroupId;
    }

    if (!Util.isUnset(request.sharedStoragesShrink)) {
      query["SharedStorages"] = request.sharedStoragesShrink;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCluster",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateClusterResponse>(await this.callApi(params, req, runtime), new CreateClusterResponse({}));
  }

  /**
   * 创建一个按量付费或者预付费（包年包月） 集群
   * 
   * @param request - CreateClusterRequest
   * @returns CreateClusterResponse
   */
  async createCluster(request: CreateClusterRequest): Promise<CreateClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createClusterWithOptions(request, runtime);
  }

  /**
   * 集群扩容节点
   * 
   * @param tmpReq - CreateNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateNodesResponse
   */
  async createNodesWithOptions(tmpReq: CreateNodesRequest, runtime: $Util.RuntimeOptions): Promise<CreateNodesResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateNodesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.computeNode)) {
      request.computeNodeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.computeNode, "ComputeNode", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.computeNodeShrink)) {
      query["ComputeNode"] = request.computeNodeShrink;
    }

    if (!Util.isUnset(request.count)) {
      query["Count"] = request.count;
    }

    if (!Util.isUnset(request.HPCInterConnect)) {
      query["HPCInterConnect"] = request.HPCInterConnect;
    }

    if (!Util.isUnset(request.hostnamePrefix)) {
      query["HostnamePrefix"] = request.hostnamePrefix;
    }

    if (!Util.isUnset(request.hostnameSuffix)) {
      query["HostnameSuffix"] = request.hostnameSuffix;
    }

    if (!Util.isUnset(request.keepAlive)) {
      query["KeepAlive"] = request.keepAlive;
    }

    if (!Util.isUnset(request.queueName)) {
      query["QueueName"] = request.queueName;
    }

    if (!Util.isUnset(request.ramRole)) {
      query["RamRole"] = request.ramRole;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateNodes",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateNodesResponse>(await this.callApi(params, req, runtime), new CreateNodesResponse({}));
  }

  /**
   * 集群扩容节点
   * 
   * @param request - CreateNodesRequest
   * @returns CreateNodesResponse
   */
  async createNodes(request: CreateNodesRequest): Promise<CreateNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createNodesWithOptions(request, runtime);
  }

  /**
   * Creates a queue for an Enterprise High Performance Computing (E-HPC) cluster.
   * 
   * @param tmpReq - CreateQueueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateQueueResponse
   */
  async createQueueWithOptions(tmpReq: CreateQueueRequest, runtime: $Util.RuntimeOptions): Promise<CreateQueueResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateQueueShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.queue)) {
      request.queueShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.queue, "Queue", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.queueShrink)) {
      query["Queue"] = request.queueShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateQueue",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateQueueResponse>(await this.callApi(params, req, runtime), new CreateQueueResponse({}));
  }

  /**
   * Creates a queue for an Enterprise High Performance Computing (E-HPC) cluster.
   * 
   * @param request - CreateQueueRequest
   * @returns CreateQueueResponse
   */
  async createQueue(request: CreateQueueRequest): Promise<CreateQueueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createQueueWithOptions(request, runtime);
  }

  /**
   * 创建集群用户
   * 
   * @param tmpReq - CreateUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateUsersResponse
   */
  async createUsersWithOptions(tmpReq: CreateUsersRequest, runtime: $Util.RuntimeOptions): Promise<CreateUsersResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateUsersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.user)) {
      request.userShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.user, "User", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.userShrink)) {
      query["User"] = request.userShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateUsers",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateUsersResponse>(await this.callApi(params, req, runtime), new CreateUsersResponse({}));
  }

  /**
   * 创建集群用户
   * 
   * @param request - CreateUsersRequest
   * @returns CreateUsersResponse
   */
  async createUsers(request: CreateUsersRequest): Promise<CreateUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createUsersWithOptions(request, runtime);
  }

  /**
   * Releases an Enterprise High Performance Computing (E-HPC) cluster.
   * 
   * @param request - DeleteClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteClusterResponse
   */
  async deleteClusterWithOptions(request: DeleteClusterRequest, runtime: $Util.RuntimeOptions): Promise<DeleteClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCluster",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteClusterResponse>(await this.callApi(params, req, runtime), new DeleteClusterResponse({}));
  }

  /**
   * Releases an Enterprise High Performance Computing (E-HPC) cluster.
   * 
   * @param request - DeleteClusterRequest
   * @returns DeleteClusterResponse
   */
  async deleteCluster(request: DeleteClusterRequest): Promise<DeleteClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteClusterWithOptions(request, runtime);
  }

  /**
   * 删除作业
   * 
   * @param tmpReq - DeleteJobsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteJobsResponse
   */
  async deleteJobsWithOptions(tmpReq: DeleteJobsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteJobsResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteJobsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.jobSpec)) {
      request.jobSpecShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.jobSpec, "JobSpec", "json");
    }

    let query = { };
    if (!Util.isUnset(request.jobSpecShrink)) {
      query["JobSpec"] = request.jobSpecShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteJobs",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteJobsResponse>(await this.callApi(params, req, runtime), new DeleteJobsResponse({}));
  }

  /**
   * 删除作业
   * 
   * @param request - DeleteJobsRequest
   * @returns DeleteJobsResponse
   */
  async deleteJobs(request: DeleteJobsRequest): Promise<DeleteJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteJobsWithOptions(request, runtime);
  }

  /**
   * Deletes compute nodes from an Enterprise High Performance Computing (E-HPC) cluster at a time.
   * 
   * @remarks
   * ## [](#)Usage notes
   * Before you delete a compute node, we recommend that you export all job data from the node to prevent data loss.
   * 
   * @param tmpReq - DeleteNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteNodesResponse
   */
  async deleteNodesWithOptions(tmpReq: DeleteNodesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNodesResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteNodesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "InstanceIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.instanceIdsShrink)) {
      query["InstanceIds"] = request.instanceIdsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteNodes",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteNodesResponse>(await this.callApi(params, req, runtime), new DeleteNodesResponse({}));
  }

  /**
   * Deletes compute nodes from an Enterprise High Performance Computing (E-HPC) cluster at a time.
   * 
   * @remarks
   * ## [](#)Usage notes
   * Before you delete a compute node, we recommend that you export all job data from the node to prevent data loss.
   * 
   * @param request - DeleteNodesRequest
   * @returns DeleteNodesResponse
   */
  async deleteNodes(request: DeleteNodesRequest): Promise<DeleteNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNodesWithOptions(request, runtime);
  }

  /**
   * Deletes queues from an Enterprise High Performance Computing (E-HPC) cluster.
   * 
   * @remarks
   * ## [](#)Usage notes
   * Before you delete a queue, you must delete all compute nodes in the queue.
   * 
   * @param tmpReq - DeleteQueuesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteQueuesResponse
   */
  async deleteQueuesWithOptions(tmpReq: DeleteQueuesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteQueuesResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteQueuesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.queueNames)) {
      request.queueNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.queueNames, "QueueNames", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.queueNamesShrink)) {
      query["QueueNames"] = request.queueNamesShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteQueues",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteQueuesResponse>(await this.callApi(params, req, runtime), new DeleteQueuesResponse({}));
  }

  /**
   * Deletes queues from an Enterprise High Performance Computing (E-HPC) cluster.
   * 
   * @remarks
   * ## [](#)Usage notes
   * Before you delete a queue, you must delete all compute nodes in the queue.
   * 
   * @param request - DeleteQueuesRequest
   * @returns DeleteQueuesResponse
   */
  async deleteQueues(request: DeleteQueuesRequest): Promise<DeleteQueuesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteQueuesWithOptions(request, runtime);
  }

  /**
   * Deletes users from a cluster.
   * 
   * @param tmpReq - DeleteUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteUsersResponse
   */
  async deleteUsersWithOptions(tmpReq: DeleteUsersRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUsersResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteUsersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.user)) {
      request.userShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.user, "User", "json");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteUsers",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteUsersResponse>(await this.callApi(params, req, runtime), new DeleteUsersResponse({}));
  }

  /**
   * Deletes users from a cluster.
   * 
   * @param request - DeleteUsersRequest
   * @returns DeleteUsersResponse
   */
  async deleteUsers(request: DeleteUsersRequest): Promise<DeleteUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUsersWithOptions(request, runtime);
  }

  /**
   * 查询Add-on服务组件模板详情。
   * 
   * @param request - DescribeAddonTemplateRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeAddonTemplateResponse
   */
  async describeAddonTemplateWithOptions(request: DescribeAddonTemplateRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAddonTemplateResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.addonName)) {
      query["AddonName"] = request.addonName;
    }

    if (!Util.isUnset(request.addonVersion)) {
      query["AddonVersion"] = request.addonVersion;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    if (!Util.isUnset(request.zoneId)) {
      query["ZoneId"] = request.zoneId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAddonTemplate",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAddonTemplateResponse>(await this.callApi(params, req, runtime), new DescribeAddonTemplateResponse({}));
  }

  /**
   * 查询Add-on服务组件模板详情。
   * 
   * @param request - DescribeAddonTemplateRequest
   * @returns DescribeAddonTemplateResponse
   */
  async describeAddonTemplate(request: DescribeAddonTemplateRequest): Promise<DescribeAddonTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAddonTemplateWithOptions(request, runtime);
  }

  /**
   * Unmounts shared storage from the mount directory of a cluster.
   * 
   * @param tmpReq - DetachSharedStoragesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DetachSharedStoragesResponse
   */
  async detachSharedStoragesWithOptions(tmpReq: DetachSharedStoragesRequest, runtime: $Util.RuntimeOptions): Promise<DetachSharedStoragesResponse> {
    Util.validateModel(tmpReq);
    let request = new DetachSharedStoragesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.sharedStorages)) {
      request.sharedStoragesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sharedStorages, "SharedStorages", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.sharedStoragesShrink)) {
      query["SharedStorages"] = request.sharedStoragesShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DetachSharedStorages",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetachSharedStoragesResponse>(await this.callApi(params, req, runtime), new DetachSharedStoragesResponse({}));
  }

  /**
   * Unmounts shared storage from the mount directory of a cluster.
   * 
   * @param request - DetachSharedStoragesRequest
   * @returns DetachSharedStoragesResponse
   */
  async detachSharedStorages(request: DetachSharedStoragesRequest): Promise<DetachSharedStoragesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachSharedStoragesWithOptions(request, runtime);
  }

  /**
   * 查看已安装的Add-on服务组件详情。
   * 
   * @param request - GetAddonRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAddonResponse
   */
  async getAddonWithOptions(request: GetAddonRequest, runtime: $Util.RuntimeOptions): Promise<GetAddonResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.addonId)) {
      query["AddonId"] = request.addonId;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAddon",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAddonResponse>(await this.callApi(params, req, runtime), new GetAddonResponse({}));
  }

  /**
   * 查看已安装的Add-on服务组件详情。
   * 
   * @param request - GetAddonRequest
   * @returns GetAddonResponse
   */
  async getAddon(request: GetAddonRequest): Promise<GetAddonResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAddonWithOptions(request, runtime);
  }

  /**
   * 查询单个E-HPC集群的详情信息。
   * 
   * @param request - GetClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetClusterResponse
   */
  async getClusterWithOptions(request: GetClusterRequest, runtime: $Util.RuntimeOptions): Promise<GetClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCluster",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetClusterResponse>(await this.callApi(params, req, runtime), new GetClusterResponse({}));
  }

  /**
   * 查询单个E-HPC集群的详情信息。
   * 
   * @param request - GetClusterRequest
   * @returns GetClusterResponse
   */
  async getCluster(request: GetClusterRequest): Promise<GetClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getClusterWithOptions(request, runtime);
  }

  /**
   * 查询集群通用日志详细信息
   * 
   * @param request - GetCommonLogDetailRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCommonLogDetailResponse
   */
  async getCommonLogDetailWithOptions(request: GetCommonLogDetailRequest, runtime: $Util.RuntimeOptions): Promise<GetCommonLogDetailResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.from)) {
      query["From"] = request.from;
    }

    if (!Util.isUnset(request.hiddenProcess)) {
      query["HiddenProcess"] = request.hiddenProcess;
    }

    if (!Util.isUnset(request.logRequestId)) {
      query["LogRequestId"] = request.logRequestId;
    }

    if (!Util.isUnset(request.to)) {
      query["To"] = request.to;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCommonLogDetail",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCommonLogDetailResponse>(await this.callApi(params, req, runtime), new GetCommonLogDetailResponse({}));
  }

  /**
   * 查询集群通用日志详细信息
   * 
   * @param request - GetCommonLogDetailRequest
   * @returns GetCommonLogDetailResponse
   */
  async getCommonLogDetail(request: GetCommonLogDetailRequest): Promise<GetCommonLogDetailResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCommonLogDetailWithOptions(request, runtime);
  }

  /**
   * 查询集群的队列配置信息
   * 
   * @param request - GetQueueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetQueueResponse
   */
  async getQueueWithOptions(request: GetQueueRequest, runtime: $Util.RuntimeOptions): Promise<GetQueueResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.queueName)) {
      query["QueueName"] = request.queueName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetQueue",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetQueueResponse>(await this.callApi(params, req, runtime), new GetQueueResponse({}));
  }

  /**
   * 查询集群的队列配置信息
   * 
   * @param request - GetQueueRequest
   * @returns GetQueueResponse
   */
  async getQueue(request: GetQueueRequest): Promise<GetQueueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQueueWithOptions(request, runtime);
  }

  /**
   * Installs an addon.
   * 
   * @param request - InstallAddonRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InstallAddonResponse
   */
  async installAddonWithOptions(request: InstallAddonRequest, runtime: $Util.RuntimeOptions): Promise<InstallAddonResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.addonName)) {
      query["AddonName"] = request.addonName;
    }

    if (!Util.isUnset(request.addonVersion)) {
      query["AddonVersion"] = request.addonVersion;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.resourcesSpec)) {
      query["ResourcesSpec"] = request.resourcesSpec;
    }

    if (!Util.isUnset(request.servicesSpec)) {
      query["ServicesSpec"] = request.servicesSpec;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InstallAddon",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InstallAddonResponse>(await this.callApi(params, req, runtime), new InstallAddonResponse({}));
  }

  /**
   * Installs an addon.
   * 
   * @param request - InstallAddonRequest
   * @returns InstallAddonResponse
   */
  async installAddon(request: InstallAddonRequest): Promise<InstallAddonResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.installAddonWithOptions(request, runtime);
  }

  /**
   * Installs software for a specified cluster.
   * 
   * @param tmpReq - InstallSoftwaresRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InstallSoftwaresResponse
   */
  async installSoftwaresWithOptions(tmpReq: InstallSoftwaresRequest, runtime: $Util.RuntimeOptions): Promise<InstallSoftwaresResponse> {
    Util.validateModel(tmpReq);
    let request = new InstallSoftwaresShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.additionalPackages)) {
      request.additionalPackagesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.additionalPackages, "AdditionalPackages", "json");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InstallSoftwares",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InstallSoftwaresResponse>(await this.callApi(params, req, runtime), new InstallSoftwaresResponse({}));
  }

  /**
   * Installs software for a specified cluster.
   * 
   * @param request - InstallSoftwaresRequest
   * @returns InstallSoftwaresResponse
   */
  async installSoftwares(request: InstallSoftwaresRequest): Promise<InstallSoftwaresResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.installSoftwaresWithOptions(request, runtime);
  }

  /**
   * 支持的Add-on服务组件模板列表查询。
   * 
   * @param request - ListAddonTemplatesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAddonTemplatesResponse
   */
  async listAddonTemplatesWithOptions(request: ListAddonTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<ListAddonTemplatesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.addonNames)) {
      query["AddonNames"] = request.addonNames;
    }

    if (!Util.isUnset(request.clusterCategory)) {
      query["ClusterCategory"] = request.clusterCategory;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.regionId)) {
      query["RegionId"] = request.regionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAddonTemplates",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAddonTemplatesResponse>(await this.callApi(params, req, runtime), new ListAddonTemplatesResponse({}));
  }

  /**
   * 支持的Add-on服务组件模板列表查询。
   * 
   * @param request - ListAddonTemplatesRequest
   * @returns ListAddonTemplatesResponse
   */
  async listAddonTemplates(request: ListAddonTemplatesRequest): Promise<ListAddonTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAddonTemplatesWithOptions(request, runtime);
  }

  /**
   * 查看已安装的Add-on服务组件列表。
   * 
   * @param tmpReq - ListAddonsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAddonsResponse
   */
  async listAddonsWithOptions(tmpReq: ListAddonsRequest, runtime: $Util.RuntimeOptions): Promise<ListAddonsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListAddonsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.addonIds)) {
      request.addonIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.addonIds, "AddonIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.addonIdsShrink)) {
      query["AddonIds"] = request.addonIdsShrink;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAddons",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAddonsResponse>(await this.callApi(params, req, runtime), new ListAddonsResponse({}));
  }

  /**
   * 查看已安装的Add-on服务组件列表。
   * 
   * @param request - ListAddonsRequest
   * @returns ListAddonsResponse
   */
  async listAddons(request: ListAddonsRequest): Promise<ListAddonsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAddonsWithOptions(request, runtime);
  }

  /**
   * 查询可用的共享存储
   * 
   * @param request - ListAvailableFileSystemsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAvailableFileSystemsResponse
   */
  async listAvailableFileSystemsWithOptions(request: ListAvailableFileSystemsRequest, runtime: $Util.RuntimeOptions): Promise<ListAvailableFileSystemsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAvailableFileSystems",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAvailableFileSystemsResponse>(await this.callApi(params, req, runtime), new ListAvailableFileSystemsResponse({}));
  }

  /**
   * 查询可用的共享存储
   * 
   * @param request - ListAvailableFileSystemsRequest
   * @returns ListAvailableFileSystemsResponse
   */
  async listAvailableFileSystems(request: ListAvailableFileSystemsRequest): Promise<ListAvailableFileSystemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAvailableFileSystemsWithOptions(request, runtime);
  }

  /**
   * 获取可用镜像列表
   * 
   * @param tmpReq - ListAvailableImagesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAvailableImagesResponse
   */
  async listAvailableImagesWithOptions(tmpReq: ListAvailableImagesRequest, runtime: $Util.RuntimeOptions): Promise<ListAvailableImagesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListAvailableImagesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.directoryService)) {
      request.directoryServiceShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.directoryService, "DirectoryService", "json");
    }

    if (!Util.isUnset(tmpReq.scheduler)) {
      request.schedulerShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.scheduler, "Scheduler", "json");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAvailableImages",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAvailableImagesResponse>(await this.callApi(params, req, runtime), new ListAvailableImagesResponse({}));
  }

  /**
   * 获取可用镜像列表
   * 
   * @param request - ListAvailableImagesRequest
   * @returns ListAvailableImagesResponse
   */
  async listAvailableImages(request: ListAvailableImagesRequest): Promise<ListAvailableImagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAvailableImagesWithOptions(request, runtime);
  }

  /**
   * 查询用户账号中在每个地域拥有的所有集群的列表。
   * 
   * @param tmpReq - ListClustersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListClustersResponse
   */
  async listClustersWithOptions(tmpReq: ListClustersRequest, runtime: $Util.RuntimeOptions): Promise<ListClustersResponse> {
    Util.validateModel(tmpReq);
    let request = new ListClustersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.clusterIds)) {
      request.clusterIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.clusterIds, "ClusterIds", "json");
    }

    if (!Util.isUnset(tmpReq.clusterNames)) {
      request.clusterNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.clusterNames, "ClusterNames", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clusterIdsShrink)) {
      query["ClusterIds"] = request.clusterIdsShrink;
    }

    if (!Util.isUnset(request.clusterNamesShrink)) {
      query["ClusterNames"] = request.clusterNamesShrink;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListClusters",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListClustersResponse>(await this.callApi(params, req, runtime), new ListClustersResponse({}));
  }

  /**
   * 查询用户账号中在每个地域拥有的所有集群的列表。
   * 
   * @param request - ListClustersRequest
   * @returns ListClustersResponse
   */
  async listClusters(request: ListClustersRequest): Promise<ListClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClustersWithOptions(request, runtime);
  }

  /**
   * 查询集群通用日志列表
   * 
   * @param tmpReq - ListCommonLogsRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCommonLogsResponse
   */
  async listCommonLogsWithOptions(tmpReq: ListCommonLogsRequest, runtime: $Util.RuntimeOptions): Promise<ListCommonLogsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListCommonLogsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.actionName)) {
      request.actionNameShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.actionName, "ActionName", "json");
    }

    let query = { };
    if (!Util.isUnset(request.actionNameShrink)) {
      query["ActionName"] = request.actionNameShrink;
    }

    if (!Util.isUnset(request.actionStatus)) {
      query["ActionStatus"] = request.actionStatus;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.from)) {
      query["From"] = request.from;
    }

    if (!Util.isUnset(request.isReverse)) {
      query["IsReverse"] = request.isReverse;
    }

    if (!Util.isUnset(request.logRequestId)) {
      query["LogRequestId"] = request.logRequestId;
    }

    if (!Util.isUnset(request.logType)) {
      query["LogType"] = request.logType;
    }

    if (!Util.isUnset(request.operatorUid)) {
      query["OperatorUid"] = request.operatorUid;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resource)) {
      query["Resource"] = request.resource;
    }

    if (!Util.isUnset(request.to)) {
      query["To"] = request.to;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCommonLogs",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCommonLogsResponse>(await this.callApi(params, req, runtime), new ListCommonLogsResponse({}));
  }

  /**
   * 查询集群通用日志列表
   * 
   * @param request - ListCommonLogsRequest
   * @returns ListCommonLogsResponse
   */
  async listCommonLogs(request: ListCommonLogsRequest): Promise<ListCommonLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCommonLogsWithOptions(request, runtime);
  }

  /**
   * Queries the installed software of a cluster.
   * 
   * @param request - ListInstalledSoftwaresRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstalledSoftwaresResponse
   */
  async listInstalledSoftwaresWithOptions(request: ListInstalledSoftwaresRequest, runtime: $Util.RuntimeOptions): Promise<ListInstalledSoftwaresResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInstalledSoftwares",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListInstalledSoftwaresResponse>(await this.callApi(params, req, runtime), new ListInstalledSoftwaresResponse({}));
  }

  /**
   * Queries the installed software of a cluster.
   * 
   * @param request - ListInstalledSoftwaresRequest
   * @returns ListInstalledSoftwaresResponse
   */
  async listInstalledSoftwares(request: ListInstalledSoftwaresRequest): Promise<ListInstalledSoftwaresResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstalledSoftwaresWithOptions(request, runtime);
  }

  /**
   * 查询节点列表
   * 
   * @param tmpReq - ListNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListNodesResponse
   */
  async listNodesWithOptions(tmpReq: ListNodesRequest, runtime: $Util.RuntimeOptions): Promise<ListNodesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListNodesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.hostnames)) {
      request.hostnamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.hostnames, "Hostnames", "json");
    }

    if (!Util.isUnset(tmpReq.privateIpAddress)) {
      request.privateIpAddressShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.privateIpAddress, "PrivateIpAddress", "json");
    }

    if (!Util.isUnset(tmpReq.queueNames)) {
      request.queueNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.queueNames, "QueueNames", "json");
    }

    if (!Util.isUnset(tmpReq.status)) {
      request.statusShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.status, "Status", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.hostnamesShrink)) {
      query["Hostnames"] = request.hostnamesShrink;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.privateIpAddressShrink)) {
      query["PrivateIpAddress"] = request.privateIpAddressShrink;
    }

    if (!Util.isUnset(request.queueNamesShrink)) {
      query["QueueNames"] = request.queueNamesShrink;
    }

    if (!Util.isUnset(request.sequence)) {
      query["Sequence"] = request.sequence;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.statusShrink)) {
      query["Status"] = request.statusShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListNodes",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListNodesResponse>(await this.callApi(params, req, runtime), new ListNodesResponse({}));
  }

  /**
   * 查询节点列表
   * 
   * @param request - ListNodesRequest
   * @returns ListNodesResponse
   */
  async listNodes(request: ListNodesRequest): Promise<ListNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNodesWithOptions(request, runtime);
  }

  /**
   * 查询集群的队列信息。
   * 
   * @param tmpReq - ListQueuesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListQueuesResponse
   */
  async listQueuesWithOptions(tmpReq: ListQueuesRequest, runtime: $Util.RuntimeOptions): Promise<ListQueuesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListQueuesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.queueNames)) {
      request.queueNamesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.queueNames, "QueueNames", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.queueNamesShrink)) {
      query["QueueNames"] = request.queueNamesShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListQueues",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListQueuesResponse>(await this.callApi(params, req, runtime), new ListQueuesResponse({}));
  }

  /**
   * 查询集群的队列信息。
   * 
   * @param request - ListQueuesRequest
   * @returns ListQueuesResponse
   */
  async listQueues(request: ListQueuesRequest): Promise<ListQueuesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listQueuesWithOptions(request, runtime);
  }

  /**
   * Queries the shared storage that is attached to a cluster.
   * 
   * @param request - ListSharedStoragesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSharedStoragesResponse
   */
  async listSharedStoragesWithOptions(request: ListSharedStoragesRequest, runtime: $Util.RuntimeOptions): Promise<ListSharedStoragesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.fileSystemId)) {
      query["FileSystemId"] = request.fileSystemId;
    }

    if (!Util.isUnset(request.fileSystemType)) {
      query["FileSystemType"] = request.fileSystemType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSharedStorages",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSharedStoragesResponse>(await this.callApi(params, req, runtime), new ListSharedStoragesResponse({}));
  }

  /**
   * Queries the shared storage that is attached to a cluster.
   * 
   * @param request - ListSharedStoragesRequest
   * @returns ListSharedStoragesResponse
   */
  async listSharedStorages(request: ListSharedStoragesRequest): Promise<ListSharedStoragesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSharedStoragesWithOptions(request, runtime);
  }

  /**
   * Queries the software that can be installed in an Elastic High Performance Computing (E-HPC) cluster.
   * 
   * @param request - ListSoftwaresRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListSoftwaresResponse
   */
  async listSoftwaresWithOptions(request: ListSoftwaresRequest, runtime: $Util.RuntimeOptions): Promise<ListSoftwaresResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSoftwares",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSoftwaresResponse>(await this.callApi(params, req, runtime), new ListSoftwaresResponse({}));
  }

  /**
   * Queries the software that can be installed in an Elastic High Performance Computing (E-HPC) cluster.
   * 
   * @param request - ListSoftwaresRequest
   * @returns ListSoftwaresResponse
   */
  async listSoftwares(request: ListSoftwaresRequest): Promise<ListSoftwaresResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSoftwaresWithOptions(request, runtime);
  }

  /**
   * Queries the users of a cluster.
   * 
   * @param request - ListUsersRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListUsersResponse
   */
  async listUsersWithOptions(request: ListUsersRequest, runtime: $Util.RuntimeOptions): Promise<ListUsersResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUsers",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListUsersResponse>(await this.callApi(params, req, runtime), new ListUsersResponse({}));
  }

  /**
   * Queries the users of a cluster.
   * 
   * @param request - ListUsersRequest
   * @returns ListUsersResponse
   */
  async listUsers(request: ListUsersRequest): Promise<ListUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUsersWithOptions(request, runtime);
  }

  /**
   * Uninstalls an addon.
   * 
   * @param request - UnInstallAddonRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UnInstallAddonResponse
   */
  async unInstallAddonWithOptions(request: UnInstallAddonRequest, runtime: $Util.RuntimeOptions): Promise<UnInstallAddonResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.addonId)) {
      query["AddonId"] = request.addonId;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UnInstallAddon",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UnInstallAddonResponse>(await this.callApi(params, req, runtime), new UnInstallAddonResponse({}));
  }

  /**
   * Uninstalls an addon.
   * 
   * @param request - UnInstallAddonRequest
   * @returns UnInstallAddonResponse
   */
  async unInstallAddon(request: UnInstallAddonRequest): Promise<UnInstallAddonResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.unInstallAddonWithOptions(request, runtime);
  }

  /**
   * Uninstalls software systems from an Enterprise High Performance Computing (E-HPC) cluster.
   * 
   * @param tmpReq - UninstallSoftwaresRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UninstallSoftwaresResponse
   */
  async uninstallSoftwaresWithOptions(tmpReq: UninstallSoftwaresRequest, runtime: $Util.RuntimeOptions): Promise<UninstallSoftwaresResponse> {
    Util.validateModel(tmpReq);
    let request = new UninstallSoftwaresShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.additionalPackages)) {
      request.additionalPackagesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.additionalPackages, "AdditionalPackages", "json");
    }

    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UninstallSoftwares",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UninstallSoftwaresResponse>(await this.callApi(params, req, runtime), new UninstallSoftwaresResponse({}));
  }

  /**
   * Uninstalls software systems from an Enterprise High Performance Computing (E-HPC) cluster.
   * 
   * @param request - UninstallSoftwaresRequest
   * @returns UninstallSoftwaresResponse
   */
  async uninstallSoftwares(request: UninstallSoftwaresRequest): Promise<UninstallSoftwaresResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uninstallSoftwaresWithOptions(request, runtime);
  }

  /**
   * 修改指定集群的基本信息。
   * 
   * @param tmpReq - UpdateClusterRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateClusterResponse
   */
  async updateClusterWithOptions(tmpReq: UpdateClusterRequest, runtime: $Util.RuntimeOptions): Promise<UpdateClusterResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateClusterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.clusterCustomConfiguration)) {
      request.clusterCustomConfigurationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.clusterCustomConfiguration, "ClusterCustomConfiguration", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clientVersion)) {
      query["ClientVersion"] = request.clientVersion;
    }

    if (!Util.isUnset(request.clusterCustomConfigurationShrink)) {
      query["ClusterCustomConfiguration"] = request.clusterCustomConfigurationShrink;
    }

    if (!Util.isUnset(request.clusterDescription)) {
      query["ClusterDescription"] = request.clusterDescription;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.clusterName)) {
      query["ClusterName"] = request.clusterName;
    }

    if (!Util.isUnset(request.deletionProtection)) {
      query["DeletionProtection"] = request.deletionProtection;
    }

    if (!Util.isUnset(request.enableScaleIn)) {
      query["EnableScaleIn"] = request.enableScaleIn;
    }

    if (!Util.isUnset(request.enableScaleOut)) {
      query["EnableScaleOut"] = request.enableScaleOut;
    }

    if (!Util.isUnset(request.growInterval)) {
      query["GrowInterval"] = request.growInterval;
    }

    if (!Util.isUnset(request.idleInterval)) {
      query["IdleInterval"] = request.idleInterval;
    }

    if (!Util.isUnset(request.maxCoreCount)) {
      query["MaxCoreCount"] = request.maxCoreCount;
    }

    if (!Util.isUnset(request.maxCount)) {
      query["MaxCount"] = request.maxCount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateCluster",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateClusterResponse>(await this.callApi(params, req, runtime), new UpdateClusterResponse({}));
  }

  /**
   * 修改指定集群的基本信息。
   * 
   * @param request - UpdateClusterRequest
   * @returns UpdateClusterResponse
   */
  async updateCluster(request: UpdateClusterRequest): Promise<UpdateClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateClusterWithOptions(request, runtime);
  }

  /**
   * Updates the configurations of compute nodes in an Enterprise High Performance Computing (E-HPC) cluster.
   * 
   * @remarks
   * ## [](#)Usage notes
   * Before you delete a compute node, we recommend that you export all job data from the node to prevent data loss.
   * 
   * @param tmpReq - UpdateNodesRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateNodesResponse
   */
  async updateNodesWithOptions(tmpReq: UpdateNodesRequest, runtime: $Util.RuntimeOptions): Promise<UpdateNodesResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateNodesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.instances)) {
      request.instancesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instances, "Instances", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.instancesShrink)) {
      query["Instances"] = request.instancesShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateNodes",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateNodesResponse>(await this.callApi(params, req, runtime), new UpdateNodesResponse({}));
  }

  /**
   * Updates the configurations of compute nodes in an Enterprise High Performance Computing (E-HPC) cluster.
   * 
   * @remarks
   * ## [](#)Usage notes
   * Before you delete a compute node, we recommend that you export all job data from the node to prevent data loss.
   * 
   * @param request - UpdateNodesRequest
   * @returns UpdateNodesResponse
   */
  async updateNodes(request: UpdateNodesRequest): Promise<UpdateNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateNodesWithOptions(request, runtime);
  }

  /**
   * 更新集群的队列配置信息
   * 
   * @param tmpReq - UpdateQueueRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateQueueResponse
   */
  async updateQueueWithOptions(tmpReq: UpdateQueueRequest, runtime: $Util.RuntimeOptions): Promise<UpdateQueueResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateQueueShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.queue)) {
      request.queueShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.queue, "Queue", "json");
    }

    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.queueShrink)) {
      query["Queue"] = request.queueShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateQueue",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateQueueResponse>(await this.callApi(params, req, runtime), new UpdateQueueResponse({}));
  }

  /**
   * 更新集群的队列配置信息
   * 
   * @param request - UpdateQueueRequest
   * @returns UpdateQueueResponse
   */
  async updateQueue(request: UpdateQueueRequest): Promise<UpdateQueueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateQueueWithOptions(request, runtime);
  }

  /**
   * 更新集群单个用户属性
   * 
   * @param request - UpdateUserRequest
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateUserResponse
   */
  async updateUserWithOptions(request: UpdateUserRequest, runtime: $Util.RuntimeOptions): Promise<UpdateUserResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.group)) {
      query["Group"] = request.group;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.userName)) {
      query["UserName"] = request.userName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateUser",
      version: "2024-07-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateUserResponse>(await this.callApi(params, req, runtime), new UpdateUserResponse({}));
  }

  /**
   * 更新集群单个用户属性
   * 
   * @param request - UpdateUserRequest
   * @returns UpdateUserResponse
   */
  async updateUser(request: UpdateUserRequest): Promise<UpdateUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateUserWithOptions(request, runtime);
  }

}

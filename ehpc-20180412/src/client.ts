// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AddContainerAppRequest extends $tea.Model {
  containerType?: string;
  description?: string;
  imageTag?: string;
  name?: string;
  repository?: string;
  static names(): { [key: string]: string } {
    return {
      containerType: 'ContainerType',
      description: 'Description',
      imageTag: 'ImageTag',
      name: 'Name',
      repository: 'Repository',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerType: 'string',
      description: 'string',
      imageTag: 'string',
      name: 'string',
      repository: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddContainerAppResponseBody extends $tea.Model {
  containerId?: AddContainerAppResponseBodyContainerId;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      containerId: 'ContainerId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerId: AddContainerAppResponseBodyContainerId,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddContainerAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddContainerAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddContainerAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddExistedNodesRequest extends $tea.Model {
  clientToken?: string;
  clusterId?: string;
  imageId?: string;
  imageOwnerAlias?: string;
  instance?: AddExistedNodesRequestInstance[];
  jobQueue?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      clusterId: 'ClusterId',
      imageId: 'ImageId',
      imageOwnerAlias: 'ImageOwnerAlias',
      instance: 'Instance',
      jobQueue: 'JobQueue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      clusterId: 'string',
      imageId: 'string',
      imageOwnerAlias: 'string',
      instance: { 'type': 'array', 'itemType': AddExistedNodesRequestInstance },
      jobQueue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddExistedNodesResponseBody extends $tea.Model {
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddExistedNodesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddExistedNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddExistedNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLocalNodesRequest extends $tea.Model {
  clusterId?: string;
  nodes?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      nodes: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLocalNodesResponseBody extends $tea.Model {
  instanceIds?: AddLocalNodesResponseBodyInstanceIds;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: AddLocalNodesResponseBodyInstanceIds,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLocalNodesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddLocalNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddLocalNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddNodesRequest extends $tea.Model {
  allocatePublicAddress?: boolean;
  autoRenew?: string;
  autoRenewPeriod?: number;
  clientToken?: string;
  clusterId?: string;
  computeEnableHt?: boolean;
  computeSpotPriceLimit?: string;
  computeSpotStrategy?: string;
  count?: number;
  createMode?: string;
  dataDisks?: AddNodesRequestDataDisks[];
  ecsChargeType?: string;
  hostNamePrefix?: string;
  hostNameSuffix?: string;
  imageId?: string;
  imageOwnerAlias?: string;
  instanceType?: string;
  internetChargeType?: string;
  internetMaxBandWidthIn?: number;
  internetMaxBandWidthOut?: number;
  jobQueue?: string;
  minCount?: number;
  period?: number;
  periodUnit?: string;
  sync?: boolean;
  systemDiskLevel?: string;
  systemDiskSize?: number;
  systemDiskType?: string;
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      allocatePublicAddress: 'AllocatePublicAddress',
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      clientToken: 'ClientToken',
      clusterId: 'ClusterId',
      computeEnableHt: 'ComputeEnableHt',
      computeSpotPriceLimit: 'ComputeSpotPriceLimit',
      computeSpotStrategy: 'ComputeSpotStrategy',
      count: 'Count',
      createMode: 'CreateMode',
      dataDisks: 'DataDisks',
      ecsChargeType: 'EcsChargeType',
      hostNamePrefix: 'HostNamePrefix',
      hostNameSuffix: 'HostNameSuffix',
      imageId: 'ImageId',
      imageOwnerAlias: 'ImageOwnerAlias',
      instanceType: 'InstanceType',
      internetChargeType: 'InternetChargeType',
      internetMaxBandWidthIn: 'InternetMaxBandWidthIn',
      internetMaxBandWidthOut: 'InternetMaxBandWidthOut',
      jobQueue: 'JobQueue',
      minCount: 'MinCount',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      sync: 'Sync',
      systemDiskLevel: 'SystemDiskLevel',
      systemDiskSize: 'SystemDiskSize',
      systemDiskType: 'SystemDiskType',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocatePublicAddress: 'boolean',
      autoRenew: 'string',
      autoRenewPeriod: 'number',
      clientToken: 'string',
      clusterId: 'string',
      computeEnableHt: 'boolean',
      computeSpotPriceLimit: 'string',
      computeSpotStrategy: 'string',
      count: 'number',
      createMode: 'string',
      dataDisks: { 'type': 'array', 'itemType': AddNodesRequestDataDisks },
      ecsChargeType: 'string',
      hostNamePrefix: 'string',
      hostNameSuffix: 'string',
      imageId: 'string',
      imageOwnerAlias: 'string',
      instanceType: 'string',
      internetChargeType: 'string',
      internetMaxBandWidthIn: 'number',
      internetMaxBandWidthOut: 'number',
      jobQueue: 'string',
      minCount: 'number',
      period: 'number',
      periodUnit: 'string',
      sync: 'boolean',
      systemDiskLevel: 'string',
      systemDiskSize: 'number',
      systemDiskType: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddNodesResponseBody extends $tea.Model {
  instanceIds?: AddNodesResponseBodyInstanceIds;
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: AddNodesResponseBodyInstanceIds,
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddNodesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddQueueRequest extends $tea.Model {
  clusterId?: string;
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

export class AddQueueResponseBody extends $tea.Model {
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

export class AddQueueResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddQueueResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddQueueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSecurityGroupRequest extends $tea.Model {
  clientToken?: string;
  clusterId?: string;
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      clusterId: 'ClusterId',
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      clusterId: 'string',
      securityGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddSecurityGroupResponseBody extends $tea.Model {
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

export class AddSecurityGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddSecurityGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddSecurityGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUsersRequest extends $tea.Model {
  clusterId?: string;
  user?: AddUsersRequestUser[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      user: { 'type': 'array', 'itemType': AddUsersRequestUser },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUsersResponseBody extends $tea.Model {
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

export class AddUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: AddUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: AddUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyNodesRequest extends $tea.Model {
  allocatePublicAddress?: boolean;
  clusterId?: string;
  computeSpotPriceLimit?: number;
  computeSpotStrategy?: string;
  cores?: number;
  hostNamePrefix?: string;
  hostNameSuffix?: string;
  imageId?: string;
  instanceFamilyLevel?: string;
  instanceTypeModel?: ApplyNodesRequestInstanceTypeModel[];
  internetChargeType?: string;
  internetMaxBandWidthIn?: number;
  internetMaxBandWidthOut?: number;
  interval?: number;
  jobQueue?: string;
  memory?: number;
  priorityStrategy?: string;
  resourceAmountType?: string;
  round?: number;
  strictResourceProvision?: boolean;
  strictSatisfiedTargetCapacity?: boolean;
  systemDiskLevel?: string;
  systemDiskSize?: number;
  systemDiskType?: string;
  tag?: ApplyNodesRequestTag[];
  targetCapacity?: number;
  zoneInfos?: ApplyNodesRequestZoneInfos[];
  static names(): { [key: string]: string } {
    return {
      allocatePublicAddress: 'AllocatePublicAddress',
      clusterId: 'ClusterId',
      computeSpotPriceLimit: 'ComputeSpotPriceLimit',
      computeSpotStrategy: 'ComputeSpotStrategy',
      cores: 'Cores',
      hostNamePrefix: 'HostNamePrefix',
      hostNameSuffix: 'HostNameSuffix',
      imageId: 'ImageId',
      instanceFamilyLevel: 'InstanceFamilyLevel',
      instanceTypeModel: 'InstanceTypeModel',
      internetChargeType: 'InternetChargeType',
      internetMaxBandWidthIn: 'InternetMaxBandWidthIn',
      internetMaxBandWidthOut: 'InternetMaxBandWidthOut',
      interval: 'Interval',
      jobQueue: 'JobQueue',
      memory: 'Memory',
      priorityStrategy: 'PriorityStrategy',
      resourceAmountType: 'ResourceAmountType',
      round: 'Round',
      strictResourceProvision: 'StrictResourceProvision',
      strictSatisfiedTargetCapacity: 'StrictSatisfiedTargetCapacity',
      systemDiskLevel: 'SystemDiskLevel',
      systemDiskSize: 'SystemDiskSize',
      systemDiskType: 'SystemDiskType',
      tag: 'Tag',
      targetCapacity: 'TargetCapacity',
      zoneInfos: 'ZoneInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocatePublicAddress: 'boolean',
      clusterId: 'string',
      computeSpotPriceLimit: 'number',
      computeSpotStrategy: 'string',
      cores: 'number',
      hostNamePrefix: 'string',
      hostNameSuffix: 'string',
      imageId: 'string',
      instanceFamilyLevel: 'string',
      instanceTypeModel: { 'type': 'array', 'itemType': ApplyNodesRequestInstanceTypeModel },
      internetChargeType: 'string',
      internetMaxBandWidthIn: 'number',
      internetMaxBandWidthOut: 'number',
      interval: 'number',
      jobQueue: 'string',
      memory: 'number',
      priorityStrategy: 'string',
      resourceAmountType: 'string',
      round: 'number',
      strictResourceProvision: 'boolean',
      strictSatisfiedTargetCapacity: 'boolean',
      systemDiskLevel: 'string',
      systemDiskSize: 'number',
      systemDiskType: 'string',
      tag: { 'type': 'array', 'itemType': ApplyNodesRequestTag },
      targetCapacity: 'number',
      zoneInfos: { 'type': 'array', 'itemType': ApplyNodesRequestZoneInfos },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyNodesResponseBody extends $tea.Model {
  detail?: string;
  instanceIds?: ApplyNodesResponseBodyInstanceIds;
  requestId?: string;
  satisfiedAmount?: number;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      instanceIds: 'InstanceIds',
      requestId: 'RequestId',
      satisfiedAmount: 'SatisfiedAmount',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      instanceIds: ApplyNodesResponseBodyInstanceIds,
      requestId: 'string',
      satisfiedAmount: 'number',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyNodesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ApplyNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ApplyNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequest extends $tea.Model {
  ecsOrder?: CreateClusterRequestEcsOrder;
  accountType?: string;
  additionalVolumes?: CreateClusterRequestAdditionalVolumes[];
  application?: CreateClusterRequestApplication[];
  autoRenew?: string;
  autoRenewPeriod?: number;
  clientToken?: string;
  clientVersion?: string;
  clusterVersion?: string;
  computeEnableHt?: boolean;
  computeSpotPriceLimit?: string;
  computeSpotStrategy?: string;
  deployMode?: string;
  description?: string;
  domain?: string;
  ecsChargeType?: string;
  ehpcVersion?: string;
  haEnable?: boolean;
  imageId?: string;
  imageOwnerAlias?: string;
  inputFileUrl?: string;
  isComputeEss?: boolean;
  jobQueue?: string;
  keyPairName?: string;
  name?: string;
  osTag?: string;
  password?: string;
  period?: number;
  periodUnit?: string;
  plugin?: string;
  postInstallScript?: CreateClusterRequestPostInstallScript[];
  ramNodeTypes?: string[];
  ramRoleName?: string;
  remoteDirectory?: string;
  remoteVisEnable?: string;
  resourceGroupId?: string;
  sccClusterId?: string;
  schedulerType?: string;
  securityGroupId?: string;
  securityGroupName?: string;
  systemDiskLevel?: string;
  systemDiskSize?: number;
  systemDiskType?: string;
  vSwitchId?: string;
  volumeId?: string;
  volumeMountOption?: string;
  volumeMountpoint?: string;
  volumeProtocol?: string;
  volumeType?: string;
  vpcId?: string;
  withoutAgent?: boolean;
  withoutElasticIp?: boolean;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      ecsOrder: 'EcsOrder',
      accountType: 'AccountType',
      additionalVolumes: 'AdditionalVolumes',
      application: 'Application',
      autoRenew: 'AutoRenew',
      autoRenewPeriod: 'AutoRenewPeriod',
      clientToken: 'ClientToken',
      clientVersion: 'ClientVersion',
      clusterVersion: 'ClusterVersion',
      computeEnableHt: 'ComputeEnableHt',
      computeSpotPriceLimit: 'ComputeSpotPriceLimit',
      computeSpotStrategy: 'ComputeSpotStrategy',
      deployMode: 'DeployMode',
      description: 'Description',
      domain: 'Domain',
      ecsChargeType: 'EcsChargeType',
      ehpcVersion: 'EhpcVersion',
      haEnable: 'HaEnable',
      imageId: 'ImageId',
      imageOwnerAlias: 'ImageOwnerAlias',
      inputFileUrl: 'InputFileUrl',
      isComputeEss: 'IsComputeEss',
      jobQueue: 'JobQueue',
      keyPairName: 'KeyPairName',
      name: 'Name',
      osTag: 'OsTag',
      password: 'Password',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      plugin: 'Plugin',
      postInstallScript: 'PostInstallScript',
      ramNodeTypes: 'RamNodeTypes',
      ramRoleName: 'RamRoleName',
      remoteDirectory: 'RemoteDirectory',
      remoteVisEnable: 'RemoteVisEnable',
      resourceGroupId: 'ResourceGroupId',
      sccClusterId: 'SccClusterId',
      schedulerType: 'SchedulerType',
      securityGroupId: 'SecurityGroupId',
      securityGroupName: 'SecurityGroupName',
      systemDiskLevel: 'SystemDiskLevel',
      systemDiskSize: 'SystemDiskSize',
      systemDiskType: 'SystemDiskType',
      vSwitchId: 'VSwitchId',
      volumeId: 'VolumeId',
      volumeMountOption: 'VolumeMountOption',
      volumeMountpoint: 'VolumeMountpoint',
      volumeProtocol: 'VolumeProtocol',
      volumeType: 'VolumeType',
      vpcId: 'VpcId',
      withoutAgent: 'WithoutAgent',
      withoutElasticIp: 'WithoutElasticIp',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsOrder: CreateClusterRequestEcsOrder,
      accountType: 'string',
      additionalVolumes: { 'type': 'array', 'itemType': CreateClusterRequestAdditionalVolumes },
      application: { 'type': 'array', 'itemType': CreateClusterRequestApplication },
      autoRenew: 'string',
      autoRenewPeriod: 'number',
      clientToken: 'string',
      clientVersion: 'string',
      clusterVersion: 'string',
      computeEnableHt: 'boolean',
      computeSpotPriceLimit: 'string',
      computeSpotStrategy: 'string',
      deployMode: 'string',
      description: 'string',
      domain: 'string',
      ecsChargeType: 'string',
      ehpcVersion: 'string',
      haEnable: 'boolean',
      imageId: 'string',
      imageOwnerAlias: 'string',
      inputFileUrl: 'string',
      isComputeEss: 'boolean',
      jobQueue: 'string',
      keyPairName: 'string',
      name: 'string',
      osTag: 'string',
      password: 'string',
      period: 'number',
      periodUnit: 'string',
      plugin: 'string',
      postInstallScript: { 'type': 'array', 'itemType': CreateClusterRequestPostInstallScript },
      ramNodeTypes: { 'type': 'array', 'itemType': 'string' },
      ramRoleName: 'string',
      remoteDirectory: 'string',
      remoteVisEnable: 'string',
      resourceGroupId: 'string',
      sccClusterId: 'string',
      schedulerType: 'string',
      securityGroupId: 'string',
      securityGroupName: 'string',
      systemDiskLevel: 'string',
      systemDiskSize: 'number',
      systemDiskType: 'string',
      vSwitchId: 'string',
      volumeId: 'string',
      volumeMountOption: 'string',
      volumeMountpoint: 'string',
      volumeProtocol: 'string',
      volumeType: 'string',
      vpcId: 'string',
      withoutAgent: 'boolean',
      withoutElasticIp: 'boolean',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterResponseBody extends $tea.Model {
  clusterId?: string;
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGWSClusterRequest extends $tea.Model {
  clusterType?: string;
  name?: string;
  vSwitchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterType: 'ClusterType',
      name: 'Name',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterType: 'string',
      name: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGWSClusterResponseBody extends $tea.Model {
  clusterId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGWSClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateGWSClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateGWSClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGWSImageRequest extends $tea.Model {
  instanceId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGWSImageResponseBody extends $tea.Model {
  imageId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGWSImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateGWSImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateGWSImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGWSInstanceRequest extends $tea.Model {
  allocatePublicAddress?: boolean;
  appList?: string;
  autoRenew?: boolean;
  clusterId?: string;
  imageId?: string;
  instanceChargeType?: string;
  instanceType?: string;
  internetChargeType?: string;
  internetMaxBandwidthIn?: number;
  internetMaxBandwidthOut?: number;
  name?: string;
  period?: string;
  periodUnit?: string;
  systemDiskCategory?: string;
  systemDiskSize?: number;
  vSwitchId?: string;
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      allocatePublicAddress: 'AllocatePublicAddress',
      appList: 'AppList',
      autoRenew: 'AutoRenew',
      clusterId: 'ClusterId',
      imageId: 'ImageId',
      instanceChargeType: 'InstanceChargeType',
      instanceType: 'InstanceType',
      internetChargeType: 'InternetChargeType',
      internetMaxBandwidthIn: 'InternetMaxBandwidthIn',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      name: 'Name',
      period: 'Period',
      periodUnit: 'PeriodUnit',
      systemDiskCategory: 'SystemDiskCategory',
      systemDiskSize: 'SystemDiskSize',
      vSwitchId: 'VSwitchId',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocatePublicAddress: 'boolean',
      appList: 'string',
      autoRenew: 'boolean',
      clusterId: 'string',
      imageId: 'string',
      instanceChargeType: 'string',
      instanceType: 'string',
      internetChargeType: 'string',
      internetMaxBandwidthIn: 'number',
      internetMaxBandwidthOut: 'number',
      name: 'string',
      period: 'string',
      periodUnit: 'string',
      systemDiskCategory: 'string',
      systemDiskSize: 'number',
      vSwitchId: 'string',
      workMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGWSInstanceResponseBody extends $tea.Model {
  instanceId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGWSInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateGWSInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateGWSInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHybridClusterRequest extends $tea.Model {
  ecsOrder?: CreateHybridClusterRequestEcsOrder;
  application?: CreateHybridClusterRequestApplication[];
  clientToken?: string;
  clientVersion?: string;
  computeSpotPriceLimit?: number;
  computeSpotStrategy?: string;
  description?: string;
  domain?: string;
  ehpcVersion?: string;
  imageId?: string;
  imageOwnerAlias?: string;
  jobQueue?: string;
  keyPairName?: string;
  location?: string;
  multiOs?: boolean;
  name?: string;
  nodes?: CreateHybridClusterRequestNodes[];
  onPremiseVolumeLocalPath?: string;
  onPremiseVolumeMountPoint?: string;
  onPremiseVolumeProtocol?: string;
  onPremiseVolumeRemotePath?: string;
  osTag?: string;
  password?: string;
  postInstallScript?: CreateHybridClusterRequestPostInstallScript[];
  remoteDirectory?: string;
  resourceGroupId?: string;
  schedulerPreInstall?: boolean;
  securityGroupId?: string;
  securityGroupName?: string;
  vSwitchId?: string;
  volumeId?: string;
  volumeMountpoint?: string;
  volumeProtocol?: string;
  volumeType?: string;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      ecsOrder: 'EcsOrder',
      application: 'Application',
      clientToken: 'ClientToken',
      clientVersion: 'ClientVersion',
      computeSpotPriceLimit: 'ComputeSpotPriceLimit',
      computeSpotStrategy: 'ComputeSpotStrategy',
      description: 'Description',
      domain: 'Domain',
      ehpcVersion: 'EhpcVersion',
      imageId: 'ImageId',
      imageOwnerAlias: 'ImageOwnerAlias',
      jobQueue: 'JobQueue',
      keyPairName: 'KeyPairName',
      location: 'Location',
      multiOs: 'MultiOs',
      name: 'Name',
      nodes: 'Nodes',
      onPremiseVolumeLocalPath: 'OnPremiseVolumeLocalPath',
      onPremiseVolumeMountPoint: 'OnPremiseVolumeMountPoint',
      onPremiseVolumeProtocol: 'OnPremiseVolumeProtocol',
      onPremiseVolumeRemotePath: 'OnPremiseVolumeRemotePath',
      osTag: 'OsTag',
      password: 'Password',
      postInstallScript: 'PostInstallScript',
      remoteDirectory: 'RemoteDirectory',
      resourceGroupId: 'ResourceGroupId',
      schedulerPreInstall: 'SchedulerPreInstall',
      securityGroupId: 'SecurityGroupId',
      securityGroupName: 'SecurityGroupName',
      vSwitchId: 'VSwitchId',
      volumeId: 'VolumeId',
      volumeMountpoint: 'VolumeMountpoint',
      volumeProtocol: 'VolumeProtocol',
      volumeType: 'VolumeType',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsOrder: CreateHybridClusterRequestEcsOrder,
      application: { 'type': 'array', 'itemType': CreateHybridClusterRequestApplication },
      clientToken: 'string',
      clientVersion: 'string',
      computeSpotPriceLimit: 'number',
      computeSpotStrategy: 'string',
      description: 'string',
      domain: 'string',
      ehpcVersion: 'string',
      imageId: 'string',
      imageOwnerAlias: 'string',
      jobQueue: 'string',
      keyPairName: 'string',
      location: 'string',
      multiOs: 'boolean',
      name: 'string',
      nodes: { 'type': 'array', 'itemType': CreateHybridClusterRequestNodes },
      onPremiseVolumeLocalPath: 'string',
      onPremiseVolumeMountPoint: 'string',
      onPremiseVolumeProtocol: 'string',
      onPremiseVolumeRemotePath: 'string',
      osTag: 'string',
      password: 'string',
      postInstallScript: { 'type': 'array', 'itemType': CreateHybridClusterRequestPostInstallScript },
      remoteDirectory: 'string',
      resourceGroupId: 'string',
      schedulerPreInstall: 'boolean',
      securityGroupId: 'string',
      securityGroupName: 'string',
      vSwitchId: 'string',
      volumeId: 'string',
      volumeMountpoint: 'string',
      volumeProtocol: 'string',
      volumeType: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHybridClusterResponseBody extends $tea.Model {
  clusterId?: string;
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHybridClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateHybridClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateHybridClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobFileRequest extends $tea.Model {
  clusterId?: string;
  content?: string;
  runasUser?: string;
  runasUserPassword?: string;
  targetFile?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      content: 'Content',
      runasUser: 'RunasUser',
      runasUserPassword: 'RunasUserPassword',
      targetFile: 'TargetFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      content: 'string',
      runasUser: 'string',
      runasUserPassword: 'string',
      targetFile: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobFileResponseBody extends $tea.Model {
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

export class CreateJobFileResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateJobFileResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateJobFileResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobTemplateRequest extends $tea.Model {
  arrayRequest?: string;
  clockTime?: string;
  commandLine?: string;
  gpu?: number;
  inputFileUrl?: string;
  mem?: string;
  name?: string;
  node?: number;
  packagePath?: string;
  priority?: number;
  queue?: string;
  reRunable?: boolean;
  runasUser?: string;
  stderrRedirectPath?: string;
  stdoutRedirectPath?: string;
  task?: number;
  thread?: number;
  unzipCmd?: string;
  variables?: string;
  withUnzipCmd?: boolean;
  static names(): { [key: string]: string } {
    return {
      arrayRequest: 'ArrayRequest',
      clockTime: 'ClockTime',
      commandLine: 'CommandLine',
      gpu: 'Gpu',
      inputFileUrl: 'InputFileUrl',
      mem: 'Mem',
      name: 'Name',
      node: 'Node',
      packagePath: 'PackagePath',
      priority: 'Priority',
      queue: 'Queue',
      reRunable: 'ReRunable',
      runasUser: 'RunasUser',
      stderrRedirectPath: 'StderrRedirectPath',
      stdoutRedirectPath: 'StdoutRedirectPath',
      task: 'Task',
      thread: 'Thread',
      unzipCmd: 'UnzipCmd',
      variables: 'Variables',
      withUnzipCmd: 'WithUnzipCmd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayRequest: 'string',
      clockTime: 'string',
      commandLine: 'string',
      gpu: 'number',
      inputFileUrl: 'string',
      mem: 'string',
      name: 'string',
      node: 'number',
      packagePath: 'string',
      priority: 'number',
      queue: 'string',
      reRunable: 'boolean',
      runasUser: 'string',
      stderrRedirectPath: 'string',
      stdoutRedirectPath: 'string',
      task: 'number',
      thread: 'number',
      unzipCmd: 'string',
      variables: 'string',
      withUnzipCmd: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobTemplateResponseBody extends $tea.Model {
  requestId?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateJobTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateJobTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterRequest extends $tea.Model {
  clusterId?: string;
  releaseInstance?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      releaseInstance: 'ReleaseInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      releaseInstance: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterResponseBody extends $tea.Model {
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteContainerAppsRequest extends $tea.Model {
  containerApp?: DeleteContainerAppsRequestContainerApp[];
  static names(): { [key: string]: string } {
    return {
      containerApp: 'ContainerApp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerApp: { 'type': 'array', 'itemType': DeleteContainerAppsRequestContainerApp },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteContainerAppsResponseBody extends $tea.Model {
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

export class DeleteContainerAppsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteContainerAppsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteContainerAppsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGWSClusterRequest extends $tea.Model {
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

export class DeleteGWSClusterResponseBody extends $tea.Model {
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

export class DeleteGWSClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteGWSClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteGWSClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGWSInstanceRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGWSInstanceResponseBody extends $tea.Model {
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

export class DeleteGWSInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteGWSInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteGWSInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImageRequest extends $tea.Model {
  clusterId?: string;
  containerType?: string;
  imageTag?: string;
  repository?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      containerType: 'ContainerType',
      imageTag: 'ImageTag',
      repository: 'Repository',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      containerType: 'string',
      imageTag: 'string',
      repository: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteImageResponseBody extends $tea.Model {
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

export class DeleteImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobTemplatesRequest extends $tea.Model {
  templates?: string;
  static names(): { [key: string]: string } {
    return {
      templates: 'Templates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templates: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobTemplatesResponseBody extends $tea.Model {
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

export class DeleteJobTemplatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteJobTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteJobTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobsRequest extends $tea.Model {
  clusterId?: string;
  jobs?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      jobs: 'Jobs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      jobs: 'string',
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
  headers: { [key: string]: string };
  body: DeleteJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNodesRequest extends $tea.Model {
  clusterId?: string;
  instance?: DeleteNodesRequestInstance[];
  releaseInstance?: boolean;
  sync?: boolean;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      instance: 'Instance',
      releaseInstance: 'ReleaseInstance',
      sync: 'Sync',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      instance: { 'type': 'array', 'itemType': DeleteNodesRequestInstance },
      releaseInstance: 'boolean',
      sync: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNodesResponseBody extends $tea.Model {
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNodesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQueueRequest extends $tea.Model {
  clusterId?: string;
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

export class DeleteQueueResponseBody extends $tea.Model {
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

export class DeleteQueueResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteQueueResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteQueueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecurityGroupRequest extends $tea.Model {
  clusterId?: string;
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      securityGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSecurityGroupResponseBody extends $tea.Model {
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

export class DeleteSecurityGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteSecurityGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteSecurityGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUsersRequest extends $tea.Model {
  clusterId?: string;
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

export class DeleteUsersResponseBody extends $tea.Model {
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
  headers: { [key: string]: string };
  body: DeleteUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoScaleConfigRequest extends $tea.Model {
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

export class DescribeAutoScaleConfigResponseBody extends $tea.Model {
  clusterId?: string;
  clusterType?: string;
  enableAutoGrow?: boolean;
  enableAutoShrink?: boolean;
  excludeNodes?: string;
  extraNodesGrowRatio?: number;
  growIntervalInMinutes?: number;
  growRatio?: number;
  growTimeoutInMinutes?: number;
  maxNodesInCluster?: number;
  requestId?: string;
  shrinkIdleTimes?: number;
  shrinkIntervalInMinutes?: number;
  spotPriceLimit?: string;
  spotStrategy?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterType: 'ClusterType',
      enableAutoGrow: 'EnableAutoGrow',
      enableAutoShrink: 'EnableAutoShrink',
      excludeNodes: 'ExcludeNodes',
      extraNodesGrowRatio: 'ExtraNodesGrowRatio',
      growIntervalInMinutes: 'GrowIntervalInMinutes',
      growRatio: 'GrowRatio',
      growTimeoutInMinutes: 'GrowTimeoutInMinutes',
      maxNodesInCluster: 'MaxNodesInCluster',
      requestId: 'RequestId',
      shrinkIdleTimes: 'ShrinkIdleTimes',
      shrinkIntervalInMinutes: 'ShrinkIntervalInMinutes',
      spotPriceLimit: 'SpotPriceLimit',
      spotStrategy: 'SpotStrategy',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterType: 'string',
      enableAutoGrow: 'boolean',
      enableAutoShrink: 'boolean',
      excludeNodes: 'string',
      extraNodesGrowRatio: 'number',
      growIntervalInMinutes: 'number',
      growRatio: 'number',
      growTimeoutInMinutes: 'number',
      maxNodesInCluster: 'number',
      requestId: 'string',
      shrinkIdleTimes: 'number',
      shrinkIntervalInMinutes: 'number',
      spotPriceLimit: 'string',
      spotStrategy: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAutoScaleConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeAutoScaleConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeAutoScaleConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterRequest extends $tea.Model {
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

export class DescribeClusterResponseBody extends $tea.Model {
  clusterInfo?: DescribeClusterResponseBodyClusterInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterInfo: 'ClusterInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterInfo: DescribeClusterResponseBodyClusterInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerAppRequest extends $tea.Model {
  containerId?: string;
  static names(): { [key: string]: string } {
    return {
      containerId: 'ContainerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerAppResponseBody extends $tea.Model {
  containerAppInfo?: DescribeContainerAppResponseBodyContainerAppInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      containerAppInfo: 'ContainerAppInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerAppInfo: DescribeContainerAppResponseBodyContainerAppInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerAppResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeContainerAppResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeContainerAppResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployProcessRequest extends $tea.Model {
  clusterId?: string;
  hostName?: string;
  regionId?: string;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      hostName: 'HostName',
      regionId: 'RegionId',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      hostName: 'string',
      regionId: 'string',
      role: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployProcessResponseBody extends $tea.Model {
  deployProcess?: string;
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      deployProcess: 'DeployProcess',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployProcess: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployProcessResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeDeployProcessResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeDeployProcessResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGWSClusterPolicyRequest extends $tea.Model {
  asyncMode?: boolean;
  clusterId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      asyncMode: 'AsyncMode',
      clusterId: 'ClusterId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncMode: 'boolean',
      clusterId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGWSClusterPolicyResponseBody extends $tea.Model {
  clipboard?: string;
  localDrive?: string;
  requestId?: string;
  usbRedirect?: string;
  watermark?: string;
  static names(): { [key: string]: string } {
    return {
      clipboard: 'Clipboard',
      localDrive: 'LocalDrive',
      requestId: 'RequestId',
      usbRedirect: 'UsbRedirect',
      watermark: 'Watermark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clipboard: 'string',
      localDrive: 'string',
      requestId: 'string',
      usbRedirect: 'string',
      watermark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGWSClusterPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGWSClusterPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGWSClusterPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGWSClustersRequest extends $tea.Model {
  clusterId?: string;
  pageNumber?: number;
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

export class DescribeGWSClustersResponseBody extends $tea.Model {
  callerType?: string;
  clusters?: DescribeGWSClustersResponseBodyClusters;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      callerType: 'CallerType',
      clusters: 'Clusters',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callerType: 'string',
      clusters: DescribeGWSClustersResponseBodyClusters,
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

export class DescribeGWSClustersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGWSClustersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGWSClustersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGWSImagesRequest extends $tea.Model {
  pageNumber?: number;
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

export class DescribeGWSImagesResponseBody extends $tea.Model {
  images?: DescribeGWSImagesResponseBodyImages;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: DescribeGWSImagesResponseBodyImages,
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

export class DescribeGWSImagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGWSImagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGWSImagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGWSInstancesRequest extends $tea.Model {
  clusterId?: string;
  instanceId?: string;
  pageNumber?: number;
  pageSize?: number;
  userName?: string;
  userUid?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      userName: 'UserName',
      userUid: 'UserUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      userName: 'string',
      userUid: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGWSInstancesResponseBody extends $tea.Model {
  instances?: DescribeGWSInstancesResponseBodyInstances;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: DescribeGWSInstancesResponseBodyInstances,
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

export class DescribeGWSInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeGWSInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeGWSInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageRequest extends $tea.Model {
  clusterId?: string;
  containerType?: string;
  imageTag?: string;
  repository?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      containerType: 'ContainerType',
      imageTag: 'ImageTag',
      repository: 'Repository',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      containerType: 'string',
      imageTag: 'string',
      repository: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageResponseBody extends $tea.Model {
  imageInfo?: DescribeImageResponseBodyImageInfo;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      imageInfo: 'ImageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageInfo: DescribeImageResponseBodyImageInfo,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageGatewayConfigRequest extends $tea.Model {
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

export class DescribeImageGatewayConfigResponseBody extends $tea.Model {
  imagegw?: DescribeImageGatewayConfigResponseBodyImagegw;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      imagegw: 'Imagegw',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imagegw: DescribeImageGatewayConfigResponseBodyImagegw,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageGatewayConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeImageGatewayConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeImageGatewayConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagePriceRequest extends $tea.Model {
  amount?: number;
  imageId?: string;
  orderType?: string;
  period?: number;
  priceUnit?: string;
  skuCode?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      imageId: 'ImageId',
      orderType: 'OrderType',
      period: 'Period',
      priceUnit: 'PriceUnit',
      skuCode: 'SkuCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      imageId: 'string',
      orderType: 'string',
      period: 'number',
      priceUnit: 'string',
      skuCode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagePriceResponseBody extends $tea.Model {
  amount?: number;
  discountPrice?: number;
  imageId?: string;
  originalPrice?: number;
  requestId?: string;
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      discountPrice: 'DiscountPrice',
      imageId: 'ImageId',
      originalPrice: 'OriginalPrice',
      requestId: 'RequestId',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      discountPrice: 'number',
      imageId: 'string',
      originalPrice: 'number',
      requestId: 'string',
      tradePrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImagePriceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeImagePriceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeImagePriceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobRequest extends $tea.Model {
  clusterId?: string;
  jobId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      jobId: 'JobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      jobId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobResponseBody extends $tea.Model {
  message?: DescribeJobResponseBodyMessage;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: DescribeJobResponseBodyMessage,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNFSClientStatusRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNFSClientStatusResponseBody extends $tea.Model {
  requestId?: string;
  result?: DescribeNFSClientStatusResponseBodyResult;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: DescribeNFSClientStatusResponseBodyResult,
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNFSClientStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeNFSClientStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeNFSClientStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceRequest extends $tea.Model {
  chargeType?: string;
  commodities?: DescribePriceRequestCommodities[];
  orderType?: string;
  priceUnit?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      commodities: 'Commodities',
      orderType: 'OrderType',
      priceUnit: 'PriceUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      commodities: { 'type': 'array', 'itemType': DescribePriceRequestCommodities },
      orderType: 'string',
      priceUnit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBody extends $tea.Model {
  prices?: DescribePriceResponseBodyPrices;
  requestId?: string;
  totalTradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      prices: 'Prices',
      requestId: 'RequestId',
      totalTradePrice: 'TotalTradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prices: DescribePriceResponseBodyPrices,
      requestId: 'string',
      totalTradePrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribePriceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribePriceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditJobTemplateRequest extends $tea.Model {
  arrayRequest?: string;
  clockTime?: string;
  commandLine?: string;
  gpu?: number;
  inputFileUrl?: string;
  mem?: string;
  name?: string;
  node?: number;
  packagePath?: string;
  priority?: number;
  queue?: string;
  reRunable?: boolean;
  runasUser?: string;
  stderrRedirectPath?: string;
  stdoutRedirectPath?: string;
  task?: number;
  templateId?: string;
  thread?: number;
  unzipCmd?: string;
  variables?: string;
  withUnzipCmd?: boolean;
  static names(): { [key: string]: string } {
    return {
      arrayRequest: 'ArrayRequest',
      clockTime: 'ClockTime',
      commandLine: 'CommandLine',
      gpu: 'Gpu',
      inputFileUrl: 'InputFileUrl',
      mem: 'Mem',
      name: 'Name',
      node: 'Node',
      packagePath: 'PackagePath',
      priority: 'Priority',
      queue: 'Queue',
      reRunable: 'ReRunable',
      runasUser: 'RunasUser',
      stderrRedirectPath: 'StderrRedirectPath',
      stdoutRedirectPath: 'StdoutRedirectPath',
      task: 'Task',
      templateId: 'TemplateId',
      thread: 'Thread',
      unzipCmd: 'UnzipCmd',
      variables: 'Variables',
      withUnzipCmd: 'WithUnzipCmd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayRequest: 'string',
      clockTime: 'string',
      commandLine: 'string',
      gpu: 'number',
      inputFileUrl: 'string',
      mem: 'string',
      name: 'string',
      node: 'number',
      packagePath: 'string',
      priority: 'number',
      queue: 'string',
      reRunable: 'boolean',
      runasUser: 'string',
      stderrRedirectPath: 'string',
      stdoutRedirectPath: 'string',
      task: 'number',
      templateId: 'string',
      thread: 'number',
      unzipCmd: 'string',
      variables: 'string',
      withUnzipCmd: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditJobTemplateResponseBody extends $tea.Model {
  requestId?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditJobTemplateResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: EditJobTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: EditJobTemplateResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountingReportRequest extends $tea.Model {
  clusterId?: string;
  dim?: string;
  endTime?: number;
  filterValue?: string;
  jobId?: string;
  pageNumber?: number;
  pageSize?: number;
  reportType?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      dim: 'Dim',
      endTime: 'EndTime',
      filterValue: 'FilterValue',
      jobId: 'JobId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      reportType: 'ReportType',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      dim: 'string',
      endTime: 'number',
      filterValue: 'string',
      jobId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      reportType: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountingReportResponseBody extends $tea.Model {
  data?: GetAccountingReportResponseBodyData;
  metrics?: string;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCoreTime?: number;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      metrics: 'Metrics',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCoreTime: 'TotalCoreTime',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetAccountingReportResponseBodyData,
      metrics: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCoreTime: 'number',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountingReportResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAccountingReportResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAccountingReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoScaleConfigRequest extends $tea.Model {
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

export class GetAutoScaleConfigResponseBody extends $tea.Model {
  clusterId?: string;
  clusterType?: string;
  enableAutoGrow?: boolean;
  enableAutoShrink?: boolean;
  excludeNodes?: string;
  extraNodesGrowRatio?: number;
  growIntervalInMinutes?: number;
  growRatio?: number;
  growTimeoutInMinutes?: number;
  imageId?: string;
  maxNodesInCluster?: number;
  queues?: GetAutoScaleConfigResponseBodyQueues;
  requestId?: string;
  shrinkIdleTimes?: number;
  shrinkIntervalInMinutes?: number;
  spotPriceLimit?: number;
  spotStrategy?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterType: 'ClusterType',
      enableAutoGrow: 'EnableAutoGrow',
      enableAutoShrink: 'EnableAutoShrink',
      excludeNodes: 'ExcludeNodes',
      extraNodesGrowRatio: 'ExtraNodesGrowRatio',
      growIntervalInMinutes: 'GrowIntervalInMinutes',
      growRatio: 'GrowRatio',
      growTimeoutInMinutes: 'GrowTimeoutInMinutes',
      imageId: 'ImageId',
      maxNodesInCluster: 'MaxNodesInCluster',
      queues: 'Queues',
      requestId: 'RequestId',
      shrinkIdleTimes: 'ShrinkIdleTimes',
      shrinkIntervalInMinutes: 'ShrinkIntervalInMinutes',
      spotPriceLimit: 'SpotPriceLimit',
      spotStrategy: 'SpotStrategy',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterType: 'string',
      enableAutoGrow: 'boolean',
      enableAutoShrink: 'boolean',
      excludeNodes: 'string',
      extraNodesGrowRatio: 'number',
      growIntervalInMinutes: 'number',
      growRatio: 'number',
      growTimeoutInMinutes: 'number',
      imageId: 'string',
      maxNodesInCluster: 'number',
      queues: GetAutoScaleConfigResponseBodyQueues,
      requestId: 'string',
      shrinkIdleTimes: 'number',
      shrinkIntervalInMinutes: 'number',
      spotPriceLimit: 'number',
      spotStrategy: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoScaleConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAutoScaleConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAutoScaleConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudMetricLogsRequest extends $tea.Model {
  aggregationInterval?: number;
  aggregationType?: string;
  clusterId?: string;
  filter?: string;
  from?: number;
  metricCategories?: string;
  metricScope?: string;
  reverse?: boolean;
  to?: number;
  static names(): { [key: string]: string } {
    return {
      aggregationInterval: 'AggregationInterval',
      aggregationType: 'AggregationType',
      clusterId: 'ClusterId',
      filter: 'Filter',
      from: 'From',
      metricCategories: 'MetricCategories',
      metricScope: 'MetricScope',
      reverse: 'Reverse',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregationInterval: 'number',
      aggregationType: 'string',
      clusterId: 'string',
      filter: 'string',
      from: 'number',
      metricCategories: 'string',
      metricScope: 'string',
      reverse: 'boolean',
      to: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudMetricLogsResponseBody extends $tea.Model {
  metricLogs?: GetCloudMetricLogsResponseBodyMetricLogs;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      metricLogs: 'MetricLogs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricLogs: GetCloudMetricLogsResponseBodyMetricLogs,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudMetricLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetCloudMetricLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetCloudMetricLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudMetricProfilingRequest extends $tea.Model {
  clusterId?: string;
  profilingId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      profilingId: 'ProfilingId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      profilingId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudMetricProfilingResponseBody extends $tea.Model {
  requestId?: string;
  svgUrls?: GetCloudMetricProfilingResponseBodySvgUrls;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      svgUrls: 'SvgUrls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      svgUrls: GetCloudMetricProfilingResponseBodySvgUrls,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudMetricProfilingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetCloudMetricProfilingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetCloudMetricProfilingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterVolumesRequest extends $tea.Model {
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

export class GetClusterVolumesResponseBody extends $tea.Model {
  regionId?: string;
  requestId?: string;
  volumes?: GetClusterVolumesResponseBodyVolumes;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      requestId: 'RequestId',
      volumes: 'Volumes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      requestId: 'string',
      volumes: GetClusterVolumesResponseBodyVolumes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterVolumesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetClusterVolumesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetClusterVolumesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGWSConnectTicketRequest extends $tea.Model {
  appName?: string;
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGWSConnectTicketResponseBody extends $tea.Model {
  requestId?: string;
  ticket?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ticket: 'Ticket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ticket: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGWSConnectTicketResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetGWSConnectTicketResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetGWSConnectTicketResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHybridClusterConfigRequest extends $tea.Model {
  clusterId?: string;
  node?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      node: 'Node',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      node: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHybridClusterConfigResponseBody extends $tea.Model {
  clusterConfig?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterConfig: 'ClusterConfig',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterConfig: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHybridClusterConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetHybridClusterConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetHybridClusterConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIfEcsTypeSupportHtConfigRequest extends $tea.Model {
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIfEcsTypeSupportHtConfigResponseBody extends $tea.Model {
  defaultHtEnabled?: boolean;
  instanceType?: string;
  requestId?: string;
  supportHtConfig?: boolean;
  static names(): { [key: string]: string } {
    return {
      defaultHtEnabled: 'DefaultHtEnabled',
      instanceType: 'InstanceType',
      requestId: 'RequestId',
      supportHtConfig: 'SupportHtConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultHtEnabled: 'boolean',
      instanceType: 'string',
      requestId: 'string',
      supportHtConfig: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIfEcsTypeSupportHtConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetIfEcsTypeSupportHtConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetIfEcsTypeSupportHtConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPostScriptsRequest extends $tea.Model {
  clusterId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPostScriptsResponseBody extends $tea.Model {
  postInstallScripts?: GetPostScriptsResponseBodyPostInstallScripts[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      postInstallScripts: 'PostInstallScripts',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      postInstallScripts: { 'type': 'array', 'itemType': GetPostScriptsResponseBodyPostInstallScripts },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPostScriptsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetPostScriptsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetPostScriptsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueConfRequest extends $tea.Model {
  clusterId?: string;
  queues?: GetQueueConfRequestQueues[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      queues: 'Queues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      queues: { 'type': 'array', 'itemType': GetQueueConfRequestQueues },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueConfResponseBody extends $tea.Model {
  queuesConf?: GetQueueConfResponseBodyQueuesConf[];
  requestId?: string;
  success?: string;
  static names(): { [key: string]: string } {
    return {
      queuesConf: 'QueuesConf',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queuesConf: { 'type': 'array', 'itemType': GetQueueConfResponseBodyQueuesConf },
      requestId: 'string',
      success: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueConfResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetQueueConfResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetQueueConfResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSchedulerInfoRequest extends $tea.Model {
  clusterId?: string;
  regionId?: string;
  scheduler?: GetSchedulerInfoRequestScheduler[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      regionId: 'RegionId',
      scheduler: 'Scheduler',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      regionId: 'string',
      scheduler: { 'type': 'array', 'itemType': GetSchedulerInfoRequestScheduler },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSchedulerInfoResponseBody extends $tea.Model {
  requestId?: string;
  schedInfo?: GetSchedulerInfoResponseBodySchedInfo[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      schedInfo: 'SchedInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      schedInfo: { 'type': 'array', 'itemType': GetSchedulerInfoResponseBodySchedInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSchedulerInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSchedulerInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSchedulerInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVisualServiceStatusRequest extends $tea.Model {
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

export class GetVisualServiceStatusResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVisualServiceStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetVisualServiceStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetVisualServiceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitializeEHPCRequest extends $tea.Model {
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitializeEHPCResponseBody extends $tea.Model {
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

export class InitializeEHPCResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InitializeEHPCResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InitializeEHPCResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallSoftwareRequest extends $tea.Model {
  application?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      application: 'Application',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      application: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstallSoftwareResponseBody extends $tea.Model {
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

export class InstallSoftwareResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InstallSoftwareResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InstallSoftwareResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeShellCommandRequest extends $tea.Model {
  clusterId?: string;
  command?: string;
  instance?: InvokeShellCommandRequestInstance[];
  timeout?: number;
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      command: 'Command',
      instance: 'Instance',
      timeout: 'Timeout',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      command: 'string',
      instance: { 'type': 'array', 'itemType': InvokeShellCommandRequestInstance },
      timeout: 'number',
      workingDir: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeShellCommandResponseBody extends $tea.Model {
  commandId?: string;
  instanceIds?: InvokeShellCommandResponseBodyInstanceIds;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      commandId: 'CommandId',
      instanceIds: 'InstanceIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandId: 'string',
      instanceIds: InvokeShellCommandResponseBodyInstanceIds,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeShellCommandResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: InvokeShellCommandResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: InvokeShellCommandResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableEcsTypesRequest extends $tea.Model {
  instanceChargeType?: string;
  showSoldOut?: boolean;
  spotStrategy?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceChargeType: 'InstanceChargeType',
      showSoldOut: 'ShowSoldOut',
      spotStrategy: 'SpotStrategy',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceChargeType: 'string',
      showSoldOut: 'boolean',
      spotStrategy: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableEcsTypesResponseBody extends $tea.Model {
  instanceTypeFamilies?: ListAvailableEcsTypesResponseBodyInstanceTypeFamilies;
  requestId?: string;
  supportSpotInstance?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceTypeFamilies: 'InstanceTypeFamilies',
      requestId: 'RequestId',
      supportSpotInstance: 'SupportSpotInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypeFamilies: ListAvailableEcsTypesResponseBodyInstanceTypeFamilies,
      requestId: 'string',
      supportSpotInstance: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableEcsTypesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAvailableEcsTypesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAvailableEcsTypesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudMetricProfilingsRequest extends $tea.Model {
  clusterId?: string;
  pageNumber?: number;
  pageSize?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudMetricProfilingsResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  profilings?: ListCloudMetricProfilingsResponseBodyProfilings;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      profilings: 'Profilings',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      profilings: ListCloudMetricProfilingsResponseBodyProfilings,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudMetricProfilingsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListCloudMetricProfilingsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListCloudMetricProfilingsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterLogsRequest extends $tea.Model {
  clusterId?: string;
  pageNumber?: number;
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

export class ListClusterLogsResponseBody extends $tea.Model {
  clusterId?: string;
  logs?: ListClusterLogsResponseBodyLogs;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      logs: 'Logs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      logs: ListClusterLogsResponseBodyLogs,
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

export class ListClusterLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListClusterLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListClusterLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersRequest extends $tea.Model {
  pageNumber?: number;
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

export class ListClustersResponseBody extends $tea.Model {
  clusters?: ListClustersResponseBodyClusters;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
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
      clusters: ListClustersResponseBodyClusters,
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

export class ListClustersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListClustersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListClustersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersMetaRequest extends $tea.Model {
  pageNumber?: number;
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

export class ListClustersMetaResponseBody extends $tea.Model {
  clusters?: ListClustersMetaResponseBodyClusters;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
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
      clusters: ListClustersMetaResponseBodyClusters,
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

export class ListClustersMetaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListClustersMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListClustersMetaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommandsRequest extends $tea.Model {
  clusterId?: string;
  commandId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      commandId: 'CommandId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      commandId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommandsResponseBody extends $tea.Model {
  commands?: ListCommandsResponseBodyCommands;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      commands: 'Commands',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commands: ListCommandsResponseBodyCommands,
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

export class ListCommandsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListCommandsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListCommandsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContainerAppsRequest extends $tea.Model {
  pageNumber?: number;
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

export class ListContainerAppsResponseBody extends $tea.Model {
  containerApps?: ListContainerAppsResponseBodyContainerApps;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      containerApps: 'ContainerApps',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerApps: ListContainerAppsResponseBodyContainerApps,
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

export class ListContainerAppsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListContainerAppsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListContainerAppsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContainerImagesRequest extends $tea.Model {
  clusterId?: string;
  containerType?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      containerType: 'ContainerType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      containerType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContainerImagesResponseBody extends $tea.Model {
  DBInfo?: string;
  images?: ListContainerImagesResponseBodyImages;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      DBInfo: 'DBInfo',
      images: 'Images',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInfo: 'string',
      images: ListContainerImagesResponseBodyImages,
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

export class ListContainerImagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListContainerImagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListContainerImagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCpfsFileSystemsRequest extends $tea.Model {
  fileSystemId?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      fileSystemId: 'FileSystemId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystemId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCpfsFileSystemsResponseBody extends $tea.Model {
  fileSystemList?: ListCpfsFileSystemsResponseBodyFileSystemList;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
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
      fileSystemList: ListCpfsFileSystemsResponseBodyFileSystemList,
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

export class ListCpfsFileSystemsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListCpfsFileSystemsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListCpfsFileSystemsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCurrentClientVersionResponseBody extends $tea.Model {
  clientVersion?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clientVersion: 'ClientVersion',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientVersion: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCurrentClientVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListCurrentClientVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListCurrentClientVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomImagesRequest extends $tea.Model {
  baseOsTag?: string;
  clusterId?: string;
  imageOwnerAlias?: string;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      baseOsTag: 'BaseOsTag',
      clusterId: 'ClusterId',
      imageOwnerAlias: 'ImageOwnerAlias',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseOsTag: 'string',
      clusterId: 'string',
      imageOwnerAlias: 'string',
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomImagesResponseBody extends $tea.Model {
  images?: ListCustomImagesResponseBodyImages;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: ListCustomImagesResponseBodyImages,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomImagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListCustomImagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListCustomImagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileSystemWithMountTargetsRequest extends $tea.Model {
  pageNumber?: number;
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

export class ListFileSystemWithMountTargetsResponseBody extends $tea.Model {
  fileSystemList?: ListFileSystemWithMountTargetsResponseBodyFileSystemList;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
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
      fileSystemList: ListFileSystemWithMountTargetsResponseBodyFileSystemList,
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

export class ListFileSystemWithMountTargetsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFileSystemWithMountTargetsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFileSystemWithMountTargetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesRequest extends $tea.Model {
  baseOsTag?: string;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      baseOsTag: 'BaseOsTag',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseOsTag: 'string',
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesResponseBody extends $tea.Model {
  osTags?: ListImagesResponseBodyOsTags;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      osTags: 'OsTags',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      osTags: ListImagesResponseBodyOsTags,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListImagesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListImagesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstalledSoftwareRequest extends $tea.Model {
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

export class ListInstalledSoftwareResponseBody extends $tea.Model {
  requestId?: string;
  softwareList?: ListInstalledSoftwareResponseBodySoftwareList;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      softwareList: 'SoftwareList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      softwareList: ListInstalledSoftwareResponseBodySoftwareList,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstalledSoftwareResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListInstalledSoftwareResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListInstalledSoftwareResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInvocationResultsRequest extends $tea.Model {
  clusterId?: string;
  commandId?: string;
  instance?: ListInvocationResultsRequestInstance[];
  invokeRecordStatus?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      commandId: 'CommandId',
      instance: 'Instance',
      invokeRecordStatus: 'InvokeRecordStatus',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      commandId: 'string',
      instance: { 'type': 'array', 'itemType': ListInvocationResultsRequestInstance },
      invokeRecordStatus: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInvocationResultsResponseBody extends $tea.Model {
  invocationResults?: ListInvocationResultsResponseBodyInvocationResults;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      invocationResults: 'InvocationResults',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invocationResults: ListInvocationResultsResponseBodyInvocationResults,
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

export class ListInvocationResultsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListInvocationResultsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListInvocationResultsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInvocationStatusRequest extends $tea.Model {
  clusterId?: string;
  commandId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      commandId: 'CommandId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      commandId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInvocationStatusResponseBody extends $tea.Model {
  commandId?: string;
  invokeInstances?: ListInvocationStatusResponseBodyInvokeInstances;
  invokeStatus?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      commandId: 'CommandId',
      invokeInstances: 'InvokeInstances',
      invokeStatus: 'InvokeStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandId: 'string',
      invokeInstances: ListInvocationStatusResponseBodyInvokeInstances,
      invokeStatus: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInvocationStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListInvocationStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListInvocationStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobTemplatesRequest extends $tea.Model {
  name?: string;
  pageNumber?: number;
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobTemplatesResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  templates?: ListJobTemplatesResponseBodyTemplates;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      templates: 'Templates',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      templates: ListJobTemplatesResponseBodyTemplates,
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobTemplatesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListJobTemplatesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListJobTemplatesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsRequest extends $tea.Model {
  clusterId?: string;
  owner?: string;
  pageNumber?: number;
  pageSize?: number;
  rerunable?: string;
  state?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      rerunable: 'Rerunable',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      rerunable: 'string',
      state: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBody extends $tea.Model {
  jobs?: ListJobsResponseBodyJobs;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      jobs: 'Jobs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobs: ListJobsResponseBodyJobs,
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

export class ListJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsWithFiltersRequest extends $tea.Model {
  clusterId?: string;
  createTimeEnd?: string;
  createTimeStart?: string;
  executeOrder?: string;
  jobName?: string;
  jobStatus?: string;
  nodes?: string[];
  pageNumber?: number;
  pageSize?: number;
  pendOrder?: string;
  queues?: string[];
  regionId?: string;
  submitOrder?: string;
  users?: string[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      createTimeEnd: 'CreateTimeEnd',
      createTimeStart: 'CreateTimeStart',
      executeOrder: 'ExecuteOrder',
      jobName: 'JobName',
      jobStatus: 'JobStatus',
      nodes: 'Nodes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pendOrder: 'PendOrder',
      queues: 'Queues',
      regionId: 'RegionId',
      submitOrder: 'SubmitOrder',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      createTimeEnd: 'string',
      createTimeStart: 'string',
      executeOrder: 'string',
      jobName: 'string',
      jobStatus: 'string',
      nodes: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
      pendOrder: 'string',
      queues: { 'type': 'array', 'itemType': 'string' },
      regionId: 'string',
      submitOrder: 'string',
      users: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsWithFiltersResponseBody extends $tea.Model {
  jobs?: ListJobsWithFiltersResponseBodyJobs[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  success?: boolean;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      jobs: 'Jobs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobs: { 'type': 'array', 'itemType': ListJobsWithFiltersResponseBodyJobs },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsWithFiltersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListJobsWithFiltersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListJobsWithFiltersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesRequest extends $tea.Model {
  clusterId?: string;
  filter?: string;
  hostName?: string;
  hostNamePrefix?: string;
  hostNameSuffix?: string;
  pageNumber?: number;
  pageSize?: number;
  privateIpAddress?: string;
  role?: string;
  sequence?: string;
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      filter: 'Filter',
      hostName: 'HostName',
      hostNamePrefix: 'HostNamePrefix',
      hostNameSuffix: 'HostNameSuffix',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      privateIpAddress: 'PrivateIpAddress',
      role: 'Role',
      sequence: 'Sequence',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      filter: 'string',
      hostName: 'string',
      hostNamePrefix: 'string',
      hostNameSuffix: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      privateIpAddress: 'string',
      role: 'string',
      sequence: 'string',
      sortBy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBody extends $tea.Model {
  nodes?: ListNodesResponseBodyNodes;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
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
      nodes: ListNodesResponseBodyNodes,
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
  headers: { [key: string]: string };
  body: ListNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesByQueueRequest extends $tea.Model {
  clusterId?: string;
  pageNumber?: number;
  pageSize?: number;
  queueName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queueName: 'QueueName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      queueName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesByQueueResponseBody extends $tea.Model {
  nodes?: ListNodesByQueueResponseBodyNodes;
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
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
      nodes: ListNodesByQueueResponseBodyNodes,
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

export class ListNodesByQueueResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListNodesByQueueResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListNodesByQueueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesNoPagingRequest extends $tea.Model {
  clusterId?: string;
  hostName?: string;
  role?: string;
  sequence?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      hostName: 'HostName',
      role: 'Role',
      sequence: 'Sequence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      hostName: 'string',
      role: 'string',
      sequence: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesNoPagingResponseBody extends $tea.Model {
  nodes?: ListNodesNoPagingResponseBodyNodes;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: ListNodesNoPagingResponseBodyNodes,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesNoPagingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListNodesNoPagingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListNodesNoPagingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPreferredEcsTypesRequest extends $tea.Model {
  instanceChargeType?: string;
  spotStrategy?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceChargeType: 'InstanceChargeType',
      spotStrategy: 'SpotStrategy',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceChargeType: 'string',
      spotStrategy: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPreferredEcsTypesResponseBody extends $tea.Model {
  requestId?: string;
  series?: ListPreferredEcsTypesResponseBodySeries;
  supportSpotInstance?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      series: 'Series',
      supportSpotInstance: 'SupportSpotInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      series: ListPreferredEcsTypesResponseBodySeries,
      supportSpotInstance: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPreferredEcsTypesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListPreferredEcsTypesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListPreferredEcsTypesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueuesRequest extends $tea.Model {
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

export class ListQueuesResponseBody extends $tea.Model {
  queues?: ListQueuesResponseBodyQueues;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      queues: 'Queues',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queues: ListQueuesResponseBodyQueues,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueuesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListQueuesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListQueuesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponseBody extends $tea.Model {
  regions?: ListRegionsResponseBodyRegions;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: ListRegionsResponseBodyRegions,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityGroupsRequest extends $tea.Model {
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

export class ListSecurityGroupsResponseBody extends $tea.Model {
  requestId?: string;
  securityGroups?: ListSecurityGroupsResponseBodySecurityGroups;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityGroups: 'SecurityGroups',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityGroups: ListSecurityGroupsResponseBodySecurityGroups,
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSecurityGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSecurityGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwaresRequest extends $tea.Model {
  ehpcVersion?: string;
  osTag?: string;
  static names(): { [key: string]: string } {
    return {
      ehpcVersion: 'EhpcVersion',
      osTag: 'OsTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ehpcVersion: 'string',
      osTag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwaresResponseBody extends $tea.Model {
  requestId?: string;
  softwares?: ListSoftwaresResponseBodySoftwares;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      softwares: 'Softwares',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      softwares: ListSoftwaresResponseBodySoftwares,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwaresResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSoftwaresResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSoftwaresResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksRequest extends $tea.Model {
  archived?: boolean;
  clusterId?: string;
  pageNumber?: number;
  pageSize?: number;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      archived: 'Archived',
      clusterId: 'ClusterId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archived: 'boolean',
      clusterId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  tasks?: ListTasksResponseBodyTasks[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      tasks: 'Tasks',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': ListTasksResponseBodyTasks },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersRequest extends $tea.Model {
  clusterId?: string;
  pageNumber?: number;
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
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
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
  headers: { [key: string]: string };
  body: ListUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVolumesRequest extends $tea.Model {
  pageNumber?: number;
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

export class ListVolumesResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  volumes?: ListVolumesResponseBodyVolumes;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      volumes: 'Volumes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      volumes: ListVolumesResponseBodyVolumes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVolumesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListVolumesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListVolumesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterAttributesRequest extends $tea.Model {
  clusterId?: string;
  description?: string;
  imageId?: string;
  imageOwnerAlias?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      description: 'Description',
      imageId: 'ImageId',
      imageOwnerAlias: 'ImageOwnerAlias',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      description: 'string',
      imageId: 'string',
      imageOwnerAlias: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyClusterAttributesResponseBody extends $tea.Model {
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

export class ModifyClusterAttributesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyClusterAttributesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyClusterAttributesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyContainerAppAttributesRequest extends $tea.Model {
  containerId?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      containerId: 'ContainerId',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerId: 'string',
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyContainerAppAttributesResponseBody extends $tea.Model {
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

export class ModifyContainerAppAttributesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyContainerAppAttributesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyContainerAppAttributesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyImageGatewayConfigRequest extends $tea.Model {
  clusterId?: string;
  DBPassword?: string;
  DBServerInfo?: string;
  DBType?: string;
  DBUsername?: string;
  defaultRepoLocation?: string;
  imageExpirationTimeout?: string;
  pullUpdateTimeout?: number;
  repo?: ModifyImageGatewayConfigRequestRepo[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      DBPassword: 'DBPassword',
      DBServerInfo: 'DBServerInfo',
      DBType: 'DBType',
      DBUsername: 'DBUsername',
      defaultRepoLocation: 'DefaultRepoLocation',
      imageExpirationTimeout: 'ImageExpirationTimeout',
      pullUpdateTimeout: 'PullUpdateTimeout',
      repo: 'Repo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      DBPassword: 'string',
      DBServerInfo: 'string',
      DBType: 'string',
      DBUsername: 'string',
      defaultRepoLocation: 'string',
      imageExpirationTimeout: 'string',
      pullUpdateTimeout: 'number',
      repo: { 'type': 'array', 'itemType': ModifyImageGatewayConfigRequestRepo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyImageGatewayConfigResponseBody extends $tea.Model {
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

export class ModifyImageGatewayConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyImageGatewayConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyImageGatewayConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserGroupsRequest extends $tea.Model {
  clusterId?: string;
  user?: ModifyUserGroupsRequestUser[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      user: { 'type': 'array', 'itemType': ModifyUserGroupsRequestUser },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserGroupsResponseBody extends $tea.Model {
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

export class ModifyUserGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyUserGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyUserGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserPasswordsRequest extends $tea.Model {
  clusterId?: string;
  user?: ModifyUserPasswordsRequestUser[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      user: { 'type': 'array', 'itemType': ModifyUserPasswordsRequestUser },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserPasswordsResponseBody extends $tea.Model {
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

export class ModifyUserPasswordsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyUserPasswordsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyUserPasswordsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVisualServicePasswdRequest extends $tea.Model {
  clusterId?: string;
  passwd?: string;
  runasUser?: string;
  runasUserPassword?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      passwd: 'Passwd',
      runasUser: 'RunasUser',
      runasUserPassword: 'RunasUserPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      passwd: 'string',
      runasUser: 'string',
      runasUserPassword: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVisualServicePasswdResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyVisualServicePasswdResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ModifyVisualServicePasswdResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ModifyVisualServicePasswdResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MountNFSRequest extends $tea.Model {
  instanceId?: string;
  mountDir?: string;
  nfsDir?: string;
  protocolType?: string;
  remoteDir?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      mountDir: 'MountDir',
      nfsDir: 'NfsDir',
      protocolType: 'ProtocolType',
      remoteDir: 'RemoteDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      mountDir: 'string',
      nfsDir: 'string',
      protocolType: 'string',
      remoteDir: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MountNFSResponseBody extends $tea.Model {
  invokeId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      invokeId: 'InvokeId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invokeId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MountNFSResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: MountNFSResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: MountNFSResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PullImageRequest extends $tea.Model {
  clusterId?: string;
  containerType?: string;
  imageTag?: string;
  repository?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      containerType: 'ContainerType',
      imageTag: 'ImageTag',
      repository: 'Repository',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      containerType: 'string',
      imageTag: 'string',
      repository: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PullImageResponseBody extends $tea.Model {
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

export class PullImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PullImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PullImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryServicePackAndPriceResponseBody extends $tea.Model {
  chargeAmount?: number;
  currency?: string;
  discountPrice?: number;
  originalAmount?: number;
  originalPrice?: number;
  regionId?: string;
  requestId?: string;
  servicePack?: QueryServicePackAndPriceResponseBodyServicePack;
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      chargeAmount: 'ChargeAmount',
      currency: 'Currency',
      discountPrice: 'DiscountPrice',
      originalAmount: 'OriginalAmount',
      originalPrice: 'OriginalPrice',
      regionId: 'RegionId',
      requestId: 'RequestId',
      servicePack: 'ServicePack',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeAmount: 'number',
      currency: 'string',
      discountPrice: 'number',
      originalAmount: 'number',
      originalPrice: 'number',
      regionId: 'string',
      requestId: 'string',
      servicePack: QueryServicePackAndPriceResponseBodyServicePack,
      tradePrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryServicePackAndPriceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: QueryServicePackAndPriceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: QueryServicePackAndPriceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecoverClusterRequest extends $tea.Model {
  accountType?: string;
  clientVersion?: string;
  clusterId?: string;
  imageId?: string;
  imageOwnerAlias?: string;
  osTag?: string;
  schedulerType?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      clientVersion: 'ClientVersion',
      clusterId: 'ClusterId',
      imageId: 'ImageId',
      imageOwnerAlias: 'ImageOwnerAlias',
      osTag: 'OsTag',
      schedulerType: 'SchedulerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      clientVersion: 'string',
      clusterId: 'string',
      imageId: 'string',
      imageOwnerAlias: 'string',
      osTag: 'string',
      schedulerType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecoverClusterResponseBody extends $tea.Model {
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecoverClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RecoverClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RecoverClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RerunJobsRequest extends $tea.Model {
  clusterId?: string;
  jobs?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      jobs: 'Jobs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      jobs: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RerunJobsResponseBody extends $tea.Model {
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

export class RerunJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RerunJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RerunJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetNodesRequest extends $tea.Model {
  clusterId?: string;
  instance?: ResetNodesRequestInstance[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      instance: { 'type': 'array', 'itemType': ResetNodesRequestInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetNodesResponseBody extends $tea.Model {
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetNodesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ResetNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResetNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCloudMetricProfilingRequest extends $tea.Model {
  clusterId?: string;
  duration?: number;
  freq?: number;
  hostName?: string;
  processId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      duration: 'Duration',
      freq: 'Freq',
      hostName: 'HostName',
      processId: 'ProcessId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      duration: 'number',
      freq: 'number',
      hostName: 'string',
      processId: 'number',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunCloudMetricProfilingResponseBody extends $tea.Model {
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

export class RunCloudMetricProfilingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RunCloudMetricProfilingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RunCloudMetricProfilingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAutoScaleConfigRequest extends $tea.Model {
  clusterId?: string;
  enableAutoGrow?: boolean;
  enableAutoShrink?: boolean;
  excludeNodes?: string;
  extraNodesGrowRatio?: number;
  growIntervalInMinutes?: number;
  growRatio?: number;
  growTimeoutInMinutes?: number;
  imageId?: string;
  maxNodesInCluster?: number;
  queues?: SetAutoScaleConfigRequestQueues[];
  shrinkIdleTimes?: number;
  shrinkIntervalInMinutes?: number;
  spotPriceLimit?: number;
  spotStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      enableAutoGrow: 'EnableAutoGrow',
      enableAutoShrink: 'EnableAutoShrink',
      excludeNodes: 'ExcludeNodes',
      extraNodesGrowRatio: 'ExtraNodesGrowRatio',
      growIntervalInMinutes: 'GrowIntervalInMinutes',
      growRatio: 'GrowRatio',
      growTimeoutInMinutes: 'GrowTimeoutInMinutes',
      imageId: 'ImageId',
      maxNodesInCluster: 'MaxNodesInCluster',
      queues: 'Queues',
      shrinkIdleTimes: 'ShrinkIdleTimes',
      shrinkIntervalInMinutes: 'ShrinkIntervalInMinutes',
      spotPriceLimit: 'SpotPriceLimit',
      spotStrategy: 'SpotStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      enableAutoGrow: 'boolean',
      enableAutoShrink: 'boolean',
      excludeNodes: 'string',
      extraNodesGrowRatio: 'number',
      growIntervalInMinutes: 'number',
      growRatio: 'number',
      growTimeoutInMinutes: 'number',
      imageId: 'string',
      maxNodesInCluster: 'number',
      queues: { 'type': 'array', 'itemType': SetAutoScaleConfigRequestQueues },
      shrinkIdleTimes: 'number',
      shrinkIntervalInMinutes: 'number',
      spotPriceLimit: 'number',
      spotStrategy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAutoScaleConfigResponseBody extends $tea.Model {
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

export class SetAutoScaleConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetAutoScaleConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetAutoScaleConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGWSClusterPolicyRequest extends $tea.Model {
  asyncMode?: boolean;
  clipboard?: string;
  clusterId?: string;
  localDrive?: string;
  udpPort?: string;
  usbRedirect?: string;
  watermark?: string;
  static names(): { [key: string]: string } {
    return {
      asyncMode: 'AsyncMode',
      clipboard: 'Clipboard',
      clusterId: 'ClusterId',
      localDrive: 'LocalDrive',
      udpPort: 'UdpPort',
      usbRedirect: 'UsbRedirect',
      watermark: 'Watermark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncMode: 'boolean',
      clipboard: 'string',
      clusterId: 'string',
      localDrive: 'string',
      udpPort: 'string',
      usbRedirect: 'string',
      watermark: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGWSClusterPolicyResponseBody extends $tea.Model {
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

export class SetGWSClusterPolicyResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetGWSClusterPolicyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetGWSClusterPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGWSInstanceNameRequest extends $tea.Model {
  instanceId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGWSInstanceNameResponseBody extends $tea.Model {
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

export class SetGWSInstanceNameResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetGWSInstanceNameResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetGWSInstanceNameResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGWSInstanceUserRequest extends $tea.Model {
  instanceId?: string;
  userName?: string;
  userUid?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      userName: 'UserName',
      userUid: 'UserUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      userName: 'string',
      userUid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetGWSInstanceUserResponseBody extends $tea.Model {
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

export class SetGWSInstanceUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetGWSInstanceUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetGWSInstanceUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPostScriptsRequest extends $tea.Model {
  clusterId?: string;
  postInstallScripts?: SetPostScriptsRequestPostInstallScripts[];
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      postInstallScripts: 'PostInstallScripts',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      postInstallScripts: { 'type': 'array', 'itemType': SetPostScriptsRequestPostInstallScripts },
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPostScriptsResponseBody extends $tea.Model {
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

export class SetPostScriptsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetPostScriptsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetPostScriptsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetQueueRequest extends $tea.Model {
  clusterId?: string;
  node?: SetQueueRequestNode[];
  queueName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      node: 'Node',
      queueName: 'QueueName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      node: { 'type': 'array', 'itemType': SetQueueRequestNode },
      queueName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetQueueResponseBody extends $tea.Model {
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

export class SetQueueResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetQueueResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetQueueResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSchedulerInfoRequest extends $tea.Model {
  clusterId?: string;
  pbsInfo?: SetSchedulerInfoRequestPbsInfo[];
  regionId?: string;
  scheduler?: SetSchedulerInfoRequestScheduler[];
  slurmInfo?: SetSchedulerInfoRequestSlurmInfo[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      pbsInfo: 'PbsInfo',
      regionId: 'RegionId',
      scheduler: 'Scheduler',
      slurmInfo: 'SlurmInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      pbsInfo: { 'type': 'array', 'itemType': SetSchedulerInfoRequestPbsInfo },
      regionId: 'string',
      scheduler: { 'type': 'array', 'itemType': SetSchedulerInfoRequestScheduler },
      slurmInfo: { 'type': 'array', 'itemType': SetSchedulerInfoRequestSlurmInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSchedulerInfoResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSchedulerInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SetSchedulerInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SetSchedulerInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartClusterRequest extends $tea.Model {
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

export class StartClusterResponseBody extends $tea.Model {
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartGWSInstanceRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartGWSInstanceResponseBody extends $tea.Model {
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

export class StartGWSInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartGWSInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartGWSInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartNodesRequest extends $tea.Model {
  clusterId?: string;
  instance?: StartNodesRequestInstance[];
  role?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      instance: 'Instance',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      instance: { 'type': 'array', 'itemType': StartNodesRequestInstance },
      role: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartNodesResponseBody extends $tea.Model {
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartNodesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartVisualServiceRequest extends $tea.Model {
  cidrIp?: string;
  clusterId?: string;
  port?: number;
  static names(): { [key: string]: string } {
    return {
      cidrIp: 'CidrIp',
      clusterId: 'ClusterId',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrIp: 'string',
      clusterId: 'string',
      port: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartVisualServiceResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartVisualServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartVisualServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartVisualServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopClusterRequest extends $tea.Model {
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

export class StopClusterResponseBody extends $tea.Model {
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopGWSInstanceRequest extends $tea.Model {
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopGWSInstanceResponseBody extends $tea.Model {
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

export class StopGWSInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopGWSInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopGWSInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopJobsRequest extends $tea.Model {
  clusterId?: string;
  jobs?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      jobs: 'Jobs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      jobs: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopJobsResponseBody extends $tea.Model {
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

export class StopJobsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopJobsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopJobsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopNodesRequest extends $tea.Model {
  clusterId?: string;
  instance?: StopNodesRequestInstance[];
  role?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      instance: 'Instance',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      instance: { 'type': 'array', 'itemType': StopNodesRequestInstance },
      role: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopNodesResponseBody extends $tea.Model {
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopNodesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopVisualServiceRequest extends $tea.Model {
  cidrIp?: string;
  clusterId?: string;
  port?: number;
  static names(): { [key: string]: string } {
    return {
      cidrIp: 'CidrIp',
      clusterId: 'ClusterId',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrIp: 'string',
      clusterId: 'string',
      port: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopVisualServiceResponseBody extends $tea.Model {
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopVisualServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopVisualServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopVisualServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobRequest extends $tea.Model {
  arrayRequest?: string;
  clockTime?: string;
  clusterId?: string;
  commandLine?: string;
  containerId?: string;
  gpu?: number;
  inputFileUrl?: string;
  jobQueue?: string;
  mem?: string;
  name?: string;
  node?: number;
  packagePath?: string;
  postCmdLine?: string;
  priority?: number;
  reRunable?: boolean;
  runasUser?: string;
  runasUserPassword?: string;
  stderrRedirectPath?: string;
  stdoutRedirectPath?: string;
  task?: number;
  thread?: number;
  unzipCmd?: string;
  variables?: string;
  static names(): { [key: string]: string } {
    return {
      arrayRequest: 'ArrayRequest',
      clockTime: 'ClockTime',
      clusterId: 'ClusterId',
      commandLine: 'CommandLine',
      containerId: 'ContainerId',
      gpu: 'Gpu',
      inputFileUrl: 'InputFileUrl',
      jobQueue: 'JobQueue',
      mem: 'Mem',
      name: 'Name',
      node: 'Node',
      packagePath: 'PackagePath',
      postCmdLine: 'PostCmdLine',
      priority: 'Priority',
      reRunable: 'ReRunable',
      runasUser: 'RunasUser',
      runasUserPassword: 'RunasUserPassword',
      stderrRedirectPath: 'StderrRedirectPath',
      stdoutRedirectPath: 'StdoutRedirectPath',
      task: 'Task',
      thread: 'Thread',
      unzipCmd: 'UnzipCmd',
      variables: 'Variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayRequest: 'string',
      clockTime: 'string',
      clusterId: 'string',
      commandLine: 'string',
      containerId: 'string',
      gpu: 'number',
      inputFileUrl: 'string',
      jobQueue: 'string',
      mem: 'string',
      name: 'string',
      node: 'number',
      packagePath: 'string',
      postCmdLine: 'string',
      priority: 'number',
      reRunable: 'boolean',
      runasUser: 'string',
      runasUserPassword: 'string',
      stderrRedirectPath: 'string',
      stdoutRedirectPath: 'string',
      task: 'number',
      thread: 'number',
      unzipCmd: 'string',
      variables: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobResponseBody extends $tea.Model {
  jobId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SubmitJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SubmitJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncUsersRequest extends $tea.Model {
  clusterId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SyncUsersResponseBody extends $tea.Model {
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

export class SyncUsersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SyncUsersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SyncUsersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallSoftwareRequest extends $tea.Model {
  application?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      application: 'Application',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      application: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UninstallSoftwareResponseBody extends $tea.Model {
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

export class UninstallSoftwareResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UninstallSoftwareResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UninstallSoftwareResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClusterVolumesRequest extends $tea.Model {
  additionalVolumes?: UpdateClusterVolumesRequestAdditionalVolumes[];
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      additionalVolumes: 'AdditionalVolumes',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalVolumes: { 'type': 'array', 'itemType': UpdateClusterVolumesRequestAdditionalVolumes },
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClusterVolumesResponseBody extends $tea.Model {
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

export class UpdateClusterVolumesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateClusterVolumesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateClusterVolumesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQueueConfigRequest extends $tea.Model {
  clusterId?: string;
  computeInstanceType?: string;
  queueName?: string;
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      computeInstanceType: 'ComputeInstanceType',
      queueName: 'QueueName',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      computeInstanceType: 'string',
      queueName: 'string',
      resourceGroupId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQueueConfigResponseBody extends $tea.Model {
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

export class UpdateQueueConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateQueueConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateQueueConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeClientRequest extends $tea.Model {
  clientVersion?: string;
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clientVersion: 'ClientVersion',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientVersion: 'string',
      clusterId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeClientResponseBody extends $tea.Model {
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

export class UpgradeClientResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpgradeClientResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpgradeClientResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddContainerAppResponseBodyContainerId extends $tea.Model {
  containerId?: string[];
  static names(): { [key: string]: string } {
    return {
      containerId: 'ContainerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddExistedNodesRequestInstance extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddLocalNodesResponseBodyInstanceIds extends $tea.Model {
  instanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddNodesRequestDataDisks extends $tea.Model {
  dataDiskCategory?: string;
  dataDiskDeleteWithInstance?: boolean;
  dataDiskEncrypted?: boolean;
  dataDiskKMSKeyId?: string;
  dataDiskPerformanceLevel?: string;
  dataDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      dataDiskCategory: 'DataDiskCategory',
      dataDiskDeleteWithInstance: 'DataDiskDeleteWithInstance',
      dataDiskEncrypted: 'DataDiskEncrypted',
      dataDiskKMSKeyId: 'DataDiskKMSKeyId',
      dataDiskPerformanceLevel: 'DataDiskPerformanceLevel',
      dataDiskSize: 'DataDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDiskCategory: 'string',
      dataDiskDeleteWithInstance: 'boolean',
      dataDiskEncrypted: 'boolean',
      dataDiskKMSKeyId: 'string',
      dataDiskPerformanceLevel: 'string',
      dataDiskSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddNodesResponseBodyInstanceIds extends $tea.Model {
  instanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddUsersRequestUser extends $tea.Model {
  group?: string;
  name?: string;
  password?: string;
  static names(): { [key: string]: string } {
    return {
      group: 'Group',
      name: 'Name',
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: 'string',
      name: 'string',
      password: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyNodesRequestInstanceTypeModel extends $tea.Model {
  instanceType?: string;
  maxPrice?: number;
  targetImageId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      maxPrice: 'MaxPrice',
      targetImageId: 'TargetImageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      maxPrice: 'number',
      targetImageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyNodesRequestTag extends $tea.Model {
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

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyNodesRequestZoneInfos extends $tea.Model {
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ApplyNodesResponseBodyInstanceIds extends $tea.Model {
  instanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestEcsOrderCompute extends $tea.Model {
  count?: number;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestEcsOrderLogin extends $tea.Model {
  count?: number;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestEcsOrderManager extends $tea.Model {
  count?: number;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestEcsOrder extends $tea.Model {
  compute: CreateClusterRequestEcsOrderCompute;
  login: CreateClusterRequestEcsOrderLogin;
  manager: CreateClusterRequestEcsOrderManager;
  static names(): { [key: string]: string } {
    return {
      compute: 'Compute',
      login: 'Login',
      manager: 'Manager',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compute: CreateClusterRequestEcsOrderCompute,
      login: CreateClusterRequestEcsOrderLogin,
      manager: CreateClusterRequestEcsOrderManager,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestAdditionalVolumesRoles extends $tea.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestAdditionalVolumes extends $tea.Model {
  jobQueue?: string;
  localDirectory?: string;
  location?: string;
  remoteDirectory?: string;
  roles?: CreateClusterRequestAdditionalVolumesRoles[];
  volumeId?: string;
  volumeMountOption?: string;
  volumeMountpoint?: string;
  volumeProtocol?: string;
  volumeType?: string;
  static names(): { [key: string]: string } {
    return {
      jobQueue: 'JobQueue',
      localDirectory: 'LocalDirectory',
      location: 'Location',
      remoteDirectory: 'RemoteDirectory',
      roles: 'Roles',
      volumeId: 'VolumeId',
      volumeMountOption: 'VolumeMountOption',
      volumeMountpoint: 'VolumeMountpoint',
      volumeProtocol: 'VolumeProtocol',
      volumeType: 'VolumeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobQueue: 'string',
      localDirectory: 'string',
      location: 'string',
      remoteDirectory: 'string',
      roles: { 'type': 'array', 'itemType': CreateClusterRequestAdditionalVolumesRoles },
      volumeId: 'string',
      volumeMountOption: 'string',
      volumeMountpoint: 'string',
      volumeProtocol: 'string',
      volumeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestApplication extends $tea.Model {
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateClusterRequestPostInstallScript extends $tea.Model {
  args?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'Args',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHybridClusterRequestEcsOrderCompute extends $tea.Model {
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHybridClusterRequestEcsOrder extends $tea.Model {
  compute: CreateHybridClusterRequestEcsOrderCompute;
  static names(): { [key: string]: string } {
    return {
      compute: 'Compute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compute: CreateHybridClusterRequestEcsOrderCompute,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHybridClusterRequestApplication extends $tea.Model {
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHybridClusterRequestNodes extends $tea.Model {
  accountType?: string;
  dir?: string;
  hostName?: string;
  ipAddress?: string;
  role?: string;
  schedulerType?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      dir: 'Dir',
      hostName: 'HostName',
      ipAddress: 'IpAddress',
      role: 'Role',
      schedulerType: 'SchedulerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      dir: 'string',
      hostName: 'string',
      ipAddress: 'string',
      role: 'string',
      schedulerType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateHybridClusterRequestPostInstallScript extends $tea.Model {
  args?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'Args',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteContainerAppsRequestContainerApp extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteNodesRequestInstance extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteUsersRequestUser extends $tea.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBodyClusterInfoApplicationsApplicationInfo extends $tea.Model {
  name?: string;
  tag?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      tag: 'Tag',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      tag: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBodyClusterInfoApplications extends $tea.Model {
  applicationInfo?: DescribeClusterResponseBodyClusterInfoApplicationsApplicationInfo[];
  static names(): { [key: string]: string } {
    return {
      applicationInfo: 'ApplicationInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationInfo: { 'type': 'array', 'itemType': DescribeClusterResponseBodyClusterInfoApplicationsApplicationInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBodyClusterInfoEcsInfoCompute extends $tea.Model {
  count?: number;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBodyClusterInfoEcsInfoLogin extends $tea.Model {
  count?: number;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBodyClusterInfoEcsInfoManager extends $tea.Model {
  count?: number;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBodyClusterInfoEcsInfoProxyMgr extends $tea.Model {
  count?: number;
  instanceType?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      instanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBodyClusterInfoEcsInfo extends $tea.Model {
  compute?: DescribeClusterResponseBodyClusterInfoEcsInfoCompute;
  login?: DescribeClusterResponseBodyClusterInfoEcsInfoLogin;
  manager?: DescribeClusterResponseBodyClusterInfoEcsInfoManager;
  proxyMgr?: DescribeClusterResponseBodyClusterInfoEcsInfoProxyMgr;
  static names(): { [key: string]: string } {
    return {
      compute: 'Compute',
      login: 'Login',
      manager: 'Manager',
      proxyMgr: 'ProxyMgr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compute: DescribeClusterResponseBodyClusterInfoEcsInfoCompute,
      login: DescribeClusterResponseBodyClusterInfoEcsInfoLogin,
      manager: DescribeClusterResponseBodyClusterInfoEcsInfoManager,
      proxyMgr: DescribeClusterResponseBodyClusterInfoEcsInfoProxyMgr,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBodyClusterInfoOnPremiseInfoOnPremiseInfo extends $tea.Model {
  hostName?: string;
  IP?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      hostName: 'HostName',
      IP: 'IP',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostName: 'string',
      IP: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBodyClusterInfoOnPremiseInfo extends $tea.Model {
  onPremiseInfo?: DescribeClusterResponseBodyClusterInfoOnPremiseInfoOnPremiseInfo[];
  static names(): { [key: string]: string } {
    return {
      onPremiseInfo: 'OnPremiseInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onPremiseInfo: { 'type': 'array', 'itemType': DescribeClusterResponseBodyClusterInfoOnPremiseInfoOnPremiseInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBodyClusterInfoPostInstallScriptsPostInstallScriptInfo extends $tea.Model {
  args?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'Args',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBodyClusterInfoPostInstallScripts extends $tea.Model {
  postInstallScriptInfo?: DescribeClusterResponseBodyClusterInfoPostInstallScriptsPostInstallScriptInfo[];
  static names(): { [key: string]: string } {
    return {
      postInstallScriptInfo: 'PostInstallScriptInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      postInstallScriptInfo: { 'type': 'array', 'itemType': DescribeClusterResponseBodyClusterInfoPostInstallScriptsPostInstallScriptInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClusterResponseBodyClusterInfo extends $tea.Model {
  accountType?: string;
  applications?: DescribeClusterResponseBodyClusterInfoApplications;
  baseOsTag?: string;
  clientVersion?: string;
  createTime?: string;
  deployMode?: string;
  description?: string;
  ecsChargeType?: string;
  ecsInfo?: DescribeClusterResponseBodyClusterInfoEcsInfo;
  haEnable?: boolean;
  id?: string;
  imageId?: string;
  imageName?: string;
  imageOwnerAlias?: string;
  keyPairName?: string;
  location?: string;
  name?: string;
  onPremiseInfo?: DescribeClusterResponseBodyClusterInfoOnPremiseInfo;
  osTag?: string;
  postInstallScripts?: DescribeClusterResponseBodyClusterInfoPostInstallScripts;
  regionId?: string;
  remoteDirectory?: string;
  sccClusterId?: string;
  schedulerType?: string;
  securityGroupId?: string;
  status?: string;
  vSwitchId?: string;
  volumeId?: string;
  volumeMountpoint?: string;
  volumeProtocol?: string;
  volumeType?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      applications: 'Applications',
      baseOsTag: 'BaseOsTag',
      clientVersion: 'ClientVersion',
      createTime: 'CreateTime',
      deployMode: 'DeployMode',
      description: 'Description',
      ecsChargeType: 'EcsChargeType',
      ecsInfo: 'EcsInfo',
      haEnable: 'HaEnable',
      id: 'Id',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageOwnerAlias: 'ImageOwnerAlias',
      keyPairName: 'KeyPairName',
      location: 'Location',
      name: 'Name',
      onPremiseInfo: 'OnPremiseInfo',
      osTag: 'OsTag',
      postInstallScripts: 'PostInstallScripts',
      regionId: 'RegionId',
      remoteDirectory: 'RemoteDirectory',
      sccClusterId: 'SccClusterId',
      schedulerType: 'SchedulerType',
      securityGroupId: 'SecurityGroupId',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      volumeId: 'VolumeId',
      volumeMountpoint: 'VolumeMountpoint',
      volumeProtocol: 'VolumeProtocol',
      volumeType: 'VolumeType',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      applications: DescribeClusterResponseBodyClusterInfoApplications,
      baseOsTag: 'string',
      clientVersion: 'string',
      createTime: 'string',
      deployMode: 'string',
      description: 'string',
      ecsChargeType: 'string',
      ecsInfo: DescribeClusterResponseBodyClusterInfoEcsInfo,
      haEnable: 'boolean',
      id: 'string',
      imageId: 'string',
      imageName: 'string',
      imageOwnerAlias: 'string',
      keyPairName: 'string',
      location: 'string',
      name: 'string',
      onPremiseInfo: DescribeClusterResponseBodyClusterInfoOnPremiseInfo,
      osTag: 'string',
      postInstallScripts: DescribeClusterResponseBodyClusterInfoPostInstallScripts,
      regionId: 'string',
      remoteDirectory: 'string',
      sccClusterId: 'string',
      schedulerType: 'string',
      securityGroupId: 'string',
      status: 'string',
      vSwitchId: 'string',
      volumeId: 'string',
      volumeMountpoint: 'string',
      volumeProtocol: 'string',
      volumeType: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeContainerAppResponseBodyContainerAppInfo extends $tea.Model {
  createTime?: string;
  description?: string;
  id?: string;
  imageTag?: string;
  name?: string;
  repository?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      id: 'Id',
      imageTag: 'ImageTag',
      name: 'Name',
      repository: 'Repository',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      id: 'string',
      imageTag: 'string',
      name: 'string',
      repository: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGWSClustersResponseBodyClustersClusterInfo extends $tea.Model {
  clusterId?: string;
  createTime?: string;
  instanceCount?: number;
  status?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      createTime: 'CreateTime',
      instanceCount: 'InstanceCount',
      status: 'Status',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      createTime: 'string',
      instanceCount: 'number',
      status: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGWSClustersResponseBodyClusters extends $tea.Model {
  clusterInfo?: DescribeGWSClustersResponseBodyClustersClusterInfo[];
  static names(): { [key: string]: string } {
    return {
      clusterInfo: 'ClusterInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterInfo: { 'type': 'array', 'itemType': DescribeGWSClustersResponseBodyClustersClusterInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGWSImagesResponseBodyImagesImageInfo extends $tea.Model {
  createTime?: string;
  imageId?: string;
  imageType?: string;
  name?: string;
  progress?: string;
  size?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      imageId: 'ImageId',
      imageType: 'ImageType',
      name: 'Name',
      progress: 'Progress',
      size: 'Size',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      imageId: 'string',
      imageType: 'string',
      name: 'string',
      progress: 'string',
      size: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGWSImagesResponseBodyImages extends $tea.Model {
  imageInfo?: DescribeGWSImagesResponseBodyImagesImageInfo[];
  static names(): { [key: string]: string } {
    return {
      imageInfo: 'ImageInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageInfo: { 'type': 'array', 'itemType': DescribeGWSImagesResponseBodyImagesImageInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGWSInstancesResponseBodyInstancesInstanceInfoAppListAppInfo extends $tea.Model {
  appArgs?: string;
  appName?: string;
  appPath?: string;
  static names(): { [key: string]: string } {
    return {
      appArgs: 'AppArgs',
      appName: 'AppName',
      appPath: 'AppPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appArgs: 'string',
      appName: 'string',
      appPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGWSInstancesResponseBodyInstancesInstanceInfoAppList extends $tea.Model {
  appInfo?: DescribeGWSInstancesResponseBodyInstancesInstanceInfoAppListAppInfo[];
  static names(): { [key: string]: string } {
    return {
      appInfo: 'AppInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInfo: { 'type': 'array', 'itemType': DescribeGWSInstancesResponseBodyInstancesInstanceInfoAppListAppInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGWSInstancesResponseBodyInstancesInstanceInfo extends $tea.Model {
  appList?: DescribeGWSInstancesResponseBodyInstancesInstanceInfoAppList;
  clusterId?: string;
  createTime?: string;
  expireTime?: string;
  instanceId?: string;
  instanceType?: string;
  name?: string;
  status?: string;
  userName?: string;
  workMode?: string;
  static names(): { [key: string]: string } {
    return {
      appList: 'AppList',
      clusterId: 'ClusterId',
      createTime: 'CreateTime',
      expireTime: 'ExpireTime',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      name: 'Name',
      status: 'Status',
      userName: 'UserName',
      workMode: 'WorkMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appList: DescribeGWSInstancesResponseBodyInstancesInstanceInfoAppList,
      clusterId: 'string',
      createTime: 'string',
      expireTime: 'string',
      instanceId: 'string',
      instanceType: 'string',
      name: 'string',
      status: 'string',
      userName: 'string',
      workMode: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGWSInstancesResponseBodyInstances extends $tea.Model {
  instanceInfo?: DescribeGWSInstancesResponseBodyInstancesInstanceInfo[];
  static names(): { [key: string]: string } {
    return {
      instanceInfo: 'InstanceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceInfo: { 'type': 'array', 'itemType': DescribeGWSInstancesResponseBodyInstancesInstanceInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageResponseBodyImageInfo extends $tea.Model {
  imageId?: string;
  repository?: string;
  status?: string;
  system?: string;
  tag?: string;
  type?: string;
  updateDateTime?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      repository: 'Repository',
      status: 'Status',
      system: 'System',
      tag: 'Tag',
      type: 'Type',
      updateDateTime: 'UpdateDateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      repository: 'string',
      status: 'string',
      system: 'string',
      tag: 'string',
      type: 'string',
      updateDateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageGatewayConfigResponseBodyImagegwLocationsLocationInfo extends $tea.Model {
  authentication?: string;
  location?: string;
  remoteType?: string;
  URL?: string;
  static names(): { [key: string]: string } {
    return {
      authentication: 'Authentication',
      location: 'Location',
      remoteType: 'RemoteType',
      URL: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authentication: 'string',
      location: 'string',
      remoteType: 'string',
      URL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageGatewayConfigResponseBodyImagegwLocations extends $tea.Model {
  locationInfo?: DescribeImageGatewayConfigResponseBodyImagegwLocationsLocationInfo[];
  static names(): { [key: string]: string } {
    return {
      locationInfo: 'LocationInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      locationInfo: { 'type': 'array', 'itemType': DescribeImageGatewayConfigResponseBodyImagegwLocationsLocationInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageGatewayConfigResponseBodyImagegw extends $tea.Model {
  defaultImageLocation?: string;
  imageExpirationTimeout?: string;
  locations?: DescribeImageGatewayConfigResponseBodyImagegwLocations;
  mongoDBURI?: string;
  pullUpdateTimeout?: number;
  updateDateTime?: string;
  static names(): { [key: string]: string } {
    return {
      defaultImageLocation: 'DefaultImageLocation',
      imageExpirationTimeout: 'ImageExpirationTimeout',
      locations: 'Locations',
      mongoDBURI: 'MongoDBURI',
      pullUpdateTimeout: 'PullUpdateTimeout',
      updateDateTime: 'UpdateDateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultImageLocation: 'string',
      imageExpirationTimeout: 'string',
      locations: DescribeImageGatewayConfigResponseBodyImagegwLocations,
      mongoDBURI: 'string',
      pullUpdateTimeout: 'number',
      updateDateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeJobResponseBodyMessage extends $tea.Model {
  jobInfo?: string;
  static names(): { [key: string]: string } {
    return {
      jobInfo: 'JobInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobInfo: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNFSClientStatusResponseBodyResult extends $tea.Model {
  exitCode?: number;
  invokeRecordStatus?: string;
  output?: string;
  static names(): { [key: string]: string } {
    return {
      exitCode: 'ExitCode',
      invokeRecordStatus: 'InvokeRecordStatus',
      output: 'Output',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exitCode: 'number',
      invokeRecordStatus: 'string',
      output: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceRequestCommoditiesDataDisks extends $tea.Model {
  category?: string;
  deleteWithInstance?: boolean;
  encrypted?: boolean;
  performanceLevel?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      deleteWithInstance: 'deleteWithInstance',
      encrypted: 'encrypted',
      performanceLevel: 'performanceLevel',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      deleteWithInstance: 'boolean',
      encrypted: 'boolean',
      performanceLevel: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceRequestCommodities extends $tea.Model {
  amount?: number;
  dataDisks?: DescribePriceRequestCommoditiesDataDisks[];
  instanceType?: string;
  internetChargeType?: string;
  internetMaxBandWidthOut?: number;
  networkType?: string;
  nodeType?: string;
  period?: number;
  systemDiskCategory?: string;
  systemDiskPerformanceLevel?: string;
  systemDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      dataDisks: 'DataDisks',
      instanceType: 'InstanceType',
      internetChargeType: 'InternetChargeType',
      internetMaxBandWidthOut: 'InternetMaxBandWidthOut',
      networkType: 'NetworkType',
      nodeType: 'NodeType',
      period: 'Period',
      systemDiskCategory: 'SystemDiskCategory',
      systemDiskPerformanceLevel: 'SystemDiskPerformanceLevel',
      systemDiskSize: 'SystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      dataDisks: { 'type': 'array', 'itemType': DescribePriceRequestCommoditiesDataDisks },
      instanceType: 'string',
      internetChargeType: 'string',
      internetMaxBandWidthOut: 'number',
      networkType: 'string',
      nodeType: 'string',
      period: 'number',
      systemDiskCategory: 'string',
      systemDiskPerformanceLevel: 'string',
      systemDiskSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyPricesPriceInfo extends $tea.Model {
  currency?: string;
  nodeType?: string;
  originalPrice?: number;
  tradePrice?: number;
  static names(): { [key: string]: string } {
    return {
      currency: 'Currency',
      nodeType: 'NodeType',
      originalPrice: 'OriginalPrice',
      tradePrice: 'TradePrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currency: 'string',
      nodeType: 'string',
      originalPrice: 'number',
      tradePrice: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePriceResponseBodyPrices extends $tea.Model {
  priceInfo?: DescribePriceResponseBodyPricesPriceInfo[];
  static names(): { [key: string]: string } {
    return {
      priceInfo: 'PriceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      priceInfo: { 'type': 'array', 'itemType': DescribePriceResponseBodyPricesPriceInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountingReportResponseBodyData extends $tea.Model {
  data?: string[];
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoScaleConfigResponseBodyQueuesQueueInfoDataDisksDataDisksInfo extends $tea.Model {
  dataDiskCategory?: string;
  dataDiskDeleteWithInstance?: boolean;
  dataDiskEncrypted?: boolean;
  dataDiskKMSKeyId?: string;
  dataDiskPerformanceLevel?: string;
  dataDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      dataDiskCategory: 'DataDiskCategory',
      dataDiskDeleteWithInstance: 'DataDiskDeleteWithInstance',
      dataDiskEncrypted: 'DataDiskEncrypted',
      dataDiskKMSKeyId: 'DataDiskKMSKeyId',
      dataDiskPerformanceLevel: 'DataDiskPerformanceLevel',
      dataDiskSize: 'DataDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDiskCategory: 'string',
      dataDiskDeleteWithInstance: 'boolean',
      dataDiskEncrypted: 'boolean',
      dataDiskKMSKeyId: 'string',
      dataDiskPerformanceLevel: 'string',
      dataDiskSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoScaleConfigResponseBodyQueuesQueueInfoDataDisks extends $tea.Model {
  dataDisksInfo?: GetAutoScaleConfigResponseBodyQueuesQueueInfoDataDisksDataDisksInfo[];
  static names(): { [key: string]: string } {
    return {
      dataDisksInfo: 'DataDisksInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDisksInfo: { 'type': 'array', 'itemType': GetAutoScaleConfigResponseBodyQueuesQueueInfoDataDisksDataDisksInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoScaleConfigResponseBodyQueuesQueueInfoInstanceTypesInstanceTypeInfo extends $tea.Model {
  hostNamePrefix?: string;
  instanceType?: string;
  spotPriceLimit?: number;
  spotStrategy?: string;
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      hostNamePrefix: 'HostNamePrefix',
      instanceType: 'InstanceType',
      spotPriceLimit: 'SpotPriceLimit',
      spotStrategy: 'SpotStrategy',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostNamePrefix: 'string',
      instanceType: 'string',
      spotPriceLimit: 'number',
      spotStrategy: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoScaleConfigResponseBodyQueuesQueueInfoInstanceTypes extends $tea.Model {
  instanceTypeInfo?: GetAutoScaleConfigResponseBodyQueuesQueueInfoInstanceTypesInstanceTypeInfo[];
  static names(): { [key: string]: string } {
    return {
      instanceTypeInfo: 'InstanceTypeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypeInfo: { 'type': 'array', 'itemType': GetAutoScaleConfigResponseBodyQueuesQueueInfoInstanceTypesInstanceTypeInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoScaleConfigResponseBodyQueuesQueueInfo extends $tea.Model {
  dataDisks?: GetAutoScaleConfigResponseBodyQueuesQueueInfoDataDisks;
  enableAutoGrow?: boolean;
  enableAutoShrink?: boolean;
  hostNamePrefix?: string;
  hostNameSuffix?: string;
  instanceType?: string;
  instanceTypes?: GetAutoScaleConfigResponseBodyQueuesQueueInfoInstanceTypes;
  maxNodesInQueue?: number;
  maxNodesPerCycle?: number;
  minNodesInQueue?: number;
  minNodesPerCycle?: number;
  queueImageId?: string;
  queueName?: string;
  resourceGroupId?: string;
  spotPriceLimit?: number;
  spotStrategy?: string;
  systemDiskCategory?: string;
  systemDiskLevel?: string;
  systemDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      dataDisks: 'DataDisks',
      enableAutoGrow: 'EnableAutoGrow',
      enableAutoShrink: 'EnableAutoShrink',
      hostNamePrefix: 'HostNamePrefix',
      hostNameSuffix: 'HostNameSuffix',
      instanceType: 'InstanceType',
      instanceTypes: 'InstanceTypes',
      maxNodesInQueue: 'MaxNodesInQueue',
      maxNodesPerCycle: 'MaxNodesPerCycle',
      minNodesInQueue: 'MinNodesInQueue',
      minNodesPerCycle: 'MinNodesPerCycle',
      queueImageId: 'QueueImageId',
      queueName: 'QueueName',
      resourceGroupId: 'ResourceGroupId',
      spotPriceLimit: 'SpotPriceLimit',
      spotStrategy: 'SpotStrategy',
      systemDiskCategory: 'SystemDiskCategory',
      systemDiskLevel: 'SystemDiskLevel',
      systemDiskSize: 'SystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDisks: GetAutoScaleConfigResponseBodyQueuesQueueInfoDataDisks,
      enableAutoGrow: 'boolean',
      enableAutoShrink: 'boolean',
      hostNamePrefix: 'string',
      hostNameSuffix: 'string',
      instanceType: 'string',
      instanceTypes: GetAutoScaleConfigResponseBodyQueuesQueueInfoInstanceTypes,
      maxNodesInQueue: 'number',
      maxNodesPerCycle: 'number',
      minNodesInQueue: 'number',
      minNodesPerCycle: 'number',
      queueImageId: 'string',
      queueName: 'string',
      resourceGroupId: 'string',
      spotPriceLimit: 'number',
      spotStrategy: 'string',
      systemDiskCategory: 'string',
      systemDiskLevel: 'string',
      systemDiskSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAutoScaleConfigResponseBodyQueues extends $tea.Model {
  queueInfo?: GetAutoScaleConfigResponseBodyQueuesQueueInfo[];
  static names(): { [key: string]: string } {
    return {
      queueInfo: 'QueueInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queueInfo: { 'type': 'array', 'itemType': GetAutoScaleConfigResponseBodyQueuesQueueInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudMetricLogsResponseBodyMetricLogsMetricLog extends $tea.Model {
  diskDevice?: string;
  hostname?: string;
  instanceId?: string;
  metricData?: string;
  networkInterface?: string;
  time?: number;
  static names(): { [key: string]: string } {
    return {
      diskDevice: 'DiskDevice',
      hostname: 'Hostname',
      instanceId: 'InstanceId',
      metricData: 'MetricData',
      networkInterface: 'NetworkInterface',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskDevice: 'string',
      hostname: 'string',
      instanceId: 'string',
      metricData: 'string',
      networkInterface: 'string',
      time: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudMetricLogsResponseBodyMetricLogs extends $tea.Model {
  metricLog?: GetCloudMetricLogsResponseBodyMetricLogsMetricLog[];
  static names(): { [key: string]: string } {
    return {
      metricLog: 'MetricLog',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricLog: { 'type': 'array', 'itemType': GetCloudMetricLogsResponseBodyMetricLogsMetricLog },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudMetricProfilingResponseBodySvgUrlsSvgInfo extends $tea.Model {
  name?: string;
  size?: number;
  type?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      size: 'Size',
      type: 'Type',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      size: 'number',
      type: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCloudMetricProfilingResponseBodySvgUrls extends $tea.Model {
  svgInfo?: GetCloudMetricProfilingResponseBodySvgUrlsSvgInfo[];
  static names(): { [key: string]: string } {
    return {
      svgInfo: 'SvgInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      svgInfo: { 'type': 'array', 'itemType': GetCloudMetricProfilingResponseBodySvgUrlsSvgInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterVolumesResponseBodyVolumesVolumeInfoRolesRoleInfo extends $tea.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterVolumesResponseBodyVolumesVolumeInfoRoles extends $tea.Model {
  roleInfo?: GetClusterVolumesResponseBodyVolumesVolumeInfoRolesRoleInfo[];
  static names(): { [key: string]: string } {
    return {
      roleInfo: 'RoleInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleInfo: { 'type': 'array', 'itemType': GetClusterVolumesResponseBodyVolumesVolumeInfoRolesRoleInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterVolumesResponseBodyVolumesVolumeInfo extends $tea.Model {
  jobQueue?: string;
  localDirectory?: string;
  location?: string;
  mustKeep?: boolean;
  remoteDirectory?: string;
  roles?: GetClusterVolumesResponseBodyVolumesVolumeInfoRoles;
  volumeId?: string;
  volumeMountpoint?: string;
  volumeProtocol?: string;
  volumeType?: string;
  static names(): { [key: string]: string } {
    return {
      jobQueue: 'JobQueue',
      localDirectory: 'LocalDirectory',
      location: 'Location',
      mustKeep: 'MustKeep',
      remoteDirectory: 'RemoteDirectory',
      roles: 'Roles',
      volumeId: 'VolumeId',
      volumeMountpoint: 'VolumeMountpoint',
      volumeProtocol: 'VolumeProtocol',
      volumeType: 'VolumeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobQueue: 'string',
      localDirectory: 'string',
      location: 'string',
      mustKeep: 'boolean',
      remoteDirectory: 'string',
      roles: GetClusterVolumesResponseBodyVolumesVolumeInfoRoles,
      volumeId: 'string',
      volumeMountpoint: 'string',
      volumeProtocol: 'string',
      volumeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterVolumesResponseBodyVolumes extends $tea.Model {
  volumeInfo?: GetClusterVolumesResponseBodyVolumesVolumeInfo[];
  static names(): { [key: string]: string } {
    return {
      volumeInfo: 'VolumeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      volumeInfo: { 'type': 'array', 'itemType': GetClusterVolumesResponseBodyVolumesVolumeInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPostScriptsResponseBodyPostInstallScripts extends $tea.Model {
  args?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'Args',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueConfRequestQueues extends $tea.Model {
  queueName?: string;
  static names(): { [key: string]: string } {
    return {
      queueName: 'QueueName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queueName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueConfResponseBodyQueuesConfDataDisks extends $tea.Model {
  dataDiskCategory?: string;
  dataDiskDeleteWithInstance?: boolean;
  dataDiskEncrypted?: boolean;
  dataDiskKMSKeyId?: string;
  dataDiskPerformanceLevel?: string;
  dataDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      dataDiskCategory: 'DataDiskCategory',
      dataDiskDeleteWithInstance: 'DataDiskDeleteWithInstance',
      dataDiskEncrypted: 'DataDiskEncrypted',
      dataDiskKMSKeyId: 'DataDiskKMSKeyId',
      dataDiskPerformanceLevel: 'DataDiskPerformanceLevel',
      dataDiskSize: 'DataDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDiskCategory: 'string',
      dataDiskDeleteWithInstance: 'boolean',
      dataDiskEncrypted: 'boolean',
      dataDiskKMSKeyId: 'string',
      dataDiskPerformanceLevel: 'string',
      dataDiskSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueConfResponseBodyQueuesConfInstanceTypes extends $tea.Model {
  instanceType?: string;
  spotPriceLimit?: number;
  spotStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      spotPriceLimit: 'SpotPriceLimit',
      spotStrategy: 'SpotStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      spotPriceLimit: 'number',
      spotStrategy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueConfResponseBodyQueuesConfZones extends $tea.Model {
  vSwitchIds?: string[];
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchIds: 'VSwitchIds',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQueueConfResponseBodyQueuesConf extends $tea.Model {
  dataDisks?: GetQueueConfResponseBodyQueuesConfDataDisks[];
  enableAutoGrow?: boolean;
  enableAutoShrink?: boolean;
  growIntervallnMinutes?: number;
  growTimeoutInMinutes?: number;
  hostNamePrefix?: string;
  hostNameSuffix?: string;
  imageId?: string;
  imageType?: string;
  instanceTypes?: GetQueueConfResponseBodyQueuesConfInstanceTypes[];
  internetChargeType?: string;
  internetMaxBandwidthOut?: number;
  maxNodes?: number;
  minNodes?: number;
  osTag?: string;
  queueName?: string;
  regionId?: string;
  resourceGroupId?: string;
  securityGroupId?: string;
  shrinkIntervallnMinutes?: number;
  shrinkidleTimes?: number;
  systemDiskCategory?: string;
  systemDiskPerformanceLevel?: string;
  systemDiskSize?: number;
  zones?: GetQueueConfResponseBodyQueuesConfZones[];
  static names(): { [key: string]: string } {
    return {
      dataDisks: 'DataDisks',
      enableAutoGrow: 'EnableAutoGrow',
      enableAutoShrink: 'EnableAutoShrink',
      growIntervallnMinutes: 'GrowIntervallnMinutes',
      growTimeoutInMinutes: 'GrowTimeoutInMinutes',
      hostNamePrefix: 'HostNamePrefix',
      hostNameSuffix: 'HostNameSuffix',
      imageId: 'ImageId',
      imageType: 'ImageType',
      instanceTypes: 'InstanceTypes',
      internetChargeType: 'InternetChargeType',
      internetMaxBandwidthOut: 'InternetMaxBandwidthOut',
      maxNodes: 'MaxNodes',
      minNodes: 'MinNodes',
      osTag: 'OsTag',
      queueName: 'QueueName',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      securityGroupId: 'SecurityGroupId',
      shrinkIntervallnMinutes: 'ShrinkIntervallnMinutes',
      shrinkidleTimes: 'ShrinkidleTimes',
      systemDiskCategory: 'SystemDiskCategory',
      systemDiskPerformanceLevel: 'SystemDiskPerformanceLevel',
      systemDiskSize: 'SystemDiskSize',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDisks: { 'type': 'array', 'itemType': GetQueueConfResponseBodyQueuesConfDataDisks },
      enableAutoGrow: 'boolean',
      enableAutoShrink: 'boolean',
      growIntervallnMinutes: 'number',
      growTimeoutInMinutes: 'number',
      hostNamePrefix: 'string',
      hostNameSuffix: 'string',
      imageId: 'string',
      imageType: 'string',
      instanceTypes: { 'type': 'array', 'itemType': GetQueueConfResponseBodyQueuesConfInstanceTypes },
      internetChargeType: 'string',
      internetMaxBandwidthOut: 'number',
      maxNodes: 'number',
      minNodes: 'number',
      osTag: 'string',
      queueName: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      securityGroupId: 'string',
      shrinkIntervallnMinutes: 'number',
      shrinkidleTimes: 'number',
      systemDiskCategory: 'string',
      systemDiskPerformanceLevel: 'string',
      systemDiskSize: 'number',
      zones: { 'type': 'array', 'itemType': GetQueueConfResponseBodyQueuesConfZones },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSchedulerInfoRequestScheduler extends $tea.Model {
  schedName?: string;
  static names(): { [key: string]: string } {
    return {
      schedName: 'SchedName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schedName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSchedulerInfoResponseBodySchedInfo extends $tea.Model {
  configuration?: string;
  schedName?: string;
  static names(): { [key: string]: string } {
    return {
      configuration: 'Configuration',
      schedName: 'SchedName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: 'string',
      schedName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeShellCommandRequestInstance extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeShellCommandResponseBodyInstanceIds extends $tea.Model {
  instanceId?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableEcsTypesResponseBodyInstanceTypeFamiliesInstanceTypeFamilyInfoTypesTypesInfoZoneIds extends $tea.Model {
  zoneId?: string[];
  static names(): { [key: string]: string } {
    return {
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableEcsTypesResponseBodyInstanceTypeFamiliesInstanceTypeFamilyInfoTypesTypesInfo extends $tea.Model {
  cpuCoreCount?: number;
  eniQuantity?: number;
  GPUAmount?: number;
  GPUSpec?: string;
  instanceBandwidthRx?: number;
  instanceBandwidthTx?: number;
  instancePpsRx?: number;
  instancePpsTx?: number;
  instanceTypeId?: string;
  memorySize?: number;
  status?: string;
  zoneIds?: ListAvailableEcsTypesResponseBodyInstanceTypeFamiliesInstanceTypeFamilyInfoTypesTypesInfoZoneIds;
  static names(): { [key: string]: string } {
    return {
      cpuCoreCount: 'CpuCoreCount',
      eniQuantity: 'EniQuantity',
      GPUAmount: 'GPUAmount',
      GPUSpec: 'GPUSpec',
      instanceBandwidthRx: 'InstanceBandwidthRx',
      instanceBandwidthTx: 'InstanceBandwidthTx',
      instancePpsRx: 'InstancePpsRx',
      instancePpsTx: 'InstancePpsTx',
      instanceTypeId: 'InstanceTypeId',
      memorySize: 'MemorySize',
      status: 'Status',
      zoneIds: 'ZoneIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuCoreCount: 'number',
      eniQuantity: 'number',
      GPUAmount: 'number',
      GPUSpec: 'string',
      instanceBandwidthRx: 'number',
      instanceBandwidthTx: 'number',
      instancePpsRx: 'number',
      instancePpsTx: 'number',
      instanceTypeId: 'string',
      memorySize: 'number',
      status: 'string',
      zoneIds: ListAvailableEcsTypesResponseBodyInstanceTypeFamiliesInstanceTypeFamilyInfoTypesTypesInfoZoneIds,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableEcsTypesResponseBodyInstanceTypeFamiliesInstanceTypeFamilyInfoTypes extends $tea.Model {
  typesInfo?: ListAvailableEcsTypesResponseBodyInstanceTypeFamiliesInstanceTypeFamilyInfoTypesTypesInfo[];
  static names(): { [key: string]: string } {
    return {
      typesInfo: 'TypesInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      typesInfo: { 'type': 'array', 'itemType': ListAvailableEcsTypesResponseBodyInstanceTypeFamiliesInstanceTypeFamilyInfoTypesTypesInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableEcsTypesResponseBodyInstanceTypeFamiliesInstanceTypeFamilyInfo extends $tea.Model {
  generation?: string;
  instanceTypeFamilyId?: string;
  types?: ListAvailableEcsTypesResponseBodyInstanceTypeFamiliesInstanceTypeFamilyInfoTypes;
  static names(): { [key: string]: string } {
    return {
      generation: 'Generation',
      instanceTypeFamilyId: 'InstanceTypeFamilyId',
      types: 'Types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generation: 'string',
      instanceTypeFamilyId: 'string',
      types: ListAvailableEcsTypesResponseBodyInstanceTypeFamiliesInstanceTypeFamilyInfoTypes,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAvailableEcsTypesResponseBodyInstanceTypeFamilies extends $tea.Model {
  instanceTypeFamilyInfo?: ListAvailableEcsTypesResponseBodyInstanceTypeFamiliesInstanceTypeFamilyInfo[];
  static names(): { [key: string]: string } {
    return {
      instanceTypeFamilyInfo: 'InstanceTypeFamilyInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypeFamilyInfo: { 'type': 'array', 'itemType': ListAvailableEcsTypesResponseBodyInstanceTypeFamiliesInstanceTypeFamilyInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudMetricProfilingsResponseBodyProfilingsProfilingInfo extends $tea.Model {
  duration?: number;
  freq?: number;
  hostName?: string;
  instanceId?: string;
  pid?: number;
  profilingId?: string;
  triggerTime?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      freq: 'Freq',
      hostName: 'HostName',
      instanceId: 'InstanceId',
      pid: 'Pid',
      profilingId: 'ProfilingId',
      triggerTime: 'TriggerTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      freq: 'number',
      hostName: 'string',
      instanceId: 'string',
      pid: 'number',
      profilingId: 'string',
      triggerTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCloudMetricProfilingsResponseBodyProfilings extends $tea.Model {
  profilingInfo?: ListCloudMetricProfilingsResponseBodyProfilingsProfilingInfo[];
  static names(): { [key: string]: string } {
    return {
      profilingInfo: 'ProfilingInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      profilingInfo: { 'type': 'array', 'itemType': ListCloudMetricProfilingsResponseBodyProfilingsProfilingInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterLogsResponseBodyLogsLogInfo extends $tea.Model {
  createTime?: string;
  level?: string;
  message?: string;
  operation?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      level: 'Level',
      message: 'Message',
      operation: 'Operation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      level: 'string',
      message: 'string',
      operation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterLogsResponseBodyLogs extends $tea.Model {
  logInfo?: ListClusterLogsResponseBodyLogsLogInfo[];
  static names(): { [key: string]: string } {
    return {
      logInfo: 'LogInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logInfo: { 'type': 'array', 'itemType': ListClusterLogsResponseBodyLogsLogInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClustersClusterInfoSimpleComputes extends $tea.Model {
  exceptionCount?: number;
  normalCount?: number;
  operatingCount?: number;
  stoppedCount?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      exceptionCount: 'ExceptionCount',
      normalCount: 'NormalCount',
      operatingCount: 'OperatingCount',
      stoppedCount: 'StoppedCount',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exceptionCount: 'number',
      normalCount: 'number',
      operatingCount: 'number',
      stoppedCount: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClustersClusterInfoSimpleManagers extends $tea.Model {
  exceptionCount?: number;
  normalCount?: number;
  operatingCount?: number;
  stoppedCount?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      exceptionCount: 'ExceptionCount',
      normalCount: 'NormalCount',
      operatingCount: 'OperatingCount',
      stoppedCount: 'StoppedCount',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exceptionCount: 'number',
      normalCount: 'number',
      operatingCount: 'number',
      stoppedCount: 'number',
      total: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClustersClusterInfoSimpleTotalResources extends $tea.Model {
  cpu?: number;
  gpu?: number;
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

export class ListClustersResponseBodyClustersClusterInfoSimpleUsedResources extends $tea.Model {
  cpu?: number;
  gpu?: number;
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

export class ListClustersResponseBodyClustersClusterInfoSimple extends $tea.Model {
  accountType?: string;
  baseOsTag?: string;
  clientVersion?: string;
  computeSpotPriceLimit?: number;
  computeSpotStrategy?: string;
  computes?: ListClustersResponseBodyClustersClusterInfoSimpleComputes;
  count?: number;
  createTime?: string;
  deployMode?: string;
  description?: string;
  ehpcVersion?: string;
  hasPlugin?: boolean;
  id?: string;
  imageId?: string;
  imageOwnerAlias?: string;
  instanceChargeType?: string;
  instanceType?: string;
  isComputeEss?: boolean;
  location?: string;
  loginNodes?: string;
  managers?: ListClustersResponseBodyClustersClusterInfoSimpleManagers;
  name?: string;
  nodePrefix?: string;
  nodeSuffix?: string;
  osTag?: string;
  regionId?: string;
  schedulerType?: string;
  status?: string;
  totalResources?: ListClustersResponseBodyClustersClusterInfoSimpleTotalResources;
  usedResources?: ListClustersResponseBodyClustersClusterInfoSimpleUsedResources;
  vSwitchId?: string;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      baseOsTag: 'BaseOsTag',
      clientVersion: 'ClientVersion',
      computeSpotPriceLimit: 'ComputeSpotPriceLimit',
      computeSpotStrategy: 'ComputeSpotStrategy',
      computes: 'Computes',
      count: 'Count',
      createTime: 'CreateTime',
      deployMode: 'DeployMode',
      description: 'Description',
      ehpcVersion: 'EhpcVersion',
      hasPlugin: 'HasPlugin',
      id: 'Id',
      imageId: 'ImageId',
      imageOwnerAlias: 'ImageOwnerAlias',
      instanceChargeType: 'InstanceChargeType',
      instanceType: 'InstanceType',
      isComputeEss: 'IsComputeEss',
      location: 'Location',
      loginNodes: 'LoginNodes',
      managers: 'Managers',
      name: 'Name',
      nodePrefix: 'NodePrefix',
      nodeSuffix: 'NodeSuffix',
      osTag: 'OsTag',
      regionId: 'RegionId',
      schedulerType: 'SchedulerType',
      status: 'Status',
      totalResources: 'TotalResources',
      usedResources: 'UsedResources',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      baseOsTag: 'string',
      clientVersion: 'string',
      computeSpotPriceLimit: 'number',
      computeSpotStrategy: 'string',
      computes: ListClustersResponseBodyClustersClusterInfoSimpleComputes,
      count: 'number',
      createTime: 'string',
      deployMode: 'string',
      description: 'string',
      ehpcVersion: 'string',
      hasPlugin: 'boolean',
      id: 'string',
      imageId: 'string',
      imageOwnerAlias: 'string',
      instanceChargeType: 'string',
      instanceType: 'string',
      isComputeEss: 'boolean',
      location: 'string',
      loginNodes: 'string',
      managers: ListClustersResponseBodyClustersClusterInfoSimpleManagers,
      name: 'string',
      nodePrefix: 'string',
      nodeSuffix: 'string',
      osTag: 'string',
      regionId: 'string',
      schedulerType: 'string',
      status: 'string',
      totalResources: ListClustersResponseBodyClustersClusterInfoSimpleTotalResources,
      usedResources: ListClustersResponseBodyClustersClusterInfoSimpleUsedResources,
      vSwitchId: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersResponseBodyClusters extends $tea.Model {
  clusterInfoSimple?: ListClustersResponseBodyClustersClusterInfoSimple[];
  static names(): { [key: string]: string } {
    return {
      clusterInfoSimple: 'ClusterInfoSimple',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterInfoSimple: { 'type': 'array', 'itemType': ListClustersResponseBodyClustersClusterInfoSimple },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersMetaResponseBodyClustersClusterInfoSimple extends $tea.Model {
  accountType?: string;
  clientVersion?: string;
  deployMode?: string;
  description?: string;
  hasPlugin?: boolean;
  id?: string;
  isComputeEss?: boolean;
  location?: string;
  name?: string;
  osTag?: string;
  schedulerType?: string;
  status?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      clientVersion: 'ClientVersion',
      deployMode: 'DeployMode',
      description: 'Description',
      hasPlugin: 'HasPlugin',
      id: 'Id',
      isComputeEss: 'IsComputeEss',
      location: 'Location',
      name: 'Name',
      osTag: 'OsTag',
      schedulerType: 'SchedulerType',
      status: 'Status',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      clientVersion: 'string',
      deployMode: 'string',
      description: 'string',
      hasPlugin: 'boolean',
      id: 'string',
      isComputeEss: 'boolean',
      location: 'string',
      name: 'string',
      osTag: 'string',
      schedulerType: 'string',
      status: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClustersMetaResponseBodyClusters extends $tea.Model {
  clusterInfoSimple?: ListClustersMetaResponseBodyClustersClusterInfoSimple[];
  static names(): { [key: string]: string } {
    return {
      clusterInfoSimple: 'ClusterInfoSimple',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterInfoSimple: { 'type': 'array', 'itemType': ListClustersMetaResponseBodyClustersClusterInfoSimple },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommandsResponseBodyCommandsCommand extends $tea.Model {
  commandContent?: string;
  commandId?: string;
  timeout?: string;
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      commandContent: 'CommandContent',
      commandId: 'CommandId',
      timeout: 'Timeout',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandContent: 'string',
      commandId: 'string',
      timeout: 'string',
      workingDir: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCommandsResponseBodyCommands extends $tea.Model {
  command?: ListCommandsResponseBodyCommandsCommand[];
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: { 'type': 'array', 'itemType': ListCommandsResponseBodyCommandsCommand },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContainerAppsResponseBodyContainerAppsContainerApps extends $tea.Model {
  createTime?: string;
  description?: string;
  id?: string;
  imageTag?: string;
  name?: string;
  repository?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      id: 'Id',
      imageTag: 'ImageTag',
      name: 'Name',
      repository: 'Repository',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      id: 'string',
      imageTag: 'string',
      name: 'string',
      repository: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContainerAppsResponseBodyContainerApps extends $tea.Model {
  containerApps?: ListContainerAppsResponseBodyContainerAppsContainerApps[];
  static names(): { [key: string]: string } {
    return {
      containerApps: 'ContainerApps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerApps: { 'type': 'array', 'itemType': ListContainerAppsResponseBodyContainerAppsContainerApps },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContainerImagesResponseBodyImagesImages extends $tea.Model {
  imageId?: string;
  repository?: string;
  status?: string;
  system?: string;
  tag?: string;
  type?: string;
  updateDateTime?: string;
  static names(): { [key: string]: string } {
    return {
      imageId: 'ImageId',
      repository: 'Repository',
      status: 'Status',
      system: 'System',
      tag: 'Tag',
      type: 'Type',
      updateDateTime: 'UpdateDateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageId: 'string',
      repository: 'string',
      status: 'string',
      system: 'string',
      tag: 'string',
      type: 'string',
      updateDateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContainerImagesResponseBodyImages extends $tea.Model {
  images?: ListContainerImagesResponseBodyImagesImages[];
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': ListContainerImagesResponseBodyImagesImages },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCpfsFileSystemsResponseBodyFileSystemListFileSystemsMountTargetListMountTargets extends $tea.Model {
  mountTargetDomain?: string;
  networkType?: string;
  status?: string;
  vpcId?: string;
  vswId?: string;
  static names(): { [key: string]: string } {
    return {
      mountTargetDomain: 'MountTargetDomain',
      networkType: 'NetworkType',
      status: 'Status',
      vpcId: 'VpcId',
      vswId: 'VswId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountTargetDomain: 'string',
      networkType: 'string',
      status: 'string',
      vpcId: 'string',
      vswId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCpfsFileSystemsResponseBodyFileSystemListFileSystemsMountTargetList extends $tea.Model {
  mountTargets?: ListCpfsFileSystemsResponseBodyFileSystemListFileSystemsMountTargetListMountTargets[];
  static names(): { [key: string]: string } {
    return {
      mountTargets: 'MountTargets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountTargets: { 'type': 'array', 'itemType': ListCpfsFileSystemsResponseBodyFileSystemListFileSystemsMountTargetListMountTargets },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCpfsFileSystemsResponseBodyFileSystemListFileSystems extends $tea.Model {
  capacity?: string;
  createTime?: string;
  destription?: string;
  fileSystemId?: string;
  mountTargetList?: ListCpfsFileSystemsResponseBodyFileSystemListFileSystemsMountTargetList;
  protocolType?: string;
  regionId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      createTime: 'CreateTime',
      destription: 'Destription',
      fileSystemId: 'FileSystemId',
      mountTargetList: 'MountTargetList',
      protocolType: 'ProtocolType',
      regionId: 'RegionId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'string',
      createTime: 'string',
      destription: 'string',
      fileSystemId: 'string',
      mountTargetList: ListCpfsFileSystemsResponseBodyFileSystemListFileSystemsMountTargetList,
      protocolType: 'string',
      regionId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCpfsFileSystemsResponseBodyFileSystemList extends $tea.Model {
  fileSystems?: ListCpfsFileSystemsResponseBodyFileSystemListFileSystems[];
  static names(): { [key: string]: string } {
    return {
      fileSystems: 'FileSystems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystems: { 'type': 'array', 'itemType': ListCpfsFileSystemsResponseBodyFileSystemListFileSystems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomImagesResponseBodyImagesImageInfoBaseOsTag extends $tea.Model {
  architecture?: string;
  osTag?: string;
  platform?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      osTag: 'OsTag',
      platform: 'Platform',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      osTag: 'string',
      platform: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomImagesResponseBodyImagesImageInfoOsTag extends $tea.Model {
  architecture?: string;
  baseOsTag?: string;
  osTag?: string;
  platform?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      baseOsTag: 'BaseOsTag',
      osTag: 'OsTag',
      platform: 'Platform',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      baseOsTag: 'string',
      osTag: 'string',
      platform: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomImagesResponseBodyImagesImageInfo extends $tea.Model {
  baseOsTag?: ListCustomImagesResponseBodyImagesImageInfoBaseOsTag;
  description?: string;
  imageId?: string;
  imageName?: string;
  imageOwnerAlias?: string;
  osTag?: ListCustomImagesResponseBodyImagesImageInfoOsTag;
  postInstallScript?: string;
  pricingCycle?: string;
  productCode?: string;
  size?: number;
  skuCode?: string;
  status?: string;
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      baseOsTag: 'BaseOsTag',
      description: 'Description',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageOwnerAlias: 'ImageOwnerAlias',
      osTag: 'OsTag',
      postInstallScript: 'PostInstallScript',
      pricingCycle: 'PricingCycle',
      productCode: 'ProductCode',
      size: 'Size',
      skuCode: 'SkuCode',
      status: 'Status',
      uid: 'Uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseOsTag: ListCustomImagesResponseBodyImagesImageInfoBaseOsTag,
      description: 'string',
      imageId: 'string',
      imageName: 'string',
      imageOwnerAlias: 'string',
      osTag: ListCustomImagesResponseBodyImagesImageInfoOsTag,
      postInstallScript: 'string',
      pricingCycle: 'string',
      productCode: 'string',
      size: 'number',
      skuCode: 'string',
      status: 'string',
      uid: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomImagesResponseBodyImages extends $tea.Model {
  imageInfo?: ListCustomImagesResponseBodyImagesImageInfo[];
  static names(): { [key: string]: string } {
    return {
      imageInfo: 'ImageInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageInfo: { 'type': 'array', 'itemType': ListCustomImagesResponseBodyImagesImageInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileSystemWithMountTargetsResponseBodyFileSystemListFileSystemsMountTargetListMountTargets extends $tea.Model {
  accessGroup?: string;
  mountTargetDomain?: string;
  networkType?: string;
  status?: string;
  vpcId?: string;
  vswId?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroup: 'AccessGroup',
      mountTargetDomain: 'MountTargetDomain',
      networkType: 'NetworkType',
      status: 'Status',
      vpcId: 'VpcId',
      vswId: 'VswId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroup: 'string',
      mountTargetDomain: 'string',
      networkType: 'string',
      status: 'string',
      vpcId: 'string',
      vswId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileSystemWithMountTargetsResponseBodyFileSystemListFileSystemsMountTargetList extends $tea.Model {
  mountTargets?: ListFileSystemWithMountTargetsResponseBodyFileSystemListFileSystemsMountTargetListMountTargets[];
  static names(): { [key: string]: string } {
    return {
      mountTargets: 'MountTargets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountTargets: { 'type': 'array', 'itemType': ListFileSystemWithMountTargetsResponseBodyFileSystemListFileSystemsMountTargetListMountTargets },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileSystemWithMountTargetsResponseBodyFileSystemListFileSystemsPackageListPackages extends $tea.Model {
  packageId?: string;
  static names(): { [key: string]: string } {
    return {
      packageId: 'PackageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileSystemWithMountTargetsResponseBodyFileSystemListFileSystemsPackageList extends $tea.Model {
  packages?: ListFileSystemWithMountTargetsResponseBodyFileSystemListFileSystemsPackageListPackages[];
  static names(): { [key: string]: string } {
    return {
      packages: 'Packages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packages: { 'type': 'array', 'itemType': ListFileSystemWithMountTargetsResponseBodyFileSystemListFileSystemsPackageListPackages },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileSystemWithMountTargetsResponseBodyFileSystemListFileSystems extends $tea.Model {
  bandWidth?: number;
  capacity?: number;
  createTime?: string;
  destription?: string;
  encryptType?: number;
  fileSystemId?: string;
  fileSystemType?: string;
  meteredSize?: number;
  mountTargetList?: ListFileSystemWithMountTargetsResponseBodyFileSystemListFileSystemsMountTargetList;
  packageList?: ListFileSystemWithMountTargetsResponseBodyFileSystemListFileSystemsPackageList;
  protocolType?: string;
  regionId?: string;
  status?: string;
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      bandWidth: 'BandWidth',
      capacity: 'Capacity',
      createTime: 'CreateTime',
      destription: 'Destription',
      encryptType: 'EncryptType',
      fileSystemId: 'FileSystemId',
      fileSystemType: 'FileSystemType',
      meteredSize: 'MeteredSize',
      mountTargetList: 'MountTargetList',
      packageList: 'PackageList',
      protocolType: 'ProtocolType',
      regionId: 'RegionId',
      status: 'Status',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandWidth: 'number',
      capacity: 'number',
      createTime: 'string',
      destription: 'string',
      encryptType: 'number',
      fileSystemId: 'string',
      fileSystemType: 'string',
      meteredSize: 'number',
      mountTargetList: ListFileSystemWithMountTargetsResponseBodyFileSystemListFileSystemsMountTargetList,
      packageList: ListFileSystemWithMountTargetsResponseBodyFileSystemListFileSystemsPackageList,
      protocolType: 'string',
      regionId: 'string',
      status: 'string',
      storageType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFileSystemWithMountTargetsResponseBodyFileSystemList extends $tea.Model {
  fileSystems?: ListFileSystemWithMountTargetsResponseBodyFileSystemListFileSystems[];
  static names(): { [key: string]: string } {
    return {
      fileSystems: 'FileSystems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileSystems: { 'type': 'array', 'itemType': ListFileSystemWithMountTargetsResponseBodyFileSystemListFileSystems },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesResponseBodyOsTagsOsInfo extends $tea.Model {
  architecture?: string;
  baseOsTag?: string;
  imageId?: string;
  osTag?: string;
  platform?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      architecture: 'Architecture',
      baseOsTag: 'BaseOsTag',
      imageId: 'ImageId',
      osTag: 'OsTag',
      platform: 'Platform',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      architecture: 'string',
      baseOsTag: 'string',
      imageId: 'string',
      osTag: 'string',
      platform: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesResponseBodyOsTags extends $tea.Model {
  osInfo?: ListImagesResponseBodyOsTagsOsInfo[];
  static names(): { [key: string]: string } {
    return {
      osInfo: 'OsInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      osInfo: { 'type': 'array', 'itemType': ListImagesResponseBodyOsTagsOsInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstalledSoftwareResponseBodySoftwareListSoftwareList extends $tea.Model {
  softwareId?: string;
  softwareName?: string;
  softwareStatus?: string;
  softwareVersion?: string;
  static names(): { [key: string]: string } {
    return {
      softwareId: 'SoftwareId',
      softwareName: 'SoftwareName',
      softwareStatus: 'SoftwareStatus',
      softwareVersion: 'SoftwareVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      softwareId: 'string',
      softwareName: 'string',
      softwareStatus: 'string',
      softwareVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstalledSoftwareResponseBodySoftwareList extends $tea.Model {
  softwareList?: ListInstalledSoftwareResponseBodySoftwareListSoftwareList[];
  static names(): { [key: string]: string } {
    return {
      softwareList: 'SoftwareList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      softwareList: { 'type': 'array', 'itemType': ListInstalledSoftwareResponseBodySoftwareListSoftwareList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInvocationResultsRequestInstance extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInvocationResultsResponseBodyInvocationResultsInvocationResult extends $tea.Model {
  commandId?: string;
  exitCode?: number;
  finishedTime?: string;
  instanceId?: string;
  invokeRecordStatus?: string;
  message?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      commandId: 'CommandId',
      exitCode: 'ExitCode',
      finishedTime: 'FinishedTime',
      instanceId: 'InstanceId',
      invokeRecordStatus: 'InvokeRecordStatus',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commandId: 'string',
      exitCode: 'number',
      finishedTime: 'string',
      instanceId: 'string',
      invokeRecordStatus: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInvocationResultsResponseBodyInvocationResults extends $tea.Model {
  invocationResult?: ListInvocationResultsResponseBodyInvocationResultsInvocationResult[];
  static names(): { [key: string]: string } {
    return {
      invocationResult: 'InvocationResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invocationResult: { 'type': 'array', 'itemType': ListInvocationResultsResponseBodyInvocationResultsInvocationResult },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInvocationStatusResponseBodyInvokeInstancesInvokeInstance extends $tea.Model {
  instanceId?: string;
  instanceInvokeStatus?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceInvokeStatus: 'InstanceInvokeStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceInvokeStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInvocationStatusResponseBodyInvokeInstances extends $tea.Model {
  invokeInstance?: ListInvocationStatusResponseBodyInvokeInstancesInvokeInstance[];
  static names(): { [key: string]: string } {
    return {
      invokeInstance: 'InvokeInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invokeInstance: { 'type': 'array', 'itemType': ListInvocationStatusResponseBodyInvokeInstancesInvokeInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobTemplatesResponseBodyTemplatesJobTemplates extends $tea.Model {
  arrayRequest?: string;
  clockTime?: string;
  commandLine?: string;
  gpu?: number;
  id?: string;
  inputFileUrl?: string;
  mem?: string;
  name?: string;
  node?: number;
  packagePath?: string;
  priority?: number;
  queue?: string;
  reRunable?: boolean;
  runasUser?: string;
  stderrRedirectPath?: string;
  stdoutRedirectPath?: string;
  task?: number;
  thread?: number;
  unzipCmd?: string;
  variables?: string;
  withUnzipCmd?: boolean;
  static names(): { [key: string]: string } {
    return {
      arrayRequest: 'ArrayRequest',
      clockTime: 'ClockTime',
      commandLine: 'CommandLine',
      gpu: 'Gpu',
      id: 'Id',
      inputFileUrl: 'InputFileUrl',
      mem: 'Mem',
      name: 'Name',
      node: 'Node',
      packagePath: 'PackagePath',
      priority: 'Priority',
      queue: 'Queue',
      reRunable: 'ReRunable',
      runasUser: 'RunasUser',
      stderrRedirectPath: 'StderrRedirectPath',
      stdoutRedirectPath: 'StdoutRedirectPath',
      task: 'Task',
      thread: 'Thread',
      unzipCmd: 'UnzipCmd',
      variables: 'Variables',
      withUnzipCmd: 'WithUnzipCmd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayRequest: 'string',
      clockTime: 'string',
      commandLine: 'string',
      gpu: 'number',
      id: 'string',
      inputFileUrl: 'string',
      mem: 'string',
      name: 'string',
      node: 'number',
      packagePath: 'string',
      priority: 'number',
      queue: 'string',
      reRunable: 'boolean',
      runasUser: 'string',
      stderrRedirectPath: 'string',
      stdoutRedirectPath: 'string',
      task: 'number',
      thread: 'number',
      unzipCmd: 'string',
      variables: 'string',
      withUnzipCmd: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobTemplatesResponseBodyTemplates extends $tea.Model {
  jobTemplates?: ListJobTemplatesResponseBodyTemplatesJobTemplates[];
  static names(): { [key: string]: string } {
    return {
      jobTemplates: 'JobTemplates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobTemplates: { 'type': 'array', 'itemType': ListJobTemplatesResponseBodyTemplatesJobTemplates },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyJobsJobInfoResources extends $tea.Model {
  cores?: number;
  nodes?: number;
  static names(): { [key: string]: string } {
    return {
      cores: 'Cores',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cores: 'number',
      nodes: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyJobsJobInfo extends $tea.Model {
  arrayRequest?: string;
  comment?: string;
  id?: string;
  lastModifyTime?: string;
  name?: string;
  nodeList?: string;
  owner?: string;
  priority?: string;
  resources?: ListJobsResponseBodyJobsJobInfoResources;
  shellPath?: string;
  startTime?: string;
  state?: string;
  stderr?: string;
  stdout?: string;
  submitTime?: string;
  static names(): { [key: string]: string } {
    return {
      arrayRequest: 'ArrayRequest',
      comment: 'Comment',
      id: 'Id',
      lastModifyTime: 'LastModifyTime',
      name: 'Name',
      nodeList: 'NodeList',
      owner: 'Owner',
      priority: 'Priority',
      resources: 'Resources',
      shellPath: 'ShellPath',
      startTime: 'StartTime',
      state: 'State',
      stderr: 'Stderr',
      stdout: 'Stdout',
      submitTime: 'SubmitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayRequest: 'string',
      comment: 'string',
      id: 'string',
      lastModifyTime: 'string',
      name: 'string',
      nodeList: 'string',
      owner: 'string',
      priority: 'string',
      resources: ListJobsResponseBodyJobsJobInfoResources,
      shellPath: 'string',
      startTime: 'string',
      state: 'string',
      stderr: 'string',
      stdout: 'string',
      submitTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBodyJobs extends $tea.Model {
  jobInfo?: ListJobsResponseBodyJobsJobInfo[];
  static names(): { [key: string]: string } {
    return {
      jobInfo: 'JobInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobInfo: { 'type': 'array', 'itemType': ListJobsResponseBodyJobsJobInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsWithFiltersResponseBodyJobsResources extends $tea.Model {
  cores?: number;
  nodes?: number;
  static names(): { [key: string]: string } {
    return {
      cores: 'Cores',
      nodes: 'Nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cores: 'number',
      nodes: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsWithFiltersResponseBodyJobs extends $tea.Model {
  arrayRequest?: string;
  comment?: string;
  id?: string;
  lastModifyTime?: string;
  name?: string;
  nodeList?: string;
  owner?: string;
  priority?: string;
  queue?: string;
  resources?: ListJobsWithFiltersResponseBodyJobsResources;
  shellPath?: string;
  startTime?: string;
  state?: string;
  stderr?: string;
  stdout?: string;
  submitTime?: string;
  static names(): { [key: string]: string } {
    return {
      arrayRequest: 'ArrayRequest',
      comment: 'Comment',
      id: 'Id',
      lastModifyTime: 'LastModifyTime',
      name: 'Name',
      nodeList: 'NodeList',
      owner: 'Owner',
      priority: 'Priority',
      queue: 'Queue',
      resources: 'Resources',
      shellPath: 'ShellPath',
      startTime: 'StartTime',
      state: 'State',
      stderr: 'Stderr',
      stdout: 'Stdout',
      submitTime: 'SubmitTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arrayRequest: 'string',
      comment: 'string',
      id: 'string',
      lastModifyTime: 'string',
      name: 'string',
      nodeList: 'string',
      owner: 'string',
      priority: 'string',
      queue: 'string',
      resources: ListJobsWithFiltersResponseBodyJobsResources,
      shellPath: 'string',
      startTime: 'string',
      state: 'string',
      stderr: 'string',
      stdout: 'string',
      submitTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyNodesNodeInfoRoles extends $tea.Model {
  role?: string[];
  static names(): { [key: string]: string } {
    return {
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyNodesNodeInfoTotalResources extends $tea.Model {
  cpu?: number;
  gpu?: number;
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

export class ListNodesResponseBodyNodesNodeInfoUsedResources extends $tea.Model {
  cpu?: number;
  gpu?: number;
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

export class ListNodesResponseBodyNodesNodeInfo extends $tea.Model {
  addTime?: string;
  createMode?: string;
  createdByEhpc?: boolean;
  expired?: boolean;
  expiredTime?: string;
  hostName?: string;
  htEnabled?: boolean;
  id?: string;
  imageId?: string;
  imageOwnerAlias?: string;
  instanceType?: string;
  ipAddress?: string;
  location?: string;
  lockReason?: string;
  publicIpAddress?: string;
  regionId?: string;
  roles?: ListNodesResponseBodyNodesNodeInfoRoles;
  spotStrategy?: string;
  stateInSched?: string;
  status?: string;
  totalResources?: ListNodesResponseBodyNodesNodeInfoTotalResources;
  usedResources?: ListNodesResponseBodyNodesNodeInfoUsedResources;
  vSwitchId?: string;
  version?: string;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      addTime: 'AddTime',
      createMode: 'CreateMode',
      createdByEhpc: 'CreatedByEhpc',
      expired: 'Expired',
      expiredTime: 'ExpiredTime',
      hostName: 'HostName',
      htEnabled: 'HtEnabled',
      id: 'Id',
      imageId: 'ImageId',
      imageOwnerAlias: 'ImageOwnerAlias',
      instanceType: 'InstanceType',
      ipAddress: 'IpAddress',
      location: 'Location',
      lockReason: 'LockReason',
      publicIpAddress: 'PublicIpAddress',
      regionId: 'RegionId',
      roles: 'Roles',
      spotStrategy: 'SpotStrategy',
      stateInSched: 'StateInSched',
      status: 'Status',
      totalResources: 'TotalResources',
      usedResources: 'UsedResources',
      vSwitchId: 'VSwitchId',
      version: 'Version',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addTime: 'string',
      createMode: 'string',
      createdByEhpc: 'boolean',
      expired: 'boolean',
      expiredTime: 'string',
      hostName: 'string',
      htEnabled: 'boolean',
      id: 'string',
      imageId: 'string',
      imageOwnerAlias: 'string',
      instanceType: 'string',
      ipAddress: 'string',
      location: 'string',
      lockReason: 'string',
      publicIpAddress: 'string',
      regionId: 'string',
      roles: ListNodesResponseBodyNodesNodeInfoRoles,
      spotStrategy: 'string',
      stateInSched: 'string',
      status: 'string',
      totalResources: ListNodesResponseBodyNodesNodeInfoTotalResources,
      usedResources: ListNodesResponseBodyNodesNodeInfoUsedResources,
      vSwitchId: 'string',
      version: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesResponseBodyNodes extends $tea.Model {
  nodeInfo?: ListNodesResponseBodyNodesNodeInfo[];
  static names(): { [key: string]: string } {
    return {
      nodeInfo: 'NodeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeInfo: { 'type': 'array', 'itemType': ListNodesResponseBodyNodesNodeInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesByQueueResponseBodyNodesNodeInfoTotalResources extends $tea.Model {
  cpu?: number;
  gpu?: number;
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

export class ListNodesByQueueResponseBodyNodesNodeInfoUsedResources extends $tea.Model {
  cpu?: number;
  gpu?: number;
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

export class ListNodesByQueueResponseBodyNodesNodeInfo extends $tea.Model {
  addTime?: string;
  createMode?: string;
  createdByEhpc?: boolean;
  expired?: boolean;
  expiredTime?: string;
  hostName?: string;
  htEnabled?: boolean;
  id?: string;
  imageId?: string;
  imageOwnerAlias?: string;
  ipAddress?: string;
  location?: string;
  lockReason?: string;
  publicIpAddress?: string;
  regionId?: string;
  spotStrategy?: string;
  stateInSched?: string;
  status?: string;
  totalResources?: ListNodesByQueueResponseBodyNodesNodeInfoTotalResources;
  usedResources?: ListNodesByQueueResponseBodyNodesNodeInfoUsedResources;
  vSwitchId?: string;
  version?: string;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      addTime: 'AddTime',
      createMode: 'CreateMode',
      createdByEhpc: 'CreatedByEhpc',
      expired: 'Expired',
      expiredTime: 'ExpiredTime',
      hostName: 'HostName',
      htEnabled: 'HtEnabled',
      id: 'Id',
      imageId: 'ImageId',
      imageOwnerAlias: 'ImageOwnerAlias',
      ipAddress: 'IpAddress',
      location: 'Location',
      lockReason: 'LockReason',
      publicIpAddress: 'PublicIpAddress',
      regionId: 'RegionId',
      spotStrategy: 'SpotStrategy',
      stateInSched: 'StateInSched',
      status: 'Status',
      totalResources: 'TotalResources',
      usedResources: 'UsedResources',
      vSwitchId: 'VSwitchId',
      version: 'Version',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addTime: 'string',
      createMode: 'string',
      createdByEhpc: 'boolean',
      expired: 'boolean',
      expiredTime: 'string',
      hostName: 'string',
      htEnabled: 'boolean',
      id: 'string',
      imageId: 'string',
      imageOwnerAlias: 'string',
      ipAddress: 'string',
      location: 'string',
      lockReason: 'string',
      publicIpAddress: 'string',
      regionId: 'string',
      spotStrategy: 'string',
      stateInSched: 'string',
      status: 'string',
      totalResources: ListNodesByQueueResponseBodyNodesNodeInfoTotalResources,
      usedResources: ListNodesByQueueResponseBodyNodesNodeInfoUsedResources,
      vSwitchId: 'string',
      version: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesByQueueResponseBodyNodes extends $tea.Model {
  nodeInfo?: ListNodesByQueueResponseBodyNodesNodeInfo[];
  static names(): { [key: string]: string } {
    return {
      nodeInfo: 'NodeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeInfo: { 'type': 'array', 'itemType': ListNodesByQueueResponseBodyNodesNodeInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesNoPagingResponseBodyNodesNodeInfo extends $tea.Model {
  hostName?: string;
  id?: string;
  imageId?: string;
  instanceType?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      hostName: 'HostName',
      id: 'Id',
      imageId: 'ImageId',
      instanceType: 'InstanceType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostName: 'string',
      id: 'string',
      imageId: 'string',
      instanceType: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNodesNoPagingResponseBodyNodes extends $tea.Model {
  nodeInfo?: ListNodesNoPagingResponseBodyNodesNodeInfo[];
  static names(): { [key: string]: string } {
    return {
      nodeInfo: 'NodeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeInfo: { 'type': 'array', 'itemType': ListNodesNoPagingResponseBodyNodesNodeInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPreferredEcsTypesResponseBodySeriesSeriesInfoRolesCompute extends $tea.Model {
  instanceTypeId?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceTypeId: 'InstanceTypeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypeId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPreferredEcsTypesResponseBodySeriesSeriesInfoRolesLogin extends $tea.Model {
  instanceTypeId?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceTypeId: 'InstanceTypeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypeId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPreferredEcsTypesResponseBodySeriesSeriesInfoRolesManager extends $tea.Model {
  instanceTypeId?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceTypeId: 'InstanceTypeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypeId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPreferredEcsTypesResponseBodySeriesSeriesInfoRoles extends $tea.Model {
  compute?: ListPreferredEcsTypesResponseBodySeriesSeriesInfoRolesCompute;
  login?: ListPreferredEcsTypesResponseBodySeriesSeriesInfoRolesLogin;
  manager?: ListPreferredEcsTypesResponseBodySeriesSeriesInfoRolesManager;
  static names(): { [key: string]: string } {
    return {
      compute: 'Compute',
      login: 'Login',
      manager: 'Manager',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compute: ListPreferredEcsTypesResponseBodySeriesSeriesInfoRolesCompute,
      login: ListPreferredEcsTypesResponseBodySeriesSeriesInfoRolesLogin,
      manager: ListPreferredEcsTypesResponseBodySeriesSeriesInfoRolesManager,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPreferredEcsTypesResponseBodySeriesSeriesInfo extends $tea.Model {
  roles?: ListPreferredEcsTypesResponseBodySeriesSeriesInfoRoles;
  seriesId?: string;
  seriesName?: string;
  static names(): { [key: string]: string } {
    return {
      roles: 'Roles',
      seriesId: 'SeriesId',
      seriesName: 'SeriesName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roles: ListPreferredEcsTypesResponseBodySeriesSeriesInfoRoles,
      seriesId: 'string',
      seriesName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPreferredEcsTypesResponseBodySeries extends $tea.Model {
  seriesInfo?: ListPreferredEcsTypesResponseBodySeriesSeriesInfo[];
  static names(): { [key: string]: string } {
    return {
      seriesInfo: 'SeriesInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      seriesInfo: { 'type': 'array', 'itemType': ListPreferredEcsTypesResponseBodySeriesSeriesInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueuesResponseBodyQueuesQueueInfoComputeInstanceType extends $tea.Model {
  instanceType?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueuesResponseBodyQueuesQueueInfoSpotInstanceTypesInstance extends $tea.Model {
  instanceType?: string;
  spotPriceLimit?: number;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      spotPriceLimit: 'SpotPriceLimit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      spotPriceLimit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueuesResponseBodyQueuesQueueInfoSpotInstanceTypes extends $tea.Model {
  instance?: ListQueuesResponseBodyQueuesQueueInfoSpotInstanceTypesInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': ListQueuesResponseBodyQueuesQueueInfoSpotInstanceTypesInstance },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueuesResponseBodyQueuesQueueInfo extends $tea.Model {
  computeInstanceType?: ListQueuesResponseBodyQueuesQueueInfoComputeInstanceType;
  enableAutoGrow?: boolean;
  hostNamePrefix?: string;
  hostNameSuffix?: string;
  imageId?: string;
  queueName?: string;
  resourceGroupId?: string;
  spotInstanceTypes?: ListQueuesResponseBodyQueuesQueueInfoSpotInstanceTypes;
  spotStrategy?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      computeInstanceType: 'ComputeInstanceType',
      enableAutoGrow: 'EnableAutoGrow',
      hostNamePrefix: 'HostNamePrefix',
      hostNameSuffix: 'HostNameSuffix',
      imageId: 'ImageId',
      queueName: 'QueueName',
      resourceGroupId: 'ResourceGroupId',
      spotInstanceTypes: 'SpotInstanceTypes',
      spotStrategy: 'SpotStrategy',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeInstanceType: ListQueuesResponseBodyQueuesQueueInfoComputeInstanceType,
      enableAutoGrow: 'boolean',
      hostNamePrefix: 'string',
      hostNameSuffix: 'string',
      imageId: 'string',
      queueName: 'string',
      resourceGroupId: 'string',
      spotInstanceTypes: ListQueuesResponseBodyQueuesQueueInfoSpotInstanceTypes,
      spotStrategy: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQueuesResponseBodyQueues extends $tea.Model {
  queueInfo?: ListQueuesResponseBodyQueuesQueueInfo[];
  static names(): { [key: string]: string } {
    return {
      queueInfo: 'QueueInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queueInfo: { 'type': 'array', 'itemType': ListQueuesResponseBodyQueuesQueueInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponseBodyRegionsRegionInfo extends $tea.Model {
  localName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponseBodyRegions extends $tea.Model {
  regionInfo?: ListRegionsResponseBodyRegionsRegionInfo[];
  static names(): { [key: string]: string } {
    return {
      regionInfo: 'RegionInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionInfo: { 'type': 'array', 'itemType': ListRegionsResponseBodyRegionsRegionInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityGroupsResponseBodySecurityGroups extends $tea.Model {
  securityGroup?: string[];
  static names(): { [key: string]: string } {
    return {
      securityGroup: 'SecurityGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroup: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwaresResponseBodySoftwaresSoftwareInfoApplicationsApplicationInfo extends $tea.Model {
  name?: string;
  required?: boolean;
  tag?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      required: 'Required',
      tag: 'Tag',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      required: 'boolean',
      tag: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwaresResponseBodySoftwaresSoftwareInfoApplications extends $tea.Model {
  applicationInfo?: ListSoftwaresResponseBodySoftwaresSoftwareInfoApplicationsApplicationInfo[];
  static names(): { [key: string]: string } {
    return {
      applicationInfo: 'ApplicationInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationInfo: { 'type': 'array', 'itemType': ListSoftwaresResponseBodySoftwaresSoftwareInfoApplicationsApplicationInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwaresResponseBodySoftwaresSoftwareInfo extends $tea.Model {
  accountType?: string;
  accountVersion?: string;
  applications?: ListSoftwaresResponseBodySoftwaresSoftwareInfoApplications;
  ehpcVersion?: string;
  osTag?: string;
  schedulerType?: string;
  schedulerVersion?: string;
  static names(): { [key: string]: string } {
    return {
      accountType: 'AccountType',
      accountVersion: 'AccountVersion',
      applications: 'Applications',
      ehpcVersion: 'EhpcVersion',
      osTag: 'OsTag',
      schedulerType: 'SchedulerType',
      schedulerVersion: 'SchedulerVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountType: 'string',
      accountVersion: 'string',
      applications: ListSoftwaresResponseBodySoftwaresSoftwareInfoApplications,
      ehpcVersion: 'string',
      osTag: 'string',
      schedulerType: 'string',
      schedulerVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSoftwaresResponseBodySoftwares extends $tea.Model {
  softwareInfo?: ListSoftwaresResponseBodySoftwaresSoftwareInfo[];
  static names(): { [key: string]: string } {
    return {
      softwareInfo: 'SoftwareInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      softwareInfo: { 'type': 'array', 'itemType': ListSoftwaresResponseBodySoftwaresSoftwareInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksResponseBodyTasks extends $tea.Model {
  clusterId?: string;
  currentStep?: number;
  errors?: string;
  request?: string;
  result?: string;
  status?: string;
  taskId?: string;
  taskType?: string;
  totalSteps?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      currentStep: 'CurrentStep',
      errors: 'Errors',
      request: 'Request',
      result: 'Result',
      status: 'Status',
      taskId: 'TaskId',
      taskType: 'TaskType',
      totalSteps: 'TotalSteps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      currentStep: 'number',
      errors: 'string',
      request: 'string',
      result: 'string',
      status: 'string',
      taskId: 'string',
      taskType: 'string',
      totalSteps: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersResponseBodyUsersUserInfo extends $tea.Model {
  addTime?: string;
  group?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      addTime: 'AddTime',
      group: 'Group',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addTime: 'string',
      group: 'string',
      name: 'string',
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

export class ListVolumesResponseBodyVolumesVolumeInfoAdditionalVolumesVolumeInfo extends $tea.Model {
  jobQueue?: string;
  localDirectory?: string;
  location?: string;
  remoteDirectory?: string;
  role?: string;
  volumeId?: string;
  volumeMountpoint?: string;
  volumeProtocol?: string;
  volumeType?: string;
  static names(): { [key: string]: string } {
    return {
      jobQueue: 'JobQueue',
      localDirectory: 'LocalDirectory',
      location: 'Location',
      remoteDirectory: 'RemoteDirectory',
      role: 'Role',
      volumeId: 'VolumeId',
      volumeMountpoint: 'VolumeMountpoint',
      volumeProtocol: 'VolumeProtocol',
      volumeType: 'VolumeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobQueue: 'string',
      localDirectory: 'string',
      location: 'string',
      remoteDirectory: 'string',
      role: 'string',
      volumeId: 'string',
      volumeMountpoint: 'string',
      volumeProtocol: 'string',
      volumeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVolumesResponseBodyVolumesVolumeInfoAdditionalVolumes extends $tea.Model {
  volumeInfo?: ListVolumesResponseBodyVolumesVolumeInfoAdditionalVolumesVolumeInfo[];
  static names(): { [key: string]: string } {
    return {
      volumeInfo: 'VolumeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      volumeInfo: { 'type': 'array', 'itemType': ListVolumesResponseBodyVolumesVolumeInfoAdditionalVolumesVolumeInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVolumesResponseBodyVolumesVolumeInfo extends $tea.Model {
  additionalVolumes?: ListVolumesResponseBodyVolumesVolumeInfoAdditionalVolumes;
  clusterId?: string;
  clusterName?: string;
  regionId?: string;
  remoteDirectory?: string;
  volumeId?: string;
  volumeMountpoint?: string;
  volumeProtocol?: string;
  volumeType?: string;
  static names(): { [key: string]: string } {
    return {
      additionalVolumes: 'AdditionalVolumes',
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      regionId: 'RegionId',
      remoteDirectory: 'RemoteDirectory',
      volumeId: 'VolumeId',
      volumeMountpoint: 'VolumeMountpoint',
      volumeProtocol: 'VolumeProtocol',
      volumeType: 'VolumeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalVolumes: ListVolumesResponseBodyVolumesVolumeInfoAdditionalVolumes,
      clusterId: 'string',
      clusterName: 'string',
      regionId: 'string',
      remoteDirectory: 'string',
      volumeId: 'string',
      volumeMountpoint: 'string',
      volumeProtocol: 'string',
      volumeType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVolumesResponseBodyVolumes extends $tea.Model {
  volumeInfo?: ListVolumesResponseBodyVolumesVolumeInfo[];
  static names(): { [key: string]: string } {
    return {
      volumeInfo: 'VolumeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      volumeInfo: { 'type': 'array', 'itemType': ListVolumesResponseBodyVolumesVolumeInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyImageGatewayConfigRequestRepo extends $tea.Model {
  auth?: string;
  location?: string;
  URL?: string;
  static names(): { [key: string]: string } {
    return {
      auth: 'Auth',
      location: 'Location',
      URL: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auth: 'string',
      location: 'string',
      URL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserGroupsRequestUser extends $tea.Model {
  group?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      group: 'Group',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      group: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyUserPasswordsRequestUser extends $tea.Model {
  name?: string;
  password?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      password: 'Password',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      password: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryServicePackAndPriceResponseBodyServicePackServicePackInfo extends $tea.Model {
  capacity?: number;
  endTime?: number;
  instanceName?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      capacity: 'Capacity',
      endTime: 'EndTime',
      instanceName: 'InstanceName',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      capacity: 'number',
      endTime: 'number',
      instanceName: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryServicePackAndPriceResponseBodyServicePack extends $tea.Model {
  servicePackInfo?: QueryServicePackAndPriceResponseBodyServicePackServicePackInfo[];
  static names(): { [key: string]: string } {
    return {
      servicePackInfo: 'ServicePackInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      servicePackInfo: { 'type': 'array', 'itemType': QueryServicePackAndPriceResponseBodyServicePackServicePackInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetNodesRequestInstance extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAutoScaleConfigRequestQueuesDataDisks extends $tea.Model {
  dataDiskCategory?: string;
  dataDiskDeleteWithInstance?: boolean;
  dataDiskEncrypted?: boolean;
  dataDiskKMSKeyId?: string;
  dataDiskPerformanceLevel?: string;
  dataDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      dataDiskCategory: 'DataDiskCategory',
      dataDiskDeleteWithInstance: 'DataDiskDeleteWithInstance',
      dataDiskEncrypted: 'DataDiskEncrypted',
      dataDiskKMSKeyId: 'DataDiskKMSKeyId',
      dataDiskPerformanceLevel: 'DataDiskPerformanceLevel',
      dataDiskSize: 'DataDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDiskCategory: 'string',
      dataDiskDeleteWithInstance: 'boolean',
      dataDiskEncrypted: 'boolean',
      dataDiskKMSKeyId: 'string',
      dataDiskPerformanceLevel: 'string',
      dataDiskSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAutoScaleConfigRequestQueuesInstanceTypes extends $tea.Model {
  instanceType?: string;
  spotPriceLimit?: number;
  spotStrategy?: string;
  vSwitchId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      spotPriceLimit: 'SpotPriceLimit',
      spotStrategy: 'SpotStrategy',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      spotPriceLimit: 'number',
      spotStrategy: 'string',
      vSwitchId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetAutoScaleConfigRequestQueues extends $tea.Model {
  dataDisks?: SetAutoScaleConfigRequestQueuesDataDisks[];
  enableAutoGrow?: boolean;
  enableAutoShrink?: boolean;
  hostNamePrefix?: string;
  hostNameSuffix?: string;
  instanceType?: string;
  instanceTypes?: SetAutoScaleConfigRequestQueuesInstanceTypes[];
  maxNodesInQueue?: number;
  maxNodesPerCycle?: number;
  minNodesInQueue?: number;
  minNodesPerCycle?: number;
  queueImageId?: string;
  queueName?: string;
  spotPriceLimit?: number;
  spotStrategy?: string;
  systemDiskCategory?: string;
  systemDiskLevel?: string;
  systemDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      dataDisks: 'DataDisks',
      enableAutoGrow: 'EnableAutoGrow',
      enableAutoShrink: 'EnableAutoShrink',
      hostNamePrefix: 'HostNamePrefix',
      hostNameSuffix: 'HostNameSuffix',
      instanceType: 'InstanceType',
      instanceTypes: 'InstanceTypes',
      maxNodesInQueue: 'MaxNodesInQueue',
      maxNodesPerCycle: 'MaxNodesPerCycle',
      minNodesInQueue: 'MinNodesInQueue',
      minNodesPerCycle: 'MinNodesPerCycle',
      queueImageId: 'QueueImageId',
      queueName: 'QueueName',
      spotPriceLimit: 'SpotPriceLimit',
      spotStrategy: 'SpotStrategy',
      systemDiskCategory: 'SystemDiskCategory',
      systemDiskLevel: 'SystemDiskLevel',
      systemDiskSize: 'SystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataDisks: { 'type': 'array', 'itemType': SetAutoScaleConfigRequestQueuesDataDisks },
      enableAutoGrow: 'boolean',
      enableAutoShrink: 'boolean',
      hostNamePrefix: 'string',
      hostNameSuffix: 'string',
      instanceType: 'string',
      instanceTypes: { 'type': 'array', 'itemType': SetAutoScaleConfigRequestQueuesInstanceTypes },
      maxNodesInQueue: 'number',
      maxNodesPerCycle: 'number',
      minNodesInQueue: 'number',
      minNodesPerCycle: 'number',
      queueImageId: 'string',
      queueName: 'string',
      spotPriceLimit: 'number',
      spotStrategy: 'string',
      systemDiskCategory: 'string',
      systemDiskLevel: 'string',
      systemDiskSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetPostScriptsRequestPostInstallScripts extends $tea.Model {
  args?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'Args',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetQueueRequestNode extends $tea.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSchedulerInfoRequestPbsInfoAclLimit extends $tea.Model {
  aclUsers?: string;
  queue?: string;
  static names(): { [key: string]: string } {
    return {
      aclUsers: 'AclUsers',
      queue: 'Queue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclUsers: 'string',
      queue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSchedulerInfoRequestPbsInfoResourceLimit extends $tea.Model {
  cpus?: number;
  mem?: string;
  nodes?: number;
  queue?: string;
  user?: string;
  static names(): { [key: string]: string } {
    return {
      cpus: 'Cpus',
      mem: 'Mem',
      nodes: 'Nodes',
      queue: 'Queue',
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpus: 'number',
      mem: 'string',
      nodes: 'number',
      queue: 'string',
      user: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSchedulerInfoRequestPbsInfo extends $tea.Model {
  aclLimit?: SetSchedulerInfoRequestPbsInfoAclLimit[];
  jobHistoryDuration?: number;
  resourceLimit?: SetSchedulerInfoRequestPbsInfoResourceLimit[];
  schedInterval?: number;
  static names(): { [key: string]: string } {
    return {
      aclLimit: 'AclLimit',
      jobHistoryDuration: 'JobHistoryDuration',
      resourceLimit: 'ResourceLimit',
      schedInterval: 'SchedInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclLimit: { 'type': 'array', 'itemType': SetSchedulerInfoRequestPbsInfoAclLimit },
      jobHistoryDuration: 'number',
      resourceLimit: { 'type': 'array', 'itemType': SetSchedulerInfoRequestPbsInfoResourceLimit },
      schedInterval: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSchedulerInfoRequestScheduler extends $tea.Model {
  schedName?: string;
  static names(): { [key: string]: string } {
    return {
      schedName: 'SchedName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      schedName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SetSchedulerInfoRequestSlurmInfo extends $tea.Model {
  backfillInterval?: number;
  schedInterval?: number;
  static names(): { [key: string]: string } {
    return {
      backfillInterval: 'BackfillInterval',
      schedInterval: 'SchedInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backfillInterval: 'number',
      schedInterval: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartNodesRequestInstance extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopNodesRequestInstance extends $tea.Model {
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClusterVolumesRequestAdditionalVolumesRoles extends $tea.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateClusterVolumesRequestAdditionalVolumes extends $tea.Model {
  jobQueue?: string;
  localDirectory?: string;
  location?: string;
  remoteDirectory?: string;
  roles?: UpdateClusterVolumesRequestAdditionalVolumesRoles[];
  volumeId?: string;
  volumeMountpoint?: string;
  volumeProtocol?: string;
  volumeType?: string;
  static names(): { [key: string]: string } {
    return {
      jobQueue: 'JobQueue',
      localDirectory: 'LocalDirectory',
      location: 'Location',
      remoteDirectory: 'RemoteDirectory',
      roles: 'Roles',
      volumeId: 'VolumeId',
      volumeMountpoint: 'VolumeMountpoint',
      volumeProtocol: 'VolumeProtocol',
      volumeType: 'VolumeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobQueue: 'string',
      localDirectory: 'string',
      location: 'string',
      remoteDirectory: 'string',
      roles: { 'type': 'array', 'itemType': UpdateClusterVolumesRequestAdditionalVolumesRoles },
      volumeId: 'string',
      volumeMountpoint: 'string',
      volumeProtocol: 'string',
      volumeType: 'string',
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

  async addContainerAppWithOptions(request: AddContainerAppRequest, runtime: $Util.RuntimeOptions): Promise<AddContainerAppResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddContainerApp",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddContainerAppResponse>(await this.callApi(params, req, runtime), new AddContainerAppResponse({}));
  }

  async addContainerApp(request: AddContainerAppRequest): Promise<AddContainerAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addContainerAppWithOptions(request, runtime);
  }

  async addExistedNodesWithOptions(request: AddExistedNodesRequest, runtime: $Util.RuntimeOptions): Promise<AddExistedNodesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddExistedNodes",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddExistedNodesResponse>(await this.callApi(params, req, runtime), new AddExistedNodesResponse({}));
  }

  async addExistedNodes(request: AddExistedNodesRequest): Promise<AddExistedNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addExistedNodesWithOptions(request, runtime);
  }

  async addLocalNodesWithOptions(request: AddLocalNodesRequest, runtime: $Util.RuntimeOptions): Promise<AddLocalNodesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddLocalNodes",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddLocalNodesResponse>(await this.callApi(params, req, runtime), new AddLocalNodesResponse({}));
  }

  async addLocalNodes(request: AddLocalNodesRequest): Promise<AddLocalNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addLocalNodesWithOptions(request, runtime);
  }

  async addNodesWithOptions(request: AddNodesRequest, runtime: $Util.RuntimeOptions): Promise<AddNodesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddNodes",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddNodesResponse>(await this.callApi(params, req, runtime), new AddNodesResponse({}));
  }

  async addNodes(request: AddNodesRequest): Promise<AddNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addNodesWithOptions(request, runtime);
  }

  async addQueueWithOptions(request: AddQueueRequest, runtime: $Util.RuntimeOptions): Promise<AddQueueResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddQueue",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddQueueResponse>(await this.callApi(params, req, runtime), new AddQueueResponse({}));
  }

  async addQueue(request: AddQueueRequest): Promise<AddQueueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addQueueWithOptions(request, runtime);
  }

  async addSecurityGroupWithOptions(request: AddSecurityGroupRequest, runtime: $Util.RuntimeOptions): Promise<AddSecurityGroupResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddSecurityGroup",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddSecurityGroupResponse>(await this.callApi(params, req, runtime), new AddSecurityGroupResponse({}));
  }

  async addSecurityGroup(request: AddSecurityGroupRequest): Promise<AddSecurityGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addSecurityGroupWithOptions(request, runtime);
  }

  async addUsersWithOptions(request: AddUsersRequest, runtime: $Util.RuntimeOptions): Promise<AddUsersResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddUsers",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddUsersResponse>(await this.callApi(params, req, runtime), new AddUsersResponse({}));
  }

  async addUsers(request: AddUsersRequest): Promise<AddUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addUsersWithOptions(request, runtime);
  }

  async applyNodesWithOptions(request: ApplyNodesRequest, runtime: $Util.RuntimeOptions): Promise<ApplyNodesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ApplyNodes",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ApplyNodesResponse>(await this.callApi(params, req, runtime), new ApplyNodesResponse({}));
  }

  async applyNodes(request: ApplyNodesRequest): Promise<ApplyNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.applyNodesWithOptions(request, runtime);
  }

  async createClusterWithOptions(request: CreateClusterRequest, runtime: $Util.RuntimeOptions): Promise<CreateClusterResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCluster",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateClusterResponse>(await this.callApi(params, req, runtime), new CreateClusterResponse({}));
  }

  async createCluster(request: CreateClusterRequest): Promise<CreateClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createClusterWithOptions(request, runtime);
  }

  async createGWSClusterWithOptions(request: CreateGWSClusterRequest, runtime: $Util.RuntimeOptions): Promise<CreateGWSClusterResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateGWSCluster",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateGWSClusterResponse>(await this.callApi(params, req, runtime), new CreateGWSClusterResponse({}));
  }

  async createGWSCluster(request: CreateGWSClusterRequest): Promise<CreateGWSClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGWSClusterWithOptions(request, runtime);
  }

  async createGWSImageWithOptions(request: CreateGWSImageRequest, runtime: $Util.RuntimeOptions): Promise<CreateGWSImageResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateGWSImage",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateGWSImageResponse>(await this.callApi(params, req, runtime), new CreateGWSImageResponse({}));
  }

  async createGWSImage(request: CreateGWSImageRequest): Promise<CreateGWSImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGWSImageWithOptions(request, runtime);
  }

  async createGWSInstanceWithOptions(request: CreateGWSInstanceRequest, runtime: $Util.RuntimeOptions): Promise<CreateGWSInstanceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateGWSInstance",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateGWSInstanceResponse>(await this.callApi(params, req, runtime), new CreateGWSInstanceResponse({}));
  }

  async createGWSInstance(request: CreateGWSInstanceRequest): Promise<CreateGWSInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createGWSInstanceWithOptions(request, runtime);
  }

  async createHybridClusterWithOptions(request: CreateHybridClusterRequest, runtime: $Util.RuntimeOptions): Promise<CreateHybridClusterResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateHybridCluster",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateHybridClusterResponse>(await this.callApi(params, req, runtime), new CreateHybridClusterResponse({}));
  }

  async createHybridCluster(request: CreateHybridClusterRequest): Promise<CreateHybridClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createHybridClusterWithOptions(request, runtime);
  }

  async createJobFileWithOptions(request: CreateJobFileRequest, runtime: $Util.RuntimeOptions): Promise<CreateJobFileResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateJobFile",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateJobFileResponse>(await this.callApi(params, req, runtime), new CreateJobFileResponse({}));
  }

  async createJobFile(request: CreateJobFileRequest): Promise<CreateJobFileResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createJobFileWithOptions(request, runtime);
  }

  async createJobTemplateWithOptions(request: CreateJobTemplateRequest, runtime: $Util.RuntimeOptions): Promise<CreateJobTemplateResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateJobTemplate",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateJobTemplateResponse>(await this.callApi(params, req, runtime), new CreateJobTemplateResponse({}));
  }

  async createJobTemplate(request: CreateJobTemplateRequest): Promise<CreateJobTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createJobTemplateWithOptions(request, runtime);
  }

  async deleteClusterWithOptions(request: DeleteClusterRequest, runtime: $Util.RuntimeOptions): Promise<DeleteClusterResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteCluster",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteClusterResponse>(await this.callApi(params, req, runtime), new DeleteClusterResponse({}));
  }

  async deleteCluster(request: DeleteClusterRequest): Promise<DeleteClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteClusterWithOptions(request, runtime);
  }

  async deleteContainerAppsWithOptions(request: DeleteContainerAppsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteContainerAppsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteContainerApps",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteContainerAppsResponse>(await this.callApi(params, req, runtime), new DeleteContainerAppsResponse({}));
  }

  async deleteContainerApps(request: DeleteContainerAppsRequest): Promise<DeleteContainerAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteContainerAppsWithOptions(request, runtime);
  }

  async deleteGWSClusterWithOptions(request: DeleteGWSClusterRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGWSClusterResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteGWSCluster",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteGWSClusterResponse>(await this.callApi(params, req, runtime), new DeleteGWSClusterResponse({}));
  }

  async deleteGWSCluster(request: DeleteGWSClusterRequest): Promise<DeleteGWSClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGWSClusterWithOptions(request, runtime);
  }

  async deleteGWSInstanceWithOptions(request: DeleteGWSInstanceRequest, runtime: $Util.RuntimeOptions): Promise<DeleteGWSInstanceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteGWSInstance",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteGWSInstanceResponse>(await this.callApi(params, req, runtime), new DeleteGWSInstanceResponse({}));
  }

  async deleteGWSInstance(request: DeleteGWSInstanceRequest): Promise<DeleteGWSInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteGWSInstanceWithOptions(request, runtime);
  }

  async deleteImageWithOptions(request: DeleteImageRequest, runtime: $Util.RuntimeOptions): Promise<DeleteImageResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteImage",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteImageResponse>(await this.callApi(params, req, runtime), new DeleteImageResponse({}));
  }

  async deleteImage(request: DeleteImageRequest): Promise<DeleteImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteImageWithOptions(request, runtime);
  }

  async deleteJobTemplatesWithOptions(request: DeleteJobTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteJobTemplatesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteJobTemplates",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteJobTemplatesResponse>(await this.callApi(params, req, runtime), new DeleteJobTemplatesResponse({}));
  }

  async deleteJobTemplates(request: DeleteJobTemplatesRequest): Promise<DeleteJobTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteJobTemplatesWithOptions(request, runtime);
  }

  async deleteJobsWithOptions(request: DeleteJobsRequest, runtime: $Util.RuntimeOptions): Promise<DeleteJobsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteJobs",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteJobsResponse>(await this.callApi(params, req, runtime), new DeleteJobsResponse({}));
  }

  async deleteJobs(request: DeleteJobsRequest): Promise<DeleteJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteJobsWithOptions(request, runtime);
  }

  async deleteNodesWithOptions(request: DeleteNodesRequest, runtime: $Util.RuntimeOptions): Promise<DeleteNodesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteNodes",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteNodesResponse>(await this.callApi(params, req, runtime), new DeleteNodesResponse({}));
  }

  async deleteNodes(request: DeleteNodesRequest): Promise<DeleteNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteNodesWithOptions(request, runtime);
  }

  async deleteQueueWithOptions(request: DeleteQueueRequest, runtime: $Util.RuntimeOptions): Promise<DeleteQueueResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteQueue",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteQueueResponse>(await this.callApi(params, req, runtime), new DeleteQueueResponse({}));
  }

  async deleteQueue(request: DeleteQueueRequest): Promise<DeleteQueueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteQueueWithOptions(request, runtime);
  }

  async deleteSecurityGroupWithOptions(request: DeleteSecurityGroupRequest, runtime: $Util.RuntimeOptions): Promise<DeleteSecurityGroupResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteSecurityGroup",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteSecurityGroupResponse>(await this.callApi(params, req, runtime), new DeleteSecurityGroupResponse({}));
  }

  async deleteSecurityGroup(request: DeleteSecurityGroupRequest): Promise<DeleteSecurityGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteSecurityGroupWithOptions(request, runtime);
  }

  async deleteUsersWithOptions(request: DeleteUsersRequest, runtime: $Util.RuntimeOptions): Promise<DeleteUsersResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteUsers",
      version: "2018-04-12",
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

  async deleteUsers(request: DeleteUsersRequest): Promise<DeleteUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteUsersWithOptions(request, runtime);
  }

  async describeAutoScaleConfigWithOptions(request: DescribeAutoScaleConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeAutoScaleConfigResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeAutoScaleConfig",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeAutoScaleConfigResponse>(await this.callApi(params, req, runtime), new DescribeAutoScaleConfigResponse({}));
  }

  async describeAutoScaleConfig(request: DescribeAutoScaleConfigRequest): Promise<DescribeAutoScaleConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeAutoScaleConfigWithOptions(request, runtime);
  }

  async describeClusterWithOptions(request: DescribeClusterRequest, runtime: $Util.RuntimeOptions): Promise<DescribeClusterResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeCluster",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeClusterResponse>(await this.callApi(params, req, runtime), new DescribeClusterResponse({}));
  }

  async describeCluster(request: DescribeClusterRequest): Promise<DescribeClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeClusterWithOptions(request, runtime);
  }

  async describeContainerAppWithOptions(request: DescribeContainerAppRequest, runtime: $Util.RuntimeOptions): Promise<DescribeContainerAppResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeContainerApp",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeContainerAppResponse>(await this.callApi(params, req, runtime), new DescribeContainerAppResponse({}));
  }

  async describeContainerApp(request: DescribeContainerAppRequest): Promise<DescribeContainerAppResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeContainerAppWithOptions(request, runtime);
  }

  async describeDeployProcessWithOptions(request: DescribeDeployProcessRequest, runtime: $Util.RuntimeOptions): Promise<DescribeDeployProcessResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeDeployProcess",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeDeployProcessResponse>(await this.callApi(params, req, runtime), new DescribeDeployProcessResponse({}));
  }

  async describeDeployProcess(request: DescribeDeployProcessRequest): Promise<DescribeDeployProcessResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeDeployProcessWithOptions(request, runtime);
  }

  async describeGWSClusterPolicyWithOptions(request: DescribeGWSClusterPolicyRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGWSClusterPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.asyncMode)) {
      query["AsyncMode"] = request.asyncMode;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGWSClusterPolicy",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGWSClusterPolicyResponse>(await this.callApi(params, req, runtime), new DescribeGWSClusterPolicyResponse({}));
  }

  async describeGWSClusterPolicy(request: DescribeGWSClusterPolicyRequest): Promise<DescribeGWSClusterPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGWSClusterPolicyWithOptions(request, runtime);
  }

  async describeGWSClustersWithOptions(request: DescribeGWSClustersRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGWSClustersResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGWSClusters",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGWSClustersResponse>(await this.callApi(params, req, runtime), new DescribeGWSClustersResponse({}));
  }

  async describeGWSClusters(request: DescribeGWSClustersRequest): Promise<DescribeGWSClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGWSClustersWithOptions(request, runtime);
  }

  async describeGWSImagesWithOptions(request: DescribeGWSImagesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGWSImagesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGWSImages",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGWSImagesResponse>(await this.callApi(params, req, runtime), new DescribeGWSImagesResponse({}));
  }

  async describeGWSImages(request: DescribeGWSImagesRequest): Promise<DescribeGWSImagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGWSImagesWithOptions(request, runtime);
  }

  async describeGWSInstancesWithOptions(request: DescribeGWSInstancesRequest, runtime: $Util.RuntimeOptions): Promise<DescribeGWSInstancesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeGWSInstances",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeGWSInstancesResponse>(await this.callApi(params, req, runtime), new DescribeGWSInstancesResponse({}));
  }

  async describeGWSInstances(request: DescribeGWSInstancesRequest): Promise<DescribeGWSInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeGWSInstancesWithOptions(request, runtime);
  }

  async describeImageWithOptions(request: DescribeImageRequest, runtime: $Util.RuntimeOptions): Promise<DescribeImageResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeImage",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeImageResponse>(await this.callApi(params, req, runtime), new DescribeImageResponse({}));
  }

  async describeImage(request: DescribeImageRequest): Promise<DescribeImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImageWithOptions(request, runtime);
  }

  async describeImageGatewayConfigWithOptions(request: DescribeImageGatewayConfigRequest, runtime: $Util.RuntimeOptions): Promise<DescribeImageGatewayConfigResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeImageGatewayConfig",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeImageGatewayConfigResponse>(await this.callApi(params, req, runtime), new DescribeImageGatewayConfigResponse({}));
  }

  async describeImageGatewayConfig(request: DescribeImageGatewayConfigRequest): Promise<DescribeImageGatewayConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImageGatewayConfigWithOptions(request, runtime);
  }

  async describeImagePriceWithOptions(request: DescribeImagePriceRequest, runtime: $Util.RuntimeOptions): Promise<DescribeImagePriceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeImagePrice",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeImagePriceResponse>(await this.callApi(params, req, runtime), new DescribeImagePriceResponse({}));
  }

  async describeImagePrice(request: DescribeImagePriceRequest): Promise<DescribeImagePriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeImagePriceWithOptions(request, runtime);
  }

  async describeJobWithOptions(request: DescribeJobRequest, runtime: $Util.RuntimeOptions): Promise<DescribeJobResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeJob",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeJobResponse>(await this.callApi(params, req, runtime), new DescribeJobResponse({}));
  }

  async describeJob(request: DescribeJobRequest): Promise<DescribeJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeJobWithOptions(request, runtime);
  }

  async describeNFSClientStatusWithOptions(request: DescribeNFSClientStatusRequest, runtime: $Util.RuntimeOptions): Promise<DescribeNFSClientStatusResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeNFSClientStatus",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribeNFSClientStatusResponse>(await this.callApi(params, req, runtime), new DescribeNFSClientStatusResponse({}));
  }

  async describeNFSClientStatus(request: DescribeNFSClientStatusRequest): Promise<DescribeNFSClientStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describeNFSClientStatusWithOptions(request, runtime);
  }

  async describePriceWithOptions(request: DescribePriceRequest, runtime: $Util.RuntimeOptions): Promise<DescribePriceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribePrice",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DescribePriceResponse>(await this.callApi(params, req, runtime), new DescribePriceResponse({}));
  }

  async describePrice(request: DescribePriceRequest): Promise<DescribePriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.describePriceWithOptions(request, runtime);
  }

  async editJobTemplateWithOptions(request: EditJobTemplateRequest, runtime: $Util.RuntimeOptions): Promise<EditJobTemplateResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "EditJobTemplate",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<EditJobTemplateResponse>(await this.callApi(params, req, runtime), new EditJobTemplateResponse({}));
  }

  async editJobTemplate(request: EditJobTemplateRequest): Promise<EditJobTemplateResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.editJobTemplateWithOptions(request, runtime);
  }

  async getAccountingReportWithOptions(request: GetAccountingReportRequest, runtime: $Util.RuntimeOptions): Promise<GetAccountingReportResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAccountingReport",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAccountingReportResponse>(await this.callApi(params, req, runtime), new GetAccountingReportResponse({}));
  }

  async getAccountingReport(request: GetAccountingReportRequest): Promise<GetAccountingReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAccountingReportWithOptions(request, runtime);
  }

  async getAutoScaleConfigWithOptions(request: GetAutoScaleConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetAutoScaleConfigResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAutoScaleConfig",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetAutoScaleConfigResponse>(await this.callApi(params, req, runtime), new GetAutoScaleConfigResponse({}));
  }

  async getAutoScaleConfig(request: GetAutoScaleConfigRequest): Promise<GetAutoScaleConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getAutoScaleConfigWithOptions(request, runtime);
  }

  async getCloudMetricLogsWithOptions(request: GetCloudMetricLogsRequest, runtime: $Util.RuntimeOptions): Promise<GetCloudMetricLogsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCloudMetricLogs",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCloudMetricLogsResponse>(await this.callApi(params, req, runtime), new GetCloudMetricLogsResponse({}));
  }

  async getCloudMetricLogs(request: GetCloudMetricLogsRequest): Promise<GetCloudMetricLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCloudMetricLogsWithOptions(request, runtime);
  }

  async getCloudMetricProfilingWithOptions(request: GetCloudMetricProfilingRequest, runtime: $Util.RuntimeOptions): Promise<GetCloudMetricProfilingResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetCloudMetricProfiling",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetCloudMetricProfilingResponse>(await this.callApi(params, req, runtime), new GetCloudMetricProfilingResponse({}));
  }

  async getCloudMetricProfiling(request: GetCloudMetricProfilingRequest): Promise<GetCloudMetricProfilingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getCloudMetricProfilingWithOptions(request, runtime);
  }

  async getClusterVolumesWithOptions(request: GetClusterVolumesRequest, runtime: $Util.RuntimeOptions): Promise<GetClusterVolumesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetClusterVolumes",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetClusterVolumesResponse>(await this.callApi(params, req, runtime), new GetClusterVolumesResponse({}));
  }

  async getClusterVolumes(request: GetClusterVolumesRequest): Promise<GetClusterVolumesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getClusterVolumesWithOptions(request, runtime);
  }

  async getGWSConnectTicketWithOptions(request: GetGWSConnectTicketRequest, runtime: $Util.RuntimeOptions): Promise<GetGWSConnectTicketResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetGWSConnectTicket",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetGWSConnectTicketResponse>(await this.callApi(params, req, runtime), new GetGWSConnectTicketResponse({}));
  }

  async getGWSConnectTicket(request: GetGWSConnectTicketRequest): Promise<GetGWSConnectTicketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getGWSConnectTicketWithOptions(request, runtime);
  }

  async getHybridClusterConfigWithOptions(request: GetHybridClusterConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetHybridClusterConfigResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetHybridClusterConfig",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetHybridClusterConfigResponse>(await this.callApi(params, req, runtime), new GetHybridClusterConfigResponse({}));
  }

  async getHybridClusterConfig(request: GetHybridClusterConfigRequest): Promise<GetHybridClusterConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getHybridClusterConfigWithOptions(request, runtime);
  }

  async getIfEcsTypeSupportHtConfigWithOptions(request: GetIfEcsTypeSupportHtConfigRequest, runtime: $Util.RuntimeOptions): Promise<GetIfEcsTypeSupportHtConfigResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetIfEcsTypeSupportHtConfig",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetIfEcsTypeSupportHtConfigResponse>(await this.callApi(params, req, runtime), new GetIfEcsTypeSupportHtConfigResponse({}));
  }

  async getIfEcsTypeSupportHtConfig(request: GetIfEcsTypeSupportHtConfigRequest): Promise<GetIfEcsTypeSupportHtConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getIfEcsTypeSupportHtConfigWithOptions(request, runtime);
  }

  async getPostScriptsWithOptions(request: GetPostScriptsRequest, runtime: $Util.RuntimeOptions): Promise<GetPostScriptsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetPostScripts",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetPostScriptsResponse>(await this.callApi(params, req, runtime), new GetPostScriptsResponse({}));
  }

  async getPostScripts(request: GetPostScriptsRequest): Promise<GetPostScriptsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getPostScriptsWithOptions(request, runtime);
  }

  async getQueueConfWithOptions(request: GetQueueConfRequest, runtime: $Util.RuntimeOptions): Promise<GetQueueConfResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetQueueConf",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetQueueConfResponse>(await this.callApi(params, req, runtime), new GetQueueConfResponse({}));
  }

  async getQueueConf(request: GetQueueConfRequest): Promise<GetQueueConfResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getQueueConfWithOptions(request, runtime);
  }

  async getSchedulerInfoWithOptions(request: GetSchedulerInfoRequest, runtime: $Util.RuntimeOptions): Promise<GetSchedulerInfoResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetSchedulerInfo",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetSchedulerInfoResponse>(await this.callApi(params, req, runtime), new GetSchedulerInfoResponse({}));
  }

  async getSchedulerInfo(request: GetSchedulerInfoRequest): Promise<GetSchedulerInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getSchedulerInfoWithOptions(request, runtime);
  }

  async getVisualServiceStatusWithOptions(request: GetVisualServiceStatusRequest, runtime: $Util.RuntimeOptions): Promise<GetVisualServiceStatusResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetVisualServiceStatus",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetVisualServiceStatusResponse>(await this.callApi(params, req, runtime), new GetVisualServiceStatusResponse({}));
  }

  async getVisualServiceStatus(request: GetVisualServiceStatusRequest): Promise<GetVisualServiceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVisualServiceStatusWithOptions(request, runtime);
  }

  async initializeEHPCWithOptions(request: InitializeEHPCRequest, runtime: $Util.RuntimeOptions): Promise<InitializeEHPCResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InitializeEHPC",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InitializeEHPCResponse>(await this.callApi(params, req, runtime), new InitializeEHPCResponse({}));
  }

  async initializeEHPC(request: InitializeEHPCRequest): Promise<InitializeEHPCResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.initializeEHPCWithOptions(request, runtime);
  }

  async installSoftwareWithOptions(request: InstallSoftwareRequest, runtime: $Util.RuntimeOptions): Promise<InstallSoftwareResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InstallSoftware",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InstallSoftwareResponse>(await this.callApi(params, req, runtime), new InstallSoftwareResponse({}));
  }

  async installSoftware(request: InstallSoftwareRequest): Promise<InstallSoftwareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.installSoftwareWithOptions(request, runtime);
  }

  async invokeShellCommandWithOptions(request: InvokeShellCommandRequest, runtime: $Util.RuntimeOptions): Promise<InvokeShellCommandResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "InvokeShellCommand",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<InvokeShellCommandResponse>(await this.callApi(params, req, runtime), new InvokeShellCommandResponse({}));
  }

  async invokeShellCommand(request: InvokeShellCommandRequest): Promise<InvokeShellCommandResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.invokeShellCommandWithOptions(request, runtime);
  }

  async listAvailableEcsTypesWithOptions(request: ListAvailableEcsTypesRequest, runtime: $Util.RuntimeOptions): Promise<ListAvailableEcsTypesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAvailableEcsTypes",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListAvailableEcsTypesResponse>(await this.callApi(params, req, runtime), new ListAvailableEcsTypesResponse({}));
  }

  async listAvailableEcsTypes(request: ListAvailableEcsTypesRequest): Promise<ListAvailableEcsTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listAvailableEcsTypesWithOptions(request, runtime);
  }

  async listCloudMetricProfilingsWithOptions(request: ListCloudMetricProfilingsRequest, runtime: $Util.RuntimeOptions): Promise<ListCloudMetricProfilingsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCloudMetricProfilings",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCloudMetricProfilingsResponse>(await this.callApi(params, req, runtime), new ListCloudMetricProfilingsResponse({}));
  }

  async listCloudMetricProfilings(request: ListCloudMetricProfilingsRequest): Promise<ListCloudMetricProfilingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCloudMetricProfilingsWithOptions(request, runtime);
  }

  async listClusterLogsWithOptions(request: ListClusterLogsRequest, runtime: $Util.RuntimeOptions): Promise<ListClusterLogsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListClusterLogs",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListClusterLogsResponse>(await this.callApi(params, req, runtime), new ListClusterLogsResponse({}));
  }

  async listClusterLogs(request: ListClusterLogsRequest): Promise<ListClusterLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClusterLogsWithOptions(request, runtime);
  }

  async listClustersWithOptions(request: ListClustersRequest, runtime: $Util.RuntimeOptions): Promise<ListClustersResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListClusters",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListClustersResponse>(await this.callApi(params, req, runtime), new ListClustersResponse({}));
  }

  async listClusters(request: ListClustersRequest): Promise<ListClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClustersWithOptions(request, runtime);
  }

  async listClustersMetaWithOptions(request: ListClustersMetaRequest, runtime: $Util.RuntimeOptions): Promise<ListClustersMetaResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListClustersMeta",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListClustersMetaResponse>(await this.callApi(params, req, runtime), new ListClustersMetaResponse({}));
  }

  async listClustersMeta(request: ListClustersMetaRequest): Promise<ListClustersMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listClustersMetaWithOptions(request, runtime);
  }

  async listCommandsWithOptions(request: ListCommandsRequest, runtime: $Util.RuntimeOptions): Promise<ListCommandsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCommands",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCommandsResponse>(await this.callApi(params, req, runtime), new ListCommandsResponse({}));
  }

  async listCommands(request: ListCommandsRequest): Promise<ListCommandsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCommandsWithOptions(request, runtime);
  }

  async listContainerAppsWithOptions(request: ListContainerAppsRequest, runtime: $Util.RuntimeOptions): Promise<ListContainerAppsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListContainerApps",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListContainerAppsResponse>(await this.callApi(params, req, runtime), new ListContainerAppsResponse({}));
  }

  async listContainerApps(request: ListContainerAppsRequest): Promise<ListContainerAppsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listContainerAppsWithOptions(request, runtime);
  }

  async listContainerImagesWithOptions(request: ListContainerImagesRequest, runtime: $Util.RuntimeOptions): Promise<ListContainerImagesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListContainerImages",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListContainerImagesResponse>(await this.callApi(params, req, runtime), new ListContainerImagesResponse({}));
  }

  async listContainerImages(request: ListContainerImagesRequest): Promise<ListContainerImagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listContainerImagesWithOptions(request, runtime);
  }

  async listCpfsFileSystemsWithOptions(request: ListCpfsFileSystemsRequest, runtime: $Util.RuntimeOptions): Promise<ListCpfsFileSystemsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCpfsFileSystems",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCpfsFileSystemsResponse>(await this.callApi(params, req, runtime), new ListCpfsFileSystemsResponse({}));
  }

  async listCpfsFileSystems(request: ListCpfsFileSystemsRequest): Promise<ListCpfsFileSystemsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCpfsFileSystemsWithOptions(request, runtime);
  }

  async listCurrentClientVersionWithOptions(runtime: $Util.RuntimeOptions): Promise<ListCurrentClientVersionResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "ListCurrentClientVersion",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCurrentClientVersionResponse>(await this.callApi(params, req, runtime), new ListCurrentClientVersionResponse({}));
  }

  async listCurrentClientVersion(): Promise<ListCurrentClientVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCurrentClientVersionWithOptions(runtime);
  }

  async listCustomImagesWithOptions(request: ListCustomImagesRequest, runtime: $Util.RuntimeOptions): Promise<ListCustomImagesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCustomImages",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListCustomImagesResponse>(await this.callApi(params, req, runtime), new ListCustomImagesResponse({}));
  }

  async listCustomImages(request: ListCustomImagesRequest): Promise<ListCustomImagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listCustomImagesWithOptions(request, runtime);
  }

  async listFileSystemWithMountTargetsWithOptions(request: ListFileSystemWithMountTargetsRequest, runtime: $Util.RuntimeOptions): Promise<ListFileSystemWithMountTargetsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListFileSystemWithMountTargets",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListFileSystemWithMountTargetsResponse>(await this.callApi(params, req, runtime), new ListFileSystemWithMountTargetsResponse({}));
  }

  async listFileSystemWithMountTargets(request: ListFileSystemWithMountTargetsRequest): Promise<ListFileSystemWithMountTargetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listFileSystemWithMountTargetsWithOptions(request, runtime);
  }

  async listImagesWithOptions(request: ListImagesRequest, runtime: $Util.RuntimeOptions): Promise<ListImagesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListImages",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListImagesResponse>(await this.callApi(params, req, runtime), new ListImagesResponse({}));
  }

  async listImages(request: ListImagesRequest): Promise<ListImagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listImagesWithOptions(request, runtime);
  }

  async listInstalledSoftwareWithOptions(request: ListInstalledSoftwareRequest, runtime: $Util.RuntimeOptions): Promise<ListInstalledSoftwareResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInstalledSoftware",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListInstalledSoftwareResponse>(await this.callApi(params, req, runtime), new ListInstalledSoftwareResponse({}));
  }

  async listInstalledSoftware(request: ListInstalledSoftwareRequest): Promise<ListInstalledSoftwareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInstalledSoftwareWithOptions(request, runtime);
  }

  async listInvocationResultsWithOptions(request: ListInvocationResultsRequest, runtime: $Util.RuntimeOptions): Promise<ListInvocationResultsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInvocationResults",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListInvocationResultsResponse>(await this.callApi(params, req, runtime), new ListInvocationResultsResponse({}));
  }

  async listInvocationResults(request: ListInvocationResultsRequest): Promise<ListInvocationResultsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInvocationResultsWithOptions(request, runtime);
  }

  async listInvocationStatusWithOptions(request: ListInvocationStatusRequest, runtime: $Util.RuntimeOptions): Promise<ListInvocationStatusResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInvocationStatus",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListInvocationStatusResponse>(await this.callApi(params, req, runtime), new ListInvocationStatusResponse({}));
  }

  async listInvocationStatus(request: ListInvocationStatusRequest): Promise<ListInvocationStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listInvocationStatusWithOptions(request, runtime);
  }

  async listJobTemplatesWithOptions(request: ListJobTemplatesRequest, runtime: $Util.RuntimeOptions): Promise<ListJobTemplatesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListJobTemplates",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListJobTemplatesResponse>(await this.callApi(params, req, runtime), new ListJobTemplatesResponse({}));
  }

  async listJobTemplates(request: ListJobTemplatesRequest): Promise<ListJobTemplatesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listJobTemplatesWithOptions(request, runtime);
  }

  async listJobsWithOptions(request: ListJobsRequest, runtime: $Util.RuntimeOptions): Promise<ListJobsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListJobs",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListJobsResponse>(await this.callApi(params, req, runtime), new ListJobsResponse({}));
  }

  async listJobs(request: ListJobsRequest): Promise<ListJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listJobsWithOptions(request, runtime);
  }

  async listJobsWithFiltersWithOptions(request: ListJobsWithFiltersRequest, runtime: $Util.RuntimeOptions): Promise<ListJobsWithFiltersResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListJobsWithFilters",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListJobsWithFiltersResponse>(await this.callApi(params, req, runtime), new ListJobsWithFiltersResponse({}));
  }

  async listJobsWithFilters(request: ListJobsWithFiltersRequest): Promise<ListJobsWithFiltersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listJobsWithFiltersWithOptions(request, runtime);
  }

  async listNodesWithOptions(request: ListNodesRequest, runtime: $Util.RuntimeOptions): Promise<ListNodesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListNodes",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListNodesResponse>(await this.callApi(params, req, runtime), new ListNodesResponse({}));
  }

  async listNodes(request: ListNodesRequest): Promise<ListNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNodesWithOptions(request, runtime);
  }

  async listNodesByQueueWithOptions(request: ListNodesByQueueRequest, runtime: $Util.RuntimeOptions): Promise<ListNodesByQueueResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListNodesByQueue",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListNodesByQueueResponse>(await this.callApi(params, req, runtime), new ListNodesByQueueResponse({}));
  }

  async listNodesByQueue(request: ListNodesByQueueRequest): Promise<ListNodesByQueueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNodesByQueueWithOptions(request, runtime);
  }

  async listNodesNoPagingWithOptions(request: ListNodesNoPagingRequest, runtime: $Util.RuntimeOptions): Promise<ListNodesNoPagingResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListNodesNoPaging",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListNodesNoPagingResponse>(await this.callApi(params, req, runtime), new ListNodesNoPagingResponse({}));
  }

  async listNodesNoPaging(request: ListNodesNoPagingRequest): Promise<ListNodesNoPagingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listNodesNoPagingWithOptions(request, runtime);
  }

  async listPreferredEcsTypesWithOptions(request: ListPreferredEcsTypesRequest, runtime: $Util.RuntimeOptions): Promise<ListPreferredEcsTypesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListPreferredEcsTypes",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListPreferredEcsTypesResponse>(await this.callApi(params, req, runtime), new ListPreferredEcsTypesResponse({}));
  }

  async listPreferredEcsTypes(request: ListPreferredEcsTypesRequest): Promise<ListPreferredEcsTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listPreferredEcsTypesWithOptions(request, runtime);
  }

  async listQueuesWithOptions(request: ListQueuesRequest, runtime: $Util.RuntimeOptions): Promise<ListQueuesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListQueues",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListQueuesResponse>(await this.callApi(params, req, runtime), new ListQueuesResponse({}));
  }

  async listQueues(request: ListQueuesRequest): Promise<ListQueuesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listQueuesWithOptions(request, runtime);
  }

  async listRegionsWithOptions(runtime: $Util.RuntimeOptions): Promise<ListRegionsResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "ListRegions",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRegionsResponse>(await this.callApi(params, req, runtime), new ListRegionsResponse({}));
  }

  async listRegions(): Promise<ListRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRegionsWithOptions(runtime);
  }

  async listSecurityGroupsWithOptions(request: ListSecurityGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ListSecurityGroupsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSecurityGroups",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListSecurityGroupsResponse>(await this.callApi(params, req, runtime), new ListSecurityGroupsResponse({}));
  }

  async listSecurityGroups(request: ListSecurityGroupsRequest): Promise<ListSecurityGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSecurityGroupsWithOptions(request, runtime);
  }

  async listSoftwaresWithOptions(request: ListSoftwaresRequest, runtime: $Util.RuntimeOptions): Promise<ListSoftwaresResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListSoftwares",
      version: "2018-04-12",
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

  async listSoftwares(request: ListSoftwaresRequest): Promise<ListSoftwaresResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listSoftwaresWithOptions(request, runtime);
  }

  async listTasksWithOptions(request: ListTasksRequest, runtime: $Util.RuntimeOptions): Promise<ListTasksResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTasks",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTasksResponse>(await this.callApi(params, req, runtime), new ListTasksResponse({}));
  }

  async listTasks(request: ListTasksRequest): Promise<ListTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTasksWithOptions(request, runtime);
  }

  async listUsersWithOptions(request: ListUsersRequest, runtime: $Util.RuntimeOptions): Promise<ListUsersResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListUsers",
      version: "2018-04-12",
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

  async listUsers(request: ListUsersRequest): Promise<ListUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listUsersWithOptions(request, runtime);
  }

  async listVolumesWithOptions(request: ListVolumesRequest, runtime: $Util.RuntimeOptions): Promise<ListVolumesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListVolumes",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListVolumesResponse>(await this.callApi(params, req, runtime), new ListVolumesResponse({}));
  }

  async listVolumes(request: ListVolumesRequest): Promise<ListVolumesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listVolumesWithOptions(request, runtime);
  }

  async modifyClusterAttributesWithOptions(request: ModifyClusterAttributesRequest, runtime: $Util.RuntimeOptions): Promise<ModifyClusterAttributesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyClusterAttributes",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyClusterAttributesResponse>(await this.callApi(params, req, runtime), new ModifyClusterAttributesResponse({}));
  }

  async modifyClusterAttributes(request: ModifyClusterAttributesRequest): Promise<ModifyClusterAttributesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyClusterAttributesWithOptions(request, runtime);
  }

  async modifyContainerAppAttributesWithOptions(request: ModifyContainerAppAttributesRequest, runtime: $Util.RuntimeOptions): Promise<ModifyContainerAppAttributesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyContainerAppAttributes",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyContainerAppAttributesResponse>(await this.callApi(params, req, runtime), new ModifyContainerAppAttributesResponse({}));
  }

  async modifyContainerAppAttributes(request: ModifyContainerAppAttributesRequest): Promise<ModifyContainerAppAttributesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyContainerAppAttributesWithOptions(request, runtime);
  }

  async modifyImageGatewayConfigWithOptions(request: ModifyImageGatewayConfigRequest, runtime: $Util.RuntimeOptions): Promise<ModifyImageGatewayConfigResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyImageGatewayConfig",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyImageGatewayConfigResponse>(await this.callApi(params, req, runtime), new ModifyImageGatewayConfigResponse({}));
  }

  async modifyImageGatewayConfig(request: ModifyImageGatewayConfigRequest): Promise<ModifyImageGatewayConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyImageGatewayConfigWithOptions(request, runtime);
  }

  async modifyUserGroupsWithOptions(request: ModifyUserGroupsRequest, runtime: $Util.RuntimeOptions): Promise<ModifyUserGroupsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyUserGroups",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyUserGroupsResponse>(await this.callApi(params, req, runtime), new ModifyUserGroupsResponse({}));
  }

  async modifyUserGroups(request: ModifyUserGroupsRequest): Promise<ModifyUserGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyUserGroupsWithOptions(request, runtime);
  }

  async modifyUserPasswordsWithOptions(request: ModifyUserPasswordsRequest, runtime: $Util.RuntimeOptions): Promise<ModifyUserPasswordsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyUserPasswords",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyUserPasswordsResponse>(await this.callApi(params, req, runtime), new ModifyUserPasswordsResponse({}));
  }

  async modifyUserPasswords(request: ModifyUserPasswordsRequest): Promise<ModifyUserPasswordsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyUserPasswordsWithOptions(request, runtime);
  }

  async modifyVisualServicePasswdWithOptions(request: ModifyVisualServicePasswdRequest, runtime: $Util.RuntimeOptions): Promise<ModifyVisualServicePasswdResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ModifyVisualServicePasswd",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ModifyVisualServicePasswdResponse>(await this.callApi(params, req, runtime), new ModifyVisualServicePasswdResponse({}));
  }

  async modifyVisualServicePasswd(request: ModifyVisualServicePasswdRequest): Promise<ModifyVisualServicePasswdResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.modifyVisualServicePasswdWithOptions(request, runtime);
  }

  async mountNFSWithOptions(request: MountNFSRequest, runtime: $Util.RuntimeOptions): Promise<MountNFSResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "MountNFS",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<MountNFSResponse>(await this.callApi(params, req, runtime), new MountNFSResponse({}));
  }

  async mountNFS(request: MountNFSRequest): Promise<MountNFSResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.mountNFSWithOptions(request, runtime);
  }

  async pullImageWithOptions(request: PullImageRequest, runtime: $Util.RuntimeOptions): Promise<PullImageResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PullImage",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<PullImageResponse>(await this.callApi(params, req, runtime), new PullImageResponse({}));
  }

  async pullImage(request: PullImageRequest): Promise<PullImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.pullImageWithOptions(request, runtime);
  }

  async queryServicePackAndPriceWithOptions(runtime: $Util.RuntimeOptions): Promise<QueryServicePackAndPriceResponse> {
    let req = new $OpenApi.OpenApiRequest({ });
    let params = new $OpenApi.Params({
      action: "QueryServicePackAndPrice",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryServicePackAndPriceResponse>(await this.callApi(params, req, runtime), new QueryServicePackAndPriceResponse({}));
  }

  async queryServicePackAndPrice(): Promise<QueryServicePackAndPriceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryServicePackAndPriceWithOptions(runtime);
  }

  async recoverClusterWithOptions(request: RecoverClusterRequest, runtime: $Util.RuntimeOptions): Promise<RecoverClusterResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RecoverCluster",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RecoverClusterResponse>(await this.callApi(params, req, runtime), new RecoverClusterResponse({}));
  }

  async recoverCluster(request: RecoverClusterRequest): Promise<RecoverClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.recoverClusterWithOptions(request, runtime);
  }

  async rerunJobsWithOptions(request: RerunJobsRequest, runtime: $Util.RuntimeOptions): Promise<RerunJobsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RerunJobs",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RerunJobsResponse>(await this.callApi(params, req, runtime), new RerunJobsResponse({}));
  }

  async rerunJobs(request: RerunJobsRequest): Promise<RerunJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.rerunJobsWithOptions(request, runtime);
  }

  async resetNodesWithOptions(request: ResetNodesRequest, runtime: $Util.RuntimeOptions): Promise<ResetNodesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ResetNodes",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResetNodesResponse>(await this.callApi(params, req, runtime), new ResetNodesResponse({}));
  }

  async resetNodes(request: ResetNodesRequest): Promise<ResetNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resetNodesWithOptions(request, runtime);
  }

  async runCloudMetricProfilingWithOptions(request: RunCloudMetricProfilingRequest, runtime: $Util.RuntimeOptions): Promise<RunCloudMetricProfilingResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RunCloudMetricProfiling",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RunCloudMetricProfilingResponse>(await this.callApi(params, req, runtime), new RunCloudMetricProfilingResponse({}));
  }

  async runCloudMetricProfiling(request: RunCloudMetricProfilingRequest): Promise<RunCloudMetricProfilingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.runCloudMetricProfilingWithOptions(request, runtime);
  }

  async setAutoScaleConfigWithOptions(request: SetAutoScaleConfigRequest, runtime: $Util.RuntimeOptions): Promise<SetAutoScaleConfigResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetAutoScaleConfig",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetAutoScaleConfigResponse>(await this.callApi(params, req, runtime), new SetAutoScaleConfigResponse({}));
  }

  async setAutoScaleConfig(request: SetAutoScaleConfigRequest): Promise<SetAutoScaleConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setAutoScaleConfigWithOptions(request, runtime);
  }

  async setGWSClusterPolicyWithOptions(request: SetGWSClusterPolicyRequest, runtime: $Util.RuntimeOptions): Promise<SetGWSClusterPolicyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.asyncMode)) {
      query["AsyncMode"] = request.asyncMode;
    }

    if (!Util.isUnset(request.clipboard)) {
      query["Clipboard"] = request.clipboard;
    }

    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    if (!Util.isUnset(request.localDrive)) {
      query["LocalDrive"] = request.localDrive;
    }

    if (!Util.isUnset(request.udpPort)) {
      query["UdpPort"] = request.udpPort;
    }

    if (!Util.isUnset(request.usbRedirect)) {
      query["UsbRedirect"] = request.usbRedirect;
    }

    if (!Util.isUnset(request.watermark)) {
      query["Watermark"] = request.watermark;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetGWSClusterPolicy",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetGWSClusterPolicyResponse>(await this.callApi(params, req, runtime), new SetGWSClusterPolicyResponse({}));
  }

  async setGWSClusterPolicy(request: SetGWSClusterPolicyRequest): Promise<SetGWSClusterPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setGWSClusterPolicyWithOptions(request, runtime);
  }

  async setGWSInstanceNameWithOptions(request: SetGWSInstanceNameRequest, runtime: $Util.RuntimeOptions): Promise<SetGWSInstanceNameResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetGWSInstanceName",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetGWSInstanceNameResponse>(await this.callApi(params, req, runtime), new SetGWSInstanceNameResponse({}));
  }

  async setGWSInstanceName(request: SetGWSInstanceNameRequest): Promise<SetGWSInstanceNameResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setGWSInstanceNameWithOptions(request, runtime);
  }

  async setGWSInstanceUserWithOptions(request: SetGWSInstanceUserRequest, runtime: $Util.RuntimeOptions): Promise<SetGWSInstanceUserResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetGWSInstanceUser",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetGWSInstanceUserResponse>(await this.callApi(params, req, runtime), new SetGWSInstanceUserResponse({}));
  }

  async setGWSInstanceUser(request: SetGWSInstanceUserRequest): Promise<SetGWSInstanceUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setGWSInstanceUserWithOptions(request, runtime);
  }

  async setPostScriptsWithOptions(request: SetPostScriptsRequest, runtime: $Util.RuntimeOptions): Promise<SetPostScriptsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetPostScripts",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetPostScriptsResponse>(await this.callApi(params, req, runtime), new SetPostScriptsResponse({}));
  }

  async setPostScripts(request: SetPostScriptsRequest): Promise<SetPostScriptsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setPostScriptsWithOptions(request, runtime);
  }

  async setQueueWithOptions(request: SetQueueRequest, runtime: $Util.RuntimeOptions): Promise<SetQueueResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetQueue",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetQueueResponse>(await this.callApi(params, req, runtime), new SetQueueResponse({}));
  }

  async setQueue(request: SetQueueRequest): Promise<SetQueueResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setQueueWithOptions(request, runtime);
  }

  async setSchedulerInfoWithOptions(request: SetSchedulerInfoRequest, runtime: $Util.RuntimeOptions): Promise<SetSchedulerInfoResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SetSchedulerInfo",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SetSchedulerInfoResponse>(await this.callApi(params, req, runtime), new SetSchedulerInfoResponse({}));
  }

  async setSchedulerInfo(request: SetSchedulerInfoRequest): Promise<SetSchedulerInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.setSchedulerInfoWithOptions(request, runtime);
  }

  async startClusterWithOptions(request: StartClusterRequest, runtime: $Util.RuntimeOptions): Promise<StartClusterResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartCluster",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartClusterResponse>(await this.callApi(params, req, runtime), new StartClusterResponse({}));
  }

  async startCluster(request: StartClusterRequest): Promise<StartClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startClusterWithOptions(request, runtime);
  }

  async startGWSInstanceWithOptions(request: StartGWSInstanceRequest, runtime: $Util.RuntimeOptions): Promise<StartGWSInstanceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartGWSInstance",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartGWSInstanceResponse>(await this.callApi(params, req, runtime), new StartGWSInstanceResponse({}));
  }

  async startGWSInstance(request: StartGWSInstanceRequest): Promise<StartGWSInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startGWSInstanceWithOptions(request, runtime);
  }

  async startNodesWithOptions(request: StartNodesRequest, runtime: $Util.RuntimeOptions): Promise<StartNodesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartNodes",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartNodesResponse>(await this.callApi(params, req, runtime), new StartNodesResponse({}));
  }

  async startNodes(request: StartNodesRequest): Promise<StartNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startNodesWithOptions(request, runtime);
  }

  async startVisualServiceWithOptions(request: StartVisualServiceRequest, runtime: $Util.RuntimeOptions): Promise<StartVisualServiceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StartVisualService",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StartVisualServiceResponse>(await this.callApi(params, req, runtime), new StartVisualServiceResponse({}));
  }

  async startVisualService(request: StartVisualServiceRequest): Promise<StartVisualServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.startVisualServiceWithOptions(request, runtime);
  }

  async stopClusterWithOptions(request: StopClusterRequest, runtime: $Util.RuntimeOptions): Promise<StopClusterResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopCluster",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopClusterResponse>(await this.callApi(params, req, runtime), new StopClusterResponse({}));
  }

  async stopCluster(request: StopClusterRequest): Promise<StopClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopClusterWithOptions(request, runtime);
  }

  async stopGWSInstanceWithOptions(request: StopGWSInstanceRequest, runtime: $Util.RuntimeOptions): Promise<StopGWSInstanceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopGWSInstance",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopGWSInstanceResponse>(await this.callApi(params, req, runtime), new StopGWSInstanceResponse({}));
  }

  async stopGWSInstance(request: StopGWSInstanceRequest): Promise<StopGWSInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopGWSInstanceWithOptions(request, runtime);
  }

  async stopJobsWithOptions(request: StopJobsRequest, runtime: $Util.RuntimeOptions): Promise<StopJobsResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopJobs",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopJobsResponse>(await this.callApi(params, req, runtime), new StopJobsResponse({}));
  }

  async stopJobs(request: StopJobsRequest): Promise<StopJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopJobsWithOptions(request, runtime);
  }

  async stopNodesWithOptions(request: StopNodesRequest, runtime: $Util.RuntimeOptions): Promise<StopNodesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopNodes",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopNodesResponse>(await this.callApi(params, req, runtime), new StopNodesResponse({}));
  }

  async stopNodes(request: StopNodesRequest): Promise<StopNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopNodesWithOptions(request, runtime);
  }

  async stopVisualServiceWithOptions(request: StopVisualServiceRequest, runtime: $Util.RuntimeOptions): Promise<StopVisualServiceResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopVisualService",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopVisualServiceResponse>(await this.callApi(params, req, runtime), new StopVisualServiceResponse({}));
  }

  async stopVisualService(request: StopVisualServiceRequest): Promise<StopVisualServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopVisualServiceWithOptions(request, runtime);
  }

  async submitJobWithOptions(request: SubmitJobRequest, runtime: $Util.RuntimeOptions): Promise<SubmitJobResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SubmitJob",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SubmitJobResponse>(await this.callApi(params, req, runtime), new SubmitJobResponse({}));
  }

  async submitJob(request: SubmitJobRequest): Promise<SubmitJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.submitJobWithOptions(request, runtime);
  }

  async syncUsersWithOptions(request: SyncUsersRequest, runtime: $Util.RuntimeOptions): Promise<SyncUsersResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SyncUsers",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SyncUsersResponse>(await this.callApi(params, req, runtime), new SyncUsersResponse({}));
  }

  async syncUsers(request: SyncUsersRequest): Promise<SyncUsersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.syncUsersWithOptions(request, runtime);
  }

  async uninstallSoftwareWithOptions(request: UninstallSoftwareRequest, runtime: $Util.RuntimeOptions): Promise<UninstallSoftwareResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UninstallSoftware",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UninstallSoftwareResponse>(await this.callApi(params, req, runtime), new UninstallSoftwareResponse({}));
  }

  async uninstallSoftware(request: UninstallSoftwareRequest): Promise<UninstallSoftwareResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.uninstallSoftwareWithOptions(request, runtime);
  }

  async updateClusterVolumesWithOptions(request: UpdateClusterVolumesRequest, runtime: $Util.RuntimeOptions): Promise<UpdateClusterVolumesResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateClusterVolumes",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateClusterVolumesResponse>(await this.callApi(params, req, runtime), new UpdateClusterVolumesResponse({}));
  }

  async updateClusterVolumes(request: UpdateClusterVolumesRequest): Promise<UpdateClusterVolumesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateClusterVolumesWithOptions(request, runtime);
  }

  async updateQueueConfigWithOptions(request: UpdateQueueConfigRequest, runtime: $Util.RuntimeOptions): Promise<UpdateQueueConfigResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateQueueConfig",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateQueueConfigResponse>(await this.callApi(params, req, runtime), new UpdateQueueConfigResponse({}));
  }

  async updateQueueConfig(request: UpdateQueueConfigRequest): Promise<UpdateQueueConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateQueueConfigWithOptions(request, runtime);
  }

  async upgradeClientWithOptions(request: UpgradeClientRequest, runtime: $Util.RuntimeOptions): Promise<UpgradeClientResponse> {
    Util.validateModel(request);
    let query = OpenApiUtil.query(Util.toMap(request));
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpgradeClient",
      version: "2018-04-12",
      protocol: "HTTPS",
      pathname: "/",
      method: "GET",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpgradeClientResponse>(await this.callApi(params, req, runtime), new UpgradeClientResponse({}));
  }

  async upgradeClient(request: UpgradeClientRequest): Promise<UpgradeClientResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.upgradeClientWithOptions(request, runtime);
  }

}

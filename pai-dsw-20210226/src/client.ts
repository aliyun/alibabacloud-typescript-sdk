// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class Cluster extends $tea.Model {
  clusterId?: string;
  clusterType?: string;
  config?: string;
  name?: string;
  nas?: string;
  owner?: string;
  privateContainerPath?: string;
  privateNasPath?: string;
  publicContainerPath?: string;
  publicNasPath?: string;
  state?: string;
  vSwitchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterType: 'ClusterType',
      config: 'Config',
      name: 'Name',
      nas: 'Nas',
      owner: 'Owner',
      privateContainerPath: 'PrivateContainerPath',
      privateNasPath: 'PrivateNasPath',
      publicContainerPath: 'PublicContainerPath',
      publicNasPath: 'PublicNasPath',
      state: 'State',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterType: 'string',
      config: 'string',
      name: 'string',
      nas: 'string',
      owner: 'string',
      privateContainerPath: 'string',
      privateNasPath: 'string',
      publicContainerPath: 'string',
      publicNasPath: 'string',
      state: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Config extends $tea.Model {
  name?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Dataset extends $tea.Model {
  datasetId?: string;
  defaultMountPath?: string;
  fileSystemId?: string;
  mountPath?: string;
  name?: string;
  nasPath?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      defaultMountPath: 'DefaultMountPath',
      fileSystemId: 'FileSystemId',
      mountPath: 'MountPath',
      name: 'Name',
      nasPath: 'NasPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
      defaultMountPath: 'string',
      fileSystemId: 'string',
      mountPath: 'string',
      name: 'string',
      nasPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EcsSpec extends $tea.Model {
  cpu?: number;
  gpu?: number;
  gpuType?: string;
  instanceType?: string;
  memoryInGiB?: number;
  systemDiskCategory?: string;
  systemDiskSizeInGiB?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      gpu: 'Gpu',
      gpuType: 'GpuType',
      instanceType: 'InstanceType',
      memoryInGiB: 'MemoryInGiB',
      systemDiskCategory: 'SystemDiskCategory',
      systemDiskSizeInGiB: 'SystemDiskSizeInGiB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      gpu: 'number',
      gpuType: 'string',
      instanceType: 'string',
      memoryInGiB: 'number',
      systemDiskCategory: 'string',
      systemDiskSizeInGiB: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Image extends $tea.Model {
  acceleratorType?: string;
  author?: string;
  cudaVersion?: string;
  description?: string;
  ecsImageKey?: string;
  framework?: string;
  frameworkVersion?: string;
  fromImageId?: string;
  fromImageName?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  imageId?: string;
  imageName?: string;
  imageUrl?: string;
  instanceId?: string;
  namespace?: string;
  OS?: string;
  OSVersion?: string;
  pythonVersion?: string;
  region?: string;
  repository?: string;
  repositoryPage?: string;
  resourceType?: number;
  rootImageId?: string;
  shared?: boolean;
  shortImageUrl?: string;
  shortRepository?: string;
  stage?: string;
  stageCode?: number;
  suggestedName?: string;
  tag?: string;
  type?: string;
  workspaceImageId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorType: 'AcceleratorType',
      author: 'Author',
      cudaVersion: 'CudaVersion',
      description: 'Description',
      ecsImageKey: 'EcsImageKey',
      framework: 'Framework',
      frameworkVersion: 'FrameworkVersion',
      fromImageId: 'FromImageId',
      fromImageName: 'FromImageName',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageUrl: 'ImageUrl',
      instanceId: 'InstanceId',
      namespace: 'Namespace',
      OS: 'OS',
      OSVersion: 'OSVersion',
      pythonVersion: 'PythonVersion',
      region: 'Region',
      repository: 'Repository',
      repositoryPage: 'RepositoryPage',
      resourceType: 'ResourceType',
      rootImageId: 'RootImageId',
      shared: 'Shared',
      shortImageUrl: 'ShortImageUrl',
      shortRepository: 'ShortRepository',
      stage: 'Stage',
      stageCode: 'StageCode',
      suggestedName: 'SuggestedName',
      tag: 'Tag',
      type: 'Type',
      workspaceImageId: 'WorkspaceImageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorType: 'string',
      author: 'string',
      cudaVersion: 'string',
      description: 'string',
      ecsImageKey: 'string',
      framework: 'string',
      frameworkVersion: 'string',
      fromImageId: 'string',
      fromImageName: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      imageId: 'string',
      imageName: 'string',
      imageUrl: 'string',
      instanceId: 'string',
      namespace: 'string',
      OS: 'string',
      OSVersion: 'string',
      pythonVersion: 'string',
      region: 'string',
      repository: 'string',
      repositoryPage: 'string',
      resourceType: 'number',
      rootImageId: 'string',
      shared: 'boolean',
      shortImageUrl: 'string',
      shortRepository: 'string',
      stage: 'string',
      stageCode: 'number',
      suggestedName: 'string',
      tag: 'string',
      type: 'string',
      workspaceImageId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageNamespace extends $tea.Model {
  namespace?: string;
  namespaceStatus?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'Namespace',
      namespaceStatus: 'NamespaceStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      namespaceStatus: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageRepository extends $tea.Model {
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  regionId?: string;
  repoName?: string;
  repoNamespace?: string;
  repoStatus?: string;
  repository?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      regionId: 'RegionId',
      repoName: 'RepoName',
      repoNamespace: 'RepoNamespace',
      repoStatus: 'RepoStatus',
      repository: 'Repository',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      regionId: 'string',
      repoName: 'string',
      repoNamespace: 'string',
      repoStatus: 'string',
      repository: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Instance extends $tea.Model {
  accumulativeRunningTimeInMillis?: number;
  accumulativeRunningTimeInMinutes?: number;
  createUser?: string;
  datasetList?: Dataset[];
  ecsSpec?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  imageId?: string;
  imageName?: string;
  imageType?: string;
  imageUrl?: string;
  instanceId?: string;
  instanceName?: string;
  instanceShutdownTimer?: InstanceShutdownTimer;
  instanceStatus?: string;
  instanceUrl?: string;
  instanceVersion?: string;
  isPublic?: number;
  jupyterlabUrl?: string;
  message?: string;
  nasFileSystemId?: string;
  payType?: number;
  payTypeName?: string;
  resource?: string;
  resourceType?: number;
  shutdownEnabled?: boolean;
  terminalUrl?: string;
  userId?: string;
  userImageList?: Image[];
  userVpc?: UserVpc;
  webIdeUrl?: string;
  workspaceId?: string;
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      accumulativeRunningTimeInMillis: 'AccumulativeRunningTimeInMillis',
      accumulativeRunningTimeInMinutes: 'AccumulativeRunningTimeInMinutes',
      createUser: 'CreateUser',
      datasetList: 'DatasetList',
      ecsSpec: 'EcsSpec',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageType: 'ImageType',
      imageUrl: 'ImageUrl',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceShutdownTimer: 'InstanceShutdownTimer',
      instanceStatus: 'InstanceStatus',
      instanceUrl: 'InstanceUrl',
      instanceVersion: 'InstanceVersion',
      isPublic: 'IsPublic',
      jupyterlabUrl: 'JupyterlabUrl',
      message: 'Message',
      nasFileSystemId: 'NasFileSystemId',
      payType: 'PayType',
      payTypeName: 'PayTypeName',
      resource: 'Resource',
      resourceType: 'ResourceType',
      shutdownEnabled: 'ShutdownEnabled',
      terminalUrl: 'TerminalUrl',
      userId: 'UserId',
      userImageList: 'UserImageList',
      userVpc: 'UserVpc',
      webIdeUrl: 'WebIdeUrl',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accumulativeRunningTimeInMillis: 'number',
      accumulativeRunningTimeInMinutes: 'number',
      createUser: 'string',
      datasetList: { 'type': 'array', 'itemType': Dataset },
      ecsSpec: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      imageId: 'string',
      imageName: 'string',
      imageType: 'string',
      imageUrl: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceShutdownTimer: InstanceShutdownTimer,
      instanceStatus: 'string',
      instanceUrl: 'string',
      instanceVersion: 'string',
      isPublic: 'number',
      jupyterlabUrl: 'string',
      message: 'string',
      nasFileSystemId: 'string',
      payType: 'number',
      payTypeName: 'string',
      resource: 'string',
      resourceType: 'number',
      shutdownEnabled: 'boolean',
      terminalUrl: 'string',
      userId: 'string',
      userImageList: { 'type': 'array', 'itemType': Image },
      userVpc: UserVpc,
      webIdeUrl: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstanceShutdownTimer extends $tea.Model {
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  instanceId?: string;
  scheduleTime?: string;
  ttlInMillis?: number;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      instanceId: 'InstanceId',
      scheduleTime: 'ScheduleTime',
      ttlInMillis: 'TtlInMillis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      instanceId: 'string',
      scheduleTime: 'string',
      ttlInMillis: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstanceSnapshot extends $tea.Model {
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  instanceId?: string;
  instanceSnapshotDescription?: string;
  instanceSnapshotId?: string;
  instanceSnapshotName?: string;
  instanceSnapshotRepoUrl?: string;
  instanceSnapshotStatus?: string;
  instanceSnapshotTag?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      instanceId: 'InstanceId',
      instanceSnapshotDescription: 'InstanceSnapshotDescription',
      instanceSnapshotId: 'InstanceSnapshotId',
      instanceSnapshotName: 'InstanceSnapshotName',
      instanceSnapshotRepoUrl: 'InstanceSnapshotRepoUrl',
      instanceSnapshotStatus: 'InstanceSnapshotStatus',
      instanceSnapshotTag: 'InstanceSnapshotTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      instanceId: 'string',
      instanceSnapshotDescription: 'string',
      instanceSnapshotId: 'string',
      instanceSnapshotName: 'string',
      instanceSnapshotRepoUrl: 'string',
      instanceSnapshotStatus: 'string',
      instanceSnapshotTag: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstanceStatus extends $tea.Model {
  accumulativeRunningTimeInMinutes?: number;
  instanceId?: string;
  instanceShutdownTimer?: InstanceShutdownTimer;
  instanceStatus?: string;
  msg?: string;
  shutdownEnabled?: boolean;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accumulativeRunningTimeInMinutes: 'AccumulativeRunningTimeInMinutes',
      instanceId: 'InstanceId',
      instanceShutdownTimer: 'InstanceShutdownTimer',
      instanceStatus: 'InstanceStatus',
      msg: 'Msg',
      shutdownEnabled: 'ShutdownEnabled',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accumulativeRunningTimeInMinutes: 'number',
      instanceId: 'string',
      instanceShutdownTimer: InstanceShutdownTimer,
      instanceStatus: 'string',
      msg: 'string',
      shutdownEnabled: 'boolean',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstanceType extends $tea.Model {
  cpuCoreCount?: number;
  discount?: number;
  domesticPrice?: number;
  GPUAmount?: number;
  GPUSpec?: string;
  instanceBandwidthRx?: number;
  instanceBandwidthTx?: number;
  instancePpsRx?: number;
  instancePpsTx?: number;
  instanceTypeFamily?: string;
  instanceTypeId?: string;
  international?: boolean;
  localStorageCapacity?: number;
  memorySize?: number;
  price?: number;
  priceCNY?: number;
  priceUSD?: number;
  resourceType?: string;
  systemDiskCategory?: string;
  systemDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      cpuCoreCount: 'CpuCoreCount',
      discount: 'Discount',
      domesticPrice: 'DomesticPrice',
      GPUAmount: 'GPUAmount',
      GPUSpec: 'GPUSpec',
      instanceBandwidthRx: 'InstanceBandwidthRx',
      instanceBandwidthTx: 'InstanceBandwidthTx',
      instancePpsRx: 'InstancePpsRx',
      instancePpsTx: 'InstancePpsTx',
      instanceTypeFamily: 'InstanceTypeFamily',
      instanceTypeId: 'InstanceTypeId',
      international: 'International',
      localStorageCapacity: 'LocalStorageCapacity',
      memorySize: 'MemorySize',
      price: 'Price',
      priceCNY: 'PriceCNY',
      priceUSD: 'PriceUSD',
      resourceType: 'ResourceType',
      systemDiskCategory: 'SystemDiskCategory',
      systemDiskSize: 'SystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuCoreCount: 'number',
      discount: 'number',
      domesticPrice: 'number',
      GPUAmount: 'number',
      GPUSpec: 'string',
      instanceBandwidthRx: 'number',
      instanceBandwidthTx: 'number',
      instancePpsRx: 'number',
      instancePpsTx: 'number',
      instanceTypeFamily: 'string',
      instanceTypeId: 'string',
      international: 'boolean',
      localStorageCapacity: 'number',
      memorySize: 'number',
      price: 'number',
      priceCNY: 'number',
      priceUSD: 'number',
      resourceType: 'string',
      systemDiskCategory: 'string',
      systemDiskSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Nas extends $tea.Model {
  description?: string;
  fileSystemId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      fileSystemId: 'FileSystemId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      fileSystemId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Region extends $tea.Model {
  regionCity?: string;
  regionId?: string;
  regionName?: string;
  regionState?: string;
  serviceUrl?: string;
  static names(): { [key: string]: string } {
    return {
      regionCity: 'RegionCity',
      regionId: 'RegionId',
      regionName: 'RegionName',
      regionState: 'RegionState',
      serviceUrl: 'ServiceUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionCity: 'string',
      regionId: 'string',
      regionName: 'string',
      regionState: 'string',
      serviceUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResourceInfo extends $tea.Model {
  name?: string;
  payType?: number;
  resourceType?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      payType: 'PayType',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      payType: 'number',
      resourceType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SecurityGroup extends $tea.Model {
  createTime?: string;
  description?: string;
  securityGroupId?: string;
  securityGroupName?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      securityGroupId: 'SecurityGroupId',
      securityGroupName: 'SecurityGroupName',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      securityGroupId: 'string',
      securityGroupName: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Status extends $tea.Model {
  accumulativeRunningTimeInMinutes?: number;
  instanceId?: string;
  instanceShutdownTimer?: InstanceShutdownTimer;
  instanceStatus?: string;
  msg?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      accumulativeRunningTimeInMinutes: 'AccumulativeRunningTimeInMinutes',
      instanceId: 'InstanceId',
      instanceShutdownTimer: 'InstanceShutdownTimer',
      instanceStatus: 'InstanceStatus',
      msg: 'Msg',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accumulativeRunningTimeInMinutes: 'number',
      instanceId: 'string',
      instanceShutdownTimer: InstanceShutdownTimer,
      instanceStatus: 'string',
      msg: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UserVpc extends $tea.Model {
  roleArn?: string;
  securityGroupId?: string;
  vpcId?: string;
  vswitchId?: string;
  static names(): { [key: string]: string } {
    return {
      roleArn: 'RoleArn',
      securityGroupId: 'SecurityGroupId',
      vpcId: 'VpcId',
      vswitchId: 'VswitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleArn: 'string',
      securityGroupId: 'string',
      vpcId: 'string',
      vswitchId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VSwitch extends $tea.Model {
  availableIpAddressCount?: number;
  cidrBlock?: string;
  createTime?: string;
  description?: string;
  isDefault?: boolean;
  status?: string;
  vSwitchId?: string;
  vSwitchName?: string;
  vpcId?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      availableIpAddressCount: 'AvailableIpAddressCount',
      cidrBlock: 'CidrBlock',
      createTime: 'CreateTime',
      description: 'Description',
      isDefault: 'IsDefault',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      vSwitchName: 'VSwitchName',
      vpcId: 'VpcId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableIpAddressCount: 'number',
      cidrBlock: 'string',
      createTime: 'string',
      description: 'string',
      isDefault: 'boolean',
      status: 'string',
      vSwitchId: 'string',
      vSwitchName: 'string',
      vpcId: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Vpc extends $tea.Model {
  cidrBlock?: string;
  createTime?: string;
  description?: string;
  isDefault?: boolean;
  status?: string;
  VRouterId?: string;
  vpcId?: string;
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      createTime: 'CreateTime',
      description: 'Description',
      isDefault: 'IsDefault',
      status: 'Status',
      VRouterId: 'VRouterId',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      createTime: 'string',
      description: 'string',
      isDefault: 'boolean',
      status: 'string',
      VRouterId: 'string',
      vpcId: 'string',
      vpcName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageRequest extends $tea.Model {
  description?: string;
  instanceId?: string;
  name?: string;
  repository?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      repository: 'Repository',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      instanceId: 'string',
      name: 'string',
      repository: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageResponseBody extends $tea.Model {
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

export class CreateImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceRequest extends $tea.Model {
  datasetList?: Dataset[];
  ecsSpec?: string;
  environments?: { [key: string]: any };
  imageId?: string;
  imageUrl?: string;
  instanceName?: string;
  isPublic?: number;
  nasFileSystemId?: string;
  userName?: string;
  userVpc?: UserVpc;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetList: 'DatasetList',
      ecsSpec: 'EcsSpec',
      environments: 'Environments',
      imageId: 'ImageId',
      imageUrl: 'ImageUrl',
      instanceName: 'InstanceName',
      isPublic: 'IsPublic',
      nasFileSystemId: 'NasFileSystemId',
      userName: 'UserName',
      userVpc: 'UserVpc',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetList: { 'type': 'array', 'itemType': Dataset },
      ecsSpec: 'string',
      environments: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      imageId: 'string',
      imageUrl: 'string',
      instanceName: 'string',
      isPublic: 'number',
      nasFileSystemId: 'string',
      userName: 'string',
      userVpc: UserVpc,
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceResponseBody extends $tea.Model {
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

export class CreateInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceShutdownTimerRequest extends $tea.Model {
  scheduleTime?: string;
  ttlInMillis?: number;
  static names(): { [key: string]: string } {
    return {
      scheduleTime: 'ScheduleTime',
      ttlInMillis: 'TtlInMillis',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scheduleTime: 'string',
      ttlInMillis: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceShutdownTimerResponseBody extends $tea.Model {
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

export class CreateInstanceShutdownTimerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateInstanceShutdownTimerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateInstanceShutdownTimerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceSnapshotRequest extends $tea.Model {
  instanceSnapshotDescription?: string;
  instanceSnapshotName?: string;
  instanceSnapshotRepoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      instanceSnapshotDescription: 'InstanceSnapshotDescription',
      instanceSnapshotName: 'InstanceSnapshotName',
      instanceSnapshotRepoUrl: 'InstanceSnapshotRepoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceSnapshotDescription: 'string',
      instanceSnapshotName: 'string',
      instanceSnapshotRepoUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceSnapshotResponseBody extends $tea.Model {
  instanceId?: string;
  instanceSnapshotId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceSnapshotId: 'InstanceSnapshotId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceSnapshotId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceSnapshotResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateInstanceSnapshotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateInstanceSnapshotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceResponseBody extends $tea.Model {
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

export class DeleteInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceShutdownTimerResponseBody extends $tea.Model {
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

export class DeleteInstanceShutdownTimerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteInstanceShutdownTimerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteInstanceShutdownTimerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceSnapshotResponseBody extends $tea.Model {
  instanceId?: string;
  instanceSnapshotId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceSnapshotId: 'InstanceSnapshotId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceSnapshotId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceSnapshotResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteInstanceSnapshotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteInstanceSnapshotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthorizationResponseBody extends $tea.Model {
  authorizationFailedCode?: string;
  authorizationFailedMessage?: string;
  authorized?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationFailedCode: 'AuthorizationFailedCode',
      authorizationFailedMessage: 'AuthorizationFailedMessage',
      authorized: 'Authorized',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationFailedCode: 'string',
      authorizationFailedMessage: 'string',
      authorized: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAuthorizationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAuthorizationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAuthorizationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDashboardStatisticsRequest extends $tea.Model {
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDashboardStatisticsResponseBody extends $tea.Model {
  instanceTotal?: number;
  instsanceRunningTotal?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceTotal: 'InstanceTotal',
      instsanceRunningTotal: 'InstsanceRunningTotal',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTotal: 'number',
      instsanceRunningTotal: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDashboardStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDashboardStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDashboardStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBody extends $tea.Model {
  accumulativeRunningTimeInMinutes?: number;
  ecsSpec?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  imageId?: string;
  imageUrl?: string;
  instanceId?: string;
  instanceName?: string;
  instanceShutdownTimer?: InstanceShutdownTimer;
  instanceStatus?: string;
  jupyterlabUrl?: string;
  nasFileSystemId?: string;
  requestId?: string;
  terminalUrl?: string;
  userId?: string;
  userVpc?: UserVpc;
  webIdeUrl?: string;
  static names(): { [key: string]: string } {
    return {
      accumulativeRunningTimeInMinutes: 'AccumulativeRunningTimeInMinutes',
      ecsSpec: 'EcsSpec',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      imageId: 'ImageId',
      imageUrl: 'ImageUrl',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceShutdownTimer: 'InstanceShutdownTimer',
      instanceStatus: 'InstanceStatus',
      jupyterlabUrl: 'JupyterlabUrl',
      nasFileSystemId: 'NasFileSystemId',
      requestId: 'RequestId',
      terminalUrl: 'TerminalUrl',
      userId: 'UserId',
      userVpc: 'UserVpc',
      webIdeUrl: 'WebIdeUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accumulativeRunningTimeInMinutes: 'number',
      ecsSpec: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      imageId: 'string',
      imageUrl: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceShutdownTimer: InstanceShutdownTimer,
      instanceStatus: 'string',
      jupyterlabUrl: 'string',
      nasFileSystemId: 'string',
      requestId: 'string',
      terminalUrl: 'string',
      userId: 'string',
      userVpc: UserVpc,
      webIdeUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceImageResponseBody extends $tea.Model {
  image?: Image;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: Image,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceImageResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetInstanceImageResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetInstanceImageResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceShutdownTimerResponseBody extends $tea.Model {
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  instanceId?: string;
  requestId?: string;
  scheduleTime?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      instanceId: 'InstanceId',
      requestId: 'RequestId',
      scheduleTime: 'ScheduleTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      instanceId: 'string',
      requestId: 'string',
      scheduleTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceShutdownTimerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetInstanceShutdownTimerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetInstanceShutdownTimerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceSnapshotResponseBody extends $tea.Model {
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  instanceId?: string;
  instanceSnapshotDescription?: string;
  instanceSnapshotId?: string;
  instanceSnapshotName?: string;
  instanceSnapshotRepoUrl?: string;
  instanceSnapshotStatus?: string;
  instanceSnapshotTag?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      instanceId: 'InstanceId',
      instanceSnapshotDescription: 'InstanceSnapshotDescription',
      instanceSnapshotId: 'InstanceSnapshotId',
      instanceSnapshotName: 'InstanceSnapshotName',
      instanceSnapshotRepoUrl: 'InstanceSnapshotRepoUrl',
      instanceSnapshotStatus: 'InstanceSnapshotStatus',
      instanceSnapshotTag: 'InstanceSnapshotTag',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      instanceId: 'string',
      instanceSnapshotDescription: 'string',
      instanceSnapshotId: 'string',
      instanceSnapshotName: 'string',
      instanceSnapshotRepoUrl: 'string',
      instanceSnapshotStatus: 'string',
      instanceSnapshotTag: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceSnapshotResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetInstanceSnapshotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetInstanceSnapshotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceTypeResponseBody extends $tea.Model {
  cpuCoreCount?: number;
  discount?: number;
  domesticPrice?: number;
  GPUAmount?: number;
  GPUSpec?: string;
  instanceBandwidthRx?: number;
  instanceBandwidthTx?: number;
  instancePpsRx?: number;
  instancePpsTx?: number;
  instanceTypeFamily?: string;
  instanceTypeId?: string;
  international?: boolean;
  localStorageCapacity?: number;
  memorySize?: number;
  price?: number;
  priceCNY?: number;
  priceUSD?: number;
  requestId?: string;
  resourceType?: string;
  systemDiskCategory?: string;
  systemDiskSize?: number;
  static names(): { [key: string]: string } {
    return {
      cpuCoreCount: 'CpuCoreCount',
      discount: 'Discount',
      domesticPrice: 'DomesticPrice',
      GPUAmount: 'GPUAmount',
      GPUSpec: 'GPUSpec',
      instanceBandwidthRx: 'InstanceBandwidthRx',
      instanceBandwidthTx: 'InstanceBandwidthTx',
      instancePpsRx: 'InstancePpsRx',
      instancePpsTx: 'InstancePpsTx',
      instanceTypeFamily: 'InstanceTypeFamily',
      instanceTypeId: 'InstanceTypeId',
      international: 'International',
      localStorageCapacity: 'LocalStorageCapacity',
      memorySize: 'MemorySize',
      price: 'Price',
      priceCNY: 'PriceCNY',
      priceUSD: 'PriceUSD',
      requestId: 'RequestId',
      resourceType: 'ResourceType',
      systemDiskCategory: 'SystemDiskCategory',
      systemDiskSize: 'SystemDiskSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuCoreCount: 'number',
      discount: 'number',
      domesticPrice: 'number',
      GPUAmount: 'number',
      GPUSpec: 'string',
      instanceBandwidthRx: 'number',
      instanceBandwidthTx: 'number',
      instancePpsRx: 'number',
      instancePpsTx: 'number',
      instanceTypeFamily: 'string',
      instanceTypeId: 'string',
      international: 'boolean',
      localStorageCapacity: 'number',
      memorySize: 'number',
      price: 'number',
      priceCNY: 'number',
      priceUSD: 'number',
      requestId: 'string',
      resourceType: 'string',
      systemDiskCategory: 'string',
      systemDiskSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceTypeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetInstanceTypeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetInstanceTypeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceUrlResponseBody extends $tea.Model {
  ide?: string;
  lab?: string;
  requestId?: string;
  terminal?: string;
  static names(): { [key: string]: string } {
    return {
      ide: 'Ide',
      lab: 'Lab',
      requestId: 'RequestId',
      terminal: 'Terminal',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ide: 'string',
      lab: 'string',
      requestId: 'string',
      terminal: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetInstanceUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetInstanceUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstancesStatisticsRequest extends $tea.Model {
  workspaceIds?: string;
  static names(): { [key: string]: string } {
    return {
      workspaceIds: 'WorkspaceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspaceIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstancesStatisticsResponseBody extends $tea.Model {
  requestId?: string;
  statistics?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statistics: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstancesStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetInstancesStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetInstancesStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserConfigResponseBody extends $tea.Model {
  currentFeatureVersion?: string;
  enableEmrCluster?: boolean;
  requestId?: string;
  useOnSaleVersion?: boolean;
  useV21Feature?: boolean;
  static names(): { [key: string]: string } {
    return {
      currentFeatureVersion: 'CurrentFeatureVersion',
      enableEmrCluster: 'EnableEmrCluster',
      requestId: 'RequestId',
      useOnSaleVersion: 'UseOnSaleVersion',
      useV21Feature: 'UseV21Feature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentFeatureVersion: 'string',
      enableEmrCluster: 'boolean',
      requestId: 'string',
      useOnSaleVersion: 'boolean',
      useV21Feature: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetUserConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetUserConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResourceAuthorizationStatusResponseBody extends $tea.Model {
  accountBalance?: number;
  accountSufficient?: boolean;
  accountTopUpPage?: string;
  allAuthorizationPage?: string;
  buyPage?: string;
  couponBalance?: number;
  currentFeatureVersion?: string;
  disableBalanceCheck?: boolean;
  dswDefaultAuthorizationPage?: string;
  env?: string;
  essConsolePage?: string;
  essServiceAvailable?: boolean;
  hasAllAuthorization?: boolean;
  hasDswDefaultAuthorization?: boolean;
  international?: boolean;
  isSubUser?: boolean;
  nasConsolePage?: string;
  realNameVerified?: boolean;
  realNameVerifiedPage?: string;
  region?: string;
  requestId?: string;
  subUserAuthorizationPage?: string;
  subUserAuthorized?: boolean;
  totalBalance?: number;
  static names(): { [key: string]: string } {
    return {
      accountBalance: 'AccountBalance',
      accountSufficient: 'AccountSufficient',
      accountTopUpPage: 'AccountTopUpPage',
      allAuthorizationPage: 'AllAuthorizationPage',
      buyPage: 'BuyPage',
      couponBalance: 'CouponBalance',
      currentFeatureVersion: 'CurrentFeatureVersion',
      disableBalanceCheck: 'DisableBalanceCheck',
      dswDefaultAuthorizationPage: 'DswDefaultAuthorizationPage',
      env: 'Env',
      essConsolePage: 'EssConsolePage',
      essServiceAvailable: 'EssServiceAvailable',
      hasAllAuthorization: 'HasAllAuthorization',
      hasDswDefaultAuthorization: 'HasDswDefaultAuthorization',
      international: 'International',
      isSubUser: 'IsSubUser',
      nasConsolePage: 'NasConsolePage',
      realNameVerified: 'RealNameVerified',
      realNameVerifiedPage: 'RealNameVerifiedPage',
      region: 'Region',
      requestId: 'RequestId',
      subUserAuthorizationPage: 'SubUserAuthorizationPage',
      subUserAuthorized: 'SubUserAuthorized',
      totalBalance: 'TotalBalance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountBalance: 'number',
      accountSufficient: 'boolean',
      accountTopUpPage: 'string',
      allAuthorizationPage: 'string',
      buyPage: 'string',
      couponBalance: 'number',
      currentFeatureVersion: 'string',
      disableBalanceCheck: 'boolean',
      dswDefaultAuthorizationPage: 'string',
      env: 'string',
      essConsolePage: 'string',
      essServiceAvailable: 'boolean',
      hasAllAuthorization: 'boolean',
      hasDswDefaultAuthorization: 'boolean',
      international: 'boolean',
      isSubUser: 'boolean',
      nasConsolePage: 'string',
      realNameVerified: 'boolean',
      realNameVerifiedPage: 'string',
      region: 'string',
      requestId: 'string',
      subUserAuthorizationPage: 'string',
      subUserAuthorized: 'boolean',
      totalBalance: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResourceAuthorizationStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetUserResourceAuthorizationStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetUserResourceAuthorizationStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResourceStatusResponseBody extends $tea.Model {
  accountBalance?: number;
  accountSufficient?: boolean;
  accountTopUpPage?: string;
  allAuthorizationPage?: string;
  couponBalance?: number;
  env?: string;
  hasAllAuthorization?: boolean;
  international?: boolean;
  realNameVerified?: boolean;
  realNameVerifiedPage?: string;
  region?: string;
  requestId?: string;
  totalBalance?: number;
  static names(): { [key: string]: string } {
    return {
      accountBalance: 'AccountBalance',
      accountSufficient: 'AccountSufficient',
      accountTopUpPage: 'AccountTopUpPage',
      allAuthorizationPage: 'AllAuthorizationPage',
      couponBalance: 'CouponBalance',
      env: 'Env',
      hasAllAuthorization: 'HasAllAuthorization',
      international: 'International',
      realNameVerified: 'RealNameVerified',
      realNameVerifiedPage: 'RealNameVerifiedPage',
      region: 'Region',
      requestId: 'RequestId',
      totalBalance: 'TotalBalance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountBalance: 'number',
      accountSufficient: 'boolean',
      accountTopUpPage: 'string',
      allAuthorizationPage: 'string',
      couponBalance: 'number',
      env: 'string',
      hasAllAuthorization: 'boolean',
      international: 'boolean',
      realNameVerified: 'boolean',
      realNameVerifiedPage: 'string',
      region: 'string',
      requestId: 'string',
      totalBalance: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserResourceStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetUserResourceStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetUserResourceStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserSpecialVersionGpuResourceInfoRequest extends $tea.Model {
  payType?: number;
  static names(): { [key: string]: string } {
    return {
      payType: 'PayType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      payType: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserSpecialVersionGpuResourceInfoResponseBody extends $tea.Model {
  gpuAvailableQuota?: number;
  gpuTotalQuota?: number;
  requestId?: string;
  resources?: ResourceInfo[];
  static names(): { [key: string]: string } {
    return {
      gpuAvailableQuota: 'GpuAvailableQuota',
      gpuTotalQuota: 'GpuTotalQuota',
      requestId: 'RequestId',
      resources: 'Resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gpuAvailableQuota: 'number',
      gpuTotalQuota: 'number',
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': ResourceInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserSpecialVersionGpuResourceInfoResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetUserSpecialVersionGpuResourceInfoResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetUserSpecialVersionGpuResourceInfoResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigsResponseBody extends $tea.Model {
  configs?: Config[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': Config },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetsRequest extends $tea.Model {
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetsResponseBody extends $tea.Model {
  datasets?: Dataset[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      datasets: 'Datasets',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasets: { 'type': 'array', 'itemType': Dataset },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDatasetsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDatasetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEcsSpecsRequest extends $tea.Model {
  acceleratorTypeEquals?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorTypeEquals: 'AcceleratorTypeEquals',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorTypeEquals: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEcsSpecsResponseBody extends $tea.Model {
  ecsSpecs?: EcsSpec[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      ecsSpecs: 'EcsSpecs',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsSpecs: { 'type': 'array', 'itemType': EcsSpec },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEcsSpecsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListEcsSpecsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListEcsSpecsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesRequest extends $tea.Model {
  acceleratorTypeEquals?: string;
  imageNameContains?: string;
  imageTypeEquals?: string;
  product?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorTypeEquals: 'AcceleratorTypeEquals',
      imageNameContains: 'ImageNameContains',
      imageTypeEquals: 'ImageTypeEquals',
      product: 'Product',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorTypeEquals: 'string',
      imageNameContains: 'string',
      imageTypeEquals: 'string',
      product: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesResponseBody extends $tea.Model {
  images?: Image[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': Image },
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

export class ListInstanceSnapshotsResponseBody extends $tea.Model {
  instanceSnapshots?: InstanceSnapshot[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceSnapshots: 'InstanceSnapshots',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceSnapshots: { 'type': 'array', 'itemType': InstanceSnapshot },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceSnapshotsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListInstanceSnapshotsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListInstanceSnapshotsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceTypesRequest extends $tea.Model {
  acceleratorType?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorType: 'AcceleratorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceTypesResponseBody extends $tea.Model {
  instanceTypes?: InstanceType[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceTypes: 'InstanceTypes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTypes: { 'type': 'array', 'itemType': InstanceType },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceTypesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListInstanceTypesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListInstanceTypesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesRequest extends $tea.Model {
  inWorkspace?: boolean;
  instanceNameContains?: string;
  instanceStatusEquals?: string;
  pageNumber?: string;
  pageSize?: string;
  sortBy?: string;
  sortOrder?: string;
  workspaceIdEquals?: string;
  static names(): { [key: string]: string } {
    return {
      inWorkspace: 'InWorkspace',
      instanceNameContains: 'InstanceNameContains',
      instanceStatusEquals: 'InstanceStatusEquals',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      sortOrder: 'SortOrder',
      workspaceIdEquals: 'WorkspaceIdEquals',
    };
  }

  static types(): { [key: string]: any } {
    return {
      inWorkspace: 'boolean',
      instanceNameContains: 'string',
      instanceStatusEquals: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      sortBy: 'string',
      sortOrder: 'string',
      workspaceIdEquals: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBody extends $tea.Model {
  instances?: Instance[];
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
      instances: { 'type': 'array', 'itemType': Instance },
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

export class ListInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesStatusRequest extends $tea.Model {
  instanceIds?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesStatusResponseBody extends $tea.Model {
  requestId?: string;
  statuses?: InstanceStatus[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statuses: 'Statuses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statuses: { 'type': 'array', 'itemType': InstanceStatus },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesStatusResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListInstancesStatusResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListInstancesStatusResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespacesResponseBody extends $tea.Model {
  namespaces?: ImageNamespace[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      namespaces: 'Namespaces',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespaces: { 'type': 'array', 'itemType': ImageNamespace },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNamespacesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListNamespacesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListNamespacesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNasesResponseBody extends $tea.Model {
  nases?: Nas[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nases: 'Nases',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nases: { 'type': 'array', 'itemType': Nas },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNasesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListNasesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListNasesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkSecurityGroupsResponseBody extends $tea.Model {
  requestId?: string;
  securityGroups?: SecurityGroup[][];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityGroups: 'SecurityGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityGroups: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': SecurityGroup } },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkSecurityGroupsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListNetworkSecurityGroupsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListNetworkSecurityGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkVSwitchesResponseBody extends $tea.Model {
  requestId?: string;
  vSwitches?: VSwitch[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vSwitches: 'VSwitches',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vSwitches: { 'type': 'array', 'itemType': VSwitch },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkVSwitchesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListNetworkVSwitchesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListNetworkVSwitchesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkVpcsResponseBody extends $tea.Model {
  requestId?: string;
  vpcs?: Vpc[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vpcs: 'Vpcs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vpcs: { 'type': 'array', 'itemType': Vpc },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNetworkVpcsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListNetworkVpcsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListNetworkVpcsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponseBody extends $tea.Model {
  regions?: Region[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: { 'type': 'array', 'itemType': Region },
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

export class ListRepositoriesResponseBody extends $tea.Model {
  repositories?: ImageRepository[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      repositories: 'Repositories',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      repositories: { 'type': 'array', 'itemType': ImageRepository },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRepositoriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListRepositoriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListRepositoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserClustersResponseBody extends $tea.Model {
  clusters?: Cluster[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusters: 'Clusters',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusters: { 'type': 'array', 'itemType': Cluster },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserClustersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListUserClustersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListUserClustersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserWorkNodesRequest extends $tea.Model {
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

export class ListUserWorkNodesResponseBody extends $tea.Model {
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

export class ListUserWorkNodesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListUserWorkNodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListUserWorkNodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartInstanceResponseBody extends $tea.Model {
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

export class StartInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInstanceRequest extends $tea.Model {
  saveImage?: boolean;
  static names(): { [key: string]: string } {
    return {
      saveImage: 'SaveImage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      saveImage: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopInstanceResponseBody extends $tea.Model {
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

export class StopInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceRequest extends $tea.Model {
  instanceName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceResponseBody extends $tea.Model {
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

export class UpdateInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateInstanceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceSnapshotRequest extends $tea.Model {
  instanceSnapshotName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceSnapshotName: 'InstanceSnapshotName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceSnapshotName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceSnapshotResponseBody extends $tea.Model {
  instanceId?: string;
  instanceSnapshotId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceSnapshotId: 'InstanceSnapshotId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceSnapshotId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceSnapshotResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateInstanceSnapshotResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateInstanceSnapshotResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("pai-dsw", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async createImage(request: CreateImageRequest): Promise<CreateImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createImageWithOptions(request, headers, runtime);
  }

  async createImageWithOptions(request: CreateImageRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateImageResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.repository)) {
      body["Repository"] = request.repository;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<CreateImageResponse>(await this.doROARequest("CreateImage", "2021-02-26", "HTTPS", "POST", "AK", `/api/v1/images`, "json", req, runtime), new CreateImageResponse({}));
  }

  async createInstance(request: CreateInstanceRequest): Promise<CreateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInstanceWithOptions(request, headers, runtime);
  }

  async createInstanceWithOptions(request: CreateInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.datasetList)) {
      body["DatasetList"] = request.datasetList;
    }

    if (!Util.isUnset(request.ecsSpec)) {
      body["EcsSpec"] = request.ecsSpec;
    }

    if (!Util.isUnset(request.environments)) {
      body["Environments"] = request.environments;
    }

    if (!Util.isUnset(request.imageId)) {
      body["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.imageUrl)) {
      body["ImageUrl"] = request.imageUrl;
    }

    if (!Util.isUnset(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.isPublic)) {
      body["IsPublic"] = request.isPublic;
    }

    if (!Util.isUnset(request.nasFileSystemId)) {
      body["NasFileSystemId"] = request.nasFileSystemId;
    }

    if (!Util.isUnset(request.userName)) {
      body["UserName"] = request.userName;
    }

    if (!Util.isUnset($tea.toMap(request.userVpc))) {
      body["UserVpc"] = request.userVpc;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<CreateInstanceResponse>(await this.doROARequest("CreateInstance", "2021-02-26", "HTTPS", "POST", "AK", `/api/v1/instances/`, "json", req, runtime), new CreateInstanceResponse({}));
  }

  async createInstanceShutdownTimer(InstanceId: string, request: CreateInstanceShutdownTimerRequest): Promise<CreateInstanceShutdownTimerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInstanceShutdownTimerWithOptions(InstanceId, request, headers, runtime);
  }

  async createInstanceShutdownTimerWithOptions(InstanceId: string, request: CreateInstanceShutdownTimerRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateInstanceShutdownTimerResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.scheduleTime)) {
      body["ScheduleTime"] = request.scheduleTime;
    }

    if (!Util.isUnset(request.ttlInMillis)) {
      body["TtlInMillis"] = request.ttlInMillis;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<CreateInstanceShutdownTimerResponse>(await this.doROARequest("CreateInstanceShutdownTimer", "2021-02-26", "HTTPS", "POST", "AK", `/api/v1/instances/${InstanceId}/shutdownTimer`, "json", req, runtime), new CreateInstanceShutdownTimerResponse({}));
  }

  async createInstanceSnapshot(InstanceId: string, request: CreateInstanceSnapshotRequest): Promise<CreateInstanceSnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInstanceSnapshotWithOptions(InstanceId, request, headers, runtime);
  }

  async createInstanceSnapshotWithOptions(InstanceId: string, request: CreateInstanceSnapshotRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateInstanceSnapshotResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceSnapshotDescription)) {
      body["InstanceSnapshotDescription"] = request.instanceSnapshotDescription;
    }

    if (!Util.isUnset(request.instanceSnapshotName)) {
      body["InstanceSnapshotName"] = request.instanceSnapshotName;
    }

    if (!Util.isUnset(request.instanceSnapshotRepoUrl)) {
      body["InstanceSnapshotRepoUrl"] = request.instanceSnapshotRepoUrl;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<CreateInstanceSnapshotResponse>(await this.doROARequest("CreateInstanceSnapshot", "2021-02-26", "HTTPS", "POST", "AK", `/api/v1/instances/${InstanceId}/snapshots`, "json", req, runtime), new CreateInstanceSnapshotResponse({}));
  }

  async deleteInstance(InstanceId: string): Promise<DeleteInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInstanceWithOptions(InstanceId, headers, runtime);
  }

  async deleteInstanceWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteInstanceResponse> {
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DeleteInstanceResponse>(await this.doROARequest("DeleteInstance", "2021-02-26", "HTTPS", "DELETE", "AK", `/api/v1/instances/${InstanceId}`, "json", req, runtime), new DeleteInstanceResponse({}));
  }

  async deleteInstanceShutdownTimer(InstanceId: string): Promise<DeleteInstanceShutdownTimerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInstanceShutdownTimerWithOptions(InstanceId, headers, runtime);
  }

  async deleteInstanceShutdownTimerWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteInstanceShutdownTimerResponse> {
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DeleteInstanceShutdownTimerResponse>(await this.doROARequest("DeleteInstanceShutdownTimer", "2021-02-26", "HTTPS", "DELETE", "AK", `/api/v1/instances/${InstanceId}/shutdownTimer`, "json", req, runtime), new DeleteInstanceShutdownTimerResponse({}));
  }

  async deleteInstanceSnapshot(InstanceId: string, InstanceSnapshotId: string): Promise<DeleteInstanceSnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInstanceSnapshotWithOptions(InstanceId, InstanceSnapshotId, headers, runtime);
  }

  async deleteInstanceSnapshotWithOptions(InstanceId: string, InstanceSnapshotId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteInstanceSnapshotResponse> {
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    InstanceSnapshotId = OpenApiUtil.getEncodeParam(InstanceSnapshotId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DeleteInstanceSnapshotResponse>(await this.doROARequest("DeleteInstanceSnapshot", "2021-02-26", "HTTPS", "DELETE", "AK", `/api/v1/instances/${InstanceId}/snapshots/${InstanceSnapshotId}`, "json", req, runtime), new DeleteInstanceSnapshotResponse({}));
  }

  async getAuthorization(): Promise<GetAuthorizationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAuthorizationWithOptions(headers, runtime);
  }

  async getAuthorizationWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetAuthorizationResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetAuthorizationResponse>(await this.doROARequest("GetAuthorization", "2021-02-26", "HTTPS", "GET", "AK", `/api/v1/authorization`, "json", req, runtime), new GetAuthorizationResponse({}));
  }

  async getDashboardStatistics(request: GetDashboardStatisticsRequest): Promise<GetDashboardStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDashboardStatisticsWithOptions(request, headers, runtime);
  }

  async getDashboardStatisticsWithOptions(request: GetDashboardStatisticsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetDashboardStatisticsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetDashboardStatisticsResponse>(await this.doROARequest("GetDashboardStatistics", "2021-02-26", "HTTPS", "GET", "AK", `/api/v1/statistics/dashboard`, "json", req, runtime), new GetDashboardStatisticsResponse({}));
  }

  async getInstance(InstanceId: string): Promise<GetInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceWithOptions(InstanceId, headers, runtime);
  }

  async getInstanceWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetInstanceResponse> {
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetInstanceResponse>(await this.doROARequest("GetInstance", "2021-02-26", "HTTPS", "GET", "AK", `/api/v1/instances/${InstanceId}`, "json", req, runtime), new GetInstanceResponse({}));
  }

  async getInstanceImage(InstanceId: string): Promise<GetInstanceImageResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceImageWithOptions(InstanceId, headers, runtime);
  }

  async getInstanceImageWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetInstanceImageResponse> {
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetInstanceImageResponse>(await this.doROARequest("GetInstanceImage", "2021-02-26", "HTTPS", "GET", "AK", `/api/v1/instances/${InstanceId}/image`, "json", req, runtime), new GetInstanceImageResponse({}));
  }

  async getInstanceShutdownTimer(InstanceId: string): Promise<GetInstanceShutdownTimerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceShutdownTimerWithOptions(InstanceId, headers, runtime);
  }

  async getInstanceShutdownTimerWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetInstanceShutdownTimerResponse> {
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetInstanceShutdownTimerResponse>(await this.doROARequest("GetInstanceShutdownTimer", "2021-02-26", "HTTPS", "GET", "AK", `/api/v1/instances/${InstanceId}/shutdownTimer`, "json", req, runtime), new GetInstanceShutdownTimerResponse({}));
  }

  async getInstanceSnapshot(InstanceId: string, InstanceSnapshotId: string): Promise<GetInstanceSnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceSnapshotWithOptions(InstanceId, InstanceSnapshotId, headers, runtime);
  }

  async getInstanceSnapshotWithOptions(InstanceId: string, InstanceSnapshotId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetInstanceSnapshotResponse> {
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    InstanceSnapshotId = OpenApiUtil.getEncodeParam(InstanceSnapshotId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetInstanceSnapshotResponse>(await this.doROARequest("GetInstanceSnapshot", "2021-02-26", "HTTPS", "GET", "AK", `/api/v1/instances/${InstanceId}/snapshots/${InstanceSnapshotId}`, "json", req, runtime), new GetInstanceSnapshotResponse({}));
  }

  async getInstanceType(InstanceTypeId: string): Promise<GetInstanceTypeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceTypeWithOptions(InstanceTypeId, headers, runtime);
  }

  async getInstanceTypeWithOptions(InstanceTypeId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetInstanceTypeResponse> {
    InstanceTypeId = OpenApiUtil.getEncodeParam(InstanceTypeId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetInstanceTypeResponse>(await this.doROARequest("GetInstanceType", "2021-02-26", "HTTPS", "GET", "AK", `/api/v1/instanceTypes/${InstanceTypeId}`, "json", req, runtime), new GetInstanceTypeResponse({}));
  }

  async getInstanceUrl(InstanceId: string): Promise<GetInstanceUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceUrlWithOptions(InstanceId, headers, runtime);
  }

  async getInstanceUrlWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetInstanceUrlResponse> {
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetInstanceUrlResponse>(await this.doROARequest("GetInstanceUrl", "2021-02-26", "HTTPS", "GET", "AK", `/api/v1/instances/${InstanceId}/url`, "json", req, runtime), new GetInstanceUrlResponse({}));
  }

  async getInstancesStatistics(request: GetInstancesStatisticsRequest): Promise<GetInstancesStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstancesStatisticsWithOptions(request, headers, runtime);
  }

  async getInstancesStatisticsWithOptions(request: GetInstancesStatisticsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetInstancesStatisticsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.workspaceIds)) {
      query["WorkspaceIds"] = request.workspaceIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetInstancesStatisticsResponse>(await this.doROARequest("GetInstancesStatistics", "2021-02-26", "HTTPS", "GET", "AK", `/api/v1/statistics/instances`, "json", req, runtime), new GetInstancesStatisticsResponse({}));
  }

  async getUserConfig(): Promise<GetUserConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUserConfigWithOptions(headers, runtime);
  }

  async getUserConfigWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetUserConfigResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetUserConfigResponse>(await this.doROARequest("GetUserConfig", "2021-02-26", "HTTPS", "GET", "AK", `/api/v1/users/config`, "json", req, runtime), new GetUserConfigResponse({}));
  }

  async getUserResourceAuthorizationStatus(): Promise<GetUserResourceAuthorizationStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUserResourceAuthorizationStatusWithOptions(headers, runtime);
  }

  async getUserResourceAuthorizationStatusWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetUserResourceAuthorizationStatusResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetUserResourceAuthorizationStatusResponse>(await this.doROARequest("GetUserResourceAuthorizationStatus", "2021-02-26", "HTTPS", "GET", "AK", `/api/v1/users/resourceAuthorizationStatus`, "json", req, runtime), new GetUserResourceAuthorizationStatusResponse({}));
  }

  async getUserResourceStatus(): Promise<GetUserResourceStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUserResourceStatusWithOptions(headers, runtime);
  }

  async getUserResourceStatusWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetUserResourceStatusResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetUserResourceStatusResponse>(await this.doROARequest("GetUserResourceStatus", "2021-02-26", "HTTPS", "GET", "AK", `/api/v1/users/resourceStatus`, "json", req, runtime), new GetUserResourceStatusResponse({}));
  }

  async getUserSpecialVersionGpuResourceInfo(request: GetUserSpecialVersionGpuResourceInfoRequest): Promise<GetUserSpecialVersionGpuResourceInfoResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUserSpecialVersionGpuResourceInfoWithOptions(request, headers, runtime);
  }

  async getUserSpecialVersionGpuResourceInfoWithOptions(request: GetUserSpecialVersionGpuResourceInfoRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetUserSpecialVersionGpuResourceInfoResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.payType)) {
      query["PayType"] = request.payType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetUserSpecialVersionGpuResourceInfoResponse>(await this.doROARequest("GetUserSpecialVersionGpuResourceInfo", "2021-02-26", "HTTPS", "GET", "AK", `/api/v1/users/specialVersionGpuResourceInfo`, "json", req, runtime), new GetUserSpecialVersionGpuResourceInfoResponse({}));
  }

  async listConfigs(): Promise<ListConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listConfigsWithOptions(headers, runtime);
  }

  async listConfigsWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListConfigsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ListConfigsResponse>(await this.doROARequest("ListConfigs", "2021-02-26", "HTTPS", "GET", "AK", `/api/v1/configs`, "json", req, runtime), new ListConfigsResponse({}));
  }

  async listDatasets(request: ListDatasetsRequest): Promise<ListDatasetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDatasetsWithOptions(request, headers, runtime);
  }

  async listDatasetsWithOptions(request: ListDatasetsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDatasetsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListDatasetsResponse>(await this.doROARequest("ListDatasets", "2021-02-26", "HTTPS", "GET", "AK", `/api/v1/datasets`, "json", req, runtime), new ListDatasetsResponse({}));
  }

  async listEcsSpecs(request: ListEcsSpecsRequest): Promise<ListEcsSpecsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEcsSpecsWithOptions(request, headers, runtime);
  }

  async listEcsSpecsWithOptions(request: ListEcsSpecsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListEcsSpecsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.acceleratorTypeEquals)) {
      query["AcceleratorTypeEquals"] = request.acceleratorTypeEquals;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListEcsSpecsResponse>(await this.doROARequest("ListEcsSpecs", "2021-02-26", "HTTPS", "GET", "AK", `/api/v1/ecsSpecs`, "json", req, runtime), new ListEcsSpecsResponse({}));
  }

  async listImages(request: ListImagesRequest): Promise<ListImagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listImagesWithOptions(request, headers, runtime);
  }

  async listImagesWithOptions(request: ListImagesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListImagesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.acceleratorTypeEquals)) {
      query["AcceleratorTypeEquals"] = request.acceleratorTypeEquals;
    }

    if (!Util.isUnset(request.imageNameContains)) {
      query["ImageNameContains"] = request.imageNameContains;
    }

    if (!Util.isUnset(request.imageTypeEquals)) {
      query["ImageTypeEquals"] = request.imageTypeEquals;
    }

    if (!Util.isUnset(request.product)) {
      query["Product"] = request.product;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListImagesResponse>(await this.doROARequest("ListImages", "2021-02-26", "HTTPS", "GET", "AK", `/api/v1/images`, "json", req, runtime), new ListImagesResponse({}));
  }

  async listInstanceSnapshots(InstanceId: string): Promise<ListInstanceSnapshotsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstanceSnapshotsWithOptions(InstanceId, headers, runtime);
  }

  async listInstanceSnapshotsWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListInstanceSnapshotsResponse> {
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ListInstanceSnapshotsResponse>(await this.doROARequest("ListInstanceSnapshots", "2021-02-26", "HTTPS", "GET", "AK", `/api/v1/instances/${InstanceId}/snapshots`, "json", req, runtime), new ListInstanceSnapshotsResponse({}));
  }

  async listInstanceTypes(request: ListInstanceTypesRequest): Promise<ListInstanceTypesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstanceTypesWithOptions(request, headers, runtime);
  }

  async listInstanceTypesWithOptions(request: ListInstanceTypesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListInstanceTypesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.acceleratorType)) {
      query["AcceleratorType"] = request.acceleratorType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListInstanceTypesResponse>(await this.doROARequest("ListInstanceTypes", "2021-02-26", "HTTPS", "GET", "AK", `/api/v1/instanceTypes`, "json", req, runtime), new ListInstanceTypesResponse({}));
  }

  async listInstances(request: ListInstancesRequest): Promise<ListInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstancesWithOptions(request, headers, runtime);
  }

  async listInstancesWithOptions(request: ListInstancesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListInstancesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.inWorkspace)) {
      query["InWorkspace"] = request.inWorkspace;
    }

    if (!Util.isUnset(request.instanceNameContains)) {
      query["InstanceNameContains"] = request.instanceNameContains;
    }

    if (!Util.isUnset(request.instanceStatusEquals)) {
      query["InstanceStatusEquals"] = request.instanceStatusEquals;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.sortOrder)) {
      query["SortOrder"] = request.sortOrder;
    }

    if (!Util.isUnset(request.workspaceIdEquals)) {
      query["WorkspaceIdEquals"] = request.workspaceIdEquals;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListInstancesResponse>(await this.doROARequest("ListInstances", "2021-02-26", "HTTPS", "GET", "AK", `/api/v1/instances`, "json", req, runtime), new ListInstancesResponse({}));
  }

  async listInstancesStatus(request: ListInstancesStatusRequest): Promise<ListInstancesStatusResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstancesStatusWithOptions(request, headers, runtime);
  }

  async listInstancesStatusWithOptions(request: ListInstancesStatusRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListInstancesStatusResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceIds)) {
      query["InstanceIds"] = request.instanceIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListInstancesStatusResponse>(await this.doROARequest("ListInstancesStatus", "2021-02-26", "HTTPS", "GET", "AK", `/api/v1/statuses/instances`, "json", req, runtime), new ListInstancesStatusResponse({}));
  }

  async listNamespaces(): Promise<ListNamespacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listNamespacesWithOptions(headers, runtime);
  }

  async listNamespacesWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListNamespacesResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ListNamespacesResponse>(await this.doROARequest("ListNamespaces", "2021-02-26", "HTTPS", "GET", "AK", `/api/v1/imageRegistry/namespaces`, "json", req, runtime), new ListNamespacesResponse({}));
  }

  async listNases(): Promise<ListNasesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listNasesWithOptions(headers, runtime);
  }

  async listNasesWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListNasesResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ListNasesResponse>(await this.doROARequest("ListNases", "2021-02-26", "HTTPS", "GET", "AK", `/api/v1/nases`, "json", req, runtime), new ListNasesResponse({}));
  }

  async listNetworkSecurityGroups(VpcId: string): Promise<ListNetworkSecurityGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listNetworkSecurityGroupsWithOptions(VpcId, headers, runtime);
  }

  async listNetworkSecurityGroupsWithOptions(VpcId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListNetworkSecurityGroupsResponse> {
    VpcId = OpenApiUtil.getEncodeParam(VpcId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ListNetworkSecurityGroupsResponse>(await this.doROARequest("ListNetworkSecurityGroups", "2021-02-26", "HTTPS", "GET", "AK", `/api/v1/network/vpcs/${VpcId}/securityGroups`, "json", req, runtime), new ListNetworkSecurityGroupsResponse({}));
  }

  async listNetworkVSwitches(VpcId: string): Promise<ListNetworkVSwitchesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listNetworkVSwitchesWithOptions(VpcId, headers, runtime);
  }

  async listNetworkVSwitchesWithOptions(VpcId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListNetworkVSwitchesResponse> {
    VpcId = OpenApiUtil.getEncodeParam(VpcId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ListNetworkVSwitchesResponse>(await this.doROARequest("ListNetworkVSwitches", "2021-02-26", "HTTPS", "GET", "AK", `/api/v1/network/vpcs/${VpcId}/vSwitches`, "json", req, runtime), new ListNetworkVSwitchesResponse({}));
  }

  async listNetworkVpcs(): Promise<ListNetworkVpcsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listNetworkVpcsWithOptions(headers, runtime);
  }

  async listNetworkVpcsWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListNetworkVpcsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ListNetworkVpcsResponse>(await this.doROARequest("ListNetworkVpcs", "2021-02-26", "HTTPS", "GET", "AK", `/api/v1/network/vpcs`, "json", req, runtime), new ListNetworkVpcsResponse({}));
  }

  async listRegions(): Promise<ListRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRegionsWithOptions(headers, runtime);
  }

  async listRegionsWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListRegionsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ListRegionsResponse>(await this.doROARequest("ListRegions", "2021-02-26", "HTTPS", "GET", "AK", `/api/v1/configs/regions`, "json", req, runtime), new ListRegionsResponse({}));
  }

  async listRepositories(Namespace: string): Promise<ListRepositoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listRepositoriesWithOptions(Namespace, headers, runtime);
  }

  async listRepositoriesWithOptions(Namespace: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListRepositoriesResponse> {
    Namespace = OpenApiUtil.getEncodeParam(Namespace);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ListRepositoriesResponse>(await this.doROARequest("ListRepositories", "2021-02-26", "HTTPS", "GET", "AK", `/api/v1/imageRegistry/namespaces/${Namespace}/repositories`, "json", req, runtime), new ListRepositoriesResponse({}));
  }

  async listUserClusters(): Promise<ListUserClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listUserClustersWithOptions(headers, runtime);
  }

  async listUserClustersWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListUserClustersResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ListUserClustersResponse>(await this.doROARequest("ListUserClusters", "2021-02-26", "HTTPS", "GET", "AK", `/api/v1/users/clusters`, "json", req, runtime), new ListUserClustersResponse({}));
  }

  async listUserWorkNodes(request: ListUserWorkNodesRequest): Promise<ListUserWorkNodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listUserWorkNodesWithOptions(request, headers, runtime);
  }

  async listUserWorkNodesWithOptions(request: ListUserWorkNodesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListUserWorkNodesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.clusterId)) {
      query["ClusterId"] = request.clusterId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListUserWorkNodesResponse>(await this.doROARequest("ListUserWorkNodes", "2021-02-26", "HTTPS", "GET", "AK", `/api/v1/users/workerNodes`, "json", req, runtime), new ListUserWorkNodesResponse({}));
  }

  async startInstance(InstanceId: string): Promise<StartInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startInstanceWithOptions(InstanceId, headers, runtime);
  }

  async startInstanceWithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StartInstanceResponse> {
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<StartInstanceResponse>(await this.doROARequest("StartInstance", "2021-02-26", "HTTPS", "PUT", "AK", `/api/v1/instances/${InstanceId}/start`, "json", req, runtime), new StartInstanceResponse({}));
  }

  async stopInstance(InstanceId: string, request: StopInstanceRequest): Promise<StopInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopInstanceWithOptions(InstanceId, request, headers, runtime);
  }

  async stopInstanceWithOptions(InstanceId: string, request: StopInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StopInstanceResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.saveImage)) {
      query["SaveImage"] = request.saveImage;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<StopInstanceResponse>(await this.doROARequest("StopInstance", "2021-02-26", "HTTPS", "PUT", "AK", `/api/v1/instances/${InstanceId}/stop`, "json", req, runtime), new StopInstanceResponse({}));
  }

  async updateInstance(InstanceId: string, request: UpdateInstanceRequest): Promise<UpdateInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateInstanceWithOptions(InstanceId, request, headers, runtime);
  }

  async updateInstanceWithOptions(InstanceId: string, request: UpdateInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateInstanceResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<UpdateInstanceResponse>(await this.doROARequest("UpdateInstance", "2021-02-26", "HTTPS", "PUT", "AK", `/api/v1/instances/${InstanceId}`, "json", req, runtime), new UpdateInstanceResponse({}));
  }

  async updateInstanceSnapshot(InstanceId: string, InstanceSnapshotId: string, request: UpdateInstanceSnapshotRequest): Promise<UpdateInstanceSnapshotResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateInstanceSnapshotWithOptions(InstanceId, InstanceSnapshotId, request, headers, runtime);
  }

  async updateInstanceSnapshotWithOptions(InstanceId: string, InstanceSnapshotId: string, request: UpdateInstanceSnapshotRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateInstanceSnapshotResponse> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    InstanceSnapshotId = OpenApiUtil.getEncodeParam(InstanceSnapshotId);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceSnapshotName)) {
      body["InstanceSnapshotName"] = request.instanceSnapshotName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<UpdateInstanceSnapshotResponse>(await this.doROARequest("UpdateInstanceSnapshot", "2021-02-26", "HTTPS", "PUT", "AK", `/api/v1/instances/${InstanceId}/snapshots/${InstanceSnapshotId}`, "json", req, runtime), new UpdateInstanceSnapshotResponse({}));
  }

}

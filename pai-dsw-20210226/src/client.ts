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

export class CreateInstanceShutdownTimerV2Request extends $tea.Model {
  dueTime?: string;
  remainingTimeInMs?: number;
  static names(): { [key: string]: string } {
    return {
      dueTime: 'DueTime',
      remainingTimeInMs: 'RemainingTimeInMs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dueTime: 'string',
      remainingTimeInMs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceShutdownTimerV2ResponseBody extends $tea.Model {
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

export class CreateInstanceShutdownTimerV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateInstanceShutdownTimerV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateInstanceShutdownTimerV2ResponseBody,
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

export class CreateInstanceSnapshotV2Request extends $tea.Model {
  imageUrl?: string;
  snapshotDescription?: string;
  snapshotName?: string;
  static names(): { [key: string]: string } {
    return {
      imageUrl: 'ImageUrl',
      snapshotDescription: 'SnapshotDescription',
      snapshotName: 'SnapshotName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageUrl: 'string',
      snapshotDescription: 'string',
      snapshotName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceSnapshotV2ResponseBody extends $tea.Model {
  instanceId?: string;
  requestId?: string;
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      requestId: 'RequestId',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      requestId: 'string',
      snapshotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceSnapshotV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateInstanceSnapshotV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateInstanceSnapshotV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceV2Request extends $tea.Model {
  accessibility?: string;
  datasets?: CreateInstanceV2RequestDatasets[];
  ecsSpec?: string;
  environmentVariables?: { [key: string]: string };
  imageId?: string;
  imageUrl?: string;
  instanceName?: string;
  userVpc?: CreateInstanceV2RequestUserVpc;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      datasets: 'Datasets',
      ecsSpec: 'EcsSpec',
      environmentVariables: 'EnvironmentVariables',
      imageId: 'ImageId',
      imageUrl: 'ImageUrl',
      instanceName: 'InstanceName',
      userVpc: 'UserVpc',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      datasets: { 'type': 'array', 'itemType': CreateInstanceV2RequestDatasets },
      ecsSpec: 'string',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      imageId: 'string',
      imageUrl: 'string',
      instanceName: 'string',
      userVpc: CreateInstanceV2RequestUserVpc,
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceV2ResponseBody extends $tea.Model {
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

export class CreateInstanceV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateInstanceV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateInstanceV2ResponseBody,
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

export class DeleteInstanceShutdownTimerV2ResponseBody extends $tea.Model {
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

export class DeleteInstanceShutdownTimerV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteInstanceShutdownTimerV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteInstanceShutdownTimerV2ResponseBody,
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

export class DeleteInstanceSnapshotV2ResponseBody extends $tea.Model {
  instanceId?: string;
  requestId?: string;
  snapshotId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      requestId: 'RequestId',
      snapshotId: 'SnapshotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      requestId: 'string',
      snapshotId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceSnapshotV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteInstanceSnapshotV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteInstanceSnapshotV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteInstanceV2ResponseBody extends $tea.Model {
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

export class DeleteInstanceV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteInstanceV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteInstanceV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FoobarResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

export class FoobarResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: FoobarResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FoobarResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Foobar1Response extends $tea.Model {
  headers: { [key: string]: string };
  body: any;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: 'any',
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

export class GetInstanceShutdownTimerV2ResponseBody extends $tea.Model {
  dueTime?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  instanceId?: string;
  remainingTimeInMs?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dueTime: 'DueTime',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      instanceId: 'InstanceId',
      remainingTimeInMs: 'RemainingTimeInMs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dueTime: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      instanceId: 'string',
      remainingTimeInMs: 'number',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceShutdownTimerV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: GetInstanceShutdownTimerV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetInstanceShutdownTimerV2ResponseBody,
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

export class GetInstanceSnapshotV2ResponseBody extends $tea.Model {
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  imageId?: string;
  imageUrl?: string;
  instanceId?: string;
  reasonCode?: string;
  reasonMessage?: string;
  requestId?: string;
  snapshotId?: string;
  snapshotName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      imageId: 'ImageId',
      imageUrl: 'ImageUrl',
      instanceId: 'InstanceId',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      requestId: 'RequestId',
      snapshotId: 'SnapshotId',
      snapshotName: 'SnapshotName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      imageId: 'string',
      imageUrl: 'string',
      instanceId: 'string',
      reasonCode: 'string',
      reasonMessage: 'string',
      requestId: 'string',
      snapshotId: 'string',
      snapshotName: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceSnapshotV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: GetInstanceSnapshotV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetInstanceSnapshotV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceV2ResponseBody extends $tea.Model {
  acceleratorType?: string;
  accessibility?: string;
  accumulatedRunningTimeInMs?: number;
  datasets?: GetInstanceV2ResponseBodyDatasets[];
  ecsSpec?: string;
  environmentVariables?: { [key: string]: string };
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  imageId?: string;
  imageName?: string;
  imageUrl?: string;
  instanceId?: string;
  instanceName?: string;
  instanceShutdownTimer?: GetInstanceV2ResponseBodyInstanceShutdownTimer;
  instanceUrl?: string;
  jupyterlabUrl?: string;
  latestSnapshot?: GetInstanceV2ResponseBodyLatestSnapshot;
  paymentType?: string;
  reasonCode?: string;
  reasonMessage?: string;
  requestId?: string;
  status?: string;
  terminalUrl?: string;
  userId?: string;
  userVpc?: GetInstanceV2ResponseBodyUserVpc;
  webIDEUrl?: string;
  workspaceId?: string;
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorType: 'AcceleratorType',
      accessibility: 'Accessibility',
      accumulatedRunningTimeInMs: 'AccumulatedRunningTimeInMs',
      datasets: 'Datasets',
      ecsSpec: 'EcsSpec',
      environmentVariables: 'EnvironmentVariables',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageUrl: 'ImageUrl',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceShutdownTimer: 'InstanceShutdownTimer',
      instanceUrl: 'InstanceUrl',
      jupyterlabUrl: 'JupyterlabUrl',
      latestSnapshot: 'LatestSnapshot',
      paymentType: 'PaymentType',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      requestId: 'RequestId',
      status: 'Status',
      terminalUrl: 'TerminalUrl',
      userId: 'UserId',
      userVpc: 'UserVpc',
      webIDEUrl: 'WebIDEUrl',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorType: 'string',
      accessibility: 'string',
      accumulatedRunningTimeInMs: 'number',
      datasets: { 'type': 'array', 'itemType': GetInstanceV2ResponseBodyDatasets },
      ecsSpec: 'string',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      imageId: 'string',
      imageName: 'string',
      imageUrl: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceShutdownTimer: GetInstanceV2ResponseBodyInstanceShutdownTimer,
      instanceUrl: 'string',
      jupyterlabUrl: 'string',
      latestSnapshot: GetInstanceV2ResponseBodyLatestSnapshot,
      paymentType: 'string',
      reasonCode: 'string',
      reasonMessage: 'string',
      requestId: 'string',
      status: 'string',
      terminalUrl: 'string',
      userId: 'string',
      userVpc: GetInstanceV2ResponseBodyUserVpc,
      webIDEUrl: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: GetInstanceV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetInstanceV2ResponseBody,
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

export class GetUserConfigV2ResponseBody extends $tea.Model {
  accountSufficient?: boolean;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accountSufficient: 'AccountSufficient',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountSufficient: 'boolean',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserConfigV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: GetUserConfigV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetUserConfigV2ResponseBody,
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

export class ListEcsSpecsV2Request extends $tea.Model {
  acceleratorType?: string;
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorType: 'AcceleratorType',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorType: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEcsSpecsV2ResponseBody extends $tea.Model {
  ecsSpecs?: ListEcsSpecsV2ResponseBodyEcsSpecs[];
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
      ecsSpecs: { 'type': 'array', 'itemType': ListEcsSpecsV2ResponseBodyEcsSpecs },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEcsSpecsV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: ListEcsSpecsV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListEcsSpecsV2ResponseBody,
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

export class ListInstanceSnapshotV2Request extends $tea.Model {
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceSnapshotV2ResponseBody extends $tea.Model {
  requestId?: string;
  snapshots?: ListInstanceSnapshotV2ResponseBodySnapshots[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      snapshots: 'Snapshots',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      snapshots: { 'type': 'array', 'itemType': ListInstanceSnapshotV2ResponseBodySnapshots },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceSnapshotV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: ListInstanceSnapshotV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListInstanceSnapshotV2ResponseBody,
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

export class ListInstanceStatisticsV2Request extends $tea.Model {
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

export class ListInstanceStatisticsV2ResponseBody extends $tea.Model {
  requestId?: string;
  statistics?: { [key: string]: {[key: string]: any} };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      statistics: { 'type': 'map', 'keyType': 'string', 'valueType': '{[key: string]: any}' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceStatisticsV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: ListInstanceStatisticsV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListInstanceStatisticsV2ResponseBody,
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

export class ListInstancesV2Request extends $tea.Model {
  instanceName?: string;
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  status?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceName: 'InstanceName',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      status: 'Status',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceName: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
      status: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesV2ResponseBody extends $tea.Model {
  instances?: ListInstancesV2ResponseBodyInstances[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      instances: 'Instances',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': ListInstancesV2ResponseBodyInstances },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: ListInstancesV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListInstancesV2ResponseBody,
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

export class StartInstanceV2ResponseBody extends $tea.Model {
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

export class StartInstanceV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: StartInstanceV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartInstanceV2ResponseBody,
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

export class StopInstanceV2Request extends $tea.Model {
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

export class StopInstanceV2ResponseBody extends $tea.Model {
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

export class StopInstanceV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: StopInstanceV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopInstanceV2ResponseBody,
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

export class UpdateInstanceV2Request extends $tea.Model {
  acceleratorType?: string;
  accessibility?: string;
  accumulatedRunningTimeInMs?: number;
  datasets?: UpdateInstanceV2RequestDatasets[];
  ecsSpec?: string;
  environmentVariables?: { [key: string]: string };
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  imageId?: string;
  imageName?: string;
  imageUrl?: string;
  instanceId?: string;
  instanceName?: string;
  instanceShutdownTimer?: UpdateInstanceV2RequestInstanceShutdownTimer;
  instanceUrl?: string;
  jupyterlabUrl?: string;
  latestSnapshot?: UpdateInstanceV2RequestLatestSnapshot;
  paymentType?: string;
  reasonCode?: string;
  reasonMessage?: string;
  status?: string;
  terminalUrl?: string;
  userId?: string;
  userVpc?: UpdateInstanceV2RequestUserVpc;
  webIDEUrl?: string;
  workspaceId?: string;
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorType: 'AcceleratorType',
      accessibility: 'Accessibility',
      accumulatedRunningTimeInMs: 'AccumulatedRunningTimeInMs',
      datasets: 'Datasets',
      ecsSpec: 'EcsSpec',
      environmentVariables: 'EnvironmentVariables',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageUrl: 'ImageUrl',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceShutdownTimer: 'InstanceShutdownTimer',
      instanceUrl: 'InstanceUrl',
      jupyterlabUrl: 'JupyterlabUrl',
      latestSnapshot: 'LatestSnapshot',
      paymentType: 'PaymentType',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      status: 'Status',
      terminalUrl: 'TerminalUrl',
      userId: 'UserId',
      userVpc: 'UserVpc',
      webIDEUrl: 'WebIDEUrl',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorType: 'string',
      accessibility: 'string',
      accumulatedRunningTimeInMs: 'number',
      datasets: { 'type': 'array', 'itemType': UpdateInstanceV2RequestDatasets },
      ecsSpec: 'string',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      imageId: 'string',
      imageName: 'string',
      imageUrl: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceShutdownTimer: UpdateInstanceV2RequestInstanceShutdownTimer,
      instanceUrl: 'string',
      jupyterlabUrl: 'string',
      latestSnapshot: UpdateInstanceV2RequestLatestSnapshot,
      paymentType: 'string',
      reasonCode: 'string',
      reasonMessage: 'string',
      status: 'string',
      terminalUrl: 'string',
      userId: 'string',
      userVpc: UpdateInstanceV2RequestUserVpc,
      webIDEUrl: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceV2ResponseBody extends $tea.Model {
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

export class UpdateInstanceV2Response extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateInstanceV2ResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateInstanceV2ResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateV3InstanceByUserRequest extends $tea.Model {
  userId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateV3InstanceByUserResponseBody extends $tea.Model {
  code?: string;
  httpStatusCode?: number;
  idList?: number[];
  message?: string;
  requestId?: string;
  success?: boolean;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      idList: 'IdList',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      idList: { 'type': 'array', 'itemType': 'number' },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateV3InstanceByUserResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateV3InstanceByUserResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateV3InstanceByUserResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceV2RequestDatasets extends $tea.Model {
  datasetId?: string;
  mountPath?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      mountPath: 'MountPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
      mountPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateInstanceV2RequestUserVpc extends $tea.Model {
  securityGroupId?: string;
  vSwitchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      securityGroupId: 'SecurityGroupId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceV2ResponseBodyDatasets extends $tea.Model {
  datasetId?: string;
  mountPath?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      mountPath: 'MountPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
      mountPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceV2ResponseBodyInstanceShutdownTimer extends $tea.Model {
  dueTime?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  instanceId?: string;
  remainingTimeInMs?: number;
  static names(): { [key: string]: string } {
    return {
      dueTime: 'DueTime',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      instanceId: 'InstanceId',
      remainingTimeInMs: 'RemainingTimeInMs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dueTime: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      instanceId: 'string',
      remainingTimeInMs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceV2ResponseBodyLatestSnapshot extends $tea.Model {
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  imageId?: string;
  imageName?: string;
  imageUrl?: string;
  repositoryUrl?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageUrl: 'ImageUrl',
      repositoryUrl: 'RepositoryUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      imageId: 'string',
      imageName: 'string',
      imageUrl: 'string',
      repositoryUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceV2ResponseBodyUserVpc extends $tea.Model {
  securityGroupId?: string;
  vSwitchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      securityGroupId: 'SecurityGroupId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEcsSpecsV2ResponseBodyEcsSpecs extends $tea.Model {
  acceleratorType?: string;
  CPU?: number;
  currency?: string;
  GPU?: number;
  GPUType?: string;
  instanceBandwidthRx?: number;
  instanceType?: string;
  memory?: number;
  price?: number;
  systemDiskCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      acceleratorType: 'AcceleratorType',
      CPU: 'CPU',
      currency: 'Currency',
      GPU: 'GPU',
      GPUType: 'GPUType',
      instanceBandwidthRx: 'InstanceBandwidthRx',
      instanceType: 'InstanceType',
      memory: 'Memory',
      price: 'Price',
      systemDiskCapacity: 'SystemDiskCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorType: 'string',
      CPU: 'number',
      currency: 'string',
      GPU: 'number',
      GPUType: 'string',
      instanceBandwidthRx: 'number',
      instanceType: 'string',
      memory: 'number',
      price: 'number',
      systemDiskCapacity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceSnapshotV2ResponseBodySnapshots extends $tea.Model {
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  imageId?: string;
  imageUrl?: string;
  instanceId?: string;
  reasonCode?: string;
  reasonMessage?: string;
  snapshotId?: string;
  snapshotName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      imageId: 'ImageId',
      imageUrl: 'ImageUrl',
      instanceId: 'InstanceId',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      snapshotId: 'SnapshotId',
      snapshotName: 'SnapshotName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      imageId: 'string',
      imageUrl: 'string',
      instanceId: 'string',
      reasonCode: 'string',
      reasonMessage: 'string',
      snapshotId: 'string',
      snapshotName: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesV2ResponseBodyInstancesDatasets extends $tea.Model {
  datasetId?: string;
  mountPath?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      mountPath: 'MountPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
      mountPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesV2ResponseBodyInstancesInstanceShutdownTimer extends $tea.Model {
  dueTime?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  instanceId?: string;
  remainingTimeInMs?: number;
  static names(): { [key: string]: string } {
    return {
      dueTime: 'DueTime',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      instanceId: 'InstanceId',
      remainingTimeInMs: 'RemainingTimeInMs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dueTime: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      instanceId: 'string',
      remainingTimeInMs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesV2ResponseBodyInstancesLatestSnapshot extends $tea.Model {
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  imageId?: string;
  imageName?: string;
  imageUrl?: string;
  repositoryUrl?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageUrl: 'ImageUrl',
      repositoryUrl: 'RepositoryUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      imageId: 'string',
      imageName: 'string',
      imageUrl: 'string',
      repositoryUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesV2ResponseBodyInstancesUserVpc extends $tea.Model {
  securityGroupId?: string;
  vSwitchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      securityGroupId: 'SecurityGroupId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesV2ResponseBodyInstances extends $tea.Model {
  acceleratorType?: string;
  accessibility?: string;
  accumulatedRunningTimeInMs?: number;
  datasets?: ListInstancesV2ResponseBodyInstancesDatasets[];
  ecsSpec?: string;
  environmentVariables?: { [key: string]: string };
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  imageId?: string;
  imageName?: string;
  imageUrl?: string;
  instanceId?: string;
  instanceName?: string;
  instanceShutdownTimer?: ListInstancesV2ResponseBodyInstancesInstanceShutdownTimer;
  instanceUrl?: string;
  jupyterlabUrl?: string;
  latestSnapshot?: ListInstancesV2ResponseBodyInstancesLatestSnapshot;
  paymentType?: string;
  reasonCode?: string;
  reasonMessage?: string;
  status?: string;
  terminalUrl?: string;
  userId?: string;
  userVpc?: ListInstancesV2ResponseBodyInstancesUserVpc;
  webIDEUrl?: string;
  workspaceId?: string;
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorType: 'AcceleratorType',
      accessibility: 'Accessibility',
      accumulatedRunningTimeInMs: 'AccumulatedRunningTimeInMs',
      datasets: 'Datasets',
      ecsSpec: 'EcsSpec',
      environmentVariables: 'EnvironmentVariables',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageUrl: 'ImageUrl',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceShutdownTimer: 'InstanceShutdownTimer',
      instanceUrl: 'InstanceUrl',
      jupyterlabUrl: 'JupyterlabUrl',
      latestSnapshot: 'LatestSnapshot',
      paymentType: 'PaymentType',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      status: 'Status',
      terminalUrl: 'TerminalUrl',
      userId: 'UserId',
      userVpc: 'UserVpc',
      webIDEUrl: 'WebIDEUrl',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorType: 'string',
      accessibility: 'string',
      accumulatedRunningTimeInMs: 'number',
      datasets: { 'type': 'array', 'itemType': ListInstancesV2ResponseBodyInstancesDatasets },
      ecsSpec: 'string',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      imageId: 'string',
      imageName: 'string',
      imageUrl: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceShutdownTimer: ListInstancesV2ResponseBodyInstancesInstanceShutdownTimer,
      instanceUrl: 'string',
      jupyterlabUrl: 'string',
      latestSnapshot: ListInstancesV2ResponseBodyInstancesLatestSnapshot,
      paymentType: 'string',
      reasonCode: 'string',
      reasonMessage: 'string',
      status: 'string',
      terminalUrl: 'string',
      userId: 'string',
      userVpc: ListInstancesV2ResponseBodyInstancesUserVpc,
      webIDEUrl: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceV2RequestDatasets extends $tea.Model {
  datasetId?: string;
  mountPath?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      mountPath: 'MountPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
      mountPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceV2RequestInstanceShutdownTimer extends $tea.Model {
  dueTime?: string;
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  instanceId?: string;
  remainingTimeInMs?: number;
  static names(): { [key: string]: string } {
    return {
      dueTime: 'DueTime',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      instanceId: 'InstanceId',
      remainingTimeInMs: 'RemainingTimeInMs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dueTime: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      instanceId: 'string',
      remainingTimeInMs: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceV2RequestLatestSnapshot extends $tea.Model {
  gmtCreateTime?: string;
  gmtModifiedTime?: string;
  imageId?: string;
  imageName?: string;
  imageUrl?: string;
  repositoryUrl?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      imageId: 'ImageId',
      imageName: 'ImageName',
      imageUrl: 'ImageUrl',
      repositoryUrl: 'RepositoryUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      imageId: 'string',
      imageName: 'string',
      imageUrl: 'string',
      repositoryUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceV2RequestUserVpc extends $tea.Model {
  securityGroupId?: string;
  vSwitchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      securityGroupId: 'SecurityGroupId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      securityGroupId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
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
    let params = new $OpenApi.Params({
      action: "CreateInstance",
      version: "2021-02-26",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateInstanceResponse>(await this.callApi(params, req, runtime), new CreateInstanceResponse({}));
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
    let params = new $OpenApi.Params({
      action: "CreateInstanceShutdownTimer",
      version: "2021-02-26",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${InstanceId}/shutdownTimer`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateInstanceShutdownTimerResponse>(await this.callApi(params, req, runtime), new CreateInstanceShutdownTimerResponse({}));
  }

  async createInstanceShutdownTimerV2(InstanceId: string, request: CreateInstanceShutdownTimerV2Request): Promise<CreateInstanceShutdownTimerV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInstanceShutdownTimerV2WithOptions(InstanceId, request, headers, runtime);
  }

  async createInstanceShutdownTimerV2WithOptions(InstanceId: string, request: CreateInstanceShutdownTimerV2Request, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateInstanceShutdownTimerV2Response> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dueTime)) {
      body["DueTime"] = request.dueTime;
    }

    if (!Util.isUnset(request.remainingTimeInMs)) {
      body["RemainingTimeInMs"] = request.remainingTimeInMs;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateInstanceShutdownTimerV2",
      version: "2021-02-26",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${InstanceId}/shutdowntimer`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateInstanceShutdownTimerV2Response>(await this.callApi(params, req, runtime), new CreateInstanceShutdownTimerV2Response({}));
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
    let params = new $OpenApi.Params({
      action: "CreateInstanceSnapshot",
      version: "2021-02-26",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${InstanceId}/snapshots`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateInstanceSnapshotResponse>(await this.callApi(params, req, runtime), new CreateInstanceSnapshotResponse({}));
  }

  async createInstanceSnapshotV2(InstanceId: string, request: CreateInstanceSnapshotV2Request): Promise<CreateInstanceSnapshotV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInstanceSnapshotV2WithOptions(InstanceId, request, headers, runtime);
  }

  async createInstanceSnapshotV2WithOptions(InstanceId: string, request: CreateInstanceSnapshotV2Request, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateInstanceSnapshotV2Response> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.imageUrl)) {
      body["ImageUrl"] = request.imageUrl;
    }

    if (!Util.isUnset(request.snapshotDescription)) {
      body["SnapshotDescription"] = request.snapshotDescription;
    }

    if (!Util.isUnset(request.snapshotName)) {
      body["SnapshotName"] = request.snapshotName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateInstanceSnapshotV2",
      version: "2021-02-26",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${InstanceId}/snapshots`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateInstanceSnapshotV2Response>(await this.callApi(params, req, runtime), new CreateInstanceSnapshotV2Response({}));
  }

  async createInstanceV2(request: CreateInstanceV2Request): Promise<CreateInstanceV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createInstanceV2WithOptions(request, headers, runtime);
  }

  async createInstanceV2WithOptions(request: CreateInstanceV2Request, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateInstanceV2Response> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.accessibility)) {
      body["Accessibility"] = request.accessibility;
    }

    if (!Util.isUnset(request.datasets)) {
      body["Datasets"] = request.datasets;
    }

    if (!Util.isUnset(request.ecsSpec)) {
      body["EcsSpec"] = request.ecsSpec;
    }

    if (!Util.isUnset(request.environmentVariables)) {
      body["EnvironmentVariables"] = request.environmentVariables;
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
    let params = new $OpenApi.Params({
      action: "CreateInstanceV2",
      version: "2021-02-26",
      protocol: "HTTPS",
      pathname: `/api/v2/instances`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateInstanceV2Response>(await this.callApi(params, req, runtime), new CreateInstanceV2Response({}));
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
    let params = new $OpenApi.Params({
      action: "DeleteInstance",
      version: "2021-02-26",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${InstanceId}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteInstanceResponse>(await this.callApi(params, req, runtime), new DeleteInstanceResponse({}));
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
    let params = new $OpenApi.Params({
      action: "DeleteInstanceShutdownTimer",
      version: "2021-02-26",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${InstanceId}/shutdownTimer`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteInstanceShutdownTimerResponse>(await this.callApi(params, req, runtime), new DeleteInstanceShutdownTimerResponse({}));
  }

  async deleteInstanceShutdownTimerV2(InstanceId: string): Promise<DeleteInstanceShutdownTimerV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInstanceShutdownTimerV2WithOptions(InstanceId, headers, runtime);
  }

  async deleteInstanceShutdownTimerV2WithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteInstanceShutdownTimerV2Response> {
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteInstanceShutdownTimerV2",
      version: "2021-02-26",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${InstanceId}/shutdowntimer`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteInstanceShutdownTimerV2Response>(await this.callApi(params, req, runtime), new DeleteInstanceShutdownTimerV2Response({}));
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
    let params = new $OpenApi.Params({
      action: "DeleteInstanceSnapshot",
      version: "2021-02-26",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${InstanceId}/snapshots/${InstanceSnapshotId}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteInstanceSnapshotResponse>(await this.callApi(params, req, runtime), new DeleteInstanceSnapshotResponse({}));
  }

  async deleteInstanceSnapshotV2(InstanceId: string, SnapshotId: string): Promise<DeleteInstanceSnapshotV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInstanceSnapshotV2WithOptions(InstanceId, SnapshotId, headers, runtime);
  }

  async deleteInstanceSnapshotV2WithOptions(InstanceId: string, SnapshotId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteInstanceSnapshotV2Response> {
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    SnapshotId = OpenApiUtil.getEncodeParam(SnapshotId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteInstanceSnapshotV2",
      version: "2021-02-26",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${InstanceId}/snapshots/${SnapshotId}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteInstanceSnapshotV2Response>(await this.callApi(params, req, runtime), new DeleteInstanceSnapshotV2Response({}));
  }

  async deleteInstanceV2(InstanceId: string): Promise<DeleteInstanceV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteInstanceV2WithOptions(InstanceId, headers, runtime);
  }

  async deleteInstanceV2WithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteInstanceV2Response> {
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteInstanceV2",
      version: "2021-02-26",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${InstanceId}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteInstanceV2Response>(await this.callApi(params, req, runtime), new DeleteInstanceV2Response({}));
  }

  async foobar(): Promise<FoobarResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.foobarWithOptions(headers, runtime);
  }

  async foobarWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<FoobarResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "Foobar",
      version: "2021-02-26",
      protocol: "HTTPS",
      pathname: `/api/v1/foobar`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<FoobarResponse>(await this.callApi(params, req, runtime), new FoobarResponse({}));
  }

  async foobar1(): Promise<Foobar1Response> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.foobar1WithOptions(headers, runtime);
  }

  async foobar1WithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<Foobar1Response> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "Foobar1",
      version: "2021-02-26",
      protocol: "HTTPS",
      pathname: `/api/v1/foobar1`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "any",
    });
    return $tea.cast<Foobar1Response>(await this.callApi(params, req, runtime), new Foobar1Response({}));
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
    let params = new $OpenApi.Params({
      action: "GetAuthorization",
      version: "2021-02-26",
      protocol: "HTTPS",
      pathname: `/api/v1/authorization`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetAuthorizationResponse>(await this.callApi(params, req, runtime), new GetAuthorizationResponse({}));
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
    let params = new $OpenApi.Params({
      action: "GetDashboardStatistics",
      version: "2021-02-26",
      protocol: "HTTPS",
      pathname: `/api/v1/statistics/dashboard`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDashboardStatisticsResponse>(await this.callApi(params, req, runtime), new GetDashboardStatisticsResponse({}));
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
    let params = new $OpenApi.Params({
      action: "GetInstance",
      version: "2021-02-26",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${InstanceId}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetInstanceResponse>(await this.callApi(params, req, runtime), new GetInstanceResponse({}));
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
    let params = new $OpenApi.Params({
      action: "GetInstanceShutdownTimer",
      version: "2021-02-26",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${InstanceId}/shutdownTimer`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetInstanceShutdownTimerResponse>(await this.callApi(params, req, runtime), new GetInstanceShutdownTimerResponse({}));
  }

  async getInstanceShutdownTimerV2(InstanceId: string): Promise<GetInstanceShutdownTimerV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceShutdownTimerV2WithOptions(InstanceId, headers, runtime);
  }

  async getInstanceShutdownTimerV2WithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetInstanceShutdownTimerV2Response> {
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetInstanceShutdownTimerV2",
      version: "2021-02-26",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${InstanceId}/shutdowntimer`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetInstanceShutdownTimerV2Response>(await this.callApi(params, req, runtime), new GetInstanceShutdownTimerV2Response({}));
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
    let params = new $OpenApi.Params({
      action: "GetInstanceSnapshot",
      version: "2021-02-26",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${InstanceId}/snapshots/${InstanceSnapshotId}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetInstanceSnapshotResponse>(await this.callApi(params, req, runtime), new GetInstanceSnapshotResponse({}));
  }

  async getInstanceSnapshotV2(InstanceId: string, SnapshotId: string): Promise<GetInstanceSnapshotV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceSnapshotV2WithOptions(InstanceId, SnapshotId, headers, runtime);
  }

  async getInstanceSnapshotV2WithOptions(InstanceId: string, SnapshotId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetInstanceSnapshotV2Response> {
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    SnapshotId = OpenApiUtil.getEncodeParam(SnapshotId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetInstanceSnapshotV2",
      version: "2021-02-26",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${InstanceId}/snapshots/${SnapshotId}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetInstanceSnapshotV2Response>(await this.callApi(params, req, runtime), new GetInstanceSnapshotV2Response({}));
  }

  async getInstanceV2(InstanceId: string): Promise<GetInstanceV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getInstanceV2WithOptions(InstanceId, headers, runtime);
  }

  async getInstanceV2WithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetInstanceV2Response> {
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetInstanceV2",
      version: "2021-02-26",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${InstanceId}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetInstanceV2Response>(await this.callApi(params, req, runtime), new GetInstanceV2Response({}));
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
    let params = new $OpenApi.Params({
      action: "GetInstancesStatistics",
      version: "2021-02-26",
      protocol: "HTTPS",
      pathname: `/api/v1/statistics/instances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetInstancesStatisticsResponse>(await this.callApi(params, req, runtime), new GetInstancesStatisticsResponse({}));
  }

  async getUserConfigV2(): Promise<GetUserConfigV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUserConfigV2WithOptions(headers, runtime);
  }

  async getUserConfigV2WithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetUserConfigV2Response> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetUserConfigV2",
      version: "2021-02-26",
      protocol: "HTTPS",
      pathname: `/api/v2/userconfig`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetUserConfigV2Response>(await this.callApi(params, req, runtime), new GetUserConfigV2Response({}));
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
    let params = new $OpenApi.Params({
      action: "ListEcsSpecs",
      version: "2021-02-26",
      protocol: "HTTPS",
      pathname: `/api/v1/ecsSpecs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListEcsSpecsResponse>(await this.callApi(params, req, runtime), new ListEcsSpecsResponse({}));
  }

  async listEcsSpecsV2(request: ListEcsSpecsV2Request): Promise<ListEcsSpecsV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEcsSpecsV2WithOptions(request, headers, runtime);
  }

  async listEcsSpecsV2WithOptions(request: ListEcsSpecsV2Request, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListEcsSpecsV2Response> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.acceleratorType)) {
      query["AcceleratorType"] = request.acceleratorType;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
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

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListEcsSpecsV2",
      version: "2021-02-26",
      protocol: "HTTPS",
      pathname: `/api/v2/ecsspecs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListEcsSpecsV2Response>(await this.callApi(params, req, runtime), new ListEcsSpecsV2Response({}));
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
    let params = new $OpenApi.Params({
      action: "ListImages",
      version: "2021-02-26",
      protocol: "HTTPS",
      pathname: `/api/v1/images`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListImagesResponse>(await this.callApi(params, req, runtime), new ListImagesResponse({}));
  }

  async listInstanceSnapshotV2(InstanceId: string, request: ListInstanceSnapshotV2Request): Promise<ListInstanceSnapshotV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstanceSnapshotV2WithOptions(InstanceId, request, headers, runtime);
  }

  async listInstanceSnapshotV2WithOptions(InstanceId: string, request: ListInstanceSnapshotV2Request, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListInstanceSnapshotV2Response> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
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

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInstanceSnapshotV2",
      version: "2021-02-26",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${InstanceId}/snapshots`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListInstanceSnapshotV2Response>(await this.callApi(params, req, runtime), new ListInstanceSnapshotV2Response({}));
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
    let params = new $OpenApi.Params({
      action: "ListInstanceSnapshots",
      version: "2021-02-26",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${InstanceId}/snapshots`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListInstanceSnapshotsResponse>(await this.callApi(params, req, runtime), new ListInstanceSnapshotsResponse({}));
  }

  async listInstanceStatisticsV2(request: ListInstanceStatisticsV2Request): Promise<ListInstanceStatisticsV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstanceStatisticsV2WithOptions(request, headers, runtime);
  }

  async listInstanceStatisticsV2WithOptions(request: ListInstanceStatisticsV2Request, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListInstanceStatisticsV2Response> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.workspaceIds)) {
      query["WorkspaceIds"] = request.workspaceIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInstanceStatisticsV2",
      version: "2021-02-26",
      protocol: "HTTPS",
      pathname: `/api/v2/instancestatistics`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListInstanceStatisticsV2Response>(await this.callApi(params, req, runtime), new ListInstanceStatisticsV2Response({}));
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
    let params = new $OpenApi.Params({
      action: "ListInstances",
      version: "2021-02-26",
      protocol: "HTTPS",
      pathname: `/api/v1/instances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListInstancesResponse>(await this.callApi(params, req, runtime), new ListInstancesResponse({}));
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
    let params = new $OpenApi.Params({
      action: "ListInstancesStatus",
      version: "2021-02-26",
      protocol: "HTTPS",
      pathname: `/api/v1/statuses/instances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListInstancesStatusResponse>(await this.callApi(params, req, runtime), new ListInstancesStatusResponse({}));
  }

  async listInstancesV2(request: ListInstancesV2Request): Promise<ListInstancesV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstancesV2WithOptions(request, headers, runtime);
  }

  async listInstancesV2WithOptions(request: ListInstancesV2Request, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListInstancesV2Response> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
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

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInstancesV2",
      version: "2021-02-26",
      protocol: "HTTPS",
      pathname: `/api/v2/instances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListInstancesV2Response>(await this.callApi(params, req, runtime), new ListInstancesV2Response({}));
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
    let params = new $OpenApi.Params({
      action: "StartInstance",
      version: "2021-02-26",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${InstanceId}/start`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StartInstanceResponse>(await this.callApi(params, req, runtime), new StartInstanceResponse({}));
  }

  async startInstanceV2(InstanceId: string): Promise<StartInstanceV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startInstanceV2WithOptions(InstanceId, headers, runtime);
  }

  async startInstanceV2WithOptions(InstanceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StartInstanceV2Response> {
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "StartInstanceV2",
      version: "2021-02-26",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${InstanceId}/start`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StartInstanceV2Response>(await this.callApi(params, req, runtime), new StartInstanceV2Response({}));
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
    let params = new $OpenApi.Params({
      action: "StopInstance",
      version: "2021-02-26",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${InstanceId}/stop`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StopInstanceResponse>(await this.callApi(params, req, runtime), new StopInstanceResponse({}));
  }

  async stopInstanceV2(InstanceId: string, request: StopInstanceV2Request): Promise<StopInstanceV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopInstanceV2WithOptions(InstanceId, request, headers, runtime);
  }

  async stopInstanceV2WithOptions(InstanceId: string, request: StopInstanceV2Request, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StopInstanceV2Response> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.saveImage)) {
      body["SaveImage"] = request.saveImage;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "StopInstanceV2",
      version: "2021-02-26",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${InstanceId}/stop`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<StopInstanceV2Response>(await this.callApi(params, req, runtime), new StopInstanceV2Response({}));
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
    let params = new $OpenApi.Params({
      action: "UpdateInstance",
      version: "2021-02-26",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${InstanceId}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateInstanceResponse>(await this.callApi(params, req, runtime), new UpdateInstanceResponse({}));
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
    let params = new $OpenApi.Params({
      action: "UpdateInstanceSnapshot",
      version: "2021-02-26",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/${InstanceId}/snapshots/${InstanceSnapshotId}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateInstanceSnapshotResponse>(await this.callApi(params, req, runtime), new UpdateInstanceSnapshotResponse({}));
  }

  async updateInstanceV2(InstanceId: string, request: UpdateInstanceV2Request): Promise<UpdateInstanceV2Response> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateInstanceV2WithOptions(InstanceId, request, headers, runtime);
  }

  async updateInstanceV2WithOptions(InstanceId: string, request: UpdateInstanceV2Request, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateInstanceV2Response> {
    Util.validateModel(request);
    InstanceId = OpenApiUtil.getEncodeParam(InstanceId);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.acceleratorType)) {
      body["AcceleratorType"] = request.acceleratorType;
    }

    if (!Util.isUnset(request.accessibility)) {
      body["Accessibility"] = request.accessibility;
    }

    if (!Util.isUnset(request.accumulatedRunningTimeInMs)) {
      body["AccumulatedRunningTimeInMs"] = request.accumulatedRunningTimeInMs;
    }

    if (!Util.isUnset(request.datasets)) {
      body["Datasets"] = request.datasets;
    }

    if (!Util.isUnset(request.ecsSpec)) {
      body["EcsSpec"] = request.ecsSpec;
    }

    if (!Util.isUnset(request.environmentVariables)) {
      body["EnvironmentVariables"] = request.environmentVariables;
    }

    if (!Util.isUnset(request.gmtCreateTime)) {
      body["GmtCreateTime"] = request.gmtCreateTime;
    }

    if (!Util.isUnset(request.gmtModifiedTime)) {
      body["GmtModifiedTime"] = request.gmtModifiedTime;
    }

    if (!Util.isUnset(request.imageId)) {
      body["ImageId"] = request.imageId;
    }

    if (!Util.isUnset(request.imageName)) {
      body["ImageName"] = request.imageName;
    }

    if (!Util.isUnset(request.imageUrl)) {
      body["ImageUrl"] = request.imageUrl;
    }

    if (!Util.isUnset(request.instanceId)) {
      body["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceName)) {
      body["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset($tea.toMap(request.instanceShutdownTimer))) {
      body["InstanceShutdownTimer"] = request.instanceShutdownTimer;
    }

    if (!Util.isUnset(request.instanceUrl)) {
      body["InstanceUrl"] = request.instanceUrl;
    }

    if (!Util.isUnset(request.jupyterlabUrl)) {
      body["JupyterlabUrl"] = request.jupyterlabUrl;
    }

    if (!Util.isUnset($tea.toMap(request.latestSnapshot))) {
      body["LatestSnapshot"] = request.latestSnapshot;
    }

    if (!Util.isUnset(request.paymentType)) {
      body["PaymentType"] = request.paymentType;
    }

    if (!Util.isUnset(request.reasonCode)) {
      body["ReasonCode"] = request.reasonCode;
    }

    if (!Util.isUnset(request.reasonMessage)) {
      body["ReasonMessage"] = request.reasonMessage;
    }

    if (!Util.isUnset(request.status)) {
      body["Status"] = request.status;
    }

    if (!Util.isUnset(request.terminalUrl)) {
      body["TerminalUrl"] = request.terminalUrl;
    }

    if (!Util.isUnset(request.userId)) {
      body["UserId"] = request.userId;
    }

    if (!Util.isUnset($tea.toMap(request.userVpc))) {
      body["UserVpc"] = request.userVpc;
    }

    if (!Util.isUnset(request.webIDEUrl)) {
      body["WebIDEUrl"] = request.webIDEUrl;
    }

    if (!Util.isUnset(request.workspaceId)) {
      body["WorkspaceId"] = request.workspaceId;
    }

    if (!Util.isUnset(request.workspaceName)) {
      body["WorkspaceName"] = request.workspaceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateInstanceV2",
      version: "2021-02-26",
      protocol: "HTTPS",
      pathname: `/api/v2/instances/${InstanceId}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateInstanceV2Response>(await this.callApi(params, req, runtime), new UpdateInstanceV2Response({}));
  }

  async updateV3InstanceByUser(request: UpdateV3InstanceByUserRequest): Promise<UpdateV3InstanceByUserResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateV3InstanceByUserWithOptions(request, headers, runtime);
  }

  async updateV3InstanceByUserWithOptions(request: UpdateV3InstanceByUserRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateV3InstanceByUserResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.userId)) {
      query["UserId"] = request.userId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateV3InstanceByUser",
      version: "2021-02-26",
      protocol: "HTTPS",
      pathname: `/api/v1/instances/migrate/user`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateV3InstanceByUserResponse>(await this.callApi(params, req, runtime), new UpdateV3InstanceByUserResponse({}));
  }

}

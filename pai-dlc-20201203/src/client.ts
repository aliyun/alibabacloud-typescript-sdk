// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AliyunAccounts extends $tea.Model {
  aliyunUid?: string;
  employeeId?: string;
  gmtCreateTime?: string;
  gmtModifyTime?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunUid: 'AliyunUid',
      employeeId: 'EmployeeId',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifyTime: 'GmtModifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'string',
      employeeId: 'string',
      gmtCreateTime: 'string',
      gmtModifyTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CodeSourceItem extends $tea.Model {
  codeBranch?: string;
  codeCommit?: string;
  codeRepo?: string;
  codeRepoAccessToken?: string;
  codeRepoUserName?: string;
  codeSourceId?: string;
  description?: string;
  displayName?: string;
  gmtCreateTime?: string;
  gmtModifyTime?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      codeBranch: 'CodeBranch',
      codeCommit: 'CodeCommit',
      codeRepo: 'CodeRepo',
      codeRepoAccessToken: 'CodeRepoAccessToken',
      codeRepoUserName: 'CodeRepoUserName',
      codeSourceId: 'CodeSourceId',
      description: 'Description',
      displayName: 'DisplayName',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifyTime: 'GmtModifyTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeBranch: 'string',
      codeCommit: 'string',
      codeRepo: 'string',
      codeRepoAccessToken: 'string',
      codeRepoUserName: 'string',
      codeSourceId: 'string',
      description: 'string',
      displayName: 'string',
      gmtCreateTime: 'string',
      gmtModifyTime: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContainerSpec extends $tea.Model {
  args?: string[];
  command?: string[];
  env?: EnvVar[];
  image?: string;
  name?: string;
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'Args',
      command: 'Command',
      env: 'Env',
      image: 'Image',
      name: 'Name',
      workingDir: 'WorkingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: { 'type': 'array', 'itemType': 'string' },
      command: { 'type': 'array', 'itemType': 'string' },
      env: { 'type': 'array', 'itemType': EnvVar },
      image: 'string',
      name: 'string',
      workingDir: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataSourceItem extends $tea.Model {
  dataSourceId?: string;
  dataSourceType?: string;
  description?: string;
  displayName?: string;
  endpoint?: string;
  fileSystemId?: string;
  gmtCreateTime?: string;
  gmtModifyTime?: string;
  mountPath?: string;
  options?: string;
  path?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      dataSourceType: 'DataSourceType',
      description: 'Description',
      displayName: 'DisplayName',
      endpoint: 'Endpoint',
      fileSystemId: 'FileSystemId',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifyTime: 'GmtModifyTime',
      mountPath: 'MountPath',
      options: 'Options',
      path: 'Path',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'string',
      dataSourceType: 'string',
      description: 'string',
      displayName: 'string',
      endpoint: 'string',
      fileSystemId: 'string',
      gmtCreateTime: 'string',
      gmtModifyTime: 'string',
      mountPath: 'string',
      options: 'string',
      path: 'string',
      userId: 'string',
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
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      gpu: 'Gpu',
      gpuType: 'GpuType',
      instanceType: 'InstanceType',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      gpu: 'number',
      gpuType: 'string',
      instanceType: 'string',
      memory: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnvVar extends $tea.Model {
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

export class ExtraPodSpec extends $tea.Model {
  initContainers?: ContainerSpec[];
  podAnnotations?: { [key: string]: string };
  podLabels?: { [key: string]: string };
  sharedVolumeMountPaths?: string[];
  sideCarContainers?: ContainerSpec[];
  static names(): { [key: string]: string } {
    return {
      initContainers: 'InitContainers',
      podAnnotations: 'PodAnnotations',
      podLabels: 'PodLabels',
      sharedVolumeMountPaths: 'SharedVolumeMountPaths',
      sideCarContainers: 'SideCarContainers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      initContainers: { 'type': 'array', 'itemType': ContainerSpec },
      podAnnotations: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      podLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      sharedVolumeMountPaths: { 'type': 'array', 'itemType': 'string' },
      sideCarContainers: { 'type': 'array', 'itemType': ContainerSpec },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GPUDetail extends $tea.Model {
  GPU?: string;
  GPUType?: string;
  GPUTypeFullName?: string;
  static names(): { [key: string]: string } {
    return {
      GPU: 'GPU',
      GPUType: 'GPUType',
      GPUTypeFullName: 'GPUTypeFullName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      GPU: 'string',
      GPUType: 'string',
      GPUTypeFullName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageItem extends $tea.Model {
  acceleratorType?: string;
  framework?: string;
  imageProviderType?: string;
  imageTag?: string;
  imageUrl?: string;
  imageUrlVpc?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorType: 'AcceleratorType',
      framework: 'Framework',
      imageProviderType: 'ImageProviderType',
      imageTag: 'ImageTag',
      imageUrl: 'ImageUrl',
      imageUrlVpc: 'ImageUrlVpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorType: 'string',
      framework: 'string',
      imageProviderType: 'string',
      imageTag: 'string',
      imageUrl: 'string',
      imageUrlVpc: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JobElasticSpec extends $tea.Model {
  AIMasterType?: string;
  enableElasticTraining?: boolean;
  maxParallelism?: number;
  minParallelism?: number;
  static names(): { [key: string]: string } {
    return {
      AIMasterType: 'AIMasterType',
      enableElasticTraining: 'EnableElasticTraining',
      maxParallelism: 'MaxParallelism',
      minParallelism: 'MinParallelism',
    };
  }

  static types(): { [key: string]: any } {
    return {
      AIMasterType: 'string',
      enableElasticTraining: 'boolean',
      maxParallelism: 'number',
      minParallelism: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JobItem extends $tea.Model {
  codeSource?: JobItemCodeSource;
  dataSources?: JobItemDataSources[];
  displayName?: string;
  duration?: number;
  envs?: { [key: string]: string };
  gmtCreateTime?: string;
  gmtFinishTime?: string;
  jobId?: string;
  jobSpecs?: JobSpec[];
  jobType?: string;
  reasonCode?: string;
  reasonMessage?: string;
  resourceId?: string;
  settings?: JobSettings;
  status?: string;
  thirdpartyLibDir?: string;
  thirdpartyLibs?: string[];
  userCommand?: string;
  userId?: string;
  workspaceId?: string;
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      codeSource: 'CodeSource',
      dataSources: 'DataSources',
      displayName: 'DisplayName',
      duration: 'Duration',
      envs: 'Envs',
      gmtCreateTime: 'GmtCreateTime',
      gmtFinishTime: 'GmtFinishTime',
      jobId: 'JobId',
      jobSpecs: 'JobSpecs',
      jobType: 'JobType',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      resourceId: 'ResourceId',
      settings: 'Settings',
      status: 'Status',
      thirdpartyLibDir: 'ThirdpartyLibDir',
      thirdpartyLibs: 'ThirdpartyLibs',
      userCommand: 'UserCommand',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeSource: JobItemCodeSource,
      dataSources: { 'type': 'array', 'itemType': JobItemDataSources },
      displayName: 'string',
      duration: 'number',
      envs: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      gmtCreateTime: 'string',
      gmtFinishTime: 'string',
      jobId: 'string',
      jobSpecs: { 'type': 'array', 'itemType': JobSpec },
      jobType: 'string',
      reasonCode: 'string',
      reasonMessage: 'string',
      resourceId: 'string',
      settings: JobSettings,
      status: 'string',
      thirdpartyLibDir: 'string',
      thirdpartyLibs: { 'type': 'array', 'itemType': 'string' },
      userCommand: 'string',
      userId: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JobSettings extends $tea.Model {
  businessUserId?: string;
  caller?: string;
  pipelineId?: string;
  tags?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      businessUserId: 'BusinessUserId',
      caller: 'Caller',
      pipelineId: 'PipelineId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessUserId: 'string',
      caller: 'string',
      pipelineId: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JobSpec extends $tea.Model {
  ecsSpec?: string;
  extraPodSpec?: ExtraPodSpec;
  image?: string;
  podCount?: number;
  resourceConfig?: ResourceConfig;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      ecsSpec: 'EcsSpec',
      extraPodSpec: 'ExtraPodSpec',
      image: 'Image',
      podCount: 'PodCount',
      resourceConfig: 'ResourceConfig',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ecsSpec: 'string',
      extraPodSpec: ExtraPodSpec,
      image: 'string',
      podCount: 'number',
      resourceConfig: ResourceConfig,
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Member extends $tea.Model {
  memberId?: string;
  memberType?: string;
  static names(): { [key: string]: string } {
    return {
      memberId: 'MemberId',
      memberType: 'MemberType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberId: 'string',
      memberType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Metric extends $tea.Model {
  time?: number;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'number',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodeMetric extends $tea.Model {
  metrics?: Metric[];
  nodeName?: string;
  static names(): { [key: string]: string } {
    return {
      metrics: 'Metrics',
      nodeName: 'NodeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: { 'type': 'array', 'itemType': Metric },
      nodeName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PodMetric extends $tea.Model {
  metrics?: Metric[];
  podId?: string;
  static names(): { [key: string]: string } {
    return {
      metrics: 'Metrics',
      podId: 'PodId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: { 'type': 'array', 'itemType': Metric },
      podId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Quota extends $tea.Model {
  clusterId?: string;
  clusterName?: string;
  isExclusiveQuota?: boolean;
  quotaId?: string;
  quotaName?: string;
  quotaType?: string;
  totalQuota?: QuotaDetail;
  usedQuota?: QuotaDetail;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      isExclusiveQuota: 'IsExclusiveQuota',
      quotaId: 'QuotaId',
      quotaName: 'QuotaName',
      quotaType: 'QuotaType',
      totalQuota: 'TotalQuota',
      usedQuota: 'UsedQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      isExclusiveQuota: 'boolean',
      quotaId: 'string',
      quotaName: 'string',
      quotaType: 'string',
      totalQuota: QuotaDetail,
      usedQuota: QuotaDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuotaDetail extends $tea.Model {
  CPU?: string;
  GPU?: string;
  GPUDetails?: GPUDetail[];
  GPUType?: string;
  GPUTypeFullName?: string;
  memory?: string;
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
      GPU: 'GPU',
      GPUDetails: 'GPUDetails',
      GPUType: 'GPUType',
      GPUTypeFullName: 'GPUTypeFullName',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: 'string',
      GPU: 'string',
      GPUDetails: { 'type': 'array', 'itemType': GPUDetail },
      GPUType: 'string',
      GPUTypeFullName: 'string',
      memory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResourceConfig extends $tea.Model {
  CPU?: string;
  GPU?: string;
  GPUType?: string;
  memory?: string;
  sharedMemory?: string;
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
      GPU: 'GPU',
      GPUType: 'GPUType',
      memory: 'Memory',
      sharedMemory: 'SharedMemory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: 'string',
      GPU: 'string',
      GPUType: 'string',
      memory: 'string',
      sharedMemory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Resources extends $tea.Model {
  CPU?: string;
  GPU?: string;
  memory?: string;
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
      GPU: 'GPU',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: 'string',
      GPU: 'string',
      memory: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Tensorboard extends $tea.Model {
  dataSourceId?: string;
  displayName?: string;
  duration?: string;
  gmtCreateTime?: string;
  gmtModifyTime?: string;
  jobId?: string;
  reasonCode?: string;
  reasonMessage?: string;
  requestId?: string;
  status?: string;
  summaryPath?: string;
  tensorboardId?: string;
  tensorboardUrl?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      displayName: 'DisplayName',
      duration: 'Duration',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifyTime: 'GmtModifyTime',
      jobId: 'JobId',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      requestId: 'RequestId',
      status: 'Status',
      summaryPath: 'SummaryPath',
      tensorboardId: 'TensorboardId',
      tensorboardUrl: 'TensorboardUrl',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'string',
      displayName: 'string',
      duration: 'string',
      gmtCreateTime: 'string',
      gmtModifyTime: 'string',
      jobId: 'string',
      reasonCode: 'string',
      reasonMessage: 'string',
      requestId: 'string',
      status: 'string',
      summaryPath: 'string',
      tensorboardId: 'string',
      tensorboardUrl: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Workspace extends $tea.Model {
  creator?: string;
  gmtCreateTime?: string;
  gmtModifyTime?: string;
  members?: Member[];
  quotas?: Quota[];
  totalResources?: Resources;
  workspaceAdmins?: Member[];
  workspaceId?: string;
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'Creator',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifyTime: 'GmtModifyTime',
      members: 'Members',
      quotas: 'Quotas',
      totalResources: 'TotalResources',
      workspaceAdmins: 'WorkspaceAdmins',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      gmtCreateTime: 'string',
      gmtModifyTime: 'string',
      members: { 'type': 'array', 'itemType': Member },
      quotas: { 'type': 'array', 'itemType': Quota },
      totalResources: Resources,
      workspaceAdmins: { 'type': 'array', 'itemType': Member },
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetJobsStatisticsRequest extends $tea.Model {
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

export class BatchGetJobsStatisticsResponseBody extends $tea.Model {
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

export class BatchGetJobsStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchGetJobsStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchGetJobsStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCodeSourceRequest extends $tea.Model {
  codeBranch?: string;
  codeRepo?: string;
  codeRepoAccessToken?: string;
  codeRepoUserName?: string;
  description?: string;
  displayName?: string;
  mountPath?: string;
  static names(): { [key: string]: string } {
    return {
      codeBranch: 'CodeBranch',
      codeRepo: 'CodeRepo',
      codeRepoAccessToken: 'CodeRepoAccessToken',
      codeRepoUserName: 'CodeRepoUserName',
      description: 'Description',
      displayName: 'DisplayName',
      mountPath: 'MountPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeBranch: 'string',
      codeRepo: 'string',
      codeRepoAccessToken: 'string',
      codeRepoUserName: 'string',
      description: 'string',
      displayName: 'string',
      mountPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCodeSourceResponseBody extends $tea.Model {
  codeSourceId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      codeSourceId: 'CodeSourceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeSourceId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCodeSourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateCodeSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateCodeSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataSourceRequest extends $tea.Model {
  dataSourceType?: string;
  description?: string;
  displayName?: string;
  endpoint?: string;
  fileSystemId?: string;
  mountPath?: string;
  options?: string;
  path?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceType: 'DataSourceType',
      description: 'Description',
      displayName: 'DisplayName',
      endpoint: 'Endpoint',
      fileSystemId: 'FileSystemId',
      mountPath: 'MountPath',
      options: 'Options',
      path: 'Path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceType: 'string',
      description: 'string',
      displayName: 'string',
      endpoint: 'string',
      fileSystemId: 'string',
      mountPath: 'string',
      options: 'string',
      path: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataSourceResponseBody extends $tea.Model {
  dataSourceId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataSourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDataSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDataSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequest extends $tea.Model {
  codeSource?: CreateJobRequestCodeSource;
  dataSources?: CreateJobRequestDataSources[];
  displayName?: string;
  elasticSpec?: JobElasticSpec;
  envs?: { [key: string]: string };
  jobMaxRunningTimeMinutes?: number;
  jobSpecs?: JobSpec[];
  jobType?: string;
  priority?: number;
  resourceId?: string;
  settings?: JobSettings;
  thirdpartyLibDir?: string;
  thirdpartyLibs?: string[];
  userCommand?: string;
  userVpc?: CreateJobRequestUserVpc;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      codeSource: 'CodeSource',
      dataSources: 'DataSources',
      displayName: 'DisplayName',
      elasticSpec: 'ElasticSpec',
      envs: 'Envs',
      jobMaxRunningTimeMinutes: 'JobMaxRunningTimeMinutes',
      jobSpecs: 'JobSpecs',
      jobType: 'JobType',
      priority: 'Priority',
      resourceId: 'ResourceId',
      settings: 'Settings',
      thirdpartyLibDir: 'ThirdpartyLibDir',
      thirdpartyLibs: 'ThirdpartyLibs',
      userCommand: 'UserCommand',
      userVpc: 'UserVpc',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeSource: CreateJobRequestCodeSource,
      dataSources: { 'type': 'array', 'itemType': CreateJobRequestDataSources },
      displayName: 'string',
      elasticSpec: JobElasticSpec,
      envs: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      jobMaxRunningTimeMinutes: 'number',
      jobSpecs: { 'type': 'array', 'itemType': JobSpec },
      jobType: 'string',
      priority: 'number',
      resourceId: 'string',
      settings: JobSettings,
      thirdpartyLibDir: 'string',
      thirdpartyLibs: { 'type': 'array', 'itemType': 'string' },
      userCommand: 'string',
      userVpc: CreateJobRequestUserVpc,
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobResponseBody extends $tea.Model {
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

export class CreateJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQuotaRequest extends $tea.Model {
  quotaDetail?: QuotaDetail;
  quotaName?: string;
  quotaType?: string;
  static names(): { [key: string]: string } {
    return {
      quotaDetail: 'QuotaDetail',
      quotaName: 'QuotaName',
      quotaType: 'QuotaType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaDetail: QuotaDetail,
      quotaName: 'string',
      quotaType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQuotaResponseBody extends $tea.Model {
  quotaId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      quotaId: 'QuotaId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateQuotaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTensorboardRequest extends $tea.Model {
  workspaceId?: string;
  dataSourceId?: string;
  dataSources?: DataSourceItem[];
  displayName?: string;
  jobId?: string;
  maxRunningTimeMinutes?: number;
  summaryPath?: string;
  static names(): { [key: string]: string } {
    return {
      workspaceId: 'WorkspaceId',
      dataSourceId: 'DataSourceId',
      dataSources: 'DataSources',
      displayName: 'DisplayName',
      jobId: 'JobId',
      maxRunningTimeMinutes: 'MaxRunningTimeMinutes',
      summaryPath: 'SummaryPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspaceId: 'string',
      dataSourceId: 'string',
      dataSources: { 'type': 'array', 'itemType': DataSourceItem },
      displayName: 'string',
      jobId: 'string',
      maxRunningTimeMinutes: 'number',
      summaryPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTensorboardResponseBody extends $tea.Model {
  dataSourceId?: string;
  jobId?: string;
  requestId?: string;
  tensorboardId?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      jobId: 'JobId',
      requestId: 'RequestId',
      tensorboardId: 'TensorboardId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'string',
      jobId: 'string',
      requestId: 'string',
      tensorboardId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTensorboardResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateTensorboardResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateTensorboardResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCodeSourceResponseBody extends $tea.Model {
  codeSourceId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      codeSourceId: 'CodeSourceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeSourceId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCodeSourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteCodeSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteCodeSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSourceResponseBody extends $tea.Model {
  dataSourceId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDataSourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDataSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDataSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteJobResponseBody extends $tea.Model {
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

export class DeleteJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQuotaResponseBody extends $tea.Model {
  quotaId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      quotaId: 'QuotaId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteQuotaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTensorboardRequest extends $tea.Model {
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

export class DeleteTensorboardResponseBody extends $tea.Model {
  requestId?: string;
  tensorboardId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tensorboardId: 'TensorboardId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tensorboardId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTensorboardResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteTensorboardResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteTensorboardResponseBody,
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

export class GetCodeSourceResponseBody extends $tea.Model {
  codeBranch?: string;
  codeCommit?: string;
  codeRepo?: string;
  codeRepoAccessToken?: string;
  codeRepoUserName?: string;
  codeSourceId?: string;
  description?: string;
  displayName?: string;
  gmtCreateTime?: string;
  gmtModifyTime?: string;
  mountPath?: string;
  requestId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      codeBranch: 'CodeBranch',
      codeCommit: 'CodeCommit',
      codeRepo: 'CodeRepo',
      codeRepoAccessToken: 'CodeRepoAccessToken',
      codeRepoUserName: 'CodeRepoUserName',
      codeSourceId: 'CodeSourceId',
      description: 'Description',
      displayName: 'DisplayName',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifyTime: 'GmtModifyTime',
      mountPath: 'MountPath',
      requestId: 'RequestId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeBranch: 'string',
      codeCommit: 'string',
      codeRepo: 'string',
      codeRepoAccessToken: 'string',
      codeRepoUserName: 'string',
      codeSourceId: 'string',
      description: 'string',
      displayName: 'string',
      gmtCreateTime: 'string',
      gmtModifyTime: 'string',
      mountPath: 'string',
      requestId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCodeSourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetCodeSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetCodeSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceResponseBody extends $tea.Model {
  dataSourceId?: string;
  dataSourceType?: string;
  description?: string;
  displayName?: string;
  endpoint?: string;
  fileSystemId?: string;
  gmtCreateTime?: string;
  gmtModifyTime?: string;
  mountPath?: string;
  options?: string;
  path?: string;
  requestId?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      dataSourceType: 'DataSourceType',
      description: 'Description',
      displayName: 'DisplayName',
      endpoint: 'Endpoint',
      fileSystemId: 'FileSystemId',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifyTime: 'GmtModifyTime',
      mountPath: 'MountPath',
      options: 'Options',
      path: 'Path',
      requestId: 'RequestId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'string',
      dataSourceType: 'string',
      description: 'string',
      displayName: 'string',
      endpoint: 'string',
      fileSystemId: 'string',
      gmtCreateTime: 'string',
      gmtModifyTime: 'string',
      mountPath: 'string',
      options: 'string',
      path: 'string',
      requestId: 'string',
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDataSourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDataSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDataSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBody extends $tea.Model {
  clusterId?: string;
  codeSource?: GetJobResponseBodyCodeSource;
  dataSources?: GetJobResponseBodyDataSources[];
  displayName?: string;
  duration?: number;
  elasticSpec?: JobElasticSpec;
  envs?: { [key: string]: string };
  gmtCreateTime?: string;
  gmtFailedTime?: string;
  gmtFinishTime?: string;
  gmtRunningTime?: string;
  gmtStoppedTime?: string;
  gmtSubmittedTime?: string;
  gmtSuccessedTime?: string;
  jobId?: string;
  jobSpecs?: JobSpec[];
  jobType?: string;
  pods?: GetJobResponseBodyPods[];
  reasonCode?: string;
  reasonMessage?: string;
  requestId?: string;
  resourceId?: string;
  settings?: JobSettings;
  status?: string;
  thirdpartyLibDir?: string;
  thirdpartyLibs?: string[];
  userCommand?: string;
  userId?: string;
  workspaceId?: string;
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      codeSource: 'CodeSource',
      dataSources: 'DataSources',
      displayName: 'DisplayName',
      duration: 'Duration',
      elasticSpec: 'ElasticSpec',
      envs: 'Envs',
      gmtCreateTime: 'GmtCreateTime',
      gmtFailedTime: 'GmtFailedTime',
      gmtFinishTime: 'GmtFinishTime',
      gmtRunningTime: 'GmtRunningTime',
      gmtStoppedTime: 'GmtStoppedTime',
      gmtSubmittedTime: 'GmtSubmittedTime',
      gmtSuccessedTime: 'GmtSuccessedTime',
      jobId: 'JobId',
      jobSpecs: 'JobSpecs',
      jobType: 'JobType',
      pods: 'Pods',
      reasonCode: 'ReasonCode',
      reasonMessage: 'ReasonMessage',
      requestId: 'RequestId',
      resourceId: 'ResourceId',
      settings: 'Settings',
      status: 'Status',
      thirdpartyLibDir: 'ThirdpartyLibDir',
      thirdpartyLibs: 'ThirdpartyLibs',
      userCommand: 'UserCommand',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      codeSource: GetJobResponseBodyCodeSource,
      dataSources: { 'type': 'array', 'itemType': GetJobResponseBodyDataSources },
      displayName: 'string',
      duration: 'number',
      elasticSpec: JobElasticSpec,
      envs: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      gmtCreateTime: 'string',
      gmtFailedTime: 'string',
      gmtFinishTime: 'string',
      gmtRunningTime: 'string',
      gmtStoppedTime: 'string',
      gmtSubmittedTime: 'string',
      gmtSuccessedTime: 'string',
      jobId: 'string',
      jobSpecs: { 'type': 'array', 'itemType': JobSpec },
      jobType: 'string',
      pods: { 'type': 'array', 'itemType': GetJobResponseBodyPods },
      reasonCode: 'string',
      reasonMessage: 'string',
      requestId: 'string',
      resourceId: 'string',
      settings: JobSettings,
      status: 'string',
      thirdpartyLibDir: 'string',
      thirdpartyLibs: { 'type': 'array', 'itemType': 'string' },
      userCommand: 'string',
      userId: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobEventsRequest extends $tea.Model {
  endTime?: string;
  maxEventsNum?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      maxEventsNum: 'MaxEventsNum',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      maxEventsNum: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobEventsResponseBody extends $tea.Model {
  events?: string[];
  jobId?: string;
  requestId?: number;
  static names(): { [key: string]: string } {
    return {
      events: 'Events',
      jobId: 'JobId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': 'string' },
      jobId: 'string',
      requestId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobEventsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetJobEventsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetJobEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobMetricsRequest extends $tea.Model {
  endTime?: string;
  metricType?: string;
  startTime?: string;
  timeStep?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      metricType: 'MetricType',
      startTime: 'StartTime',
      timeStep: 'TimeStep',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      metricType: 'string',
      startTime: 'string',
      timeStep: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobMetricsResponseBody extends $tea.Model {
  jobId?: string;
  podMetrics?: PodMetric[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      podMetrics: 'PodMetrics',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      podMetrics: { 'type': 'array', 'itemType': PodMetric },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobMetricsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetJobMetricsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetJobMetricsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobsStatisticsRequest extends $tea.Model {
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

export class GetJobsStatisticsResponseBody extends $tea.Model {
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

export class GetJobsStatisticsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetJobsStatisticsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetJobsStatisticsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPodEventsRequest extends $tea.Model {
  endTime?: string;
  maxEventsNum?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      maxEventsNum: 'MaxEventsNum',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      maxEventsNum: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPodEventsResponseBody extends $tea.Model {
  events?: string[];
  jobId?: string;
  podId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      events: 'Events',
      jobId: 'JobId',
      podId: 'PodId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': 'string' },
      jobId: 'string',
      podId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPodEventsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetPodEventsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetPodEventsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPodLogsRequest extends $tea.Model {
  downloadToFile?: boolean;
  endTime?: string;
  maxLines?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      downloadToFile: 'DownloadToFile',
      endTime: 'EndTime',
      maxLines: 'MaxLines',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadToFile: 'boolean',
      endTime: 'string',
      maxLines: 'number',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPodLogsResponseBody extends $tea.Model {
  jobId?: string;
  logs?: string[];
  podId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      logs: 'Logs',
      podId: 'PodId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'string',
      logs: { 'type': 'array', 'itemType': 'string' },
      podId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPodLogsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetPodLogsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetPodLogsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaResponseBody extends $tea.Model {
  clusterId?: string;
  clusterName?: string;
  quotaId?: string;
  quotaName?: string;
  quotaType?: string;
  requestId?: string;
  totalQuota?: QuotaDetail;
  usedQuota?: QuotaDetail;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      quotaId: 'QuotaId',
      quotaName: 'QuotaName',
      quotaType: 'QuotaType',
      requestId: 'RequestId',
      totalQuota: 'TotalQuota',
      usedQuota: 'UsedQuota',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      quotaId: 'string',
      quotaName: 'string',
      quotaType: 'string',
      requestId: 'string',
      totalQuota: QuotaDetail,
      usedQuota: QuotaDetail,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQuotaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecurityGroupResponseBody extends $tea.Model {
  requestId?: string;
  securityGroupId?: string;
  securityGroupName?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityGroupId: 'SecurityGroupId',
      securityGroupName: 'SecurityGroupName',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityGroupId: 'string',
      securityGroupName: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSecurityGroupResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSecurityGroupResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSecurityGroupResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSwitchResponseBody extends $tea.Model {
  cidrBlock?: string;
  requestId?: string;
  vSwitchId?: string;
  vSwitchName?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      requestId: 'RequestId',
      vSwitchId: 'VSwitchId',
      vSwitchName: 'VSwitchName',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      requestId: 'string',
      vSwitchId: 'string',
      vSwitchName: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSwitchResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetSwitchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetSwitchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTensorboardRequest extends $tea.Model {
  jodId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      jodId: 'JodId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jodId: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTensorboardResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: Tensorboard;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: Tensorboard,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTokenRequest extends $tea.Model {
  expireTime?: number;
  targetId?: string;
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      expireTime: 'ExpireTime',
      targetId: 'TargetId',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireTime: 'number',
      targetId: 'string',
      targetType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTokenResponseBody extends $tea.Model {
  requestId?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserAuthorizationResponseBody extends $tea.Model {
  isPassed?: boolean;
  requestId?: number;
  static names(): { [key: string]: string } {
    return {
      isPassed: 'IsPassed',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isPassed: 'boolean',
      requestId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUserAuthorizationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetUserAuthorizationResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetUserAuthorizationResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVpcResponseBody extends $tea.Model {
  requestId?: string;
  vpcId?: number;
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vpcId: 'number',
      vpcName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVpcResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetVpcResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetVpcResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkspaceResponseBody extends $tea.Model {
  isWorkspaceAdmin?: boolean;
  requestId?: string;
  workspace?: Workspace;
  static names(): { [key: string]: string } {
    return {
      isWorkspaceAdmin: 'IsWorkspaceAdmin',
      requestId: 'RequestId',
      workspace: 'Workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isWorkspaceAdmin: 'boolean',
      requestId: 'string',
      workspace: Workspace,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkspaceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetWorkspaceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetWorkspaceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JobDispatchQueryRequest extends $tea.Model {
  algoName?: string;
  projectName?: string;
  properties?: { [key: string]: string };
  settings?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      algoName: 'AlgoName',
      projectName: 'ProjectName',
      properties: 'Properties',
      settings: 'Settings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algoName: 'string',
      projectName: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      settings: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JobDispatchQueryShrinkRequest extends $tea.Model {
  algoName?: string;
  projectName?: string;
  propertiesShrink?: string;
  settingsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      algoName: 'AlgoName',
      projectName: 'ProjectName',
      propertiesShrink: 'Properties',
      settingsShrink: 'Settings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algoName: 'string',
      projectName: 'string',
      propertiesShrink: 'string',
      settingsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JobDispatchQueryResponseBody extends $tea.Model {
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

export class JobDispatchQueryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: JobDispatchQueryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: JobDispatchQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JobDispatchSubmitRequest extends $tea.Model {
  algoName?: string;
  projectName?: string;
  properties?: { [key: string]: string };
  settings?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      algoName: 'AlgoName',
      projectName: 'ProjectName',
      properties: 'Properties',
      settings: 'Settings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algoName: 'string',
      projectName: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      settings: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JobDispatchSubmitResponseBody extends $tea.Model {
  jobUrl?: string;
  static names(): { [key: string]: string } {
    return {
      jobUrl: 'JobUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobUrl: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JobDispatchSubmitResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: JobDispatchSubmitResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: JobDispatchSubmitResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCodeSourcesRequest extends $tea.Model {
  displayName?: string;
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
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

export class ListCodeSourcesResponseBody extends $tea.Model {
  codeSources?: CodeSourceItem[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      codeSources: 'CodeSources',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeSources: { 'type': 'array', 'itemType': CodeSourceItem },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCodeSourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListCodeSourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListCodeSourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourcesRequest extends $tea.Model {
  dataSourceType?: string;
  displayName?: string;
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceType: 'DataSourceType',
      displayName: 'DisplayName',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceType: 'string',
      displayName: 'string',
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

export class ListDataSourcesResponseBody extends $tea.Model {
  dataSources?: DataSourceItem[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataSources: 'DataSources',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSources: { 'type': 'array', 'itemType': DataSourceItem },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataSourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDataSourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDataSourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEcsSpecsRequest extends $tea.Model {
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
  acceleratorType?: string;
  framework?: string;
  imageProviderType?: string;
  order?: string;
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      acceleratorType: 'AcceleratorType',
      framework: 'Framework',
      imageProviderType: 'ImageProviderType',
      order: 'Order',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorType: 'string',
      framework: 'string',
      imageProviderType: 'string',
      order: 'string',
      sortBy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImagesResponseBody extends $tea.Model {
  images?: ImageItem[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      images: 'Images',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': ImageItem },
      requestId: 'string',
      totalCount: 'number',
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

export class ListJobsRequest extends $tea.Model {
  businessUserId?: string;
  caller?: string;
  displayName?: string;
  endTime?: string;
  jobType?: string;
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  pipelineId?: string;
  resourceId?: string;
  showOwn?: boolean;
  sortBy?: string;
  startTime?: string;
  status?: string;
  tags?: { [key: string]: string };
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      businessUserId: 'BusinessUserId',
      caller: 'Caller',
      displayName: 'DisplayName',
      endTime: 'EndTime',
      jobType: 'JobType',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pipelineId: 'PipelineId',
      resourceId: 'ResourceId',
      showOwn: 'ShowOwn',
      sortBy: 'SortBy',
      startTime: 'StartTime',
      status: 'Status',
      tags: 'Tags',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessUserId: 'string',
      caller: 'string',
      displayName: 'string',
      endTime: 'string',
      jobType: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      pipelineId: 'string',
      resourceId: 'string',
      showOwn: 'boolean',
      sortBy: 'string',
      startTime: 'string',
      status: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsShrinkRequest extends $tea.Model {
  businessUserId?: string;
  caller?: string;
  displayName?: string;
  endTime?: string;
  jobType?: string;
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  pipelineId?: string;
  resourceId?: string;
  showOwn?: boolean;
  sortBy?: string;
  startTime?: string;
  status?: string;
  tagsShrink?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      businessUserId: 'BusinessUserId',
      caller: 'Caller',
      displayName: 'DisplayName',
      endTime: 'EndTime',
      jobType: 'JobType',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pipelineId: 'PipelineId',
      resourceId: 'ResourceId',
      showOwn: 'ShowOwn',
      sortBy: 'SortBy',
      startTime: 'StartTime',
      status: 'Status',
      tagsShrink: 'Tags',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessUserId: 'string',
      caller: 'string',
      displayName: 'string',
      endTime: 'string',
      jobType: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      pipelineId: 'string',
      resourceId: 'string',
      showOwn: 'boolean',
      sortBy: 'string',
      startTime: 'string',
      status: 'string',
      tagsShrink: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListJobsResponseBody extends $tea.Model {
  jobs?: JobItem[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      jobs: 'Jobs',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobs: { 'type': 'array', 'itemType': JobItem },
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

export class ListQuotasRequest extends $tea.Model {
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

export class ListQuotasResponseBody extends $tea.Model {
  quotas?: Quota[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      quotas: 'Quotas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotas: { 'type': 'array', 'itemType': Quota },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotasResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListQuotasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListQuotasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityGroupsRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityGroupsResponseBody extends $tea.Model {
  requestId?: string;
  securityGroups?: ListSecurityGroupsResponseBodySecurityGroups[];
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
      securityGroups: { 'type': 'array', 'itemType': ListSecurityGroupsResponseBodySecurityGroups },
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

export class ListSwitchesRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSwitchesResponseBody extends $tea.Model {
  requestId?: string;
  switches?: ListSwitchesResponseBodySwitches[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      switches: 'Switches',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      switches: { 'type': 'array', 'itemType': ListSwitchesResponseBodySwitches },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSwitchesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListSwitchesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListSwitchesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTensorboardsRequest extends $tea.Model {
  displayName?: string;
  endTime?: string;
  jobId?: string;
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  startTime?: string;
  status?: string;
  tensorboardId?: string;
  verbose?: boolean;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      endTime: 'EndTime',
      jobId: 'JobId',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      startTime: 'StartTime',
      status: 'Status',
      tensorboardId: 'TensorboardId',
      verbose: 'Verbose',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      endTime: 'string',
      jobId: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
      startTime: 'string',
      status: 'string',
      tensorboardId: 'string',
      verbose: 'boolean',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTensorboardsResponseBody extends $tea.Model {
  requestId?: string;
  tensorboards?: Tensorboard[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tensorboards: 'Tensorboards',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tensorboards: { 'type': 'array', 'itemType': Tensorboard },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTensorboardsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTensorboardsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTensorboardsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcsRequest extends $tea.Model {
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

export class ListVpcsResponseBody extends $tea.Model {
  requestId?: string;
  totalCount?: number;
  vpcs?: ListVpcsResponseBodyVpcs[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vpcs: 'Vpcs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      vpcs: { 'type': 'array', 'itemType': ListVpcsResponseBodyVpcs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListVpcsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListVpcsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspacesRequest extends $tea.Model {
  needDetail?: boolean;
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      needDetail: 'NeedDetail',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      needDetail: 'boolean',
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

export class ListWorkspacesResponseBody extends $tea.Model {
  requestId?: string;
  totalCount?: number;
  workspaces?: Workspace[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      workspaces: 'Workspaces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      workspaces: { 'type': 'array', 'itemType': Workspace },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkspacesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListWorkspacesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListWorkspacesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartTensorboardRequest extends $tea.Model {
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

export class StartTensorboardResponseBody extends $tea.Model {
  requestId?: string;
  tensorboardId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tensorboardId: 'TensorboardId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tensorboardId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartTensorboardResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StartTensorboardResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartTensorboardResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopJobResponseBody extends $tea.Model {
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

export class StopJobResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopJobResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopJobResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopTensorboardRequest extends $tea.Model {
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

export class StopTensorboardResponseBody extends $tea.Model {
  requestId?: string;
  tensorboardId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tensorboardId: 'TensorboardId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tensorboardId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopTensorboardResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopTensorboardResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopTensorboardResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQuotaRequest extends $tea.Model {
  quotaDetail?: QuotaDetail;
  quotaName?: string;
  quotaType?: string;
  static names(): { [key: string]: string } {
    return {
      quotaDetail: 'QuotaDetail',
      quotaName: 'QuotaName',
      quotaType: 'QuotaType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaDetail: QuotaDetail,
      quotaName: 'string',
      quotaType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQuotaResponseBody extends $tea.Model {
  quotaId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      quotaId: 'QuotaId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateQuotaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateQuotaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateQuotaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTensorboardRequest extends $tea.Model {
  maxRunningTimeMinutes?: number;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      maxRunningTimeMinutes: 'MaxRunningTimeMinutes',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxRunningTimeMinutes: 'number',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTensorboardResponseBody extends $tea.Model {
  requestId?: string;
  tensorboardId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tensorboardId: 'TensorboardId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tensorboardId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTensorboardResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateTensorboardResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateTensorboardResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JobItemCodeSource extends $tea.Model {
  branch?: string;
  codeSourceId?: string;
  commit?: string;
  mountPath?: string;
  static names(): { [key: string]: string } {
    return {
      branch: 'Branch',
      codeSourceId: 'CodeSourceId',
      commit: 'Commit',
      mountPath: 'MountPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branch: 'string',
      codeSourceId: 'string',
      commit: 'string',
      mountPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JobItemDataSources extends $tea.Model {
  dataSourceId?: string;
  mountPath?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      mountPath: 'MountPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'string',
      mountPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequestCodeSource extends $tea.Model {
  branch?: string;
  codeSourceId?: string;
  commit?: string;
  mountPath?: string;
  static names(): { [key: string]: string } {
    return {
      branch: 'Branch',
      codeSourceId: 'CodeSourceId',
      commit: 'Commit',
      mountPath: 'MountPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branch: 'string',
      codeSourceId: 'string',
      commit: 'string',
      mountPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequestDataSources extends $tea.Model {
  dataSourceId?: string;
  mountPath?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      mountPath: 'MountPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'string',
      mountPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateJobRequestUserVpc extends $tea.Model {
  extendedCIDRs?: string[];
  securityGroupId?: string;
  switchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      extendedCIDRs: 'ExtendedCIDRs',
      securityGroupId: 'SecurityGroupId',
      switchId: 'SwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendedCIDRs: { 'type': 'array', 'itemType': 'string' },
      securityGroupId: 'string',
      switchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyCodeSource extends $tea.Model {
  branch?: string;
  codeSourceId?: string;
  commit?: string;
  mountPath?: string;
  static names(): { [key: string]: string } {
    return {
      branch: 'Branch',
      codeSourceId: 'CodeSourceId',
      commit: 'Commit',
      mountPath: 'MountPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branch: 'string',
      codeSourceId: 'string',
      commit: 'string',
      mountPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyDataSources extends $tea.Model {
  dataSourceId?: string;
  mountPath?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      mountPath: 'MountPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'string',
      mountPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetJobResponseBodyPods extends $tea.Model {
  gmtCreateTime?: string;
  gmtFinishTime?: string;
  gmtStartTime?: string;
  ip?: string;
  podId?: string;
  status?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreateTime: 'GmtCreateTime',
      gmtFinishTime: 'GmtFinishTime',
      gmtStartTime: 'GmtStartTime',
      ip: 'Ip',
      podId: 'PodId',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreateTime: 'string',
      gmtFinishTime: 'string',
      gmtStartTime: 'string',
      ip: 'string',
      podId: 'string',
      status: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityGroupsResponseBodySecurityGroups extends $tea.Model {
  description?: string;
  securityGroupId?: string;
  securityGroupName?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      securityGroupId: 'SecurityGroupId',
      securityGroupName: 'SecurityGroupName',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ListSwitchesResponseBodySwitches extends $tea.Model {
  cidrBlock?: string;
  description?: string;
  vSwitchId?: string;
  vSwitchName?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      description: 'Description',
      vSwitchId: 'VSwitchId',
      vSwitchName: 'VSwitchName',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      description: 'string',
      vSwitchId: 'string',
      vSwitchName: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcsResponseBodyVpcs extends $tea.Model {
  vpcId?: string;
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
      vpcName: 'string',
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
    this._endpoint = this.getEndpoint("pai-dlc", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async batchGetJobsStatistics(request: BatchGetJobsStatisticsRequest): Promise<BatchGetJobsStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.batchGetJobsStatisticsWithOptions(request, headers, runtime);
  }

  async batchGetJobsStatisticsWithOptions(request: BatchGetJobsStatisticsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<BatchGetJobsStatisticsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.workspaceIds)) {
      query["WorkspaceIds"] = request.workspaceIds;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<BatchGetJobsStatisticsResponse>(await this.doROARequest("BatchGetJobsStatistics", "2020-12-03", "HTTPS", "GET", "AK", `/api/v1/batch/statistics/jobs`, "json", req, runtime), new BatchGetJobsStatisticsResponse({}));
  }

  async createCodeSource(request: CreateCodeSourceRequest): Promise<CreateCodeSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createCodeSourceWithOptions(request, headers, runtime);
  }

  async createCodeSourceWithOptions(request: CreateCodeSourceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateCodeSourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.codeBranch)) {
      body["CodeBranch"] = request.codeBranch;
    }

    if (!Util.isUnset(request.codeRepo)) {
      body["CodeRepo"] = request.codeRepo;
    }

    if (!Util.isUnset(request.codeRepoAccessToken)) {
      body["CodeRepoAccessToken"] = request.codeRepoAccessToken;
    }

    if (!Util.isUnset(request.codeRepoUserName)) {
      body["CodeRepoUserName"] = request.codeRepoUserName;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    if (!Util.isUnset(request.mountPath)) {
      body["MountPath"] = request.mountPath;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<CreateCodeSourceResponse>(await this.doROARequest("CreateCodeSource", "2020-12-03", "HTTPS", "POST", "AK", `/api/v1/codesources`, "json", req, runtime), new CreateCodeSourceResponse({}));
  }

  async createDataSource(request: CreateDataSourceRequest): Promise<CreateDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createDataSourceWithOptions(request, headers, runtime);
  }

  async createDataSourceWithOptions(request: CreateDataSourceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateDataSourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataSourceType)) {
      body["DataSourceType"] = request.dataSourceType;
    }

    if (!Util.isUnset(request.description)) {
      body["Description"] = request.description;
    }

    if (!Util.isUnset(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    if (!Util.isUnset(request.endpoint)) {
      body["Endpoint"] = request.endpoint;
    }

    if (!Util.isUnset(request.fileSystemId)) {
      body["FileSystemId"] = request.fileSystemId;
    }

    if (!Util.isUnset(request.mountPath)) {
      body["MountPath"] = request.mountPath;
    }

    if (!Util.isUnset(request.options)) {
      body["Options"] = request.options;
    }

    if (!Util.isUnset(request.path)) {
      body["Path"] = request.path;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<CreateDataSourceResponse>(await this.doROARequest("CreateDataSource", "2020-12-03", "HTTPS", "POST", "AK", `/api/v1/datasources`, "json", req, runtime), new CreateDataSourceResponse({}));
  }

  async createJob(request: CreateJobRequest): Promise<CreateJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createJobWithOptions(request, headers, runtime);
  }

  async createJobWithOptions(request: CreateJobRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateJobResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset($tea.toMap(request.codeSource))) {
      body["CodeSource"] = request.codeSource;
    }

    if (!Util.isUnset(request.dataSources)) {
      body["DataSources"] = request.dataSources;
    }

    if (!Util.isUnset(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    if (!Util.isUnset($tea.toMap(request.elasticSpec))) {
      body["ElasticSpec"] = request.elasticSpec;
    }

    if (!Util.isUnset(request.envs)) {
      body["Envs"] = request.envs;
    }

    if (!Util.isUnset(request.jobMaxRunningTimeMinutes)) {
      body["JobMaxRunningTimeMinutes"] = request.jobMaxRunningTimeMinutes;
    }

    if (!Util.isUnset(request.jobSpecs)) {
      body["JobSpecs"] = request.jobSpecs;
    }

    if (!Util.isUnset(request.jobType)) {
      body["JobType"] = request.jobType;
    }

    if (!Util.isUnset(request.priority)) {
      body["Priority"] = request.priority;
    }

    if (!Util.isUnset(request.resourceId)) {
      body["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset($tea.toMap(request.settings))) {
      body["Settings"] = request.settings;
    }

    if (!Util.isUnset(request.thirdpartyLibDir)) {
      body["ThirdpartyLibDir"] = request.thirdpartyLibDir;
    }

    if (!Util.isUnset(request.thirdpartyLibs)) {
      body["ThirdpartyLibs"] = request.thirdpartyLibs;
    }

    if (!Util.isUnset(request.userCommand)) {
      body["UserCommand"] = request.userCommand;
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
    return $tea.cast<CreateJobResponse>(await this.doROARequest("CreateJob", "2020-12-03", "HTTPS", "POST", "AK", `/api/v1/jobs`, "json", req, runtime), new CreateJobResponse({}));
  }

  async createQuota(request: CreateQuotaRequest): Promise<CreateQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createQuotaWithOptions(request, headers, runtime);
  }

  async createQuotaWithOptions(request: CreateQuotaRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateQuotaResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset($tea.toMap(request.quotaDetail))) {
      body["QuotaDetail"] = request.quotaDetail;
    }

    if (!Util.isUnset(request.quotaName)) {
      body["QuotaName"] = request.quotaName;
    }

    if (!Util.isUnset(request.quotaType)) {
      body["QuotaType"] = request.quotaType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<CreateQuotaResponse>(await this.doROARequest("CreateQuota", "2020-12-03", "HTTPS", "POST", "AK", `/api/v1/quotas`, "json", req, runtime), new CreateQuotaResponse({}));
  }

  async createTensorboard(request: CreateTensorboardRequest): Promise<CreateTensorboardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTensorboardWithOptions(request, headers, runtime);
  }

  async createTensorboardWithOptions(request: CreateTensorboardRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateTensorboardResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataSourceId)) {
      body["DataSourceId"] = request.dataSourceId;
    }

    if (!Util.isUnset(request.dataSources)) {
      body["DataSources"] = request.dataSources;
    }

    if (!Util.isUnset(request.displayName)) {
      body["DisplayName"] = request.displayName;
    }

    if (!Util.isUnset(request.jobId)) {
      body["JobId"] = request.jobId;
    }

    if (!Util.isUnset(request.maxRunningTimeMinutes)) {
      body["MaxRunningTimeMinutes"] = request.maxRunningTimeMinutes;
    }

    if (!Util.isUnset(request.summaryPath)) {
      body["SummaryPath"] = request.summaryPath;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<CreateTensorboardResponse>(await this.doROARequest("CreateTensorboard", "2020-12-03", "HTTPS", "POST", "AK", `/api/v1/tensorboards`, "json", req, runtime), new CreateTensorboardResponse({}));
  }

  async deleteCodeSource(CodeSourceId: string): Promise<DeleteCodeSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteCodeSourceWithOptions(CodeSourceId, headers, runtime);
  }

  async deleteCodeSourceWithOptions(CodeSourceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteCodeSourceResponse> {
    CodeSourceId = OpenApiUtil.getEncodeParam(CodeSourceId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DeleteCodeSourceResponse>(await this.doROARequest("DeleteCodeSource", "2020-12-03", "HTTPS", "DELETE", "AK", `/api/v1/codesources/${CodeSourceId}`, "json", req, runtime), new DeleteCodeSourceResponse({}));
  }

  async deleteDataSource(DataSourceId: string): Promise<DeleteDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteDataSourceWithOptions(DataSourceId, headers, runtime);
  }

  async deleteDataSourceWithOptions(DataSourceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteDataSourceResponse> {
    DataSourceId = OpenApiUtil.getEncodeParam(DataSourceId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DeleteDataSourceResponse>(await this.doROARequest("DeleteDataSource", "2020-12-03", "HTTPS", "DELETE", "AK", `/api/v1/datasources/${DataSourceId}`, "json", req, runtime), new DeleteDataSourceResponse({}));
  }

  async deleteJob(JobId: string): Promise<DeleteJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteJobWithOptions(JobId, headers, runtime);
  }

  async deleteJobWithOptions(JobId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteJobResponse> {
    JobId = OpenApiUtil.getEncodeParam(JobId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DeleteJobResponse>(await this.doROARequest("DeleteJob", "2020-12-03", "HTTPS", "DELETE", "AK", `/api/v1/jobs/${JobId}`, "json", req, runtime), new DeleteJobResponse({}));
  }

  async deleteQuota(QuotaId: string): Promise<DeleteQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteQuotaWithOptions(QuotaId, headers, runtime);
  }

  async deleteQuotaWithOptions(QuotaId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteQuotaResponse> {
    QuotaId = OpenApiUtil.getEncodeParam(QuotaId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DeleteQuotaResponse>(await this.doROARequest("DeleteQuota", "2020-12-03", "HTTPS", "DELETE", "AK", `/api/v1/quotas/${QuotaId}`, "json", req, runtime), new DeleteQuotaResponse({}));
  }

  async deleteTensorboard(TensorboardId: string, request: DeleteTensorboardRequest): Promise<DeleteTensorboardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTensorboardWithOptions(TensorboardId, request, headers, runtime);
  }

  async deleteTensorboardWithOptions(TensorboardId: string, request: DeleteTensorboardRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteTensorboardResponse> {
    Util.validateModel(request);
    TensorboardId = OpenApiUtil.getEncodeParam(TensorboardId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DeleteTensorboardResponse>(await this.doROARequest("DeleteTensorboard", "2020-12-03", "HTTPS", "DELETE", "AK", `/api/v1/tensorboards/${TensorboardId}`, "json", req, runtime), new DeleteTensorboardResponse({}));
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
    return $tea.cast<GetAuthorizationResponse>(await this.doROARequest("GetAuthorization", "2020-12-03", "HTTPS", "GET", "AK", `/api/v1/authorization`, "json", req, runtime), new GetAuthorizationResponse({}));
  }

  async getCodeSource(CodeSourceId: string): Promise<GetCodeSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCodeSourceWithOptions(CodeSourceId, headers, runtime);
  }

  async getCodeSourceWithOptions(CodeSourceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetCodeSourceResponse> {
    CodeSourceId = OpenApiUtil.getEncodeParam(CodeSourceId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetCodeSourceResponse>(await this.doROARequest("GetCodeSource", "2020-12-03", "HTTPS", "GET", "AK", `/api/v1/codesources/${CodeSourceId}`, "json", req, runtime), new GetCodeSourceResponse({}));
  }

  async getDataSource(DataSourceId: string): Promise<GetDataSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getDataSourceWithOptions(DataSourceId, headers, runtime);
  }

  async getDataSourceWithOptions(DataSourceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetDataSourceResponse> {
    DataSourceId = OpenApiUtil.getEncodeParam(DataSourceId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetDataSourceResponse>(await this.doROARequest("GetDataSource", "2020-12-03", "HTTPS", "GET", "AK", `/api/v1/datasources/${DataSourceId}`, "json", req, runtime), new GetDataSourceResponse({}));
  }

  async getJob(JobId: string): Promise<GetJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getJobWithOptions(JobId, headers, runtime);
  }

  async getJobWithOptions(JobId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetJobResponse> {
    JobId = OpenApiUtil.getEncodeParam(JobId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetJobResponse>(await this.doROARequest("GetJob", "2020-12-03", "HTTPS", "GET", "AK", `/api/v1/jobs/${JobId}`, "json", req, runtime), new GetJobResponse({}));
  }

  async getJobEvents(JobId: string, request: GetJobEventsRequest): Promise<GetJobEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getJobEventsWithOptions(JobId, request, headers, runtime);
  }

  async getJobEventsWithOptions(JobId: string, request: GetJobEventsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetJobEventsResponse> {
    Util.validateModel(request);
    JobId = OpenApiUtil.getEncodeParam(JobId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.maxEventsNum)) {
      query["MaxEventsNum"] = request.maxEventsNum;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetJobEventsResponse>(await this.doROARequest("GetJobEvents", "2020-12-03", "HTTPS", "GET", "AK", `/api/v1/jobs/${JobId}/events`, "json", req, runtime), new GetJobEventsResponse({}));
  }

  async getJobMetrics(JobId: string, request: GetJobMetricsRequest): Promise<GetJobMetricsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getJobMetricsWithOptions(JobId, request, headers, runtime);
  }

  async getJobMetricsWithOptions(JobId: string, request: GetJobMetricsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetJobMetricsResponse> {
    Util.validateModel(request);
    JobId = OpenApiUtil.getEncodeParam(JobId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.metricType)) {
      query["MetricType"] = request.metricType;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.timeStep)) {
      query["TimeStep"] = request.timeStep;
    }

    if (!Util.isUnset(request.token)) {
      query["Token"] = request.token;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetJobMetricsResponse>(await this.doROARequest("GetJobMetrics", "2020-12-03", "HTTPS", "GET", "AK", `/api/v1/jobs/${JobId}/metrics`, "json", req, runtime), new GetJobMetricsResponse({}));
  }

  async getJobsStatistics(request: GetJobsStatisticsRequest): Promise<GetJobsStatisticsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getJobsStatisticsWithOptions(request, headers, runtime);
  }

  async getJobsStatisticsWithOptions(request: GetJobsStatisticsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetJobsStatisticsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetJobsStatisticsResponse>(await this.doROARequest("GetJobsStatistics", "2020-12-03", "HTTPS", "GET", "AK", `/api/v1/statistics/jobs`, "json", req, runtime), new GetJobsStatisticsResponse({}));
  }

  async getPodEvents(JobId: string, PodId: string, request: GetPodEventsRequest): Promise<GetPodEventsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPodEventsWithOptions(JobId, PodId, request, headers, runtime);
  }

  async getPodEventsWithOptions(JobId: string, PodId: string, request: GetPodEventsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetPodEventsResponse> {
    Util.validateModel(request);
    JobId = OpenApiUtil.getEncodeParam(JobId);
    PodId = OpenApiUtil.getEncodeParam(PodId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.maxEventsNum)) {
      query["MaxEventsNum"] = request.maxEventsNum;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetPodEventsResponse>(await this.doROARequest("GetPodEvents", "2020-12-03", "HTTPS", "GET", "AK", `/api/v1/jobs/${JobId}/pods/${PodId}/events`, "json", req, runtime), new GetPodEventsResponse({}));
  }

  async getPodLogs(JobId: string, PodId: string, request: GetPodLogsRequest): Promise<GetPodLogsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPodLogsWithOptions(JobId, PodId, request, headers, runtime);
  }

  async getPodLogsWithOptions(JobId: string, PodId: string, request: GetPodLogsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetPodLogsResponse> {
    Util.validateModel(request);
    JobId = OpenApiUtil.getEncodeParam(JobId);
    PodId = OpenApiUtil.getEncodeParam(PodId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.downloadToFile)) {
      query["DownloadToFile"] = request.downloadToFile;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.maxLines)) {
      query["MaxLines"] = request.maxLines;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetPodLogsResponse>(await this.doROARequest("GetPodLogs", "2020-12-03", "HTTPS", "GET", "AK", `/api/v1/jobs/${JobId}/pods/${PodId}/logs`, "json", req, runtime), new GetPodLogsResponse({}));
  }

  async getQuota(QuotaId: string): Promise<GetQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getQuotaWithOptions(QuotaId, headers, runtime);
  }

  async getQuotaWithOptions(QuotaId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetQuotaResponse> {
    QuotaId = OpenApiUtil.getEncodeParam(QuotaId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetQuotaResponse>(await this.doROARequest("GetQuota", "2020-12-03", "HTTPS", "GET", "AK", `/api/v1/quotas/${QuotaId}`, "json", req, runtime), new GetQuotaResponse({}));
  }

  async getSecurityGroup(SecurityGroupId: string): Promise<GetSecurityGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSecurityGroupWithOptions(SecurityGroupId, headers, runtime);
  }

  async getSecurityGroupWithOptions(SecurityGroupId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetSecurityGroupResponse> {
    SecurityGroupId = OpenApiUtil.getEncodeParam(SecurityGroupId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetSecurityGroupResponse>(await this.doROARequest("GetSecurityGroup", "2020-12-03", "HTTPS", "GET", "AK", `/api/v1/securitygroups/${SecurityGroupId}`, "json", req, runtime), new GetSecurityGroupResponse({}));
  }

  async getSwitch(SwitchId: string): Promise<GetSwitchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getSwitchWithOptions(SwitchId, headers, runtime);
  }

  async getSwitchWithOptions(SwitchId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetSwitchResponse> {
    SwitchId = OpenApiUtil.getEncodeParam(SwitchId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetSwitchResponse>(await this.doROARequest("GetSwitch", "2020-12-03", "HTTPS", "GET", "AK", `/api/v1/switches/${SwitchId}`, "json", req, runtime), new GetSwitchResponse({}));
  }

  async getTensorboard(TensorboardId: string, request: GetTensorboardRequest): Promise<GetTensorboardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTensorboardWithOptions(TensorboardId, request, headers, runtime);
  }

  async getTensorboardWithOptions(TensorboardId: string, request: GetTensorboardRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTensorboardResponse> {
    Util.validateModel(request);
    TensorboardId = OpenApiUtil.getEncodeParam(TensorboardId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.jodId)) {
      query["JodId"] = request.jodId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetTensorboardResponse>(await this.doROARequest("GetTensorboard", "2020-12-03", "HTTPS", "GET", "AK", `/api/v1/tensorboards/${TensorboardId}`, "json", req, runtime), new GetTensorboardResponse({}));
  }

  async getToken(request: GetTokenRequest): Promise<GetTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTokenWithOptions(request, headers, runtime);
  }

  async getTokenWithOptions(request: GetTokenRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTokenResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.expireTime)) {
      query["ExpireTime"] = request.expireTime;
    }

    if (!Util.isUnset(request.targetId)) {
      query["TargetId"] = request.targetId;
    }

    if (!Util.isUnset(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetTokenResponse>(await this.doROARequest("GetToken", "2020-12-03", "HTTPS", "GET", "AK", `/api/v1/tokens`, "json", req, runtime), new GetTokenResponse({}));
  }

  async getUserAuthorization(UserId: string): Promise<GetUserAuthorizationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getUserAuthorizationWithOptions(UserId, headers, runtime);
  }

  async getUserAuthorizationWithOptions(UserId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetUserAuthorizationResponse> {
    UserId = OpenApiUtil.getEncodeParam(UserId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetUserAuthorizationResponse>(await this.doROARequest("GetUserAuthorization", "2020-12-03", "HTTPS", "GET", "AK", `/api/v1/users/${UserId}/authorization`, "json", req, runtime), new GetUserAuthorizationResponse({}));
  }

  async getVpc(VpcId: string): Promise<GetVpcResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getVpcWithOptions(VpcId, headers, runtime);
  }

  async getVpcWithOptions(VpcId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetVpcResponse> {
    VpcId = OpenApiUtil.getEncodeParam(VpcId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetVpcResponse>(await this.doROARequest("GetVpc", "2020-12-03", "HTTPS", "GET", "AK", `/api/v1/vpcs/${VpcId}`, "json", req, runtime), new GetVpcResponse({}));
  }

  async getWorkspace(WorkspaceId: string): Promise<GetWorkspaceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getWorkspaceWithOptions(WorkspaceId, headers, runtime);
  }

  async getWorkspaceWithOptions(WorkspaceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetWorkspaceResponse> {
    WorkspaceId = OpenApiUtil.getEncodeParam(WorkspaceId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetWorkspaceResponse>(await this.doROARequest("GetWorkspace", "2020-12-03", "HTTPS", "GET", "AK", `/api/v1/workspaces/${WorkspaceId}`, "json", req, runtime), new GetWorkspaceResponse({}));
  }

  async jobDispatchQuery(request: JobDispatchQueryRequest): Promise<JobDispatchQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.jobDispatchQueryWithOptions(request, headers, runtime);
  }

  async jobDispatchQueryWithOptions(tmpReq: JobDispatchQueryRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<JobDispatchQueryResponse> {
    Util.validateModel(tmpReq);
    let request = new JobDispatchQueryShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.properties)) {
      request.propertiesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.properties, "Properties", "json");
    }

    if (!Util.isUnset(tmpReq.settings)) {
      request.settingsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.settings, "Settings", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.algoName)) {
      query["AlgoName"] = request.algoName;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.propertiesShrink)) {
      query["Properties"] = request.propertiesShrink;
    }

    if (!Util.isUnset(request.settingsShrink)) {
      query["Settings"] = request.settingsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<JobDispatchQueryResponse>(await this.doROARequest("JobDispatchQuery", "2020-12-03", "HTTPS", "GET", "AK", `/api/v1/jobdispatch`, "json", req, runtime), new JobDispatchQueryResponse({}));
  }

  async jobDispatchSubmit(request: JobDispatchSubmitRequest): Promise<JobDispatchSubmitResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.jobDispatchSubmitWithOptions(request, headers, runtime);
  }

  async jobDispatchSubmitWithOptions(request: JobDispatchSubmitRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<JobDispatchSubmitResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.algoName)) {
      body["AlgoName"] = request.algoName;
    }

    if (!Util.isUnset(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.properties)) {
      body["Properties"] = request.properties;
    }

    if (!Util.isUnset(request.settings)) {
      body["Settings"] = request.settings;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<JobDispatchSubmitResponse>(await this.doROARequest("JobDispatchSubmit", "2020-12-03", "HTTPS", "POST", "AK", `/api/v1/jobdispatch`, "json", req, runtime), new JobDispatchSubmitResponse({}));
  }

  async listCodeSources(request: ListCodeSourcesRequest): Promise<ListCodeSourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listCodeSourcesWithOptions(request, headers, runtime);
  }

  async listCodeSourcesWithOptions(request: ListCodeSourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListCodeSourcesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.displayName)) {
      query["DisplayName"] = request.displayName;
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
    return $tea.cast<ListCodeSourcesResponse>(await this.doROARequest("ListCodeSources", "2020-12-03", "HTTPS", "GET", "AK", `/api/v1/codesources`, "json", req, runtime), new ListCodeSourcesResponse({}));
  }

  async listDataSources(request: ListDataSourcesRequest): Promise<ListDataSourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listDataSourcesWithOptions(request, headers, runtime);
  }

  async listDataSourcesWithOptions(request: ListDataSourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListDataSourcesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.dataSourceType)) {
      query["DataSourceType"] = request.dataSourceType;
    }

    if (!Util.isUnset(request.displayName)) {
      query["DisplayName"] = request.displayName;
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
    return $tea.cast<ListDataSourcesResponse>(await this.doROARequest("ListDataSources", "2020-12-03", "HTTPS", "GET", "AK", `/api/v1/datasources`, "json", req, runtime), new ListDataSourcesResponse({}));
  }

  async listEcsSpecs(request: ListEcsSpecsRequest): Promise<ListEcsSpecsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEcsSpecsWithOptions(request, headers, runtime);
  }

  async listEcsSpecsWithOptions(request: ListEcsSpecsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListEcsSpecsResponse> {
    Util.validateModel(request);
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
    return $tea.cast<ListEcsSpecsResponse>(await this.doROARequest("ListEcsSpecs", "2020-12-03", "HTTPS", "GET", "AK", `/api/v1/ecsspecs`, "json", req, runtime), new ListEcsSpecsResponse({}));
  }

  async listImages(request: ListImagesRequest): Promise<ListImagesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listImagesWithOptions(request, headers, runtime);
  }

  async listImagesWithOptions(request: ListImagesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListImagesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.acceleratorType)) {
      query["AcceleratorType"] = request.acceleratorType;
    }

    if (!Util.isUnset(request.framework)) {
      query["Framework"] = request.framework;
    }

    if (!Util.isUnset(request.imageProviderType)) {
      query["ImageProviderType"] = request.imageProviderType;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListImagesResponse>(await this.doROARequest("ListImages", "2020-12-03", "HTTPS", "GET", "AK", `/api/v1/images`, "json", req, runtime), new ListImagesResponse({}));
  }

  async listJobs(request: ListJobsRequest): Promise<ListJobsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listJobsWithOptions(request, headers, runtime);
  }

  async listJobsWithOptions(tmpReq: ListJobsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListJobsResponse> {
    Util.validateModel(tmpReq);
    let request = new ListJobsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.businessUserId)) {
      query["BusinessUserId"] = request.businessUserId;
    }

    if (!Util.isUnset(request.caller)) {
      query["Caller"] = request.caller;
    }

    if (!Util.isUnset(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.jobType)) {
      query["JobType"] = request.jobType;
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

    if (!Util.isUnset(request.pipelineId)) {
      query["PipelineId"] = request.pipelineId;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.showOwn)) {
      query["ShowOwn"] = request.showOwn;
    }

    if (!Util.isUnset(request.sortBy)) {
      query["SortBy"] = request.sortBy;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListJobsResponse>(await this.doROARequest("ListJobs", "2020-12-03", "HTTPS", "GET", "AK", `/api/v1/jobs`, "json", req, runtime), new ListJobsResponse({}));
  }

  async listQuotas(request: ListQuotasRequest): Promise<ListQuotasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listQuotasWithOptions(request, headers, runtime);
  }

  async listQuotasWithOptions(request: ListQuotasRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListQuotasResponse> {
    Util.validateModel(request);
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
    return $tea.cast<ListQuotasResponse>(await this.doROARequest("ListQuotas", "2020-12-03", "HTTPS", "GET", "AK", `/api/v1/quotas`, "json", req, runtime), new ListQuotasResponse({}));
  }

  async listSecurityGroups(request: ListSecurityGroupsRequest): Promise<ListSecurityGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSecurityGroupsWithOptions(request, headers, runtime);
  }

  async listSecurityGroupsWithOptions(request: ListSecurityGroupsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListSecurityGroupsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListSecurityGroupsResponse>(await this.doROARequest("ListSecurityGroups", "2020-12-03", "HTTPS", "GET", "AK", `/api/v1/securitygroups`, "json", req, runtime), new ListSecurityGroupsResponse({}));
  }

  async listSwitches(request: ListSwitchesRequest): Promise<ListSwitchesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listSwitchesWithOptions(request, headers, runtime);
  }

  async listSwitchesWithOptions(request: ListSwitchesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListSwitchesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListSwitchesResponse>(await this.doROARequest("ListSwitches", "2020-12-03", "HTTPS", "GET", "AK", `/api/v1/switches`, "json", req, runtime), new ListSwitchesResponse({}));
  }

  async listTensorboards(request: ListTensorboardsRequest): Promise<ListTensorboardsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTensorboardsWithOptions(request, headers, runtime);
  }

  async listTensorboardsWithOptions(request: ListTensorboardsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTensorboardsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.displayName)) {
      query["DisplayName"] = request.displayName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.jobId)) {
      query["JobId"] = request.jobId;
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

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.tensorboardId)) {
      query["TensorboardId"] = request.tensorboardId;
    }

    if (!Util.isUnset(request.verbose)) {
      query["Verbose"] = request.verbose;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListTensorboardsResponse>(await this.doROARequest("ListTensorboards", "2020-12-03", "HTTPS", "GET", "AK", `/api/v1/tensorboards`, "json", req, runtime), new ListTensorboardsResponse({}));
  }

  async listVpcs(request: ListVpcsRequest): Promise<ListVpcsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listVpcsWithOptions(request, headers, runtime);
  }

  async listVpcsWithOptions(request: ListVpcsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListVpcsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListVpcsResponse>(await this.doROARequest("ListVpcs", "2020-12-03", "HTTPS", "GET", "AK", `/api/v1/vpcs`, "json", req, runtime), new ListVpcsResponse({}));
  }

  async listWorkspaces(request: ListWorkspacesRequest): Promise<ListWorkspacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listWorkspacesWithOptions(request, headers, runtime);
  }

  async listWorkspacesWithOptions(request: ListWorkspacesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListWorkspacesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.needDetail)) {
      query["NeedDetail"] = request.needDetail;
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
    return $tea.cast<ListWorkspacesResponse>(await this.doROARequest("ListWorkspaces", "2020-12-03", "HTTPS", "GET", "AK", `/api/v1/workspaces`, "json", req, runtime), new ListWorkspacesResponse({}));
  }

  async startTensorboard(TensorboardId: string, request: StartTensorboardRequest): Promise<StartTensorboardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startTensorboardWithOptions(TensorboardId, request, headers, runtime);
  }

  async startTensorboardWithOptions(TensorboardId: string, request: StartTensorboardRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StartTensorboardResponse> {
    Util.validateModel(request);
    TensorboardId = OpenApiUtil.getEncodeParam(TensorboardId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<StartTensorboardResponse>(await this.doROARequest("StartTensorboard", "2020-12-03", "HTTPS", "PUT", "AK", `/api/v1/tensorboards/${TensorboardId}/start`, "json", req, runtime), new StartTensorboardResponse({}));
  }

  async stopJob(JobId: string): Promise<StopJobResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopJobWithOptions(JobId, headers, runtime);
  }

  async stopJobWithOptions(JobId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StopJobResponse> {
    JobId = OpenApiUtil.getEncodeParam(JobId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<StopJobResponse>(await this.doROARequest("StopJob", "2020-12-03", "HTTPS", "POST", "AK", `/api/v1/jobs/${JobId}/stop`, "json", req, runtime), new StopJobResponse({}));
  }

  async stopTensorboard(TensorboardId: string, request: StopTensorboardRequest): Promise<StopTensorboardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopTensorboardWithOptions(TensorboardId, request, headers, runtime);
  }

  async stopTensorboardWithOptions(TensorboardId: string, request: StopTensorboardRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StopTensorboardResponse> {
    Util.validateModel(request);
    TensorboardId = OpenApiUtil.getEncodeParam(TensorboardId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<StopTensorboardResponse>(await this.doROARequest("StopTensorboard", "2020-12-03", "HTTPS", "PUT", "AK", `/api/v1/tensorboards/${TensorboardId}/stop`, "json", req, runtime), new StopTensorboardResponse({}));
  }

  async updateQuota(QuotaId: string, request: UpdateQuotaRequest): Promise<UpdateQuotaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateQuotaWithOptions(QuotaId, request, headers, runtime);
  }

  async updateQuotaWithOptions(QuotaId: string, request: UpdateQuotaRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateQuotaResponse> {
    Util.validateModel(request);
    QuotaId = OpenApiUtil.getEncodeParam(QuotaId);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset($tea.toMap(request.quotaDetail))) {
      body["QuotaDetail"] = request.quotaDetail;
    }

    if (!Util.isUnset(request.quotaName)) {
      body["QuotaName"] = request.quotaName;
    }

    if (!Util.isUnset(request.quotaType)) {
      body["QuotaType"] = request.quotaType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<UpdateQuotaResponse>(await this.doROARequest("UpdateQuota", "2020-12-03", "HTTPS", "PUT", "AK", `/api/v1/quotas/${QuotaId}`, "json", req, runtime), new UpdateQuotaResponse({}));
  }

  async updateTensorboard(TensorboardId: string, request: UpdateTensorboardRequest): Promise<UpdateTensorboardResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTensorboardWithOptions(TensorboardId, request, headers, runtime);
  }

  async updateTensorboardWithOptions(TensorboardId: string, request: UpdateTensorboardRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateTensorboardResponse> {
    Util.validateModel(request);
    TensorboardId = OpenApiUtil.getEncodeParam(TensorboardId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.maxRunningTimeMinutes)) {
      query["MaxRunningTimeMinutes"] = request.maxRunningTimeMinutes;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<UpdateTensorboardResponse>(await this.doROARequest("UpdateTensorboard", "2020-12-03", "HTTPS", "PUT", "AK", `/api/v1/tensorboards/${TensorboardId}`, "json", req, runtime), new UpdateTensorboardResponse({}));
  }

}

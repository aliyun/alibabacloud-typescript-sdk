// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class ContainerInfo extends $tea.Model {
  currentReaon?: string;
  currentStatus?: string;
  currentTimestamp?: string;
  image?: string;
  lastReason?: string;
  lastStatus?: string;
  lastTimestamp?: string;
  name?: string;
  port?: number;
  ready?: boolean;
  restartCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentReaon: 'CurrentReaon',
      currentStatus: 'CurrentStatus',
      currentTimestamp: 'CurrentTimestamp',
      image: 'Image',
      lastReason: 'LastReason',
      lastStatus: 'LastStatus',
      lastTimestamp: 'LastTimestamp',
      name: 'Name',
      port: 'Port',
      ready: 'Ready',
      restartCount: 'RestartCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentReaon: 'string',
      currentStatus: 'string',
      currentTimestamp: 'string',
      image: 'string',
      lastReason: 'string',
      lastStatus: 'string',
      lastTimestamp: 'string',
      name: 'string',
      port: 'number',
      ready: 'boolean',
      restartCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Group extends $tea.Model {
  accessToken?: string;
  clusterId?: string;
  createTime?: string;
  internetEndpoint?: string;
  intranetEndpoint?: string;
  name?: string;
  queueService?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      clusterId: 'ClusterId',
      createTime: 'CreateTime',
      internetEndpoint: 'InternetEndpoint',
      intranetEndpoint: 'IntranetEndpoint',
      name: 'Name',
      queueService: 'QueueService',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      clusterId: 'string',
      createTime: 'string',
      internetEndpoint: 'string',
      intranetEndpoint: 'string',
      name: 'string',
      queueService: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Instance extends $tea.Model {
  currentAmount?: number;
  hostIP?: string;
  hostName?: string;
  innerIP?: string;
  instanceName?: string;
  instancePort?: number;
  isSpot?: boolean;
  isolated?: boolean;
  lastState?: { [key: string]: any }[];
  namespace?: string;
  originalAmount?: number;
  readyProcesses?: number;
  reason?: string;
  resourceType?: string;
  restartCount?: number;
  role?: string;
  startAt?: string;
  status?: string;
  tenantHostIP?: string;
  tenantInstanceIP?: string;
  totalProcesses?: number;
  static names(): { [key: string]: string } {
    return {
      currentAmount: 'CurrentAmount',
      hostIP: 'HostIP',
      hostName: 'HostName',
      innerIP: 'InnerIP',
      instanceName: 'InstanceName',
      instancePort: 'InstancePort',
      isSpot: 'IsSpot',
      isolated: 'Isolated',
      lastState: 'LastState',
      namespace: 'Namespace',
      originalAmount: 'OriginalAmount',
      readyProcesses: 'ReadyProcesses',
      reason: 'Reason',
      resourceType: 'ResourceType',
      restartCount: 'RestartCount',
      role: 'Role',
      startAt: 'StartAt',
      status: 'Status',
      tenantHostIP: 'TenantHostIP',
      tenantInstanceIP: 'TenantInstanceIP',
      totalProcesses: 'TotalProcesses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentAmount: 'number',
      hostIP: 'string',
      hostName: 'string',
      innerIP: 'string',
      instanceName: 'string',
      instancePort: 'number',
      isSpot: 'boolean',
      isolated: 'boolean',
      lastState: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      namespace: 'string',
      originalAmount: 'number',
      readyProcesses: 'number',
      reason: 'string',
      resourceType: 'string',
      restartCount: 'number',
      role: 'string',
      startAt: 'string',
      status: 'string',
      tenantHostIP: 'string',
      tenantInstanceIP: 'string',
      totalProcesses: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Resource extends $tea.Model {
  clusterId?: string;
  cpuCount?: number;
  createTime?: string;
  extraData?: { [key: string]: any };
  gpuCount?: number;
  instanceCount?: number;
  message?: string;
  postPaidInstanceCount?: number;
  prePaidInstanceCount?: number;
  resourceId?: string;
  resourceName?: string;
  resourceType?: string;
  status?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      cpuCount: 'CpuCount',
      createTime: 'CreateTime',
      extraData: 'ExtraData',
      gpuCount: 'GpuCount',
      instanceCount: 'InstanceCount',
      message: 'Message',
      postPaidInstanceCount: 'PostPaidInstanceCount',
      prePaidInstanceCount: 'PrePaidInstanceCount',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      cpuCount: 'number',
      createTime: 'string',
      extraData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gpuCount: 'number',
      instanceCount: 'number',
      message: 'string',
      postPaidInstanceCount: 'number',
      prePaidInstanceCount: 'number',
      resourceId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      status: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResourceInstance extends $tea.Model {
  arch?: string;
  autoRenewal?: boolean;
  chargeType?: string;
  createTime?: string;
  expiredTime?: string;
  instanceCpuCount?: number;
  instanceGpuCount?: number;
  instanceGpuMemory?: string;
  instanceId?: string;
  instanceIp?: string;
  instanceMemory?: string;
  instanceName?: string;
  instanceStatus?: string;
  instanceSystemDiskSize?: number;
  instanceTenantIp?: string;
  instanceType?: string;
  instanceUsedCpu?: number;
  instanceUsedGpu?: number;
  instanceUsedGpuMemory?: string;
  instanceUsedMemory?: string;
  region?: string;
  resourceId?: string;
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      arch: 'Arch',
      autoRenewal: 'AutoRenewal',
      chargeType: 'ChargeType',
      createTime: 'CreateTime',
      expiredTime: 'ExpiredTime',
      instanceCpuCount: 'InstanceCpuCount',
      instanceGpuCount: 'InstanceGpuCount',
      instanceGpuMemory: 'InstanceGpuMemory',
      instanceId: 'InstanceId',
      instanceIp: 'InstanceIp',
      instanceMemory: 'InstanceMemory',
      instanceName: 'InstanceName',
      instanceStatus: 'InstanceStatus',
      instanceSystemDiskSize: 'InstanceSystemDiskSize',
      instanceTenantIp: 'InstanceTenantIp',
      instanceType: 'InstanceType',
      instanceUsedCpu: 'InstanceUsedCpu',
      instanceUsedGpu: 'InstanceUsedGpu',
      instanceUsedGpuMemory: 'InstanceUsedGpuMemory',
      instanceUsedMemory: 'InstanceUsedMemory',
      region: 'Region',
      resourceId: 'ResourceId',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arch: 'string',
      autoRenewal: 'boolean',
      chargeType: 'string',
      createTime: 'string',
      expiredTime: 'string',
      instanceCpuCount: 'number',
      instanceGpuCount: 'number',
      instanceGpuMemory: 'string',
      instanceId: 'string',
      instanceIp: 'string',
      instanceMemory: 'string',
      instanceName: 'string',
      instanceStatus: 'string',
      instanceSystemDiskSize: 'number',
      instanceTenantIp: 'string',
      instanceType: 'string',
      instanceUsedCpu: 'number',
      instanceUsedGpu: 'number',
      instanceUsedGpuMemory: 'string',
      instanceUsedMemory: 'string',
      region: 'string',
      resourceId: 'string',
      zone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResourceInstanceWorker extends $tea.Model {
  cpuLimit?: number;
  cpuRequest?: number;
  gpuLimit?: number;
  gpuRequest?: number;
  memoryLimit?: number;
  memoryRquest?: number;
  name?: string;
  ready?: boolean;
  restartCount?: number;
  serviceName?: string;
  startTime?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      cpuLimit: 'CpuLimit',
      cpuRequest: 'CpuRequest',
      gpuLimit: 'GpuLimit',
      gpuRequest: 'GpuRequest',
      memoryLimit: 'MemoryLimit',
      memoryRquest: 'MemoryRquest',
      name: 'Name',
      ready: 'Ready',
      restartCount: 'RestartCount',
      serviceName: 'ServiceName',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpuLimit: 'number',
      cpuRequest: 'number',
      gpuLimit: 'number',
      gpuRequest: 'number',
      memoryLimit: 'number',
      memoryRquest: 'number',
      name: 'string',
      ready: 'boolean',
      restartCount: 'number',
      serviceName: 'string',
      startTime: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Service extends $tea.Model {
  accessToken?: string;
  appConfig?: string;
  appSpecName?: string;
  appType?: string;
  appVersion?: string;
  callerUid?: string;
  cpu?: number;
  createTime?: string;
  currentVersion?: number;
  extraData?: string;
  gpu?: number;
  image?: string;
  internetEndpoint?: string;
  intranetEndpoint?: string;
  labels?: ServiceLabels[];
  latestVersion?: number;
  memory?: number;
  message?: string;
  namespace?: string;
  parentUid?: string;
  pendingInstance?: number;
  reason?: string;
  region?: string;
  requestId?: string;
  resource?: string;
  resourceAlias?: string;
  role?: string;
  roleAttrs?: string;
  runningInstance?: number;
  safetyLock?: string;
  secondaryInternetEndpoint?: string;
  secondaryIntranetEndpoint?: string;
  serviceConfig?: string;
  serviceGroup?: string;
  serviceId?: string;
  serviceName?: string;
  serviceUid?: string;
  source?: string;
  status?: string;
  totalInstance?: number;
  updateTime?: string;
  weight?: number;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      appConfig: 'AppConfig',
      appSpecName: 'AppSpecName',
      appType: 'AppType',
      appVersion: 'AppVersion',
      callerUid: 'CallerUid',
      cpu: 'Cpu',
      createTime: 'CreateTime',
      currentVersion: 'CurrentVersion',
      extraData: 'ExtraData',
      gpu: 'Gpu',
      image: 'Image',
      internetEndpoint: 'InternetEndpoint',
      intranetEndpoint: 'IntranetEndpoint',
      labels: 'Labels',
      latestVersion: 'LatestVersion',
      memory: 'Memory',
      message: 'Message',
      namespace: 'Namespace',
      parentUid: 'ParentUid',
      pendingInstance: 'PendingInstance',
      reason: 'Reason',
      region: 'Region',
      requestId: 'RequestId',
      resource: 'Resource',
      resourceAlias: 'ResourceAlias',
      role: 'Role',
      roleAttrs: 'RoleAttrs',
      runningInstance: 'RunningInstance',
      safetyLock: 'SafetyLock',
      secondaryInternetEndpoint: 'SecondaryInternetEndpoint',
      secondaryIntranetEndpoint: 'SecondaryIntranetEndpoint',
      serviceConfig: 'ServiceConfig',
      serviceGroup: 'ServiceGroup',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      serviceUid: 'ServiceUid',
      source: 'Source',
      status: 'Status',
      totalInstance: 'TotalInstance',
      updateTime: 'UpdateTime',
      weight: 'Weight',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      appConfig: 'string',
      appSpecName: 'string',
      appType: 'string',
      appVersion: 'string',
      callerUid: 'string',
      cpu: 'number',
      createTime: 'string',
      currentVersion: 'number',
      extraData: 'string',
      gpu: 'number',
      image: 'string',
      internetEndpoint: 'string',
      intranetEndpoint: 'string',
      labels: { 'type': 'array', 'itemType': ServiceLabels },
      latestVersion: 'number',
      memory: 'number',
      message: 'string',
      namespace: 'string',
      parentUid: 'string',
      pendingInstance: 'number',
      reason: 'string',
      region: 'string',
      requestId: 'string',
      resource: 'string',
      resourceAlias: 'string',
      role: 'string',
      roleAttrs: 'string',
      runningInstance: 'number',
      safetyLock: 'string',
      secondaryInternetEndpoint: 'string',
      secondaryIntranetEndpoint: 'string',
      serviceConfig: 'string',
      serviceGroup: 'string',
      serviceId: 'string',
      serviceName: 'string',
      serviceUid: 'string',
      source: 'string',
      status: 'string',
      totalInstance: 'number',
      updateTime: 'string',
      weight: 'number',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommitServiceResponseBody extends $tea.Model {
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

export class CommitServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CommitServiceResponseBody;
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
      body: CommitServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppServiceRequest extends $tea.Model {
  quotaId?: string;
  workspaceId?: string;
  appType?: string;
  appVersion?: string;
  config?: { [key: string]: any };
  replicas?: number;
  serviceName?: string;
  serviceSpec?: string;
  static names(): { [key: string]: string } {
    return {
      quotaId: 'QuotaId',
      workspaceId: 'WorkspaceId',
      appType: 'AppType',
      appVersion: 'AppVersion',
      config: 'Config',
      replicas: 'Replicas',
      serviceName: 'ServiceName',
      serviceSpec: 'ServiceSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaId: 'string',
      workspaceId: 'string',
      appType: 'string',
      appVersion: 'string',
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      replicas: 'number',
      serviceName: 'string',
      serviceSpec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppServiceResponseBody extends $tea.Model {
  internetEndpoint?: string;
  intranetEndpoint?: string;
  region?: string;
  requestId?: string;
  serviceId?: string;
  serviceName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      internetEndpoint: 'InternetEndpoint',
      intranetEndpoint: 'IntranetEndpoint',
      region: 'Region',
      requestId: 'RequestId',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internetEndpoint: 'string',
      intranetEndpoint: 'string',
      region: 'string',
      requestId: 'string',
      serviceId: 'string',
      serviceName: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAppServiceResponseBody;
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
      body: CreateAppServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBenchmarkTaskRequest extends $tea.Model {
  body?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBenchmarkTaskResponseBody extends $tea.Model {
  message?: string;
  region?: string;
  requestId?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      region: 'Region',
      requestId: 'RequestId',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      region: 'string',
      requestId: 'string',
      taskName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBenchmarkTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateBenchmarkTaskResponseBody;
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
      body: CreateBenchmarkTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewayRequest extends $tea.Model {
  resourceName?: string;
  enableInternet?: boolean;
  enableIntranet?: boolean;
  instanceType?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      resourceName: 'ResourceName',
      enableInternet: 'EnableInternet',
      enableIntranet: 'EnableIntranet',
      instanceType: 'InstanceType',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceName: 'string',
      enableInternet: 'boolean',
      enableIntranet: 'boolean',
      instanceType: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewayResponseBody extends $tea.Model {
  clusterId?: string;
  gatewayId?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      gatewayId: 'GatewayId',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      gatewayId: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewayResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateGatewayResponseBody;
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
      body: CreateGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewayIntranetLinkedVpcRequest extends $tea.Model {
  vSwitchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewayIntranetLinkedVpcResponseBody extends $tea.Model {
  gatewayId?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewayIntranetLinkedVpcResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateGatewayIntranetLinkedVpcResponseBody;
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
      body: CreateGatewayIntranetLinkedVpcResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceRequest extends $tea.Model {
  autoRenewal?: boolean;
  chargeType?: string;
  ecsInstanceCount?: number;
  ecsInstanceType?: string;
  resourceType?: string;
  selfManagedResourceOptions?: CreateResourceRequestSelfManagedResourceOptions;
  systemDiskSize?: number;
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenewal: 'AutoRenewal',
      chargeType: 'ChargeType',
      ecsInstanceCount: 'EcsInstanceCount',
      ecsInstanceType: 'EcsInstanceType',
      resourceType: 'ResourceType',
      selfManagedResourceOptions: 'SelfManagedResourceOptions',
      systemDiskSize: 'SystemDiskSize',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewal: 'boolean',
      chargeType: 'string',
      ecsInstanceCount: 'number',
      ecsInstanceType: 'string',
      resourceType: 'string',
      selfManagedResourceOptions: CreateResourceRequestSelfManagedResourceOptions,
      systemDiskSize: 'number',
      zone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceResponseBody extends $tea.Model {
  clusterId?: string;
  instanceIds?: string[];
  ownerUid?: string;
  requestId?: string;
  resourceId?: string;
  resourceName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      instanceIds: 'InstanceIds',
      ownerUid: 'OwnerUid',
      requestId: 'RequestId',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      ownerUid: 'string',
      requestId: 'string',
      resourceId: 'string',
      resourceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateResourceResponseBody;
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
      body: CreateResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceInstancesRequest extends $tea.Model {
  autoRenewal?: boolean;
  chargeType?: string;
  ecsInstanceCount?: number;
  ecsInstanceType?: string;
  systemDiskSize?: number;
  userData?: string;
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenewal: 'AutoRenewal',
      chargeType: 'ChargeType',
      ecsInstanceCount: 'EcsInstanceCount',
      ecsInstanceType: 'EcsInstanceType',
      systemDiskSize: 'SystemDiskSize',
      userData: 'UserData',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewal: 'boolean',
      chargeType: 'string',
      ecsInstanceCount: 'number',
      ecsInstanceType: 'string',
      systemDiskSize: 'number',
      userData: 'string',
      zone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceInstancesResponseBody extends $tea.Model {
  instanceIds?: string[];
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateResourceInstancesResponseBody;
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
      body: CreateResourceInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceLogRequest extends $tea.Model {
  logStore?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      logStore: 'LogStore',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logStore: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceLogResponseBody extends $tea.Model {
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

export class CreateResourceLogResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateResourceLogResponseBody;
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
      body: CreateResourceLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceRequest extends $tea.Model {
  develop?: string;
  labels?: { [key: string]: string };
  workspaceId?: string;
  body?: string;
  static names(): { [key: string]: string } {
    return {
      develop: 'Develop',
      labels: 'Labels',
      workspaceId: 'WorkspaceId',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      develop: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      workspaceId: 'string',
      body: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceShrinkRequest extends $tea.Model {
  develop?: string;
  labelsShrink?: string;
  workspaceId?: string;
  body?: string;
  static names(): { [key: string]: string } {
    return {
      develop: 'Develop',
      labelsShrink: 'Labels',
      workspaceId: 'WorkspaceId',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      develop: 'string',
      labelsShrink: 'string',
      workspaceId: 'string',
      body: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceResponseBody extends $tea.Model {
  internetEndpoint?: string;
  intranetEndpoint?: string;
  region?: string;
  requestId?: string;
  serviceId?: string;
  serviceName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      internetEndpoint: 'InternetEndpoint',
      intranetEndpoint: 'IntranetEndpoint',
      region: 'Region',
      requestId: 'RequestId',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internetEndpoint: 'string',
      intranetEndpoint: 'string',
      region: 'string',
      requestId: 'string',
      serviceId: 'string',
      serviceName: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateServiceResponseBody;
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
      body: CreateServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceAutoScalerRequest extends $tea.Model {
  behavior?: CreateServiceAutoScalerRequestBehavior;
  max?: number;
  min?: number;
  scaleStrategies?: CreateServiceAutoScalerRequestScaleStrategies[];
  static names(): { [key: string]: string } {
    return {
      behavior: 'behavior',
      max: 'max',
      min: 'min',
      scaleStrategies: 'scaleStrategies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      behavior: CreateServiceAutoScalerRequestBehavior,
      max: 'number',
      min: 'number',
      scaleStrategies: { 'type': 'array', 'itemType': CreateServiceAutoScalerRequestScaleStrategies },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceAutoScalerResponseBody extends $tea.Model {
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

export class CreateServiceAutoScalerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateServiceAutoScalerResponseBody;
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
      body: CreateServiceAutoScalerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceCronScalerRequest extends $tea.Model {
  excludeDates?: string[];
  scaleJobs?: CreateServiceCronScalerRequestScaleJobs[];
  static names(): { [key: string]: string } {
    return {
      excludeDates: 'ExcludeDates',
      scaleJobs: 'ScaleJobs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludeDates: { 'type': 'array', 'itemType': 'string' },
      scaleJobs: { 'type': 'array', 'itemType': CreateServiceCronScalerRequestScaleJobs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceCronScalerResponseBody extends $tea.Model {
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

export class CreateServiceCronScalerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateServiceCronScalerResponseBody;
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
      body: CreateServiceCronScalerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceMirrorRequest extends $tea.Model {
  ratio?: number;
  target?: string[];
  static names(): { [key: string]: string } {
    return {
      ratio: 'Ratio',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ratio: 'number',
      target: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceMirrorResponseBody extends $tea.Model {
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

export class CreateServiceMirrorResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateServiceMirrorResponseBody;
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
      body: CreateServiceMirrorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBenchmarkTaskResponseBody extends $tea.Model {
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

export class DeleteBenchmarkTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteBenchmarkTaskResponseBody;
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
      body: DeleteBenchmarkTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayResponseBody extends $tea.Model {
  gatewayId?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteGatewayResponseBody;
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
      body: DeleteGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayIntranetLinkedVpcRequest extends $tea.Model {
  vSwitchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayIntranetLinkedVpcResponseBody extends $tea.Model {
  gatewayId?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteGatewayIntranetLinkedVpcResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteGatewayIntranetLinkedVpcResponseBody;
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
      body: DeleteGatewayIntranetLinkedVpcResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceResponseBody extends $tea.Model {
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

export class DeleteResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteResourceResponseBody;
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
      body: DeleteResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceDLinkResponseBody extends $tea.Model {
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

export class DeleteResourceDLinkResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteResourceDLinkResponseBody;
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
      body: DeleteResourceDLinkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceInstancesRequest extends $tea.Model {
  allFailed?: boolean;
  instanceList?: string;
  static names(): { [key: string]: string } {
    return {
      allFailed: 'AllFailed',
      instanceList: 'InstanceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allFailed: 'boolean',
      instanceList: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceInstancesResponseBody extends $tea.Model {
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

export class DeleteResourceInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteResourceInstancesResponseBody;
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
      body: DeleteResourceInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteResourceLogResponseBody extends $tea.Model {
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

export class DeleteResourceLogResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteResourceLogResponseBody;
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
      body: DeleteResourceLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceResponseBody extends $tea.Model {
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

export class DeleteServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteServiceResponseBody;
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
      body: DeleteServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceAutoScalerResponseBody extends $tea.Model {
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

export class DeleteServiceAutoScalerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteServiceAutoScalerResponseBody;
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
      body: DeleteServiceAutoScalerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceCronScalerResponseBody extends $tea.Model {
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

export class DeleteServiceCronScalerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteServiceCronScalerResponseBody;
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
      body: DeleteServiceCronScalerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceInstancesRequest extends $tea.Model {
  container?: string;
  instanceList?: string;
  softRestart?: boolean;
  static names(): { [key: string]: string } {
    return {
      container: 'Container',
      instanceList: 'InstanceList',
      softRestart: 'SoftRestart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      container: 'string',
      instanceList: 'string',
      softRestart: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceInstancesResponseBody extends $tea.Model {
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

export class DeleteServiceInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteServiceInstancesResponseBody;
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
      body: DeleteServiceInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceLabelRequest extends $tea.Model {
  keys?: string[];
  static names(): { [key: string]: string } {
    return {
      keys: 'Keys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceLabelShrinkRequest extends $tea.Model {
  keysShrink?: string;
  static names(): { [key: string]: string } {
    return {
      keysShrink: 'Keys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keysShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceLabelResponseBody extends $tea.Model {
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

export class DeleteServiceLabelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteServiceLabelResponseBody;
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
      body: DeleteServiceLabelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceMirrorResponseBody extends $tea.Model {
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

export class DeleteServiceMirrorResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteServiceMirrorResponseBody;
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
      body: DeleteServiceMirrorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBenchmarkTaskResponseBody extends $tea.Model {
  availableAgent?: number;
  callerUid?: string;
  desiredAgent?: number;
  endpoint?: string;
  message?: string;
  parentUid?: string;
  reason?: string;
  requestId?: string;
  serviceName?: string;
  status?: string;
  taskId?: string;
  taskName?: string;
  token?: string;
  static names(): { [key: string]: string } {
    return {
      availableAgent: 'AvailableAgent',
      callerUid: 'CallerUid',
      desiredAgent: 'DesiredAgent',
      endpoint: 'Endpoint',
      message: 'Message',
      parentUid: 'ParentUid',
      reason: 'Reason',
      requestId: 'RequestId',
      serviceName: 'ServiceName',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableAgent: 'number',
      callerUid: 'string',
      desiredAgent: 'number',
      endpoint: 'string',
      message: 'string',
      parentUid: 'string',
      reason: 'string',
      requestId: 'string',
      serviceName: 'string',
      status: 'string',
      taskId: 'string',
      taskName: 'string',
      token: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBenchmarkTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeBenchmarkTaskResponseBody;
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
      body: DescribeBenchmarkTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBenchmarkTaskReportRequest extends $tea.Model {
  reportType?: string;
  static names(): { [key: string]: string } {
    return {
      reportType: 'ReportType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBenchmarkTaskReportResponseBody extends $tea.Model {
  data?: any;
  reportUrl?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      reportUrl: 'ReportUrl',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'any',
      reportUrl: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeBenchmarkTaskReportResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeBenchmarkTaskReportResponseBody;
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
      body: DescribeBenchmarkTaskReportResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayResponseBody extends $tea.Model {
  callerUid?: string;
  createTime?: string;
  externalClusterId?: string;
  gatewayId?: string;
  gatewayName?: string;
  instanceType?: string;
  internetAclPolicyList?: DescribeGatewayResponseBodyInternetAclPolicyList[];
  internetDomain?: string;
  internetEnabled?: boolean;
  intranetDomain?: string;
  intranetEnabled?: boolean;
  intranetLinkedVpcList?: DescribeGatewayResponseBodyIntranetLinkedVpcList[];
  parentUid?: string;
  region?: string;
  requestId?: string;
  status?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      callerUid: 'CallerUid',
      createTime: 'CreateTime',
      externalClusterId: 'ExternalClusterId',
      gatewayId: 'GatewayId',
      gatewayName: 'GatewayName',
      instanceType: 'InstanceType',
      internetAclPolicyList: 'InternetAclPolicyList',
      internetDomain: 'InternetDomain',
      internetEnabled: 'InternetEnabled',
      intranetDomain: 'IntranetDomain',
      intranetEnabled: 'IntranetEnabled',
      intranetLinkedVpcList: 'IntranetLinkedVpcList',
      parentUid: 'ParentUid',
      region: 'Region',
      requestId: 'RequestId',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callerUid: 'string',
      createTime: 'string',
      externalClusterId: 'string',
      gatewayId: 'string',
      gatewayName: 'string',
      instanceType: 'string',
      internetAclPolicyList: { 'type': 'array', 'itemType': DescribeGatewayResponseBodyInternetAclPolicyList },
      internetDomain: 'string',
      internetEnabled: 'boolean',
      intranetDomain: 'string',
      intranetEnabled: 'boolean',
      intranetLinkedVpcList: { 'type': 'array', 'itemType': DescribeGatewayResponseBodyIntranetLinkedVpcList },
      parentUid: 'string',
      region: 'string',
      requestId: 'string',
      status: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeGatewayResponseBody;
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
      body: DescribeGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGroupResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Group;
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
      body: Group,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceResponseBody extends $tea.Model {
  clusterId?: string;
  cpuCount?: number;
  createTime?: string;
  extraData?: string;
  gpuCount?: number;
  instanceCount?: number;
  message?: string;
  ownerUid?: string;
  postPaidInstanceCount?: number;
  prePaidInstanceCount?: number;
  requestId?: string;
  resourceId?: string;
  resourceName?: string;
  resourceType?: string;
  status?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      cpuCount: 'CpuCount',
      createTime: 'CreateTime',
      extraData: 'ExtraData',
      gpuCount: 'GpuCount',
      instanceCount: 'InstanceCount',
      message: 'Message',
      ownerUid: 'OwnerUid',
      postPaidInstanceCount: 'PostPaidInstanceCount',
      prePaidInstanceCount: 'PrePaidInstanceCount',
      requestId: 'RequestId',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      cpuCount: 'number',
      createTime: 'string',
      extraData: 'string',
      gpuCount: 'number',
      instanceCount: 'number',
      message: 'string',
      ownerUid: 'string',
      postPaidInstanceCount: 'number',
      prePaidInstanceCount: 'number',
      requestId: 'string',
      resourceId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      status: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeResourceResponseBody;
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
      body: DescribeResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceDLinkResponseBody extends $tea.Model {
  auxVSwitchList?: string[];
  destinationCIDRs?: string;
  requestId?: string;
  securityGroupId?: string;
  vSwitchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      auxVSwitchList: 'AuxVSwitchList',
      destinationCIDRs: 'DestinationCIDRs',
      requestId: 'RequestId',
      securityGroupId: 'SecurityGroupId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auxVSwitchList: { 'type': 'array', 'itemType': 'string' },
      destinationCIDRs: 'string',
      requestId: 'string',
      securityGroupId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceDLinkResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeResourceDLinkResponseBody;
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
      body: DescribeResourceDLinkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceLogResponseBody extends $tea.Model {
  logStore?: string;
  message?: string;
  projectName?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      logStore: 'LogStore',
      message: 'Message',
      projectName: 'ProjectName',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logStore: 'string',
      message: 'string',
      projectName: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceLogResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeResourceLogResponseBody;
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
      body: DescribeResourceLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Service;
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
      body: Service,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceAutoScalerResponseBody extends $tea.Model {
  behavior?: { [key: string]: any };
  currentMetrics?: DescribeServiceAutoScalerResponseBodyCurrentMetrics[];
  maxReplica?: number;
  minReplica?: number;
  requestId?: string;
  scaleStrategies?: DescribeServiceAutoScalerResponseBodyScaleStrategies[];
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      behavior: 'Behavior',
      currentMetrics: 'CurrentMetrics',
      maxReplica: 'MaxReplica',
      minReplica: 'MinReplica',
      requestId: 'RequestId',
      scaleStrategies: 'ScaleStrategies',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      behavior: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      currentMetrics: { 'type': 'array', 'itemType': DescribeServiceAutoScalerResponseBodyCurrentMetrics },
      maxReplica: 'number',
      minReplica: 'number',
      requestId: 'string',
      scaleStrategies: { 'type': 'array', 'itemType': DescribeServiceAutoScalerResponseBodyScaleStrategies },
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceAutoScalerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeServiceAutoScalerResponseBody;
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
      body: DescribeServiceAutoScalerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceCronScalerResponseBody extends $tea.Model {
  excludeDates?: string[];
  requestId?: string;
  scaleJobs?: DescribeServiceCronScalerResponseBodyScaleJobs[];
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      excludeDates: 'ExcludeDates',
      requestId: 'RequestId',
      scaleJobs: 'ScaleJobs',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludeDates: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      scaleJobs: { 'type': 'array', 'itemType': DescribeServiceCronScalerResponseBodyScaleJobs },
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceCronScalerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeServiceCronScalerResponseBody;
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
      body: DescribeServiceCronScalerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceDiagnosisResponseBody extends $tea.Model {
  diagnosisList?: DescribeServiceDiagnosisResponseBodyDiagnosisList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      diagnosisList: 'DiagnosisList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diagnosisList: { 'type': 'array', 'itemType': DescribeServiceDiagnosisResponseBodyDiagnosisList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceDiagnosisResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeServiceDiagnosisResponseBody;
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
      body: DescribeServiceDiagnosisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceEventRequest extends $tea.Model {
  endTime?: string;
  eventType?: string;
  instanceName?: string;
  pageNum?: string;
  pageSize?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      eventType: 'EventType',
      instanceName: 'InstanceName',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      eventType: 'string',
      instanceName: 'string',
      pageNum: 'string',
      pageSize: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceEventResponseBody extends $tea.Model {
  events?: DescribeServiceEventResponseBodyEvents[];
  pageNum?: number;
  requestId?: string;
  totalCount?: number;
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      events: 'Events',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': DescribeServiceEventResponseBodyEvents },
      pageNum: 'number',
      requestId: 'string',
      totalCount: 'number',
      totalPageNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceEventResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeServiceEventResponseBody;
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
      body: DescribeServiceEventResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceInstanceDiagnosisResponseBody extends $tea.Model {
  diagnosis?: DescribeServiceInstanceDiagnosisResponseBodyDiagnosis;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      diagnosis: 'Diagnosis',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diagnosis: DescribeServiceInstanceDiagnosisResponseBodyDiagnosis,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceInstanceDiagnosisResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeServiceInstanceDiagnosisResponseBody;
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
      body: DescribeServiceInstanceDiagnosisResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceLogRequest extends $tea.Model {
  containerName?: string;
  endTime?: string;
  instanceName?: string;
  ip?: string;
  keyword?: string;
  pageNum?: number;
  pageSize?: number;
  previous?: boolean;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      containerName: 'ContainerName',
      endTime: 'EndTime',
      instanceName: 'InstanceName',
      ip: 'Ip',
      keyword: 'Keyword',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      previous: 'Previous',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerName: 'string',
      endTime: 'string',
      instanceName: 'string',
      ip: 'string',
      keyword: 'string',
      pageNum: 'number',
      pageSize: 'number',
      previous: 'boolean',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceLogResponseBody extends $tea.Model {
  logs?: string[];
  pageNum?: number;
  requestId?: string;
  totalCount?: number;
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      logs: 'Logs',
      pageNum: 'PageNum',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logs: { 'type': 'array', 'itemType': 'string' },
      pageNum: 'number',
      requestId: 'string',
      totalCount: 'number',
      totalPageNum: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceLogResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeServiceLogResponseBody;
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
      body: DescribeServiceLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMirrorResponseBody extends $tea.Model {
  ratio?: string;
  requestId?: string;
  serviceName?: string;
  target?: string;
  static names(): { [key: string]: string } {
    return {
      ratio: 'Ratio',
      requestId: 'RequestId',
      serviceName: 'ServiceName',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ratio: 'string',
      requestId: 'string',
      serviceName: 'string',
      target: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceMirrorResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeServiceMirrorResponseBody;
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
      body: DescribeServiceMirrorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DevelopServiceRequest extends $tea.Model {
  exit?: string;
  static names(): { [key: string]: string } {
    return {
      exit: 'Exit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exit: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DevelopServiceResponseBody extends $tea.Model {
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

export class DevelopServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DevelopServiceResponseBody;
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
      body: DevelopServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBenchmarkTaskRequest extends $tea.Model {
  filter?: string;
  pageNumber?: string;
  pageSize?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBenchmarkTaskResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  tasks?: ListBenchmarkTaskResponseBodyTasks[];
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
      tasks: { 'type': 'array', 'itemType': ListBenchmarkTaskResponseBodyTasks },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBenchmarkTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListBenchmarkTaskResponseBody;
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
      body: ListBenchmarkTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayIntranetLinkedVpcResponseBody extends $tea.Model {
  gatewayId?: string;
  intranetLinkedVpcList?: ListGatewayIntranetLinkedVpcResponseBodyIntranetLinkedVpcList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      intranetLinkedVpcList: 'IntranetLinkedVpcList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      intranetLinkedVpcList: { 'type': 'array', 'itemType': ListGatewayIntranetLinkedVpcResponseBodyIntranetLinkedVpcList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayIntranetLinkedVpcResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListGatewayIntranetLinkedVpcResponseBody;
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
      body: ListGatewayIntranetLinkedVpcResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsRequest extends $tea.Model {
  filter?: string;
  pageNumber?: string;
  pageSize?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGroupsResponseBody extends $tea.Model {
  groups?: Group[];
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      groups: 'Groups',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groups: { 'type': 'array', 'itemType': Group },
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

export class ListGroupsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListGroupsResponseBody;
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
      body: ListGroupsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceInstanceWorkerRequest extends $tea.Model {
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

export class ListResourceInstanceWorkerResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  pods?: ResourceInstanceWorker[];
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pods: 'Pods',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      pods: { 'type': 'array', 'itemType': ResourceInstanceWorker },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceInstanceWorkerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListResourceInstanceWorkerResponseBody;
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
      body: ListResourceInstanceWorkerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceInstancesRequest extends $tea.Model {
  chargeType?: string;
  filter?: string;
  instanceIP?: string;
  instanceId?: string;
  instanceName?: string;
  instanceStatus?: string;
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  sort?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      filter: 'Filter',
      instanceIP: 'InstanceIP',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      instanceStatus: 'InstanceStatus',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sort: 'Sort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      filter: 'string',
      instanceIP: 'string',
      instanceId: 'string',
      instanceName: 'string',
      instanceStatus: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sort: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceInstancesResponseBody extends $tea.Model {
  instances?: ResourceInstance[];
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
      instances: { 'type': 'array', 'itemType': ResourceInstance },
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

export class ListResourceInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListResourceInstancesResponseBody;
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
      body: ListResourceInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceServicesRequest extends $tea.Model {
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

export class ListResourceServicesResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  services?: Service[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      services: 'Services',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      services: { 'type': 'array', 'itemType': Service },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceServicesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListResourceServicesResponseBody;
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
      body: ListResourceServicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesRequest extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  resourceId?: string;
  resourceName?: string;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      resourceId: 'string',
      resourceName: 'string',
      resourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  resources?: Resource[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      resources: 'Resources',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': Resource },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListResourcesResponseBody;
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
      body: ListResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceContainersResponseBody extends $tea.Model {
  containers?: ContainerInfo[];
  requestId?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      containers: 'Containers',
      requestId: 'RequestId',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containers: { 'type': 'array', 'itemType': ContainerInfo },
      requestId: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceContainersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListServiceContainersResponseBody;
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
      body: ListServiceContainersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstancesRequest extends $tea.Model {
  filter?: string;
  hostIP?: string;
  instanceIP?: string;
  instanceName?: string;
  instanceStatus?: string;
  instanceType?: string;
  isSpot?: boolean;
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  resourceType?: string;
  role?: string;
  sort?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      hostIP: 'HostIP',
      instanceIP: 'InstanceIP',
      instanceName: 'InstanceName',
      instanceStatus: 'InstanceStatus',
      instanceType: 'InstanceType',
      isSpot: 'IsSpot',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceType: 'ResourceType',
      role: 'Role',
      sort: 'Sort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      hostIP: 'string',
      instanceIP: 'string',
      instanceName: 'string',
      instanceStatus: 'string',
      instanceType: 'string',
      isSpot: 'boolean',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceType: 'string',
      role: 'string',
      sort: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstancesResponseBody extends $tea.Model {
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

export class ListServiceInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListServiceInstancesResponseBody;
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
      body: ListServiceInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceVersionsRequest extends $tea.Model {
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

export class ListServiceVersionsResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  totalCount?: number;
  versions?: ListServiceVersionsResponseBodyVersions[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      versions: 'Versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      versions: { 'type': 'array', 'itemType': ListServiceVersionsResponseBodyVersions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceVersionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListServiceVersionsResponseBody;
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
      body: ListServiceVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesRequest extends $tea.Model {
  filter?: string;
  groupName?: string;
  label?: { [key: string]: string };
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  parentServiceUid?: string;
  quotaId?: string;
  resourceName?: string;
  serviceName?: string;
  serviceStatus?: string;
  serviceType?: string;
  serviceUid?: string;
  sort?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      groupName: 'GroupName',
      label: 'Label',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      parentServiceUid: 'ParentServiceUid',
      quotaId: 'QuotaId',
      resourceName: 'ResourceName',
      serviceName: 'ServiceName',
      serviceStatus: 'ServiceStatus',
      serviceType: 'ServiceType',
      serviceUid: 'ServiceUid',
      sort: 'Sort',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      groupName: 'string',
      label: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      parentServiceUid: 'string',
      quotaId: 'string',
      resourceName: 'string',
      serviceName: 'string',
      serviceStatus: 'string',
      serviceType: 'string',
      serviceUid: 'string',
      sort: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesShrinkRequest extends $tea.Model {
  filter?: string;
  groupName?: string;
  labelShrink?: string;
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  parentServiceUid?: string;
  quotaId?: string;
  resourceName?: string;
  serviceName?: string;
  serviceStatus?: string;
  serviceType?: string;
  serviceUid?: string;
  sort?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      groupName: 'GroupName',
      labelShrink: 'Label',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      parentServiceUid: 'ParentServiceUid',
      quotaId: 'QuotaId',
      resourceName: 'ResourceName',
      serviceName: 'ServiceName',
      serviceStatus: 'ServiceStatus',
      serviceType: 'ServiceType',
      serviceUid: 'ServiceUid',
      sort: 'Sort',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      groupName: 'string',
      labelShrink: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      parentServiceUid: 'string',
      quotaId: 'string',
      resourceName: 'string',
      serviceName: 'string',
      serviceStatus: 'string',
      serviceType: 'string',
      serviceUid: 'string',
      sort: 'string',
      workspaceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponseBody extends $tea.Model {
  pageNumber?: number;
  pageSize?: number;
  requestId?: string;
  services?: Service[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      services: 'Services',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      services: { 'type': 'array', 'itemType': Service },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListServicesResponseBody;
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
      body: ListServicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseServiceRequest extends $tea.Model {
  trafficState?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      trafficState: 'TrafficState',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trafficState: 'string',
      weight: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseServiceResponseBody extends $tea.Model {
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

export class ReleaseServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReleaseServiceResponseBody;
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
      body: ReleaseServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RestartServiceResponseBody extends $tea.Model {
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

export class RestartServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RestartServiceResponseBody;
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
      body: RestartServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartBenchmarkTaskResponseBody extends $tea.Model {
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

export class StartBenchmarkTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartBenchmarkTaskResponseBody;
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
      body: StartBenchmarkTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartServiceResponseBody extends $tea.Model {
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

export class StartServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StartServiceResponseBody;
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
      body: StartServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopBenchmarkTaskResponseBody extends $tea.Model {
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

export class StopBenchmarkTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopBenchmarkTaskResponseBody;
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
      body: StopBenchmarkTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopServiceResponseBody extends $tea.Model {
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

export class StopServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: StopServiceResponseBody;
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
      body: StopServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppServiceRequest extends $tea.Model {
  quotaId?: string;
  workspaceId?: string;
  appType?: string;
  appVersion?: string;
  config?: { [key: string]: any };
  replicas?: number;
  serviceSpec?: string;
  static names(): { [key: string]: string } {
    return {
      quotaId: 'QuotaId',
      workspaceId: 'WorkspaceId',
      appType: 'AppType',
      appVersion: 'AppVersion',
      config: 'Config',
      replicas: 'Replicas',
      serviceSpec: 'ServiceSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      quotaId: 'string',
      workspaceId: 'string',
      appType: 'string',
      appVersion: 'string',
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      replicas: 'number',
      serviceSpec: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppServiceResponseBody extends $tea.Model {
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

export class UpdateAppServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateAppServiceResponseBody;
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
      body: UpdateAppServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBenchmarkTaskRequest extends $tea.Model {
  body?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBenchmarkTaskResponseBody extends $tea.Model {
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

export class UpdateBenchmarkTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateBenchmarkTaskResponseBody;
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
      body: UpdateBenchmarkTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayRequest extends $tea.Model {
  enableInternet?: boolean;
  enableIntranet?: boolean;
  instanceType?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      enableInternet: 'EnableInternet',
      enableIntranet: 'EnableIntranet',
      instanceType: 'InstanceType',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableInternet: 'boolean',
      enableIntranet: 'boolean',
      instanceType: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayResponseBody extends $tea.Model {
  gatewayId?: string;
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateGatewayResponseBody;
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
      body: UpdateGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceRequest extends $tea.Model {
  resourceName?: string;
  selfManagedResourceOptions?: UpdateResourceRequestSelfManagedResourceOptions;
  static names(): { [key: string]: string } {
    return {
      resourceName: 'ResourceName',
      selfManagedResourceOptions: 'SelfManagedResourceOptions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceName: 'string',
      selfManagedResourceOptions: UpdateResourceRequestSelfManagedResourceOptions,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceResponseBody extends $tea.Model {
  requestId?: string;
  resourceId?: string;
  resourceName?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceId: 'string',
      resourceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateResourceResponseBody;
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
      body: UpdateResourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceDLinkRequest extends $tea.Model {
  destinationCIDRs?: string;
  securityGroupId?: string;
  vSwitchId?: string;
  vSwitchIdList?: string[];
  static names(): { [key: string]: string } {
    return {
      destinationCIDRs: 'DestinationCIDRs',
      securityGroupId: 'SecurityGroupId',
      vSwitchId: 'VSwitchId',
      vSwitchIdList: 'VSwitchIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCIDRs: 'string',
      securityGroupId: 'string',
      vSwitchId: 'string',
      vSwitchIdList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceDLinkResponseBody extends $tea.Model {
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

export class UpdateResourceDLinkResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateResourceDLinkResponseBody;
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
      body: UpdateResourceDLinkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceInstanceRequest extends $tea.Model {
  action?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceInstanceResponseBody extends $tea.Model {
  instanceId?: string;
  requestId?: string;
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      requestId: 'RequestId',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      requestId: 'string',
      resourceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateResourceInstanceResponseBody;
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
      body: UpdateResourceInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceRequest extends $tea.Model {
  updateType?: string;
  body?: string;
  static names(): { [key: string]: string } {
    return {
      updateType: 'UpdateType',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      updateType: 'string',
      body: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceResponseBody extends $tea.Model {
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

export class UpdateServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateServiceResponseBody;
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
      body: UpdateServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceAutoScalerRequest extends $tea.Model {
  behavior?: UpdateServiceAutoScalerRequestBehavior;
  max?: number;
  min?: number;
  scaleStrategies?: UpdateServiceAutoScalerRequestScaleStrategies[];
  static names(): { [key: string]: string } {
    return {
      behavior: 'behavior',
      max: 'max',
      min: 'min',
      scaleStrategies: 'scaleStrategies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      behavior: UpdateServiceAutoScalerRequestBehavior,
      max: 'number',
      min: 'number',
      scaleStrategies: { 'type': 'array', 'itemType': UpdateServiceAutoScalerRequestScaleStrategies },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceAutoScalerResponseBody extends $tea.Model {
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

export class UpdateServiceAutoScalerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateServiceAutoScalerResponseBody;
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
      body: UpdateServiceAutoScalerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceCronScalerRequest extends $tea.Model {
  excludeDates?: string[];
  scaleJobs?: UpdateServiceCronScalerRequestScaleJobs[];
  static names(): { [key: string]: string } {
    return {
      excludeDates: 'ExcludeDates',
      scaleJobs: 'ScaleJobs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      excludeDates: { 'type': 'array', 'itemType': 'string' },
      scaleJobs: { 'type': 'array', 'itemType': UpdateServiceCronScalerRequestScaleJobs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceCronScalerResponseBody extends $tea.Model {
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

export class UpdateServiceCronScalerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateServiceCronScalerResponseBody;
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
      body: UpdateServiceCronScalerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceInstanceRequest extends $tea.Model {
  isolate?: boolean;
  static names(): { [key: string]: string } {
    return {
      isolate: 'Isolate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isolate: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceInstanceResponseBody extends $tea.Model {
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

export class UpdateServiceInstanceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateServiceInstanceResponseBody;
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
      body: UpdateServiceInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceLabelRequest extends $tea.Model {
  labels?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceLabelResponseBody extends $tea.Model {
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

export class UpdateServiceLabelResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateServiceLabelResponseBody;
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
      body: UpdateServiceLabelResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceMirrorRequest extends $tea.Model {
  ratio?: number;
  target?: string[];
  static names(): { [key: string]: string } {
    return {
      ratio: 'Ratio',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ratio: 'number',
      target: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceMirrorResponseBody extends $tea.Model {
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

export class UpdateServiceMirrorResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateServiceMirrorResponseBody;
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
      body: UpdateServiceMirrorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceSafetyLockRequest extends $tea.Model {
  lock?: string;
  static names(): { [key: string]: string } {
    return {
      lock: 'Lock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lock: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceSafetyLockResponseBody extends $tea.Model {
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

export class UpdateServiceSafetyLockResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateServiceSafetyLockResponseBody;
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
      body: UpdateServiceSafetyLockResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceVersionRequest extends $tea.Model {
  version?: number;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceVersionResponseBody extends $tea.Model {
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

export class UpdateServiceVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: UpdateServiceVersionResponseBody;
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
      body: UpdateServiceVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ServiceLabels extends $tea.Model {
  labelKey?: string;
  labelValue?: string;
  static names(): { [key: string]: string } {
    return {
      labelKey: 'LabelKey',
      labelValue: 'LabelValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelKey: 'string',
      labelValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceRequestSelfManagedResourceOptionsNodeTolerations extends $tea.Model {
  effect?: string;
  key?: string;
  operator?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      effect: 'effect',
      key: 'key',
      operator: 'operator',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effect: 'string',
      key: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceRequestSelfManagedResourceOptions extends $tea.Model {
  externalClusterId?: string;
  nodeMatchLabels?: { [key: string]: string };
  nodeTolerations?: CreateResourceRequestSelfManagedResourceOptionsNodeTolerations[];
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      externalClusterId: 'ExternalClusterId',
      nodeMatchLabels: 'NodeMatchLabels',
      nodeTolerations: 'NodeTolerations',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalClusterId: 'string',
      nodeMatchLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      nodeTolerations: { 'type': 'array', 'itemType': CreateResourceRequestSelfManagedResourceOptionsNodeTolerations },
      roleName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceAutoScalerRequestBehaviorOnZero extends $tea.Model {
  scaleDownGracePeriodSeconds?: number;
  scaleUpActivationReplicas?: number;
  static names(): { [key: string]: string } {
    return {
      scaleDownGracePeriodSeconds: 'scaleDownGracePeriodSeconds',
      scaleUpActivationReplicas: 'scaleUpActivationReplicas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scaleDownGracePeriodSeconds: 'number',
      scaleUpActivationReplicas: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceAutoScalerRequestBehaviorScaleDown extends $tea.Model {
  stabilizationWindowSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      stabilizationWindowSeconds: 'stabilizationWindowSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stabilizationWindowSeconds: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceAutoScalerRequestBehaviorScaleUp extends $tea.Model {
  stabilizationWindowSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      stabilizationWindowSeconds: 'stabilizationWindowSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stabilizationWindowSeconds: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceAutoScalerRequestBehavior extends $tea.Model {
  onZero?: CreateServiceAutoScalerRequestBehaviorOnZero;
  scaleDown?: CreateServiceAutoScalerRequestBehaviorScaleDown;
  scaleUp?: CreateServiceAutoScalerRequestBehaviorScaleUp;
  static names(): { [key: string]: string } {
    return {
      onZero: 'onZero',
      scaleDown: 'scaleDown',
      scaleUp: 'scaleUp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onZero: CreateServiceAutoScalerRequestBehaviorOnZero,
      scaleDown: CreateServiceAutoScalerRequestBehaviorScaleDown,
      scaleUp: CreateServiceAutoScalerRequestBehaviorScaleUp,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceAutoScalerRequestScaleStrategies extends $tea.Model {
  metricName?: string;
  service?: string;
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      metricName: 'metricName',
      service: 'service',
      threshold: 'threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricName: 'string',
      service: 'string',
      threshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceCronScalerRequestScaleJobs extends $tea.Model {
  name?: string;
  schedule?: string;
  targetSize?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      schedule: 'Schedule',
      targetSize: 'TargetSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      schedule: 'string',
      targetSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayResponseBodyInternetAclPolicyList extends $tea.Model {
  comment?: string;
  entry?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      entry: 'Entry',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      entry: 'string',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGatewayResponseBodyIntranetLinkedVpcList extends $tea.Model {
  ip?: string;
  securityGroupId?: string;
  status?: string;
  vSwitchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      securityGroupId: 'SecurityGroupId',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      securityGroupId: 'string',
      status: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceAutoScalerResponseBodyCurrentMetrics extends $tea.Model {
  metricName?: string;
  service?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      metricName: 'metricName',
      service: 'service',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricName: 'string',
      service: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceAutoScalerResponseBodyScaleStrategies extends $tea.Model {
  metricName?: string;
  service?: string;
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      metricName: 'metricName',
      service: 'service',
      threshold: 'threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricName: 'string',
      service: 'string',
      threshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceCronScalerResponseBodyScaleJobs extends $tea.Model {
  createTime?: string;
  lastProbeTime?: string;
  message?: string;
  name?: string;
  schedule?: string;
  state?: string;
  targetSize?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      lastProbeTime: 'LastProbeTime',
      message: 'Message',
      name: 'Name',
      schedule: 'Schedule',
      state: 'State',
      targetSize: 'TargetSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      lastProbeTime: 'string',
      message: 'string',
      name: 'string',
      schedule: 'string',
      state: 'string',
      targetSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceDiagnosisResponseBodyDiagnosisList extends $tea.Model {
  advices?: string[];
  causes?: string[];
  error?: string;
  static names(): { [key: string]: string } {
    return {
      advices: 'Advices',
      causes: 'Causes',
      error: 'Error',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advices: { 'type': 'array', 'itemType': 'string' },
      causes: { 'type': 'array', 'itemType': 'string' },
      error: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceEventResponseBodyEvents extends $tea.Model {
  message?: string;
  reason?: string;
  time?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      reason: 'Reason',
      time: 'Time',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      reason: 'string',
      time: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceInstanceDiagnosisResponseBodyDiagnosis extends $tea.Model {
  advices?: string[];
  causes?: string[];
  error?: string;
  static names(): { [key: string]: string } {
    return {
      advices: 'Advices',
      causes: 'Causes',
      error: 'Error',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advices: { 'type': 'array', 'itemType': 'string' },
      causes: { 'type': 'array', 'itemType': 'string' },
      error: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBenchmarkTaskResponseBodyTasks extends $tea.Model {
  availableAgent?: number;
  createTime?: string;
  message?: string;
  region?: string;
  serviceName?: string;
  status?: string;
  taskId?: string;
  taskName?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      availableAgent: 'AvailableAgent',
      createTime: 'CreateTime',
      message: 'Message',
      region: 'Region',
      serviceName: 'ServiceName',
      status: 'Status',
      taskId: 'TaskId',
      taskName: 'TaskName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableAgent: 'number',
      createTime: 'string',
      message: 'string',
      region: 'string',
      serviceName: 'string',
      status: 'string',
      taskId: 'string',
      taskName: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayIntranetLinkedVpcResponseBodyIntranetLinkedVpcList extends $tea.Model {
  ip?: string;
  securityGroupId?: string;
  status?: string;
  vSwitchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'Ip',
      securityGroupId: 'SecurityGroupId',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      securityGroupId: 'string',
      status: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceVersionsResponseBodyVersions extends $tea.Model {
  buildTime?: string;
  imageAvailable?: string;
  imageId?: number;
  message?: string;
  serviceConfig?: string;
  serviceRunnable?: string;
  static names(): { [key: string]: string } {
    return {
      buildTime: 'BuildTime',
      imageAvailable: 'ImageAvailable',
      imageId: 'ImageId',
      message: 'Message',
      serviceConfig: 'ServiceConfig',
      serviceRunnable: 'ServiceRunnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildTime: 'string',
      imageAvailable: 'string',
      imageId: 'number',
      message: 'string',
      serviceConfig: 'string',
      serviceRunnable: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceRequestSelfManagedResourceOptionsNodeTolerations extends $tea.Model {
  effect?: string;
  key?: string;
  operator?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      effect: 'effect',
      key: 'key',
      operator: 'operator',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effect: 'string',
      key: 'string',
      operator: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceRequestSelfManagedResourceOptions extends $tea.Model {
  nodeMatchLabels?: { [key: string]: string };
  nodeTolerations?: UpdateResourceRequestSelfManagedResourceOptionsNodeTolerations[];
  static names(): { [key: string]: string } {
    return {
      nodeMatchLabels: 'NodeMatchLabels',
      nodeTolerations: 'NodeTolerations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeMatchLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      nodeTolerations: { 'type': 'array', 'itemType': UpdateResourceRequestSelfManagedResourceOptionsNodeTolerations },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceAutoScalerRequestBehaviorOnZero extends $tea.Model {
  scaleDownGracePeriodSeconds?: number;
  scaleUpActivationReplicas?: number;
  static names(): { [key: string]: string } {
    return {
      scaleDownGracePeriodSeconds: 'scaleDownGracePeriodSeconds',
      scaleUpActivationReplicas: 'scaleUpActivationReplicas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scaleDownGracePeriodSeconds: 'number',
      scaleUpActivationReplicas: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceAutoScalerRequestBehaviorScaleDown extends $tea.Model {
  stabilizationWindowSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      stabilizationWindowSeconds: 'stabilizationWindowSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stabilizationWindowSeconds: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceAutoScalerRequestBehaviorScaleUp extends $tea.Model {
  stabilizationWindowSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      stabilizationWindowSeconds: 'stabilizationWindowSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stabilizationWindowSeconds: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceAutoScalerRequestBehavior extends $tea.Model {
  onZero?: UpdateServiceAutoScalerRequestBehaviorOnZero;
  scaleDown?: UpdateServiceAutoScalerRequestBehaviorScaleDown;
  scaleUp?: UpdateServiceAutoScalerRequestBehaviorScaleUp;
  static names(): { [key: string]: string } {
    return {
      onZero: 'onZero',
      scaleDown: 'scaleDown',
      scaleUp: 'scaleUp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onZero: UpdateServiceAutoScalerRequestBehaviorOnZero,
      scaleDown: UpdateServiceAutoScalerRequestBehaviorScaleDown,
      scaleUp: UpdateServiceAutoScalerRequestBehaviorScaleUp,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceAutoScalerRequestScaleStrategies extends $tea.Model {
  metricName?: string;
  service?: string;
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      metricName: 'metricName',
      service: 'service',
      threshold: 'threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricName: 'string',
      service: 'string',
      threshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceCronScalerRequestScaleJobs extends $tea.Model {
  name?: string;
  schedule?: string;
  targetSize?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      schedule: 'Schedule',
      targetSize: 'TargetSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      schedule: 'string',
      targetSize: 'number',
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
    this._endpointMap = {
      'cn-beijing': "pai-eas.cn-beijing.aliyuncs.com",
      'cn-zhangjiakou': "pai-eas.cn-zhangjiakou.aliyuncs.com",
      'cn-hangzhou': "pai-eas.cn-hangzhou.aliyuncs.com",
      'cn-shanghai': "pai-eas.cn-shanghai.aliyuncs.com",
      'cn-shenzhen': "pai-eas.cn-shenzhen.aliyuncs.com",
      'cn-hongkong': "pai-eas.cn-hongkong.aliyuncs.com",
      'ap-southeast-1': "pai-eas.ap-southeast-1.aliyuncs.com",
      'ap-southeast-5': "pai-eas.ap-southeast-5.aliyuncs.com",
      'us-east-1': "pai-eas.us-east-1.aliyuncs.com",
      'us-west-1': "pai-eas.us-west-1.aliyuncs.com",
      'eu-central-1': "pai-eas.eu-central-1.aliyuncs.com",
      'ap-south-1': "pai-eas.ap-south-1.aliyuncs.com",
      'cn-shanghai-finance-1': "pai-eas.cn-shanghai-finance-1.aliyuncs.com",
      'cn-north-2-gov-1': "pai-eas.cn-north-2-gov-1.aliyuncs.com",
      'cn-chengdu': "pai-eas.cn-chengdu.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("eas", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async commitServiceWithOptions(ClusterId: string, ServiceName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CommitServiceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "CommitService",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(ServiceName)}/commit`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CommitServiceResponse>(await this.callApi(params, req, runtime), new CommitServiceResponse({}));
  }

  async commitService(ClusterId: string, ServiceName: string): Promise<CommitServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.commitServiceWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  async createAppServiceWithOptions(request: CreateAppServiceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateAppServiceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.quotaId)) {
      query["QuotaId"] = request.quotaId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!Util.isUnset(request.appVersion)) {
      body["AppVersion"] = request.appVersion;
    }

    if (!Util.isUnset(request.config)) {
      body["Config"] = request.config;
    }

    if (!Util.isUnset(request.replicas)) {
      body["Replicas"] = request.replicas;
    }

    if (!Util.isUnset(request.serviceName)) {
      body["ServiceName"] = request.serviceName;
    }

    if (!Util.isUnset(request.serviceSpec)) {
      body["ServiceSpec"] = request.serviceSpec;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateAppService",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/app_services`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateAppServiceResponse>(await this.callApi(params, req, runtime), new CreateAppServiceResponse({}));
  }

  async createAppService(request: CreateAppServiceRequest): Promise<CreateAppServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAppServiceWithOptions(request, headers, runtime);
  }

  async createBenchmarkTaskWithOptions(request: CreateBenchmarkTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateBenchmarkTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: request.body,
    });
    let params = new $OpenApi.Params({
      action: "CreateBenchmarkTask",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/benchmark-tasks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateBenchmarkTaskResponse>(await this.callApi(params, req, runtime), new CreateBenchmarkTaskResponse({}));
  }

  async createBenchmarkTask(request: CreateBenchmarkTaskRequest): Promise<CreateBenchmarkTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createBenchmarkTaskWithOptions(request, headers, runtime);
  }

  async createGatewayWithOptions(request: CreateGatewayRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateGatewayResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resourceName)) {
      query["ResourceName"] = request.resourceName;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.enableInternet)) {
      body["EnableInternet"] = request.enableInternet;
    }

    if (!Util.isUnset(request.enableIntranet)) {
      body["EnableIntranet"] = request.enableIntranet;
    }

    if (!Util.isUnset(request.instanceType)) {
      body["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateGateway",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/gateways`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateGatewayResponse>(await this.callApi(params, req, runtime), new CreateGatewayResponse({}));
  }

  async createGateway(request: CreateGatewayRequest): Promise<CreateGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createGatewayWithOptions(request, headers, runtime);
  }

  async createGatewayIntranetLinkedVpcWithOptions(ClusterId: string, GatewayId: string, request: CreateGatewayIntranetLinkedVpcRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateGatewayIntranetLinkedVpcResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateGatewayIntranetLinkedVpc",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/gateways/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(GatewayId)}/intranet_endpoint_linked_vpc`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateGatewayIntranetLinkedVpcResponse>(await this.callApi(params, req, runtime), new CreateGatewayIntranetLinkedVpcResponse({}));
  }

  async createGatewayIntranetLinkedVpc(ClusterId: string, GatewayId: string, request: CreateGatewayIntranetLinkedVpcRequest): Promise<CreateGatewayIntranetLinkedVpcResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createGatewayIntranetLinkedVpcWithOptions(ClusterId, GatewayId, request, headers, runtime);
  }

  async createResourceWithOptions(request: CreateResourceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateResourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.autoRenewal)) {
      body["AutoRenewal"] = request.autoRenewal;
    }

    if (!Util.isUnset(request.chargeType)) {
      body["ChargeType"] = request.chargeType;
    }

    if (!Util.isUnset(request.ecsInstanceCount)) {
      body["EcsInstanceCount"] = request.ecsInstanceCount;
    }

    if (!Util.isUnset(request.ecsInstanceType)) {
      body["EcsInstanceType"] = request.ecsInstanceType;
    }

    if (!Util.isUnset(request.resourceType)) {
      body["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.selfManagedResourceOptions)) {
      body["SelfManagedResourceOptions"] = request.selfManagedResourceOptions;
    }

    if (!Util.isUnset(request.systemDiskSize)) {
      body["SystemDiskSize"] = request.systemDiskSize;
    }

    if (!Util.isUnset(request.zone)) {
      body["Zone"] = request.zone;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateResource",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateResourceResponse>(await this.callApi(params, req, runtime), new CreateResourceResponse({}));
  }

  async createResource(request: CreateResourceRequest): Promise<CreateResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createResourceWithOptions(request, headers, runtime);
  }

  async createResourceInstancesWithOptions(ClusterId: string, ResourceId: string, request: CreateResourceInstancesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateResourceInstancesResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.autoRenewal)) {
      body["AutoRenewal"] = request.autoRenewal;
    }

    if (!Util.isUnset(request.chargeType)) {
      body["ChargeType"] = request.chargeType;
    }

    if (!Util.isUnset(request.ecsInstanceCount)) {
      body["EcsInstanceCount"] = request.ecsInstanceCount;
    }

    if (!Util.isUnset(request.ecsInstanceType)) {
      body["EcsInstanceType"] = request.ecsInstanceType;
    }

    if (!Util.isUnset(request.systemDiskSize)) {
      body["SystemDiskSize"] = request.systemDiskSize;
    }

    if (!Util.isUnset(request.userData)) {
      body["UserData"] = request.userData;
    }

    if (!Util.isUnset(request.zone)) {
      body["Zone"] = request.zone;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateResourceInstances",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(ResourceId)}/instances`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateResourceInstancesResponse>(await this.callApi(params, req, runtime), new CreateResourceInstancesResponse({}));
  }

  async createResourceInstances(ClusterId: string, ResourceId: string, request: CreateResourceInstancesRequest): Promise<CreateResourceInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createResourceInstancesWithOptions(ClusterId, ResourceId, request, headers, runtime);
  }

  async createResourceLogWithOptions(ClusterId: string, ResourceId: string, request: CreateResourceLogRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateResourceLogResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.logStore)) {
      body["LogStore"] = request.logStore;
    }

    if (!Util.isUnset(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateResourceLog",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(ResourceId)}/log`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateResourceLogResponse>(await this.callApi(params, req, runtime), new CreateResourceLogResponse({}));
  }

  async createResourceLog(ClusterId: string, ResourceId: string, request: CreateResourceLogRequest): Promise<CreateResourceLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createResourceLogWithOptions(ClusterId, ResourceId, request, headers, runtime);
  }

  async createServiceWithOptions(tmpReq: CreateServiceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateServiceResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateServiceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.labels)) {
      request.labelsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labels, "Labels", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.develop)) {
      query["Develop"] = request.develop;
    }

    if (!Util.isUnset(request.labelsShrink)) {
      query["Labels"] = request.labelsShrink;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApi.Params({
      action: "CreateService",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateServiceResponse>(await this.callApi(params, req, runtime), new CreateServiceResponse({}));
  }

  async createService(request: CreateServiceRequest): Promise<CreateServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createServiceWithOptions(request, headers, runtime);
  }

  async createServiceAutoScalerWithOptions(ClusterId: string, ServiceName: string, request: CreateServiceAutoScalerRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateServiceAutoScalerResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.behavior)) {
      body["behavior"] = request.behavior;
    }

    if (!Util.isUnset(request.max)) {
      body["max"] = request.max;
    }

    if (!Util.isUnset(request.min)) {
      body["min"] = request.min;
    }

    if (!Util.isUnset(request.scaleStrategies)) {
      body["scaleStrategies"] = request.scaleStrategies;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateServiceAutoScaler",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(ServiceName)}/autoscaler`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateServiceAutoScalerResponse>(await this.callApi(params, req, runtime), new CreateServiceAutoScalerResponse({}));
  }

  async createServiceAutoScaler(ClusterId: string, ServiceName: string, request: CreateServiceAutoScalerRequest): Promise<CreateServiceAutoScalerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createServiceAutoScalerWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  async createServiceCronScalerWithOptions(ClusterId: string, ServiceName: string, request: CreateServiceCronScalerRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateServiceCronScalerResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.excludeDates)) {
      body["ExcludeDates"] = request.excludeDates;
    }

    if (!Util.isUnset(request.scaleJobs)) {
      body["ScaleJobs"] = request.scaleJobs;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateServiceCronScaler",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(ServiceName)}/cronscaler`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateServiceCronScalerResponse>(await this.callApi(params, req, runtime), new CreateServiceCronScalerResponse({}));
  }

  async createServiceCronScaler(ClusterId: string, ServiceName: string, request: CreateServiceCronScalerRequest): Promise<CreateServiceCronScalerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createServiceCronScalerWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  async createServiceMirrorWithOptions(ClusterId: string, ServiceName: string, request: CreateServiceMirrorRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateServiceMirrorResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ratio)) {
      body["Ratio"] = request.ratio;
    }

    if (!Util.isUnset(request.target)) {
      body["Target"] = request.target;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateServiceMirror",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(ServiceName)}/mirror`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateServiceMirrorResponse>(await this.callApi(params, req, runtime), new CreateServiceMirrorResponse({}));
  }

  async createServiceMirror(ClusterId: string, ServiceName: string, request: CreateServiceMirrorRequest): Promise<CreateServiceMirrorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createServiceMirrorWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  async deleteBenchmarkTaskWithOptions(ClusterId: string, TaskName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteBenchmarkTaskResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteBenchmarkTask",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/benchmark-tasks/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(TaskName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteBenchmarkTaskResponse>(await this.callApi(params, req, runtime), new DeleteBenchmarkTaskResponse({}));
  }

  async deleteBenchmarkTask(ClusterId: string, TaskName: string): Promise<DeleteBenchmarkTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteBenchmarkTaskWithOptions(ClusterId, TaskName, headers, runtime);
  }

  async deleteGatewayWithOptions(ClusterId: string, GatewayId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteGatewayResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteGateway",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/gateways/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(GatewayId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteGatewayResponse>(await this.callApi(params, req, runtime), new DeleteGatewayResponse({}));
  }

  async deleteGateway(ClusterId: string, GatewayId: string): Promise<DeleteGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteGatewayWithOptions(ClusterId, GatewayId, headers, runtime);
  }

  async deleteGatewayIntranetLinkedVpcWithOptions(ClusterId: string, GatewayId: string, request: DeleteGatewayIntranetLinkedVpcRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteGatewayIntranetLinkedVpcResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.vSwitchId)) {
      query["VSwitchId"] = request.vSwitchId;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteGatewayIntranetLinkedVpc",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/gateways/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(GatewayId)}/intranet_endpoint_linked_vpc`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteGatewayIntranetLinkedVpcResponse>(await this.callApi(params, req, runtime), new DeleteGatewayIntranetLinkedVpcResponse({}));
  }

  async deleteGatewayIntranetLinkedVpc(ClusterId: string, GatewayId: string, request: DeleteGatewayIntranetLinkedVpcRequest): Promise<DeleteGatewayIntranetLinkedVpcResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteGatewayIntranetLinkedVpcWithOptions(ClusterId, GatewayId, request, headers, runtime);
  }

  async deleteResourceWithOptions(ClusterId: string, ResourceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteResourceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteResource",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(ResourceId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteResourceResponse>(await this.callApi(params, req, runtime), new DeleteResourceResponse({}));
  }

  async deleteResource(ClusterId: string, ResourceId: string): Promise<DeleteResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteResourceWithOptions(ClusterId, ResourceId, headers, runtime);
  }

  async deleteResourceDLinkWithOptions(ClusterId: string, ResourceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteResourceDLinkResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteResourceDLink",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(ResourceId)}/dlink`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteResourceDLinkResponse>(await this.callApi(params, req, runtime), new DeleteResourceDLinkResponse({}));
  }

  async deleteResourceDLink(ClusterId: string, ResourceId: string): Promise<DeleteResourceDLinkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteResourceDLinkWithOptions(ClusterId, ResourceId, headers, runtime);
  }

  async deleteResourceInstancesWithOptions(ClusterId: string, ResourceId: string, request: DeleteResourceInstancesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteResourceInstancesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.allFailed)) {
      query["AllFailed"] = request.allFailed;
    }

    if (!Util.isUnset(request.instanceList)) {
      query["InstanceList"] = request.instanceList;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteResourceInstances",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(ResourceId)}/instances`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteResourceInstancesResponse>(await this.callApi(params, req, runtime), new DeleteResourceInstancesResponse({}));
  }

  async deleteResourceInstances(ClusterId: string, ResourceId: string, request: DeleteResourceInstancesRequest): Promise<DeleteResourceInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteResourceInstancesWithOptions(ClusterId, ResourceId, request, headers, runtime);
  }

  async deleteResourceLogWithOptions(ClusterId: string, ResourceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteResourceLogResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteResourceLog",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(ResourceId)}/log`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteResourceLogResponse>(await this.callApi(params, req, runtime), new DeleteResourceLogResponse({}));
  }

  async deleteResourceLog(ClusterId: string, ResourceId: string): Promise<DeleteResourceLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteResourceLogWithOptions(ClusterId, ResourceId, headers, runtime);
  }

  async deleteServiceWithOptions(ClusterId: string, ServiceName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteServiceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteService",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(ServiceName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteServiceResponse>(await this.callApi(params, req, runtime), new DeleteServiceResponse({}));
  }

  async deleteService(ClusterId: string, ServiceName: string): Promise<DeleteServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteServiceWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  async deleteServiceAutoScalerWithOptions(ClusterId: string, ServiceName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteServiceAutoScalerResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteServiceAutoScaler",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(ServiceName)}/autoscaler`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteServiceAutoScalerResponse>(await this.callApi(params, req, runtime), new DeleteServiceAutoScalerResponse({}));
  }

  async deleteServiceAutoScaler(ClusterId: string, ServiceName: string): Promise<DeleteServiceAutoScalerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteServiceAutoScalerWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  async deleteServiceCronScalerWithOptions(ClusterId: string, ServiceName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteServiceCronScalerResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteServiceCronScaler",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(ServiceName)}/cronscaler`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteServiceCronScalerResponse>(await this.callApi(params, req, runtime), new DeleteServiceCronScalerResponse({}));
  }

  async deleteServiceCronScaler(ClusterId: string, ServiceName: string): Promise<DeleteServiceCronScalerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteServiceCronScalerWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  async deleteServiceInstancesWithOptions(ClusterId: string, ServiceName: string, request: DeleteServiceInstancesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteServiceInstancesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.container)) {
      query["Container"] = request.container;
    }

    if (!Util.isUnset(request.instanceList)) {
      query["InstanceList"] = request.instanceList;
    }

    if (!Util.isUnset(request.softRestart)) {
      query["SoftRestart"] = request.softRestart;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteServiceInstances",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(ServiceName)}/instances`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteServiceInstancesResponse>(await this.callApi(params, req, runtime), new DeleteServiceInstancesResponse({}));
  }

  async deleteServiceInstances(ClusterId: string, ServiceName: string, request: DeleteServiceInstancesRequest): Promise<DeleteServiceInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteServiceInstancesWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  async deleteServiceLabelWithOptions(ClusterId: string, ServiceName: string, tmpReq: DeleteServiceLabelRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteServiceLabelResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteServiceLabelShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.keys)) {
      request.keysShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.keys, "Keys", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.keysShrink)) {
      query["Keys"] = request.keysShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteServiceLabel",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(ServiceName)}/label`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteServiceLabelResponse>(await this.callApi(params, req, runtime), new DeleteServiceLabelResponse({}));
  }

  async deleteServiceLabel(ClusterId: string, ServiceName: string, request: DeleteServiceLabelRequest): Promise<DeleteServiceLabelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteServiceLabelWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  async deleteServiceMirrorWithOptions(ClusterId: string, ServiceName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteServiceMirrorResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteServiceMirror",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(ServiceName)}/mirror`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteServiceMirrorResponse>(await this.callApi(params, req, runtime), new DeleteServiceMirrorResponse({}));
  }

  async deleteServiceMirror(ClusterId: string, ServiceName: string): Promise<DeleteServiceMirrorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteServiceMirrorWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  async describeBenchmarkTaskWithOptions(ClusterId: string, TaskName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeBenchmarkTaskResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeBenchmarkTask",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/benchmark-tasks/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(TaskName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeBenchmarkTaskResponse>(await this.callApi(params, req, runtime), new DescribeBenchmarkTaskResponse({}));
  }

  async describeBenchmarkTask(ClusterId: string, TaskName: string): Promise<DescribeBenchmarkTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeBenchmarkTaskWithOptions(ClusterId, TaskName, headers, runtime);
  }

  async describeBenchmarkTaskReportWithOptions(ClusterId: string, TaskName: string, request: DescribeBenchmarkTaskReportRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeBenchmarkTaskReportResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.reportType)) {
      query["ReportType"] = request.reportType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeBenchmarkTaskReport",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/benchmark-tasks/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(TaskName)}/report`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeBenchmarkTaskReportResponse>(await this.callApi(params, req, runtime), new DescribeBenchmarkTaskReportResponse({}));
  }

  async describeBenchmarkTaskReport(ClusterId: string, TaskName: string, request: DescribeBenchmarkTaskReportRequest): Promise<DescribeBenchmarkTaskReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeBenchmarkTaskReportWithOptions(ClusterId, TaskName, request, headers, runtime);
  }

  async describeGatewayWithOptions(ClusterId: string, GatewayId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeGatewayResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeGateway",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/gateways/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(GatewayId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeGatewayResponse>(await this.callApi(params, req, runtime), new DescribeGatewayResponse({}));
  }

  async describeGateway(ClusterId: string, GatewayId: string): Promise<DescribeGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeGatewayWithOptions(ClusterId, GatewayId, headers, runtime);
  }

  async describeGroupWithOptions(ClusterId: string, GroupName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeGroupResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeGroup",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/groups/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(GroupName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeGroupResponse>(await this.callApi(params, req, runtime), new DescribeGroupResponse({}));
  }

  async describeGroup(ClusterId: string, GroupName: string): Promise<DescribeGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeGroupWithOptions(ClusterId, GroupName, headers, runtime);
  }

  async describeResourceWithOptions(ClusterId: string, ResourceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeResourceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeResource",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(ResourceId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeResourceResponse>(await this.callApi(params, req, runtime), new DescribeResourceResponse({}));
  }

  async describeResource(ClusterId: string, ResourceId: string): Promise<DescribeResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeResourceWithOptions(ClusterId, ResourceId, headers, runtime);
  }

  async describeResourceDLinkWithOptions(ClusterId: string, ResourceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeResourceDLinkResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeResourceDLink",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(ResourceId)}/dlink`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeResourceDLinkResponse>(await this.callApi(params, req, runtime), new DescribeResourceDLinkResponse({}));
  }

  async describeResourceDLink(ClusterId: string, ResourceId: string): Promise<DescribeResourceDLinkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeResourceDLinkWithOptions(ClusterId, ResourceId, headers, runtime);
  }

  async describeResourceLogWithOptions(ClusterId: string, ResourceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeResourceLogResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeResourceLog",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(ResourceId)}/log`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeResourceLogResponse>(await this.callApi(params, req, runtime), new DescribeResourceLogResponse({}));
  }

  async describeResourceLog(ClusterId: string, ResourceId: string): Promise<DescribeResourceLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeResourceLogWithOptions(ClusterId, ResourceId, headers, runtime);
  }

  async describeServiceWithOptions(ClusterId: string, ServiceName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeServiceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeService",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(ServiceName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeServiceResponse>(await this.callApi(params, req, runtime), new DescribeServiceResponse({}));
  }

  async describeService(ClusterId: string, ServiceName: string): Promise<DescribeServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeServiceWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  async describeServiceAutoScalerWithOptions(ClusterId: string, ServiceName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeServiceAutoScalerResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeServiceAutoScaler",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(ServiceName)}/autoscaler`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeServiceAutoScalerResponse>(await this.callApi(params, req, runtime), new DescribeServiceAutoScalerResponse({}));
  }

  async describeServiceAutoScaler(ClusterId: string, ServiceName: string): Promise<DescribeServiceAutoScalerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeServiceAutoScalerWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  async describeServiceCronScalerWithOptions(ClusterId: string, ServiceName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeServiceCronScalerResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeServiceCronScaler",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(ServiceName)}/cronscaler`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeServiceCronScalerResponse>(await this.callApi(params, req, runtime), new DescribeServiceCronScalerResponse({}));
  }

  async describeServiceCronScaler(ClusterId: string, ServiceName: string): Promise<DescribeServiceCronScalerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeServiceCronScalerWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  async describeServiceDiagnosisWithOptions(ClusterId: string, ServiceName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeServiceDiagnosisResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeServiceDiagnosis",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(ServiceName)}/diagnosis`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeServiceDiagnosisResponse>(await this.callApi(params, req, runtime), new DescribeServiceDiagnosisResponse({}));
  }

  async describeServiceDiagnosis(ClusterId: string, ServiceName: string): Promise<DescribeServiceDiagnosisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeServiceDiagnosisWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  async describeServiceEventWithOptions(ClusterId: string, ServiceName: string, request: DescribeServiceEventRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeServiceEventResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.eventType)) {
      query["EventType"] = request.eventType;
    }

    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeServiceEvent",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(ServiceName)}/events`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeServiceEventResponse>(await this.callApi(params, req, runtime), new DescribeServiceEventResponse({}));
  }

  async describeServiceEvent(ClusterId: string, ServiceName: string, request: DescribeServiceEventRequest): Promise<DescribeServiceEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeServiceEventWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  async describeServiceInstanceDiagnosisWithOptions(ClusterId: string, ServiceName: string, InstanceName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeServiceInstanceDiagnosisResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeServiceInstanceDiagnosis",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(ServiceName)}/instances/${OpenApiUtil.getEncodeParam(InstanceName)}/diagnosis`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeServiceInstanceDiagnosisResponse>(await this.callApi(params, req, runtime), new DescribeServiceInstanceDiagnosisResponse({}));
  }

  async describeServiceInstanceDiagnosis(ClusterId: string, ServiceName: string, InstanceName: string): Promise<DescribeServiceInstanceDiagnosisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeServiceInstanceDiagnosisWithOptions(ClusterId, ServiceName, InstanceName, headers, runtime);
  }

  async describeServiceLogWithOptions(ClusterId: string, ServiceName: string, request: DescribeServiceLogRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeServiceLogResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.containerName)) {
      query["ContainerName"] = request.containerName;
    }

    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
    }

    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.ip)) {
      query["Ip"] = request.ip;
    }

    if (!Util.isUnset(request.keyword)) {
      query["Keyword"] = request.keyword;
    }

    if (!Util.isUnset(request.pageNum)) {
      query["PageNum"] = request.pageNum;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.previous)) {
      query["Previous"] = request.previous;
    }

    if (!Util.isUnset(request.startTime)) {
      query["StartTime"] = request.startTime;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeServiceLog",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(ServiceName)}/logs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeServiceLogResponse>(await this.callApi(params, req, runtime), new DescribeServiceLogResponse({}));
  }

  async describeServiceLog(ClusterId: string, ServiceName: string, request: DescribeServiceLogRequest): Promise<DescribeServiceLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeServiceLogWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  async describeServiceMirrorWithOptions(ClusterId: string, ServiceName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeServiceMirrorResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeServiceMirror",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(ServiceName)}/mirror`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeServiceMirrorResponse>(await this.callApi(params, req, runtime), new DescribeServiceMirrorResponse({}));
  }

  async describeServiceMirror(ClusterId: string, ServiceName: string): Promise<DescribeServiceMirrorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeServiceMirrorWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  async developServiceWithOptions(ClusterId: string, ServiceName: string, request: DevelopServiceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DevelopServiceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.exit)) {
      query["Exit"] = request.exit;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DevelopService",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(ServiceName)}/develop`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DevelopServiceResponse>(await this.callApi(params, req, runtime), new DevelopServiceResponse({}));
  }

  async developService(ClusterId: string, ServiceName: string, request: DevelopServiceRequest): Promise<DevelopServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.developServiceWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  async listBenchmarkTaskWithOptions(request: ListBenchmarkTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListBenchmarkTaskResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListBenchmarkTask",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/benchmark-tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListBenchmarkTaskResponse>(await this.callApi(params, req, runtime), new ListBenchmarkTaskResponse({}));
  }

  async listBenchmarkTask(request: ListBenchmarkTaskRequest): Promise<ListBenchmarkTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listBenchmarkTaskWithOptions(request, headers, runtime);
  }

  async listGatewayIntranetLinkedVpcWithOptions(ClusterId: string, GatewayId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListGatewayIntranetLinkedVpcResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListGatewayIntranetLinkedVpc",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/gateways/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(GatewayId)}/intranet_endpoint_linked_vpc`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListGatewayIntranetLinkedVpcResponse>(await this.callApi(params, req, runtime), new ListGatewayIntranetLinkedVpcResponse({}));
  }

  async listGatewayIntranetLinkedVpc(ClusterId: string, GatewayId: string): Promise<ListGatewayIntranetLinkedVpcResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listGatewayIntranetLinkedVpcWithOptions(ClusterId, GatewayId, headers, runtime);
  }

  async listGroupsWithOptions(request: ListGroupsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListGroupsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListGroups",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/groups`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListGroupsResponse>(await this.callApi(params, req, runtime), new ListGroupsResponse({}));
  }

  async listGroups(request: ListGroupsRequest): Promise<ListGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listGroupsWithOptions(request, headers, runtime);
  }

  async listResourceInstanceWorkerWithOptions(ClusterId: string, ResourceId: string, InstanceName: string, request: ListResourceInstanceWorkerRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListResourceInstanceWorkerResponse> {
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
    let params = new $OpenApi.Params({
      action: "ListResourceInstanceWorker",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(ResourceId)}/instance/${OpenApiUtil.getEncodeParam(InstanceName)}/workers`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListResourceInstanceWorkerResponse>(await this.callApi(params, req, runtime), new ListResourceInstanceWorkerResponse({}));
  }

  async listResourceInstanceWorker(ClusterId: string, ResourceId: string, InstanceName: string, request: ListResourceInstanceWorkerRequest): Promise<ListResourceInstanceWorkerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourceInstanceWorkerWithOptions(ClusterId, ResourceId, InstanceName, request, headers, runtime);
  }

  async listResourceInstancesWithOptions(ClusterId: string, ResourceId: string, request: ListResourceInstancesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListResourceInstancesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.chargeType)) {
      query["ChargeType"] = request.chargeType;
    }

    if (!Util.isUnset(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.instanceIP)) {
      query["InstanceIP"] = request.instanceIP;
    }

    if (!Util.isUnset(request.instanceId)) {
      query["InstanceId"] = request.instanceId;
    }

    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.instanceStatus)) {
      query["InstanceStatus"] = request.instanceStatus;
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

    if (!Util.isUnset(request.sort)) {
      query["Sort"] = request.sort;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListResourceInstances",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(ResourceId)}/instances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListResourceInstancesResponse>(await this.callApi(params, req, runtime), new ListResourceInstancesResponse({}));
  }

  async listResourceInstances(ClusterId: string, ResourceId: string, request: ListResourceInstancesRequest): Promise<ListResourceInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourceInstancesWithOptions(ClusterId, ResourceId, request, headers, runtime);
  }

  async listResourceServicesWithOptions(ClusterId: string, ResourceId: string, request: ListResourceServicesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListResourceServicesResponse> {
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
    let params = new $OpenApi.Params({
      action: "ListResourceServices",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(ResourceId)}/services`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListResourceServicesResponse>(await this.callApi(params, req, runtime), new ListResourceServicesResponse({}));
  }

  async listResourceServices(ClusterId: string, ResourceId: string, request: ListResourceServicesRequest): Promise<ListResourceServicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourceServicesWithOptions(ClusterId, ResourceId, request, headers, runtime);
  }

  async listResourcesWithOptions(request: ListResourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListResourcesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.pageNumber)) {
      query["PageNumber"] = request.pageNumber;
    }

    if (!Util.isUnset(request.pageSize)) {
      query["PageSize"] = request.pageSize;
    }

    if (!Util.isUnset(request.resourceId)) {
      query["ResourceId"] = request.resourceId;
    }

    if (!Util.isUnset(request.resourceName)) {
      query["ResourceName"] = request.resourceName;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListResources",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListResourcesResponse>(await this.callApi(params, req, runtime), new ListResourcesResponse({}));
  }

  async listResources(request: ListResourcesRequest): Promise<ListResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourcesWithOptions(request, headers, runtime);
  }

  async listServiceContainersWithOptions(ClusterId: string, ServiceName: string, InstanceName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListServiceContainersResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListServiceContainers",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(ServiceName)}/instances/${OpenApiUtil.getEncodeParam(InstanceName)}/containers`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListServiceContainersResponse>(await this.callApi(params, req, runtime), new ListServiceContainersResponse({}));
  }

  async listServiceContainers(ClusterId: string, ServiceName: string, InstanceName: string): Promise<ListServiceContainersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listServiceContainersWithOptions(ClusterId, ServiceName, InstanceName, headers, runtime);
  }

  async listServiceInstancesWithOptions(ClusterId: string, ServiceName: string, request: ListServiceInstancesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListServiceInstancesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.hostIP)) {
      query["HostIP"] = request.hostIP;
    }

    if (!Util.isUnset(request.instanceIP)) {
      query["InstanceIP"] = request.instanceIP;
    }

    if (!Util.isUnset(request.instanceName)) {
      query["InstanceName"] = request.instanceName;
    }

    if (!Util.isUnset(request.instanceStatus)) {
      query["InstanceStatus"] = request.instanceStatus;
    }

    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.isSpot)) {
      query["IsSpot"] = request.isSpot;
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

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.role)) {
      query["Role"] = request.role;
    }

    if (!Util.isUnset(request.sort)) {
      query["Sort"] = request.sort;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListServiceInstances",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(ServiceName)}/instances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListServiceInstancesResponse>(await this.callApi(params, req, runtime), new ListServiceInstancesResponse({}));
  }

  async listServiceInstances(ClusterId: string, ServiceName: string, request: ListServiceInstancesRequest): Promise<ListServiceInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listServiceInstancesWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  async listServiceVersionsWithOptions(ClusterId: string, ServiceName: string, request: ListServiceVersionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListServiceVersionsResponse> {
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
    let params = new $OpenApi.Params({
      action: "ListServiceVersions",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(ServiceName)}/versions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListServiceVersionsResponse>(await this.callApi(params, req, runtime), new ListServiceVersionsResponse({}));
  }

  async listServiceVersions(ClusterId: string, ServiceName: string, request: ListServiceVersionsRequest): Promise<ListServiceVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listServiceVersionsWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  async listServicesWithOptions(tmpReq: ListServicesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListServicesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListServicesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.label)) {
      request.labelShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.label, "Label", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.filter)) {
      query["Filter"] = request.filter;
    }

    if (!Util.isUnset(request.groupName)) {
      query["GroupName"] = request.groupName;
    }

    if (!Util.isUnset(request.labelShrink)) {
      query["Label"] = request.labelShrink;
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

    if (!Util.isUnset(request.parentServiceUid)) {
      query["ParentServiceUid"] = request.parentServiceUid;
    }

    if (!Util.isUnset(request.quotaId)) {
      query["QuotaId"] = request.quotaId;
    }

    if (!Util.isUnset(request.resourceName)) {
      query["ResourceName"] = request.resourceName;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["ServiceName"] = request.serviceName;
    }

    if (!Util.isUnset(request.serviceStatus)) {
      query["ServiceStatus"] = request.serviceStatus;
    }

    if (!Util.isUnset(request.serviceType)) {
      query["ServiceType"] = request.serviceType;
    }

    if (!Util.isUnset(request.serviceUid)) {
      query["ServiceUid"] = request.serviceUid;
    }

    if (!Util.isUnset(request.sort)) {
      query["Sort"] = request.sort;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListServices",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListServicesResponse>(await this.callApi(params, req, runtime), new ListServicesResponse({}));
  }

  async listServices(request: ListServicesRequest): Promise<ListServicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listServicesWithOptions(request, headers, runtime);
  }

  async releaseServiceWithOptions(ClusterId: string, ServiceName: string, request: ReleaseServiceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ReleaseServiceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.trafficState)) {
      body["TrafficState"] = request.trafficState;
    }

    if (!Util.isUnset(request.weight)) {
      body["Weight"] = request.weight;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ReleaseService",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(ServiceName)}/release`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ReleaseServiceResponse>(await this.callApi(params, req, runtime), new ReleaseServiceResponse({}));
  }

  async releaseService(ClusterId: string, ServiceName: string, request: ReleaseServiceRequest): Promise<ReleaseServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.releaseServiceWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  async restartServiceWithOptions(ClusterId: string, ServiceName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RestartServiceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "RestartService",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(ServiceName)}/restart`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RestartServiceResponse>(await this.callApi(params, req, runtime), new RestartServiceResponse({}));
  }

  async restartService(ClusterId: string, ServiceName: string): Promise<RestartServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.restartServiceWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  async startBenchmarkTaskWithOptions(ClusterId: string, TaskName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StartBenchmarkTaskResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "StartBenchmarkTask",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/benchmark-tasks/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(TaskName)}/start`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StartBenchmarkTaskResponse>(await this.callApi(params, req, runtime), new StartBenchmarkTaskResponse({}));
  }

  async startBenchmarkTask(ClusterId: string, TaskName: string): Promise<StartBenchmarkTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startBenchmarkTaskWithOptions(ClusterId, TaskName, headers, runtime);
  }

  async startServiceWithOptions(ClusterId: string, ServiceName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StartServiceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "StartService",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(ServiceName)}/start`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StartServiceResponse>(await this.callApi(params, req, runtime), new StartServiceResponse({}));
  }

  async startService(ClusterId: string, ServiceName: string): Promise<StartServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startServiceWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  async stopBenchmarkTaskWithOptions(ClusterId: string, TaskName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StopBenchmarkTaskResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "StopBenchmarkTask",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/benchmark-tasks/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(TaskName)}/stop`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StopBenchmarkTaskResponse>(await this.callApi(params, req, runtime), new StopBenchmarkTaskResponse({}));
  }

  async stopBenchmarkTask(ClusterId: string, TaskName: string): Promise<StopBenchmarkTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopBenchmarkTaskWithOptions(ClusterId, TaskName, headers, runtime);
  }

  async stopServiceWithOptions(ClusterId: string, ServiceName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StopServiceResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "StopService",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(ServiceName)}/stop`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StopServiceResponse>(await this.callApi(params, req, runtime), new StopServiceResponse({}));
  }

  async stopService(ClusterId: string, ServiceName: string): Promise<StopServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopServiceWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  async updateAppServiceWithOptions(ClusterId: string, ServiceName: string, request: UpdateAppServiceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateAppServiceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.quotaId)) {
      query["QuotaId"] = request.quotaId;
    }

    if (!Util.isUnset(request.workspaceId)) {
      query["WorkspaceId"] = request.workspaceId;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.appType)) {
      body["AppType"] = request.appType;
    }

    if (!Util.isUnset(request.appVersion)) {
      body["AppVersion"] = request.appVersion;
    }

    if (!Util.isUnset(request.config)) {
      body["Config"] = request.config;
    }

    if (!Util.isUnset(request.replicas)) {
      body["Replicas"] = request.replicas;
    }

    if (!Util.isUnset(request.serviceSpec)) {
      body["ServiceSpec"] = request.serviceSpec;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAppService",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/app_services/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(ServiceName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateAppServiceResponse>(await this.callApi(params, req, runtime), new UpdateAppServiceResponse({}));
  }

  async updateAppService(ClusterId: string, ServiceName: string, request: UpdateAppServiceRequest): Promise<UpdateAppServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAppServiceWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  async updateBenchmarkTaskWithOptions(ClusterId: string, TaskName: string, request: UpdateBenchmarkTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateBenchmarkTaskResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: request.body,
    });
    let params = new $OpenApi.Params({
      action: "UpdateBenchmarkTask",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/benchmark-tasks/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(TaskName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateBenchmarkTaskResponse>(await this.callApi(params, req, runtime), new UpdateBenchmarkTaskResponse({}));
  }

  async updateBenchmarkTask(ClusterId: string, TaskName: string, request: UpdateBenchmarkTaskRequest): Promise<UpdateBenchmarkTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateBenchmarkTaskWithOptions(ClusterId, TaskName, request, headers, runtime);
  }

  async updateGatewayWithOptions(GatewayId: string, ClusterId: string, request: UpdateGatewayRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateGatewayResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.enableInternet)) {
      body["EnableInternet"] = request.enableInternet;
    }

    if (!Util.isUnset(request.enableIntranet)) {
      body["EnableIntranet"] = request.enableIntranet;
    }

    if (!Util.isUnset(request.instanceType)) {
      body["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateGateway",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/gateways/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(GatewayId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateGatewayResponse>(await this.callApi(params, req, runtime), new UpdateGatewayResponse({}));
  }

  async updateGateway(GatewayId: string, ClusterId: string, request: UpdateGatewayRequest): Promise<UpdateGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateGatewayWithOptions(GatewayId, ClusterId, request, headers, runtime);
  }

  async updateResourceWithOptions(ClusterId: string, ResourceId: string, request: UpdateResourceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateResourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resourceName)) {
      body["ResourceName"] = request.resourceName;
    }

    if (!Util.isUnset(request.selfManagedResourceOptions)) {
      body["SelfManagedResourceOptions"] = request.selfManagedResourceOptions;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateResource",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(ResourceId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateResourceResponse>(await this.callApi(params, req, runtime), new UpdateResourceResponse({}));
  }

  async updateResource(ClusterId: string, ResourceId: string, request: UpdateResourceRequest): Promise<UpdateResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateResourceWithOptions(ClusterId, ResourceId, request, headers, runtime);
  }

  async updateResourceDLinkWithOptions(ClusterId: string, ResourceId: string, request: UpdateResourceDLinkRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateResourceDLinkResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.destinationCIDRs)) {
      body["DestinationCIDRs"] = request.destinationCIDRs;
    }

    if (!Util.isUnset(request.securityGroupId)) {
      body["SecurityGroupId"] = request.securityGroupId;
    }

    if (!Util.isUnset(request.vSwitchId)) {
      body["VSwitchId"] = request.vSwitchId;
    }

    if (!Util.isUnset(request.vSwitchIdList)) {
      body["VSwitchIdList"] = request.vSwitchIdList;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateResourceDLink",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(ResourceId)}/dlink`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateResourceDLinkResponse>(await this.callApi(params, req, runtime), new UpdateResourceDLinkResponse({}));
  }

  async updateResourceDLink(ClusterId: string, ResourceId: string, request: UpdateResourceDLinkRequest): Promise<UpdateResourceDLinkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateResourceDLinkWithOptions(ClusterId, ResourceId, request, headers, runtime);
  }

  async updateResourceInstanceWithOptions(ClusterId: string, ResourceId: string, InstanceId: string, request: UpdateResourceInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateResourceInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.action)) {
      body["Action"] = request.action;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateResourceInstance",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(ResourceId)}/instances/${OpenApiUtil.getEncodeParam(InstanceId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateResourceInstanceResponse>(await this.callApi(params, req, runtime), new UpdateResourceInstanceResponse({}));
  }

  async updateResourceInstance(ClusterId: string, ResourceId: string, InstanceId: string, request: UpdateResourceInstanceRequest): Promise<UpdateResourceInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateResourceInstanceWithOptions(ClusterId, ResourceId, InstanceId, request, headers, runtime);
  }

  async updateServiceWithOptions(ClusterId: string, ServiceName: string, request: UpdateServiceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateServiceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.updateType)) {
      query["UpdateType"] = request.updateType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApi.Params({
      action: "UpdateService",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(ServiceName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateServiceResponse>(await this.callApi(params, req, runtime), new UpdateServiceResponse({}));
  }

  async updateService(ClusterId: string, ServiceName: string, request: UpdateServiceRequest): Promise<UpdateServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateServiceWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  async updateServiceAutoScalerWithOptions(ClusterId: string, ServiceName: string, request: UpdateServiceAutoScalerRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateServiceAutoScalerResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.behavior)) {
      body["behavior"] = request.behavior;
    }

    if (!Util.isUnset(request.max)) {
      body["max"] = request.max;
    }

    if (!Util.isUnset(request.min)) {
      body["min"] = request.min;
    }

    if (!Util.isUnset(request.scaleStrategies)) {
      body["scaleStrategies"] = request.scaleStrategies;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateServiceAutoScaler",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(ServiceName)}/autoscaler`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateServiceAutoScalerResponse>(await this.callApi(params, req, runtime), new UpdateServiceAutoScalerResponse({}));
  }

  async updateServiceAutoScaler(ClusterId: string, ServiceName: string, request: UpdateServiceAutoScalerRequest): Promise<UpdateServiceAutoScalerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateServiceAutoScalerWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  async updateServiceCronScalerWithOptions(ClusterId: string, ServiceName: string, request: UpdateServiceCronScalerRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateServiceCronScalerResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.excludeDates)) {
      body["ExcludeDates"] = request.excludeDates;
    }

    if (!Util.isUnset(request.scaleJobs)) {
      body["ScaleJobs"] = request.scaleJobs;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateServiceCronScaler",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(ServiceName)}/cronscaler`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateServiceCronScalerResponse>(await this.callApi(params, req, runtime), new UpdateServiceCronScalerResponse({}));
  }

  async updateServiceCronScaler(ClusterId: string, ServiceName: string, request: UpdateServiceCronScalerRequest): Promise<UpdateServiceCronScalerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateServiceCronScalerWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  async updateServiceInstanceWithOptions(ClusterId: string, ServiceName: string, InstanceName: string, request: UpdateServiceInstanceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateServiceInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.isolate)) {
      body["Isolate"] = request.isolate;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateServiceInstance",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(ServiceName)}/instances/${OpenApiUtil.getEncodeParam(InstanceName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateServiceInstanceResponse>(await this.callApi(params, req, runtime), new UpdateServiceInstanceResponse({}));
  }

  async updateServiceInstance(ClusterId: string, ServiceName: string, InstanceName: string, request: UpdateServiceInstanceRequest): Promise<UpdateServiceInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateServiceInstanceWithOptions(ClusterId, ServiceName, InstanceName, request, headers, runtime);
  }

  async updateServiceLabelWithOptions(ClusterId: string, ServiceName: string, request: UpdateServiceLabelRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateServiceLabelResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.labels)) {
      body["Labels"] = request.labels;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateServiceLabel",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(ServiceName)}/label`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateServiceLabelResponse>(await this.callApi(params, req, runtime), new UpdateServiceLabelResponse({}));
  }

  async updateServiceLabel(ClusterId: string, ServiceName: string, request: UpdateServiceLabelRequest): Promise<UpdateServiceLabelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateServiceLabelWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  async updateServiceMirrorWithOptions(ClusterId: string, ServiceName: string, request: UpdateServiceMirrorRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateServiceMirrorResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.ratio)) {
      body["Ratio"] = request.ratio;
    }

    if (!Util.isUnset(request.target)) {
      body["Target"] = request.target;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateServiceMirror",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(ServiceName)}/mirror`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateServiceMirrorResponse>(await this.callApi(params, req, runtime), new UpdateServiceMirrorResponse({}));
  }

  async updateServiceMirror(ClusterId: string, ServiceName: string, request: UpdateServiceMirrorRequest): Promise<UpdateServiceMirrorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateServiceMirrorWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  async updateServiceSafetyLockWithOptions(ClusterId: string, ServiceName: string, request: UpdateServiceSafetyLockRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateServiceSafetyLockResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.lock)) {
      body["Lock"] = request.lock;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateServiceSafetyLock",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(ServiceName)}/lock`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateServiceSafetyLockResponse>(await this.callApi(params, req, runtime), new UpdateServiceSafetyLockResponse({}));
  }

  async updateServiceSafetyLock(ClusterId: string, ServiceName: string, request: UpdateServiceSafetyLockRequest): Promise<UpdateServiceSafetyLockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateServiceSafetyLockWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  async updateServiceVersionWithOptions(ClusterId: string, ServiceName: string, request: UpdateServiceVersionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateServiceVersionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.version)) {
      body["Version"] = request.version;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateServiceVersion",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(ServiceName)}/version`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateServiceVersionResponse>(await this.callApi(params, req, runtime), new UpdateServiceVersionResponse({}));
  }

  async updateServiceVersion(ClusterId: string, ServiceName: string, request: UpdateServiceVersionRequest): Promise<UpdateServiceVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateServiceVersionWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

}

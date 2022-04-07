// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class Instance extends $tea.Model {
  hostIP?: string;
  hostName?: string;
  innerIP?: string;
  instanceName?: string;
  instancePort?: number;
  lastState?: { [key: string]: any }[];
  namespace?: string;
  readyProcesses?: number;
  reason?: string;
  restartCount?: number;
  startAt?: string;
  status?: string;
  totalProcesses?: number;
  static names(): { [key: string]: string } {
    return {
      hostIP: 'HostIP',
      hostName: 'HostName',
      innerIP: 'InnerIP',
      instanceName: 'InstanceName',
      instancePort: 'InstancePort',
      lastState: 'LastState',
      namespace: 'Namespace',
      readyProcesses: 'ReadyProcesses',
      reason: 'Reason',
      restartCount: 'RestartCount',
      startAt: 'StartAt',
      status: 'Status',
      totalProcesses: 'TotalProcesses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostIP: 'string',
      hostName: 'string',
      innerIP: 'string',
      instanceName: 'string',
      instancePort: 'number',
      lastState: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      namespace: 'string',
      readyProcesses: 'number',
      reason: 'string',
      restartCount: 'number',
      startAt: 'string',
      status: 'string',
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
      status: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResourceInstance extends $tea.Model {
  autoRenewal?: boolean;
  chargeType?: string;
  createTime?: string;
  expiredTime?: string;
  instanceCpuCount?: number;
  instanceGpuCount?: number;
  instanceId?: string;
  instanceIp?: string;
  instanceMemory?: string;
  instanceName?: string;
  instanceStatus?: string;
  instanceType?: string;
  instanceUsedCpu?: number;
  instanceUsedGpu?: number;
  instanceUsedMemory?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenewal: 'AutoRenewal',
      chargeType: 'ChargeType',
      createTime: 'CreateTime',
      expiredTime: 'ExpiredTime',
      instanceCpuCount: 'InstanceCpuCount',
      instanceGpuCount: 'InstanceGpuCount',
      instanceId: 'InstanceId',
      instanceIp: 'InstanceIp',
      instanceMemory: 'InstanceMemory',
      instanceName: 'InstanceName',
      instanceStatus: 'InstanceStatus',
      instanceType: 'InstanceType',
      instanceUsedCpu: 'InstanceUsedCpu',
      instanceUsedGpu: 'InstanceUsedGpu',
      instanceUsedMemory: 'InstanceUsedMemory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewal: 'boolean',
      chargeType: 'string',
      createTime: 'string',
      expiredTime: 'string',
      instanceCpuCount: 'number',
      instanceGpuCount: 'number',
      instanceId: 'string',
      instanceIp: 'string',
      instanceMemory: 'string',
      instanceName: 'string',
      instanceStatus: 'string',
      instanceType: 'string',
      instanceUsedCpu: 'number',
      instanceUsedGpu: 'number',
      instanceUsedMemory: 'string',
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
  callerUid?: string;
  cpu?: number;
  createTime?: string;
  currentVersion?: number;
  gpu?: number;
  image?: string;
  internetEndpoint?: string;
  intranetEndpoint?: string;
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
  runningInstance?: number;
  serviceConfig?: string;
  serviceId?: string;
  serviceName?: string;
  status?: string;
  totalInstance?: number;
  updatetime?: string;
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      callerUid: 'CallerUid',
      cpu: 'Cpu',
      createTime: 'CreateTime',
      currentVersion: 'CurrentVersion',
      gpu: 'Gpu',
      image: 'Image',
      internetEndpoint: 'InternetEndpoint',
      intranetEndpoint: 'IntranetEndpoint',
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
      runningInstance: 'RunningInstance',
      serviceConfig: 'ServiceConfig',
      serviceId: 'ServiceId',
      serviceName: 'ServiceName',
      status: 'Status',
      totalInstance: 'TotalInstance',
      updatetime: 'Updatetime',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      callerUid: 'string',
      cpu: 'number',
      createTime: 'string',
      currentVersion: 'number',
      gpu: 'number',
      image: 'string',
      internetEndpoint: 'string',
      intranetEndpoint: 'string',
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
      runningInstance: 'number',
      serviceConfig: 'string',
      serviceId: 'string',
      serviceName: 'string',
      status: 'string',
      totalInstance: 'number',
      updatetime: 'string',
      weight: 'number',
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
  static names(): { [key: string]: string } {
    return {
      autoRenewal: 'AutoRenewal',
      chargeType: 'ChargeType',
      ecsInstanceCount: 'EcsInstanceCount',
      ecsInstanceType: 'EcsInstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewal: 'boolean',
      chargeType: 'string',
      ecsInstanceCount: 'number',
      ecsInstanceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceResponseBody extends $tea.Model {
  clusterId?: string;
  ownerUid?: string;
  requestId?: string;
  resourceId?: string;
  resourceName?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      ownerUid: 'OwnerUid',
      requestId: 'RequestId',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
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
  headers: { [key: string]: string };
  body: CreateResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      autoRenewal: 'AutoRenewal',
      chargeType: 'ChargeType',
      ecsInstanceCount: 'EcsInstanceCount',
      ecsInstanceType: 'EcsInstanceType',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRenewal: 'boolean',
      chargeType: 'string',
      ecsInstanceCount: 'number',
      ecsInstanceType: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceInstancesResponseBody extends $tea.Model {
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

export class CreateResourceInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateResourceInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: CreateResourceLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateResourceLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceRequest extends $tea.Model {
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
  headers: { [key: string]: string };
  body: CreateServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceAutoScalerRequest extends $tea.Model {
  max?: number;
  min?: number;
  strategies?: CreateServiceAutoScalerRequestStrategies;
  static names(): { [key: string]: string } {
    return {
      max: 'Max',
      min: 'Min',
      strategies: 'Strategies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      max: 'number',
      min: 'number',
      strategies: CreateServiceAutoScalerRequestStrategies,
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
  headers: { [key: string]: string };
  body: CreateServiceAutoScalerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: CreateServiceCronScalerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: CreateServiceMirrorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateServiceMirrorResponseBody,
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
  headers: { [key: string]: string };
  body: DeleteResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: DeleteResourceDLinkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: DeleteResourceInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: DeleteResourceLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: DeleteServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: DeleteServiceAutoScalerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: DeleteServiceCronScalerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteServiceCronScalerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceInstancesRequest extends $tea.Model {
  instanceList?: string;
  static names(): { [key: string]: string } {
    return {
      instanceList: 'InstanceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceList: 'string',
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
  headers: { [key: string]: string };
  body: DeleteServiceInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteServiceInstancesResponseBody,
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
  headers: { [key: string]: string };
  body: DeleteServiceMirrorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteServiceMirrorResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponseBody extends $tea.Model {
  regions?: DescribeRegionsResponseBodyRegions[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyRegions },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeRegionsResponseBody,
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
      status: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: DescribeResourceDLinkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: DescribeResourceLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeResourceLogResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: Service;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: Service,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceAutoScalerResponseBody extends $tea.Model {
  currentValues?: { [key: string]: any };
  maxReplica?: number;
  minReplica?: number;
  requestId?: string;
  serviceName?: string;
  strategies?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      currentValues: 'CurrentValues',
      maxReplica: 'MaxReplica',
      minReplica: 'MinReplica',
      requestId: 'RequestId',
      serviceName: 'ServiceName',
      strategies: 'Strategies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentValues: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      maxReplica: 'number',
      minReplica: 'number',
      requestId: 'string',
      serviceName: 'string',
      strategies: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceAutoScalerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DescribeServiceAutoScalerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: DescribeServiceCronScalerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeServiceCronScalerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceLogRequest extends $tea.Model {
  endTime?: string;
  ip?: string;
  keyword?: string;
  pageNum?: number;
  pageSize?: number;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      ip: 'Ip',
      keyword: 'Keyword',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      ip: 'string',
      keyword: 'string',
      pageNum: 'number',
      pageSize: 'number',
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
  headers: { [key: string]: string };
  body: DescribeServiceLogResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: DescribeServiceMirrorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DescribeServiceMirrorResponseBody,
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
  headers: { [key: string]: string };
  body: ListResourceInstanceWorkerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListResourceInstanceWorkerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceInstancesRequest extends $tea.Model {
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
  headers: { [key: string]: string };
  body: ListResourceInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: ListResourceServicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: ListResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceInstancesRequest extends $tea.Model {
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
  headers: { [key: string]: string };
  body: ListServiceInstancesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListServiceInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesRequest extends $tea.Model {
  filter?: string;
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  sort?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sort: 'Sort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
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
  headers: { [key: string]: string };
  body: ListServicesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListServicesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseServiceRequest extends $tea.Model {
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  headers: { [key: string]: string };
  body: ReleaseServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ReleaseServiceResponseBody,
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
  headers: { [key: string]: string };
  body: StartServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StartServiceResponseBody,
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
  headers: { [key: string]: string };
  body: StopServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceRequest extends $tea.Model {
  resourceName?: string;
  static names(): { [key: string]: string } {
    return {
      resourceName: 'ResourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceName: 'string',
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
  headers: { [key: string]: string };
  body: UpdateResourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: UpdateResourceDLinkResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateResourceDLinkResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceRequest extends $tea.Model {
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
  headers: { [key: string]: string };
  body: UpdateServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceAutoScalerRequest extends $tea.Model {
  max?: number;
  min?: number;
  strategies?: UpdateServiceAutoScalerRequestStrategies;
  static names(): { [key: string]: string } {
    return {
      max: 'Max',
      min: 'Min',
      strategies: 'Strategies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      max: 'number',
      min: 'number',
      strategies: UpdateServiceAutoScalerRequestStrategies,
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
  headers: { [key: string]: string };
  body: UpdateServiceAutoScalerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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
  headers: { [key: string]: string };
  body: UpdateServiceCronScalerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateServiceCronScalerResponseBody,
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
  headers: { [key: string]: string };
  body: UpdateServiceMirrorResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateServiceMirrorResponseBody,
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
  headers: { [key: string]: string };
  body: UpdateServiceVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateServiceVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceAutoScalerRequestStrategies extends $tea.Model {
  cpu?: number;
  qps?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      qps: 'Qps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      qps: 'number',
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

export class DescribeRegionsResponseBodyRegions extends $tea.Model {
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

export class UpdateServiceAutoScalerRequestStrategies extends $tea.Model {
  cpu?: number;
  qps?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      qps: 'Qps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      qps: 'number',
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

  async createResource(request: CreateResourceRequest): Promise<CreateResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createResourceWithOptions(request, headers, runtime);
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

  async createResourceInstances(ClusterId: string, ResourceId: string, request: CreateResourceInstancesRequest): Promise<CreateResourceInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createResourceInstancesWithOptions(ClusterId, ResourceId, request, headers, runtime);
  }

  async createResourceInstancesWithOptions(ClusterId: string, ResourceId: string, request: CreateResourceInstancesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateResourceInstancesResponse> {
    Util.validateModel(request);
    ClusterId = OpenApiUtil.getEncodeParam(ClusterId);
    ResourceId = OpenApiUtil.getEncodeParam(ResourceId);
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

    if (!Util.isUnset(request.userData)) {
      body["UserData"] = request.userData;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateResourceInstances",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${ClusterId}/${ResourceId}/instances`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateResourceInstancesResponse>(await this.callApi(params, req, runtime), new CreateResourceInstancesResponse({}));
  }

  async createResourceLog(ClusterId: string, ResourceId: string, request: CreateResourceLogRequest): Promise<CreateResourceLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createResourceLogWithOptions(ClusterId, ResourceId, request, headers, runtime);
  }

  async createResourceLogWithOptions(ClusterId: string, ResourceId: string, request: CreateResourceLogRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateResourceLogResponse> {
    Util.validateModel(request);
    ClusterId = OpenApiUtil.getEncodeParam(ClusterId);
    ResourceId = OpenApiUtil.getEncodeParam(ResourceId);
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
      pathname: `/api/v2/resources/${ClusterId}/${ResourceId}/log`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateResourceLogResponse>(await this.callApi(params, req, runtime), new CreateResourceLogResponse({}));
  }

  async createService(request: CreateServiceRequest): Promise<CreateServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createServiceWithOptions(request, headers, runtime);
  }

  async createServiceWithOptions(request: CreateServiceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateServiceResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
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

  async createServiceAutoScaler(ClusterId: string, ServiceName: string, request: CreateServiceAutoScalerRequest): Promise<CreateServiceAutoScalerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createServiceAutoScalerWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  async createServiceAutoScalerWithOptions(ClusterId: string, ServiceName: string, request: CreateServiceAutoScalerRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateServiceAutoScalerResponse> {
    Util.validateModel(request);
    ClusterId = OpenApiUtil.getEncodeParam(ClusterId);
    ServiceName = OpenApiUtil.getEncodeParam(ServiceName);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.max)) {
      body["Max"] = request.max;
    }

    if (!Util.isUnset(request.min)) {
      body["Min"] = request.min;
    }

    if (!Util.isUnset($tea.toMap(request.strategies))) {
      body["Strategies"] = request.strategies;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateServiceAutoScaler",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${ClusterId}/${ServiceName}/autoscaler`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateServiceAutoScalerResponse>(await this.callApi(params, req, runtime), new CreateServiceAutoScalerResponse({}));
  }

  async createServiceCronScaler(ClusterId: string, ServiceName: string, request: CreateServiceCronScalerRequest): Promise<CreateServiceCronScalerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createServiceCronScalerWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  async createServiceCronScalerWithOptions(ClusterId: string, ServiceName: string, request: CreateServiceCronScalerRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateServiceCronScalerResponse> {
    Util.validateModel(request);
    ClusterId = OpenApiUtil.getEncodeParam(ClusterId);
    ServiceName = OpenApiUtil.getEncodeParam(ServiceName);
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
      pathname: `/api/v2/services/${ClusterId}/${ServiceName}/cronscaler`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateServiceCronScalerResponse>(await this.callApi(params, req, runtime), new CreateServiceCronScalerResponse({}));
  }

  async createServiceMirror(ClusterId: string, ServiceName: string, request: CreateServiceMirrorRequest): Promise<CreateServiceMirrorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createServiceMirrorWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  async createServiceMirrorWithOptions(ClusterId: string, ServiceName: string, request: CreateServiceMirrorRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateServiceMirrorResponse> {
    Util.validateModel(request);
    ClusterId = OpenApiUtil.getEncodeParam(ClusterId);
    ServiceName = OpenApiUtil.getEncodeParam(ServiceName);
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
      pathname: `/api/v2/services/${ClusterId}/${ServiceName}/mirror`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateServiceMirrorResponse>(await this.callApi(params, req, runtime), new CreateServiceMirrorResponse({}));
  }

  async deleteResource(ClusterId: string, ResourceId: string): Promise<DeleteResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteResourceWithOptions(ClusterId, ResourceId, headers, runtime);
  }

  async deleteResourceWithOptions(ClusterId: string, ResourceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteResourceResponse> {
    ClusterId = OpenApiUtil.getEncodeParam(ClusterId);
    ResourceId = OpenApiUtil.getEncodeParam(ResourceId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteResource",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${ClusterId}/${ResourceId}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteResourceResponse>(await this.callApi(params, req, runtime), new DeleteResourceResponse({}));
  }

  async deleteResourceDLink(ClusterId: string, ResourceId: string): Promise<DeleteResourceDLinkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteResourceDLinkWithOptions(ClusterId, ResourceId, headers, runtime);
  }

  async deleteResourceDLinkWithOptions(ClusterId: string, ResourceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteResourceDLinkResponse> {
    ClusterId = OpenApiUtil.getEncodeParam(ClusterId);
    ResourceId = OpenApiUtil.getEncodeParam(ResourceId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteResourceDLink",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${ClusterId}/${ResourceId}/dlink`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteResourceDLinkResponse>(await this.callApi(params, req, runtime), new DeleteResourceDLinkResponse({}));
  }

  async deleteResourceInstances(ClusterId: string, ResourceId: string, request: DeleteResourceInstancesRequest): Promise<DeleteResourceInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteResourceInstancesWithOptions(ClusterId, ResourceId, request, headers, runtime);
  }

  async deleteResourceInstancesWithOptions(ClusterId: string, ResourceId: string, request: DeleteResourceInstancesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteResourceInstancesResponse> {
    Util.validateModel(request);
    ClusterId = OpenApiUtil.getEncodeParam(ClusterId);
    ResourceId = OpenApiUtil.getEncodeParam(ResourceId);
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
      pathname: `/api/v2/resources/${ClusterId}/${ResourceId}/instances`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteResourceInstancesResponse>(await this.callApi(params, req, runtime), new DeleteResourceInstancesResponse({}));
  }

  async deleteResourceLog(ClusterId: string, ResourceId: string): Promise<DeleteResourceLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteResourceLogWithOptions(ClusterId, ResourceId, headers, runtime);
  }

  async deleteResourceLogWithOptions(ClusterId: string, ResourceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteResourceLogResponse> {
    ClusterId = OpenApiUtil.getEncodeParam(ClusterId);
    ResourceId = OpenApiUtil.getEncodeParam(ResourceId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteResourceLog",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${ClusterId}/${ResourceId}/log`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteResourceLogResponse>(await this.callApi(params, req, runtime), new DeleteResourceLogResponse({}));
  }

  async deleteService(ClusterId: string, ServiceName: string): Promise<DeleteServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteServiceWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  async deleteServiceWithOptions(ClusterId: string, ServiceName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteServiceResponse> {
    ClusterId = OpenApiUtil.getEncodeParam(ClusterId);
    ServiceName = OpenApiUtil.getEncodeParam(ServiceName);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteService",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${ClusterId}/${ServiceName}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteServiceResponse>(await this.callApi(params, req, runtime), new DeleteServiceResponse({}));
  }

  async deleteServiceAutoScaler(ClusterId: string, ServiceName: string): Promise<DeleteServiceAutoScalerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteServiceAutoScalerWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  async deleteServiceAutoScalerWithOptions(ClusterId: string, ServiceName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteServiceAutoScalerResponse> {
    ClusterId = OpenApiUtil.getEncodeParam(ClusterId);
    ServiceName = OpenApiUtil.getEncodeParam(ServiceName);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteServiceAutoScaler",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${ClusterId}/${ServiceName}/autoscaler`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteServiceAutoScalerResponse>(await this.callApi(params, req, runtime), new DeleteServiceAutoScalerResponse({}));
  }

  async deleteServiceCronScaler(ClusterId: string, ServiceName: string): Promise<DeleteServiceCronScalerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteServiceCronScalerWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  async deleteServiceCronScalerWithOptions(ClusterId: string, ServiceName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteServiceCronScalerResponse> {
    ClusterId = OpenApiUtil.getEncodeParam(ClusterId);
    ServiceName = OpenApiUtil.getEncodeParam(ServiceName);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteServiceCronScaler",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${ClusterId}/${ServiceName}/cronscaler`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteServiceCronScalerResponse>(await this.callApi(params, req, runtime), new DeleteServiceCronScalerResponse({}));
  }

  async deleteServiceInstances(ClusterId: string, ServiceName: string, request: DeleteServiceInstancesRequest): Promise<DeleteServiceInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteServiceInstancesWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  async deleteServiceInstancesWithOptions(ClusterId: string, ServiceName: string, request: DeleteServiceInstancesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteServiceInstancesResponse> {
    Util.validateModel(request);
    ClusterId = OpenApiUtil.getEncodeParam(ClusterId);
    ServiceName = OpenApiUtil.getEncodeParam(ServiceName);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceList)) {
      query["InstanceList"] = request.instanceList;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteServiceInstances",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${ClusterId}/${ServiceName}/instances`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteServiceInstancesResponse>(await this.callApi(params, req, runtime), new DeleteServiceInstancesResponse({}));
  }

  async deleteServiceMirror(ClusterId: string, ServiceName: string): Promise<DeleteServiceMirrorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteServiceMirrorWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  async deleteServiceMirrorWithOptions(ClusterId: string, ServiceName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteServiceMirrorResponse> {
    ClusterId = OpenApiUtil.getEncodeParam(ClusterId);
    ServiceName = OpenApiUtil.getEncodeParam(ServiceName);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteServiceMirror",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${ClusterId}/${ServiceName}/mirror`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteServiceMirrorResponse>(await this.callApi(params, req, runtime), new DeleteServiceMirrorResponse({}));
  }

  async describeRegions(): Promise<DescribeRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeRegionsWithOptions(headers, runtime);
  }

  async describeRegionsWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeRegionsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeRegions",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/regions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeRegionsResponse>(await this.callApi(params, req, runtime), new DescribeRegionsResponse({}));
  }

  async describeResource(ClusterId: string, ResourceId: string): Promise<DescribeResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeResourceWithOptions(ClusterId, ResourceId, headers, runtime);
  }

  async describeResourceWithOptions(ClusterId: string, ResourceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeResourceResponse> {
    ClusterId = OpenApiUtil.getEncodeParam(ClusterId);
    ResourceId = OpenApiUtil.getEncodeParam(ResourceId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeResource",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${ClusterId}/${ResourceId}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeResourceResponse>(await this.callApi(params, req, runtime), new DescribeResourceResponse({}));
  }

  async describeResourceDLink(ClusterId: string, ResourceId: string): Promise<DescribeResourceDLinkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeResourceDLinkWithOptions(ClusterId, ResourceId, headers, runtime);
  }

  async describeResourceDLinkWithOptions(ClusterId: string, ResourceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeResourceDLinkResponse> {
    ClusterId = OpenApiUtil.getEncodeParam(ClusterId);
    ResourceId = OpenApiUtil.getEncodeParam(ResourceId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeResourceDLink",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${ClusterId}/${ResourceId}/dlink`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeResourceDLinkResponse>(await this.callApi(params, req, runtime), new DescribeResourceDLinkResponse({}));
  }

  async describeResourceLog(ClusterId: string, ResourceId: string): Promise<DescribeResourceLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeResourceLogWithOptions(ClusterId, ResourceId, headers, runtime);
  }

  async describeResourceLogWithOptions(ClusterId: string, ResourceId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeResourceLogResponse> {
    ClusterId = OpenApiUtil.getEncodeParam(ClusterId);
    ResourceId = OpenApiUtil.getEncodeParam(ResourceId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeResourceLog",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${ClusterId}/${ResourceId}/log`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeResourceLogResponse>(await this.callApi(params, req, runtime), new DescribeResourceLogResponse({}));
  }

  async describeService(ClusterId: string, ServiceName: string): Promise<DescribeServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeServiceWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  async describeServiceWithOptions(ClusterId: string, ServiceName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeServiceResponse> {
    ClusterId = OpenApiUtil.getEncodeParam(ClusterId);
    ServiceName = OpenApiUtil.getEncodeParam(ServiceName);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeService",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${ClusterId}/${ServiceName}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeServiceResponse>(await this.callApi(params, req, runtime), new DescribeServiceResponse({}));
  }

  async describeServiceAutoScaler(ClusterId: string, ServiceName: string): Promise<DescribeServiceAutoScalerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeServiceAutoScalerWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  async describeServiceAutoScalerWithOptions(ClusterId: string, ServiceName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeServiceAutoScalerResponse> {
    ClusterId = OpenApiUtil.getEncodeParam(ClusterId);
    ServiceName = OpenApiUtil.getEncodeParam(ServiceName);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeServiceAutoScaler",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${ClusterId}/${ServiceName}/autoscaler`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeServiceAutoScalerResponse>(await this.callApi(params, req, runtime), new DescribeServiceAutoScalerResponse({}));
  }

  async describeServiceCronScaler(ClusterId: string, ServiceName: string): Promise<DescribeServiceCronScalerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeServiceCronScalerWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  async describeServiceCronScalerWithOptions(ClusterId: string, ServiceName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeServiceCronScalerResponse> {
    ClusterId = OpenApiUtil.getEncodeParam(ClusterId);
    ServiceName = OpenApiUtil.getEncodeParam(ServiceName);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeServiceCronScaler",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${ClusterId}/${ServiceName}/cronscaler`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeServiceCronScalerResponse>(await this.callApi(params, req, runtime), new DescribeServiceCronScalerResponse({}));
  }

  async describeServiceLog(ClusterId: string, ServiceName: string, request: DescribeServiceLogRequest): Promise<DescribeServiceLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeServiceLogWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  async describeServiceLogWithOptions(ClusterId: string, ServiceName: string, request: DescribeServiceLogRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeServiceLogResponse> {
    Util.validateModel(request);
    ClusterId = OpenApiUtil.getEncodeParam(ClusterId);
    ServiceName = OpenApiUtil.getEncodeParam(ServiceName);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.endTime)) {
      query["EndTime"] = request.endTime;
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
      pathname: `/api/v2/services/${ClusterId}/${ServiceName}/logs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeServiceLogResponse>(await this.callApi(params, req, runtime), new DescribeServiceLogResponse({}));
  }

  async describeServiceMirror(ClusterId: string, ServiceName: string): Promise<DescribeServiceMirrorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeServiceMirrorWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  async describeServiceMirrorWithOptions(ClusterId: string, ServiceName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeServiceMirrorResponse> {
    ClusterId = OpenApiUtil.getEncodeParam(ClusterId);
    ServiceName = OpenApiUtil.getEncodeParam(ServiceName);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DescribeServiceMirror",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${ClusterId}/${ServiceName}/mirror`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeServiceMirrorResponse>(await this.callApi(params, req, runtime), new DescribeServiceMirrorResponse({}));
  }

  async listResourceInstanceWorker(ClusterId: string, ResourceId: string, InstanceName: string, request: ListResourceInstanceWorkerRequest): Promise<ListResourceInstanceWorkerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourceInstanceWorkerWithOptions(ClusterId, ResourceId, InstanceName, request, headers, runtime);
  }

  async listResourceInstanceWorkerWithOptions(ClusterId: string, ResourceId: string, InstanceName: string, request: ListResourceInstanceWorkerRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListResourceInstanceWorkerResponse> {
    Util.validateModel(request);
    ClusterId = OpenApiUtil.getEncodeParam(ClusterId);
    ResourceId = OpenApiUtil.getEncodeParam(ResourceId);
    InstanceName = OpenApiUtil.getEncodeParam(InstanceName);
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
      pathname: `/api/v2/resources/${ClusterId}/${ResourceId}/instance/${InstanceName}/workers`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListResourceInstanceWorkerResponse>(await this.callApi(params, req, runtime), new ListResourceInstanceWorkerResponse({}));
  }

  async listResourceInstances(ClusterId: string, ResourceId: string, request: ListResourceInstancesRequest): Promise<ListResourceInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourceInstancesWithOptions(ClusterId, ResourceId, request, headers, runtime);
  }

  async listResourceInstancesWithOptions(ClusterId: string, ResourceId: string, request: ListResourceInstancesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListResourceInstancesResponse> {
    Util.validateModel(request);
    ClusterId = OpenApiUtil.getEncodeParam(ClusterId);
    ResourceId = OpenApiUtil.getEncodeParam(ResourceId);
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
      action: "ListResourceInstances",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${ClusterId}/${ResourceId}/instances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListResourceInstancesResponse>(await this.callApi(params, req, runtime), new ListResourceInstancesResponse({}));
  }

  async listResourceServices(ClusterId: string, ResourceId: string, request: ListResourceServicesRequest): Promise<ListResourceServicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourceServicesWithOptions(ClusterId, ResourceId, request, headers, runtime);
  }

  async listResourceServicesWithOptions(ClusterId: string, ResourceId: string, request: ListResourceServicesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListResourceServicesResponse> {
    Util.validateModel(request);
    ClusterId = OpenApiUtil.getEncodeParam(ClusterId);
    ResourceId = OpenApiUtil.getEncodeParam(ResourceId);
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
      pathname: `/api/v2/resources/${ClusterId}/${ResourceId}/services`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListResourceServicesResponse>(await this.callApi(params, req, runtime), new ListResourceServicesResponse({}));
  }

  async listResources(request: ListResourcesRequest): Promise<ListResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourcesWithOptions(request, headers, runtime);
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

  async listServiceInstances(ClusterId: string, ServiceName: string, request: ListServiceInstancesRequest): Promise<ListServiceInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listServiceInstancesWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  async listServiceInstancesWithOptions(ClusterId: string, ServiceName: string, request: ListServiceInstancesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListServiceInstancesResponse> {
    Util.validateModel(request);
    ClusterId = OpenApiUtil.getEncodeParam(ClusterId);
    ServiceName = OpenApiUtil.getEncodeParam(ServiceName);
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
      action: "ListServiceInstances",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${ClusterId}/${ServiceName}/instances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListServiceInstancesResponse>(await this.callApi(params, req, runtime), new ListServiceInstancesResponse({}));
  }

  async listServices(request: ListServicesRequest): Promise<ListServicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listServicesWithOptions(request, headers, runtime);
  }

  async listServicesWithOptions(request: ListServicesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListServicesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.filter)) {
      query["Filter"] = request.filter;
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

  async releaseService(ClusterId: string, ServiceName: string, request: ReleaseServiceRequest): Promise<ReleaseServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.releaseServiceWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  async releaseServiceWithOptions(ClusterId: string, ServiceName: string, request: ReleaseServiceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ReleaseServiceResponse> {
    Util.validateModel(request);
    ClusterId = OpenApiUtil.getEncodeParam(ClusterId);
    ServiceName = OpenApiUtil.getEncodeParam(ServiceName);
    let body : {[key: string ]: any} = { };
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
      pathname: `/api/v2/services/${ClusterId}/${ServiceName}/release`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ReleaseServiceResponse>(await this.callApi(params, req, runtime), new ReleaseServiceResponse({}));
  }

  async startService(ClusterId: string, ServiceName: string): Promise<StartServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startServiceWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  async startServiceWithOptions(ClusterId: string, ServiceName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StartServiceResponse> {
    ClusterId = OpenApiUtil.getEncodeParam(ClusterId);
    ServiceName = OpenApiUtil.getEncodeParam(ServiceName);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "StartService",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${ClusterId}/${ServiceName}/start`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StartServiceResponse>(await this.callApi(params, req, runtime), new StartServiceResponse({}));
  }

  async stopService(ClusterId: string, ServiceName: string): Promise<StopServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopServiceWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  async stopServiceWithOptions(ClusterId: string, ServiceName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StopServiceResponse> {
    ClusterId = OpenApiUtil.getEncodeParam(ClusterId);
    ServiceName = OpenApiUtil.getEncodeParam(ServiceName);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "StopService",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${ClusterId}/${ServiceName}/stop`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StopServiceResponse>(await this.callApi(params, req, runtime), new StopServiceResponse({}));
  }

  async updateResource(ClusterId: string, ResourceId: string, request: UpdateResourceRequest): Promise<UpdateResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateResourceWithOptions(ClusterId, ResourceId, request, headers, runtime);
  }

  async updateResourceWithOptions(ClusterId: string, ResourceId: string, request: UpdateResourceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateResourceResponse> {
    Util.validateModel(request);
    ClusterId = OpenApiUtil.getEncodeParam(ClusterId);
    ResourceId = OpenApiUtil.getEncodeParam(ResourceId);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resourceName)) {
      body["ResourceName"] = request.resourceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateResource",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/resources/${ClusterId}/${ResourceId}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateResourceResponse>(await this.callApi(params, req, runtime), new UpdateResourceResponse({}));
  }

  async updateResourceDLink(ClusterId: string, ResourceId: string, request: UpdateResourceDLinkRequest): Promise<UpdateResourceDLinkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateResourceDLinkWithOptions(ClusterId, ResourceId, request, headers, runtime);
  }

  async updateResourceDLinkWithOptions(ClusterId: string, ResourceId: string, request: UpdateResourceDLinkRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateResourceDLinkResponse> {
    Util.validateModel(request);
    ClusterId = OpenApiUtil.getEncodeParam(ClusterId);
    ResourceId = OpenApiUtil.getEncodeParam(ResourceId);
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
      pathname: `/api/v2/resources/${ClusterId}/${ResourceId}/dlink`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateResourceDLinkResponse>(await this.callApi(params, req, runtime), new UpdateResourceDLinkResponse({}));
  }

  async updateService(ClusterId: string, ServiceName: string, request: UpdateServiceRequest): Promise<UpdateServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateServiceWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  async updateServiceWithOptions(ClusterId: string, ServiceName: string, request: UpdateServiceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateServiceResponse> {
    Util.validateModel(request);
    ClusterId = OpenApiUtil.getEncodeParam(ClusterId);
    ServiceName = OpenApiUtil.getEncodeParam(ServiceName);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: request.body,
    });
    let params = new $OpenApi.Params({
      action: "UpdateService",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${ClusterId}/${ServiceName}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateServiceResponse>(await this.callApi(params, req, runtime), new UpdateServiceResponse({}));
  }

  async updateServiceAutoScaler(ClusterId: string, ServiceName: string, request: UpdateServiceAutoScalerRequest): Promise<UpdateServiceAutoScalerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateServiceAutoScalerWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  async updateServiceAutoScalerWithOptions(ClusterId: string, ServiceName: string, request: UpdateServiceAutoScalerRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateServiceAutoScalerResponse> {
    Util.validateModel(request);
    ClusterId = OpenApiUtil.getEncodeParam(ClusterId);
    ServiceName = OpenApiUtil.getEncodeParam(ServiceName);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.max)) {
      body["Max"] = request.max;
    }

    if (!Util.isUnset(request.min)) {
      body["Min"] = request.min;
    }

    if (!Util.isUnset($tea.toMap(request.strategies))) {
      body["Strategies"] = request.strategies;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateServiceAutoScaler",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${ClusterId}/${ServiceName}/autoscaler`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateServiceAutoScalerResponse>(await this.callApi(params, req, runtime), new UpdateServiceAutoScalerResponse({}));
  }

  async updateServiceCronScaler(ClusterId: string, ServiceName: string, request: UpdateServiceCronScalerRequest): Promise<UpdateServiceCronScalerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateServiceCronScalerWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  async updateServiceCronScalerWithOptions(ClusterId: string, ServiceName: string, request: UpdateServiceCronScalerRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateServiceCronScalerResponse> {
    Util.validateModel(request);
    ClusterId = OpenApiUtil.getEncodeParam(ClusterId);
    ServiceName = OpenApiUtil.getEncodeParam(ServiceName);
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
      pathname: `/api/v2/services/${ClusterId}/${ServiceName}/cronscaler`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateServiceCronScalerResponse>(await this.callApi(params, req, runtime), new UpdateServiceCronScalerResponse({}));
  }

  async updateServiceMirror(ClusterId: string, ServiceName: string, request: UpdateServiceMirrorRequest): Promise<UpdateServiceMirrorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateServiceMirrorWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  async updateServiceMirrorWithOptions(ClusterId: string, ServiceName: string, request: UpdateServiceMirrorRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateServiceMirrorResponse> {
    Util.validateModel(request);
    ClusterId = OpenApiUtil.getEncodeParam(ClusterId);
    ServiceName = OpenApiUtil.getEncodeParam(ServiceName);
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
      pathname: `/api/v2/services/${ClusterId}/${ServiceName}/mirror`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateServiceMirrorResponse>(await this.callApi(params, req, runtime), new UpdateServiceMirrorResponse({}));
  }

  async updateServiceVersion(ClusterId: string, ServiceName: string, request: UpdateServiceVersionRequest): Promise<UpdateServiceVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateServiceVersionWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  async updateServiceVersionWithOptions(ClusterId: string, ServiceName: string, request: UpdateServiceVersionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateServiceVersionResponse> {
    Util.validateModel(request);
    ClusterId = OpenApiUtil.getEncodeParam(ClusterId);
    ServiceName = OpenApiUtil.getEncodeParam(ServiceName);
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
      pathname: `/api/v2/services/${ClusterId}/${ServiceName}/version`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateServiceVersionResponse>(await this.callApi(params, req, runtime), new UpdateServiceVersionResponse({}));
  }

}

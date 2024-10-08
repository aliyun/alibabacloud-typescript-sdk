// This file is auto-generated, don't edit it
/**
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
  /**
   * @example
   * 0.444
   */
  currentAmount?: number;
  /**
   * @example
   * 192.168.1.100
   */
  externalIP?: string;
  /**
   * @example
   * 8080
   */
  externalInstancePort?: number;
  hostIP?: string;
  hostName?: string;
  innerIP?: string;
  instanceName?: string;
  instancePort?: number;
  /**
   * @example
   * false
   */
  isSpot?: boolean;
  /**
   * @example
   * false
   */
  isolated?: boolean;
  lastState?: { [key: string]: any }[];
  namespace?: string;
  /**
   * @example
   * 2.2
   */
  originalAmount?: number;
  readyProcesses?: number;
  reason?: string;
  /**
   * @example
   * PublicResource
   */
  resourceType?: string;
  restartCount?: number;
  /**
   * @example
   * Standard
   */
  role?: string;
  /**
   * @deprecated
   */
  startAt?: string;
  startTime?: string;
  status?: string;
  /**
   * @example
   * 192.168.0.39
   */
  tenantHostIP?: string;
  /**
   * @example
   * 192.168.0.39
   */
  tenantInstanceIP?: string;
  totalProcesses?: number;
  /**
   * @example
   * cn-shanghai-a
   */
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      currentAmount: 'CurrentAmount',
      externalIP: 'ExternalIP',
      externalInstancePort: 'ExternalInstancePort',
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
      startTime: 'StartTime',
      status: 'Status',
      tenantHostIP: 'TenantHostIP',
      tenantInstanceIP: 'TenantInstanceIP',
      totalProcesses: 'TotalProcesses',
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentAmount: 'number',
      externalIP: 'string',
      externalInstancePort: 'number',
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
      startTime: 'string',
      status: 'string',
      tenantHostIP: 'string',
      tenantInstanceIP: 'string',
      totalProcesses: 'number',
      zone: 'string',
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
  vendor?: string;
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
      vendor: 'Vendor',
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
      vendor: 'string',
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

export class CloneServiceRequest extends $tea.Model {
  /**
   * @remarks
   * The label of the service to be cloned.
   */
  labels?: { [key: string]: string };
  /**
   * @remarks
   * The request body. For more information, see [CreateService](https://help.aliyun.com/document_detail/412086.html).
   * 
   * @example
   * {   "name": "foo",   "model_path": "http://path/to/model.tar.gz",   "processor": "tensorflow_cpu",   "metadata": {     "instance": 2,     "memory": 7000,     "cpu": 4   } }
   */
  body?: string;
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneServiceShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The label of the service to be cloned.
   */
  labelsShrink?: string;
  /**
   * @remarks
   * The request body. For more information, see [CreateService](https://help.aliyun.com/document_detail/412086.html).
   * 
   * @example
   * {   "name": "foo",   "model_path": "http://path/to/model.tar.gz",   "processor": "tensorflow_cpu",   "metadata": {     "instance": 2,     "memory": 7000,     "cpu": 4   } }
   */
  body?: string;
  static names(): { [key: string]: string } {
    return {
      labelsShrink: 'Labels',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelsShrink: 'string',
      body: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloneServiceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The public endpoint of the service.
   * 
   * @example
   * http://10123*****.cn-shanghai.aliyuncs.com/api/predict/echo
   */
  internetEndpoint?: string;
  /**
   * @remarks
   * The private endpoint of the service.
   * 
   * @example
   * http://10123*****.vpc.cn-shanghai.aliyuncs.com/api/predict/echo
   */
  intranetEndpoint?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * eas-m-r9knx7n9guf2p*****
   */
  serviceId?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * foo
   */
  serviceName?: string;
  /**
   * @remarks
   * The service status.
   * 
   * @example
   * Creating
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      internetEndpoint: 'InternetEndpoint',
      intranetEndpoint: 'IntranetEndpoint',
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

export class CloneServiceResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CloneServiceResponseBody;
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
      body: CloneServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommitServiceResponseBody extends $tea.Model {
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
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

export class CreateAclPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * The whitelisted IP CIDR blocks in the VPC that can access the private gateway.
   */
  aclPolicyList?: CreateAclPolicyRequestAclPolicyList[];
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC). For more information about how to obtain the VPC ID, see DescribeVpcs.
   * 
   * @example
   * vpc-uf66uio7md****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      aclPolicyList: 'AclPolicyList',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclPolicyList: { 'type': 'array', 'itemType': CreateAclPolicyRequestAclPolicyList },
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAclPolicyShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The whitelisted IP CIDR blocks in the VPC that can access the private gateway.
   */
  aclPolicyListShrink?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC). For more information about how to obtain the VPC ID, see DescribeVpcs.
   * 
   * @example
   * vpc-uf66uio7md****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      aclPolicyListShrink: 'AclPolicyList',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclPolicyListShrink: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAclPolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The private gateway ID.
   * 
   * @example
   * gw-1uhcqmsc7x22******
   */
  gatewayId?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Successfully add acl policy for gateway
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
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

export class CreateAclPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CreateAclPolicyResponseBody;
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
      body: CreateAclPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppServiceRequest extends $tea.Model {
  /**
   * @remarks
   * The quota ID.
   * 
   * @example
   * abcdef
   */
  quotaId?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 123456
   */
  workspaceId?: string;
  /**
   * @remarks
   * The application service type.
   * 
   * Valid values:
   * 
   * *   LLM
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * This parameter is required.
   * 
   * @example
   * LLM
   */
  appType?: string;
  /**
   * @remarks
   * The application version.
   * 
   * @example
   * v1
   */
  appVersion?: string;
  /**
   * @remarks
   * The additional configurations that are required for service deployment.
   */
  config?: { [key: string]: any };
  /**
   * @remarks
   * The number of instances.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  replicas?: number;
  /**
   * @remarks
   * The service name.
   * 
   * This parameter is required.
   * 
   * @example
   * foo
   */
  serviceName?: string;
  /**
   * @remarks
   * The service specifications. Valid values:
   * 
   * *   llama_7b_fp16
   * *   llama_7b_int8
   * *   llama_13b_fp16
   * *   llama_7b_int8
   * *   chatglm_6b_fp16
   * *   chatglm_6b_int8
   * *   chatglm2_6b_fp16
   * *   baichuan_7b_int8
   * *   baichuan_13b_fp16
   * *   baichuan_7b_fp16
   * 
   * This parameter is required.
   * 
   * @example
   * llama_7b_fp16
   */
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
  /**
   * @remarks
   * The public endpoint of the service.
   * 
   * @example
   * http://pai-eas.cn-shanghai.****
   */
  internetEndpoint?: string;
  /**
   * @remarks
   * The internal endpoint of the service.
   * 
   * @example
   * http://pai-eas-vpc.cn-shanghai.****
   */
  intranetEndpoint?: string;
  /**
   * @remarks
   * The region ID of the service.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * eas-m-aaxxxddf
   */
  serviceId?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * foo
   */
  serviceName?: string;
  /**
   * @remarks
   * The service state.
   * 
   * @example
   * Creating
   */
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
  /**
   * @remarks
   * The request body. The body includes the parameters that are set to create a stress testing task.
   * 
   * @example
   * {
   *     "base": {
   *         "duration": 600
   *     },
   *     "service": {
   *         "serviceName": "test_service",
   *         "requestToken": "test_token"
   *     },
   *     "data": {
   *         "path": "https://larec-benchmark-cd.oss-cn-chengdu.aliyuncs.com/youbei/sv_dbmtl/data/youbei.warmup.tf.bin",
   *         "dataType": "binary"
   *     },
   *     "optional": {
   *        "maxRt": 100
   *     }
   * }
   */
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
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Benchmark  task [foo] is Creating
   */
  message?: string;
  /**
   * @remarks
   * The ID of the region where the stress testing task is performed.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82********
   */
  requestId?: string;
  /**
   * @remarks
   * The name of the stress testing task.
   * 
   * @example
   * benchmark-larec-test-1076
   */
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
  /**
   * @remarks
   * The resource group ID. To obtain a resource group ID, see the ResourceId field in the response of the [ListResources](https://help.aliyun.com/document_detail/412133.html) operation.
   * 
   * @example
   * eas-r-4gt8twzwllfo******
   */
  resourceName?: string;
  /**
   * @remarks
   * Specifies whether to enable Internet access. Default value: false.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  enableInternet?: boolean;
  /**
   * @remarks
   * Specifies whether to enable private access. Default value: true.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  enableIntranet?: boolean;
  /**
   * @remarks
   * The instance type used by the private gateway. Valid values:
   * 
   * *   2c4g
   * *   4c8g
   * *   8c16g
   * *   16c32g
   * 
   * This parameter is required.
   * 
   * @example
   * ecs.c6.4xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * The alias of the private gateway.
   * 
   * @example
   * mygateway1
   */
  name?: string;
  /**
   * @remarks
   * The number of nodes in the private gateway.
   * 
   * @example
   * 2
   */
  replicas?: number;
  static names(): { [key: string]: string } {
    return {
      resourceName: 'ResourceName',
      enableInternet: 'EnableInternet',
      enableIntranet: 'EnableIntranet',
      instanceType: 'InstanceType',
      name: 'Name',
      replicas: 'Replicas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceName: 'string',
      enableInternet: 'boolean',
      enableIntranet: 'boolean',
      instanceType: 'string',
      name: 'string',
      replicas: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGatewayResponseBody extends $tea.Model {
  /**
   * @remarks
   * The region ID of the private gateway.
   * 
   * @example
   * cn-hangzhou
   */
  clusterId?: string;
  /**
   * @remarks
   * The private gateway ID.
   * 
   * @example
   * gw-1uhcqmsc7x22******
   */
  gatewayId?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Successfully create gateway.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
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
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-8vbqn2at0kljjxxxx****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   * 
   * @example
   * vpc-uf66uio7md****
   */
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
  /**
   * @remarks
   * The private gateway ID.
   * 
   * @example
   * gw-1uhcqmsc7x22******
   */
  gatewayId?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Successfully add intranet linked vpc for gateway
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
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
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * 
   * *   false (default)
   * *   true
   * 
   * @example
   * false
   */
  autoRenewal?: boolean;
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   PrePaid: the subscription billing method.
   * *   PostPaid: the pay-as-you-go billing method.
   * 
   * >  This parameter is required when the ResourceType parameter is set to Dedicated.
   * 
   * @example
   * PostPaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The number of ECS instances.
   * 
   * >  This parameter is required when the ResourceType parameter is set to Dedicated.
   * 
   * @example
   * 5
   */
  ecsInstanceCount?: number;
  /**
   * @remarks
   * The type of the Elastic Compute Service (ECS) instance.
   * 
   * >  This parameter is required when the ResourceType parameter is set to Dedicated.
   * 
   * @example
   * ecs.c6.8xlarge
   */
  ecsInstanceType?: string;
  /**
   * @remarks
   * The type of the resource group. Valid values:
   * 
   * *   Dedicated: the dedicated resource group.
   * *   SelfManaged: the self-managed resource group.
   * 
   * >  If you use a self-managed resource group, you must configure a whitelist.
   * 
   * @example
   * Dedicated
   */
  resourceType?: string;
  /**
   * @remarks
   * The configurations of the self-managed resource group.
   */
  selfManagedResourceOptions?: CreateResourceRequestSelfManagedResourceOptions;
  /**
   * @remarks
   * The size of the system disk. Unit: GiB. Valid values: 200 to 2000. Default value: 200.
   * 
   * @example
   * 200
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The ID of the zone in which the instance resides.
   * 
   * @example
   * cn-shanghai-f
   */
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
  /**
   * @remarks
   * The ID of the cluster to which the resource group belongs.
   * 
   * @example
   * cn-shanghai
   */
  clusterId?: string;
  /**
   * @remarks
   * The instance IDs.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The user ID (UID) of the resource group owner.
   * 
   * @example
   * 14401087478****
   */
  ownerUid?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * eas-r-h7lcw24dyqztwxxxxxx
   */
  resourceId?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * MyResource
   */
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
  /**
   * @remarks
   * Specifies whether to enable auto-renewal. Valid values:
   * 
   * *   false (default)
   * *   true
   * 
   * @example
   * false
   */
  autoRenewal?: boolean;
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   PrePaid: subscription.
   * *   PostPaid: pay-as-you-go.
   * 
   * This parameter is required.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The number of instances that you want to create. Valid values: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 5
   */
  ecsInstanceCount?: number;
  /**
   * @remarks
   * The type of the Elastic Compute Service (ECS) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs.s6-c1m2.xlarge
   */
  ecsInstanceType?: string;
  /**
   * @remarks
   * The size of the system disk. Unit: GiB. Valid values: 200 to 2000. Default value: 200.
   * 
   * @example
   * 200
   */
  systemDiskSize?: number;
  /**
   * @remarks
   * The user-defined information. This parameter is not in use.
   * 
   * @example
   * x112223333
   */
  userData?: string;
  /**
   * @remarks
   * The zone to which the instance belongs.
   * 
   * @example
   * cn-shanghai-f
   */
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
  /**
   * @remarks
   * The instance IDs.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Create 5 new ecs instance(s) in resource [eas-r-asdasdasd] successfully
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
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
  /**
   * @remarks
   * The Logstore of Log Service. For more information about how to query a Logstore, see [ListLogStores](https://help.aliyun.com/document_detail/426970.html).
   * 
   * This parameter is required.
   * 
   * @example
   * access_log
   */
  logStore?: string;
  /**
   * @remarks
   * The Log Service project that is associated with the resource group. For more information about how to query the project, see [ListProject](https://help.aliyun.com/document_detail/74955.html).
   * 
   * This parameter is required.
   * 
   * @example
   * eas-r-asdasdasd-sls
   */
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
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Resource [eas-r-asdasdasd] is deleted.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
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
  /**
   * @remarks
   * Specifies whether to enter development mode.
   * 
   * Valid values:
   * 
   * *   true
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   false
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * true
   */
  develop?: string;
  /**
   * @remarks
   * The custom label.
   */
  labels?: { [key: string]: string };
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 123456
   */
  workspaceId?: string;
  /**
   * @remarks
   * The request body. For more information about the key request parameters, see **Table 1. Request body parameters** and **Table 2. Metadata parameters**. For more information about all related parameters, see [Parameters of model services](https://help.aliyun.com/document_detail/450525.html).
   * 
   * @example
   * Service deployment by using an image:
   * {
   *   "name": "foo",
   *   "metadata": {
   *     "instance": 2,
   *     "memory": 7000,
   *     "cpu": 4
   *     },
   *   "containers": [
   *     {
   *       "image": "****",
   *       "script": "**** --listen=0.0.0.0 --server_port=8000 --headless",
   *       "port": 8000
   *     }
   *   ],
   *   "storage": [
   *     {
   *       "oss": {
   *         "path": "oss://examplebuket/data111/",
   *         "readOnly": false
   *       },
   *       "properties": {
   *         "resource_type": "model"
   *       },
   *       "mount_path": "/data"
   *     }
   *   ]
   * }
   * AI-Web application deployment by using an image:
   * {
   *   "name": "foo",
   *   "metadata": {
   *     "instance": 1,
   *     "memory": 7000,
   *     "cpu": 4,
   *     "enable_webservice": true
   *   },
   *   "containers": [
   *     {
   *       "image": "****",
   *       "script": "**** --listen=0.0.0.0 --server_port=8000 --headless",
   *       "port": 8000
   *     }
   *   ],
   *   "storage": [
   *     {
   *       "oss": {
   *         "path": "oss://examplebucket/data111/",
   *         "readOnly": false
   *       },
   *       "properties": {
   *       "resource_type": "model"
   *       },
   *       "mount_path": "/data"
   *     }
   *   ]
   * }
   * Service deployment by using models and processors:
   * {
   *   "metadata": {
   *     "instance": 1,
   *     "memory": 7000,
   *     "cpu": 4
   *   },
   *   "name": "foo",
   *   "model_config": {},
   *   "processor_type": "python",
   *   "processor_path": "oss://****",
   *   "processor_entry": "a.py",
   *   "model_path": "oss://****"
   * }
   */
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
  /**
   * @remarks
   * Specifies whether to enter development mode.
   * 
   * Valid values:
   * 
   * *   true
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   false
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * true
   */
  develop?: string;
  /**
   * @remarks
   * The custom label.
   */
  labelsShrink?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 123456
   */
  workspaceId?: string;
  /**
   * @remarks
   * The request body. For more information about the key request parameters, see **Table 1. Request body parameters** and **Table 2. Metadata parameters**. For more information about all related parameters, see [Parameters of model services](https://help.aliyun.com/document_detail/450525.html).
   * 
   * @example
   * Service deployment by using an image:
   * {
   *   "name": "foo",
   *   "metadata": {
   *     "instance": 2,
   *     "memory": 7000,
   *     "cpu": 4
   *     },
   *   "containers": [
   *     {
   *       "image": "****",
   *       "script": "**** --listen=0.0.0.0 --server_port=8000 --headless",
   *       "port": 8000
   *     }
   *   ],
   *   "storage": [
   *     {
   *       "oss": {
   *         "path": "oss://examplebuket/data111/",
   *         "readOnly": false
   *       },
   *       "properties": {
   *         "resource_type": "model"
   *       },
   *       "mount_path": "/data"
   *     }
   *   ]
   * }
   * AI-Web application deployment by using an image:
   * {
   *   "name": "foo",
   *   "metadata": {
   *     "instance": 1,
   *     "memory": 7000,
   *     "cpu": 4,
   *     "enable_webservice": true
   *   },
   *   "containers": [
   *     {
   *       "image": "****",
   *       "script": "**** --listen=0.0.0.0 --server_port=8000 --headless",
   *       "port": 8000
   *     }
   *   ],
   *   "storage": [
   *     {
   *       "oss": {
   *         "path": "oss://examplebucket/data111/",
   *         "readOnly": false
   *       },
   *       "properties": {
   *       "resource_type": "model"
   *       },
   *       "mount_path": "/data"
   *     }
   *   ]
   * }
   * Service deployment by using models and processors:
   * {
   *   "metadata": {
   *     "instance": 1,
   *     "memory": 7000,
   *     "cpu": 4
   *   },
   *   "name": "foo",
   *   "model_config": {},
   *   "processor_type": "python",
   *   "processor_path": "oss://****",
   *   "processor_entry": "a.py",
   *   "model_path": "oss://****"
   * }
   */
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
  /**
   * @remarks
   * The public endpoint of the created service.
   * 
   * @example
   * http://pai-eas.vpc.cn-shanghai.****
   */
  internetEndpoint?: string;
  /**
   * @remarks
   * The internal endpoint of the created service.
   * 
   * @example
   * http://pai-eas.cn-shanghai.****
   */
  intranetEndpoint?: string;
  /**
   * @remarks
   * The region ID of the created service.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the created service.
   * 
   * @example
   * eas-m-aaxxxddf
   */
  serviceId?: string;
  /**
   * @remarks
   * The name of the created service.
   * 
   * @example
   * yourname
   */
  serviceName?: string;
  /**
   * @remarks
   * The service state.
   * 
   * @example
   * Creating
   */
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
  /**
   * @remarks
   * The Autoscaler operation.
   */
  behavior?: CreateServiceAutoScalerRequestBehavior;
  /**
   * @remarks
   * The maximum number of instances in the service. The value of max must be greater than the value of min.
   * 
   * This parameter is required.
   * 
   * @example
   * 8
   */
  max?: number;
  /**
   * @remarks
   * The minimum number of instances in the service.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  min?: number;
  /**
   * @remarks
   * The service for which the metric is specified. If you do not set this parameter, the current service is specified by default.
   * 
   * This parameter is required.
   */
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
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Succeed to auto scale service [foo]
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
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
  /**
   * @remarks
   * The points in time that are excluded when you schedule a CronHPA job. The points in time must be specified by using a cron expression.
   */
  excludeDates?: string[];
  /**
   * @remarks
   * The description of the CronHPA job.
   * 
   * This parameter is required.
   */
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
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Create cron scaler for service [foo] successfully
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
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
  /**
   * @remarks
   * The percentage of the traffic that is mirrored to the destination service. Valid values: 0 to 100.
   * 
   * @example
   * 30
   */
  ratio?: number;
  /**
   * @remarks
   * The instances.
   */
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
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Traffic mirroring is ON for service [foo] in region [cn-shanghia], ratio [70%]
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82***
   */
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

export class DeleteAclPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * The whitelisted IP CIDR blocks in the VPC that can access the private gateway.
   */
  aclPolicyList?: DeleteAclPolicyRequestAclPolicyList[];
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC). For more information about how to obtain the VPC ID, see DescribeVpcs.
   * 
   * @example
   * vpc-uf66uio7md****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      aclPolicyList: 'AclPolicyList',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclPolicyList: { 'type': 'array', 'itemType': DeleteAclPolicyRequestAclPolicyList },
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAclPolicyShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The whitelisted IP CIDR blocks in the VPC that can access the private gateway.
   */
  aclPolicyListShrink?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC). For more information about how to obtain the VPC ID, see DescribeVpcs.
   * 
   * @example
   * vpc-uf66uio7md****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      aclPolicyListShrink: 'AclPolicyList',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclPolicyListShrink: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAclPolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The private gateway ID.
   * 
   * @example
   * gw-1uhcqmsc7x22******
   */
  gatewayId?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Successfully delete acl policy for gateway
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
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

export class DeleteAclPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteAclPolicyResponseBody;
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
      body: DeleteAclPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBenchmarkTaskResponseBody extends $tea.Model {
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Benchmark task [benchmark-test-service-234c] is Deleting
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
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
  /**
   * @remarks
   * The private gateway ID.
   * 
   * @example
   * gw-1uhcqmsc7x22******
   */
  gatewayId?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Gateway is deleted.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
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
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-8vbqn2at0kljjxxxx****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   * 
   * @example
   * vpc-uf66uio7md****
   */
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
  /**
   * @remarks
   * The private gateway ID.
   * 
   * @example
   * gw-1uhcqmsc7x22******
   */
  gatewayId?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Successfully delete intranet linked vpc for gateway
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
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
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Resource [eas-r-asdasdasd] is deleted.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82-9624-EC2B1779848E
   */
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
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Network interfaces are deleting
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
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
  /**
   * @remarks
   * Specifies whether to delete all the instances that fail to be created. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  allFailed?: boolean;
  /**
   * @remarks
   * The instances. Separate multiple instances with commas (,), such as `instanceId1,instanceId2`. For more information about how to query the instances, see [ListResourceInstances](https://help.aliyun.com/document_detail/412129.html).
   * 
   * @example
   * eas-i-xxxxxxx,eas-i-xxxxxxx
   */
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
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Instances eas-i-011227132046,eas-i-011227132046 are deleting
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
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
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Log service for resource [eas-r-asdasdasd] is deleting
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
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
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Service [foo] in region [cn-shanghai] is terminating
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
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
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Autoscaler for service [foo] deleted successfully
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
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
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Cronscaler for service [foo] deleted successfully
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
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
  /**
   * @remarks
   * The name of the container whose process needs to be restarted. This parameter takes effect only if the SoftRestart parameter is set to true.
   * 
   * @example
   * worker0
   */
  container?: string;
  /**
   * @remarks
   * The instances that you want to restart. Separate multiple instance names with commas (,). For more information about how to query the instance name, see [ListServiceInstances](https://help.aliyun.com/document_detail/412108.html).
   * 
   * This parameter is required.
   * 
   * @example
   * foo-rdsbxxxx,foo-rdsaxxxx
   */
  instanceList?: string;
  /**
   * @remarks
   * Specifies whether to restart only the container process without recreating the instance. Default value: false. Valid values: true and false.
   * 
   * @example
   * true
   */
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
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Instance(s) [foo-rdsb,foo-rdsa]  for service [foo] in region [cn-shanghai] was deleted successfully
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
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
  /**
   * @remarks
   * The service tags that you want to delete.
   * 
   * This parameter is required.
   */
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
  /**
   * @remarks
   * The service tags that you want to delete.
   * 
   * This parameter is required.
   */
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
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Succeed to delete service [service_from_zxxx] labels.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
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
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Traffic mirroring is OFF for service [foo] in region [cn-shanghia], ratio [70%]
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82***
   */
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
  /**
   * @remarks
   * The number of instances that you can test.
   * 
   * @example
   * 4
   */
  availableAgent?: number;
  /**
   * @remarks
   * The ID of the operation caller.
   * 
   * @example
   * 1640133467****
   */
  callerUid?: string;
  /**
   * @remarks
   * The number of instances that you want to test.
   * 
   * @example
   * 4
   */
  desiredAgent?: number;
  /**
   * @remarks
   * The endpoint of the service gateway.
   * 
   * @example
   * 192342311234.pai-eas.cn-chengdu.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Benchmar task is Running
   */
  message?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to call the operation.
   * 
   * @example
   * 1029728669****
   */
  parentUid?: string;
  /**
   * @remarks
   * The event or reason that causes the current state of the stress testing task.
   * 
   * @example
   * RUNNING
   */
  reason?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The name of the service that you want to test.
   * 
   * @example
   * foo
   */
  serviceName?: string;
  /**
   * @remarks
   * The state of the stress testing task.
   * 
   * Valid values:
   * 
   * *   Creating
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Starting
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   DeleteFailed
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Running
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Stopping
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Error
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Updating
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Deleting
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   CreateFailed
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The ID of the stress testing task.
   * 
   * @example
   * eas-b-gv4y86u****
   */
  taskId?: string;
  /**
   * @remarks
   * The name of the stress testing task.
   * 
   * @example
   * benchmark-larec-test-ae70
   */
  taskName?: string;
  /**
   * @remarks
   * The token for authentication when a stress testing task is created.
   * 
   * @example
   * 6062787a-9301****
   */
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
  /**
   * @remarks
   * The report type of the stress testing task. Valid values: RAW and Report.
   * 
   * @example
   * report
   */
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
  /**
   * @remarks
   * If the value of ReportType is set to RAW, the details about the stress testing report are returned.
   * 
   * @example
   * {
   *     "TimestampList": ["int64"],
   *     "QPSList": ["float32"],
   *     "RTList": [
   *       {
   *         "AVG": "float32",
   *         "TP100": "float32",
   *         "TP99": "float32",
   *         "TP90": "float32",
   *         "TP50": "float32",
   *         "TP10": "float32"
   *       }
   *     ],
   *     "TrafficList": [
   *       {
   *         "Send": "float64",
   *         "Receive": "float64"
   *       }
   *     ],
   *     "StatusCode": {
   *       "200": "uint64",
   *       "450": "uint64",
   *       "500": "uint64"
   *     },
   *     "Count": "uint64",
   *     "Total": "float64",
   *     "MinRT": "float32",
   *     "AvgRT": "float32",
   *     "MaxRT": "float32",
   *     "QPS": "float32",
   *     "TotalSend": "float64",
   *     "TotalReceive": "float64",
   *     "RTDistribution": [
   *       {
   *         "Latency": "float32",
   *         "Percentage": "int"
   *       }
   *     ],
   *     "RTHistogram": [
   *       {
   *         "Count": "int",
   *         "Mark": "float32",
   *         "Frequency": "float32"
   *       }
   *     ]
   *   }
   */
  data?: any;
  /**
   * @remarks
   * If the value of ReportType is set to Report, the URL of the stress testing report is returned.
   * 
   * @example
   * http://eas-benchmark.oss-cn-chengdu.aliyuncs.com/summary/benchmark-larec-test-015d-10007.html
   */
  reportUrl?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82********
   */
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
  /**
   * @remarks
   * The time when the private gateway was created. The time is displayed in UTC.
   * 
   * @example
   * 2020-05-19T14:19:42Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the self-managed cluster.
   * 
   * @example
   * c935eadf284c14c2da57a2a13ad6******
   */
  externalClusterId?: string;
  /**
   * @remarks
   * The ID of the private gateway.
   * 
   * @example
   * gw-1uhcqmsc7x22******
   */
  gatewayId?: string;
  /**
   * @remarks
   * The alias of the private gateway.
   * 
   * @example
   * mygateway1
   */
  gatewayName?: string;
  /**
   * @remarks
   * The instance type used by the private gateway.
   * 
   * Valid values:
   * 
   * *   8c16g
   * *   4c8g
   * *   2c4g
   * *   16c32g
   * 
   * @example
   * ecs.c6.4xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * The public endpoint.
   * 
   * @example
   * gw-1uhcqmsc7x22******-1801786532******.cn-hangzhou.pai-eas.aliyuncs.com
   */
  internetDomain?: string;
  /**
   * @remarks
   * Indicates whether Internet access is enabled.
   * 
   * @example
   * true
   */
  internetEnabled?: boolean;
  /**
   * @remarks
   * Indicates whether Internet access is enabled.
   * 
   * Valid values:
   * 
   * *   Creating: Internet access is being enabled.
   * *   Failed: Internet access failed to be enabled or deleted.
   * *   Running: Internet access is running.
   * *   Deleted: Internet access is deleted.
   * *   Deleting: Internet access is being deleted.
   * 
   * @example
   * Running
   */
  internetStatus?: string;
  /**
   * @remarks
   * The internal endpoint.
   * 
   * @example
   * gw-1uhcqmsc7x22******-1801786532******-vpc.cn-hangzhou.pai-eas.aliyuncs.com
   */
  intranetDomain?: string;
  /**
   * @remarks
   * Indicates whether it is the default private gateway.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The number of nodes in the private gateway.
   * 
   * @example
   * 2
   */
  replicas?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the private gateway.
   * 
   * Valid values:
   * 
   * *   Creating
   * *   Stopped
   * *   Failed
   * *   Running
   * *   Deleted
   * *   Deleting
   * *   Waiting
   * 
   * @example
   * PrivateGatewayRunning
   */
  status?: string;
  /**
   * @remarks
   * The time when the private gateway was updated. The time is displayed in UTC.
   * 
   * @example
   * 2021-02-24T11:52:17Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      externalClusterId: 'ExternalClusterId',
      gatewayId: 'GatewayId',
      gatewayName: 'GatewayName',
      instanceType: 'InstanceType',
      internetDomain: 'InternetDomain',
      internetEnabled: 'InternetEnabled',
      internetStatus: 'InternetStatus',
      intranetDomain: 'IntranetDomain',
      isDefault: 'IsDefault',
      replicas: 'Replicas',
      requestId: 'RequestId',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      externalClusterId: 'string',
      gatewayId: 'string',
      gatewayName: 'string',
      instanceType: 'string',
      internetDomain: 'string',
      internetEnabled: 'boolean',
      internetStatus: 'string',
      intranetDomain: 'string',
      isDefault: 'boolean',
      replicas: 'number',
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
  /**
   * @remarks
   * The ID of the cluster to which the resource group belongs.
   * 
   * @example
   * cn-beijing
   */
  clusterId?: string;
  /**
   * @remarks
   * The total number of CPU cores.
   * 
   * @example
   * 16
   */
  cpuCount?: number;
  /**
   * @remarks
   * The time when the resource group was created.
   * 
   * @example
   * 2020-05-19T14:19:42Z
   */
  createTime?: string;
  /**
   * @remarks
   * The additional information, such as the connection status of a virtual private cloud (VPC) and the log status of Log Service.
   * 
   * @example
   * {"vswitch_id":"vsw-bp17uo6xebcusy****","gpu_share":true,"aux_vswitch_id_list":["vsw-bp13b3pvjap3vxn****","vsw-bp1nls8o5hk8mt8*****"],"security_group_id":"sg-bp1j1z7297hcink*****","vpc_id":"vpc-bp1kjr3rfyhx01*****","destination_cidr":"172.16.0.12/28","role_arn":"acs:ram::1157703270*****:role/AliyunServiceRoleForPaiEas","sls_project":"","sls_logstore":"","sls_status":"ResourceReady","sls_message":"","update_time":""}
   */
  extraData?: string;
  /**
   * @remarks
   * The total number of GPUs.
   * 
   * @example
   * 1
   */
  gpuCount?: number;
  /**
   * @remarks
   * The total number of instances in the resource group.
   * 
   * @example
   * 4
   */
  instanceCount?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Resource is ready
   */
  message?: string;
  /**
   * @remarks
   * The ID of the resource group owner.
   * 
   * @example
   * 14401087478****
   */
  ownerUid?: string;
  /**
   * @remarks
   * The total number of pay-as-you-go instances in the resource group.
   * 
   * @example
   * 3
   */
  postPaidInstanceCount?: number;
  /**
   * @remarks
   * The total number of subscription instances in the resource group.
   * 
   * @example
   * 1
   */
  prePaidInstanceCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 902976F2-6FAF-5404-8A4D-6CC223***
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the Elastic Algorithm Service (EAS) resource.
   * 
   * @example
   * eas-r-glkfpsxuw57x1h*****
   */
  resourceId?: string;
  /**
   * @remarks
   * The name of the EAS resource.
   * 
   * @example
   * my-resouce****
   */
  resourceName?: string;
  /**
   * @remarks
   * The type of the resource group. Valid values:
   * 
   * *   Dedicated: the dedicated resource group.
   * *   SelfManaged: the self-managed resource group.
   * 
   * @example
   * Dedicated
   */
  resourceType?: string;
  /**
   * @remarks
   * The state of the resource group.
   * 
   * @example
   * ResourceReady
   */
  status?: string;
  /**
   * @remarks
   * The time when the resource group was last updated.
   * 
   * @example
   * 2021-02-24T11:52:17Z
   */
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
  /**
   * @remarks
   * The IDs of the secondary vSwitches that are directly connected.
   */
  auxVSwitchList?: string[];
  /**
   * @remarks
   * The CIDR blocks of the clients that you want to connect to. After this parameter is specified, the CIDR blocks are added to the back-to-origin route of the server. Either this parameter or the VSwitchIdList parameter can be used to determine CIDR blocks.
   * 
   * @example
   * 72.16.0.0/16
   */
  destinationCIDRs?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the security group that is directly connected.
   * 
   * @example
   * sg-bp1j1z7297hcink9d****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The ID of the primary vSwitch that is directly connected.
   * 
   * @example
   * vsw-8vbqn2at0kljjxxxx****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC that is directly connected.
   * 
   * @example
   * vpc-uf66uio7md****
   */
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
  /**
   * @remarks
   * The Logstore of Log Service.
   * 
   * @example
   * access_log
   */
  logStore?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Network interfaces are updating
   */
  message?: string;
  /**
   * @remarks
   * The Log Service project that is associated with the resource group.
   * 
   * @example
   * eas-r-asdasdasd-sls
   */
  projectName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The state of the resource group.
   * 
   * @example
   * ResourceReady
   */
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
  /**
   * @remarks
   * The additional information about the Autoscaler policy, such as the interval of triggering Autoscaler.
   * 
   * @example
   * {
   *   "behavior": {
   *     "scaleDown": {
   *       "stabilizationWindowSeconds": 150
   *     }
   *   }
   * }
   */
  behavior?: { [key: string]: any };
  /**
   * @remarks
   * The metrics.
   */
  currentMetrics?: DescribeServiceAutoScalerResponseBodyCurrentMetrics[];
  /**
   * @remarks
   * The maximum number of instances in the service.
   * 
   * @example
   * 8
   */
  maxReplica?: number;
  /**
   * @remarks
   * The minimum number of instances in the service.
   * 
   * @example
   * 3
   */
  minReplica?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The auto scaling policies.
   */
  scaleStrategies?: DescribeServiceAutoScalerResponseBodyScaleStrategies[];
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * foo
   */
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
  /**
   * @remarks
   * The points in time that are excluded when you schedule a CronHPA job. The points in time must be specified by using a cron expression.
   */
  excludeDates?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The CronHPA jobs.
   */
  scaleJobs?: DescribeServiceCronScalerResponseBodyScaleJobs[];
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * foo
   */
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
  /**
   * @remarks
   * The diagnostics list.
   */
  diagnosisList?: DescribeServiceDiagnosisResponseBodyDiagnosisList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
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
  /**
   * @remarks
   * The end of the time range to query. By default, the current point in time is the end of the time range to query.
   * 
   * @example
   * 2006-01-02 15:04:05
   */
  endTime?: string;
  /**
   * @remarks
   * The event type. Valid values:
   * 
   * *   Normal
   * *   Warning
   * 
   * @example
   * Normal
   */
  eventType?: string;
  /**
   * @remarks
   * The instance name. For more information about how to obtain the instance name, see [ListServiceInstances](https://help.aliyun.com/document_detail/412108.html).
   * 
   * @example
   * echo-test-784xxxx85d-hhnd8
   */
  instanceName?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The time must be in UTC. The default value is seven days ago.
   * 
   * @example
   * 2006-01-02 15:04:05
   */
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
  /**
   * @remarks
   * The events.
   */
  events?: DescribeServiceEventResponseBodyEvents[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3D491C94-6239-5318-B4B4-799D859***
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 29
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 12
   */
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
  /**
   * @remarks
   * The diagnostics information.
   */
  diagnosis?: DescribeServiceInstanceDiagnosisResponseBodyDiagnosis;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82***
   */
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
  /**
   * @remarks
   * The name of the container that runs the service.
   * 
   * @example
   * worker0
   */
  containerName?: string;
  /**
   * @remarks
   * The end of the time range to query. The time must be in UTC.
   * 
   * @example
   * 2006-01-02 15:04:05
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the instance that runs the service. For more information about how to query the instance name, see [ListServiceInstances](https://help.aliyun.com/document_detail/412108.html).
   * 
   * @example
   * echo-da290ac8-7fckm
   */
  instanceName?: string;
  /**
   * @remarks
   * The IP address of the instance whose logs you want to query. For more information about how to query the IP address of an instance, see [ListServiceInstances](https://help.aliyun.com/document_detail/412108.html).
   * 
   * @example
   * 10.0.0.1
   */
  ip?: string;
  /**
   * @remarks
   * The keyword that you use to query the logs of the service.
   * 
   * @example
   * key
   */
  keyword?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 500.
   * 
   * @example
   * 500
   */
  pageSize?: number;
  /**
   * @remarks
   * Specifies whether to query the logs that are generated before the instance last restarts. This parameter is available only if the instance restarts.
   * 
   * Valid values:
   * 
   * *   true
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   false
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * true
   */
  previous?: boolean;
  /**
   * @remarks
   * The beginning of the time range to query. The time must be in Coordinated Universal Time (UTC).
   * 
   * @example
   * 2006-01-02 15:04:05
   */
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
  /**
   * @remarks
   * The returned logs.
   */
  logs?: string[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82********
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 500
   */
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
  /**
   * @remarks
   * The percentage of traffic that you want to mirror. Valid values: 0 to 100.
   * 
   * @example
   * 50
   */
  ratio?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * foo
   */
  serviceName?: string;
  /**
   * @remarks
   * The destination services to which you want to mirror traffic.
   * 
   * @example
   * foo2,foo3
   */
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

export class DescribeSpotDiscountHistoryRequest extends $tea.Model {
  /**
   * @remarks
   * The type of the Elastic Algorithm Service (EAS) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ecs.c6.4xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * Specifies whether the preemptible instance has a protection period. During the 1-hour protection period of the preemptible instance, the preemptible instance will not be released.
   * 
   * @example
   * false
   */
  isProtect?: boolean;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      isProtect: 'IsProtect',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      isProtect: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSpotDiscountHistoryResponseBody extends $tea.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82***
   */
  requestId?: string;
  /**
   * @remarks
   * The discount for the preemptible instance.
   */
  spotDiscounts?: DescribeSpotDiscountHistoryResponseBodySpotDiscounts[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      spotDiscounts: 'SpotDiscounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      spotDiscounts: { 'type': 'array', 'itemType': DescribeSpotDiscountHistoryResponseBodySpotDiscounts },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSpotDiscountHistoryResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DescribeSpotDiscountHistoryResponseBody;
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
      body: DescribeSpotDiscountHistoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DevelopServiceRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to exit development mode. Valid values:
   * 
   * *   true: exits development mode.
   * *   false (default): enters development mode.
   * 
   * @example
   * true
   */
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
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
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

export class ListAclPolicyRequest extends $tea.Model {
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC). For more information about how to obtain the VPC ID, see DescribeVpcs.
   * 
   * @example
   * vpc-uf66uio7md****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAclPolicyResponseBody extends $tea.Model {
  /**
   * @remarks
   * The private gateway ID.
   * 
   * @example
   * gw-1uhcqmsc7x22******
   */
  gatewayId?: string;
  /**
   * @remarks
   * The access control policies of the private gateway over the Internet.
   */
  internetAclPolicyList?: ListAclPolicyResponseBodyInternetAclPolicyList[];
  /**
   * @remarks
   * The access control policies of the private gateway over the internal network.
   */
  intranetVpcAclPolicyList?: ListAclPolicyResponseBodyIntranetVpcAclPolicyList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      internetAclPolicyList: 'InternetAclPolicyList',
      intranetVpcAclPolicyList: 'IntranetVpcAclPolicyList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      internetAclPolicyList: { 'type': 'array', 'itemType': ListAclPolicyResponseBodyInternetAclPolicyList },
      intranetVpcAclPolicyList: { 'type': 'array', 'itemType': ListAclPolicyResponseBodyIntranetVpcAclPolicyList },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAclPolicyResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAclPolicyResponseBody;
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
      body: ListAclPolicyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBenchmarkTaskRequest extends $tea.Model {
  /**
   * @remarks
   * The keyword used to query required stress testing tasks. If this parameter is specified, the system returns stress testing tasks based on the names of the stress testing tasks in the matched Elastic Algorithm Service (EAS).
   * 
   * @example
   * test_bench
   */
  filter?: string;
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
   * The number of entries per page. Default value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * The name of the EAS service that corresponds to the stress testing task. For more information about how to query the service name, see [ListServices](https://help.aliyun.com/document_detail/412109.html).
   * 
   * @example
   * test_bench_srv
   */
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
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The stress testing tasks.
   */
  tasks?: ListBenchmarkTaskResponseBodyTasks[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
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

export class ListGatewayRequest extends $tea.Model {
  /**
   * @remarks
   * The private gateway ID. To obtain the private gateway ID, see the private_gateway_id parameter in the response parameters of the ListResources operation.
   * 
   * @example
   * gw-1uhcqmsc7x22******
   */
  gatewayId?: string;
  /**
   * @remarks
   * The private gateway alias.
   * 
   * @example
   * mygateway1
   */
  gatewayName?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 100.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'GatewayId',
      gatewayName: 'GatewayName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      gatewayName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayResponseBody extends $tea.Model {
  /**
   * @remarks
   * The private gateways.
   */
  gateways?: ListGatewayResponseBodyGateways[];
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
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of private gateways returned.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      gateways: 'Gateways',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gateways: { 'type': 'array', 'itemType': ListGatewayResponseBodyGateways },
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

export class ListGatewayResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListGatewayResponseBody;
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
      body: ListGatewayResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayIntranetLinkedVpcResponseBody extends $tea.Model {
  /**
   * @remarks
   * The private gateway ID.
   * 
   * @example
   * gw-1uhcqmsc7x22******
   */
  gatewayId?: string;
  /**
   * @remarks
   * The internal endpoints.
   */
  intranetLinkedVpcList?: ListGatewayIntranetLinkedVpcResponseBodyIntranetLinkedVpcList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
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
  /**
   * @remarks
   * The name of the filter that is used to filter out unwanted service groups. Fuzzy match is supported.
   * 
   * @example
   * foo
   */
  filter?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 123***
   */
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
  /**
   * @remarks
   * The service groups.
   */
  groups?: Group[];
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
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 5
   */
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
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 100.
   * 
   * @example
   * 20
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

export class ListResourceInstanceWorkerResponseBody extends $tea.Model {
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
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The workers.
   */
  pods?: ResourceInstanceWorker[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The billing method of the instance. Valid values:
   * 
   * *   PrePaid: subscription.
   * *   PostPaid: pay-as-you-go.
   * 
   * @example
   * PrePaid
   */
  chargeType?: string;
  /**
   * @remarks
   * The keyword used to query instances. Instances can be queried by instance ID or instance IP address.
   * 
   * @example
   * 10.224.xx.xx
   */
  filter?: string;
  /**
   * @remarks
   * The IP address of the instance.
   * 
   * @example
   * 10.224.xx.xx
   */
  instanceIP?: string;
  /**
   * @remarks
   * The instance ID. For more information about how to query the instance ID, see [ListResourceInstances](https://help.aliyun.com/document_detail/412129.html).
   * 
   * @example
   * i-bp1jd6x3uotsv****
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * e-xxxx***
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance state.
   * 
   * Valid values:
   * 
   * *   Ready-SchedulingDisabled
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     The instance is available but unschedulable
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   Ready
   * 
   *     <!-- -->
   * 
   *     : The instance
   * 
   *     <!-- -->
   * 
   *     is running
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   NotReady
   * 
   *     <!-- -->
   * 
   *     : The instance is unready.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Stopped
   * 
   *     <!-- -->
   * 
   *     : The instance has stopped.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   NotReady-SchedulingDisabled
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     The instance is unavailable and unschedulable
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   Attaching
   * 
   *     <!-- -->
   * 
   *     : The instance
   * 
   *     <!-- -->
   * 
   *     is starting
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   Deleting
   * 
   *     <!-- -->
   * 
   *     : The instance is being deleted.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   CreateFailed: The instance failed to be created.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * Ready
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The sorting order.
   * 
   * Valid values:
   * 
   * *   asc: The instances are sorted in ascending order.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   desc
   * 
   *     <!-- -->
   * 
   *     : The instances are sorted in descending order.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The field that you use to sort the query results.
   * 
   * Valid values:
   * 
   * *   CreateTime
   * 
   *     <!-- -->
   * 
   *     : The instances are sorted based on the time when the instances were created.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   MemoryUsed
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     The instances are sorted based on the memory usage of the instances
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   GpuUsed
   * 
   *     <!-- -->
   * 
   *     : The instances are sorted based on the
   * 
   *     <!-- -->
   * 
   *     GPU usage of the instances.
   * 
   *     <!-- -->
   * 
   * *   ExpireTime: The instances are sorted based on the time when the instances expired.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   CpuUsed
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     The instances are sorted based on the CPU utilization of the instances.
   * 
   *     <!-- -->
   * 
   * @example
   * CreateTime
   */
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
  /**
   * @remarks
   * The instances.
   */
  instances?: ResourceInstance[];
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
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
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
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 100.
   * 
   * @example
   * 20
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

export class ListResourceServicesResponseBody extends $tea.Model {
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
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The services.
   */
  services?: Service[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
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
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource group. You can call the [CreateResource](https://help.aliyun.com/document_detail/412111.html) operation to query the ID of the resource group.
   * 
   * @example
   * eas-r-h7lcw24dyqztwxxxxxx
   */
  resourceId?: string;
  /**
   * @remarks
   * The name of the resource group. You can call the [CreateResource](https://help.aliyun.com/document_detail/412111.html) operation to query the name of the resource group.
   * 
   * @example
   * MyResource
   */
  resourceName?: string;
  /**
   * @remarks
   * The type of the resource group. Valid values:
   * 
   * *   Dedicated: the dedicated resource group.
   * *   SelfManaged: the self-managed resource group.
   * 
   * @example
   * Dedicated
   */
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
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The resource groups.
   */
  resources?: Resource[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The containers of the service.
   */
  containers?: ContainerInfo[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * foo
   */
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
  /**
   * @remarks
   * The keyword used to query instances. Instances can be queried based on instance name, instance IP address, IP address of the server where the instance resides, and instance type.
   * 
   * @example
   * 10.118.xx.xx
   */
  filter?: string;
  /**
   * @remarks
   * The IP address of the server where the instance resides.
   * 
   * @example
   * 10.224.xx.xx
   */
  hostIP?: string;
  /**
   * @remarks
   * The IP address of the instance.
   * 
   * @example
   * 10.224.xx.xx
   */
  instanceIP?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * foo-bdc5xxxx-8l7rk
   */
  instanceName?: string;
  /**
   * @remarks
   * The instance state.
   * 
   * @example
   * Running
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * ecs.c7.large
   */
  instanceType?: string;
  /**
   * @remarks
   * Specifies whether the instance is a preemptible instance.
   * 
   * @example
   * false
   */
  isSpot?: boolean;
  /**
   * @remarks
   * The sorting order.
   * 
   * Valid values:
   * 
   * *   asc
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     The instances are sorted in ascending order.
   * 
   * *   desc
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     The instances are sorted in descending order.
   * 
   * @example
   * desc
   */
  order?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of the resource group to which the instance belongs.
   * 
   * Valid values:
   * 
   * *   PublicResource
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   DedicatedResource
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * PublicResource
   */
  resourceType?: string;
  /**
   * @remarks
   * The service role.
   * 
   * Valid values:
   * 
   * *   DataSet
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     dataset service
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   SDProxy
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     Stable-Diffusion proxy service
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   Standard
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     standard service
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * *   Queue
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     queue service
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * @example
   * Queue
   */
  role?: string;
  /**
   * @remarks
   * The field that you use to sort the query results.
   * 
   * *   Set the value to StartTime.
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     The value specifies that the query results are sorted based on the time when the instances were created
   * 
   *     <!-- -->
   * 
   *     .
   * 
   * @example
   * StartTime
   */
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
  /**
   * @remarks
   * The instances.
   */
  instances?: Instance[];
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
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 100.
   * 
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

export class ListServiceVersionsResponseBody extends $tea.Model {
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
   * E089D584-B6F4-50C4-9902-DA2295B7****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 166
   */
  totalCount?: number;
  /**
   * @remarks
   * The historical versions of the service.
   */
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
  /**
   * @remarks
   * The field that is used for fuzzy matches. The system performs fuzzy matches only by service name.
   * 
   * @example
   * foo
   */
  filter?: string;
  /**
   * @remarks
   * The ID of the private gateway.
   * 
   * @example
   * gw-1uhcqmsc7x22******
   */
  gateway?: string;
  /**
   * @remarks
   * The name of the service group. For more information about how to query the name of a service group, see [ListServices](https://help.aliyun.com/document_detail/412109.html).
   * 
   * @example
   * foo
   */
  groupName?: string;
  /**
   * @remarks
   * The tag that is used to filter services.
   */
  label?: { [key: string]: string };
  /**
   * @remarks
   * The sorting order. Valid values:
   * 
   * *   desc (default): The query results are sorted in descending order.
   * *   asc: The query results are sorted in ascending order.
   * 
   * @example
   * asc
   */
  order?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 100.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the primary service that corresponds to the Band member service.
   * 
   * @example
   * eas-m-ijafy3c8cxxxx
   */
  parentServiceUid?: string;
  /**
   * @remarks
   * The quota ID.
   * 
   * @example
   * quota12345
   */
  quotaId?: string;
  /**
   * @remarks
   * The name or ID of the resource group to which the service belongs.
   * 
   * @example
   * eas-r-hd0qwy8cxxxx
   */
  resourceName?: string;
  role?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * echo_test
   */
  serviceName?: string;
  /**
   * @remarks
   * The service state.
   * 
   * Valid values:
   * 
   * *   Creating
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Stopped
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Failed
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Complete
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Cloning
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Stopping
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Updating
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Waiting
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   HotUpdate
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Committing
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Starting
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   DeleteFailed
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Running
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Developing
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Scaling
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Deleted
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Pending
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Deleting
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * Running
   */
  serviceStatus?: string;
  /**
   * @remarks
   * The service type. Valid values:
   * 
   * *   Async
   * *   Standard
   * *   Offline Task
   * *   Proxima
   * 
   * Valid values:
   * 
   * *   Async
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Standard
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   OfflineTask
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Proxima
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * Standard
   */
  serviceType?: string;
  /**
   * @remarks
   * The user ID (UID) of the service.
   * 
   * @example
   * eas-m-c9iw3yitxxxx
   */
  serviceUid?: string;
  /**
   * @remarks
   * The sort field. By default, the query results are sorted by the timestamp type in descending order.
   * 
   * @example
   * CreateTime
   */
  sort?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 123456
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      gateway: 'Gateway',
      groupName: 'GroupName',
      label: 'Label',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      parentServiceUid: 'ParentServiceUid',
      quotaId: 'QuotaId',
      resourceName: 'ResourceName',
      role: 'Role',
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
      gateway: 'string',
      groupName: 'string',
      label: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      parentServiceUid: 'string',
      quotaId: 'string',
      resourceName: 'string',
      role: 'string',
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
  /**
   * @remarks
   * The field that is used for fuzzy matches. The system performs fuzzy matches only by service name.
   * 
   * @example
   * foo
   */
  filter?: string;
  /**
   * @remarks
   * The ID of the private gateway.
   * 
   * @example
   * gw-1uhcqmsc7x22******
   */
  gateway?: string;
  /**
   * @remarks
   * The name of the service group. For more information about how to query the name of a service group, see [ListServices](https://help.aliyun.com/document_detail/412109.html).
   * 
   * @example
   * foo
   */
  groupName?: string;
  /**
   * @remarks
   * The tag that is used to filter services.
   */
  labelShrink?: string;
  /**
   * @remarks
   * The sorting order. Valid values:
   * 
   * *   desc (default): The query results are sorted in descending order.
   * *   asc: The query results are sorted in ascending order.
   * 
   * @example
   * asc
   */
  order?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 100.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the primary service that corresponds to the Band member service.
   * 
   * @example
   * eas-m-ijafy3c8cxxxx
   */
  parentServiceUid?: string;
  /**
   * @remarks
   * The quota ID.
   * 
   * @example
   * quota12345
   */
  quotaId?: string;
  /**
   * @remarks
   * The name or ID of the resource group to which the service belongs.
   * 
   * @example
   * eas-r-hd0qwy8cxxxx
   */
  resourceName?: string;
  role?: string;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * echo_test
   */
  serviceName?: string;
  /**
   * @remarks
   * The service state.
   * 
   * Valid values:
   * 
   * *   Creating
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Stopped
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Failed
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Complete
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Cloning
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Stopping
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Updating
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Waiting
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   HotUpdate
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Committing
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Starting
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   DeleteFailed
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Running
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Developing
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Scaling
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Deleted
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Pending
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Deleting
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * Running
   */
  serviceStatus?: string;
  /**
   * @remarks
   * The service type. Valid values:
   * 
   * *   Async
   * *   Standard
   * *   Offline Task
   * *   Proxima
   * 
   * Valid values:
   * 
   * *   Async
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Standard
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   OfflineTask
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Proxima
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * Standard
   */
  serviceType?: string;
  /**
   * @remarks
   * The user ID (UID) of the service.
   * 
   * @example
   * eas-m-c9iw3yitxxxx
   */
  serviceUid?: string;
  /**
   * @remarks
   * The sort field. By default, the query results are sorted by the timestamp type in descending order.
   * 
   * @example
   * CreateTime
   */
  sort?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 123456
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      gateway: 'Gateway',
      groupName: 'GroupName',
      labelShrink: 'Label',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      parentServiceUid: 'ParentServiceUid',
      quotaId: 'QuotaId',
      resourceName: 'ResourceName',
      role: 'Role',
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
      gateway: 'string',
      groupName: 'string',
      labelShrink: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      parentServiceUid: 'string',
      quotaId: 'string',
      resourceName: 'string',
      role: 'string',
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
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The services.
   */
  services?: Service[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
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

export class ListTenantAddonsResponseBody extends $tea.Model {
  /**
   * @remarks
   * The information about the plug-in.
   */
  addons?: ListTenantAddonsResponseBodyAddons[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      addons: 'Addons',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addons: { 'type': 'array', 'itemType': ListTenantAddonsResponseBodyAddons },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTenantAddonsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTenantAddonsResponseBody;
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
      body: ListTenantAddonsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReinstallTenantAddonResponseBody extends $tea.Model {
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Addon prometheus_discovery is successfully reinstalled
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
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

export class ReinstallTenantAddonResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ReinstallTenantAddonResponseBody;
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
      body: ReinstallTenantAddonResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseServiceRequest extends $tea.Model {
  /**
   * @remarks
   * The traffic state. Valid values:
   * 
   * *   standalone: independent traffic.
   * *   grouping: grouped traffic.
   * 
   * @example
   * grouping
   */
  trafficState?: string;
  /**
   * @remarks
   * The weight of the canary release. Valid values: 0 to 100.
   * 
   * @example
   * 100
   */
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
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Releasing service [foo] in region [cn-shanghai] with weight [40], service status: [Running]
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
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
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Service is restarting
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
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
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Benchmark task [benchmark-larec-test-1076] is Starting
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
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
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Service [foo] in region [cn-shanghai] is starting
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
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
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Benchmark task [benchmark-larec-test-1076] is Stopping
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
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
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Succeed to auto scale service [foo]
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
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
  /**
   * @remarks
   * The quota ID.
   * 
   * @example
   * abcdef
   */
  quotaId?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 123456
   */
  workspaceId?: string;
  /**
   * @remarks
   * The application type.
   * 
   * Valid values:
   * 
   * *   LLM: the large language model (LLM) application
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * LLM
   */
  appType?: string;
  /**
   * @remarks
   * The application version.
   * 
   * @example
   * v1
   */
  appVersion?: string;
  /**
   * @remarks
   * The additional configurations that are required for service deployment.
   */
  config?: { [key: string]: any };
  /**
   * @remarks
   * The number of instances. This value must be greater than 0.
   * 
   * @example
   * 1
   */
  replicas?: number;
  /**
   * @remarks
   * The service specifications. Valid values:
   * 
   * *   llama_7b_fp16
   * *   llama_7b_int8
   * *   llama_13b_fp16
   * *   llama_7b_int8
   * *   chatglm_6b_fp16
   * *   chatglm_6b_int8
   * *   chatglm2_6b_fp16
   * *   baichuan_7b_int8
   * *   baichuan_13b_fp16
   * *   baichuan_7b_fp16
   * 
   * @example
   * llama_7b_fp16
   */
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
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Succee
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
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
  /**
   * @remarks
   * The request body. The body includes the parameters that are set to create a stress testing task. For more information, see **Table 1. Fields in the base parameter**.
   * 
   * @example
   * {
   *     "base":  {
   *          "qps": 200
   *     }
   * }
   */
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
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Benchmark task [benchmark-larec-test-1076] is Updating
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82***
   */
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
  /**
   * @remarks
   * Specifies whether to enable Internet access. Default value: false.
   * 
   * Valid values:
   * 
   * *   true
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   false
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * false
   */
  enableInternet?: boolean;
  /**
   * @remarks
   * Specifies whether to enable internal network access. Default value: true.
   * 
   * @example
   * true
   */
  enableIntranet?: boolean;
  /**
   * @remarks
   * The instance type used for the private gateway.
   * 
   * @example
   * ecs.c6.4xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * Indicates whether it is the default private gateway.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The private gateway alias.
   * 
   * @example
   * mygateway1
   */
  name?: string;
  /**
   * @remarks
   * The number of nodes in the private gateway.
   * 
   * @example
   * 2
   */
  replicas?: number;
  static names(): { [key: string]: string } {
    return {
      enableInternet: 'EnableInternet',
      enableIntranet: 'EnableIntranet',
      instanceType: 'InstanceType',
      isDefault: 'IsDefault',
      name: 'Name',
      replicas: 'Replicas',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableInternet: 'boolean',
      enableIntranet: 'boolean',
      instanceType: 'string',
      isDefault: 'boolean',
      name: 'string',
      replicas: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateGatewayResponseBody extends $tea.Model {
  /**
   * @remarks
   * The ID of the gateway.
   * 
   * @example
   * gw-1uhcqmsc7x22******
   */
  gatewayId?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Gateway is updated
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 40325405-579C-4D82***
   */
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
  /**
   * @remarks
   * The new name of the resource group after the update. The name can be up to 27 characters in length.
   * 
   * @example
   * iot
   */
  resourceName?: string;
  /**
   * @remarks
   * The configuration items of the self-managed resource group.
   */
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
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * eas-r-asdasdasd
   */
  resourceId?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * iot
   */
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
  /**
   * @remarks
   * The CIDR blocks of the clients that you want to connect to. After this parameter is specified, the CIDR blocks are added to the back-to-origin route of the server. Either this parameter or the VSwitchIdList parameter can be used to determine CIDR blocks.
   * 
   * @example
   * 72.16.0.0/16
   */
  destinationCIDRs?: string;
  /**
   * @remarks
   * The ID of the security group to which the Elastic Compute Service (ECS) instance belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * sg-bp149cedsfx2rfspd2d
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The ID of the peer primary vSwitch. After this parameter is specified, an elastic network interface (ENI) is created in the VSwitch.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-uf66uio7md****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The vSwitches of the clients that you want to connect to. After this parameter is specified, the CIDR blocks of these vSwitches are added to the back-to-origin route of the server.
   */
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
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Network interfaces are updating
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
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
  /**
   * @remarks
   * The operation that updates the scheduling state of the instance in a dedicated resource group. Valid values:
   * 
   * *   Uncordon: allows scheduling the service to this instance.
   * *   Cordon: prohibits scheduling the service to this instance.
   * *   Drain: evicts the service that has been scheduled to this instance.
   * 
   * This parameter is required.
   * 
   * @example
   * Cordon
   */
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
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * eas-i-asdasdasd
   */
  instanceId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * eas-r-asdasdasd
   */
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
  /**
   * @remarks
   * The type of the service update. Valid values: merge and replace. By default, merge is used if you do not specify this parameter.
   * 
   * *   merge: If the JSON string configured for the existing service is `{"a":"b"}` and the JSON string specified in the body parameter is `{"c":"d"}`, the JSON string is `{"a":"b","c":"d"}` after the service update.
   * *   replace: If the JSON string configured for the existing service is `{"a":"b"}` and the JSON string specified in the body parameter is `{"c":"d"}`, the JSON string is `{"c":"d"}` after the service update.
   * 
   * @example
   * merge
   */
  updateType?: string;
  /**
   * @remarks
   * The request body. The body includes the request parameters that you want to update. For more information about the request parameters, see [CreateService](https://help.aliyun.com/document_detail/412086.html).
   * 
   * @example
   * {   "name": "foo",   "model_path": "http://path/to/model.tar.gz",   "processor": "tensorflow_cpu",   "metadata": {     "instance": 2,     "memory": 7000,     "cpu": 4   } }
   */
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
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Succeed to update service [foo] in region [cn-shanghai]
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
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
  /**
   * @remarks
   * The Autoscaler operation.
   */
  behavior?: UpdateServiceAutoScalerRequestBehavior;
  /**
   * @remarks
   * The maximum number of instances. The value must be greater than that of the min parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 8
   */
  max?: number;
  /**
   * @remarks
   * The minimum number of instances. The value must be greater than 0.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  min?: number;
  /**
   * @remarks
   * The auto scaling policies.
   * 
   * This parameter is required.
   */
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
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Update auto scale for service [foo] successfully
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
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
  /**
   * @remarks
   * The points in time that are excluded when you schedule a CronHPA job. The points in time must be specified by using a cron expression.
   */
  excludeDates?: string[];
  /**
   * @remarks
   * The description of the CronHPA job.
   * 
   * This parameter is required.
   */
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
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Update cron scaler for service [foo] successfully
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
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
  /**
   * @remarks
   * Specifies whether to isolate the service instance. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
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
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
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
  /**
   * @remarks
   * The custom service tags.
   * 
   * This parameter is required.
   */
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
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Succeed to update service [service_from_XXXX] labels.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
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
  /**
   * @remarks
   * The percentage of traffic that you want to mirror. Valid values: 0 to 100.
   * 
   * @example
   * 30
   */
  ratio?: number;
  /**
   * @remarks
   * The service instances.
   */
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
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Traffic mirroring is updating for service [foo] in region [cn-shanghia], ratio [70%]
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82***
   */
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
  /**
   * @remarks
   * The lock scope. Valid values:
   * 
   * *   all: locks all operations.
   * *   dangerous: locks dangerous operations such as delete and stop operations.
   * *   none: locks no operations.
   * 
   * This parameter is required.
   * 
   * @example
   * dangerous
   */
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
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * service safety lock updated to dangerous
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E089D584-B6F4-50C4-9902-DA2295B7****
   */
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
  /**
   * @remarks
   * The destination version of the service. The value must be of the INT type. The value must be greater than 0 and smaller than the current version of the service.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Service [foo] in region [cn-shanghai] is starting
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
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

export class CreateAclPolicyRequestAclPolicyList extends $tea.Model {
  /**
   * @remarks
   * The comment on the IP CIDR block in the VPC that can access the private gateway.
   * 
   * @example
   * default
   */
  comment?: string;
  /**
   * @remarks
   * The IP CIDR block in the VPC that can access the private gateway.
   * 
   * @example
   * 10.23.XX.XX/32
   */
  entry?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      entry: 'Entry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      entry: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceRequestSelfManagedResourceOptionsNodeTolerations extends $tea.Model {
  /**
   * @remarks
   * The result.
   * 
   * Valid values:
   * 
   * *   PreferNoSchedule
   * *   NoSchedule
   * *   NoExecute
   * 
   * @example
   * NoSchedule
   */
  effect?: string;
  /**
   * @remarks
   * The key name.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The relationship between key names and key values.
   * 
   * Valid values:
   * 
   * *   Equal
   * *   Exists
   * 
   * @example
   * Equal
   */
  operator?: string;
  /**
   * @remarks
   * The key value.
   * 
   * @example
   * value1
   */
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
  /**
   * @remarks
   * The ID of the self-managed cluster.
   * 
   * @example
   * cf0386f250f2545689ca7fdd1cd******
   */
  externalClusterId?: string;
  /**
   * @remarks
   * The tag key-value pairs for nodes.
   */
  nodeMatchLabels?: { [key: string]: string };
  /**
   * @remarks
   * Tolerations for nodes.
   */
  nodeTolerations?: CreateResourceRequestSelfManagedResourceOptionsNodeTolerations[];
  /**
   * @remarks
   * The name of the RAM user to which the permissions on Elastic Algorithm Service of Platform for AI (PAI-EAS) are granted.
   * 
   * @example
   * clusterrole
   */
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
  /**
   * @remarks
   * The time window that is required before the number of instances is reduced to 0. The number of instances can be reduced to 0 only if no request is available or no traffic exists in the specified time window. Default value: 600.
   * 
   * @example
   * 600
   */
  scaleDownGracePeriodSeconds?: number;
  /**
   * @remarks
   * The number of instances that you want to create at a time if the number of instances is 0. Default value: 1.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The time window that is required before the scale-in operation is performed. The scale-in operation can be performed only if the specified metric drops below the specified threshold in the specified time window. Default value: 300.
   * 
   * @example
   * 300
   */
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
  /**
   * @remarks
   * The time window that is required before the scale-out operation is performed. The scale-out operation can be performed only if the specified metric exceeds the specified threshold in the specified time window. Default value: 0.
   * 
   * @example
   * 0
   */
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
  /**
   * @remarks
   * The operation that reduces the number of instances to 0.
   */
  onZero?: CreateServiceAutoScalerRequestBehaviorOnZero;
  /**
   * @remarks
   * The scale-in operation.
   */
  scaleDown?: CreateServiceAutoScalerRequestBehaviorScaleDown;
  /**
   * @remarks
   * The scale-out operation.
   */
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
  /**
   * @remarks
   * The name of the metric for triggering auto scaling. Valid values:
   * 
   * *   qps: the queries per second (qps) for an individual instance.
   * *   cpu: the cpu utilization.
   * * gpu[util]: gpu utilization.
   * 
   * This parameter is required.
   * 
   * @example
   * qps
   */
  metricName?: string;
  /**
   * @remarks
   * The service for which the metric is specified. If you do not set this parameter, the current service is specified by default.
   * 
   * @example
   * demo_svc
   */
  service?: string;
  /**
   * @remarks
   * The threshold of the metric that triggers auto scaling.
   * 
   * *   If you set metricName to qps, scale-out is triggered when the average qps for a single instance is greater than this threshold.
   * *   If you set metricName to cpu, scale-out is triggered when the average cpu utilization for a single instance is greater than this threshold.
   * *   If you set metricName to gpu, scale-out is triggered when the average cpu utilization for a single instance is greater than this threshold.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
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
  /**
   * @remarks
   * The name of the CronHPA job.
   * 
   * @example
   * scale-job-1
   */
  name?: string;
  /**
   * @remarks
   * The cron expression that is used to configure the execution time of the CronHPA job. For more information about how to configure cron expressions, see **Description of special characters** in this topic.
   * 
   * This parameter is required.
   * 
   * @example
   * 0 18 * * * *
   */
  schedule?: string;
  /**
   * @remarks
   * The number of instances that you want to configure for the CronHPA job.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
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

export class DeleteAclPolicyRequestAclPolicyList extends $tea.Model {
  /**
   * @remarks
   * The comment on the IP CIDR block in the VPC that can access the private gateway.
   * 
   * @example
   * default
   */
  comment?: string;
  /**
   * @remarks
   * The IP CIDR block in the VPC that can access the private gateway.
   * 
   * @example
   * 10.23.XX.XX/32
   */
  entry?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      entry: 'Entry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      entry: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeServiceAutoScalerResponseBodyCurrentMetrics extends $tea.Model {
  /**
   * @remarks
   * The metric name. Valid values:
   * 
   * *   QPS
   * *   CPU
   * 
   * @example
   * qps
   */
  metricName?: string;
  /**
   * @remarks
   * The service for which the metric is specified.
   * 
   * @example
   * demo_svc
   */
  service?: string;
  /**
   * @remarks
   * The metric value.
   * 
   * @example
   * 10
   */
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
  /**
   * @remarks
   * The metric name. Valid values:
   * 
   * *   QPS: the queries per second (QPS) for an individual instance.
   * *   CPU: the CPU utilization.
   * 
   * @example
   * QPS
   */
  metricName?: string;
  /**
   * @remarks
   * The service for which the metric is specified. If you do not set this parameter, the current service is specified by default.
   * 
   * @example
   * demo_svc
   */
  service?: string;
  /**
   * @remarks
   * The threshold of the metric that triggers auto scaling.
   * 
   * *   If you set metricName to QPS, scale-out is triggered when the average QPS for a single instance is greater than this threshold.
   * *   If you set metricName to CPU, scale-out is triggered when the average CPU utilization for a single instance is greater than this threshold.
   * 
   * @example
   * 10
   */
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
  /**
   * @remarks
   * The time when the most recent CronHPA job was created. The time is displayed in UTC.
   * 
   * @example
   * 2020-06-24T02:11:30Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the most recent CronHPA job ran. The time is displayed in UTC.
   * 
   * @example
   * 2022-02-24T06:31:00Z
   */
  lastProbeTime?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * "cron hpa job scale-jobs-0 executed successfully. current replicas:3, desired replicas:2."
   */
  message?: string;
  /**
   * @remarks
   * The name of the CronHPA job.
   * 
   * @example
   * scale-job-1
   */
  name?: string;
  /**
   * @remarks
   * The cron expression that is used to configure the execution time of the CronHPA job.
   * 
   * @example
   * 0 18 * * * *
   */
  schedule?: string;
  /**
   * @remarks
   * The status of the most recent CronHPA job.
   * 
   * @example
   * Succeed
   */
  state?: string;
  /**
   * @remarks
   * The number of instances that you expect to configure for the CronHPA job.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The suggestions about how to handle the errors.
   */
  advices?: string[];
  /**
   * @remarks
   * The causes of the errors.
   */
  causes?: string[];
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Container worker0 failed to pull image.
   */
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
  /**
   * @remarks
   * The returned message. The message is formatted and returned in the JSON format.
   * 
   * @example
   * {\\"versionId\\":1,\\"message\\":\\"Stage scale complete\\",\\"availableInstance\\":1,\\"unavailableInstance\\":0}
   */
  message?: string;
  /**
   * @remarks
   * The cause of the event. The information about the change in the service status is returned.
   * 
   * @example
   * Updating
   */
  reason?: string;
  /**
   * @remarks
   * The time when the event occurred. The time must be in UTC.
   * 
   * @example
   * 2022-04-09 06:30:00
   */
  time?: string;
  /**
   * @remarks
   * The event type. Valid values:
   * 
   * *   Normal
   * *   Warning
   * 
   * @example
   * Normal
   */
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
  /**
   * @remarks
   * The solutions to the errors.
   */
  advices?: string[];
  /**
   * @remarks
   * The causes of the errors.
   */
  causes?: string[];
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Container worker0 failed to pull image.
   */
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

export class DescribeSpotDiscountHistoryResponseBodySpotDiscounts extends $tea.Model {
  /**
   * @remarks
   * The type of the ECS instance.
   * 
   * @example
   * ecs.c7.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The discount for the preemptible instance. For example, 0.1 represents a 90% discount.
   * 
   * @example
   * 0.1
   */
  spotDiscount?: string;
  /**
   * @remarks
   * The time when the discount is available. The time must be in UTC.
   * 
   * @example
   * 2024-04-10T10:00:00Z
   */
  timestamp?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceType: 'InstanceType',
      spotDiscount: 'SpotDiscount',
      timestamp: 'Timestamp',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceType: 'string',
      spotDiscount: 'string',
      timestamp: 'string',
      zoneId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAclPolicyResponseBodyInternetAclPolicyListAclPolicyList extends $tea.Model {
  /**
   * @remarks
   * The comment on the IP CIDR block in the VPC that can access the private gateway over the Internet.
   * 
   * @example
   * default
   */
  comment?: string;
  /**
   * @remarks
   * The IP CIDR block in the VPC that can access the private gateway over the Internet.
   * 
   * @example
   * 10.23.XX.XX/32
   */
  entry?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      entry: 'Entry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      entry: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAclPolicyResponseBodyInternetAclPolicyList extends $tea.Model {
  /**
   * @remarks
   * The whitelisted IP CIDR blocks in the VPC that can access the private gateway over the Internet.
   */
  aclPolicyList?: ListAclPolicyResponseBodyInternetAclPolicyListAclPolicyList[];
  static names(): { [key: string]: string } {
    return {
      aclPolicyList: 'AclPolicyList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclPolicyList: { 'type': 'array', 'itemType': ListAclPolicyResponseBodyInternetAclPolicyListAclPolicyList },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAclPolicyResponseBodyIntranetVpcAclPolicyListAclPolicyList extends $tea.Model {
  /**
   * @remarks
   * The comment on the IP CIDR block in the VPC that can access the private gateway over the internal network.
   * 
   * @example
   * Test Entry
   */
  comment?: string;
  /**
   * @remarks
   * The IP CIDR block in the VPC that can access the private gateway over the internal network.
   * 
   * @example
   * 192.168.XX.XX/24
   */
  entry?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      entry: 'Entry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      entry: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAclPolicyResponseBodyIntranetVpcAclPolicyList extends $tea.Model {
  /**
   * @remarks
   * The whitelisted IP CIDR blocks in the VPC that can access the private gateway over the internal network.
   */
  aclPolicyList?: ListAclPolicyResponseBodyIntranetVpcAclPolicyListAclPolicyList[];
  /**
   * @remarks
   * The VPC ID. For more information about how to obtain the VPC ID, see DescribeVpcs.
   * 
   * @example
   * vpc-uf66uio7md****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      aclPolicyList: 'AclPolicyList',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclPolicyList: { 'type': 'array', 'itemType': ListAclPolicyResponseBodyIntranetVpcAclPolicyListAclPolicyList },
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBenchmarkTaskResponseBodyTasks extends $tea.Model {
  /**
   * @remarks
   * The number of instances that are available for stress testing.
   * 
   * @example
   * 2
   */
  availableAgent?: number;
  /**
   * @remarks
   * The time when the stress testing task was created.
   * 
   * @example
   * 2020-12-04T02:43:15Z
   */
  createTime?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Benchmark task [benchmark-larec-test-1076] is Running
   */
  message?: string;
  /**
   * @remarks
   * The region ID of the stress testing task.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The name of the service on which you want to perform a stress testing.
   * 
   * @example
   * test_quota
   */
  serviceName?: string;
  /**
   * @remarks
   * The state of the stress testing task.
   * 
   * Valid values:
   * 
   * *   Creating
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Starting
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   DeleteFailed
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Running
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Stopping
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Error
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Updating
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Deleting
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   CreateFailed
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The ID of the stress testing task.
   * 
   * @example
   * eas-b-gv4y86uvgt****i
   */
  taskId?: string;
  /**
   * @remarks
   * The name of the stress testing task.
   * 
   * @example
   * benchmark-larec-test-1076
   */
  taskName?: string;
  /**
   * @remarks
   * The time when the stress testing task was updated.
   * 
   * @example
   * 2020-06-24T03:11:30Z
   */
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

export class ListGatewayResponseBodyGateways extends $tea.Model {
  /**
   * @remarks
   * The time when the private gateway was created. The time is displayed in UTC.
   * 
   * @example
   * 2020-05-19T14:19:42Z
   */
  createTime?: string;
  /**
   * @remarks
   * The private gateway ID.
   * 
   * @example
   * gw-1uhcqmsc7x22******
   */
  gatewayId?: string;
  /**
   * @remarks
   * The private gateway alias.
   * 
   * @example
   * mygateway1
   */
  gatewayName?: string;
  /**
   * @remarks
   * The type of instances used for the private gateway.
   * 
   * @example
   * 2c4g
   */
  instanceType?: string;
  /**
   * @remarks
   * The public endpoint.
   * 
   * @example
   * gw-1uhcqmsc7x22******-1801786532******.cn-wulanchabu.pai-eas.aliyuncs.com
   */
  internetDomain?: string;
  /**
   * @remarks
   * Indicates whether Internet access is enabled.
   * 
   * @example
   * true
   */
  internetEnabled?: boolean;
  /**
   * @remarks
   * The internal endpoint.
   * 
   * @example
   * gw-1uhcqmsc7x22******-1801786532******-vpc.cn-wulanchabu.pai-eas.aliyuncs.com
   */
  intranetDomain?: string;
  /**
   * @remarks
   * Indicates whether it is the default private gateway.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The number of nodes in the private gateway.
   * 
   * @example
   * 2
   */
  replicas?: number;
  /**
   * @remarks
   * The state of the private gateway.
   * 
   * Valid values:
   * 
   * *   Creating
   * *   Stopped
   * *   Failed
   * *   Running
   * *   Deleted
   * *   Deleting
   * *   Waiting
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The time when the private gateway was updated. The time is displayed in UTC.
   * 
   * @example
   * 2021-02-24T11:52:17Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      gatewayId: 'GatewayId',
      gatewayName: 'GatewayName',
      instanceType: 'InstanceType',
      internetDomain: 'InternetDomain',
      internetEnabled: 'InternetEnabled',
      intranetDomain: 'IntranetDomain',
      isDefault: 'IsDefault',
      replicas: 'Replicas',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      gatewayId: 'string',
      gatewayName: 'string',
      instanceType: 'string',
      internetDomain: 'string',
      internetEnabled: 'boolean',
      intranetDomain: 'string',
      isDefault: 'boolean',
      replicas: 'number',
      status: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewayIntranetLinkedVpcResponseBodyIntranetLinkedVpcList extends $tea.Model {
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 192.168.10.11
   */
  ip?: string;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-2ze4pgstgszvgq******
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The state of the private gateway.
   * 
   * Valid values:
   * 
   * *   Creating
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     The private gateway is being created.
   * 
   *     <!-- -->
   * 
   * *   Running
   * 
   *     <!-- -->
   * 
   *     :
   * 
   *     <!-- -->
   * 
   *     The private gateway is running.
   * 
   *     <!-- -->
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-8vb2qjoiio6m9pg******
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The virtual private cloud (VPC) ID.
   * 
   * @example
   * vpc-2zetuli9ws0qgjd******
   */
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
  /**
   * @remarks
   * The time when the service version was created. The time is displayed in UTC.
   * 
   * @example
   * 2022-08-29T22:02:14Z
   */
  buildTime?: string;
  /**
   * @remarks
   * Indicates whether the image is available. Valid values:
   * 
   * *   true: The image is available.
   * *   false: The image is unavailable.
   * *   unknown: The availability of the image is unknown.
   * 
   * @example
   * true
   */
  imageAvailable?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * 4
   */
  imageId?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Service is Running
   */
  message?: string;
  /**
   * @remarks
   * The service deployment configurations. This parameter is returned only if the service is deployed by using a custom image.
   * 
   * @example
   * {
   *     "metadata": {
   *         "cpu": 1,
   *         "instance": 1,
   *         "memory": 1024
   *     },
   *     "name": "echo"
   * }
   */
  serviceConfig?: string;
  /**
   * @remarks
   * Indicates whether Elastic Algorithm service (EAS) is activated. Valid values:
   * 
   * *   true: EAS is activated.
   * *   false: EAS is not activated.
   * *   unknown: The activation of EAS is unknown.
   * 
   * @example
   * true
   */
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

export class ListTenantAddonsResponseBodyAddons extends $tea.Model {
  /**
   * @remarks
   * The attributes of the plug-in.
   */
  attributes?: { [key: string]: string };
  /**
   * @remarks
   * The name of the plug-in.
   * 
   * @example
   * prometheus_discovery
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateResourceRequestSelfManagedResourceOptionsNodeTolerations extends $tea.Model {
  /**
   * @remarks
   * The effect.
   * Valid values:
   * - PreferNoSchedule
   * - NoSchedule
   * - NoExecute
   * 
   * @example
   * NoSchedule
   */
  effect?: string;
  /**
   * @remarks
   * The key name.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * Relationship between key names and key values.
   * Valid values:
   * - Equal
   * - Exists
   * 
   * @example
   * Equal
   */
  operator?: string;
  /**
   * @remarks
   * The key value.
   * 
   * @example
   * value1
   */
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
  /**
   * @remarks
   * Tag tag key-value pairs for nodes.
   */
  nodeMatchLabels?: { [key: string]: string };
  /**
   * @remarks
   * Tolerations for nodes.
   */
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
  /**
   * @remarks
   * The time window that is required before the number of instances is reduced to 0. Default value: 600. The number of instances can be reduced to 0 only if no request is available or no traffic exists in the specified time window.
   * 
   * @example
   * 600
   */
  scaleDownGracePeriodSeconds?: number;
  /**
   * @remarks
   * The number of instances that you want to create at a time if the number of instances is scaled out from 0. Default value: 1.
   * 
   * @example
   * 1
   */
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
  /**
   * @remarks
   * The time window that is required before the scale-in operation is performed. Default value: 300. The scale-in operation can be performed only if the specified metric drops below the threshold in the specified time window.
   * 
   * @example
   * 300
   */
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
  /**
   * @remarks
   * The time window that is required before the scale-out operation is performed. Default value: 0. The scale-out operation can be performed only if the specified metric exceeds the specified threshold in the specified time window.
   * 
   * @example
   * 0
   */
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
  /**
   * @remarks
   * The operation that reduces the number of instances to 0.
   */
  onZero?: UpdateServiceAutoScalerRequestBehaviorOnZero;
  /**
   * @remarks
   * The scale-in operation.
   */
  scaleDown?: UpdateServiceAutoScalerRequestBehaviorScaleDown;
  /**
   * @remarks
   * The scale-out operation.
   */
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
  /**
   * @remarks
   * The name of the metric for triggering auto scaling. Valid values:
   * 
   * *   qps: the queries per second (QPS) for an individual instance.
   * *   cpu: the CPU utilization.
   * 
   * This parameter is required.
   * 
   * @example
   * qps
   */
  metricName?: string;
  /**
   * @remarks
   * The service for which the metric is specified. If you do not set this parameter, the current service is specified by default.
   * 
   * @example
   * demo_svc
   */
  service?: string;
  /**
   * @remarks
   * The threshold of the metric that triggers auto scaling.
   * 
   * *   If you set metricName to QPS, scale-out is triggered when the average QPS for a single instance is greater than this threshold.
   * *   If you set metricName to CPU, scale-out is triggered when the average CPU utilization for a single instance is greater than this threshold.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
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
  /**
   * @remarks
   * The name of the CronHPA job.
   * 
   * @example
   * scale-job-1
   */
  name?: string;
  /**
   * @remarks
   * The cron expression that is used to configure the execution time of the CronHPA job. For more information about how to configure cron expressions, see **Description of special characters** in this topic.
   * 
   * This parameter is required.
   * 
   * @example
   * 0 18 * * * *
   */
  schedule?: string;
  /**
   * @remarks
   * The number of instances that you want to configure for the CronHPA job.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
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

  /**
   * Clones a service.
   * 
   * @param tmpReq - CloneServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CloneServiceResponse
   */
  async cloneServiceWithOptions(ClusterId: string, ServiceName: string, tmpReq: CloneServiceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CloneServiceResponse> {
    Util.validateModel(tmpReq);
    let request = new CloneServiceShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.labels)) {
      request.labelsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labels, "Labels", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.labelsShrink)) {
      query["Labels"] = request.labelsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    let params = new $OpenApi.Params({
      action: "CloneService",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/services/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(ServiceName)}/clone`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CloneServiceResponse>(await this.callApi(params, req, runtime), new CloneServiceResponse({}));
  }

  /**
   * Clones a service.
   * 
   * @param request - CloneServiceRequest
   * @returns CloneServiceResponse
   */
  async cloneService(ClusterId: string, ServiceName: string, request: CloneServiceRequest): Promise<CloneServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cloneServiceWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Commits the Worker0 container in the custom container service and deploys the container as a new image.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CommitServiceResponse
   */
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

  /**
   * Commits the Worker0 container in the custom container service and deploys the container as a new image.
   * @returns CommitServiceResponse
   */
  async commitService(ClusterId: string, ServiceName: string): Promise<CommitServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.commitServiceWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  /**
   * Creates an access control list (ACL) for a private gateway. The IP CIDR blocks added to the ACL can access the private gateway.
   * 
   * @param tmpReq - CreateAclPolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAclPolicyResponse
   */
  async createAclPolicyWithOptions(ClusterId: string, GatewayId: string, tmpReq: CreateAclPolicyRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateAclPolicyResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateAclPolicyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.aclPolicyList)) {
      request.aclPolicyListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.aclPolicyList, "AclPolicyList", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.aclPolicyListShrink)) {
      query["AclPolicyList"] = request.aclPolicyListShrink;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateAclPolicy",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/gateways/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(GatewayId)}/acl_policy`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateAclPolicyResponse>(await this.callApi(params, req, runtime), new CreateAclPolicyResponse({}));
  }

  /**
   * Creates an access control list (ACL) for a private gateway. The IP CIDR blocks added to the ACL can access the private gateway.
   * 
   * @param request - CreateAclPolicyRequest
   * @returns CreateAclPolicyResponse
   */
  async createAclPolicy(ClusterId: string, GatewayId: string, request: CreateAclPolicyRequest): Promise<CreateAclPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAclPolicyWithOptions(ClusterId, GatewayId, request, headers, runtime);
  }

  /**
   * Creates an application service.
   * 
   * @param request - CreateAppServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAppServiceResponse
   */
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

  /**
   * Creates an application service.
   * 
   * @param request - CreateAppServiceRequest
   * @returns CreateAppServiceResponse
   */
  async createAppService(request: CreateAppServiceRequest): Promise<CreateAppServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAppServiceWithOptions(request, headers, runtime);
  }

  /**
   * Creates a stress testing task.
   * 
   * @param request - CreateBenchmarkTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateBenchmarkTaskResponse
   */
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

  /**
   * Creates a stress testing task.
   * 
   * @param request - CreateBenchmarkTaskRequest
   * @returns CreateBenchmarkTaskResponse
   */
  async createBenchmarkTask(request: CreateBenchmarkTaskRequest): Promise<CreateBenchmarkTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createBenchmarkTaskWithOptions(request, headers, runtime);
  }

  /**
   * Creates a private gateway. You can create a private gateway only in a self-managed resource group.
   * 
   * @param request - CreateGatewayRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGatewayResponse
   */
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

    if (!Util.isUnset(request.replicas)) {
      body["Replicas"] = request.replicas;
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

  /**
   * Creates a private gateway. You can create a private gateway only in a self-managed resource group.
   * 
   * @param request - CreateGatewayRequest
   * @returns CreateGatewayResponse
   */
  async createGateway(request: CreateGatewayRequest): Promise<CreateGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createGatewayWithOptions(request, headers, runtime);
  }

  /**
   * Creates an internal endpoint of a private gateway.
   * 
   * @param request - CreateGatewayIntranetLinkedVpcRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateGatewayIntranetLinkedVpcResponse
   */
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

  /**
   * Creates an internal endpoint of a private gateway.
   * 
   * @param request - CreateGatewayIntranetLinkedVpcRequest
   * @returns CreateGatewayIntranetLinkedVpcResponse
   */
  async createGatewayIntranetLinkedVpc(ClusterId: string, GatewayId: string, request: CreateGatewayIntranetLinkedVpcRequest): Promise<CreateGatewayIntranetLinkedVpcResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createGatewayIntranetLinkedVpcWithOptions(ClusterId, GatewayId, request, headers, runtime);
  }

  /**
   * Creates a resource group.
   * 
   * @remarks
   * *Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/144261.html) of Elastic Algorithm Service (EAS).
   * 
   * @param request - CreateResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateResourceResponse
   */
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

  /**
   * Creates a resource group.
   * 
   * @remarks
   * *Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/144261.html) of Elastic Algorithm Service (EAS).
   * 
   * @param request - CreateResourceRequest
   * @returns CreateResourceResponse
   */
  async createResource(request: CreateResourceRequest): Promise<CreateResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createResourceWithOptions(request, headers, runtime);
  }

  /**
   * Creates instances in a dedicated resource group.
   * 
   * @param request - CreateResourceInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateResourceInstancesResponse
   */
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

  /**
   * Creates instances in a dedicated resource group.
   * 
   * @param request - CreateResourceInstancesRequest
   * @returns CreateResourceInstancesResponse
   */
  async createResourceInstances(ClusterId: string, ResourceId: string, request: CreateResourceInstancesRequest): Promise<CreateResourceInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createResourceInstancesWithOptions(ClusterId, ResourceId, request, headers, runtime);
  }

  /**
   * Enables the LogShipper feature of Log Service for a resource group.
   * 
   * @param request - CreateResourceLogRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateResourceLogResponse
   */
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

  /**
   * Enables the LogShipper feature of Log Service for a resource group.
   * 
   * @param request - CreateResourceLogRequest
   * @returns CreateResourceLogResponse
   */
  async createResourceLog(ClusterId: string, ResourceId: string, request: CreateResourceLogRequest): Promise<CreateResourceLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createResourceLogWithOptions(ClusterId, ResourceId, request, headers, runtime);
  }

  /**
   * Creates a model service in Elastic Algorithm Service (EAS).
   * 
   * @remarks
   * *Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/144261.html) of Elastic Algorithm Service (EAS).
   * 
   * @param tmpReq - CreateServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceResponse
   */
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

  /**
   * Creates a model service in Elastic Algorithm Service (EAS).
   * 
   * @remarks
   * *Before you call this operation, make sure that you are familiar with the [billing](https://help.aliyun.com/document_detail/144261.html) of Elastic Algorithm Service (EAS).
   * 
   * @param request - CreateServiceRequest
   * @returns CreateServiceResponse
   */
  async createService(request: CreateServiceRequest): Promise<CreateServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createServiceWithOptions(request, headers, runtime);
  }

  /**
   * Enables the Autoscaler feature and creates an Autoscaler controller for a service.
   * 
   * @param request - CreateServiceAutoScalerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceAutoScalerResponse
   */
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

  /**
   * Enables the Autoscaler feature and creates an Autoscaler controller for a service.
   * 
   * @param request - CreateServiceAutoScalerRequest
   * @returns CreateServiceAutoScalerResponse
   */
  async createServiceAutoScaler(ClusterId: string, ServiceName: string, request: CreateServiceAutoScalerRequest): Promise<CreateServiceAutoScalerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createServiceAutoScalerWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Enables the Cron Horizontal Pod Autoscaler (CronHPA) feature for a service.
   * 
   * @param request - CreateServiceCronScalerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceCronScalerResponse
   */
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

  /**
   * Enables the Cron Horizontal Pod Autoscaler (CronHPA) feature for a service.
   * 
   * @param request - CreateServiceCronScalerRequest
   * @returns CreateServiceCronScalerResponse
   */
  async createServiceCronScaler(ClusterId: string, ServiceName: string, request: CreateServiceCronScalerRequest): Promise<CreateServiceCronScalerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createServiceCronScalerWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Enables the traffic mirroring feature for a service. After the feature is enabled, requests received by the service can be mirrored to another service.
   * 
   * @param request - CreateServiceMirrorRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateServiceMirrorResponse
   */
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

  /**
   * Enables the traffic mirroring feature for a service. After the feature is enabled, requests received by the service can be mirrored to another service.
   * 
   * @param request - CreateServiceMirrorRequest
   * @returns CreateServiceMirrorResponse
   */
  async createServiceMirror(ClusterId: string, ServiceName: string, request: CreateServiceMirrorRequest): Promise<CreateServiceMirrorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createServiceMirrorWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Deletes an access control list (ACL) for a private gateway. The IP CIDR block that is deleted from the ACL cannot access the private gateway.
   * 
   * @param tmpReq - DeleteAclPolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAclPolicyResponse
   */
  async deleteAclPolicyWithOptions(ClusterId: string, GatewayId: string, tmpReq: DeleteAclPolicyRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteAclPolicyResponse> {
    Util.validateModel(tmpReq);
    let request = new DeleteAclPolicyShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.aclPolicyList)) {
      request.aclPolicyListShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.aclPolicyList, "AclPolicyList", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.aclPolicyListShrink)) {
      query["AclPolicyList"] = request.aclPolicyListShrink;
    }

    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAclPolicy",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/gateways/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(GatewayId)}/acl_policy`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteAclPolicyResponse>(await this.callApi(params, req, runtime), new DeleteAclPolicyResponse({}));
  }

  /**
   * Deletes an access control list (ACL) for a private gateway. The IP CIDR block that is deleted from the ACL cannot access the private gateway.
   * 
   * @param request - DeleteAclPolicyRequest
   * @returns DeleteAclPolicyResponse
   */
  async deleteAclPolicy(ClusterId: string, GatewayId: string, request: DeleteAclPolicyRequest): Promise<DeleteAclPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAclPolicyWithOptions(ClusterId, GatewayId, request, headers, runtime);
  }

  /**
   * Deletes a stress testing task.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteBenchmarkTaskResponse
   */
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

  /**
   * Deletes a stress testing task.
   * @returns DeleteBenchmarkTaskResponse
   */
  async deleteBenchmarkTask(ClusterId: string, TaskName: string): Promise<DeleteBenchmarkTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteBenchmarkTaskWithOptions(ClusterId, TaskName, headers, runtime);
  }

  /**
   * Deletes a private gateway.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGatewayResponse
   */
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

  /**
   * Deletes a private gateway.
   * @returns DeleteGatewayResponse
   */
  async deleteGateway(ClusterId: string, GatewayId: string): Promise<DeleteGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteGatewayWithOptions(ClusterId, GatewayId, headers, runtime);
  }

  /**
   * 删除网关内网访问端点
   * 
   * @param request - DeleteGatewayIntranetLinkedVpcRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteGatewayIntranetLinkedVpcResponse
   */
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

  /**
   * 删除网关内网访问端点
   * 
   * @param request - DeleteGatewayIntranetLinkedVpcRequest
   * @returns DeleteGatewayIntranetLinkedVpcResponse
   */
  async deleteGatewayIntranetLinkedVpc(ClusterId: string, GatewayId: string, request: DeleteGatewayIntranetLinkedVpcRequest): Promise<DeleteGatewayIntranetLinkedVpcResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteGatewayIntranetLinkedVpcWithOptions(ClusterId, GatewayId, request, headers, runtime);
  }

  /**
   * Deletes a resource group that contains no resources or instances.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteResourceResponse
   */
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

  /**
   * Deletes a resource group that contains no resources or instances.
   * @returns DeleteResourceResponse
   */
  async deleteResource(ClusterId: string, ResourceId: string): Promise<DeleteResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteResourceWithOptions(ClusterId, ResourceId, headers, runtime);
  }

  /**
   * Disables the virtual private cloud (VPC) direct connection feature for a dedicated resource group.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteResourceDLinkResponse
   */
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

  /**
   * Disables the virtual private cloud (VPC) direct connection feature for a dedicated resource group.
   * @returns DeleteResourceDLinkResponse
   */
  async deleteResourceDLink(ClusterId: string, ResourceId: string): Promise<DeleteResourceDLinkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteResourceDLinkWithOptions(ClusterId, ResourceId, headers, runtime);
  }

  /**
   * Deletes instances in a dedicated resource group. You can delete only pay-as-you-go instances as a regular user.
   * 
   * @param request - DeleteResourceInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteResourceInstancesResponse
   */
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

  /**
   * Deletes instances in a dedicated resource group. You can delete only pay-as-you-go instances as a regular user.
   * 
   * @param request - DeleteResourceInstancesRequest
   * @returns DeleteResourceInstancesResponse
   */
  async deleteResourceInstances(ClusterId: string, ResourceId: string, request: DeleteResourceInstancesRequest): Promise<DeleteResourceInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteResourceInstancesWithOptions(ClusterId, ResourceId, request, headers, runtime);
  }

  /**
   * Disables the LogShipper feature of Log Service for a dedicated resource group.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteResourceLogResponse
   */
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

  /**
   * Disables the LogShipper feature of Log Service for a dedicated resource group.
   * @returns DeleteResourceLogResponse
   */
  async deleteResourceLog(ClusterId: string, ResourceId: string): Promise<DeleteResourceLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteResourceLogWithOptions(ClusterId, ResourceId, headers, runtime);
  }

  /**
   * Deletes a service.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteServiceResponse
   */
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

  /**
   * Deletes a service.
   * @returns DeleteServiceResponse
   */
  async deleteService(ClusterId: string, ServiceName: string): Promise<DeleteServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteServiceWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  /**
   * Deletes the existing Autoscaler controller and disables the Autoscaler feature for a service.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteServiceAutoScalerResponse
   */
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

  /**
   * Deletes the existing Autoscaler controller and disables the Autoscaler feature for a service.
   * @returns DeleteServiceAutoScalerResponse
   */
  async deleteServiceAutoScaler(ClusterId: string, ServiceName: string): Promise<DeleteServiceAutoScalerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteServiceAutoScalerWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  /**
   * Disables the Cronscaler feature for a service.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteServiceCronScalerResponse
   */
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

  /**
   * Disables the Cronscaler feature for a service.
   * @returns DeleteServiceCronScalerResponse
   */
  async deleteServiceCronScaler(ClusterId: string, ServiceName: string): Promise<DeleteServiceCronScalerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteServiceCronScalerWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  /**
   * Restarts the instances of a service.
   * 
   * @param request - DeleteServiceInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteServiceInstancesResponse
   */
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

  /**
   * Restarts the instances of a service.
   * 
   * @param request - DeleteServiceInstancesRequest
   * @returns DeleteServiceInstancesResponse
   */
  async deleteServiceInstances(ClusterId: string, ServiceName: string, request: DeleteServiceInstancesRequest): Promise<DeleteServiceInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteServiceInstancesWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Deletes existing service tags.
   * 
   * @param tmpReq - DeleteServiceLabelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteServiceLabelResponse
   */
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

  /**
   * Deletes existing service tags.
   * 
   * @param request - DeleteServiceLabelRequest
   * @returns DeleteServiceLabelResponse
   */
  async deleteServiceLabel(ClusterId: string, ServiceName: string, request: DeleteServiceLabelRequest): Promise<DeleteServiceLabelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteServiceLabelWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Disables the traffic mirroring feature for a service.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteServiceMirrorResponse
   */
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

  /**
   * Disables the traffic mirroring feature for a service.
   * @returns DeleteServiceMirrorResponse
   */
  async deleteServiceMirror(ClusterId: string, ServiceName: string): Promise<DeleteServiceMirrorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteServiceMirrorWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  /**
   * Queries details about the configurations of a stress testing task.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBenchmarkTaskResponse
   */
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

  /**
   * Queries details about the configurations of a stress testing task.
   * @returns DescribeBenchmarkTaskResponse
   */
  async describeBenchmarkTask(ClusterId: string, TaskName: string): Promise<DescribeBenchmarkTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeBenchmarkTaskWithOptions(ClusterId, TaskName, headers, runtime);
  }

  /**
   * Queries the report of a stress testing task.
   * 
   * @param request - DescribeBenchmarkTaskReportRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeBenchmarkTaskReportResponse
   */
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

  /**
   * Queries the report of a stress testing task.
   * 
   * @param request - DescribeBenchmarkTaskReportRequest
   * @returns DescribeBenchmarkTaskReportResponse
   */
  async describeBenchmarkTaskReport(ClusterId: string, TaskName: string, request: DescribeBenchmarkTaskReportRequest): Promise<DescribeBenchmarkTaskReportResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeBenchmarkTaskReportWithOptions(ClusterId, TaskName, request, headers, runtime);
  }

  /**
   * Queries the details of a private gateway.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGatewayResponse
   */
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

  /**
   * Queries the details of a private gateway.
   * @returns DescribeGatewayResponse
   */
  async describeGateway(ClusterId: string, GatewayId: string): Promise<DescribeGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeGatewayWithOptions(ClusterId, GatewayId, headers, runtime);
  }

  /**
   * Queries the information about a service group.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeGroupResponse
   */
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

  /**
   * Queries the information about a service group.
   * @returns DescribeGroupResponse
   */
  async describeGroup(ClusterId: string, GroupName: string): Promise<DescribeGroupResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeGroupWithOptions(ClusterId, GroupName, headers, runtime);
  }

  /**
   * Queries the information about a resource group.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResourceResponse
   */
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

  /**
   * Queries the information about a resource group.
   * @returns DescribeResourceResponse
   */
  async describeResource(ClusterId: string, ResourceId: string): Promise<DescribeResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeResourceWithOptions(ClusterId, ResourceId, headers, runtime);
  }

  /**
   * Queries detailed configurations about a virtual private cloud (VPC) direct connection of a dedicated resource group.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResourceDLinkResponse
   */
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

  /**
   * Queries detailed configurations about a virtual private cloud (VPC) direct connection of a dedicated resource group.
   * @returns DescribeResourceDLinkResponse
   */
  async describeResourceDLink(ClusterId: string, ResourceId: string): Promise<DescribeResourceDLinkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeResourceDLinkWithOptions(ClusterId, ResourceId, headers, runtime);
  }

  /**
   * Queries the details about the LogShipper configurations of Log Service for a dedicated resource group.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeResourceLogResponse
   */
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

  /**
   * Queries the details about the LogShipper configurations of Log Service for a dedicated resource group.
   * @returns DescribeResourceLogResponse
   */
  async describeResourceLog(ClusterId: string, ResourceId: string): Promise<DescribeResourceLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeResourceLogWithOptions(ClusterId, ResourceId, headers, runtime);
  }

  /**
   * Queries the details about a service.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServiceResponse
   */
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

  /**
   * Queries the details about a service.
   * @returns DescribeServiceResponse
   */
  async describeService(ClusterId: string, ServiceName: string): Promise<DescribeServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeServiceWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  /**
   * Queries information about the Autoscaler configurations of a service.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServiceAutoScalerResponse
   */
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

  /**
   * Queries information about the Autoscaler configurations of a service.
   * @returns DescribeServiceAutoScalerResponse
   */
  async describeServiceAutoScaler(ClusterId: string, ServiceName: string): Promise<DescribeServiceAutoScalerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeServiceAutoScalerWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  /**
   * Queries the Cron Horizontal Pod Autoscaler (CronHPA) configurations of a service.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServiceCronScalerResponse
   */
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

  /**
   * Queries the Cron Horizontal Pod Autoscaler (CronHPA) configurations of a service.
   * @returns DescribeServiceCronScalerResponse
   */
  async describeServiceCronScaler(ClusterId: string, ServiceName: string): Promise<DescribeServiceCronScalerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeServiceCronScalerWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  /**
   * Queries the diagnostics details of a service.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServiceDiagnosisResponse
   */
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

  /**
   * Queries the diagnostics details of a service.
   * @returns DescribeServiceDiagnosisResponse
   */
  async describeServiceDiagnosis(ClusterId: string, ServiceName: string): Promise<DescribeServiceDiagnosisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeServiceDiagnosisWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  /**
   * Queries information about recent service deployment events.
   * 
   * @param request - DescribeServiceEventRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServiceEventResponse
   */
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

  /**
   * Queries information about recent service deployment events.
   * 
   * @param request - DescribeServiceEventRequest
   * @returns DescribeServiceEventResponse
   */
  async describeServiceEvent(ClusterId: string, ServiceName: string, request: DescribeServiceEventRequest): Promise<DescribeServiceEventResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeServiceEventWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Queries the diagnostics details of an instance that runs Elastic Algorithm Service (EAS).
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServiceInstanceDiagnosisResponse
   */
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

  /**
   * Queries the diagnostics details of an instance that runs Elastic Algorithm Service (EAS).
   * @returns DescribeServiceInstanceDiagnosisResponse
   */
  async describeServiceInstanceDiagnosis(ClusterId: string, ServiceName: string, InstanceName: string): Promise<DescribeServiceInstanceDiagnosisResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeServiceInstanceDiagnosisWithOptions(ClusterId, ServiceName, InstanceName, headers, runtime);
  }

  /**
   * Queries the information about the logs of a service.
   * 
   * @param request - DescribeServiceLogRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServiceLogResponse
   */
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

  /**
   * Queries the information about the logs of a service.
   * 
   * @param request - DescribeServiceLogRequest
   * @returns DescribeServiceLogResponse
   */
  async describeServiceLog(ClusterId: string, ServiceName: string, request: DescribeServiceLogRequest): Promise<DescribeServiceLogResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeServiceLogWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Queries details about the traffic mirroring settings of a service.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeServiceMirrorResponse
   */
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

  /**
   * Queries details about the traffic mirroring settings of a service.
   * @returns DescribeServiceMirrorResponse
   */
  async describeServiceMirror(ClusterId: string, ServiceName: string): Promise<DescribeServiceMirrorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeServiceMirrorWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  /**
   * Queries the historical prices of preemptible instances. For more information about preemptible instances, see Create and use preemptible instances.
   * 
   * @param request - DescribeSpotDiscountHistoryRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DescribeSpotDiscountHistoryResponse
   */
  async describeSpotDiscountHistoryWithOptions(request: DescribeSpotDiscountHistoryRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DescribeSpotDiscountHistoryResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceType)) {
      query["InstanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.isProtect)) {
      query["IsProtect"] = request.isProtect;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DescribeSpotDiscountHistory",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/public/spot_discount`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DescribeSpotDiscountHistoryResponse>(await this.callApi(params, req, runtime), new DescribeSpotDiscountHistoryResponse({}));
  }

  /**
   * Queries the historical prices of preemptible instances. For more information about preemptible instances, see Create and use preemptible instances.
   * 
   * @param request - DescribeSpotDiscountHistoryRequest
   * @returns DescribeSpotDiscountHistoryResponse
   */
  async describeSpotDiscountHistory(request: DescribeSpotDiscountHistoryRequest): Promise<DescribeSpotDiscountHistoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.describeSpotDiscountHistoryWithOptions(request, headers, runtime);
  }

  /**
   * Switches a container service to development mode or exits development mode.
   * 
   * @param request - DevelopServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DevelopServiceResponse
   */
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

  /**
   * Switches a container service to development mode or exits development mode.
   * 
   * @param request - DevelopServiceRequest
   * @returns DevelopServiceResponse
   */
  async developService(ClusterId: string, ServiceName: string, request: DevelopServiceRequest): Promise<DevelopServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.developServiceWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Queries access control lists (ACLs) created for a private gateway.
   * 
   * @param request - ListAclPolicyRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAclPolicyResponse
   */
  async listAclPolicyWithOptions(ClusterId: string, GatewayId: string, request: ListAclPolicyRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListAclPolicyResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.vpcId)) {
      query["VpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAclPolicy",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/gateways/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(GatewayId)}/acl_policy`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListAclPolicyResponse>(await this.callApi(params, req, runtime), new ListAclPolicyResponse({}));
  }

  /**
   * Queries access control lists (ACLs) created for a private gateway.
   * 
   * @param request - ListAclPolicyRequest
   * @returns ListAclPolicyResponse
   */
  async listAclPolicy(ClusterId: string, GatewayId: string, request: ListAclPolicyRequest): Promise<ListAclPolicyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAclPolicyWithOptions(ClusterId, GatewayId, request, headers, runtime);
  }

  /**
   * Queries a list of stress testing tasks that are created by the current user.
   * 
   * @param request - ListBenchmarkTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListBenchmarkTaskResponse
   */
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

  /**
   * Queries a list of stress testing tasks that are created by the current user.
   * 
   * @param request - ListBenchmarkTaskRequest
   * @returns ListBenchmarkTaskResponse
   */
  async listBenchmarkTask(request: ListBenchmarkTaskRequest): Promise<ListBenchmarkTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listBenchmarkTaskWithOptions(request, headers, runtime);
  }

  /**
   * Queries a list of private gateways.
   * 
   * @param request - ListGatewayRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGatewayResponse
   */
  async listGatewayWithOptions(request: ListGatewayRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListGatewayResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.gatewayId)) {
      query["GatewayId"] = request.gatewayId;
    }

    if (!Util.isUnset(request.gatewayName)) {
      query["GatewayName"] = request.gatewayName;
    }

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
      action: "ListGateway",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/gateways`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListGatewayResponse>(await this.callApi(params, req, runtime), new ListGatewayResponse({}));
  }

  /**
   * Queries a list of private gateways.
   * 
   * @param request - ListGatewayRequest
   * @returns ListGatewayResponse
   */
  async listGateway(request: ListGatewayRequest): Promise<ListGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listGatewayWithOptions(request, headers, runtime);
  }

  /**
   * Queries a list of the internal endpoints of a private gateway.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGatewayIntranetLinkedVpcResponse
   */
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

  /**
   * Queries a list of the internal endpoints of a private gateway.
   * @returns ListGatewayIntranetLinkedVpcResponse
   */
  async listGatewayIntranetLinkedVpc(ClusterId: string, GatewayId: string): Promise<ListGatewayIntranetLinkedVpcResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listGatewayIntranetLinkedVpcWithOptions(ClusterId, GatewayId, headers, runtime);
  }

  /**
   * Queries created service groups.
   * 
   * @param request - ListGroupsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListGroupsResponse
   */
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

  /**
   * Queries created service groups.
   * 
   * @param request - ListGroupsRequest
   * @returns ListGroupsResponse
   */
  async listGroups(request: ListGroupsRequest): Promise<ListGroupsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listGroupsWithOptions(request, headers, runtime);
  }

  /**
   * Queries a list of workers in a resource group.
   * 
   * @param request - ListResourceInstanceWorkerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceInstanceWorkerResponse
   */
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

  /**
   * Queries a list of workers in a resource group.
   * 
   * @param request - ListResourceInstanceWorkerRequest
   * @returns ListResourceInstanceWorkerResponse
   */
  async listResourceInstanceWorker(ClusterId: string, ResourceId: string, InstanceName: string, request: ListResourceInstanceWorkerRequest): Promise<ListResourceInstanceWorkerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourceInstanceWorkerWithOptions(ClusterId, ResourceId, InstanceName, request, headers, runtime);
  }

  /**
   * Queries a list of instances in a dedicated resource group.
   * 
   * @param request - ListResourceInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceInstancesResponse
   */
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

  /**
   * Queries a list of instances in a dedicated resource group.
   * 
   * @param request - ListResourceInstancesRequest
   * @returns ListResourceInstancesResponse
   */
  async listResourceInstances(ClusterId: string, ResourceId: string, request: ListResourceInstancesRequest): Promise<ListResourceInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourceInstancesWithOptions(ClusterId, ResourceId, request, headers, runtime);
  }

  /**
   * Queries a list of services that are deployed in the dedicated resource group.
   * 
   * @deprecated OpenAPI ListResourceServices is deprecated
   * 
   * @param request - ListResourceServicesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourceServicesResponse
   */
  // Deprecated
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

  /**
   * Queries a list of services that are deployed in the dedicated resource group.
   * 
   * @deprecated OpenAPI ListResourceServices is deprecated
   * 
   * @param request - ListResourceServicesRequest
   * @returns ListResourceServicesResponse
   */
  // Deprecated
  async listResourceServices(ClusterId: string, ResourceId: string, request: ListResourceServicesRequest): Promise<ListResourceServicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourceServicesWithOptions(ClusterId, ResourceId, request, headers, runtime);
  }

  /**
   * Queries a list of dedicated resource groups for the current user.
   * 
   * @param request - ListResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListResourcesResponse
   */
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

  /**
   * Queries a list of dedicated resource groups for the current user.
   * 
   * @param request - ListResourcesRequest
   * @returns ListResourcesResponse
   */
  async listResources(request: ListResourcesRequest): Promise<ListResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listResourcesWithOptions(request, headers, runtime);
  }

  /**
   * Queries the containers of a service.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceContainersResponse
   */
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

  /**
   * Queries the containers of a service.
   * @returns ListServiceContainersResponse
   */
  async listServiceContainers(ClusterId: string, ServiceName: string, InstanceName: string): Promise<ListServiceContainersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listServiceContainersWithOptions(ClusterId, ServiceName, InstanceName, headers, runtime);
  }

  /**
   * Queries instances of a service.
   * 
   * @param request - ListServiceInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceInstancesResponse
   */
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

  /**
   * Queries instances of a service.
   * 
   * @param request - ListServiceInstancesRequest
   * @returns ListServiceInstancesResponse
   */
  async listServiceInstances(ClusterId: string, ServiceName: string, request: ListServiceInstancesRequest): Promise<ListServiceInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listServiceInstancesWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Queries the information about the historical versions of a service.
   * 
   * @param request - ListServiceVersionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceVersionsResponse
   */
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

  /**
   * Queries the information about the historical versions of a service.
   * 
   * @param request - ListServiceVersionsRequest
   * @returns ListServiceVersionsResponse
   */
  async listServiceVersions(ClusterId: string, ServiceName: string, request: ListServiceVersionsRequest): Promise<ListServiceVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listServiceVersionsWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Queries a list of services that are created by the current user.
   * 
   * @param tmpReq - ListServicesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServicesResponse
   */
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

    if (!Util.isUnset(request.gateway)) {
      query["Gateway"] = request.gateway;
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

    if (!Util.isUnset(request.role)) {
      query["Role"] = request.role;
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

  /**
   * Queries a list of services that are created by the current user.
   * 
   * @param request - ListServicesRequest
   * @returns ListServicesResponse
   */
  async listServices(request: ListServicesRequest): Promise<ListServicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listServicesWithOptions(request, headers, runtime);
  }

  /**
   * Queries a list of tenant plug-ins.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTenantAddonsResponse
   */
  async listTenantAddonsWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTenantAddonsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListTenantAddons",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/tenantaddons`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListTenantAddonsResponse>(await this.callApi(params, req, runtime), new ListTenantAddonsResponse({}));
  }

  /**
   * Queries a list of tenant plug-ins.
   * @returns ListTenantAddonsResponse
   */
  async listTenantAddons(): Promise<ListTenantAddonsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTenantAddonsWithOptions(headers, runtime);
  }

  /**
   * Updates the information about a tenant plug-in.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReinstallTenantAddonResponse
   */
  async reinstallTenantAddonWithOptions(ClusterId: string, TenantAddonName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ReinstallTenantAddonResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ReinstallTenantAddon",
      version: "2021-07-01",
      protocol: "HTTPS",
      pathname: `/api/v2/tenantaddons/${OpenApiUtil.getEncodeParam(ClusterId)}/${OpenApiUtil.getEncodeParam(TenantAddonName)}/reinstall`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ReinstallTenantAddonResponse>(await this.callApi(params, req, runtime), new ReinstallTenantAddonResponse({}));
  }

  /**
   * Updates the information about a tenant plug-in.
   * @returns ReinstallTenantAddonResponse
   */
  async reinstallTenantAddon(ClusterId: string, TenantAddonName: string): Promise<ReinstallTenantAddonResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.reinstallTenantAddonWithOptions(ClusterId, TenantAddonName, headers, runtime);
  }

  /**
   * Performs canary release or blue-green release of a service.
   * 
   * @param request - ReleaseServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ReleaseServiceResponse
   */
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

  /**
   * Performs canary release or blue-green release of a service.
   * 
   * @param request - ReleaseServiceRequest
   * @returns ReleaseServiceResponse
   */
  async releaseService(ClusterId: string, ServiceName: string, request: ReleaseServiceRequest): Promise<ReleaseServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.releaseServiceWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Restarts a service.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RestartServiceResponse
   */
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

  /**
   * Restarts a service.
   * @returns RestartServiceResponse
   */
  async restartService(ClusterId: string, ServiceName: string): Promise<RestartServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.restartServiceWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  /**
   * Starts a stress testing task.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartBenchmarkTaskResponse
   */
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

  /**
   * Starts a stress testing task.
   * @returns StartBenchmarkTaskResponse
   */
  async startBenchmarkTask(ClusterId: string, TaskName: string): Promise<StartBenchmarkTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startBenchmarkTaskWithOptions(ClusterId, TaskName, headers, runtime);
  }

  /**
   * Starts a service.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartServiceResponse
   */
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

  /**
   * Starts a service.
   * @returns StartServiceResponse
   */
  async startService(ClusterId: string, ServiceName: string): Promise<StartServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startServiceWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  /**
   * Stops a stress testing task.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopBenchmarkTaskResponse
   */
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

  /**
   * Stops a stress testing task.
   * @returns StopBenchmarkTaskResponse
   */
  async stopBenchmarkTask(ClusterId: string, TaskName: string): Promise<StopBenchmarkTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopBenchmarkTaskWithOptions(ClusterId, TaskName, headers, runtime);
  }

  /**
   * Stops a running service.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopServiceResponse
   */
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

  /**
   * Stops a running service.
   * @returns StopServiceResponse
   */
  async stopService(ClusterId: string, ServiceName: string): Promise<StopServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopServiceWithOptions(ClusterId, ServiceName, headers, runtime);
  }

  /**
   * Updates an application service.
   * 
   * @param request - UpdateAppServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAppServiceResponse
   */
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

  /**
   * Updates an application service.
   * 
   * @param request - UpdateAppServiceRequest
   * @returns UpdateAppServiceResponse
   */
  async updateAppService(ClusterId: string, ServiceName: string, request: UpdateAppServiceRequest): Promise<UpdateAppServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAppServiceWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Updates a stress testing task.
   * 
   * @param request - UpdateBenchmarkTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateBenchmarkTaskResponse
   */
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

  /**
   * Updates a stress testing task.
   * 
   * @param request - UpdateBenchmarkTaskRequest
   * @returns UpdateBenchmarkTaskResponse
   */
  async updateBenchmarkTask(ClusterId: string, TaskName: string, request: UpdateBenchmarkTaskRequest): Promise<UpdateBenchmarkTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateBenchmarkTaskWithOptions(ClusterId, TaskName, request, headers, runtime);
  }

  /**
   * Update a private gateway.
   * 
   * @param request - UpdateGatewayRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateGatewayResponse
   */
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

    if (!Util.isUnset(request.isDefault)) {
      body["IsDefault"] = request.isDefault;
    }

    if (!Util.isUnset(request.name)) {
      body["Name"] = request.name;
    }

    if (!Util.isUnset(request.replicas)) {
      body["Replicas"] = request.replicas;
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

  /**
   * Update a private gateway.
   * 
   * @param request - UpdateGatewayRequest
   * @returns UpdateGatewayResponse
   */
  async updateGateway(GatewayId: string, ClusterId: string, request: UpdateGatewayRequest): Promise<UpdateGatewayResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateGatewayWithOptions(GatewayId, ClusterId, request, headers, runtime);
  }

  /**
   * Updates the information about a dedicated resource group. Only the name of a dedicated resource group can be updated.
   * 
   * @param request - UpdateResourceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateResourceResponse
   */
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

  /**
   * Updates the information about a dedicated resource group. Only the name of a dedicated resource group can be updated.
   * 
   * @param request - UpdateResourceRequest
   * @returns UpdateResourceResponse
   */
  async updateResource(ClusterId: string, ResourceId: string, request: UpdateResourceRequest): Promise<UpdateResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateResourceWithOptions(ClusterId, ResourceId, request, headers, runtime);
  }

  /**
   * Updates the configurations of a virtual private cloud (VPC) direct connection for a dedicated resource group.
   * 
   * @param request - UpdateResourceDLinkRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateResourceDLinkResponse
   */
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

  /**
   * Updates the configurations of a virtual private cloud (VPC) direct connection for a dedicated resource group.
   * 
   * @param request - UpdateResourceDLinkRequest
   * @returns UpdateResourceDLinkResponse
   */
  async updateResourceDLink(ClusterId: string, ResourceId: string, request: UpdateResourceDLinkRequest): Promise<UpdateResourceDLinkResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateResourceDLinkWithOptions(ClusterId, ResourceId, request, headers, runtime);
  }

  /**
   * Updates the service scheduling status of an instance in a dedicated resource group.
   * 
   * @param request - UpdateResourceInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateResourceInstanceResponse
   */
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

  /**
   * Updates the service scheduling status of an instance in a dedicated resource group.
   * 
   * @param request - UpdateResourceInstanceRequest
   * @returns UpdateResourceInstanceResponse
   */
  async updateResourceInstance(ClusterId: string, ResourceId: string, InstanceId: string, request: UpdateResourceInstanceRequest): Promise<UpdateResourceInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateResourceInstanceWithOptions(ClusterId, ResourceId, InstanceId, request, headers, runtime);
  }

  /**
   * Updates a model or processor of a service. If only the metadata.instance field is updated, manual scaling can be performed.
   * 
   * @param request - UpdateServiceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceResponse
   */
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

  /**
   * Updates a model or processor of a service. If only the metadata.instance field is updated, manual scaling can be performed.
   * 
   * @param request - UpdateServiceRequest
   * @returns UpdateServiceResponse
   */
  async updateService(ClusterId: string, ServiceName: string, request: UpdateServiceRequest): Promise<UpdateServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateServiceWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Updates the Autoscaler configurations of a service.
   * 
   * @param request - UpdateServiceAutoScalerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceAutoScalerResponse
   */
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

  /**
   * Updates the Autoscaler configurations of a service.
   * 
   * @param request - UpdateServiceAutoScalerRequest
   * @returns UpdateServiceAutoScalerResponse
   */
  async updateServiceAutoScaler(ClusterId: string, ServiceName: string, request: UpdateServiceAutoScalerRequest): Promise<UpdateServiceAutoScalerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateServiceAutoScalerWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Updates the Cron Horizontal Pod Autoscaler (CronHPA) settings of a service.
   * 
   * @param request - UpdateServiceCronScalerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceCronScalerResponse
   */
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

  /**
   * Updates the Cron Horizontal Pod Autoscaler (CronHPA) settings of a service.
   * 
   * @param request - UpdateServiceCronScalerRequest
   * @returns UpdateServiceCronScalerResponse
   */
  async updateServiceCronScaler(ClusterId: string, ServiceName: string, request: UpdateServiceCronScalerRequest): Promise<UpdateServiceCronScalerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateServiceCronScalerWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Updates attributes of service instances. Only isolation can be performed for service instances.
   * 
   * @param request - UpdateServiceInstanceRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceInstanceResponse
   */
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

  /**
   * Updates attributes of service instances. Only isolation can be performed for service instances.
   * 
   * @param request - UpdateServiceInstanceRequest
   * @returns UpdateServiceInstanceResponse
   */
  async updateServiceInstance(ClusterId: string, ServiceName: string, InstanceName: string, request: UpdateServiceInstanceRequest): Promise<UpdateServiceInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateServiceInstanceWithOptions(ClusterId, ServiceName, InstanceName, request, headers, runtime);
  }

  /**
   * Adds service tags or updates existing service tags.
   * 
   * @param request - UpdateServiceLabelRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceLabelResponse
   */
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

  /**
   * Adds service tags or updates existing service tags.
   * 
   * @param request - UpdateServiceLabelRequest
   * @returns UpdateServiceLabelResponse
   */
  async updateServiceLabel(ClusterId: string, ServiceName: string, request: UpdateServiceLabelRequest): Promise<UpdateServiceLabelResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateServiceLabelWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Updates the traffic mirroring configurations of a service.
   * 
   * @param request - UpdateServiceMirrorRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceMirrorResponse
   */
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

  /**
   * Updates the traffic mirroring configurations of a service.
   * 
   * @param request - UpdateServiceMirrorRequest
   * @returns UpdateServiceMirrorResponse
   */
  async updateServiceMirror(ClusterId: string, ServiceName: string, request: UpdateServiceMirrorRequest): Promise<UpdateServiceMirrorResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateServiceMirrorWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Updates the safety lock of a service to minimize misoperations on the service.
   * 
   * @param request - UpdateServiceSafetyLockRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceSafetyLockResponse
   */
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

  /**
   * Updates the safety lock of a service to minimize misoperations on the service.
   * 
   * @param request - UpdateServiceSafetyLockRequest
   * @returns UpdateServiceSafetyLockResponse
   */
  async updateServiceSafetyLock(ClusterId: string, ServiceName: string, request: UpdateServiceSafetyLockRequest): Promise<UpdateServiceSafetyLockResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateServiceSafetyLockWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

  /**
   * Updates the version of a service or rolls back the service to a specific version.
   * 
   * @param request - UpdateServiceVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateServiceVersionResponse
   */
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

  /**
   * Updates the version of a service or rolls back the service to a specific version.
   * 
   * @param request - UpdateServiceVersionRequest
   * @returns UpdateServiceVersionResponse
   */
  async updateServiceVersion(ClusterId: string, ServiceName: string, request: UpdateServiceVersionRequest): Promise<UpdateServiceVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateServiceVersionWithOptions(ClusterId, ServiceName, request, headers, runtime);
  }

}

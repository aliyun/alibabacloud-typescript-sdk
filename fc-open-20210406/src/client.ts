// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class AccelerationInfo extends $tea.Model {
  status?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CertConfig extends $tea.Model {
  certName?: string;
  certificate?: string;
  privateKey?: string;
  static names(): { [key: string]: string } {
    return {
      certName: 'certName',
      certificate: 'certificate',
      privateKey: 'privateKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certName: 'string',
      certificate: 'string',
      privateKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Code extends $tea.Model {
  codeCheckSum?: string;
  err?: string;
  ossBucketName?: string;
  ossObjectName?: string;
  zipFile?: string;
  static names(): { [key: string]: string } {
    return {
      codeCheckSum: 'codeCheckSum',
      err: 'err',
      ossBucketName: 'ossBucketName',
      ossObjectName: 'ossObjectName',
      zipFile: 'zipFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeCheckSum: 'string',
      err: 'string',
      ossBucketName: 'string',
      ossObjectName: 'string',
      zipFile: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CustomContainerConfig extends $tea.Model {
  accelerationType?: string;
  args?: string;
  command?: string;
  image?: string;
  static names(): { [key: string]: string } {
    return {
      accelerationType: 'accelerationType',
      args: 'args',
      command: 'command',
      image: 'image',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerationType: 'string',
      args: 'string',
      command: 'string',
      image: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CustomContainerConfigInfo extends $tea.Model {
  accelerationInfo?: AccelerationInfo;
  accelerationType?: string;
  args?: string;
  command?: string;
  image?: string;
  static names(): { [key: string]: string } {
    return {
      accelerationInfo: 'accelerationInfo',
      accelerationType: 'accelerationType',
      args: 'args',
      command: 'command',
      image: 'image',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerationInfo: AccelerationInfo,
      accelerationType: 'string',
      args: 'string',
      command: 'string',
      image: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Destination extends $tea.Model {
  destination?: string;
  static names(): { [key: string]: string } {
    return {
      destination: 'destination',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destination: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DestinationConfig extends $tea.Model {
  onFailure?: Destination;
  onSuccess?: Destination;
  static names(): { [key: string]: string } {
    return {
      onFailure: 'onFailure',
      onSuccess: 'onSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onFailure: Destination,
      onSuccess: Destination,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstanceLifecycleConfig extends $tea.Model {
  preFreeze?: LifecycleHook;
  preStop?: LifecycleHook;
  static names(): { [key: string]: string } {
    return {
      preFreeze: 'preFreeze',
      preStop: 'preStop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preFreeze: LifecycleHook,
      preStop: LifecycleHook,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JaegerConfig extends $tea.Model {
  endpoint?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'endpoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Layer extends $tea.Model {
  acl?: number;
  arn?: string;
  code?: LayerCode;
  codeChecksum?: string;
  codeSize?: number;
  compatibleRuntime?: string[];
  createTime?: string;
  description?: string;
  layerName?: string;
  version?: number;
  static names(): { [key: string]: string } {
    return {
      acl: 'acl',
      arn: 'arn',
      code: 'code',
      codeChecksum: 'codeChecksum',
      codeSize: 'codeSize',
      compatibleRuntime: 'compatibleRuntime',
      createTime: 'createTime',
      description: 'description',
      layerName: 'layerName',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acl: 'number',
      arn: 'string',
      code: LayerCode,
      codeChecksum: 'string',
      codeSize: 'number',
      compatibleRuntime: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      description: 'string',
      layerName: 'string',
      version: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LayerCode extends $tea.Model {
  location?: string;
  repositoryType?: string;
  static names(): { [key: string]: string } {
    return {
      location: 'location',
      repositoryType: 'repositoryType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      location: 'string',
      repositoryType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LifecycleHook extends $tea.Model {
  handler?: string;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      handler: 'handler',
      timeout: 'timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      handler: 'string',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LogConfig extends $tea.Model {
  enableInstanceMetrics?: boolean;
  enableRequestMetrics?: boolean;
  logBeginRule?: string;
  logstore?: string;
  project?: string;
  static names(): { [key: string]: string } {
    return {
      enableInstanceMetrics: 'enableInstanceMetrics',
      enableRequestMetrics: 'enableRequestMetrics',
      logBeginRule: 'logBeginRule',
      logstore: 'logstore',
      project: 'project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableInstanceMetrics: 'boolean',
      enableRequestMetrics: 'boolean',
      logBeginRule: 'string',
      logstore: 'string',
      project: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NASConfig extends $tea.Model {
  groupId?: string;
  mountPoints?: NASConfigMountPoints[];
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'groupId',
      mountPoints: 'mountPoints',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      mountPoints: { 'type': 'array', 'itemType': NASConfigMountPoints },
      userId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnDemandConfig extends $tea.Model {
  maximumInstanceCount?: number;
  resource?: string;
  static names(): { [key: string]: string } {
    return {
      maximumInstanceCount: 'maximumInstanceCount',
      resource: 'resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maximumInstanceCount: 'number',
      resource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenReservedCapacity extends $tea.Model {
  createdTime?: string;
  cu?: number;
  deadline?: string;
  instanceId?: string;
  isRefunded?: string;
  lastModifiedTime?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      cu: 'cu',
      deadline: 'deadline',
      instanceId: 'instanceId',
      isRefunded: 'isRefunded',
      lastModifiedTime: 'lastModifiedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      cu: 'number',
      deadline: 'string',
      instanceId: 'string',
      isRefunded: 'string',
      lastModifiedTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OutputCodeLocation extends $tea.Model {
  location?: string;
  repositoryType?: string;
  static names(): { [key: string]: string } {
    return {
      location: 'location',
      repositoryType: 'repositoryType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      location: 'string',
      repositoryType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PathConfig extends $tea.Model {
  functionName?: string;
  methods?: string[];
  path?: string;
  qualifier?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      functionName: 'functionName',
      methods: 'methods',
      path: 'path',
      qualifier: 'qualifier',
      serviceName: 'serviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionName: 'string',
      methods: { 'type': 'array', 'itemType': 'string' },
      path: 'string',
      qualifier: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Resource extends $tea.Model {
  resourceArn?: string;
  tags?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      resourceArn: 'resourceArn',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceArn: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RouteConfig extends $tea.Model {
  routes?: PathConfig[];
  static names(): { [key: string]: string } {
    return {
      routes: 'routes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routes: { 'type': 'array', 'itemType': PathConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScheduledActions extends $tea.Model {
  endTime?: string;
  name?: string;
  scheduleExpression?: string;
  startTime?: string;
  target?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      name: 'name',
      scheduleExpression: 'scheduleExpression',
      startTime: 'startTime',
      target: 'target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      name: 'string',
      scheduleExpression: 'string',
      startTime: 'string',
      target: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StatefulAsyncInvocation extends $tea.Model {
  alreadyRetriedTimes?: number;
  destinationStatus?: string;
  endTime?: number;
  functionName?: string;
  invocationErrorMessage?: string;
  invocationId?: string;
  invocationPayload?: string;
  qualifier?: string;
  requestId?: string;
  serviceName?: string;
  startedTime?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      alreadyRetriedTimes: 'alreadyRetriedTimes',
      destinationStatus: 'destinationStatus',
      endTime: 'endTime',
      functionName: 'functionName',
      invocationErrorMessage: 'invocationErrorMessage',
      invocationId: 'invocationId',
      invocationPayload: 'invocationPayload',
      qualifier: 'qualifier',
      requestId: 'requestId',
      serviceName: 'serviceName',
      startedTime: 'startedTime',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alreadyRetriedTimes: 'number',
      destinationStatus: 'string',
      endTime: 'number',
      functionName: 'string',
      invocationErrorMessage: 'string',
      invocationId: 'string',
      invocationPayload: 'string',
      qualifier: 'string',
      requestId: 'string',
      serviceName: 'string',
      startedTime: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TargetTrackingPolicies extends $tea.Model {
  endTime?: string;
  maxCapacity?: number;
  metricTarget?: number;
  metricType?: string;
  minCapacity?: number;
  name?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      maxCapacity: 'maxCapacity',
      metricTarget: 'metricTarget',
      metricType: 'metricType',
      minCapacity: 'minCapacity',
      name: 'name',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      maxCapacity: 'number',
      metricTarget: 'number',
      metricType: 'string',
      minCapacity: 'number',
      name: 'string',
      startTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TracingConfig extends $tea.Model {
  jaegerConfig?: JaegerConfig;
  params?: { [key: string]: string };
  type?: string;
  static names(): { [key: string]: string } {
    return {
      jaegerConfig: 'jaegerConfig',
      params: 'params',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jaegerConfig: JaegerConfig,
      params: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VPCConfig extends $tea.Model {
  role?: string;
  securityGroupId?: string;
  vSwitchIds?: string[];
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      role: 'role',
      securityGroupId: 'securityGroupId',
      vSwitchIds: 'vSwitchIds',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: 'string',
      securityGroupId: 'string',
      vSwitchIds: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAliasRequest extends $tea.Model {
  additionalVersionWeight?: { [key: string]: number };
  aliasName?: string;
  description?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      additionalVersionWeight: 'additionalVersionWeight',
      aliasName: 'aliasName',
      description: 'description',
      versionId: 'versionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalVersionWeight: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      aliasName: 'string',
      description: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAliasResponseBody extends $tea.Model {
  additionalVersionWeight?: { [key: string]: number };
  aliasName?: string;
  createdTime?: string;
  description?: string;
  lastModifiedTime?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      additionalVersionWeight: 'additionalVersionWeight',
      aliasName: 'aliasName',
      createdTime: 'createdTime',
      description: 'description',
      lastModifiedTime: 'lastModifiedTime',
      versionId: 'versionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalVersionWeight: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      aliasName: 'string',
      createdTime: 'string',
      description: 'string',
      lastModifiedTime: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAliasResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateAliasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateAliasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomDomainRequest extends $tea.Model {
  certConfig?: CertConfig;
  domainName?: string;
  protocol?: string;
  routeConfig?: RouteConfig;
  static names(): { [key: string]: string } {
    return {
      certConfig: 'certConfig',
      domainName: 'domainName',
      protocol: 'protocol',
      routeConfig: 'routeConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certConfig: CertConfig,
      domainName: 'string',
      protocol: 'string',
      routeConfig: RouteConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomDomainResponseBody extends $tea.Model {
  accountId?: string;
  apiVersion?: string;
  certConfig?: CertConfig;
  createdTime?: string;
  domainName?: string;
  lastModifiedTime?: string;
  protocol?: string;
  routeConfig?: RouteConfig;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      apiVersion: 'apiVersion',
      certConfig: 'certConfig',
      createdTime: 'createdTime',
      domainName: 'domainName',
      lastModifiedTime: 'lastModifiedTime',
      protocol: 'protocol',
      routeConfig: 'routeConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      apiVersion: 'string',
      certConfig: CertConfig,
      createdTime: 'string',
      domainName: 'string',
      lastModifiedTime: 'string',
      protocol: 'string',
      routeConfig: RouteConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateCustomDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateCustomDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFunctionHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xFcCodeChecksum?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcCodeChecksum: 'x-fc-code-checksum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcCodeChecksum: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFunctionRequest extends $tea.Model {
  caPort?: number;
  code?: Code;
  customContainerConfig?: CustomContainerConfig;
  description?: string;
  environmentVariables?: { [key: string]: string };
  functionName?: string;
  handler?: string;
  initializationTimeout?: number;
  initializer?: string;
  instanceConcurrency?: number;
  instanceLifecycleConfig?: InstanceLifecycleConfig;
  instanceType?: string;
  layers?: string[];
  memorySize?: number;
  runtime?: string;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      caPort: 'caPort',
      code: 'code',
      customContainerConfig: 'customContainerConfig',
      description: 'description',
      environmentVariables: 'environmentVariables',
      functionName: 'functionName',
      handler: 'handler',
      initializationTimeout: 'initializationTimeout',
      initializer: 'initializer',
      instanceConcurrency: 'instanceConcurrency',
      instanceLifecycleConfig: 'instanceLifecycleConfig',
      instanceType: 'instanceType',
      layers: 'layers',
      memorySize: 'memorySize',
      runtime: 'runtime',
      timeout: 'timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caPort: 'number',
      code: Code,
      customContainerConfig: CustomContainerConfig,
      description: 'string',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      functionName: 'string',
      handler: 'string',
      initializationTimeout: 'number',
      initializer: 'string',
      instanceConcurrency: 'number',
      instanceLifecycleConfig: InstanceLifecycleConfig,
      instanceType: 'string',
      layers: { 'type': 'array', 'itemType': 'string' },
      memorySize: 'number',
      runtime: 'string',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFunctionResponseBody extends $tea.Model {
  caPort?: number;
  codeChecksum?: string;
  codeSize?: number;
  createdTime?: string;
  customContainerConfig?: CustomContainerConfig;
  description?: string;
  environmentVariables?: { [key: string]: string };
  functionId?: string;
  functionName?: string;
  handler?: string;
  initializationTimeout?: number;
  initializer?: string;
  instanceConcurrency?: number;
  instanceLifecycleConfig?: InstanceLifecycleConfig;
  instanceType?: string;
  lastModifiedTime?: string;
  layers?: string[];
  memorySize?: number;
  runtime?: string;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      caPort: 'caPort',
      codeChecksum: 'codeChecksum',
      codeSize: 'codeSize',
      createdTime: 'createdTime',
      customContainerConfig: 'customContainerConfig',
      description: 'description',
      environmentVariables: 'environmentVariables',
      functionId: 'functionId',
      functionName: 'functionName',
      handler: 'handler',
      initializationTimeout: 'initializationTimeout',
      initializer: 'initializer',
      instanceConcurrency: 'instanceConcurrency',
      instanceLifecycleConfig: 'instanceLifecycleConfig',
      instanceType: 'instanceType',
      lastModifiedTime: 'lastModifiedTime',
      layers: 'layers',
      memorySize: 'memorySize',
      runtime: 'runtime',
      timeout: 'timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caPort: 'number',
      codeChecksum: 'string',
      codeSize: 'number',
      createdTime: 'string',
      customContainerConfig: CustomContainerConfig,
      description: 'string',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      functionId: 'string',
      functionName: 'string',
      handler: 'string',
      initializationTimeout: 'number',
      initializer: 'string',
      instanceConcurrency: 'number',
      instanceLifecycleConfig: InstanceLifecycleConfig,
      instanceType: 'string',
      lastModifiedTime: 'string',
      layers: { 'type': 'array', 'itemType': 'string' },
      memorySize: 'number',
      runtime: 'string',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFunctionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateFunctionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateFunctionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLayerVersionRequest extends $tea.Model {
  code?: Code;
  compatibleRuntime?: string[];
  description?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      compatibleRuntime: 'compatibleRuntime',
      description: 'description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: Code,
      compatibleRuntime: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLayerVersionResponseBody extends $tea.Model {
  acl?: number;
  arn?: string;
  code?: OutputCodeLocation;
  codeChecksum?: string;
  codesize?: number;
  compatibleRuntime?: string[];
  createTime?: string;
  description?: string;
  layerName?: string;
  version?: number;
  static names(): { [key: string]: string } {
    return {
      acl: 'acl',
      arn: 'arn',
      code: 'code',
      codeChecksum: 'codeChecksum',
      codesize: 'codesize',
      compatibleRuntime: 'compatibleRuntime',
      createTime: 'createTime',
      description: 'description',
      layerName: 'layerName',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acl: 'number',
      arn: 'string',
      code: OutputCodeLocation,
      codeChecksum: 'string',
      codesize: 'number',
      compatibleRuntime: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      description: 'string',
      layerName: 'string',
      version: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLayerVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateLayerVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateLayerVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceRequest extends $tea.Model {
  description?: string;
  internetAccess?: boolean;
  logConfig?: LogConfig;
  nasConfig?: NASConfig;
  role?: string;
  serviceName?: string;
  tracingConfig?: TracingConfig;
  vpcConfig?: VPCConfig;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      internetAccess: 'internetAccess',
      logConfig: 'logConfig',
      nasConfig: 'nasConfig',
      role: 'role',
      serviceName: 'serviceName',
      tracingConfig: 'tracingConfig',
      vpcConfig: 'vpcConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      internetAccess: 'boolean',
      logConfig: LogConfig,
      nasConfig: NASConfig,
      role: 'string',
      serviceName: 'string',
      tracingConfig: TracingConfig,
      vpcConfig: VPCConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceResponseBody extends $tea.Model {
  createdTime?: string;
  description?: string;
  internetAccess?: boolean;
  lastModifiedTime?: string;
  logConfig?: LogConfig;
  nasConfig?: NASConfig;
  role?: string;
  serviceId?: string;
  serviceName?: string;
  tracingConfig?: TracingConfig;
  vpcConfig?: VPCConfig;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      description: 'description',
      internetAccess: 'internetAccess',
      lastModifiedTime: 'lastModifiedTime',
      logConfig: 'logConfig',
      nasConfig: 'nasConfig',
      role: 'role',
      serviceId: 'serviceId',
      serviceName: 'serviceName',
      tracingConfig: 'tracingConfig',
      vpcConfig: 'vpcConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      internetAccess: 'boolean',
      lastModifiedTime: 'string',
      logConfig: LogConfig,
      nasConfig: NASConfig,
      role: 'string',
      serviceId: 'string',
      serviceName: 'string',
      tracingConfig: TracingConfig,
      vpcConfig: VPCConfig,
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

export class CreateTriggerRequest extends $tea.Model {
  description?: string;
  invocationRole?: string;
  qualifier?: string;
  sourceArn?: string;
  triggerConfig?: string;
  triggerName?: string;
  triggerType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      invocationRole: 'invocationRole',
      qualifier: 'qualifier',
      sourceArn: 'sourceArn',
      triggerConfig: 'triggerConfig',
      triggerName: 'triggerName',
      triggerType: 'triggerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      invocationRole: 'string',
      qualifier: 'string',
      sourceArn: 'string',
      triggerConfig: 'string',
      triggerName: 'string',
      triggerType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTriggerResponseBody extends $tea.Model {
  createdTime?: string;
  description?: string;
  invocationRole?: string;
  lastModifiedTime?: string;
  qualifier?: string;
  sourceArn?: string;
  triggerConfig?: string;
  triggerId?: string;
  triggerName?: string;
  triggerType?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      description: 'description',
      invocationRole: 'invocationRole',
      lastModifiedTime: 'lastModifiedTime',
      qualifier: 'qualifier',
      sourceArn: 'sourceArn',
      triggerConfig: 'triggerConfig',
      triggerId: 'triggerId',
      triggerName: 'triggerName',
      triggerType: 'triggerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      invocationRole: 'string',
      lastModifiedTime: 'string',
      qualifier: 'string',
      sourceArn: 'string',
      triggerConfig: 'string',
      triggerId: 'string',
      triggerName: 'string',
      triggerType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTriggerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateTriggerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateTriggerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcBindingRequest extends $tea.Model {
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      vpcId: 'vpcId',
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

export class CreateVpcBindingResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAliasHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  ifMatch?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      ifMatch: 'If-Match',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      ifMatch: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAliasResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFunctionHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  ifMatch?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      ifMatch: 'If-Match',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      ifMatch: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFunctionResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFunctionAsyncInvokeConfigRequest extends $tea.Model {
  qualifier?: string;
  static names(): { [key: string]: string } {
    return {
      qualifier: 'qualifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFunctionAsyncInvokeConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFunctionOnDemandConfigHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  ifMatch?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      ifMatch: 'If-Match',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      ifMatch: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFunctionOnDemandConfigRequest extends $tea.Model {
  qualifier?: string;
  static names(): { [key: string]: string } {
    return {
      qualifier: 'qualifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFunctionOnDemandConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLayerVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  ifMatch?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      ifMatch: 'If-Match',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      ifMatch: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTriggerHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  ifMatch?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      ifMatch: 'If-Match',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      ifMatch: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTriggerResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpcBindingResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeregisterEventSourceRequest extends $tea.Model {
  qualifier?: string;
  static names(): { [key: string]: string } {
    return {
      qualifier: 'qualifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeregisterEventSourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountSettingsResponseBody extends $tea.Model {
  availableAZs?: string[];
  static names(): { [key: string]: string } {
    return {
      availableAZs: 'availableAZs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableAZs: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountSettingsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAccountSettingsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAccountSettingsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAliasResponseBody extends $tea.Model {
  additionalVersionWeight?: { [key: string]: number };
  aliasName?: string;
  createdTime?: string;
  description?: string;
  lastModifiedTime?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      additionalVersionWeight: 'additionalVersionWeight',
      aliasName: 'aliasName',
      createdTime: 'createdTime',
      description: 'description',
      lastModifiedTime: 'lastModifiedTime',
      versionId: 'versionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalVersionWeight: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      aliasName: 'string',
      createdTime: 'string',
      description: 'string',
      lastModifiedTime: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAliasResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetAliasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetAliasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomDomainResponseBody extends $tea.Model {
  accountId?: string;
  apiVersion?: string;
  certConfig?: CertConfig;
  createdTime?: string;
  domainName?: string;
  lastModifiedTime?: string;
  protocol?: string;
  routeConfig?: RouteConfig;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      apiVersion: 'apiVersion',
      certConfig: 'certConfig',
      createdTime: 'createdTime',
      domainName: 'domainName',
      lastModifiedTime: 'lastModifiedTime',
      protocol: 'protocol',
      routeConfig: 'routeConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      apiVersion: 'string',
      certConfig: CertConfig,
      createdTime: 'string',
      domainName: 'string',
      lastModifiedTime: 'string',
      protocol: 'string',
      routeConfig: RouteConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetCustomDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetCustomDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionRequest extends $tea.Model {
  qualifier?: string;
  static names(): { [key: string]: string } {
    return {
      qualifier: 'qualifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionResponseBody extends $tea.Model {
  caPort?: number;
  codeChecksum?: string;
  codeSize?: number;
  createdTime?: string;
  customContainerConfig?: CustomContainerConfigInfo;
  description?: string;
  environmentVariables?: { [key: string]: string };
  functionId?: string;
  functionName?: string;
  handler?: string;
  initializationTimeout?: number;
  initializer?: string;
  instanceConcurrency?: number;
  instanceLifecycleConfig?: InstanceLifecycleConfig;
  instanceType?: string;
  lastModifiedTime?: string;
  layers?: string[];
  memorySize?: number;
  runtime?: string;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      caPort: 'caPort',
      codeChecksum: 'codeChecksum',
      codeSize: 'codeSize',
      createdTime: 'createdTime',
      customContainerConfig: 'customContainerConfig',
      description: 'description',
      environmentVariables: 'environmentVariables',
      functionId: 'functionId',
      functionName: 'functionName',
      handler: 'handler',
      initializationTimeout: 'initializationTimeout',
      initializer: 'initializer',
      instanceConcurrency: 'instanceConcurrency',
      instanceLifecycleConfig: 'instanceLifecycleConfig',
      instanceType: 'instanceType',
      lastModifiedTime: 'lastModifiedTime',
      layers: 'layers',
      memorySize: 'memorySize',
      runtime: 'runtime',
      timeout: 'timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caPort: 'number',
      codeChecksum: 'string',
      codeSize: 'number',
      createdTime: 'string',
      customContainerConfig: CustomContainerConfigInfo,
      description: 'string',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      functionId: 'string',
      functionName: 'string',
      handler: 'string',
      initializationTimeout: 'number',
      initializer: 'string',
      instanceConcurrency: 'number',
      instanceLifecycleConfig: InstanceLifecycleConfig,
      instanceType: 'string',
      lastModifiedTime: 'string',
      layers: { 'type': 'array', 'itemType': 'string' },
      memorySize: 'number',
      runtime: 'string',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetFunctionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetFunctionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionAsyncInvokeConfigRequest extends $tea.Model {
  qualifier?: string;
  static names(): { [key: string]: string } {
    return {
      qualifier: 'qualifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionAsyncInvokeConfigResponseBody extends $tea.Model {
  createdTime?: string;
  destinationConfig?: DestinationConfig;
  function?: string;
  lastModifiedTime?: string;
  maxAsyncEventAgeInSeconds?: number;
  maxAsyncRetryAttempts?: number;
  qualifier?: string;
  service?: string;
  statefulInvocation?: boolean;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      destinationConfig: 'destinationConfig',
      function: 'function',
      lastModifiedTime: 'lastModifiedTime',
      maxAsyncEventAgeInSeconds: 'maxAsyncEventAgeInSeconds',
      maxAsyncRetryAttempts: 'maxAsyncRetryAttempts',
      qualifier: 'qualifier',
      service: 'service',
      statefulInvocation: 'statefulInvocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      destinationConfig: DestinationConfig,
      function: 'string',
      lastModifiedTime: 'string',
      maxAsyncEventAgeInSeconds: 'number',
      maxAsyncRetryAttempts: 'number',
      qualifier: 'string',
      service: 'string',
      statefulInvocation: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionAsyncInvokeConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetFunctionAsyncInvokeConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetFunctionAsyncInvokeConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionCodeRequest extends $tea.Model {
  qualifier?: string;
  static names(): { [key: string]: string } {
    return {
      qualifier: 'qualifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionCodeResponseBody extends $tea.Model {
  checksum?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      checksum: 'checksum',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checksum: 'string',
      url: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionCodeResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetFunctionCodeResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetFunctionCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionOnDemandConfigRequest extends $tea.Model {
  qualifier?: string;
  static names(): { [key: string]: string } {
    return {
      qualifier: 'qualifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionOnDemandConfigResponseBody extends $tea.Model {
  maximumInstanceCount?: number;
  resource?: string;
  static names(): { [key: string]: string } {
    return {
      maximumInstanceCount: 'maximumInstanceCount',
      resource: 'resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maximumInstanceCount: 'number',
      resource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionOnDemandConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetFunctionOnDemandConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetFunctionOnDemandConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLayerVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: Layer;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: Layer,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLayerVersionByArnResponseBody extends $tea.Model {
  acl?: number;
  arn?: string;
  code?: OutputCodeLocation;
  codeChecksum?: string;
  codesize?: number;
  compatibleRuntime?: string[];
  createTime?: string;
  description?: string;
  layerName?: string;
  version?: number;
  static names(): { [key: string]: string } {
    return {
      acl: 'acl',
      arn: 'arn',
      code: 'code',
      codeChecksum: 'codeChecksum',
      codesize: 'codesize',
      compatibleRuntime: 'compatibleRuntime',
      createTime: 'createTime',
      description: 'description',
      layerName: 'layerName',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acl: 'number',
      arn: 'string',
      code: OutputCodeLocation,
      codeChecksum: 'string',
      codesize: 'number',
      compatibleRuntime: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      description: 'string',
      layerName: 'string',
      version: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLayerVersionByArnResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetLayerVersionByArnResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetLayerVersionByArnResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProvisionConfigRequest extends $tea.Model {
  target?: number;
  qualifier?: string;
  static names(): { [key: string]: string } {
    return {
      target: 'target',
      qualifier: 'qualifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      target: 'number',
      qualifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProvisionConfigResponseBody extends $tea.Model {
  current?: number;
  resource?: string;
  scheduledActions?: ScheduledActions[];
  target?: number;
  targetTrackingPolicies?: TargetTrackingPolicies[];
  static names(): { [key: string]: string } {
    return {
      current: 'current',
      resource: 'resource',
      scheduledActions: 'scheduledActions',
      target: 'target',
      targetTrackingPolicies: 'targetTrackingPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      resource: 'string',
      scheduledActions: { 'type': 'array', 'itemType': ScheduledActions },
      target: 'number',
      targetTrackingPolicies: { 'type': 'array', 'itemType': TargetTrackingPolicies },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProvisionConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetProvisionConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetProvisionConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceTagsRequest extends $tea.Model {
  resourceArn?: string;
  static names(): { [key: string]: string } {
    return {
      resourceArn: 'resourceArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceArn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceTagsResponseBody extends $tea.Model {
  resourceArn?: string;
  tags?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      resourceArn: 'resourceArn',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceArn: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceTagsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetResourceTagsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetResourceTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceRequest extends $tea.Model {
  qualifier?: string;
  static names(): { [key: string]: string } {
    return {
      qualifier: 'qualifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBody extends $tea.Model {
  createdTime?: string;
  description?: string;
  internetAccess?: boolean;
  lastModifiedTime?: string;
  logConfig?: LogConfig;
  nasConfig?: NASConfig;
  role?: string;
  serviceId?: string;
  serviceName?: string;
  tracingConfig?: TracingConfig;
  vpcConfig?: VPCConfig;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      description: 'description',
      internetAccess: 'internetAccess',
      lastModifiedTime: 'lastModifiedTime',
      logConfig: 'logConfig',
      nasConfig: 'nasConfig',
      role: 'role',
      serviceId: 'serviceId',
      serviceName: 'serviceName',
      tracingConfig: 'tracingConfig',
      vpcConfig: 'vpcConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      internetAccess: 'boolean',
      lastModifiedTime: 'string',
      logConfig: LogConfig,
      nasConfig: NASConfig,
      role: 'string',
      serviceId: 'string',
      serviceName: 'string',
      tracingConfig: TracingConfig,
      vpcConfig: VPCConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetServiceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStatefulAsyncInvocationRequest extends $tea.Model {
  qualifier?: string;
  static names(): { [key: string]: string } {
    return {
      qualifier: 'qualifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStatefulAsyncInvocationResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StatefulAsyncInvocation;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StatefulAsyncInvocation,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTriggerResponseBody extends $tea.Model {
  createdTime?: string;
  description?: string;
  invocationRole?: string;
  lastModifiedTime?: string;
  qualifier?: string;
  sourceArn?: string;
  triggerConfig?: string;
  triggerId?: string;
  triggerName?: string;
  triggerType?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      description: 'description',
      invocationRole: 'invocationRole',
      lastModifiedTime: 'lastModifiedTime',
      qualifier: 'qualifier',
      sourceArn: 'sourceArn',
      triggerConfig: 'triggerConfig',
      triggerId: 'triggerId',
      triggerName: 'triggerName',
      triggerType: 'triggerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      invocationRole: 'string',
      lastModifiedTime: 'string',
      qualifier: 'string',
      sourceArn: 'string',
      triggerConfig: 'string',
      triggerId: 'string',
      triggerName: 'string',
      triggerType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTriggerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetTriggerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetTriggerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeFunctionHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xFcAccountId?: string;
  xFcInvocationType?: string;
  xFcLogType?: string;
  xFcStatefulAsyncInvocationId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcInvocationType: 'x-fc-invocation-type',
      xFcLogType: 'x-fc-log-type',
      xFcStatefulAsyncInvocationId: 'x-fc-stateful-async-invocation-id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAccountId: 'string',
      xFcInvocationType: 'string',
      xFcLogType: 'string',
      xFcStatefulAsyncInvocationId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeFunctionRequest extends $tea.Model {
  body?: Buffer;
  qualifier?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      qualifier: 'qualifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'Buffer',
      qualifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeFunctionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: Buffer;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: 'Buffer',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAliasesRequest extends $tea.Model {
  limit?: number;
  nextToken?: string;
  prefix?: string;
  startKey?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      nextToken: 'nextToken',
      prefix: 'prefix',
      startKey: 'startKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      nextToken: 'string',
      prefix: 'string',
      startKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAliasesResponseBody extends $tea.Model {
  aliases?: ListAliasesResponseBodyAliases[];
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      aliases: 'aliases',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliases: { 'type': 'array', 'itemType': ListAliasesResponseBodyAliases },
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAliasesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListAliasesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListAliasesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomDomainsRequest extends $tea.Model {
  limit?: number;
  nextToken?: string;
  prefix?: string;
  startKey?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      nextToken: 'nextToken',
      prefix: 'prefix',
      startKey: 'startKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      nextToken: 'string',
      prefix: 'string',
      startKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomDomainsResponseBody extends $tea.Model {
  customDomains?: ListCustomDomainsResponseBodyCustomDomains[];
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      customDomains: 'customDomains',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customDomains: { 'type': 'array', 'itemType': ListCustomDomainsResponseBodyCustomDomains },
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomDomainsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListCustomDomainsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListCustomDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventSourcesRequest extends $tea.Model {
  qualifier?: string;
  static names(): { [key: string]: string } {
    return {
      qualifier: 'qualifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventSourcesResponseBody extends $tea.Model {
  eventSources?: ListEventSourcesResponseBodyEventSources[];
  static names(): { [key: string]: string } {
    return {
      eventSources: 'eventSources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventSources: { 'type': 'array', 'itemType': ListEventSourcesResponseBodyEventSources },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventSourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListEventSourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListEventSourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionAsyncInvokeConfigsRequest extends $tea.Model {
  limit?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionAsyncInvokeConfigsResponseBody extends $tea.Model {
  configs?: ListFunctionAsyncInvokeConfigsResponseBodyConfigs[];
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      configs: 'configs',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': ListFunctionAsyncInvokeConfigsResponseBodyConfigs },
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionAsyncInvokeConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFunctionAsyncInvokeConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFunctionAsyncInvokeConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsRequest extends $tea.Model {
  limit?: number;
  nextToken?: string;
  prefix?: string;
  qualifier?: string;
  startKey?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      nextToken: 'nextToken',
      prefix: 'prefix',
      qualifier: 'qualifier',
      startKey: 'startKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      nextToken: 'string',
      prefix: 'string',
      qualifier: 'string',
      startKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsResponseBody extends $tea.Model {
  functions?: ListFunctionsResponseBodyFunctions[];
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      functions: 'functions',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functions: { 'type': 'array', 'itemType': ListFunctionsResponseBodyFunctions },
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListFunctionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListFunctionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLayerVersionsRequest extends $tea.Model {
  limit?: number;
  startVersion?: number;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      startVersion: 'startVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      startVersion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLayerVersionsResponseBody extends $tea.Model {
  layers?: Layer[];
  nextVersion?: number;
  static names(): { [key: string]: string } {
    return {
      layers: 'layers',
      nextVersion: 'nextVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layers: { 'type': 'array', 'itemType': Layer },
      nextVersion: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLayerVersionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListLayerVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListLayerVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLayersRequest extends $tea.Model {
  limit?: number;
  nextToken?: string;
  prefix?: string;
  startKey?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      nextToken: 'nextToken',
      prefix: 'prefix',
      startKey: 'startKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      nextToken: 'string',
      prefix: 'string',
      startKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLayersResponseBody extends $tea.Model {
  layers?: Layer[];
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      layers: 'layers',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      layers: { 'type': 'array', 'itemType': Layer },
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLayersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListLayersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListLayersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOnDemandConfigsRequest extends $tea.Model {
  limit?: number;
  nextToken?: string;
  prefix?: string;
  startKey?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      nextToken: 'nextToken',
      prefix: 'prefix',
      startKey: 'startKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      nextToken: 'string',
      prefix: 'string',
      startKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOnDemandConfigsResponseBody extends $tea.Model {
  configs?: OnDemandConfig[];
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      configs: 'configs',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': OnDemandConfig },
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOnDemandConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListOnDemandConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListOnDemandConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProvisionConfigsRequest extends $tea.Model {
  limit?: number;
  nextToken?: string;
  qualifier?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      nextToken: 'nextToken',
      qualifier: 'qualifier',
      serviceName: 'serviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      nextToken: 'string',
      qualifier: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProvisionConfigsResponseBody extends $tea.Model {
  nextToken?: string;
  provisionConfigs?: ListProvisionConfigsResponseBodyProvisionConfigs[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      provisionConfigs: 'provisionConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      provisionConfigs: { 'type': 'array', 'itemType': ListProvisionConfigsResponseBodyProvisionConfigs },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProvisionConfigsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListProvisionConfigsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListProvisionConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListReservedCapacitiesRequest extends $tea.Model {
  limit?: string;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'string',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListReservedCapacitiesResponseBody extends $tea.Model {
  nextToken?: string;
  reservedCapacities?: OpenReservedCapacity[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      reservedCapacities: 'reservedCapacities',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      reservedCapacities: { 'type': 'array', 'itemType': OpenReservedCapacity },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListReservedCapacitiesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListReservedCapacitiesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListReservedCapacitiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceVersionsRequest extends $tea.Model {
  direction?: string;
  limit?: number;
  nextToken?: string;
  startKey?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'direction',
      limit: 'limit',
      nextToken: 'nextToken',
      startKey: 'startKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      limit: 'number',
      nextToken: 'string',
      startKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceVersionsResponseBody extends $tea.Model {
  direction?: string;
  nextToken?: string;
  versions?: ListServiceVersionsResponseBodyVersions[];
  static names(): { [key: string]: string } {
    return {
      direction: 'direction',
      nextToken: 'nextToken',
      versions: 'versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      nextToken: 'string',
      versions: { 'type': 'array', 'itemType': ListServiceVersionsResponseBodyVersions },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceVersionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListServiceVersionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListServiceVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesRequest extends $tea.Model {
  limit?: number;
  nextToken?: string;
  prefix?: string;
  startKey?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      nextToken: 'nextToken',
      prefix: 'prefix',
      startKey: 'startKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      nextToken: 'string',
      prefix: 'string',
      startKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponseBody extends $tea.Model {
  nextToken?: string;
  services?: ListServicesResponseBodyServices[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      services: 'services',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      services: { 'type': 'array', 'itemType': ListServicesResponseBodyServices },
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

export class ListStatefulAsyncInvocationsRequest extends $tea.Model {
  includePayload?: boolean;
  invocationIdPrefix?: string;
  limit?: number;
  nextToken?: string;
  qualifier?: string;
  sortOrderByTime?: string;
  startedTimeBegin?: number;
  startedTimeEnd?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      includePayload: 'includePayload',
      invocationIdPrefix: 'invocationIdPrefix',
      limit: 'limit',
      nextToken: 'nextToken',
      qualifier: 'qualifier',
      sortOrderByTime: 'sortOrderByTime',
      startedTimeBegin: 'startedTimeBegin',
      startedTimeEnd: 'startedTimeEnd',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includePayload: 'boolean',
      invocationIdPrefix: 'string',
      limit: 'number',
      nextToken: 'string',
      qualifier: 'string',
      sortOrderByTime: 'string',
      startedTimeBegin: 'number',
      startedTimeEnd: 'number',
      status: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStatefulAsyncInvocationsResponseBody extends $tea.Model {
  invocations?: StatefulAsyncInvocation[];
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      invocations: 'invocations',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      invocations: { 'type': 'array', 'itemType': StatefulAsyncInvocation },
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStatefulAsyncInvocationsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListStatefulAsyncInvocationsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListStatefulAsyncInvocationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaggedResourcesRequest extends $tea.Model {
  limit?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaggedResourcesResponseBody extends $tea.Model {
  nextToken?: string;
  resources?: Resource[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      resources: 'resources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      resources: { 'type': 'array', 'itemType': Resource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaggedResourcesResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTaggedResourcesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTaggedResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTriggersRequest extends $tea.Model {
  limit?: number;
  nextToken?: number;
  prefix?: string;
  startKey?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      nextToken: 'nextToken',
      prefix: 'prefix',
      startKey: 'startKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      nextToken: 'number',
      prefix: 'string',
      startKey: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTriggersResponseBody extends $tea.Model {
  nextToken?: string;
  triggers?: ListTriggersResponseBodyTriggers[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      triggers: 'triggers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      triggers: { 'type': 'array', 'itemType': ListTriggersResponseBodyTriggers },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTriggersResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListTriggersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListTriggersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcBindingsResponseBody extends $tea.Model {
  vpcIds?: string[];
  static names(): { [key: string]: string } {
    return {
      vpcIds: 'vpcIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcBindingsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListVpcBindingsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListVpcBindingsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PermanentDeleteLayerVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishLayerAsPublicResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishServiceVersionHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  ifMatch?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      ifMatch: 'If-Match',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      ifMatch: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishServiceVersionRequest extends $tea.Model {
  description?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishServiceVersionResponseBody extends $tea.Model {
  createdTime?: string;
  description?: string;
  lastModifiedTime?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      description: 'description',
      lastModifiedTime: 'lastModifiedTime',
      versionId: 'versionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      lastModifiedTime: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishServiceVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PublishServiceVersionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PublishServiceVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutFunctionAsyncInvokeConfigRequest extends $tea.Model {
  destinationConfig?: DestinationConfig;
  maxAsyncEventAgeInSeconds?: number;
  maxAsyncRetryAttempts?: number;
  statefulInvocation?: boolean;
  qualifier?: string;
  static names(): { [key: string]: string } {
    return {
      destinationConfig: 'destinationConfig',
      maxAsyncEventAgeInSeconds: 'maxAsyncEventAgeInSeconds',
      maxAsyncRetryAttempts: 'maxAsyncRetryAttempts',
      statefulInvocation: 'statefulInvocation',
      qualifier: 'qualifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationConfig: DestinationConfig,
      maxAsyncEventAgeInSeconds: 'number',
      maxAsyncRetryAttempts: 'number',
      statefulInvocation: 'boolean',
      qualifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutFunctionAsyncInvokeConfigResponseBody extends $tea.Model {
  createdTime?: string;
  destinationConfig?: DestinationConfig;
  function?: string;
  lastModifiedTime?: string;
  maxAsyncEventAgeInSeconds?: number;
  maxAsyncRetryAttempts?: number;
  qualifier?: string;
  service?: string;
  statefulInvocation?: boolean;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      destinationConfig: 'destinationConfig',
      function: 'function',
      lastModifiedTime: 'lastModifiedTime',
      maxAsyncEventAgeInSeconds: 'maxAsyncEventAgeInSeconds',
      maxAsyncRetryAttempts: 'maxAsyncRetryAttempts',
      qualifier: 'qualifier',
      service: 'service',
      statefulInvocation: 'statefulInvocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      destinationConfig: DestinationConfig,
      function: 'string',
      lastModifiedTime: 'string',
      maxAsyncEventAgeInSeconds: 'number',
      maxAsyncRetryAttempts: 'number',
      qualifier: 'string',
      service: 'string',
      statefulInvocation: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutFunctionAsyncInvokeConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PutFunctionAsyncInvokeConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PutFunctionAsyncInvokeConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutFunctionOnDemandConfigHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  ifMatch?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      ifMatch: 'If-Match',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      ifMatch: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutFunctionOnDemandConfigRequest extends $tea.Model {
  maximumInstanceCount?: number;
  qualifier?: string;
  static names(): { [key: string]: string } {
    return {
      maximumInstanceCount: 'maximumInstanceCount',
      qualifier: 'qualifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maximumInstanceCount: 'number',
      qualifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutFunctionOnDemandConfigResponseBody extends $tea.Model {
  maximumInstanceCount?: number;
  resource?: string;
  static names(): { [key: string]: string } {
    return {
      maximumInstanceCount: 'maximumInstanceCount',
      resource: 'resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maximumInstanceCount: 'number',
      resource: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutFunctionOnDemandConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PutFunctionOnDemandConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PutFunctionOnDemandConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutProvisionConfigRequest extends $tea.Model {
  scheduledActions?: ScheduledActions[];
  target?: number;
  targetTrackingPolicies?: TargetTrackingPolicies[];
  qualifier?: string;
  static names(): { [key: string]: string } {
    return {
      scheduledActions: 'scheduledActions',
      target: 'target',
      targetTrackingPolicies: 'targetTrackingPolicies',
      qualifier: 'qualifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scheduledActions: { 'type': 'array', 'itemType': ScheduledActions },
      target: 'number',
      targetTrackingPolicies: { 'type': 'array', 'itemType': TargetTrackingPolicies },
      qualifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutProvisionConfigResponseBody extends $tea.Model {
  current?: number;
  resource?: string;
  scheduledActions?: ScheduledActions[];
  target?: number;
  targetTrackingPolicies?: TargetTrackingPolicies[];
  static names(): { [key: string]: string } {
    return {
      current: 'current',
      resource: 'resource',
      scheduledActions: 'scheduledActions',
      target: 'target',
      targetTrackingPolicies: 'targetTrackingPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      resource: 'string',
      scheduledActions: { 'type': 'array', 'itemType': ScheduledActions },
      target: 'number',
      targetTrackingPolicies: { 'type': 'array', 'itemType': TargetTrackingPolicies },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutProvisionConfigResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: PutProvisionConfigResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: PutProvisionConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterEventSourceRequest extends $tea.Model {
  sourceArn?: string;
  qualifier?: string;
  static names(): { [key: string]: string } {
    return {
      sourceArn: 'sourceArn',
      qualifier: 'qualifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceArn: 'string',
      qualifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterEventSourceResponseBody extends $tea.Model {
  createdTime?: string;
  sourceArn?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      sourceArn: 'sourceArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      sourceArn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterEventSourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RegisterEventSourceResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RegisterEventSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopStatefulAsyncInvocationRequest extends $tea.Model {
  qualifier?: string;
  static names(): { [key: string]: string } {
    return {
      qualifier: 'qualifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopStatefulAsyncInvocationResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourceRequest extends $tea.Model {
  resourceArn?: string;
  tags?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      resourceArn: 'resourceArn',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceArn: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourceRequest extends $tea.Model {
  all?: boolean;
  resourceArn?: string;
  tagKeys?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'all',
      resourceArn: 'resourceArn',
      tagKeys: 'tagKeys	',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      resourceArn: 'string',
      tagKeys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourceResponse extends $tea.Model {
  headers: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAliasHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  ifMatch?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      ifMatch: 'If-Match',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      ifMatch: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAliasRequest extends $tea.Model {
  additionalVersionWeight?: { [key: string]: number };
  description?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      additionalVersionWeight: 'additionalVersionWeight',
      description: 'description',
      versionId: 'versionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalVersionWeight: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      description: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAliasResponseBody extends $tea.Model {
  additionalVersionWeight?: { [key: string]: number };
  aliasName?: string;
  createdTime?: string;
  description?: string;
  lastModifiedTime?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      additionalVersionWeight: 'additionalVersionWeight',
      aliasName: 'aliasName',
      createdTime: 'createdTime',
      description: 'description',
      lastModifiedTime: 'lastModifiedTime',
      versionId: 'versionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalVersionWeight: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      aliasName: 'string',
      createdTime: 'string',
      description: 'string',
      lastModifiedTime: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAliasResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateAliasResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateAliasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomDomainRequest extends $tea.Model {
  certConfig?: CertConfig;
  protocol?: string;
  routeConfig?: RouteConfig;
  static names(): { [key: string]: string } {
    return {
      certConfig: 'certConfig',
      protocol: 'protocol',
      routeConfig: 'routeConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certConfig: CertConfig,
      protocol: 'string',
      routeConfig: RouteConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomDomainResponseBody extends $tea.Model {
  accountId?: string;
  apiVersion?: string;
  certConfig?: CertConfig;
  createdTime?: string;
  domainName?: string;
  lastModifiedTime?: string;
  protocol?: string;
  routeConfig?: RouteConfig;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      apiVersion: 'apiVersion',
      certConfig: 'certConfig',
      createdTime: 'createdTime',
      domainName: 'domainName',
      lastModifiedTime: 'lastModifiedTime',
      protocol: 'protocol',
      routeConfig: 'routeConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      apiVersion: 'string',
      certConfig: CertConfig,
      createdTime: 'string',
      domainName: 'string',
      lastModifiedTime: 'string',
      protocol: 'string',
      routeConfig: RouteConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateCustomDomainResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateCustomDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFunctionHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  ifMatch?: string;
  xFcAccountId?: string;
  xFcCodeChecksum?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      ifMatch: 'If-Match',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcCodeChecksum: 'x-fc-code-checksum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      ifMatch: 'string',
      xFcAccountId: 'string',
      xFcCodeChecksum: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFunctionRequest extends $tea.Model {
  instanceConcurrency?: number;
  caPort?: number;
  code?: Code;
  customContainerConfig?: CustomContainerConfig;
  description?: string;
  environmentVariables?: { [key: string]: string };
  handler?: string;
  initializationTimeout?: number;
  initializer?: string;
  instanceLifecycleConfig?: InstanceLifecycleConfig;
  instanceType?: string;
  layers?: string[];
  memorySize?: number;
  runtime?: string;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      instanceConcurrency: 'InstanceConcurrency',
      caPort: 'caPort',
      code: 'code',
      customContainerConfig: 'customContainerConfig',
      description: 'description',
      environmentVariables: 'environmentVariables',
      handler: 'handler',
      initializationTimeout: 'initializationTimeout',
      initializer: 'initializer',
      instanceLifecycleConfig: 'instanceLifecycleConfig',
      instanceType: 'instanceType',
      layers: 'layers',
      memorySize: 'memorySize',
      runtime: 'runtime',
      timeout: 'timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceConcurrency: 'number',
      caPort: 'number',
      code: Code,
      customContainerConfig: CustomContainerConfig,
      description: 'string',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      handler: 'string',
      initializationTimeout: 'number',
      initializer: 'string',
      instanceLifecycleConfig: InstanceLifecycleConfig,
      instanceType: 'string',
      layers: { 'type': 'array', 'itemType': 'string' },
      memorySize: 'number',
      runtime: 'string',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFunctionResponseBody extends $tea.Model {
  caPort?: number;
  codeChecksum?: string;
  codeSize?: number;
  createdTime?: string;
  customContainerConfig?: CustomContainerConfig;
  description?: string;
  environmentVariables?: { [key: string]: string };
  functionId?: string;
  functionName?: string;
  handler?: string;
  initializationTimeout?: number;
  initializer?: string;
  instanceLifecycleConfig?: InstanceLifecycleConfig;
  instanceType?: string;
  lastModifiedTime?: string;
  layers?: string[];
  memorySize?: number;
  runtime?: string;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      caPort: 'caPort',
      codeChecksum: 'codeChecksum',
      codeSize: 'codeSize',
      createdTime: 'createdTime',
      customContainerConfig: 'customContainerConfig',
      description: 'description',
      environmentVariables: 'environmentVariables',
      functionId: 'functionId',
      functionName: 'functionName',
      handler: 'handler',
      initializationTimeout: 'initializationTimeout',
      initializer: 'initializer',
      instanceLifecycleConfig: 'instanceLifecycleConfig',
      instanceType: 'instanceType',
      lastModifiedTime: 'lastModifiedTime',
      layers: 'layers',
      memorySize: 'memorySize',
      runtime: 'runtime',
      timeout: 'timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caPort: 'number',
      codeChecksum: 'string',
      codeSize: 'number',
      createdTime: 'string',
      customContainerConfig: CustomContainerConfig,
      description: 'string',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      functionId: 'string',
      functionName: 'string',
      handler: 'string',
      initializationTimeout: 'number',
      initializer: 'string',
      instanceLifecycleConfig: InstanceLifecycleConfig,
      instanceType: 'string',
      lastModifiedTime: 'string',
      layers: { 'type': 'array', 'itemType': 'string' },
      memorySize: 'number',
      runtime: 'string',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFunctionResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateFunctionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateFunctionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  ifMatch?: string;
  xFcAccountId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      ifMatch: 'If-Match',
      xFcAccountId: 'X-Fc-Account-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      ifMatch: 'string',
      xFcAccountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceRequest extends $tea.Model {
  description?: string;
  internetAccess?: boolean;
  logConfig?: LogConfig;
  nasConfig?: NASConfig;
  role?: string;
  tracingConfig?: TracingConfig;
  vpcConfig?: VPCConfig;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      internetAccess: 'internetAccess',
      logConfig: 'logConfig',
      nasConfig: 'nasConfig',
      role: 'role',
      tracingConfig: 'tracingConfig',
      vpcConfig: 'vpcConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      internetAccess: 'boolean',
      logConfig: LogConfig,
      nasConfig: NASConfig,
      role: 'string',
      tracingConfig: TracingConfig,
      vpcConfig: VPCConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceResponseBody extends $tea.Model {
  createdTime?: string;
  description?: string;
  internetAccess?: boolean;
  lastModifiedTime?: string;
  logConfig?: LogConfig;
  nasConfig?: NASConfig;
  role?: string;
  serviceId?: string;
  serviceName?: string;
  tracingConfig?: TracingConfig;
  vpcConfig?: VPCConfig;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      description: 'description',
      internetAccess: 'internetAccess',
      lastModifiedTime: 'lastModifiedTime',
      logConfig: 'logConfig',
      nasConfig: 'nasConfig',
      role: 'role',
      serviceId: 'serviceId',
      serviceName: 'serviceName',
      tracingConfig: 'tracingConfig',
      vpcConfig: 'vpcConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      internetAccess: 'boolean',
      lastModifiedTime: 'string',
      logConfig: LogConfig,
      nasConfig: NASConfig,
      role: 'string',
      serviceId: 'string',
      serviceName: 'string',
      tracingConfig: TracingConfig,
      vpcConfig: VPCConfig,
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

export class UpdateTriggerHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  ifMatch?: string;
  xFcAccountId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      ifMatch: 'If-Match',
      xFcAccountId: 'X-Fc-Account-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      ifMatch: 'string',
      xFcAccountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTriggerRequest extends $tea.Model {
  description?: string;
  invocationRole?: string;
  qualifier?: string;
  triggerConfig?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      invocationRole: 'invocationRole',
      qualifier: 'qualifier',
      triggerConfig: 'triggerConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      invocationRole: 'string',
      qualifier: 'string',
      triggerConfig: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTriggerResponseBody extends $tea.Model {
  createdTime?: string;
  description?: string;
  invocationRole?: string;
  lastModifiedTime?: string;
  qualifier?: string;
  sourceArn?: string;
  triggerConfig?: string;
  triggerId?: string;
  triggerName?: string;
  triggerType?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      description: 'description',
      invocationRole: 'invocationRole',
      lastModifiedTime: 'lastModifiedTime',
      qualifier: 'qualifier',
      sourceArn: 'sourceArn',
      triggerConfig: 'triggerConfig',
      triggerId: 'triggerId',
      triggerName: 'triggerName',
      triggerType: 'triggerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      invocationRole: 'string',
      lastModifiedTime: 'string',
      qualifier: 'string',
      sourceArn: 'string',
      triggerConfig: 'string',
      triggerId: 'string',
      triggerName: 'string',
      triggerType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTriggerResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateTriggerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateTriggerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NASConfigMountPoints extends $tea.Model {
  mountDir?: string;
  serverAddr?: string;
  static names(): { [key: string]: string } {
    return {
      mountDir: 'mountDir',
      serverAddr: 'serverAddr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountDir: 'string',
      serverAddr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAliasesResponseBodyAliases extends $tea.Model {
  additionalVersionWeight?: { [key: string]: number };
  aliasName?: string;
  createdTime?: string;
  description?: string;
  lastModifiedTime?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      additionalVersionWeight: 'additionalVersionWeight',
      aliasName: 'aliasName',
      createdTime: 'createdTime',
      description: 'description',
      lastModifiedTime: 'lastModifiedTime',
      versionId: 'versionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalVersionWeight: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      aliasName: 'string',
      createdTime: 'string',
      description: 'string',
      lastModifiedTime: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomDomainsResponseBodyCustomDomains extends $tea.Model {
  accountId?: string;
  apiVersion?: string;
  certConfig?: CertConfig;
  createdTime?: string;
  domainName?: string;
  lastModifiedTime?: string;
  protocol?: string;
  routeConfig?: RouteConfig;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      apiVersion: 'apiVersion',
      certConfig: 'certConfig',
      createdTime: 'createdTime',
      domainName: 'domainName',
      lastModifiedTime: 'lastModifiedTime',
      protocol: 'protocol',
      routeConfig: 'routeConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      apiVersion: 'string',
      certConfig: CertConfig,
      createdTime: 'string',
      domainName: 'string',
      lastModifiedTime: 'string',
      protocol: 'string',
      routeConfig: RouteConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventSourcesResponseBodyEventSources extends $tea.Model {
  createdTime?: string;
  sourceArn?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      sourceArn: 'sourceArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      sourceArn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionAsyncInvokeConfigsResponseBodyConfigs extends $tea.Model {
  createdTime?: string;
  destinationConfig?: DestinationConfig;
  function?: string;
  lastModifiedTime?: string;
  maxAsyncEventAgeInSeconds?: number;
  maxAsyncRetryAttempts?: number;
  qualifier?: string;
  service?: string;
  statefulInvocation?: boolean;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      destinationConfig: 'destinationConfig',
      function: 'function',
      lastModifiedTime: 'lastModifiedTime',
      maxAsyncEventAgeInSeconds: 'maxAsyncEventAgeInSeconds',
      maxAsyncRetryAttempts: 'maxAsyncRetryAttempts',
      qualifier: 'qualifier',
      service: 'service',
      statefulInvocation: 'statefulInvocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      destinationConfig: DestinationConfig,
      function: 'string',
      lastModifiedTime: 'string',
      maxAsyncEventAgeInSeconds: 'number',
      maxAsyncRetryAttempts: 'number',
      qualifier: 'string',
      service: 'string',
      statefulInvocation: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsResponseBodyFunctions extends $tea.Model {
  caPort?: number;
  codeChecksum?: string;
  codeSize?: number;
  createdTime?: string;
  customContainerConfig?: CustomContainerConfig;
  description?: string;
  environmentVariables?: { [key: string]: string };
  functionId?: string;
  functionName?: string;
  handler?: string;
  initializationTimeout?: number;
  initializer?: string;
  instanceConcurrency?: number;
  instanceLifecycleConfig?: InstanceLifecycleConfig;
  instanceType?: string;
  lastModifiedTime?: string;
  layers?: string[];
  memorySize?: number;
  runtime?: string;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      caPort: 'caPort',
      codeChecksum: 'codeChecksum',
      codeSize: 'codeSize',
      createdTime: 'createdTime',
      customContainerConfig: 'customContainerConfig',
      description: 'description',
      environmentVariables: 'environmentVariables',
      functionId: 'functionId',
      functionName: 'functionName',
      handler: 'handler',
      initializationTimeout: 'initializationTimeout',
      initializer: 'initializer',
      instanceConcurrency: 'instanceConcurrency',
      instanceLifecycleConfig: 'instanceLifecycleConfig',
      instanceType: 'instanceType',
      lastModifiedTime: 'lastModifiedTime',
      layers: 'layers',
      memorySize: 'memorySize',
      runtime: 'runtime',
      timeout: 'timeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caPort: 'number',
      codeChecksum: 'string',
      codeSize: 'number',
      createdTime: 'string',
      customContainerConfig: CustomContainerConfig,
      description: 'string',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      functionId: 'string',
      functionName: 'string',
      handler: 'string',
      initializationTimeout: 'number',
      initializer: 'string',
      instanceConcurrency: 'number',
      instanceLifecycleConfig: InstanceLifecycleConfig,
      instanceType: 'string',
      lastModifiedTime: 'string',
      layers: { 'type': 'array', 'itemType': 'string' },
      memorySize: 'number',
      runtime: 'string',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProvisionConfigsResponseBodyProvisionConfigs extends $tea.Model {
  current?: number;
  resource?: string;
  scheduledActions?: ScheduledActions[];
  target?: number;
  targetTrackingPolicies?: TargetTrackingPolicies[];
  static names(): { [key: string]: string } {
    return {
      current: 'current',
      resource: 'resource',
      scheduledActions: 'scheduledActions',
      target: 'target',
      targetTrackingPolicies: 'targetTrackingPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      resource: 'string',
      scheduledActions: { 'type': 'array', 'itemType': ScheduledActions },
      target: 'number',
      targetTrackingPolicies: { 'type': 'array', 'itemType': TargetTrackingPolicies },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceVersionsResponseBodyVersions extends $tea.Model {
  createdTime?: string;
  description?: string;
  lastModifiedTime?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      description: 'description',
      lastModifiedTime: 'lastModifiedTime',
      versionId: 'versionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      lastModifiedTime: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServicesResponseBodyServices extends $tea.Model {
  createdTime?: string;
  description?: string;
  internetAccess?: boolean;
  lastModifiedTime?: string;
  logConfig?: LogConfig;
  nasConfig?: NASConfig;
  role?: string;
  serviceId?: string;
  serviceName?: string;
  tracingConfig?: TracingConfig;
  vpcConfig?: VPCConfig;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      description: 'description',
      internetAccess: 'internetAccess',
      lastModifiedTime: 'lastModifiedTime',
      logConfig: 'logConfig',
      nasConfig: 'nasConfig',
      role: 'role',
      serviceId: 'serviceId',
      serviceName: 'serviceName',
      tracingConfig: 'tracingConfig',
      vpcConfig: 'vpcConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      internetAccess: 'boolean',
      lastModifiedTime: 'string',
      logConfig: LogConfig,
      nasConfig: NASConfig,
      role: 'string',
      serviceId: 'string',
      serviceName: 'string',
      tracingConfig: TracingConfig,
      vpcConfig: VPCConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTriggersResponseBodyTriggers extends $tea.Model {
  createdTime?: string;
  description?: string;
  invocationRole?: string;
  lastModifiedTime?: string;
  qualifier?: string;
  sourceArn?: string;
  triggerConfig?: string;
  triggerId?: string;
  triggerName?: string;
  triggerType?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      description: 'description',
      invocationRole: 'invocationRole',
      lastModifiedTime: 'lastModifiedTime',
      qualifier: 'qualifier',
      sourceArn: 'sourceArn',
      triggerConfig: 'triggerConfig',
      triggerId: 'triggerId',
      triggerName: 'triggerName',
      triggerType: 'triggerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      invocationRole: 'string',
      lastModifiedTime: 'string',
      qualifier: 'string',
      sourceArn: 'string',
      triggerConfig: 'string',
      triggerId: 'string',
      triggerName: 'string',
      triggerType: 'string',
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
      'ap-northeast-1': "account-id.ap-northeast-1.fc.aliyuncs.com",
      'ap-south-1': "account-id.ap-south-1.fc.aliyuncs.com",
      'ap-southeast-1': "account-id.ap-southeast-1.fc.aliyuncs.com",
      'ap-southeast-2': "account-id.ap-southeast-2.fc.aliyuncs.com",
      'ap-southeast-3': "account-id.ap-southeast-3.fc.aliyuncs.com",
      'ap-southeast-5': "account-id.ap-southeast-5.fc.aliyuncs.com",
      'cn-beijing': "account-id.cn-beijing.fc.aliyuncs.com",
      'cn-chengdu': "account-id.cn-chengdu.fc.aliyuncs.com",
      'cn-hangzhou': "account-id.cn-hangzhou.fc.aliyuncs.com",
      'cn-hangzhou-finance': "account-id.cn-hangzhou-finance.fc.aliyuncs.com",
      'cn-hongkong': "account-id.cn-hongkong.fc.aliyuncs.com",
      'cn-huhehaote': "account-id.cn-huhehaote.fc.aliyuncs.com",
      'cn-north-2-gov-1': "account-id.cn-north-2-gov-1.fc.aliyuncs.com",
      'cn-qingdao': "account-id.cn-qingdao.fc.aliyuncs.com",
      'cn-shanghai': "account-id.cn-shanghai.fc.aliyuncs.com",
      'cn-shenzhen': "account-id.cn-shenzhen.fc.aliyuncs.com",
      'cn-zhangjiakou': "account-id.cn-zhangjiakou.fc.aliyuncs.com",
      'eu-central-1': "account-id.eu-central-1.fc.aliyuncs.com",
      'eu-west-1': "account-id.eu-west-1.fc.aliyuncs.com",
      'us-east-1': "account-id.us-east-1.fc.aliyuncs.com",
      'us-west-1': "account-id.us-west-1.fc.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("fc-open", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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

  async createAlias(serviceName: string, request: CreateAliasRequest): Promise<CreateAliasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAliasWithOptions(serviceName, request, headers, runtime);
  }

  async createAliasWithOptions(serviceName: string, request: CreateAliasRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateAliasResponse> {
    Util.validateModel(request);
    serviceName = OpenApiUtil.getEncodeParam(serviceName);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.additionalVersionWeight)) {
      body["additionalVersionWeight"] = request.additionalVersionWeight;
    }

    if (!Util.isUnset(request.aliasName)) {
      body["aliasName"] = request.aliasName;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.versionId)) {
      body["versionId"] = request.versionId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<CreateAliasResponse>(await this.doROARequest("CreateAlias", "2021-04-06", "HTTPS", "POST", "AK", `/2021-04-06/services/${serviceName}/aliases`, "json", req, runtime), new CreateAliasResponse({}));
  }

  async createCustomDomain(request: CreateCustomDomainRequest): Promise<CreateCustomDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createCustomDomainWithOptions(request, headers, runtime);
  }

  async createCustomDomainWithOptions(request: CreateCustomDomainRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateCustomDomainResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset($tea.toMap(request.certConfig))) {
      body["certConfig"] = request.certConfig;
    }

    if (!Util.isUnset(request.domainName)) {
      body["domainName"] = request.domainName;
    }

    if (!Util.isUnset(request.protocol)) {
      body["protocol"] = request.protocol;
    }

    if (!Util.isUnset($tea.toMap(request.routeConfig))) {
      body["routeConfig"] = request.routeConfig;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<CreateCustomDomainResponse>(await this.doROARequest("CreateCustomDomain", "2021-04-06", "HTTPS", "POST", "AK", `/2021-04-06/custom-domains`, "json", req, runtime), new CreateCustomDomainResponse({}));
  }

  async createFunction(serviceName: string, request: CreateFunctionRequest): Promise<CreateFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateFunctionHeaders({ });
    return await this.createFunctionWithOptions(serviceName, request, headers, runtime);
  }

  async createFunctionWithOptions(serviceName: string, request: CreateFunctionRequest, headers: CreateFunctionHeaders, runtime: $Util.RuntimeOptions): Promise<CreateFunctionResponse> {
    Util.validateModel(request);
    serviceName = OpenApiUtil.getEncodeParam(serviceName);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.caPort)) {
      body["caPort"] = request.caPort;
    }

    if (!Util.isUnset($tea.toMap(request.code))) {
      body["code"] = request.code;
    }

    if (!Util.isUnset($tea.toMap(request.customContainerConfig))) {
      body["customContainerConfig"] = request.customContainerConfig;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.environmentVariables)) {
      body["environmentVariables"] = request.environmentVariables;
    }

    if (!Util.isUnset(request.functionName)) {
      body["functionName"] = request.functionName;
    }

    if (!Util.isUnset(request.handler)) {
      body["handler"] = request.handler;
    }

    if (!Util.isUnset(request.initializationTimeout)) {
      body["initializationTimeout"] = request.initializationTimeout;
    }

    if (!Util.isUnset(request.initializer)) {
      body["initializer"] = request.initializer;
    }

    if (!Util.isUnset(request.instanceConcurrency)) {
      body["instanceConcurrency"] = request.instanceConcurrency;
    }

    if (!Util.isUnset($tea.toMap(request.instanceLifecycleConfig))) {
      body["instanceLifecycleConfig"] = request.instanceLifecycleConfig;
    }

    if (!Util.isUnset(request.instanceType)) {
      body["instanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.layers)) {
      body["layers"] = request.layers;
    }

    if (!Util.isUnset(request.memorySize)) {
      body["memorySize"] = request.memorySize;
    }

    if (!Util.isUnset(request.runtime)) {
      body["runtime"] = request.runtime;
    }

    if (!Util.isUnset(request.timeout)) {
      body["timeout"] = request.timeout;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcCodeChecksum)) {
      realHeaders["x-fc-code-checksum"] = headers.xFcCodeChecksum;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<CreateFunctionResponse>(await this.doROARequest("CreateFunction", "2021-04-06", "HTTPS", "POST", "AK", `/2021-04-06/services/${serviceName}/functions`, "json", req, runtime), new CreateFunctionResponse({}));
  }

  async createLayerVersion(layerName: string, request: CreateLayerVersionRequest): Promise<CreateLayerVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createLayerVersionWithOptions(layerName, request, headers, runtime);
  }

  async createLayerVersionWithOptions(layerName: string, request: CreateLayerVersionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateLayerVersionResponse> {
    Util.validateModel(request);
    layerName = OpenApiUtil.getEncodeParam(layerName);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset($tea.toMap(request.code))) {
      body["Code"] = request.code;
    }

    if (!Util.isUnset(request.compatibleRuntime)) {
      body["compatibleRuntime"] = request.compatibleRuntime;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<CreateLayerVersionResponse>(await this.doROARequest("CreateLayerVersion", "2021-04-06", "HTTPS", "POST", "AK", `/2021-04-06/layers/${layerName}/versions`, "json", req, runtime), new CreateLayerVersionResponse({}));
  }

  async createService(request: CreateServiceRequest): Promise<CreateServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createServiceWithOptions(request, headers, runtime);
  }

  async createServiceWithOptions(request: CreateServiceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateServiceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.internetAccess)) {
      body["internetAccess"] = request.internetAccess;
    }

    if (!Util.isUnset($tea.toMap(request.logConfig))) {
      body["logConfig"] = request.logConfig;
    }

    if (!Util.isUnset($tea.toMap(request.nasConfig))) {
      body["nasConfig"] = request.nasConfig;
    }

    if (!Util.isUnset(request.role)) {
      body["role"] = request.role;
    }

    if (!Util.isUnset(request.serviceName)) {
      body["serviceName"] = request.serviceName;
    }

    if (!Util.isUnset($tea.toMap(request.tracingConfig))) {
      body["tracingConfig"] = request.tracingConfig;
    }

    if (!Util.isUnset($tea.toMap(request.vpcConfig))) {
      body["vpcConfig"] = request.vpcConfig;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<CreateServiceResponse>(await this.doROARequest("CreateService", "2021-04-06", "HTTPS", "POST", "AK", `/2021-04-06/services`, "json", req, runtime), new CreateServiceResponse({}));
  }

  async createTrigger(serviceName: string, functionName: string, request: CreateTriggerRequest): Promise<CreateTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTriggerWithOptions(serviceName, functionName, request, headers, runtime);
  }

  async createTriggerWithOptions(serviceName: string, functionName: string, request: CreateTriggerRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateTriggerResponse> {
    Util.validateModel(request);
    serviceName = OpenApiUtil.getEncodeParam(serviceName);
    functionName = OpenApiUtil.getEncodeParam(functionName);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.invocationRole)) {
      body["invocationRole"] = request.invocationRole;
    }

    if (!Util.isUnset(request.qualifier)) {
      body["qualifier"] = request.qualifier;
    }

    if (!Util.isUnset(request.sourceArn)) {
      body["sourceArn"] = request.sourceArn;
    }

    if (!Util.isUnset(request.triggerConfig)) {
      body["triggerConfig"] = request.triggerConfig;
    }

    if (!Util.isUnset(request.triggerName)) {
      body["triggerName"] = request.triggerName;
    }

    if (!Util.isUnset(request.triggerType)) {
      body["triggerType"] = request.triggerType;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<CreateTriggerResponse>(await this.doROARequest("CreateTrigger", "2021-04-06", "HTTPS", "POST", "AK", `/2021-04-06/services/${serviceName}/functions/${functionName}/triggers`, "json", req, runtime), new CreateTriggerResponse({}));
  }

  async createVpcBinding(serviceName: string, request: CreateVpcBindingRequest): Promise<CreateVpcBindingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createVpcBindingWithOptions(serviceName, request, headers, runtime);
  }

  async createVpcBindingWithOptions(serviceName: string, request: CreateVpcBindingRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateVpcBindingResponse> {
    Util.validateModel(request);
    serviceName = OpenApiUtil.getEncodeParam(serviceName);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.vpcId)) {
      body["vpcId"] = request.vpcId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<CreateVpcBindingResponse>(await this.doROARequest("CreateVpcBinding", "2021-04-06", "HTTPS", "POST", "AK", `/2021-04-06/services/${serviceName}/bindings`, "none", req, runtime), new CreateVpcBindingResponse({}));
  }

  async deleteAlias(serviceName: string, aliasName: string): Promise<DeleteAliasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteAliasHeaders({ });
    return await this.deleteAliasWithOptions(serviceName, aliasName, headers, runtime);
  }

  async deleteAliasWithOptions(serviceName: string, aliasName: string, headers: DeleteAliasHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteAliasResponse> {
    serviceName = OpenApiUtil.getEncodeParam(serviceName);
    aliasName = OpenApiUtil.getEncodeParam(aliasName);
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.ifMatch)) {
      realHeaders["If-Match"] = headers.ifMatch;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    return $tea.cast<DeleteAliasResponse>(await this.doROARequest("DeleteAlias", "2021-04-06", "HTTPS", "DELETE", "AK", `/2021-04-06/services/${serviceName}/aliases/${aliasName}`, "none", req, runtime), new DeleteAliasResponse({}));
  }

  async deleteCustomDomain(domainName: string): Promise<DeleteCustomDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteCustomDomainWithOptions(domainName, headers, runtime);
  }

  async deleteCustomDomainWithOptions(domainName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteCustomDomainResponse> {
    domainName = OpenApiUtil.getEncodeParam(domainName);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DeleteCustomDomainResponse>(await this.doROARequest("DeleteCustomDomain", "2021-04-06", "HTTPS", "DELETE", "AK", `/2021-04-06/custom-domains/${domainName}`, "none", req, runtime), new DeleteCustomDomainResponse({}));
  }

  async deleteFunction(serviceName: string, functionName: string): Promise<DeleteFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteFunctionHeaders({ });
    return await this.deleteFunctionWithOptions(serviceName, functionName, headers, runtime);
  }

  async deleteFunctionWithOptions(serviceName: string, functionName: string, headers: DeleteFunctionHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteFunctionResponse> {
    serviceName = OpenApiUtil.getEncodeParam(serviceName);
    functionName = OpenApiUtil.getEncodeParam(functionName);
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.ifMatch)) {
      realHeaders["If-Match"] = headers.ifMatch;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    return $tea.cast<DeleteFunctionResponse>(await this.doROARequest("DeleteFunction", "2021-04-06", "HTTPS", "DELETE", "AK", `/2021-04-06/services/${serviceName}/functions/${functionName}`, "none", req, runtime), new DeleteFunctionResponse({}));
  }

  async deleteFunctionAsyncInvokeConfig(serviceName: string, functionName: string, request: DeleteFunctionAsyncInvokeConfigRequest): Promise<DeleteFunctionAsyncInvokeConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteFunctionAsyncInvokeConfigWithOptions(serviceName, functionName, request, headers, runtime);
  }

  async deleteFunctionAsyncInvokeConfigWithOptions(serviceName: string, functionName: string, request: DeleteFunctionAsyncInvokeConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteFunctionAsyncInvokeConfigResponse> {
    Util.validateModel(request);
    serviceName = OpenApiUtil.getEncodeParam(serviceName);
    functionName = OpenApiUtil.getEncodeParam(functionName);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DeleteFunctionAsyncInvokeConfigResponse>(await this.doROARequest("DeleteFunctionAsyncInvokeConfig", "2021-04-06", "HTTPS", "DELETE", "AK", `/2021-04-06/services/${serviceName}/functions/${functionName}/async-invoke-config`, "none", req, runtime), new DeleteFunctionAsyncInvokeConfigResponse({}));
  }

  async deleteFunctionOnDemandConfig(serviceName: string, functionName: string, request: DeleteFunctionOnDemandConfigRequest): Promise<DeleteFunctionOnDemandConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteFunctionOnDemandConfigHeaders({ });
    return await this.deleteFunctionOnDemandConfigWithOptions(serviceName, functionName, request, headers, runtime);
  }

  async deleteFunctionOnDemandConfigWithOptions(serviceName: string, functionName: string, request: DeleteFunctionOnDemandConfigRequest, headers: DeleteFunctionOnDemandConfigHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteFunctionOnDemandConfigResponse> {
    Util.validateModel(request);
    serviceName = OpenApiUtil.getEncodeParam(serviceName);
    functionName = OpenApiUtil.getEncodeParam(functionName);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.ifMatch)) {
      realHeaders["If-Match"] = headers.ifMatch;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DeleteFunctionOnDemandConfigResponse>(await this.doROARequest("DeleteFunctionOnDemandConfig", "2021-04-06", "HTTPS", "DELETE", "AK", `/2021-04-06/services/${serviceName}/functions/${functionName}/on-demand-config`, "none", req, runtime), new DeleteFunctionOnDemandConfigResponse({}));
  }

  async deleteLayerVersion(layerName: string, version: string): Promise<DeleteLayerVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteLayerVersionWithOptions(layerName, version, headers, runtime);
  }

  async deleteLayerVersionWithOptions(layerName: string, version: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteLayerVersionResponse> {
    layerName = OpenApiUtil.getEncodeParam(layerName);
    version = OpenApiUtil.getEncodeParam(version);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DeleteLayerVersionResponse>(await this.doROARequest("DeleteLayerVersion", "2021-04-06", "HTTPS", "DELETE", "AK", `/2021-04-06/layers/${layerName}/versions/${version}`, "none", req, runtime), new DeleteLayerVersionResponse({}));
  }

  async deleteService(serviceName: string): Promise<DeleteServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteServiceHeaders({ });
    return await this.deleteServiceWithOptions(serviceName, headers, runtime);
  }

  async deleteServiceWithOptions(serviceName: string, headers: DeleteServiceHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteServiceResponse> {
    serviceName = OpenApiUtil.getEncodeParam(serviceName);
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.ifMatch)) {
      realHeaders["If-Match"] = headers.ifMatch;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    return $tea.cast<DeleteServiceResponse>(await this.doROARequest("DeleteService", "2021-04-06", "HTTPS", "DELETE", "AK", `/2021-04-06/services/${serviceName}`, "none", req, runtime), new DeleteServiceResponse({}));
  }

  async deleteServiceVersion(serviceName: string, versionId: string): Promise<DeleteServiceVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteServiceVersionWithOptions(serviceName, versionId, headers, runtime);
  }

  async deleteServiceVersionWithOptions(serviceName: string, versionId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteServiceVersionResponse> {
    serviceName = OpenApiUtil.getEncodeParam(serviceName);
    versionId = OpenApiUtil.getEncodeParam(versionId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DeleteServiceVersionResponse>(await this.doROARequest("DeleteServiceVersion", "2021-04-06", "HTTPS", "DELETE", "AK", `/2021-04-06/services/${serviceName}/versions/${versionId}`, "none", req, runtime), new DeleteServiceVersionResponse({}));
  }

  async deleteTrigger(serviceName: string, functionName: string, triggerName: string): Promise<DeleteTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteTriggerHeaders({ });
    return await this.deleteTriggerWithOptions(serviceName, functionName, triggerName, headers, runtime);
  }

  async deleteTriggerWithOptions(serviceName: string, functionName: string, triggerName: string, headers: DeleteTriggerHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteTriggerResponse> {
    serviceName = OpenApiUtil.getEncodeParam(serviceName);
    functionName = OpenApiUtil.getEncodeParam(functionName);
    triggerName = OpenApiUtil.getEncodeParam(triggerName);
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.ifMatch)) {
      realHeaders["If-Match"] = headers.ifMatch;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    return $tea.cast<DeleteTriggerResponse>(await this.doROARequest("DeleteTrigger", "2021-04-06", "HTTPS", "DELETE", "AK", `/2021-04-06/services/${serviceName}/functions/${functionName}/triggers/${triggerName}`, "none", req, runtime), new DeleteTriggerResponse({}));
  }

  async deleteVpcBinding(serviceName: string, vpcId: string): Promise<DeleteVpcBindingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteVpcBindingWithOptions(serviceName, vpcId, headers, runtime);
  }

  async deleteVpcBindingWithOptions(serviceName: string, vpcId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteVpcBindingResponse> {
    serviceName = OpenApiUtil.getEncodeParam(serviceName);
    vpcId = OpenApiUtil.getEncodeParam(vpcId);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<DeleteVpcBindingResponse>(await this.doROARequest("DeleteVpcBinding", "2021-04-06", "HTTPS", "DELETE", "AK", `/2021-04-06/services/${serviceName}/bindings/${vpcId}`, "none", req, runtime), new DeleteVpcBindingResponse({}));
  }

  async deregisterEventSource(serviceName: string, functionName: string, sourceArn: string, request: DeregisterEventSourceRequest): Promise<DeregisterEventSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deregisterEventSourceWithOptions(serviceName, functionName, sourceArn, request, headers, runtime);
  }

  async deregisterEventSourceWithOptions(serviceName: string, functionName: string, sourceArn: string, request: DeregisterEventSourceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeregisterEventSourceResponse> {
    Util.validateModel(request);
    serviceName = OpenApiUtil.getEncodeParam(serviceName);
    functionName = OpenApiUtil.getEncodeParam(functionName);
    sourceArn = OpenApiUtil.getEncodeParam(sourceArn);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<DeregisterEventSourceResponse>(await this.doROARequest("DeregisterEventSource", "2021-04-06", "HTTPS", "DELETE", "AK", `/2021-04-06/services/${serviceName}/functions/${functionName}/event-sources/${sourceArn}`, "none", req, runtime), new DeregisterEventSourceResponse({}));
  }

  async getAccountSettings(): Promise<GetAccountSettingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAccountSettingsWithOptions(headers, runtime);
  }

  async getAccountSettingsWithOptions(headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetAccountSettingsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetAccountSettingsResponse>(await this.doROARequest("GetAccountSettings", "2021-04-06", "HTTPS", "GET", "AK", `/2021-04-06/account-settings`, "json", req, runtime), new GetAccountSettingsResponse({}));
  }

  async getAlias(serviceName: string, aliasName: string): Promise<GetAliasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAliasWithOptions(serviceName, aliasName, headers, runtime);
  }

  async getAliasWithOptions(serviceName: string, aliasName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetAliasResponse> {
    serviceName = OpenApiUtil.getEncodeParam(serviceName);
    aliasName = OpenApiUtil.getEncodeParam(aliasName);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetAliasResponse>(await this.doROARequest("GetAlias", "2021-04-06", "HTTPS", "GET", "AK", `/2021-04-06/services/${serviceName}/aliases/${aliasName}`, "json", req, runtime), new GetAliasResponse({}));
  }

  async getCustomDomain(domainName: string): Promise<GetCustomDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCustomDomainWithOptions(domainName, headers, runtime);
  }

  async getCustomDomainWithOptions(domainName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetCustomDomainResponse> {
    domainName = OpenApiUtil.getEncodeParam(domainName);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetCustomDomainResponse>(await this.doROARequest("GetCustomDomain", "2021-04-06", "HTTPS", "GET", "AK", `/2021-04-06/custom-domains/${domainName}`, "json", req, runtime), new GetCustomDomainResponse({}));
  }

  async getFunction(serviceName: string, functionName: string, request: GetFunctionRequest): Promise<GetFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFunctionWithOptions(serviceName, functionName, request, headers, runtime);
  }

  async getFunctionWithOptions(serviceName: string, functionName: string, request: GetFunctionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetFunctionResponse> {
    Util.validateModel(request);
    serviceName = OpenApiUtil.getEncodeParam(serviceName);
    functionName = OpenApiUtil.getEncodeParam(functionName);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetFunctionResponse>(await this.doROARequest("GetFunction", "2021-04-06", "HTTPS", "GET", "AK", `/2021-04-06/services/${serviceName}/functions/${functionName}`, "json", req, runtime), new GetFunctionResponse({}));
  }

  async getFunctionAsyncInvokeConfig(serviceName: string, functionName: string, request: GetFunctionAsyncInvokeConfigRequest): Promise<GetFunctionAsyncInvokeConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFunctionAsyncInvokeConfigWithOptions(serviceName, functionName, request, headers, runtime);
  }

  async getFunctionAsyncInvokeConfigWithOptions(serviceName: string, functionName: string, request: GetFunctionAsyncInvokeConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetFunctionAsyncInvokeConfigResponse> {
    Util.validateModel(request);
    serviceName = OpenApiUtil.getEncodeParam(serviceName);
    functionName = OpenApiUtil.getEncodeParam(functionName);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetFunctionAsyncInvokeConfigResponse>(await this.doROARequest("GetFunctionAsyncInvokeConfig", "2021-04-06", "HTTPS", "GET", "AK", `/2021-04-06/services/${serviceName}/functions/${functionName}/async-invoke-config`, "json", req, runtime), new GetFunctionAsyncInvokeConfigResponse({}));
  }

  async getFunctionCode(serviceName: string, functionName: string, request: GetFunctionCodeRequest): Promise<GetFunctionCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFunctionCodeWithOptions(serviceName, functionName, request, headers, runtime);
  }

  async getFunctionCodeWithOptions(serviceName: string, functionName: string, request: GetFunctionCodeRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetFunctionCodeResponse> {
    Util.validateModel(request);
    serviceName = OpenApiUtil.getEncodeParam(serviceName);
    functionName = OpenApiUtil.getEncodeParam(functionName);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetFunctionCodeResponse>(await this.doROARequest("GetFunctionCode", "2021-04-06", "HTTPS", "GET", "AK", `/2021-04-06/services/${serviceName}/functions/${functionName}/code`, "json", req, runtime), new GetFunctionCodeResponse({}));
  }

  async getFunctionOnDemandConfig(serviceName: string, functionName: string, request: GetFunctionOnDemandConfigRequest): Promise<GetFunctionOnDemandConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFunctionOnDemandConfigWithOptions(serviceName, functionName, request, headers, runtime);
  }

  async getFunctionOnDemandConfigWithOptions(serviceName: string, functionName: string, request: GetFunctionOnDemandConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetFunctionOnDemandConfigResponse> {
    Util.validateModel(request);
    serviceName = OpenApiUtil.getEncodeParam(serviceName);
    functionName = OpenApiUtil.getEncodeParam(functionName);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetFunctionOnDemandConfigResponse>(await this.doROARequest("GetFunctionOnDemandConfig", "2021-04-06", "HTTPS", "GET", "AK", `/2021-04-06/services/${serviceName}/functions/${functionName}/on-demand-config`, "json", req, runtime), new GetFunctionOnDemandConfigResponse({}));
  }

  async getLayerVersion(layerName: string, version: string): Promise<GetLayerVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLayerVersionWithOptions(layerName, version, headers, runtime);
  }

  async getLayerVersionWithOptions(layerName: string, version: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetLayerVersionResponse> {
    layerName = OpenApiUtil.getEncodeParam(layerName);
    version = OpenApiUtil.getEncodeParam(version);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetLayerVersionResponse>(await this.doROARequest("GetLayerVersion", "2021-04-06", "HTTPS", "GET", "AK", `/2021-04-06/layers/${layerName}/versions/${version}`, "json", req, runtime), new GetLayerVersionResponse({}));
  }

  async getLayerVersionByArn(arn: string): Promise<GetLayerVersionByArnResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLayerVersionByArnWithOptions(arn, headers, runtime);
  }

  async getLayerVersionByArnWithOptions(arn: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetLayerVersionByArnResponse> {
    arn = OpenApiUtil.getEncodeParam(arn);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetLayerVersionByArnResponse>(await this.doROARequest("GetLayerVersionByArn", "2021-04-06", "HTTPS", "GET", "AK", `/2021-04-06/layerarn/${arn}`, "json", req, runtime), new GetLayerVersionByArnResponse({}));
  }

  async getProvisionConfig(serviceName: string, functionName: string, request: GetProvisionConfigRequest): Promise<GetProvisionConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProvisionConfigWithOptions(serviceName, functionName, request, headers, runtime);
  }

  async getProvisionConfigWithOptions(serviceName: string, functionName: string, request: GetProvisionConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetProvisionConfigResponse> {
    Util.validateModel(request);
    serviceName = OpenApiUtil.getEncodeParam(serviceName);
    functionName = OpenApiUtil.getEncodeParam(functionName);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.target)) {
      body["target"] = request.target;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<GetProvisionConfigResponse>(await this.doROARequest("GetProvisionConfig", "2021-04-06", "HTTPS", "GET", "AK", `/2021-04-06/services/${serviceName}/functions/${functionName}/provision-config`, "json", req, runtime), new GetProvisionConfigResponse({}));
  }

  async getResourceTags(request: GetResourceTagsRequest): Promise<GetResourceTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getResourceTagsWithOptions(request, headers, runtime);
  }

  async getResourceTagsWithOptions(request: GetResourceTagsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetResourceTagsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resourceArn)) {
      query["resourceArn"] = request.resourceArn;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetResourceTagsResponse>(await this.doROARequest("GetResourceTags", "2021-04-06", "HTTPS", "GET", "AK", `/2021-04-06/tag`, "json", req, runtime), new GetResourceTagsResponse({}));
  }

  async getService(serviceName: string, request: GetServiceRequest): Promise<GetServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceWithOptions(serviceName, request, headers, runtime);
  }

  async getServiceWithOptions(serviceName: string, request: GetServiceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetServiceResponse> {
    Util.validateModel(request);
    serviceName = OpenApiUtil.getEncodeParam(serviceName);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetServiceResponse>(await this.doROARequest("GetService", "2021-04-06", "HTTPS", "GET", "AK", `/2021-04-06/services/${serviceName}`, "json", req, runtime), new GetServiceResponse({}));
  }

  async getStatefulAsyncInvocation(serviceName: string, functionName: string, invocationId: string, request: GetStatefulAsyncInvocationRequest): Promise<GetStatefulAsyncInvocationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getStatefulAsyncInvocationWithOptions(serviceName, functionName, invocationId, request, headers, runtime);
  }

  async getStatefulAsyncInvocationWithOptions(serviceName: string, functionName: string, invocationId: string, request: GetStatefulAsyncInvocationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetStatefulAsyncInvocationResponse> {
    Util.validateModel(request);
    serviceName = OpenApiUtil.getEncodeParam(serviceName);
    functionName = OpenApiUtil.getEncodeParam(functionName);
    invocationId = OpenApiUtil.getEncodeParam(invocationId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<GetStatefulAsyncInvocationResponse>(await this.doROARequest("GetStatefulAsyncInvocation", "2021-04-06", "HTTPS", "GET", "AK", `/2021-04-06/services/${serviceName}/functions/${functionName}/stateful-async-invocations/${invocationId}`, "json", req, runtime), new GetStatefulAsyncInvocationResponse({}));
  }

  async getTrigger(serviceName: string, functionName: string, triggerName: string): Promise<GetTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTriggerWithOptions(serviceName, functionName, triggerName, headers, runtime);
  }

  async getTriggerWithOptions(serviceName: string, functionName: string, triggerName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTriggerResponse> {
    serviceName = OpenApiUtil.getEncodeParam(serviceName);
    functionName = OpenApiUtil.getEncodeParam(functionName);
    triggerName = OpenApiUtil.getEncodeParam(triggerName);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<GetTriggerResponse>(await this.doROARequest("GetTrigger", "2021-04-06", "HTTPS", "GET", "AK", `/2021-04-06/services/${serviceName}/functions/${functionName}/triggers/${triggerName}`, "json", req, runtime), new GetTriggerResponse({}));
  }

  async invokeFunction(serviceName: string, functionName: string, request: InvokeFunctionRequest): Promise<InvokeFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new InvokeFunctionHeaders({ });
    return await this.invokeFunctionWithOptions(serviceName, functionName, request, headers, runtime);
  }

  async invokeFunctionWithOptions(serviceName: string, functionName: string, request: InvokeFunctionRequest, headers: InvokeFunctionHeaders, runtime: $Util.RuntimeOptions): Promise<InvokeFunctionResponse> {
    Util.validateModel(request);
    serviceName = OpenApiUtil.getEncodeParam(serviceName);
    functionName = OpenApiUtil.getEncodeParam(functionName);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = headers.xFcAccountId;
    }

    if (!Util.isUnset(headers.xFcInvocationType)) {
      realHeaders["x-fc-invocation-type"] = headers.xFcInvocationType;
    }

    if (!Util.isUnset(headers.xFcLogType)) {
      realHeaders["x-fc-log-type"] = headers.xFcLogType;
    }

    if (!Util.isUnset(headers.xFcStatefulAsyncInvocationId)) {
      realHeaders["x-fc-stateful-async-invocation-id"] = headers.xFcStatefulAsyncInvocationId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: request.body,
    });
    return $tea.cast<InvokeFunctionResponse>(await this.doROARequest("InvokeFunction", "2021-04-06", "HTTPS", "POST", "AK", `/2021-04-06/services/${serviceName}/functions/${functionName}/invocations`, "byte", req, runtime), new InvokeFunctionResponse({}));
  }

  async listAliases(serviceName: string, request: ListAliasesRequest): Promise<ListAliasesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAliasesWithOptions(serviceName, request, headers, runtime);
  }

  async listAliasesWithOptions(serviceName: string, request: ListAliasesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListAliasesResponse> {
    Util.validateModel(request);
    serviceName = OpenApiUtil.getEncodeParam(serviceName);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.limit)) {
      query["limit"] = request.limit;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.prefix)) {
      query["prefix"] = request.prefix;
    }

    if (!Util.isUnset(request.startKey)) {
      query["startKey"] = request.startKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListAliasesResponse>(await this.doROARequest("ListAliases", "2021-04-06", "HTTPS", "GET", "AK", `/2021-04-06/services/${serviceName}/aliases`, "json", req, runtime), new ListAliasesResponse({}));
  }

  async listCustomDomains(request: ListCustomDomainsRequest): Promise<ListCustomDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listCustomDomainsWithOptions(request, headers, runtime);
  }

  async listCustomDomainsWithOptions(request: ListCustomDomainsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListCustomDomainsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.limit)) {
      query["limit"] = request.limit;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.prefix)) {
      query["prefix"] = request.prefix;
    }

    if (!Util.isUnset(request.startKey)) {
      query["startKey"] = request.startKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListCustomDomainsResponse>(await this.doROARequest("ListCustomDomains", "2021-04-06", "HTTPS", "GET", "AK", `/2021-04-06/custom-domains`, "json", req, runtime), new ListCustomDomainsResponse({}));
  }

  async listEventSources(serviceName: string, functionName: string, request: ListEventSourcesRequest): Promise<ListEventSourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEventSourcesWithOptions(serviceName, functionName, request, headers, runtime);
  }

  async listEventSourcesWithOptions(serviceName: string, functionName: string, request: ListEventSourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListEventSourcesResponse> {
    Util.validateModel(request);
    serviceName = OpenApiUtil.getEncodeParam(serviceName);
    functionName = OpenApiUtil.getEncodeParam(functionName);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListEventSourcesResponse>(await this.doROARequest("ListEventSources", "2021-04-06", "HTTPS", "GET", "AK", `/2021-04-06/services/${serviceName}/functions/${functionName}/event-sources`, "json", req, runtime), new ListEventSourcesResponse({}));
  }

  async listFunctionAsyncInvokeConfigs(serviceName: string, functionName: string, request: ListFunctionAsyncInvokeConfigsRequest): Promise<ListFunctionAsyncInvokeConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFunctionAsyncInvokeConfigsWithOptions(serviceName, functionName, request, headers, runtime);
  }

  async listFunctionAsyncInvokeConfigsWithOptions(serviceName: string, functionName: string, request: ListFunctionAsyncInvokeConfigsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListFunctionAsyncInvokeConfigsResponse> {
    Util.validateModel(request);
    serviceName = OpenApiUtil.getEncodeParam(serviceName);
    functionName = OpenApiUtil.getEncodeParam(functionName);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.limit)) {
      query["limit"] = request.limit;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListFunctionAsyncInvokeConfigsResponse>(await this.doROARequest("ListFunctionAsyncInvokeConfigs", "2021-04-06", "HTTPS", "GET", "AK", `/2021-04-06/services/${serviceName}/functions/${functionName}/async-invoke-configs`, "json", req, runtime), new ListFunctionAsyncInvokeConfigsResponse({}));
  }

  async listFunctions(serviceName: string, request: ListFunctionsRequest): Promise<ListFunctionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFunctionsWithOptions(serviceName, request, headers, runtime);
  }

  async listFunctionsWithOptions(serviceName: string, request: ListFunctionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListFunctionsResponse> {
    Util.validateModel(request);
    serviceName = OpenApiUtil.getEncodeParam(serviceName);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.limit)) {
      query["limit"] = request.limit;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.prefix)) {
      query["prefix"] = request.prefix;
    }

    if (!Util.isUnset(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    if (!Util.isUnset(request.startKey)) {
      query["startKey"] = request.startKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListFunctionsResponse>(await this.doROARequest("ListFunctions", "2021-04-06", "HTTPS", "GET", "AK", `/2021-04-06/services/${serviceName}/functions`, "json", req, runtime), new ListFunctionsResponse({}));
  }

  async listLayerVersions(layerName: string, request: ListLayerVersionsRequest): Promise<ListLayerVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listLayerVersionsWithOptions(layerName, request, headers, runtime);
  }

  async listLayerVersionsWithOptions(layerName: string, request: ListLayerVersionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListLayerVersionsResponse> {
    Util.validateModel(request);
    layerName = OpenApiUtil.getEncodeParam(layerName);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.limit)) {
      query["limit"] = request.limit;
    }

    if (!Util.isUnset(request.startVersion)) {
      query["startVersion"] = request.startVersion;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListLayerVersionsResponse>(await this.doROARequest("ListLayerVersions", "2021-04-06", "HTTPS", "GET", "AK", `/2021-04-06/layers/${layerName}/versions`, "json", req, runtime), new ListLayerVersionsResponse({}));
  }

  async listLayers(request: ListLayersRequest): Promise<ListLayersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listLayersWithOptions(request, headers, runtime);
  }

  async listLayersWithOptions(request: ListLayersRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListLayersResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.limit)) {
      query["limit"] = request.limit;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.prefix)) {
      query["prefix"] = request.prefix;
    }

    if (!Util.isUnset(request.startKey)) {
      query["startKey"] = request.startKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListLayersResponse>(await this.doROARequest("ListLayers", "2021-04-06", "HTTPS", "GET", "AK", `/2021-04-06/layers`, "json", req, runtime), new ListLayersResponse({}));
  }

  async listOnDemandConfigs(request: ListOnDemandConfigsRequest): Promise<ListOnDemandConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listOnDemandConfigsWithOptions(request, headers, runtime);
  }

  async listOnDemandConfigsWithOptions(request: ListOnDemandConfigsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListOnDemandConfigsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.limit)) {
      query["limit"] = request.limit;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.prefix)) {
      query["prefix"] = request.prefix;
    }

    if (!Util.isUnset(request.startKey)) {
      query["startKey"] = request.startKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListOnDemandConfigsResponse>(await this.doROARequest("ListOnDemandConfigs", "2021-04-06", "HTTPS", "GET", "AK", `/2021-04-06/on-demand-configs`, "json", req, runtime), new ListOnDemandConfigsResponse({}));
  }

  async listProvisionConfigs(request: ListProvisionConfigsRequest): Promise<ListProvisionConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProvisionConfigsWithOptions(request, headers, runtime);
  }

  async listProvisionConfigsWithOptions(request: ListProvisionConfigsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListProvisionConfigsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.limit)) {
      query["limit"] = request.limit;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    if (!Util.isUnset(request.serviceName)) {
      query["serviceName"] = request.serviceName;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListProvisionConfigsResponse>(await this.doROARequest("ListProvisionConfigs", "2021-04-06", "HTTPS", "GET", "AK", `/2021-04-06/provision-configs`, "json", req, runtime), new ListProvisionConfigsResponse({}));
  }

  async listReservedCapacities(request: ListReservedCapacitiesRequest): Promise<ListReservedCapacitiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listReservedCapacitiesWithOptions(request, headers, runtime);
  }

  async listReservedCapacitiesWithOptions(request: ListReservedCapacitiesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListReservedCapacitiesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.limit)) {
      query["limit"] = request.limit;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListReservedCapacitiesResponse>(await this.doROARequest("ListReservedCapacities", "2021-04-06", "HTTPS", "GET", "AK", `/2021-04-06/reserved-capacities`, "json", req, runtime), new ListReservedCapacitiesResponse({}));
  }

  async listServiceVersions(serviceName: string, request: ListServiceVersionsRequest): Promise<ListServiceVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listServiceVersionsWithOptions(serviceName, request, headers, runtime);
  }

  async listServiceVersionsWithOptions(serviceName: string, request: ListServiceVersionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListServiceVersionsResponse> {
    Util.validateModel(request);
    serviceName = OpenApiUtil.getEncodeParam(serviceName);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.direction)) {
      query["direction"] = request.direction;
    }

    if (!Util.isUnset(request.limit)) {
      query["limit"] = request.limit;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.startKey)) {
      query["startKey"] = request.startKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListServiceVersionsResponse>(await this.doROARequest("ListServiceVersions", "2021-04-06", "HTTPS", "GET", "AK", `/2021-04-06/services/${serviceName}/versions`, "json", req, runtime), new ListServiceVersionsResponse({}));
  }

  async listServices(request: ListServicesRequest): Promise<ListServicesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listServicesWithOptions(request, headers, runtime);
  }

  async listServicesWithOptions(request: ListServicesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListServicesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.limit)) {
      query["limit"] = request.limit;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.prefix)) {
      query["prefix"] = request.prefix;
    }

    if (!Util.isUnset(request.startKey)) {
      query["startKey"] = request.startKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListServicesResponse>(await this.doROARequest("ListServices", "2021-04-06", "HTTPS", "GET", "AK", `/2021-04-06/services`, "json", req, runtime), new ListServicesResponse({}));
  }

  async listStatefulAsyncInvocations(serviceName: string, functionName: string, request: ListStatefulAsyncInvocationsRequest): Promise<ListStatefulAsyncInvocationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listStatefulAsyncInvocationsWithOptions(serviceName, functionName, request, headers, runtime);
  }

  async listStatefulAsyncInvocationsWithOptions(serviceName: string, functionName: string, request: ListStatefulAsyncInvocationsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListStatefulAsyncInvocationsResponse> {
    Util.validateModel(request);
    serviceName = OpenApiUtil.getEncodeParam(serviceName);
    functionName = OpenApiUtil.getEncodeParam(functionName);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.includePayload)) {
      query["includePayload"] = request.includePayload;
    }

    if (!Util.isUnset(request.invocationIdPrefix)) {
      query["invocationIdPrefix"] = request.invocationIdPrefix;
    }

    if (!Util.isUnset(request.limit)) {
      query["limit"] = request.limit;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    if (!Util.isUnset(request.sortOrderByTime)) {
      query["sortOrderByTime"] = request.sortOrderByTime;
    }

    if (!Util.isUnset(request.startedTimeBegin)) {
      query["startedTimeBegin"] = request.startedTimeBegin;
    }

    if (!Util.isUnset(request.startedTimeEnd)) {
      query["startedTimeEnd"] = request.startedTimeEnd;
    }

    if (!Util.isUnset(request.status)) {
      query["status"] = request.status;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListStatefulAsyncInvocationsResponse>(await this.doROARequest("ListStatefulAsyncInvocations", "2021-04-06", "HTTPS", "GET", "AK", `/2021-04-06/services/${serviceName}/functions/${functionName}/stateful-async-invocations`, "json", req, runtime), new ListStatefulAsyncInvocationsResponse({}));
  }

  async listTaggedResources(request: ListTaggedResourcesRequest): Promise<ListTaggedResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTaggedResourcesWithOptions(request, headers, runtime);
  }

  async listTaggedResourcesWithOptions(request: ListTaggedResourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTaggedResourcesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.limit)) {
      query["limit"] = request.limit;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListTaggedResourcesResponse>(await this.doROARequest("ListTaggedResources", "2021-04-06", "HTTPS", "GET", "AK", `/2021-04-06/tags`, "json", req, runtime), new ListTaggedResourcesResponse({}));
  }

  async listTriggers(serviceName: string, functionName: string, request: ListTriggersRequest): Promise<ListTriggersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTriggersWithOptions(serviceName, functionName, request, headers, runtime);
  }

  async listTriggersWithOptions(serviceName: string, functionName: string, request: ListTriggersRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTriggersResponse> {
    Util.validateModel(request);
    serviceName = OpenApiUtil.getEncodeParam(serviceName);
    functionName = OpenApiUtil.getEncodeParam(functionName);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.limit)) {
      query["limit"] = request.limit;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.prefix)) {
      query["prefix"] = request.prefix;
    }

    if (!Util.isUnset(request.startKey)) {
      query["startKey"] = request.startKey;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<ListTriggersResponse>(await this.doROARequest("ListTriggers", "2021-04-06", "HTTPS", "GET", "AK", `/2021-04-06/services/${serviceName}/functions/${functionName}/triggers`, "json", req, runtime), new ListTriggersResponse({}));
  }

  async listVpcBindings(serviceName: string): Promise<ListVpcBindingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listVpcBindingsWithOptions(serviceName, headers, runtime);
  }

  async listVpcBindingsWithOptions(serviceName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListVpcBindingsResponse> {
    serviceName = OpenApiUtil.getEncodeParam(serviceName);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<ListVpcBindingsResponse>(await this.doROARequest("ListVpcBindings", "2021-04-06", "HTTPS", "GET", "AK", `/2021-04-06/services/${serviceName}/bindings`, "json", req, runtime), new ListVpcBindingsResponse({}));
  }

  async permanentDeleteLayerVersion(userID: string, layerName: string, version: string): Promise<PermanentDeleteLayerVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.permanentDeleteLayerVersionWithOptions(userID, layerName, version, headers, runtime);
  }

  async permanentDeleteLayerVersionWithOptions(userID: string, layerName: string, version: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PermanentDeleteLayerVersionResponse> {
    userID = OpenApiUtil.getEncodeParam(userID);
    layerName = OpenApiUtil.getEncodeParam(layerName);
    version = OpenApiUtil.getEncodeParam(version);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<PermanentDeleteLayerVersionResponse>(await this.doROARequest("PermanentDeleteLayerVersion", "2021-04-06", "HTTPS", "DELETE", "AK", `/2021-04-06/adminlayers/${userID}/${layerName}/versions/${version}`, "none", req, runtime), new PermanentDeleteLayerVersionResponse({}));
  }

  async publishLayerAsPublic(layerName: string, version: string): Promise<PublishLayerAsPublicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.publishLayerAsPublicWithOptions(layerName, version, headers, runtime);
  }

  async publishLayerAsPublicWithOptions(layerName: string, version: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PublishLayerAsPublicResponse> {
    layerName = OpenApiUtil.getEncodeParam(layerName);
    version = OpenApiUtil.getEncodeParam(version);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    return $tea.cast<PublishLayerAsPublicResponse>(await this.doROARequest("PublishLayerAsPublic", "2021-04-06", "HTTPS", "POST", "AK", `/2021-04-06/layers/${layerName}/versions/${version}`, "none", req, runtime), new PublishLayerAsPublicResponse({}));
  }

  async publishServiceVersion(serviceName: string, request: PublishServiceVersionRequest): Promise<PublishServiceVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new PublishServiceVersionHeaders({ });
    return await this.publishServiceVersionWithOptions(serviceName, request, headers, runtime);
  }

  async publishServiceVersionWithOptions(serviceName: string, request: PublishServiceVersionRequest, headers: PublishServiceVersionHeaders, runtime: $Util.RuntimeOptions): Promise<PublishServiceVersionResponse> {
    Util.validateModel(request);
    serviceName = OpenApiUtil.getEncodeParam(serviceName);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.ifMatch)) {
      realHeaders["If-Match"] = headers.ifMatch;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<PublishServiceVersionResponse>(await this.doROARequest("PublishServiceVersion", "2021-04-06", "HTTPS", "POST", "AK", `/2021-04-06/services/${serviceName}/versions`, "json", req, runtime), new PublishServiceVersionResponse({}));
  }

  async putFunctionAsyncInvokeConfig(serviceName: string, functionName: string, request: PutFunctionAsyncInvokeConfigRequest): Promise<PutFunctionAsyncInvokeConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putFunctionAsyncInvokeConfigWithOptions(serviceName, functionName, request, headers, runtime);
  }

  async putFunctionAsyncInvokeConfigWithOptions(serviceName: string, functionName: string, request: PutFunctionAsyncInvokeConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PutFunctionAsyncInvokeConfigResponse> {
    Util.validateModel(request);
    serviceName = OpenApiUtil.getEncodeParam(serviceName);
    functionName = OpenApiUtil.getEncodeParam(functionName);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset($tea.toMap(request.destinationConfig))) {
      body["destinationConfig"] = request.destinationConfig;
    }

    if (!Util.isUnset(request.maxAsyncEventAgeInSeconds)) {
      body["maxAsyncEventAgeInSeconds"] = request.maxAsyncEventAgeInSeconds;
    }

    if (!Util.isUnset(request.maxAsyncRetryAttempts)) {
      body["maxAsyncRetryAttempts"] = request.maxAsyncRetryAttempts;
    }

    if (!Util.isUnset(request.statefulInvocation)) {
      body["statefulInvocation"] = request.statefulInvocation;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<PutFunctionAsyncInvokeConfigResponse>(await this.doROARequest("PutFunctionAsyncInvokeConfig", "2021-04-06", "HTTPS", "PUT", "AK", `/2021-04-06/services/${serviceName}/functions/${functionName}/async-invoke-config`, "json", req, runtime), new PutFunctionAsyncInvokeConfigResponse({}));
  }

  async putFunctionOnDemandConfig(serviceName: string, functionName: string, request: PutFunctionOnDemandConfigRequest): Promise<PutFunctionOnDemandConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new PutFunctionOnDemandConfigHeaders({ });
    return await this.putFunctionOnDemandConfigWithOptions(serviceName, functionName, request, headers, runtime);
  }

  async putFunctionOnDemandConfigWithOptions(serviceName: string, functionName: string, request: PutFunctionOnDemandConfigRequest, headers: PutFunctionOnDemandConfigHeaders, runtime: $Util.RuntimeOptions): Promise<PutFunctionOnDemandConfigResponse> {
    Util.validateModel(request);
    serviceName = OpenApiUtil.getEncodeParam(serviceName);
    functionName = OpenApiUtil.getEncodeParam(functionName);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.maximumInstanceCount)) {
      body["maximumInstanceCount"] = request.maximumInstanceCount;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.ifMatch)) {
      realHeaders["If-Match"] = headers.ifMatch;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<PutFunctionOnDemandConfigResponse>(await this.doROARequest("PutFunctionOnDemandConfig", "2021-04-06", "HTTPS", "PUT", "AK", `/2021-04-06/services/${serviceName}/functions/${functionName}/on-demand-config`, "json", req, runtime), new PutFunctionOnDemandConfigResponse({}));
  }

  async putProvisionConfig(serviceName: string, functionName: string, request: PutProvisionConfigRequest): Promise<PutProvisionConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putProvisionConfigWithOptions(serviceName, functionName, request, headers, runtime);
  }

  async putProvisionConfigWithOptions(serviceName: string, functionName: string, request: PutProvisionConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PutProvisionConfigResponse> {
    Util.validateModel(request);
    serviceName = OpenApiUtil.getEncodeParam(serviceName);
    functionName = OpenApiUtil.getEncodeParam(functionName);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.scheduledActions)) {
      body["scheduledActions"] = request.scheduledActions;
    }

    if (!Util.isUnset(request.target)) {
      body["target"] = request.target;
    }

    if (!Util.isUnset(request.targetTrackingPolicies)) {
      body["targetTrackingPolicies"] = request.targetTrackingPolicies;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<PutProvisionConfigResponse>(await this.doROARequest("PutProvisionConfig", "2021-04-06", "HTTPS", "PUT", "AK", `/2021-04-06/services/${serviceName}/functions/${functionName}/provision-config`, "json", req, runtime), new PutProvisionConfigResponse({}));
  }

  async registerEventSource(serviceName: string, functionName: string, request: RegisterEventSourceRequest): Promise<RegisterEventSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.registerEventSourceWithOptions(serviceName, functionName, request, headers, runtime);
  }

  async registerEventSourceWithOptions(serviceName: string, functionName: string, request: RegisterEventSourceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<RegisterEventSourceResponse> {
    Util.validateModel(request);
    serviceName = OpenApiUtil.getEncodeParam(serviceName);
    functionName = OpenApiUtil.getEncodeParam(functionName);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.sourceArn)) {
      body["sourceArn"] = request.sourceArn;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<RegisterEventSourceResponse>(await this.doROARequest("RegisterEventSource", "2021-04-06", "HTTPS", "POST", "AK", `/2021-04-06/services/${serviceName}/functions/${functionName}/event-sources`, "json", req, runtime), new RegisterEventSourceResponse({}));
  }

  async stopStatefulAsyncInvocation(serviceName: string, functionName: string, invocationId: string, request: StopStatefulAsyncInvocationRequest): Promise<StopStatefulAsyncInvocationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopStatefulAsyncInvocationWithOptions(serviceName, functionName, invocationId, request, headers, runtime);
  }

  async stopStatefulAsyncInvocationWithOptions(serviceName: string, functionName: string, invocationId: string, request: StopStatefulAsyncInvocationRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StopStatefulAsyncInvocationResponse> {
    Util.validateModel(request);
    serviceName = OpenApiUtil.getEncodeParam(serviceName);
    functionName = OpenApiUtil.getEncodeParam(functionName);
    invocationId = OpenApiUtil.getEncodeParam(invocationId);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    return $tea.cast<StopStatefulAsyncInvocationResponse>(await this.doROARequest("StopStatefulAsyncInvocation", "2021-04-06", "HTTPS", "PUT", "AK", `/2021-04-06/services/${serviceName}/functions/${functionName}/stateful-async-invocations/${invocationId}`, "none", req, runtime), new StopStatefulAsyncInvocationResponse({}));
  }

  async tagResource(request: TagResourceRequest): Promise<TagResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.tagResourceWithOptions(request, headers, runtime);
  }

  async tagResourceWithOptions(request: TagResourceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<TagResourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resourceArn)) {
      body["resourceArn"] = request.resourceArn;
    }

    if (!Util.isUnset(request.tags)) {
      body["tags"] = request.tags;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<TagResourceResponse>(await this.doROARequest("TagResource", "2021-04-06", "HTTPS", "POST", "AK", `/2021-04-06/tag`, "none", req, runtime), new TagResourceResponse({}));
  }

  async untagResource(request: UntagResourceRequest): Promise<UntagResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.untagResourceWithOptions(request, headers, runtime);
  }

  async untagResourceWithOptions(request: UntagResourceRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UntagResourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.all)) {
      body["all"] = request.all;
    }

    if (!Util.isUnset(request.resourceArn)) {
      body["resourceArn"] = request.resourceArn;
    }

    if (!Util.isUnset(request.tagKeys)) {
      body["tagKeys"] = request.tagKeys;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<UntagResourceResponse>(await this.doROARequest("UntagResource", "2021-04-06", "HTTPS", "DELETE", "AK", `/2021-04-06/tag`, "none", req, runtime), new UntagResourceResponse({}));
  }

  async updateAlias(serviceName: string, aliasName: string, request: UpdateAliasRequest): Promise<UpdateAliasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateAliasHeaders({ });
    return await this.updateAliasWithOptions(serviceName, aliasName, request, headers, runtime);
  }

  async updateAliasWithOptions(serviceName: string, aliasName: string, request: UpdateAliasRequest, headers: UpdateAliasHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateAliasResponse> {
    Util.validateModel(request);
    serviceName = OpenApiUtil.getEncodeParam(serviceName);
    aliasName = OpenApiUtil.getEncodeParam(aliasName);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.additionalVersionWeight)) {
      body["additionalVersionWeight"] = request.additionalVersionWeight;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.versionId)) {
      body["versionId"] = request.versionId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.ifMatch)) {
      realHeaders["If-Match"] = headers.ifMatch;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<UpdateAliasResponse>(await this.doROARequest("UpdateAlias", "2021-04-06", "HTTPS", "PUT", "AK", `/2021-04-06/services/${serviceName}/aliases/${aliasName}`, "json", req, runtime), new UpdateAliasResponse({}));
  }

  async updateCustomDomain(domainName: string, request: UpdateCustomDomainRequest): Promise<UpdateCustomDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateCustomDomainWithOptions(domainName, request, headers, runtime);
  }

  async updateCustomDomainWithOptions(domainName: string, request: UpdateCustomDomainRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateCustomDomainResponse> {
    Util.validateModel(request);
    domainName = OpenApiUtil.getEncodeParam(domainName);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset($tea.toMap(request.certConfig))) {
      body["certConfig"] = request.certConfig;
    }

    if (!Util.isUnset(request.protocol)) {
      body["protocol"] = request.protocol;
    }

    if (!Util.isUnset($tea.toMap(request.routeConfig))) {
      body["routeConfig"] = request.routeConfig;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<UpdateCustomDomainResponse>(await this.doROARequest("UpdateCustomDomain", "2021-04-06", "HTTPS", "PUT", "AK", `/2021-04-06/custom-domains/${domainName}`, "json", req, runtime), new UpdateCustomDomainResponse({}));
  }

  async updateFunction(serviceName: string, functionName: string, request: UpdateFunctionRequest): Promise<UpdateFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateFunctionHeaders({ });
    return await this.updateFunctionWithOptions(serviceName, functionName, request, headers, runtime);
  }

  async updateFunctionWithOptions(serviceName: string, functionName: string, request: UpdateFunctionRequest, headers: UpdateFunctionHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateFunctionResponse> {
    Util.validateModel(request);
    serviceName = OpenApiUtil.getEncodeParam(serviceName);
    functionName = OpenApiUtil.getEncodeParam(functionName);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceConcurrency)) {
      body["InstanceConcurrency"] = request.instanceConcurrency;
    }

    if (!Util.isUnset(request.caPort)) {
      body["caPort"] = request.caPort;
    }

    if (!Util.isUnset($tea.toMap(request.code))) {
      body["code"] = request.code;
    }

    if (!Util.isUnset($tea.toMap(request.customContainerConfig))) {
      body["customContainerConfig"] = request.customContainerConfig;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.environmentVariables)) {
      body["environmentVariables"] = request.environmentVariables;
    }

    if (!Util.isUnset(request.handler)) {
      body["handler"] = request.handler;
    }

    if (!Util.isUnset(request.initializationTimeout)) {
      body["initializationTimeout"] = request.initializationTimeout;
    }

    if (!Util.isUnset(request.initializer)) {
      body["initializer"] = request.initializer;
    }

    if (!Util.isUnset($tea.toMap(request.instanceLifecycleConfig))) {
      body["instanceLifecycleConfig"] = request.instanceLifecycleConfig;
    }

    if (!Util.isUnset(request.instanceType)) {
      body["instanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.layers)) {
      body["layers"] = request.layers;
    }

    if (!Util.isUnset(request.memorySize)) {
      body["memorySize"] = request.memorySize;
    }

    if (!Util.isUnset(request.runtime)) {
      body["runtime"] = request.runtime;
    }

    if (!Util.isUnset(request.timeout)) {
      body["timeout"] = request.timeout;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.ifMatch)) {
      realHeaders["If-Match"] = headers.ifMatch;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = headers.xFcAccountId;
    }

    if (!Util.isUnset(headers.xFcCodeChecksum)) {
      realHeaders["x-fc-code-checksum"] = headers.xFcCodeChecksum;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<UpdateFunctionResponse>(await this.doROARequest("UpdateFunction", "2021-04-06", "HTTPS", "PUT", "AK", `/2021-04-06/services/${serviceName}/functions/${functionName}`, "json", req, runtime), new UpdateFunctionResponse({}));
  }

  async updateService(serviceName: string, request: UpdateServiceRequest): Promise<UpdateServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateServiceHeaders({ });
    return await this.updateServiceWithOptions(serviceName, request, headers, runtime);
  }

  async updateServiceWithOptions(serviceName: string, request: UpdateServiceRequest, headers: UpdateServiceHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateServiceResponse> {
    Util.validateModel(request);
    serviceName = OpenApiUtil.getEncodeParam(serviceName);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.internetAccess)) {
      body["internetAccess"] = request.internetAccess;
    }

    if (!Util.isUnset($tea.toMap(request.logConfig))) {
      body["logConfig"] = request.logConfig;
    }

    if (!Util.isUnset($tea.toMap(request.nasConfig))) {
      body["nasConfig"] = request.nasConfig;
    }

    if (!Util.isUnset(request.role)) {
      body["role"] = request.role;
    }

    if (!Util.isUnset($tea.toMap(request.tracingConfig))) {
      body["tracingConfig"] = request.tracingConfig;
    }

    if (!Util.isUnset($tea.toMap(request.vpcConfig))) {
      body["vpcConfig"] = request.vpcConfig;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.ifMatch)) {
      realHeaders["If-Match"] = headers.ifMatch;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = headers.xFcAccountId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<UpdateServiceResponse>(await this.doROARequest("UpdateService", "2021-04-06", "HTTPS", "PUT", "AK", `/2021-04-06/services/${serviceName}`, "json", req, runtime), new UpdateServiceResponse({}));
  }

  async updateTrigger(serviceName: string, functionName: string, triggerName: string, request: UpdateTriggerRequest): Promise<UpdateTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateTriggerHeaders({ });
    return await this.updateTriggerWithOptions(serviceName, functionName, triggerName, request, headers, runtime);
  }

  async updateTriggerWithOptions(serviceName: string, functionName: string, triggerName: string, request: UpdateTriggerRequest, headers: UpdateTriggerHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateTriggerResponse> {
    Util.validateModel(request);
    serviceName = OpenApiUtil.getEncodeParam(serviceName);
    functionName = OpenApiUtil.getEncodeParam(functionName);
    triggerName = OpenApiUtil.getEncodeParam(triggerName);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.invocationRole)) {
      body["invocationRole"] = request.invocationRole;
    }

    if (!Util.isUnset(request.qualifier)) {
      body["qualifier"] = request.qualifier;
    }

    if (!Util.isUnset(request.triggerConfig)) {
      body["triggerConfig"] = request.triggerConfig;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.ifMatch)) {
      realHeaders["If-Match"] = headers.ifMatch;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = headers.xFcAccountId;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    return $tea.cast<UpdateTriggerResponse>(await this.doROARequest("UpdateTrigger", "2021-04-06", "HTTPS", "PUT", "AK", `/2021-04-06/services/${serviceName}/functions/${functionName}/triggers/${triggerName}`, "json", req, runtime), new UpdateTriggerResponse({}));
  }

}

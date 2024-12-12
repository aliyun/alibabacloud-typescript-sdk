// This file is auto-generated, don't edit it
/**
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import { Readable } from 'stream';
import * as $tea from '@alicloud/tea-typescript';

export class AccelerationInfo extends $tea.Model {
  /**
   * @example
   * deprecated
   */
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

export class Alias extends $tea.Model {
  additionalVersionWeight?: { [key: string]: number };
  /**
   * @example
   * prod
   */
  aliasName?: string;
  /**
   * @example
   * 2006-01-02T15:04:05Z07:00
   */
  createdTime?: string;
  /**
   * @example
   * alias for pre env
   */
  description?: string;
  /**
   * @example
   * 2006-01-02T15:04:05Z07:00
   */
  lastModifiedTime?: string;
  /**
   * @example
   * 1
   */
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

export class AsyncConfig extends $tea.Model {
  /**
   * @example
   * true
   */
  asyncTask?: boolean;
  /**
   * @example
   * 2006-01-02T15:04:05Z07:00
   */
  createdTime?: string;
  destinationConfig?: DestinationConfig;
  /**
   * @example
   * acs:fc:cn-shanghai:1234/functions/my-func
   */
  functionArn?: string;
  /**
   * @example
   * 2006-01-02T15:04:05Z07:00
   */
  lastModifiedTime?: string;
  /**
   * @example
   * 3600
   */
  maxAsyncEventAgeInSeconds?: number;
  /**
   * @example
   * 3
   */
  maxAsyncRetryAttempts?: number;
  static names(): { [key: string]: string } {
    return {
      asyncTask: 'asyncTask',
      createdTime: 'createdTime',
      destinationConfig: 'destinationConfig',
      functionArn: 'functionArn',
      lastModifiedTime: 'lastModifiedTime',
      maxAsyncEventAgeInSeconds: 'maxAsyncEventAgeInSeconds',
      maxAsyncRetryAttempts: 'maxAsyncRetryAttempts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTask: 'boolean',
      createdTime: 'string',
      destinationConfig: DestinationConfig,
      functionArn: 'string',
      lastModifiedTime: 'string',
      maxAsyncEventAgeInSeconds: 'number',
      maxAsyncRetryAttempts: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsyncTask extends $tea.Model {
  /**
   * @example
   * 3
   */
  alreadyRetriedTimes?: number;
  /**
   * @example
   * Succeeded
   */
  destinationStatus?: string;
  /**
   * @example
   * 1000
   */
  durationMs?: number;
  /**
   * @example
   * 1633449590000
   */
  endTime?: number;
  events?: AsyncTaskEvent[];
  /**
   * @example
   * acs:fc:cn-shanghai:1234/functions/my-func
   */
  functionArn?: string;
  /**
   * @example
   * D4-*******9FD1-882707E
   */
  instanceId?: string;
  /**
   * @example
   * prod
   */
  qualifier?: string;
  /**
   * @example
   * e026ae92-61e5-472f-b32d-1c9e3c4e****
   */
  requestId?: string;
  /**
   * @example
   * result
   */
  returnPayload?: string;
  /**
   * @example
   * 1633449590000
   */
  startedTime?: number;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * UnhandledInvocationError
   */
  taskErrorMessage?: string;
  /**
   * @example
   * e026ae92-61e5-472f-b32d-1c9e3c4e****
   */
  taskId?: string;
  /**
   * @example
   * body
   */
  taskPayload?: string;
  static names(): { [key: string]: string } {
    return {
      alreadyRetriedTimes: 'alreadyRetriedTimes',
      destinationStatus: 'destinationStatus',
      durationMs: 'durationMs',
      endTime: 'endTime',
      events: 'events',
      functionArn: 'functionArn',
      instanceId: 'instanceId',
      qualifier: 'qualifier',
      requestId: 'requestId',
      returnPayload: 'returnPayload',
      startedTime: 'startedTime',
      status: 'status',
      taskErrorMessage: 'taskErrorMessage',
      taskId: 'taskId',
      taskPayload: 'taskPayload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alreadyRetriedTimes: 'number',
      destinationStatus: 'string',
      durationMs: 'number',
      endTime: 'number',
      events: { 'type': 'array', 'itemType': AsyncTaskEvent },
      functionArn: 'string',
      instanceId: 'string',
      qualifier: 'string',
      requestId: 'string',
      returnPayload: 'string',
      startedTime: 'number',
      status: 'string',
      taskErrorMessage: 'string',
      taskId: 'string',
      taskPayload: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsyncTaskEvent extends $tea.Model {
  /**
   * @example
   * body
   */
  eventDetail?: string;
  /**
   * @example
   * 1
   */
  eventId?: number;
  /**
   * @example
   * Succeeded
   */
  status?: string;
  /**
   * @example
   * 1647420449721
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      eventDetail: 'eventDetail',
      eventId: 'eventId',
      status: 'status',
      timestamp: 'timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventDetail: 'string',
      eventId: 'number',
      status: 'string',
      timestamp: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthConfig extends $tea.Model {
  /**
   * @example
   * {}
   */
  authInfo?: string;
  /**
   * @example
   * anonymous, function, jwt
   */
  authType?: string;
  static names(): { [key: string]: string } {
    return {
      authInfo: 'authInfo',
      authType: 'authType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authInfo: 'string',
      authType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchWindow extends $tea.Model {
  /**
   * @example
   * 100
   */
  countBasedWindow?: number;
  /**
   * @example
   * 10
   */
  timeBasedWindow?: number;
  static names(): { [key: string]: string } {
    return {
      countBasedWindow: 'CountBasedWindow',
      timeBasedWindow: 'TimeBasedWindow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      countBasedWindow: 'number',
      timeBasedWindow: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CDNTriggerConfig extends $tea.Model {
  /**
   * @example
   * CdnDomainStarted
   */
  eventName?: string;
  /**
   * @example
   * 1.0.0
   */
  eventVersion?: string;
  filter?: { [key: string]: string[] };
  /**
   * @example
   * 缓存事件触发器
   */
  notes?: string;
  static names(): { [key: string]: string } {
    return {
      eventName: 'eventName',
      eventVersion: 'eventVersion',
      filter: 'filter',
      notes: 'notes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventName: 'string',
      eventVersion: 'string',
      filter: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': 'string' } },
      notes: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CertConfig extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * my-cert
   */
  certName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PEM format
   */
  certificate?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PEM format
   */
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

export class ConcurrencyConfig extends $tea.Model {
  /**
   * @example
   * acs:fc:cn-shanghai:123:functions/demo
   */
  functionArn?: string;
  /**
   * @example
   * 10
   */
  reservedConcurrency?: number;
  static names(): { [key: string]: string } {
    return {
      functionArn: 'functionArn',
      reservedConcurrency: 'reservedConcurrency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionArn: 'string',
      reservedConcurrency: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAliasInput extends $tea.Model {
  additionalVersionWeight?: { [key: string]: number };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * prod
   */
  aliasName?: string;
  /**
   * @example
   * my alias
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
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

export class CreateCustomDomainInput extends $tea.Model {
  authConfig?: AuthConfig;
  certConfig?: CertConfig;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * HTTP
   */
  protocol?: string;
  routeConfig?: RouteConfig;
  tlsConfig?: TLSConfig;
  wafConfig?: WAFConfig;
  static names(): { [key: string]: string } {
    return {
      authConfig: 'authConfig',
      certConfig: 'certConfig',
      domainName: 'domainName',
      protocol: 'protocol',
      routeConfig: 'routeConfig',
      tlsConfig: 'tlsConfig',
      wafConfig: 'wafConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConfig: AuthConfig,
      certConfig: CertConfig,
      domainName: 'string',
      protocol: 'string',
      routeConfig: RouteConfig,
      tlsConfig: TLSConfig,
      wafConfig: WAFConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFunctionInput extends $tea.Model {
  code?: InputCodeLocation;
  /**
   * @example
   * 1
   */
  cpu?: number;
  customContainerConfig?: CustomContainerConfig;
  customDNS?: CustomDNS;
  customRuntimeConfig?: CustomRuntimeConfig;
  /**
   * @example
   * my function
   */
  description?: string;
  /**
   * @example
   * 512
   */
  diskSize?: number;
  environmentVariables?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * my-function-1
   */
  functionName?: string;
  gpuConfig?: GPUConfig;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * index.handler
   */
  handler?: string;
  /**
   * @example
   * 1
   */
  instanceConcurrency?: number;
  instanceLifecycleConfig?: InstanceLifecycleConfig;
  /**
   * @example
   * true
   */
  internetAccess?: boolean;
  layers?: string[];
  logConfig?: LogConfig;
  /**
   * @example
   * 512
   */
  memorySize?: number;
  nasConfig?: NASConfig;
  ossMountConfig?: OSSMountConfig;
  /**
   * @example
   * acs:ram::188077086902****:role/fc-test
   */
  role?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * python3.10
   */
  runtime?: string;
  tags?: Tag[];
  /**
   * @example
   * 60
   */
  timeout?: number;
  tracingConfig?: TracingConfig;
  vpcConfig?: VPCConfig;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      cpu: 'cpu',
      customContainerConfig: 'customContainerConfig',
      customDNS: 'customDNS',
      customRuntimeConfig: 'customRuntimeConfig',
      description: 'description',
      diskSize: 'diskSize',
      environmentVariables: 'environmentVariables',
      functionName: 'functionName',
      gpuConfig: 'gpuConfig',
      handler: 'handler',
      instanceConcurrency: 'instanceConcurrency',
      instanceLifecycleConfig: 'instanceLifecycleConfig',
      internetAccess: 'internetAccess',
      layers: 'layers',
      logConfig: 'logConfig',
      memorySize: 'memorySize',
      nasConfig: 'nasConfig',
      ossMountConfig: 'ossMountConfig',
      role: 'role',
      runtime: 'runtime',
      tags: 'tags',
      timeout: 'timeout',
      tracingConfig: 'tracingConfig',
      vpcConfig: 'vpcConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: InputCodeLocation,
      cpu: 'number',
      customContainerConfig: CustomContainerConfig,
      customDNS: CustomDNS,
      customRuntimeConfig: CustomRuntimeConfig,
      description: 'string',
      diskSize: 'number',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      functionName: 'string',
      gpuConfig: GPUConfig,
      handler: 'string',
      instanceConcurrency: 'number',
      instanceLifecycleConfig: InstanceLifecycleConfig,
      internetAccess: 'boolean',
      layers: { 'type': 'array', 'itemType': 'string' },
      logConfig: LogConfig,
      memorySize: 'number',
      nasConfig: NASConfig,
      ossMountConfig: OSSMountConfig,
      role: 'string',
      runtime: 'string',
      tags: { 'type': 'array', 'itemType': Tag },
      timeout: 'number',
      tracingConfig: TracingConfig,
      vpcConfig: VPCConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLayerVersionInput extends $tea.Model {
  code?: InputCodeLocation;
  compatibleRuntime?: string[];
  /**
   * @example
   * my first layer
   */
  description?: string;
  /**
   * @example
   * Apache
   */
  license?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      compatibleRuntime: 'compatibleRuntime',
      description: 'description',
      license: 'license',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: InputCodeLocation,
      compatibleRuntime: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      license: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTriggerInput extends $tea.Model {
  /**
   * @example
   * trigger for test
   */
  description?: string;
  /**
   * @example
   * acs:ram::1234567890:role/fc-test
   */
  invocationRole?: string;
  /**
   * @example
   * LATEST
   */
  qualifier?: string;
  /**
   * @example
   * acs:oss:cn-shanghai:12345:mybucket
   */
  sourceArn?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"events":["oss:ObjectCreated:*"],"filter":{"key":{"prefix":"/prefix","suffix":".zip"}}}
   */
  triggerConfig?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * oss_create_object_demo
   */
  triggerName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * oss
   */
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

export class CreateVpcBindingInput extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vpc-8vb8x8dggvr0axxxxxxxx
   */
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

export class CustomContainerConfig extends $tea.Model {
  accelerationInfo?: AccelerationInfo;
  /**
   * @example
   * deprecated
   */
  accelerationType?: string;
  /**
   * @example
   * deprecated
   */
  acrInstanceId?: string;
  command?: string[];
  entrypoint?: string[];
  healthCheckConfig?: CustomHealthCheckConfig;
  /**
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com/fc-demo/helloworld:v1
   */
  image?: string;
  /**
   * @example
   * 9000
   */
  port?: number;
  registryConfig?: RegistryConfig;
  /**
   * @example
   * stand-sh-registry-vpc.cn-shanghai.cr.aliyuncs.com/fc-demo2/springboot-helloworld@sha256:68d1****0d64d6
   */
  resolvedImageUri?: string;
  static names(): { [key: string]: string } {
    return {
      accelerationInfo: 'accelerationInfo',
      accelerationType: 'accelerationType',
      acrInstanceId: 'acrInstanceId',
      command: 'command',
      entrypoint: 'entrypoint',
      healthCheckConfig: 'healthCheckConfig',
      image: 'image',
      port: 'port',
      registryConfig: 'registryConfig',
      resolvedImageUri: 'resolvedImageUri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerationInfo: AccelerationInfo,
      accelerationType: 'string',
      acrInstanceId: 'string',
      command: { 'type': 'array', 'itemType': 'string' },
      entrypoint: { 'type': 'array', 'itemType': 'string' },
      healthCheckConfig: CustomHealthCheckConfig,
      image: 'string',
      port: 'number',
      registryConfig: RegistryConfig,
      resolvedImageUri: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CustomDNS extends $tea.Model {
  dnsOptions?: DNSOption[];
  nameServers?: string[];
  searches?: string[];
  static names(): { [key: string]: string } {
    return {
      dnsOptions: 'dnsOptions',
      nameServers: 'nameServers',
      searches: 'searches',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dnsOptions: { 'type': 'array', 'itemType': DNSOption },
      nameServers: { 'type': 'array', 'itemType': 'string' },
      searches: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CustomDomain extends $tea.Model {
  accountId?: string;
  /**
   * @example
   * 2023-03-30
   */
  apiVersion?: string;
  authConfig?: AuthConfig;
  certConfig?: CertConfig;
  /**
   * @example
   * 2023-03-30T08:02:19Z
   */
  createdTime?: string;
  /**
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @example
   * 2023-03-30T08:02:19Z
   */
  lastModifiedTime?: string;
  /**
   * @example
   * HTTP
   */
  protocol?: string;
  routeConfig?: RouteConfig;
  /**
   * @example
   * 1
   */
  subdomainCount?: string;
  tlsConfig?: TLSConfig;
  wafConfig?: WAFConfig;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      apiVersion: 'apiVersion',
      authConfig: 'authConfig',
      certConfig: 'certConfig',
      createdTime: 'createdTime',
      domainName: 'domainName',
      lastModifiedTime: 'lastModifiedTime',
      protocol: 'protocol',
      routeConfig: 'routeConfig',
      subdomainCount: 'subdomainCount',
      tlsConfig: 'tlsConfig',
      wafConfig: 'wafConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      apiVersion: 'string',
      authConfig: AuthConfig,
      certConfig: CertConfig,
      createdTime: 'string',
      domainName: 'string',
      lastModifiedTime: 'string',
      protocol: 'string',
      routeConfig: RouteConfig,
      subdomainCount: 'string',
      tlsConfig: TLSConfig,
      wafConfig: WAFConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CustomHealthCheckConfig extends $tea.Model {
  /**
   * @example
   * 1
   */
  failureThreshold?: number;
  /**
   * @example
   * /ready
   */
  httpGetUrl?: string;
  /**
   * @example
   * 1
   */
  initialDelaySeconds?: number;
  /**
   * @example
   * 1
   */
  periodSeconds?: number;
  /**
   * @example
   * 2
   */
  successThreshold?: number;
  /**
   * @example
   * 2
   */
  timeoutSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      failureThreshold: 'failureThreshold',
      httpGetUrl: 'httpGetUrl',
      initialDelaySeconds: 'initialDelaySeconds',
      periodSeconds: 'periodSeconds',
      successThreshold: 'successThreshold',
      timeoutSeconds: 'timeoutSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failureThreshold: 'number',
      httpGetUrl: 'string',
      initialDelaySeconds: 'number',
      periodSeconds: 'number',
      successThreshold: 'number',
      timeoutSeconds: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CustomRuntimeConfig extends $tea.Model {
  args?: string[];
  command?: string[];
  healthCheckConfig?: CustomHealthCheckConfig;
  /**
   * @example
   * 9000
   */
  port?: number;
  static names(): { [key: string]: string } {
    return {
      args: 'args',
      command: 'command',
      healthCheckConfig: 'healthCheckConfig',
      port: 'port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: { 'type': 'array', 'itemType': 'string' },
      command: { 'type': 'array', 'itemType': 'string' },
      healthCheckConfig: CustomHealthCheckConfig,
      port: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DNSOption extends $tea.Model {
  /**
   * @example
   * ndots
   */
  name?: string;
  /**
   * @example
   * 2
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      value: 'value',
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

export class DeadLetterQueue extends $tea.Model {
  arn?: string;
  static names(): { [key: string]: string } {
    return {
      arn: 'Arn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeliveryOption extends $tea.Model {
  /**
   * @example
   * 2
   */
  concurrency?: number;
  /**
   * @example
   * RawData
   */
  eventSchema?: string;
  static names(): { [key: string]: string } {
    return {
      concurrency: 'concurrency',
      eventSchema: 'eventSchema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrency: 'number',
      eventSchema: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Destination extends $tea.Model {
  /**
   * @example
   * acs:fc:cn-shanghai:xxx:functions/f1
   */
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

export class EqualRule extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * /old
   */
  match?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * /new
   */
  replacement?: string;
  static names(): { [key: string]: string } {
    return {
      match: 'match',
      replacement: 'replacement',
    };
  }

  static types(): { [key: string]: any } {
    return {
      match: 'string',
      replacement: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Error extends $tea.Model {
  /**
   * @example
   * FunctionNotFound
   */
  code?: string;
  /**
   * @example
   * function not found
   */
  message?: string;
  /**
   * @example
   * 1-64e70cf1-5cbef92ea8fc8c42899cf5d1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EventBridgeTriggerConfig extends $tea.Model {
  asyncInvocationType?: boolean;
  /**
   * @example
   * {}
   */
  eventRuleFilterPattern?: string;
  eventSinkConfig?: EventSinkConfig;
  eventSourceConfig?: EventSourceConfig;
  runOptions?: RunOptions;
  /**
   * @example
   * true
   */
  triggerEnable?: boolean;
  static names(): { [key: string]: string } {
    return {
      asyncInvocationType: 'asyncInvocationType',
      eventRuleFilterPattern: 'eventRuleFilterPattern',
      eventSinkConfig: 'eventSinkConfig',
      eventSourceConfig: 'eventSourceConfig',
      runOptions: 'runOptions',
      triggerEnable: 'triggerEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncInvocationType: 'boolean',
      eventRuleFilterPattern: 'string',
      eventSinkConfig: EventSinkConfig,
      eventSourceConfig: EventSourceConfig,
      runOptions: RunOptions,
      triggerEnable: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EventSinkConfig extends $tea.Model {
  deliveryOption?: DeliveryOption;
  static names(): { [key: string]: string } {
    return {
      deliveryOption: 'deliveryOption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deliveryOption: DeliveryOption,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EventSourceConfig extends $tea.Model {
  eventSourceParameters?: EventSourceParameters;
  /**
   * @example
   * MNS
   */
  eventSourceType?: string;
  static names(): { [key: string]: string } {
    return {
      eventSourceParameters: 'eventSourceParameters',
      eventSourceType: 'eventSourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventSourceParameters: EventSourceParameters,
      eventSourceType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EventSourceParameters extends $tea.Model {
  sourceDTSParameters?: SourceDTSParameters;
  sourceKafkaParameters?: SourceKafkaParameters;
  sourceMNSParameters?: SourceMNSParameters;
  sourceMQTTParameters?: SourceMQTTParameters;
  sourceRabbitMQParameters?: SourceRabbitMQParameters;
  sourceRocketMQParameters?: SourceRocketMQParameters;
  static names(): { [key: string]: string } {
    return {
      sourceDTSParameters: 'sourceDTSParameters',
      sourceKafkaParameters: 'sourceKafkaParameters',
      sourceMNSParameters: 'sourceMNSParameters',
      sourceMQTTParameters: 'sourceMQTTParameters',
      sourceRabbitMQParameters: 'sourceRabbitMQParameters',
      sourceRocketMQParameters: 'sourceRocketMQParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceDTSParameters: SourceDTSParameters,
      sourceKafkaParameters: SourceKafkaParameters,
      sourceMNSParameters: SourceMNSParameters,
      sourceMQTTParameters: SourceMQTTParameters,
      sourceRabbitMQParameters: SourceRabbitMQParameters,
      sourceRocketMQParameters: SourceRocketMQParameters,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Filter extends $tea.Model {
  key?: Key;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: Key,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Function extends $tea.Model {
  /**
   * @example
   * 2825179536350****
   */
  codeChecksum?: string;
  /**
   * @example
   * 412
   */
  codeSize?: number;
  /**
   * @example
   * 1
   */
  cpu?: number;
  /**
   * @example
   * 2023-04-01T08:15:27Z
   */
  createdTime?: string;
  customContainerConfig?: CustomContainerConfig;
  customDNS?: CustomDNS;
  customRuntimeConfig?: CustomRuntimeConfig;
  /**
   * @example
   * my function
   */
  description?: string;
  /**
   * @example
   * 512
   */
  diskSize?: number;
  environmentVariables?: { [key: string]: string };
  /**
   * @example
   * acs:fc:cn-shanghai:123:functions/functionName
   */
  functionArn?: string;
  /**
   * @example
   * aa715851-1c20-4b89-a8fb-***
   */
  functionId?: string;
  /**
   * @example
   * my-function-1
   */
  functionName?: string;
  gpuConfig?: GPUConfig;
  /**
   * @example
   * index.handler
   */
  handler?: string;
  /**
   * @example
   * 1
   */
  instanceConcurrency?: number;
  instanceLifecycleConfig?: InstanceLifecycleConfig;
  /**
   * @example
   * true
   */
  internetAccess?: boolean;
  /**
   * @example
   * 2023-05-01T08:15:27Z
   */
  lastModifiedTime?: string;
  /**
   * @example
   * InProgress
   */
  lastUpdateStatus?: string;
  /**
   * @example
   * The system is currently processing the acceleration optimization for the image.
   */
  lastUpdateStatusReason?: string;
  /**
   * @example
   * ImageOptimizing
   */
  lastUpdateStatusReasonCode?: string;
  layers?: FunctionLayer[];
  logConfig?: LogConfig;
  /**
   * @example
   * 512
   */
  memorySize?: number;
  nasConfig?: NASConfig;
  ossMountConfig?: OSSMountConfig;
  /**
   * @example
   * acs:ram::188077086902****:role/fc-test
   */
  role?: string;
  /**
   * @example
   * python3.10
   */
  runtime?: string;
  /**
   * @example
   * Pending
   */
  state?: string;
  /**
   * @example
   * Function creating
   */
  stateReason?: string;
  /**
   * @example
   * Creating
   */
  stateReasonCode?: string;
  tags?: Tag[];
  /**
   * @example
   * 60
   */
  timeout?: number;
  tracingConfig?: TracingConfig;
  vpcConfig?: VPCConfig;
  static names(): { [key: string]: string } {
    return {
      codeChecksum: 'codeChecksum',
      codeSize: 'codeSize',
      cpu: 'cpu',
      createdTime: 'createdTime',
      customContainerConfig: 'customContainerConfig',
      customDNS: 'customDNS',
      customRuntimeConfig: 'customRuntimeConfig',
      description: 'description',
      diskSize: 'diskSize',
      environmentVariables: 'environmentVariables',
      functionArn: 'functionArn',
      functionId: 'functionId',
      functionName: 'functionName',
      gpuConfig: 'gpuConfig',
      handler: 'handler',
      instanceConcurrency: 'instanceConcurrency',
      instanceLifecycleConfig: 'instanceLifecycleConfig',
      internetAccess: 'internetAccess',
      lastModifiedTime: 'lastModifiedTime',
      lastUpdateStatus: 'lastUpdateStatus',
      lastUpdateStatusReason: 'lastUpdateStatusReason',
      lastUpdateStatusReasonCode: 'lastUpdateStatusReasonCode',
      layers: 'layers',
      logConfig: 'logConfig',
      memorySize: 'memorySize',
      nasConfig: 'nasConfig',
      ossMountConfig: 'ossMountConfig',
      role: 'role',
      runtime: 'runtime',
      state: 'state',
      stateReason: 'stateReason',
      stateReasonCode: 'stateReasonCode',
      tags: 'tags',
      timeout: 'timeout',
      tracingConfig: 'tracingConfig',
      vpcConfig: 'vpcConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeChecksum: 'string',
      codeSize: 'number',
      cpu: 'number',
      createdTime: 'string',
      customContainerConfig: CustomContainerConfig,
      customDNS: CustomDNS,
      customRuntimeConfig: CustomRuntimeConfig,
      description: 'string',
      diskSize: 'number',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      functionArn: 'string',
      functionId: 'string',
      functionName: 'string',
      gpuConfig: GPUConfig,
      handler: 'string',
      instanceConcurrency: 'number',
      instanceLifecycleConfig: InstanceLifecycleConfig,
      internetAccess: 'boolean',
      lastModifiedTime: 'string',
      lastUpdateStatus: 'string',
      lastUpdateStatusReason: 'string',
      lastUpdateStatusReasonCode: 'string',
      layers: { 'type': 'array', 'itemType': FunctionLayer },
      logConfig: LogConfig,
      memorySize: 'number',
      nasConfig: NASConfig,
      ossMountConfig: OSSMountConfig,
      role: 'string',
      runtime: 'string',
      state: 'string',
      stateReason: 'string',
      stateReasonCode: 'string',
      tags: { 'type': 'array', 'itemType': Tag },
      timeout: 'number',
      tracingConfig: TracingConfig,
      vpcConfig: VPCConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FunctionLayer extends $tea.Model {
  /**
   * @example
   * acs:fc:cn-beijing:186824xxxxxx:layers/fc_layer/versions/1
   */
  arn?: string;
  /**
   * @example
   * 421
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      arn: 'arn',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      size: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GPUConfig extends $tea.Model {
  /**
   * @example
   * 2048
   */
  gpuMemorySize?: number;
  /**
   * @example
   * fc.gpu.tesla.1
   */
  gpuType?: string;
  static names(): { [key: string]: string } {
    return {
      gpuMemorySize: 'gpuMemorySize',
      gpuType: 'gpuType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gpuMemorySize: 'number',
      gpuType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceTagsOutput extends $tea.Model {
  /**
   * @example
   * ALIYUN::FC::FUNCTION
   */
  resouceType?: string;
  /**
   * @example
   * acs:fc:cn-shanghai:****:functions/demo
   */
  resourceArn?: string;
  tags?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      resouceType: 'resouceType',
      resourceArn: 'resourceArn',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resouceType: 'string',
      resourceArn: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HTTPTrigger extends $tea.Model {
  /**
   * @example
   * https://svc-func-xxxxxxxx.cn-hangzhou.fcapp.run
   */
  urlInternet?: string;
  /**
   * @example
   * https://svc-func-xxxxxxxx.cn-hangzhou-vpc.fcapp.run
   */
  urlIntranet?: string;
  static names(): { [key: string]: string } {
    return {
      urlInternet: 'urlInternet',
      urlIntranet: 'urlIntranet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      urlInternet: 'string',
      urlIntranet: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HTTPTriggerConfig extends $tea.Model {
  /**
   * @example
   * {"JWKS":{"foo":"bar"},"TokenLookup":"header:Authorization:Bearer,cookie:AuthorizationCookie","ClaimPassBy":"query:uid:uid,header:name:name"}
   */
  authConfig?: string;
  /**
   * @example
   * anonymous
   */
  authType?: string;
  /**
   * @example
   * true
   */
  disableURLInternet?: boolean;
  methods?: string[];
  static names(): { [key: string]: string } {
    return {
      authConfig: 'authConfig',
      authType: 'authType',
      disableURLInternet: 'disableURLInternet',
      methods: 'methods',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConfig: 'string',
      authType: 'string',
      disableURLInternet: 'boolean',
      methods: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InputCodeLocation extends $tea.Model {
  /**
   * @example
   * 2825179536350****
   */
  checksum?: string;
  /**
   * @example
   * demo-bucket
   */
  ossBucketName?: string;
  /**
   * @example
   * demo-object
   */
  ossObjectName?: string;
  /**
   * @example
   * UEsDBAoAAAAAANF
   */
  zipFile?: string;
  static names(): { [key: string]: string } {
    return {
      checksum: 'checksum',
      ossBucketName: 'ossBucketName',
      ossObjectName: 'ossObjectName',
      zipFile: 'zipFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checksum: 'string',
      ossBucketName: 'string',
      ossObjectName: 'string',
      zipFile: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstanceInfo extends $tea.Model {
  /**
   * @example
   * 1ef6b6ff-7f7b-485e-ab49-501ac681****
   */
  instanceId?: string;
  /**
   * @example
   * LATEST
   */
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
      versionId: 'versionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstanceLifecycleConfig extends $tea.Model {
  initializer?: LifecycleHook;
  preStop?: LifecycleHook;
  static names(): { [key: string]: string } {
    return {
      initializer: 'initializer',
      preStop: 'preStop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      initializer: LifecycleHook,
      preStop: LifecycleHook,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JobConfig extends $tea.Model {
  /**
   * @example
   * 3
   */
  maxRetryTime?: number;
  /**
   * @example
   * 60
   */
  triggerInterval?: number;
  static names(): { [key: string]: string } {
    return {
      maxRetryTime: 'maxRetryTime',
      triggerInterval: 'triggerInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxRetryTime: 'number',
      triggerInterval: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Key extends $tea.Model {
  /**
   * @example
   * serverless_
   */
  prefix?: string;
  /**
   * @example
   * .zip
   */
  suffix?: string;
  static names(): { [key: string]: string } {
    return {
      prefix: 'prefix',
      suffix: 'suffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prefix: 'string',
      suffix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Layer extends $tea.Model {
  /**
   * @example
   * 0
   */
  acl?: string;
  code?: OutputCodeLocation;
  /**
   * @example
   * 2825179536350****
   */
  codeChecksum?: string;
  /**
   * @example
   * 421
   */
  codeSize?: number;
  compatibleRuntime?: string[];
  /**
   * @example
   * 2023-03-30T11:08:00Z
   */
  createTime?: string;
  /**
   * @example
   * My first layer
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * MyLayer
   */
  layerName?: string;
  /**
   * @example
   * acs:fc:cn-beijing:186824xxxxxx:layers/fc_layer/versions/1
   */
  layerVersionArn?: string;
  /**
   * @example
   * Apache
   */
  license?: string;
  /**
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      acl: 'acl',
      code: 'code',
      codeChecksum: 'codeChecksum',
      codeSize: 'codeSize',
      compatibleRuntime: 'compatibleRuntime',
      createTime: 'createTime',
      description: 'description',
      layerName: 'layerName',
      layerVersionArn: 'layerVersionArn',
      license: 'license',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acl: 'string',
      code: OutputCodeLocation,
      codeChecksum: 'string',
      codeSize: 'number',
      compatibleRuntime: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      description: 'string',
      layerName: 'string',
      layerVersionArn: 'string',
      license: 'string',
      version: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LifecycleHook extends $tea.Model {
  /**
   * @example
   * index.initializer
   */
  handler?: string;
  /**
   * @example
   * 10
   */
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

export class ListAliasesOutput extends $tea.Model {
  aliases?: Alias[];
  /**
   * @example
   * test
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      aliases: 'aliases',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliases: { 'type': 'array', 'itemType': Alias },
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsyncInvokeConfigOutput extends $tea.Model {
  configs?: AsyncConfig[];
  /**
   * @example
   * 8bj81uI8n****
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      configs: 'configs',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': AsyncConfig },
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsyncTaskOutput extends $tea.Model {
  nextToken?: string;
  tasks?: AsyncTask[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      tasks: 'tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      tasks: { 'type': 'array', 'itemType': AsyncTask },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConcurrencyConfigsOutput extends $tea.Model {
  configs?: ConcurrencyConfig[];
  /**
   * @example
   * next_token
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      configs: 'configs',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': ConcurrencyConfig },
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomDomainOutput extends $tea.Model {
  customDomains?: CustomDomain[];
  /**
   * @example
   * next_domain_name
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      customDomains: 'customDomains',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customDomains: { 'type': 'array', 'itemType': CustomDomain },
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsOutput extends $tea.Model {
  functions?: Function[];
  /**
   * @example
   * next_function_name
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      functions: 'functions',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functions: { 'type': 'array', 'itemType': Function },
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesOutput extends $tea.Model {
  instances?: InstanceInfo[];
  static names(): { [key: string]: string } {
    return {
      instances: 'instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': InstanceInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLayerVersionOutput extends $tea.Model {
  layers?: Layer[];
  /**
   * @example
   * 10
   */
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

export class ListLayersOutput extends $tea.Model {
  layers?: Layer[];
  /**
   * @example
   * next-layer-name
   */
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

export class ListProvisionConfigsOutput extends $tea.Model {
  /**
   * @example
   * next_token
   */
  nextToken?: string;
  provisionConfigs?: ProvisionConfig[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      provisionConfigs: 'provisionConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      provisionConfigs: { 'type': 'array', 'itemType': ProvisionConfig },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesOutput extends $tea.Model {
  /**
   * @example
   * next_token
   */
  nextToken?: string;
  requestId?: string;
  tagResources?: TagResource[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      tagResources: { 'type': 'array', 'itemType': TagResource },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaggedResourcesOutput extends $tea.Model {
  /**
   * @example
   * next_token
   */
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

export class ListTriggersOutput extends $tea.Model {
  /**
   * @example
   * next_token
   */
  nextToken?: string;
  triggers?: Trigger[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      triggers: 'triggers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      triggers: { 'type': 'array', 'itemType': Trigger },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVersionsOutput extends $tea.Model {
  /**
   * @example
   * FORWARD
   */
  direction?: string;
  /**
   * @example
   * 3
   */
  nextToken?: string;
  versions?: Version[];
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
      versions: { 'type': 'array', 'itemType': Version },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcBindingsOutput extends $tea.Model {
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

export class LogConfig extends $tea.Model {
  /**
   * @example
   * true
   */
  enableInstanceMetrics?: boolean;
  /**
   * @example
   * true
   */
  enableRequestMetrics?: boolean;
  /**
   * @example
   * DefaultRegex
   */
  logBeginRule?: string;
  /**
   * @example
   * test-logstore
   */
  logstore?: string;
  /**
   * @example
   * test-project
   */
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

export class MNSTopicTriggerConfig extends $tea.Model {
  /**
   * @example
   * serverless
   */
  filterTag?: string;
  /**
   * @example
   * JSON
   */
  notifyContentFormat?: string;
  /**
   * @example
   * BACKOFF_RETRY
   */
  notifyStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      filterTag: 'filterTag',
      notifyContentFormat: 'notifyContentFormat',
      notifyStrategy: 'notifyStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterTag: 'string',
      notifyContentFormat: 'string',
      notifyStrategy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NASConfig extends $tea.Model {
  /**
   * @example
   * 100
   */
  groupId?: number;
  mountPoints?: NASMountConfig[];
  /**
   * @example
   * 100
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      groupId: 'groupId',
      mountPoints: 'mountPoints',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      mountPoints: { 'type': 'array', 'itemType': NASMountConfig },
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NASMountConfig extends $tea.Model {
  enableTLS?: boolean;
  /**
   * @example
   * /home/test
   */
  mountDir?: string;
  /**
   * @example
   * ***-uni85.cn-hangzhou.nas.com:/
   */
  serverAddr?: string;
  static names(): { [key: string]: string } {
    return {
      enableTLS: 'enableTLS',
      mountDir: 'mountDir',
      serverAddr: 'serverAddr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableTLS: 'boolean',
      mountDir: 'string',
      serverAddr: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OSSMountConfig extends $tea.Model {
  mountPoints?: OSSMountPoint[];
  static names(): { [key: string]: string } {
    return {
      mountPoints: 'mountPoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPoints: { 'type': 'array', 'itemType': OSSMountPoint },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OSSMountPoint extends $tea.Model {
  /**
   * @example
   * my-bucket
   */
  bucketName?: string;
  /**
   * @example
   * /my-dir
   */
  bucketPath?: string;
  /**
   * @example
   * http://oss-cn-shanghai.aliyuncs.com
   */
  endpoint?: string;
  /**
   * @example
   * /mnt/dir
   */
  mountDir?: string;
  /**
   * @example
   * true
   */
  readOnly?: boolean;
  static names(): { [key: string]: string } {
    return {
      bucketName: 'bucketName',
      bucketPath: 'bucketPath',
      endpoint: 'endpoint',
      mountDir: 'mountDir',
      readOnly: 'readOnly',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucketName: 'string',
      bucketPath: 'string',
      endpoint: 'string',
      mountDir: 'string',
      readOnly: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OSSTriggerConfig extends $tea.Model {
  events?: string[];
  filter?: Filter;
  static names(): { [key: string]: string } {
    return {
      events: 'events',
      filter: 'filter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': 'string' },
      filter: Filter,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OutputCodeLocation extends $tea.Model {
  /**
   * @example
   * https://xyz.oss-cn-shanghai.aliyuncs.com/xxx/xxx/xxx
   */
  location?: string;
  /**
   * @example
   * OSS
   */
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

export class OutputFuncCode extends $tea.Model {
  /**
   * @example
   * 1234567890
   */
  checksum?: string;
  /**
   * @example
   * http://func-code.oss-cn-shanghai.aliyuncs.com/1a2b3c4d5e6f
   */
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

export class PathConfig extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * myFunction
   */
  functionName?: string;
  methods?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * /api/*
   */
  path?: string;
  /**
   * @example
   * myAlias
   */
  qualifier?: string;
  rewriteConfig?: RewriteConfig;
  static names(): { [key: string]: string } {
    return {
      functionName: 'functionName',
      methods: 'methods',
      path: 'path',
      qualifier: 'qualifier',
      rewriteConfig: 'rewriteConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionName: 'string',
      methods: { 'type': 'array', 'itemType': 'string' },
      path: 'string',
      qualifier: 'string',
      rewriteConfig: RewriteConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProvisionConfig extends $tea.Model {
  /**
   * @example
   * true
   */
  alwaysAllocateCPU?: boolean;
  /**
   * @example
   * true
   */
  alwaysAllocateGPU?: boolean;
  /**
   * @example
   * 1
   */
  current?: number;
  /**
   * @example
   * image not found
   */
  currentError?: string;
  /**
   * @example
   * 5
   */
  defaultTarget?: number;
  /**
   * @example
   * acs:fc:cn-shanghai:124:functions/myFunction
   */
  functionArn?: string;
  scheduledActions?: ScheduledAction[];
  /**
   * @example
   * 5
   */
  target?: number;
  targetTrackingPolicies?: TargetTrackingPolicy[];
  static names(): { [key: string]: string } {
    return {
      alwaysAllocateCPU: 'alwaysAllocateCPU',
      alwaysAllocateGPU: 'alwaysAllocateGPU',
      current: 'current',
      currentError: 'currentError',
      defaultTarget: 'defaultTarget',
      functionArn: 'functionArn',
      scheduledActions: 'scheduledActions',
      target: 'target',
      targetTrackingPolicies: 'targetTrackingPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alwaysAllocateCPU: 'boolean',
      alwaysAllocateGPU: 'boolean',
      current: 'number',
      currentError: 'string',
      defaultTarget: 'number',
      functionArn: 'string',
      scheduledActions: { 'type': 'array', 'itemType': ScheduledAction },
      target: 'number',
      targetTrackingPolicies: { 'type': 'array', 'itemType': TargetTrackingPolicy },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishVersionInput extends $tea.Model {
  /**
   * @example
   * my version
   */
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

export class PutAsyncInvokeConfigInput extends $tea.Model {
  /**
   * @example
   * true
   */
  asyncTask?: boolean;
  destinationConfig?: DestinationConfig;
  /**
   * @example
   * 300
   */
  maxAsyncEventAgeInSeconds?: number;
  /**
   * @example
   * 3
   */
  maxAsyncRetryAttempts?: number;
  static names(): { [key: string]: string } {
    return {
      asyncTask: 'asyncTask',
      destinationConfig: 'destinationConfig',
      maxAsyncEventAgeInSeconds: 'maxAsyncEventAgeInSeconds',
      maxAsyncRetryAttempts: 'maxAsyncRetryAttempts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncTask: 'boolean',
      destinationConfig: DestinationConfig,
      maxAsyncEventAgeInSeconds: 'number',
      maxAsyncRetryAttempts: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutConcurrencyInput extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  reservedConcurrency?: number;
  static names(): { [key: string]: string } {
    return {
      reservedConcurrency: 'reservedConcurrency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reservedConcurrency: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutProvisionConfigInput extends $tea.Model {
  /**
   * @example
   * true
   */
  alwaysAllocateCPU?: boolean;
  /**
   * @example
   * true
   */
  alwaysAllocateGPU?: boolean;
  /**
   * **if can be null:**
   * true
   */
  defaultTarget?: number;
  scheduledActions?: ScheduledAction[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   * 
   * **if can be null:**
   * true
   * 
   * @deprecated
   */
  target?: number;
  targetTrackingPolicies?: TargetTrackingPolicy[];
  static names(): { [key: string]: string } {
    return {
      alwaysAllocateCPU: 'alwaysAllocateCPU',
      alwaysAllocateGPU: 'alwaysAllocateGPU',
      defaultTarget: 'defaultTarget',
      scheduledActions: 'scheduledActions',
      target: 'target',
      targetTrackingPolicies: 'targetTrackingPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alwaysAllocateCPU: 'boolean',
      alwaysAllocateGPU: 'boolean',
      defaultTarget: 'number',
      scheduledActions: { 'type': 'array', 'itemType': ScheduledAction },
      target: 'number',
      targetTrackingPolicies: { 'type': 'array', 'itemType': TargetTrackingPolicy },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegexRule extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ^/api/.+?/(.*)
   */
  match?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * /api/v2/$1
   */
  replacement?: string;
  static names(): { [key: string]: string } {
    return {
      match: 'match',
      replacement: 'replacement',
    };
  }

  static types(): { [key: string]: any } {
    return {
      match: 'string',
      replacement: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegistryAuthConfig extends $tea.Model {
  /**
   * @example
   * abc***
   */
  password?: string;
  /**
   * @example
   * admin
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'password',
      userName: 'userName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      userName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegistryCertConfig extends $tea.Model {
  insecure?: boolean;
  /**
   * @example
   * cm9vdF9jYV9jZXJ0
   */
  rootCaCertBase64?: string;
  static names(): { [key: string]: string } {
    return {
      insecure: 'insecure',
      rootCaCertBase64: 'rootCaCertBase64',
    };
  }

  static types(): { [key: string]: any } {
    return {
      insecure: 'boolean',
      rootCaCertBase64: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegistryConfig extends $tea.Model {
  authConfig?: RegistryAuthConfig;
  certConfig?: RegistryCertConfig;
  networkConfig?: RegistryNetworkConfig;
  static names(): { [key: string]: string } {
    return {
      authConfig: 'authConfig',
      certConfig: 'certConfig',
      networkConfig: 'networkConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConfig: RegistryAuthConfig,
      certConfig: RegistryCertConfig,
      networkConfig: RegistryNetworkConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegistryNetworkConfig extends $tea.Model {
  /**
   * @example
   * sg-xxxxxxxxxxxxxx
   */
  securityGroupId?: string;
  /**
   * @example
   * vsw-xxxxxxxxxxxxxx
   */
  vSwitchId?: string;
  /**
   * @example
   * vpc-xxxxxxxxxxxxxx
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      securityGroupId: 'securityGroupId',
      vSwitchId: 'vSwitchId',
      vpcId: 'vpcId',
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

export class Resource extends $tea.Model {
  /**
   * @example
   * ALIYUN::FC::FUNCTION
   */
  resouceType?: string;
  /**
   * @example
   * acs:fc:cn-shanghai:****:functions/demo
   */
  resourceArn?: string;
  tags?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      resouceType: 'resouceType',
      resourceArn: 'resourceArn',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resouceType: 'string',
      resourceArn: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryStrategy extends $tea.Model {
  /**
   * @example
   * BACKOFF_RETRY
   */
  pushRetryStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      pushRetryStrategy: 'PushRetryStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pushRetryStrategy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RewriteConfig extends $tea.Model {
  equalRules?: EqualRule[];
  regexRules?: RegexRule[];
  wildcardRules?: WildcardRule[];
  static names(): { [key: string]: string } {
    return {
      equalRules: 'equalRules',
      regexRules: 'regexRules',
      wildcardRules: 'wildcardRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      equalRules: { 'type': 'array', 'itemType': EqualRule },
      regexRules: { 'type': 'array', 'itemType': RegexRule },
      wildcardRules: { 'type': 'array', 'itemType': WildcardRule },
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

export class RunOptions extends $tea.Model {
  batchWindow?: BatchWindow;
  deadLetterQueue?: DeadLetterQueue;
  /**
   * @example
   * ALL
   */
  errorsTolerance?: string;
  /**
   * @example
   * event-streaming
   */
  mode?: string;
  retryStrategy?: RetryStrategy;
  static names(): { [key: string]: string } {
    return {
      batchWindow: 'batchWindow',
      deadLetterQueue: 'deadLetterQueue',
      errorsTolerance: 'errorsTolerance',
      mode: 'mode',
      retryStrategy: 'retryStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchWindow: BatchWindow,
      deadLetterQueue: DeadLetterQueue,
      errorsTolerance: 'string',
      mode: 'string',
      retryStrategy: RetryStrategy,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SLSTriggerConfig extends $tea.Model {
  /**
   * @example
   * true
   */
  enable?: boolean;
  functionParameter?: { [key: string]: string };
  jobConfig?: JobConfig;
  logConfig?: SLSTriggerLogConfig;
  sourceConfig?: SourceConfig;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      functionParameter: 'functionParameter',
      jobConfig: 'jobConfig',
      logConfig: 'logConfig',
      sourceConfig: 'sourceConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      functionParameter: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      jobConfig: JobConfig,
      logConfig: SLSTriggerLogConfig,
      sourceConfig: SourceConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SLSTriggerLogConfig extends $tea.Model {
  /**
   * @example
   * my-sls-logstore-name
   */
  logstore?: string;
  /**
   * @example
   * my-sls-project-name
   */
  project?: string;
  static names(): { [key: string]: string } {
    return {
      logstore: 'logstore',
      project: 'project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstore: 'string',
      project: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScheduledAction extends $tea.Model {
  /**
   * @example
   * 2024-03-10T10:10:10
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_1
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cron(0 0 22 * * *)
   */
  scheduleExpression?: string;
  /**
   * @example
   * 2023-03-10T10:10:10
   */
  startTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 50
   */
  target?: number;
  /**
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      name: 'name',
      scheduleExpression: 'scheduleExpression',
      startTime: 'startTime',
      target: 'target',
      timeZone: 'timeZone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      name: 'string',
      scheduleExpression: 'string',
      startTime: 'string',
      target: 'number',
      timeZone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SourceConfig extends $tea.Model {
  /**
   * @example
   * my-sls-logstore-name
   */
  logstore?: string;
  /**
   * @example
   * 1704790317
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      logstore: 'logstore',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstore: 'string',
      startTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SourceDTSParameters extends $tea.Model {
  /**
   * @example
   * dts-cn-shanghai-vpc.com:18003
   */
  brokerUrl?: string;
  /**
   * @example
   * 1677340805
   */
  initCheckPoint?: number;
  /**
   * @example
   * dtsTest123
   */
  password?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * dtse34j22j025a****
   */
  sid?: string;
  /**
   * @example
   * e34z2gm325q****
   */
  taskId?: string;
  /**
   * @example
   * cn_shanghai_vpc_rm_uf6398ykj0218****_dts_trigger_upgrade_from_old_version2
   */
  topic?: string;
  /**
   * @example
   * dts_trigger
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      brokerUrl: 'BrokerUrl',
      initCheckPoint: 'InitCheckPoint',
      password: 'Password',
      regionId: 'RegionId',
      sid: 'Sid',
      taskId: 'TaskId',
      topic: 'Topic',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      brokerUrl: 'string',
      initCheckPoint: 'number',
      password: 'string',
      regionId: 'string',
      sid: 'string',
      taskId: 'string',
      topic: 'string',
      username: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SourceKafkaParameters extends $tea.Model {
  /**
   * @example
   * DEFAULT_GROUP
   */
  consumerGroup?: string;
  /**
   * @example
   * r-8vb64581862c****
   */
  instanceId?: string;
  /**
   * @example
   * Default
   */
  network?: string;
  /**
   * @example
   * latest
   */
  offsetReset?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * sg-bp1iv19sp1msc7zot4****
   */
  securityGroupId?: string;
  /**
   * @example
   * popvip_center_robot_order
   */
  topic?: string;
  /**
   * @example
   * vsw-bp179l3llg3jjxwrq72****
   */
  vSwitchIds?: string;
  /**
   * @example
   * vpc-8vblalsi0vbhizr77****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      consumerGroup: 'ConsumerGroup',
      instanceId: 'InstanceId',
      network: 'Network',
      offsetReset: 'OffsetReset',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      topic: 'Topic',
      vSwitchIds: 'VSwitchIds',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroup: 'string',
      instanceId: 'string',
      network: 'string',
      offsetReset: 'string',
      regionId: 'string',
      securityGroupId: 'string',
      topic: 'string',
      vSwitchIds: 'string',
      vpcId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SourceMNSParameters extends $tea.Model {
  /**
   * @example
   * true
   */
  isBase64Decode?: boolean;
  /**
   * @example
   * demo
   */
  queueName?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      isBase64Decode: 'IsBase64Decode',
      queueName: 'QueueName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isBase64Decode: 'boolean',
      queueName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SourceMQTTParameters extends $tea.Model {
  /**
   * @example
   * mqtt-****
   */
  instanceId?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * testTopic
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SourceRabbitMQParameters extends $tea.Model {
  /**
   * @example
   * amqp-cn-nif22u74****
   */
  instanceId?: string;
  /**
   * @example
   * demo
   */
  queueName?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * eb-connect
   */
  virtualHostName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      queueName: 'QueueName',
      regionId: 'RegionId',
      virtualHostName: 'VirtualHostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      queueName: 'string',
      regionId: 'string',
      virtualHostName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SourceRocketMQParameters extends $tea.Model {
  /**
   * @example
   * ACL
   */
  authType?: string;
  /**
   * @example
   * Tag
   */
  filterType?: string;
  /**
   * @example
   * GID_group1
   */
  groupID?: string;
  /**
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com
   */
  instanceEndpoint?: string;
  /**
   * @example
   * MQ_INST_164901546557****_BAAN****
   */
  instanceId?: string;
  /**
   * @example
   * PrivateNetwork
   */
  instanceNetwork?: string;
  /**
   * @example
   * 123
   */
  instancePassword?: string;
  /**
   * @example
   * sg-hp35r2hc3a3sv8q2****
   */
  instanceSecurityGroupId?: string;
  /**
   * @example
   * Cloud_5
   */
  instanceType?: string;
  /**
   * @example
   * 6W0xz2uPfiwp****
   */
  instanceUsername?: string;
  /**
   * @example
   * vsw-uf6gwtbn6etadpvz7****
   */
  instanceVSwitchIds?: string;
  /**
   * @example
   * vpc-uf6of9452b2pba82c****
   */
  instanceVpcId?: string;
  /**
   * @example
   * CONSUME_FROM_TIMESTAMP
   */
  offset?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * test
   */
  tag?: string;
  /**
   * @example
   * 1636597951964
   */
  timestamp?: number;
  /**
   * @example
   * myTopic
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      authType: 'AuthType',
      filterType: 'FilterType',
      groupID: 'GroupID',
      instanceEndpoint: 'InstanceEndpoint',
      instanceId: 'InstanceId',
      instanceNetwork: 'InstanceNetwork',
      instancePassword: 'InstancePassword',
      instanceSecurityGroupId: 'InstanceSecurityGroupId',
      instanceType: 'InstanceType',
      instanceUsername: 'InstanceUsername',
      instanceVSwitchIds: 'InstanceVSwitchIds',
      instanceVpcId: 'InstanceVpcId',
      offset: 'Offset',
      regionId: 'RegionId',
      tag: 'Tag',
      timestamp: 'Timestamp',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      filterType: 'string',
      groupID: 'string',
      instanceEndpoint: 'string',
      instanceId: 'string',
      instanceNetwork: 'string',
      instancePassword: 'string',
      instanceSecurityGroupId: 'string',
      instanceType: 'string',
      instanceUsername: 'string',
      instanceVSwitchIds: 'string',
      instanceVpcId: 'string',
      offset: 'string',
      regionId: 'string',
      tag: 'string',
      timestamp: 'number',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TLSConfig extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  cipherSuites?: string[];
  /**
   * @example
   * TLSv1.3
   */
  maxVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * TLSv1.0
   */
  minVersion?: string;
  static names(): { [key: string]: string } {
    return {
      cipherSuites: 'cipherSuites',
      maxVersion: 'maxVersion',
      minVersion: 'minVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cipherSuites: { 'type': 'array', 'itemType': 'string' },
      maxVersion: 'string',
      minVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Tag extends $tea.Model {
  /**
   * @example
   * k1
   */
  key?: string;
  /**
   * @example
   * v1
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

export class TagResource extends $tea.Model {
  /**
   * @example
   * acs:fc:cn-shanghai:****:functions/demo
   */
  resourceId?: string;
  /**
   * @example
   * ALIYUN::FC::FUNCTION
   */
  resourceType?: string;
  /**
   * @example
   * key1
   */
  tagKey?: string;
  /**
   * @example
   * key1
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourceInput extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * acs:fc:cn-shanghai:xxx:functions/f1
   */
  resourceArn?: string;
  /**
   * @remarks
   * This parameter is required.
   */
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

export class TagResourcesInput extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @example
   * FUNCTION
   */
  resourceType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tag?: Tag[];
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': Tag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TargetTrackingPolicy extends $tea.Model {
  /**
   * @example
   * 2024-03-10T10:10:10
   */
  endTime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10
   */
  maxCapacity?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0.6
   */
  metricTarget?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CPUUtilization
   */
  metricType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  minCapacity?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_1
   */
  name?: string;
  /**
   * @example
   * 2023-03-10T10:10:10
   */
  startTime?: string;
  /**
   * @example
   * Asia/Shanghai
   */
  timeZone?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      maxCapacity: 'maxCapacity',
      metricTarget: 'metricTarget',
      metricType: 'metricType',
      minCapacity: 'minCapacity',
      name: 'name',
      startTime: 'startTime',
      timeZone: 'timeZone',
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
      timeZone: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TimerTriggerConfig extends $tea.Model {
  /**
   * @example
   * 0 0 4 * * *
   */
  cronExpression?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * {"workflowInstanceId":"39639"}
   */
  payload?: string;
  static names(): { [key: string]: string } {
    return {
      cronExpression: 'cronExpression',
      enable: 'enable',
      payload: 'payload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronExpression: 'string',
      enable: 'boolean',
      payload: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TracingConfig extends $tea.Model {
  params?: { [key: string]: string };
  /**
   * @example
   * Jaeger
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      params: 'params',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      params: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Trigger extends $tea.Model {
  createdTime?: string;
  description?: string;
  httpTrigger?: HTTPTrigger;
  invocationRole?: string;
  lastModifiedTime?: string;
  qualifier?: string;
  sourceArn?: string;
  status?: string;
  targetArn?: string;
  triggerConfig?: string;
  triggerId?: string;
  triggerName?: string;
  triggerType?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      description: 'description',
      httpTrigger: 'httpTrigger',
      invocationRole: 'invocationRole',
      lastModifiedTime: 'lastModifiedTime',
      qualifier: 'qualifier',
      sourceArn: 'sourceArn',
      status: 'status',
      targetArn: 'targetArn',
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
      httpTrigger: HTTPTrigger,
      invocationRole: 'string',
      lastModifiedTime: 'string',
      qualifier: 'string',
      sourceArn: 'string',
      status: 'string',
      targetArn: 'string',
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

export class UpdateAliasInput extends $tea.Model {
  additionalVersionWeight?: { [key: string]: number };
  /**
   * @example
   * my alias
   */
  description?: string;
  /**
   * @example
   * 1
   */
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

export class UpdateCustomDomainInput extends $tea.Model {
  authConfig?: AuthConfig;
  certConfig?: CertConfig;
  /**
   * @example
   * HTTP
   */
  protocol?: string;
  routeConfig?: RouteConfig;
  tlsConfig?: TLSConfig;
  wafConfig?: WAFConfig;
  static names(): { [key: string]: string } {
    return {
      authConfig: 'authConfig',
      certConfig: 'certConfig',
      protocol: 'protocol',
      routeConfig: 'routeConfig',
      tlsConfig: 'tlsConfig',
      wafConfig: 'wafConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConfig: AuthConfig,
      certConfig: CertConfig,
      protocol: 'string',
      routeConfig: RouteConfig,
      tlsConfig: TLSConfig,
      wafConfig: WAFConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFunctionInput extends $tea.Model {
  code?: InputCodeLocation;
  /**
   * @example
   * 1
   */
  cpu?: number;
  customContainerConfig?: CustomContainerConfig;
  customDNS?: CustomDNS;
  customRuntimeConfig?: CustomRuntimeConfig;
  /**
   * @example
   * my function
   */
  description?: string;
  /**
   * @example
   * 512
   */
  diskSize?: number;
  environmentVariables?: { [key: string]: string };
  gpuConfig?: GPUConfig;
  /**
   * @example
   * index.handler
   */
  handler?: string;
  /**
   * @example
   * 1
   */
  instanceConcurrency?: number;
  instanceLifecycleConfig?: InstanceLifecycleConfig;
  /**
   * @example
   * true
   */
  internetAccess?: boolean;
  layers?: string[];
  logConfig?: LogConfig;
  /**
   * @example
   * 512
   */
  memorySize?: number;
  nasConfig?: NASConfig;
  ossMountConfig?: OSSMountConfig;
  /**
   * @example
   * acs:ram::188077086902****:role/fc-test
   */
  role?: string;
  runtime?: string;
  /**
   * @example
   * 60
   */
  timeout?: number;
  tracingConfig?: TracingConfig;
  vpcConfig?: VPCConfig;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      cpu: 'cpu',
      customContainerConfig: 'customContainerConfig',
      customDNS: 'customDNS',
      customRuntimeConfig: 'customRuntimeConfig',
      description: 'description',
      diskSize: 'diskSize',
      environmentVariables: 'environmentVariables',
      gpuConfig: 'gpuConfig',
      handler: 'handler',
      instanceConcurrency: 'instanceConcurrency',
      instanceLifecycleConfig: 'instanceLifecycleConfig',
      internetAccess: 'internetAccess',
      layers: 'layers',
      logConfig: 'logConfig',
      memorySize: 'memorySize',
      nasConfig: 'nasConfig',
      ossMountConfig: 'ossMountConfig',
      role: 'role',
      runtime: 'runtime',
      timeout: 'timeout',
      tracingConfig: 'tracingConfig',
      vpcConfig: 'vpcConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: InputCodeLocation,
      cpu: 'number',
      customContainerConfig: CustomContainerConfig,
      customDNS: CustomDNS,
      customRuntimeConfig: CustomRuntimeConfig,
      description: 'string',
      diskSize: 'number',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      gpuConfig: GPUConfig,
      handler: 'string',
      instanceConcurrency: 'number',
      instanceLifecycleConfig: InstanceLifecycleConfig,
      internetAccess: 'boolean',
      layers: { 'type': 'array', 'itemType': 'string' },
      logConfig: LogConfig,
      memorySize: 'number',
      nasConfig: NASConfig,
      ossMountConfig: OSSMountConfig,
      role: 'string',
      runtime: 'string',
      timeout: 'number',
      tracingConfig: TracingConfig,
      vpcConfig: VPCConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTriggerInput extends $tea.Model {
  /**
   * @example
   * trigger for test
   */
  description?: string;
  /**
   * @example
   * acs:ram::1234567890:role/fc-test
   */
  invocationRole?: string;
  /**
   * @example
   * LATEST
   */
  qualifier?: string;
  /**
   * @example
   * {"events":["oss:ObjectCreated:*"],"filter":{"key":{"prefix":"/prefix","suffix":".zip"}}}
   */
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

export class VPCConfig extends $tea.Model {
  /**
   * @example
   * acs:ram::188077086902****:role/fc-test
   */
  role?: string;
  /**
   * @example
   * sg-bp18hj1wtxgy3b0***
   */
  securityGroupId?: string;
  vSwitchIds?: string[];
  /**
   * @example
   * vpc-***
   */
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

export class Version extends $tea.Model {
  /**
   * @example
   * 2006-01-02T15:04:05Z07:00
   */
  createdTime?: string;
  /**
   * @example
   * my version
   */
  description?: string;
  /**
   * @example
   * 2006-01-02T15:04:05Z07:00
   */
  lastModifiedTime?: string;
  /**
   * @example
   * 1
   */
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

export class WAFConfig extends $tea.Model {
  /**
   * @example
   * true
   */
  enableWAF?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableWAF: 'enableWAF',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableWAF: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WildcardRule extends $tea.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * /api/*
   */
  match?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * /$1
   */
  replacement?: string;
  static names(): { [key: string]: string } {
    return {
      match: 'match',
      replacement: 'replacement',
    };
  }

  static types(): { [key: string]: any } {
    return {
      match: 'string',
      replacement: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAliasRequest extends $tea.Model {
  /**
   * @remarks
   * The request parameters for creating an alias.
   * 
   * This parameter is required.
   */
  body?: CreateAliasInput;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateAliasInput,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAliasResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Alias;
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
      body: Alias,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomDomainRequest extends $tea.Model {
  /**
   * @remarks
   * The information about the custom domain name.
   * 
   * This parameter is required.
   */
  body?: CreateCustomDomainInput;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateCustomDomainInput,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CustomDomain;
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
      body: CustomDomain,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFunctionRequest extends $tea.Model {
  /**
   * @remarks
   * The information about function configurations.
   * 
   * This parameter is required.
   */
  body?: CreateFunctionInput;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateFunctionInput,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFunctionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Function;
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
      body: Function,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLayerVersionRequest extends $tea.Model {
  /**
   * @remarks
   * The information about layer configurations.
   * 
   * This parameter is required.
   */
  body?: CreateLayerVersionInput;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateLayerVersionInput,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLayerVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Layer;
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
      body: Layer,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTriggerRequest extends $tea.Model {
  /**
   * @remarks
   * The trigger configurations.
   * 
   * This parameter is required.
   */
  body?: CreateTriggerInput;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateTriggerInput,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTriggerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Trigger;
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
      body: Trigger,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcBindingRequest extends $tea.Model {
  /**
   * @remarks
   * The VPC binding configurations.
   * 
   * This parameter is required.
   */
  body?: CreateVpcBindingInput;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateVpcBindingInput,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcBindingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAliasResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAsyncInvokeConfigRequest extends $tea.Model {
  /**
   * @remarks
   * The version or alias of the function.
   * 
   * @example
   * LATEST
   */
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

export class DeleteAsyncInvokeConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConcurrencyConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFunctionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFunctionVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLayerVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProvisionConfigRequest extends $tea.Model {
  /**
   * @remarks
   * The function alias or LATEST.
   * 
   * @example
   * LATEST
   */
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

export class DeleteProvisionConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTriggerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpcBindingResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAliasResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Alias;
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
      body: Alias,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncInvokeConfigRequest extends $tea.Model {
  /**
   * @remarks
   * The version or alias of the function.
   * 
   * @example
   * LATEST
   */
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

export class GetAsyncInvokeConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AsyncConfig;
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
      body: AsyncConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncTaskRequest extends $tea.Model {
  /**
   * @remarks
   * The version or alias of the function.
   * 
   * @example
   * LATEST
   */
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

export class GetAsyncTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AsyncTask;
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
      body: AsyncTask,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConcurrencyConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConcurrencyConfig;
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
      body: ConcurrencyConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CustomDomain;
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
      body: CustomDomain,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionRequest extends $tea.Model {
  /**
   * @remarks
   * 2023-03-10T10:10:10Z
   * 
   * @example
   * LATEST
   */
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

export class GetFunctionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Function;
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
      body: Function,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionCodeRequest extends $tea.Model {
  /**
   * @remarks
   * The version or alias of the function.
   * 
   * @example
   * LATEST
   */
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

export class GetFunctionCodeResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OutputFuncCode;
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
      body: OutputFuncCode,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLayerVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Layer;
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
      body: Layer,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLayerVersionByArnResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Layer;
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
      body: Layer,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProvisionConfigRequest extends $tea.Model {
  /**
   * @remarks
   * The function alias or LATEST.
   * 
   * @example
   * LATEST
   */
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

export class GetProvisionConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ProvisionConfig;
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
      body: ProvisionConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTriggerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Trigger;
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
      body: Trigger,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeFunctionHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The ID of the asynchronous task. You must enable the asynchronous task feature in advance.
   * 
   * >  If you use an SDK to invoke a function, we recommend that you specify a business-related ID to facilitate subsequent operations. For example, a video processing function can use video file names as invocation IDs. This way, you can easily check whether a video is successfully processed or terminated before it is processed. The ID can start only with letters or underscores. An ID can contain *letters, digits (0 - 9), underscores*, and hyphens (-). It can be up to 128 characters in length. If you do not specify the ID of the asynchronous invocation, the system automatically generates an ID.
   * 
   * @example
   * test-id
   */
  xFcAsyncTaskId?: string;
  /**
   * @remarks
   * The type of function invocation. Valid values: Sync and Async.
   * 
   * @example
   * Sync
   */
  xFcInvocationType?: string;
  /**
   * @remarks
   * The log type of function invocation. Valid values: None and Tail.
   * 
   * @example
   * Tail
   */
  xFcLogType?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAsyncTaskId: 'x-fc-async-task-id',
      xFcInvocationType: 'x-fc-invocation-type',
      xFcLogType: 'x-fc-log-type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAsyncTaskId: 'string',
      xFcInvocationType: 'string',
      xFcLogType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeFunctionRequest extends $tea.Model {
  /**
   * @remarks
   * The request parameters of function invocation.
   * 
   * @example
   * event
   */
  body?: Readable;
  /**
   * @remarks
   * The version or alias of the function.
   * 
   * @example
   * LATEST
   */
  qualifier?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      qualifier: 'qualifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'Readable',
      qualifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeFunctionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Readable;
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
      body: 'Readable',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAliasesRequest extends $tea.Model {
  /**
   * @remarks
   * The number of aliases returned.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * MTIzNCNhYmM=
   */
  nextToken?: string;
  /**
   * @remarks
   * The alias prefix.
   * 
   * @example
   * my-alias
   */
  prefix?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      nextToken: 'nextToken',
      prefix: 'prefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      nextToken: 'string',
      prefix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAliasesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAliasesOutput;
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
      body: ListAliasesOutput,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsyncInvokeConfigsRequest extends $tea.Model {
  /**
   * @remarks
   * The function name. If you do not configure this parameter, the asynchronous invocation configurations of all functions are displayed.
   * 
   * @example
   * my-func
   */
  functionName?: string;
  /**
   * @remarks
   * The maximum number of entries to be returned.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The paging information. This parameter specifies the start point of the query.
   * 
   * @example
   * MTIzNCNhYmM=
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      functionName: 'functionName',
      limit: 'limit',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionName: 'string',
      limit: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsyncInvokeConfigsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAsyncInvokeConfigOutput;
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
      body: ListAsyncInvokeConfigOutput,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsyncTasksRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to return input parameters of the asynchronous tasks. Valid values:
   * 
   * *   true: returns the `invocationPayload` parameter in the response.
   * *   false: does not return the `invocationPayload` parameter in the response.
   * 
   * >  The `invocationPayload` parameter indicates the input parameters of an asynchronous task.
   * 
   * @example
   * true
   */
  includePayload?: boolean;
  /**
   * @remarks
   * The number of asynchronous tasks to return. The default value is 20. Valid values: [1,100].
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * MTIzNCNhYmM=
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID prefix of asynchronous tasks. If this parameter is specified, a list of asynchronous tasks whose IDs match the prefix is returned.
   * 
   * @example
   * job-
   */
  prefix?: string;
  /**
   * @remarks
   * The version or alias of the function.
   * 
   * @example
   * LATEST
   */
  qualifier?: string;
  /**
   * @remarks
   * The order in which the returned asynchronous tasks are sorted.
   * 
   * *   asc: in ascending order.
   * *   desc: in descending order.
   * 
   * @example
   * asc
   */
  sortOrderByTime?: string;
  /**
   * @remarks
   * The start time of the period during which the asynchronous tasks are initiated.
   * 
   * @example
   * 1640966400000
   */
  startedTimeBegin?: number;
  /**
   * @remarks
   * The end time of the period during which the asynchronous tasks are initiated.
   * 
   * @example
   * 1640966400000
   */
  startedTimeEnd?: number;
  /**
   * @remarks
   * The state of asynchronous tasks. The following items list the states of an asynchronous task:
   * 
   * *   Enqueued: The asynchronous invocation is enqueued and is waiting to be executed.
   * *   Succeeded: The invocation is successful.
   * *   Failed: The invocation fails.
   * *   Running: The invocation is being executed.
   * *   Stopped: The invocation is terminated.
   * *   Stopping: The invocation is being terminated.
   * *   Invalid: The invocation is invalid and not executed due to specific reasons. For example, the function is deleted.
   * *   Expired: The maximum validity period of messages is specified for asynchronous invocation. The invocation is discarded and not executed because the specified maximum validity period has elapsed.
   * *   Retrying: The asynchronous invocation is being retried due to an execution error.
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      includePayload: 'includePayload',
      limit: 'limit',
      nextToken: 'nextToken',
      prefix: 'prefix',
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
      limit: 'number',
      nextToken: 'string',
      prefix: 'string',
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

export class ListAsyncTasksResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListAsyncTaskOutput;
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
      body: ListAsyncTaskOutput,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConcurrencyConfigsRequest extends $tea.Model {
  /**
   * @remarks
   * The function name. If you leave this parameter empty, the concurrency configurations of all functions are returned.
   * 
   * @example
   * my-func
   */
  functionName?: string;
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * MTIzNCNhYmM=
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      functionName: 'functionName',
      limit: 'limit',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionName: 'string',
      limit: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConcurrencyConfigsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListConcurrencyConfigsOutput;
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
      body: ListConcurrencyConfigsOutput,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomDomainsRequest extends $tea.Model {
  /**
   * @remarks
   * The number of custom domain names returned.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * MTIzNCNhYmM=
   */
  nextToken?: string;
  /**
   * @remarks
   * The domain name prefix.
   * 
   * @example
   * foo
   */
  prefix?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      nextToken: 'nextToken',
      prefix: 'prefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      nextToken: 'string',
      prefix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomDomainsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListCustomDomainOutput;
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
      body: ListCustomDomainOutput,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionVersionsRequest extends $tea.Model {
  /**
   * @remarks
   * The sorting mode of function versions. Valid values: BACKWARD and FORWARD.
   * 
   * @example
   * BACKWARD
   */
  direction?: string;
  /**
   * @remarks
   * The number of function versions that are returned.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * MTIzNCNhYmM=
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'direction',
      limit: 'limit',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      limit: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionVersionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListVersionsOutput;
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
      body: ListVersionsOutput,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsRequest extends $tea.Model {
  /**
   * @remarks
   * The version of Function Compute to which the functions belong. Valid values: v3 and v2. v3: only lists functions of Function Compute 3.0. v2: only lists functions of Function Compute 2.0. By default, this parameter is left empty and functions in both Function Compute 2.0 and Function Compute 3.0 are listed.
   * 
   * @example
   * v3
   */
  fcVersion?: string;
  /**
   * @remarks
   * The number of functions to return. The minimum value is 1 and the maximum value is 100.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * MTIzNCNhYmM=
   */
  nextToken?: string;
  /**
   * @remarks
   * The prefix of the function name.
   * 
   * @example
   * my-func
   */
  prefix?: string;
  static names(): { [key: string]: string } {
    return {
      fcVersion: 'fcVersion',
      limit: 'limit',
      nextToken: 'nextToken',
      prefix: 'prefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fcVersion: 'string',
      limit: 'number',
      nextToken: 'string',
      prefix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListFunctionsOutput;
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
      body: ListFunctionsOutput,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesRequest extends $tea.Model {
  /**
   * @remarks
   * The function version or alias.
   * 
   * @example
   * LATEST
   */
  qualifier?: string;
  /**
   * @remarks
   * Specifies whether to list all instances. Valid values: true and false.
   * 
   * @example
   * true
   */
  withAllActive?: boolean;
  static names(): { [key: string]: string } {
    return {
      qualifier: 'qualifier',
      withAllActive: 'withAllActive',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualifier: 'string',
      withAllActive: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListInstancesOutput;
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
      body: ListInstancesOutput,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLayerVersionsRequest extends $tea.Model {
  /**
   * @remarks
   * The number of versions to be returned.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The initial version of the layer.
   * 
   * @example
   * 1
   */
  startVersion?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      startVersion: 'startVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      startVersion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLayerVersionsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListLayerVersionOutput;
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
      body: ListLayerVersionOutput,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLayersRequest extends $tea.Model {
  /**
   * @remarks
   * The number of layers that are returned
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * MTIzNCNhYmM=
   */
  nextToken?: string;
  /**
   * @remarks
   * Specifies whether the layer is official. Valid values: true and false.
   * 
   * @example
   * true
   */
  official?: string;
  /**
   * @remarks
   * The name prefix of the layer.
   * 
   * @example
   * my-layer
   */
  prefix?: string;
  /**
   * @remarks
   * Specifies whether the layer is public. Valid values: true and false.
   * 
   * @example
   * true
   */
  public?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      nextToken: 'nextToken',
      official: 'official',
      prefix: 'prefix',
      public: 'public',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      nextToken: 'string',
      official: 'string',
      prefix: 'string',
      public: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLayersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListLayersOutput;
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
      body: ListLayersOutput,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProvisionConfigsRequest extends $tea.Model {
  /**
   * @remarks
   * The name of the function. If this parameter is not specified, the provisioned configurations of all functions are listed.
   * 
   * @example
   * my-func
   */
  functionName?: string;
  /**
   * @remarks
   * Number of provisioned configurations to return.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * A pagination token.
   * 
   * @example
   * MTIzNCNhYmM=
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      functionName: 'functionName',
      limit: 'limit',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionName: 'string',
      limit: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProvisionConfigsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListProvisionConfigsOutput;
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
      body: ListProvisionConfigsOutput,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * The number of resources to return.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * MTIzNCNhYmM=
   */
  nextToken?: string;
  /**
   * @remarks
   * The resource IDs.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type.
   * 
   * This parameter is required.
   * 
   * @example
   * ALIYUN::FC:FUNCTION
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags.
   * 
   * You can query up to 20 tags at a time.
   */
  tag?: ListTagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      limit: 'Limit',
      nextToken: 'NextToken',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      nextToken: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': ListTagResourcesRequestTag },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * The number of resources to return.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * MTIzNCNhYmM=
   */
  nextToken?: string;
  /**
   * @remarks
   * The resource IDs.
   */
  resourceIdShrink?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * This parameter is required.
   * 
   * @example
   * ALIYUN::FC:FUNCTION
   */
  resourceType?: string;
  /**
   * @remarks
   * The tags.
   * 
   * You can query up to 20 tags at a time.
   */
  tagShrink?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'Limit',
      nextToken: 'NextToken',
      resourceIdShrink: 'ResourceId',
      resourceType: 'ResourceType',
      tagShrink: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      nextToken: 'string',
      resourceIdShrink: 'string',
      resourceType: 'string',
      tagShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTagResourcesOutput;
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
      body: ListTagResourcesOutput,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTriggersRequest extends $tea.Model {
  /**
   * @remarks
   * The number of triggers returned.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The token for the next page.
   * 
   * @example
   * MTIzNCNhYmM=
   */
  nextToken?: string;
  /**
   * @remarks
   * The trigger name prefix.
   * 
   * @example
   * my-trigger
   */
  prefix?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      nextToken: 'nextToken',
      prefix: 'prefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      nextToken: 'string',
      prefix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTriggersResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListTriggersOutput;
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
      body: ListTriggersOutput,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcBindingsResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListVpcBindingsOutput;
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
      body: ListVpcBindingsOutput,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishFunctionVersionRequest extends $tea.Model {
  /**
   * @remarks
   * The information about the function version.
   * 
   * This parameter is required.
   */
  body?: PublishVersionInput;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: PublishVersionInput,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishFunctionVersionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Version;
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
      body: Version,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutAsyncInvokeConfigRequest extends $tea.Model {
  /**
   * @remarks
   * The asynchronous invocation configurations.
   * 
   * This parameter is required.
   */
  body?: PutAsyncInvokeConfigInput;
  /**
   * @remarks
   * The version or alias of the function.
   * 
   * @example
   * LATEST
   */
  qualifier?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      qualifier: 'qualifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: PutAsyncInvokeConfigInput,
      qualifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutAsyncInvokeConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: AsyncConfig;
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
      body: AsyncConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutConcurrencyConfigRequest extends $tea.Model {
  /**
   * @remarks
   * The concurrency configurations.
   * 
   * This parameter is required.
   */
  body?: PutConcurrencyInput;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: PutConcurrencyInput,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutConcurrencyConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ConcurrencyConfig;
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
      body: ConcurrencyConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutLayerACLRequest extends $tea.Model {
  /**
   * @remarks
   * Specify the access permission of the layer. A value of 1 indicates public and a value of 0 indicates private. The default value is 0.
   * 
   * @example
   * 1
   */
  acl?: string;
  /**
   * @remarks
   * Specify whether the layer is a public layer. Valid values: true and false.
   * 
   * @example
   * true
   * 
   * @deprecated
   */
  public?: string;
  static names(): { [key: string]: string } {
    return {
      acl: 'acl',
      public: 'public',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acl: 'string',
      public: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutLayerACLResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutProvisionConfigRequest extends $tea.Model {
  /**
   * @remarks
   * The provisioned instance configurations.
   * 
   * This parameter is required.
   */
  body?: PutProvisionConfigInput;
  /**
   * @remarks
   * The function alias or LATEST.
   * 
   * @example
   * LATEST
   */
  qualifier?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      qualifier: 'qualifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: PutProvisionConfigInput,
      qualifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutProvisionConfigResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ProvisionConfig;
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
      body: ProvisionConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAsyncTaskRequest extends $tea.Model {
  /**
   * @remarks
   * The version or alias of the function.
   * 
   * @example
   * LATEST
   */
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

export class StopAsyncTaskResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * The configuration of the resource tag.
   * 
   * This parameter is required.
   */
  body?: TagResourcesInput;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: TagResourcesInput,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to delete all tags.
   * 
   * @example
   * true
   */
  all?: boolean;
  /**
   * @remarks
   * The resource identifiers.
   * 
   * This parameter is required.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type.
   * 
   * This parameter is required.
   * 
   * @example
   * function
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag to remove. You can specify a maximum of 50 tags.
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesShrinkRequest extends $tea.Model {
  /**
   * @remarks
   * Specifies whether to delete all tags.
   * 
   * @example
   * true
   */
  all?: boolean;
  /**
   * @remarks
   * The resource identifiers.
   * 
   * This parameter is required.
   */
  resourceIdShrink?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * This parameter is required.
   * 
   * @example
   * function
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag to remove. You can specify a maximum of 50 tags.
   */
  tagKeyShrink?: string;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      resourceIdShrink: 'ResourceId',
      resourceType: 'ResourceType',
      tagKeyShrink: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      resourceIdShrink: 'string',
      resourceType: 'string',
      tagKeyShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAliasRequest extends $tea.Model {
  /**
   * @remarks
   * The alias information to be updated.
   * 
   * This parameter is required.
   */
  body?: UpdateAliasInput;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdateAliasInput,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAliasResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Alias;
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
      body: Alias,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomDomainRequest extends $tea.Model {
  /**
   * @remarks
   * The information about the custom domain name.
   * 
   * This parameter is required.
   */
  body?: UpdateCustomDomainInput;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdateCustomDomainInput,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomDomainResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: CustomDomain;
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
      body: CustomDomain,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFunctionRequest extends $tea.Model {
  /**
   * @remarks
   * The function information
   * 
   * This parameter is required.
   */
  body?: UpdateFunctionInput;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdateFunctionInput,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFunctionResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Function;
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
      body: Function,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTriggerRequest extends $tea.Model {
  /**
   * @remarks
   * The trigger configurations.
   * 
   * This parameter is required.
   */
  body?: UpdateTriggerInput;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdateTriggerInput,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTriggerResponse extends $tea.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Trigger;
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
      body: Trigger,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $tea.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * The tag key can be up to 64 characters in length, and cannot contain `http://` or `https://`. The tag key cannot start with `aliyun` or `acs:`.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * The tag value can be up to 128 characters in length and can be an empty string.
   * 
   * @example
   * v1
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


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("fc", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 创建函数别名。
   * 
   * @param request - CreateAliasRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAliasResponse
   */
  async createAliasWithOptions(functionName: string, request: CreateAliasRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateAliasResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "CreateAlias",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${OpenApiUtil.getEncodeParam(functionName)}/aliases`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateAliasResponse>(await this.callApi(params, req, runtime), new CreateAliasResponse({}));
  }

  /**
   * 创建函数别名。
   * 
   * @param request - CreateAliasRequest
   * @returns CreateAliasResponse
   */
  async createAlias(functionName: string, request: CreateAliasRequest): Promise<CreateAliasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createAliasWithOptions(functionName, request, headers, runtime);
  }

  /**
   * Creates a custom domain name.
   * 
   * @remarks
   * If you want to use a fixed domain name to access an application or function in a production environment of Function Compute, or to resolve the issue of forced downloads when accessing an HTTP trigger, you can bind a custom domain name to the application or function.
   * 
   * @param request - CreateCustomDomainRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateCustomDomainResponse
   */
  async createCustomDomainWithOptions(request: CreateCustomDomainRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateCustomDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "CreateCustomDomain",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/custom-domains`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateCustomDomainResponse>(await this.callApi(params, req, runtime), new CreateCustomDomainResponse({}));
  }

  /**
   * Creates a custom domain name.
   * 
   * @remarks
   * If you want to use a fixed domain name to access an application or function in a production environment of Function Compute, or to resolve the issue of forced downloads when accessing an HTTP trigger, you can bind a custom domain name to the application or function.
   * 
   * @param request - CreateCustomDomainRequest
   * @returns CreateCustomDomainResponse
   */
  async createCustomDomain(request: CreateCustomDomainRequest): Promise<CreateCustomDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createCustomDomainWithOptions(request, headers, runtime);
  }

  /**
   * Creates a function.
   * 
   * @remarks
   * Resources of Function Compute are scheduled and run based on functions. A function usually refers to a code snippet that is written by a user and can be independently executed to respond to events and requests.
   * 
   * @param request - CreateFunctionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateFunctionResponse
   */
  async createFunctionWithOptions(request: CreateFunctionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateFunctionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "CreateFunction",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateFunctionResponse>(await this.callApi(params, req, runtime), new CreateFunctionResponse({}));
  }

  /**
   * Creates a function.
   * 
   * @remarks
   * Resources of Function Compute are scheduled and run based on functions. A function usually refers to a code snippet that is written by a user and can be independently executed to respond to events and requests.
   * 
   * @param request - CreateFunctionRequest
   * @returns CreateFunctionResponse
   */
  async createFunction(request: CreateFunctionRequest): Promise<CreateFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createFunctionWithOptions(request, headers, runtime);
  }

  /**
   * 创建层版本。
   * 
   * @param request - CreateLayerVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateLayerVersionResponse
   */
  async createLayerVersionWithOptions(layerName: string, request: CreateLayerVersionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateLayerVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "CreateLayerVersion",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/layers/${OpenApiUtil.getEncodeParam(layerName)}/versions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateLayerVersionResponse>(await this.callApi(params, req, runtime), new CreateLayerVersionResponse({}));
  }

  /**
   * 创建层版本。
   * 
   * @param request - CreateLayerVersionRequest
   * @returns CreateLayerVersionResponse
   */
  async createLayerVersion(layerName: string, request: CreateLayerVersionRequest): Promise<CreateLayerVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createLayerVersionWithOptions(layerName, request, headers, runtime);
  }

  /**
   * 创建函数触发器。
   * 
   * @param request - CreateTriggerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTriggerResponse
   */
  async createTriggerWithOptions(functionName: string, request: CreateTriggerRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateTriggerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "CreateTrigger",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${OpenApiUtil.getEncodeParam(functionName)}/triggers`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateTriggerResponse>(await this.callApi(params, req, runtime), new CreateTriggerResponse({}));
  }

  /**
   * 创建函数触发器。
   * 
   * @param request - CreateTriggerRequest
   * @returns CreateTriggerResponse
   */
  async createTrigger(functionName: string, request: CreateTriggerRequest): Promise<CreateTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTriggerWithOptions(functionName, request, headers, runtime);
  }

  /**
   * Creates a VPC connection.
   * 
   * @param request - CreateVpcBindingRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateVpcBindingResponse
   */
  async createVpcBindingWithOptions(functionName: string, request: CreateVpcBindingRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<CreateVpcBindingResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "CreateVpcBinding",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${OpenApiUtil.getEncodeParam(functionName)}/vpc-bindings`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<CreateVpcBindingResponse>(await this.callApi(params, req, runtime), new CreateVpcBindingResponse({}));
  }

  /**
   * Creates a VPC connection.
   * 
   * @param request - CreateVpcBindingRequest
   * @returns CreateVpcBindingResponse
   */
  async createVpcBinding(functionName: string, request: CreateVpcBindingRequest): Promise<CreateVpcBindingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createVpcBindingWithOptions(functionName, request, headers, runtime);
  }

  /**
   * Deletes an alias.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAliasResponse
   */
  async deleteAliasWithOptions(functionName: string, aliasName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteAliasResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteAlias",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${OpenApiUtil.getEncodeParam(functionName)}/aliases/${OpenApiUtil.getEncodeParam(aliasName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteAliasResponse>(await this.callApi(params, req, runtime), new DeleteAliasResponse({}));
  }

  /**
   * Deletes an alias.
   * @returns DeleteAliasResponse
   */
  async deleteAlias(functionName: string, aliasName: string): Promise<DeleteAliasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAliasWithOptions(functionName, aliasName, headers, runtime);
  }

  /**
   * Deletes an asynchronous invocation configuration.
   * 
   * @param request - DeleteAsyncInvokeConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteAsyncInvokeConfigResponse
   */
  async deleteAsyncInvokeConfigWithOptions(functionName: string, request: DeleteAsyncInvokeConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteAsyncInvokeConfigResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteAsyncInvokeConfig",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${OpenApiUtil.getEncodeParam(functionName)}/async-invoke-config`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteAsyncInvokeConfigResponse>(await this.callApi(params, req, runtime), new DeleteAsyncInvokeConfigResponse({}));
  }

  /**
   * Deletes an asynchronous invocation configuration.
   * 
   * @param request - DeleteAsyncInvokeConfigRequest
   * @returns DeleteAsyncInvokeConfigResponse
   */
  async deleteAsyncInvokeConfig(functionName: string, request: DeleteAsyncInvokeConfigRequest): Promise<DeleteAsyncInvokeConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteAsyncInvokeConfigWithOptions(functionName, request, headers, runtime);
  }

  /**
   * Deletes a concurrency configuration.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteConcurrencyConfigResponse
   */
  async deleteConcurrencyConfigWithOptions(functionName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteConcurrencyConfigResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteConcurrencyConfig",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${OpenApiUtil.getEncodeParam(functionName)}/concurrency`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteConcurrencyConfigResponse>(await this.callApi(params, req, runtime), new DeleteConcurrencyConfigResponse({}));
  }

  /**
   * Deletes a concurrency configuration.
   * @returns DeleteConcurrencyConfigResponse
   */
  async deleteConcurrencyConfig(functionName: string): Promise<DeleteConcurrencyConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteConcurrencyConfigWithOptions(functionName, headers, runtime);
  }

  /**
   * Deletes a custom domain name.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteCustomDomainResponse
   */
  async deleteCustomDomainWithOptions(domainName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteCustomDomainResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteCustomDomain",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/custom-domains/${OpenApiUtil.getEncodeParam(domainName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteCustomDomainResponse>(await this.callApi(params, req, runtime), new DeleteCustomDomainResponse({}));
  }

  /**
   * Deletes a custom domain name.
   * @returns DeleteCustomDomainResponse
   */
  async deleteCustomDomain(domainName: string): Promise<DeleteCustomDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteCustomDomainWithOptions(domainName, headers, runtime);
  }

  /**
   * Deletes a function.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFunctionResponse
   */
  async deleteFunctionWithOptions(functionName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteFunctionResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteFunction",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${OpenApiUtil.getEncodeParam(functionName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteFunctionResponse>(await this.callApi(params, req, runtime), new DeleteFunctionResponse({}));
  }

  /**
   * Deletes a function.
   * @returns DeleteFunctionResponse
   */
  async deleteFunction(functionName: string): Promise<DeleteFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteFunctionWithOptions(functionName, headers, runtime);
  }

  /**
   * Deletes a function version.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFunctionVersionResponse
   */
  async deleteFunctionVersionWithOptions(functionName: string, versionId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteFunctionVersionResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteFunctionVersion",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${OpenApiUtil.getEncodeParam(functionName)}/versions/${OpenApiUtil.getEncodeParam(versionId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteFunctionVersionResponse>(await this.callApi(params, req, runtime), new DeleteFunctionVersionResponse({}));
  }

  /**
   * Deletes a function version.
   * @returns DeleteFunctionVersionResponse
   */
  async deleteFunctionVersion(functionName: string, versionId: string): Promise<DeleteFunctionVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteFunctionVersionWithOptions(functionName, versionId, headers, runtime);
  }

  /**
   * Deletes a layer version.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteLayerVersionResponse
   */
  async deleteLayerVersionWithOptions(layerName: string, version: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteLayerVersionResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteLayerVersion",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/layers/${OpenApiUtil.getEncodeParam(layerName)}/versions/${OpenApiUtil.getEncodeParam(version)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteLayerVersionResponse>(await this.callApi(params, req, runtime), new DeleteLayerVersionResponse({}));
  }

  /**
   * Deletes a layer version.
   * @returns DeleteLayerVersionResponse
   */
  async deleteLayerVersion(layerName: string, version: string): Promise<DeleteLayerVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteLayerVersionWithOptions(layerName, version, headers, runtime);
  }

  /**
   * Deletes a provisioned configuration.
   * 
   * @param request - DeleteProvisionConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteProvisionConfigResponse
   */
  async deleteProvisionConfigWithOptions(functionName: string, request: DeleteProvisionConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteProvisionConfigResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteProvisionConfig",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${OpenApiUtil.getEncodeParam(functionName)}/provision-config`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteProvisionConfigResponse>(await this.callApi(params, req, runtime), new DeleteProvisionConfigResponse({}));
  }

  /**
   * Deletes a provisioned configuration.
   * 
   * @param request - DeleteProvisionConfigRequest
   * @returns DeleteProvisionConfigResponse
   */
  async deleteProvisionConfig(functionName: string, request: DeleteProvisionConfigRequest): Promise<DeleteProvisionConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteProvisionConfigWithOptions(functionName, request, headers, runtime);
  }

  /**
   * Deletes a trigger.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteTriggerResponse
   */
  async deleteTriggerWithOptions(functionName: string, triggerName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteTriggerResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteTrigger",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${OpenApiUtil.getEncodeParam(functionName)}/triggers/${OpenApiUtil.getEncodeParam(triggerName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteTriggerResponse>(await this.callApi(params, req, runtime), new DeleteTriggerResponse({}));
  }

  /**
   * Deletes a trigger.
   * @returns DeleteTriggerResponse
   */
  async deleteTrigger(functionName: string, triggerName: string): Promise<DeleteTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteTriggerWithOptions(functionName, triggerName, headers, runtime);
  }

  /**
   * Deletes an access control policy from a specified policy group for a VPC firewall.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteVpcBindingResponse
   */
  async deleteVpcBindingWithOptions(functionName: string, vpcId: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<DeleteVpcBindingResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "DeleteVpcBinding",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${OpenApiUtil.getEncodeParam(functionName)}/vpc-bindings/${OpenApiUtil.getEncodeParam(vpcId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteVpcBindingResponse>(await this.callApi(params, req, runtime), new DeleteVpcBindingResponse({}));
  }

  /**
   * Deletes an access control policy from a specified policy group for a VPC firewall.
   * @returns DeleteVpcBindingResponse
   */
  async deleteVpcBinding(functionName: string, vpcId: string): Promise<DeleteVpcBindingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteVpcBindingWithOptions(functionName, vpcId, headers, runtime);
  }

  /**
   * Queries information about an alias.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAliasResponse
   */
  async getAliasWithOptions(functionName: string, aliasName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetAliasResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetAlias",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${OpenApiUtil.getEncodeParam(functionName)}/aliases/${OpenApiUtil.getEncodeParam(aliasName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetAliasResponse>(await this.callApi(params, req, runtime), new GetAliasResponse({}));
  }

  /**
   * Queries information about an alias.
   * @returns GetAliasResponse
   */
  async getAlias(functionName: string, aliasName: string): Promise<GetAliasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAliasWithOptions(functionName, aliasName, headers, runtime);
  }

  /**
   * Gets asynchronous invocation configurations of a function.
   * 
   * @param request - GetAsyncInvokeConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAsyncInvokeConfigResponse
   */
  async getAsyncInvokeConfigWithOptions(functionName: string, request: GetAsyncInvokeConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetAsyncInvokeConfigResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAsyncInvokeConfig",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${OpenApiUtil.getEncodeParam(functionName)}/async-invoke-config`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetAsyncInvokeConfigResponse>(await this.callApi(params, req, runtime), new GetAsyncInvokeConfigResponse({}));
  }

  /**
   * Gets asynchronous invocation configurations of a function.
   * 
   * @param request - GetAsyncInvokeConfigRequest
   * @returns GetAsyncInvokeConfigResponse
   */
  async getAsyncInvokeConfig(functionName: string, request: GetAsyncInvokeConfigRequest): Promise<GetAsyncInvokeConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAsyncInvokeConfigWithOptions(functionName, request, headers, runtime);
  }

  /**
   * Queries the information about an asynchronous task.
   * 
   * @param request - GetAsyncTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetAsyncTaskResponse
   */
  async getAsyncTaskWithOptions(functionName: string, taskId: string, request: GetAsyncTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetAsyncTaskResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetAsyncTask",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${OpenApiUtil.getEncodeParam(functionName)}/async-tasks/${OpenApiUtil.getEncodeParam(taskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetAsyncTaskResponse>(await this.callApi(params, req, runtime), new GetAsyncTaskResponse({}));
  }

  /**
   * Queries the information about an asynchronous task.
   * 
   * @param request - GetAsyncTaskRequest
   * @returns GetAsyncTaskResponse
   */
  async getAsyncTask(functionName: string, taskId: string, request: GetAsyncTaskRequest): Promise<GetAsyncTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getAsyncTaskWithOptions(functionName, taskId, request, headers, runtime);
  }

  /**
   * Obtains a concurrency configuration.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetConcurrencyConfigResponse
   */
  async getConcurrencyConfigWithOptions(functionName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetConcurrencyConfigResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetConcurrencyConfig",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${OpenApiUtil.getEncodeParam(functionName)}/concurrency`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetConcurrencyConfigResponse>(await this.callApi(params, req, runtime), new GetConcurrencyConfigResponse({}));
  }

  /**
   * Obtains a concurrency configuration.
   * @returns GetConcurrencyConfigResponse
   */
  async getConcurrencyConfig(functionName: string): Promise<GetConcurrencyConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getConcurrencyConfigWithOptions(functionName, headers, runtime);
  }

  /**
   * Queries information about a custom domain name.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetCustomDomainResponse
   */
  async getCustomDomainWithOptions(domainName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetCustomDomainResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetCustomDomain",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/custom-domains/${OpenApiUtil.getEncodeParam(domainName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetCustomDomainResponse>(await this.callApi(params, req, runtime), new GetCustomDomainResponse({}));
  }

  /**
   * Queries information about a custom domain name.
   * @returns GetCustomDomainResponse
   */
  async getCustomDomain(domainName: string): Promise<GetCustomDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getCustomDomainWithOptions(domainName, headers, runtime);
  }

  /**
   * http://pre.hhht/#vpc
   * 
   * @param request - GetFunctionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFunctionResponse
   */
  async getFunctionWithOptions(functionName: string, request: GetFunctionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetFunctionResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetFunction",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${OpenApiUtil.getEncodeParam(functionName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetFunctionResponse>(await this.callApi(params, req, runtime), new GetFunctionResponse({}));
  }

  /**
   * http://pre.hhht/#vpc
   * 
   * @param request - GetFunctionRequest
   * @returns GetFunctionResponse
   */
  async getFunction(functionName: string, request: GetFunctionRequest): Promise<GetFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFunctionWithOptions(functionName, request, headers, runtime);
  }

  /**
   * Queries a code package of a function.
   * 
   * @param request - GetFunctionCodeRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetFunctionCodeResponse
   */
  async getFunctionCodeWithOptions(functionName: string, request: GetFunctionCodeRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetFunctionCodeResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetFunctionCode",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${OpenApiUtil.getEncodeParam(functionName)}/code`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetFunctionCodeResponse>(await this.callApi(params, req, runtime), new GetFunctionCodeResponse({}));
  }

  /**
   * Queries a code package of a function.
   * 
   * @param request - GetFunctionCodeRequest
   * @returns GetFunctionCodeResponse
   */
  async getFunctionCode(functionName: string, request: GetFunctionCodeRequest): Promise<GetFunctionCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getFunctionCodeWithOptions(functionName, request, headers, runtime);
  }

  /**
   * Queries versions of a layer.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLayerVersionResponse
   */
  async getLayerVersionWithOptions(layerName: string, version: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetLayerVersionResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetLayerVersion",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/layers/${OpenApiUtil.getEncodeParam(layerName)}/versions/${OpenApiUtil.getEncodeParam(version)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetLayerVersionResponse>(await this.callApi(params, req, runtime), new GetLayerVersionResponse({}));
  }

  /**
   * Queries versions of a layer.
   * @returns GetLayerVersionResponse
   */
  async getLayerVersion(layerName: string, version: string): Promise<GetLayerVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLayerVersionWithOptions(layerName, version, headers, runtime);
  }

  /**
   * Obtain version information of a layer by using ARNs.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetLayerVersionByArnResponse
   */
  async getLayerVersionByArnWithOptions(arn: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetLayerVersionByArnResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetLayerVersionByArn",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/layerarn/${OpenApiUtil.getEncodeParam(arn)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetLayerVersionByArnResponse>(await this.callApi(params, req, runtime), new GetLayerVersionByArnResponse({}));
  }

  /**
   * Obtain version information of a layer by using ARNs.
   * @returns GetLayerVersionByArnResponse
   */
  async getLayerVersionByArn(arn: string): Promise<GetLayerVersionByArnResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getLayerVersionByArnWithOptions(arn, headers, runtime);
  }

  /**
   * Queries provisioned configurations.
   * 
   * @param request - GetProvisionConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProvisionConfigResponse
   */
  async getProvisionConfigWithOptions(functionName: string, request: GetProvisionConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetProvisionConfigResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetProvisionConfig",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${OpenApiUtil.getEncodeParam(functionName)}/provision-config`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetProvisionConfigResponse>(await this.callApi(params, req, runtime), new GetProvisionConfigResponse({}));
  }

  /**
   * Queries provisioned configurations.
   * 
   * @param request - GetProvisionConfigRequest
   * @returns GetProvisionConfigResponse
   */
  async getProvisionConfig(functionName: string, request: GetProvisionConfigRequest): Promise<GetProvisionConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProvisionConfigWithOptions(functionName, request, headers, runtime);
  }

  /**
   * Queries information about a trigger.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTriggerResponse
   */
  async getTriggerWithOptions(functionName: string, triggerName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<GetTriggerResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "GetTrigger",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${OpenApiUtil.getEncodeParam(functionName)}/triggers/${OpenApiUtil.getEncodeParam(triggerName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTriggerResponse>(await this.callApi(params, req, runtime), new GetTriggerResponse({}));
  }

  /**
   * Queries information about a trigger.
   * @returns GetTriggerResponse
   */
  async getTrigger(functionName: string, triggerName: string): Promise<GetTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTriggerWithOptions(functionName, triggerName, headers, runtime);
  }

  /**
   * Invokes a function.
   * 
   * @param request - InvokeFunctionRequest
   * @param headers - InvokeFunctionHeaders
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns InvokeFunctionResponse
   */
  async invokeFunctionWithOptions(functionName: string, request: InvokeFunctionRequest, headers: InvokeFunctionHeaders, runtime: $Util.RuntimeOptions): Promise<InvokeFunctionResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcAsyncTaskId)) {
      realHeaders["x-fc-async-task-id"] = Util.toJSONString(headers.xFcAsyncTaskId);
    }

    if (!Util.isUnset(headers.xFcInvocationType)) {
      realHeaders["x-fc-invocation-type"] = Util.toJSONString(headers.xFcInvocationType);
    }

    if (!Util.isUnset(headers.xFcLogType)) {
      realHeaders["x-fc-log-type"] = Util.toJSONString(headers.xFcLogType);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApi.Params({
      action: "InvokeFunction",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${OpenApiUtil.getEncodeParam(functionName)}/invocations`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "binary",
    });
    let res = new InvokeFunctionResponse({ });
    let tmp = Util.assertAsMap(await this.callApi(params, req, runtime));
    if (!Util.isUnset(tmp["body"])) {
      let respBody = Util.assertAsReadable(tmp["body"]);
      res.body = respBody;
    }

    if (!Util.isUnset(tmp["headers"])) {
      let respHeaders = Util.assertAsMap(tmp["headers"]);
      res.headers = Util.stringifyMapValue(respHeaders);
    }

    if (!Util.isUnset(tmp["statusCode"])) {
      let statusCode = Util.assertAsInteger(tmp["statusCode"]);
      res.statusCode = statusCode;
    }

    return res;
  }

  /**
   * Invokes a function.
   * 
   * @param request - InvokeFunctionRequest
   * @returns InvokeFunctionResponse
   */
  async invokeFunction(functionName: string, request: InvokeFunctionRequest): Promise<InvokeFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new InvokeFunctionHeaders({ });
    return await this.invokeFunctionWithOptions(functionName, request, headers, runtime);
  }

  /**
   * Queries aliases.
   * 
   * @param request - ListAliasesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAliasesResponse
   */
  async listAliasesWithOptions(functionName: string, request: ListAliasesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListAliasesResponse> {
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

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAliases",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${OpenApiUtil.getEncodeParam(functionName)}/aliases`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListAliasesResponse>(await this.callApi(params, req, runtime), new ListAliasesResponse({}));
  }

  /**
   * Queries aliases.
   * 
   * @param request - ListAliasesRequest
   * @returns ListAliasesResponse
   */
  async listAliases(functionName: string, request: ListAliasesRequest): Promise<ListAliasesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAliasesWithOptions(functionName, request, headers, runtime);
  }

  /**
   * Queries all asynchronous configurations of a function.
   * 
   * @param request - ListAsyncInvokeConfigsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAsyncInvokeConfigsResponse
   */
  async listAsyncInvokeConfigsWithOptions(request: ListAsyncInvokeConfigsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListAsyncInvokeConfigsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.functionName)) {
      query["functionName"] = request.functionName;
    }

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
    let params = new $OpenApi.Params({
      action: "ListAsyncInvokeConfigs",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/async-invoke-configs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListAsyncInvokeConfigsResponse>(await this.callApi(params, req, runtime), new ListAsyncInvokeConfigsResponse({}));
  }

  /**
   * Queries all asynchronous configurations of a function.
   * 
   * @param request - ListAsyncInvokeConfigsRequest
   * @returns ListAsyncInvokeConfigsResponse
   */
  async listAsyncInvokeConfigs(request: ListAsyncInvokeConfigsRequest): Promise<ListAsyncInvokeConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAsyncInvokeConfigsWithOptions(request, headers, runtime);
  }

  /**
   * Lists asynchronous tasks.
   * 
   * @param request - ListAsyncTasksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListAsyncTasksResponse
   */
  async listAsyncTasksWithOptions(functionName: string, request: ListAsyncTasksRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListAsyncTasksResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.includePayload)) {
      query["includePayload"] = request.includePayload;
    }

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
    let params = new $OpenApi.Params({
      action: "ListAsyncTasks",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${OpenApiUtil.getEncodeParam(functionName)}/async-tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListAsyncTasksResponse>(await this.callApi(params, req, runtime), new ListAsyncTasksResponse({}));
  }

  /**
   * Lists asynchronous tasks.
   * 
   * @param request - ListAsyncTasksRequest
   * @returns ListAsyncTasksResponse
   */
  async listAsyncTasks(functionName: string, request: ListAsyncTasksRequest): Promise<ListAsyncTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listAsyncTasksWithOptions(functionName, request, headers, runtime);
  }

  /**
   * 列出函数并发度配置。
   * 
   * @param request - ListConcurrencyConfigsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConcurrencyConfigsResponse
   */
  async listConcurrencyConfigsWithOptions(request: ListConcurrencyConfigsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListConcurrencyConfigsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.functionName)) {
      query["functionName"] = request.functionName;
    }

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
    let params = new $OpenApi.Params({
      action: "ListConcurrencyConfigs",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/concurrency-configs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListConcurrencyConfigsResponse>(await this.callApi(params, req, runtime), new ListConcurrencyConfigsResponse({}));
  }

  /**
   * 列出函数并发度配置。
   * 
   * @param request - ListConcurrencyConfigsRequest
   * @returns ListConcurrencyConfigsResponse
   */
  async listConcurrencyConfigs(request: ListConcurrencyConfigsRequest): Promise<ListConcurrencyConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listConcurrencyConfigsWithOptions(request, headers, runtime);
  }

  /**
   * Queries custom domain names.
   * 
   * @param request - ListCustomDomainsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListCustomDomainsResponse
   */
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

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCustomDomains",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/custom-domains`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListCustomDomainsResponse>(await this.callApi(params, req, runtime), new ListCustomDomainsResponse({}));
  }

  /**
   * Queries custom domain names.
   * 
   * @param request - ListCustomDomainsRequest
   * @returns ListCustomDomainsResponse
   */
  async listCustomDomains(request: ListCustomDomainsRequest): Promise<ListCustomDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listCustomDomainsWithOptions(request, headers, runtime);
  }

  /**
   * Queries versions of a function.
   * 
   * @param request - ListFunctionVersionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFunctionVersionsResponse
   */
  async listFunctionVersionsWithOptions(functionName: string, request: ListFunctionVersionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListFunctionVersionsResponse> {
    Util.validateModel(request);
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

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListFunctionVersions",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${OpenApiUtil.getEncodeParam(functionName)}/versions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListFunctionVersionsResponse>(await this.callApi(params, req, runtime), new ListFunctionVersionsResponse({}));
  }

  /**
   * Queries versions of a function.
   * 
   * @param request - ListFunctionVersionsRequest
   * @returns ListFunctionVersionsResponse
   */
  async listFunctionVersions(functionName: string, request: ListFunctionVersionsRequest): Promise<ListFunctionVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFunctionVersionsWithOptions(functionName, request, headers, runtime);
  }

  /**
   * 列出函数。
   * 
   * @param request - ListFunctionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFunctionsResponse
   */
  async listFunctionsWithOptions(request: ListFunctionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListFunctionsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.fcVersion)) {
      query["fcVersion"] = request.fcVersion;
    }

    if (!Util.isUnset(request.limit)) {
      query["limit"] = request.limit;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.prefix)) {
      query["prefix"] = request.prefix;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListFunctions",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListFunctionsResponse>(await this.callApi(params, req, runtime), new ListFunctionsResponse({}));
  }

  /**
   * 列出函数。
   * 
   * @param request - ListFunctionsRequest
   * @returns ListFunctionsResponse
   */
  async listFunctions(request: ListFunctionsRequest): Promise<ListFunctionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFunctionsWithOptions(request, headers, runtime);
  }

  /**
   * Queries a list of function instances.
   * 
   * @param request - ListInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancesResponse
   */
  async listInstancesWithOptions(functionName: string, request: ListInstancesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListInstancesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    if (!Util.isUnset(request.withAllActive)) {
      query["withAllActive"] = request.withAllActive;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInstances",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${OpenApiUtil.getEncodeParam(functionName)}/instances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListInstancesResponse>(await this.callApi(params, req, runtime), new ListInstancesResponse({}));
  }

  /**
   * Queries a list of function instances.
   * 
   * @param request - ListInstancesRequest
   * @returns ListInstancesResponse
   */
  async listInstances(functionName: string, request: ListInstancesRequest): Promise<ListInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listInstancesWithOptions(functionName, request, headers, runtime);
  }

  /**
   * Gets a list of layer versions.
   * 
   * @param request - ListLayerVersionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLayerVersionsResponse
   */
  async listLayerVersionsWithOptions(layerName: string, request: ListLayerVersionsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListLayerVersionsResponse> {
    Util.validateModel(request);
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
    let params = new $OpenApi.Params({
      action: "ListLayerVersions",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/layers/${OpenApiUtil.getEncodeParam(layerName)}/versions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListLayerVersionsResponse>(await this.callApi(params, req, runtime), new ListLayerVersionsResponse({}));
  }

  /**
   * Gets a list of layer versions.
   * 
   * @param request - ListLayerVersionsRequest
   * @returns ListLayerVersionsResponse
   */
  async listLayerVersions(layerName: string, request: ListLayerVersionsRequest): Promise<ListLayerVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listLayerVersionsWithOptions(layerName, request, headers, runtime);
  }

  /**
   * Gets a list of layers.
   * 
   * @param request - ListLayersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListLayersResponse
   */
  async listLayersWithOptions(request: ListLayersRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListLayersResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.limit)) {
      query["limit"] = request.limit;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.official)) {
      query["official"] = request.official;
    }

    if (!Util.isUnset(request.prefix)) {
      query["prefix"] = request.prefix;
    }

    if (!Util.isUnset(request.public)) {
      query["public"] = request.public;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListLayers",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/layers`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListLayersResponse>(await this.callApi(params, req, runtime), new ListLayersResponse({}));
  }

  /**
   * Gets a list of layers.
   * 
   * @param request - ListLayersRequest
   * @returns ListLayersResponse
   */
  async listLayers(request: ListLayersRequest): Promise<ListLayersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listLayersWithOptions(request, headers, runtime);
  }

  /**
   * Queries a list of provisioned configurations.
   * 
   * @param request - ListProvisionConfigsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProvisionConfigsResponse
   */
  async listProvisionConfigsWithOptions(request: ListProvisionConfigsRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListProvisionConfigsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.functionName)) {
      query["functionName"] = request.functionName;
    }

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
    let params = new $OpenApi.Params({
      action: "ListProvisionConfigs",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/provision-configs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListProvisionConfigsResponse>(await this.callApi(params, req, runtime), new ListProvisionConfigsResponse({}));
  }

  /**
   * Queries a list of provisioned configurations.
   * 
   * @param request - ListProvisionConfigsRequest
   * @returns ListProvisionConfigsResponse
   */
  async listProvisionConfigs(request: ListProvisionConfigsRequest): Promise<ListProvisionConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProvisionConfigsWithOptions(request, headers, runtime);
  }

  /**
   * Lists all tagged resources.
   * 
   * @param tmpReq - ListTagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTagResourcesResponse
   */
  async listTagResourcesWithOptions(tmpReq: ListTagResourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTagResourcesResponse> {
    Util.validateModel(tmpReq);
    let request = new ListTagResourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.resourceId)) {
      request.resourceIdShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceId, "ResourceId", "json");
    }

    if (!Util.isUnset(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.resourceIdShrink)) {
      query["ResourceId"] = request.resourceIdShrink;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTagResources",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/tags-v2`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
  }

  /**
   * Lists all tagged resources.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTagResourcesWithOptions(request, headers, runtime);
  }

  /**
   * Queries the triggers of a function.
   * 
   * @param request - ListTriggersRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTriggersResponse
   */
  async listTriggersWithOptions(functionName: string, request: ListTriggersRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListTriggersResponse> {
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

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTriggers",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${OpenApiUtil.getEncodeParam(functionName)}/triggers`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListTriggersResponse>(await this.callApi(params, req, runtime), new ListTriggersResponse({}));
  }

  /**
   * Queries the triggers of a function.
   * 
   * @param request - ListTriggersRequest
   * @returns ListTriggersResponse
   */
  async listTriggers(functionName: string, request: ListTriggersRequest): Promise<ListTriggersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTriggersWithOptions(functionName, request, headers, runtime);
  }

  /**
   * Queries a list of existing VPC connections.
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListVpcBindingsResponse
   */
  async listVpcBindingsWithOptions(functionName: string, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<ListVpcBindingsResponse> {
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApi.Params({
      action: "ListVpcBindings",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${OpenApiUtil.getEncodeParam(functionName)}/vpc-bindings`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListVpcBindingsResponse>(await this.callApi(params, req, runtime), new ListVpcBindingsResponse({}));
  }

  /**
   * Queries a list of existing VPC connections.
   * @returns ListVpcBindingsResponse
   */
  async listVpcBindings(functionName: string): Promise<ListVpcBindingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listVpcBindingsWithOptions(functionName, headers, runtime);
  }

  /**
   * Publishes a function version.
   * 
   * @param request - PublishFunctionVersionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PublishFunctionVersionResponse
   */
  async publishFunctionVersionWithOptions(functionName: string, request: PublishFunctionVersionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PublishFunctionVersionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "PublishFunctionVersion",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${OpenApiUtil.getEncodeParam(functionName)}/versions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PublishFunctionVersionResponse>(await this.callApi(params, req, runtime), new PublishFunctionVersionResponse({}));
  }

  /**
   * Publishes a function version.
   * 
   * @param request - PublishFunctionVersionRequest
   * @returns PublishFunctionVersionResponse
   */
  async publishFunctionVersion(functionName: string, request: PublishFunctionVersionRequest): Promise<PublishFunctionVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.publishFunctionVersionWithOptions(functionName, request, headers, runtime);
  }

  /**
   * Creates or modifies an asynchronous invocation configuration for a function.
   * 
   * @param request - PutAsyncInvokeConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutAsyncInvokeConfigResponse
   */
  async putAsyncInvokeConfigWithOptions(functionName: string, request: PutAsyncInvokeConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PutAsyncInvokeConfigResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "PutAsyncInvokeConfig",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${OpenApiUtil.getEncodeParam(functionName)}/async-invoke-config`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PutAsyncInvokeConfigResponse>(await this.callApi(params, req, runtime), new PutAsyncInvokeConfigResponse({}));
  }

  /**
   * Creates or modifies an asynchronous invocation configuration for a function.
   * 
   * @param request - PutAsyncInvokeConfigRequest
   * @returns PutAsyncInvokeConfigResponse
   */
  async putAsyncInvokeConfig(functionName: string, request: PutAsyncInvokeConfigRequest): Promise<PutAsyncInvokeConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putAsyncInvokeConfigWithOptions(functionName, request, headers, runtime);
  }

  /**
   * Configures concurrency of a function.
   * 
   * @param request - PutConcurrencyConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutConcurrencyConfigResponse
   */
  async putConcurrencyConfigWithOptions(functionName: string, request: PutConcurrencyConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PutConcurrencyConfigResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "PutConcurrencyConfig",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${OpenApiUtil.getEncodeParam(functionName)}/concurrency`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PutConcurrencyConfigResponse>(await this.callApi(params, req, runtime), new PutConcurrencyConfigResponse({}));
  }

  /**
   * Configures concurrency of a function.
   * 
   * @param request - PutConcurrencyConfigRequest
   * @returns PutConcurrencyConfigResponse
   */
  async putConcurrencyConfig(functionName: string, request: PutConcurrencyConfigRequest): Promise<PutConcurrencyConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putConcurrencyConfigWithOptions(functionName, request, headers, runtime);
  }

  /**
   * Modifies permissions of a layer.
   * 
   * @param request - PutLayerACLRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutLayerACLResponse
   */
  async putLayerACLWithOptions(layerName: string, request: PutLayerACLRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PutLayerACLResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.acl)) {
      query["acl"] = request.acl;
    }

    if (!Util.isUnset(request.public)) {
      query["public"] = request.public;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutLayerACL",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/layers/${OpenApiUtil.getEncodeParam(layerName)}/acl`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<PutLayerACLResponse>(await this.callApi(params, req, runtime), new PutLayerACLResponse({}));
  }

  /**
   * Modifies permissions of a layer.
   * 
   * @param request - PutLayerACLRequest
   * @returns PutLayerACLResponse
   */
  async putLayerACL(layerName: string, request: PutLayerACLRequest): Promise<PutLayerACLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putLayerACLWithOptions(layerName, request, headers, runtime);
  }

  /**
   * Creates provisioned configurations.
   * 
   * @param request - PutProvisionConfigRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutProvisionConfigResponse
   */
  async putProvisionConfigWithOptions(functionName: string, request: PutProvisionConfigRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<PutProvisionConfigResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "PutProvisionConfig",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${OpenApiUtil.getEncodeParam(functionName)}/provision-config`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PutProvisionConfigResponse>(await this.callApi(params, req, runtime), new PutProvisionConfigResponse({}));
  }

  /**
   * Creates provisioned configurations.
   * 
   * @param request - PutProvisionConfigRequest
   * @returns PutProvisionConfigResponse
   */
  async putProvisionConfig(functionName: string, request: PutProvisionConfigRequest): Promise<PutProvisionConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putProvisionConfigWithOptions(functionName, request, headers, runtime);
  }

  /**
   * Stops an asynchronous task.
   * 
   * @param request - StopAsyncTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StopAsyncTaskResponse
   */
  async stopAsyncTaskWithOptions(functionName: string, taskId: string, request: StopAsyncTaskRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<StopAsyncTaskResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopAsyncTask",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${OpenApiUtil.getEncodeParam(functionName)}/async-tasks/${OpenApiUtil.getEncodeParam(taskId)}/stop`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<StopAsyncTaskResponse>(await this.callApi(params, req, runtime), new StopAsyncTaskResponse({}));
  }

  /**
   * Stops an asynchronous task.
   * 
   * @param request - StopAsyncTaskRequest
   * @returns StopAsyncTaskResponse
   */
  async stopAsyncTask(functionName: string, taskId: string, request: StopAsyncTaskRequest): Promise<StopAsyncTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.stopAsyncTaskWithOptions(functionName, taskId, request, headers, runtime);
  }

  /**
   * Adds tags to a resource.
   * 
   * @remarks
   * Tags are used to identify resources. Tags allow you to categorize, search for, and aggregate resources that have the same characteristics from different dimensions. This facilitates resource management. For more information, see [Tag overview](https://help.aliyun.com/document_detail/156983.html).
   * 
   * @param request - TagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns TagResourcesResponse
   */
  async tagResourcesWithOptions(request: TagResourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<TagResourcesResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "TagResources",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/tags-v2`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
  }

  /**
   * Adds tags to a resource.
   * 
   * @remarks
   * Tags are used to identify resources. Tags allow you to categorize, search for, and aggregate resources that have the same characteristics from different dimensions. This facilitates resource management. For more information, see [Tag overview](https://help.aliyun.com/document_detail/156983.html).
   * 
   * @param request - TagResourcesRequest
   * @returns TagResourcesResponse
   */
  async tagResources(request: TagResourcesRequest): Promise<TagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.tagResourcesWithOptions(request, headers, runtime);
  }

  /**
   * Removes tags from a resource.
   * 
   * @param tmpReq - UntagResourcesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UntagResourcesResponse
   */
  async untagResourcesWithOptions(tmpReq: UntagResourcesRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UntagResourcesResponse> {
    Util.validateModel(tmpReq);
    let request = new UntagResourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.resourceId)) {
      request.resourceIdShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceId, "ResourceId", "json");
    }

    if (!Util.isUnset(tmpReq.tagKey)) {
      request.tagKeyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tagKey, "TagKey", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.all)) {
      query["All"] = request.all;
    }

    if (!Util.isUnset(request.resourceIdShrink)) {
      query["ResourceId"] = request.resourceIdShrink;
    }

    if (!Util.isUnset(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!Util.isUnset(request.tagKeyShrink)) {
      query["TagKey"] = request.tagKeyShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UntagResources",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/tags-v2`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
  }

  /**
   * Removes tags from a resource.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.untagResourcesWithOptions(request, headers, runtime);
  }

  /**
   * Updates an alias.
   * 
   * @param request - UpdateAliasRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateAliasResponse
   */
  async updateAliasWithOptions(functionName: string, aliasName: string, request: UpdateAliasRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateAliasResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAlias",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${OpenApiUtil.getEncodeParam(functionName)}/aliases/${OpenApiUtil.getEncodeParam(aliasName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateAliasResponse>(await this.callApi(params, req, runtime), new UpdateAliasResponse({}));
  }

  /**
   * Updates an alias.
   * 
   * @param request - UpdateAliasRequest
   * @returns UpdateAliasResponse
   */
  async updateAlias(functionName: string, aliasName: string, request: UpdateAliasRequest): Promise<UpdateAliasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateAliasWithOptions(functionName, aliasName, request, headers, runtime);
  }

  /**
   * Update a custom domain name.
   * 
   * @param request - UpdateCustomDomainRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateCustomDomainResponse
   */
  async updateCustomDomainWithOptions(domainName: string, request: UpdateCustomDomainRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateCustomDomainResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateCustomDomain",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/custom-domains/${OpenApiUtil.getEncodeParam(domainName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateCustomDomainResponse>(await this.callApi(params, req, runtime), new UpdateCustomDomainResponse({}));
  }

  /**
   * Update a custom domain name.
   * 
   * @param request - UpdateCustomDomainRequest
   * @returns UpdateCustomDomainResponse
   */
  async updateCustomDomain(domainName: string, request: UpdateCustomDomainRequest): Promise<UpdateCustomDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateCustomDomainWithOptions(domainName, request, headers, runtime);
  }

  /**
   * Updates the information about a function.
   * 
   * @param request - UpdateFunctionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateFunctionResponse
   */
  async updateFunctionWithOptions(functionName: string, request: UpdateFunctionRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateFunctionResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateFunction",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${OpenApiUtil.getEncodeParam(functionName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateFunctionResponse>(await this.callApi(params, req, runtime), new UpdateFunctionResponse({}));
  }

  /**
   * Updates the information about a function.
   * 
   * @param request - UpdateFunctionRequest
   * @returns UpdateFunctionResponse
   */
  async updateFunction(functionName: string, request: UpdateFunctionRequest): Promise<UpdateFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateFunctionWithOptions(functionName, request, headers, runtime);
  }

  /**
   * Modifies a trigger.
   * 
   * @param request - UpdateTriggerRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateTriggerResponse
   */
  async updateTriggerWithOptions(functionName: string, triggerName: string, request: UpdateTriggerRequest, headers: {[key: string ]: string}, runtime: $Util.RuntimeOptions): Promise<UpdateTriggerResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTrigger",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${OpenApiUtil.getEncodeParam(functionName)}/triggers/${OpenApiUtil.getEncodeParam(triggerName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateTriggerResponse>(await this.callApi(params, req, runtime), new UpdateTriggerResponse({}));
  }

  /**
   * Modifies a trigger.
   * 
   * @param request - UpdateTriggerRequest
   * @returns UpdateTriggerResponse
   */
  async updateTrigger(functionName: string, triggerName: string, request: UpdateTriggerRequest): Promise<UpdateTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTriggerWithOptions(functionName, triggerName, request, headers, runtime);
  }

}

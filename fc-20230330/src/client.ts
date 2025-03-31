// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';

export class OpenStructDescribeRegionsOutputRegionsRegion extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenStructDescribeRegionsOutputRegions extends $dara.Model {
  region?: OpenStructDescribeRegionsOutputRegionsRegion[];
  static names(): { [key: string]: string } {
    return {
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      region: { 'type': 'array', 'itemType': OpenStructDescribeRegionsOutputRegionsRegion },
    };
  }

  validate() {
    if(Array.isArray(this.region)) {
      $dara.Model.validateArray(this.region);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequestTag extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AccelerationInfo extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Alias extends $dara.Model {
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

  validate() {
    if(this.additionalVersionWeight) {
      $dara.Model.validateMap(this.additionalVersionWeight);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsyncConfig extends $dara.Model {
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

  validate() {
    if(this.destinationConfig && typeof (this.destinationConfig as any).validate === 'function') {
      (this.destinationConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsyncTask extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AsyncTaskEvent extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AuthConfig extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchWindow extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CDNTriggerConfig extends $dara.Model {
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

  validate() {
    if(this.filter) {
      $dara.Model.validateMap(this.filter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CertConfig extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConcurrencyConfig extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAliasInput extends $dara.Model {
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

  validate() {
    if(this.additionalVersionWeight) {
      $dara.Model.validateMap(this.additionalVersionWeight);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomDomainInput extends $dara.Model {
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

  validate() {
    if(this.authConfig && typeof (this.authConfig as any).validate === 'function') {
      (this.authConfig as any).validate();
    }
    if(this.certConfig && typeof (this.certConfig as any).validate === 'function') {
      (this.certConfig as any).validate();
    }
    if(this.routeConfig && typeof (this.routeConfig as any).validate === 'function') {
      (this.routeConfig as any).validate();
    }
    if(this.tlsConfig && typeof (this.tlsConfig as any).validate === 'function') {
      (this.tlsConfig as any).validate();
    }
    if(this.wafConfig && typeof (this.wafConfig as any).validate === 'function') {
      (this.wafConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFunctionInput extends $dara.Model {
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
  disableOndemand?: boolean;
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
      disableOndemand: 'disableOndemand',
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
      disableOndemand: 'boolean',
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

  validate() {
    if(this.code && typeof (this.code as any).validate === 'function') {
      (this.code as any).validate();
    }
    if(this.customContainerConfig && typeof (this.customContainerConfig as any).validate === 'function') {
      (this.customContainerConfig as any).validate();
    }
    if(this.customDNS && typeof (this.customDNS as any).validate === 'function') {
      (this.customDNS as any).validate();
    }
    if(this.customRuntimeConfig && typeof (this.customRuntimeConfig as any).validate === 'function') {
      (this.customRuntimeConfig as any).validate();
    }
    if(this.environmentVariables) {
      $dara.Model.validateMap(this.environmentVariables);
    }
    if(this.gpuConfig && typeof (this.gpuConfig as any).validate === 'function') {
      (this.gpuConfig as any).validate();
    }
    if(this.instanceLifecycleConfig && typeof (this.instanceLifecycleConfig as any).validate === 'function') {
      (this.instanceLifecycleConfig as any).validate();
    }
    if(Array.isArray(this.layers)) {
      $dara.Model.validateArray(this.layers);
    }
    if(this.logConfig && typeof (this.logConfig as any).validate === 'function') {
      (this.logConfig as any).validate();
    }
    if(this.nasConfig && typeof (this.nasConfig as any).validate === 'function') {
      (this.nasConfig as any).validate();
    }
    if(this.ossMountConfig && typeof (this.ossMountConfig as any).validate === 'function') {
      (this.ossMountConfig as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(this.tracingConfig && typeof (this.tracingConfig as any).validate === 'function') {
      (this.tracingConfig as any).validate();
    }
    if(this.vpcConfig && typeof (this.vpcConfig as any).validate === 'function') {
      (this.vpcConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLayerVersionInput extends $dara.Model {
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

  validate() {
    if(this.code && typeof (this.code as any).validate === 'function') {
      (this.code as any).validate();
    }
    if(Array.isArray(this.compatibleRuntime)) {
      $dara.Model.validateArray(this.compatibleRuntime);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTriggerInput extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcBindingInput extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CustomContainerConfig extends $dara.Model {
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

  validate() {
    if(this.accelerationInfo && typeof (this.accelerationInfo as any).validate === 'function') {
      (this.accelerationInfo as any).validate();
    }
    if(Array.isArray(this.command)) {
      $dara.Model.validateArray(this.command);
    }
    if(Array.isArray(this.entrypoint)) {
      $dara.Model.validateArray(this.entrypoint);
    }
    if(this.healthCheckConfig && typeof (this.healthCheckConfig as any).validate === 'function') {
      (this.healthCheckConfig as any).validate();
    }
    if(this.registryConfig && typeof (this.registryConfig as any).validate === 'function') {
      (this.registryConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CustomDNS extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.dnsOptions)) {
      $dara.Model.validateArray(this.dnsOptions);
    }
    if(Array.isArray(this.nameServers)) {
      $dara.Model.validateArray(this.nameServers);
    }
    if(Array.isArray(this.searches)) {
      $dara.Model.validateArray(this.searches);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CustomDomain extends $dara.Model {
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

  validate() {
    if(this.authConfig && typeof (this.authConfig as any).validate === 'function') {
      (this.authConfig as any).validate();
    }
    if(this.certConfig && typeof (this.certConfig as any).validate === 'function') {
      (this.certConfig as any).validate();
    }
    if(this.routeConfig && typeof (this.routeConfig as any).validate === 'function') {
      (this.routeConfig as any).validate();
    }
    if(this.tlsConfig && typeof (this.tlsConfig as any).validate === 'function') {
      (this.tlsConfig as any).validate();
    }
    if(this.wafConfig && typeof (this.wafConfig as any).validate === 'function') {
      (this.wafConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CustomHealthCheckConfig extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CustomRuntimeConfig extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.args)) {
      $dara.Model.validateArray(this.args);
    }
    if(Array.isArray(this.command)) {
      $dara.Model.validateArray(this.command);
    }
    if(this.healthCheckConfig && typeof (this.healthCheckConfig as any).validate === 'function') {
      (this.healthCheckConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DNSOption extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeadLetterQueue extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeliveryOption extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Destination extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DestinationConfig extends $dara.Model {
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

  validate() {
    if(this.onFailure && typeof (this.onFailure as any).validate === 'function') {
      (this.onFailure as any).validate();
    }
    if(this.onSuccess && typeof (this.onSuccess as any).validate === 'function') {
      (this.onSuccess as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EqualRule extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Error extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EventBridgeTriggerConfig extends $dara.Model {
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

  validate() {
    if(this.eventSinkConfig && typeof (this.eventSinkConfig as any).validate === 'function') {
      (this.eventSinkConfig as any).validate();
    }
    if(this.eventSourceConfig && typeof (this.eventSourceConfig as any).validate === 'function') {
      (this.eventSourceConfig as any).validate();
    }
    if(this.runOptions && typeof (this.runOptions as any).validate === 'function') {
      (this.runOptions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EventSinkConfig extends $dara.Model {
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

  validate() {
    if(this.deliveryOption && typeof (this.deliveryOption as any).validate === 'function') {
      (this.deliveryOption as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EventSourceConfig extends $dara.Model {
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

  validate() {
    if(this.eventSourceParameters && typeof (this.eventSourceParameters as any).validate === 'function') {
      (this.eventSourceParameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EventSourceParameters extends $dara.Model {
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

  validate() {
    if(this.sourceDTSParameters && typeof (this.sourceDTSParameters as any).validate === 'function') {
      (this.sourceDTSParameters as any).validate();
    }
    if(this.sourceKafkaParameters && typeof (this.sourceKafkaParameters as any).validate === 'function') {
      (this.sourceKafkaParameters as any).validate();
    }
    if(this.sourceMNSParameters && typeof (this.sourceMNSParameters as any).validate === 'function') {
      (this.sourceMNSParameters as any).validate();
    }
    if(this.sourceMQTTParameters && typeof (this.sourceMQTTParameters as any).validate === 'function') {
      (this.sourceMQTTParameters as any).validate();
    }
    if(this.sourceRabbitMQParameters && typeof (this.sourceRabbitMQParameters as any).validate === 'function') {
      (this.sourceRabbitMQParameters as any).validate();
    }
    if(this.sourceRocketMQParameters && typeof (this.sourceRocketMQParameters as any).validate === 'function') {
      (this.sourceRocketMQParameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Filter extends $dara.Model {
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

  validate() {
    if(this.key && typeof (this.key as any).validate === 'function') {
      (this.key as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Function extends $dara.Model {
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
  disableOndemand?: boolean;
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
      disableOndemand: 'disableOndemand',
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
      disableOndemand: 'boolean',
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

  validate() {
    if(this.customContainerConfig && typeof (this.customContainerConfig as any).validate === 'function') {
      (this.customContainerConfig as any).validate();
    }
    if(this.customDNS && typeof (this.customDNS as any).validate === 'function') {
      (this.customDNS as any).validate();
    }
    if(this.customRuntimeConfig && typeof (this.customRuntimeConfig as any).validate === 'function') {
      (this.customRuntimeConfig as any).validate();
    }
    if(this.environmentVariables) {
      $dara.Model.validateMap(this.environmentVariables);
    }
    if(this.gpuConfig && typeof (this.gpuConfig as any).validate === 'function') {
      (this.gpuConfig as any).validate();
    }
    if(this.instanceLifecycleConfig && typeof (this.instanceLifecycleConfig as any).validate === 'function') {
      (this.instanceLifecycleConfig as any).validate();
    }
    if(Array.isArray(this.layers)) {
      $dara.Model.validateArray(this.layers);
    }
    if(this.logConfig && typeof (this.logConfig as any).validate === 'function') {
      (this.logConfig as any).validate();
    }
    if(this.nasConfig && typeof (this.nasConfig as any).validate === 'function') {
      (this.nasConfig as any).validate();
    }
    if(this.ossMountConfig && typeof (this.ossMountConfig as any).validate === 'function') {
      (this.ossMountConfig as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(this.tracingConfig && typeof (this.tracingConfig as any).validate === 'function') {
      (this.tracingConfig as any).validate();
    }
    if(this.vpcConfig && typeof (this.vpcConfig as any).validate === 'function') {
      (this.vpcConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FunctionLayer extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GPUConfig extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceLifecycleEventsOutput extends $dara.Model {
  events?: InstanceEventItem[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      events: 'events',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': InstanceEventItem },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceTagsOutput extends $dara.Model {
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

  validate() {
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HTTPTrigger extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HTTPTriggerConfig extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.methods)) {
      $dara.Model.validateArray(this.methods);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InputCodeLocation extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstanceEventItem extends $dara.Model {
  children?: InstanceEventItem[];
  level?: string;
  message?: string;
  time?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      children: 'children',
      level: 'level',
      message: 'message',
      time: 'time',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      children: { 'type': 'array', 'itemType': InstanceEventItem },
      level: 'string',
      message: 'string',
      time: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.children)) {
      $dara.Model.validateArray(this.children);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstanceInfo extends $dara.Model {
  createdTimeMs?: number;
  destroyedTimeMs?: number;
  /**
   * @example
   * 1ef6b6ff-7f7b-485e-ab49-501ac681****
   */
  instanceId?: string;
  qualifier?: string;
  status?: string;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      createdTimeMs: 'createdTimeMs',
      destroyedTimeMs: 'destroyedTimeMs',
      instanceId: 'instanceId',
      qualifier: 'qualifier',
      status: 'status',
      versionId: 'versionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTimeMs: 'number',
      destroyedTimeMs: 'number',
      instanceId: 'string',
      qualifier: 'string',
      status: 'string',
      versionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InstanceLifecycleConfig extends $dara.Model {
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

  validate() {
    if(this.initializer && typeof (this.initializer as any).validate === 'function') {
      (this.initializer as any).validate();
    }
    if(this.preStop && typeof (this.preStop as any).validate === 'function') {
      (this.preStop as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class JobConfig extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Key extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Layer extends $dara.Model {
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

  validate() {
    if(this.code && typeof (this.code as any).validate === 'function') {
      (this.code as any).validate();
    }
    if(Array.isArray(this.compatibleRuntime)) {
      $dara.Model.validateArray(this.compatibleRuntime);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LifecycleHook extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAliasesOutput extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.aliases)) {
      $dara.Model.validateArray(this.aliases);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsyncInvokeConfigOutput extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.configs)) {
      $dara.Model.validateArray(this.configs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsyncTaskOutput extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConcurrencyConfigsOutput extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.configs)) {
      $dara.Model.validateArray(this.configs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomDomainOutput extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.customDomains)) {
      $dara.Model.validateArray(this.customDomains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsOutput extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.functions)) {
      $dara.Model.validateArray(this.functions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesOutput extends $dara.Model {
  instances?: InstanceInfo[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instances: 'instances',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': InstanceInfo },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLayerVersionOutput extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.layers)) {
      $dara.Model.validateArray(this.layers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLayersOutput extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.layers)) {
      $dara.Model.validateArray(this.layers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProvisionConfigsOutput extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.provisionConfigs)) {
      $dara.Model.validateArray(this.provisionConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesOutput extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.tagResources)) {
      $dara.Model.validateArray(this.tagResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaggedResourcesOutput extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTriggersOutput extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.triggers)) {
      $dara.Model.validateArray(this.triggers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVersionsOutput extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.versions)) {
      $dara.Model.validateArray(this.versions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcBindingsOutput extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.vpcIds)) {
      $dara.Model.validateArray(this.vpcIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LogConfig extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MNSTopicTriggerConfig extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NASConfig extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.mountPoints)) {
      $dara.Model.validateArray(this.mountPoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NASMountConfig extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OSSMountConfig extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.mountPoints)) {
      $dara.Model.validateArray(this.mountPoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OSSMountPoint extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OSSTriggerConfig extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
    }
    if(this.filter && typeof (this.filter as any).validate === 'function') {
      (this.filter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OutputCodeLocation extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OutputFuncCode extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PathConfig extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.methods)) {
      $dara.Model.validateArray(this.methods);
    }
    if(this.rewriteConfig && typeof (this.rewriteConfig as any).validate === 'function') {
      (this.rewriteConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProvisionConfig extends $dara.Model {
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
   * acs:fc:cn-shanghai:124:functions/myFunction/prod
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

  validate() {
    if(Array.isArray(this.scheduledActions)) {
      $dara.Model.validateArray(this.scheduledActions);
    }
    if(Array.isArray(this.targetTrackingPolicies)) {
      $dara.Model.validateArray(this.targetTrackingPolicies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishVersionInput extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutAsyncInvokeConfigInput extends $dara.Model {
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

  validate() {
    if(this.destinationConfig && typeof (this.destinationConfig as any).validate === 'function') {
      (this.destinationConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutConcurrencyInput extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutProvisionConfigInput extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.scheduledActions)) {
      $dara.Model.validateArray(this.scheduledActions);
    }
    if(Array.isArray(this.targetTrackingPolicies)) {
      $dara.Model.validateArray(this.targetTrackingPolicies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegexRule extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegistryAuthConfig extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegistryCertConfig extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegistryConfig extends $dara.Model {
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

  validate() {
    if(this.authConfig && typeof (this.authConfig as any).validate === 'function') {
      (this.authConfig as any).validate();
    }
    if(this.certConfig && typeof (this.certConfig as any).validate === 'function') {
      (this.certConfig as any).validate();
    }
    if(this.networkConfig && typeof (this.networkConfig as any).validate === 'function') {
      (this.networkConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegistryNetworkConfig extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Resource extends $dara.Model {
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

  validate() {
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RetryStrategy extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RewriteConfig extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.equalRules)) {
      $dara.Model.validateArray(this.equalRules);
    }
    if(Array.isArray(this.regexRules)) {
      $dara.Model.validateArray(this.regexRules);
    }
    if(Array.isArray(this.wildcardRules)) {
      $dara.Model.validateArray(this.wildcardRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RouteConfig extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.routes)) {
      $dara.Model.validateArray(this.routes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunOptions extends $dara.Model {
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

  validate() {
    if(this.batchWindow && typeof (this.batchWindow as any).validate === 'function') {
      (this.batchWindow as any).validate();
    }
    if(this.deadLetterQueue && typeof (this.deadLetterQueue as any).validate === 'function') {
      (this.deadLetterQueue as any).validate();
    }
    if(this.retryStrategy && typeof (this.retryStrategy as any).validate === 'function') {
      (this.retryStrategy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SLSTriggerConfig extends $dara.Model {
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

  validate() {
    if(this.functionParameter) {
      $dara.Model.validateMap(this.functionParameter);
    }
    if(this.jobConfig && typeof (this.jobConfig as any).validate === 'function') {
      (this.jobConfig as any).validate();
    }
    if(this.logConfig && typeof (this.logConfig as any).validate === 'function') {
      (this.logConfig as any).validate();
    }
    if(this.sourceConfig && typeof (this.sourceConfig as any).validate === 'function') {
      (this.sourceConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SLSTriggerLogConfig extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ScheduledAction extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SourceConfig extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SourceDTSParameters extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SourceKafkaParameters extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SourceMNSParameters extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SourceMQTTParameters extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SourceRabbitMQParameters extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SourceRocketMQParameters extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TLSConfig extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.cipherSuites)) {
      $dara.Model.validateArray(this.cipherSuites);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Tag extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResource extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourceInput extends $dara.Model {
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

  validate() {
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesInput extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TargetTrackingPolicy extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TimerTriggerConfig extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TracingConfig extends $dara.Model {
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

  validate() {
    if(this.params) {
      $dara.Model.validateMap(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Trigger extends $dara.Model {
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

  validate() {
    if(this.httpTrigger && typeof (this.httpTrigger as any).validate === 'function') {
      (this.httpTrigger as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAliasInput extends $dara.Model {
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

  validate() {
    if(this.additionalVersionWeight) {
      $dara.Model.validateMap(this.additionalVersionWeight);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomDomainInput extends $dara.Model {
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

  validate() {
    if(this.authConfig && typeof (this.authConfig as any).validate === 'function') {
      (this.authConfig as any).validate();
    }
    if(this.certConfig && typeof (this.certConfig as any).validate === 'function') {
      (this.certConfig as any).validate();
    }
    if(this.routeConfig && typeof (this.routeConfig as any).validate === 'function') {
      (this.routeConfig as any).validate();
    }
    if(this.tlsConfig && typeof (this.tlsConfig as any).validate === 'function') {
      (this.tlsConfig as any).validate();
    }
    if(this.wafConfig && typeof (this.wafConfig as any).validate === 'function') {
      (this.wafConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFunctionInput extends $dara.Model {
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
  disableOndemand?: boolean;
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
      disableOndemand: 'disableOndemand',
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
      disableOndemand: 'boolean',
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

  validate() {
    if(this.code && typeof (this.code as any).validate === 'function') {
      (this.code as any).validate();
    }
    if(this.customContainerConfig && typeof (this.customContainerConfig as any).validate === 'function') {
      (this.customContainerConfig as any).validate();
    }
    if(this.customDNS && typeof (this.customDNS as any).validate === 'function') {
      (this.customDNS as any).validate();
    }
    if(this.customRuntimeConfig && typeof (this.customRuntimeConfig as any).validate === 'function') {
      (this.customRuntimeConfig as any).validate();
    }
    if(this.environmentVariables) {
      $dara.Model.validateMap(this.environmentVariables);
    }
    if(this.gpuConfig && typeof (this.gpuConfig as any).validate === 'function') {
      (this.gpuConfig as any).validate();
    }
    if(this.instanceLifecycleConfig && typeof (this.instanceLifecycleConfig as any).validate === 'function') {
      (this.instanceLifecycleConfig as any).validate();
    }
    if(Array.isArray(this.layers)) {
      $dara.Model.validateArray(this.layers);
    }
    if(this.logConfig && typeof (this.logConfig as any).validate === 'function') {
      (this.logConfig as any).validate();
    }
    if(this.nasConfig && typeof (this.nasConfig as any).validate === 'function') {
      (this.nasConfig as any).validate();
    }
    if(this.ossMountConfig && typeof (this.ossMountConfig as any).validate === 'function') {
      (this.ossMountConfig as any).validate();
    }
    if(this.tracingConfig && typeof (this.tracingConfig as any).validate === 'function') {
      (this.tracingConfig as any).validate();
    }
    if(this.vpcConfig && typeof (this.vpcConfig as any).validate === 'function') {
      (this.vpcConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTriggerInput extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VPCConfig extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.vSwitchIds)) {
      $dara.Model.validateArray(this.vSwitchIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Version extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WAFConfig extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WildcardRule extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenStructDescribeRegionsOutput extends $dara.Model {
  regions?: OpenStructDescribeRegionsOutputRegions;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: OpenStructDescribeRegionsOutputRegions,
    };
  }

  validate() {
    if(this.regions && typeof (this.regions as any).validate === 'function') {
      (this.regions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAliasRequest extends $dara.Model {
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

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAliasResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomDomainRequest extends $dara.Model {
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

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomDomainResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFunctionRequest extends $dara.Model {
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

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFunctionResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLayerVersionRequest extends $dara.Model {
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

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLayerVersionResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTriggerRequest extends $dara.Model {
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

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTriggerResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcBindingRequest extends $dara.Model {
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

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcBindingResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAliasResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAsyncInvokeConfigRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAsyncInvokeConfigResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConcurrencyConfigResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomDomainResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFunctionResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFunctionVersionResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLayerVersionResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProvisionConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The function alias.
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProvisionConfigResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTriggerResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpcBindingResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAliasResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncInvokeConfigRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncInvokeConfigResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncTaskRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAsyncTaskResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetConcurrencyConfigResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomDomainResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionCodeRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionCodeResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLayerVersionResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLayerVersionByArnResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProvisionConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The function alias.
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProvisionConfigResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTriggerResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeFunctionHeaders extends $dara.Model {
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

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeFunctionRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvokeFunctionResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAliasesRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAliasesResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsyncInvokeConfigsRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsyncInvokeConfigsResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsyncTasksRequest extends $dara.Model {
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
   * *   Enqueued: The asynchronous invocation is enqueued and waiting to be executed.
   * *   Dequeued: The asynchronous invocation is dequeued and waiting to be triggered.
   * *   Running: The invocation is being executed.
   * *   Succeeded: The invocation is successful.
   * *   Failed: The invocation fails.
   * *   Stopped: The invocation is terminated.
   * *   Stopping: The invocation is being terminated.
   * *   Expired: The maximum validity period of messages is specified for asynchronous invocation. The invocation is discarded and not executed because the specified maximum validity period of messages expires.
   * *   Invalid: The invocation is invalid and not executed due to specific reasons. For example, the function is deleted.
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAsyncTasksResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConcurrencyConfigsRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConcurrencyConfigsResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomDomainsRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomDomainsResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionVersionsRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionVersionsResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsRequest extends $dara.Model {
  description?: string;
  /**
   * @remarks
   * The version of Function Compute to which the functions belong. Valid values: v3 and v2. v3: only lists functions of Function Compute 3.0. v2: only lists functions of Function Compute 2.0. By default, this parameter is left empty and functions in both Function Compute 3.0 and Function Compute 2.0 are listed.
   * 
   * @example
   * v3
   */
  fcVersion?: string;
  gpuType?: string;
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
  runtime?: string;
  tags?: Tag[];
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      fcVersion: 'fcVersion',
      gpuType: 'gpuType',
      limit: 'limit',
      nextToken: 'nextToken',
      prefix: 'prefix',
      runtime: 'runtime',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      fcVersion: 'string',
      gpuType: 'string',
      limit: 'number',
      nextToken: 'string',
      prefix: 'string',
      runtime: 'string',
      tags: { 'type': 'array', 'itemType': Tag },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsShrinkRequest extends $dara.Model {
  description?: string;
  /**
   * @remarks
   * The version of Function Compute to which the functions belong. Valid values: v3 and v2. v3: only lists functions of Function Compute 3.0. v2: only lists functions of Function Compute 2.0. By default, this parameter is left empty and functions in both Function Compute 3.0 and Function Compute 2.0 are listed.
   * 
   * @example
   * v3
   */
  fcVersion?: string;
  gpuType?: string;
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
  runtime?: string;
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      fcVersion: 'fcVersion',
      gpuType: 'gpuType',
      limit: 'limit',
      nextToken: 'nextToken',
      prefix: 'prefix',
      runtime: 'runtime',
      tagsShrink: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      fcVersion: 'string',
      gpuType: 'string',
      limit: 'number',
      nextToken: 'string',
      prefix: 'string',
      runtime: 'string',
      tagsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesRequest extends $dara.Model {
  endTimeMs?: number;
  instanceIds?: string[];
  instanceStatus?: string[];
  limit?: string;
  /**
   * @remarks
   * The function version or alias.
   * 
   * @example
   * LATEST
   */
  qualifier?: string;
  startKey?: string;
  startTimeMs?: number;
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
      endTimeMs: 'endTimeMs',
      instanceIds: 'instanceIds',
      instanceStatus: 'instanceStatus',
      limit: 'limit',
      qualifier: 'qualifier',
      startKey: 'startKey',
      startTimeMs: 'startTimeMs',
      withAllActive: 'withAllActive',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimeMs: 'number',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      instanceStatus: { 'type': 'array', 'itemType': 'string' },
      limit: 'string',
      qualifier: 'string',
      startKey: 'string',
      startTimeMs: 'number',
      withAllActive: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(Array.isArray(this.instanceStatus)) {
      $dara.Model.validateArray(this.instanceStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesShrinkRequest extends $dara.Model {
  endTimeMs?: number;
  instanceIdsShrink?: string;
  instanceStatusShrink?: string;
  limit?: string;
  /**
   * @remarks
   * The function version or alias.
   * 
   * @example
   * LATEST
   */
  qualifier?: string;
  startKey?: string;
  startTimeMs?: number;
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
      endTimeMs: 'endTimeMs',
      instanceIdsShrink: 'instanceIds',
      instanceStatusShrink: 'instanceStatus',
      limit: 'limit',
      qualifier: 'qualifier',
      startKey: 'startKey',
      startTimeMs: 'startTimeMs',
      withAllActive: 'withAllActive',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimeMs: 'number',
      instanceIdsShrink: 'string',
      instanceStatusShrink: 'string',
      limit: 'string',
      qualifier: 'string',
      startKey: 'string',
      startTimeMs: 'number',
      withAllActive: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLayerVersionsRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLayerVersionsResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLayersRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLayersResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProvisionConfigsRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProvisionConfigsResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesRequest extends $dara.Model {
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
   * The type of the resource.
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

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesShrinkRequest extends $dara.Model {
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
   * The type of the resource.
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTagResourcesResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTriggersRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTriggersResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcBindingsResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishFunctionVersionRequest extends $dara.Model {
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

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishFunctionVersionResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutAsyncInvokeConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The configurations of asynchronous function invocations.
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

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutAsyncInvokeConfigResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutConcurrencyConfigRequest extends $dara.Model {
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

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutConcurrencyConfigResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutLayerACLRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutLayerACLResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutProvisionConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The provisioned configuration information.
   * 
   * This parameter is required.
   */
  body?: PutProvisionConfigInput;
  /**
   * @remarks
   * The function alias.
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

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutProvisionConfigResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAsyncTaskRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopAsyncTaskResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesRequest extends $dara.Model {
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

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesRequest extends $dara.Model {
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

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tagKey)) {
      $dara.Model.validateArray(this.tagKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesShrinkRequest extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UntagResourcesResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAliasRequest extends $dara.Model {
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

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAliasResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomDomainRequest extends $dara.Model {
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

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomDomainResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFunctionRequest extends $dara.Model {
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

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFunctionResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTriggerRequest extends $dara.Model {
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

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTriggerResponse extends $dara.Model {
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

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApiUtil.Config) {
    super(config);
    this._endpointRule = "";
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("fc", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!$dara.isNull(endpoint)) {
      return endpoint;
    }

    if (!$dara.isNull(endpointMap) && !$dara.isNull(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return OpenApiUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  /**
   * 创建函数别名。
   * 
   * @param request - CreateAliasRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateAliasResponse
   */
  async createAliasWithOptions(functionName: string, request: CreateAliasRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateAliasResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateAlias",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/aliases`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateAliasResponse>(await this.callApi(params, req, runtime), new CreateAliasResponse({}));
    } else {
      return $dara.cast<CreateAliasResponse>(await this.execute(params, req, runtime), new CreateAliasResponse({}));
    }

  }

  /**
   * 创建函数别名。
   * 
   * @param request - CreateAliasRequest
   * @returns CreateAliasResponse
   */
  async createAlias(functionName: string, request: CreateAliasRequest): Promise<CreateAliasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async createCustomDomainWithOptions(request: CreateCustomDomainRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateCustomDomainResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateCustomDomainResponse>(await this.callApi(params, req, runtime), new CreateCustomDomainResponse({}));
    } else {
      return $dara.cast<CreateCustomDomainResponse>(await this.execute(params, req, runtime), new CreateCustomDomainResponse({}));
    }

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
    let runtime = new $dara.RuntimeOptions({ });
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
  async createFunctionWithOptions(request: CreateFunctionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateFunctionResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateFunctionResponse>(await this.callApi(params, req, runtime), new CreateFunctionResponse({}));
    } else {
      return $dara.cast<CreateFunctionResponse>(await this.execute(params, req, runtime), new CreateFunctionResponse({}));
    }

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
    let runtime = new $dara.RuntimeOptions({ });
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
  async createLayerVersionWithOptions(layerName: string, request: CreateLayerVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateLayerVersionResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateLayerVersion",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/layers/${$dara.URL.percentEncode(layerName)}/versions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateLayerVersionResponse>(await this.callApi(params, req, runtime), new CreateLayerVersionResponse({}));
    } else {
      return $dara.cast<CreateLayerVersionResponse>(await this.execute(params, req, runtime), new CreateLayerVersionResponse({}));
    }

  }

  /**
   * 创建层版本。
   * 
   * @param request - CreateLayerVersionRequest
   * @returns CreateLayerVersionResponse
   */
  async createLayerVersion(layerName: string, request: CreateLayerVersionRequest): Promise<CreateLayerVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async createTriggerWithOptions(functionName: string, request: CreateTriggerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateTriggerResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTrigger",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/triggers`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateTriggerResponse>(await this.callApi(params, req, runtime), new CreateTriggerResponse({}));
    } else {
      return $dara.cast<CreateTriggerResponse>(await this.execute(params, req, runtime), new CreateTriggerResponse({}));
    }

  }

  /**
   * 创建函数触发器。
   * 
   * @param request - CreateTriggerRequest
   * @returns CreateTriggerResponse
   */
  async createTrigger(functionName: string, request: CreateTriggerRequest): Promise<CreateTriggerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async createVpcBindingWithOptions(functionName: string, request: CreateVpcBindingRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateVpcBindingResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateVpcBinding",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/vpc-bindings`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateVpcBindingResponse>(await this.callApi(params, req, runtime), new CreateVpcBindingResponse({}));
    } else {
      return $dara.cast<CreateVpcBindingResponse>(await this.execute(params, req, runtime), new CreateVpcBindingResponse({}));
    }

  }

  /**
   * Creates a VPC connection.
   * 
   * @param request - CreateVpcBindingRequest
   * @returns CreateVpcBindingResponse
   */
  async createVpcBinding(functionName: string, request: CreateVpcBindingRequest): Promise<CreateVpcBindingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async deleteAliasWithOptions(functionName: string, aliasName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteAliasResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAlias",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/aliases/${$dara.URL.percentEncode(aliasName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteAliasResponse>(await this.callApi(params, req, runtime), new DeleteAliasResponse({}));
    } else {
      return $dara.cast<DeleteAliasResponse>(await this.execute(params, req, runtime), new DeleteAliasResponse({}));
    }

  }

  /**
   * Deletes an alias.
   * @returns DeleteAliasResponse
   */
  async deleteAlias(functionName: string, aliasName: string): Promise<DeleteAliasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async deleteAsyncInvokeConfigWithOptions(functionName: string, request: DeleteAsyncInvokeConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteAsyncInvokeConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteAsyncInvokeConfig",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/async-invoke-config`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteAsyncInvokeConfigResponse>(await this.callApi(params, req, runtime), new DeleteAsyncInvokeConfigResponse({}));
    } else {
      return $dara.cast<DeleteAsyncInvokeConfigResponse>(await this.execute(params, req, runtime), new DeleteAsyncInvokeConfigResponse({}));
    }

  }

  /**
   * Deletes an asynchronous invocation configuration.
   * 
   * @param request - DeleteAsyncInvokeConfigRequest
   * @returns DeleteAsyncInvokeConfigResponse
   */
  async deleteAsyncInvokeConfig(functionName: string, request: DeleteAsyncInvokeConfigRequest): Promise<DeleteAsyncInvokeConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async deleteConcurrencyConfigWithOptions(functionName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteConcurrencyConfigResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteConcurrencyConfig",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/concurrency`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteConcurrencyConfigResponse>(await this.callApi(params, req, runtime), new DeleteConcurrencyConfigResponse({}));
    } else {
      return $dara.cast<DeleteConcurrencyConfigResponse>(await this.execute(params, req, runtime), new DeleteConcurrencyConfigResponse({}));
    }

  }

  /**
   * Deletes a concurrency configuration.
   * @returns DeleteConcurrencyConfigResponse
   */
  async deleteConcurrencyConfig(functionName: string): Promise<DeleteConcurrencyConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async deleteCustomDomainWithOptions(domainName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteCustomDomainResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteCustomDomain",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/custom-domains/${$dara.URL.percentEncode(domainName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteCustomDomainResponse>(await this.callApi(params, req, runtime), new DeleteCustomDomainResponse({}));
    } else {
      return $dara.cast<DeleteCustomDomainResponse>(await this.execute(params, req, runtime), new DeleteCustomDomainResponse({}));
    }

  }

  /**
   * Deletes a custom domain name.
   * @returns DeleteCustomDomainResponse
   */
  async deleteCustomDomain(domainName: string): Promise<DeleteCustomDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async deleteFunctionWithOptions(functionName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteFunctionResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFunction",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteFunctionResponse>(await this.callApi(params, req, runtime), new DeleteFunctionResponse({}));
    } else {
      return $dara.cast<DeleteFunctionResponse>(await this.execute(params, req, runtime), new DeleteFunctionResponse({}));
    }

  }

  /**
   * Deletes a function.
   * @returns DeleteFunctionResponse
   */
  async deleteFunction(functionName: string): Promise<DeleteFunctionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteFunctionWithOptions(functionName, headers, runtime);
  }

  /**
   * http://pre.hhht/#vpc
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteFunctionVersionResponse
   */
  async deleteFunctionVersionWithOptions(functionName: string, versionId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteFunctionVersionResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteFunctionVersion",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/versions/${$dara.URL.percentEncode(versionId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteFunctionVersionResponse>(await this.callApi(params, req, runtime), new DeleteFunctionVersionResponse({}));
    } else {
      return $dara.cast<DeleteFunctionVersionResponse>(await this.execute(params, req, runtime), new DeleteFunctionVersionResponse({}));
    }

  }

  /**
   * http://pre.hhht/#vpc
   * @returns DeleteFunctionVersionResponse
   */
  async deleteFunctionVersion(functionName: string, versionId: string): Promise<DeleteFunctionVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async deleteLayerVersionWithOptions(layerName: string, version: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteLayerVersionResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteLayerVersion",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/layers/${$dara.URL.percentEncode(layerName)}/versions/${$dara.URL.percentEncode(version)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteLayerVersionResponse>(await this.callApi(params, req, runtime), new DeleteLayerVersionResponse({}));
    } else {
      return $dara.cast<DeleteLayerVersionResponse>(await this.execute(params, req, runtime), new DeleteLayerVersionResponse({}));
    }

  }

  /**
   * Deletes a layer version.
   * @returns DeleteLayerVersionResponse
   */
  async deleteLayerVersion(layerName: string, version: string): Promise<DeleteLayerVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async deleteProvisionConfigWithOptions(functionName: string, request: DeleteProvisionConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteProvisionConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteProvisionConfig",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/provision-config`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteProvisionConfigResponse>(await this.callApi(params, req, runtime), new DeleteProvisionConfigResponse({}));
    } else {
      return $dara.cast<DeleteProvisionConfigResponse>(await this.execute(params, req, runtime), new DeleteProvisionConfigResponse({}));
    }

  }

  /**
   * Deletes a provisioned configuration.
   * 
   * @param request - DeleteProvisionConfigRequest
   * @returns DeleteProvisionConfigResponse
   */
  async deleteProvisionConfig(functionName: string, request: DeleteProvisionConfigRequest): Promise<DeleteProvisionConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async deleteTriggerWithOptions(functionName: string, triggerName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteTriggerResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteTrigger",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/triggers/${$dara.URL.percentEncode(triggerName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteTriggerResponse>(await this.callApi(params, req, runtime), new DeleteTriggerResponse({}));
    } else {
      return $dara.cast<DeleteTriggerResponse>(await this.execute(params, req, runtime), new DeleteTriggerResponse({}));
    }

  }

  /**
   * Deletes a trigger.
   * @returns DeleteTriggerResponse
   */
  async deleteTrigger(functionName: string, triggerName: string): Promise<DeleteTriggerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async deleteVpcBindingWithOptions(functionName: string, vpcId: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteVpcBindingResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteVpcBinding",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/vpc-bindings/${$dara.URL.percentEncode(vpcId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteVpcBindingResponse>(await this.callApi(params, req, runtime), new DeleteVpcBindingResponse({}));
    } else {
      return $dara.cast<DeleteVpcBindingResponse>(await this.execute(params, req, runtime), new DeleteVpcBindingResponse({}));
    }

  }

  /**
   * Deletes an access control policy from a specified policy group for a VPC firewall.
   * @returns DeleteVpcBindingResponse
   */
  async deleteVpcBinding(functionName: string, vpcId: string): Promise<DeleteVpcBindingResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async getAliasWithOptions(functionName: string, aliasName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetAliasResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAlias",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/aliases/${$dara.URL.percentEncode(aliasName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetAliasResponse>(await this.callApi(params, req, runtime), new GetAliasResponse({}));
    } else {
      return $dara.cast<GetAliasResponse>(await this.execute(params, req, runtime), new GetAliasResponse({}));
    }

  }

  /**
   * Queries information about an alias.
   * @returns GetAliasResponse
   */
  async getAlias(functionName: string, aliasName: string): Promise<GetAliasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async getAsyncInvokeConfigWithOptions(functionName: string, request: GetAsyncInvokeConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetAsyncInvokeConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAsyncInvokeConfig",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/async-invoke-config`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetAsyncInvokeConfigResponse>(await this.callApi(params, req, runtime), new GetAsyncInvokeConfigResponse({}));
    } else {
      return $dara.cast<GetAsyncInvokeConfigResponse>(await this.execute(params, req, runtime), new GetAsyncInvokeConfigResponse({}));
    }

  }

  /**
   * Gets asynchronous invocation configurations of a function.
   * 
   * @param request - GetAsyncInvokeConfigRequest
   * @returns GetAsyncInvokeConfigResponse
   */
  async getAsyncInvokeConfig(functionName: string, request: GetAsyncInvokeConfigRequest): Promise<GetAsyncInvokeConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async getAsyncTaskWithOptions(functionName: string, taskId: string, request: GetAsyncTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetAsyncTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetAsyncTask",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/async-tasks/${$dara.URL.percentEncode(taskId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetAsyncTaskResponse>(await this.callApi(params, req, runtime), new GetAsyncTaskResponse({}));
    } else {
      return $dara.cast<GetAsyncTaskResponse>(await this.execute(params, req, runtime), new GetAsyncTaskResponse({}));
    }

  }

  /**
   * Queries the information about an asynchronous task.
   * 
   * @param request - GetAsyncTaskRequest
   * @returns GetAsyncTaskResponse
   */
  async getAsyncTask(functionName: string, taskId: string, request: GetAsyncTaskRequest): Promise<GetAsyncTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async getConcurrencyConfigWithOptions(functionName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetConcurrencyConfigResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetConcurrencyConfig",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/concurrency`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetConcurrencyConfigResponse>(await this.callApi(params, req, runtime), new GetConcurrencyConfigResponse({}));
    } else {
      return $dara.cast<GetConcurrencyConfigResponse>(await this.execute(params, req, runtime), new GetConcurrencyConfigResponse({}));
    }

  }

  /**
   * Obtains a concurrency configuration.
   * @returns GetConcurrencyConfigResponse
   */
  async getConcurrencyConfig(functionName: string): Promise<GetConcurrencyConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async getCustomDomainWithOptions(domainName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetCustomDomainResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetCustomDomain",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/custom-domains/${$dara.URL.percentEncode(domainName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetCustomDomainResponse>(await this.callApi(params, req, runtime), new GetCustomDomainResponse({}));
    } else {
      return $dara.cast<GetCustomDomainResponse>(await this.execute(params, req, runtime), new GetCustomDomainResponse({}));
    }

  }

  /**
   * Queries information about a custom domain name.
   * @returns GetCustomDomainResponse
   */
  async getCustomDomain(domainName: string): Promise<GetCustomDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async getFunctionWithOptions(functionName: string, request: GetFunctionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetFunctionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFunction",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetFunctionResponse>(await this.callApi(params, req, runtime), new GetFunctionResponse({}));
    } else {
      return $dara.cast<GetFunctionResponse>(await this.execute(params, req, runtime), new GetFunctionResponse({}));
    }

  }

  /**
   * http://pre.hhht/#vpc
   * 
   * @param request - GetFunctionRequest
   * @returns GetFunctionResponse
   */
  async getFunction(functionName: string, request: GetFunctionRequest): Promise<GetFunctionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async getFunctionCodeWithOptions(functionName: string, request: GetFunctionCodeRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetFunctionCodeResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetFunctionCode",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/code`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetFunctionCodeResponse>(await this.callApi(params, req, runtime), new GetFunctionCodeResponse({}));
    } else {
      return $dara.cast<GetFunctionCodeResponse>(await this.execute(params, req, runtime), new GetFunctionCodeResponse({}));
    }

  }

  /**
   * Queries a code package of a function.
   * 
   * @param request - GetFunctionCodeRequest
   * @returns GetFunctionCodeResponse
   */
  async getFunctionCode(functionName: string, request: GetFunctionCodeRequest): Promise<GetFunctionCodeResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async getLayerVersionWithOptions(layerName: string, version: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetLayerVersionResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLayerVersion",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/layers/${$dara.URL.percentEncode(layerName)}/versions/${$dara.URL.percentEncode(version)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetLayerVersionResponse>(await this.callApi(params, req, runtime), new GetLayerVersionResponse({}));
    } else {
      return $dara.cast<GetLayerVersionResponse>(await this.execute(params, req, runtime), new GetLayerVersionResponse({}));
    }

  }

  /**
   * Queries versions of a layer.
   * @returns GetLayerVersionResponse
   */
  async getLayerVersion(layerName: string, version: string): Promise<GetLayerVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async getLayerVersionByArnWithOptions(arn: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetLayerVersionByArnResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetLayerVersionByArn",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/layerarn/${$dara.URL.percentEncode(arn)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetLayerVersionByArnResponse>(await this.callApi(params, req, runtime), new GetLayerVersionByArnResponse({}));
    } else {
      return $dara.cast<GetLayerVersionByArnResponse>(await this.execute(params, req, runtime), new GetLayerVersionByArnResponse({}));
    }

  }

  /**
   * Obtain version information of a layer by using ARNs.
   * @returns GetLayerVersionByArnResponse
   */
  async getLayerVersionByArn(arn: string): Promise<GetLayerVersionByArnResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async getProvisionConfigWithOptions(functionName: string, request: GetProvisionConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetProvisionConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProvisionConfig",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/provision-config`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetProvisionConfigResponse>(await this.callApi(params, req, runtime), new GetProvisionConfigResponse({}));
    } else {
      return $dara.cast<GetProvisionConfigResponse>(await this.execute(params, req, runtime), new GetProvisionConfigResponse({}));
    }

  }

  /**
   * Queries provisioned configurations.
   * 
   * @param request - GetProvisionConfigRequest
   * @returns GetProvisionConfigResponse
   */
  async getProvisionConfig(functionName: string, request: GetProvisionConfigRequest): Promise<GetProvisionConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async getTriggerWithOptions(functionName: string, triggerName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetTriggerResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTrigger",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/triggers/${$dara.URL.percentEncode(triggerName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetTriggerResponse>(await this.callApi(params, req, runtime), new GetTriggerResponse({}));
    } else {
      return $dara.cast<GetTriggerResponse>(await this.execute(params, req, runtime), new GetTriggerResponse({}));
    }

  }

  /**
   * Queries information about a trigger.
   * @returns GetTriggerResponse
   */
  async getTrigger(functionName: string, triggerName: string): Promise<GetTriggerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async invokeFunctionWithOptions(functionName: string, request: InvokeFunctionRequest, headers: InvokeFunctionHeaders, runtime: $dara.RuntimeOptions): Promise<InvokeFunctionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!$dara.isNull(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!$dara.isNull(headers.xFcAsyncTaskId)) {
      realHeaders["x-fc-async-task-id"] = String(headers.xFcAsyncTaskId);
    }

    if (!$dara.isNull(headers.xFcInvocationType)) {
      realHeaders["x-fc-invocation-type"] = String(headers.xFcInvocationType);
    }

    if (!$dara.isNull(headers.xFcLogType)) {
      realHeaders["x-fc-log-type"] = String(headers.xFcLogType);
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: request.body,
      stream: request.body,
    });
    let params = new $OpenApiUtil.Params({
      action: "InvokeFunction",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/invocations`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "binary",
    });
    let res = new InvokeFunctionResponse({ });
    let tmp = await this.callApi(params, req, runtime);
    if (!$dara.isNull(tmp["body"])) {
      let respBody = Readable.from(tmp["body"]);
      res.body = respBody;
    }

    if (!$dara.isNull(tmp["headers"])) {
      let respHeaders = tmp["headers"];
      res.headers = OpenApiUtil.stringifyMapValue(respHeaders);
    }

    if (!$dara.isNull(tmp["statusCode"])) {
      let statusCode = parseInt(tmp["statusCode"]);
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
    let runtime = new $dara.RuntimeOptions({ });
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
  async listAliasesWithOptions(functionName: string, request: ListAliasesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListAliasesResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.limit)) {
      query["limit"] = request.limit;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.prefix)) {
      query["prefix"] = request.prefix;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAliases",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/aliases`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListAliasesResponse>(await this.callApi(params, req, runtime), new ListAliasesResponse({}));
    } else {
      return $dara.cast<ListAliasesResponse>(await this.execute(params, req, runtime), new ListAliasesResponse({}));
    }

  }

  /**
   * Queries aliases.
   * 
   * @param request - ListAliasesRequest
   * @returns ListAliasesResponse
   */
  async listAliases(functionName: string, request: ListAliasesRequest): Promise<ListAliasesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async listAsyncInvokeConfigsWithOptions(request: ListAsyncInvokeConfigsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListAsyncInvokeConfigsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.functionName)) {
      query["functionName"] = request.functionName;
    }

    if (!$dara.isNull(request.limit)) {
      query["limit"] = request.limit;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListAsyncInvokeConfigsResponse>(await this.callApi(params, req, runtime), new ListAsyncInvokeConfigsResponse({}));
    } else {
      return $dara.cast<ListAsyncInvokeConfigsResponse>(await this.execute(params, req, runtime), new ListAsyncInvokeConfigsResponse({}));
    }

  }

  /**
   * Queries all asynchronous configurations of a function.
   * 
   * @param request - ListAsyncInvokeConfigsRequest
   * @returns ListAsyncInvokeConfigsResponse
   */
  async listAsyncInvokeConfigs(request: ListAsyncInvokeConfigsRequest): Promise<ListAsyncInvokeConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async listAsyncTasksWithOptions(functionName: string, request: ListAsyncTasksRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListAsyncTasksResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.includePayload)) {
      query["includePayload"] = request.includePayload;
    }

    if (!$dara.isNull(request.limit)) {
      query["limit"] = request.limit;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.prefix)) {
      query["prefix"] = request.prefix;
    }

    if (!$dara.isNull(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    if (!$dara.isNull(request.sortOrderByTime)) {
      query["sortOrderByTime"] = request.sortOrderByTime;
    }

    if (!$dara.isNull(request.startedTimeBegin)) {
      query["startedTimeBegin"] = request.startedTimeBegin;
    }

    if (!$dara.isNull(request.startedTimeEnd)) {
      query["startedTimeEnd"] = request.startedTimeEnd;
    }

    if (!$dara.isNull(request.status)) {
      query["status"] = request.status;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListAsyncTasks",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/async-tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListAsyncTasksResponse>(await this.callApi(params, req, runtime), new ListAsyncTasksResponse({}));
    } else {
      return $dara.cast<ListAsyncTasksResponse>(await this.execute(params, req, runtime), new ListAsyncTasksResponse({}));
    }

  }

  /**
   * Lists asynchronous tasks.
   * 
   * @param request - ListAsyncTasksRequest
   * @returns ListAsyncTasksResponse
   */
  async listAsyncTasks(functionName: string, request: ListAsyncTasksRequest): Promise<ListAsyncTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async listConcurrencyConfigsWithOptions(request: ListConcurrencyConfigsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListConcurrencyConfigsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.functionName)) {
      query["functionName"] = request.functionName;
    }

    if (!$dara.isNull(request.limit)) {
      query["limit"] = request.limit;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListConcurrencyConfigsResponse>(await this.callApi(params, req, runtime), new ListConcurrencyConfigsResponse({}));
    } else {
      return $dara.cast<ListConcurrencyConfigsResponse>(await this.execute(params, req, runtime), new ListConcurrencyConfigsResponse({}));
    }

  }

  /**
   * 列出函数并发度配置。
   * 
   * @param request - ListConcurrencyConfigsRequest
   * @returns ListConcurrencyConfigsResponse
   */
  async listConcurrencyConfigs(request: ListConcurrencyConfigsRequest): Promise<ListConcurrencyConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async listCustomDomainsWithOptions(request: ListCustomDomainsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListCustomDomainsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.limit)) {
      query["limit"] = request.limit;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.prefix)) {
      query["prefix"] = request.prefix;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListCustomDomainsResponse>(await this.callApi(params, req, runtime), new ListCustomDomainsResponse({}));
    } else {
      return $dara.cast<ListCustomDomainsResponse>(await this.execute(params, req, runtime), new ListCustomDomainsResponse({}));
    }

  }

  /**
   * Queries custom domain names.
   * 
   * @param request - ListCustomDomainsRequest
   * @returns ListCustomDomainsResponse
   */
  async listCustomDomains(request: ListCustomDomainsRequest): Promise<ListCustomDomainsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async listFunctionVersionsWithOptions(functionName: string, request: ListFunctionVersionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListFunctionVersionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.direction)) {
      query["direction"] = request.direction;
    }

    if (!$dara.isNull(request.limit)) {
      query["limit"] = request.limit;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListFunctionVersions",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/versions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListFunctionVersionsResponse>(await this.callApi(params, req, runtime), new ListFunctionVersionsResponse({}));
    } else {
      return $dara.cast<ListFunctionVersionsResponse>(await this.execute(params, req, runtime), new ListFunctionVersionsResponse({}));
    }

  }

  /**
   * Queries versions of a function.
   * 
   * @param request - ListFunctionVersionsRequest
   * @returns ListFunctionVersionsResponse
   */
  async listFunctionVersions(functionName: string, request: ListFunctionVersionsRequest): Promise<ListFunctionVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFunctionVersionsWithOptions(functionName, request, headers, runtime);
  }

  /**
   * 列出函数。
   * 
   * @param tmpReq - ListFunctionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListFunctionsResponse
   */
  async listFunctionsWithOptions(tmpReq: ListFunctionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListFunctionsResponse> {
    tmpReq.validate();
    let request = new ListFunctionsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "tags", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.description)) {
      query["description"] = request.description;
    }

    if (!$dara.isNull(request.fcVersion)) {
      query["fcVersion"] = request.fcVersion;
    }

    if (!$dara.isNull(request.gpuType)) {
      query["gpuType"] = request.gpuType;
    }

    if (!$dara.isNull(request.limit)) {
      query["limit"] = request.limit;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.prefix)) {
      query["prefix"] = request.prefix;
    }

    if (!$dara.isNull(request.runtime)) {
      query["runtime"] = request.runtime;
    }

    if (!$dara.isNull(request.tagsShrink)) {
      query["tags"] = request.tagsShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListFunctionsResponse>(await this.callApi(params, req, runtime), new ListFunctionsResponse({}));
    } else {
      return $dara.cast<ListFunctionsResponse>(await this.execute(params, req, runtime), new ListFunctionsResponse({}));
    }

  }

  /**
   * 列出函数。
   * 
   * @param request - ListFunctionsRequest
   * @returns ListFunctionsResponse
   */
  async listFunctions(request: ListFunctionsRequest): Promise<ListFunctionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listFunctionsWithOptions(request, headers, runtime);
  }

  /**
   * Queries a list of function instances.
   * 
   * @param tmpReq - ListInstancesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListInstancesResponse
   */
  async listInstancesWithOptions(functionName: string, tmpReq: ListInstancesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListInstancesResponse> {
    tmpReq.validate();
    let request = new ListInstancesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.instanceIds)) {
      request.instanceIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceIds, "instanceIds", "json");
    }

    if (!$dara.isNull(tmpReq.instanceStatus)) {
      request.instanceStatusShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.instanceStatus, "instanceStatus", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.endTimeMs)) {
      query["endTimeMs"] = request.endTimeMs;
    }

    if (!$dara.isNull(request.instanceIdsShrink)) {
      query["instanceIds"] = request.instanceIdsShrink;
    }

    if (!$dara.isNull(request.instanceStatusShrink)) {
      query["instanceStatus"] = request.instanceStatusShrink;
    }

    if (!$dara.isNull(request.limit)) {
      query["limit"] = request.limit;
    }

    if (!$dara.isNull(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    if (!$dara.isNull(request.startKey)) {
      query["startKey"] = request.startKey;
    }

    if (!$dara.isNull(request.startTimeMs)) {
      query["startTimeMs"] = request.startTimeMs;
    }

    if (!$dara.isNull(request.withAllActive)) {
      query["withAllActive"] = request.withAllActive;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListInstances",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/instances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListInstancesResponse>(await this.callApi(params, req, runtime), new ListInstancesResponse({}));
    } else {
      return $dara.cast<ListInstancesResponse>(await this.execute(params, req, runtime), new ListInstancesResponse({}));
    }

  }

  /**
   * Queries a list of function instances.
   * 
   * @param request - ListInstancesRequest
   * @returns ListInstancesResponse
   */
  async listInstances(functionName: string, request: ListInstancesRequest): Promise<ListInstancesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async listLayerVersionsWithOptions(layerName: string, request: ListLayerVersionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListLayerVersionsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.limit)) {
      query["limit"] = request.limit;
    }

    if (!$dara.isNull(request.startVersion)) {
      query["startVersion"] = request.startVersion;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListLayerVersions",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/layers/${$dara.URL.percentEncode(layerName)}/versions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListLayerVersionsResponse>(await this.callApi(params, req, runtime), new ListLayerVersionsResponse({}));
    } else {
      return $dara.cast<ListLayerVersionsResponse>(await this.execute(params, req, runtime), new ListLayerVersionsResponse({}));
    }

  }

  /**
   * Gets a list of layer versions.
   * 
   * @param request - ListLayerVersionsRequest
   * @returns ListLayerVersionsResponse
   */
  async listLayerVersions(layerName: string, request: ListLayerVersionsRequest): Promise<ListLayerVersionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async listLayersWithOptions(request: ListLayersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListLayersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.limit)) {
      query["limit"] = request.limit;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.official)) {
      query["official"] = request.official;
    }

    if (!$dara.isNull(request.prefix)) {
      query["prefix"] = request.prefix;
    }

    if (!$dara.isNull(request.public)) {
      query["public"] = request.public;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListLayersResponse>(await this.callApi(params, req, runtime), new ListLayersResponse({}));
    } else {
      return $dara.cast<ListLayersResponse>(await this.execute(params, req, runtime), new ListLayersResponse({}));
    }

  }

  /**
   * Gets a list of layers.
   * 
   * @param request - ListLayersRequest
   * @returns ListLayersResponse
   */
  async listLayers(request: ListLayersRequest): Promise<ListLayersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async listProvisionConfigsWithOptions(request: ListProvisionConfigsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListProvisionConfigsResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.functionName)) {
      query["functionName"] = request.functionName;
    }

    if (!$dara.isNull(request.limit)) {
      query["limit"] = request.limit;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListProvisionConfigsResponse>(await this.callApi(params, req, runtime), new ListProvisionConfigsResponse({}));
    } else {
      return $dara.cast<ListProvisionConfigsResponse>(await this.execute(params, req, runtime), new ListProvisionConfigsResponse({}));
    }

  }

  /**
   * Queries a list of provisioned configurations.
   * 
   * @param request - ListProvisionConfigsRequest
   * @returns ListProvisionConfigsResponse
   */
  async listProvisionConfigs(request: ListProvisionConfigsRequest): Promise<ListProvisionConfigsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async listTagResourcesWithOptions(tmpReq: ListTagResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListTagResourcesResponse> {
    tmpReq.validate();
    let request = new ListTagResourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resourceId)) {
      request.resourceIdShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceId, "ResourceId", "json");
    }

    if (!$dara.isNull(tmpReq.tag)) {
      request.tagShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tag, "Tag", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.limit)) {
      query["Limit"] = request.limit;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.resourceIdShrink)) {
      query["ResourceId"] = request.resourceIdShrink;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagShrink)) {
      query["Tag"] = request.tagShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListTagResourcesResponse>(await this.callApi(params, req, runtime), new ListTagResourcesResponse({}));
    } else {
      return $dara.cast<ListTagResourcesResponse>(await this.execute(params, req, runtime), new ListTagResourcesResponse({}));
    }

  }

  /**
   * Lists all tagged resources.
   * 
   * @param request - ListTagResourcesRequest
   * @returns ListTagResourcesResponse
   */
  async listTagResources(request: ListTagResourcesRequest): Promise<ListTagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async listTriggersWithOptions(functionName: string, request: ListTriggersRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListTriggersResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.limit)) {
      query["limit"] = request.limit;
    }

    if (!$dara.isNull(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    if (!$dara.isNull(request.prefix)) {
      query["prefix"] = request.prefix;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTriggers",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/triggers`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListTriggersResponse>(await this.callApi(params, req, runtime), new ListTriggersResponse({}));
    } else {
      return $dara.cast<ListTriggersResponse>(await this.execute(params, req, runtime), new ListTriggersResponse({}));
    }

  }

  /**
   * Queries the triggers of a function.
   * 
   * @param request - ListTriggersRequest
   * @returns ListTriggersResponse
   */
  async listTriggers(functionName: string, request: ListTriggersRequest): Promise<ListTriggersResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async listVpcBindingsWithOptions(functionName: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListVpcBindingsResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ListVpcBindings",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/vpc-bindings`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListVpcBindingsResponse>(await this.callApi(params, req, runtime), new ListVpcBindingsResponse({}));
    } else {
      return $dara.cast<ListVpcBindingsResponse>(await this.execute(params, req, runtime), new ListVpcBindingsResponse({}));
    }

  }

  /**
   * Queries a list of existing VPC connections.
   * @returns ListVpcBindingsResponse
   */
  async listVpcBindings(functionName: string): Promise<ListVpcBindingsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async publishFunctionVersionWithOptions(functionName: string, request: PublishFunctionVersionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<PublishFunctionVersionResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PublishFunctionVersion",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/versions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<PublishFunctionVersionResponse>(await this.callApi(params, req, runtime), new PublishFunctionVersionResponse({}));
    } else {
      return $dara.cast<PublishFunctionVersionResponse>(await this.execute(params, req, runtime), new PublishFunctionVersionResponse({}));
    }

  }

  /**
   * Publishes a function version.
   * 
   * @param request - PublishFunctionVersionRequest
   * @returns PublishFunctionVersionResponse
   */
  async publishFunctionVersion(functionName: string, request: PublishFunctionVersionRequest): Promise<PublishFunctionVersionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async putAsyncInvokeConfigWithOptions(functionName: string, request: PutAsyncInvokeConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<PutAsyncInvokeConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutAsyncInvokeConfig",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/async-invoke-config`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<PutAsyncInvokeConfigResponse>(await this.callApi(params, req, runtime), new PutAsyncInvokeConfigResponse({}));
    } else {
      return $dara.cast<PutAsyncInvokeConfigResponse>(await this.execute(params, req, runtime), new PutAsyncInvokeConfigResponse({}));
    }

  }

  /**
   * Creates or modifies an asynchronous invocation configuration for a function.
   * 
   * @param request - PutAsyncInvokeConfigRequest
   * @returns PutAsyncInvokeConfigResponse
   */
  async putAsyncInvokeConfig(functionName: string, request: PutAsyncInvokeConfigRequest): Promise<PutAsyncInvokeConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async putConcurrencyConfigWithOptions(functionName: string, request: PutConcurrencyConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<PutConcurrencyConfigResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutConcurrencyConfig",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/concurrency`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<PutConcurrencyConfigResponse>(await this.callApi(params, req, runtime), new PutConcurrencyConfigResponse({}));
    } else {
      return $dara.cast<PutConcurrencyConfigResponse>(await this.execute(params, req, runtime), new PutConcurrencyConfigResponse({}));
    }

  }

  /**
   * Configures concurrency of a function.
   * 
   * @param request - PutConcurrencyConfigRequest
   * @returns PutConcurrencyConfigResponse
   */
  async putConcurrencyConfig(functionName: string, request: PutConcurrencyConfigRequest): Promise<PutConcurrencyConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async putLayerACLWithOptions(layerName: string, request: PutLayerACLRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<PutLayerACLResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.acl)) {
      query["acl"] = request.acl;
    }

    if (!$dara.isNull(request.public)) {
      query["public"] = request.public;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutLayerACL",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/layers/${$dara.URL.percentEncode(layerName)}/acl`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<PutLayerACLResponse>(await this.callApi(params, req, runtime), new PutLayerACLResponse({}));
    } else {
      return $dara.cast<PutLayerACLResponse>(await this.execute(params, req, runtime), new PutLayerACLResponse({}));
    }

  }

  /**
   * Modifies permissions of a layer.
   * 
   * @param request - PutLayerACLRequest
   * @returns PutLayerACLResponse
   */
  async putLayerACL(layerName: string, request: PutLayerACLRequest): Promise<PutLayerACLResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async putProvisionConfigWithOptions(functionName: string, request: PutProvisionConfigRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<PutProvisionConfigResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutProvisionConfig",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/provision-config`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<PutProvisionConfigResponse>(await this.callApi(params, req, runtime), new PutProvisionConfigResponse({}));
    } else {
      return $dara.cast<PutProvisionConfigResponse>(await this.execute(params, req, runtime), new PutProvisionConfigResponse({}));
    }

  }

  /**
   * Creates provisioned configurations.
   * 
   * @param request - PutProvisionConfigRequest
   * @returns PutProvisionConfigResponse
   */
  async putProvisionConfig(functionName: string, request: PutProvisionConfigRequest): Promise<PutProvisionConfigResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async stopAsyncTaskWithOptions(functionName: string, taskId: string, request: StopAsyncTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<StopAsyncTaskResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "StopAsyncTask",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/async-tasks/${$dara.URL.percentEncode(taskId)}/stop`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StopAsyncTaskResponse>(await this.callApi(params, req, runtime), new StopAsyncTaskResponse({}));
    } else {
      return $dara.cast<StopAsyncTaskResponse>(await this.execute(params, req, runtime), new StopAsyncTaskResponse({}));
    }

  }

  /**
   * Stops an asynchronous task.
   * 
   * @param request - StopAsyncTaskRequest
   * @returns StopAsyncTaskResponse
   */
  async stopAsyncTask(functionName: string, taskId: string, request: StopAsyncTaskRequest): Promise<StopAsyncTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async tagResourcesWithOptions(request: TagResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<TagResourcesResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<TagResourcesResponse>(await this.callApi(params, req, runtime), new TagResourcesResponse({}));
    } else {
      return $dara.cast<TagResourcesResponse>(await this.execute(params, req, runtime), new TagResourcesResponse({}));
    }

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
    let runtime = new $dara.RuntimeOptions({ });
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
  async untagResourcesWithOptions(tmpReq: UntagResourcesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UntagResourcesResponse> {
    tmpReq.validate();
    let request = new UntagResourcesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.resourceId)) {
      request.resourceIdShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resourceId, "ResourceId", "json");
    }

    if (!$dara.isNull(tmpReq.tagKey)) {
      request.tagKeyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tagKey, "TagKey", "json");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.all)) {
      query["All"] = request.all;
    }

    if (!$dara.isNull(request.resourceIdShrink)) {
      query["ResourceId"] = request.resourceIdShrink;
    }

    if (!$dara.isNull(request.resourceType)) {
      query["ResourceType"] = request.resourceType;
    }

    if (!$dara.isNull(request.tagKeyShrink)) {
      query["TagKey"] = request.tagKeyShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
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
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UntagResourcesResponse>(await this.callApi(params, req, runtime), new UntagResourcesResponse({}));
    } else {
      return $dara.cast<UntagResourcesResponse>(await this.execute(params, req, runtime), new UntagResourcesResponse({}));
    }

  }

  /**
   * Removes tags from a resource.
   * 
   * @param request - UntagResourcesRequest
   * @returns UntagResourcesResponse
   */
  async untagResources(request: UntagResourcesRequest): Promise<UntagResourcesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async updateAliasWithOptions(functionName: string, aliasName: string, request: UpdateAliasRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateAliasResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateAlias",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/aliases/${$dara.URL.percentEncode(aliasName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateAliasResponse>(await this.callApi(params, req, runtime), new UpdateAliasResponse({}));
    } else {
      return $dara.cast<UpdateAliasResponse>(await this.execute(params, req, runtime), new UpdateAliasResponse({}));
    }

  }

  /**
   * Updates an alias.
   * 
   * @param request - UpdateAliasRequest
   * @returns UpdateAliasResponse
   */
  async updateAlias(functionName: string, aliasName: string, request: UpdateAliasRequest): Promise<UpdateAliasResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async updateCustomDomainWithOptions(domainName: string, request: UpdateCustomDomainRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateCustomDomainResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateCustomDomain",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/custom-domains/${$dara.URL.percentEncode(domainName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateCustomDomainResponse>(await this.callApi(params, req, runtime), new UpdateCustomDomainResponse({}));
    } else {
      return $dara.cast<UpdateCustomDomainResponse>(await this.execute(params, req, runtime), new UpdateCustomDomainResponse({}));
    }

  }

  /**
   * Update a custom domain name.
   * 
   * @param request - UpdateCustomDomainRequest
   * @returns UpdateCustomDomainResponse
   */
  async updateCustomDomain(domainName: string, request: UpdateCustomDomainRequest): Promise<UpdateCustomDomainResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async updateFunctionWithOptions(functionName: string, request: UpdateFunctionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateFunctionResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateFunction",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateFunctionResponse>(await this.callApi(params, req, runtime), new UpdateFunctionResponse({}));
    } else {
      return $dara.cast<UpdateFunctionResponse>(await this.execute(params, req, runtime), new UpdateFunctionResponse({}));
    }

  }

  /**
   * Updates the information about a function.
   * 
   * @param request - UpdateFunctionRequest
   * @returns UpdateFunctionResponse
   */
  async updateFunction(functionName: string, request: UpdateFunctionRequest): Promise<UpdateFunctionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
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
  async updateTriggerWithOptions(functionName: string, triggerName: string, request: UpdateTriggerRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateTriggerResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateTrigger",
      version: "2023-03-30",
      protocol: "HTTPS",
      pathname: `/2023-03-30/functions/${$dara.URL.percentEncode(functionName)}/triggers/${$dara.URL.percentEncode(triggerName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateTriggerResponse>(await this.callApi(params, req, runtime), new UpdateTriggerResponse({}));
    } else {
      return $dara.cast<UpdateTriggerResponse>(await this.execute(params, req, runtime), new UpdateTriggerResponse({}));
    }

  }

  /**
   * Modifies a trigger.
   * 
   * @param request - UpdateTriggerRequest
   * @returns UpdateTriggerResponse
   */
  async updateTrigger(functionName: string, triggerName: string, request: UpdateTriggerRequest): Promise<UpdateTriggerResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateTriggerWithOptions(functionName, triggerName, request, headers, runtime);
  }

}

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

export class AsyncConfigMeta extends $tea.Model {
  functionName?: string;
  qualifier?: string;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      functionName: 'functionName',
      qualifier: 'qualifier',
      serviceName: 'serviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionName: 'string',
      qualifier: 'string',
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AvailableAZ extends $tea.Model {
  availableAZs?: string;
  static names(): { [key: string]: string } {
    return {
      availableAZs: 'availableAZs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableAZs: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchWindow extends $tea.Model {
  countBasedWindow?: number;
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

export class CDNEventsTriggerConfig extends $tea.Model {
  eventName?: string;
  eventVersion?: string;
  filter?: { [key: string]: string[] };
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
  ossBucketName?: string;
  ossObjectName?: string;
  zipFile?: string;
  static names(): { [key: string]: string } {
    return {
      ossBucketName: 'ossBucketName',
      ossObjectName: 'ossObjectName',
      zipFile: 'zipFile',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
  instanceID?: string;
  webServerMode?: boolean;
  static names(): { [key: string]: string } {
    return {
      accelerationType: 'accelerationType',
      args: 'args',
      command: 'command',
      image: 'image',
      instanceID: 'instanceID',
      webServerMode: 'webServerMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerationType: 'string',
      args: 'string',
      command: 'string',
      image: 'string',
      instanceID: 'string',
      webServerMode: 'boolean',
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
  instanceID?: string;
  webServerMode?: boolean;
  static names(): { [key: string]: string } {
    return {
      accelerationInfo: 'accelerationInfo',
      accelerationType: 'accelerationType',
      args: 'args',
      command: 'command',
      image: 'image',
      instanceID: 'instanceID',
      webServerMode: 'webServerMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accelerationInfo: AccelerationInfo,
      accelerationType: 'string',
      args: 'string',
      command: 'string',
      image: 'string',
      instanceID: 'string',
      webServerMode: 'boolean',
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

export class CustomHealthCheckConfig extends $tea.Model {
  failureThreshold?: number;
  httpGetUrl?: string;
  initialDelaySeconds?: number;
  periodSeconds?: number;
  successThreshold?: number;
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
  static names(): { [key: string]: string } {
    return {
      args: 'args',
      command: 'command',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: { 'type': 'array', 'itemType': 'string' },
      command: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DNSOption extends $tea.Model {
  name?: string;
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
  concurrency?: number;
  eventSchema?: string;
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      concurrency: 'concurrency',
      eventSchema: 'eventSchema',
      mode: 'mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrency: 'number',
      eventSchema: 'string',
      mode: 'string',
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

export class Error extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ErrorInfo extends $tea.Model {
  errorMessage?: string;
  stackTrace?: string;
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'errorMessage',
      stackTrace: 'stackTrace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: 'string',
      stackTrace: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EventBridgeTriggerConfig extends $tea.Model {
  asyncInvocationType?: boolean;
  eventRuleFilterPattern?: string;
  eventSinkConfig?: EventSinkConfig;
  eventSourceConfig?: EventSourceConfig;
  runOptions?: RunOptions;
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

export class HTTPTriggerConfig extends $tea.Model {
  authConfig?: string;
  authType?: string;
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

export class JWTAuthConfig extends $tea.Model {
  blackList?: string;
  claimPassBy?: string[];
  jwks?: string;
  tokenLookup?: string[];
  whiteList?: string[];
  static names(): { [key: string]: string } {
    return {
      blackList: 'blackList',
      claimPassBy: 'claimPassBy',
      jwks: 'jwks',
      tokenLookup: 'tokenLookup',
      whiteList: 'whiteList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackList: 'string',
      claimPassBy: { 'type': 'array', 'itemType': 'string' },
      jwks: 'string',
      tokenLookup: { 'type': 'array', 'itemType': 'string' },
      whiteList: { 'type': 'array', 'itemType': 'string' },
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

export class JobConfig extends $tea.Model {
  maxRetryTime?: number;
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

export class JobLogConfig extends $tea.Model {
  logstore?: string;
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

export class Layer extends $tea.Model {
  acl?: number;
  arn?: string;
  arnV2?: string;
  code?: LayerCode;
  codeChecksum?: string;
  codeSize?: number;
  compatibleRuntime?: string[];
  createTime?: string;
  description?: string;
  layerName?: string;
  license?: string;
  version?: number;
  static names(): { [key: string]: string } {
    return {
      acl: 'acl',
      arn: 'arn',
      arnV2: 'arnV2',
      code: 'code',
      codeChecksum: 'codeChecksum',
      codeSize: 'codeSize',
      compatibleRuntime: 'compatibleRuntime',
      createTime: 'createTime',
      description: 'description',
      layerName: 'layerName',
      license: 'license',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acl: 'number',
      arn: 'string',
      arnV2: 'string',
      code: LayerCode,
      codeChecksum: 'string',
      codeSize: 'number',
      compatibleRuntime: { 'type': 'array', 'itemType': 'string' },
      createTime: 'string',
      description: 'string',
      layerName: 'string',
      license: 'string',
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

export class LogTriggerConfig extends $tea.Model {
  enable?: boolean;
  functionParameter?: { [key: string]: string };
  jobConfig?: JobConfig;
  logConfig?: JobLogConfig;
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
      logConfig: JobLogConfig,
      sourceConfig: SourceConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MeteringConfig extends $tea.Model {
  logConfig?: LogConfig;
  payerId?: string;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      logConfig: 'logConfig',
      payerId: 'payerId',
      role: 'role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logConfig: LogConfig,
      payerId: 'string',
      role: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MnsTopicTriggerConfig extends $tea.Model {
  filterTag?: string;
  notifyContentFormat?: string;
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
  groupId?: number;
  mountPoints?: NASConfigMountPoints[];
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
      mountPoints: { 'type': 'array', 'itemType': NASConfigMountPoints },
      userId: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OSSMountConfig extends $tea.Model {
  mountPoints?: OSSMountConfigMountPoints[];
  static names(): { [key: string]: string } {
    return {
      mountPoints: 'mountPoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPoints: { 'type': 'array', 'itemType': OSSMountConfigMountPoints },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OSSTriggerConfig extends $tea.Model {
  events?: string[];
  filter?: OSSTriggerFilter;
  static names(): { [key: string]: string } {
    return {
      events: 'events',
      filter: 'filter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      events: { 'type': 'array', 'itemType': 'string' },
      filter: OSSTriggerFilter,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OSSTriggerFilter extends $tea.Model {
  key?: OSSTriggerKey;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: OSSTriggerKey,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OSSTriggerKey extends $tea.Model {
  prefix?: string;
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
  rewriteConfig?: RewriteConfig;
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      functionName: 'functionName',
      methods: 'methods',
      path: 'path',
      qualifier: 'qualifier',
      rewriteConfig: 'rewriteConfig',
      serviceName: 'serviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionName: 'string',
      methods: { 'type': 'array', 'itemType': 'string' },
      path: 'string',
      qualifier: 'string',
      rewriteConfig: RewriteConfig,
      serviceName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PolicyItem extends $tea.Model {
  key?: string;
  operator?: string;
  type?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      operator: 'operator',
      type: 'type',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      operator: 'string',
      type: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreFreeze extends $tea.Model {
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

export class PreStop extends $tea.Model {
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

export class RdsTriggerConfig extends $tea.Model {
  concurrency?: number;
  eventFormat?: string;
  retry?: number;
  subscriptionObjects?: string[];
  static names(): { [key: string]: string } {
    return {
      concurrency: 'concurrency',
      eventFormat: 'eventFormat',
      retry: 'retry',
      subscriptionObjects: 'subscriptionObjects',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrency: 'number',
      eventFormat: 'string',
      retry: 'number',
      subscriptionObjects: { 'type': 'array', 'itemType': 'string' },
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

export class RetryStrategy extends $tea.Model {
  maximumEventAgeInSeconds?: number;
  maximumRetryAttempts?: number;
  pushRetryStrategy?: string;
  static names(): { [key: string]: string } {
    return {
      maximumEventAgeInSeconds: 'MaximumEventAgeInSeconds',
      maximumRetryAttempts: 'MaximumRetryAttempts',
      pushRetryStrategy: 'PushRetryStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maximumEventAgeInSeconds: 'number',
      maximumRetryAttempts: 'number',
      pushRetryStrategy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RewriteConfig extends $tea.Model {
  equalRules?: RewriteConfigEqualRules[];
  regexRules?: RewriteConfigRegexRules[];
  wildcardRules?: RewriteConfigWildcardRules[];
  static names(): { [key: string]: string } {
    return {
      equalRules: 'equalRules',
      regexRules: 'regexRules',
      wildcardRules: 'wildcardRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      equalRules: { 'type': 'array', 'itemType': RewriteConfigEqualRules },
      regexRules: { 'type': 'array', 'itemType': RewriteConfigRegexRules },
      wildcardRules: { 'type': 'array', 'itemType': RewriteConfigWildcardRules },
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

export class RoutePolicy extends $tea.Model {
  condition?: string;
  policyItems?: PolicyItem[];
  static names(): { [key: string]: string } {
    return {
      condition: 'condition',
      policyItems: 'policyItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      policyItems: { 'type': 'array', 'itemType': PolicyItem },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunOptions extends $tea.Model {
  batchWindow?: BatchWindow;
  deadLetterQueue?: DeadLetterQueue;
  errorsTolerance?: string;
  maximumTasks?: number;
  mode?: string;
  retryStrategy?: RetryStrategy;
  static names(): { [key: string]: string } {
    return {
      batchWindow: 'batchWindow',
      deadLetterQueue: 'deadLetterQueue',
      errorsTolerance: 'errorsTolerance',
      maximumTasks: 'maximumTasks',
      mode: 'mode',
      retryStrategy: 'retryStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchWindow: BatchWindow,
      deadLetterQueue: DeadLetterQueue,
      errorsTolerance: 'string',
      maximumTasks: 'number',
      mode: 'string',
      retryStrategy: RetryStrategy,
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

export class SourceConfig extends $tea.Model {
  logstore?: string;
  static names(): { [key: string]: string } {
    return {
      logstore: 'logstore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstore: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SourceDTSParameters extends $tea.Model {
  brokerUrl?: string;
  initCheckPoint?: number;
  password?: string;
  regionId?: string;
  sid?: string;
  taskId?: string;
  topic?: string;
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
  consumerGroup?: string;
  instanceId?: string;
  network?: string;
  offsetReset?: string;
  regionId?: string;
  securityGroupId?: string;
  topic?: string;
  vSwitchIds?: string;
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
  isBase64Decode?: boolean;
  queueName?: string;
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
  instanceId?: string;
  regionId?: string;
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
  instanceId?: string;
  queueName?: string;
  regionId?: string;
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
  authType?: string;
  filterSql?: string;
  filterType?: string;
  groupID?: string;
  instanceEndpoint?: string;
  instanceId?: string;
  instanceNetwork?: string;
  instancePassword?: string;
  instanceSecurityGroupId?: string;
  instanceType?: string;
  instanceUsername?: string;
  instanceVSwitchIds?: string;
  instanceVpcId?: string;
  offset?: string;
  regionId?: string;
  tag?: string;
  timestamp?: number;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      authType: 'AuthType',
      filterSql: 'FilterSql',
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
      filterSql: 'string',
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

export class StatefulAsyncInvocation extends $tea.Model {
  alreadyRetriedTimes?: number;
  destinationStatus?: string;
  endTime?: number;
  events?: StatefulAsyncInvocationEvent[];
  functionName?: string;
  instanceId?: string;
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
      events: 'events',
      functionName: 'functionName',
      instanceId: 'instanceId',
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
      events: { 'type': 'array', 'itemType': StatefulAsyncInvocationEvent },
      functionName: 'string',
      instanceId: 'string',
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

export class StatefulAsyncInvocationEvent extends $tea.Model {
  eventDetail?: string;
  eventId?: number;
  status?: string;
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

export class TLSConfig extends $tea.Model {
  cipherSuites?: string[];
  maxVersion?: string;
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

export class TimeTriggerConfig extends $tea.Model {
  cronExpression?: string;
  enable?: boolean;
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
  domainName?: string;
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
  urlInternet?: string;
  urlIntranet?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      domainName: 'domainName',
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
      urlInternet: 'urlInternet',
      urlIntranet: 'urlIntranet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      domainName: 'string',
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
      urlInternet: 'string',
      urlIntranet: 'string',
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

export class VendorConfig extends $tea.Model {
  meteringConfig?: MeteringConfig;
  static names(): { [key: string]: string } {
    return {
      meteringConfig: 'meteringConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      meteringConfig: MeteringConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WAFConfig extends $tea.Model {
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

export class ClaimGPUInstanceHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClaimGPUInstanceRequest extends $tea.Model {
  diskPerformanceLevel?: string;
  diskSizeGigabytes?: string;
  imageId?: string;
  instanceType?: string;
  internetBandwidthOut?: string;
  password?: string;
  role?: string;
  sgId?: string;
  sourceCidrIp?: string;
  tcpPortRange?: string[];
  udpPortRange?: string[];
  vpcId?: string;
  vswId?: string;
  static names(): { [key: string]: string } {
    return {
      diskPerformanceLevel: 'diskPerformanceLevel',
      diskSizeGigabytes: 'diskSizeGigabytes',
      imageId: 'imageId',
      instanceType: 'instanceType',
      internetBandwidthOut: 'internetBandwidthOut',
      password: 'password',
      role: 'role',
      sgId: 'sgId',
      sourceCidrIp: 'sourceCidrIp',
      tcpPortRange: 'tcpPortRange',
      udpPortRange: 'udpPortRange',
      vpcId: 'vpcId',
      vswId: 'vswId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diskPerformanceLevel: 'string',
      diskSizeGigabytes: 'string',
      imageId: 'string',
      instanceType: 'string',
      internetBandwidthOut: 'string',
      password: 'string',
      role: 'string',
      sgId: 'string',
      sourceCidrIp: 'string',
      tcpPortRange: { 'type': 'array', 'itemType': 'string' },
      udpPortRange: { 'type': 'array', 'itemType': 'string' },
      vpcId: 'string',
      vswId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClaimGPUInstanceResponseBody extends $tea.Model {
  createdTime?: string;
  instanceId?: string;
  publicIp?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      instanceId: 'instanceId',
      publicIp: 'publicIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      instanceId: 'string',
      publicIp: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClaimGPUInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ClaimGPUInstanceResponseBody;
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
      body: ClaimGPUInstanceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAliasHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
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
  resolvePolicy?: string;
  routePolicy?: RoutePolicy;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      additionalVersionWeight: 'additionalVersionWeight',
      aliasName: 'aliasName',
      description: 'description',
      resolvePolicy: 'resolvePolicy',
      routePolicy: 'routePolicy',
      versionId: 'versionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalVersionWeight: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      aliasName: 'string',
      description: 'string',
      resolvePolicy: 'string',
      routePolicy: RoutePolicy,
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
  statusCode: number;
  body: CreateAliasResponseBody;
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
      body: CreateAliasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomDomainHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
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
  tlsConfig?: TLSConfig;
  wafConfig?: WAFConfig;
  static names(): { [key: string]: string } {
    return {
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

export class CreateCustomDomainResponseBody extends $tea.Model {
  accountId?: string;
  apiVersion?: string;
  certConfig?: CertConfig;
  createdTime?: string;
  domainName?: string;
  lastModifiedTime?: string;
  protocol?: string;
  routeConfig?: RouteConfig;
  tlsConfig?: TLSConfig;
  wafConfig?: WAFConfig;
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
      tlsConfig: 'tlsConfig',
      wafConfig: 'wafConfig',
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
      tlsConfig: TLSConfig,
      wafConfig: WAFConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateCustomDomainResponseBody;
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
      body: CreateCustomDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFunctionHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xFcAccountId?: string;
  xFcCodeChecksum?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcCodeChecksum: 'X-Fc-Code-Checksum',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAccountId: 'string',
      xFcCodeChecksum: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFunctionRequest extends $tea.Model {
  caPort?: number;
  code?: Code;
  cpu?: number;
  customContainerConfig?: CustomContainerConfig;
  customDNS?: CustomDNS;
  customHealthCheckConfig?: CustomHealthCheckConfig;
  customRuntimeConfig?: CustomRuntimeConfig;
  description?: string;
  diskSize?: number;
  environmentVariables?: { [key: string]: string };
  functionName?: string;
  gpuMemorySize?: number;
  handler?: string;
  initializationTimeout?: number;
  initializer?: string;
  instanceConcurrency?: number;
  instanceLifecycleConfig?: InstanceLifecycleConfig;
  instanceSoftConcurrency?: number;
  instanceType?: string;
  layers?: string[];
  memorySize?: number;
  runtime?: string;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      caPort: 'caPort',
      code: 'code',
      cpu: 'cpu',
      customContainerConfig: 'customContainerConfig',
      customDNS: 'customDNS',
      customHealthCheckConfig: 'customHealthCheckConfig',
      customRuntimeConfig: 'customRuntimeConfig',
      description: 'description',
      diskSize: 'diskSize',
      environmentVariables: 'environmentVariables',
      functionName: 'functionName',
      gpuMemorySize: 'gpuMemorySize',
      handler: 'handler',
      initializationTimeout: 'initializationTimeout',
      initializer: 'initializer',
      instanceConcurrency: 'instanceConcurrency',
      instanceLifecycleConfig: 'instanceLifecycleConfig',
      instanceSoftConcurrency: 'instanceSoftConcurrency',
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
      cpu: 'number',
      customContainerConfig: CustomContainerConfig,
      customDNS: CustomDNS,
      customHealthCheckConfig: CustomHealthCheckConfig,
      customRuntimeConfig: CustomRuntimeConfig,
      description: 'string',
      diskSize: 'number',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      functionName: 'string',
      gpuMemorySize: 'number',
      handler: 'string',
      initializationTimeout: 'number',
      initializer: 'string',
      instanceConcurrency: 'number',
      instanceLifecycleConfig: InstanceLifecycleConfig,
      instanceSoftConcurrency: 'number',
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
  cpu?: number;
  createdTime?: string;
  customContainerConfig?: CustomContainerConfig;
  customDNS?: CustomDNS;
  customHealthCheckConfig?: CustomHealthCheckConfig;
  customRuntimeConfig?: CustomRuntimeConfig;
  description?: string;
  diskSize?: number;
  environmentVariables?: { [key: string]: string };
  functionId?: string;
  functionName?: string;
  gpuMemorySize?: number;
  handler?: string;
  initializationTimeout?: number;
  initializer?: string;
  instanceConcurrency?: number;
  instanceLifecycleConfig?: InstanceLifecycleConfig;
  instanceSoftConcurrency?: number;
  instanceType?: string;
  lastModifiedTime?: string;
  layers?: string[];
  layersArnV2?: string[];
  memorySize?: number;
  runtime?: string;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      caPort: 'caPort',
      codeChecksum: 'codeChecksum',
      codeSize: 'codeSize',
      cpu: 'cpu',
      createdTime: 'createdTime',
      customContainerConfig: 'customContainerConfig',
      customDNS: 'customDNS',
      customHealthCheckConfig: 'customHealthCheckConfig',
      customRuntimeConfig: 'customRuntimeConfig',
      description: 'description',
      diskSize: 'diskSize',
      environmentVariables: 'environmentVariables',
      functionId: 'functionId',
      functionName: 'functionName',
      gpuMemorySize: 'gpuMemorySize',
      handler: 'handler',
      initializationTimeout: 'initializationTimeout',
      initializer: 'initializer',
      instanceConcurrency: 'instanceConcurrency',
      instanceLifecycleConfig: 'instanceLifecycleConfig',
      instanceSoftConcurrency: 'instanceSoftConcurrency',
      instanceType: 'instanceType',
      lastModifiedTime: 'lastModifiedTime',
      layers: 'layers',
      layersArnV2: 'layersArnV2',
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
      cpu: 'number',
      createdTime: 'string',
      customContainerConfig: CustomContainerConfig,
      customDNS: CustomDNS,
      customHealthCheckConfig: CustomHealthCheckConfig,
      customRuntimeConfig: CustomRuntimeConfig,
      description: 'string',
      diskSize: 'number',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      functionId: 'string',
      functionName: 'string',
      gpuMemorySize: 'number',
      handler: 'string',
      initializationTimeout: 'number',
      initializer: 'string',
      instanceConcurrency: 'number',
      instanceLifecycleConfig: InstanceLifecycleConfig,
      instanceSoftConcurrency: 'number',
      instanceType: 'string',
      lastModifiedTime: 'string',
      layers: { 'type': 'array', 'itemType': 'string' },
      layersArnV2: { 'type': 'array', 'itemType': 'string' },
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
  statusCode: number;
  body: CreateFunctionResponseBody;
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
      body: CreateFunctionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLayerVersionHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
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
  statusCode: number;
  body: CreateLayerVersionResponseBody;
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
      body: CreateLayerVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
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
  ossMountConfig?: OSSMountConfig;
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
      ossMountConfig: 'ossMountConfig',
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
      ossMountConfig: OSSMountConfig,
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
  ossMountConfig?: OSSMountConfig;
  role?: string;
  serviceId?: string;
  serviceName?: string;
  tracingConfig?: TracingConfig;
  useSLRAuthentication?: boolean;
  vpcConfig?: VPCConfig;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      description: 'description',
      internetAccess: 'internetAccess',
      lastModifiedTime: 'lastModifiedTime',
      logConfig: 'logConfig',
      nasConfig: 'nasConfig',
      ossMountConfig: 'ossMountConfig',
      role: 'role',
      serviceId: 'serviceId',
      serviceName: 'serviceName',
      tracingConfig: 'tracingConfig',
      useSLRAuthentication: 'useSLRAuthentication',
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
      ossMountConfig: OSSMountConfig,
      role: 'string',
      serviceId: 'string',
      serviceName: 'string',
      tracingConfig: TracingConfig,
      useSLRAuthentication: 'boolean',
      vpcConfig: VPCConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateServiceResponseBody;
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

export class CreateTriggerHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
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
  domainName?: string;
  invocationRole?: string;
  lastModifiedTime?: string;
  qualifier?: string;
  sourceArn?: string;
  triggerConfig?: string;
  triggerId?: string;
  triggerName?: string;
  triggerType?: string;
  urlInternet?: string;
  urlIntranet?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      description: 'description',
      domainName: 'domainName',
      invocationRole: 'invocationRole',
      lastModifiedTime: 'lastModifiedTime',
      qualifier: 'qualifier',
      sourceArn: 'sourceArn',
      triggerConfig: 'triggerConfig',
      triggerId: 'triggerId',
      triggerName: 'triggerName',
      triggerType: 'triggerType',
      urlInternet: 'urlInternet',
      urlIntranet: 'urlIntranet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      domainName: 'string',
      invocationRole: 'string',
      lastModifiedTime: 'string',
      qualifier: 'string',
      sourceArn: 'string',
      triggerConfig: 'string',
      triggerId: 'string',
      triggerName: 'string',
      triggerType: 'string',
      urlInternet: 'string',
      urlIntranet: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTriggerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateTriggerResponseBody;
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
      body: CreateTriggerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVpcBindingHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
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
  statusCode: number;
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

export class DeleteAliasHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  ifMatch?: string;
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      ifMatch: 'If-Match',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      ifMatch: 'string',
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteAliasResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
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

export class DeleteCustomDomainHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteCustomDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
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

export class DeleteFunctionHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  ifMatch?: string;
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      ifMatch: 'If-Match',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      ifMatch: 'string',
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFunctionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
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

export class DeleteFunctionAsyncInvokeConfigHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
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
  statusCode: number;
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

export class DeleteFunctionOnDemandConfigHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  ifMatch?: string;
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      ifMatch: 'If-Match',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      ifMatch: 'string',
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
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
  statusCode: number;
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

export class DeleteLayerVersionHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLayerVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
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

export class DeleteServiceHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  ifMatch?: string;
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      ifMatch: 'If-Match',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      ifMatch: 'string',
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
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

export class DeleteServiceVersionHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteServiceVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
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

export class DeleteTriggerHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  ifMatch?: string;
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      ifMatch: 'If-Match',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      ifMatch: 'string',
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTriggerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
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

export class DeleteVpcBindingHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteVpcBindingResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
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

export class DeregisterEventSourceHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
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
  statusCode: number;
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

export class GetAccountSettingsHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountSettingsResponseBody extends $tea.Model {
  availableAZs?: string[];
  defaultRole?: string;
  static names(): { [key: string]: string } {
    return {
      availableAZs: 'availableAZs',
      defaultRole: 'defaultRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableAZs: { 'type': 'array', 'itemType': 'string' },
      defaultRole: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAccountSettingsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAccountSettingsResponseBody;
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
      body: GetAccountSettingsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAliasHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
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
  resolvePolicy?: string;
  routePolicy?: RoutePolicy;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      additionalVersionWeight: 'additionalVersionWeight',
      aliasName: 'aliasName',
      createdTime: 'createdTime',
      description: 'description',
      lastModifiedTime: 'lastModifiedTime',
      resolvePolicy: 'resolvePolicy',
      routePolicy: 'routePolicy',
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
      resolvePolicy: 'string',
      routePolicy: RoutePolicy,
      versionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAliasResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetAliasResponseBody;
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
      body: GetAliasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomDomainHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
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
  tlsConfig?: TLSConfig;
  wafConfig?: WAFConfig;
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
      tlsConfig: 'tlsConfig',
      wafConfig: 'wafConfig',
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
      tlsConfig: TLSConfig,
      wafConfig: WAFConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCustomDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetCustomDomainResponseBody;
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
      body: GetCustomDomainResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
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
  cpu?: number;
  createdTime?: string;
  customContainerConfig?: CustomContainerConfigInfo;
  customDNS?: CustomDNS;
  customHealthCheckConfig?: CustomHealthCheckConfig;
  customRuntimeConfig?: CustomRuntimeConfig;
  description?: string;
  diskSize?: number;
  environmentVariables?: { [key: string]: string };
  functionId?: string;
  functionName?: string;
  gpuMemorySize?: number;
  handler?: string;
  initializationTimeout?: number;
  initializer?: string;
  instanceConcurrency?: number;
  instanceLifecycleConfig?: InstanceLifecycleConfig;
  instanceSoftConcurrency?: number;
  instanceType?: string;
  lastModifiedTime?: string;
  layers?: string[];
  layersArnV2?: string[];
  memorySize?: number;
  runtime?: string;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      caPort: 'caPort',
      codeChecksum: 'codeChecksum',
      codeSize: 'codeSize',
      cpu: 'cpu',
      createdTime: 'createdTime',
      customContainerConfig: 'customContainerConfig',
      customDNS: 'customDNS',
      customHealthCheckConfig: 'customHealthCheckConfig',
      customRuntimeConfig: 'customRuntimeConfig',
      description: 'description',
      diskSize: 'diskSize',
      environmentVariables: 'environmentVariables',
      functionId: 'functionId',
      functionName: 'functionName',
      gpuMemorySize: 'gpuMemorySize',
      handler: 'handler',
      initializationTimeout: 'initializationTimeout',
      initializer: 'initializer',
      instanceConcurrency: 'instanceConcurrency',
      instanceLifecycleConfig: 'instanceLifecycleConfig',
      instanceSoftConcurrency: 'instanceSoftConcurrency',
      instanceType: 'instanceType',
      lastModifiedTime: 'lastModifiedTime',
      layers: 'layers',
      layersArnV2: 'layersArnV2',
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
      cpu: 'number',
      createdTime: 'string',
      customContainerConfig: CustomContainerConfigInfo,
      customDNS: CustomDNS,
      customHealthCheckConfig: CustomHealthCheckConfig,
      customRuntimeConfig: CustomRuntimeConfig,
      description: 'string',
      diskSize: 'number',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      functionId: 'string',
      functionName: 'string',
      gpuMemorySize: 'number',
      handler: 'string',
      initializationTimeout: 'number',
      initializer: 'string',
      instanceConcurrency: 'number',
      instanceLifecycleConfig: InstanceLifecycleConfig,
      instanceSoftConcurrency: 'number',
      instanceType: 'string',
      lastModifiedTime: 'string',
      layers: { 'type': 'array', 'itemType': 'string' },
      layersArnV2: { 'type': 'array', 'itemType': 'string' },
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
  statusCode: number;
  body: GetFunctionResponseBody;
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
      body: GetFunctionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionAsyncInvokeConfigHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
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
  statusCode: number;
  body: GetFunctionAsyncInvokeConfigResponseBody;
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
      body: GetFunctionAsyncInvokeConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionCodeHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
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
  statusCode: number;
  body: GetFunctionCodeResponseBody;
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
      body: GetFunctionCodeResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionOnDemandConfigHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
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
  statusCode: number;
  body: GetFunctionOnDemandConfigResponseBody;
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
      body: GetFunctionOnDemandConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLayerVersionHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLayerVersionResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: Layer;
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

export class GetProvisionConfigHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProvisionConfigRequest extends $tea.Model {
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

export class GetProvisionConfigResponseBody extends $tea.Model {
  alwaysAllocateCPU?: boolean;
  current?: number;
  currentError?: string;
  resource?: string;
  scheduledActions?: ScheduledActions[];
  target?: number;
  targetTrackingPolicies?: TargetTrackingPolicies[];
  static names(): { [key: string]: string } {
    return {
      alwaysAllocateCPU: 'alwaysAllocateCPU',
      current: 'current',
      currentError: 'currentError',
      resource: 'resource',
      scheduledActions: 'scheduledActions',
      target: 'target',
      targetTrackingPolicies: 'targetTrackingPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alwaysAllocateCPU: 'boolean',
      current: 'number',
      currentError: 'string',
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
  statusCode: number;
  body: GetProvisionConfigResponseBody;
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
      body: GetProvisionConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceTagsHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
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
  statusCode: number;
  body: GetResourceTagsResponseBody;
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
      body: GetResourceTagsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
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
  ossMountConfig?: OSSMountConfig;
  role?: string;
  serviceId?: string;
  serviceName?: string;
  tracingConfig?: TracingConfig;
  useSLRAuthentication?: boolean;
  vpcConfig?: VPCConfig;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      description: 'description',
      internetAccess: 'internetAccess',
      lastModifiedTime: 'lastModifiedTime',
      logConfig: 'logConfig',
      nasConfig: 'nasConfig',
      ossMountConfig: 'ossMountConfig',
      role: 'role',
      serviceId: 'serviceId',
      serviceName: 'serviceName',
      tracingConfig: 'tracingConfig',
      useSLRAuthentication: 'useSLRAuthentication',
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
      ossMountConfig: OSSMountConfig,
      role: 'string',
      serviceId: 'string',
      serviceName: 'string',
      tracingConfig: TracingConfig,
      useSLRAuthentication: 'boolean',
      vpcConfig: VPCConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetServiceResponseBody;
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
      body: GetServiceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStatefulAsyncInvocationHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xFcAccountId?: string;
  xFcCodeChecksum?: string;
  xFcDate?: string;
  xFcInvocationType?: string;
  xFcLogType?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcCodeChecksum: 'X-Fc-Code-Checksum',
      xFcDate: 'X-Fc-Date',
      xFcInvocationType: 'X-Fc-Invocation-Type',
      xFcLogType: 'X-Fc-Log-Type',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAccountId: 'string',
      xFcCodeChecksum: 'string',
      xFcDate: 'string',
      xFcInvocationType: 'string',
      xFcLogType: 'string',
      xFcTraceId: 'string',
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
  statusCode: number;
  body: StatefulAsyncInvocation;
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
      body: StatefulAsyncInvocation,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTriggerHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTriggerResponseBody extends $tea.Model {
  createdTime?: string;
  description?: string;
  domainName?: string;
  invocationRole?: string;
  lastModifiedTime?: string;
  qualifier?: string;
  sourceArn?: string;
  triggerConfig?: string;
  triggerId?: string;
  triggerName?: string;
  triggerType?: string;
  urlInternet?: string;
  urlIntranet?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      description: 'description',
      domainName: 'domainName',
      invocationRole: 'invocationRole',
      lastModifiedTime: 'lastModifiedTime',
      qualifier: 'qualifier',
      sourceArn: 'sourceArn',
      triggerConfig: 'triggerConfig',
      triggerId: 'triggerId',
      triggerName: 'triggerName',
      triggerType: 'triggerType',
      urlInternet: 'urlInternet',
      urlIntranet: 'urlIntranet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      domainName: 'string',
      invocationRole: 'string',
      lastModifiedTime: 'string',
      qualifier: 'string',
      sourceArn: 'string',
      triggerConfig: 'string',
      triggerId: 'string',
      triggerName: 'string',
      triggerType: 'string',
      urlInternet: 'string',
      urlIntranet: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTriggerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTriggerResponseBody;
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
  xFcDate?: string;
  xFcInvocationType?: string;
  xFcLogType?: string;
  xFcStatefulAsyncInvocationEnable?: string;
  xFcStatefulAsyncInvocationId?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcInvocationType: 'X-Fc-Invocation-Type',
      xFcLogType: 'X-Fc-Log-Type',
      xFcStatefulAsyncInvocationEnable: 'X-Fc-Stateful-Async-Invocation-Enable',
      xFcStatefulAsyncInvocationId: 'X-Fc-Stateful-Async-Invocation-Id',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcInvocationType: 'string',
      xFcLogType: 'string',
      xFcStatefulAsyncInvocationEnable: 'string',
      xFcStatefulAsyncInvocationId: 'string',
      xFcTraceId: 'string',
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
  statusCode: number;
  body: Buffer;
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
      body: 'Buffer',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAliasesHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
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
  statusCode: number;
  body: ListAliasesResponseBody;
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
      body: ListAliasesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomDomainsHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
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
  statusCode: number;
  body: ListCustomDomainsResponseBody;
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
      body: ListCustomDomainsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEventSourcesHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
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
  statusCode: number;
  body: ListEventSourcesResponseBody;
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
      body: ListEventSourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionAsyncInvokeConfigsHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xFcAccountId?: string;
  xFcCodeChecksum?: string;
  xFcDate?: string;
  xFcInvocationType?: string;
  xFcLogType?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcCodeChecksum: 'X-Fc-Code-Checksum',
      xFcDate: 'X-Fc-Date',
      xFcInvocationType: 'X-Fc-Invocation-Type',
      xFcLogType: 'X-Fc-Log-Type',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAccountId: 'string',
      xFcCodeChecksum: 'string',
      xFcDate: 'string',
      xFcInvocationType: 'string',
      xFcLogType: 'string',
      xFcTraceId: 'string',
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
  statusCode: number;
  body: ListFunctionAsyncInvokeConfigsResponseBody;
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
      body: ListFunctionAsyncInvokeConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionsHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
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
  statusCode: number;
  body: ListFunctionsResponseBody;
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
      body: ListFunctionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xFcAccountId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAccountId: 'X-Fc-Account-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAccountId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesRequest extends $tea.Model {
  instanceIds?: string[];
  limit?: number;
  qualifier?: string;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'instanceIds',
      limit: 'limit',
      qualifier: 'qualifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      limit: 'number',
      qualifier: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBody extends $tea.Model {
  instances?: ListInstancesResponseBodyInstances[];
  static names(): { [key: string]: string } {
    return {
      instances: 'instances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instances: { 'type': 'array', 'itemType': ListInstancesResponseBodyInstances },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListInstancesResponseBody;
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
      body: ListInstancesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLayerVersionsHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
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
  statusCode: number;
  body: ListLayerVersionsResponseBody;
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
      body: ListLayerVersionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLayersHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLayersRequest extends $tea.Model {
  limit?: number;
  nextToken?: string;
  official?: boolean;
  prefix?: string;
  public?: boolean;
  startKey?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      nextToken: 'nextToken',
      official: 'official',
      prefix: 'prefix',
      public: 'public',
      startKey: 'startKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      nextToken: 'string',
      official: 'boolean',
      prefix: 'string',
      public: 'boolean',
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
  statusCode: number;
  body: ListLayersResponseBody;
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
      body: ListLayersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOnDemandConfigsHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
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
  statusCode: number;
  body: ListOnDemandConfigsResponseBody;
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
      body: ListOnDemandConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProvisionConfigsHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
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
  statusCode: number;
  body: ListProvisionConfigsResponseBody;
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
      body: ListProvisionConfigsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListReservedCapacitiesHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
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
  statusCode: number;
  body: ListReservedCapacitiesResponseBody;
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
      body: ListReservedCapacitiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceVersionsHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
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
  statusCode: number;
  body: ListServiceVersionsResponseBody;
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

export class ListServicesHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
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
  statusCode: number;
  body: ListServicesResponseBody;
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

export class ListStatefulAsyncInvocationFunctionsHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStatefulAsyncInvocationFunctionsRequest extends $tea.Model {
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

export class ListStatefulAsyncInvocationFunctionsResponseBody extends $tea.Model {
  data?: AsyncConfigMeta[];
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': AsyncConfigMeta },
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStatefulAsyncInvocationFunctionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListStatefulAsyncInvocationFunctionsResponseBody;
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
      body: ListStatefulAsyncInvocationFunctionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListStatefulAsyncInvocationsHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xFcAccountId?: string;
  xFcCodeChecksum?: string;
  xFcDate?: string;
  xFcInvocationType?: string;
  xFcLogType?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcCodeChecksum: 'X-Fc-Code-Checksum',
      xFcDate: 'X-Fc-Date',
      xFcInvocationType: 'X-Fc-Invocation-Type',
      xFcLogType: 'X-Fc-Log-Type',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAccountId: 'string',
      xFcCodeChecksum: 'string',
      xFcDate: 'string',
      xFcInvocationType: 'string',
      xFcLogType: 'string',
      xFcTraceId: 'string',
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
  statusCode: number;
  body: ListStatefulAsyncInvocationsResponseBody;
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
      body: ListStatefulAsyncInvocationsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTaggedResourcesHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
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
  statusCode: number;
  body: ListTaggedResourcesResponseBody;
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
      body: ListTaggedResourcesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTriggersHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTriggersRequest extends $tea.Model {
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
  statusCode: number;
  body: ListTriggersResponseBody;
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
      body: ListTriggersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVpcBindingsHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
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
  statusCode: number;
  body: ListVpcBindingsResponseBody;
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
      body: ListVpcBindingsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishServiceVersionHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  ifMatch?: string;
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      ifMatch: 'If-Match',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      ifMatch: 'string',
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
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
  statusCode: number;
  body: PublishServiceVersionResponseBody;
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
      body: PublishServiceVersionResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutFunctionAsyncInvokeConfigHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
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
  statusCode: number;
  body: PutFunctionAsyncInvokeConfigResponseBody;
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
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      ifMatch: 'If-Match',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      ifMatch: 'string',
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
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
  statusCode: number;
  body: PutFunctionOnDemandConfigResponseBody;
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
      body: PutFunctionOnDemandConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutLayerACLHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutLayerACLRequest extends $tea.Model {
  public?: boolean;
  static names(): { [key: string]: string } {
    return {
      public: 'public',
    };
  }

  static types(): { [key: string]: any } {
    return {
      public: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutLayerACLResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
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

export class PutProvisionConfigHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PutProvisionConfigRequest extends $tea.Model {
  alwaysAllocateCPU?: boolean;
  scheduledActions?: ScheduledActions[];
  target?: number;
  targetTrackingPolicies?: TargetTrackingPolicies[];
  qualifier?: string;
  static names(): { [key: string]: string } {
    return {
      alwaysAllocateCPU: 'alwaysAllocateCPU',
      scheduledActions: 'scheduledActions',
      target: 'target',
      targetTrackingPolicies: 'targetTrackingPolicies',
      qualifier: 'qualifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alwaysAllocateCPU: 'boolean',
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
  alwaysAllocateCPU?: boolean;
  current?: number;
  resource?: string;
  scheduledActions?: ScheduledActions[];
  target?: number;
  targetTrackingPolicies?: TargetTrackingPolicies[];
  static names(): { [key: string]: string } {
    return {
      alwaysAllocateCPU: 'alwaysAllocateCPU',
      current: 'current',
      resource: 'resource',
      scheduledActions: 'scheduledActions',
      target: 'target',
      targetTrackingPolicies: 'targetTrackingPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alwaysAllocateCPU: 'boolean',
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
  statusCode: number;
  body: PutProvisionConfigResponseBody;
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
      body: PutProvisionConfigResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegisterEventSourceHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
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
  statusCode: number;
  body: RegisterEventSourceResponseBody;
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
      body: RegisterEventSourceResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseGPUInstanceHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReleaseGPUInstanceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
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

export class StopStatefulAsyncInvocationHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
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
  statusCode: number;
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

export class TagResourceHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
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
  statusCode: number;
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

export class UntagResourceHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
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
      tagKeys: 'tagKeys',
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
  statusCode: number;
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

export class UpdateAliasHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  ifMatch?: string;
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      ifMatch: 'If-Match',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      ifMatch: 'string',
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAliasRequest extends $tea.Model {
  additionalVersionWeight?: { [key: string]: number };
  description?: string;
  resolvePolicy?: string;
  routePolicy?: RoutePolicy;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      additionalVersionWeight: 'additionalVersionWeight',
      description: 'description',
      resolvePolicy: 'resolvePolicy',
      routePolicy: 'routePolicy',
      versionId: 'versionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additionalVersionWeight: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
      description: 'string',
      resolvePolicy: 'string',
      routePolicy: RoutePolicy,
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
  statusCode: number;
  body: UpdateAliasResponseBody;
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
      body: UpdateAliasResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomDomainHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
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
  tlsConfig?: TLSConfig;
  wafConfig?: WAFConfig;
  static names(): { [key: string]: string } {
    return {
      certConfig: 'certConfig',
      protocol: 'protocol',
      routeConfig: 'routeConfig',
      tlsConfig: 'tlsConfig',
      wafConfig: 'wafConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class UpdateCustomDomainResponseBody extends $tea.Model {
  accountId?: string;
  apiVersion?: string;
  certConfig?: CertConfig;
  createdTime?: string;
  domainName?: string;
  lastModifiedTime?: string;
  protocol?: string;
  routeConfig?: RouteConfig;
  tlsConfig?: TLSConfig;
  wafConfig?: WAFConfig;
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
      tlsConfig: 'tlsConfig',
      wafConfig: 'wafConfig',
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
      tlsConfig: TLSConfig,
      wafConfig: WAFConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCustomDomainResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateCustomDomainResponseBody;
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
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      ifMatch: 'If-Match',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcCodeChecksum: 'X-Fc-Code-Checksum',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      ifMatch: 'string',
      xFcAccountId: 'string',
      xFcCodeChecksum: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
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
  cpu?: number;
  customContainerConfig?: CustomContainerConfig;
  customDNS?: CustomDNS;
  customHealthCheckConfig?: CustomHealthCheckConfig;
  customRuntimeConfig?: CustomRuntimeConfig;
  description?: string;
  diskSize?: number;
  environmentVariables?: { [key: string]: string };
  gpuMemorySize?: number;
  handler?: string;
  initializationTimeout?: number;
  initializer?: string;
  instanceLifecycleConfig?: InstanceLifecycleConfig;
  instanceSoftConcurrency?: number;
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
      cpu: 'cpu',
      customContainerConfig: 'customContainerConfig',
      customDNS: 'customDNS',
      customHealthCheckConfig: 'customHealthCheckConfig',
      customRuntimeConfig: 'customRuntimeConfig',
      description: 'description',
      diskSize: 'diskSize',
      environmentVariables: 'environmentVariables',
      gpuMemorySize: 'gpuMemorySize',
      handler: 'handler',
      initializationTimeout: 'initializationTimeout',
      initializer: 'initializer',
      instanceLifecycleConfig: 'instanceLifecycleConfig',
      instanceSoftConcurrency: 'instanceSoftConcurrency',
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
      cpu: 'number',
      customContainerConfig: CustomContainerConfig,
      customDNS: CustomDNS,
      customHealthCheckConfig: CustomHealthCheckConfig,
      customRuntimeConfig: CustomRuntimeConfig,
      description: 'string',
      diskSize: 'number',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      gpuMemorySize: 'number',
      handler: 'string',
      initializationTimeout: 'number',
      initializer: 'string',
      instanceLifecycleConfig: InstanceLifecycleConfig,
      instanceSoftConcurrency: 'number',
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
  cpu?: number;
  createdTime?: string;
  customContainerConfig?: CustomContainerConfig;
  customDNS?: CustomDNS;
  customHealthCheckConfig?: CustomHealthCheckConfig;
  customRuntimeConfig?: CustomRuntimeConfig;
  description?: string;
  diskSize?: number;
  environmentVariables?: { [key: string]: string };
  functionId?: string;
  functionName?: string;
  gpuMemorySize?: number;
  handler?: string;
  initializationTimeout?: number;
  initializer?: string;
  instanceConcurrency?: number;
  instanceLifecycleConfig?: InstanceLifecycleConfig;
  instanceSoftConcurrency?: number;
  instanceType?: string;
  lastModifiedTime?: string;
  layers?: string[];
  layersArnV2?: string[];
  memorySize?: number;
  runtime?: string;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      caPort: 'caPort',
      codeChecksum: 'codeChecksum',
      codeSize: 'codeSize',
      cpu: 'cpu',
      createdTime: 'createdTime',
      customContainerConfig: 'customContainerConfig',
      customDNS: 'customDNS',
      customHealthCheckConfig: 'customHealthCheckConfig',
      customRuntimeConfig: 'customRuntimeConfig',
      description: 'description',
      diskSize: 'diskSize',
      environmentVariables: 'environmentVariables',
      functionId: 'functionId',
      functionName: 'functionName',
      gpuMemorySize: 'gpuMemorySize',
      handler: 'handler',
      initializationTimeout: 'initializationTimeout',
      initializer: 'initializer',
      instanceConcurrency: 'instanceConcurrency',
      instanceLifecycleConfig: 'instanceLifecycleConfig',
      instanceSoftConcurrency: 'instanceSoftConcurrency',
      instanceType: 'instanceType',
      lastModifiedTime: 'lastModifiedTime',
      layers: 'layers',
      layersArnV2: 'layersArnV2',
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
      cpu: 'number',
      createdTime: 'string',
      customContainerConfig: CustomContainerConfig,
      customDNS: CustomDNS,
      customHealthCheckConfig: CustomHealthCheckConfig,
      customRuntimeConfig: CustomRuntimeConfig,
      description: 'string',
      diskSize: 'number',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      functionId: 'string',
      functionName: 'string',
      gpuMemorySize: 'number',
      handler: 'string',
      initializationTimeout: 'number',
      initializer: 'string',
      instanceConcurrency: 'number',
      instanceLifecycleConfig: InstanceLifecycleConfig,
      instanceSoftConcurrency: 'number',
      instanceType: 'string',
      lastModifiedTime: 'string',
      layers: { 'type': 'array', 'itemType': 'string' },
      layersArnV2: { 'type': 'array', 'itemType': 'string' },
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
  statusCode: number;
  body: UpdateFunctionResponseBody;
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
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      ifMatch: 'If-Match',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      ifMatch: 'string',
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
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
  ossMountConfig?: OSSMountConfig;
  role?: string;
  tracingConfig?: TracingConfig;
  vpcConfig?: VPCConfig;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      internetAccess: 'internetAccess',
      logConfig: 'logConfig',
      nasConfig: 'nasConfig',
      ossMountConfig: 'ossMountConfig',
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
      ossMountConfig: OSSMountConfig,
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
  ossMountConfig?: OSSMountConfig;
  role?: string;
  serviceId?: string;
  serviceName?: string;
  tracingConfig?: TracingConfig;
  useSLRAuthentication?: boolean;
  vpcConfig?: VPCConfig;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      description: 'description',
      internetAccess: 'internetAccess',
      lastModifiedTime: 'lastModifiedTime',
      logConfig: 'logConfig',
      nasConfig: 'nasConfig',
      ossMountConfig: 'ossMountConfig',
      role: 'role',
      serviceId: 'serviceId',
      serviceName: 'serviceName',
      tracingConfig: 'tracingConfig',
      useSLRAuthentication: 'useSLRAuthentication',
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
      ossMountConfig: OSSMountConfig,
      role: 'string',
      serviceId: 'string',
      serviceName: 'string',
      tracingConfig: TracingConfig,
      useSLRAuthentication: 'boolean',
      vpcConfig: VPCConfig,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateServiceResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateServiceResponseBody;
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

export class UpdateTriggerHeaders extends $tea.Model {
  commonHeaders?: { [key: string]: string };
  ifMatch?: string;
  xFcAccountId?: string;
  xFcDate?: string;
  xFcTraceId?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      ifMatch: 'If-Match',
      xFcAccountId: 'X-Fc-Account-Id',
      xFcDate: 'X-Fc-Date',
      xFcTraceId: 'X-Fc-Trace-Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      ifMatch: 'string',
      xFcAccountId: 'string',
      xFcDate: 'string',
      xFcTraceId: 'string',
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
  domainName?: string;
  invocationRole?: string;
  lastModifiedTime?: string;
  qualifier?: string;
  sourceArn?: string;
  triggerConfig?: string;
  triggerId?: string;
  triggerName?: string;
  triggerType?: string;
  urlInternet?: string;
  urlIntranet?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      description: 'description',
      domainName: 'domainName',
      invocationRole: 'invocationRole',
      lastModifiedTime: 'lastModifiedTime',
      qualifier: 'qualifier',
      sourceArn: 'sourceArn',
      triggerConfig: 'triggerConfig',
      triggerId: 'triggerId',
      triggerName: 'triggerName',
      triggerType: 'triggerType',
      urlInternet: 'urlInternet',
      urlIntranet: 'urlIntranet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      domainName: 'string',
      invocationRole: 'string',
      lastModifiedTime: 'string',
      qualifier: 'string',
      sourceArn: 'string',
      triggerConfig: 'string',
      triggerId: 'string',
      triggerName: 'string',
      triggerType: 'string',
      urlInternet: 'string',
      urlIntranet: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTriggerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateTriggerResponseBody;
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
      body: UpdateTriggerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NASConfigMountPoints extends $tea.Model {
  enableTLS?: boolean;
  mountDir?: string;
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

export class OSSMountConfigMountPoints extends $tea.Model {
  bucketName?: string;
  bucketPath?: string;
  endpoint?: string;
  mountDir?: string;
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

export class RewriteConfigEqualRules extends $tea.Model {
  match?: string;
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

export class RewriteConfigRegexRules extends $tea.Model {
  match?: string;
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

export class RewriteConfigWildcardRules extends $tea.Model {
  match?: string;
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

export class ListAliasesResponseBodyAliases extends $tea.Model {
  additionalVersionWeight?: { [key: string]: number };
  aliasName?: string;
  createdTime?: string;
  description?: string;
  lastModifiedTime?: string;
  resolvePolicy?: string;
  routePolicy?: RoutePolicy;
  versionId?: string;
  static names(): { [key: string]: string } {
    return {
      additionalVersionWeight: 'additionalVersionWeight',
      aliasName: 'aliasName',
      createdTime: 'createdTime',
      description: 'description',
      lastModifiedTime: 'lastModifiedTime',
      resolvePolicy: 'resolvePolicy',
      routePolicy: 'routePolicy',
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
      resolvePolicy: 'string',
      routePolicy: RoutePolicy,
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
  tlsConfig?: TLSConfig;
  wafConfig?: WAFConfig;
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
      tlsConfig: 'tlsConfig',
      wafConfig: 'wafConfig',
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
      tlsConfig: TLSConfig,
      wafConfig: WAFConfig,
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
  cpu?: number;
  createdTime?: string;
  customContainerConfig?: CustomContainerConfig;
  customDNS?: CustomDNS;
  customHealthCheckConfig?: CustomHealthCheckConfig;
  customRuntimeConfig?: CustomRuntimeConfig;
  description?: string;
  diskSize?: number;
  environmentVariables?: { [key: string]: string };
  functionId?: string;
  functionName?: string;
  gpuMemorySize?: number;
  handler?: string;
  initializationTimeout?: number;
  initializer?: string;
  instanceConcurrency?: number;
  instanceLifecycleConfig?: InstanceLifecycleConfig;
  instanceSoftConcurrency?: number;
  instanceType?: string;
  lastModifiedTime?: string;
  layers?: string[];
  layersArnV2?: string[];
  memorySize?: number;
  runtime?: string;
  timeout?: number;
  static names(): { [key: string]: string } {
    return {
      caPort: 'caPort',
      codeChecksum: 'codeChecksum',
      codeSize: 'codeSize',
      cpu: 'cpu',
      createdTime: 'createdTime',
      customContainerConfig: 'customContainerConfig',
      customDNS: 'customDNS',
      customHealthCheckConfig: 'customHealthCheckConfig',
      customRuntimeConfig: 'customRuntimeConfig',
      description: 'description',
      diskSize: 'diskSize',
      environmentVariables: 'environmentVariables',
      functionId: 'functionId',
      functionName: 'functionName',
      gpuMemorySize: 'gpuMemorySize',
      handler: 'handler',
      initializationTimeout: 'initializationTimeout',
      initializer: 'initializer',
      instanceConcurrency: 'instanceConcurrency',
      instanceLifecycleConfig: 'instanceLifecycleConfig',
      instanceSoftConcurrency: 'instanceSoftConcurrency',
      instanceType: 'instanceType',
      lastModifiedTime: 'lastModifiedTime',
      layers: 'layers',
      layersArnV2: 'layersArnV2',
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
      cpu: 'number',
      createdTime: 'string',
      customContainerConfig: CustomContainerConfig,
      customDNS: CustomDNS,
      customHealthCheckConfig: CustomHealthCheckConfig,
      customRuntimeConfig: CustomRuntimeConfig,
      description: 'string',
      diskSize: 'number',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      functionId: 'string',
      functionName: 'string',
      gpuMemorySize: 'number',
      handler: 'string',
      initializationTimeout: 'number',
      initializer: 'string',
      instanceConcurrency: 'number',
      instanceLifecycleConfig: InstanceLifecycleConfig,
      instanceSoftConcurrency: 'number',
      instanceType: 'string',
      lastModifiedTime: 'string',
      layers: { 'type': 'array', 'itemType': 'string' },
      layersArnV2: { 'type': 'array', 'itemType': 'string' },
      memorySize: 'number',
      runtime: 'string',
      timeout: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancesResponseBodyInstances extends $tea.Model {
  instanceId?: string;
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

export class ListProvisionConfigsResponseBodyProvisionConfigs extends $tea.Model {
  alwaysAllocateCPU?: boolean;
  current?: number;
  currentError?: string;
  resource?: string;
  scheduledActions?: ScheduledActions[];
  target?: number;
  targetTrackingPolicies?: TargetTrackingPolicies[];
  static names(): { [key: string]: string } {
    return {
      alwaysAllocateCPU: 'alwaysAllocateCPU',
      current: 'current',
      currentError: 'currentError',
      resource: 'resource',
      scheduledActions: 'scheduledActions',
      target: 'target',
      targetTrackingPolicies: 'targetTrackingPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alwaysAllocateCPU: 'boolean',
      current: 'number',
      currentError: 'string',
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
  ossMountConfig?: OSSMountConfig;
  role?: string;
  serviceId?: string;
  serviceName?: string;
  tracingConfig?: TracingConfig;
  useSLRAuthentication?: boolean;
  vpcConfig?: VPCConfig;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      description: 'description',
      internetAccess: 'internetAccess',
      lastModifiedTime: 'lastModifiedTime',
      logConfig: 'logConfig',
      nasConfig: 'nasConfig',
      ossMountConfig: 'ossMountConfig',
      role: 'role',
      serviceId: 'serviceId',
      serviceName: 'serviceName',
      tracingConfig: 'tracingConfig',
      useSLRAuthentication: 'useSLRAuthentication',
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
      ossMountConfig: OSSMountConfig,
      role: 'string',
      serviceId: 'string',
      serviceName: 'string',
      tracingConfig: TracingConfig,
      useSLRAuthentication: 'boolean',
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
  domainName?: string;
  invocationRole?: string;
  lastModifiedTime?: string;
  qualifier?: string;
  sourceArn?: string;
  triggerConfig?: string;
  triggerId?: string;
  triggerName?: string;
  triggerType?: string;
  urlInternet?: string;
  urlIntranet?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      description: 'description',
      domainName: 'domainName',
      invocationRole: 'invocationRole',
      lastModifiedTime: 'lastModifiedTime',
      qualifier: 'qualifier',
      sourceArn: 'sourceArn',
      triggerConfig: 'triggerConfig',
      triggerId: 'triggerId',
      triggerName: 'triggerName',
      triggerType: 'triggerType',
      urlInternet: 'urlInternet',
      urlIntranet: 'urlIntranet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      domainName: 'string',
      invocationRole: 'string',
      lastModifiedTime: 'string',
      qualifier: 'string',
      sourceArn: 'string',
      triggerConfig: 'string',
      triggerId: 'string',
      triggerName: 'string',
      triggerType: 'string',
      urlInternet: 'string',
      urlIntranet: 'string',
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

  async claimGPUInstanceWithOptions(request: ClaimGPUInstanceRequest, headers: ClaimGPUInstanceHeaders, runtime: $Util.RuntimeOptions): Promise<ClaimGPUInstanceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.diskPerformanceLevel)) {
      body["diskPerformanceLevel"] = request.diskPerformanceLevel;
    }

    if (!Util.isUnset(request.diskSizeGigabytes)) {
      body["diskSizeGigabytes"] = request.diskSizeGigabytes;
    }

    if (!Util.isUnset(request.imageId)) {
      body["imageId"] = request.imageId;
    }

    if (!Util.isUnset(request.instanceType)) {
      body["instanceType"] = request.instanceType;
    }

    if (!Util.isUnset(request.internetBandwidthOut)) {
      body["internetBandwidthOut"] = request.internetBandwidthOut;
    }

    if (!Util.isUnset(request.password)) {
      body["password"] = request.password;
    }

    if (!Util.isUnset(request.role)) {
      body["role"] = request.role;
    }

    if (!Util.isUnset(request.sgId)) {
      body["sgId"] = request.sgId;
    }

    if (!Util.isUnset(request.sourceCidrIp)) {
      body["sourceCidrIp"] = request.sourceCidrIp;
    }

    if (!Util.isUnset(request.tcpPortRange)) {
      body["tcpPortRange"] = request.tcpPortRange;
    }

    if (!Util.isUnset(request.udpPortRange)) {
      body["udpPortRange"] = request.udpPortRange;
    }

    if (!Util.isUnset(request.vpcId)) {
      body["vpcId"] = request.vpcId;
    }

    if (!Util.isUnset(request.vswId)) {
      body["vswId"] = request.vswId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ClaimGPUInstance",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/gpuInstances`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ClaimGPUInstanceResponse>(await this.callApi(params, req, runtime), new ClaimGPUInstanceResponse({}));
  }

  async claimGPUInstance(request: ClaimGPUInstanceRequest): Promise<ClaimGPUInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ClaimGPUInstanceHeaders({ });
    return await this.claimGPUInstanceWithOptions(request, headers, runtime);
  }

  async createAliasWithOptions(serviceName: string, request: CreateAliasRequest, headers: CreateAliasHeaders, runtime: $Util.RuntimeOptions): Promise<CreateAliasResponse> {
    Util.validateModel(request);
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

    if (!Util.isUnset(request.resolvePolicy)) {
      body["resolvePolicy"] = request.resolvePolicy;
    }

    if (!Util.isUnset(request.routePolicy)) {
      body["routePolicy"] = request.routePolicy;
    }

    if (!Util.isUnset(request.versionId)) {
      body["versionId"] = request.versionId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateAlias",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/services/${OpenApiUtil.getEncodeParam(serviceName)}/aliases`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateAliasResponse>(await this.callApi(params, req, runtime), new CreateAliasResponse({}));
  }

  async createAlias(serviceName: string, request: CreateAliasRequest): Promise<CreateAliasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateAliasHeaders({ });
    return await this.createAliasWithOptions(serviceName, request, headers, runtime);
  }

  async createCustomDomainWithOptions(request: CreateCustomDomainRequest, headers: CreateCustomDomainHeaders, runtime: $Util.RuntimeOptions): Promise<CreateCustomDomainResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.certConfig)) {
      body["certConfig"] = request.certConfig;
    }

    if (!Util.isUnset(request.domainName)) {
      body["domainName"] = request.domainName;
    }

    if (!Util.isUnset(request.protocol)) {
      body["protocol"] = request.protocol;
    }

    if (!Util.isUnset(request.routeConfig)) {
      body["routeConfig"] = request.routeConfig;
    }

    if (!Util.isUnset(request.tlsConfig)) {
      body["tlsConfig"] = request.tlsConfig;
    }

    if (!Util.isUnset(request.wafConfig)) {
      body["wafConfig"] = request.wafConfig;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateCustomDomain",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/custom-domains`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateCustomDomainResponse>(await this.callApi(params, req, runtime), new CreateCustomDomainResponse({}));
  }

  async createCustomDomain(request: CreateCustomDomainRequest): Promise<CreateCustomDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateCustomDomainHeaders({ });
    return await this.createCustomDomainWithOptions(request, headers, runtime);
  }

  async createFunctionWithOptions(serviceName: string, request: CreateFunctionRequest, headers: CreateFunctionHeaders, runtime: $Util.RuntimeOptions): Promise<CreateFunctionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.caPort)) {
      body["caPort"] = request.caPort;
    }

    if (!Util.isUnset(request.code)) {
      body["code"] = request.code;
    }

    if (!Util.isUnset(request.cpu)) {
      body["cpu"] = request.cpu;
    }

    if (!Util.isUnset(request.customContainerConfig)) {
      body["customContainerConfig"] = request.customContainerConfig;
    }

    if (!Util.isUnset(request.customDNS)) {
      body["customDNS"] = request.customDNS;
    }

    if (!Util.isUnset(request.customHealthCheckConfig)) {
      body["customHealthCheckConfig"] = request.customHealthCheckConfig;
    }

    if (!Util.isUnset(request.customRuntimeConfig)) {
      body["customRuntimeConfig"] = request.customRuntimeConfig;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.diskSize)) {
      body["diskSize"] = request.diskSize;
    }

    if (!Util.isUnset(request.environmentVariables)) {
      body["environmentVariables"] = request.environmentVariables;
    }

    if (!Util.isUnset(request.functionName)) {
      body["functionName"] = request.functionName;
    }

    if (!Util.isUnset(request.gpuMemorySize)) {
      body["gpuMemorySize"] = request.gpuMemorySize;
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

    if (!Util.isUnset(request.instanceLifecycleConfig)) {
      body["instanceLifecycleConfig"] = request.instanceLifecycleConfig;
    }

    if (!Util.isUnset(request.instanceSoftConcurrency)) {
      body["instanceSoftConcurrency"] = request.instanceSoftConcurrency;
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

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcCodeChecksum)) {
      realHeaders["X-Fc-Code-Checksum"] = Util.toJSONString(headers.xFcCodeChecksum);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateFunction",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/services/${OpenApiUtil.getEncodeParam(serviceName)}/functions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateFunctionResponse>(await this.callApi(params, req, runtime), new CreateFunctionResponse({}));
  }

  async createFunction(serviceName: string, request: CreateFunctionRequest): Promise<CreateFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateFunctionHeaders({ });
    return await this.createFunctionWithOptions(serviceName, request, headers, runtime);
  }

  async createLayerVersionWithOptions(layerName: string, request: CreateLayerVersionRequest, headers: CreateLayerVersionHeaders, runtime: $Util.RuntimeOptions): Promise<CreateLayerVersionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.code)) {
      body["Code"] = request.code;
    }

    if (!Util.isUnset(request.compatibleRuntime)) {
      body["compatibleRuntime"] = request.compatibleRuntime;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateLayerVersion",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/layers/${OpenApiUtil.getEncodeParam(layerName)}/versions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateLayerVersionResponse>(await this.callApi(params, req, runtime), new CreateLayerVersionResponse({}));
  }

  async createLayerVersion(layerName: string, request: CreateLayerVersionRequest): Promise<CreateLayerVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateLayerVersionHeaders({ });
    return await this.createLayerVersionWithOptions(layerName, request, headers, runtime);
  }

  async createServiceWithOptions(request: CreateServiceRequest, headers: CreateServiceHeaders, runtime: $Util.RuntimeOptions): Promise<CreateServiceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.internetAccess)) {
      body["internetAccess"] = request.internetAccess;
    }

    if (!Util.isUnset(request.logConfig)) {
      body["logConfig"] = request.logConfig;
    }

    if (!Util.isUnset(request.nasConfig)) {
      body["nasConfig"] = request.nasConfig;
    }

    if (!Util.isUnset(request.ossMountConfig)) {
      body["ossMountConfig"] = request.ossMountConfig;
    }

    if (!Util.isUnset(request.role)) {
      body["role"] = request.role;
    }

    if (!Util.isUnset(request.serviceName)) {
      body["serviceName"] = request.serviceName;
    }

    if (!Util.isUnset(request.tracingConfig)) {
      body["tracingConfig"] = request.tracingConfig;
    }

    if (!Util.isUnset(request.vpcConfig)) {
      body["vpcConfig"] = request.vpcConfig;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateService",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/services`,
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
    let headers = new CreateServiceHeaders({ });
    return await this.createServiceWithOptions(request, headers, runtime);
  }

  async createTriggerWithOptions(serviceName: string, functionName: string, request: CreateTriggerRequest, headers: CreateTriggerHeaders, runtime: $Util.RuntimeOptions): Promise<CreateTriggerResponse> {
    Util.validateModel(request);
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

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateTrigger",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/services/${OpenApiUtil.getEncodeParam(serviceName)}/functions/${OpenApiUtil.getEncodeParam(functionName)}/triggers`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateTriggerResponse>(await this.callApi(params, req, runtime), new CreateTriggerResponse({}));
  }

  async createTrigger(serviceName: string, functionName: string, request: CreateTriggerRequest): Promise<CreateTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateTriggerHeaders({ });
    return await this.createTriggerWithOptions(serviceName, functionName, request, headers, runtime);
  }

  async createVpcBindingWithOptions(serviceName: string, request: CreateVpcBindingRequest, headers: CreateVpcBindingHeaders, runtime: $Util.RuntimeOptions): Promise<CreateVpcBindingResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.vpcId)) {
      body["vpcId"] = request.vpcId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateVpcBinding",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/services/${OpenApiUtil.getEncodeParam(serviceName)}/bindings`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<CreateVpcBindingResponse>(await this.callApi(params, req, runtime), new CreateVpcBindingResponse({}));
  }

  async createVpcBinding(serviceName: string, request: CreateVpcBindingRequest): Promise<CreateVpcBindingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new CreateVpcBindingHeaders({ });
    return await this.createVpcBindingWithOptions(serviceName, request, headers, runtime);
  }

  async deleteAliasWithOptions(serviceName: string, aliasName: string, headers: DeleteAliasHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteAliasResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.ifMatch)) {
      realHeaders["If-Match"] = Util.toJSONString(headers.ifMatch);
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "DeleteAlias",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/services/${OpenApiUtil.getEncodeParam(serviceName)}/aliases/${OpenApiUtil.getEncodeParam(aliasName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteAliasResponse>(await this.callApi(params, req, runtime), new DeleteAliasResponse({}));
  }

  async deleteAlias(serviceName: string, aliasName: string): Promise<DeleteAliasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteAliasHeaders({ });
    return await this.deleteAliasWithOptions(serviceName, aliasName, headers, runtime);
  }

  async deleteCustomDomainWithOptions(domainName: string, headers: DeleteCustomDomainHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteCustomDomainResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "DeleteCustomDomain",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/custom-domains/${OpenApiUtil.getEncodeParam(domainName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteCustomDomainResponse>(await this.callApi(params, req, runtime), new DeleteCustomDomainResponse({}));
  }

  async deleteCustomDomain(domainName: string): Promise<DeleteCustomDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteCustomDomainHeaders({ });
    return await this.deleteCustomDomainWithOptions(domainName, headers, runtime);
  }

  async deleteFunctionWithOptions(serviceName: string, functionName: string, headers: DeleteFunctionHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteFunctionResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.ifMatch)) {
      realHeaders["If-Match"] = Util.toJSONString(headers.ifMatch);
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "DeleteFunction",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/services/${OpenApiUtil.getEncodeParam(serviceName)}/functions/${OpenApiUtil.getEncodeParam(functionName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteFunctionResponse>(await this.callApi(params, req, runtime), new DeleteFunctionResponse({}));
  }

  async deleteFunction(serviceName: string, functionName: string): Promise<DeleteFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteFunctionHeaders({ });
    return await this.deleteFunctionWithOptions(serviceName, functionName, headers, runtime);
  }

  async deleteFunctionAsyncInvokeConfigWithOptions(serviceName: string, functionName: string, request: DeleteFunctionAsyncInvokeConfigRequest, headers: DeleteFunctionAsyncInvokeConfigHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteFunctionAsyncInvokeConfigResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteFunctionAsyncInvokeConfig",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/services/${OpenApiUtil.getEncodeParam(serviceName)}/functions/${OpenApiUtil.getEncodeParam(functionName)}/async-invoke-config`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteFunctionAsyncInvokeConfigResponse>(await this.callApi(params, req, runtime), new DeleteFunctionAsyncInvokeConfigResponse({}));
  }

  async deleteFunctionAsyncInvokeConfig(serviceName: string, functionName: string, request: DeleteFunctionAsyncInvokeConfigRequest): Promise<DeleteFunctionAsyncInvokeConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteFunctionAsyncInvokeConfigHeaders({ });
    return await this.deleteFunctionAsyncInvokeConfigWithOptions(serviceName, functionName, request, headers, runtime);
  }

  async deleteFunctionOnDemandConfigWithOptions(serviceName: string, functionName: string, request: DeleteFunctionOnDemandConfigRequest, headers: DeleteFunctionOnDemandConfigHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteFunctionOnDemandConfigResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.ifMatch)) {
      realHeaders["If-Match"] = Util.toJSONString(headers.ifMatch);
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteFunctionOnDemandConfig",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/services/${OpenApiUtil.getEncodeParam(serviceName)}/functions/${OpenApiUtil.getEncodeParam(functionName)}/on-demand-config`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteFunctionOnDemandConfigResponse>(await this.callApi(params, req, runtime), new DeleteFunctionOnDemandConfigResponse({}));
  }

  async deleteFunctionOnDemandConfig(serviceName: string, functionName: string, request: DeleteFunctionOnDemandConfigRequest): Promise<DeleteFunctionOnDemandConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteFunctionOnDemandConfigHeaders({ });
    return await this.deleteFunctionOnDemandConfigWithOptions(serviceName, functionName, request, headers, runtime);
  }

  async deleteLayerVersionWithOptions(layerName: string, version: string, headers: DeleteLayerVersionHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteLayerVersionResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "DeleteLayerVersion",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/layers/${OpenApiUtil.getEncodeParam(layerName)}/versions/${OpenApiUtil.getEncodeParam(version)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteLayerVersionResponse>(await this.callApi(params, req, runtime), new DeleteLayerVersionResponse({}));
  }

  async deleteLayerVersion(layerName: string, version: string): Promise<DeleteLayerVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteLayerVersionHeaders({ });
    return await this.deleteLayerVersionWithOptions(layerName, version, headers, runtime);
  }

  async deleteServiceWithOptions(serviceName: string, headers: DeleteServiceHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteServiceResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.ifMatch)) {
      realHeaders["If-Match"] = Util.toJSONString(headers.ifMatch);
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "DeleteService",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/services/${OpenApiUtil.getEncodeParam(serviceName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteServiceResponse>(await this.callApi(params, req, runtime), new DeleteServiceResponse({}));
  }

  async deleteService(serviceName: string): Promise<DeleteServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteServiceHeaders({ });
    return await this.deleteServiceWithOptions(serviceName, headers, runtime);
  }

  async deleteServiceVersionWithOptions(serviceName: string, versionId: string, headers: DeleteServiceVersionHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteServiceVersionResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "DeleteServiceVersion",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/services/${OpenApiUtil.getEncodeParam(serviceName)}/versions/${OpenApiUtil.getEncodeParam(versionId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteServiceVersionResponse>(await this.callApi(params, req, runtime), new DeleteServiceVersionResponse({}));
  }

  async deleteServiceVersion(serviceName: string, versionId: string): Promise<DeleteServiceVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteServiceVersionHeaders({ });
    return await this.deleteServiceVersionWithOptions(serviceName, versionId, headers, runtime);
  }

  async deleteTriggerWithOptions(serviceName: string, functionName: string, triggerName: string, headers: DeleteTriggerHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteTriggerResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.ifMatch)) {
      realHeaders["If-Match"] = Util.toJSONString(headers.ifMatch);
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "DeleteTrigger",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/services/${OpenApiUtil.getEncodeParam(serviceName)}/functions/${OpenApiUtil.getEncodeParam(functionName)}/triggers/${OpenApiUtil.getEncodeParam(triggerName)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteTriggerResponse>(await this.callApi(params, req, runtime), new DeleteTriggerResponse({}));
  }

  async deleteTrigger(serviceName: string, functionName: string, triggerName: string): Promise<DeleteTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteTriggerHeaders({ });
    return await this.deleteTriggerWithOptions(serviceName, functionName, triggerName, headers, runtime);
  }

  async deleteVpcBindingWithOptions(serviceName: string, vpcId: string, headers: DeleteVpcBindingHeaders, runtime: $Util.RuntimeOptions): Promise<DeleteVpcBindingResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "DeleteVpcBinding",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/services/${OpenApiUtil.getEncodeParam(serviceName)}/bindings/${OpenApiUtil.getEncodeParam(vpcId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeleteVpcBindingResponse>(await this.callApi(params, req, runtime), new DeleteVpcBindingResponse({}));
  }

  async deleteVpcBinding(serviceName: string, vpcId: string): Promise<DeleteVpcBindingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeleteVpcBindingHeaders({ });
    return await this.deleteVpcBindingWithOptions(serviceName, vpcId, headers, runtime);
  }

  async deregisterEventSourceWithOptions(serviceName: string, functionName: string, sourceArn: string, request: DeregisterEventSourceRequest, headers: DeregisterEventSourceHeaders, runtime: $Util.RuntimeOptions): Promise<DeregisterEventSourceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeregisterEventSource",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/services/${OpenApiUtil.getEncodeParam(serviceName)}/functions/${OpenApiUtil.getEncodeParam(functionName)}/event-sources/${OpenApiUtil.getEncodeParam(sourceArn)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<DeregisterEventSourceResponse>(await this.callApi(params, req, runtime), new DeregisterEventSourceResponse({}));
  }

  async deregisterEventSource(serviceName: string, functionName: string, sourceArn: string, request: DeregisterEventSourceRequest): Promise<DeregisterEventSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new DeregisterEventSourceHeaders({ });
    return await this.deregisterEventSourceWithOptions(serviceName, functionName, sourceArn, request, headers, runtime);
  }

  async getAccountSettingsWithOptions(headers: GetAccountSettingsHeaders, runtime: $Util.RuntimeOptions): Promise<GetAccountSettingsResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "GetAccountSettings",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/account-settings`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetAccountSettingsResponse>(await this.callApi(params, req, runtime), new GetAccountSettingsResponse({}));
  }

  async getAccountSettings(): Promise<GetAccountSettingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetAccountSettingsHeaders({ });
    return await this.getAccountSettingsWithOptions(headers, runtime);
  }

  async getAliasWithOptions(serviceName: string, aliasName: string, headers: GetAliasHeaders, runtime: $Util.RuntimeOptions): Promise<GetAliasResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "GetAlias",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/services/${OpenApiUtil.getEncodeParam(serviceName)}/aliases/${OpenApiUtil.getEncodeParam(aliasName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetAliasResponse>(await this.callApi(params, req, runtime), new GetAliasResponse({}));
  }

  async getAlias(serviceName: string, aliasName: string): Promise<GetAliasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetAliasHeaders({ });
    return await this.getAliasWithOptions(serviceName, aliasName, headers, runtime);
  }

  async getCustomDomainWithOptions(domainName: string, headers: GetCustomDomainHeaders, runtime: $Util.RuntimeOptions): Promise<GetCustomDomainResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "GetCustomDomain",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/custom-domains/${OpenApiUtil.getEncodeParam(domainName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetCustomDomainResponse>(await this.callApi(params, req, runtime), new GetCustomDomainResponse({}));
  }

  async getCustomDomain(domainName: string): Promise<GetCustomDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetCustomDomainHeaders({ });
    return await this.getCustomDomainWithOptions(domainName, headers, runtime);
  }

  async getFunctionWithOptions(serviceName: string, functionName: string, request: GetFunctionRequest, headers: GetFunctionHeaders, runtime: $Util.RuntimeOptions): Promise<GetFunctionResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetFunction",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/services/${OpenApiUtil.getEncodeParam(serviceName)}/functions/${OpenApiUtil.getEncodeParam(functionName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetFunctionResponse>(await this.callApi(params, req, runtime), new GetFunctionResponse({}));
  }

  async getFunction(serviceName: string, functionName: string, request: GetFunctionRequest): Promise<GetFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetFunctionHeaders({ });
    return await this.getFunctionWithOptions(serviceName, functionName, request, headers, runtime);
  }

  /**
    * StatefulAsyncInvocation indicates whether the asynchronous task feature is enabled. If the value of StatefulAsyncInvocation is true, the asynchronous task feature is enabled. All asynchronous invocations change to asynchronous task mode.
    *
    * @param request GetFunctionAsyncInvokeConfigRequest
    * @param headers GetFunctionAsyncInvokeConfigHeaders
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetFunctionAsyncInvokeConfigResponse
   */
  async getFunctionAsyncInvokeConfigWithOptions(serviceName: string, functionName: string, request: GetFunctionAsyncInvokeConfigRequest, headers: GetFunctionAsyncInvokeConfigHeaders, runtime: $Util.RuntimeOptions): Promise<GetFunctionAsyncInvokeConfigResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetFunctionAsyncInvokeConfig",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/services/${OpenApiUtil.getEncodeParam(serviceName)}/functions/${OpenApiUtil.getEncodeParam(functionName)}/async-invoke-config`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetFunctionAsyncInvokeConfigResponse>(await this.callApi(params, req, runtime), new GetFunctionAsyncInvokeConfigResponse({}));
  }

  /**
    * StatefulAsyncInvocation indicates whether the asynchronous task feature is enabled. If the value of StatefulAsyncInvocation is true, the asynchronous task feature is enabled. All asynchronous invocations change to asynchronous task mode.
    *
    * @param request GetFunctionAsyncInvokeConfigRequest
    * @return GetFunctionAsyncInvokeConfigResponse
   */
  async getFunctionAsyncInvokeConfig(serviceName: string, functionName: string, request: GetFunctionAsyncInvokeConfigRequest): Promise<GetFunctionAsyncInvokeConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetFunctionAsyncInvokeConfigHeaders({ });
    return await this.getFunctionAsyncInvokeConfigWithOptions(serviceName, functionName, request, headers, runtime);
  }

  async getFunctionCodeWithOptions(serviceName: string, functionName: string, request: GetFunctionCodeRequest, headers: GetFunctionCodeHeaders, runtime: $Util.RuntimeOptions): Promise<GetFunctionCodeResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetFunctionCode",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/services/${OpenApiUtil.getEncodeParam(serviceName)}/functions/${OpenApiUtil.getEncodeParam(functionName)}/code`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetFunctionCodeResponse>(await this.callApi(params, req, runtime), new GetFunctionCodeResponse({}));
  }

  async getFunctionCode(serviceName: string, functionName: string, request: GetFunctionCodeRequest): Promise<GetFunctionCodeResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetFunctionCodeHeaders({ });
    return await this.getFunctionCodeWithOptions(serviceName, functionName, request, headers, runtime);
  }

  async getFunctionOnDemandConfigWithOptions(serviceName: string, functionName: string, request: GetFunctionOnDemandConfigRequest, headers: GetFunctionOnDemandConfigHeaders, runtime: $Util.RuntimeOptions): Promise<GetFunctionOnDemandConfigResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetFunctionOnDemandConfig",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/services/${OpenApiUtil.getEncodeParam(serviceName)}/functions/${OpenApiUtil.getEncodeParam(functionName)}/on-demand-config`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetFunctionOnDemandConfigResponse>(await this.callApi(params, req, runtime), new GetFunctionOnDemandConfigResponse({}));
  }

  async getFunctionOnDemandConfig(serviceName: string, functionName: string, request: GetFunctionOnDemandConfigRequest): Promise<GetFunctionOnDemandConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetFunctionOnDemandConfigHeaders({ });
    return await this.getFunctionOnDemandConfigWithOptions(serviceName, functionName, request, headers, runtime);
  }

  async getLayerVersionWithOptions(layerName: string, version: string, headers: GetLayerVersionHeaders, runtime: $Util.RuntimeOptions): Promise<GetLayerVersionResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "GetLayerVersion",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/layers/${OpenApiUtil.getEncodeParam(layerName)}/versions/${OpenApiUtil.getEncodeParam(version)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetLayerVersionResponse>(await this.callApi(params, req, runtime), new GetLayerVersionResponse({}));
  }

  async getLayerVersion(layerName: string, version: string): Promise<GetLayerVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetLayerVersionHeaders({ });
    return await this.getLayerVersionWithOptions(layerName, version, headers, runtime);
  }

  async getProvisionConfigWithOptions(serviceName: string, functionName: string, request: GetProvisionConfigRequest, headers: GetProvisionConfigHeaders, runtime: $Util.RuntimeOptions): Promise<GetProvisionConfigResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetProvisionConfig",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/services/${OpenApiUtil.getEncodeParam(serviceName)}/functions/${OpenApiUtil.getEncodeParam(functionName)}/provision-config`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetProvisionConfigResponse>(await this.callApi(params, req, runtime), new GetProvisionConfigResponse({}));
  }

  async getProvisionConfig(serviceName: string, functionName: string, request: GetProvisionConfigRequest): Promise<GetProvisionConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetProvisionConfigHeaders({ });
    return await this.getProvisionConfigWithOptions(serviceName, functionName, request, headers, runtime);
  }

  async getResourceTagsWithOptions(request: GetResourceTagsRequest, headers: GetResourceTagsHeaders, runtime: $Util.RuntimeOptions): Promise<GetResourceTagsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resourceArn)) {
      query["resourceArn"] = request.resourceArn;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetResourceTags",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/tag`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetResourceTagsResponse>(await this.callApi(params, req, runtime), new GetResourceTagsResponse({}));
  }

  async getResourceTags(request: GetResourceTagsRequest): Promise<GetResourceTagsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetResourceTagsHeaders({ });
    return await this.getResourceTagsWithOptions(request, headers, runtime);
  }

  async getServiceWithOptions(serviceName: string, request: GetServiceRequest, headers: GetServiceHeaders, runtime: $Util.RuntimeOptions): Promise<GetServiceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetService",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/services/${OpenApiUtil.getEncodeParam(serviceName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetServiceResponse>(await this.callApi(params, req, runtime), new GetServiceResponse({}));
  }

  async getService(serviceName: string, request: GetServiceRequest): Promise<GetServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetServiceHeaders({ });
    return await this.getServiceWithOptions(serviceName, request, headers, runtime);
  }

  /**
    * The version or alias of the service to which the asynchronous task belongs.
    *
    * @param request GetStatefulAsyncInvocationRequest
    * @param headers GetStatefulAsyncInvocationHeaders
    * @param runtime runtime options for this request RuntimeOptions
    * @return GetStatefulAsyncInvocationResponse
   */
  async getStatefulAsyncInvocationWithOptions(serviceName: string, functionName: string, invocationId: string, request: GetStatefulAsyncInvocationRequest, headers: GetStatefulAsyncInvocationHeaders, runtime: $Util.RuntimeOptions): Promise<GetStatefulAsyncInvocationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcCodeChecksum)) {
      realHeaders["X-Fc-Code-Checksum"] = Util.toJSONString(headers.xFcCodeChecksum);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcInvocationType)) {
      realHeaders["X-Fc-Invocation-Type"] = Util.toJSONString(headers.xFcInvocationType);
    }

    if (!Util.isUnset(headers.xFcLogType)) {
      realHeaders["X-Fc-Log-Type"] = Util.toJSONString(headers.xFcLogType);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetStatefulAsyncInvocation",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/services/${OpenApiUtil.getEncodeParam(serviceName)}/functions/${OpenApiUtil.getEncodeParam(functionName)}/stateful-async-invocations/${OpenApiUtil.getEncodeParam(invocationId)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetStatefulAsyncInvocationResponse>(await this.callApi(params, req, runtime), new GetStatefulAsyncInvocationResponse({}));
  }

  /**
    * The version or alias of the service to which the asynchronous task belongs.
    *
    * @param request GetStatefulAsyncInvocationRequest
    * @return GetStatefulAsyncInvocationResponse
   */
  async getStatefulAsyncInvocation(serviceName: string, functionName: string, invocationId: string, request: GetStatefulAsyncInvocationRequest): Promise<GetStatefulAsyncInvocationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetStatefulAsyncInvocationHeaders({ });
    return await this.getStatefulAsyncInvocationWithOptions(serviceName, functionName, invocationId, request, headers, runtime);
  }

  async getTriggerWithOptions(serviceName: string, functionName: string, triggerName: string, headers: GetTriggerHeaders, runtime: $Util.RuntimeOptions): Promise<GetTriggerResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "GetTrigger",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/services/${OpenApiUtil.getEncodeParam(serviceName)}/functions/${OpenApiUtil.getEncodeParam(functionName)}/triggers/${OpenApiUtil.getEncodeParam(triggerName)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetTriggerResponse>(await this.callApi(params, req, runtime), new GetTriggerResponse({}));
  }

  async getTrigger(serviceName: string, functionName: string, triggerName: string): Promise<GetTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new GetTriggerHeaders({ });
    return await this.getTriggerWithOptions(serviceName, functionName, triggerName, headers, runtime);
  }

  async invokeFunctionWithOptions(serviceName: string, functionName: string, request: InvokeFunctionRequest, headers: InvokeFunctionHeaders, runtime: $Util.RuntimeOptions): Promise<InvokeFunctionResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let body : Buffer = null;
    if (!Util.isUnset(request.body)) {
      body = request.body;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcInvocationType)) {
      realHeaders["X-Fc-Invocation-Type"] = Util.toJSONString(headers.xFcInvocationType);
    }

    if (!Util.isUnset(headers.xFcLogType)) {
      realHeaders["X-Fc-Log-Type"] = Util.toJSONString(headers.xFcLogType);
    }

    if (!Util.isUnset(headers.xFcStatefulAsyncInvocationEnable)) {
      realHeaders["X-Fc-Stateful-Async-Invocation-Enable"] = Util.toJSONString(headers.xFcStatefulAsyncInvocationEnable);
    }

    if (!Util.isUnset(headers.xFcStatefulAsyncInvocationId)) {
      realHeaders["X-Fc-Stateful-Async-Invocation-Id"] = Util.toJSONString(headers.xFcStatefulAsyncInvocationId);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: body,
    });
    let params = new $OpenApi.Params({
      action: "InvokeFunction",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/services/${OpenApiUtil.getEncodeParam(serviceName)}/functions/${OpenApiUtil.getEncodeParam(functionName)}/invocations`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "byte",
      bodyType: "byte",
    });
    return $tea.cast<InvokeFunctionResponse>(await this.callApi(params, req, runtime), new InvokeFunctionResponse({}));
  }

  async invokeFunction(serviceName: string, functionName: string, request: InvokeFunctionRequest): Promise<InvokeFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new InvokeFunctionHeaders({ });
    return await this.invokeFunctionWithOptions(serviceName, functionName, request, headers, runtime);
  }

  async listAliasesWithOptions(serviceName: string, request: ListAliasesRequest, headers: ListAliasesHeaders, runtime: $Util.RuntimeOptions): Promise<ListAliasesResponse> {
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

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListAliases",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/services/${OpenApiUtil.getEncodeParam(serviceName)}/aliases`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListAliasesResponse>(await this.callApi(params, req, runtime), new ListAliasesResponse({}));
  }

  async listAliases(serviceName: string, request: ListAliasesRequest): Promise<ListAliasesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListAliasesHeaders({ });
    return await this.listAliasesWithOptions(serviceName, request, headers, runtime);
  }

  async listCustomDomainsWithOptions(request: ListCustomDomainsRequest, headers: ListCustomDomainsHeaders, runtime: $Util.RuntimeOptions): Promise<ListCustomDomainsResponse> {
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

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListCustomDomains",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/custom-domains`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListCustomDomainsResponse>(await this.callApi(params, req, runtime), new ListCustomDomainsResponse({}));
  }

  async listCustomDomains(request: ListCustomDomainsRequest): Promise<ListCustomDomainsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListCustomDomainsHeaders({ });
    return await this.listCustomDomainsWithOptions(request, headers, runtime);
  }

  async listEventSourcesWithOptions(serviceName: string, functionName: string, request: ListEventSourcesRequest, headers: ListEventSourcesHeaders, runtime: $Util.RuntimeOptions): Promise<ListEventSourcesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListEventSources",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/services/${OpenApiUtil.getEncodeParam(serviceName)}/functions/${OpenApiUtil.getEncodeParam(functionName)}/event-sources`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListEventSourcesResponse>(await this.callApi(params, req, runtime), new ListEventSourcesResponse({}));
  }

  async listEventSources(serviceName: string, functionName: string, request: ListEventSourcesRequest): Promise<ListEventSourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListEventSourcesHeaders({ });
    return await this.listEventSourcesWithOptions(serviceName, functionName, request, headers, runtime);
  }

  /**
    * StatefulAsyncInvocation indicates whether the asynchronous task feature is enabled. If StatefulAsyncInvocation is set to true, the asynchronous task is enabled. All asynchronous invocations to the function corresponding to this configuration change to asynchronous task mode.
    *
    * @param request ListFunctionAsyncInvokeConfigsRequest
    * @param headers ListFunctionAsyncInvokeConfigsHeaders
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListFunctionAsyncInvokeConfigsResponse
   */
  async listFunctionAsyncInvokeConfigsWithOptions(serviceName: string, functionName: string, request: ListFunctionAsyncInvokeConfigsRequest, headers: ListFunctionAsyncInvokeConfigsHeaders, runtime: $Util.RuntimeOptions): Promise<ListFunctionAsyncInvokeConfigsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.limit)) {
      query["limit"] = request.limit;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcCodeChecksum)) {
      realHeaders["X-Fc-Code-Checksum"] = Util.toJSONString(headers.xFcCodeChecksum);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcInvocationType)) {
      realHeaders["X-Fc-Invocation-Type"] = Util.toJSONString(headers.xFcInvocationType);
    }

    if (!Util.isUnset(headers.xFcLogType)) {
      realHeaders["X-Fc-Log-Type"] = Util.toJSONString(headers.xFcLogType);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListFunctionAsyncInvokeConfigs",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/services/${OpenApiUtil.getEncodeParam(serviceName)}/functions/${OpenApiUtil.getEncodeParam(functionName)}/async-invoke-configs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListFunctionAsyncInvokeConfigsResponse>(await this.callApi(params, req, runtime), new ListFunctionAsyncInvokeConfigsResponse({}));
  }

  /**
    * StatefulAsyncInvocation indicates whether the asynchronous task feature is enabled. If StatefulAsyncInvocation is set to true, the asynchronous task is enabled. All asynchronous invocations to the function corresponding to this configuration change to asynchronous task mode.
    *
    * @param request ListFunctionAsyncInvokeConfigsRequest
    * @return ListFunctionAsyncInvokeConfigsResponse
   */
  async listFunctionAsyncInvokeConfigs(serviceName: string, functionName: string, request: ListFunctionAsyncInvokeConfigsRequest): Promise<ListFunctionAsyncInvokeConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListFunctionAsyncInvokeConfigsHeaders({ });
    return await this.listFunctionAsyncInvokeConfigsWithOptions(serviceName, functionName, request, headers, runtime);
  }

  async listFunctionsWithOptions(serviceName: string, request: ListFunctionsRequest, headers: ListFunctionsHeaders, runtime: $Util.RuntimeOptions): Promise<ListFunctionsResponse> {
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

    if (!Util.isUnset(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    if (!Util.isUnset(request.startKey)) {
      query["startKey"] = request.startKey;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListFunctions",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/services/${OpenApiUtil.getEncodeParam(serviceName)}/functions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListFunctionsResponse>(await this.callApi(params, req, runtime), new ListFunctionsResponse({}));
  }

  async listFunctions(serviceName: string, request: ListFunctionsRequest): Promise<ListFunctionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListFunctionsHeaders({ });
    return await this.listFunctionsWithOptions(serviceName, request, headers, runtime);
  }

  /**
    * The ListInstances operation allows you to query the available instances of a function.
    * Available instances are instances that are processing requests or can be scheduled to process requests. Available instances queried by the ListInstances operation are the same as those that can be used when you call the InvokeFunction operation with the same values specified for the `serviceName`, `functionName`, and `qualifier` parameters.
    *
    * @param request ListInstancesRequest
    * @param headers ListInstancesHeaders
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListInstancesResponse
   */
  async listInstancesWithOptions(serviceName: string, functionName: string, request: ListInstancesRequest, headers: ListInstancesHeaders, runtime: $Util.RuntimeOptions): Promise<ListInstancesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceIds)) {
      query["instanceIds"] = request.instanceIds;
    }

    if (!Util.isUnset(request.limit)) {
      query["limit"] = request.limit;
    }

    if (!Util.isUnset(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListInstances",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/services/${OpenApiUtil.getEncodeParam(serviceName)}/functions/${OpenApiUtil.getEncodeParam(functionName)}/instances`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListInstancesResponse>(await this.callApi(params, req, runtime), new ListInstancesResponse({}));
  }

  /**
    * The ListInstances operation allows you to query the available instances of a function.
    * Available instances are instances that are processing requests or can be scheduled to process requests. Available instances queried by the ListInstances operation are the same as those that can be used when you call the InvokeFunction operation with the same values specified for the `serviceName`, `functionName`, and `qualifier` parameters.
    *
    * @param request ListInstancesRequest
    * @return ListInstancesResponse
   */
  async listInstances(serviceName: string, functionName: string, request: ListInstancesRequest): Promise<ListInstancesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListInstancesHeaders({ });
    return await this.listInstancesWithOptions(serviceName, functionName, request, headers, runtime);
  }

  async listLayerVersionsWithOptions(layerName: string, request: ListLayerVersionsRequest, headers: ListLayerVersionsHeaders, runtime: $Util.RuntimeOptions): Promise<ListLayerVersionsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.limit)) {
      query["limit"] = request.limit;
    }

    if (!Util.isUnset(request.startVersion)) {
      query["startVersion"] = request.startVersion;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListLayerVersions",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/layers/${OpenApiUtil.getEncodeParam(layerName)}/versions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListLayerVersionsResponse>(await this.callApi(params, req, runtime), new ListLayerVersionsResponse({}));
  }

  async listLayerVersions(layerName: string, request: ListLayerVersionsRequest): Promise<ListLayerVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListLayerVersionsHeaders({ });
    return await this.listLayerVersionsWithOptions(layerName, request, headers, runtime);
  }

  async listLayersWithOptions(request: ListLayersRequest, headers: ListLayersHeaders, runtime: $Util.RuntimeOptions): Promise<ListLayersResponse> {
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

    if (!Util.isUnset(request.startKey)) {
      query["startKey"] = request.startKey;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListLayers",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/layers`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListLayersResponse>(await this.callApi(params, req, runtime), new ListLayersResponse({}));
  }

  async listLayers(request: ListLayersRequest): Promise<ListLayersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListLayersHeaders({ });
    return await this.listLayersWithOptions(request, headers, runtime);
  }

  async listOnDemandConfigsWithOptions(request: ListOnDemandConfigsRequest, headers: ListOnDemandConfigsHeaders, runtime: $Util.RuntimeOptions): Promise<ListOnDemandConfigsResponse> {
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

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListOnDemandConfigs",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/on-demand-configs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListOnDemandConfigsResponse>(await this.callApi(params, req, runtime), new ListOnDemandConfigsResponse({}));
  }

  async listOnDemandConfigs(request: ListOnDemandConfigsRequest): Promise<ListOnDemandConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListOnDemandConfigsHeaders({ });
    return await this.listOnDemandConfigsWithOptions(request, headers, runtime);
  }

  async listProvisionConfigsWithOptions(request: ListProvisionConfigsRequest, headers: ListProvisionConfigsHeaders, runtime: $Util.RuntimeOptions): Promise<ListProvisionConfigsResponse> {
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

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListProvisionConfigs",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/provision-configs`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListProvisionConfigsResponse>(await this.callApi(params, req, runtime), new ListProvisionConfigsResponse({}));
  }

  async listProvisionConfigs(request: ListProvisionConfigsRequest): Promise<ListProvisionConfigsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListProvisionConfigsHeaders({ });
    return await this.listProvisionConfigsWithOptions(request, headers, runtime);
  }

  async listReservedCapacitiesWithOptions(request: ListReservedCapacitiesRequest, headers: ListReservedCapacitiesHeaders, runtime: $Util.RuntimeOptions): Promise<ListReservedCapacitiesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.limit)) {
      query["limit"] = request.limit;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListReservedCapacities",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/reserved-capacities`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListReservedCapacitiesResponse>(await this.callApi(params, req, runtime), new ListReservedCapacitiesResponse({}));
  }

  async listReservedCapacities(request: ListReservedCapacitiesRequest): Promise<ListReservedCapacitiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListReservedCapacitiesHeaders({ });
    return await this.listReservedCapacitiesWithOptions(request, headers, runtime);
  }

  async listServiceVersionsWithOptions(serviceName: string, request: ListServiceVersionsRequest, headers: ListServiceVersionsHeaders, runtime: $Util.RuntimeOptions): Promise<ListServiceVersionsResponse> {
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

    if (!Util.isUnset(request.startKey)) {
      query["startKey"] = request.startKey;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListServiceVersions",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/services/${OpenApiUtil.getEncodeParam(serviceName)}/versions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListServiceVersionsResponse>(await this.callApi(params, req, runtime), new ListServiceVersionsResponse({}));
  }

  async listServiceVersions(serviceName: string, request: ListServiceVersionsRequest): Promise<ListServiceVersionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListServiceVersionsHeaders({ });
    return await this.listServiceVersionsWithOptions(serviceName, request, headers, runtime);
  }

  async listServicesWithOptions(request: ListServicesRequest, headers: ListServicesHeaders, runtime: $Util.RuntimeOptions): Promise<ListServicesResponse> {
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

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListServices",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/services`,
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
    let headers = new ListServicesHeaders({ });
    return await this.listServicesWithOptions(request, headers, runtime);
  }

  /**
    * The metadata of the service and function to which the asynchronous task belongs.
    *
    * @param request ListStatefulAsyncInvocationFunctionsRequest
    * @param headers ListStatefulAsyncInvocationFunctionsHeaders
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListStatefulAsyncInvocationFunctionsResponse
   */
  async listStatefulAsyncInvocationFunctionsWithOptions(request: ListStatefulAsyncInvocationFunctionsRequest, headers: ListStatefulAsyncInvocationFunctionsHeaders, runtime: $Util.RuntimeOptions): Promise<ListStatefulAsyncInvocationFunctionsResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.limit)) {
      query["limit"] = request.limit;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListStatefulAsyncInvocationFunctions",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/stateful-async-invocation-functions`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListStatefulAsyncInvocationFunctionsResponse>(await this.callApi(params, req, runtime), new ListStatefulAsyncInvocationFunctionsResponse({}));
  }

  /**
    * The metadata of the service and function to which the asynchronous task belongs.
    *
    * @param request ListStatefulAsyncInvocationFunctionsRequest
    * @return ListStatefulAsyncInvocationFunctionsResponse
   */
  async listStatefulAsyncInvocationFunctions(request: ListStatefulAsyncInvocationFunctionsRequest): Promise<ListStatefulAsyncInvocationFunctionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListStatefulAsyncInvocationFunctionsHeaders({ });
    return await this.listStatefulAsyncInvocationFunctionsWithOptions(request, headers, runtime);
  }

  /**
    * The name of the service to which the asynchronous task belongs.
    *
    * @param request ListStatefulAsyncInvocationsRequest
    * @param headers ListStatefulAsyncInvocationsHeaders
    * @param runtime runtime options for this request RuntimeOptions
    * @return ListStatefulAsyncInvocationsResponse
   */
  async listStatefulAsyncInvocationsWithOptions(serviceName: string, functionName: string, request: ListStatefulAsyncInvocationsRequest, headers: ListStatefulAsyncInvocationsHeaders, runtime: $Util.RuntimeOptions): Promise<ListStatefulAsyncInvocationsResponse> {
    Util.validateModel(request);
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

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcCodeChecksum)) {
      realHeaders["X-Fc-Code-Checksum"] = Util.toJSONString(headers.xFcCodeChecksum);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcInvocationType)) {
      realHeaders["X-Fc-Invocation-Type"] = Util.toJSONString(headers.xFcInvocationType);
    }

    if (!Util.isUnset(headers.xFcLogType)) {
      realHeaders["X-Fc-Log-Type"] = Util.toJSONString(headers.xFcLogType);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListStatefulAsyncInvocations",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/services/${OpenApiUtil.getEncodeParam(serviceName)}/functions/${OpenApiUtil.getEncodeParam(functionName)}/stateful-async-invocations`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListStatefulAsyncInvocationsResponse>(await this.callApi(params, req, runtime), new ListStatefulAsyncInvocationsResponse({}));
  }

  /**
    * The name of the service to which the asynchronous task belongs.
    *
    * @param request ListStatefulAsyncInvocationsRequest
    * @return ListStatefulAsyncInvocationsResponse
   */
  async listStatefulAsyncInvocations(serviceName: string, functionName: string, request: ListStatefulAsyncInvocationsRequest): Promise<ListStatefulAsyncInvocationsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListStatefulAsyncInvocationsHeaders({ });
    return await this.listStatefulAsyncInvocationsWithOptions(serviceName, functionName, request, headers, runtime);
  }

  async listTaggedResourcesWithOptions(request: ListTaggedResourcesRequest, headers: ListTaggedResourcesHeaders, runtime: $Util.RuntimeOptions): Promise<ListTaggedResourcesResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.limit)) {
      query["limit"] = request.limit;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["nextToken"] = request.nextToken;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTaggedResources",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/tags`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListTaggedResourcesResponse>(await this.callApi(params, req, runtime), new ListTaggedResourcesResponse({}));
  }

  async listTaggedResources(request: ListTaggedResourcesRequest): Promise<ListTaggedResourcesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListTaggedResourcesHeaders({ });
    return await this.listTaggedResourcesWithOptions(request, headers, runtime);
  }

  async listTriggersWithOptions(serviceName: string, functionName: string, request: ListTriggersRequest, headers: ListTriggersHeaders, runtime: $Util.RuntimeOptions): Promise<ListTriggersResponse> {
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

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTriggers",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/services/${OpenApiUtil.getEncodeParam(serviceName)}/functions/${OpenApiUtil.getEncodeParam(functionName)}/triggers`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListTriggersResponse>(await this.callApi(params, req, runtime), new ListTriggersResponse({}));
  }

  async listTriggers(serviceName: string, functionName: string, request: ListTriggersRequest): Promise<ListTriggersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListTriggersHeaders({ });
    return await this.listTriggersWithOptions(serviceName, functionName, request, headers, runtime);
  }

  async listVpcBindingsWithOptions(serviceName: string, headers: ListVpcBindingsHeaders, runtime: $Util.RuntimeOptions): Promise<ListVpcBindingsResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "ListVpcBindings",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/services/${OpenApiUtil.getEncodeParam(serviceName)}/bindings`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListVpcBindingsResponse>(await this.callApi(params, req, runtime), new ListVpcBindingsResponse({}));
  }

  async listVpcBindings(serviceName: string): Promise<ListVpcBindingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ListVpcBindingsHeaders({ });
    return await this.listVpcBindingsWithOptions(serviceName, headers, runtime);
  }

  async publishServiceVersionWithOptions(serviceName: string, request: PublishServiceVersionRequest, headers: PublishServiceVersionHeaders, runtime: $Util.RuntimeOptions): Promise<PublishServiceVersionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.ifMatch)) {
      realHeaders["If-Match"] = Util.toJSONString(headers.ifMatch);
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PublishServiceVersion",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/services/${OpenApiUtil.getEncodeParam(serviceName)}/versions`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PublishServiceVersionResponse>(await this.callApi(params, req, runtime), new PublishServiceVersionResponse({}));
  }

  async publishServiceVersion(serviceName: string, request: PublishServiceVersionRequest): Promise<PublishServiceVersionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new PublishServiceVersionHeaders({ });
    return await this.publishServiceVersionWithOptions(serviceName, request, headers, runtime);
  }

  /**
    * The maximum validity period of messages.
    *
    * @param request PutFunctionAsyncInvokeConfigRequest
    * @param headers PutFunctionAsyncInvokeConfigHeaders
    * @param runtime runtime options for this request RuntimeOptions
    * @return PutFunctionAsyncInvokeConfigResponse
   */
  async putFunctionAsyncInvokeConfigWithOptions(serviceName: string, functionName: string, request: PutFunctionAsyncInvokeConfigRequest, headers: PutFunctionAsyncInvokeConfigHeaders, runtime: $Util.RuntimeOptions): Promise<PutFunctionAsyncInvokeConfigResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.destinationConfig)) {
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

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PutFunctionAsyncInvokeConfig",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/services/${OpenApiUtil.getEncodeParam(serviceName)}/functions/${OpenApiUtil.getEncodeParam(functionName)}/async-invoke-config`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PutFunctionAsyncInvokeConfigResponse>(await this.callApi(params, req, runtime), new PutFunctionAsyncInvokeConfigResponse({}));
  }

  /**
    * The maximum validity period of messages.
    *
    * @param request PutFunctionAsyncInvokeConfigRequest
    * @return PutFunctionAsyncInvokeConfigResponse
   */
  async putFunctionAsyncInvokeConfig(serviceName: string, functionName: string, request: PutFunctionAsyncInvokeConfigRequest): Promise<PutFunctionAsyncInvokeConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new PutFunctionAsyncInvokeConfigHeaders({ });
    return await this.putFunctionAsyncInvokeConfigWithOptions(serviceName, functionName, request, headers, runtime);
  }

  async putFunctionOnDemandConfigWithOptions(serviceName: string, functionName: string, request: PutFunctionOnDemandConfigRequest, headers: PutFunctionOnDemandConfigHeaders, runtime: $Util.RuntimeOptions): Promise<PutFunctionOnDemandConfigResponse> {
    Util.validateModel(request);
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
      realHeaders["If-Match"] = Util.toJSONString(headers.ifMatch);
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PutFunctionOnDemandConfig",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/services/${OpenApiUtil.getEncodeParam(serviceName)}/functions/${OpenApiUtil.getEncodeParam(functionName)}/on-demand-config`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PutFunctionOnDemandConfigResponse>(await this.callApi(params, req, runtime), new PutFunctionOnDemandConfigResponse({}));
  }

  async putFunctionOnDemandConfig(serviceName: string, functionName: string, request: PutFunctionOnDemandConfigRequest): Promise<PutFunctionOnDemandConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new PutFunctionOnDemandConfigHeaders({ });
    return await this.putFunctionOnDemandConfigWithOptions(serviceName, functionName, request, headers, runtime);
  }

  async putLayerACLWithOptions(layerName: string, request: PutLayerACLRequest, headers: PutLayerACLHeaders, runtime: $Util.RuntimeOptions): Promise<PutLayerACLResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.public)) {
      query["public"] = request.public;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "PutLayerACL",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/layers/${OpenApiUtil.getEncodeParam(layerName)}/acl`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<PutLayerACLResponse>(await this.callApi(params, req, runtime), new PutLayerACLResponse({}));
  }

  async putLayerACL(layerName: string, request: PutLayerACLRequest): Promise<PutLayerACLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new PutLayerACLHeaders({ });
    return await this.putLayerACLWithOptions(layerName, request, headers, runtime);
  }

  async putProvisionConfigWithOptions(serviceName: string, functionName: string, request: PutProvisionConfigRequest, headers: PutProvisionConfigHeaders, runtime: $Util.RuntimeOptions): Promise<PutProvisionConfigResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.alwaysAllocateCPU)) {
      body["alwaysAllocateCPU"] = request.alwaysAllocateCPU;
    }

    if (!Util.isUnset(request.scheduledActions)) {
      body["scheduledActions"] = request.scheduledActions;
    }

    if (!Util.isUnset(request.target)) {
      body["target"] = request.target;
    }

    if (!Util.isUnset(request.targetTrackingPolicies)) {
      body["targetTrackingPolicies"] = request.targetTrackingPolicies;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "PutProvisionConfig",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/services/${OpenApiUtil.getEncodeParam(serviceName)}/functions/${OpenApiUtil.getEncodeParam(functionName)}/provision-config`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<PutProvisionConfigResponse>(await this.callApi(params, req, runtime), new PutProvisionConfigResponse({}));
  }

  async putProvisionConfig(serviceName: string, functionName: string, request: PutProvisionConfigRequest): Promise<PutProvisionConfigResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new PutProvisionConfigHeaders({ });
    return await this.putProvisionConfigWithOptions(serviceName, functionName, request, headers, runtime);
  }

  async registerEventSourceWithOptions(serviceName: string, functionName: string, request: RegisterEventSourceRequest, headers: RegisterEventSourceHeaders, runtime: $Util.RuntimeOptions): Promise<RegisterEventSourceResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.sourceArn)) {
      body["sourceArn"] = request.sourceArn;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RegisterEventSource",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/services/${OpenApiUtil.getEncodeParam(serviceName)}/functions/${OpenApiUtil.getEncodeParam(functionName)}/event-sources`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RegisterEventSourceResponse>(await this.callApi(params, req, runtime), new RegisterEventSourceResponse({}));
  }

  async registerEventSource(serviceName: string, functionName: string, request: RegisterEventSourceRequest): Promise<RegisterEventSourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new RegisterEventSourceHeaders({ });
    return await this.registerEventSourceWithOptions(serviceName, functionName, request, headers, runtime);
  }

  async releaseGPUInstanceWithOptions(instanceId: string, headers: ReleaseGPUInstanceHeaders, runtime: $Util.RuntimeOptions): Promise<ReleaseGPUInstanceResponse> {
    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
    });
    let params = new $OpenApi.Params({
      action: "ReleaseGPUInstance",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/gpuInstances/${OpenApiUtil.getEncodeParam(instanceId)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<ReleaseGPUInstanceResponse>(await this.callApi(params, req, runtime), new ReleaseGPUInstanceResponse({}));
  }

  async releaseGPUInstance(instanceId: string): Promise<ReleaseGPUInstanceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new ReleaseGPUInstanceHeaders({ });
    return await this.releaseGPUInstanceWithOptions(instanceId, headers, runtime);
  }

  /**
    * StatefulAsyncInvocation: asynchronous task. Asynchronous tasks allow you to manage the states on the basis of common asynchronous invocations, which is more suitable for task scenarios.
    *
    * @param request StopStatefulAsyncInvocationRequest
    * @param headers StopStatefulAsyncInvocationHeaders
    * @param runtime runtime options for this request RuntimeOptions
    * @return StopStatefulAsyncInvocationResponse
   */
  async stopStatefulAsyncInvocationWithOptions(serviceName: string, functionName: string, invocationId: string, request: StopStatefulAsyncInvocationRequest, headers: StopStatefulAsyncInvocationHeaders, runtime: $Util.RuntimeOptions): Promise<StopStatefulAsyncInvocationResponse> {
    Util.validateModel(request);
    let query : {[key: string ]: any} = { };
    if (!Util.isUnset(request.qualifier)) {
      query["qualifier"] = request.qualifier;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "StopStatefulAsyncInvocation",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/services/${OpenApiUtil.getEncodeParam(serviceName)}/functions/${OpenApiUtil.getEncodeParam(functionName)}/stateful-async-invocations/${OpenApiUtil.getEncodeParam(invocationId)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<StopStatefulAsyncInvocationResponse>(await this.callApi(params, req, runtime), new StopStatefulAsyncInvocationResponse({}));
  }

  /**
    * StatefulAsyncInvocation: asynchronous task. Asynchronous tasks allow you to manage the states on the basis of common asynchronous invocations, which is more suitable for task scenarios.
    *
    * @param request StopStatefulAsyncInvocationRequest
    * @return StopStatefulAsyncInvocationResponse
   */
  async stopStatefulAsyncInvocation(serviceName: string, functionName: string, invocationId: string, request: StopStatefulAsyncInvocationRequest): Promise<StopStatefulAsyncInvocationResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new StopStatefulAsyncInvocationHeaders({ });
    return await this.stopStatefulAsyncInvocationWithOptions(serviceName, functionName, invocationId, request, headers, runtime);
  }

  async tagResourceWithOptions(request: TagResourceRequest, headers: TagResourceHeaders, runtime: $Util.RuntimeOptions): Promise<TagResourceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.resourceArn)) {
      body["resourceArn"] = request.resourceArn;
    }

    if (!Util.isUnset(request.tags)) {
      body["tags"] = request.tags;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "TagResource",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/tag`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<TagResourceResponse>(await this.callApi(params, req, runtime), new TagResourceResponse({}));
  }

  async tagResource(request: TagResourceRequest): Promise<TagResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new TagResourceHeaders({ });
    return await this.tagResourceWithOptions(request, headers, runtime);
  }

  async untagResourceWithOptions(request: UntagResourceRequest, headers: UntagResourceHeaders, runtime: $Util.RuntimeOptions): Promise<UntagResourceResponse> {
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

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UntagResource",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/tag`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    return $tea.cast<UntagResourceResponse>(await this.callApi(params, req, runtime), new UntagResourceResponse({}));
  }

  async untagResource(request: UntagResourceRequest): Promise<UntagResourceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UntagResourceHeaders({ });
    return await this.untagResourceWithOptions(request, headers, runtime);
  }

  async updateAliasWithOptions(serviceName: string, aliasName: string, request: UpdateAliasRequest, headers: UpdateAliasHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateAliasResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.additionalVersionWeight)) {
      body["additionalVersionWeight"] = request.additionalVersionWeight;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.resolvePolicy)) {
      body["resolvePolicy"] = request.resolvePolicy;
    }

    if (!Util.isUnset(request.routePolicy)) {
      body["routePolicy"] = request.routePolicy;
    }

    if (!Util.isUnset(request.versionId)) {
      body["versionId"] = request.versionId;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.ifMatch)) {
      realHeaders["If-Match"] = Util.toJSONString(headers.ifMatch);
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateAlias",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/services/${OpenApiUtil.getEncodeParam(serviceName)}/aliases/${OpenApiUtil.getEncodeParam(aliasName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateAliasResponse>(await this.callApi(params, req, runtime), new UpdateAliasResponse({}));
  }

  async updateAlias(serviceName: string, aliasName: string, request: UpdateAliasRequest): Promise<UpdateAliasResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateAliasHeaders({ });
    return await this.updateAliasWithOptions(serviceName, aliasName, request, headers, runtime);
  }

  async updateCustomDomainWithOptions(domainName: string, request: UpdateCustomDomainRequest, headers: UpdateCustomDomainHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateCustomDomainResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.certConfig)) {
      body["certConfig"] = request.certConfig;
    }

    if (!Util.isUnset(request.protocol)) {
      body["protocol"] = request.protocol;
    }

    if (!Util.isUnset(request.routeConfig)) {
      body["routeConfig"] = request.routeConfig;
    }

    if (!Util.isUnset(request.tlsConfig)) {
      body["tlsConfig"] = request.tlsConfig;
    }

    if (!Util.isUnset(request.wafConfig)) {
      body["wafConfig"] = request.wafConfig;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateCustomDomain",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/custom-domains/${OpenApiUtil.getEncodeParam(domainName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateCustomDomainResponse>(await this.callApi(params, req, runtime), new UpdateCustomDomainResponse({}));
  }

  async updateCustomDomain(domainName: string, request: UpdateCustomDomainRequest): Promise<UpdateCustomDomainResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateCustomDomainHeaders({ });
    return await this.updateCustomDomainWithOptions(domainName, request, headers, runtime);
  }

  async updateFunctionWithOptions(serviceName: string, functionName: string, request: UpdateFunctionRequest, headers: UpdateFunctionHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateFunctionResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.instanceConcurrency)) {
      body["InstanceConcurrency"] = request.instanceConcurrency;
    }

    if (!Util.isUnset(request.caPort)) {
      body["caPort"] = request.caPort;
    }

    if (!Util.isUnset(request.code)) {
      body["code"] = request.code;
    }

    if (!Util.isUnset(request.cpu)) {
      body["cpu"] = request.cpu;
    }

    if (!Util.isUnset(request.customContainerConfig)) {
      body["customContainerConfig"] = request.customContainerConfig;
    }

    if (!Util.isUnset(request.customDNS)) {
      body["customDNS"] = request.customDNS;
    }

    if (!Util.isUnset(request.customHealthCheckConfig)) {
      body["customHealthCheckConfig"] = request.customHealthCheckConfig;
    }

    if (!Util.isUnset(request.customRuntimeConfig)) {
      body["customRuntimeConfig"] = request.customRuntimeConfig;
    }

    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.diskSize)) {
      body["diskSize"] = request.diskSize;
    }

    if (!Util.isUnset(request.environmentVariables)) {
      body["environmentVariables"] = request.environmentVariables;
    }

    if (!Util.isUnset(request.gpuMemorySize)) {
      body["gpuMemorySize"] = request.gpuMemorySize;
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

    if (!Util.isUnset(request.instanceLifecycleConfig)) {
      body["instanceLifecycleConfig"] = request.instanceLifecycleConfig;
    }

    if (!Util.isUnset(request.instanceSoftConcurrency)) {
      body["instanceSoftConcurrency"] = request.instanceSoftConcurrency;
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
      realHeaders["If-Match"] = Util.toJSONString(headers.ifMatch);
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcCodeChecksum)) {
      realHeaders["X-Fc-Code-Checksum"] = Util.toJSONString(headers.xFcCodeChecksum);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateFunction",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/services/${OpenApiUtil.getEncodeParam(serviceName)}/functions/${OpenApiUtil.getEncodeParam(functionName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateFunctionResponse>(await this.callApi(params, req, runtime), new UpdateFunctionResponse({}));
  }

  async updateFunction(serviceName: string, functionName: string, request: UpdateFunctionRequest): Promise<UpdateFunctionResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateFunctionHeaders({ });
    return await this.updateFunctionWithOptions(serviceName, functionName, request, headers, runtime);
  }

  async updateServiceWithOptions(serviceName: string, request: UpdateServiceRequest, headers: UpdateServiceHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateServiceResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.description)) {
      body["description"] = request.description;
    }

    if (!Util.isUnset(request.internetAccess)) {
      body["internetAccess"] = request.internetAccess;
    }

    if (!Util.isUnset(request.logConfig)) {
      body["logConfig"] = request.logConfig;
    }

    if (!Util.isUnset(request.nasConfig)) {
      body["nasConfig"] = request.nasConfig;
    }

    if (!Util.isUnset(request.ossMountConfig)) {
      body["ossMountConfig"] = request.ossMountConfig;
    }

    if (!Util.isUnset(request.role)) {
      body["role"] = request.role;
    }

    if (!Util.isUnset(request.tracingConfig)) {
      body["tracingConfig"] = request.tracingConfig;
    }

    if (!Util.isUnset(request.vpcConfig)) {
      body["vpcConfig"] = request.vpcConfig;
    }

    let realHeaders : {[key: string ]: string} = { };
    if (!Util.isUnset(headers.commonHeaders)) {
      realHeaders = headers.commonHeaders;
    }

    if (!Util.isUnset(headers.ifMatch)) {
      realHeaders["If-Match"] = Util.toJSONString(headers.ifMatch);
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateService",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/services/${OpenApiUtil.getEncodeParam(serviceName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateServiceResponse>(await this.callApi(params, req, runtime), new UpdateServiceResponse({}));
  }

  async updateService(serviceName: string, request: UpdateServiceRequest): Promise<UpdateServiceResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateServiceHeaders({ });
    return await this.updateServiceWithOptions(serviceName, request, headers, runtime);
  }

  async updateTriggerWithOptions(serviceName: string, functionName: string, triggerName: string, request: UpdateTriggerRequest, headers: UpdateTriggerHeaders, runtime: $Util.RuntimeOptions): Promise<UpdateTriggerResponse> {
    Util.validateModel(request);
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
      realHeaders["If-Match"] = Util.toJSONString(headers.ifMatch);
    }

    if (!Util.isUnset(headers.xFcAccountId)) {
      realHeaders["X-Fc-Account-Id"] = Util.toJSONString(headers.xFcAccountId);
    }

    if (!Util.isUnset(headers.xFcDate)) {
      realHeaders["X-Fc-Date"] = Util.toJSONString(headers.xFcDate);
    }

    if (!Util.isUnset(headers.xFcTraceId)) {
      realHeaders["X-Fc-Trace-Id"] = Util.toJSONString(headers.xFcTraceId);
    }

    let req = new $OpenApi.OpenApiRequest({
      headers: realHeaders,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTrigger",
      version: "2021-04-06",
      protocol: "HTTPS",
      pathname: `/2021-04-06/services/${OpenApiUtil.getEncodeParam(serviceName)}/functions/${OpenApiUtil.getEncodeParam(functionName)}/triggers/${OpenApiUtil.getEncodeParam(triggerName)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateTriggerResponse>(await this.callApi(params, req, runtime), new UpdateTriggerResponse({}));
  }

  async updateTrigger(serviceName: string, functionName: string, triggerName: string, request: UpdateTriggerRequest): Promise<UpdateTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    let headers = new UpdateTriggerHeaders({ });
    return await this.updateTriggerWithOptions(serviceName, functionName, triggerName, request, headers, runtime);
  }

}

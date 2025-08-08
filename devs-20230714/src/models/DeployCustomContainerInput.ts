// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModelConfig } from "./ModelConfig";


export class DeployCustomContainerInputAsyncInvokeConfigDestinationConfigOnFailure extends $dara.Model {
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

export class DeployCustomContainerInputAsyncInvokeConfigDestinationConfigOnSuccess extends $dara.Model {
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

export class DeployCustomContainerInputAsyncInvokeConfigDestinationConfig extends $dara.Model {
  onFailure?: DeployCustomContainerInputAsyncInvokeConfigDestinationConfigOnFailure;
  onSuccess?: DeployCustomContainerInputAsyncInvokeConfigDestinationConfigOnSuccess;
  static names(): { [key: string]: string } {
    return {
      onFailure: 'onFailure',
      onSuccess: 'onSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onFailure: DeployCustomContainerInputAsyncInvokeConfigDestinationConfigOnFailure,
      onSuccess: DeployCustomContainerInputAsyncInvokeConfigDestinationConfigOnSuccess,
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

export class DeployCustomContainerInputAsyncInvokeConfig extends $dara.Model {
  asyncTask?: boolean;
  destinationConfig?: DeployCustomContainerInputAsyncInvokeConfigDestinationConfig;
  maxAsyncEventAgeInSeconds?: number;
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
      destinationConfig: DeployCustomContainerInputAsyncInvokeConfigDestinationConfig,
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

export class DeployCustomContainerInputConcurrencyConfig extends $dara.Model {
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

export class DeployCustomContainerInputCustomContainerConfigHealthCheckConfig extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployCustomContainerInputCustomContainerConfigInstanceLifecycleConfigInitializer extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployCustomContainerInputCustomContainerConfigInstanceLifecycleConfigPreStop extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployCustomContainerInputCustomContainerConfigInstanceLifecycleConfig extends $dara.Model {
  initializer?: DeployCustomContainerInputCustomContainerConfigInstanceLifecycleConfigInitializer;
  preStop?: DeployCustomContainerInputCustomContainerConfigInstanceLifecycleConfigPreStop;
  static names(): { [key: string]: string } {
    return {
      initializer: 'initializer',
      preStop: 'preStop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      initializer: DeployCustomContainerInputCustomContainerConfigInstanceLifecycleConfigInitializer,
      preStop: DeployCustomContainerInputCustomContainerConfigInstanceLifecycleConfigPreStop,
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

export class DeployCustomContainerInputCustomContainerConfig extends $dara.Model {
  command?: string[];
  entrypoint?: string[];
  healthCheckConfig?: DeployCustomContainerInputCustomContainerConfigHealthCheckConfig;
  image?: string;
  instanceConcurrency?: number;
  instanceLifecycleConfig?: DeployCustomContainerInputCustomContainerConfigInstanceLifecycleConfig;
  port?: number;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'command',
      entrypoint: 'entrypoint',
      healthCheckConfig: 'healthCheckConfig',
      image: 'image',
      instanceConcurrency: 'instanceConcurrency',
      instanceLifecycleConfig: 'instanceLifecycleConfig',
      port: 'port',
      role: 'role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: { 'type': 'array', 'itemType': 'string' },
      entrypoint: { 'type': 'array', 'itemType': 'string' },
      healthCheckConfig: DeployCustomContainerInputCustomContainerConfigHealthCheckConfig,
      image: 'string',
      instanceConcurrency: 'number',
      instanceLifecycleConfig: DeployCustomContainerInputCustomContainerConfigInstanceLifecycleConfig,
      port: 'number',
      role: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.command)) {
      $dara.Model.validateArray(this.command);
    }
    if(Array.isArray(this.entrypoint)) {
      $dara.Model.validateArray(this.entrypoint);
    }
    if(this.healthCheckConfig && typeof (this.healthCheckConfig as any).validate === 'function') {
      (this.healthCheckConfig as any).validate();
    }
    if(this.instanceLifecycleConfig && typeof (this.instanceLifecycleConfig as any).validate === 'function') {
      (this.instanceLifecycleConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployCustomContainerInputFeatureGates extends $dara.Model {
  asyncProvisionCheck?: boolean;
  disableRollbackOnProvisionFailure?: boolean;
  static names(): { [key: string]: string } {
    return {
      asyncProvisionCheck: 'asyncProvisionCheck',
      disableRollbackOnProvisionFailure: 'disableRollbackOnProvisionFailure',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncProvisionCheck: 'boolean',
      disableRollbackOnProvisionFailure: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployCustomContainerInputGpuConfig extends $dara.Model {
  gpuMemorySize?: number;
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

export class DeployCustomContainerInputHttpTriggerTriggerConfig extends $dara.Model {
  authConfig?: string;
  authType?: string;
  disableURLInternet?: boolean;
  dsableURLInternet?: boolean;
  methods?: string[];
  static names(): { [key: string]: string } {
    return {
      authConfig: 'authConfig',
      authType: 'authType',
      disableURLInternet: 'disableURLInternet',
      dsableURLInternet: 'dsableURLInternet',
      methods: 'methods',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConfig: 'string',
      authType: 'string',
      disableURLInternet: 'boolean',
      dsableURLInternet: 'boolean',
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

export class DeployCustomContainerInputHttpTrigger extends $dara.Model {
  qualifier?: string;
  triggerConfig?: DeployCustomContainerInputHttpTriggerTriggerConfig;
  static names(): { [key: string]: string } {
    return {
      qualifier: 'qualifier',
      triggerConfig: 'triggerConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualifier: 'string',
      triggerConfig: DeployCustomContainerInputHttpTriggerTriggerConfig,
    };
  }

  validate() {
    if(this.triggerConfig && typeof (this.triggerConfig as any).validate === 'function') {
      (this.triggerConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployCustomContainerInputLogConfig extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployCustomContainerInputModelConfig extends $dara.Model {
  framework?: string;
  /**
   * **if can be null:**
   * true
   */
  multiModelConfig?: ModelConfig[];
  prefix?: string;
  skipDownload?: boolean;
  sourceType?: string;
  srcModelScopeModelID?: string;
  srcModelScopeModelRevision?: string;
  srcModelScopeToken?: string;
  srcOssBucket?: string;
  srcOssPath?: string;
  srcOssRegion?: string;
  syncStrategy?: string;
  withPPU?: boolean;
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      framework: 'framework',
      multiModelConfig: 'multiModelConfig',
      prefix: 'prefix',
      skipDownload: 'skipDownload',
      sourceType: 'sourceType',
      srcModelScopeModelID: 'srcModelScopeModelID',
      srcModelScopeModelRevision: 'srcModelScopeModelRevision',
      srcModelScopeToken: 'srcModelScopeToken',
      srcOssBucket: 'srcOssBucket',
      srcOssPath: 'srcOssPath',
      srcOssRegion: 'srcOssRegion',
      syncStrategy: 'syncStrategy',
      withPPU: 'withPPU',
      workingDir: 'workingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      framework: 'string',
      multiModelConfig: { 'type': 'array', 'itemType': ModelConfig },
      prefix: 'string',
      skipDownload: 'boolean',
      sourceType: 'string',
      srcModelScopeModelID: 'string',
      srcModelScopeModelRevision: 'string',
      srcModelScopeToken: 'string',
      srcOssBucket: 'string',
      srcOssPath: 'string',
      srcOssRegion: 'string',
      syncStrategy: 'string',
      withPPU: 'boolean',
      workingDir: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.multiModelConfig)) {
      $dara.Model.validateArray(this.multiModelConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployCustomContainerInputNasConfig extends $dara.Model {
  groupId?: number;
  mountPoints?: string[];
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
      mountPoints: { 'type': 'array', 'itemType': 'string' },
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

export class DeployCustomContainerInputOssMountConfigMountPoints extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployCustomContainerInputOssMountConfig extends $dara.Model {
  mountPoints?: DeployCustomContainerInputOssMountConfigMountPoints[];
  static names(): { [key: string]: string } {
    return {
      mountPoints: 'mountPoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPoints: { 'type': 'array', 'itemType': DeployCustomContainerInputOssMountConfigMountPoints },
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

export class DeployCustomContainerInputProvisionConfigScheduledActions extends $dara.Model {
  endTime?: string;
  name?: string;
  scheduleExpression?: string;
  startTime?: string;
  target?: number;
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

export class DeployCustomContainerInputProvisionConfig extends $dara.Model {
  alwaysAllocateGPU?: boolean;
  scheduledActions?: DeployCustomContainerInputProvisionConfigScheduledActions[];
  target?: number;
  static names(): { [key: string]: string } {
    return {
      alwaysAllocateGPU: 'alwaysAllocateGPU',
      scheduledActions: 'scheduledActions',
      target: 'target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alwaysAllocateGPU: 'boolean',
      scheduledActions: { 'type': 'array', 'itemType': DeployCustomContainerInputProvisionConfigScheduledActions },
      target: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.scheduledActions)) {
      $dara.Model.validateArray(this.scheduledActions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployCustomContainerInputVpcConfig extends $dara.Model {
  securityGroupId?: string;
  vSwitchIds?: string[];
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      securityGroupId: 'securityGroupId',
      vSwitchIds: 'vSwitchIds',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DeployCustomContainerInput extends $dara.Model {
  accountID?: string;
  asyncInvokeConfig?: DeployCustomContainerInputAsyncInvokeConfig;
  concurrencyConfig?: DeployCustomContainerInputConcurrencyConfig;
  cpu?: number;
  customContainerConfig?: DeployCustomContainerInputCustomContainerConfig;
  description?: string;
  diskSize?: number;
  envName?: string;
  environmentVariables?: { [key: string]: any };
  featureGates?: DeployCustomContainerInputFeatureGates;
  gpuConfig?: DeployCustomContainerInputGpuConfig;
  httpTrigger?: DeployCustomContainerInputHttpTrigger;
  logConfig?: DeployCustomContainerInputLogConfig;
  memorySize?: number;
  modelConfig?: DeployCustomContainerInputModelConfig;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  nasConfig?: DeployCustomContainerInputNasConfig;
  originalName?: string;
  ossMountConfig?: DeployCustomContainerInputOssMountConfig;
  projectName?: string;
  provisionConfig?: DeployCustomContainerInputProvisionConfig;
  region?: string;
  reportStatusURL?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  role?: string;
  timeout?: number;
  traceId?: string;
  vpcConfig?: DeployCustomContainerInputVpcConfig;
  static names(): { [key: string]: string } {
    return {
      accountID: 'accountID',
      asyncInvokeConfig: 'asyncInvokeConfig',
      concurrencyConfig: 'concurrencyConfig',
      cpu: 'cpu',
      customContainerConfig: 'customContainerConfig',
      description: 'description',
      diskSize: 'diskSize',
      envName: 'envName',
      environmentVariables: 'environmentVariables',
      featureGates: 'featureGates',
      gpuConfig: 'gpuConfig',
      httpTrigger: 'httpTrigger',
      logConfig: 'logConfig',
      memorySize: 'memorySize',
      modelConfig: 'modelConfig',
      name: 'name',
      nasConfig: 'nasConfig',
      originalName: 'originalName',
      ossMountConfig: 'ossMountConfig',
      projectName: 'projectName',
      provisionConfig: 'provisionConfig',
      region: 'region',
      reportStatusURL: 'reportStatusURL',
      role: 'role',
      timeout: 'timeout',
      traceId: 'traceId',
      vpcConfig: 'vpcConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountID: 'string',
      asyncInvokeConfig: DeployCustomContainerInputAsyncInvokeConfig,
      concurrencyConfig: DeployCustomContainerInputConcurrencyConfig,
      cpu: 'number',
      customContainerConfig: DeployCustomContainerInputCustomContainerConfig,
      description: 'string',
      diskSize: 'number',
      envName: 'string',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      featureGates: DeployCustomContainerInputFeatureGates,
      gpuConfig: DeployCustomContainerInputGpuConfig,
      httpTrigger: DeployCustomContainerInputHttpTrigger,
      logConfig: DeployCustomContainerInputLogConfig,
      memorySize: 'number',
      modelConfig: DeployCustomContainerInputModelConfig,
      name: 'string',
      nasConfig: DeployCustomContainerInputNasConfig,
      originalName: 'string',
      ossMountConfig: DeployCustomContainerInputOssMountConfig,
      projectName: 'string',
      provisionConfig: DeployCustomContainerInputProvisionConfig,
      region: 'string',
      reportStatusURL: 'string',
      role: 'string',
      timeout: 'number',
      traceId: 'string',
      vpcConfig: DeployCustomContainerInputVpcConfig,
    };
  }

  validate() {
    if(this.asyncInvokeConfig && typeof (this.asyncInvokeConfig as any).validate === 'function') {
      (this.asyncInvokeConfig as any).validate();
    }
    if(this.concurrencyConfig && typeof (this.concurrencyConfig as any).validate === 'function') {
      (this.concurrencyConfig as any).validate();
    }
    if(this.customContainerConfig && typeof (this.customContainerConfig as any).validate === 'function') {
      (this.customContainerConfig as any).validate();
    }
    if(this.environmentVariables) {
      $dara.Model.validateMap(this.environmentVariables);
    }
    if(this.featureGates && typeof (this.featureGates as any).validate === 'function') {
      (this.featureGates as any).validate();
    }
    if(this.gpuConfig && typeof (this.gpuConfig as any).validate === 'function') {
      (this.gpuConfig as any).validate();
    }
    if(this.httpTrigger && typeof (this.httpTrigger as any).validate === 'function') {
      (this.httpTrigger as any).validate();
    }
    if(this.logConfig && typeof (this.logConfig as any).validate === 'function') {
      (this.logConfig as any).validate();
    }
    if(this.modelConfig && typeof (this.modelConfig as any).validate === 'function') {
      (this.modelConfig as any).validate();
    }
    if(this.nasConfig && typeof (this.nasConfig as any).validate === 'function') {
      (this.nasConfig as any).validate();
    }
    if(this.ossMountConfig && typeof (this.ossMountConfig as any).validate === 'function') {
      (this.ossMountConfig as any).validate();
    }
    if(this.provisionConfig && typeof (this.provisionConfig as any).validate === 'function') {
      (this.provisionConfig as any).validate();
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


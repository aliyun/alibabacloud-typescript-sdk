// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModelConfig } from "./ModelConfig";


export class DeployVllmModelInputConcurrencyConfig extends $dara.Model {
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

export class DeployVllmModelInputCustomContainerConfig extends $dara.Model {
  role?: string;
  static names(): { [key: string]: string } {
    return {
      role: 'role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      role: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployVllmModelInputFeatureGates extends $dara.Model {
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

export class DeployVllmModelInputGpuConfig extends $dara.Model {
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

export class DeployVllmModelInputHttpTriggerTriggerConfig extends $dara.Model {
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

export class DeployVllmModelInputHttpTrigger extends $dara.Model {
  qualifier?: string;
  triggerConfig?: DeployVllmModelInputHttpTriggerTriggerConfig;
  static names(): { [key: string]: string } {
    return {
      qualifier: 'qualifier',
      triggerConfig: 'triggerConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualifier: 'string',
      triggerConfig: DeployVllmModelInputHttpTriggerTriggerConfig,
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

export class DeployVllmModelInputLogConfig extends $dara.Model {
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

export class DeployVllmModelInputModelConfigFmkVllmConfig extends $dara.Model {
  apiKey?: string;
  blockSize?: number;
  chatTemplate?: string;
  dtype?: string;
  fullTextPostfix?: string;
  gpuMemoryUtilization?: number;
  loadFormat?: string;
  maxModelLen?: number;
  maxParallelLoadingWorkers?: number;
  quantization?: string;
  servedModelName?: string;
  swapSpace?: number;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'apiKey',
      blockSize: 'blockSize',
      chatTemplate: 'chatTemplate',
      dtype: 'dtype',
      fullTextPostfix: 'fullTextPostfix',
      gpuMemoryUtilization: 'gpuMemoryUtilization',
      loadFormat: 'loadFormat',
      maxModelLen: 'maxModelLen',
      maxParallelLoadingWorkers: 'maxParallelLoadingWorkers',
      quantization: 'quantization',
      servedModelName: 'servedModelName',
      swapSpace: 'swapSpace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      blockSize: 'number',
      chatTemplate: 'string',
      dtype: 'string',
      fullTextPostfix: 'string',
      gpuMemoryUtilization: 'number',
      loadFormat: 'string',
      maxModelLen: 'number',
      maxParallelLoadingWorkers: 'number',
      quantization: 'string',
      servedModelName: 'string',
      swapSpace: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployVllmModelInputModelConfig extends $dara.Model {
  fmkVllmConfig?: DeployVllmModelInputModelConfigFmkVllmConfig;
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
      fmkVllmConfig: 'fmkVllmConfig',
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
      fmkVllmConfig: DeployVllmModelInputModelConfigFmkVllmConfig,
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
    if(this.fmkVllmConfig && typeof (this.fmkVllmConfig as any).validate === 'function') {
      (this.fmkVllmConfig as any).validate();
    }
    if(Array.isArray(this.multiModelConfig)) {
      $dara.Model.validateArray(this.multiModelConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployVllmModelInputNasConfigMountPoints extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployVllmModelInputNasConfig extends $dara.Model {
  groupId?: number;
  mountPoints?: DeployVllmModelInputNasConfigMountPoints[];
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
      mountPoints: { 'type': 'array', 'itemType': DeployVllmModelInputNasConfigMountPoints },
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

export class DeployVllmModelInputOssMountConfigMountPoints extends $dara.Model {
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

export class DeployVllmModelInputOssMountConfig extends $dara.Model {
  mountPoints?: DeployVllmModelInputOssMountConfigMountPoints[];
  static names(): { [key: string]: string } {
    return {
      mountPoints: 'mountPoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPoints: { 'type': 'array', 'itemType': DeployVllmModelInputOssMountConfigMountPoints },
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

export class DeployVllmModelInputProvisionConfigScheduledActions extends $dara.Model {
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

export class DeployVllmModelInputProvisionConfig extends $dara.Model {
  alwaysAllocateGPU?: boolean;
  scheduledActions?: DeployVllmModelInputProvisionConfigScheduledActions[];
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
      scheduledActions: { 'type': 'array', 'itemType': DeployVllmModelInputProvisionConfigScheduledActions },
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

export class DeployVllmModelInputVpcConfig extends $dara.Model {
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

export class DeployVllmModelInput extends $dara.Model {
  accountID?: string;
  concurrencyConfig?: DeployVllmModelInputConcurrencyConfig;
  cpu?: number;
  customContainerConfig?: DeployVllmModelInputCustomContainerConfig;
  description?: string;
  diskSize?: number;
  envName?: string;
  environmentVariables?: { [key: string]: any };
  featureGates?: DeployVllmModelInputFeatureGates;
  gpuConfig?: DeployVllmModelInputGpuConfig;
  httpTrigger?: DeployVllmModelInputHttpTrigger;
  imageName?: string;
  instanceConcurrency?: number;
  logConfig?: DeployVllmModelInputLogConfig;
  memorySize?: number;
  modelConfig?: DeployVllmModelInputModelConfig;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  nasConfig?: DeployVllmModelInputNasConfig;
  originalName?: string;
  ossMountConfig?: DeployVllmModelInputOssMountConfig;
  projectName?: string;
  provisionConfig?: DeployVllmModelInputProvisionConfig;
  region?: string;
  reportStatusURL?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  role?: string;
  timeout?: number;
  traceId?: string;
  vpcConfig?: DeployVllmModelInputVpcConfig;
  static names(): { [key: string]: string } {
    return {
      accountID: 'accountID',
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
      imageName: 'imageName',
      instanceConcurrency: 'instanceConcurrency',
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
      concurrencyConfig: DeployVllmModelInputConcurrencyConfig,
      cpu: 'number',
      customContainerConfig: DeployVllmModelInputCustomContainerConfig,
      description: 'string',
      diskSize: 'number',
      envName: 'string',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      featureGates: DeployVllmModelInputFeatureGates,
      gpuConfig: DeployVllmModelInputGpuConfig,
      httpTrigger: DeployVllmModelInputHttpTrigger,
      imageName: 'string',
      instanceConcurrency: 'number',
      logConfig: DeployVllmModelInputLogConfig,
      memorySize: 'number',
      modelConfig: DeployVllmModelInputModelConfig,
      name: 'string',
      nasConfig: DeployVllmModelInputNasConfig,
      originalName: 'string',
      ossMountConfig: DeployVllmModelInputOssMountConfig,
      projectName: 'string',
      provisionConfig: DeployVllmModelInputProvisionConfig,
      region: 'string',
      reportStatusURL: 'string',
      role: 'string',
      timeout: 'number',
      traceId: 'string',
      vpcConfig: DeployVllmModelInputVpcConfig,
    };
  }

  validate() {
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


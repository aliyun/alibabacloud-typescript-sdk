// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModelConfig } from "./ModelConfig";


export class DeployOllamaModelInputConcurrencyConfig extends $dara.Model {
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

export class DeployOllamaModelInputFeatureGates extends $dara.Model {
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

export class DeployOllamaModelInputGpuConfig extends $dara.Model {
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

export class DeployOllamaModelInputHttpTriggerTriggerConfig extends $dara.Model {
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

export class DeployOllamaModelInputHttpTrigger extends $dara.Model {
  qualifier?: string;
  triggerConfig?: DeployOllamaModelInputHttpTriggerTriggerConfig;
  static names(): { [key: string]: string } {
    return {
      qualifier: 'qualifier',
      triggerConfig: 'triggerConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualifier: 'string',
      triggerConfig: DeployOllamaModelInputHttpTriggerTriggerConfig,
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

export class DeployOllamaModelInputLogConfig extends $dara.Model {
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

export class DeployOllamaModelInputModelConfigFmkOllamaConfig extends $dara.Model {
  minP?: number;
  mirostat?: number;
  mirostatEta?: number;
  mirostatTau?: number;
  modelName?: string;
  modelfileAdapter?: string;
  modelfileAdditionalFromsString?: string;
  modelfileFullTextPostfix?: string;
  modelfileParams?: string;
  modelfileSystem?: string;
  modelfileTemplate?: string;
  numCtx?: number;
  numPredict?: number;
  quantize?: string;
  repeatLastN?: number;
  repeatPenalty?: number;
  seed?: number;
  singleModelFile?: string;
  splitedModelStartFile?: string;
  stop?: string;
  stream?: boolean;
  temperature?: number;
  tfsZ?: number;
  topK?: number;
  topP?: number;
  static names(): { [key: string]: string } {
    return {
      minP: 'minP',
      mirostat: 'mirostat',
      mirostatEta: 'mirostatEta',
      mirostatTau: 'mirostatTau',
      modelName: 'modelName',
      modelfileAdapter: 'modelfileAdapter',
      modelfileAdditionalFromsString: 'modelfileAdditionalFromsString',
      modelfileFullTextPostfix: 'modelfileFullTextPostfix',
      modelfileParams: 'modelfileParams',
      modelfileSystem: 'modelfileSystem',
      modelfileTemplate: 'modelfileTemplate',
      numCtx: 'numCtx',
      numPredict: 'numPredict',
      quantize: 'quantize',
      repeatLastN: 'repeatLastN',
      repeatPenalty: 'repeatPenalty',
      seed: 'seed',
      singleModelFile: 'singleModelFile',
      splitedModelStartFile: 'splitedModelStartFile',
      stop: 'stop',
      stream: 'stream',
      temperature: 'temperature',
      tfsZ: 'tfsZ',
      topK: 'topK',
      topP: 'topP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      minP: 'number',
      mirostat: 'number',
      mirostatEta: 'number',
      mirostatTau: 'number',
      modelName: 'string',
      modelfileAdapter: 'string',
      modelfileAdditionalFromsString: 'string',
      modelfileFullTextPostfix: 'string',
      modelfileParams: 'string',
      modelfileSystem: 'string',
      modelfileTemplate: 'string',
      numCtx: 'number',
      numPredict: 'number',
      quantize: 'string',
      repeatLastN: 'number',
      repeatPenalty: 'number',
      seed: 'number',
      singleModelFile: 'string',
      splitedModelStartFile: 'string',
      stop: 'string',
      stream: 'boolean',
      temperature: 'number',
      tfsZ: 'number',
      topK: 'number',
      topP: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployOllamaModelInputModelConfig extends $dara.Model {
  fmkOllamaConfig?: DeployOllamaModelInputModelConfigFmkOllamaConfig;
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
      fmkOllamaConfig: 'fmkOllamaConfig',
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
      fmkOllamaConfig: DeployOllamaModelInputModelConfigFmkOllamaConfig,
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
    if(this.fmkOllamaConfig && typeof (this.fmkOllamaConfig as any).validate === 'function') {
      (this.fmkOllamaConfig as any).validate();
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

export class DeployOllamaModelInputNasConfig extends $dara.Model {
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

export class DeployOllamaModelInputProvisionConfigScheduledActions extends $dara.Model {
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

export class DeployOllamaModelInputProvisionConfig extends $dara.Model {
  alwaysAllocateGPU?: boolean;
  scheduledActions?: DeployOllamaModelInputProvisionConfigScheduledActions[];
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
      scheduledActions: { 'type': 'array', 'itemType': DeployOllamaModelInputProvisionConfigScheduledActions },
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

export class DeployOllamaModelInputVpcConfig extends $dara.Model {
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

export class DeployOllamaModelInput extends $dara.Model {
  accountID?: string;
  concurrencyConfig?: DeployOllamaModelInputConcurrencyConfig;
  cpu?: number;
  description?: string;
  diskSize?: number;
  envName?: string;
  environmentVariables?: { [key: string]: any };
  featureGates?: DeployOllamaModelInputFeatureGates;
  gpuConfig?: DeployOllamaModelInputGpuConfig;
  httpTrigger?: DeployOllamaModelInputHttpTrigger;
  imageName?: string;
  instanceConcurrency?: number;
  logConfig?: DeployOllamaModelInputLogConfig;
  memorySize?: number;
  modelConfig?: DeployOllamaModelInputModelConfig;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  nasConfig?: DeployOllamaModelInputNasConfig;
  originalName?: string;
  projectName?: string;
  provisionConfig?: DeployOllamaModelInputProvisionConfig;
  region?: string;
  reportStatusURL?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  role?: string;
  timeout?: number;
  traceId?: string;
  vpcConfig?: DeployOllamaModelInputVpcConfig;
  static names(): { [key: string]: string } {
    return {
      accountID: 'accountID',
      concurrencyConfig: 'concurrencyConfig',
      cpu: 'cpu',
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
      concurrencyConfig: DeployOllamaModelInputConcurrencyConfig,
      cpu: 'number',
      description: 'string',
      diskSize: 'number',
      envName: 'string',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      featureGates: DeployOllamaModelInputFeatureGates,
      gpuConfig: DeployOllamaModelInputGpuConfig,
      httpTrigger: DeployOllamaModelInputHttpTrigger,
      imageName: 'string',
      instanceConcurrency: 'number',
      logConfig: DeployOllamaModelInputLogConfig,
      memorySize: 'number',
      modelConfig: DeployOllamaModelInputModelConfig,
      name: 'string',
      nasConfig: DeployOllamaModelInputNasConfig,
      originalName: 'string',
      projectName: 'string',
      provisionConfig: DeployOllamaModelInputProvisionConfig,
      region: 'string',
      reportStatusURL: 'string',
      role: 'string',
      timeout: 'number',
      traceId: 'string',
      vpcConfig: DeployOllamaModelInputVpcConfig,
    };
  }

  validate() {
    if(this.concurrencyConfig && typeof (this.concurrencyConfig as any).validate === 'function') {
      (this.concurrencyConfig as any).validate();
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


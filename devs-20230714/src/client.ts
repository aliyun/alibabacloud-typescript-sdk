// This file is auto-generated, don't edit it
/**
 */
import OpenApi from '@alicloud/openapi-core';
import { OpenApiUtil, $OpenApiUtil } from '@alicloud/openapi-core';
import * as $dara from '@darabonba/typescript';

export class ArtifactTempBucketTokenCredentials extends $dara.Model {
  accessKeyId?: string;
  accessKeySecret?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'accessKeyId',
      accessKeySecret: 'accessKeySecret',
      securityToken: 'securityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      accessKeySecret: 'string',
      securityToken: 'string',
    };
  }

  validate() {
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
  static names(): { [key: string]: string } {
    return {
      command: 'command',
      entrypoint: 'entrypoint',
      healthCheckConfig: 'healthCheckConfig',
      image: 'image',
      instanceConcurrency: 'instanceConcurrency',
      instanceLifecycleConfig: 'instanceLifecycleConfig',
      port: 'port',
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
  authType?: string;
  dsableURLInternet?: boolean;
  methods?: string[];
  static names(): { [key: string]: string } {
    return {
      authType: 'authType',
      dsableURLInternet: 'dsableURLInternet',
      methods: 'methods',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
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
  sourceType?: string;
  srcModelScopeModelID?: string;
  srcModelScopeModelRevision?: string;
  srcModelScopeToken?: string;
  srcOssBucket?: string;
  srcOssPath?: string;
  srcOssRegion?: string;
  static names(): { [key: string]: string } {
    return {
      framework: 'framework',
      multiModelConfig: 'multiModelConfig',
      prefix: 'prefix',
      sourceType: 'sourceType',
      srcModelScopeModelID: 'srcModelScopeModelID',
      srcModelScopeModelRevision: 'srcModelScopeModelRevision',
      srcModelScopeToken: 'srcModelScopeToken',
      srcOssBucket: 'srcOssBucket',
      srcOssPath: 'srcOssPath',
      srcOssRegion: 'srcOssRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      framework: 'string',
      multiModelConfig: { 'type': 'array', 'itemType': ModelConfig },
      prefix: 'string',
      sourceType: 'string',
      srcModelScopeModelID: 'string',
      srcModelScopeModelRevision: 'string',
      srcModelScopeToken: 'string',
      srcOssBucket: 'string',
      srcOssPath: 'string',
      srcOssRegion: 'string',
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

export class DeployCustomContainerOutputData extends $dara.Model {
  deploymentTaskID?: string;
  errorMessage?: string;
  finished?: boolean;
  nasConfigStr?: string;
  serviceName?: string;
  traceID?: string;
  urlInternet?: string;
  urlIntranet?: string;
  vpcConfigStr?: string;
  static names(): { [key: string]: string } {
    return {
      deploymentTaskID: 'deploymentTaskID',
      errorMessage: 'errorMessage',
      finished: 'finished',
      nasConfigStr: 'nasConfigStr',
      serviceName: 'serviceName',
      traceID: 'traceID',
      urlInternet: 'urlInternet',
      urlIntranet: 'urlIntranet',
      vpcConfigStr: 'vpcConfigStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentTaskID: 'string',
      errorMessage: 'string',
      finished: 'boolean',
      nasConfigStr: 'string',
      serviceName: 'string',
      traceID: 'string',
      urlInternet: 'string',
      urlIntranet: 'string',
      vpcConfigStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployHuggingFaceModelInputConcurrencyConfig extends $dara.Model {
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

export class DeployHuggingFaceModelInputGpuConfig extends $dara.Model {
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

export class DeployHuggingFaceModelInputHttpTriggerTriggerConfig extends $dara.Model {
  authType?: string;
  dsableURLInternet?: boolean;
  methods?: string[];
  static names(): { [key: string]: string } {
    return {
      authType: 'authType',
      dsableURLInternet: 'dsableURLInternet',
      methods: 'methods',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
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

export class DeployHuggingFaceModelInputHttpTrigger extends $dara.Model {
  qualifier?: string;
  triggerConfig?: DeployHuggingFaceModelInputHttpTriggerTriggerConfig;
  static names(): { [key: string]: string } {
    return {
      qualifier: 'qualifier',
      triggerConfig: 'triggerConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualifier: 'string',
      triggerConfig: DeployHuggingFaceModelInputHttpTriggerTriggerConfig,
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

export class DeployHuggingFaceModelInputLogConfig extends $dara.Model {
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

export class DeployHuggingFaceModelInputModelConfigFmkHuggingFaceConfig extends $dara.Model {
  framework?: string;
  task?: string;
  static names(): { [key: string]: string } {
    return {
      framework: 'framework',
      task: 'task',
    };
  }

  static types(): { [key: string]: any } {
    return {
      framework: 'string',
      task: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployHuggingFaceModelInputModelConfig extends $dara.Model {
  fmkHuggingFaceConfig?: DeployHuggingFaceModelInputModelConfigFmkHuggingFaceConfig;
  framework?: string;
  /**
   * **if can be null:**
   * true
   */
  multiModelConfig?: ModelConfig[];
  prefix?: string;
  sourceType?: string;
  srcModelScopeModelID?: string;
  srcModelScopeModelRevision?: string;
  srcModelScopeToken?: string;
  srcOssBucket?: string;
  srcOssPath?: string;
  srcOssRegion?: string;
  static names(): { [key: string]: string } {
    return {
      fmkHuggingFaceConfig: 'fmkHuggingFaceConfig',
      framework: 'framework',
      multiModelConfig: 'multiModelConfig',
      prefix: 'prefix',
      sourceType: 'sourceType',
      srcModelScopeModelID: 'srcModelScopeModelID',
      srcModelScopeModelRevision: 'srcModelScopeModelRevision',
      srcModelScopeToken: 'srcModelScopeToken',
      srcOssBucket: 'srcOssBucket',
      srcOssPath: 'srcOssPath',
      srcOssRegion: 'srcOssRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fmkHuggingFaceConfig: DeployHuggingFaceModelInputModelConfigFmkHuggingFaceConfig,
      framework: 'string',
      multiModelConfig: { 'type': 'array', 'itemType': ModelConfig },
      prefix: 'string',
      sourceType: 'string',
      srcModelScopeModelID: 'string',
      srcModelScopeModelRevision: 'string',
      srcModelScopeToken: 'string',
      srcOssBucket: 'string',
      srcOssPath: 'string',
      srcOssRegion: 'string',
    };
  }

  validate() {
    if(this.fmkHuggingFaceConfig && typeof (this.fmkHuggingFaceConfig as any).validate === 'function') {
      (this.fmkHuggingFaceConfig as any).validate();
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

export class DeployHuggingFaceModelInputNasConfig extends $dara.Model {
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

export class DeployHuggingFaceModelInputProvisionConfigScheduledActions extends $dara.Model {
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

export class DeployHuggingFaceModelInputProvisionConfig extends $dara.Model {
  alwaysAllocateGPU?: boolean;
  scheduledActions?: DeployHuggingFaceModelInputProvisionConfigScheduledActions[];
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
      scheduledActions: { 'type': 'array', 'itemType': DeployHuggingFaceModelInputProvisionConfigScheduledActions },
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

export class DeployHuggingFaceModelInputVpcConfig extends $dara.Model {
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

export class DeployHuggingFaceModelOutputData extends $dara.Model {
  deploymentTaskID?: string;
  errorMessage?: string;
  finished?: boolean;
  serviceName?: string;
  taskType?: string;
  traceID?: string;
  urlInternet?: string;
  urlIntranet?: string;
  static names(): { [key: string]: string } {
    return {
      deploymentTaskID: 'deploymentTaskID',
      errorMessage: 'errorMessage',
      finished: 'finished',
      serviceName: 'serviceName',
      taskType: 'taskType',
      traceID: 'traceID',
      urlInternet: 'urlInternet',
      urlIntranet: 'urlIntranet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentTaskID: 'string',
      errorMessage: 'string',
      finished: 'boolean',
      serviceName: 'string',
      taskType: 'string',
      traceID: 'string',
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

export class DeployModelScopeModelInputConcurrencyConfig extends $dara.Model {
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

export class DeployModelScopeModelInputGpuConfig extends $dara.Model {
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

export class DeployModelScopeModelInputHttpTriggerTriggerConfig extends $dara.Model {
  authType?: string;
  dsableURLInternet?: boolean;
  methods?: string[];
  static names(): { [key: string]: string } {
    return {
      authType: 'authType',
      dsableURLInternet: 'dsableURLInternet',
      methods: 'methods',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
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

export class DeployModelScopeModelInputHttpTrigger extends $dara.Model {
  qualifier?: string;
  triggerConfig?: DeployModelScopeModelInputHttpTriggerTriggerConfig;
  static names(): { [key: string]: string } {
    return {
      qualifier: 'qualifier',
      triggerConfig: 'triggerConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualifier: 'string',
      triggerConfig: DeployModelScopeModelInputHttpTriggerTriggerConfig,
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

export class DeployModelScopeModelInputLogConfig extends $dara.Model {
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

export class DeployModelScopeModelInputModelConfig extends $dara.Model {
  framework?: string;
  /**
   * **if can be null:**
   * true
   */
  multiModelConfig?: ModelConfig[];
  prefix?: string;
  sourceType?: string;
  srcModelScopeModelID?: string;
  srcModelScopeModelRevision?: string;
  srcModelScopeToken?: string;
  srcOssBucket?: string;
  srcOssPath?: string;
  srcOssRegion?: string;
  static names(): { [key: string]: string } {
    return {
      framework: 'framework',
      multiModelConfig: 'multiModelConfig',
      prefix: 'prefix',
      sourceType: 'sourceType',
      srcModelScopeModelID: 'srcModelScopeModelID',
      srcModelScopeModelRevision: 'srcModelScopeModelRevision',
      srcModelScopeToken: 'srcModelScopeToken',
      srcOssBucket: 'srcOssBucket',
      srcOssPath: 'srcOssPath',
      srcOssRegion: 'srcOssRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      framework: 'string',
      multiModelConfig: { 'type': 'array', 'itemType': ModelConfig },
      prefix: 'string',
      sourceType: 'string',
      srcModelScopeModelID: 'string',
      srcModelScopeModelRevision: 'string',
      srcModelScopeToken: 'string',
      srcOssBucket: 'string',
      srcOssPath: 'string',
      srcOssRegion: 'string',
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

export class DeployModelScopeModelInputNasConfig extends $dara.Model {
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

export class DeployModelScopeModelInputProvisionConfigScheduledActions extends $dara.Model {
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

export class DeployModelScopeModelInputProvisionConfig extends $dara.Model {
  alwaysAllocateGPU?: boolean;
  scheduledActions?: DeployModelScopeModelInputProvisionConfigScheduledActions[];
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
      scheduledActions: { 'type': 'array', 'itemType': DeployModelScopeModelInputProvisionConfigScheduledActions },
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

export class DeployModelScopeModelInputVpcConfig extends $dara.Model {
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

export class DeployModelScopeModelOutputData extends $dara.Model {
  deploymentTaskID?: string;
  errorMessage?: string;
  finished?: boolean;
  serviceName?: string;
  taskType?: string;
  traceID?: string;
  urlInternet?: string;
  urlIntranet?: string;
  static names(): { [key: string]: string } {
    return {
      deploymentTaskID: 'deploymentTaskID',
      errorMessage: 'errorMessage',
      finished: 'finished',
      serviceName: 'serviceName',
      taskType: 'taskType',
      traceID: 'traceID',
      urlInternet: 'urlInternet',
      urlIntranet: 'urlIntranet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentTaskID: 'string',
      errorMessage: 'string',
      finished: 'boolean',
      serviceName: 'string',
      taskType: 'string',
      traceID: 'string',
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
  authType?: string;
  dsableURLInternet?: boolean;
  methods?: string[];
  static names(): { [key: string]: string } {
    return {
      authType: 'authType',
      dsableURLInternet: 'dsableURLInternet',
      methods: 'methods',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
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
  sourceType?: string;
  srcModelScopeModelID?: string;
  srcModelScopeModelRevision?: string;
  srcModelScopeToken?: string;
  srcOssBucket?: string;
  srcOssPath?: string;
  srcOssRegion?: string;
  static names(): { [key: string]: string } {
    return {
      fmkOllamaConfig: 'fmkOllamaConfig',
      framework: 'framework',
      multiModelConfig: 'multiModelConfig',
      prefix: 'prefix',
      sourceType: 'sourceType',
      srcModelScopeModelID: 'srcModelScopeModelID',
      srcModelScopeModelRevision: 'srcModelScopeModelRevision',
      srcModelScopeToken: 'srcModelScopeToken',
      srcOssBucket: 'srcOssBucket',
      srcOssPath: 'srcOssPath',
      srcOssRegion: 'srcOssRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fmkOllamaConfig: DeployOllamaModelInputModelConfigFmkOllamaConfig,
      framework: 'string',
      multiModelConfig: { 'type': 'array', 'itemType': ModelConfig },
      prefix: 'string',
      sourceType: 'string',
      srcModelScopeModelID: 'string',
      srcModelScopeModelRevision: 'string',
      srcModelScopeToken: 'string',
      srcOssBucket: 'string',
      srcOssPath: 'string',
      srcOssRegion: 'string',
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

export class DeployOllamaModelOutputData extends $dara.Model {
  deploymentTaskID?: string;
  errorMessage?: string;
  finished?: boolean;
  modelName?: string;
  serviceName?: string;
  traceID?: string;
  urlInternet?: string;
  urlIntranet?: string;
  static names(): { [key: string]: string } {
    return {
      deploymentTaskID: 'deploymentTaskID',
      errorMessage: 'errorMessage',
      finished: 'finished',
      modelName: 'modelName',
      serviceName: 'serviceName',
      traceID: 'traceID',
      urlInternet: 'urlInternet',
      urlIntranet: 'urlIntranet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentTaskID: 'string',
      errorMessage: 'string',
      finished: 'boolean',
      modelName: 'string',
      serviceName: 'string',
      traceID: 'string',
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

export class DeployTensorRtModelInputConcurrencyConfig extends $dara.Model {
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

export class DeployTensorRtModelInputGpuConfig extends $dara.Model {
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

export class DeployTensorRtModelInputHttpTriggerTriggerConfig extends $dara.Model {
  authType?: string;
  dsableURLInternet?: boolean;
  methods?: string[];
  static names(): { [key: string]: string } {
    return {
      authType: 'authType',
      dsableURLInternet: 'dsableURLInternet',
      methods: 'methods',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
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

export class DeployTensorRtModelInputHttpTrigger extends $dara.Model {
  qualifier?: string;
  triggerConfig?: DeployTensorRtModelInputHttpTriggerTriggerConfig;
  static names(): { [key: string]: string } {
    return {
      qualifier: 'qualifier',
      triggerConfig: 'triggerConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualifier: 'string',
      triggerConfig: DeployTensorRtModelInputHttpTriggerTriggerConfig,
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

export class DeployTensorRtModelInputLogConfig extends $dara.Model {
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

export class DeployTensorRtModelInputModelConfig extends $dara.Model {
  framework?: string;
  /**
   * **if can be null:**
   * true
   */
  multiModelConfig?: ModelConfig[];
  prefix?: string;
  sourceType?: string;
  srcModelScopeModelID?: string;
  srcModelScopeModelRevision?: string;
  srcModelScopeToken?: string;
  srcOssBucket?: string;
  srcOssPath?: string;
  srcOssRegion?: string;
  static names(): { [key: string]: string } {
    return {
      framework: 'framework',
      multiModelConfig: 'multiModelConfig',
      prefix: 'prefix',
      sourceType: 'sourceType',
      srcModelScopeModelID: 'srcModelScopeModelID',
      srcModelScopeModelRevision: 'srcModelScopeModelRevision',
      srcModelScopeToken: 'srcModelScopeToken',
      srcOssBucket: 'srcOssBucket',
      srcOssPath: 'srcOssPath',
      srcOssRegion: 'srcOssRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      framework: 'string',
      multiModelConfig: { 'type': 'array', 'itemType': ModelConfig },
      prefix: 'string',
      sourceType: 'string',
      srcModelScopeModelID: 'string',
      srcModelScopeModelRevision: 'string',
      srcModelScopeToken: 'string',
      srcOssBucket: 'string',
      srcOssPath: 'string',
      srcOssRegion: 'string',
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

export class DeployTensorRtModelInputNasConfigMountPoints extends $dara.Model {
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

export class DeployTensorRtModelInputNasConfig extends $dara.Model {
  groupId?: number;
  mountPoints?: DeployTensorRtModelInputNasConfigMountPoints[];
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
      mountPoints: { 'type': 'array', 'itemType': DeployTensorRtModelInputNasConfigMountPoints },
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

export class DeployTensorRtModelInputProvisionConfigScheduledActions extends $dara.Model {
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

export class DeployTensorRtModelInputProvisionConfig extends $dara.Model {
  alwaysAllocateGPU?: boolean;
  scheduledActions?: DeployTensorRtModelInputProvisionConfigScheduledActions[];
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
      scheduledActions: { 'type': 'array', 'itemType': DeployTensorRtModelInputProvisionConfigScheduledActions },
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

export class DeployTensorRtModelInputVpcConfig extends $dara.Model {
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

export class DeployTensorRtModelOutputData extends $dara.Model {
  deploymentTaskID?: string;
  errorMessage?: string;
  finished?: boolean;
  serviceName?: string;
  traceID?: string;
  urlInternet?: string;
  urlIntranet?: string;
  static names(): { [key: string]: string } {
    return {
      deploymentTaskID: 'deploymentTaskID',
      errorMessage: 'errorMessage',
      finished: 'finished',
      serviceName: 'serviceName',
      traceID: 'traceID',
      urlInternet: 'urlInternet',
      urlIntranet: 'urlIntranet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentTaskID: 'string',
      errorMessage: 'string',
      finished: 'boolean',
      serviceName: 'string',
      traceID: 'string',
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
  authType?: string;
  dsableURLInternet?: boolean;
  methods?: string[];
  static names(): { [key: string]: string } {
    return {
      authType: 'authType',
      dsableURLInternet: 'dsableURLInternet',
      methods: 'methods',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
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
  sourceType?: string;
  srcModelScopeModelID?: string;
  srcModelScopeModelRevision?: string;
  srcModelScopeToken?: string;
  srcOssBucket?: string;
  srcOssPath?: string;
  srcOssRegion?: string;
  static names(): { [key: string]: string } {
    return {
      fmkVllmConfig: 'fmkVllmConfig',
      framework: 'framework',
      multiModelConfig: 'multiModelConfig',
      prefix: 'prefix',
      sourceType: 'sourceType',
      srcModelScopeModelID: 'srcModelScopeModelID',
      srcModelScopeModelRevision: 'srcModelScopeModelRevision',
      srcModelScopeToken: 'srcModelScopeToken',
      srcOssBucket: 'srcOssBucket',
      srcOssPath: 'srcOssPath',
      srcOssRegion: 'srcOssRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fmkVllmConfig: DeployVllmModelInputModelConfigFmkVllmConfig,
      framework: 'string',
      multiModelConfig: { 'type': 'array', 'itemType': ModelConfig },
      prefix: 'string',
      sourceType: 'string',
      srcModelScopeModelID: 'string',
      srcModelScopeModelRevision: 'string',
      srcModelScopeToken: 'string',
      srcOssBucket: 'string',
      srcOssPath: 'string',
      srcOssRegion: 'string',
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

export class DeployVllmModelOutputData extends $dara.Model {
  deploymentTaskID?: string;
  errorMessage?: string;
  finished?: boolean;
  modelName?: string;
  serviceName?: string;
  traceID?: string;
  urlInternet?: string;
  urlIntranet?: string;
  static names(): { [key: string]: string } {
    return {
      deploymentTaskID: 'deploymentTaskID',
      errorMessage: 'errorMessage',
      finished: 'finished',
      modelName: 'modelName',
      serviceName: 'serviceName',
      traceID: 'traceID',
      urlInternet: 'urlInternet',
      urlIntranet: 'urlIntranet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentTaskID: 'string',
      errorMessage: 'string',
      finished: 'boolean',
      modelName: 'string',
      serviceName: 'string',
      traceID: 'string',
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

export class DownloadModelOutputData extends $dara.Model {
  modelPath?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      modelPath: 'modelPath',
      taskType: 'taskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelPath: 'string',
      taskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelStatusOutputData extends $dara.Model {
  currentBytes?: number;
  errMessage?: string;
  fileSize?: number;
  finished?: boolean;
  finishedTime?: number;
  speed?: number;
  startTime?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      currentBytes: 'currentBytes',
      errMessage: 'errMessage',
      fileSize: 'fileSize',
      finished: 'finished',
      finishedTime: 'finishedTime',
      speed: 'speed',
      startTime: 'startTime',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentBytes: 'number',
      errMessage: 'string',
      fileSize: 'number',
      finished: 'boolean',
      finishedTime: 'number',
      speed: 'number',
      startTime: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ServiceInstanceLatestDeployment extends $dara.Model {
  finishedTime?: string;
  name?: string;
  /**
   * @example
   * Running
   */
  phase?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      finishedTime: 'finishedTime',
      name: 'name',
      phase: 'phase',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishedTime: 'string',
      name: 'string',
      phase: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TemplateParameterSchemaRoleExtension extends $dara.Model {
  authorities?: string[];
  name?: string;
  service?: string;
  static names(): { [key: string]: string } {
    return {
      authorities: 'authorities',
      name: 'name',
      service: 'service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorities: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      service: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.authorities)) {
      $dara.Model.validateArray(this.authorities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TemplateRevisionStatus extends $dara.Model {
  /**
   * @example
   * https://registry.serverless-devs.com/details.html?name=template-test&package_type=v3
   */
  packageUrl?: string;
  /**
   * @example
   * Published
   */
  phase?: string;
  /**
   * @example
   * p-default
   */
  pipelineName?: string;
  /**
   * @example
   * https://cap.console.aliyun.com/template-detail?template=adasdasdaewe-adadqwe
   */
  templateUrl?: string;
  static names(): { [key: string]: string } {
    return {
      packageUrl: 'packageUrl',
      phase: 'phase',
      pipelineName: 'pipelineName',
      templateUrl: 'templateUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packageUrl: 'string',
      phase: 'string',
      pipelineName: 'string',
      templateUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TemplateSpecSource extends $dara.Model {
  repository?: RepositorySourceConfig;
  static names(): { [key: string]: string } {
    return {
      repository: 'repository',
    };
  }

  static types(): { [key: string]: any } {
    return {
      repository: RepositorySourceConfig,
    };
  }

  validate() {
    if(this.repository && typeof (this.repository as any).validate === 'function') {
      (this.repository as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TemplateStatusLatestDeployment extends $dara.Model {
  finishedTime?: string;
  /**
   * @example
   * BuildFinished
   */
  phase?: string;
  pipelineName?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      finishedTime: 'finishedTime',
      phase: 'phase',
      pipelineName: 'pipelineName',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishedTime: 'string',
      phase: 'string',
      pipelineName: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Artifact extends $dara.Model {
  /**
   * @example
   * 2021-11-19T09:34:38Z
   */
  createdTime?: string;
  /**
   * @example
   * test-description
   */
  description?: string;
  /**
   * @example
   * 1
   */
  generation?: number;
  /**
   * @example
   * Artifact
   */
  kind?: string;
  labels?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * my-artifact
   */
  name?: string;
  /**
   * @example
   * 1
   */
  resourceVersion?: number;
  spec?: ArtifactSpec;
  status?: ArtifactStatus;
  /**
   * @example
   * 1455541096***548
   */
  uid?: string;
  /**
   * @example
   * 2021-11-19T09:34:38Z
   */
  updatedTime?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      description: 'description',
      generation: 'generation',
      kind: 'kind',
      labels: 'labels',
      name: 'name',
      resourceVersion: 'resourceVersion',
      spec: 'spec',
      status: 'status',
      uid: 'uid',
      updatedTime: 'updatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      generation: 'number',
      kind: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      name: 'string',
      resourceVersion: 'number',
      spec: ArtifactSpec,
      status: ArtifactStatus,
      uid: 'string',
      updatedTime: 'string',
    };
  }

  validate() {
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    if(this.spec && typeof (this.spec as any).validate === 'function') {
      (this.spec as any).validate();
    }
    if(this.status && typeof (this.status as any).validate === 'function') {
      (this.status as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ArtifactCode extends $dara.Model {
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

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ArtifactMeta extends $dara.Model {
  /**
   * @example
   * CRC-64 code
   */
  checksum?: string;
  /**
   * @example
   * my-artifact
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      checksum: 'checksum',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checksum: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ArtifactSpec extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * custom.debian10
   */
  runtime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * FC代码包、工作流yaml
   */
  type?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * oss://cn-hangzhou/my-bucket/my.zip
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      runtime: 'runtime',
      type: 'type',
      uri: 'uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      runtime: 'string',
      type: 'string',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ArtifactStatus extends $dara.Model {
  /**
   * @example
   * acs:devs:cn-hangzhou:123456:artifacts/my-first-artifact
   */
  arn?: string;
  /**
   * @example
   * 2825179536350****
   */
  checksum?: string;
  /**
   * @example
   * 1024
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      arn: 'arn',
      checksum: 'checksum',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      arn: 'string',
      checksum: 'string',
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

export class ArtifactTempBucketToken extends $dara.Model {
  credentials?: ArtifactTempBucketTokenCredentials;
  ossBucketName?: string;
  ossObjectName?: string;
  ossRegion?: string;
  static names(): { [key: string]: string } {
    return {
      credentials: 'credentials',
      ossBucketName: 'ossBucketName',
      ossObjectName: 'ossObjectName',
      ossRegion: 'ossRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentials: ArtifactTempBucketTokenCredentials,
      ossBucketName: 'string',
      ossObjectName: 'string',
      ossRegion: 'string',
    };
  }

  validate() {
    if(this.credentials && typeof (this.credentials as any).validate === 'function') {
      (this.credentials as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BranchFilter extends $dara.Model {
  /**
   * @example
   * master
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BuildCacheConfig extends $dara.Model {
  /**
   * @example
   * { 	"3C75C832-0EAD-40D6-8FA1-2BA9171C926B": "~/.npm", 	"D256BB7A-1886-4A19-A75B-A1FDC23D5A00": "~/.cache" }
   */
  keyPath?: { [key: string]: any };
  paths?: string[];
  static names(): { [key: string]: string } {
    return {
      keyPath: 'keyPath',
      paths: 'paths',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyPath: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      paths: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.keyPath) {
      $dara.Model.validateMap(this.keyPath);
    }
    if(Array.isArray(this.paths)) {
      $dara.Model.validateArray(this.paths);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BuildConfig extends $dara.Model {
  default?: DefaultBuilderConfig;
  static names(): { [key: string]: string } {
    return {
      default: 'default',
    };
  }

  static types(): { [key: string]: any } {
    return {
      default: DefaultBuilderConfig,
    };
  }

  validate() {
    if(this.default && typeof (this.default as any).validate === 'function') {
      (this.default as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Checkout extends $dara.Model {
  /**
   * @example
   * +001691d0768ca49e9550beeb59fbc163f33b7e88:refs/remotes/origin/master
   */
  ref?: string;
  /**
   * @example
   * https:/your_token/@github.com/buptwzj/test-initRepo4.git
   */
  remote?: string;
  static names(): { [key: string]: string } {
    return {
      ref: 'ref',
      remote: 'remote',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ref: 'string',
      remote: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CodeVersionReference extends $dara.Model {
  /**
   * @example
   * main
   */
  branch?: string;
  /**
   * @example
   * 12721ec262d03a93809ba2bbc717963cb298ceca
   */
  commitID?: string;
  static names(): { [key: string]: string } {
    return {
      branch: 'branch',
      commitID: 'commitID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branch: 'string',
      commitID: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Condition extends $dara.Model {
  expression?: string;
  static names(): { [key: string]: string } {
    return {
      expression: 'expression',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expression: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Connection extends $dara.Model {
  /**
   * @example
   * 2021-11-19T09:34:38Z
   */
  createdTime?: string;
  /**
   * @example
   * test-description
   */
  description?: string;
  /**
   * @example
   * Connection
   */
  kind?: string;
  labels?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * my-connection
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  spec?: ConnectionSpec;
  status?: ConnectionStatus;
  /**
   * @example
   * 1455541096***548
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      description: 'description',
      kind: 'kind',
      labels: 'labels',
      name: 'name',
      spec: 'spec',
      status: 'status',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      kind: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      name: 'string',
      spec: ConnectionSpec,
      status: ConnectionStatus,
      uid: 'string',
    };
  }

  validate() {
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    if(this.spec && typeof (this.spec as any).validate === 'function') {
      (this.spec as any).validate();
    }
    if(this.status && typeof (this.status as any).validate === 'function') {
      (this.status as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConnectionSpec extends $dara.Model {
  account?: GitAccount;
  gitlabConfig?: GitLabConfig;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * github
   */
  platform?: string;
  static names(): { [key: string]: string } {
    return {
      account: 'account',
      gitlabConfig: 'gitlabConfig',
      platform: 'platform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: GitAccount,
      gitlabConfig: GitLabConfig,
      platform: 'string',
    };
  }

  validate() {
    if(this.account && typeof (this.account as any).validate === 'function') {
      (this.account as any).validate();
    }
    if(this.gitlabConfig && typeof (this.gitlabConfig as any).validate === 'function') {
      (this.gitlabConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConnectionStatus extends $dara.Model {
  installation?: Installation;
  static names(): { [key: string]: string } {
    return {
      installation: 'installation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      installation: Installation,
    };
  }

  validate() {
    if(this.installation && typeof (this.installation as any).validate === 'function') {
      (this.installation as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Context extends $dara.Model {
  data?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.data) {
      $dara.Model.validateMap(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ContextSchema extends $dara.Model {
  /**
   * @example
   * [git](https://git-scm.com/) address for [git clone](https://git-scm.com/docs/git-clone).
   */
  description?: string;
  /**
   * @example
   * git@gitlab.alibaba-inc.com:serverless/lambda.git
   */
  hint?: string;
  /**
   * @example
   * gitRepoUrl
   */
  name?: string;
  /**
   * @example
   * true
   */
  required?: boolean;
  /**
   * @example
   * string
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      hint: 'hint',
      name: 'name',
      required: 'required',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      hint: 'string',
      name: 'string',
      required: 'boolean',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DefaultBuilderConfig extends $dara.Model {
  cache?: BuildCacheConfig;
  languages?: string[];
  steps?: any[];
  static names(): { [key: string]: string } {
    return {
      cache: 'cache',
      languages: 'languages',
      steps: 'steps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cache: BuildCacheConfig,
      languages: { 'type': 'array', 'itemType': 'string' },
      steps: { 'type': 'array', 'itemType': 'any' },
    };
  }

  validate() {
    if(this.cache && typeof (this.cache as any).validate === 'function') {
      (this.cache as any).validate();
    }
    if(Array.isArray(this.languages)) {
      $dara.Model.validateArray(this.languages);
    }
    if(Array.isArray(this.steps)) {
      $dara.Model.validateArray(this.steps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteModelOutput extends $dara.Model {
  errCode?: string;
  errMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errCode: 'errCode',
      errMsg: 'errMsg',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployCustomContainerAsyncOutput extends $dara.Model {
  data?: string;
  errCode?: string;
  errMsg?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMsg: 'errMsg',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errCode: 'string',
      errMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployCustomContainerInput extends $dara.Model {
  accountID?: string;
  concurrencyConfig?: DeployCustomContainerInputConcurrencyConfig;
  cpu?: number;
  customContainerConfig?: DeployCustomContainerInputCustomContainerConfig;
  description?: string;
  diskSize?: number;
  envName?: string;
  environmentVariables?: { [key: string]: any };
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
      concurrencyConfig: 'concurrencyConfig',
      cpu: 'cpu',
      customContainerConfig: 'customContainerConfig',
      description: 'description',
      diskSize: 'diskSize',
      envName: 'envName',
      environmentVariables: 'environmentVariables',
      gpuConfig: 'gpuConfig',
      httpTrigger: 'httpTrigger',
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
      concurrencyConfig: DeployCustomContainerInputConcurrencyConfig,
      cpu: 'number',
      customContainerConfig: DeployCustomContainerInputCustomContainerConfig,
      description: 'string',
      diskSize: 'number',
      envName: 'string',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gpuConfig: DeployCustomContainerInputGpuConfig,
      httpTrigger: DeployCustomContainerInputHttpTrigger,
      logConfig: DeployCustomContainerInputLogConfig,
      memorySize: 'number',
      modelConfig: DeployCustomContainerInputModelConfig,
      name: 'string',
      nasConfig: DeployCustomContainerInputNasConfig,
      originalName: 'string',
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
    if(this.concurrencyConfig && typeof (this.concurrencyConfig as any).validate === 'function') {
      (this.concurrencyConfig as any).validate();
    }
    if(this.customContainerConfig && typeof (this.customContainerConfig as any).validate === 'function') {
      (this.customContainerConfig as any).validate();
    }
    if(this.environmentVariables) {
      $dara.Model.validateMap(this.environmentVariables);
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

export class DeployCustomContainerOutput extends $dara.Model {
  data?: DeployCustomContainerOutputData;
  errCode?: string;
  errMsg?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMsg: 'errMsg',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DeployCustomContainerOutputData,
      errCode: 'string',
      errMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployEnvironmentOptions extends $dara.Model {
  services?: string[];
  static names(): { [key: string]: string } {
    return {
      services: 'services',
    };
  }

  static types(): { [key: string]: any } {
    return {
      services: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.services)) {
      $dara.Model.validateArray(this.services);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployHuggingFaceModelAsyncOutput extends $dara.Model {
  data?: string;
  errCode?: string;
  errMsg?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMsg: 'errMsg',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errCode: 'string',
      errMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployHuggingFaceModelInput extends $dara.Model {
  accountID?: string;
  concurrencyConfig?: DeployHuggingFaceModelInputConcurrencyConfig;
  cpu?: number;
  description?: string;
  diskSize?: number;
  envName?: string;
  environmentVariables?: { [key: string]: any };
  gpuConfig?: DeployHuggingFaceModelInputGpuConfig;
  httpTrigger?: DeployHuggingFaceModelInputHttpTrigger;
  imageName?: string;
  instanceConcurrency?: number;
  logConfig?: DeployHuggingFaceModelInputLogConfig;
  memorySize?: number;
  modelConfig?: DeployHuggingFaceModelInputModelConfig;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  nasConfig?: DeployHuggingFaceModelInputNasConfig;
  originalName?: string;
  projectName?: string;
  provisionConfig?: DeployHuggingFaceModelInputProvisionConfig;
  region?: string;
  reportStatusURL?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  role?: string;
  timeout?: number;
  traceId?: string;
  vpcConfig?: DeployHuggingFaceModelInputVpcConfig;
  static names(): { [key: string]: string } {
    return {
      accountID: 'accountID',
      concurrencyConfig: 'concurrencyConfig',
      cpu: 'cpu',
      description: 'description',
      diskSize: 'diskSize',
      envName: 'envName',
      environmentVariables: 'environmentVariables',
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
      concurrencyConfig: DeployHuggingFaceModelInputConcurrencyConfig,
      cpu: 'number',
      description: 'string',
      diskSize: 'number',
      envName: 'string',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gpuConfig: DeployHuggingFaceModelInputGpuConfig,
      httpTrigger: DeployHuggingFaceModelInputHttpTrigger,
      imageName: 'string',
      instanceConcurrency: 'number',
      logConfig: DeployHuggingFaceModelInputLogConfig,
      memorySize: 'number',
      modelConfig: DeployHuggingFaceModelInputModelConfig,
      name: 'string',
      nasConfig: DeployHuggingFaceModelInputNasConfig,
      originalName: 'string',
      projectName: 'string',
      provisionConfig: DeployHuggingFaceModelInputProvisionConfig,
      region: 'string',
      reportStatusURL: 'string',
      role: 'string',
      timeout: 'number',
      traceId: 'string',
      vpcConfig: DeployHuggingFaceModelInputVpcConfig,
    };
  }

  validate() {
    if(this.concurrencyConfig && typeof (this.concurrencyConfig as any).validate === 'function') {
      (this.concurrencyConfig as any).validate();
    }
    if(this.environmentVariables) {
      $dara.Model.validateMap(this.environmentVariables);
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

export class DeployHuggingFaceModelOutput extends $dara.Model {
  data?: DeployHuggingFaceModelOutputData;
  errCode?: string;
  errMsg?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMsg: 'errMsg',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DeployHuggingFaceModelOutputData,
      errCode: 'string',
      errMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployModelScopeModelAsyncOutput extends $dara.Model {
  data?: string;
  errCode?: string;
  errMsg?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMsg: 'errMsg',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errCode: 'string',
      errMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployModelScopeModelInput extends $dara.Model {
  accountID?: string;
  concurrencyConfig?: DeployModelScopeModelInputConcurrencyConfig;
  cpu?: number;
  description?: string;
  diskSize?: number;
  envName?: string;
  environmentVariables?: { [key: string]: any };
  gpuConfig?: DeployModelScopeModelInputGpuConfig;
  httpTrigger?: DeployModelScopeModelInputHttpTrigger;
  imageName?: string;
  instanceConcurrency?: number;
  logConfig?: DeployModelScopeModelInputLogConfig;
  memorySize?: number;
  modelConfig?: DeployModelScopeModelInputModelConfig;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  nasConfig?: DeployModelScopeModelInputNasConfig;
  originalName?: string;
  projectName?: string;
  provisionConfig?: DeployModelScopeModelInputProvisionConfig;
  region?: string;
  reportStatusURL?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  role?: string;
  timeout?: number;
  traceId?: string;
  vpcConfig?: DeployModelScopeModelInputVpcConfig;
  static names(): { [key: string]: string } {
    return {
      accountID: 'accountID',
      concurrencyConfig: 'concurrencyConfig',
      cpu: 'cpu',
      description: 'description',
      diskSize: 'diskSize',
      envName: 'envName',
      environmentVariables: 'environmentVariables',
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
      concurrencyConfig: DeployModelScopeModelInputConcurrencyConfig,
      cpu: 'number',
      description: 'string',
      diskSize: 'number',
      envName: 'string',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gpuConfig: DeployModelScopeModelInputGpuConfig,
      httpTrigger: DeployModelScopeModelInputHttpTrigger,
      imageName: 'string',
      instanceConcurrency: 'number',
      logConfig: DeployModelScopeModelInputLogConfig,
      memorySize: 'number',
      modelConfig: DeployModelScopeModelInputModelConfig,
      name: 'string',
      nasConfig: DeployModelScopeModelInputNasConfig,
      originalName: 'string',
      projectName: 'string',
      provisionConfig: DeployModelScopeModelInputProvisionConfig,
      region: 'string',
      reportStatusURL: 'string',
      role: 'string',
      timeout: 'number',
      traceId: 'string',
      vpcConfig: DeployModelScopeModelInputVpcConfig,
    };
  }

  validate() {
    if(this.concurrencyConfig && typeof (this.concurrencyConfig as any).validate === 'function') {
      (this.concurrencyConfig as any).validate();
    }
    if(this.environmentVariables) {
      $dara.Model.validateMap(this.environmentVariables);
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

export class DeployModelScopeModelOutput extends $dara.Model {
  data?: DeployModelScopeModelOutputData;
  errCode?: string;
  errMsg?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMsg: 'errMsg',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DeployModelScopeModelOutputData,
      errCode: 'string',
      errMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployOllamaModelAsyncOutput extends $dara.Model {
  data?: string;
  errCode?: string;
  errMsg?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMsg: 'errMsg',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errCode: 'string',
      errMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
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

export class DeployOllamaModelOutput extends $dara.Model {
  data?: DeployOllamaModelOutputData;
  errCode?: string;
  errMsg?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMsg: 'errMsg',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DeployOllamaModelOutputData,
      errCode: 'string',
      errMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployTensorRtModelAsyncOutput extends $dara.Model {
  data?: string;
  errCode?: string;
  errMsg?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMsg: 'errMsg',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errCode: 'string',
      errMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployTensorRtModelInput extends $dara.Model {
  accountID?: string;
  concurrencyConfig?: DeployTensorRtModelInputConcurrencyConfig;
  cpu?: number;
  description?: string;
  diskSize?: number;
  envName?: string;
  environmentVariables?: { [key: string]: any };
  gpuConfig?: DeployTensorRtModelInputGpuConfig;
  httpTrigger?: DeployTensorRtModelInputHttpTrigger;
  imageName?: string;
  instanceConcurrency?: number;
  logConfig?: DeployTensorRtModelInputLogConfig;
  memorySize?: number;
  modelConfig?: DeployTensorRtModelInputModelConfig;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  nasConfig?: DeployTensorRtModelInputNasConfig;
  originalName?: string;
  projectName?: string;
  provisionConfig?: DeployTensorRtModelInputProvisionConfig;
  region?: string;
  reportStatusURL?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  role?: string;
  timeout?: number;
  traceId?: string;
  vpcConfig?: DeployTensorRtModelInputVpcConfig;
  static names(): { [key: string]: string } {
    return {
      accountID: 'accountID',
      concurrencyConfig: 'concurrencyConfig',
      cpu: 'cpu',
      description: 'description',
      diskSize: 'diskSize',
      envName: 'envName',
      environmentVariables: 'environmentVariables',
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
      concurrencyConfig: DeployTensorRtModelInputConcurrencyConfig,
      cpu: 'number',
      description: 'string',
      diskSize: 'number',
      envName: 'string',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gpuConfig: DeployTensorRtModelInputGpuConfig,
      httpTrigger: DeployTensorRtModelInputHttpTrigger,
      imageName: 'string',
      instanceConcurrency: 'number',
      logConfig: DeployTensorRtModelInputLogConfig,
      memorySize: 'number',
      modelConfig: DeployTensorRtModelInputModelConfig,
      name: 'string',
      nasConfig: DeployTensorRtModelInputNasConfig,
      originalName: 'string',
      projectName: 'string',
      provisionConfig: DeployTensorRtModelInputProvisionConfig,
      region: 'string',
      reportStatusURL: 'string',
      role: 'string',
      timeout: 'number',
      traceId: 'string',
      vpcConfig: DeployTensorRtModelInputVpcConfig,
    };
  }

  validate() {
    if(this.concurrencyConfig && typeof (this.concurrencyConfig as any).validate === 'function') {
      (this.concurrencyConfig as any).validate();
    }
    if(this.environmentVariables) {
      $dara.Model.validateMap(this.environmentVariables);
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

export class DeployTensorRtModelOutput extends $dara.Model {
  data?: DeployTensorRtModelOutputData;
  errCode?: string;
  errMsg?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMsg: 'errMsg',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DeployTensorRtModelOutputData,
      errCode: 'string',
      errMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeployVllmModelAsyncOutput extends $dara.Model {
  data?: string;
  errCode?: string;
  errMsg?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMsg: 'errMsg',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      errCode: 'string',
      errMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
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
  description?: string;
  diskSize?: number;
  envName?: string;
  environmentVariables?: { [key: string]: any };
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
      description: 'description',
      diskSize: 'diskSize',
      envName: 'envName',
      environmentVariables: 'environmentVariables',
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
      concurrencyConfig: DeployVllmModelInputConcurrencyConfig,
      cpu: 'number',
      description: 'string',
      diskSize: 'number',
      envName: 'string',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
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
    if(this.environmentVariables) {
      $dara.Model.validateMap(this.environmentVariables);
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

export class DeployVllmModelOutput extends $dara.Model {
  data?: DeployVllmModelOutputData;
  errCode?: string;
  errMsg?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMsg: 'errMsg',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DeployVllmModelOutputData,
      errCode: 'string',
      errMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DownloadModelOutput extends $dara.Model {
  data?: DownloadModelOutputData;
  errCode?: string;
  errMsg?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMsg: 'errMsg',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DownloadModelOutputData,
      errCode: 'string',
      errMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Environment extends $dara.Model {
  /**
   * @example
   * 2021-11-19T09:34:38Z
   */
  createdTime?: string;
  /**
   * @example
   * test env
   */
  description?: string;
  /**
   * @example
   * 1
   */
  generation?: number;
  /**
   * @example
   * Environment
   */
  kind?: string;
  labels?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * demo-env
   */
  name?: string;
  /**
   * @example
   * demo-project
   */
  projectName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  spec?: EnvironmentSpec;
  status?: EnvironmentStatus;
  /**
   * @example
   * 1455541096***548
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      description: 'description',
      generation: 'generation',
      kind: 'kind',
      labels: 'labels',
      name: 'name',
      projectName: 'projectName',
      spec: 'spec',
      status: 'status',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      generation: 'number',
      kind: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      name: 'string',
      projectName: 'string',
      spec: EnvironmentSpec,
      status: EnvironmentStatus,
      uid: 'string',
    };
  }

  validate() {
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    if(this.spec && typeof (this.spec as any).validate === 'function') {
      (this.spec as any).validate();
    }
    if(this.status && typeof (this.status as any).validate === 'function') {
      (this.status as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnvironmentBaseline extends $dara.Model {
  servicesInstances?: { [key: string]: ServiceInstance };
  variables?: { [key: string]: Variable };
  static names(): { [key: string]: string } {
    return {
      servicesInstances: 'servicesInstances',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      servicesInstances: { 'type': 'map', 'keyType': 'string', 'valueType': ServiceInstance },
      variables: { 'type': 'map', 'keyType': 'string', 'valueType': Variable },
    };
  }

  validate() {
    if(this.servicesInstances) {
      $dara.Model.validateMap(this.servicesInstances);
    }
    if(this.variables) {
      $dara.Model.validateMap(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnvironmentChanges extends $dara.Model {
  services?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      services: 'services',
    };
  }

  static types(): { [key: string]: any } {
    return {
      services: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.services) {
      $dara.Model.validateMap(this.services);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnvironmentDeployment extends $dara.Model {
  /**
   * @example
   * 2021-11-19T09:34:38Z
   */
  createdTime?: string;
  /**
   * @example
   * commit by xxx.
   */
  description?: string;
  /**
   * @example
   * Deployment
   */
  kind?: string;
  labels?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * my-deployment
   */
  name?: string;
  spec?: EnvironmentDeploymentSpec;
  status?: EnvironmentDeploymentStatus;
  /**
   * @example
   * 1455541096***548
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      description: 'description',
      kind: 'kind',
      labels: 'labels',
      name: 'name',
      spec: 'spec',
      status: 'status',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      kind: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      name: 'string',
      spec: EnvironmentDeploymentSpec,
      status: EnvironmentDeploymentStatus,
      uid: 'string',
    };
  }

  validate() {
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    if(this.spec && typeof (this.spec as any).validate === 'function') {
      (this.spec as any).validate();
    }
    if(this.status && typeof (this.status as any).validate === 'function') {
      (this.status as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnvironmentDeploymentSpec extends $dara.Model {
  baseline?: EnvironmentSnapshot;
  changes?: EnvironmentChanges;
  /**
   * @example
   * false
   */
  skipRemoveResources?: boolean;
  target?: EnvironmentStagedConfigs;
  webhookCodeContext?: WebhookCodeContext;
  static names(): { [key: string]: string } {
    return {
      baseline: 'baseline',
      changes: 'changes',
      skipRemoveResources: 'skipRemoveResources',
      target: 'target',
      webhookCodeContext: 'webhookCodeContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseline: EnvironmentSnapshot,
      changes: EnvironmentChanges,
      skipRemoveResources: 'boolean',
      target: EnvironmentStagedConfigs,
      webhookCodeContext: WebhookCodeContext,
    };
  }

  validate() {
    if(this.baseline && typeof (this.baseline as any).validate === 'function') {
      (this.baseline as any).validate();
    }
    if(this.changes && typeof (this.changes as any).validate === 'function') {
      (this.changes as any).validate();
    }
    if(this.target && typeof (this.target as any).validate === 'function') {
      (this.target as any).validate();
    }
    if(this.webhookCodeContext && typeof (this.webhookCodeContext as any).validate === 'function') {
      (this.webhookCodeContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnvironmentDeploymentStatus extends $dara.Model {
  finishedTime?: string;
  /**
   * @example
   * Running
   */
  phase?: string;
  /**
   * @example
   * my-pipeline
   */
  pipelineName?: string;
  serviceDeployments?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      finishedTime: 'finishedTime',
      phase: 'phase',
      pipelineName: 'pipelineName',
      serviceDeployments: 'serviceDeployments',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishedTime: 'string',
      phase: 'string',
      pipelineName: 'string',
      serviceDeployments: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.serviceDeployments) {
      $dara.Model.validateMap(this.serviceDeployments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnvironmentSnapshot extends $dara.Model {
  services?: { [key: string]: ServiceInstance };
  static names(): { [key: string]: string } {
    return {
      services: 'services',
    };
  }

  static types(): { [key: string]: any } {
    return {
      services: { 'type': 'map', 'keyType': 'string', 'valueType': ServiceInstance },
    };
  }

  validate() {
    if(this.services) {
      $dara.Model.validateMap(this.services);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnvironmentSpec extends $dara.Model {
  /**
   * @example
   * acs:ram::*******:role/aliyundevsdefaultrole
   */
  roleArn?: string;
  stagedConfigs?: EnvironmentStagedConfigs;
  /**
   * @example
   * Testing
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      roleArn: 'roleArn',
      stagedConfigs: 'stagedConfigs',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleArn: 'string',
      stagedConfigs: EnvironmentStagedConfigs,
      type: 'string',
    };
  }

  validate() {
    if(this.stagedConfigs && typeof (this.stagedConfigs as any).validate === 'function') {
      (this.stagedConfigs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnvironmentStagedConfigs extends $dara.Model {
  services?: { [key: string]: ServiceConfig };
  variables?: { [key: string]: Variable };
  static names(): { [key: string]: string } {
    return {
      services: 'services',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      services: { 'type': 'map', 'keyType': 'string', 'valueType': ServiceConfig },
      variables: { 'type': 'map', 'keyType': 'string', 'valueType': Variable },
    };
  }

  validate() {
    if(this.services) {
      $dara.Model.validateMap(this.services);
    }
    if(this.variables) {
      $dara.Model.validateMap(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EnvironmentStatus extends $dara.Model {
  latestEnvironmentDeploymentName?: string;
  /**
   * @example
   * 1
   */
  observedGeneration?: number;
  /**
   * @example
   * 2021-11-19T09:34:38Z
   */
  observedTime?: string;
  servicesInstances?: { [key: string]: ServiceInstance };
  servicesWithPendingChanges?: string[];
  static names(): { [key: string]: string } {
    return {
      latestEnvironmentDeploymentName: 'latestEnvironmentDeploymentName',
      observedGeneration: 'observedGeneration',
      observedTime: 'observedTime',
      servicesInstances: 'servicesInstances',
      servicesWithPendingChanges: 'servicesWithPendingChanges',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latestEnvironmentDeploymentName: 'string',
      observedGeneration: 'number',
      observedTime: 'string',
      servicesInstances: { 'type': 'map', 'keyType': 'string', 'valueType': ServiceInstance },
      servicesWithPendingChanges: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.servicesInstances) {
      $dara.Model.validateMap(this.servicesInstances);
    }
    if(Array.isArray(this.servicesWithPendingChanges)) {
      $dara.Model.validateArray(this.servicesWithPendingChanges);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EventFilterConfig extends $dara.Model {
  branch?: BranchFilter;
  static names(): { [key: string]: string } {
    return {
      branch: 'branch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branch: BranchFilter,
    };
  }

  validate() {
    if(this.branch && typeof (this.branch as any).validate === 'function') {
      (this.branch as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FinalizeConfig extends $dara.Model {
  steps?: any[];
  static names(): { [key: string]: string } {
    return {
      steps: 'steps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      steps: { 'type': 'array', 'itemType': 'any' },
    };
  }

  validate() {
    if(Array.isArray(this.steps)) {
      $dara.Model.validateArray(this.steps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModelStatusOutput extends $dara.Model {
  data?: GetModelStatusOutputData;
  errCode?: string;
  errMsg?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errCode: 'errCode',
      errMsg: 'errMsg',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetModelStatusOutputData,
      errCode: 'string',
      errMsg: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GitAccount extends $dara.Model {
  /**
   * @example
   * https://gitee.com/assets/no_portrait.png
   */
  avatar?: string;
  /**
   * @example
   * your_displayname
   */
  displayName?: string;
  /**
   * @example
   * 1
   */
  id?: string;
  /**
   * @example
   * your_username
   */
  name?: string;
  /**
   * @example
   * https://gitlab.com
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      avatar: 'avatar',
      displayName: 'displayName',
      id: 'id',
      name: 'name',
      uri: 'uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: 'string',
      displayName: 'string',
      id: 'string',
      name: 'string',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GitEventSnapshot extends $dara.Model {
  /**
   * @example
   * main
   */
  branch?: string;
  /**
   * @example
   * 12721ec262d03a93809ba2bbc717963cb298ceca
   */
  commitID?: string;
  /**
   * @example
   * 1.0
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      branch: 'branch',
      commitID: 'commitID',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branch: 'string',
      commitID: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GitLabConfig extends $dara.Model {
  /**
   * @example
   * your-token
   */
  token?: string;
  /**
   * @example
   * http://gitlab.c16194660f14898a0810408171302ac.cn-shanghai.alicontainer.com/
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      token: 'token',
      uri: 'uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      token: 'string',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InitializeConfig extends $dara.Model {
  steps?: any[];
  static names(): { [key: string]: string } {
    return {
      steps: 'steps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      steps: { 'type': 'array', 'itemType': 'any' },
    };
  }

  validate() {
    if(Array.isArray(this.steps)) {
      $dara.Model.validateArray(this.steps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Installation extends $dara.Model {
  /**
   * @example
   * https://github.com/login/oauth/authorize?client_id=86059a1b2bb20d3e5fc3&scope=repo,repo:status,delete_repo
   */
  actionUri?: string;
  /**
   * @example
   * Please click \"actionUri\" to complete the OAuth authorization process
   */
  message?: string;
  /**
   * @example
   * finished
   */
  stage?: string;
  static names(): { [key: string]: string } {
    return {
      actionUri: 'actionUri',
      message: 'message',
      stage: 'stage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionUri: 'string',
      message: 'string',
      stage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelAsyncTask extends $dara.Model {
  errCode?: string;
  errMsg?: string;
  finished?: boolean;
  finishedTime?: number;
  result?: any;
  startTime?: number;
  taskType?: string;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      errCode: 'errCode',
      errMsg: 'errMsg',
      finished: 'finished',
      finishedTime: 'finishedTime',
      result: 'result',
      startTime: 'startTime',
      taskType: 'taskType',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errCode: 'string',
      errMsg: 'string',
      finished: 'boolean',
      finishedTime: 'number',
      result: 'any',
      startTime: 'number',
      taskType: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelConfig extends $dara.Model {
  bucket?: string;
  framework?: string;
  model?: string;
  /**
   * **if can be null:**
   * true
   */
  multiModelConfig?: ModelConfig[];
  path?: string;
  prefix?: string;
  region?: string;
  reversion?: string;
  token?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * modelscope
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'bucket',
      framework: 'framework',
      model: 'model',
      multiModelConfig: 'multiModelConfig',
      path: 'path',
      prefix: 'prefix',
      region: 'region',
      reversion: 'reversion',
      token: 'token',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      framework: 'string',
      model: 'string',
      multiModelConfig: { 'type': 'array', 'itemType': ModelConfig },
      path: 'string',
      prefix: 'string',
      region: 'string',
      reversion: 'string',
      token: 'string',
      type: 'string',
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

export class ModelFile extends $dara.Model {
  isDir?: boolean;
  modeTime?: number;
  name?: string;
  path?: string;
  size?: number;
  static names(): { [key: string]: string } {
    return {
      isDir: 'isDir',
      modeTime: 'modeTime',
      name: 'name',
      path: 'path',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDir: 'boolean',
      modeTime: 'number',
      name: 'string',
      path: 'string',
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

export class ModelFilePreview extends $dara.Model {
  content?: string;
  hash?: string;
  isCompressedImage?: boolean;
  isDir?: boolean;
  name?: string;
  path?: string;
  size?: number;
  unpreviewable?: boolean;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      hash: 'hash',
      isCompressedImage: 'isCompressedImage',
      isDir: 'isDir',
      name: 'name',
      path: 'path',
      size: 'size',
      unpreviewable: 'unpreviewable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      hash: 'string',
      isCompressedImage: 'boolean',
      isDir: 'boolean',
      name: 'string',
      path: 'string',
      size: 'number',
      unpreviewable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelProvider extends $dara.Model {
  /**
   * @example
   * 2021-11-19T09:34:38Z
   */
  createdTime?: string;
  /**
   * @example
   * test-description
   */
  description?: string;
  /**
   * @example
   * Toolset
   */
  kind?: string;
  labels?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * my-toolset
   */
  name?: string;
  /**
   * @example
   * 1455541096***548
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      description: 'description',
      kind: 'kind',
      labels: 'labels',
      name: 'name',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      kind: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      name: 'string',
      uid: 'string',
    };
  }

  validate() {
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelProviderAuthorization extends $dara.Model {
  authConfig?: { [key: string]: string };
  /**
   * @example
   * apiKey
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      authConfig: 'authConfig',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      type: 'string',
    };
  }

  validate() {
    if(this.authConfig) {
      $dara.Model.validateMap(this.authConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelProviderSchema extends $dara.Model {
  detail?: string;
  /**
   * @example
   * OpenAPI
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'detail',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelProviderSpec extends $dara.Model {
  authorization?: ModelProviderAuthorization;
  schema?: ModelProviderSchema;
  static names(): { [key: string]: string } {
    return {
      authorization: 'authorization',
      schema: 'schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorization: ModelProviderAuthorization,
      schema: ModelProviderSchema,
    };
  }

  validate() {
    if(this.authorization && typeof (this.authorization as any).validate === 'function') {
      (this.authorization as any).validate();
    }
    if(this.schema && typeof (this.schema as any).validate === 'function') {
      (this.schema as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelTask extends $dara.Model {
  errMsg?: string;
  fileSize?: number;
  finishTime?: number;
  finished?: boolean;
  startTime?: number;
  status?: string;
  taskId?: string;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      errMsg: 'errMsg',
      fileSize: 'fileSize',
      finishTime: 'finishTime',
      finished: 'finished',
      startTime: 'startTime',
      status: 'status',
      taskId: 'taskId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errMsg: 'string',
      fileSize: 'number',
      finishTime: 'number',
      finished: 'boolean',
      startTime: 'number',
      status: 'string',
      taskId: 'string',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OAuthCredential extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1716176924603
   */
  createdTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1716263324603
   */
  expiration?: number;
  /**
   * @example
   * 4d77bfae284770d94ebeed6b0199ebfd65e3943ba4f1e44dc36d792a93ba0d13
   */
  refreshToken?: string;
  /**
   * @example
   * user_info projects pull_requests hook gists emails
   */
  scope?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4e84246b6b3962cd3d207aad1ea2f911
   */
  token?: string;
  /**
   * @example
   * bearer
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      expiration: 'expiration',
      refreshToken: 'refreshToken',
      scope: 'scope',
      token: 'token',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'number',
      expiration: 'number',
      refreshToken: 'string',
      scope: 'string',
      token: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OperationModelFileAction extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  action?: string;
  destination?: string;
  source?: string;
  target?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      destination: 'destination',
      source: 'source',
      target: 'target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      destination: 'string',
      source: 'string',
      target: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OssSourceConfig extends $dara.Model {
  /**
   * @example
   * demo-bucket
   */
  bucket?: string;
  /**
   * @example
   * demo-object
   */
  object?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'bucket',
      object: 'object',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      object: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Pipeline extends $dara.Model {
  /**
   * @example
   * 2021-11-19T09:34:38Z
   */
  createdTime?: string;
  /**
   * @example
   * Pipeline example.
   */
  description?: string;
  /**
   * @example
   * 1
   */
  generation?: number;
  /**
   * @example
   * Pipeline
   */
  kind?: string;
  labels?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * my-pipeline
   */
  name?: string;
  /**
   * @example
   * 1
   */
  resourceVersion?: number;
  spec?: PipelineSpec;
  status?: PipelineStatus;
  /**
   * @example
   * 1455541096***548
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      description: 'description',
      generation: 'generation',
      kind: 'kind',
      labels: 'labels',
      name: 'name',
      resourceVersion: 'resourceVersion',
      spec: 'spec',
      status: 'status',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      generation: 'number',
      kind: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      name: 'string',
      resourceVersion: 'number',
      spec: PipelineSpec,
      status: PipelineStatus,
      uid: 'string',
    };
  }

  validate() {
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    if(this.spec && typeof (this.spec as any).validate === 'function') {
      (this.spec as any).validate();
    }
    if(this.status && typeof (this.status as any).validate === 'function') {
      (this.status as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PipelineSpec extends $dara.Model {
  context?: Context;
  /**
   * @example
   * my-pipeline-template
   */
  templateName?: string;
  templateSpec?: PipelineTemplateSpec;
  static names(): { [key: string]: string } {
    return {
      context: 'context',
      templateName: 'templateName',
      templateSpec: 'templateSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: Context,
      templateName: 'string',
      templateSpec: PipelineTemplateSpec,
    };
  }

  validate() {
    if(this.context && typeof (this.context as any).validate === 'function') {
      (this.context as any).validate();
    }
    if(this.templateSpec && typeof (this.templateSpec as any).validate === 'function') {
      (this.templateSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PipelineStatus extends $dara.Model {
  latestExecError?: TaskExecError;
  /**
   * @example
   * Success
   */
  phase?: string;
  static names(): { [key: string]: string } {
    return {
      latestExecError: 'latestExecError',
      phase: 'phase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latestExecError: TaskExecError,
      phase: 'string',
    };
  }

  validate() {
    if(this.latestExecError && typeof (this.latestExecError as any).validate === 'function') {
      (this.latestExecError as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PipelineTemplate extends $dara.Model {
  /**
   * @example
   * 2021-11-19T09:34:38Z
   */
  createdTime?: string;
  /**
   * @example
   * 2021-11-19T09:34:38Z
   */
  deletionTime?: string;
  /**
   * @example
   * PipelineTemplate example.
   */
  description?: string;
  /**
   * @example
   * 1
   */
  generation?: number;
  /**
   * @example
   * PipelineTemplate
   */
  kind?: string;
  labels?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * my-pipeline-template
   */
  name?: string;
  /**
   * @example
   * 1
   */
  resourceVersion?: number;
  spec?: PipelineTemplateSpec;
  /**
   * @example
   * 1455541096***548
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      deletionTime: 'deletionTime',
      description: 'description',
      generation: 'generation',
      kind: 'kind',
      labels: 'labels',
      name: 'name',
      resourceVersion: 'resourceVersion',
      spec: 'spec',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      deletionTime: 'string',
      description: 'string',
      generation: 'number',
      kind: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      name: 'string',
      resourceVersion: 'number',
      spec: PipelineTemplateSpec,
      uid: 'string',
    };
  }

  validate() {
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    if(this.spec && typeof (this.spec as any).validate === 'function') {
      (this.spec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PipelineTemplateSpec extends $dara.Model {
  context?: Context;
  tasks?: TaskExec[];
  static names(): { [key: string]: string } {
    return {
      context: 'context',
      tasks: 'tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: Context,
      tasks: { 'type': 'array', 'itemType': TaskExec },
    };
  }

  validate() {
    if(this.context && typeof (this.context as any).validate === 'function') {
      (this.context as any).validate();
    }
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Project extends $dara.Model {
  /**
   * @example
   * 2021-11-19T09:34:38Z
   */
  createdTime?: string;
  /**
   * @example
   * test-description
   */
  description?: string;
  /**
   * @example
   * Project
   */
  kind?: string;
  labels?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * my-project
   */
  name?: string;
  status?: ProjectStatus;
  /**
   * @example
   * 1455541096***548
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      description: 'description',
      kind: 'kind',
      labels: 'labels',
      name: 'name',
      status: 'status',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      kind: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      name: 'string',
      status: ProjectStatus,
      uid: 'string',
    };
  }

  validate() {
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    if(this.status && typeof (this.status as any).validate === 'function') {
      (this.status as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProjectSpec extends $dara.Model {
  static names(): { [key: string]: string } {
    return {
    };
  }

  static types(): { [key: string]: any } {
    return {
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ProjectStatus extends $dara.Model {
  services?: ServiceMeta[];
  static names(): { [key: string]: string } {
    return {
      services: 'services',
    };
  }

  static types(): { [key: string]: any } {
    return {
      services: { 'type': 'array', 'itemType': ServiceMeta },
    };
  }

  validate() {
    if(Array.isArray(this.services)) {
      $dara.Model.validateArray(this.services);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PullRequestFilter extends $dara.Model {
  /**
   * @example
   * feature-.*
   */
  sourceBranch?: string;
  /**
   * @example
   * master
   */
  targetBranch?: string;
  types?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceBranch: 'sourceBranch',
      targetBranch: 'targetBranch',
      types: 'types',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceBranch: 'string',
      targetBranch: 'string',
      types: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.types)) {
      $dara.Model.validateArray(this.types);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PushFilter extends $dara.Model {
  /**
   * @example
   * master
   */
  branch?: string;
  /**
   * @example
   * prod-.*
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      branch: 'branch',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branch: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Repository extends $dara.Model {
  /**
   * @example
   * 2021-11-19T09:34:38Z
   */
  createdTime?: string;
  /**
   * @example
   * test-description
   */
  description?: string;
  /**
   * @example
   * Repository
   */
  kind?: string;
  labels?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * my-repository
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  spec?: RepositorySpec;
  /**
   * @example
   * 1455541096***548
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      description: 'description',
      kind: 'kind',
      labels: 'labels',
      name: 'name',
      spec: 'spec',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      kind: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      name: 'string',
      spec: RepositorySpec,
      uid: 'string',
    };
  }

  validate() {
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    if(this.spec && typeof (this.spec as any).validate === 'function') {
      (this.spec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RepositorySourceConfig extends $dara.Model {
  codeVersion?: CodeVersionReference;
  filter?: EventFilterConfig;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * my-repository
   */
  repositoryName?: string;
  static names(): { [key: string]: string } {
    return {
      codeVersion: 'codeVersion',
      filter: 'filter',
      repositoryName: 'repositoryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeVersion: CodeVersionReference,
      filter: EventFilterConfig,
      repositoryName: 'string',
    };
  }

  validate() {
    if(this.codeVersion && typeof (this.codeVersion as any).validate === 'function') {
      (this.codeVersion as any).validate();
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

export class RepositorySpec extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://github.com/DDofDD/start-springboot-lfgy.git
   */
  cloneUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * awesome-connection
   */
  connectionName?: string;
  /**
   * @example
   * my-repo-name
   */
  displayName?: string;
  /**
   * @example
   * 312649
   */
  id?: number;
  /**
   * @example
   * my-org-name
   */
  owner?: string;
  /**
   * @example
   * github
   */
  platform?: string;
  /**
   * @example
   * https://github.com/my-org-name/my-repo-name
   */
  webUrl?: string;
  static names(): { [key: string]: string } {
    return {
      cloneUrl: 'cloneUrl',
      connectionName: 'connectionName',
      displayName: 'displayName',
      id: 'id',
      owner: 'owner',
      platform: 'platform',
      webUrl: 'webUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloneUrl: 'string',
      connectionName: 'string',
      displayName: 'string',
      id: 'number',
      owner: 'string',
      platform: 'string',
      webUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RunAfter extends $dara.Model {
  /**
   * @example
   * task-1
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ServiceBaseline extends $dara.Model {
  serviceInstance?: ServiceInstance;
  static names(): { [key: string]: string } {
    return {
      serviceInstance: 'serviceInstance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serviceInstance: ServiceInstance,
    };
  }

  validate() {
    if(this.serviceInstance && typeof (this.serviceInstance as any).validate === 'function') {
      (this.serviceInstance as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ServiceChanges extends $dara.Model {
  /**
   * @example
   * {}: 不进行修改
   */
  merge?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      merge: 'merge',
    };
  }

  static types(): { [key: string]: any } {
    return {
      merge: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.merge) {
      $dara.Model.validateMap(this.merge);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ServiceCommandStep extends $dara.Model {
  /**
   * @example
   * ./
   */
  path?: string;
  /**
   * @example
   * s invoke
   */
  run?: string;
  static names(): { [key: string]: string } {
    return {
      path: 'path',
      run: 'run',
    };
  }

  static types(): { [key: string]: any } {
    return {
      path: 'string',
      run: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ServiceComponentStep extends $dara.Model {
  /**
   * @example
   * fc3 invoke
   */
  component?: string;
  static names(): { [key: string]: string } {
    return {
      component: 'component',
    };
  }

  static types(): { [key: string]: any } {
    return {
      component: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ServiceConfig extends $dara.Model {
  artifact?: ArtifactMeta;
  build?: BuildConfig;
  /**
   * @example
   * fc3@1.0.0
   */
  component?: string;
  props?: { [key: string]: any };
  source?: SourceConfig;
  /**
   * @example
   * Function
   */
  type?: string;
  variables?: { [key: string]: Variable };
  static names(): { [key: string]: string } {
    return {
      artifact: 'artifact',
      build: 'build',
      component: 'component',
      props: 'props',
      source: 'source',
      type: 'type',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifact: ArtifactMeta,
      build: BuildConfig,
      component: 'string',
      props: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      source: SourceConfig,
      type: 'string',
      variables: { 'type': 'map', 'keyType': 'string', 'valueType': Variable },
    };
  }

  validate() {
    if(this.artifact && typeof (this.artifact as any).validate === 'function') {
      (this.artifact as any).validate();
    }
    if(this.build && typeof (this.build as any).validate === 'function') {
      (this.build as any).validate();
    }
    if(this.props) {
      $dara.Model.validateMap(this.props);
    }
    if(this.source && typeof (this.source as any).validate === 'function') {
      (this.source as any).validate();
    }
    if(this.variables) {
      $dara.Model.validateMap(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ServiceDeployment extends $dara.Model {
  /**
   * @example
   * 2021-11-19T09:34:38Z
   */
  createdTime?: string;
  /**
   * @example
   * commit by xxx.
   */
  description?: string;
  /**
   * @example
   * my-environment-deployment
   */
  environmentDeploymentName?: string;
  /**
   * @example
   * Deployment
   */
  kind?: string;
  labels?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * my-deployment
   */
  name?: string;
  status?: ServiceDeploymentStatus;
  /**
   * @example
   * 1455541096***548
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      description: 'description',
      environmentDeploymentName: 'environmentDeploymentName',
      kind: 'kind',
      labels: 'labels',
      name: 'name',
      status: 'status',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      environmentDeploymentName: 'string',
      kind: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      name: 'string',
      status: ServiceDeploymentStatus,
      uid: 'string',
    };
  }

  validate() {
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    if(this.status && typeof (this.status as any).validate === 'function') {
      (this.status as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ServiceDeploymentSpec extends $dara.Model {
  baseline?: ServiceBaseline;
  changes?: ServiceChanges;
  /**
   * @example
   * false
   */
  skipRemoveResources?: boolean;
  target?: ServiceBaseline;
  static names(): { [key: string]: string } {
    return {
      baseline: 'baseline',
      changes: 'changes',
      skipRemoveResources: 'skipRemoveResources',
      target: 'target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseline: ServiceBaseline,
      changes: ServiceChanges,
      skipRemoveResources: 'boolean',
      target: ServiceBaseline,
    };
  }

  validate() {
    if(this.baseline && typeof (this.baseline as any).validate === 'function') {
      (this.baseline as any).validate();
    }
    if(this.changes && typeof (this.changes as any).validate === 'function') {
      (this.changes as any).validate();
    }
    if(this.target && typeof (this.target as any).validate === 'function') {
      (this.target as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ServiceDeploymentStatus extends $dara.Model {
  finishedTime?: string;
  /**
   * @example
   * Running
   */
  phase?: string;
  /**
   * @example
   * my-pipeline
   */
  pipelineName?: string;
  startTime?: string;
  /**
   * @example
   * my-task
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      finishedTime: 'finishedTime',
      phase: 'phase',
      pipelineName: 'pipelineName',
      startTime: 'startTime',
      taskName: 'taskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishedTime: 'string',
      phase: 'string',
      pipelineName: 'string',
      startTime: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ServiceInstance extends $dara.Model {
  config?: ServiceConfig;
  latestDeployment?: ServiceInstanceLatestDeployment;
  /**
   * @example
   * {}
   */
  outputs?: { [key: string]: any };
  variables?: { [key: string]: Variable };
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      latestDeployment: 'latestDeployment',
      outputs: 'outputs',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: ServiceConfig,
      latestDeployment: ServiceInstanceLatestDeployment,
      outputs: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      variables: { 'type': 'map', 'keyType': 'string', 'valueType': Variable },
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    if(this.latestDeployment && typeof (this.latestDeployment as any).validate === 'function') {
      (this.latestDeployment as any).validate();
    }
    if(this.outputs) {
      $dara.Model.validateMap(this.outputs);
    }
    if(this.variables) {
      $dara.Model.validateMap(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ServiceMeta extends $dara.Model {
  /**
   * @example
   * my-service
   */
  name?: string;
  /**
   * @example
   * fc3
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ServicePluginStep extends $dara.Model {
  /**
   * @example
   * {"key":"value"}
   */
  args?: { [key: string]: any };
  /**
   * @example
   * dingding-robot
   */
  plugin?: string;
  static names(): { [key: string]: string } {
    return {
      args: 'args',
      plugin: 'plugin',
    };
  }

  static types(): { [key: string]: any } {
    return {
      args: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      plugin: 'string',
    };
  }

  validate() {
    if(this.args) {
      $dara.Model.validateMap(this.args);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SourceConfig extends $dara.Model {
  oss?: OssSourceConfig;
  repository?: RepositorySourceConfig;
  template?: TemplateSourceConfig;
  static names(): { [key: string]: string } {
    return {
      oss: 'oss',
      repository: 'repository',
      template: 'template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      oss: OssSourceConfig,
      repository: RepositorySourceConfig,
      template: TemplateSourceConfig,
    };
  }

  validate() {
    if(this.oss && typeof (this.oss as any).validate === 'function') {
      (this.oss as any).validate();
    }
    if(this.repository && typeof (this.repository as any).validate === 'function') {
      (this.repository as any).validate();
    }
    if(this.template && typeof (this.template as any).validate === 'function') {
      (this.template as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Task extends $dara.Model {
  /**
   * @example
   * 2021-11-19T09:34:38Z
   */
  createdTime?: string;
  /**
   * @example
   * Task example.
   */
  description?: string;
  /**
   * @example
   * 1
   */
  generation?: number;
  /**
   * @example
   * Task
   */
  kind?: string;
  labels?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * my-task
   */
  name?: string;
  /**
   * @example
   * 1
   */
  resourceVersion?: number;
  spec?: TaskSpec;
  status?: TaskStatus;
  /**
   * @example
   * 1455541096***548
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      description: 'description',
      generation: 'generation',
      kind: 'kind',
      labels: 'labels',
      name: 'name',
      resourceVersion: 'resourceVersion',
      spec: 'spec',
      status: 'status',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      generation: 'number',
      kind: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      name: 'string',
      resourceVersion: 'number',
      spec: TaskSpec,
      status: TaskStatus,
      uid: 'string',
    };
  }

  validate() {
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    if(this.spec && typeof (this.spec as any).validate === 'function') {
      (this.spec as any).validate();
    }
    if(this.status && typeof (this.status as any).validate === 'function') {
      (this.status as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskExec extends $dara.Model {
  context?: Context;
  /**
   * @example
   * task-1
   */
  name?: string;
  runAfters?: RunAfter[];
  /**
   * @example
   * serverless-runner
   */
  taskTemplate?: string;
  static names(): { [key: string]: string } {
    return {
      context: 'context',
      name: 'name',
      runAfters: 'runAfters',
      taskTemplate: 'taskTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: Context,
      name: 'string',
      runAfters: { 'type': 'array', 'itemType': RunAfter },
      taskTemplate: 'string',
    };
  }

  validate() {
    if(this.context && typeof (this.context as any).validate === 'function') {
      (this.context as any).validate();
    }
    if(Array.isArray(this.runAfters)) {
      $dara.Model.validateArray(this.runAfters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskExecError extends $dara.Model {
  /**
   * @example
   * AccessDenied
   */
  code?: string;
  /**
   * @example
   * 部署辅助函数权限不足，需要添加额外的权限以解决问题。https://help.aliyun.com
   */
  extraInfo?: string;
  /**
   * @example
   * 部署服务[_appcenter-xxx]失败，权限不足
   */
  message?: string;
  /**
   * @example
   * 1-26d1287xxxxx
   */
  requestId?: string;
  /**
   * @example
   * 权限不足错误
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      extraInfo: 'extraInfo',
      message: 'message',
      requestId: 'requestId',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      extraInfo: 'string',
      message: 'string',
      requestId: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskInvocation extends $dara.Model {
  /**
   * @example
   * c-nkj8shz7xxxx
   */
  instanceID?: string;
  /**
   * @example
   * E099843B-10A2-4936-9964-4E0EE263D564
   */
  invocationID?: string;
  /**
   * @example
   * acs:fc:cn-hangzhou:143xxxx:services/xxx.LATEST/functions/xxx
   */
  invocationTarget?: string;
  /**
   * @example
   * {"key1":"value1","key2":"value2"}
   */
  output?: string;
  /**
   * @example
   * 1B3058B1-F1C9-457C-B95C-2C250A4B3118
   */
  requestID?: string;
  /**
   * @example
   * my-sls-logstore
   */
  slsLogStore?: string;
  /**
   * @example
   * my-sls-project
   */
  slsProject?: string;
  /**
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceID: 'instanceID',
      invocationID: 'invocationID',
      invocationTarget: 'invocationTarget',
      output: 'output',
      requestID: 'requestID',
      slsLogStore: 'slsLogStore',
      slsProject: 'slsProject',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceID: 'string',
      invocationID: 'string',
      invocationTarget: 'string',
      output: 'string',
      requestID: 'string',
      slsLogStore: 'string',
      slsProject: 'string',
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

export class TaskSpec extends $dara.Model {
  context?: Context;
  /**
   * @example
   * my-task-template
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      context: 'context',
      templateName: 'templateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: Context,
      templateName: 'string',
    };
  }

  validate() {
    if(this.context && typeof (this.context as any).validate === 'function') {
      (this.context as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskStatus extends $dara.Model {
  executionDetails?: string[];
  invocations?: TaskInvocation[];
  latestExecError?: TaskExecError;
  /**
   * @example
   * Success
   */
  phase?: string;
  /**
   * @example
   * 123
   */
  statusGeneration?: number;
  static names(): { [key: string]: string } {
    return {
      executionDetails: 'executionDetails',
      invocations: 'invocations',
      latestExecError: 'latestExecError',
      phase: 'phase',
      statusGeneration: 'statusGeneration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      executionDetails: { 'type': 'array', 'itemType': 'string' },
      invocations: { 'type': 'array', 'itemType': TaskInvocation },
      latestExecError: TaskExecError,
      phase: 'string',
      statusGeneration: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.executionDetails)) {
      $dara.Model.validateArray(this.executionDetails);
    }
    if(Array.isArray(this.invocations)) {
      $dara.Model.validateArray(this.invocations);
    }
    if(this.latestExecError && typeof (this.latestExecError as any).validate === 'function') {
      (this.latestExecError as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskTemplate extends $dara.Model {
  /**
   * @example
   * 2021-11-19T09:34:38Z
   */
  createdTime?: string;
  /**
   * @example
   * 2021-11-19T09:34:38Z
   */
  deletionTime?: string;
  /**
   * @example
   * TaskTemplate example.
   */
  description?: string;
  /**
   * @example
   * 1
   */
  generation?: number;
  /**
   * @example
   * TaskTemplate
   */
  kind?: string;
  labels?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * my-task-template
   */
  name?: string;
  /**
   * @example
   * 1
   */
  resourceVersion?: number;
  spec?: TaskTemplateSpec;
  /**
   * @example
   * 1455541096***548
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      deletionTime: 'deletionTime',
      description: 'description',
      generation: 'generation',
      kind: 'kind',
      labels: 'labels',
      name: 'name',
      resourceVersion: 'resourceVersion',
      spec: 'spec',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      deletionTime: 'string',
      description: 'string',
      generation: 'number',
      kind: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      name: 'string',
      resourceVersion: 'number',
      spec: TaskTemplateSpec,
      uid: 'string',
    };
  }

  validate() {
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    if(this.spec && typeof (this.spec as any).validate === 'function') {
      (this.spec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskTemplateSpec extends $dara.Model {
  context?: Context;
  /**
   * @example
   * build&deploy.
   */
  description?: string;
  executeCondition?: Condition;
  worker?: TaskWorker;
  static names(): { [key: string]: string } {
    return {
      context: 'context',
      description: 'description',
      executeCondition: 'executeCondition',
      worker: 'worker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: Context,
      description: 'string',
      executeCondition: Condition,
      worker: TaskWorker,
    };
  }

  validate() {
    if(this.context && typeof (this.context as any).validate === 'function') {
      (this.context as any).validate();
    }
    if(this.executeCondition && typeof (this.executeCondition as any).validate === 'function') {
      (this.executeCondition as any).validate();
    }
    if(this.worker && typeof (this.worker as any).validate === 'function') {
      (this.worker as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskWorker extends $dara.Model {
  /**
   * @example
   * serverless-runner
   */
  presetWorker?: string;
  static names(): { [key: string]: string } {
    return {
      presetWorker: 'presetWorker',
    };
  }

  static types(): { [key: string]: any } {
    return {
      presetWorker: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Template extends $dara.Model {
  /**
   * @example
   * 2021-11-19T09:34:38Z
   */
  createdTime?: string;
  /**
   * @example
   * It is a template
   */
  description?: string;
  /**
   * @example
   * Template
   */
  kind?: string;
  labels?: { [key: string]: string };
  /**
   * @example
   * demo-template
   */
  name?: string;
  spec?: TemplateSpec;
  status?: TemplateStatus;
  /**
   * @example
   * 1455541096***548
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      description: 'description',
      kind: 'kind',
      labels: 'labels',
      name: 'name',
      spec: 'spec',
      status: 'status',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      kind: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      name: 'string',
      spec: TemplateSpec,
      status: TemplateStatus,
      uid: 'string',
    };
  }

  validate() {
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    if(this.spec && typeof (this.spec as any).validate === 'function') {
      (this.spec as any).validate();
    }
    if(this.status && typeof (this.status as any).validate === 'function') {
      (this.status as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TemplateConfig extends $dara.Model {
  /**
   * @example
   * {"region":"cn-hangzhou"}
   */
  parameters?: { [key: string]: string };
  /**
   * @example
   * {"svc1":"svc2"}
   */
  serviceNameChanges?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * start-springboot
   */
  templateName?: string;
  variableValues?: TemplateVariableValueMap;
  static names(): { [key: string]: string } {
    return {
      parameters: 'parameters',
      serviceNameChanges: 'serviceNameChanges',
      templateName: 'templateName',
      variableValues: 'variableValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      serviceNameChanges: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      templateName: 'string',
      variableValues: TemplateVariableValueMap,
    };
  }

  validate() {
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    if(this.serviceNameChanges) {
      $dara.Model.validateMap(this.serviceNameChanges);
    }
    if(this.variableValues && typeof (this.variableValues as any).validate === 'function') {
      (this.variableValues as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TemplateParameterSchema extends $dara.Model {
  /**
   * @example
   * defaultValue
   */
  default?: any;
  /**
   * @example
   * Parameters for testing
   */
  description?: string;
  enum?: string[];
  /**
   * @example
   * "^[a-zA-Z._-]+$"
   */
  pattern?: string;
  /**
   * @example
   * true
   */
  required?: boolean;
  roleExtension?: TemplateParameterSchemaRoleExtension;
  /**
   * @example
   * false
   */
  sensitive?: boolean;
  /**
   * @example
   * demo
   */
  title?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * string
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      default: 'default',
      description: 'description',
      enum: 'enum',
      pattern: 'pattern',
      required: 'required',
      roleExtension: 'roleExtension',
      sensitive: 'sensitive',
      title: 'title',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      default: 'any',
      description: 'string',
      enum: { 'type': 'array', 'itemType': 'string' },
      pattern: 'string',
      required: 'boolean',
      roleExtension: TemplateParameterSchemaRoleExtension,
      sensitive: 'boolean',
      title: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.enum)) {
      $dara.Model.validateArray(this.enum);
    }
    if(this.roleExtension && typeof (this.roleExtension as any).validate === 'function') {
      (this.roleExtension as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TemplateRevision extends $dara.Model {
  /**
   * @example
   * 2021-11-19T09:34:38Z
   */
  createdTime?: string;
  /**
   * @example
   * It is a template revision
   */
  description?: string;
  /**
   * @example
   * TemplateRevision
   */
  kind?: string;
  labels?: { [key: string]: string };
  /**
   * @example
   * demo-template
   */
  name?: string;
  spec?: TemplateSpec;
  status?: TemplateRevisionStatus;
  /**
   * @example
   * demo-template
   */
  templateName?: string;
  /**
   * @example
   * 1455541096***548
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      description: 'description',
      kind: 'kind',
      labels: 'labels',
      name: 'name',
      spec: 'spec',
      status: 'status',
      templateName: 'templateName',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      kind: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      name: 'string',
      spec: TemplateSpec,
      status: TemplateRevisionStatus,
      templateName: 'string',
      uid: 'string',
    };
  }

  validate() {
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    if(this.spec && typeof (this.spec as any).validate === 'function') {
      (this.spec as any).validate();
    }
    if(this.status && typeof (this.status as any).validate === 'function') {
      (this.status as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TemplateServiceConfig extends $dara.Model {
  artifact?: ArtifactMeta;
  build?: BuildConfig;
  /**
   * @example
   * fc3@1.0.0
   */
  component?: string;
  props?: { [key: string]: any };
  source?: SourceConfig;
  /**
   * @example
   * Function
   */
  type?: string;
  variables?: { [key: string]: TemplateParameterSchema };
  static names(): { [key: string]: string } {
    return {
      artifact: 'artifact',
      build: 'build',
      component: 'component',
      props: 'props',
      source: 'source',
      type: 'type',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifact: ArtifactMeta,
      build: BuildConfig,
      component: 'string',
      props: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      source: SourceConfig,
      type: 'string',
      variables: { 'type': 'map', 'keyType': 'string', 'valueType': TemplateParameterSchema },
    };
  }

  validate() {
    if(this.artifact && typeof (this.artifact as any).validate === 'function') {
      (this.artifact as any).validate();
    }
    if(this.build && typeof (this.build as any).validate === 'function') {
      (this.build as any).validate();
    }
    if(this.props) {
      $dara.Model.validateMap(this.props);
    }
    if(this.source && typeof (this.source as any).validate === 'function') {
      (this.source as any).validate();
    }
    if(this.variables) {
      $dara.Model.validateMap(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TemplateSourceConfig extends $dara.Model {
  /**
   * @example
   * https://api.devsapp.cn/v3/packages/start-modelscope-v3/zipball/0.1.6
   */
  downloadUrl?: string;
  /**
   * @example
   * start-springboot-cap
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      downloadUrl: 'downloadUrl',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downloadUrl: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TemplateSpec extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CAP
   */
  author?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AI
   */
  category?: string;
  /**
   * @example
   * Apache-1.0
   */
  license?: string;
  /**
   * @example
   * demo-package
   */
  packageName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  readme?: string;
  registryToken?: string;
  services?: { [key: string]: TemplateServiceConfig };
  source?: TemplateSpecSource;
  variables?: { [key: string]: TemplateParameterSchema };
  version?: string;
  static names(): { [key: string]: string } {
    return {
      author: 'author',
      category: 'category',
      license: 'license',
      packageName: 'packageName',
      readme: 'readme',
      registryToken: 'registryToken',
      services: 'services',
      source: 'source',
      variables: 'variables',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      author: 'string',
      category: 'string',
      license: 'string',
      packageName: 'string',
      readme: 'string',
      registryToken: 'string',
      services: { 'type': 'map', 'keyType': 'string', 'valueType': TemplateServiceConfig },
      source: TemplateSpecSource,
      variables: { 'type': 'map', 'keyType': 'string', 'valueType': TemplateParameterSchema },
      version: 'string',
    };
  }

  validate() {
    if(this.services) {
      $dara.Model.validateMap(this.services);
    }
    if(this.source && typeof (this.source as any).validate === 'function') {
      (this.source as any).validate();
    }
    if(this.variables) {
      $dara.Model.validateMap(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TemplateStatus extends $dara.Model {
  latestDeployment?: TemplateStatusLatestDeployment;
  /**
   * @example
   * 1.0.0
   */
  latestVersion?: string;
  /**
   * @example
   * https://registry.serverless-devs.com/details.html?name=template-test&package_type=v3
   */
  packageUrl?: string;
  /**
   * @example
   * Published
   */
  phase?: string;
  /**
   * @example
   * https://cap.console.aliyun.com/template-detail?template=adasdasdaewe-adadqwe
   */
  templateUrl?: string;
  static names(): { [key: string]: string } {
    return {
      latestDeployment: 'latestDeployment',
      latestVersion: 'latestVersion',
      packageUrl: 'packageUrl',
      phase: 'phase',
      templateUrl: 'templateUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latestDeployment: TemplateStatusLatestDeployment,
      latestVersion: 'string',
      packageUrl: 'string',
      phase: 'string',
      templateUrl: 'string',
    };
  }

  validate() {
    if(this.latestDeployment && typeof (this.latestDeployment as any).validate === 'function') {
      (this.latestDeployment as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TemplateVariableValueMap extends $dara.Model {
  services?: { [key: string]: {[key: string]: any} };
  /**
   * @example
   * {"TEST_KEY":"new_value"}
   */
  shared?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      services: 'services',
      shared: 'shared',
    };
  }

  static types(): { [key: string]: any } {
    return {
      services: { 'type': 'map', 'keyType': 'string', 'valueType': '{[key: string]: any}' },
      shared: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.services) {
      $dara.Model.validateMap(this.services);
    }
    if(this.shared) {
      $dara.Model.validateMap(this.shared);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Tool extends $dara.Model {
  method?: string;
  path?: string;
  toolId?: string;
  toolName?: string;
  static names(): { [key: string]: string } {
    return {
      method: 'method',
      path: 'path',
      toolId: 'toolId',
      toolName: 'toolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      method: 'string',
      path: 'string',
      toolId: 'string',
      toolName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Toolset extends $dara.Model {
  /**
   * @example
   * 2021-11-19T09:34:38Z
   */
  createdTime?: string;
  /**
   * @example
   * test-description
   */
  description?: string;
  /**
   * @example
   * Toolset
   */
  kind?: string;
  labels?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * my-toolset
   */
  name?: string;
  status?: ToolsetStatus;
  /**
   * @example
   * 1455541096***548
   */
  uid?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'createdTime',
      description: 'description',
      kind: 'kind',
      labels: 'labels',
      name: 'name',
      status: 'status',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      kind: 'string',
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      name: 'string',
      status: ToolsetStatus,
      uid: 'string',
    };
  }

  validate() {
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    if(this.status && typeof (this.status as any).validate === 'function') {
      (this.status as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ToolsetAuthorization extends $dara.Model {
  authConfig?: { [key: string]: string };
  /**
   * @example
   * apiKey
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      authConfig: 'authConfig',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConfig: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      type: 'string',
    };
  }

  validate() {
    if(this.authConfig) {
      $dara.Model.validateMap(this.authConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ToolsetSchema extends $dara.Model {
  detail?: string;
  /**
   * @example
   * OpenAPI
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'detail',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ToolsetSpec extends $dara.Model {
  authorization?: ToolsetAuthorization;
  schema?: ToolsetSchema;
  static names(): { [key: string]: string } {
    return {
      authorization: 'authorization',
      schema: 'schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorization: ToolsetAuthorization,
      schema: ToolsetSchema,
    };
  }

  validate() {
    if(this.authorization && typeof (this.authorization as any).validate === 'function') {
      (this.authorization as any).validate();
    }
    if(this.schema && typeof (this.schema as any).validate === 'function') {
      (this.schema as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ToolsetStatus extends $dara.Model {
  tools?: { [key: string]: Tool };
  static names(): { [key: string]: string } {
    return {
      tools: 'tools',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tools: { 'type': 'map', 'keyType': 'string', 'valueType': Tool },
    };
  }

  validate() {
    if(this.tools) {
      $dara.Model.validateMap(this.tools);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Variable extends $dara.Model {
  /**
   * @example
   * false
   */
  encrypted?: boolean;
  /**
   * @example
   * false
   */
  sensitive?: boolean;
  /**
   * @example
   * object_value
   */
  value?: any;
  static names(): { [key: string]: string } {
    return {
      encrypted: 'encrypted',
      sensitive: 'sensitive',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encrypted: 'boolean',
      sensitive: 'boolean',
      value: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WebhookCodeContext extends $dara.Model {
  /**
   * @example
   * master
   */
  branch?: string;
  /**
   * @example
   * b1dd9ba168dfef1cb3a1dd608b6054c771a93959
   */
  commitID?: string;
  /**
   * @example
   * my PR decscription
   */
  description?: string;
  /**
   * @example
   * PUSH
   */
  eventType?: string;
  /**
   * @example
   * commit message
   */
  message?: string;
  /**
   * @example
   * merged
   */
  prType?: string;
  /**
   * @example
   * https://codeup.aliyun.com/my-namespace/my-repo.git
   */
  repoUrl?: string;
  /**
   * @example
   * master
   */
  sourceBranch?: string;
  /**
   * @example
   * release-0.0.1
   */
  tag?: string;
  /**
   * @example
   * master
   */
  targetBranch?: string;
  /**
   * @example
   * # FIX
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      branch: 'branch',
      commitID: 'commitID',
      description: 'description',
      eventType: 'eventType',
      message: 'message',
      prType: 'prType',
      repoUrl: 'repoUrl',
      sourceBranch: 'sourceBranch',
      tag: 'tag',
      targetBranch: 'targetBranch',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branch: 'string',
      commitID: 'string',
      description: 'string',
      eventType: 'string',
      message: 'string',
      prType: 'string',
      repoUrl: 'string',
      sourceBranch: 'string',
      tag: 'string',
      targetBranch: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OpenStructOssSourceConfig extends $dara.Model {
  /**
   * @example
   * demo-bucket
   */
  bucket?: string;
  /**
   * @example
   * demo-object
   */
  object?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'bucket',
      object: 'object',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      object: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActivateConnectionRequest extends $dara.Model {
  account?: GitAccount;
  credential?: OAuthCredential;
  static names(): { [key: string]: string } {
    return {
      account: 'account',
      credential: 'credential',
    };
  }

  static types(): { [key: string]: any } {
    return {
      account: GitAccount,
      credential: OAuthCredential,
    };
  }

  validate() {
    if(this.account && typeof (this.account as any).validate === 'function') {
      (this.account as any).validate();
    }
    if(this.credential && typeof (this.credential as any).validate === 'function') {
      (this.credential as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ActivateConnectionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Connection;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Connection,
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

export class CancelPipelineResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Pipeline;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Pipeline,
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

export class CancelTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Task;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Task,
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

export class CreateArtifactRequest extends $dara.Model {
  body?: Artifact;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: Artifact,
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

export class CreateArtifactResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Artifact;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Artifact,
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

export class CreateEnvironmentRequest extends $dara.Model {
  body?: Environment;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: Environment,
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

export class CreateEnvironmentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Environment;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Environment,
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

export class CreatePipelineRequest extends $dara.Model {
  body?: Pipeline;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: Pipeline,
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

export class CreatePipelineResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Pipeline;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Pipeline,
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

export class CreateProjectRequest extends $dara.Model {
  body?: Project;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: Project,
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

export class CreateProjectResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Project;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Project,
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

export class CreateTaskRequest extends $dara.Model {
  body?: Task;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: Task,
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

export class CreateTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Task;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Task,
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

export class DeleteArtifactResponse extends $dara.Model {
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

export class DeleteConnectionRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      force: 'force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      force: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteConnectionResponseBody extends $dara.Model {
  /**
   * @example
   * A5152937-1C8A-5260-90FA-520CEF028D2D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DeleteConnectionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: DeleteConnectionResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteConnectionResponseBody,
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

export class DeleteEnvironmentResponse extends $dara.Model {
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

export class DeleteProjectRequest extends $dara.Model {
  /**
   * @example
   * true
   */
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      force: 'force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      force: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProjectResponse extends $dara.Model {
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

export class DeployEnvironmentRequest extends $dara.Model {
  body?: DeployEnvironmentOptions;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: DeployEnvironmentOptions,
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

export class DeployEnvironmentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnvironmentDeployment;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnvironmentDeployment,
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

export class FetchArtifactDownloadUrlResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ArtifactCode;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ArtifactCode,
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

export class FetchArtifactTempBucketTokenResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ArtifactTempBucketToken;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ArtifactTempBucketToken,
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

export class FetchConnectionCredentialResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: OAuthCredential;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: OAuthCredential,
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

export class GetArtifactResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Artifact;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Artifact,
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

export class GetEnvironmentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Environment;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Environment,
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

export class GetEnvironmentDeploymentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnvironmentDeployment;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnvironmentDeployment,
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

export class GetPipelineResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Pipeline;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Pipeline,
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

export class GetProjectResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Project;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Project,
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

export class GetRepositoryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Repository;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Repository,
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

export class GetServiceDeploymentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ServiceDeployment;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ServiceDeployment,
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

export class GetTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Task;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Task,
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

export class ListConnectionsRequest extends $dara.Model {
  /**
   * @example
   * auto-
   */
  keyword?: string;
  labelSelector?: string[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      labelSelector: 'labelSelector',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      labelSelector: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.labelSelector)) {
      $dara.Model.validateArray(this.labelSelector);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectionsShrinkRequest extends $dara.Model {
  /**
   * @example
   * auto-
   */
  keyword?: string;
  labelSelectorShrink?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      labelSelectorShrink: 'labelSelector',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      labelSelectorShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectionsResponseBody extends $dara.Model {
  data?: Connection[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': Connection },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListConnectionsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListConnectionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListConnectionsResponseBody,
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

export class ListEnvironmentsRequest extends $dara.Model {
  /**
   * @example
   * dev
   */
  keyword?: string;
  labelSelector?: string[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      labelSelector: 'labelSelector',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      labelSelector: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.labelSelector)) {
      $dara.Model.validateArray(this.labelSelector);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentsShrinkRequest extends $dara.Model {
  /**
   * @example
   * dev
   */
  keyword?: string;
  labelSelectorShrink?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      labelSelectorShrink: 'labelSelector',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      labelSelectorShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentsResponseBody extends $dara.Model {
  data?: Environment[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': Environment },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListEnvironmentsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListEnvironmentsResponseBody,
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

export class ListPipelinesRequest extends $dara.Model {
  labelSelector?: string[];
  static names(): { [key: string]: string } {
    return {
      labelSelector: 'labelSelector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelSelector: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.labelSelector)) {
      $dara.Model.validateArray(this.labelSelector);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelinesShrinkRequest extends $dara.Model {
  labelSelectorShrink?: string;
  static names(): { [key: string]: string } {
    return {
      labelSelectorShrink: 'labelSelector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelSelectorShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelinesResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Pipeline[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: { 'type': 'array', 'itemType': Pipeline },
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(Array.isArray(this.body)) {
      $dara.Model.validateArray(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsRequest extends $dara.Model {
  /**
   * @example
   * spring-boot
   */
  keyword?: string;
  labelSelector?: string[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      labelSelector: 'labelSelector',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      labelSelector: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.labelSelector)) {
      $dara.Model.validateArray(this.labelSelector);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsShrinkRequest extends $dara.Model {
  /**
   * @example
   * spring-boot
   */
  keyword?: string;
  labelSelectorShrink?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      labelSelectorShrink: 'labelSelector',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      labelSelectorShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBody extends $dara.Model {
  data?: Project[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': Project },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListProjectsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListProjectsResponseBody,
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

export class ListServiceDeploymentsRequest extends $dara.Model {
  /**
   * @example
   * demo
   */
  keyword?: string;
  labelSelector?: string[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      labelSelector: 'labelSelector',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      labelSelector: { 'type': 'array', 'itemType': 'string' },
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.labelSelector)) {
      $dara.Model.validateArray(this.labelSelector);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceDeploymentsShrinkRequest extends $dara.Model {
  /**
   * @example
   * demo
   */
  keyword?: string;
  labelSelectorShrink?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      labelSelectorShrink: 'labelSelector',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      labelSelectorShrink: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceDeploymentsResponseBody extends $dara.Model {
  data?: ServiceDeployment[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 50
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ServiceDeployment },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListServiceDeploymentsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListServiceDeploymentsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListServiceDeploymentsResponseBody,
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

export class ListTasksRequest extends $dara.Model {
  labelSelector?: string[];
  static names(): { [key: string]: string } {
    return {
      labelSelector: 'labelSelector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelSelector: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.labelSelector)) {
      $dara.Model.validateArray(this.labelSelector);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksShrinkRequest extends $dara.Model {
  labelSelectorShrink?: string;
  static names(): { [key: string]: string } {
    return {
      labelSelectorShrink: 'labelSelector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelSelectorShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Task[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: { 'type': 'array', 'itemType': Task },
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(Array.isArray(this.body)) {
      $dara.Model.validateArray(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PreviewEnvironmentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: EnvironmentDeploymentSpec;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: EnvironmentDeploymentSpec,
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

export class PutArtifactRequest extends $dara.Model {
  body?: Artifact;
  /**
   * @example
   * false
   */
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      force: 'force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: Artifact,
      force: 'boolean',
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

export class PutArtifactResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Artifact;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Artifact,
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

export class PutPipelineStatusRequest extends $dara.Model {
  body?: Pipeline;
  /**
   * @example
   * false
   */
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      force: 'force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: Pipeline,
      force: 'boolean',
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

export class PutPipelineStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Pipeline;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Pipeline,
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

export class PutTaskStatusRequest extends $dara.Model {
  body?: Task;
  /**
   * @example
   * false
   */
  force?: boolean;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      force: 'force',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: Task,
      force: 'boolean',
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

export class PutTaskStatusResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Task;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Task,
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

export class RenderServicesByTemplateRequest extends $dara.Model {
  /**
   * @example
   * {"region":"cn-hangzhou"}
   */
  parameters?: { [key: string]: any };
  /**
   * @example
   * my-project
   */
  projectName?: string;
  /**
   * @example
   * {"svc1":"svc2"}
   */
  serviceNameChanges?: { [key: string]: string };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * start-springboot
   */
  templateName?: string;
  variableValues?: TemplateVariableValueMap;
  static names(): { [key: string]: string } {
    return {
      parameters: 'parameters',
      projectName: 'projectName',
      serviceNameChanges: 'serviceNameChanges',
      templateName: 'templateName',
      variableValues: 'variableValues',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameters: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      projectName: 'string',
      serviceNameChanges: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      templateName: 'string',
      variableValues: TemplateVariableValueMap,
    };
  }

  validate() {
    if(this.parameters) {
      $dara.Model.validateMap(this.parameters);
    }
    if(this.serviceNameChanges) {
      $dara.Model.validateMap(this.serviceNameChanges);
    }
    if(this.variableValues && typeof (this.variableValues as any).validate === 'function') {
      (this.variableValues as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderServicesByTemplateResponseBody extends $dara.Model {
  changedServiceNames?: { [key: string]: string };
  services?: { [key: string]: ServiceConfig };
  variables?: { [key: string]: Variable };
  static names(): { [key: string]: string } {
    return {
      changedServiceNames: 'changedServiceNames',
      services: 'services',
      variables: 'variables',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changedServiceNames: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      services: { 'type': 'map', 'keyType': 'string', 'valueType': ServiceConfig },
      variables: { 'type': 'map', 'keyType': 'string', 'valueType': Variable },
    };
  }

  validate() {
    if(this.changedServiceNames) {
      $dara.Model.validateMap(this.changedServiceNames);
    }
    if(this.services) {
      $dara.Model.validateMap(this.services);
    }
    if(this.variables) {
      $dara.Model.validateMap(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RenderServicesByTemplateResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: RenderServicesByTemplateResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RenderServicesByTemplateResponseBody,
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

export class ResumeTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Task;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Task,
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

export class RetryTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Task;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Task,
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

export class StartPipelineResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Pipeline;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Pipeline,
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

export class StartTaskResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Task;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Task,
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

export class UpdateEnvironmentRequest extends $dara.Model {
  body?: Environment;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: Environment,
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

export class UpdateEnvironmentResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Environment;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Environment,
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

export class UpdateProjectRequest extends $dara.Model {
  body?: Project;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: Project,
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

export class UpdateProjectResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Project;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: Project,
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
    this._endpoint = this.getEndpoint("devs", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
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
   * 激活身份绑定,完成OAuth授权
   * 
   * @param request - ActivateConnectionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ActivateConnectionResponse
   */
  async activateConnectionWithOptions(name: string, request: ActivateConnectionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ActivateConnectionResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.account)) {
      body["account"] = request.account;
    }

    if (!$dara.isNull(request.credential)) {
      body["credential"] = request.credential;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "ActivateConnection",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/connections/${$dara.URL.percentEncode(name)}/activate`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ActivateConnectionResponse>(await this.callApi(params, req, runtime), new ActivateConnectionResponse({}));
    } else {
      return $dara.cast<ActivateConnectionResponse>(await this.execute(params, req, runtime), new ActivateConnectionResponse({}));
    }

  }

  /**
   * 激活身份绑定,完成OAuth授权
   * 
   * @param request - ActivateConnectionRequest
   * @returns ActivateConnectionResponse
   */
  async activateConnection(name: string, request: ActivateConnectionRequest): Promise<ActivateConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.activateConnectionWithOptions(name, request, headers, runtime);
  }

  /**
   * 取消流水线
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelPipelineResponse
   */
  async cancelPipelineWithOptions(name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CancelPipelineResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelPipeline",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/pipelines/${$dara.URL.percentEncode(name)}/cancel`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CancelPipelineResponse>(await this.callApi(params, req, runtime), new CancelPipelineResponse({}));
    } else {
      return $dara.cast<CancelPipelineResponse>(await this.execute(params, req, runtime), new CancelPipelineResponse({}));
    }

  }

  /**
   * 取消流水线
   * @returns CancelPipelineResponse
   */
  async cancelPipeline(name: string): Promise<CancelPipelineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelPipelineWithOptions(name, headers, runtime);
  }

  /**
   * 取消任务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CancelTaskResponse
   */
  async cancelTaskWithOptions(name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CancelTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "CancelTask",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/tasks/${$dara.URL.percentEncode(name)}/cancel`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CancelTaskResponse>(await this.callApi(params, req, runtime), new CancelTaskResponse({}));
    } else {
      return $dara.cast<CancelTaskResponse>(await this.execute(params, req, runtime), new CancelTaskResponse({}));
    }

  }

  /**
   * 取消任务
   * @returns CancelTaskResponse
   */
  async cancelTask(name: string): Promise<CancelTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.cancelTaskWithOptions(name, headers, runtime);
  }

  /**
   * 创建交付物存储
   * 
   * @param request - CreateArtifactRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateArtifactResponse
   */
  async createArtifactWithOptions(request: CreateArtifactRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateArtifactResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateArtifact",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/artifacts`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateArtifactResponse>(await this.callApi(params, req, runtime), new CreateArtifactResponse({}));
    } else {
      return $dara.cast<CreateArtifactResponse>(await this.execute(params, req, runtime), new CreateArtifactResponse({}));
    }

  }

  /**
   * 创建交付物存储
   * 
   * @param request - CreateArtifactRequest
   * @returns CreateArtifactResponse
   */
  async createArtifact(request: CreateArtifactRequest): Promise<CreateArtifactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createArtifactWithOptions(request, headers, runtime);
  }

  /**
   * 创建环境
   * 
   * @param request - CreateEnvironmentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateEnvironmentResponse
   */
  async createEnvironmentWithOptions(projectName: string, request: CreateEnvironmentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateEnvironmentResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateEnvironment",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/projects/${$dara.URL.percentEncode(projectName)}/environments`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateEnvironmentResponse>(await this.callApi(params, req, runtime), new CreateEnvironmentResponse({}));
    } else {
      return $dara.cast<CreateEnvironmentResponse>(await this.execute(params, req, runtime), new CreateEnvironmentResponse({}));
    }

  }

  /**
   * 创建环境
   * 
   * @param request - CreateEnvironmentRequest
   * @returns CreateEnvironmentResponse
   */
  async createEnvironment(projectName: string, request: CreateEnvironmentRequest): Promise<CreateEnvironmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createEnvironmentWithOptions(projectName, request, headers, runtime);
  }

  /**
   * 创建流水线
   * 
   * @param request - CreatePipelineRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreatePipelineResponse
   */
  async createPipelineWithOptions(request: CreatePipelineRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreatePipelineResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreatePipeline",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/pipelines`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreatePipelineResponse>(await this.callApi(params, req, runtime), new CreatePipelineResponse({}));
    } else {
      return $dara.cast<CreatePipelineResponse>(await this.execute(params, req, runtime), new CreatePipelineResponse({}));
    }

  }

  /**
   * 创建流水线
   * 
   * @param request - CreatePipelineRequest
   * @returns CreatePipelineResponse
   */
  async createPipeline(request: CreatePipelineRequest): Promise<CreatePipelineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createPipelineWithOptions(request, headers, runtime);
  }

  /**
   * 创建项目
   * 
   * @param request - CreateProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateProjectResponse
   */
  async createProjectWithOptions(request: CreateProjectRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateProjectResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateProject",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/projects`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateProjectResponse>(await this.callApi(params, req, runtime), new CreateProjectResponse({}));
    } else {
      return $dara.cast<CreateProjectResponse>(await this.execute(params, req, runtime), new CreateProjectResponse({}));
    }

  }

  /**
   * 创建项目
   * 
   * @param request - CreateProjectRequest
   * @returns CreateProjectResponse
   */
  async createProject(request: CreateProjectRequest): Promise<CreateProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createProjectWithOptions(request, headers, runtime);
  }

  /**
   * 创建任务
   * 
   * @param request - CreateTaskRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns CreateTaskResponse
   */
  async createTaskWithOptions(request: CreateTaskRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<CreateTaskResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "CreateTask",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/tasks`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<CreateTaskResponse>(await this.callApi(params, req, runtime), new CreateTaskResponse({}));
    } else {
      return $dara.cast<CreateTaskResponse>(await this.execute(params, req, runtime), new CreateTaskResponse({}));
    }

  }

  /**
   * 创建任务
   * 
   * @param request - CreateTaskRequest
   * @returns CreateTaskResponse
   */
  async createTask(request: CreateTaskRequest): Promise<CreateTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.createTaskWithOptions(request, headers, runtime);
  }

  /**
   * 删除交付物
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteArtifactResponse
   */
  async deleteArtifactWithOptions(name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteArtifactResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteArtifact",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/artifacts/${$dara.URL.percentEncode(name)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteArtifactResponse>(await this.callApi(params, req, runtime), new DeleteArtifactResponse({}));
    } else {
      return $dara.cast<DeleteArtifactResponse>(await this.execute(params, req, runtime), new DeleteArtifactResponse({}));
    }

  }

  /**
   * 删除交付物
   * @returns DeleteArtifactResponse
   */
  async deleteArtifact(name: string): Promise<DeleteArtifactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteArtifactWithOptions(name, headers, runtime);
  }

  /**
   * 删除身份绑定
   * 
   * @param request - DeleteConnectionRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteConnectionResponse
   */
  async deleteConnectionWithOptions(name: string, request: DeleteConnectionRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteConnectionResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.force)) {
      query["force"] = request.force;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteConnection",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/connections/${$dara.URL.percentEncode(name)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteConnectionResponse>(await this.callApi(params, req, runtime), new DeleteConnectionResponse({}));
    } else {
      return $dara.cast<DeleteConnectionResponse>(await this.execute(params, req, runtime), new DeleteConnectionResponse({}));
    }

  }

  /**
   * 删除身份绑定
   * 
   * @param request - DeleteConnectionRequest
   * @returns DeleteConnectionResponse
   */
  async deleteConnection(name: string, request: DeleteConnectionRequest): Promise<DeleteConnectionResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteConnectionWithOptions(name, request, headers, runtime);
  }

  /**
   * 删除环境
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteEnvironmentResponse
   */
  async deleteEnvironmentWithOptions(projectName: string, name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteEnvironmentResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteEnvironment",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/projects/${$dara.URL.percentEncode(projectName)}/environments/${$dara.URL.percentEncode(name)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteEnvironmentResponse>(await this.callApi(params, req, runtime), new DeleteEnvironmentResponse({}));
    } else {
      return $dara.cast<DeleteEnvironmentResponse>(await this.execute(params, req, runtime), new DeleteEnvironmentResponse({}));
    }

  }

  /**
   * 删除环境
   * @returns DeleteEnvironmentResponse
   */
  async deleteEnvironment(projectName: string, name: string): Promise<DeleteEnvironmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteEnvironmentWithOptions(projectName, name, headers, runtime);
  }

  /**
   * 删除项目
   * 
   * @param request - DeleteProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeleteProjectResponse
   */
  async deleteProjectWithOptions(name: string, request: DeleteProjectRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeleteProjectResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.force)) {
      query["force"] = request.force;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeleteProject",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/projects/${$dara.URL.percentEncode(name)}`,
      method: "DELETE",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "none",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeleteProjectResponse>(await this.callApi(params, req, runtime), new DeleteProjectResponse({}));
    } else {
      return $dara.cast<DeleteProjectResponse>(await this.execute(params, req, runtime), new DeleteProjectResponse({}));
    }

  }

  /**
   * 删除项目
   * 
   * @param request - DeleteProjectRequest
   * @returns DeleteProjectResponse
   */
  async deleteProject(name: string, request: DeleteProjectRequest): Promise<DeleteProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deleteProjectWithOptions(name, request, headers, runtime);
  }

  /**
   * 手动触发环境部署
   * 
   * @param request - DeployEnvironmentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns DeployEnvironmentResponse
   */
  async deployEnvironmentWithOptions(projectName: string, name: string, request: DeployEnvironmentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<DeployEnvironmentResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "DeployEnvironment",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/projects/${$dara.URL.percentEncode(projectName)}/environments/${$dara.URL.percentEncode(name)}/deploy`,
      method: "PATCH",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<DeployEnvironmentResponse>(await this.callApi(params, req, runtime), new DeployEnvironmentResponse({}));
    } else {
      return $dara.cast<DeployEnvironmentResponse>(await this.execute(params, req, runtime), new DeployEnvironmentResponse({}));
    }

  }

  /**
   * 手动触发环境部署
   * 
   * @param request - DeployEnvironmentRequest
   * @returns DeployEnvironmentResponse
   */
  async deployEnvironment(projectName: string, name: string, request: DeployEnvironmentRequest): Promise<DeployEnvironmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.deployEnvironmentWithOptions(projectName, name, request, headers, runtime);
  }

  /**
   * 获取交付物的zip包临时下载地址url
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FetchArtifactDownloadUrlResponse
   */
  async fetchArtifactDownloadUrlWithOptions(name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<FetchArtifactDownloadUrlResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "FetchArtifactDownloadUrl",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/artifacts/${$dara.URL.percentEncode(name)}/fetchCode`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<FetchArtifactDownloadUrlResponse>(await this.callApi(params, req, runtime), new FetchArtifactDownloadUrlResponse({}));
    } else {
      return $dara.cast<FetchArtifactDownloadUrlResponse>(await this.execute(params, req, runtime), new FetchArtifactDownloadUrlResponse({}));
    }

  }

  /**
   * 获取交付物的zip包临时下载地址url
   * @returns FetchArtifactDownloadUrlResponse
   */
  async fetchArtifactDownloadUrl(name: string): Promise<FetchArtifactDownloadUrlResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.fetchArtifactDownloadUrlWithOptions(name, headers, runtime);
  }

  /**
   * 获取交付物临时上传的bucket、object和临时sts
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FetchArtifactTempBucketTokenResponse
   */
  async fetchArtifactTempBucketTokenWithOptions(headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<FetchArtifactTempBucketTokenResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "FetchArtifactTempBucketToken",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/artifacts/action/fetchTempBucketToken`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<FetchArtifactTempBucketTokenResponse>(await this.callApi(params, req, runtime), new FetchArtifactTempBucketTokenResponse({}));
    } else {
      return $dara.cast<FetchArtifactTempBucketTokenResponse>(await this.execute(params, req, runtime), new FetchArtifactTempBucketTokenResponse({}));
    }

  }

  /**
   * 获取交付物临时上传的bucket、object和临时sts
   * @returns FetchArtifactTempBucketTokenResponse
   */
  async fetchArtifactTempBucketToken(): Promise<FetchArtifactTempBucketTokenResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.fetchArtifactTempBucketTokenWithOptions(headers, runtime);
  }

  /**
   * 查询身份绑定中的凭证信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns FetchConnectionCredentialResponse
   */
  async fetchConnectionCredentialWithOptions(name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<FetchConnectionCredentialResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "FetchConnectionCredential",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/connections/${$dara.URL.percentEncode(name)}/fetchCredential`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<FetchConnectionCredentialResponse>(await this.callApi(params, req, runtime), new FetchConnectionCredentialResponse({}));
    } else {
      return $dara.cast<FetchConnectionCredentialResponse>(await this.execute(params, req, runtime), new FetchConnectionCredentialResponse({}));
    }

  }

  /**
   * 查询身份绑定中的凭证信息
   * @returns FetchConnectionCredentialResponse
   */
  async fetchConnectionCredential(name: string): Promise<FetchConnectionCredentialResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.fetchConnectionCredentialWithOptions(name, headers, runtime);
  }

  /**
   * 查询交付物
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetArtifactResponse
   */
  async getArtifactWithOptions(name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetArtifactResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetArtifact",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/artifacts/${$dara.URL.percentEncode(name)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetArtifactResponse>(await this.callApi(params, req, runtime), new GetArtifactResponse({}));
    } else {
      return $dara.cast<GetArtifactResponse>(await this.execute(params, req, runtime), new GetArtifactResponse({}));
    }

  }

  /**
   * 查询交付物
   * @returns GetArtifactResponse
   */
  async getArtifact(name: string): Promise<GetArtifactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getArtifactWithOptions(name, headers, runtime);
  }

  /**
   * 获取环境信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEnvironmentResponse
   */
  async getEnvironmentWithOptions(projectName: string, name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetEnvironmentResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEnvironment",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/projects/${$dara.URL.percentEncode(projectName)}/environments/${$dara.URL.percentEncode(name)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetEnvironmentResponse>(await this.callApi(params, req, runtime), new GetEnvironmentResponse({}));
    } else {
      return $dara.cast<GetEnvironmentResponse>(await this.execute(params, req, runtime), new GetEnvironmentResponse({}));
    }

  }

  /**
   * 获取环境信息
   * @returns GetEnvironmentResponse
   */
  async getEnvironment(projectName: string, name: string): Promise<GetEnvironmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEnvironmentWithOptions(projectName, name, headers, runtime);
  }

  /**
   * 查询环境部署信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetEnvironmentDeploymentResponse
   */
  async getEnvironmentDeploymentWithOptions(name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetEnvironmentDeploymentResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetEnvironmentDeployment",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/environmentdeployments/${$dara.URL.percentEncode(name)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetEnvironmentDeploymentResponse>(await this.callApi(params, req, runtime), new GetEnvironmentDeploymentResponse({}));
    } else {
      return $dara.cast<GetEnvironmentDeploymentResponse>(await this.execute(params, req, runtime), new GetEnvironmentDeploymentResponse({}));
    }

  }

  /**
   * 查询环境部署信息
   * @returns GetEnvironmentDeploymentResponse
   */
  async getEnvironmentDeployment(name: string): Promise<GetEnvironmentDeploymentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getEnvironmentDeploymentWithOptions(name, headers, runtime);
  }

  /**
   * 查询流水线
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetPipelineResponse
   */
  async getPipelineWithOptions(name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetPipelineResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetPipeline",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/pipelines/${$dara.URL.percentEncode(name)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetPipelineResponse>(await this.callApi(params, req, runtime), new GetPipelineResponse({}));
    } else {
      return $dara.cast<GetPipelineResponse>(await this.execute(params, req, runtime), new GetPipelineResponse({}));
    }

  }

  /**
   * 查询流水线
   * @returns GetPipelineResponse
   */
  async getPipeline(name: string): Promise<GetPipelineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getPipelineWithOptions(name, headers, runtime);
  }

  /**
   * 查询项目
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetProjectResponse
   */
  async getProjectWithOptions(name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetProjectResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetProject",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/projects/${$dara.URL.percentEncode(name)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetProjectResponse>(await this.callApi(params, req, runtime), new GetProjectResponse({}));
    } else {
      return $dara.cast<GetProjectResponse>(await this.execute(params, req, runtime), new GetProjectResponse({}));
    }

  }

  /**
   * 查询项目
   * @returns GetProjectResponse
   */
  async getProject(name: string): Promise<GetProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getProjectWithOptions(name, headers, runtime);
  }

  /**
   * 查询仓库绑定
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetRepositoryResponse
   */
  async getRepositoryWithOptions(name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetRepositoryResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetRepository",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/repositories/${$dara.URL.percentEncode(name)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetRepositoryResponse>(await this.callApi(params, req, runtime), new GetRepositoryResponse({}));
    } else {
      return $dara.cast<GetRepositoryResponse>(await this.execute(params, req, runtime), new GetRepositoryResponse({}));
    }

  }

  /**
   * 查询仓库绑定
   * @returns GetRepositoryResponse
   */
  async getRepository(name: string): Promise<GetRepositoryResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getRepositoryWithOptions(name, headers, runtime);
  }

  /**
   * 查询服务部署信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetServiceDeploymentResponse
   */
  async getServiceDeploymentWithOptions(name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetServiceDeploymentResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetServiceDeployment",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/servicedeployments/${$dara.URL.percentEncode(name)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetServiceDeploymentResponse>(await this.callApi(params, req, runtime), new GetServiceDeploymentResponse({}));
    } else {
      return $dara.cast<GetServiceDeploymentResponse>(await this.execute(params, req, runtime), new GetServiceDeploymentResponse({}));
    }

  }

  /**
   * 查询服务部署信息
   * @returns GetServiceDeploymentResponse
   */
  async getServiceDeployment(name: string): Promise<GetServiceDeploymentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getServiceDeploymentWithOptions(name, headers, runtime);
  }

  /**
   * 查询任务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns GetTaskResponse
   */
  async getTaskWithOptions(name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<GetTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "GetTask",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/tasks/${$dara.URL.percentEncode(name)}`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<GetTaskResponse>(await this.callApi(params, req, runtime), new GetTaskResponse({}));
    } else {
      return $dara.cast<GetTaskResponse>(await this.execute(params, req, runtime), new GetTaskResponse({}));
    }

  }

  /**
   * 查询任务
   * @returns GetTaskResponse
   */
  async getTask(name: string): Promise<GetTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.getTaskWithOptions(name, headers, runtime);
  }

  /**
   * 批量查询身份绑定
   * 
   * @param tmpReq - ListConnectionsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListConnectionsResponse
   */
  async listConnectionsWithOptions(tmpReq: ListConnectionsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListConnectionsResponse> {
    tmpReq.validate();
    let request = new ListConnectionsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.labelSelector)) {
      request.labelSelectorShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labelSelector, "labelSelector", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.labelSelectorShrink)) {
      query["labelSelector"] = request.labelSelectorShrink;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListConnections",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/connections`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListConnectionsResponse>(await this.callApi(params, req, runtime), new ListConnectionsResponse({}));
    } else {
      return $dara.cast<ListConnectionsResponse>(await this.execute(params, req, runtime), new ListConnectionsResponse({}));
    }

  }

  /**
   * 批量查询身份绑定
   * 
   * @param request - ListConnectionsRequest
   * @returns ListConnectionsResponse
   */
  async listConnections(request: ListConnectionsRequest): Promise<ListConnectionsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listConnectionsWithOptions(request, headers, runtime);
  }

  /**
   * 查询环境列表
   * 
   * @param tmpReq - ListEnvironmentsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListEnvironmentsResponse
   */
  async listEnvironmentsWithOptions(projectName: string, tmpReq: ListEnvironmentsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListEnvironmentsResponse> {
    tmpReq.validate();
    let request = new ListEnvironmentsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.labelSelector)) {
      request.labelSelectorShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labelSelector, "labelSelector", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.labelSelectorShrink)) {
      query["labelSelector"] = request.labelSelectorShrink;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListEnvironments",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/projects/${$dara.URL.percentEncode(projectName)}/environments/`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListEnvironmentsResponse>(await this.callApi(params, req, runtime), new ListEnvironmentsResponse({}));
    } else {
      return $dara.cast<ListEnvironmentsResponse>(await this.execute(params, req, runtime), new ListEnvironmentsResponse({}));
    }

  }

  /**
   * 查询环境列表
   * 
   * @param request - ListEnvironmentsRequest
   * @returns ListEnvironmentsResponse
   */
  async listEnvironments(projectName: string, request: ListEnvironmentsRequest): Promise<ListEnvironmentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listEnvironmentsWithOptions(projectName, request, headers, runtime);
  }

  /**
   * 批量查询流水线
   * 
   * @param tmpReq - ListPipelinesRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListPipelinesResponse
   */
  async listPipelinesWithOptions(tmpReq: ListPipelinesRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListPipelinesResponse> {
    tmpReq.validate();
    let request = new ListPipelinesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.labelSelector)) {
      request.labelSelectorShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labelSelector, "labelSelector", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labelSelectorShrink)) {
      query["labelSelector"] = request.labelSelectorShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListPipelines",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/pipelines`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListPipelinesResponse>(await this.callApi(params, req, runtime), new ListPipelinesResponse({}));
    } else {
      return $dara.cast<ListPipelinesResponse>(await this.execute(params, req, runtime), new ListPipelinesResponse({}));
    }

  }

  /**
   * 批量查询流水线
   * 
   * @param request - ListPipelinesRequest
   * @returns ListPipelinesResponse
   */
  async listPipelines(request: ListPipelinesRequest): Promise<ListPipelinesResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listPipelinesWithOptions(request, headers, runtime);
  }

  /**
   * 批量查询项目
   * 
   * @param tmpReq - ListProjectsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListProjectsResponse
   */
  async listProjectsWithOptions(tmpReq: ListProjectsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListProjectsResponse> {
    tmpReq.validate();
    let request = new ListProjectsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.labelSelector)) {
      request.labelSelectorShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labelSelector, "labelSelector", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.labelSelectorShrink)) {
      query["labelSelector"] = request.labelSelectorShrink;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListProjects",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/projects`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListProjectsResponse>(await this.callApi(params, req, runtime), new ListProjectsResponse({}));
    } else {
      return $dara.cast<ListProjectsResponse>(await this.execute(params, req, runtime), new ListProjectsResponse({}));
    }

  }

  /**
   * 批量查询项目
   * 
   * @param request - ListProjectsRequest
   * @returns ListProjectsResponse
   */
  async listProjects(request: ListProjectsRequest): Promise<ListProjectsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listProjectsWithOptions(request, headers, runtime);
  }

  /**
   * 批量查询服务部署信息
   * 
   * @param tmpReq - ListServiceDeploymentsRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListServiceDeploymentsResponse
   */
  async listServiceDeploymentsWithOptions(tmpReq: ListServiceDeploymentsRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListServiceDeploymentsResponse> {
    tmpReq.validate();
    let request = new ListServiceDeploymentsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.labelSelector)) {
      request.labelSelectorShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labelSelector, "labelSelector", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.keyword)) {
      query["keyword"] = request.keyword;
    }

    if (!$dara.isNull(request.labelSelectorShrink)) {
      query["labelSelector"] = request.labelSelectorShrink;
    }

    if (!$dara.isNull(request.pageNumber)) {
      query["pageNumber"] = request.pageNumber;
    }

    if (!$dara.isNull(request.pageSize)) {
      query["pageSize"] = request.pageSize;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListServiceDeployments",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/servicedeployments`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListServiceDeploymentsResponse>(await this.callApi(params, req, runtime), new ListServiceDeploymentsResponse({}));
    } else {
      return $dara.cast<ListServiceDeploymentsResponse>(await this.execute(params, req, runtime), new ListServiceDeploymentsResponse({}));
    }

  }

  /**
   * 批量查询服务部署信息
   * 
   * @param request - ListServiceDeploymentsRequest
   * @returns ListServiceDeploymentsResponse
   */
  async listServiceDeployments(request: ListServiceDeploymentsRequest): Promise<ListServiceDeploymentsResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listServiceDeploymentsWithOptions(request, headers, runtime);
  }

  /**
   * 批量查询任务
   * 
   * @param tmpReq - ListTasksRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ListTasksResponse
   */
  async listTasksWithOptions(tmpReq: ListTasksRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ListTasksResponse> {
    tmpReq.validate();
    let request = new ListTasksShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!$dara.isNull(tmpReq.labelSelector)) {
      request.labelSelectorShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.labelSelector, "labelSelector", "simple");
    }

    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.labelSelectorShrink)) {
      query["labelSelector"] = request.labelSelectorShrink;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApiUtil.Params({
      action: "ListTasks",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/tasks`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "array",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ListTasksResponse>(await this.callApi(params, req, runtime), new ListTasksResponse({}));
    } else {
      return $dara.cast<ListTasksResponse>(await this.execute(params, req, runtime), new ListTasksResponse({}));
    }

  }

  /**
   * 批量查询任务
   * 
   * @param request - ListTasksRequest
   * @returns ListTasksResponse
   */
  async listTasks(request: ListTasksRequest): Promise<ListTasksResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.listTasksWithOptions(request, headers, runtime);
  }

  /**
   * 预览环境变更信息
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PreviewEnvironmentResponse
   */
  async previewEnvironmentWithOptions(projectName: string, name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<PreviewEnvironmentResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "PreviewEnvironment",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/projects/${$dara.URL.percentEncode(projectName)}/environments/${$dara.URL.percentEncode(name)}/preview`,
      method: "GET",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<PreviewEnvironmentResponse>(await this.callApi(params, req, runtime), new PreviewEnvironmentResponse({}));
    } else {
      return $dara.cast<PreviewEnvironmentResponse>(await this.execute(params, req, runtime), new PreviewEnvironmentResponse({}));
    }

  }

  /**
   * 预览环境变更信息
   * @returns PreviewEnvironmentResponse
   */
  async previewEnvironment(projectName: string, name: string): Promise<PreviewEnvironmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.previewEnvironmentWithOptions(projectName, name, headers, runtime);
  }

  /**
   * 更新交付物
   * 
   * @param request - PutArtifactRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutArtifactResponse
   */
  async putArtifactWithOptions(name: string, request: PutArtifactRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<PutArtifactResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.force)) {
      query["force"] = request.force;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutArtifact",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/artifacts/${$dara.URL.percentEncode(name)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<PutArtifactResponse>(await this.callApi(params, req, runtime), new PutArtifactResponse({}));
    } else {
      return $dara.cast<PutArtifactResponse>(await this.execute(params, req, runtime), new PutArtifactResponse({}));
    }

  }

  /**
   * 更新交付物
   * 
   * @param request - PutArtifactRequest
   * @returns PutArtifactResponse
   */
  async putArtifact(name: string, request: PutArtifactRequest): Promise<PutArtifactResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putArtifactWithOptions(name, request, headers, runtime);
  }

  /**
   * 更新流水线状态
   * 
   * @param request - PutPipelineStatusRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutPipelineStatusResponse
   */
  async putPipelineStatusWithOptions(name: string, request: PutPipelineStatusRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<PutPipelineStatusResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.force)) {
      query["force"] = request.force;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutPipelineStatus",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/pipelines/${$dara.URL.percentEncode(name)}/status`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<PutPipelineStatusResponse>(await this.callApi(params, req, runtime), new PutPipelineStatusResponse({}));
    } else {
      return $dara.cast<PutPipelineStatusResponse>(await this.execute(params, req, runtime), new PutPipelineStatusResponse({}));
    }

  }

  /**
   * 更新流水线状态
   * 
   * @param request - PutPipelineStatusRequest
   * @returns PutPipelineStatusResponse
   */
  async putPipelineStatus(name: string, request: PutPipelineStatusRequest): Promise<PutPipelineStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putPipelineStatusWithOptions(name, request, headers, runtime);
  }

  /**
   * 更新替换任务状态
   * 
   * @param request - PutTaskStatusRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns PutTaskStatusResponse
   */
  async putTaskStatusWithOptions(name: string, request: PutTaskStatusRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<PutTaskStatusResponse> {
    request.validate();
    let query : {[key: string ]: any} = { };
    if (!$dara.isNull(request.force)) {
      query["force"] = request.force;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "PutTaskStatus",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/tasks/${$dara.URL.percentEncode(name)}/status`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<PutTaskStatusResponse>(await this.callApi(params, req, runtime), new PutTaskStatusResponse({}));
    } else {
      return $dara.cast<PutTaskStatusResponse>(await this.execute(params, req, runtime), new PutTaskStatusResponse({}));
    }

  }

  /**
   * 更新替换任务状态
   * 
   * @param request - PutTaskStatusRequest
   * @returns PutTaskStatusResponse
   */
  async putTaskStatus(name: string, request: PutTaskStatusRequest): Promise<PutTaskStatusResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.putTaskStatusWithOptions(name, request, headers, runtime);
  }

  /**
   * 解析模板中的服务、变量配置
   * 
   * @param request - RenderServicesByTemplateRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RenderServicesByTemplateResponse
   */
  async renderServicesByTemplateWithOptions(request: RenderServicesByTemplateRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<RenderServicesByTemplateResponse> {
    request.validate();
    let body : {[key: string ]: any} = { };
    if (!$dara.isNull(request.parameters)) {
      body["parameters"] = request.parameters;
    }

    if (!$dara.isNull(request.projectName)) {
      body["projectName"] = request.projectName;
    }

    if (!$dara.isNull(request.serviceNameChanges)) {
      body["serviceNameChanges"] = request.serviceNameChanges;
    }

    if (!$dara.isNull(request.templateName)) {
      body["templateName"] = request.templateName;
    }

    if (!$dara.isNull(request.variableValues)) {
      body["variableValues"] = request.variableValues;
    }

    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApiUtil.Params({
      action: "RenderServicesByTemplate",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/templates/action/renderServices`,
      method: "POST",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RenderServicesByTemplateResponse>(await this.callApi(params, req, runtime), new RenderServicesByTemplateResponse({}));
    } else {
      return $dara.cast<RenderServicesByTemplateResponse>(await this.execute(params, req, runtime), new RenderServicesByTemplateResponse({}));
    }

  }

  /**
   * 解析模板中的服务、变量配置
   * 
   * @param request - RenderServicesByTemplateRequest
   * @returns RenderServicesByTemplateResponse
   */
  async renderServicesByTemplate(request: RenderServicesByTemplateRequest): Promise<RenderServicesByTemplateResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.renderServicesByTemplateWithOptions(request, headers, runtime);
  }

  /**
   * 确认并继续执行任务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns ResumeTaskResponse
   */
  async resumeTaskWithOptions(name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<ResumeTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "ResumeTask",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/tasks/${$dara.URL.percentEncode(name)}/resume`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<ResumeTaskResponse>(await this.callApi(params, req, runtime), new ResumeTaskResponse({}));
    } else {
      return $dara.cast<ResumeTaskResponse>(await this.execute(params, req, runtime), new ResumeTaskResponse({}));
    }

  }

  /**
   * 确认并继续执行任务
   * @returns ResumeTaskResponse
   */
  async resumeTask(name: string): Promise<ResumeTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.resumeTaskWithOptions(name, headers, runtime);
  }

  /**
   * 重试执行任务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns RetryTaskResponse
   */
  async retryTaskWithOptions(name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<RetryTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "RetryTask",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/tasks/${$dara.URL.percentEncode(name)}/retry`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<RetryTaskResponse>(await this.callApi(params, req, runtime), new RetryTaskResponse({}));
    } else {
      return $dara.cast<RetryTaskResponse>(await this.execute(params, req, runtime), new RetryTaskResponse({}));
    }

  }

  /**
   * 重试执行任务
   * @returns RetryTaskResponse
   */
  async retryTask(name: string): Promise<RetryTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.retryTaskWithOptions(name, headers, runtime);
  }

  /**
   * 开始执行流水线
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartPipelineResponse
   */
  async startPipelineWithOptions(name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<StartPipelineResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StartPipeline",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/pipelines/${$dara.URL.percentEncode(name)}/start`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StartPipelineResponse>(await this.callApi(params, req, runtime), new StartPipelineResponse({}));
    } else {
      return $dara.cast<StartPipelineResponse>(await this.execute(params, req, runtime), new StartPipelineResponse({}));
    }

  }

  /**
   * 开始执行流水线
   * @returns StartPipelineResponse
   */
  async startPipeline(name: string): Promise<StartPipelineResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startPipelineWithOptions(name, headers, runtime);
  }

  /**
   * 开始执行任务
   * 
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns StartTaskResponse
   */
  async startTaskWithOptions(name: string, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<StartTaskResponse> {
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
    });
    let params = new $OpenApiUtil.Params({
      action: "StartTask",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/tasks/${$dara.URL.percentEncode(name)}/start`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<StartTaskResponse>(await this.callApi(params, req, runtime), new StartTaskResponse({}));
    } else {
      return $dara.cast<StartTaskResponse>(await this.execute(params, req, runtime), new StartTaskResponse({}));
    }

  }

  /**
   * 开始执行任务
   * @returns StartTaskResponse
   */
  async startTask(name: string): Promise<StartTaskResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.startTaskWithOptions(name, headers, runtime);
  }

  /**
   * 更新环境（局部更新）
   * 
   * @param request - UpdateEnvironmentRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateEnvironmentResponse
   */
  async updateEnvironmentWithOptions(projectName: string, name: string, request: UpdateEnvironmentRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateEnvironmentResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateEnvironment",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/projects/${$dara.URL.percentEncode(projectName)}/environments/${$dara.URL.percentEncode(name)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateEnvironmentResponse>(await this.callApi(params, req, runtime), new UpdateEnvironmentResponse({}));
    } else {
      return $dara.cast<UpdateEnvironmentResponse>(await this.execute(params, req, runtime), new UpdateEnvironmentResponse({}));
    }

  }

  /**
   * 更新环境（局部更新）
   * 
   * @param request - UpdateEnvironmentRequest
   * @returns UpdateEnvironmentResponse
   */
  async updateEnvironment(projectName: string, name: string, request: UpdateEnvironmentRequest): Promise<UpdateEnvironmentResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateEnvironmentWithOptions(projectName, name, request, headers, runtime);
  }

  /**
   * 更新替换应用
   * 
   * @param request - UpdateProjectRequest
   * @param headers - map
   * @param runtime - runtime options for this request RuntimeOptions
   * @returns UpdateProjectResponse
   */
  async updateProjectWithOptions(name: string, request: UpdateProjectRequest, headers: {[key: string ]: string}, runtime: $dara.RuntimeOptions): Promise<UpdateProjectResponse> {
    request.validate();
    let req = new $OpenApiUtil.OpenApiRequest({
      headers: headers,
      body: OpenApiUtil.parseToMap(request.body),
    });
    let params = new $OpenApiUtil.Params({
      action: "UpdateProject",
      version: "2023-07-14",
      protocol: "HTTPS",
      pathname: `/2023-07-14/projects/${$dara.URL.percentEncode(name)}`,
      method: "PUT",
      authType: "AK",
      style: "ROA",
      reqBodyType: "json",
      bodyType: "json",
    });
    if ($dara.isNull(this._signatureVersion) || this._signatureVersion != "v4") {
      return $dara.cast<UpdateProjectResponse>(await this.callApi(params, req, runtime), new UpdateProjectResponse({}));
    } else {
      return $dara.cast<UpdateProjectResponse>(await this.execute(params, req, runtime), new UpdateProjectResponse({}));
    }

  }

  /**
   * 更新替换应用
   * 
   * @param request - UpdateProjectRequest
   * @returns UpdateProjectResponse
   */
  async updateProject(name: string, request: UpdateProjectRequest): Promise<UpdateProjectResponse> {
    let runtime = new $dara.RuntimeOptions({ });
    let headers : {[key: string ]: string} = { };
    return await this.updateProjectWithOptions(name, request, headers, runtime);
  }

}

// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SparkConf } from "./SparkConf";


export class TaskCredential extends $dara.Model {
  accessId?: string;
  accessUrl?: string;
  expire?: number;
  host?: string;
  path?: string;
  policy?: string;
  securityToken?: string;
  signature?: string;
  static names(): { [key: string]: string } {
    return {
      accessId: 'accessId',
      accessUrl: 'accessUrl',
      expire: 'expire',
      host: 'host',
      path: 'path',
      policy: 'policy',
      securityToken: 'securityToken',
      signature: 'signature',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessId: 'string',
      accessUrl: 'string',
      expire: 'number',
      host: 'string',
      path: 'string',
      policy: 'string',
      securityToken: 'string',
      signature: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskRayHeadSpec extends $dara.Model {
  cpu?: string;
  enableAutoScaling?: boolean;
  /**
   * @example
   * MY_ENV=123456
   */
  env?: string;
  gpuSpec?: string;
  idleTimeoutSeconds?: number;
  memory?: string;
  queueName?: string;
  /**
   * @example
   * --num-cpus=0
   */
  rayStartParams?: string;
  /**
   * @example
   * err-1.3.0 (Ray 2.55.1, Python 3.12)
   */
  rayVersion?: string;
  replica?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'cpu',
      enableAutoScaling: 'enableAutoScaling',
      env: 'env',
      gpuSpec: 'gpuSpec',
      idleTimeoutSeconds: 'idleTimeoutSeconds',
      memory: 'memory',
      queueName: 'queueName',
      rayStartParams: 'rayStartParams',
      rayVersion: 'rayVersion',
      replica: 'replica',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'string',
      enableAutoScaling: 'boolean',
      env: 'string',
      gpuSpec: 'string',
      idleTimeoutSeconds: 'number',
      memory: 'string',
      queueName: 'string',
      rayStartParams: 'string',
      rayVersion: 'string',
      replica: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskRayWorkerSpec extends $dara.Model {
  cpu?: string;
  /**
   * @example
   * MY_ENV=123456
   */
  env?: string;
  gpuSpec?: string;
  groupName?: string;
  maxReplica?: number;
  memory?: string;
  minReplica?: number;
  queueName?: string;
  /**
   * @example
   * --num-cpus=0
   */
  rayStartParams?: string;
  /**
   * @example
   * err-1.3.0 (Ray 2.55.1, Python 3.12)
   */
  rayVersion?: string;
  replica?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'cpu',
      env: 'env',
      gpuSpec: 'gpuSpec',
      groupName: 'groupName',
      maxReplica: 'maxReplica',
      memory: 'memory',
      minReplica: 'minReplica',
      queueName: 'queueName',
      rayStartParams: 'rayStartParams',
      rayVersion: 'rayVersion',
      replica: 'replica',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'string',
      env: 'string',
      gpuSpec: 'string',
      groupName: 'string',
      maxReplica: 'number',
      memory: 'string',
      minReplica: 'number',
      queueName: 'string',
      rayStartParams: 'string',
      rayVersion: 'string',
      replica: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Task extends $dara.Model {
  archives?: string[];
  artifactUrl?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  bizId?: string;
  categoryBizId?: string;
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  creator?: number;
  credential?: TaskCredential;
  defaultCatalogId?: string;
  defaultDatabase?: string;
  defaultResourceQueueId?: string;
  defaultSqlComputeId?: string;
  deploymentId?: string;
  environmentId?: string;
  extraArtifactIds?: string[];
  extraSparkSubmitParams?: string;
  files?: string[];
  fusion?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  gmtCreated?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  gmtModified?: string;
  hasChanged?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  hasCommited?: boolean;
  isStreaming?: boolean;
  jars?: string[];
  kernelId?: string;
  lastRunResourceQueueId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  modifier?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  params?: { [key: string]: string };
  pyFiles?: string[];
  rayActiveDeadlineSeconds?: number;
  rayBackoffLimit?: number;
  rayEntrypoint?: string;
  rayEntrypointMemory?: string;
  rayEntrypointNumCpus?: string;
  rayEntrypointNumGpus?: string;
  rayEntrypointResources?: string;
  rayExtraParam?: string;
  rayHeadSpec?: TaskRayHeadSpec;
  rayMetadataJson?: string;
  rayNetworkServiceName?: string;
  rayRuntimeEnvJson?: string;
  rayShutdownAfterJobFinishes?: boolean;
  raySubmissionMode?: string;
  rayTtlSecondsAfterFinished?: number;
  rayVersion?: string;
  rayVolumeIds?: string[];
  rayWorkerSpec?: TaskRayWorkerSpec[];
  rayWorkingDir?: string;
  sessionClusterId?: string;
  /**
   * @example
   * 100
   */
  sparkArgs?: string;
  sparkConf?: SparkConf[];
  /**
   * @remarks
   * This parameter is required.
   */
  sparkDriverCores?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  sparkDriverMemory?: number;
  sparkEntrypoint?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sparkExecutorCores?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  sparkExecutorMemory?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  sparkLogLevel?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sparkLogPath?: string;
  sparkSubmitClause?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  sparkVersion?: string;
  tags?: { [key: string]: string };
  timeout?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      archives: 'archives',
      artifactUrl: 'artifactUrl',
      bizId: 'bizId',
      categoryBizId: 'categoryBizId',
      content: 'content',
      creator: 'creator',
      credential: 'credential',
      defaultCatalogId: 'defaultCatalogId',
      defaultDatabase: 'defaultDatabase',
      defaultResourceQueueId: 'defaultResourceQueueId',
      defaultSqlComputeId: 'defaultSqlComputeId',
      deploymentId: 'deploymentId',
      environmentId: 'environmentId',
      extraArtifactIds: 'extraArtifactIds',
      extraSparkSubmitParams: 'extraSparkSubmitParams',
      files: 'files',
      fusion: 'fusion',
      gmtCreated: 'gmtCreated',
      gmtModified: 'gmtModified',
      hasChanged: 'hasChanged',
      hasCommited: 'hasCommited',
      isStreaming: 'isStreaming',
      jars: 'jars',
      kernelId: 'kernelId',
      lastRunResourceQueueId: 'lastRunResourceQueueId',
      modifier: 'modifier',
      name: 'name',
      params: 'params',
      pyFiles: 'pyFiles',
      rayActiveDeadlineSeconds: 'rayActiveDeadlineSeconds',
      rayBackoffLimit: 'rayBackoffLimit',
      rayEntrypoint: 'rayEntrypoint',
      rayEntrypointMemory: 'rayEntrypointMemory',
      rayEntrypointNumCpus: 'rayEntrypointNumCpus',
      rayEntrypointNumGpus: 'rayEntrypointNumGpus',
      rayEntrypointResources: 'rayEntrypointResources',
      rayExtraParam: 'rayExtraParam',
      rayHeadSpec: 'rayHeadSpec',
      rayMetadataJson: 'rayMetadataJson',
      rayNetworkServiceName: 'rayNetworkServiceName',
      rayRuntimeEnvJson: 'rayRuntimeEnvJson',
      rayShutdownAfterJobFinishes: 'rayShutdownAfterJobFinishes',
      raySubmissionMode: 'raySubmissionMode',
      rayTtlSecondsAfterFinished: 'rayTtlSecondsAfterFinished',
      rayVersion: 'rayVersion',
      rayVolumeIds: 'rayVolumeIds',
      rayWorkerSpec: 'rayWorkerSpec',
      rayWorkingDir: 'rayWorkingDir',
      sessionClusterId: 'sessionClusterId',
      sparkArgs: 'sparkArgs',
      sparkConf: 'sparkConf',
      sparkDriverCores: 'sparkDriverCores',
      sparkDriverMemory: 'sparkDriverMemory',
      sparkEntrypoint: 'sparkEntrypoint',
      sparkExecutorCores: 'sparkExecutorCores',
      sparkExecutorMemory: 'sparkExecutorMemory',
      sparkLogLevel: 'sparkLogLevel',
      sparkLogPath: 'sparkLogPath',
      sparkSubmitClause: 'sparkSubmitClause',
      sparkVersion: 'sparkVersion',
      tags: 'tags',
      timeout: 'timeout',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      archives: { 'type': 'array', 'itemType': 'string' },
      artifactUrl: 'string',
      bizId: 'string',
      categoryBizId: 'string',
      content: 'string',
      creator: 'number',
      credential: TaskCredential,
      defaultCatalogId: 'string',
      defaultDatabase: 'string',
      defaultResourceQueueId: 'string',
      defaultSqlComputeId: 'string',
      deploymentId: 'string',
      environmentId: 'string',
      extraArtifactIds: { 'type': 'array', 'itemType': 'string' },
      extraSparkSubmitParams: 'string',
      files: { 'type': 'array', 'itemType': 'string' },
      fusion: 'boolean',
      gmtCreated: 'string',
      gmtModified: 'string',
      hasChanged: 'boolean',
      hasCommited: 'boolean',
      isStreaming: 'boolean',
      jars: { 'type': 'array', 'itemType': 'string' },
      kernelId: 'string',
      lastRunResourceQueueId: 'string',
      modifier: 'number',
      name: 'string',
      params: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      pyFiles: { 'type': 'array', 'itemType': 'string' },
      rayActiveDeadlineSeconds: 'number',
      rayBackoffLimit: 'number',
      rayEntrypoint: 'string',
      rayEntrypointMemory: 'string',
      rayEntrypointNumCpus: 'string',
      rayEntrypointNumGpus: 'string',
      rayEntrypointResources: 'string',
      rayExtraParam: 'string',
      rayHeadSpec: TaskRayHeadSpec,
      rayMetadataJson: 'string',
      rayNetworkServiceName: 'string',
      rayRuntimeEnvJson: 'string',
      rayShutdownAfterJobFinishes: 'boolean',
      raySubmissionMode: 'string',
      rayTtlSecondsAfterFinished: 'number',
      rayVersion: 'string',
      rayVolumeIds: { 'type': 'array', 'itemType': 'string' },
      rayWorkerSpec: { 'type': 'array', 'itemType': TaskRayWorkerSpec },
      rayWorkingDir: 'string',
      sessionClusterId: 'string',
      sparkArgs: 'string',
      sparkConf: { 'type': 'array', 'itemType': SparkConf },
      sparkDriverCores: 'number',
      sparkDriverMemory: 'number',
      sparkEntrypoint: 'string',
      sparkExecutorCores: 'number',
      sparkExecutorMemory: 'number',
      sparkLogLevel: 'string',
      sparkLogPath: 'string',
      sparkSubmitClause: 'string',
      sparkVersion: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      timeout: 'number',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.archives)) {
      $dara.Model.validateArray(this.archives);
    }
    if(this.credential && typeof (this.credential as any).validate === 'function') {
      (this.credential as any).validate();
    }
    if(Array.isArray(this.extraArtifactIds)) {
      $dara.Model.validateArray(this.extraArtifactIds);
    }
    if(Array.isArray(this.files)) {
      $dara.Model.validateArray(this.files);
    }
    if(Array.isArray(this.jars)) {
      $dara.Model.validateArray(this.jars);
    }
    if(this.params) {
      $dara.Model.validateMap(this.params);
    }
    if(Array.isArray(this.pyFiles)) {
      $dara.Model.validateArray(this.pyFiles);
    }
    if(this.rayHeadSpec && typeof (this.rayHeadSpec as any).validate === 'function') {
      (this.rayHeadSpec as any).validate();
    }
    if(Array.isArray(this.rayVolumeIds)) {
      $dara.Model.validateArray(this.rayVolumeIds);
    }
    if(Array.isArray(this.rayWorkerSpec)) {
      $dara.Model.validateArray(this.rayWorkerSpec);
    }
    if(Array.isArray(this.sparkConf)) {
      $dara.Model.validateArray(this.sparkConf);
    }
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


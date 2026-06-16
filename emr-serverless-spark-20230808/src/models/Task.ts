// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SparkConf } from "./SparkConf";


export class TaskCredential extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID.
   */
  accessId?: string;
  /**
   * @remarks
   * The access URL.
   */
  accessUrl?: string;
  /**
   * @remarks
   * The expiration time.
   */
  expire?: number;
  /**
   * @remarks
   * The domain name.
   */
  host?: string;
  /**
   * @remarks
   * The path.
   */
  path?: string;
  /**
   * @remarks
   * The policy.
   */
  policy?: string;
  /**
   * @remarks
   * The security token.
   */
  securityToken?: string;
  /**
   * @remarks
   * The signature.
   */
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
  gpuSpec?: string;
  idleTimeoutSeconds?: number;
  memory?: string;
  queueName?: string;
  replica?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'cpu',
      enableAutoScaling: 'enableAutoScaling',
      gpuSpec: 'gpuSpec',
      idleTimeoutSeconds: 'idleTimeoutSeconds',
      memory: 'memory',
      queueName: 'queueName',
      replica: 'replica',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'string',
      enableAutoScaling: 'boolean',
      gpuSpec: 'string',
      idleTimeoutSeconds: 'number',
      memory: 'string',
      queueName: 'string',
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
  gpuSpec?: string;
  groupName?: string;
  maxReplica?: number;
  memory?: string;
  minReplica?: number;
  queueName?: string;
  replica?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'cpu',
      gpuSpec: 'gpuSpec',
      groupName: 'groupName',
      maxReplica: 'maxReplica',
      memory: 'memory',
      minReplica: 'minReplica',
      queueName: 'queueName',
      replica: 'replica',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'string',
      gpuSpec: 'string',
      groupName: 'string',
      maxReplica: 'number',
      memory: 'string',
      minReplica: 'number',
      queueName: 'string',
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
  /**
   * @remarks
   * The --archives parameter.
   */
  archives?: string[];
  /**
   * @remarks
   * The temporary URL to access the resource file.
   */
  artifactUrl?: string;
  /**
   * @remarks
   * The business ID.
   * 
   * This parameter is required.
   */
  bizId?: string;
  /**
   * @remarks
   * The business ID of the folder.
   */
  categoryBizId?: string;
  /**
   * @remarks
   * The content of the Spark job.
   */
  content?: string;
  /**
   * @remarks
   * The UID of the creator.
   * 
   * This parameter is required.
   */
  creator?: number;
  /**
   * @remarks
   * The information for directly uploading files to Object Storage Service (OSS).
   */
  credential?: TaskCredential;
  /**
   * @remarks
   * The default catalog ID.
   */
  defaultCatalogId?: string;
  /**
   * @remarks
   * The default database.
   */
  defaultDatabase?: string;
  /**
   * @remarks
   * The default queue ID for the task.
   */
  defaultResourceQueueId?: string;
  /**
   * @remarks
   * The default SQL session ID.
   */
  defaultSqlComputeId?: string;
  /**
   * @remarks
   * The deployment ID of the streaming task.
   */
  deploymentId?: string;
  /**
   * @remarks
   * The environment ID.
   */
  environmentId?: string;
  /**
   * @remarks
   * The IDs of extra Spark resources.
   */
  extraArtifactIds?: string[];
  /**
   * @remarks
   * The custom parameters for the spark-submit command.
   */
  extraSparkSubmitParams?: string;
  /**
   * @remarks
   * The --files parameter.
   */
  files?: string[];
  /**
   * @remarks
   * Indicates whether to enable fusion.
   */
  fusion?: boolean;
  /**
   * @remarks
   * The time when the task was created.
   * 
   * This parameter is required.
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The time when the task was last modified.
   * 
   * This parameter is required.
   */
  gmtModified?: string;
  /**
   * @remarks
   * Indicates whether the task has been changed since the last commit.
   */
  hasChanged?: boolean;
  /**
   * @remarks
   * Indicates whether the task has been committed.
   * 
   * This parameter is required.
   */
  hasCommited?: boolean;
  /**
   * @remarks
   * Indicates whether the task is a streaming task.
   */
  isStreaming?: boolean;
  /**
   * @remarks
   * The --jars parameter.
   */
  jars?: string[];
  kernelId?: string;
  /**
   * @remarks
   * The ID of the resource queue that was used for the last run.
   */
  lastRunResourceQueueId?: string;
  /**
   * @remarks
   * The UID of the user who last updated the task.
   * 
   * This parameter is required.
   */
  modifier?: number;
  /**
   * @remarks
   * The task name.
   * 
   * This parameter is required.
   */
  name?: string;
  params?: { [key: string]: string };
  /**
   * @remarks
   * The PySpark dependency pyfiles.
   */
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
   * @remarks
   * The Spark parameters.
   * 
   * @example
   * 100
   */
  sparkArgs?: string;
  /**
   * @remarks
   * The list of Spark configurations.
   */
  sparkConf?: SparkConf[];
  /**
   * @remarks
   * The number of cores for the Spark driver.
   * 
   * This parameter is required.
   */
  sparkDriverCores?: number;
  /**
   * @remarks
   * The memory of the Spark driver.
   * 
   * This parameter is required.
   */
  sparkDriverMemory?: number;
  /**
   * @remarks
   * The entrypoint of the Spark main class.
   */
  sparkEntrypoint?: string;
  /**
   * @remarks
   * The number of cores for the Spark executor.
   * 
   * This parameter is required.
   */
  sparkExecutorCores?: number;
  /**
   * @remarks
   * The memory of the Spark executor.
   * 
   * This parameter is required.
   */
  sparkExecutorMemory?: number;
  /**
   * @remarks
   * The log level for Spark.
   * 
   * This parameter is required.
   */
  sparkLogLevel?: string;
  /**
   * @remarks
   * The Spark log path.
   * 
   * This parameter is required.
   */
  sparkLogPath?: string;
  /**
   * @remarks
   * The spark-submit statement.
   */
  sparkSubmitClause?: string;
  /**
   * @remarks
   * The Spark version.
   * 
   * This parameter is required.
   */
  sparkVersion?: string;
  /**
   * @remarks
   * The task tags.
   */
  tags?: { [key: string]: string };
  /**
   * @remarks
   * The task timeout duration.
   */
  timeout?: number;
  /**
   * @remarks
   * The task type.
   * 
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


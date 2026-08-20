// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitRayJobRequestHeadSpec extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * @example
   * 2
   */
  cpu?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic worker scaling.
   * 
   * @example
   * true
   */
  enableAutoScaling?: boolean;
  /**
   * @remarks
   * The GPU instance type.
   * 
   * @example
   * ecs.gn6i-c4g1.xlarge
   */
  gpuSpec?: string;
  /**
   * @remarks
   * The worker idle timeout period after automatic scaling is enabled.
   * 
   * @example
   * 60
   */
  idleTimeoutSeconds?: number;
  /**
   * @remarks
   * The memory size. Unit: Gi.
   * 
   * @example
   * 8Gi
   */
  memory?: string;
  /**
   * @remarks
   * The queue name.
   * 
   * @example
   * root_queue
   */
  queueName?: string;
  static names(): { [key: string]: string } {
    return {
      cpu: 'cpu',
      enableAutoScaling: 'enableAutoScaling',
      gpuSpec: 'gpuSpec',
      idleTimeoutSeconds: 'idleTimeoutSeconds',
      memory: 'memory',
      queueName: 'queueName',
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitRayJobRequestTags extends $dara.Model {
  /**
   * @remarks
   * The key.
   * 
   * @example
   * jobname
   */
  key?: string;
  /**
   * @remarks
   * The value.
   * 
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
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

export class SubmitRayJobRequestWorkerSpec extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores.
   * 
   * @example
   * 4
   */
  cpu?: string;
  /**
   * @remarks
   * The GPU instance type.
   * 
   * @example
   * ecs.gn6i-c4g1.xlarge
   */
  gpuSpec?: string;
  /**
   * @remarks
   * The worker group name.
   * 
   * @example
   * WorkerGroup1
   */
  groupName?: string;
  /**
   * @remarks
   * The maximum number of workers after automatic scaling is enabled.
   * 
   * @example
   * 10
   */
  maxReplica?: number;
  /**
   * @remarks
   * The memory size. Unit: Gi.
   * 
   * @example
   * 16Gi
   */
  memory?: string;
  /**
   * @remarks
   * The minimum number of workers after automatic scaling is enabled.
   * 
   * @example
   * 1
   */
  minReplica?: number;
  /**
   * @remarks
   * The queue name.
   * 
   * @example
   * root_queue
   */
  queueName?: string;
  /**
   * @remarks
   * The number of workers.
   * 
   * @example
   * 2
   */
  replica?: number;
  /**
   * @remarks
   * The worker type.
   * 
   * @example
   * CPU
   */
  workerType?: string;
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
      workerType: 'workerType',
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
      workerType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitRayJobRequest extends $dara.Model {
  /**
   * @remarks
   * The timeout period of the job, which includes the cluster creation time and job runtime. The job is canceled if this period is exceeded.
   * 
   * @example
   * 3600
   */
  activeDeadlineSeconds?: number;
  /**
   * @remarks
   * The Ray DPI engine version number.
   * 
   * @example
   * err-1.2.0 (Ray 2.55.1, Python 3.12)
   */
  displayReleaseVersion?: string;
  /**
   * @remarks
   * The startup command.
   * 
   * @example
   * python -c "print(\\"hello ray job\\")"
   */
  entrypoint?: string;
  /**
   * @remarks
   * The memory size requested by the entrypoint task.
   * 
   * @example
   * 4Gi
   */
  entrypointMemory?: string;
  /**
   * @remarks
   * The number of CPUs requested by the entrypoint task.
   * 
   * @example
   * 1
   */
  entrypointNumCpus?: string;
  /**
   * @remarks
   * The number of GPUs requested by the entrypoint task.
   * 
   * @example
   * 0
   */
  entrypointNumGpus?: string;
  /**
   * @remarks
   * The custom resource request JSON string for the entrypoint task.
   * 
   * @example
   * {"fpu": 1}
   */
  entrypointResources?: string;
  /**
   * @remarks
   * The extra parameter JSON string.
   * 
   * @example
   * {"userDefinedFiles": "oss://mybucket/artifact/config.json,oss://mybucket/artifact/config2.json", "userRequirementsFile": "oss://mybucket/requirements.txt"}
   */
  extraParam?: string;
  /**
   * @remarks
   * The Ray cluster head node parameters.
   */
  headSpec?: SubmitRayJobRequestHeadSpec;
  /**
   * @remarks
   * The job metadata JSON string.
   * 
   * @example
   * {"resourceName": "test"}
   */
  metadataJson?: string;
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * my-job
   */
  name?: string;
  /**
   * @remarks
   * The network connectivity name.
   * 
   * @example
   * vpc
   */
  networkServiceName?: string;
  /**
   * @remarks
   * The Ray runtime environment JSON string.
   * 
   * @example
   * {"pip":["requests==2.26.0","pendulum==2.1.2"],"env_vars":{"KEY":"VALUE"}}
   */
  runtimeEnvJson?: string;
  /**
   * @remarks
   * Specifies whether to automatically destroy the temporary cluster after the job is completed. Default value: true.
   * 
   * @example
   * true
   */
  shutdownAfterJobFinishes?: boolean;
  /**
   * @remarks
   * The job submission mode.
   * 
   * @example
   * HTTPMode
   */
  submissionMode?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: SubmitRayJobRequestTags[];
  /**
   * @remarks
   * The number of seconds to wait before destroying the cluster. This parameter takes effect only when shutdownAfterJobFinishes is set to true.
   * 
   * @example
   * 60
   */
  ttlSecondsAfterFinished?: number;
  /**
   * @remarks
   * The list of mount volume IDs.
   */
  volumeIds?: string[];
  /**
   * @remarks
   * The Ray cluster worker node parameters.
   */
  workerSpec?: SubmitRayJobRequestWorkerSpec[];
  /**
   * @remarks
   * The URL of the job code working directory.
   * 
   * @example
   * oss://mybucket/rayjob.zip
   */
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      activeDeadlineSeconds: 'activeDeadlineSeconds',
      displayReleaseVersion: 'displayReleaseVersion',
      entrypoint: 'entrypoint',
      entrypointMemory: 'entrypointMemory',
      entrypointNumCpus: 'entrypointNumCpus',
      entrypointNumGpus: 'entrypointNumGpus',
      entrypointResources: 'entrypointResources',
      extraParam: 'extraParam',
      headSpec: 'headSpec',
      metadataJson: 'metadataJson',
      name: 'name',
      networkServiceName: 'networkServiceName',
      runtimeEnvJson: 'runtimeEnvJson',
      shutdownAfterJobFinishes: 'shutdownAfterJobFinishes',
      submissionMode: 'submissionMode',
      tags: 'tags',
      ttlSecondsAfterFinished: 'ttlSecondsAfterFinished',
      volumeIds: 'volumeIds',
      workerSpec: 'workerSpec',
      workingDir: 'workingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeDeadlineSeconds: 'number',
      displayReleaseVersion: 'string',
      entrypoint: 'string',
      entrypointMemory: 'string',
      entrypointNumCpus: 'string',
      entrypointNumGpus: 'string',
      entrypointResources: 'string',
      extraParam: 'string',
      headSpec: SubmitRayJobRequestHeadSpec,
      metadataJson: 'string',
      name: 'string',
      networkServiceName: 'string',
      runtimeEnvJson: 'string',
      shutdownAfterJobFinishes: 'boolean',
      submissionMode: 'string',
      tags: { 'type': 'array', 'itemType': SubmitRayJobRequestTags },
      ttlSecondsAfterFinished: 'number',
      volumeIds: { 'type': 'array', 'itemType': 'string' },
      workerSpec: { 'type': 'array', 'itemType': SubmitRayJobRequestWorkerSpec },
      workingDir: 'string',
    };
  }

  validate() {
    if(this.headSpec && typeof (this.headSpec as any).validate === 'function') {
      (this.headSpec as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.volumeIds)) {
      $dara.Model.validateArray(this.volumeIds);
    }
    if(Array.isArray(this.workerSpec)) {
      $dara.Model.validateArray(this.workerSpec);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


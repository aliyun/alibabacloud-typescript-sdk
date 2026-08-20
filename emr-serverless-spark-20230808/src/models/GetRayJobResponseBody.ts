// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Tag } from "./Tag";


export class GetRayJobResponseBodyGuHours extends $dara.Model {
  /**
   * @remarks
   * The consumed GPU hours.
   * 
   * @example
   * 2.6
   */
  gpuHours?: number;
  /**
   * @remarks
   * The GPU type.
   * 
   * @example
   * ecs.gn6i-c4g1.xlarge
   */
  gpuSpec?: string;
  static names(): { [key: string]: string } {
    return {
      gpuHours: 'gpuHours',
      gpuSpec: 'gpuSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gpuHours: 'number',
      gpuSpec: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRayJobResponseBodyHeadSpec extends $dara.Model {
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
   * Indicates whether auto scaling is enabled for worker nodes.
   * 
   * @example
   * true
   */
  enableAutoScaling?: boolean;
  /**
   * @remarks
   * The GPU type.
   * 
   * @example
   * ecs.gn6i-c4g1.xlarge
   */
  gpuSpec?: string;
  /**
   * @remarks
   * The idle timeout in seconds for worker nodes when auto scaling is enabled.
   * 
   * @example
   * 60
   */
  idleTimeoutSeconds?: number;
  /**
   * @remarks
   * The memory size, in GiB.
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
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * 1
   */
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

export class GetRayJobResponseBodyWorkerSpecs extends $dara.Model {
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
   * The GPU type.
   * 
   * @example
   * ecs.gn6i-c4g1.xlarge
   */
  gpuSpec?: string;
  /**
   * @remarks
   * The worker node group name.
   * 
   * @example
   * WorkerGroup1
   */
  groupName?: string;
  /**
   * @remarks
   * The maximum number of workers.
   * 
   * @example
   * 10
   */
  maxReplica?: number;
  /**
   * @remarks
   * The memory size, in GiB.
   * 
   * @example
   * 8Gi
   */
  memory?: string;
  /**
   * @remarks
   * The minimum number of workers.
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
   * The number of worker nodes.
   * 
   * @example
   * 1
   */
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

export class GetRayJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The timeout period.
   * 
   * @example
   * 3600
   */
  activeDeadlineSeconds?: number;
  /**
   * @remarks
   * The number of failure retries. Currently fixed at 0.
   * 
   * @example
   * 2
   */
  backoffLimit?: number;
  /**
   * @remarks
   * The status of the corresponding Ray cluster. Valid values:
   * - Deleted: Deleted.
   * - Submitted: Submitted but not yet created.
   * - Pending: Being created.
   * - Running: Running.
   * 
   * @example
   * Running
   */
  clusterState?: string;
  /**
   * @remarks
   * The nickname of the creator.
   * 
   * @example
   * Alice
   */
  creatorName?: string;
  /**
   * @remarks
   * The consumed CU resources. This value is returned 10 minutes after the cluster is released.
   * 
   * @example
   * 1899
   */
  cuHours?: number;
  /**
   * @remarks
   * The Ray cluster dashboard URL. When the Ray cluster is in Running state, this is the Runtime UI. After the cluster is deleted, this is the History UI. History UI is supported only in err-1.2.0 and later versions.
   * 
   * @example
   * https://emr-ray-gateway-cn-hangzhou.aliyuncs.com/workspace/w-xxxxxxxx/raycluster/ray-xxxxxx/dashboard?token=xxxxxx
   */
  dashboardUrl?: string;
  /**
   * @remarks
   * The extra dashboard UI URLs. Currently empty.
   */
  dashboardUrlExtra?: string[];
  /**
   * @remarks
   * The Ray DPI engine version.
   * 
   * @example
   * err-1.2.0 (Ray 2.55.1, Python 3.12)
   */
  displayReleaseVersion?: string;
  /**
   * @remarks
   * The job duration, in seconds.
   * 
   * @example
   * 2459764
   */
  duration?: number;
  /**
   * @remarks
   * The job end time. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1762949372000
   */
  endTime?: number;
  /**
   * @remarks
   * The startup command.
   * 
   * @example
   * python main.py
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
   * The extra parameters in JSON format.
   * 
   * @example
   * {"userDefinedFiles": "oss://mybucket/artifact/config.json,oss://mybucket/artifact/config2.json", "userRequirementsFile": "oss://mybucket/requirements.txt"}
   */
  extraParam?: string;
  /**
   * @remarks
   * The consumed GPU hours. Currently empty.
   */
  guHours?: GetRayJobResponseBodyGuHours;
  /**
   * @remarks
   * The Ray cluster head node parameters.
   */
  headSpec?: GetRayJobResponseBodyHeadSpec;
  /**
   * @remarks
   * The name of the bucket that stores logs.
   * 
   * @example
   * ss-ray-cn-hangzhou
   */
  logBucketName?: string;
  /**
   * @remarks
   * The path where logs are stored.
   * 
   * @example
   * w-xxxxxxx/ray/logs/xxxxxx/
   */
  logPath?: string;
  /**
   * @remarks
   * The execution message.
   * 
   * @example
   * Job finished successfully.
   */
  message?: string;
  /**
   * @remarks
   * The job metadata JSON string.
   * 
   * @example
   * {"owner": "alice"}
   */
  metadataJson?: string;
  /**
   * @remarks
   * The Ray cluster name.
   * 
   * @example
   * myRayCluster
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
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944
   */
  requestId?: string;
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
   * Specifies whether to automatically destroy the temporary cluster after the job finishes. Default value: true.
   * 
   * @example
   * true
   */
  shutdownAfterJobFinishes?: boolean;
  /**
   * @remarks
   * The start time. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1750327083303
   */
  startTime?: number;
  /**
   * @remarks
   * The job status. Valid values:
   * - Submitted: Submitted.
   * - Pending: The cluster is being created.
   * - Running: The job is running.
   * - Succeeded: The job succeeded.
   * - Failed: The job failed.
   * - Cancelling: Cancelling.
   * - Cancelled: Cancelled.
   * - Timeout: Timed out and cancelled.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The ID of the Ray Job.
   * 
   * @example
   * rj-xxxxxxxxxx
   */
  submissionId?: string;
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
   * The job submission time. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1750327082303
   */
  submitTime?: number;
  /**
   * @remarks
   * The tags.
   */
  tags?: Tag[];
  /**
   * @remarks
   * The data development task ID.
   * 
   * @example
   * TSK-682e0112f6f24d9f9305b92174846985
   */
  taskBizId?: string;
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
   * The list of managed file IDs.
   */
  volumeIds?: string[];
  /**
   * @remarks
   * The Ray cluster worker node information.
   */
  workerSpecs?: GetRayJobResponseBodyWorkerSpecs[];
  /**
   * @remarks
   * The URL of the job code working directory.
   * 
   * @example
   * oss://mybucket/hello.zip
   */
  workingDir?: string;
  static names(): { [key: string]: string } {
    return {
      activeDeadlineSeconds: 'activeDeadlineSeconds',
      backoffLimit: 'backoffLimit',
      clusterState: 'clusterState',
      creatorName: 'creatorName',
      cuHours: 'cuHours',
      dashboardUrl: 'dashboardUrl',
      dashboardUrlExtra: 'dashboardUrlExtra',
      displayReleaseVersion: 'displayReleaseVersion',
      duration: 'duration',
      endTime: 'endTime',
      entrypoint: 'entrypoint',
      entrypointMemory: 'entrypointMemory',
      entrypointNumCpus: 'entrypointNumCpus',
      entrypointNumGpus: 'entrypointNumGpus',
      entrypointResources: 'entrypointResources',
      extraParam: 'extraParam',
      guHours: 'guHours',
      headSpec: 'headSpec',
      logBucketName: 'logBucketName',
      logPath: 'logPath',
      message: 'message',
      metadataJson: 'metadataJson',
      name: 'name',
      networkServiceName: 'networkServiceName',
      requestId: 'requestId',
      runtimeEnvJson: 'runtimeEnvJson',
      shutdownAfterJobFinishes: 'shutdownAfterJobFinishes',
      startTime: 'startTime',
      status: 'status',
      submissionId: 'submissionId',
      submissionMode: 'submissionMode',
      submitTime: 'submitTime',
      tags: 'tags',
      taskBizId: 'taskBizId',
      ttlSecondsAfterFinished: 'ttlSecondsAfterFinished',
      volumeIds: 'volumeIds',
      workerSpecs: 'workerSpecs',
      workingDir: 'workingDir',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeDeadlineSeconds: 'number',
      backoffLimit: 'number',
      clusterState: 'string',
      creatorName: 'string',
      cuHours: 'number',
      dashboardUrl: 'string',
      dashboardUrlExtra: { 'type': 'array', 'itemType': 'string' },
      displayReleaseVersion: 'string',
      duration: 'number',
      endTime: 'number',
      entrypoint: 'string',
      entrypointMemory: 'string',
      entrypointNumCpus: 'string',
      entrypointNumGpus: 'string',
      entrypointResources: 'string',
      extraParam: 'string',
      guHours: GetRayJobResponseBodyGuHours,
      headSpec: GetRayJobResponseBodyHeadSpec,
      logBucketName: 'string',
      logPath: 'string',
      message: 'string',
      metadataJson: 'string',
      name: 'string',
      networkServiceName: 'string',
      requestId: 'string',
      runtimeEnvJson: 'string',
      shutdownAfterJobFinishes: 'boolean',
      startTime: 'number',
      status: 'string',
      submissionId: 'string',
      submissionMode: 'string',
      submitTime: 'number',
      tags: { 'type': 'array', 'itemType': Tag },
      taskBizId: 'string',
      ttlSecondsAfterFinished: 'number',
      volumeIds: { 'type': 'array', 'itemType': 'string' },
      workerSpecs: { 'type': 'array', 'itemType': GetRayJobResponseBodyWorkerSpecs },
      workingDir: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dashboardUrlExtra)) {
      $dara.Model.validateArray(this.dashboardUrlExtra);
    }
    if(this.guHours && typeof (this.guHours as any).validate === 'function') {
      (this.guHours as any).validate();
    }
    if(this.headSpec && typeof (this.headSpec as any).validate === 'function') {
      (this.headSpec as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.volumeIds)) {
      $dara.Model.validateArray(this.volumeIds);
    }
    if(Array.isArray(this.workerSpecs)) {
      $dara.Model.validateArray(this.workerSpecs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


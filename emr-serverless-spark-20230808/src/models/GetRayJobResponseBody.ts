// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Tag } from "./Tag";


export class GetRayJobResponseBodyGuHours extends $dara.Model {
  /**
   * @example
   * 2.6
   */
  gpuHours?: number;
  /**
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
   * @example
   * 2
   */
  cpu?: string;
  /**
   * @example
   * true
   */
  enableAutoScaling?: boolean;
  /**
   * @example
   * ecs.gn6i-c4g1.xlarge
   */
  gpuSpec?: string;
  /**
   * @example
   * 60
   */
  idleTimeoutSeconds?: number;
  /**
   * @example
   * 8Gi
   */
  memory?: string;
  /**
   * @example
   * root_queue
   */
  queueName?: string;
  /**
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
   * @example
   * 2
   */
  cpu?: string;
  /**
   * @example
   * ecs.gn6i-c4g1.xlarge
   */
  gpuSpec?: string;
  /**
   * @example
   * WorkerGroup1
   */
  groupName?: string;
  /**
   * @example
   * 10
   */
  maxReplica?: number;
  /**
   * @example
   * 8Gi
   */
  memory?: string;
  /**
   * @example
   * 1
   */
  minReplica?: number;
  /**
   * @example
   * root_queue
   */
  queueName?: string;
  /**
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
   * @example
   * 3600
   */
  activeDeadlineSeconds?: number;
  /**
   * @example
   * 2
   */
  backoffLimit?: number;
  /**
   * @example
   * Running
   */
  clusterState?: string;
  /**
   * @example
   * Alice
   */
  creatorName?: string;
  /**
   * @example
   * 1899
   */
  cuHours?: number;
  /**
   * @example
   * https://emr-ray-gateway-cn-hangzhou.aliyuncs.com/workspace/w-xxxxxxxx/raycluster/ray-xxxxxx/dashboard?token=xxxxxx
   */
  dashboardUrl?: string;
  dashboardUrlExtra?: string[];
  /**
   * @example
   * err-1.2.0 (Ray 2.55.1, Python 3.12)
   */
  displayReleaseVersion?: string;
  /**
   * @example
   * 2459764
   */
  duration?: number;
  /**
   * @example
   * 1762949372000
   */
  endTime?: number;
  /**
   * @example
   * python main.py
   */
  entrypoint?: string;
  /**
   * @example
   * 4Gi
   */
  entrypointMemory?: string;
  /**
   * @example
   * 1
   */
  entrypointNumCpus?: string;
  /**
   * @example
   * 0
   */
  entrypointNumGpus?: string;
  /**
   * @example
   * {"fpu": 1}
   */
  entrypointResources?: string;
  /**
   * @example
   * {"userDefinedFiles": "oss://mybucket/artifact/config.json,oss://mybucket/artifact/config2.json", "userRequirementsFile": "oss://mybucket/requirements.txt"}
   */
  extraParam?: string;
  guHours?: GetRayJobResponseBodyGuHours;
  headSpec?: GetRayJobResponseBodyHeadSpec;
  /**
   * @example
   * ss-ray-cn-hangzhou
   */
  logBucketName?: string;
  /**
   * @example
   * w-xxxxxxx/ray/logs/xxxxxx/
   */
  logPath?: string;
  /**
   * @example
   * Job finished successfully.
   */
  message?: string;
  /**
   * @example
   * {"owner": "alice"}
   */
  metadataJson?: string;
  /**
   * @example
   * myRayCluster
   */
  name?: string;
  /**
   * @example
   * vpc
   */
  networkServiceName?: string;
  /**
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944
   */
  requestId?: string;
  /**
   * @example
   * {"pip":["requests==2.26.0","pendulum==2.1.2"],"env_vars":{"KEY":"VALUE"}}
   */
  runtimeEnvJson?: string;
  /**
   * @example
   * true
   */
  shutdownAfterJobFinishes?: boolean;
  /**
   * @example
   * 1750327083303
   */
  startTime?: number;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * rj-xxxxxxxxxx
   */
  submissionId?: string;
  /**
   * @example
   * HTTPMode
   */
  submissionMode?: string;
  /**
   * @example
   * 1750327082303
   */
  submitTime?: number;
  tags?: Tag[];
  /**
   * @example
   * TSK-682e0112f6f24d9f9305b92174846985
   */
  taskBizId?: string;
  /**
   * @example
   * 60
   */
  ttlSecondsAfterFinished?: number;
  volumeIds?: string[];
  workerSpecs?: GetRayJobResponseBodyWorkerSpecs[];
  /**
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


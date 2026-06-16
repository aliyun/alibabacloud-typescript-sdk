// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitRayJobRequestHeadSpec extends $dara.Model {
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
   * @example
   * jobname
   */
  key?: string;
  /**
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
   * @example
   * 4
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
   * 16Gi
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
   * 2
   */
  replica?: number;
  /**
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
   * @example
   * 3600
   */
  activeDeadlineSeconds?: number;
  /**
   * @example
   * err-1.2.0 (Ray 2.55.1, Python 3.12)
   */
  displayReleaseVersion?: string;
  /**
   * @example
   * python -c "print(\\"hello ray job\\")"
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
  headSpec?: SubmitRayJobRequestHeadSpec;
  /**
   * @example
   * {"resourceName": "test"}
   */
  metadataJson?: string;
  /**
   * @example
   * my-job
   */
  name?: string;
  /**
   * @example
   * vpc
   */
  networkServiceName?: string;
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
   * HTTPMode
   */
  submissionMode?: string;
  tags?: SubmitRayJobRequestTags[];
  /**
   * @example
   * 60
   */
  ttlSecondsAfterFinished?: number;
  volumeIds?: string[];
  workerSpec?: SubmitRayJobRequestWorkerSpec[];
  /**
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


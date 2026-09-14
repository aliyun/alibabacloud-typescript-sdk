// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRayClusterRequestHeadSpecGftConfig extends $dara.Model {
  /**
   * @remarks
   * The Redis password.
   * 
   * @example
   * redispasswd
   */
  redisPassword?: string;
  /**
   * @remarks
   * The Redis URL.
   * 
   * @example
   * 10.12.3.4:6379
   */
  redisUrl?: string;
  /**
   * @remarks
   * The Redis username.
   * 
   * @example
   * default
   */
  redisUsername?: string;
  static names(): { [key: string]: string } {
    return {
      redisPassword: 'redisPassword',
      redisUrl: 'redisUrl',
      redisUsername: 'redisUsername',
    };
  }

  static types(): { [key: string]: any } {
    return {
      redisPassword: 'string',
      redisUrl: 'string',
      redisUsername: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRayClusterRequestHeadSpec extends $dara.Model {
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
   * The Ray DPI engine version.
   * 
   * @example
   * ray-1.2.0 (Ray 2.55.1, Python 3.12)
   */
  displayReleaseVersion?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic scaling for workers.
   * 
   * @example
   * false
   */
  enableAutoScaling?: boolean;
  /**
   * @remarks
   * The environment variables.
   * 
   * @example
   * MY_ENV=hello\\nMY_ENV2=hello2
   */
  env?: string;
  /**
   * @remarks
   * The GCS Fault Tolerance configuration.
   */
  gftConfig?: CreateRayClusterRequestHeadSpecGftConfig;
  /**
   * @remarks
   * Specifies whether to enable GCS Fault Tolerance.
   * 
   * **if can be null:**
   * true
   */
  gftEnabled?: boolean;
  /**
   * @remarks
   * The GPU model.
   * 
   * @example
   * ecs.gn6i-c4g1.xlarge
   */
  gpuSpec?: string;
  /**
   * @remarks
   * The idle timeout period of workers after automatic scaling is enabled.
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
  /**
   * @remarks
   * The Ray node startup parameters.
   * 
   * @example
   * --num-cpus=0 --num-gpus=0
   */
  rayStartParams?: string;
  static names(): { [key: string]: string } {
    return {
      cpu: 'cpu',
      displayReleaseVersion: 'displayReleaseVersion',
      enableAutoScaling: 'enableAutoScaling',
      env: 'env',
      gftConfig: 'gftConfig',
      gftEnabled: 'gftEnabled',
      gpuSpec: 'gpuSpec',
      idleTimeoutSeconds: 'idleTimeoutSeconds',
      memory: 'memory',
      queueName: 'queueName',
      rayStartParams: 'rayStartParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'string',
      displayReleaseVersion: 'string',
      enableAutoScaling: 'boolean',
      env: 'string',
      gftConfig: CreateRayClusterRequestHeadSpecGftConfig,
      gftEnabled: 'boolean',
      gpuSpec: 'string',
      idleTimeoutSeconds: 'number',
      memory: 'string',
      queueName: 'string',
      rayStartParams: 'string',
    };
  }

  validate() {
    if(this.gftConfig && typeof (this.gftConfig as any).validate === 'function') {
      (this.gftConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRayClusterRequestWorkerSpec extends $dara.Model {
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
   * The engine version. If this parameter is not specified, the value is the same as that of the head node.
   * 
   * @example
   * ray-1.2.0 (Ray 2.55.1, Python 3.12)
   */
  displayReleaseVersion?: string;
  /**
   * @remarks
   * The environment variables.
   * 
   * @example
   * MY_ENV=hello\\nMY_ENV2=hello2
   */
  env?: string;
  /**
   * @remarks
   * The GPU model.
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
   * The maximum number of workers after automatic scaling is enabled. Minimum value: 1.
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
   * The minimum number of workers after automatic scaling is enabled. Minimum value: 1. The value must be less than or equal to maxReplica.
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
   * The Ray node startup parameters.
   * 
   * @example
   * --num-cpus=0 --num-gpus=0
   */
  rayStartParams?: string;
  /**
   * @remarks
   * The number of workers. Minimum value: 1.
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
      displayReleaseVersion: 'displayReleaseVersion',
      env: 'env',
      gpuSpec: 'gpuSpec',
      groupName: 'groupName',
      maxReplica: 'maxReplica',
      memory: 'memory',
      minReplica: 'minReplica',
      queueName: 'queueName',
      rayStartParams: 'rayStartParams',
      replica: 'replica',
      workerType: 'workerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'string',
      displayReleaseVersion: 'string',
      env: 'string',
      gpuSpec: 'string',
      groupName: 'string',
      maxReplica: 'number',
      memory: 'string',
      minReplica: 'number',
      queueName: 'string',
      rayStartParams: 'string',
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

export class CreateRayClusterRequest extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Ray Cluster for dev.
   */
  description?: string;
  /**
   * @remarks
   * The Ray DPI engine version.
   * 
   * @example
   * ray-1.0.0 (Ray 2.47.1, Python 3.12)
   */
  displayReleaseVersion?: string;
  /**
   * @remarks
   * The extra parameters. The value must be in JSON format.
   * 
   * @example
   * {}
   */
  extraParam?: string;
  /**
   * @remarks
   * The parameters of the Ray cluster head node.
   */
  headSpec?: CreateRayClusterRequestHeadSpec;
  /**
   * @remarks
   * The name of the Ray cluster. The name must be 1 to 64 characters in length.
   * 
   * @example
   * testRayCluster
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
   * The list of managed directory IDs to mount.
   */
  volumeIds?: string[];
  /**
   * @remarks
   * The parameters of the Ray cluster worker nodes. A maximum of 50 groups are supported.
   */
  workerSpec?: CreateRayClusterRequestWorkerSpec[];
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      displayReleaseVersion: 'displayReleaseVersion',
      extraParam: 'extraParam',
      headSpec: 'headSpec',
      name: 'name',
      networkServiceName: 'networkServiceName',
      volumeIds: 'volumeIds',
      workerSpec: 'workerSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayReleaseVersion: 'string',
      extraParam: 'string',
      headSpec: CreateRayClusterRequestHeadSpec,
      name: 'string',
      networkServiceName: 'string',
      volumeIds: { 'type': 'array', 'itemType': 'string' },
      workerSpec: { 'type': 'array', 'itemType': CreateRayClusterRequestWorkerSpec },
    };
  }

  validate() {
    if(this.headSpec && typeof (this.headSpec as any).validate === 'function') {
      (this.headSpec as any).validate();
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


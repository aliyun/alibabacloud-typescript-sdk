// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRayClusterRequestHeadSpecGftConfig extends $dara.Model {
  /**
   * @remarks
   * The Redis password.
   * 
   * @example
   * 123456
   */
  redisPassword?: string;
  /**
   * @remarks
   * The Redis address.
   * 
   * @example
   * 10.4.5.6:6379
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

export class UpdateRayClusterRequestHeadSpec extends $dara.Model {
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
   * Specifies whether to enable automatic scaling.
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
   * MY_ENV=123456
   */
  env?: string;
  /**
   * @remarks
   * The GCS Fault Tolerance configuration.
   */
  gftConfig?: UpdateRayClusterRequestHeadSpecGftConfig;
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
   * The GPU instance type.
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
   * The memory size. Unit: GiB.
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
   * The Ray startup parameters.
   * 
   * @example
   * --num-cpus=0
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
      gftConfig: UpdateRayClusterRequestHeadSpecGftConfig,
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

export class UpdateRayClusterRequestWorkerSpec extends $dara.Model {
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
   * The DPI engine version.
   * 
   * @example
   * ray-1.2.0 (Ray 2.55.1, Python 3.12)
   */
  displayReleaseVersion?: string;
  /**
   * @remarks
   * The Ray environment variables.
   * 
   * @example
   * MY_ENV=123456
   */
  env?: string;
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
   * The maximum number of workers. Minimum value: 1.
   * 
   * @example
   * 10
   */
  maxReplica?: number;
  /**
   * @remarks
   * The memory size. Unit: GiB.
   * 
   * @example
   * 8Gi
   */
  memory?: string;
  /**
   * @remarks
   * The minimum number of workers. Minimum value: 1. The value must be less than or equal to maxReplica.
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
   * The Ray startup parameters.
   * 
   * @example
   * --num-cpus=0
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

export class UpdateRayClusterRequest extends $dara.Model {
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
   * The Ray cluster head node information.
   */
  headSpec?: UpdateRayClusterRequestHeadSpec;
  /**
   * @remarks
   * The Ray cluster name. The name must be 1 to 64 characters in length.
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
   * The list of managed folder IDs to mount.
   */
  volumeIds?: string[];
  /**
   * @remarks
   * The Ray cluster worker node information. A maximum of 50 groups are supported.
   */
  workerSpec?: UpdateRayClusterRequestWorkerSpec[];
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
      headSpec: UpdateRayClusterRequestHeadSpec,
      name: 'string',
      networkServiceName: 'string',
      volumeIds: { 'type': 'array', 'itemType': 'string' },
      workerSpec: { 'type': 'array', 'itemType': UpdateRayClusterRequestWorkerSpec },
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


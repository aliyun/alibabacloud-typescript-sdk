// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRayClusterResponseBodyHeadSpecGftConfig extends $dara.Model {
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
   * The Redis URL.
   * 
   * @example
   * 10.4.5.6:6789
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

export class GetRayClusterResponseBodyHeadSpec extends $dara.Model {
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
   * err-1.3.0 (Ray 2.55.1, Python 3.12)
   */
  displayReleaseVersion?: string;
  /**
   * @remarks
   * Indicates whether automatic scaling is enabled for worker nodes.
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
  gftConfig?: GetRayClusterResponseBodyHeadSpecGftConfig;
  /**
   * @remarks
   * Indicates whether GCS Fault Tolerance is enabled.
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
   * The idle timeout period of worker nodes after automatic scaling is enabled.
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
   * The Ray startup parameters.
   * 
   * @example
   * --num-cpus=0
   */
  rayStartParams?: string;
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
      replica: 'replica',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'string',
      displayReleaseVersion: 'string',
      enableAutoScaling: 'boolean',
      env: 'string',
      gftConfig: GetRayClusterResponseBodyHeadSpecGftConfig,
      gftEnabled: 'boolean',
      gpuSpec: 'string',
      idleTimeoutSeconds: 'number',
      memory: 'string',
      queueName: 'string',
      rayStartParams: 'string',
      replica: 'number',
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

export class GetRayClusterResponseBodyInstances extends $dara.Model {
  /**
   * @remarks
   * The exit code of the primary container.
   * 
   * @example
   * 137
   */
  containerExitCode?: number;
  /**
   * @remarks
   * The status of the primary container.
   * 
   * @example
   * Running
   */
  containerState?: string;
  /**
   * @remarks
   * The primary container status message.
   * 
   * @example
   * ContainerExit
   */
  containerStateMessage?: string;
  /**
   * @remarks
   * The primary container information.
   * 
   * @example
   * ok
   */
  containerStateReason?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1735870116167
   */
  createTime?: number;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * ray-uiulpgow9xljim10-head-7cgta
   */
  instanceId?: string;
  /**
   * @remarks
   * The node pod status message.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The node pod status.
   * 
   * @example
   * Running
   */
  phase?: string;
  /**
   * @remarks
   * The node information.
   * 
   * @example
   * OOMKilled
   */
  reason?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 1762946698000
   */
  startTime?: number;
  /**
   * @remarks
   * The node type.
   * 
   * @example
   * Head
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      containerExitCode: 'containerExitCode',
      containerState: 'containerState',
      containerStateMessage: 'containerStateMessage',
      containerStateReason: 'containerStateReason',
      createTime: 'createTime',
      instanceId: 'instanceId',
      message: 'message',
      phase: 'phase',
      reason: 'reason',
      startTime: 'startTime',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerExitCode: 'number',
      containerState: 'string',
      containerStateMessage: 'string',
      containerStateReason: 'string',
      createTime: 'number',
      instanceId: 'string',
      message: 'string',
      phase: 'string',
      reason: 'string',
      startTime: 'number',
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

export class GetRayClusterResponseBodyWorkerSpec extends $dara.Model {
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
   * The database engine version.
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
   * MY_ENV=12456
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
   * The name of the worker node group.
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
   * The memory size. Unit: Gi.
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
   * The Ray startup parameters.
   * 
   * @example
   * --num-cpus=0
   */
  rayStartParams?: string;
  /**
   * @remarks
   * The number of worker nodes.
   * 
   * @example
   * 2
   */
  replica?: number;
  /**
   * @remarks
   * The type of the worker node group.
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

export class GetRayClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The Ray cluster ID.
   * 
   * @example
   * ray-k7nm8ahl5te4tg91
   */
  clusterId?: string;
  /**
   * @remarks
   * The creation time. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1750327083303
   */
  createTime?: number;
  /**
   * @remarks
   * The UID of the user who created the cluster.
   * 
   * @example
   * 202077646755523991
   */
  creator?: string;
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
   * The URL of the Ray cluster dashboard.
   * 
   * @example
   * https://emr-ray-gateway-cn-hangzhou.aliyuncs.com/workspace/w-xxxxxxxx/raycluster/ray-xxxxxx/dashboard?token=xxxxxx
   */
  dashboardUrl?: string;
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
   * The extra parameters in JSON format.
   * 
   * @example
   * {}
   */
  extraParam?: string;
  /**
   * @remarks
   * The gRPC endpoint (internal network). The domain name in this endpoint can also be used to submit Ray jobs.
   * 
   * @example
   * ray://emr-spark-ray-gateway-cn-hangzhou-internal.emr.aliyuncs.com:80
   */
  grpcEndpoint?: string;
  /**
   * @remarks
   * The parameters of the Ray cluster head node.
   */
  headSpec?: GetRayClusterResponseBodyHeadSpec;
  /**
   * @remarks
   * The Ray cluster node IDs.
   * 
   * @example
   * ray-k7nm8ahl5te4tg93-xxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The Ray cluster node IDs.
   */
  instances?: GetRayClusterResponseBodyInstances[];
  /**
   * @remarks
   * The public URL for submitting Ray Jobs.
   * 
   * @example
   * https://emr-spark-ray-gateway-cn-hangzhou.aliyuncs.com
   */
  jobUrl?: string;
  /**
   * @remarks
   * The internal network URL for submitting Ray jobs.
   * 
   * @example
   * http://emr-spark-ray-gateway-cn-hangzhou-internal.emr.aliyuncs.com
   */
  jobUrlInner?: string;
  /**
   * @remarks
   * The error message returned when the status is Error.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the configuration has been modified.
   * 
   * @example
   * false
   */
  modified?: boolean;
  /**
   * @remarks
   * The update time. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1754274541693
   */
  modifiedTime?: number;
  /**
   * @remarks
   * The UID of the user who last modified the cluster.
   * 
   * @example
   * 202077646755523991
   */
  modifier?: string;
  /**
   * @remarks
   * The nickname of the modifier.
   * 
   * @example
   * Alice
   */
  modifierName?: string;
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
   * The start time. This value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1750327083303
   */
  startTime?: number;
  /**
   * @remarks
   * The session status. Valid values:
   * - Starting: Starting.
   * - Running: Running.
   * - Stopping: Stopping.
   * - Stopped: Stopped.
   * - Error: Failed.
   * 
   * @example
   * Running
   */
  state?: string;
  /**
   * @remarks
   * The authentication token for submitting Ray Jobs. Include this token in the request header as "ray-token": "token".
   * 
   * @example
   * 1d06484d3b424f7fa4ab7082a4076da2
   */
  submitToken?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the creator.
   * 
   * @example
   * 123456789012
   */
  userId?: string;
  /**
   * @remarks
   * The list of managed file IDs.
   */
  volumeIds?: string[];
  /**
   * @remarks
   * The Ray cluster worker node information.
   */
  workerSpec?: GetRayClusterResponseBodyWorkerSpec[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'clusterId',
      createTime: 'createTime',
      creator: 'creator',
      creatorName: 'creatorName',
      dashboardUrl: 'dashboardUrl',
      description: 'description',
      displayReleaseVersion: 'displayReleaseVersion',
      extraParam: 'extraParam',
      grpcEndpoint: 'grpcEndpoint',
      headSpec: 'headSpec',
      instanceId: 'instanceId',
      instances: 'instances',
      jobUrl: 'jobUrl',
      jobUrlInner: 'jobUrlInner',
      message: 'message',
      modified: 'modified',
      modifiedTime: 'modifiedTime',
      modifier: 'modifier',
      modifierName: 'modifierName',
      name: 'name',
      networkServiceName: 'networkServiceName',
      requestId: 'requestId',
      startTime: 'startTime',
      state: 'state',
      submitToken: 'submitToken',
      userId: 'userId',
      volumeIds: 'volumeIds',
      workerSpec: 'workerSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      createTime: 'number',
      creator: 'string',
      creatorName: 'string',
      dashboardUrl: 'string',
      description: 'string',
      displayReleaseVersion: 'string',
      extraParam: 'string',
      grpcEndpoint: 'string',
      headSpec: GetRayClusterResponseBodyHeadSpec,
      instanceId: 'string',
      instances: { 'type': 'array', 'itemType': GetRayClusterResponseBodyInstances },
      jobUrl: 'string',
      jobUrlInner: 'string',
      message: 'string',
      modified: 'boolean',
      modifiedTime: 'number',
      modifier: 'string',
      modifierName: 'string',
      name: 'string',
      networkServiceName: 'string',
      requestId: 'string',
      startTime: 'number',
      state: 'string',
      submitToken: 'string',
      userId: 'string',
      volumeIds: { 'type': 'array', 'itemType': 'string' },
      workerSpec: { 'type': 'array', 'itemType': GetRayClusterResponseBodyWorkerSpec },
    };
  }

  validate() {
    if(this.headSpec && typeof (this.headSpec as any).validate === 'function') {
      (this.headSpec as any).validate();
    }
    if(Array.isArray(this.instances)) {
      $dara.Model.validateArray(this.instances);
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


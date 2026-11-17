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
   * The Redis endpoint.
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
   * Specifies whether auto-scaling is enabled for worker nodes.
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
   * The GCS fault tolerance configuration.
   */
  gftConfig?: GetRayClusterResponseBodyHeadSpecGftConfig;
  /**
   * @remarks
   * Specifies whether GCS fault tolerance is enabled.
   * 
   * **if can be null:**
   * true
   */
  gftEnabled?: boolean;
  /**
   * @remarks
   * The GPU driver version.
   * 
   * @example
   * 550
   */
  gpuDriverVersion?: string;
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
   * The idle timeout period for worker nodes when auto-scaling is enabled.
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
   * The name of the queue.
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
      gpuDriverVersion: 'gpuDriverVersion',
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
      gpuDriverVersion: 'string',
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
   * The primary container exit code.
   * 
   * @example
   * 137
   */
  containerExitCode?: number;
  /**
   * @remarks
   * The primary container state.
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
   * The creation time. The value is a UNIX timestamp in milliseconds.
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
   * The node pod state.
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
   * The start time. The value is a UNIX timestamp in milliseconds.
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
   * The DPI engine version.
   * 
   * @example
   * ray-1.2.0 (Ray 2.55.1, Python 3.12)
   */
  displayReleaseVersion?: string;
  /**
   * @remarks
   * The environment variables for Ray.
   * 
   * @example
   * MY_ENV=12456
   */
  env?: string;
  /**
   * @remarks
   * The GPU driver type.
   * 
   * @example
   * 550
   */
  gpuDriverVersion?: string;
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
   * The worker node group name.
   * 
   * @example
   * WorkerGroup1
   */
  groupName?: string;
  /**
   * @remarks
   * The actual group name in Kubernetes.
   * 
   * @example
   * worker1
   */
  kubernetesGroupName?: string;
  /**
   * @remarks
   * The maximum number of worker nodes.
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
   * The minimum number of worker nodes.
   * 
   * @example
   * 1
   */
  minReplica?: number;
  /**
   * @remarks
   * The name of the queue.
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
   * The worker node group type.
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
      gpuDriverVersion: 'gpuDriverVersion',
      gpuSpec: 'gpuSpec',
      groupName: 'groupName',
      kubernetesGroupName: 'kubernetesGroupName',
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
      gpuDriverVersion: 'string',
      gpuSpec: 'string',
      groupName: 'string',
      kubernetesGroupName: 'string',
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
   * The ID of the Ray cluster.
   * 
   * @example
   * ray-k7nm8ahl5te4tg91
   */
  clusterId?: string;
  /**
   * @remarks
   * The creation time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1750327083303
   */
  createTime?: number;
  /**
   * @remarks
   * The user ID of the cluster creator.
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
   * Specifies whether to upload metrics.
   */
  enableMetricsUpload?: boolean;
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
   * The internal gRPC endpoint. The domain name in the endpoint can also be used to submit Ray jobs.
   * 
   * @example
   * ray://emr-spark-ray-gateway-cn-hangzhou-internal.emr.aliyuncs.com:80
   */
  grpcEndpoint?: string;
  /**
   * @remarks
   * The head node parameters of the Ray cluster.
   */
  headSpec?: GetRayClusterResponseBodyHeadSpec;
  /**
   * @remarks
   * The IDs of the nodes in the Ray cluster.
   * 
   * @example
   * ray-k7nm8ahl5te4tg93-xxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The IDs of the nodes in the Ray cluster.
   */
  instances?: GetRayClusterResponseBodyInstances[];
  /**
   * @remarks
   * The public endpoint for submitting Ray jobs.
   * 
   * @example
   * https://emr-spark-ray-gateway-cn-hangzhou.aliyuncs.com
   */
  jobUrl?: string;
  /**
   * @remarks
   * The internal URL for submitting Ray jobs.
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
   * Specifies whether the configuration has been modified.
   * 
   * @example
   * false
   */
  modified?: boolean;
  /**
   * @remarks
   * The update time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1754274541693
   */
  modifiedTime?: number;
  /**
   * @remarks
   * The user ID of the cluster updater.
   * 
   * @example
   * 202077646755523991
   */
  modifier?: string;
  /**
   * @remarks
   * The nickname of the updater.
   * 
   * @example
   * Alice
   */
  modifierName?: string;
  /**
   * @remarks
   * The name of the Ray cluster.
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
   * The Logstore for uploading metrics. The Logstore must be a Metricstore.
   * 
   * @example
   * myMetricsStore
   */
  slsLogStore?: string;
  /**
   * @remarks
   * The Simple Log Service (SLS) project for uploading metrics.
   * 
   * @example
   * mySLSProject
   */
  slsProject?: string;
  /**
   * @remarks
   * The start time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1750327083303
   */
  startTime?: number;
  /**
   * @remarks
   * The session status. Valid values:
   * - Starting: The session is starting.
   * - Running: The session is running.
   * - Stopping: The session is stopping.
   * - Stopped: The session is stopped.
   * - Error: The session has failed.
   * 
   * @example
   * Running
   */
  state?: string;
  /**
   * @remarks
   * The authentication token for submitting Ray jobs. You must include this token in the request header in the following format: "ray-token": "token".
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
      enableMetricsUpload: 'enableMetricsUpload',
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
      slsLogStore: 'slsLogStore',
      slsProject: 'slsProject',
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
      enableMetricsUpload: 'boolean',
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
      slsLogStore: 'string',
      slsProject: 'string',
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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
   * Specifies whether auto scaling is enabled for worker nodes.
   * 
   * @example
   * false
   */
  enableAutoScaling?: boolean;
  /**
   * @example
   * ecs.gn6i-c4g1.xlarge
   */
  gpuSpec?: string;
  /**
   * @remarks
   * The idle timeout period for worker nodes, in seconds. Applies only when auto scaling is enabled.
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
   * The name of the queue.
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

export class GetRayClusterResponseBodyInstances extends $dara.Model {
  /**
   * @remarks
   * The exit code of the main container.
   * 
   * @example
   * 137
   */
  containerExitCode?: number;
  /**
   * @remarks
   * The state of the main container.
   * 
   * @example
   * Running
   */
  containerState?: string;
  /**
   * @remarks
   * The status message of the main container.
   * 
   * @example
   * ContainerExit
   */
  containerStateMessage?: string;
  /**
   * @remarks
   * Additional information about the main container state.
   * 
   * @example
   * ok
   */
  containerStateReason?: string;
  /**
   * @remarks
   * The time when the node was created. This is a UNIX timestamp in milliseconds.
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
   * The status message of the node pod.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The phase of the node pod.
   * 
   * @example
   * Running
   */
  phase?: string;
  /**
   * @remarks
   * Additional information about the node.
   * 
   * @example
   * OOMKilled
   */
  reason?: string;
  /**
   * @remarks
   * The time when the node started. This is a UNIX timestamp in milliseconds.
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
   * The number of CPU cores per worker node.
   * 
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
   * @remarks
   * The name of the worker node group.
   * 
   * @example
   * WorkerGroup1
   */
  groupName?: string;
  /**
   * @remarks
   * The maximum number of worker nodes in the group.
   * 
   * @example
   * 10
   */
  maxReplica?: number;
  /**
   * @remarks
   * The memory size per worker node. Unit: Gi.
   * 
   * @example
   * 8Gi
   */
  memory?: string;
  /**
   * @remarks
   * The minimum number of worker nodes in the group.
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
   * The time when the cluster was created. This is a UNIX timestamp in milliseconds.
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
   * The URL of the Ray Dashboard for this cluster.
   * 
   * @example
   * https://emr-ray-gateway-cn-hangzhou.aliyuncs.com/workspace/w-xxxxxxxx/raycluster/ray-xxxxxx/dashboard?token=xxxxxx
   */
  dashboardUrl?: string;
  /**
   * @remarks
   * The description of the Ray cluster.
   * 
   * @example
   * Ray Cluster for dev.
   */
  description?: string;
  /**
   * @remarks
   * The version of the Ray engine.
   * 
   * @example
   * ray-1.0.0 (Ray 2.47.1, Python 3.12)
   */
  displayReleaseVersion?: string;
  /**
   * @remarks
   * Additional parameters in JSON format.
   * 
   * @example
   * {}
   */
  extraParam?: string;
  /**
   * @remarks
   * The gRPC endpoint for the internal network. You can also use the domain name in this endpoint to submit Ray jobs.
   * 
   * @example
   * ray://emr-spark-ray-gateway-cn-hangzhou-internal.emr.aliyuncs.com:80
   */
  grpcEndpoint?: string;
  /**
   * @remarks
   * The configuration of the head node.
   */
  headSpec?: GetRayClusterResponseBodyHeadSpec;
  /**
   * @remarks
   * The ID of the Ray cluster node.
   * 
   * @example
   * ray-k7nm8ahl5te4tg93-xxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The list of nodes in the Ray cluster.
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
   * @example
   * http://emr-spark-ray-gateway-cn-hangzhou-internal.emr.aliyuncs.com
   */
  jobUrlInner?: string;
  /**
   * @remarks
   * The error message. Returned when `state` is `Error`.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the configuration was modified.
   * 
   * @example
   * false
   */
  modified?: boolean;
  /**
   * @remarks
   * The time when the cluster was last updated. This is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1754274541693
   */
  modifiedTime?: number;
  /**
   * @remarks
   * The UID of the user who last updated the cluster.
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
   * The name of the Ray cluster.
   * 
   * @example
   * myRayCluster
   */
  name?: string;
  /**
   * @remarks
   * The name of the network connection.
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
   * The time when the cluster started. This is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1750327083303
   */
  startTime?: number;
  /**
   * @remarks
   * The session state. Valid values:
   * 
   * - Starting: The session is starting.
   * 
   * - Running: The session is running.
   * 
   * - Stopping: The session is being stopped.
   * 
   * - Stopped: The session is stopped.
   * 
   * - Error: The session has failed.
   * 
   * @example
   * Running
   */
  state?: string;
  /**
   * @remarks
   * The authentication token for submitting Ray jobs. Add this token to the request header in the format `"ray-token": "token"`.
   * 
   * @example
   * 1d06484d3b424f7fa4ab7082a4076da2
   */
  submitToken?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that created the cluster.
   * 
   * @example
   * 123456789012
   */
  userId?: string;
  volumeIds?: string[];
  /**
   * @remarks
   * The list of worker node group configurations.
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


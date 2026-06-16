// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRayClusterResponseBodyRayClustersHeadSpec extends $dara.Model {
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
   * Indicates whether automatic scaling is enabled for worker nodes.
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
   * The idle timeout period for worker nodes.
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

export class ListRayClusterResponseBodyRayClustersWorkerSpec extends $dara.Model {
  /**
   * @remarks
   * The number of CPU cores.
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
   * The name of the worker group.
   * 
   * @example
   * Group1
   */
  groupName?: string;
  /**
   * @remarks
   * The maximum number of worker nodes after automatic scaling is enabled.
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
   * The minimum number of worker nodes after automatic scaling is enabled.
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
   * The number of nodes.
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

export class ListRayClusterResponseBodyRayClusters extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ray-uiulpgow9xljimm1
   */
  clusterId?: string;
  /**
   * @remarks
   * The time when the cluster was created.
   * 
   * @example
   * 1723722279800
   */
  createTime?: number;
  /**
   * @remarks
   * The UID of the user who created the cluster.
   * 
   * @example
   * 202077646755123991
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
   * https://emr-spark-ray-gateway-cn-hangzhou.aliyuncs.com?token=xxxxxxxxx
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
   * The Ray engine version.
   * 
   * @example
   * ray-1.0.0 (Ray 2.47.1, Python 3.12)
   */
  displayReleaseVersion?: string;
  /**
   * @remarks
   * The gRPC endpoint for the internal network. The domain name can also be used to submit Ray jobs.
   * 
   * @example
   * ray://emr-spark-ray-gateway-cn-hanghzou-internal.emr.aliyuncs.com:80
   */
  grpcEndpoint?: string;
  /**
   * @remarks
   * The information about the head node of the Ray cluster.
   */
  headSpec?: ListRayClusterResponseBodyRayClustersHeadSpec;
  /**
   * @remarks
   * The ID of the Ray cluster instance.
   * 
   * @example
   * ray-uiulpgow9xljimm1-xxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The error message.
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
   * The time when the cluster was last modified.
   * 
   * @example
   * 1723722279800
   */
  modifiedTime?: number;
  /**
   * @remarks
   * The UID of the user who last updated the cluster.
   * 
   * @example
   * 202077646755123991
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
   * testRayCluster
   */
  name?: string;
  /**
   * @remarks
   * The name of the network connectivity service.
   * 
   * @example
   * vpc
   */
  networkServiceName?: string;
  /**
   * @remarks
   * The startup time.
   * 
   * @example
   * 1723722279800
   */
  startTime?: number;
  /**
   * @remarks
   * The cluster state.
   * 
   * - Starting: The cluster is starting.
   * 
   * - Running: The cluster is running.
   * 
   * - Stopping: The cluster is stopping.
   * 
   * - Stopped: The cluster is stopped.
   * 
   * - Error: The cluster has failed.
   * 
   * @example
   * Running
   */
  state?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 1234567890
   */
  userId?: string;
  /**
   * @remarks
   * The information about the worker nodes of the Ray cluster.
   */
  workerSpec?: ListRayClusterResponseBodyRayClustersWorkerSpec[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'clusterId',
      createTime: 'createTime',
      creator: 'creator',
      creatorName: 'creatorName',
      dashboardUrl: 'dashboardUrl',
      description: 'description',
      displayReleaseVersion: 'displayReleaseVersion',
      grpcEndpoint: 'grpcEndpoint',
      headSpec: 'headSpec',
      instanceId: 'instanceId',
      message: 'message',
      modified: 'modified',
      modifiedTime: 'modifiedTime',
      modifier: 'modifier',
      modifierName: 'modifierName',
      name: 'name',
      networkServiceName: 'networkServiceName',
      startTime: 'startTime',
      state: 'state',
      userId: 'userId',
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
      grpcEndpoint: 'string',
      headSpec: ListRayClusterResponseBodyRayClustersHeadSpec,
      instanceId: 'string',
      message: 'string',
      modified: 'boolean',
      modifiedTime: 'number',
      modifier: 'string',
      modifierName: 'string',
      name: 'string',
      networkServiceName: 'string',
      startTime: 'number',
      state: 'string',
      userId: 'string',
      workerSpec: { 'type': 'array', 'itemType': ListRayClusterResponseBodyRayClustersWorkerSpec },
    };
  }

  validate() {
    if(this.headSpec && typeof (this.headSpec as any).validate === 'function') {
      (this.headSpec as any).validate();
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

export class ListRayClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of Ray clusters.
   */
  rayClusters?: ListRayClusterResponseBodyRayClusters[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      rayClusters: 'rayClusters',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rayClusters: { 'type': 'array', 'itemType': ListRayClusterResponseBodyRayClusters },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.rayClusters)) {
      $dara.Model.validateArray(this.rayClusters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


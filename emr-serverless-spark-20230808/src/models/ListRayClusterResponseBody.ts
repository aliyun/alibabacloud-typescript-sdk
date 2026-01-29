// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRayClusterResponseBodyRayClustersHeadSpec extends $dara.Model {
  /**
   * @example
   * 2
   */
  cpu?: string;
  /**
   * @example
   * false
   */
  enableAutoScaling?: boolean;
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
   * @example
   * 2
   */
  cpu?: string;
  /**
   * @example
   * Group1
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
   * @example
   * ray-uiulpgow9xljimm1
   */
  clusterId?: string;
  /**
   * @example
   * 1723722279800
   */
  createTime?: number;
  /**
   * @example
   * 202077646755123991
   */
  creator?: string;
  /**
   * @example
   * Alice
   */
  creatorName?: string;
  /**
   * @example
   * https://emr-spark-ray-gateway-cn-hangzhou.aliyuncs.com?token=xxxxxxxxx
   */
  dashboardUrl?: string;
  /**
   * @example
   * Ray Cluster for dev.
   */
  description?: string;
  /**
   * @example
   * ray-1.0.0 (Ray 2.47.1, Python 3.12)
   */
  displayReleaseVersion?: string;
  /**
   * @example
   * ray://emr-spark-ray-gateway-cn-hanghzou-internal.emr.aliyuncs.com:80
   */
  grpcEndpoint?: string;
  headSpec?: ListRayClusterResponseBodyRayClustersHeadSpec;
  /**
   * @example
   * ray-uiulpgow9xljimm1-xxxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * false
   */
  modified?: boolean;
  /**
   * @example
   * 1723722279800
   */
  modifiedTime?: number;
  /**
   * @example
   * 202077646755123991
   */
  modifier?: string;
  /**
   * @example
   * Alice
   */
  modifierName?: string;
  /**
   * @example
   * testRayCluster
   */
  name?: string;
  /**
   * @example
   * vpc
   */
  networkServiceName?: string;
  /**
   * @example
   * 1723722279800
   */
  startTime?: number;
  /**
   * @example
   * Running
   */
  state?: string;
  /**
   * @example
   * 1234567890
   */
  userId?: string;
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
  rayClusters?: ListRayClusterResponseBodyRayClusters[];
  /**
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


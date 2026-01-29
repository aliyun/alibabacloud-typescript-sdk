// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRayClusterResponseBodyHeadSpec extends $dara.Model {
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

export class GetRayClusterResponseBodyInstances extends $dara.Model {
  /**
   * @example
   * 137
   */
  containerExitCode?: number;
  /**
   * @example
   * Running
   */
  containerState?: string;
  /**
   * @example
   * ContainerExit
   */
  containerStateMessage?: string;
  /**
   * @example
   * ok
   */
  containerStateReason?: string;
  /**
   * @example
   * 1735870116167
   */
  createTime?: number;
  /**
   * @example
   * ray-uiulpgow9xljim10-head-7cgta
   */
  instanceId?: string;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @example
   * Running
   */
  phase?: string;
  /**
   * @example
   * OOMKilled
   */
  reason?: string;
  /**
   * @example
   * 1762946698000
   */
  startTime?: number;
  /**
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
   * @example
   * 2
   */
  cpu?: string;
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

export class GetRayClusterResponseBody extends $dara.Model {
  /**
   * @example
   * ray-k7nm8ahl5te4tg91
   */
  clusterId?: string;
  /**
   * @example
   * 1750327083303
   */
  createTime?: number;
  /**
   * @example
   * 202077646755523991
   */
  creator?: string;
  /**
   * @example
   * Alice
   */
  creatorName?: string;
  /**
   * @example
   * https://emr-ray-gateway-cn-hangzhou.aliyuncs.com/workspace/w-xxxxxxxx/raycluster/ray-xxxxxx/dashboard?token=xxxxxx
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
   * {}
   */
  extraParam?: string;
  /**
   * @example
   * ray://emr-spark-ray-gateway-cn-hangzhou-internal.emr.aliyuncs.com:80
   */
  grpcEndpoint?: string;
  headSpec?: GetRayClusterResponseBodyHeadSpec;
  /**
   * @example
   * ray-k7nm8ahl5te4tg93-xxxxxxx
   */
  instanceId?: string;
  instances?: GetRayClusterResponseBodyInstances[];
  /**
   * @example
   * https://emr-spark-ray-gateway-cn-hangzhou.aliyuncs.com
   */
  jobUrl?: string;
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
   * 1754274541693
   */
  modifiedTime?: number;
  /**
   * @example
   * 202077646755523991
   */
  modifier?: string;
  /**
   * @example
   * Alice
   */
  modifierName?: string;
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
   * 1750327083303
   */
  startTime?: number;
  /**
   * @example
   * Running
   */
  state?: string;
  /**
   * @example
   * 1d06484d3b424f7fa4ab7082a4076da2
   */
  submitToken?: string;
  /**
   * @example
   * 123456789012
   */
  userId?: string;
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
    if(Array.isArray(this.workerSpec)) {
      $dara.Model.validateArray(this.workerSpec);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


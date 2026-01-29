// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRayClusterRequestHeadSpec extends $dara.Model {
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
  static names(): { [key: string]: string } {
    return {
      cpu: 'cpu',
      enableAutoScaling: 'enableAutoScaling',
      idleTimeoutSeconds: 'idleTimeoutSeconds',
      memory: 'memory',
      queueName: 'queueName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'string',
      enableAutoScaling: 'boolean',
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

export class CreateRayClusterRequestWorkerSpec extends $dara.Model {
  /**
   * @example
   * 4
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

export class CreateRayClusterRequest extends $dara.Model {
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
  headSpec?: CreateRayClusterRequestHeadSpec;
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
  workerSpec?: CreateRayClusterRequestWorkerSpec[];
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      displayReleaseVersion: 'displayReleaseVersion',
      extraParam: 'extraParam',
      headSpec: 'headSpec',
      name: 'name',
      networkServiceName: 'networkServiceName',
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
      workerSpec: { 'type': 'array', 'itemType': CreateRayClusterRequestWorkerSpec },
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


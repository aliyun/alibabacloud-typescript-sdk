// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAIDBClusterResourceUsageResponseBodyNodeItemsPodItems extends $dara.Model {
  /**
   * @remarks
   * The time when the pod was created, in ISO 8601 UTC format.
   * 
   * @example
   * 2021-09-13T15:45:27Z
   */
  createTime?: string;
  /**
   * @remarks
   * The name of the pod.
   * 
   * @example
   * ai-db-pod-001
   */
  name?: string;
  /**
   * @remarks
   * The namespace to which the pod belongs.
   * 
   * @example
   * default
   */
  nameSpace?: string;
  /**
   * @remarks
   * The IP address of the pod.
   * 
   * @example
   * 10.0.0.12
   */
  podIP?: string;
  /**
   * @remarks
   * The requested resources of the pod.
   * 
   * @example
   * cpu=1,memory=2Gi
   */
  resourceRequest?: string;
  /**
   * @remarks
   * The status of the pod.
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      name: 'Name',
      nameSpace: 'NameSpace',
      podIP: 'PodIP',
      resourceRequest: 'ResourceRequest',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      name: 'string',
      nameSpace: 'string',
      podIP: 'string',
      resourceRequest: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAIDBClusterResourceUsageResponseBodyNodeItems extends $dara.Model {
  /**
   * @remarks
   * The total CPU capacity of the node.
   * 
   * @example
   * 4
   */
  CPU?: string;
  /**
   * @remarks
   * The used CPU capacity of the node.
   * 
   * @example
   * 2
   */
  CPUUsed?: string;
  /**
   * @remarks
   * The ID of the database node.
   * 
   * @example
   * pi-2ze7sztqv1*****
   */
  DBNodeId?: string;
  /**
   * @remarks
   * The total GPU capacity of the node.
   * 
   * @example
   * 1
   */
  GPU?: string;
  /**
   * @remarks
   * The GPU model of the node.
   * 
   * @example
   * NVIDIA A10
   */
  GPUModel?: string;
  /**
   * @remarks
   * The used GPU capacity of the node.
   * 
   * @example
   * 0
   */
  GPUUsed?: string;
  /**
   * @remarks
   * The total memory capacity of the node.
   * 
   * @example
   * 16Gi
   */
  memory?: string;
  /**
   * @remarks
   * The used memory capacity of the node.
   * 
   * @example
   * 8Gi
   */
  memoryUsed?: string;
  /**
   * @remarks
   * The resource information of the pods on the node.
   */
  podItems?: DescribeAIDBClusterResourceUsageResponseBodyNodeItemsPodItems[];
  /**
   * @remarks
   * The ID of the virtual node associated with the database node.
   * 
   * @example
   * vnode-001
   */
  VNodeId?: string;
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
      CPUUsed: 'CPUUsed',
      DBNodeId: 'DBNodeId',
      GPU: 'GPU',
      GPUModel: 'GPUModel',
      GPUUsed: 'GPUUsed',
      memory: 'Memory',
      memoryUsed: 'MemoryUsed',
      podItems: 'PodItems',
      VNodeId: 'VNodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: 'string',
      CPUUsed: 'string',
      DBNodeId: 'string',
      GPU: 'string',
      GPUModel: 'string',
      GPUUsed: 'string',
      memory: 'string',
      memoryUsed: 'string',
      podItems: { 'type': 'array', 'itemType': DescribeAIDBClusterResourceUsageResponseBodyNodeItemsPodItems },
      VNodeId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.podItems)) {
      $dara.Model.validateArray(this.podItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAIDBClusterResourceUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the cluster was created, in ISO 8601 UTC format.
   * 
   * @example
   * 2021-09-13T15:45:27Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the AI database cluster.
   * 
   * @example
   * pc-2zeu0t5v0p98*****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The database engine of the cluster.
   * 
   * @example
   * AI
   */
  engine?: string;
  /**
   * @remarks
   * The DPI engine version of the cluster.
   * 
   * @example
   * 3.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The resource usage information of the nodes in the cluster.
   */
  nodeItems?: DescribeAIDBClusterResourceUsageResponseBodyNodeItems[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2921D843-433A-5FB3-A03B-4EC093B219F8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      DBClusterId: 'DBClusterId',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      nodeItems: 'NodeItems',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      DBClusterId: 'string',
      engine: 'string',
      engineVersion: 'string',
      nodeItems: { 'type': 'array', 'itemType': DescribeAIDBClusterResourceUsageResponseBodyNodeItems },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodeItems)) {
      $dara.Model.validateArray(this.nodeItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


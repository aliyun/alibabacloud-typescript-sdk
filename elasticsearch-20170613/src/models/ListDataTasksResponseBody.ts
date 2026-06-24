// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataTasksResponseBodyResultSinkCluster extends $dara.Model {
  /**
   * @remarks
   * The destination cluster type. Default value: elasticsearch.
   * 
   * @example
   * 1
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The public network access address of the destination cluster.
   * 
   * @example
   * http://192.168.xx.xx:4101
   */
  endpoint?: string;
  /**
   * @remarks
   * The destination index.
   * 
   * @example
   * product_info
   */
  index?: string;
  /**
   * @remarks
   * The index type.
   * 
   * @example
   * _doc
   */
  type?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) where the cluster resides.
   * 
   * @example
   * vpc-2ze55voww95g82gak****
   */
  vpcId?: string;
  /**
   * @remarks
   * The instance ID of the current cluster or the load balancing SLB (Server Load Balancer) instance ID.
   * 
   * @example
   * es-cn-09k1rnu3g0002****-worker
   */
  vpcInstanceId?: string;
  /**
   * @remarks
   * The port number used to access the cluster.
   * 
   * @example
   * 9200
   */
  vpcInstancePort?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceType: 'dataSourceType',
      endpoint: 'endpoint',
      index: 'index',
      type: 'type',
      vpcId: 'vpcId',
      vpcInstanceId: 'vpcInstanceId',
      vpcInstancePort: 'vpcInstancePort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceType: 'string',
      endpoint: 'string',
      index: 'string',
      type: 'string',
      vpcId: 'string',
      vpcInstanceId: 'string',
      vpcInstancePort: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataTasksResponseBodyResultSourceCluster extends $dara.Model {
  /**
   * @remarks
   * The source cluster type. Default value: elasticsearch.
   * 
   * @example
   * 1
   */
  dataSourceType?: string;
  /**
   * @remarks
   * The index to be migrated.
   * 
   * @example
   * product_info
   */
  index?: string;
  /**
   * @remarks
   * The Mapping configuration of the cluster.
   * 
   * @example
   * {\\"_doc\\":{\\"properties\\":{\\"user\\":{\\"properties\\":{\\"last\\":{\\"type\\":\\"text\\",...}}}}}}
   */
  mapping?: string;
  /**
   * @remarks
   * The routing field of the index. The primary key field is used by default.
   * 
   * @example
   * _id
   */
  routing?: string;
  /**
   * @remarks
   * The Settings configuration of the cluster.
   * 
   * @example
   * {\\n  \\"index\\": {\\n    \\"replication\\": {\\n}.....}}
   */
  settings?: string;
  /**
   * @remarks
   * The index type.
   * 
   * @example
   * _doc
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceType: 'dataSourceType',
      index: 'index',
      mapping: 'mapping',
      routing: 'routing',
      settings: 'settings',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceType: 'string',
      index: 'string',
      mapping: 'string',
      routing: 'string',
      settings: 'string',
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

export class ListDataTasksResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The time when the task was created.
   * 
   * @example
   * 2020-07-30 06:32:18
   */
  createTime?: string;
  /**
   * @remarks
   * The destination cluster information.
   */
  sinkCluster?: ListDataTasksResponseBodyResultSinkCluster;
  /**
   * @remarks
   * The source cluster information.
   */
  sourceCluster?: ListDataTasksResponseBodyResultSourceCluster;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * et_cn_mfv1233r47272****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      sinkCluster: 'sinkCluster',
      sourceCluster: 'sourceCluster',
      status: 'status',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      sinkCluster: ListDataTasksResponseBodyResultSinkCluster,
      sourceCluster: ListDataTasksResponseBodyResultSourceCluster,
      status: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(this.sinkCluster && typeof (this.sinkCluster as any).validate === 'function') {
      (this.sinkCluster as any).validate();
    }
    if(this.sourceCluster && typeof (this.sourceCluster as any).validate === 'function') {
      (this.sourceCluster as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1D***
   */
  requestId?: string;
  /**
   * @remarks
   * The returned results.
   */
  result?: ListDataTasksResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListDataTasksResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


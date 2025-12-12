// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterNodeInfosResponseBodyNodeInfos extends $dara.Model {
  /**
   * @example
   * true
   */
  failoverTesting?: boolean;
  /**
   * @example
   * 172.168.0.1
   */
  nodeIp?: string;
  /**
   * @example
   * ck-bp108z124a8****
   */
  nodeName?: string;
  /**
   * @example
   * 1
   */
  replicaId?: string;
  /**
   * @example
   * 2
   */
  shardId?: string;
  static names(): { [key: string]: string } {
    return {
      failoverTesting: 'FailoverTesting',
      nodeIp: 'NodeIp',
      nodeName: 'NodeName',
      replicaId: 'ReplicaId',
      shardId: 'ShardId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failoverTesting: 'boolean',
      nodeIp: 'string',
      nodeName: 'string',
      replicaId: 'string',
      shardId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterNodeInfosResponseBodyZkNodeInfos extends $dara.Model {
  /**
   * @example
   * true
   */
  failoverTesting?: boolean;
  /**
   * @example
   * ck-bp108z124a8****
   */
  nodeName?: string;
  /**
   * @example
   * 1
   */
  replicaId?: string;
  static names(): { [key: string]: string } {
    return {
      failoverTesting: 'FailoverTesting',
      nodeName: 'NodeName',
      replicaId: 'ReplicaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failoverTesting: 'boolean',
      nodeName: 'string',
      replicaId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterNodeInfosResponseBody extends $dara.Model {
  nodeInfos?: DescribeDBClusterNodeInfosResponseBodyNodeInfos[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @example
   * 746CD303-0B82-5E8D-886D-93A9FAF3A876
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalNodeCount?: number;
  zkNodeInfos?: DescribeDBClusterNodeInfosResponseBodyZkNodeInfos[];
  static names(): { [key: string]: string } {
    return {
      nodeInfos: 'NodeInfos',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalNodeCount: 'TotalNodeCount',
      zkNodeInfos: 'ZkNodeInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeInfos: { 'type': 'array', 'itemType': DescribeDBClusterNodeInfosResponseBodyNodeInfos },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalNodeCount: 'number',
      zkNodeInfos: { 'type': 'array', 'itemType': DescribeDBClusterNodeInfosResponseBodyZkNodeInfos },
    };
  }

  validate() {
    if(Array.isArray(this.nodeInfos)) {
      $dara.Model.validateArray(this.nodeInfos);
    }
    if(Array.isArray(this.zkNodeInfos)) {
      $dara.Model.validateArray(this.zkNodeInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


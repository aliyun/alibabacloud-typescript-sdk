// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLogicInstanceTopologyResponseBodyRedisProxyListNodeInfo extends $dara.Model {
  /**
   * @remarks
   * The bandwidth throttling of the node. Unit: MB/s.
   * 
   * @example
   * 96
   */
  bandwidth?: string;
  /**
   * @remarks
   * The storage capacity of the node. Unit: MB.
   * 
   * @example
   * 5120
   */
  capacity?: string;
  /**
   * @remarks
   * The maximum number of connections.
   * 
   * @example
   * 320000
   */
  connection?: string;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * r-bp10noxlhcoim2****-proxy-3#542****
   */
  nodeId?: string;
  /**
   * @remarks
   * The node type. Valid values:
   * 
   * *   **proxy**: proxy node
   * *   **db**: data node
   * 
   * @example
   * proxy
   */
  nodeType?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      capacity: 'Capacity',
      connection: 'Connection',
      nodeId: 'NodeId',
      nodeType: 'NodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'string',
      capacity: 'string',
      connection: 'string',
      nodeId: 'string',
      nodeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogicInstanceTopologyResponseBodyRedisProxyList extends $dara.Model {
  nodeInfo?: DescribeLogicInstanceTopologyResponseBodyRedisProxyListNodeInfo[];
  static names(): { [key: string]: string } {
    return {
      nodeInfo: 'NodeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeInfo: { 'type': 'array', 'itemType': DescribeLogicInstanceTopologyResponseBodyRedisProxyListNodeInfo },
    };
  }

  validate() {
    if(Array.isArray(this.nodeInfo)) {
      $dara.Model.validateArray(this.nodeInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogicInstanceTopologyResponseBodyRedisShardListNodeInfo extends $dara.Model {
  /**
   * @remarks
   * The bandwidth throttling of the node. Unit: MB/s.
   * 
   * @example
   * 96
   */
  bandwidth?: string;
  /**
   * @remarks
   * The storage capacity of the node. Unit: MB.
   * 
   * @example
   * 2048
   */
  capacity?: string;
  /**
   * @remarks
   * The maximum number of connections.
   * 
   * @example
   * 10000
   */
  connection?: string;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * r-bp10noxlhcoim2****-db-0#688****
   */
  nodeId?: string;
  /**
   * @remarks
   * The node type. Valid values:
   * 
   * *   **proxy**: proxy node
   * *   **db**: data node
   * 
   * @example
   * db
   */
  nodeType?: string;
  /**
   * @remarks
   * 子实例类型，返回值：
   * * **master**：主节点类型。
   * * **readonly**：只读实例类型。
   * 
   * @example
   * master
   */
  subInstanceType?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      capacity: 'Capacity',
      connection: 'Connection',
      nodeId: 'NodeId',
      nodeType: 'NodeType',
      subInstanceType: 'SubInstanceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'string',
      capacity: 'string',
      connection: 'string',
      nodeId: 'string',
      nodeType: 'string',
      subInstanceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogicInstanceTopologyResponseBodyRedisShardList extends $dara.Model {
  nodeInfo?: DescribeLogicInstanceTopologyResponseBodyRedisShardListNodeInfo[];
  static names(): { [key: string]: string } {
    return {
      nodeInfo: 'NodeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeInfo: { 'type': 'array', 'itemType': DescribeLogicInstanceTopologyResponseBodyRedisShardListNodeInfo },
    };
  }

  validate() {
    if(Array.isArray(this.nodeInfo)) {
      $dara.Model.validateArray(this.nodeInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLogicInstanceTopologyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @remarks
   * The detailed proxy information, including information about proxy nodes.
   */
  redisProxyList?: DescribeLogicInstanceTopologyResponseBodyRedisProxyList;
  /**
   * @remarks
   * Details of data shards, which includes node information such as NodeInfo.
   */
  redisShardList?: DescribeLogicInstanceTopologyResponseBodyRedisShardList;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 794120D1-E0CF-4713-BAE4-EBAEA04506AF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      redisProxyList: 'RedisProxyList',
      redisShardList: 'RedisShardList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      redisProxyList: DescribeLogicInstanceTopologyResponseBodyRedisProxyList,
      redisShardList: DescribeLogicInstanceTopologyResponseBodyRedisShardList,
      requestId: 'string',
    };
  }

  validate() {
    if(this.redisProxyList && typeof (this.redisProxyList as any).validate === 'function') {
      (this.redisProxyList as any).validate();
    }
    if(this.redisShardList && typeof (this.redisShardList as any).validate === 'function') {
      (this.redisShardList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


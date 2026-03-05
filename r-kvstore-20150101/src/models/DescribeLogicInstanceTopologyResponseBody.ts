// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLogicInstanceTopologyResponseBodyRedisProxyListNodeInfo extends $dara.Model {
  bandwidth?: string;
  capacity?: string;
  connection?: string;
  nodeId?: string;
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
  bandwidth?: string;
  capacity?: string;
  connection?: string;
  nodeId?: string;
  nodeType?: string;
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
  redisProxyList?: DescribeLogicInstanceTopologyResponseBodyRedisProxyList;
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFreeNodesResponseBodyNodesTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * aa_key
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * aa_vakye
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFreeNodesResponseBodyNodes extends $dara.Model {
  /**
   * @remarks
   * The commodity code.
   * 
   * @example
   * bccluster_eflocomputing_public_cn
   */
  commodityCode?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1652321554
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the node expires.
   * 
   * @example
   * 1673107200
   */
  expiredTime?: string;
  /**
   * @remarks
   * The cluster number.
   * 
   * @example
   * A1
   */
  hpnZone?: string;
  /**
   * @example
   * e01-cn-zvp2tgykr08
   */
  hyperNodeId?: string;
  /**
   * @remarks
   * The instance type.
   * 
   * @example
   * efg1.nvga1
   */
  machineType?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * e01-cn-7pp2x193801
   */
  nodeId?: string;
  /**
   * @remarks
   * The node status.
   * 
   * @example
   * Unused
   */
  operatingState?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aekzkkbrpl4owgy
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The serial number of the node.
   * 
   * @example
   * sn_pozkHBgicd
   */
  sn?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: ListFreeNodesResponseBodyNodesTags[];
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-j
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      createTime: 'CreateTime',
      expiredTime: 'ExpiredTime',
      hpnZone: 'HpnZone',
      hyperNodeId: 'HyperNodeId',
      machineType: 'MachineType',
      nodeId: 'NodeId',
      operatingState: 'OperatingState',
      resourceGroupId: 'ResourceGroupId',
      sn: 'Sn',
      tags: 'Tags',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      createTime: 'string',
      expiredTime: 'string',
      hpnZone: 'string',
      hyperNodeId: 'string',
      machineType: 'string',
      nodeId: 'string',
      operatingState: 'string',
      resourceGroupId: 'string',
      sn: 'string',
      tags: { 'type': 'array', 'itemType': ListFreeNodesResponseBodyNodesTags },
      zoneId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFreeNodesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned pagination token which can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * a3f2224a5ec7224116c4f5246120abe4
   */
  nextToken?: string;
  /**
   * @remarks
   * The nodes.
   */
  nodes?: ListFreeNodesResponseBodyNodes[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AA14CB86-70C4-5CB7-9E7B-6CCA77F3512B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      nodes: 'Nodes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      nodes: { 'type': 'array', 'itemType': ListFreeNodesResponseBodyNodes },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRoleZoneInfoResponseBodyNodeNodeInfo extends $dara.Model {
  /**
   * @remarks
   * The current bandwidth of the node, which consists of the default bandwidth and the increased bandwidth. Unit: MB/s.
   * 
   * > *   You can call the [EnableAdditionalBandwidth](https://help.aliyun.com/document_detail/473771.html) operation to specify the increased bandwidth.
   * > *   You can also use this parameter to calculate the increased bandwidth. For example, if the default bandwidth of the node is 96 MB/s and the returned value of this parameter is 100, the increased bandwidth is 4 MB/s.
   * 
   * @example
   * 100
   */
  currentBandWidth?: number;
  /**
   * @remarks
   * The minor version of the node.
   * 
   * @example
   * redis-5.0_0.3.10
   */
  currentMinorVersion?: string;
  /**
   * @remarks
   * The ID of the data shard.
   * 
   * @example
   * 30381****
   */
  custinsId?: string;
  /**
   * @remarks
   * The default bandwidth of the node. Unit: MB/s.
   * 
   * @example
   * 96
   */
  defaultBandWidth?: number;
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * r-t4nlenc2p04uvb****
   */
  insName?: string;
  /**
   * @remarks
   * Indicates whether the node is a read replica. If the node is a read replica, **3** is returned.
   * 
   * >  If the node is not a read replica, no value is returned.
   * 
   * @example
   * 3
   */
  insType?: number;
  /**
   * @remarks
   * Indicates whether the minor version is the latest version. Valid values:
   * 
   * *   **0**: The minor version is not the latest version.
   * *   **1**: The minor version is the latest version.
   * 
   * >  To update the minor version, call the [ModifyInstanceMinorVersion](https://help.aliyun.com/document_detail/473777.html) operation.
   * 
   * @example
   * 1
   */
  isLatestVersion?: number;
  /**
   * @remarks
   * Indicates whether the bandwidth of the node is increased. Valid values:
   * 
   * *   **true**: The bandwidth of the node is not increased.
   * *   **false**: The bandwidth of the node is increased.
   * 
   * @example
   * true
   */
  isOpenBandWidthService?: boolean;
  /**
   * @remarks
   * This parameter is used only for internal maintenance of instances.
   * 
   * @example
   * 10065****
   */
  nodeId?: string;
  /**
   * @remarks
   * The node type. Valid values:
   * 
   * *   **db**: data node.
   * *   **proxy**: proxy node.
   * *   **normal**: regular node. This value is returned when the instance runs in the standard architecture.
   * 
   * @example
   * normal
   */
  nodeType?: string;
  /**
   * @remarks
   * The role of the node. Valid values:
   * 
   * *   **master**: master node
   * *   **slave**: replica node
   * 
   * @example
   * master
   */
  role?: string;
  /**
   * @remarks
   * The ID of the zone.
   * 
   * @example
   * cn-hangzhou-b
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      currentBandWidth: 'CurrentBandWidth',
      currentMinorVersion: 'CurrentMinorVersion',
      custinsId: 'CustinsId',
      defaultBandWidth: 'DefaultBandWidth',
      insName: 'InsName',
      insType: 'InsType',
      isLatestVersion: 'IsLatestVersion',
      isOpenBandWidthService: 'IsOpenBandWidthService',
      nodeId: 'NodeId',
      nodeType: 'NodeType',
      role: 'Role',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentBandWidth: 'number',
      currentMinorVersion: 'string',
      custinsId: 'string',
      defaultBandWidth: 'number',
      insName: 'string',
      insType: 'number',
      isLatestVersion: 'number',
      isOpenBandWidthService: 'boolean',
      nodeId: 'string',
      nodeType: 'string',
      role: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRoleZoneInfoResponseBodyNode extends $dara.Model {
  nodeInfo?: DescribeRoleZoneInfoResponseBodyNodeNodeInfo[];
  static names(): { [key: string]: string } {
    return {
      nodeInfo: 'NodeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeInfo: { 'type': 'array', 'itemType': DescribeRoleZoneInfoResponseBodyNodeNodeInfo },
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

export class DescribeRoleZoneInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about each node in the instance.
   */
  node?: DescribeRoleZoneInfoResponseBodyNode;
  /**
   * @remarks
   * The number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 224B97FB-A275-4EAC-86E9-8922FEA2****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      node: 'Node',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      node: DescribeRoleZoneInfoResponseBodyNode,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.node && typeof (this.node as any).validate === 'function') {
      (this.node as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


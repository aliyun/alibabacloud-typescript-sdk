// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkPeerConnectionsResponseBodyNetworkPeerConnectsAcceptingNetwork extends $dara.Model {
  /**
   * @remarks
   * The CIDR blocks of the accepter network.
   */
  ipv4Cidrs?: string[];
  /**
   * @remarks
   * The network ID of the accepter.
   * 
   * @example
   * n-5q28114****
   */
  networkId?: string;
  static names(): { [key: string]: string } {
    return {
      ipv4Cidrs: 'Ipv4Cidrs',
      networkId: 'NetworkId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv4Cidrs: { 'type': 'array', 'itemType': 'string' },
      networkId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipv4Cidrs)) {
      $dara.Model.validateArray(this.ipv4Cidrs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkPeerConnectionsResponseBodyNetworkPeerConnectsNetwork extends $dara.Model {
  /**
   * @remarks
   * The CIDR blocks of the requester network.
   */
  ipv4Cidrs?: string[];
  /**
   * @remarks
   * The network ID of the requester.
   * 
   * @example
   * n-5q73bm****
   */
  networkId?: string;
  static names(): { [key: string]: string } {
    return {
      ipv4Cidrs: 'Ipv4Cidrs',
      networkId: 'NetworkId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv4Cidrs: { 'type': 'array', 'itemType': 'string' },
      networkId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipv4Cidrs)) {
      $dara.Model.validateArray(this.ipv4Cidrs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkPeerConnectionsResponseBodyNetworkPeerConnects extends $dara.Model {
  /**
   * @remarks
   * Details of the accepter network.
   */
  acceptingNetwork?: DescribeNetworkPeerConnectionsResponseBodyNetworkPeerConnectsAcceptingNetwork;
  /**
   * @remarks
   * The network ID of the accepter.
   * 
   * @example
   * n-5q28114****
   */
  acceptingNetworkId?: string;
  /**
   * @remarks
   * The creation time in UTC.
   * 
   * @example
   * 2024-05-31T06:43:29Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the network peering connection.
   * 
   * @example
   * desc
   */
  description?: string;
  /**
   * @remarks
   * The ID of the ENS node.
   * 
   * @example
   * cn-dongguan-9
   */
  ensRegionId?: string;
  /**
   * @remarks
   * The ID of the network peering connection.
   * 
   * @example
   * pcc-521pzxdg****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the network peering connection.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * Details of the requester network.
   */
  network?: DescribeNetworkPeerConnectionsResponseBodyNetworkPeerConnectsNetwork;
  /**
   * @remarks
   * The network ID of the requester.
   * 
   * @example
   * n-5q73bm****
   */
  networkId?: string;
  /**
   * @remarks
   * The status of the network peering connection. Valid values:
   * 
   * - `Creating`: The connection is being created.
   * 
   * - `Activated`: The connection is active.
   * 
   * - `Deleting`: The connection is being deleted.
   * 
   * @example
   * Activated
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      acceptingNetwork: 'AcceptingNetwork',
      acceptingNetworkId: 'AcceptingNetworkId',
      creationTime: 'CreationTime',
      description: 'Description',
      ensRegionId: 'EnsRegionId',
      instanceId: 'InstanceId',
      name: 'Name',
      network: 'Network',
      networkId: 'NetworkId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptingNetwork: DescribeNetworkPeerConnectionsResponseBodyNetworkPeerConnectsAcceptingNetwork,
      acceptingNetworkId: 'string',
      creationTime: 'string',
      description: 'string',
      ensRegionId: 'string',
      instanceId: 'string',
      name: 'string',
      network: DescribeNetworkPeerConnectionsResponseBodyNetworkPeerConnectsNetwork,
      networkId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.acceptingNetwork && typeof (this.acceptingNetwork as any).validate === 'function') {
      (this.acceptingNetwork as any).validate();
    }
    if(this.network && typeof (this.network as any).validate === 'function') {
      (this.network as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworkPeerConnectionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of the network peering connections.
   */
  networkPeerConnects?: DescribeNetworkPeerConnectionsResponseBodyNetworkPeerConnects[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      networkPeerConnects: 'NetworkPeerConnects',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkPeerConnects: { 'type': 'array', 'itemType': DescribeNetworkPeerConnectionsResponseBodyNetworkPeerConnects },
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.networkPeerConnects)) {
      $dara.Model.validateArray(this.networkPeerConnects);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


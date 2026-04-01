// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkPeerConnectionsResponseBodyNetworkPeerConnectsAcceptingNetwork extends $dara.Model {
  ipv4Cidrs?: string[];
  /**
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
  ipv4Cidrs?: string[];
  /**
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
  acceptingNetwork?: DescribeNetworkPeerConnectionsResponseBodyNetworkPeerConnectsAcceptingNetwork;
  /**
   * @example
   * n-5q28114****
   */
  acceptingNetworkId?: string;
  /**
   * @example
   * 2024-05-31T06:43:29Z
   */
  creationTime?: string;
  /**
   * @example
   * desc
   */
  description?: string;
  /**
   * @example
   * cn-dongguan-9
   */
  ensRegionId?: string;
  /**
   * @example
   * pcc-521pzxdg****
   */
  instanceId?: string;
  /**
   * @example
   * test
   */
  name?: string;
  network?: DescribeNetworkPeerConnectionsResponseBodyNetworkPeerConnectsNetwork;
  /**
   * @example
   * n-5q73bm****
   */
  networkId?: string;
  /**
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
  networkPeerConnects?: DescribeNetworkPeerConnectionsResponseBodyNetworkPeerConnects[];
  /**
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @example
   * 30
   */
  pageSize?: string;
  /**
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
   */
  requestId?: string;
  /**
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


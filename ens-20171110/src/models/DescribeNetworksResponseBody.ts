// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworksResponseBodyNetworksNetworkRouteTableIds extends $dara.Model {
  routeTableId?: string[];
  static names(): { [key: string]: string } {
    return {
      routeTableId: 'RouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      routeTableId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.routeTableId)) {
      $dara.Model.validateArray(this.routeTableId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworksResponseBodyNetworksNetworkSecondaryCidrBlocks extends $dara.Model {
  secondaryCidrBlock?: string[];
  static names(): { [key: string]: string } {
    return {
      secondaryCidrBlock: 'SecondaryCidrBlock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      secondaryCidrBlock: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.secondaryCidrBlock)) {
      $dara.Model.validateArray(this.secondaryCidrBlock);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworksResponseBodyNetworksNetworkTagsTag extends $dara.Model {
  key?: string;
  /**
   * @deprecated
   */
  tagKey?: string;
  /**
   * @deprecated
   */
  tagValue?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      tagKey: 'string',
      tagValue: 'string',
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

export class DescribeNetworksResponseBodyNetworksNetworkTags extends $dara.Model {
  tag?: DescribeNetworksResponseBodyNetworksNetworkTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeNetworksResponseBodyNetworksNetworkTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworksResponseBodyNetworksNetworkVSwitchIds extends $dara.Model {
  vSwitchId?: string[];
  static names(): { [key: string]: string } {
    return {
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vSwitchId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.vSwitchId)) {
      $dara.Model.validateArray(this.vSwitchId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworksResponseBodyNetworksNetwork extends $dara.Model {
  cidrBlock?: string;
  createdTime?: string;
  description?: string;
  ensRegionId?: string;
  gatewayRouteTableId?: string;
  networkAclId?: string;
  networkId?: string;
  networkName?: string;
  routeTableId?: string;
  routeTableIds?: DescribeNetworksResponseBodyNetworksNetworkRouteTableIds;
  routerTableId?: string;
  secondaryCidrBlocks?: DescribeNetworksResponseBodyNetworksNetworkSecondaryCidrBlocks;
  status?: string;
  tags?: DescribeNetworksResponseBodyNetworksNetworkTags;
  vSwitchIds?: DescribeNetworksResponseBodyNetworksNetworkVSwitchIds;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      createdTime: 'CreatedTime',
      description: 'Description',
      ensRegionId: 'EnsRegionId',
      gatewayRouteTableId: 'GatewayRouteTableId',
      networkAclId: 'NetworkAclId',
      networkId: 'NetworkId',
      networkName: 'NetworkName',
      routeTableId: 'RouteTableId',
      routeTableIds: 'RouteTableIds',
      routerTableId: 'RouterTableId',
      secondaryCidrBlocks: 'SecondaryCidrBlocks',
      status: 'Status',
      tags: 'Tags',
      vSwitchIds: 'VSwitchIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      createdTime: 'string',
      description: 'string',
      ensRegionId: 'string',
      gatewayRouteTableId: 'string',
      networkAclId: 'string',
      networkId: 'string',
      networkName: 'string',
      routeTableId: 'string',
      routeTableIds: DescribeNetworksResponseBodyNetworksNetworkRouteTableIds,
      routerTableId: 'string',
      secondaryCidrBlocks: DescribeNetworksResponseBodyNetworksNetworkSecondaryCidrBlocks,
      status: 'string',
      tags: DescribeNetworksResponseBodyNetworksNetworkTags,
      vSwitchIds: DescribeNetworksResponseBodyNetworksNetworkVSwitchIds,
    };
  }

  validate() {
    if(this.routeTableIds && typeof (this.routeTableIds as any).validate === 'function') {
      (this.routeTableIds as any).validate();
    }
    if(this.secondaryCidrBlocks && typeof (this.secondaryCidrBlocks as any).validate === 'function') {
      (this.secondaryCidrBlocks as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    if(this.vSwitchIds && typeof (this.vSwitchIds as any).validate === 'function') {
      (this.vSwitchIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworksResponseBodyNetworks extends $dara.Model {
  network?: DescribeNetworksResponseBodyNetworksNetwork[];
  static names(): { [key: string]: string } {
    return {
      network: 'Network',
    };
  }

  static types(): { [key: string]: any } {
    return {
      network: { 'type': 'array', 'itemType': DescribeNetworksResponseBodyNetworksNetwork },
    };
  }

  validate() {
    if(Array.isArray(this.network)) {
      $dara.Model.validateArray(this.network);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNetworksResponseBody extends $dara.Model {
  networks?: DescribeNetworksResponseBodyNetworks;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries in the list.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      networks: 'Networks',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networks: DescribeNetworksResponseBodyNetworks,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.networks && typeof (this.networks as any).validate === 'function') {
      (this.networks as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


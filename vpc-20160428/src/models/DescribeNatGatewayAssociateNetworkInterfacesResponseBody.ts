// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNatGatewayAssociateNetworkInterfacesResponseBodyAssociateNetworkInterfacesAssociateNetworkInterfaceIPv4SetsIPv4Set extends $dara.Model {
  IPv4Address?: string;
  primary?: boolean;
  static names(): { [key: string]: string } {
    return {
      IPv4Address: 'IPv4Address',
      primary: 'Primary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IPv4Address: 'string',
      primary: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatGatewayAssociateNetworkInterfacesResponseBodyAssociateNetworkInterfacesAssociateNetworkInterfaceIPv4Sets extends $dara.Model {
  IPv4Set?: DescribeNatGatewayAssociateNetworkInterfacesResponseBodyAssociateNetworkInterfacesAssociateNetworkInterfaceIPv4SetsIPv4Set[];
  static names(): { [key: string]: string } {
    return {
      IPv4Set: 'IPv4Set',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IPv4Set: { 'type': 'array', 'itemType': DescribeNatGatewayAssociateNetworkInterfacesResponseBodyAssociateNetworkInterfacesAssociateNetworkInterfaceIPv4SetsIPv4Set },
    };
  }

  validate() {
    if(Array.isArray(this.IPv4Set)) {
      $dara.Model.validateArray(this.IPv4Set);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatGatewayAssociateNetworkInterfacesResponseBodyAssociateNetworkInterfacesAssociateNetworkInterface extends $dara.Model {
  IPv4Sets?: DescribeNatGatewayAssociateNetworkInterfacesResponseBodyAssociateNetworkInterfacesAssociateNetworkInterfaceIPv4Sets;
  networkInterfaceId?: string;
  resourceId?: string;
  resourceOwnerId?: string;
  resourceType?: string;
  resourceVpcId?: string;
  tunnelIndex?: string;
  static names(): { [key: string]: string } {
    return {
      IPv4Sets: 'IPv4Sets',
      networkInterfaceId: 'NetworkInterfaceId',
      resourceId: 'ResourceId',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      resourceVpcId: 'ResourceVpcId',
      tunnelIndex: 'TunnelIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IPv4Sets: DescribeNatGatewayAssociateNetworkInterfacesResponseBodyAssociateNetworkInterfacesAssociateNetworkInterfaceIPv4Sets,
      networkInterfaceId: 'string',
      resourceId: 'string',
      resourceOwnerId: 'string',
      resourceType: 'string',
      resourceVpcId: 'string',
      tunnelIndex: 'string',
    };
  }

  validate() {
    if(this.IPv4Sets && typeof (this.IPv4Sets as any).validate === 'function') {
      (this.IPv4Sets as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatGatewayAssociateNetworkInterfacesResponseBodyAssociateNetworkInterfaces extends $dara.Model {
  associateNetworkInterface?: DescribeNatGatewayAssociateNetworkInterfacesResponseBodyAssociateNetworkInterfacesAssociateNetworkInterface[];
  static names(): { [key: string]: string } {
    return {
      associateNetworkInterface: 'AssociateNetworkInterface',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associateNetworkInterface: { 'type': 'array', 'itemType': DescribeNatGatewayAssociateNetworkInterfacesResponseBodyAssociateNetworkInterfacesAssociateNetworkInterface },
    };
  }

  validate() {
    if(Array.isArray(this.associateNetworkInterface)) {
      $dara.Model.validateArray(this.associateNetworkInterface);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNatGatewayAssociateNetworkInterfacesResponseBody extends $dara.Model {
  associateNetworkInterfaces?: DescribeNatGatewayAssociateNetworkInterfacesResponseBodyAssociateNetworkInterfaces;
  /**
   * @remarks
   * The number of associated ENIs.
   * 
   * @example
   * 0
   */
  count?: number;
  /**
   * @remarks
   * The number of entries per page for a paged query. Valid values: **1** to **100**. Default value: **20**.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The instance ID of the VPC NAT gateway.
   * 
   * @example
   * ngw-bp1uewa15k4iy5770****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The pagination token. Valid values:
   * 
   * - If **NextToken** is empty, no subsequent query exists.
   * 
   * - If **NextToken** is returned, the value indicates the token for the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2315DEB7-5E92-423A-91F7-4C1EC9AD****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      associateNetworkInterfaces: 'AssociateNetworkInterfaces',
      count: 'Count',
      maxResults: 'MaxResults',
      natGatewayId: 'NatGatewayId',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associateNetworkInterfaces: DescribeNatGatewayAssociateNetworkInterfacesResponseBodyAssociateNetworkInterfaces,
      count: 'number',
      maxResults: 'number',
      natGatewayId: 'string',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.associateNetworkInterfaces && typeof (this.associateNetworkInterfaces as any).validate === 'function') {
      (this.associateNetworkInterfaces as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


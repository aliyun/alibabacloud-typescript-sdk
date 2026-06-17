// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityProxyResourcesResponseBodyResourceListVpcListNatGatewaysNatRouteEntryList extends $dara.Model {
  /**
   * @remarks
   * The destination CIDR block.
   * 
   * @example
   * 10.0.70.XX/24
   */
  destinationCidr?: string;
  /**
   * @remarks
   * The ID of the next hop.
   * 
   * @example
   * ngw-2zey0w2u02u1x584m****
   */
  nextHopId?: string;
  /**
   * @remarks
   * The network type of the next hop.
   * 
   * @example
   * NatGateway
   */
  nextHopType?: string;
  /**
   * @remarks
   * The ID of the route table.
   * 
   * @example
   * vtb-2ze409pp09d994a****
   */
  routeTableId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidr: 'DestinationCidr',
      nextHopId: 'NextHopId',
      nextHopType: 'NextHopType',
      routeTableId: 'RouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidr: 'string',
      nextHopId: 'string',
      nextHopType: 'string',
      routeTableId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityProxyResourcesResponseBodyResourceListVpcListNatGateways extends $dara.Model {
  /**
   * @remarks
   * The status of the NAT Gateway.
   * 
   * @example
   * Available
   */
  detail?: string;
  /**
   * @remarks
   * The ID of the NAT Gateway.
   * 
   * @example
   * ngw-bp1bm0k2t8i6ooxu****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The name of the NAT Gateway.
   * 
   * @example
   * ngw-test
   */
  natGatewayName?: string;
  /**
   * @remarks
   * The list of NAT route tables.
   */
  natRouteEntryList?: DescribeSecurityProxyResourcesResponseBodyResourceListVpcListNatGatewaysNatRouteEntryList[];
  /**
   * @remarks
   * The status of the NAT Gateway.
   * 
   * @example
   * Available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      natGatewayId: 'NatGatewayId',
      natGatewayName: 'NatGatewayName',
      natRouteEntryList: 'NatRouteEntryList',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      natGatewayId: 'string',
      natGatewayName: 'string',
      natRouteEntryList: { 'type': 'array', 'itemType': DescribeSecurityProxyResourcesResponseBodyResourceListVpcListNatGatewaysNatRouteEntryList },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.natRouteEntryList)) {
      $dara.Model.validateArray(this.natRouteEntryList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityProxyResourcesResponseBodyResourceListVpcList extends $dara.Model {
  /**
   * @remarks
   * The IPv4 CIDR block of the VPC.
   * 
   * @example
   * 192.168.0.0/16
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The UID of the member account.
   * 
   * @example
   * 157862808111****
   */
  memberUid?: string;
  /**
   * @remarks
   * The list of NAT gateways.
   */
  natGateways?: DescribeSecurityProxyResourcesResponseBodyResourceListVpcListNatGateways[];
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-8vbuzirdl3w1r7exw****
   */
  vpcId?: string;
  /**
   * @remarks
   * The name of the VPC.
   * 
   * @example
   * vpc-wz94a4q37rgl7g****
   */
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      memberUid: 'MemberUid',
      natGateways: 'NatGateways',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      memberUid: 'string',
      natGateways: { 'type': 'array', 'itemType': DescribeSecurityProxyResourcesResponseBodyResourceListVpcListNatGateways },
      vpcId: 'string',
      vpcName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.natGateways)) {
      $dara.Model.validateArray(this.natGateways);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityProxyResourcesResponseBodyResourceList extends $dara.Model {
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionNo?: string;
  /**
   * @remarks
   * The list of VPCs.
   */
  vpcList?: DescribeSecurityProxyResourcesResponseBodyResourceListVpcList[];
  static names(): { [key: string]: string } {
    return {
      regionNo: 'RegionNo',
      vpcList: 'VpcList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionNo: 'string',
      vpcList: { 'type': 'array', 'itemType': DescribeSecurityProxyResourcesResponseBodyResourceListVpcList },
    };
  }

  validate() {
    if(Array.isArray(this.vpcList)) {
      $dara.Model.validateArray(this.vpcList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityProxyResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A8E8D50E-9F45-5662-B116-A1D0807F****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of resources.
   */
  resourceList?: DescribeSecurityProxyResourcesResponseBodyResourceList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceList: 'ResourceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceList: { 'type': 'array', 'itemType': DescribeSecurityProxyResourcesResponseBodyResourceList },
    };
  }

  validate() {
    if(Array.isArray(this.resourceList)) {
      $dara.Model.validateArray(this.resourceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


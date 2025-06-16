// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNatGatewayAssociateNetworkInterfacesResponseBodyAssociateNetworkInterfaces } from "./DescribeNatGatewayAssociateNetworkInterfacesResponseBodyAssociateNetworkInterfaces";


export class DescribeNatGatewayAssociateNetworkInterfacesResponseBody extends $dara.Model {
  associateNetworkInterfaces?: DescribeNatGatewayAssociateNetworkInterfacesResponseBodyAssociateNetworkInterfaces;
  count?: number;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * ngw-bp1uewa15k4iy5770****
   */
  natGatewayId?: string;
  /**
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @example
   * 2315DEB7-5E92-423A-91F7-4C1EC9AD****
   */
  requestId?: string;
  /**
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


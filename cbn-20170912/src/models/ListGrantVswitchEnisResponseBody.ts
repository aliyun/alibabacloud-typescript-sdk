// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGrantVSwitchEnisResponseBodyGrantVSwitchEnis extends $dara.Model {
  /**
   * @remarks
   * The description of the elastic network interfaces (ENIs). This describes the network interface controller (NIC).
   * 
   * @example
   * created by CBN
   */
  description?: string;
  /**
   * @remarks
   * The ID of the elastic network interfaces (ENIs). This is the network interface controller (NIC) identifier.
   * 
   * @example
   * eni-p0w172vv82kxzb49****
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The name of the elastic network interfaces (ENIs). This is the network interface controller (NIC) name.
   * 
   * @example
   * my-eni-name
   */
  networkInterfaceName?: string;
  /**
   * @remarks
   * The primary private IP IPv4 address of the elastic network interfaces (ENIs). This is the network interface controller (NIC) primary private IP address.
   * 
   * @example
   * ``192.168.**.**``
   */
  primaryIpAddress?: string;
  /**
   * @remarks
   * Indicates whether the elastic network interface (ENI) is created by a transit router for routing and forwarding purposes.
   * 
   * - **true**: The ENI is created by a transit router.
   * - **false**: The ENI is not created by a transit router.
   * 
   * Elastic network interfaces (ENIs) created by transit routers cannot serve as multicast sources or multicast members.
   * 
   * @example
   * false
   */
  transitRouterFlag?: boolean;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-p0w9s2ig1jnwgrbzl****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC-connected instance ID.
   * 
   * @example
   * vpc-p0w9alkte4w2htrqe****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      networkInterfaceId: 'NetworkInterfaceId',
      networkInterfaceName: 'NetworkInterfaceName',
      primaryIpAddress: 'PrimaryIpAddress',
      transitRouterFlag: 'TransitRouterFlag',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      networkInterfaceId: 'string',
      networkInterfaceName: 'string',
      primaryIpAddress: 'string',
      transitRouterFlag: 'boolean',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGrantVSwitchEnisResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of network interface controller (NIC) information.
   */
  grantVSwitchEnis?: ListGrantVSwitchEnisResponseBodyGrantVSwitchEnis[];
  /**
   * @remarks
   * The maximum number of entries returned for this query.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token returned for this query.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DBFE1736-2F33-5309-9954-875B11E9519D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * >Notice: When you use the MaxResults and NextToken parameters for paging, the returned Total parameter value is meaningless.
   * 
   * @example
   * 6
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      grantVSwitchEnis: 'GrantVSwitchEnis',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      grantVSwitchEnis: { 'type': 'array', 'itemType': ListGrantVSwitchEnisResponseBodyGrantVSwitchEnis },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.grantVSwitchEnis)) {
      $dara.Model.validateArray(this.grantVSwitchEnis);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


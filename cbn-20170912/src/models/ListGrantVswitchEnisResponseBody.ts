// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGrantVSwitchEnisResponseBodyGrantVSwitchEnis extends $dara.Model {
  /**
   * @remarks
   * The description of the ENI.
   * 
   * @example
   * created by CBN
   */
  description?: string;
  /**
   * @remarks
   * The ID of the ENI.
   * 
   * @example
   * eni-p0w172vv82kxzb49****
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The name of the ENI.
   * 
   * @example
   * my-eni-name
   */
  networkInterfaceName?: string;
  /**
   * @remarks
   * The primary private IPv4 address of the ENI.
   * 
   * @example
   * ``192.168.**.**``
   */
  primaryIpAddress?: string;
  /**
   * @remarks
   * Indicates whether the ENI is created by a transit router.
   * 
   * - **true**: The ENI is created by a transit router.
   * 
   * - **false**: The ENI is not created by a transit router.
   * 
   * ENIs created by transit routers cannot be used as multicast sources or members.
   * 
   * @example
   * false
   */
  transitRouterFlag?: boolean;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-p0w9s2ig1jnwgrbzl****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC.
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
   * A list of ENI information.
   */
  grantVSwitchEnis?: ListGrantVSwitchEnisResponseBodyGrantVSwitchEnis[];
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used for the next query.
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
   * The total number of entries.
   * 
   * >Notice: 
   * 
   * This parameter is invalid if you use MaxResults and NextToken to perform a paged query.
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGrantVSwitchEnisResponseBodyGrantVSwitchEnis extends $dara.Model {
  /**
   * @remarks
   * The ENI description.
   * 
   * @example
   * created by CBN
   */
  description?: string;
  /**
   * @remarks
   * The ENI ID.
   * 
   * @example
   * eni-p0w172vv82kxzb49****
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The ENI name.
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
   * 192.168.XX.XX
   */
  primaryIpAddress?: string;
  /**
   * @remarks
   * Indicates whether the ENI is created by a transit router. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * ENIs that are created by transit routers cannot be used as multicast sources or members.
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
   * The VPC ID.
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
   * The information about the ENI.
   */
  grantVSwitchEnis?: ListGrantVSwitchEnisResponseBodyGrantVSwitchEnis[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The returned value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DBFE1736-2F33-5309-9954-875B11E9519D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * > If MaxResults and NextToken are sued to query results by page, ignore this parameter.
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


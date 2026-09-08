// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGrantVSwitchEnisRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the CEN instance to which the VPC-connected instance is connected.
   * 
   * This parameter is required.
   * 
   * @example
   * cen-a7syd349kne38g****
   */
  cenId?: string;
  /**
   * @remarks
   * The maximum number of entries per page for a paged query. Valid values: 10 to 500.
   * 
   * Default value:
   * - If you do not set this parameter, the default value is 20.
   * - If the value you set is greater than 500, the default value is 500.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The IDs of network interface controllers (NICs).
   */
  networkInterfaceId?: string[];
  /**
   * @remarks
   * The name of the elastic network interfaces (ENIs). You can use this parameter to filter network interface controllers (NICs) by name.
   * 
   * @example
   * test-eni-name
   */
  networkInterfaceName?: string;
  /**
   * @remarks
   * The token for the next query. Valid values:
   * 
   * - If this is the first query or no next query exists, leave this parameter empty.
   * - If a next query exists, set this parameter to the NextToken value returned by the previous API call.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The primary private IP IPv4 address of the elastic network interfaces (ENIs). You can use this parameter to filter network interface controllers (NICs) by primary private IP address.
   * 
   * @example
   * ``192.168.**.**``
   */
  primaryIpAddress?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of a vSwitch in the VPC-connected instance.
   * 
   * You can query network interface controller (NIC) information for only one vSwitch at a time.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-p0w9s2ig1jnwgrbzl****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC-connected instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-p0w9alkte4w2htrqe****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      maxResults: 'MaxResults',
      networkInterfaceId: 'NetworkInterfaceId',
      networkInterfaceName: 'NetworkInterfaceName',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      primaryIpAddress: 'PrimaryIpAddress',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      maxResults: 'number',
      networkInterfaceId: { 'type': 'array', 'itemType': 'string' },
      networkInterfaceName: 'string',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      primaryIpAddress: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.networkInterfaceId)) {
      $dara.Model.validateArray(this.networkInterfaceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


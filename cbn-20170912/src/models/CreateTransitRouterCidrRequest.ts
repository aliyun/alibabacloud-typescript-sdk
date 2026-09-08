// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTransitRouterCidrRequest extends $dara.Model {
  /**
   * @remarks
   * The transit router CIDR block.
   * 
   * This parameter is required.
   * 
   * @example
   * 192.168.10.0/24
   */
  cidr?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the transit router CIDR block.
   * 
   * The description can be empty or 1 to 256 characters in length, and cannot start with http:// or https://.
   * 
   * @example
   * desctest
   */
  description?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run. The system checks the required parameters, request syntax, and limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * - **false** (default): performs a dry run and sends the request. If the request passes the dry run, the transit router CIDR block is created.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The name of the transit router CIDR block.
   * 
   * The name can be empty or 1 to 128 characters in length, and cannot start with http:// or https://.
   * 
   * @example
   * nametest
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * Specifies whether to allow the system to automatically add a route for the transit router CIDR block to the transit router route table.
   * 
   * - **true** (default): allows the system to automatically add a route.
   *        
   *      If you select this option, after you create a VPN connection of the private gateway type and create a route learning relationship for the VPN connection, the system automatically adds a route entry to the transit router route table that has a route learning relationship with the VPN connection:
   *    
   *   A blackhole route whose destination CIDR block is the transit router CIDR block from which gateway IP addresses are allocated to IPsec connections. This blackhole route is propagated only to the route tables of Virtual Border Router (VBR) instances associated with the transit router.
   * - **false**: does not allow the system to automatically add a route.
   * 
   * @example
   * true
   */
  publishCidrRoute?: boolean;
  /**
   * @remarks
   * The region ID of the transit router.
   * 
   * You can call the [DescribeChildInstanceRegions](https://help.aliyun.com/document_detail/132080.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The transit routing instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * tr-p0w3x8c9em72a40nw****
   */
  transitRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      clientToken: 'ClientToken',
      description: 'Description',
      dryRun: 'DryRun',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      publishCidrRoute: 'PublishCidrRoute',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transitRouterId: 'TransitRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      clientToken: 'string',
      description: 'string',
      dryRun: 'boolean',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      publishCidrRoute: 'boolean',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transitRouterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


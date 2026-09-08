// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTransitRouterCidrRequest extends $dara.Model {
  /**
   * @remarks
   * The new transit router CIDR block.
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
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426****
   */
  clientToken?: string;
  /**
   * @remarks
   * The new description of the transit router CIDR block.
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
   * - **true**: performs a dry run without modifying the transit router CIDR block. The system checks the required parameters, request syntax, and business restrictions. If the request fails the dry run, the corresponding error is returned. If the request passes the dry run, the error code `DryRunOperation` is returned.
   * - **false** (default): performs a dry run and sends the request. If the request passes the dry run, the transit router CIDR block is modified.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The new name of the transit router CIDR block.
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
   * - **true**: allowed.
   *        
   *      If you select allowed, after you create a VPN connection of the private gateway type and create a route learning relationship for the VPN connection, the system automatically adds a route entry to the transit router route table that has a route learning relationship with the VPN connection. The route entry is a blackhole route whose destination CIDR block is the transit router CIDR block from which gateway IP addresses have been allocated for the IPsec connection.
   *         The blackhole route is propagated only to the route tables of Virtual Border Router (VBR) instances associated with the transit router.
   * - **false**: not allowed.
   * 
   * @example
   * true
   */
  publishCidrRoute?: boolean;
  /**
   * @remarks
   * The ID of the region where the transit router instance is deployed.
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
   * The ID of the transit router CIDR block.
   * 
   * You can call the [ListTransitRouterCidr](https://help.aliyun.com/document_detail/462772.html) operation to query the transit router CIDR block ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cidr-0zv0q9crqpntzz****
   */
  transitRouterCidrId?: string;
  /**
   * @remarks
   * The transit router instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * tr-gw8ergozrv77rtbjd****
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
      transitRouterCidrId: 'TransitRouterCidrId',
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
      transitRouterCidrId: 'string',
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


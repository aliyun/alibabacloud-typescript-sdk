// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTransitRouterRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource.
   * 
   * The tag key cannot be an empty string. The tag key can be up to 64 characters in length, and cannot start with `aliyun` or `acs:`. The tag key cannot contain `http://` or `https://`.
   * 
   * You can specify up to 20 tag keys at a time.
   * 
   * @example
   * tagtest
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource.
   * 
   * The tag value cannot be empty. The tag value can be up to 128 characters in length, and cannot start with `aliyun` or `acs:`. The tag value cannot contain `http://` or `https://`.
   * 
   * Each tag key corresponds to a tag value. You can specify up to 20 tag values at a time.
   * 
   * @example
   * TagValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class CreateTransitRouterRequestTransitRouterCidrList extends $dara.Model {
  /**
   * @remarks
   * The transit router CIDR block.
   * 
   * @example
   * 192.168.10.0/24
   */
  cidr?: string;
  /**
   * @remarks
   * The description of the transit router CIDR block.
   * 
   * The description must be 1 to 256 characters in length.
   * 
   * @example
   * desctest
   */
  description?: string;
  /**
   * @remarks
   * The name of the transit router CIDR block.
   * 
   * The name must be 1 to 128 characters in length.
   * 
   * @example
   * nametest
   */
  name?: string;
  /**
   * @remarks
   * Specifies whether to allow the system to automatically add a route for the transit router CIDR block to the transit router route table. Valid values:
   * 
   * - **true** (default): allows the system to automatically add the route.
   *        
   *      If you select this value, after you create a VPN connection of the private network gateway type and create a route learning correlation for the VPN connection, the system automatically adds a route entry to the transit router route table that has a route learning correlation with the VPN connection:
   * 
   *     The destination CIDR block of the route is a blackhole route for the transit router CIDR block. The transit router CIDR block refers to the CIDR block to which a gateway IP address has been assigned for the IPsec connection.
   * 
   *      The blackhole route is propagated only to the route table of the Virtual Border Router (VBR) instance under the transit router.
   * - **false**: does not allow the system to automatically add the route.
   * 
   * @example
   * true
   */
  publishCidrRoute?: boolean;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      description: 'Description',
      name: 'Name',
      publishCidrRoute: 'PublishCidrRoute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      description: 'string',
      name: 'string',
      publishCidrRoute: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTransitRouterRequest extends $dara.Model {
  /**
   * @remarks
   * The Cloud Enterprise Network (CEN) instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cen-j3jzhw1zpau2km****
   */
  cenId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can generate the parameter value on your client. Make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is different.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run on the creation request. The dry run includes permission and instance status checks. Valid values:
   * 
   * - **false** (default): sends a normal request and creates the Enterprise Edition transit router instance after the request passes the check.
   * - **true**: sends a dry run request and performs only the check without creating the Enterprise Edition transit router instance. The system checks whether required parameters are specified and whether the request format is valid. If the request fails the check, the system returns an error. If the request passes the check, the system returns the error code `DryRunOperation`.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the Enterprise Edition transit router instance.
   * 
   * You can call the [DescribeChildInstanceRegions](https://help.aliyun.com/document_detail/132080.html) operation to query region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to enable the multicast feature for the Enterprise Edition transit router. Valid values:
   * 
   * - **false** (default): disables the feature.
   * - **true**: enables the feature.
   * 
   * The multicast feature is supported only by Enterprise Edition transit routers in specific regions. You can call the [ListTransitRouterAvailableResource](https://help.aliyun.com/document_detail/261356.html) operation to query the regions that support the multicast feature.
   * 
   * @example
   * false
   */
  supportMulticast?: boolean;
  /**
   * @remarks
   * The tag information.
   */
  tag?: CreateTransitRouterRequestTag[];
  /**
   * @remarks
   * The transit router CIDR blocks.
   */
  transitRouterCidrList?: CreateTransitRouterRequestTransitRouterCidrList[];
  /**
   * @remarks
   * The description of the Enterprise Edition transit router instance.
   * 
   * The description can be empty or 1 to 256 characters in length, and cannot start with http:// or https://.
   * 
   * @example
   * testdesc
   */
  transitRouterDescription?: string;
  /**
   * @remarks
   * The name of the Enterprise Edition transit router instance.
   * 
   * The name can be empty or 1 to 128 characters in length, and cannot start with http:// or https://.
   * 
   * @example
   * testname
   */
  transitRouterName?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      supportMulticast: 'SupportMulticast',
      tag: 'Tag',
      transitRouterCidrList: 'TransitRouterCidrList',
      transitRouterDescription: 'TransitRouterDescription',
      transitRouterName: 'TransitRouterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      supportMulticast: 'boolean',
      tag: { 'type': 'array', 'itemType': CreateTransitRouterRequestTag },
      transitRouterCidrList: { 'type': 'array', 'itemType': CreateTransitRouterRequestTransitRouterCidrList },
      transitRouterDescription: 'string',
      transitRouterName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    if(Array.isArray(this.transitRouterCidrList)) {
      $dara.Model.validateArray(this.transitRouterCidrList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


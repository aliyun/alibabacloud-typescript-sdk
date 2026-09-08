// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTransitRouterRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource.
   * 
   * Once specified, the tag key cannot be an empty string. The tag key can be up to 64 characters in length, and cannot start with `aliyun` or `acs:`, or contain `http://` or `https://`.
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
   * Once specified, the tag value cannot be empty. The tag value can be up to 128 characters in length, and cannot start with aliyun or acs:, or contain http:// or https://.
   * 
   * Each tag key corresponds to one tag value. You can specify up to 20 tag values at a time.
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
   * Specifies whether to allow the system to automatically add a route for the transit router CIDR block to the transit router route table.
   * 
   * - **true** (default): allows the system.
   *        
   *      If you select true, after you create a VPN connection of the private gateway type and create a route learning relationship for the VPN connection, the system automatically adds the following route entry to the transit router route table that has a route learning relationship with the VPN connection:
   * 
   *     A blackhole route whose destination CIDR block is the transit router CIDR block from which gateway IP addresses are allocated for the IPsec connection.
   * 
   *      The blackhole route is propagated only to the route tables of virtual border router (VBR) instances connected to the transit router.
   * - **false**: does not allow the system.
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
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to execute a dry run, without performing the actual request. The dry run includes permission verification, instance status verification, and forwarding and routing checks. Valid values:
   * 
   * - **false** (default): sends a normal request and creates the Enterprise Edition transit router instance after the request passes the check.
   * - **true**: sends a check request, without creating the Enterprise Edition transit router instance. The system checks the required parameters, request format, and service limits. If the check fails, the corresponding error is returned. If the check succeeds, the error code `DryRunOperation` is returned.
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
   * You can call the [DescribeChildInstanceRegions](https://help.aliyun.com/document_detail/132080.html) operation to query the region ID.
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
   * - **false** (default): disables the multicast feature.
   * - **true**: enables the multicast feature.
   * 
   * Only Enterprise Edition transit routers in some regions support the multicast feature. You can call the [ListTransitRouterAvailableResource](https://help.aliyun.com/document_detail/261356.html) operation to query the regions that support the multicast feature.
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
   * The list of transit router CIDR blocks.
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


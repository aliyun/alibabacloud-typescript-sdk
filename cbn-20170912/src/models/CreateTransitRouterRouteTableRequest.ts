// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTransitRouterRouteTableRequestRouteTableOptions extends $dara.Model {
  /**
   * @remarks
   * The multi-region equal-cost multi-path (ECMP) routing setting. Valid values:
   * - **disable** (default): disables multi-region ECMP routing. After multi-region ECMP routing is disabled, routes with the same prefix learned from different regions prefer the transit router whose Region ID is the smallest (sorted alphabetically) as the next hop when other route attributes are the same. This may change traffic latency and bandwidth consumption between regions. Make sure that you fully evaluate the impact before disabling this feature.
   * - **enable**: enables multi-region ECMP routing. After multi-region ECMP routing is enabled, routes with the same prefix learned from different regions form ECMP routes when other route attributes are the same. This may change traffic latency and bandwidth consumption between regions. Make sure that you fully evaluate the impact before enabling this feature.
   * 
   * @example
   * disable
   */
  multiRegionECMP?: string;
  static names(): { [key: string]: string } {
    return {
      multiRegionECMP: 'MultiRegionECMP',
    };
  }

  static types(): { [key: string]: any } {
    return {
      multiRegionECMP: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTransitRouterRouteTableRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource.
   * 
   * Once specified, the tag key cannot be an empty string. The tag key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * You can specify up to 20 tag keys at a time.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource.
   * 
   * Once specified, the tag value cannot be empty. The tag value can be up to 128 characters in length and cannot start with aliyun or acs:. It cannot contain http:// or https://.
   * 
   * Each tag key corresponds to one tag value. You can specify up to 20 tag values at a time.
   * 
   * @example
   * tagtest
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

export class CreateTransitRouterRouteTableRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run, including permission and instance status verification. Valid values:
   * 
   * - **false** (default): sends a normal request and creates the custom route table after the request passes the verification.
   * - **true**: sends a check request without creating the custom route table. The system checks the required parameters, request format, and other conditions. If the check fails, the corresponding error is returned. If the check passes, the corresponding request ID is returned.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The route table options.
   */
  routeTableOptions?: CreateTransitRouterRouteTableRequestRouteTableOptions;
  /**
   * @remarks
   * The tag information.
   * 
   * You can specify up to 20 tags at a time.
   */
  tag?: CreateTransitRouterRouteTableRequestTag[];
  /**
   * @remarks
   * The ID of the Enterprise Edition transit router instance.
   * 
   * This parameter is required.
   * 
   * @example
   * tr-bp1su1ytdxtataupl****
   */
  transitRouterId?: string;
  /**
   * @remarks
   * The description of the custom route table.
   * 
   * The description can be empty or 1 to 256 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * testdesc
   */
  transitRouterRouteTableDescription?: string;
  /**
   * @remarks
   * The name of the custom route table.
   * 
   * The name can be empty or 1 to 128 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * testname
   */
  transitRouterRouteTableName?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeTableOptions: 'RouteTableOptions',
      tag: 'Tag',
      transitRouterId: 'TransitRouterId',
      transitRouterRouteTableDescription: 'TransitRouterRouteTableDescription',
      transitRouterRouteTableName: 'TransitRouterRouteTableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeTableOptions: CreateTransitRouterRouteTableRequestRouteTableOptions,
      tag: { 'type': 'array', 'itemType': CreateTransitRouterRouteTableRequestTag },
      transitRouterId: 'string',
      transitRouterRouteTableDescription: 'string',
      transitRouterRouteTableName: 'string',
    };
  }

  validate() {
    if(this.routeTableOptions && typeof (this.routeTableOptions as any).validate === 'function') {
      (this.routeTableOptions as any).validate();
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


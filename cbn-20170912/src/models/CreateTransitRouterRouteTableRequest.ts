// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTransitRouterRouteTableRequestRouteTableOptions extends $dara.Model {
  /**
   * @remarks
   * The multi-region equal-cost multi-path (ECMP) routing feature. Valid values:
   * 
   * - **disable** (default): disables the multi-region ECMP routing feature. If you disable the multi-region ECMP routing feature, routes that are learned from different regions but have the same prefix and attributes select the transit router with the smallest region ID as the next hop. The region ID is sorted in alphabetical order. In this case, the latency and bandwidth consumption of the traffic may change. Make sure that you are aware of the impact before you disable the feature.
   * 
   * - **enable**: enables the multi-region ECMP routing feature. If you enable the multi-region ECMP routing feature, routes that are learned from different regions but have the same prefix and attributes are considered ECMP routes. In this case, the latency and bandwidth consumption of the traffic may change. Make sure that you are aware of the impact before you enable the feature.
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
   * The tag key cannot be an empty string. The tag key can be up to 64 characters in length and cannot start with \\`aliyun\\` or \\`acs:\\`. It cannot contain \\`http\\://\\` or \\`https\\://\\`.
   * 
   * You can specify up to 20 tag keys.
   * 
   * @example
   * test
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource.
   * 
   * The tag value can be an empty string or a string of up to 128 characters. It cannot start with \\`aliyun\\` or \\`acs:\\` and cannot contain \\`http\\://\\` or \\`https\\://\\`.
   * 
   * Each tag key must have a unique tag value. You can specify up to 20 tag values.
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
   * Generate a token from your client to ensure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the request as the **ClientToken**. The **RequestId** of each request is different.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - **true**: performs a dry run. The system checks the request for potential issues, including required parameters, request format, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the DryRunOperation error code is returned.
   * 
   * - **false** (default): performs a dry run and sends the request. If the request passes the dry run, a custom route table is created.
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
   * The features of the route table.
   */
  routeTableOptions?: CreateTransitRouterRouteTableRequestRouteTableOptions;
  /**
   * @remarks
   * The tag.
   * 
   * You can specify up to 20 tags in each call.
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
   * The description can be empty or 1 to 256 characters in length. It cannot start with \\`http\\://\\` or \\`https\\://\\`.
   * 
   * @example
   * testdesc
   */
  transitRouterRouteTableDescription?: string;
  /**
   * @remarks
   * The name of the custom route table.
   * 
   * The name can be empty or 1 to 128 characters in length. It cannot start with \\`http\\://\\` or \\`https\\://\\`.
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


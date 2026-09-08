// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTransitRouterRouteTableRequestRouteTableOptions extends $dara.Model {
  /**
   * @remarks
   * Multi-region equal-cost multi-path (ECMP) routing. Valid values:
   * - **disable**: Disables multi-region ECMP routing. After multi-region ECMP routing is disabled, routes with the same prefix learned from different regions will prefer the transit router (TR) with the smallest Region ID (sorted alphabetically) as the next hop when other route attributes are the same. In this case, the traffic latency and bandwidth consumed between different regions may change. Make sure that you have fully evaluated the impact before disabling this feature.
   * - **enable**: Enables multi-region ECMP routing. After multi-region ECMP routing is enabled, routes with the same prefix learned from different regions will form equal-cost routes when other route attributes are the same. In this case, the traffic latency and bandwidth consumed between different regions may change. Make sure that you have fully evaluated the impact before enabling this feature.
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

export class UpdateTransitRouterRouteTableRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The ClientToken value can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** of each API request is different.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run, including permission and instance status verification. Valid values:
   * 
   * - **false** (default): Sends a normal request. If the request passes the check, the name and description of the route table are modified.
   * - **true**: Sends a check request. Only the validation is performed, and the name and description of the route table are not modified. The check items include whether required parameters are specified and the request format. If the check fails, the corresponding error is returned. If the check passes, the error code `DryRunOperation` is returned.
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
   * The route table feature options.
   */
  routeTableOptions?: UpdateTransitRouterRouteTableRequestRouteTableOptions;
  /**
   * @remarks
   * The description of the route table.
   * 
   * The description can be empty or 1 to 256 characters in length and cannot start with http:// or https://.
   * 
   * @example
   * testdesc
   */
  transitRouterRouteTableDescription?: string;
  /**
   * @remarks
   * The ID of the Enterprise Edition transit router route table.
   * 
   * This parameter is required.
   * 
   * @example
   * vtb-bp1dudbh2d5na6b50****
   */
  transitRouterRouteTableId?: string;
  /**
   * @remarks
   * The name of the route table.
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
      transitRouterRouteTableDescription: 'TransitRouterRouteTableDescription',
      transitRouterRouteTableId: 'TransitRouterRouteTableId',
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
      routeTableOptions: UpdateTransitRouterRouteTableRequestRouteTableOptions,
      transitRouterRouteTableDescription: 'string',
      transitRouterRouteTableId: 'string',
      transitRouterRouteTableName: 'string',
    };
  }

  validate() {
    if(this.routeTableOptions && typeof (this.routeTableOptions as any).validate === 'function') {
      (this.routeTableOptions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


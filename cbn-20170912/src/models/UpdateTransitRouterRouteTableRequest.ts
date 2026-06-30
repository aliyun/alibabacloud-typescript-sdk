// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTransitRouterRouteTableRequestRouteTableOptions extends $dara.Model {
  /**
   * @remarks
   * The multi-region ECMP routing feature. Valid values:
   * 
   * - **disable**: Disables multi-region ECMP routing. After you disable this feature, if routes with the same prefix are learned from different regions and have the same attributes, the route that is learned from the region with the alphabetically smallest ID is used as the next hop. This may change traffic latency and inter-region bandwidth consumption. Evaluate the impact before you disable this feature.
   * 
   * - **enable**: Enables multi-region ECMP routing. After you enable this feature, if routes with the same prefix are learned from different regions and have the same attributes, ECMP routes are formed. This may change traffic latency and inter-region bandwidth consumption. Evaluate the impact before you enable this feature.
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
   * Generate a parameter value from your client to make sure that the value is unique among different requests. The ClientToken can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-001****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run. The dry run checks permissions and the status of the instance. Valid values:
   * 
   * - **false** (default): Sends a normal request. After the request passes the check, the name and description of the route table are modified.
   * 
   * - **true**: Sends a check request. The system checks the required parameters and the request format. If the check fails, the corresponding error is returned. If the check succeeds, the error code `DryRunOperation` is returned.
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
  routeTableOptions?: UpdateTransitRouterRouteTableRequestRouteTableOptions;
  /**
   * @remarks
   * The description of the route table.
   * 
   * The description can be empty or 1 to 256 characters in length. It cannot start with http\\:// or https\\://.
   * 
   * @example
   * testdesc
   */
  transitRouterRouteTableDescription?: string;
  /**
   * @remarks
   * The ID of the route table for the Enterprise Edition transit router.
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
   * The name can be empty or 1 to 128 characters in length. It cannot start with http\\:// or https\\://.
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


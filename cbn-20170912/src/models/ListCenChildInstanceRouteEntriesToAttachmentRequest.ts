// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCenChildInstanceRouteEntriesToAttachmentRequestRouteFilter extends $dara.Model {
  /**
   * @remarks
   * The route matching mode.
   * 
   * - **prefix-exact-match**: exact match
   * 
   * @example
   * prefix-exact-match
   */
  key?: string;
  /**
   * @remarks
   * A list of destination CIDR blocks.
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCenChildInstanceRouteEntriesToAttachmentRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the CEN instance.
   * 
   * @example
   * cen-dc4vwznpwbobrl****
   */
  cenId?: string;
  /**
   * @remarks
   * The ID of the route table of the network instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vtb-bp174d1gje79u1g4t****
   */
  childInstanceRouteTableId?: string;
  /**
   * @remarks
   * The number of entries to return on each page. The default value is **20**.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page of results.
   * 
   * - If this is your first query, leave this parameter empty.
   * 
   * - If a next query is required, set the value to the NextToken value returned from the last call.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The filter for the destination CIDR block.
   */
  routeFilter?: ListCenChildInstanceRouteEntriesToAttachmentRequestRouteFilter[];
  /**
   * @remarks
   * The type of the managed routing service. If this parameter is empty, the route is not managed. Set the value to TR. This value indicates that the route is managed by a transit router.
   * 
   * @example
   * TR
   */
  serviceType?: string;
  /**
   * @remarks
   * The ID of the network instance connection.
   * 
   * This parameter is required.
   * 
   * @example
   * tr-attach-r6g0m3epjehw57****
   */
  transitRouterAttachmentId?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      childInstanceRouteTableId: 'ChildInstanceRouteTableId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeFilter: 'RouteFilter',
      serviceType: 'ServiceType',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      childInstanceRouteTableId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeFilter: { 'type': 'array', 'itemType': ListCenChildInstanceRouteEntriesToAttachmentRequestRouteFilter },
      serviceType: 'string',
      transitRouterAttachmentId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.routeFilter)) {
      $dara.Model.validateArray(this.routeFilter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCenChildInstanceRouteEntriesToAttachmentRequestRouteFilter extends $dara.Model {
  /**
   * @remarks
   * The route match mode.
   * - **prefix-exact-match**: exact match.
   * 
   * @example
   * prefix-exact-match
   */
  key?: string;
  /**
   * @remarks
   * The list of destination CIDR blocks.
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
   * The Cloud Enterprise Network (CEN) instance ID.
   * 
   * @example
   * cen-dc4vwznpwbobrl****
   */
  cenId?: string;
  /**
   * @remarks
   * The route table ID of the network instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vtb-bp174d1gje79u1g4t****
   */
  childInstanceRouteTableId?: string;
  /**
   * @remarks
   * The number of entries per page for a paged query. Default value: **20**.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * Specifies whether a next query token (Token) exists. Valid values:
   * - You do not need to specify this parameter for the first query or if no next query exists.
   * - If a next query exists, set this parameter to the NextToken value returned by the previous API call.
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
   * The destination CIDR block filter.
   */
  routeFilter?: ListCenChildInstanceRouteEntriesToAttachmentRequestRouteFilter[];
  /**
   * @remarks
   * The type of route hosting. If this field is empty, the route is not hosted. Valid values: TR, which indicates that the hosting type is transit router.
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


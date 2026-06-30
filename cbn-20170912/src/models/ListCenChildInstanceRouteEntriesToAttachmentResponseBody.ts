// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCenChildInstanceRouteEntriesToAttachmentResponseBodyRouteEntry extends $dara.Model {
  /**
   * @remarks
   * The ID of the CEN instance.
   * 
   * @example
   * cen-9adwg6ghpq8oq4dp7q
   */
  cenId?: string;
  /**
   * @remarks
   * The ID of the route table of the network instance.
   * 
   * @example
   * vtb-bp1tlaj1c4nxr2t3e****
   */
  childInstanceRouteTableId?: string;
  /**
   * @remarks
   * The destination CIDR block of the route.
   * 
   * @example
   * 10.0.0.0/8
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The type of the managed routing service. If this parameter is empty, the route is not managed. The value TR indicates that the route is managed by a transit router.
   * 
   * @example
   * TR
   */
  serviceType?: string;
  /**
   * @remarks
   * The status of the route. Valid values:
   * 
   * - **Available**: The route is active.
   * 
   * - **Pending**: The route is being configured.
   * 
   * - **Modifying**: The route is being modified.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The ID of the network instance connection.
   * 
   * @example
   * tr-attach-y463sghkkv1loe****
   */
  transitRouterAttachmentId?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      childInstanceRouteTableId: 'ChildInstanceRouteTableId',
      destinationCidrBlock: 'DestinationCidrBlock',
      serviceType: 'ServiceType',
      status: 'Status',
      transitRouterAttachmentId: 'TransitRouterAttachmentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      childInstanceRouteTableId: 'string',
      destinationCidrBlock: 'string',
      serviceType: 'string',
      status: 'string',
      transitRouterAttachmentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCenChildInstanceRouteEntriesToAttachmentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The token that is used for the next query.
   * 
   * - If **NextToken** is empty, no subsequent query is sent.
   * 
   * - If a value is returned for **NextToken**, the value is the token that is used for the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 530BC816-F575-412A-AAB2-435125D26328
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the route.
   */
  routeEntry?: ListCenChildInstanceRouteEntriesToAttachmentResponseBodyRouteEntry[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      routeEntry: 'RouteEntry',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      routeEntry: { 'type': 'array', 'itemType': ListCenChildInstanceRouteEntriesToAttachmentResponseBodyRouteEntry },
    };
  }

  validate() {
    if(Array.isArray(this.routeEntry)) {
      $dara.Model.validateArray(this.routeEntry);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


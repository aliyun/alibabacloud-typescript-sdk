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
   * The ID of the route table configured on the network instance.
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
   * Indicates whether the route is hosted. If the parameter is empty, the route is not hosted. A value of TR indicates that the route is hosted on a transit router.
   * 
   * @example
   * TR
   */
  serviceType?: string;
  /**
   * @remarks
   * The status of the route. Valid values:
   * 
   * *   **Available**: The route is available.
   * *   **Pending**: The route is being configured.
   * *   **Modifying**: the route is being modified.
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


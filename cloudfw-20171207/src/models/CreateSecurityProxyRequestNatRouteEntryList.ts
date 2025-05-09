// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSecurityProxyRequestNatRouteEntryList extends $dara.Model {
  /**
   * @remarks
   * The destination CIDR block of the default route.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.0.0.0/0
   */
  destinationCidr?: string;
  /**
   * @remarks
   * The next hop of the original NAT gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * ngw-bp1okz6k7s4n4mnk5f1g3
   */
  nextHopId?: string;
  /**
   * @remarks
   * The network type of the next hop. Set the value to NatGateway.
   * 
   * This parameter is required.
   * 
   * @example
   * NatGateway
   */
  nextHopType?: string;
  /**
   * @remarks
   * The route table to which the default route of the NAT gateway belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * vtb-2ze13wrgz7wsu9yiqeffg
   */
  routeTableId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidr: 'DestinationCidr',
      nextHopId: 'NextHopId',
      nextHopType: 'NextHopType',
      routeTableId: 'RouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidr: 'string',
      nextHopId: 'string',
      nextHopType: 'string',
      routeTableId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


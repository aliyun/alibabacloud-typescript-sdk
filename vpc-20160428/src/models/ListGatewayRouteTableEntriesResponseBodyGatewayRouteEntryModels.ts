// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListGatewayRouteTableEntriesResponseBodyGatewayRouteEntryModelsNextHops } from "./ListGatewayRouteTableEntriesResponseBodyGatewayRouteEntryModelsNextHops";


export class ListGatewayRouteTableEntriesResponseBodyGatewayRouteEntryModels extends $dara.Model {
  /**
   * @remarks
   * The name of the route entry.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The destination CIDR block of the route.
   * 
   * @example
   * 192.168.0.5
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The name of the route entry.
   * 
   * The name must be 2 to 128 characters in length and can contain letter, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The ID of the next hop.
   * 
   * @example
   * i-bp11gcl0sm85t9bi****
   */
  nextHopId?: string;
  /**
   * @remarks
   * The type of the next hop. Valid values:
   * 
   * *   **EcsInstance**: Elastic Compute Service (ECS) instance
   * *   **NetworkInterface**: elastic network interfaces (ENIs).
   * *   **Local**: local next hop
   * 
   * @example
   * EcsInstance
   */
  nextHopType?: string;
  /**
   * @remarks
   * The information about the next hop.
   */
  nextHops?: ListGatewayRouteTableEntriesResponseBodyGatewayRouteEntryModelsNextHops[];
  /**
   * @remarks
   * The status of the route entry. Valid values:
   * 
   * *   **Pending**
   * *   **Available**
   * *   **Modifying**
   * 
   * @example
   * Available
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      destinationCidrBlock: 'DestinationCidrBlock',
      name: 'Name',
      nextHopId: 'NextHopId',
      nextHopType: 'NextHopType',
      nextHops: 'NextHops',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      destinationCidrBlock: 'string',
      name: 'string',
      nextHopId: 'string',
      nextHopType: 'string',
      nextHops: { 'type': 'array', 'itemType': ListGatewayRouteTableEntriesResponseBodyGatewayRouteEntryModelsNextHops },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nextHops)) {
      $dara.Model.validateArray(this.nextHops);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


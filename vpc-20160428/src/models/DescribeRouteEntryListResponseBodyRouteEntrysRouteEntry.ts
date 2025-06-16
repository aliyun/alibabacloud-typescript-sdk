// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRouteEntryListResponseBodyRouteEntrysRouteEntryNextHops } from "./DescribeRouteEntryListResponseBodyRouteEntrysRouteEntryNextHops";


export class DescribeRouteEntryListResponseBodyRouteEntrysRouteEntry extends $dara.Model {
  /**
   * @remarks
   * The description of the route.
   * 
   * @example
   * RouteEntryDescription
   */
  description?: string;
  /**
   * @remarks
   * The destination CIDR block of the route.
   * 
   * @example
   * 192.168.2.0/24
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The time when the route was modified. The time follows the ISO 8601 standard in the `YYYY-MM-DDThh:mm:ssZ` format. The time is displayed in UTC.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 2022-05-09T03:00:07Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The IP version. Valid values: Valid values:
   * 
   * *   **ipv4**
   * *   **ipv6**
   * 
   * @example
   * IPv4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The information about the next hops.
   */
  nextHops?: DescribeRouteEntryListResponseBodyRouteEntrysRouteEntryNextHops;
  /**
   * @remarks
   * The route origin. Valid values:
   * * **RoutePropagation**: The route is created by a dynamic propagation source.
   * * **SystemCreate**: The route is created by the system.
   * * **CustomCreate**: The route is created by a user.
   * 
   * @example
   * RoutePropagation
   */
  origin?: string;
  /**
   * @remarks
   * The ID of the route.
   * 
   * @example
   * rte-bp1mnnr2al0naomnp****
   */
  routeEntryId?: string;
  /**
   * @remarks
   * The name of the route.
   * 
   * @example
   * aaa
   */
  routeEntryName?: string;
  /**
   * @remarks
   * The ID of the route table.
   * 
   * @example
   * vtb-bp15w5q90d2rk3bww****
   */
  routeTableId?: string;
  /**
   * @remarks
   * Indicates whether the route is hosted. If the parameter is empty, the route is not hosted.
   * 
   * If **TR** is returned, the route is hosted by a transit router.
   * 
   * @example
   * TR
   */
  serviceType?: string;
  /**
   * @remarks
   * The route status. Valid values:
   * 
   * *   **Pending**
   * *   **Available**
   * *   **Modifying**
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The route type. Valid values:
   * 
   * *   **Custom**: custom routes.
   * *   **System**: system routes.
   * *   **BGP**: BGP routes.
   * *   **CEN**: CEN routes.
   * *   **ECR**: ECR routes.
   * 
   * @example
   * Custom
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      destinationCidrBlock: 'DestinationCidrBlock',
      gmtModified: 'GmtModified',
      ipVersion: 'IpVersion',
      nextHops: 'NextHops',
      origin: 'Origin',
      routeEntryId: 'RouteEntryId',
      routeEntryName: 'RouteEntryName',
      routeTableId: 'RouteTableId',
      serviceType: 'ServiceType',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      destinationCidrBlock: 'string',
      gmtModified: 'string',
      ipVersion: 'string',
      nextHops: DescribeRouteEntryListResponseBodyRouteEntrysRouteEntryNextHops,
      origin: 'string',
      routeEntryId: 'string',
      routeEntryName: 'string',
      routeTableId: 'string',
      serviceType: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.nextHops && typeof (this.nextHops as any).validate === 'function') {
      (this.nextHops as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


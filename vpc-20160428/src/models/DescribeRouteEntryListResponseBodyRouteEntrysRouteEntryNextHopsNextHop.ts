// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRouteEntryListResponseBodyRouteEntrysRouteEntryNextHopsNextHopNextHopRelatedInfo } from "./DescribeRouteEntryListResponseBodyRouteEntrysRouteEntryNextHopsNextHopNextHopRelatedInfo";


export class DescribeRouteEntryListResponseBodyRouteEntrysRouteEntryNextHopsNextHop extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the route is available. Valid values:
   * 
   * *   **0**: unavailable
   * *   **1**: available
   * 
   * >  This parameter is returned when the next hop type is set to **RouterInterface**.
   * 
   * @example
   * 1
   */
  enabled?: number;
  /**
   * @remarks
   * The ID of the next hop.
   * 
   * @example
   * vpn-bp10zyaph5cc8b7c7****
   */
  nextHopId?: string;
  /**
   * @remarks
   * The ID of the region where the next hop is deployed.
   * 
   * >  This parameter is returned when the next hop type is set to **RouterInterface**.
   * 
   * @example
   * cn-hangzhou
   */
  nextHopRegionId?: string;
  /**
   * @remarks
   * The information about the next hop.
   */
  nextHopRelatedInfo?: DescribeRouteEntryListResponseBodyRouteEntrysRouteEntryNextHopsNextHopNextHopRelatedInfo;
  /**
   * @remarks
   * The next hop type. Valid values:
   * 
   * *   **Instance**: an ECS instance.
   * *   **HaVip**: an HAVIP.
   * *   **VpnGateway**: a VPN gateway.
   * *   **NatGateway**: a NAT gateway.
   * *   **NetworkInterface**: a secondary ENI.
   * *   **RouterInterface**: a router interface.
   * *   **IPv6Gateway**: an IPv6 gateway.
   * *   **Attachment**: a transit router.
   * *   **Ipv4Gateway**: an IPv4 gateway.
   * *   **GatewayEndpoint**: a gateway endpoint.
   * *   **CenBasic**: CEN does not support transit routers.
   * *   **Ecr**: ECR.
   * 
   * @example
   * Instance
   */
  nextHopType?: string;
  /**
   * @remarks
   * The weight of the route.
   * 
   * >  This parameter is returned when the next hop type is set to **RouterInterface**.
   * 
   * @example
   * 100
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      nextHopId: 'NextHopId',
      nextHopRegionId: 'NextHopRegionId',
      nextHopRelatedInfo: 'NextHopRelatedInfo',
      nextHopType: 'NextHopType',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'number',
      nextHopId: 'string',
      nextHopRegionId: 'string',
      nextHopRelatedInfo: DescribeRouteEntryListResponseBodyRouteEntrysRouteEntryNextHopsNextHopNextHopRelatedInfo,
      nextHopType: 'string',
      weight: 'number',
    };
  }

  validate() {
    if(this.nextHopRelatedInfo && typeof (this.nextHopRelatedInfo as any).validate === 'function') {
      (this.nextHopRelatedInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


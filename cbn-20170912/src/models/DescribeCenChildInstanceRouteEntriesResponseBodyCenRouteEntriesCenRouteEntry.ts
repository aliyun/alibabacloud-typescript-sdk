// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryAsPaths } from "./DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryAsPaths";
import { DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCenRouteMapRecords } from "./DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCenRouteMapRecords";
import { DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCommunities } from "./DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCommunities";
import { DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryConflicts } from "./DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryConflicts";


export class DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntry extends $dara.Model {
  /**
   * @remarks
   * The AS paths of the routes.
   */
  asPaths?: DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryAsPaths;
  /**
   * @remarks
   * The routing policy that the routes match.
   */
  cenRouteMapRecords?: DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCenRouteMapRecords;
  /**
   * @remarks
   * The community attributes of the route entries.
   */
  communities?: DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCommunities;
  /**
   * @remarks
   * A list of overlapping routes.
   */
  conflicts?: DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryConflicts;
  /**
   * @remarks
   * The destination CIDR block of the route.
   * 
   * @example
   * 10.0.0.0/24
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The ID of the instance specified as the next hop in the route.
   * 
   * @example
   * vbr-bp13gtbhdp0pfqg6s****
   */
  nextHopInstanceId?: string;
  /**
   * @remarks
   * The region ID of the instance specified as the next hop in the route.
   * 
   * @example
   * cn-hangzhou
   */
  nextHopRegionId?: string;
  /**
   * @remarks
   * The type of the instance specified as the next hop in the route. Valid values:
   * 
   * *   **Instance**: an ECS instance
   * *   **HaVip**: an HAVIP
   * *   **RouterInterface**: a router interface
   * *   **NetworkInterface**: an ENI
   * *   **VpnGateway**: a VPN gateway
   * *   **IPv6Gateway**: an IPv6 gateway
   * *   **Ipv4Gateway**: an IPv4 gateway
   * *   **NatGateway**: a NAT gateway
   * *   **Attachment**: a network instance connection
   * *   **service**: a cloud service
   * *   **VBR**: a VBR
   * *   **CCN**: a CCN instance
   * *   **VPC**: a VPC
   * *   **local**: a system route (no next hop is specified)
   * *   **TR**: a transit router
   * *   **BlackHole**: a blackhole route (no next hop is specified)
   * *   **EcRouterInterface**: a router interface for Express Connect
   * *   **HealthCheck**: a health check
   * *   **AS**: an access gateway for CCN
   * *   **classic**: a classic network-type instance
   * *   **GatewayEndpoint**: a gateway endpoint
   * *   **CPE**: a data center connected to a VBR
   * 
   * @example
   * VBR
   */
  nextHopType?: string;
  /**
   * @remarks
   * Indicates whether the route is allowed to be advertised to or withdrawn from the CEN instance. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  operationalMode?: boolean;
  /**
   * @remarks
   * Indicates whether the route is advertised to the CEN instance. Valid values:
   * 
   * *   **Published**
   * *   **NonPublished**
   * 
   * @example
   * Published
   */
  publishStatus?: string;
  /**
   * @remarks
   * The route table ID.
   * 
   * @example
   * vtb-bp1r9pvl4xen8s9ju****
   */
  routeTableId?: string;
  /**
   * @remarks
   * The route status. Valid values:
   * 
   * *   **Active**: available routes
   * *   **Candidate**: standby routes
   * *   **Rejected**: rejected routes
   * *   **Prohibited**: prohibited routes
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The route type. Valid values:
   * 
   * *   **CEN**: route that is advertised through CEN
   * *   **System**: system route
   * *   **Custom**: custom route
   * 
   * @example
   * CEN
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      asPaths: 'AsPaths',
      cenRouteMapRecords: 'CenRouteMapRecords',
      communities: 'Communities',
      conflicts: 'Conflicts',
      destinationCidrBlock: 'DestinationCidrBlock',
      nextHopInstanceId: 'NextHopInstanceId',
      nextHopRegionId: 'NextHopRegionId',
      nextHopType: 'NextHopType',
      operationalMode: 'OperationalMode',
      publishStatus: 'PublishStatus',
      routeTableId: 'RouteTableId',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asPaths: DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryAsPaths,
      cenRouteMapRecords: DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCenRouteMapRecords,
      communities: DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCommunities,
      conflicts: DescribeCenChildInstanceRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryConflicts,
      destinationCidrBlock: 'string',
      nextHopInstanceId: 'string',
      nextHopRegionId: 'string',
      nextHopType: 'string',
      operationalMode: 'boolean',
      publishStatus: 'string',
      routeTableId: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.asPaths && typeof (this.asPaths as any).validate === 'function') {
      (this.asPaths as any).validate();
    }
    if(this.cenRouteMapRecords && typeof (this.cenRouteMapRecords as any).validate === 'function') {
      (this.cenRouteMapRecords as any).validate();
    }
    if(this.communities && typeof (this.communities as any).validate === 'function') {
      (this.communities as any).validate();
    }
    if(this.conflicts && typeof (this.conflicts as any).validate === 'function') {
      (this.conflicts as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


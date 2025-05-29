// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryAsPaths } from "./DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryAsPaths";
import { DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCenOutRouteMapRecords } from "./DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCenOutRouteMapRecords";
import { DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCenRouteMapRecords } from "./DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCenRouteMapRecords";
import { DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCommunities } from "./DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCommunities";


export class DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntry extends $dara.Model {
  /**
   * @remarks
   * The AS paths of the route.
   */
  asPaths?: DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryAsPaths;
  /**
   * @remarks
   * The routing policy that the routes match in the outbound direction.
   */
  cenOutRouteMapRecords?: DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCenOutRouteMapRecords;
  /**
   * @remarks
   * The routing policy that the routes match in the inbound direction.
   */
  cenRouteMapRecords?: DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCenRouteMapRecords;
  /**
   * @remarks
   * The communities of the route.
   */
  communities?: DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCommunities;
  /**
   * @remarks
   * The destination CIDR block of the route.
   * 
   * @example
   * 192.168.1.0/24
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The ID of the instance specified as the next hop in the route.
   * 
   * @example
   * vpc-bp1j8728mm6pweeod****
   */
  nextHopInstanceId?: string;
  /**
   * @remarks
   * The ID of the region to which the network instance specified as the next hop in the route belongs.
   * 
   * @example
   * cn-hangzhou
   */
  nextHopRegionId?: string;
  /**
   * @remarks
   * The type of the instance specified as the next hop in the route. Valid values:
   * 
   * *   **VPC**: virtual private cloud (VPC)
   * *   **VBR**: virtual border router (VBR)
   * *   **CCN**: Cloud Connect Network (CCN) instance
   * *   **local_service**: system route. No next hop is specified.
   * 
   * @example
   * VPC
   */
  nextHopType?: string;
  /**
   * @remarks
   * The route priority.
   * 
   * A smaller value indicates a higher priority.
   * 
   * @example
   * 50
   */
  preference?: number;
  /**
   * @remarks
   * The route status. Valid values:
   * 
   * *   **Active**: available
   * *   **Candidate**: standby
   * *   **Rejected**: rejected
   * *   **Prohibited**: prohibited
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the route can be advertised to other regions. Valid values:
   * 
   * *   **Active**: The route can be advertised to other regions.
   * *   **Prohibited**: The route cannot be advertised to other regions.
   * 
   * @example
   * Active
   */
  toOtherRegionStatus?: string;
  /**
   * @remarks
   * The route type. Valid values:
   * 
   * *   **CEN**: route that is advertised through CEN
   * *   **Custom**: custom route
   * *   **System**: system route
   * 
   * @example
   * CEN
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      asPaths: 'AsPaths',
      cenOutRouteMapRecords: 'CenOutRouteMapRecords',
      cenRouteMapRecords: 'CenRouteMapRecords',
      communities: 'Communities',
      destinationCidrBlock: 'DestinationCidrBlock',
      nextHopInstanceId: 'NextHopInstanceId',
      nextHopRegionId: 'NextHopRegionId',
      nextHopType: 'NextHopType',
      preference: 'Preference',
      status: 'Status',
      toOtherRegionStatus: 'ToOtherRegionStatus',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asPaths: DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryAsPaths,
      cenOutRouteMapRecords: DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCenOutRouteMapRecords,
      cenRouteMapRecords: DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCenRouteMapRecords,
      communities: DescribeCenRegionDomainRouteEntriesResponseBodyCenRouteEntriesCenRouteEntryCommunities,
      destinationCidrBlock: 'string',
      nextHopInstanceId: 'string',
      nextHopRegionId: 'string',
      nextHopType: 'string',
      preference: 'number',
      status: 'string',
      toOtherRegionStatus: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.asPaths && typeof (this.asPaths as any).validate === 'function') {
      (this.asPaths as any).validate();
    }
    if(this.cenOutRouteMapRecords && typeof (this.cenOutRouteMapRecords as any).validate === 'function') {
      (this.cenOutRouteMapRecords as any).validate();
    }
    if(this.cenRouteMapRecords && typeof (this.cenRouteMapRecords as any).validate === 'function') {
      (this.cenRouteMapRecords as any).validate();
    }
    if(this.communities && typeof (this.communities as any).validate === 'function') {
      (this.communities as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


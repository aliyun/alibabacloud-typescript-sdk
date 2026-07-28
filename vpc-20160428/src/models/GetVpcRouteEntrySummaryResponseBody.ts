// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVpcRouteEntrySummaryResponseBodyRouteEntrySummarysEntrySummarys extends $dara.Model {
  /**
   * @remarks
   * The number of entries in the list.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The type of the route. Valid values:
   * - **all**: all route types.
   * - **custom**: custom route.
   * - **system**: system route.
   * - **bgp**: BGP route.
   * - **cen**: Cloud Enterprise Network (CEN) route.
   * - **type_vpn_bgp_internal**: VPN BGP route.
   * - **ECR**: Express Connect Router (ECR) route.
   * 
   * 
   * 
   * > The returned system routes are the system routes in the system route table.
   * 
   * @example
   * Custom
   */
  routeEntryType?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      routeEntryType: 'RouteEntryType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      routeEntryType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVpcRouteEntrySummaryResponseBodyRouteEntrySummarys extends $dara.Model {
  /**
   * @remarks
   * The collection of route entry counts by type in a single route table.
   */
  entrySummarys?: GetVpcRouteEntrySummaryResponseBodyRouteEntrySummarysEntrySummarys[];
  /**
   * @remarks
   * The ID of the route table.
   * 
   * @example
   * vtb-bp145q7glnuzdvzu2****
   */
  routeTableId?: string;
  static names(): { [key: string]: string } {
    return {
      entrySummarys: 'EntrySummarys',
      routeTableId: 'RouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entrySummarys: { 'type': 'array', 'itemType': GetVpcRouteEntrySummaryResponseBodyRouteEntrySummarysEntrySummarys },
      routeTableId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.entrySummarys)) {
      $dara.Model.validateArray(this.entrySummarys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVpcRouteEntrySummaryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DC668356-BCB4-42FD-9BC3-FA2B2E04B634
   */
  requestId?: string;
  /**
   * @remarks
   * The information about all route tables returned.
   */
  routeEntrySummarys?: GetVpcRouteEntrySummaryResponseBodyRouteEntrySummarys[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      routeEntrySummarys: 'RouteEntrySummarys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      routeEntrySummarys: { 'type': 'array', 'itemType': GetVpcRouteEntrySummaryResponseBodyRouteEntrySummarys },
    };
  }

  validate() {
    if(Array.isArray(this.routeEntrySummarys)) {
      $dara.Model.validateArray(this.routeEntrySummarys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVpcRouteEntrySummaryResponseBodyRouteEntrySummarysEntrySummarys extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The type of the route. Valid values:
   * 
   * *   **All**: all route types
   * *   **Custom**: a custom route
   * *   **System**: a system route
   * *   **BGP**: a BGP route
   * *   **CEN**: a CEN route
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
   * The information about the routes of different types in one route table.
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
   * The ID of the request.
   * 
   * @example
   * DC668356-BCB4-42FD-9BC3-FA2B2E04B634
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the routes in the route tables.
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetVpcRouteEntrySummaryResponseBodyRouteEntrySummarys } from "./GetVpcRouteEntrySummaryResponseBodyRouteEntrySummarys";


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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetVpcRouteEntrySummaryResponseBodyRouteEntrySummarysEntrySummarys } from "./GetVpcRouteEntrySummaryResponseBodyRouteEntrySummarysEntrySummarys";


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


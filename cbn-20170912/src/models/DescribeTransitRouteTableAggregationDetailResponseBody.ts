// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTransitRouteTableAggregationDetailResponseBodyData } from "./DescribeTransitRouteTableAggregationDetailResponseBodyData";


export class DescribeTransitRouteTableAggregationDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  count?: number;
  /**
   * @remarks
   * The configuration of the aggregate route.
   */
  data?: DescribeTransitRouteTableAggregationDetailResponseBodyData[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0C2EE7A8-74D4-4081-8236-CEBDE3BBCF50
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      data: 'Data',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      data: { 'type': 'array', 'itemType': DescribeTransitRouteTableAggregationDetailResponseBodyData },
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


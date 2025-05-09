// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePostpayTrafficDetailResponseBodyTrafficList } from "./DescribePostpayTrafficDetailResponseBodyTrafficList";


export class DescribePostpayTrafficDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0525EADE-C112-5702-A5BC-0E2F6F94DB23
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 132
   */
  totalCount?: number;
  /**
   * @remarks
   * The statistics on traffic.
   */
  trafficList?: DescribePostpayTrafficDetailResponseBodyTrafficList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      trafficList: 'TrafficList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      trafficList: { 'type': 'array', 'itemType': DescribePostpayTrafficDetailResponseBodyTrafficList },
    };
  }

  validate() {
    if(Array.isArray(this.trafficList)) {
      $dara.Model.validateArray(this.trafficList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


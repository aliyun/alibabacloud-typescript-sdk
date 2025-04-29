// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTrafficControlsResponseBodyTrafficControls } from "./DescribeTrafficControlsResponseBodyTrafficControls";


export class DescribeTrafficControlsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 93D91A99-F093-4596-87BA-3C4FBFD3FD8A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The returned throttling policy information. It is an array consisting of TrafficControl data.
   */
  trafficControls?: DescribeTrafficControlsResponseBodyTrafficControls;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      trafficControls: 'TrafficControls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      trafficControls: DescribeTrafficControlsResponseBodyTrafficControls,
    };
  }

  validate() {
    if(this.trafficControls && typeof (this.trafficControls as any).validate === 'function') {
      (this.trafficControls as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


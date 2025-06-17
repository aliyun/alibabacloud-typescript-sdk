// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDomainPathDataResponseBodyPathDataPerInterval } from "./DescribeDomainPathDataResponseBodyPathDataPerInterval";


export class DescribeDomainPathDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time interval. Unit: seconds.
   * 
   * @example
   * 300
   */
  dataInterval?: string;
  /**
   * @remarks
   * The accelerated domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range during which data was queried.
   * 
   * @example
   * 2017-09-30T17:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The page number of the returned page. Pages start from page **1**.
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
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * A list of bandwidth values collected at each time interval.
   */
  pathDataPerInterval?: DescribeDomainPathDataResponseBodyPathDataPerInterval;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 809A6F10-8238-4A49-BE00-4B2D6305686E
   */
  requestId?: string;
  /**
   * @remarks
   * The start of the time range during which data was queried.
   * 
   * @example
   * 2017-09-30T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pathDataPerInterval: 'PathDataPerInterval',
      requestId: 'RequestId',
      startTime: 'StartTime',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      pathDataPerInterval: DescribeDomainPathDataResponseBodyPathDataPerInterval,
      requestId: 'string',
      startTime: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.pathDataPerInterval && typeof (this.pathDataPerInterval as any).validate === 'function') {
      (this.pathDataPerInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


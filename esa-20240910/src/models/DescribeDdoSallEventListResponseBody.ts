// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDDoSAllEventListResponseBodyDataList } from "./DescribeDdoSallEventListResponseBodyDataList";


export class DescribeDDoSAllEventListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The DDoS attack events.
   */
  dataList?: DescribeDDoSAllEventListResponseBodyDataList[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D73A4243-CFBD-5110-876F-09237E77ECBD
   */
  requestId?: string;
  /**
   * @remarks
   * The website ID.
   * 
   * @example
   * 7096621098****
   */
  siteId?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      siteId: 'SiteId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': DescribeDDoSAllEventListResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      siteId: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataList)) {
      $dara.Model.validateArray(this.dataList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


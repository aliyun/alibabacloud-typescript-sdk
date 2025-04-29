// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeHistoryApisResponseBodyApiHisItems } from "./DescribeHistoryApisResponseBodyApiHisItems";


export class DescribeHistoryApisResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned API information. It is an array consisting of ApiHisItems.
   */
  apiHisItems?: DescribeHistoryApisResponseBodyApiHisItems;
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
   * The number of entries to return on each page. Maximum value: 50. Default value: 10.
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
   * 6C87A26A-6A18-4B8E-8099-705278381A2C
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apiHisItems: 'ApiHisItems',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiHisItems: DescribeHistoryApisResponseBodyApiHisItems,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.apiHisItems && typeof (this.apiHisItems as any).validate === 'function') {
      (this.apiHisItems as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


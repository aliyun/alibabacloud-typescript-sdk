// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApiProductApisResponseBodyApiInfoList } from "./DescribeApiProductApisResponseBodyApiInfoList";


export class DescribeApiProductApisResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the returned APIs.
   */
  apiInfoList?: DescribeApiProductApisResponseBodyApiInfoList;
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
   * 03442A3D-3B7D-434C-8A95-A5FEB989B519
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 4
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apiInfoList: 'ApiInfoList',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiInfoList: DescribeApiProductApisResponseBodyApiInfoList,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.apiInfoList && typeof (this.apiInfoList as any).validate === 'function') {
      (this.apiInfoList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


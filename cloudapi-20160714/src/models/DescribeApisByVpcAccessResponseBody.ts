// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApisByVpcAccessResponseBodyApiVpcAccessInfos } from "./DescribeApisByVpcAccessResponseBodyApiVpcAccessInfos";


export class DescribeApisByVpcAccessResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned API information. It is an array consisting of ApiInfo data.
   */
  apiVpcAccessInfos?: DescribeApisByVpcAccessResponseBodyApiVpcAccessInfos;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 10.
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
   * 4E707B25-5119-5ACF-9D26-7D2A2762F05C
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apiVpcAccessInfos: 'ApiVpcAccessInfos',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVpcAccessInfos: DescribeApisByVpcAccessResponseBodyApiVpcAccessInfos,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.apiVpcAccessInfos && typeof (this.apiVpcAccessInfos as any).validate === 'function') {
      (this.apiVpcAccessInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


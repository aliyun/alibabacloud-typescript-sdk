// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCouponResponseBodyData } from "./DescribeCouponResponseBodyData";


export class DescribeCouponResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  data?: DescribeCouponResponseBodyData[];
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * C880B065-A781-4F19-B6DD-3E0E3B715C64
   */
  requestId?: string;
  /**
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      data: 'Data',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      data: { 'type': 'array', 'itemType': DescribeCouponResponseBodyData },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
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


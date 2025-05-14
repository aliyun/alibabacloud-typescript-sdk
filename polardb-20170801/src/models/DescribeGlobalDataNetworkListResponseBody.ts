// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGlobalDataNetworkListResponseBodyItems } from "./DescribeGlobalDataNetworkListResponseBodyItems";


export class DescribeGlobalDataNetworkListResponseBody extends $dara.Model {
  items?: DescribeGlobalDataNetworkListResponseBodyItems;
  /**
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @example
   * 1
   */
  pageRecordCount?: string;
  /**
   * @example
   * CD35F3-F3-44CA-AFFF-BAF869******
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalRecordCount?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: DescribeGlobalDataNetworkListResponseBodyItems,
      pageNumber: 'string',
      pageRecordCount: 'string',
      requestId: 'string',
      totalRecordCount: 'string',
    };
  }

  validate() {
    if(this.items && typeof (this.items as any).validate === 'function') {
      (this.items as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


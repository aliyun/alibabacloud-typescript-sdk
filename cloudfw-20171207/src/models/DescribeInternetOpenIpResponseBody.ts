// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInternetOpenIpResponseBodyDataList } from "./DescribeInternetOpenIpResponseBodyDataList";
import { DescribeInternetOpenIpResponseBodyPageInfo } from "./DescribeInternetOpenIpResponseBodyPageInfo";


export class DescribeInternetOpenIpResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  dataList?: DescribeInternetOpenIpResponseBodyDataList[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeInternetOpenIpResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6B780BD6-282C-51A9-A8E6-59F636BAFA54
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataList: 'DataList',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': DescribeInternetOpenIpResponseBodyDataList },
      pageInfo: DescribeInternetOpenIpResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataList)) {
      $dara.Model.validateArray(this.dataList);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


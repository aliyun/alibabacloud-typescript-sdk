// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVsStreamsPublishListResponseBodyPublishInfo } from "./DescribeVsStreamsPublishListResponseBodyPublishInfo";


export class DescribeVsStreamsPublishListResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 3000
   */
  pageSize?: number;
  publishInfo?: DescribeVsStreamsPublishListResponseBodyPublishInfo;
  /**
   * @example
   * 119F7639-4646-51A4-B6C1-300D391C0104
   */
  requestId?: string;
  /**
   * @example
   * 200
   */
  totalNum?: number;
  /**
   * @example
   * 1
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      publishInfo: 'PublishInfo',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      publishInfo: DescribeVsStreamsPublishListResponseBodyPublishInfo,
      requestId: 'string',
      totalNum: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(this.publishInfo && typeof (this.publishInfo as any).validate === 'function') {
      (this.publishInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


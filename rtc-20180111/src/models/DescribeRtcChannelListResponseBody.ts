// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRtcChannelListResponseBodyChannelList } from "./DescribeRtcChannelListResponseBodyChannelList";


export class DescribeRtcChannelListResponseBody extends $dara.Model {
  channelList?: DescribeRtcChannelListResponseBodyChannelList;
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  /**
   * @example
   * 1000
   */
  totalCnt?: number;
  static names(): { [key: string]: string } {
    return {
      channelList: 'ChannelList',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCnt: 'TotalCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelList: DescribeRtcChannelListResponseBodyChannelList,
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCnt: 'number',
    };
  }

  validate() {
    if(this.channelList && typeof (this.channelList as any).validate === 'function') {
      (this.channelList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


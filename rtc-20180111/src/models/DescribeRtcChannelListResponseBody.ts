// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRtcChannelListResponseBodyChannelListChannelListCallArea extends $dara.Model {
  callArea?: string[];
  static names(): { [key: string]: string } {
    return {
      callArea: 'CallArea',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callArea: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.callArea)) {
      $dara.Model.validateArray(this.callArea);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelListResponseBodyChannelListChannelList extends $dara.Model {
  callArea?: DescribeRtcChannelListResponseBodyChannelListChannelListCallArea;
  /**
   * @example
   * testChannel
   */
  channelId?: string;
  /**
   * @example
   * 2018-01-29T02:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * 2018-01-29T01:00:00Z
   */
  startTime?: string;
  /**
   * @example
   * 2
   */
  totalUserCnt?: number;
  static names(): { [key: string]: string } {
    return {
      callArea: 'CallArea',
      channelId: 'ChannelId',
      endTime: 'EndTime',
      startTime: 'StartTime',
      totalUserCnt: 'TotalUserCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callArea: DescribeRtcChannelListResponseBodyChannelListChannelListCallArea,
      channelId: 'string',
      endTime: 'string',
      startTime: 'string',
      totalUserCnt: 'number',
    };
  }

  validate() {
    if(this.callArea && typeof (this.callArea as any).validate === 'function') {
      (this.callArea as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelListResponseBodyChannelList extends $dara.Model {
  channelList?: DescribeRtcChannelListResponseBodyChannelListChannelList[];
  static names(): { [key: string]: string } {
    return {
      channelList: 'ChannelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelList: { 'type': 'array', 'itemType': DescribeRtcChannelListResponseBodyChannelListChannelList },
    };
  }

  validate() {
    if(Array.isArray(this.channelList)) {
      $dara.Model.validateArray(this.channelList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRtcChannelListResponseBodyChannelListChannelListCallArea } from "./DescribeRtcChannelListResponseBodyChannelListChannelListCallArea";


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


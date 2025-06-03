// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRtcChannelMetricResponseBodyChannelMetricInfo } from "./DescribeRtcChannelMetricResponseBodyChannelMetricInfo";


export class DescribeRtcChannelMetricResponseBody extends $dara.Model {
  channelMetricInfo?: DescribeRtcChannelMetricResponseBodyChannelMetricInfo;
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      channelMetricInfo: 'ChannelMetricInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelMetricInfo: DescribeRtcChannelMetricResponseBodyChannelMetricInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.channelMetricInfo && typeof (this.channelMetricInfo as any).validate === 'function') {
      (this.channelMetricInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


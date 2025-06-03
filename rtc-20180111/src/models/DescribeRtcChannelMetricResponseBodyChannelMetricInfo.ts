// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRtcChannelMetricResponseBodyChannelMetricInfoChannelMetric } from "./DescribeRtcChannelMetricResponseBodyChannelMetricInfoChannelMetric";
import { DescribeRtcChannelMetricResponseBodyChannelMetricInfoDuration } from "./DescribeRtcChannelMetricResponseBodyChannelMetricInfoDuration";


export class DescribeRtcChannelMetricResponseBodyChannelMetricInfo extends $dara.Model {
  channelMetric?: DescribeRtcChannelMetricResponseBodyChannelMetricInfoChannelMetric;
  duration?: DescribeRtcChannelMetricResponseBodyChannelMetricInfoDuration;
  static names(): { [key: string]: string } {
    return {
      channelMetric: 'ChannelMetric',
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelMetric: DescribeRtcChannelMetricResponseBodyChannelMetricInfoChannelMetric,
      duration: DescribeRtcChannelMetricResponseBodyChannelMetricInfoDuration,
    };
  }

  validate() {
    if(this.channelMetric && typeof (this.channelMetric as any).validate === 'function') {
      (this.channelMetric as any).validate();
    }
    if(this.duration && typeof (this.duration as any).validate === 'function') {
      (this.duration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


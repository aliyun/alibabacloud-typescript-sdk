// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRtcChannelMetricResponseBodyChannelMetricInfoDurationPubDuration } from "./DescribeRtcChannelMetricResponseBodyChannelMetricInfoDurationPubDuration";
import { DescribeRtcChannelMetricResponseBodyChannelMetricInfoDurationSubDuration } from "./DescribeRtcChannelMetricResponseBodyChannelMetricInfoDurationSubDuration";


export class DescribeRtcChannelMetricResponseBodyChannelMetricInfoDuration extends $dara.Model {
  pubDuration?: DescribeRtcChannelMetricResponseBodyChannelMetricInfoDurationPubDuration;
  subDuration?: DescribeRtcChannelMetricResponseBodyChannelMetricInfoDurationSubDuration;
  static names(): { [key: string]: string } {
    return {
      pubDuration: 'PubDuration',
      subDuration: 'SubDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pubDuration: DescribeRtcChannelMetricResponseBodyChannelMetricInfoDurationPubDuration,
      subDuration: DescribeRtcChannelMetricResponseBodyChannelMetricInfoDurationSubDuration,
    };
  }

  validate() {
    if(this.pubDuration && typeof (this.pubDuration as any).validate === 'function') {
      (this.pubDuration as any).validate();
    }
    if(this.subDuration && typeof (this.subDuration as any).validate === 'function') {
      (this.subDuration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


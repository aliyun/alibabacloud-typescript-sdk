// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRtcPeakChannelCntDataResponseBodyPeakChannelCntDataPerInterval } from "./DescribeRtcPeakChannelCntDataResponseBodyPeakChannelCntDataPerInterval";


export class DescribeRtcPeakChannelCntDataResponseBody extends $dara.Model {
  peakChannelCntDataPerInterval?: DescribeRtcPeakChannelCntDataResponseBodyPeakChannelCntDataPerInterval;
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      peakChannelCntDataPerInterval: 'PeakChannelCntDataPerInterval',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      peakChannelCntDataPerInterval: DescribeRtcPeakChannelCntDataResponseBodyPeakChannelCntDataPerInterval,
      requestId: 'string',
    };
  }

  validate() {
    if(this.peakChannelCntDataPerInterval && typeof (this.peakChannelCntDataPerInterval as any).validate === 'function') {
      (this.peakChannelCntDataPerInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


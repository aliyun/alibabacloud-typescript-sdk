// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRtcPeakChannelCntDataResponseBodyPeakChannelCntDataPerIntervalPeakChannelCntModule extends $dara.Model {
  /**
   * @example
   * 10
   */
  activeChannelPeak?: number;
  /**
   * @example
   * 2018-01-29T00:01:00Z
   */
  activeChannelPeakTime?: string;
  /**
   * @example
   * 2018-01-29T00:00:00Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      activeChannelPeak: 'ActiveChannelPeak',
      activeChannelPeakTime: 'ActiveChannelPeakTime',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeChannelPeak: 'number',
      activeChannelPeakTime: 'string',
      timeStamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcPeakChannelCntDataResponseBodyPeakChannelCntDataPerInterval extends $dara.Model {
  peakChannelCntModule?: DescribeRtcPeakChannelCntDataResponseBodyPeakChannelCntDataPerIntervalPeakChannelCntModule[];
  static names(): { [key: string]: string } {
    return {
      peakChannelCntModule: 'PeakChannelCntModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      peakChannelCntModule: { 'type': 'array', 'itemType': DescribeRtcPeakChannelCntDataResponseBodyPeakChannelCntDataPerIntervalPeakChannelCntModule },
    };
  }

  validate() {
    if(Array.isArray(this.peakChannelCntModule)) {
      $dara.Model.validateArray(this.peakChannelCntModule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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


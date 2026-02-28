// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRtcDurationDataResponseBodyDurationDataPerIntervalDurationModule extends $dara.Model {
  audioDuration?: number;
  contentDuration?: number;
  timeStamp?: string;
  totalDuration?: number;
  v1080Duration?: number;
  v360Duration?: number;
  v720Duration?: number;
  static names(): { [key: string]: string } {
    return {
      audioDuration: 'AudioDuration',
      contentDuration: 'ContentDuration',
      timeStamp: 'TimeStamp',
      totalDuration: 'TotalDuration',
      v1080Duration: 'V1080Duration',
      v360Duration: 'V360Duration',
      v720Duration: 'V720Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioDuration: 'number',
      contentDuration: 'number',
      timeStamp: 'string',
      totalDuration: 'number',
      v1080Duration: 'number',
      v360Duration: 'number',
      v720Duration: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcDurationDataResponseBodyDurationDataPerInterval extends $dara.Model {
  durationModule?: DescribeRtcDurationDataResponseBodyDurationDataPerIntervalDurationModule[];
  static names(): { [key: string]: string } {
    return {
      durationModule: 'DurationModule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationModule: { 'type': 'array', 'itemType': DescribeRtcDurationDataResponseBodyDurationDataPerIntervalDurationModule },
    };
  }

  validate() {
    if(Array.isArray(this.durationModule)) {
      $dara.Model.validateArray(this.durationModule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcDurationDataResponseBody extends $dara.Model {
  durationDataPerInterval?: DescribeRtcDurationDataResponseBodyDurationDataPerInterval;
  /**
   * @example
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      durationDataPerInterval: 'DurationDataPerInterval',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      durationDataPerInterval: DescribeRtcDurationDataResponseBodyDurationDataPerInterval,
      requestId: 'string',
    };
  }

  validate() {
    if(this.durationDataPerInterval && typeof (this.durationDataPerInterval as any).validate === 'function') {
      (this.durationDataPerInterval as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRtcChannelMetricResponseBodyChannelMetricInfoChannelMetric extends $dara.Model {
  /**
   * @example
   * example_channel
   */
  channelId?: string;
  /**
   * @example
   * 2019-06-06T18:57:00Z
   */
  endTime?: string;
  /**
   * @example
   * 10
   */
  pubUserCount?: number;
  /**
   * @example
   * 2019-06-06T17:57:00Z
   */
  startTime?: string;
  /**
   * @example
   * 25
   */
  subUserCount?: number;
  /**
   * @example
   * 30
   */
  userCount?: number;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      endTime: 'EndTime',
      pubUserCount: 'PubUserCount',
      startTime: 'StartTime',
      subUserCount: 'SubUserCount',
      userCount: 'UserCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      endTime: 'string',
      pubUserCount: 'number',
      startTime: 'string',
      subUserCount: 'number',
      userCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelMetricResponseBodyChannelMetricInfoDurationPubDuration extends $dara.Model {
  /**
   * @example
   * 100
   */
  audio?: number;
  /**
   * @example
   * 100
   */
  content?: number;
  /**
   * @example
   * 100
   */
  video1080?: number;
  /**
   * @example
   * 100
   */
  video360?: number;
  /**
   * @example
   * 100
   */
  video720?: number;
  static names(): { [key: string]: string } {
    return {
      audio: 'Audio',
      content: 'Content',
      video1080: 'Video1080',
      video360: 'Video360',
      video720: 'Video720',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audio: 'number',
      content: 'number',
      video1080: 'number',
      video360: 'number',
      video720: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRtcChannelMetricResponseBodyChannelMetricInfoDurationSubDuration extends $dara.Model {
  /**
   * @example
   * 100
   */
  audio?: number;
  /**
   * @example
   * 100
   */
  content?: number;
  /**
   * @example
   * 100
   */
  video1080?: number;
  /**
   * @example
   * 100
   */
  video360?: number;
  /**
   * @example
   * 100
   */
  video720?: number;
  static names(): { [key: string]: string } {
    return {
      audio: 'Audio',
      content: 'Content',
      video1080: 'Video1080',
      video360: 'Video360',
      video720: 'Video720',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audio: 'number',
      content: 'number',
      video1080: 'number',
      video360: 'number',
      video720: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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


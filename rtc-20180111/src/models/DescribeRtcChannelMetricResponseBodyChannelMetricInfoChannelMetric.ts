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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRtcChannelMetricRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. You can create and query the application ID in the console. Only a single ID is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * aoe****
   */
  appId?: string;
  /**
   * @remarks
   * The channel ID. Only a single ID is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * testId
   */
  channelId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The time when the record is queried, in UTC. Specify the time in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * The time granularity is day.
   * 
   * This parameter is required.
   * 
   * @example
   * 2018-01-29T00:00:00Z
   */
  timePoint?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      ownerId: 'OwnerId',
      timePoint: 'TimePoint',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      ownerId: 'number',
      timePoint: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEndPointMetricDataRequest extends $dara.Model {
  /**
   * @remarks
   * The app ID.
   * 
   * This parameter is required.
   * 
   * @example
   * testappid
   */
  appId?: string;
  /**
   * @remarks
   * The channel ID.
   * 
   * This parameter is required.
   * 
   * @example
   * testid
   */
  channelId?: string;
  /**
   * @remarks
   * The start time of the query time range. This time cannot be earlier than the actual creation time of the channel or more than 30 days ago. The time is a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1614936817
   */
  createdTs?: number;
  /**
   * @remarks
   * The end time of the query time range. This time cannot be later than the release time of the channel. The time is a UNIX timestamp in seconds. If this parameter is left empty, the current time is used.
   * 
   * > If the specified end time is later than the release time of the channel, the data from the start time to the release time of the channel is returned, and a maximum of data from the last 3 hours is returned.
   * 
   * @example
   * 1614936817
   */
  destroyedTs?: number;
  /**
   * @remarks
   * The list of metric enumerations. Separate multiple metrics with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * VIDEO_STUCK_CAMERA
   */
  metrics?: string;
  /**
   * @remarks
   * The call IDs of the communication streams for the publisher. Separate multiple IDs with commas (,).
   * > You can specify either PubUserId or PubCallIdList.
   * 
   * @example
   * testcall1,testcall2
   */
  pubCallIdList?: string;
  /**
   * @remarks
   * The user ID of the publisher.
   * > You can specify either PubUserId or PubCallIdList.
   * 
   * @example
   * testuserid2
   */
  pubUserId?: string;
  /**
   * @remarks
   * The user ID of the subscriber.
   * 
   * @example
   * testuserid
   */
  subUserId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      metrics: 'Metrics',
      pubCallIdList: 'PubCallIdList',
      pubUserId: 'PubUserId',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      metrics: 'string',
      pubCallIdList: 'string',
      pubUserId: 'string',
      subUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


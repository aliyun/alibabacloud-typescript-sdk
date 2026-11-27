// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEndPointEventListRequest extends $dara.Model {
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
   * The start time of the event query time range. This time cannot be earlier than the actual creation time of the channel or 30 days ago. The time is a UNIX timestamp in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 1614936817
   */
  createdTs?: number;
  /**
   * @remarks
   * The end time of the event query time range. This time cannot be later than the release time of the channel. The time is a UNIX timestamp in seconds. If this parameter is left empty, the current time is used.
   * 
   * @example
   * 1614936817
   */
  destroyedTs?: number;
  /**
   * @remarks
   * The list of user IDs. Separate multiple user IDs with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * testuserid1,testuserid2
   */
  userIdList?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      userIdList: 'UserIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      userIdList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


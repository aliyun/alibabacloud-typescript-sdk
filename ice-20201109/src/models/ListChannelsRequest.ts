// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChannelsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the channel.
   * 
   * @example
   * MyChannel
   */
  channelName?: string;
  /**
   * @remarks
   * The tier of the channel. Valid values: basic and standard.
   * 
   * @example
   * basic
   */
  channelTier?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The playback mode. Valid values: loop and linear.
   * 
   * @example
   * loop
   */
  playbackMode?: string;
  /**
   * @remarks
   * The sorting order by creation time. Valid values: asc and desc.
   * 
   * @example
   * asc
   */
  sortBy?: string;
  /**
   * @remarks
   * The sorting order by modification time. Valid values: asc and desc.
   * 
   * @example
   * desc
   */
  sortByModifiedTime?: string;
  /**
   * @remarks
   * The channel status. A value of 0 specifies stopped. A value of 1 specifies started.
   * 
   * @example
   * 0
   */
  state?: number;
  static names(): { [key: string]: string } {
    return {
      channelName: 'ChannelName',
      channelTier: 'ChannelTier',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      playbackMode: 'PlaybackMode',
      sortBy: 'SortBy',
      sortByModifiedTime: 'SortByModifiedTime',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelName: 'string',
      channelTier: 'string',
      pageNo: 'number',
      pageSize: 'number',
      playbackMode: 'string',
      sortBy: 'string',
      sortByModifiedTime: 'string',
      state: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChannelsRequest extends $dara.Model {
  /**
   * @remarks
   * The channel name.
   * 
   * @example
   * MyChannel
   */
  channelName?: string;
  /**
   * @remarks
   * The channel tier.
   * 
   * @example
   * basic
   */
  channelTier?: string;
  /**
   * @remarks
   * The current page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The playback mode.
   * 
   * @example
   * loop
   */
  playbackMode?: string;
  /**
   * @remarks
   * Sorts the results by creation time.
   * 
   * @example
   * asc
   */
  sortBy?: string;
  /**
   * @remarks
   * Sorts the results by modification time.
   * 
   * @example
   * desc
   */
  sortByModifiedTime?: string;
  /**
   * @remarks
   * The channel state. Valid values: 0: Stopped. 1: Started.
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGlobalDataNetworkListResponseBodyItemsNetworksChannels extends $dara.Model {
  /**
   * @example
   * gdc-xxx
   */
  channelId?: string;
  /**
   * @example
   * Syncing
   */
  channelStatus?: string;
  /**
   * @example
   * true
   */
  freezeSourceDuringSync?: boolean;
  /**
   * @example
   * 11.45%
   */
  progress?: string;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
      channelStatus: 'ChannelStatus',
      freezeSourceDuringSync: 'FreezeSourceDuringSync',
      progress: 'Progress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
      channelStatus: 'string',
      freezeSourceDuringSync: 'boolean',
      progress: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


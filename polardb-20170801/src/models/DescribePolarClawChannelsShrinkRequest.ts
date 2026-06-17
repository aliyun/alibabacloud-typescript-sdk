// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolarClawChannelsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The channel IDs to query. Leave this parameter empty to return all channels.
   * 
   * @example
   * feishu,telegram
   */
  channelListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      channelListShrink: 'ChannelList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      channelListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


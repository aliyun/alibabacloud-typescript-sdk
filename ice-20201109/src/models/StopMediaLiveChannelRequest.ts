// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopMediaLiveChannelRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the channel.
   * 
   * This parameter is required.
   * 
   * @example
   * SEGK5KA6KYKAWQQH
   */
  channelId?: string;
  static names(): { [key: string]: string } {
    return {
      channelId: 'ChannelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


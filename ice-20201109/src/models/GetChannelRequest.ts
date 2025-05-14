// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChannelRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the channel.
   * 
   * This parameter is required.
   * 
   * @example
   * MyChannel
   */
  channelName?: string;
  static names(): { [key: string]: string } {
    return {
      channelName: 'ChannelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


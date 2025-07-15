// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteChannelRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. You can specify only one application ID.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  /**
   * @remarks
   * The channel ID. You can specify only one channel ID.
   * 
   * @example
   * testid
   */
  channelId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteChannelRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. Only a single ID is supported. This parameter is required. If this parameter is not specified, the service returns InvalidInput.
   * 
   * @example
   * eo85****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the channel that has been joined. Only a single ID is supported. This parameter is required. If this parameter is not specified, the service returns InvalidInput.
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


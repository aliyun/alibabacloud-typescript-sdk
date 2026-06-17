// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisablePolarClawChannelRequest extends $dara.Model {
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
   * The unique ID of the channel.
   * 
   * This parameter is required.
   * 
   * @example
   * feishu
   */
  channelId?: string;
  /**
   * @remarks
   * Specifies whether to restart the gateway after the channel is disabled. Defaults to true.
   * 
   * @example
   * true
   */
  restart?: boolean;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      channelId: 'ChannelId',
      restart: 'Restart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      channelId: 'string',
      restart: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRtcMPUEventSubRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * >  The ID can be up to 64 characters in length and can contain letters, digits, underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @remarks
   * The callback URL.
   * 
   * >  You can use headers such as HTTP and HTTPS in callback URLs. The URL can be up to 2,083 characters and contain letters, digits, and the following special characters: - _ ? % = # . / +
   * 
   * @example
   * http://****.com/callback
   */
  callbackUrl?: string;
  /**
   * @remarks
   * The ID of the channel to which you want to send mixed-stream relay event callbacks. Separate multiple channel IDs with commas (,).
   * 
   * > 
   * 
   * *   If you leave this parameter empty, you are subscribed to all mixed-stream relay events submitted in the application.
   * 
   * *   You cannot specify duplicate channel IDs. You can specify up to 20 channel IDs in each call.
   * *   The ID can be up to 64 characters in length and contain letters, digits, underscores (_), and hyphens (-).
   * 
   * @example
   * yourChannelIds
   */
  channelIds?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      callbackUrl: 'CallbackUrl',
      channelIds: 'ChannelIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      callbackUrl: 'string',
      channelIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


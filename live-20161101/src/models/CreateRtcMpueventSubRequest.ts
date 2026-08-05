// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRtcMPUEventSubRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application to subscribe to. You can view your application IDs by navigating to **ApsaraVideo Live > Live+ > ApsaraVideo Real-time Communication > Application Management**. If no application exists, create one by clicking **Create Application**.
   * > The application ID consists of uppercase and lowercase letters, digits, underscores, and hyphens (-), with a maximum of 64 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @remarks
   * The callback URL. For the URL format, refer to the callback content specifications below.
   * > The callback URL protocol must be HTTP or HTTPS. The URL can contain only the following characters: a-z, A-Z, 0-9, -, _, ?, %, =, #, ., /, and +. The URL cannot exceed 2083 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * http://****.com/callback
   */
  callbackUrl?: string;
  /**
   * @remarks
   * The channel IDs of the stream mixing tasks for which you want to receive callbacks. You can specify multiple channel IDs separated by commas (,).
   * >- If you leave this parameter empty, callbacks for all stream mixing and relaying tasks under the specified AppId are received by default.
   * - When specifying multiple channel IDs, do not include duplicates. You can specify up to 20 channel IDs at a time.
   * - Each channel ID consists of uppercase and lowercase letters, digits, underscores, and hyphens (-), with a maximum of 64 characters.
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddLiveAudioAuditNotifyConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The callback URL. This URL is used to receive callback notifications about violations in audio.
   * 
   * @example
   * https://demo.aliyundoc.com/callback
   */
  callback?: string;
  /**
   * @remarks
   * The callback template. Valid values:
   * 
   * *   **{DomainName}**: the streaming domain.
   * *   **{AppName}**: the name of the application to which the live stream belongs.
   * *   **{StreamName}**: the name of the live stream.
   * *   **{Timestamp}**: the time when the callback is returned. The value of this field is a UNIX timestamp. Unit: seconds.
   * *   **{Result}**: the moderation results.
   * 
   * @example
   * {"domain":{DomainName},"app":{AppName},"stream":{StreamName},"timestamp":{Timestamp},"result":{Result}}
   */
  callbackTemplate?: string;
  /**
   * @remarks
   * The main streaming domain.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  ownerId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      callback: 'Callback',
      callbackTemplate: 'CallbackTemplate',
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callback: 'string',
      callbackTemplate: 'string',
      domainName: 'string',
      ownerId: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


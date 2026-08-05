// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddLiveAudioAuditNotifyConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The URL used to receive callbacks for audio that contains problematic content.
   * 
   * @example
   * https://demo.aliyundoc.com/callback
   */
  callback?: string;
  /**
   * @remarks
   * The callback template for automated reviews. The value is a JSON string that can contain the following variables:
   * 
   * - **{DomainName}**: The streaming domain.
   * 
   * - **{AppName}**: The AppName of the live stream.
   * 
   * - **{StreamName}**: The stream name.
   * 
   * - **{Timestamp}**: The UNIX timestamp of the callback. Unit: seconds.
   * 
   * - **{Result}**: The review result.
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
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
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


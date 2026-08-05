// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLiveAudioAuditNotifyConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The webhook URL for receiving callback notifications about audio that contains violations.
   * 
   * @example
   * http://guide.aliyundoc.com/callback
   */
  callback?: string;
  /**
   * @remarks
   * The callback template for automated review. The value can contain the following variables:
   * 
   * - **{DomainName}**: The streaming domain.
   * 
   * - **{AppName}**: The AppName of the stream.
   * 
   * - **{StreamName}**: The stream name.
   * 
   * - **{Timestamp}**: The UNIX timestamp when the callback is generated. Unit: seconds.
   * 
   * - **{Result}**: The detection result.
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAtiAlertSettingsRequest extends $dara.Model {
  /**
   * @remarks
   * The list of alert configurations.
   * 
   * @example
   * "[{\\"NoticeType\\":\\"identity_cert_expiring\\",\\"SmsNotice\\":true,\\"EmailNotice\\":true,\\"DingtalkNotice\\":true},{\\"NoticeType\\":\\"server_cert_expiring\\",\\"SmsNotice\\":true,\\"EmailNotice\\":true,\\"DingtalkNotice\\":true}]"
   */
  alertConfig?: string;
  /**
   * @remarks
   * The list of alert notification groups.
   * 
   * @example
   * [\\"Cloud account alert contact\\"]
   */
  alertGroup?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * If you do not specify this parameter, the system automatically uses the RequestId of the API request as the ClientToken. The RequestId may be different for each API request.
   * 
   * @example
   * eyJhbGciOiJIUzI1NiIsInR5cC.....
   */
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      alertConfig: 'AlertConfig',
      alertGroup: 'AlertGroup',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertConfig: 'string',
      alertGroup: 'string',
      clientToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAtiAlertSettingsRequest extends $dara.Model {
  /**
   * @example
   * "[{\\"NoticeType\\":\\"identity_cert_expiring\\",\\"SmsNotice\\":true,\\"EmailNotice\\":true,\\"DingtalkNotice\\":true},{\\"NoticeType\\":\\"server_cert_expiring\\",\\"SmsNotice\\":true,\\"EmailNotice\\":true,\\"DingtalkNotice\\":true}]"
   */
  alertConfig?: string;
  /**
   * @example
   * [\\"云账号报警联系人\\"]
   */
  alertGroup?: string;
  /**
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


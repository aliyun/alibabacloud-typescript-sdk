// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAlertContactRequest extends $dara.Model {
  contactName?: string;
  dingRobotWebhookUrl?: string;
  email?: string;
  phoneNum?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  systemNoc?: boolean;
  static names(): { [key: string]: string } {
    return {
      contactName: 'ContactName',
      dingRobotWebhookUrl: 'DingRobotWebhookUrl',
      email: 'Email',
      phoneNum: 'PhoneNum',
      regionId: 'RegionId',
      systemNoc: 'SystemNoc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactName: 'string',
      dingRobotWebhookUrl: 'string',
      email: 'string',
      phoneNum: 'string',
      regionId: 'string',
      systemNoc: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


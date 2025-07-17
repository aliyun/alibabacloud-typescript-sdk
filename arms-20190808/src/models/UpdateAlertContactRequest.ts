// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAlertContactRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the alert contact to be updated. You can call the SearchAlertContact operation to query the contact ID. For more information, see [SearchAlertContact](https://help.aliyun.com/document_detail/130703.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  contactId?: number;
  /**
   * @remarks
   * The new name of the alert contact.
   * 
   * @example
   * John Doe
   */
  contactName?: string;
  /**
   * @remarks
   * The new webhook URL of the DingTalk chatbot. For more information, see [Configure a DingTalk chatbot to send alert notifications](https://help.aliyun.com/document_detail/106247.html). You must specify at least one of the following parameters: PhoneNum, Email, and DingRobotWebhookUrl.
   * 
   * >  If you do not specify this parameter, the original parameter value is deleted. If you specify this parameter, the original parameter value is updated.
   * 
   * @example
   * https://oapi.dingtalk.com/robot/send?access_token=91f2f6****
   */
  dingRobotWebhookUrl?: string;
  /**
   * @remarks
   * The new email address of the alert contact. You must specify at least one of the following parameters: PhoneNum, Email, and DingRobotWebhookUrl.
   * 
   * >  If you do not specify this parameter, the original parameter value is deleted. If you specify this parameter, the original parameter value is updated.
   * 
   * @example
   * someone@example.com
   */
  email?: string;
  /**
   * @remarks
   * The new mobile phone number of the alert contact. You must specify at least one of the following parameters: PhoneNum, Email, and DingRobotWebhookUrl.
   * 
   * >  If you do not specify this parameter, the original parameter value is deleted. If you specify this parameter, the original parameter value is updated.
   * 
   * @example
   * 1381111****
   */
  phoneNum?: string;
  /**
   * @remarks
   * The ID of the region. Set the value to `cn-hangzhou`.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether the alert contact receives system notifications. Valid values:
   * 
   * *   `true`: The alert contact receives system notifications.
   * *   `false`: The alert contact does not receive system notifications.
   * 
   * @example
   * true
   */
  systemNoc?: boolean;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
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
      contactId: 'number',
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


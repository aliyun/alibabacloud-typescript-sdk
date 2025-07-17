// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAlertContactRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the alert contact.
   * 
   * @example
   * JohnDoe
   */
  contactName?: string;
  /**
   * @remarks
   * The webhook URL of the DingTalk chatbot. For more information about how to obtain the URL, see [Configure a DingTalk chatbot to send alert notifications](https://www.alibabacloud.com/help/zh/doc-detail/106247.htm). You must specify at least one of the following parameters: PhoneNum, Email, and DingRobotWebhookUrl.
   * 
   * >  Enter `alert` in the custom keyword field of DingTalk chatbot security settings.
   * 
   * @example
   * https://oapi.dingtalk.com/robot/send?access_token=91f2f6****
   */
  dingRobotWebhookUrl?: string;
  /**
   * @remarks
   * The email address of the alert contact. You must specify at least one of the following parameters: PhoneNum, Email, and DingRobotWebhookUrl.
   * 
   * @example
   * someone@example.com
   */
  email?: string;
  /**
   * @remarks
   * The mobile number of the alert contact. You must specify at least one of the following parameters: PhoneNum, Email, and DingRobotWebhookUrl.
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
   * The ID of the resource group. You can obtain the resource group ID in the **Resource Management** console.
   * 
   * @example
   * rg-aek2eq4peca****
   */
  resourceGroupId?: string;
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
      contactName: 'ContactName',
      dingRobotWebhookUrl: 'DingRobotWebhookUrl',
      email: 'Email',
      phoneNum: 'PhoneNum',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
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
      resourceGroupId: 'string',
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


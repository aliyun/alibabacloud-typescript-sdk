// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrUpdateContactRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the alert contact.
   * 
   * *   If you do not specify this parameter, a new alert contact is created.
   * *   If you specify this parameter, the specified alert contact is modified.
   * 
   * @example
   * 123
   */
  contactId?: number;
  /**
   * @remarks
   * The name of the alert contact.
   * 
   * This parameter is required.
   * 
   * @example
   * JohnDoe
   */
  contactName?: string;
  /**
   * @remarks
   * The ID of the alert contact that is shown to the enterprise when the contact is mentioned with the at sign (@) by a third-party instant messaging (IM) tool.
   * 
   * @example
   * A123221
   */
  corpUserId?: string;
  /**
   * @remarks
   * The webhook URL of the DingTalk chatbot.
   * 
   * @example
   * https://oapi.dingtalk.com/robot/send?access_token=69d4e0******
   */
  dingRobotUrl?: string;
  /**
   * @remarks
   * The email address of the alert contact.
   * 
   * > You must specify at least one of the **Phone** and **Email** parameters. Each mobile number or email address can be used for only one alert contact.
   * 
   * @example
   * someone@example.com
   */
  email?: string;
  /**
   * @remarks
   * Specifies whether the email address is verified.
   * 
   * @example
   * true
   */
  isEmailVerify?: boolean;
  /**
   * @remarks
   * The mobile number of the alert contact.
   * 
   * > You must specify at least one of the **Phone** and **Email** parameters. Each mobile number or email address can be used for only one alert contact.
   * 
   * @example
   * 1381111****
   */
  phone?: string;
  /**
   * @remarks
   * The operation that you want to perform if phone calls fail to be answered. Valid values:
   * 
   * *   0: No operation is performed.
   * *   1: A phone call is made again.
   * *   2: A text message is sent.
   * *   3 (default value): The global default value is used.
   * 
   * @example
   * 3
   */
  reissueSendNotice?: number;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmxyexli2****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      contactName: 'ContactName',
      corpUserId: 'CorpUserId',
      dingRobotUrl: 'DingRobotUrl',
      email: 'Email',
      isEmailVerify: 'IsEmailVerify',
      phone: 'Phone',
      reissueSendNotice: 'ReissueSendNotice',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'number',
      contactName: 'string',
      corpUserId: 'string',
      dingRobotUrl: 'string',
      email: 'string',
      isEmailVerify: 'boolean',
      phone: 'string',
      reissueSendNotice: 'number',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


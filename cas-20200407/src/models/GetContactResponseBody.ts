// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetContactResponseBody extends $dara.Model {
  /**
   * @remarks
   * The contact ID.
   * 
   * @example
   * 1352570
   */
  contactId?: number;
  /**
   * @remarks
   * The email address of the contact.
   * 
   * @example
   * test@163.com
   */
  email?: string;
  /**
   * @remarks
   * Indicates whether the email address is verified.
   * 
   * @example
   * 1
   */
  emailStatus?: number;
  /**
   * @remarks
   * The ID card number of the contact. This is required for the CFCA certificate brand and not required for other brands.
   * 
   * @example
   * 142***************
   */
  idCard?: string;
  /**
   * @remarks
   * The phone number of the contact.
   * 
   * @example
   * 1510108****
   */
  mobile?: string;
  /**
   * @remarks
   * Indicates whether the phone number is verified.
   * 
   * @example
   * 1
   */
  mobileStatus?: number;
  /**
   * @remarks
   * The name of the certificate contact.
   * 
   * @example
   * zhang san
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EECA10D5-BD0F-4EF1-B3EA-B4578E5C6F8E
   */
  requestId?: string;
  /**
   * @remarks
   * The webhook URLs of DingTalk, WeCom, or Lark chatbots, in list format.
   */
  webhookList?: string[];
  /**
   * @remarks
   * The webhook URLs of DingTalk, WeCom, or Lark chatbots, in list format as a string.
   * 
   * @example
   * [\\"https://open.feishu.cn/open-apis/bot/v2/hook/dc1aa9b9-47cd-4b34-91ef-73c1034208e5\\"]
   */
  webhooks?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      email: 'Email',
      emailStatus: 'EmailStatus',
      idCard: 'IdCard',
      mobile: 'Mobile',
      mobileStatus: 'MobileStatus',
      name: 'Name',
      requestId: 'RequestId',
      webhookList: 'WebhookList',
      webhooks: 'Webhooks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'number',
      email: 'string',
      emailStatus: 'number',
      idCard: 'string',
      mobile: 'string',
      mobileStatus: 'number',
      name: 'string',
      requestId: 'string',
      webhookList: { 'type': 'array', 'itemType': 'string' },
      webhooks: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.webhookList)) {
      $dara.Model.validateArray(this.webhookList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


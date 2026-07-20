// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateContactRequest extends $dara.Model {
  /**
   * @remarks
   * The email address of the contact.
   * 
   * @example
   * test@126.com
   */
  email?: string;
  /**
   * @remarks
   * The ID card number of the contact. This parameter is required for the CFCA certificate brand and is not required for other brands.
   * 
   * @example
   * 123
   */
  idcard?: string;
  /**
   * @remarks
   * The phone number of the contact.
   * 
   * This parameter is required.
   * 
   * @example
   * 1335678****
   */
  mobile?: string;
  /**
   * @remarks
   * The name of the certificate contact.
   * 
   * This parameter is required.
   * 
   * @example
   * zhang san
   */
  name?: string;
  /**
   * @remarks
   * The webhook URLs of DingTalk, WeCom, or Lark chatbots. The value is a string in list format.
   * 
   * @example
   * [\\"https://open.feishu.cn/open-apis/bot/v2/hook/dc1aa9b9-47cd-4b34-91ef-73c1034208e5\\"]
   */
  webhooks?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      idcard: 'Idcard',
      mobile: 'Mobile',
      name: 'Name',
      webhooks: 'Webhooks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      idcard: 'string',
      mobile: 'string',
      name: 'string',
      webhooks: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


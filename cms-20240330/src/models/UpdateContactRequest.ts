// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateContactRequest extends $dara.Model {
  /**
   * @remarks
   * The email address of the contact.
   * 
   * @example
   * test@aliyun.com
   */
  email?: string;
  /**
   * @remarks
   * The mapping of instant messaging (IM) user IDs. Multiple IM tools are supported.
   * 
   * @example
   * {"dingtalk":"abc123","wechat":"def456"}
   */
  imUserIds?: { [key: string]: string };
  /**
   * @remarks
   * The language.
   * 
   * @example
   * zh_CN
   */
  lang?: string;
  /**
   * @remarks
   * The name of the contact.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The mobile phone number of the contact. Currently, only mobile phone numbers in China are supported.
   * 
   * @example
   * 150123456789
   */
  phone?: string;
  /**
   * @remarks
   * The country code of the mobile phone number, which is typically +86 for China.
   * 
   * @example
   * +86
   */
  phoneCode?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'email',
      imUserIds: 'imUserIds',
      lang: 'lang',
      name: 'name',
      phone: 'phone',
      phoneCode: 'phoneCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      imUserIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      lang: 'string',
      name: 'string',
      phone: 'string',
      phoneCode: 'string',
    };
  }

  validate() {
    if(this.imUserIds) {
      $dara.Model.validateMap(this.imUserIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


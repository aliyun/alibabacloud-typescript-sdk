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
   * The instant messaging (IM) user ID mappings. Multiple IM tools are supported.
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
   * The mobile phone number of the contact. Only Chinese mobile phone numbers are supported.
   * 
   * @example
   * 150123456789
   */
  phone?: string;
  /**
   * @remarks
   * The country code for the mobile phone number, typically +86 for China.
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


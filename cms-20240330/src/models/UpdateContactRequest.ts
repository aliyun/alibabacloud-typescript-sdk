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
   * The IM user ID mappings. Multiple instant messaging tools are supported.
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
   * The mobile phone number of the contact. Only mobile phone numbers in the Chinese mainland are supported.
   * 
   * @example
   * 150123456789
   */
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'email',
      imUserIds: 'imUserIds',
      lang: 'lang',
      name: 'name',
      phone: 'phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      imUserIds: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      lang: 'string',
      name: 'string',
      phone: 'string',
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


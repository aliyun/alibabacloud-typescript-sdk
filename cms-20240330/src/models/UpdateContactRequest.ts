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
   * The mapping of IM user IDs. Multiple instant messaging tools are supported.
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
   * The mobile phone number of the contact. Currently, only Chinese mobile phone numbers are supported.
   * 
   * @example
   * 150123456789
   */
  phone?: string;
  /**
   * @remarks
   * 号码国家码，可带前导 +，如 86、+86。传入后 phone 必须是纯数字，服务端按 <phoneCode>-<phone> 拼号发送，因此 phone 内不能再带 +、00 或区号。不传时按手机号码原样发送。
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


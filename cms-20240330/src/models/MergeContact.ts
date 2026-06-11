// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MergeContact extends $dara.Model {
  /**
   * @remarks
   * The email address.
   * 
   * @example
   * zhangsan@company.com
   */
  email?: string;
  /**
   * @remarks
   * Specifies whether the email address is authenticated.
   * 
   * @example
   * true
   */
  emailVerify?: boolean;
  /**
   * @remarks
   * An extension field used to store additional information.
   * 
   * @example
   * { "department": "运维部", "role": "工程师" }
   */
  extend?: { [key: string]: any };
  /**
   * @remarks
   * The time when the contact was created.
   * 
   * @example
   * 2025-03-11T08:21:58.789Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the contact was last modified.
   * 
   * @example
   * 2025-03-11T08:21:58.789Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * The unique identifier of the contact.
   * 
   * @example
   * user-12345
   */
  identifier?: string;
  /**
   * @remarks
   * The language preference.
   * 
   * @example
   * zh-CN
   */
  lang?: string;
  /**
   * @remarks
   * The name of the contact.
   * 
   * @example
   * 张三
   */
  name?: string;
  /**
   * @remarks
   * The mobile phone number.
   * 
   * @example
   * 13800138000
   */
  phone?: string;
  /**
   * @remarks
   * The country code for the mobile phone number.
   * 
   * @example
   * 86
   */
  phoneCode?: string;
  /**
   * @remarks
   * Specifies whether the mobile phone number is authenticated.
   * 
   * @example
   * true
   */
  phoneVerify?: boolean;
  /**
   * @remarks
   * The source system of the contact.
   * 
   * @example
   * dingtalk
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'email',
      emailVerify: 'emailVerify',
      extend: 'extend',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      identifier: 'identifier',
      lang: 'lang',
      name: 'name',
      phone: 'phone',
      phoneCode: 'phoneCode',
      phoneVerify: 'phoneVerify',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      emailVerify: 'boolean',
      extend: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gmtCreate: 'string',
      gmtModified: 'string',
      identifier: 'string',
      lang: 'string',
      name: 'string',
      phone: 'string',
      phoneCode: 'string',
      phoneVerify: 'boolean',
      source: 'string',
    };
  }

  validate() {
    if(this.extend) {
      $dara.Model.validateMap(this.extend);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


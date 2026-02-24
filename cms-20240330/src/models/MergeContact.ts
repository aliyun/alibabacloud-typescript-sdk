// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MergeContact extends $dara.Model {
  /**
   * @example
   * zhangsan@company.com
   */
  email?: string;
  /**
   * @example
   * true
   */
  emailVerify?: boolean;
  extend?: { [key: string]: any };
  /**
   * @example
   * 2025-03-11T08:21:58.789Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2025-03-11T08:21:58.789Z
   */
  gmtModified?: string;
  /**
   * @example
   * user-12345
   */
  identifier?: string;
  /**
   * @example
   * zh-CN
   */
  lang?: string;
  name?: string;
  /**
   * @example
   * 13800138000
   */
  phone?: string;
  /**
   * @example
   * 86
   */
  phoneCode?: string;
  /**
   * @example
   * true
   */
  phoneVerify?: boolean;
  /**
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


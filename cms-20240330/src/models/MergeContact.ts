// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MergeContact extends $dara.Model {
  /**
   * @remarks
   * 邮箱地址。
   * 
   * @example
   * zhangsan@company.com
   */
  email?: string;
  /**
   * @remarks
   * 邮箱是否已验证。
   * 
   * @example
   * true
   */
  emailVerify?: boolean;
  /**
   * @remarks
   * 扩展字段，用于存储额外信息。
   * 
   * @example
   * { "department": "运维部", "role": "工程师" }
   */
  extend?: { [key: string]: any };
  /**
   * @remarks
   * 创建时间。
   * 
   * @example
   * 2025-03-11T08:21:58.789Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * 最后修改时间。
   * 
   * @example
   * 2025-03-11T08:21:58.789Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * 联系人唯一标识符。
   * 
   * @example
   * user-12345
   */
  identifier?: string;
  /**
   * @remarks
   * 语言偏好。
   * 
   * @example
   * zh-CN
   */
  lang?: string;
  /**
   * @remarks
   * 联系人姓名。
   * 
   * @example
   * 张三
   */
  name?: string;
  /**
   * @remarks
   * 手机号码。
   * 
   * @example
   * 13800138000
   */
  phone?: string;
  /**
   * @remarks
   * 手机号码国家区号。
   * 
   * @example
   * 86
   */
  phoneCode?: string;
  /**
   * @remarks
   * 手机号码是否已验证。
   * 
   * @example
   * true
   */
  phoneVerify?: boolean;
  /**
   * @remarks
   * 联系人来源系统。
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLinkInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The additional information about the unique identifier of the account. For example, if type is set to mobile, set the value of extra to a country code.
   * 
   * @example
   * 1
   */
  extra?: string;
  /**
   * @remarks
   * The unique identifier of the account, such as a mobile number.
   * 
   * This parameter is required.
   * 
   * @example
   * 130***
   */
  identity?: string;
  /**
   * @remarks
   * The account type. Valid values:
   * 
   * *   mobile: a mobile number.
   * *   email: an email address.
   * *   ding: a DingTalk account.
   * *   ram: an Alibaba Cloud Resource Access Management (RAM) user.
   * *   wechat: a WeCom account.
   * *   ldap: a Lightweight Directory Access Protocol (LDAP) account.
   * *   custom: a custom account.
   * 
   * This parameter is required.
   * 
   * @example
   * mobile
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      extra: 'extra',
      identity: 'identity',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extra: 'string',
      identity: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


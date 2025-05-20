// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LinkAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The additional information about the unique identifier of the account. For example, if type is set to mobile, set the value of extra to a country code. For example, a value of 86 specifies a mobile number in the Chinese mainland. If you do not specify this parameter, 86 is used by default.
   * 
   * @example
   * 86
   */
  extra?: string;
  /**
   * @remarks
   * The unique identifier of the account, such as a mobile number.
   * 
   * This parameter is required.
   * 
   * @example
   * eyy***
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
   * ding
   */
  type?: string;
  /**
   * @remarks
   * The ID of the user with which you want to associate an account.
   * 
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      extra: 'extra',
      identity: 'identity',
      type: 'type',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extra: 'string',
      identity: 'string',
      type: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


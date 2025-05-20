// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnLinkAccountRequest extends $dara.Model {
  /**
   * @remarks
   * Additional information for the unique account identifier. For example, when the account is a phone number, this field should be filled with the area code of the phone, such as 86 for Mainland China. If not provided, it defaults to 86.
   * 
   * @example
   * 1
   */
  extra?: string;
  /**
   * @remarks
   * Unique identifier of the account, such as a phone number
   * 
   * This parameter is required.
   * 
   * @example
   * 139****
   */
  identity?: string;
  /**
   * @remarks
   * Account type
   * 
   * mobile: Phone number
   * 
   * email: Email address
   * 
   * ding: DingTalk
   * 
   * ram: Alibaba Cloud RAM User
   * 
   * wechat: WeCom
   * 
   * ldap: LDAP account
   * 
   * custom: Custom account
   * 
   * This parameter is required.
   * 
   * @example
   * mobile
   */
  type?: string;
  /**
   * @remarks
   * User identifier
   * 
   * This parameter is required.
   * 
   * @example
   * uid1
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


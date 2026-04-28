// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AccountLinkInfo extends $dara.Model {
  /**
   * @remarks
   * The type of the account. Valid values:
   * 
   * *   mobile: mobile number
   * *   email: email address
   * *   ding: DingTalk account
   * *   ram: Alibaba Cloud Resource Access Management (RAM) user
   * *   wechat: WeCom account
   * *   ldap: Lightweight Directory Access Protocol (LDAP) account
   * *   custom: custom account
   * 
   * @example
   * mobile
   */
  authenticationType?: string;
  /**
   * @remarks
   * The time when the account was created. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1639762579768
   */
  createdAt?: number;
  /**
   * @remarks
   * The display name of the account. For example, the unique identifier of an LDAP account is its UID, but the account display name can be the job number or other information.
   * 
   * @example
   * 001
   */
  displayName?: string;
  /**
   * @remarks
   * The domain ID.
   * 
   * @example
   * bj1
   */
  domainId?: string;
  /**
   * @remarks
   * The additional information about the account. If the account type is a mobile number, the value of this parameter indicates the country code. For example, the country code in the Chinese mainland is 86 and a value of 86 is returned only if authentication_type is set to mobile.
   * 
   * @example
   * 86
   */
  extra?: string;
  /**
   * @remarks
   * The unique identifier of the account.
   * 
   * @example
   * 136***000
   */
  identity?: string;
  lastLoginTime?: number;
  status?: string;
  /**
   * @remarks
   * The user ID of the account.
   * 
   * @example
   * 00016a587b62b50003deea299a4f5b50
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      authenticationType: 'authentication_type',
      createdAt: 'created_at',
      displayName: 'display_name',
      domainId: 'domain_id',
      extra: 'extra',
      identity: 'identity',
      lastLoginTime: 'last_login_time',
      status: 'status',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationType: 'string',
      createdAt: 'number',
      displayName: 'string',
      domainId: 'string',
      extra: 'string',
      identity: 'string',
      lastLoginTime: 'number',
      status: 'string',
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


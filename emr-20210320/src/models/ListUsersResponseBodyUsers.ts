// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUsersResponseBodyUsers extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1509338726362
   */
  createTime?: number;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * 添加test用户
   */
  description?: string;
  /**
   * @remarks
   * The Base64-encoded content of the keytab file.
   * 
   * @example
   * DBEDASDF==
   */
  keytabHex?: string;
  /**
   * @remarks
   * The Lightweight Directory Access Protocol (LDAP) link.
   * 
   * @example
   * ldap://master-1-1.c-c6ce2d16d118****.cn-hangzhou.emr.aliyuncs.com:10389
   */
  ldapUrl?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 125046002175****
   */
  userId?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * yun****
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      keytabHex: 'KeytabHex',
      ldapUrl: 'LdapUrl',
      userId: 'UserId',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      description: 'string',
      keytabHex: 'string',
      ldapUrl: 'string',
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


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

export class ListUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the user is an admin user. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * False
   * 
   * @deprecated
   */
  isAdmin?: boolean;
  /**
   * @remarks
   * The maximum number of entries returned.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C89568980
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 200
   */
  totalCount?: number;
  /**
   * @remarks
   * The users.
   */
  users?: ListUsersResponseBodyUsers[];
  static names(): { [key: string]: string } {
    return {
      isAdmin: 'IsAdmin',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isAdmin: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      users: { 'type': 'array', 'itemType': ListUsersResponseBodyUsers },
    };
  }

  validate() {
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


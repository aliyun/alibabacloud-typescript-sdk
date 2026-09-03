// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDirectoryUsersResponseBodyUsers extends $dara.Model {
  /**
   * @remarks
   * The number of assigned cloud computers.
   * 
   * @example
   * 2
   */
  assignedDesktopNumber?: number;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * Alice
   */
  displayName?: string;
  /**
   * @remarks
   * The new display name of the user.
   * 
   * @example
   * 张三
   */
  displayNameNew?: string;
  /**
   * @remarks
   * The email address.
   * 
   * @example
   * user@example.com
   */
  email?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * Alice
   */
  endUser?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * 130********
   */
  phone?: string;
  /**
   * @remarks
   * The user principal name (UPN).
   * 
   * @example
   * alice@example.com
   */
  userPrincipalName?: string;
  static names(): { [key: string]: string } {
    return {
      assignedDesktopNumber: 'AssignedDesktopNumber',
      displayName: 'DisplayName',
      displayNameNew: 'DisplayNameNew',
      email: 'Email',
      endUser: 'EndUser',
      phone: 'Phone',
      userPrincipalName: 'UserPrincipalName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignedDesktopNumber: 'number',
      displayName: 'string',
      displayNameNew: 'string',
      email: 'string',
      endUser: 'string',
      phone: 'string',
      userPrincipalName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDirectoryUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination token for the next query. An empty value indicates that no more results exist.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The array of usernames in the AD directory. If the AD directory contains only the Administrator and Guest users and no other users, an empty Users array is returned.
   */
  users?: ListDirectoryUsersResponseBodyUsers[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      users: { 'type': 'array', 'itemType': ListDirectoryUsersResponseBodyUsers },
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


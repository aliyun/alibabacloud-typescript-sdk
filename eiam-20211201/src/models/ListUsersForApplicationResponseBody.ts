// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUsersForApplicationResponseBodyUsersApplicationRoles extends $dara.Model {
  /**
   * @remarks
   * The application role ID.
   * 
   * @example
   * app_role_mkv7rgt4ds8d8v0qtzev2mxxxx
   */
  applicationRoleId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationRoleId: 'ApplicationRoleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationRoleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersForApplicationResponseBodyUsers extends $dara.Model {
  /**
   * @remarks
   * The list of application roles.
   */
  applicationRoles?: ListUsersForApplicationResponseBodyUsersApplicationRoles[];
  /**
   * @remarks
   * The account ID.
   * 
   * @example
   * user_d6sbsuumeta4h66ec3il7yxxxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationRoles: 'ApplicationRoles',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationRoles: { 'type': 'array', 'itemType': ListUsersForApplicationResponseBodyUsersApplicationRoles },
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applicationRoles)) {
      $dara.Model.validateArray(this.applicationRoles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUsersForApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of accounts.
   */
  users?: ListUsersForApplicationResponseBodyUsers[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      users: { 'type': 'array', 'itemType': ListUsersForApplicationResponseBodyUsers },
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


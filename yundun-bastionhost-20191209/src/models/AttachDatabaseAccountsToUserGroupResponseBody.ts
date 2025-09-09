// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachDatabaseAccountsToUserGroupResponseBodyResultsDatabaseAccounts extends $dara.Model {
  /**
   * @remarks
   * The error code returned. If OK is returned, the authorization was successful. If another error code is returned, the authorization failed.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The database account ID.
   * 
   * @example
   * 8
   */
  databaseAccountId?: string;
  /**
   * @remarks
   * The error message returned.
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      databaseAccountId: 'DatabaseAccountId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      databaseAccountId: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachDatabaseAccountsToUserGroupResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * The error code returned. If OK is returned, the authorization was successful. If another error code is returned, the authorization failed.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * A list that shows the authorization results of the database accounts.
   */
  databaseAccounts?: AttachDatabaseAccountsToUserGroupResponseBodyResultsDatabaseAccounts[];
  /**
   * @remarks
   * The database ID.
   * 
   * @example
   * 2
   */
  databaseId?: string;
  /**
   * @remarks
   * The error message returned.
   */
  message?: string;
  /**
   * @remarks
   * The user group ID.
   * 
   * @example
   * 1
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      databaseAccounts: 'DatabaseAccounts',
      databaseId: 'DatabaseId',
      message: 'Message',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      databaseAccounts: { 'type': 'array', 'itemType': AttachDatabaseAccountsToUserGroupResponseBodyResultsDatabaseAccounts },
      databaseId: 'string',
      message: 'string',
      userGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.databaseAccounts)) {
      $dara.Model.validateArray(this.databaseAccounts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachDatabaseAccountsToUserGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5D0EB759-CB0A-537D-A2CC-13A9854FA08D
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the call.
   */
  results?: AttachDatabaseAccountsToUserGroupResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': AttachDatabaseAccountsToUserGroupResponseBodyResults },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


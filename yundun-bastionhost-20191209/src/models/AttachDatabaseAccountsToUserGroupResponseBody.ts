// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachDatabaseAccountsToUserGroupResponseBodyResultsDatabaseAccounts extends $dara.Model {
  /**
   * @remarks
   * The error code. If the value is \\`OK\\`, the authorization was successful. Other values indicate that the authorization failed.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The ID of the database account.
   * 
   * @example
   * 8
   */
  databaseAccountId?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * NULL
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
   * The error code. If the value is \\`OK\\`, the authorization was successful. Other values indicate that the authorization failed.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * A list of database account information.
   */
  databaseAccounts?: AttachDatabaseAccountsToUserGroupResponseBodyResultsDatabaseAccounts[];
  /**
   * @remarks
   * The ID of the database instance.
   * 
   * @example
   * 2
   */
  databaseId?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * NULL
   */
  message?: string;
  /**
   * @remarks
   * The ID of the user group.
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
   * The ID of the request.
   * 
   * @example
   * 5D0EB759-CB0A-537D-A2CC-13A9854FA08D
   */
  requestId?: string;
  /**
   * @remarks
   * The results of the call.
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


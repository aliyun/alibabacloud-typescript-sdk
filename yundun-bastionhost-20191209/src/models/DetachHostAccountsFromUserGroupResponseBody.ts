// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachHostAccountsFromUserGroupResponseBodyResultsHostAccounts extends $dara.Model {
  /**
   * @remarks
   * The result code of removing the authorized host account from the user group. Valid values:
   * - **OK**: The operation was successful.
   * - **UNEXPECTED**: An unknown error occurred.
   * - **INVALID_ARGUMENT**: The request parameters are invalid.
   * - **OBJECT_NOT_FOUND**: The specified object does not exist.
   * - **OBJECT_AlREADY_EXISTS**: The specified object already exists.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The host account ID.
   * 
   * @example
   * １
   */
  hostAccountId?: string;
  /**
   * @remarks
   * This parameter is deprecated and can be ignored.
   * 
   * @example
   * None
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hostAccountId: 'HostAccountId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hostAccountId: 'string',
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

export class DetachHostAccountsFromUserGroupResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * The result code of the operation. Valid values:
   * - **OK**: The operation was successful.
   * - **UNEXPECTED**: An unknown error occurred.
   * - **INVALID_ARGUMENT**: The request parameters are invalid.
   * - **OBJECT_NOT_FOUND**: The specified object does not exist.
   * - **OBJECT_AlREADY_EXISTS**: The specified object already exists.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The results of removing authorized host accounts from the user group.
   */
  hostAccounts?: DetachHostAccountsFromUserGroupResponseBodyResultsHostAccounts[];
  /**
   * @remarks
   * The host ID.
   * 
   * @example
   * １
   */
  hostId?: string;
  /**
   * @remarks
   * This parameter is deprecated and can be ignored.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The user group ID.
   * 
   * @example
   * １
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hostAccounts: 'HostAccounts',
      hostId: 'HostId',
      message: 'Message',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hostAccounts: { 'type': 'array', 'itemType': DetachHostAccountsFromUserGroupResponseBodyResultsHostAccounts },
      hostId: 'string',
      message: 'string',
      userGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.hostAccounts)) {
      $dara.Model.validateArray(this.hostAccounts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachHostAccountsFromUserGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EC9BF0F4-8983-491A-BC8C-1B4DD94976DE
   */
  requestId?: string;
  /**
   * @remarks
   * The call results of the operation.
   */
  results?: DetachHostAccountsFromUserGroupResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': DetachHostAccountsFromUserGroupResponseBodyResults },
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


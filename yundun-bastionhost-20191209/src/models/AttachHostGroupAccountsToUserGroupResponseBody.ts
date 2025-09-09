// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachHostGroupAccountsToUserGroupResponseBodyResultsHostAccountNames extends $dara.Model {
  /**
   * @remarks
   * The return code that indicates whether the user group was authorized to manage the specified host account. Valid values:
   * 
   * *   **OK**: The call was successful.
   * *   **UNEXPECTED**: An unknown error occurred.
   * *   **INVALID_ARGUMENT**: A request parameter is invalid.
   * *   **OBJECT_NOT_FOUND**: The specified object on which you want to perform the operation does not exist.
   * *   **OBJECT_AlREADY_EXISTS**: The specified object on which you want to perform the operation already exists.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The name of the host account.
   * 
   * @example
   * abc
   */
  hostAccountName?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hostAccountName: 'HostAccountName',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hostAccountName: 'string',
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

export class AttachHostGroupAccountsToUserGroupResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * The return code that indicates whether the call was successful. Valid values:
   * 
   * *   **OK**: The call was successful.
   * *   **UNEXPECTED**: An unknown error occurred.
   * *   **INVALID_ARGUMENT**: A request parameter is invalid.
   * *   **OBJECT_NOT_FOUND**: The specified object on which you want to perform the operation does not exist.
   * *   **OBJECT_AlREADY_EXISTS**: The specified object on which you want to perform the operation already exists.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The result of authorizing the user group to manage the specified host accounts.
   */
  hostAccountNames?: AttachHostGroupAccountsToUserGroupResponseBodyResultsHostAccountNames[];
  /**
   * @remarks
   * The ID of the host group.
   * 
   * @example
   * 1
   */
  hostGroupId?: string;
  /**
   * @remarks
   * This parameter is deprecated.
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
      hostAccountNames: 'HostAccountNames',
      hostGroupId: 'HostGroupId',
      message: 'Message',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hostAccountNames: { 'type': 'array', 'itemType': AttachHostGroupAccountsToUserGroupResponseBodyResultsHostAccountNames },
      hostGroupId: 'string',
      message: 'string',
      userGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.hostAccountNames)) {
      $dara.Model.validateArray(this.hostAccountNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachHostGroupAccountsToUserGroupResponseBody extends $dara.Model {
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
   * The result of the call.
   */
  results?: AttachHostGroupAccountsToUserGroupResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': AttachHostGroupAccountsToUserGroupResponseBodyResults },
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


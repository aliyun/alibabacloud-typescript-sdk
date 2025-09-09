// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachHostAccountsFromUserResponseBodyResultsHostAccounts extends $dara.Model {
  /**
   * @remarks
   * The return code that indicates whether permissions on the specified host accounts were revoked from the user. Valid values:
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
   * The host account ID.
   * 
   * @example
   * 1
   */
  hostAccountId?: string;
  /**
   * @remarks
   * This parameter is deprecated.
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

export class DetachHostAccountsFromUserResponseBodyResults extends $dara.Model {
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
   * The result of revoking permissions on the specified host accounts from the user.
   */
  hostAccounts?: DetachHostAccountsFromUserResponseBodyResultsHostAccounts[];
  /**
   * @remarks
   * The host ID.
   * 
   * @example
   * 1
   */
  hostId?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   */
  message?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hostAccounts: 'HostAccounts',
      hostId: 'HostId',
      message: 'Message',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hostAccounts: { 'type': 'array', 'itemType': DetachHostAccountsFromUserResponseBodyResultsHostAccounts },
      hostId: 'string',
      message: 'string',
      userId: 'string',
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

export class DetachHostAccountsFromUserResponseBody extends $dara.Model {
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
  results?: DetachHostAccountsFromUserResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': DetachHostAccountsFromUserResponseBodyResults },
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


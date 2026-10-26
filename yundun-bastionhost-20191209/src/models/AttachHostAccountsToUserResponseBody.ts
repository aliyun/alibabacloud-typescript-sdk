// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachHostAccountsToUserResponseBodyResultsHostAccounts extends $dara.Model {
  /**
   * @remarks
   * The result returned for the operation of authorizing host accounts for the user. Valid values:
   * - **OK**: The operation is successful.
   * - **UNEXPECTED**: An unknown error occurred.
   * - **INVALID_ARGUMENT**: A request parameter is invalid.
   * - **OBJECT_NOT_FOUND**: The object on which the operation is performed does not exist.
   * - **OBJECT_AlREADY_EXISTS**: The object on which the operation is performed already exists.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The ID of the host account.
   * 
   * @example
   * 1
   */
  hostAccountId?: string;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated. You can ignore it.
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

export class AttachHostAccountsToUserResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * The result of the API call. Valid values:
   * - **OK**: The operation is successful.
   * - **UNEXPECTED**: An unknown error occurred.
   * - **INVALID_ARGUMENT**: A request parameter is invalid.
   * 
   *     > Check the request parameters, ensure that they are correct, and then call the operation again.
   * 
   * - **OBJECT_NOT_FOUND**: The object on which the operation is performed does not exist.
   * 
   *     > Check whether the ID of the Bastionhost instance exists, whether the host exists, and whether the host ID is correct, and then call the operation again.
   * 
   * - **OBJECT_AlREADY_EXISTS**: The object on which the operation is performed already exists.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The results returned for the operation of authorizing host accounts for the user.
   */
  hostAccounts?: AttachHostAccountsToUserResponseBodyResultsHostAccounts[];
  /**
   * @remarks
   * The ID of the host.
   * 
   * @example
   * 1
   */
  hostId?: string;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated. You can ignore it.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The ID of the user.
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
      hostAccounts: { 'type': 'array', 'itemType': AttachHostAccountsToUserResponseBodyResultsHostAccounts },
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

export class AttachHostAccountsToUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EC9BF0F4-8983-491A-BC8C-1B4DD94976DE
   */
  requestId?: string;
  /**
   * @remarks
   * The results of the API call.
   */
  results?: AttachHostAccountsToUserResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': AttachHostAccountsToUserResponseBodyResults },
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


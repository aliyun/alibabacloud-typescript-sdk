// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachHostGroupAccountsToUserResponseBodyResultsHostAccountNames extends $dara.Model {
  /**
   * @remarks
   * The result code of the operation to grant the user access to the host account. Valid values:
   * - **OK**: The operation succeeded.
   * - **UNEXPECTED**: An unknown error occurred.
   * - **INVALID_ARGUMENT**: The specified request parameter is invalid.
   * - **OBJECT_NOT_FOUND**: The specified object does not exist.
   * - **OBJECT_AlREADY_EXISTS** : The specified object already exists.
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
   * root
   */
  hostAccountName?: string;
  /**
   * @remarks
   * **[Deprecated]** This parameter is deprecated. You can ignore this parameter.
   * 
   * @example
   * None
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

export class AttachHostGroupAccountsToUserResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * The result code of the API call. Valid values:
   * - **OK**: The operation succeeded.
   * - **UNEXPECTED**: An unknown error occurred.
   * - **INVALID_ARGUMENT**: The specified request parameter is invalid.
   * - **OBJECT_NOT_FOUND**: The specified object does not exist.
   * - **OBJECT_AlREADY_EXISTS** : The specified object already exists.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The results of the operation to grant the user access to the host accounts.
   */
  hostAccountNames?: AttachHostGroupAccountsToUserResponseBodyResultsHostAccountNames[];
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
   * **[Deprecated]** This parameter is deprecated. You can ignore this parameter.
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
      hostAccountNames: 'HostAccountNames',
      hostGroupId: 'HostGroupId',
      message: 'Message',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hostAccountNames: { 'type': 'array', 'itemType': AttachHostGroupAccountsToUserResponseBodyResultsHostAccountNames },
      hostGroupId: 'string',
      message: 'string',
      userId: 'string',
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

export class AttachHostGroupAccountsToUserResponseBody extends $dara.Model {
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
  results?: AttachHostGroupAccountsToUserResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': AttachHostGroupAccountsToUserResponseBodyResults },
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


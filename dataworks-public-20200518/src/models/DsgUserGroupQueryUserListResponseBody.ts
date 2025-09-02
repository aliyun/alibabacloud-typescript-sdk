// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DsgUserGroupQueryUserListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name of the user.
   * 
   * @example
   * user1
   */
  accountName?: string;
  /**
   * @remarks
   * The type of the user. Valid values:
   * 
   * *   1 to 5: Alibaba Cloud account
   * *   6: RAM role
   * 
   * @example
   * 2
   */
  accountType?: number;
  /**
   * @remarks
   * The user ID or role ID.
   * 
   * @example
   * 234
   */
  baseId?: string;
  /**
   * @remarks
   * The parent user ID. This parameter is required if a RAM user is used.
   * 
   * @example
   * 123
   */
  parentAccountId?: string;
  /**
   * @remarks
   * The name of the Alibaba Cloud account or RAM role. The return value of this parameter must be used if the user group is created by using an Alibaba Cloud account or a RAM role.
   * 
   * @example
   * user:user1
   */
  yunAccount?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountType: 'AccountType',
      baseId: 'BaseId',
      parentAccountId: 'ParentAccountId',
      yunAccount: 'YunAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountType: 'number',
      baseId: 'string',
      parentAccountId: 'string',
      yunAccount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DsgUserGroupQueryUserListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   */
  data?: DsgUserGroupQueryUserListResponseBodyData[];
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 1029030003
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * param error
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 400
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 102400001
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DsgUserGroupQueryUserListResponseBodyData },
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'number',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


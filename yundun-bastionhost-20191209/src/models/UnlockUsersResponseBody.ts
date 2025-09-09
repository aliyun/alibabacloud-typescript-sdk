// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnlockUsersResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * The result of the call. Valid values:
   * 
   * *   **OK**: The call was successful.
   * 
   * *   **UNEXPECTED**: An unknown error occurred.
   * 
   * *   **INVALID_ARGUMENT**: A request parameter is invalid.
   * 
   *     **
   * 
   *     **Note**Make sure that the request parameters are valid and call the operation again.
   * 
   * *   **OBJECT_NOT_FOUND**: The specified object on which you want to perform the operation does not exist.
   * 
   *     **
   * 
   *     **Note**Check whether the specified ID of the bastion host exists, whether the specified hosts exist, and whether the specified host IDs are valid. Then, call the operation again.
   * 
   * *   **OBJECT_AlREADY_EXISTS**: The specified object on which you want to perform the operation already exists.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * N/A
   */
  message?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * １
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * EC9BF0F4-8983-491A-BC8C-1B4DD94976DE
   */
  requestId?: string;
  /**
   * @remarks
   * An array that consists of information about the result of the call.
   */
  results?: UnlockUsersResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': UnlockUsersResponseBodyResults },
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


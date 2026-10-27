// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetUserPasswordResponseBodyResetUsersResultFailedUsers extends $dara.Model {
  /**
   * @remarks
   * The convenience user for whom the password reset failed.
   * 
   * @example
   * alice
   */
  endUserId?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InvalidUsername
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * test123 is an invalid username.
   */
  errorMessage?: string;
  static names(): { [key: string]: string } {
    return {
      endUserId: 'EndUserId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endUserId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetUserPasswordResponseBodyResetUsersResult extends $dara.Model {
  /**
   * @remarks
   * The list of convenience users for whom the password reset failed.
   */
  failedUsers?: ResetUserPasswordResponseBodyResetUsersResultFailedUsers[];
  /**
   * @remarks
   * The list of convenience users to whom the password reset emails have been sent.
   */
  resetUsers?: string[];
  static names(): { [key: string]: string } {
    return {
      failedUsers: 'FailedUsers',
      resetUsers: 'ResetUsers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedUsers: { 'type': 'array', 'itemType': ResetUserPasswordResponseBodyResetUsersResultFailedUsers },
      resetUsers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.failedUsers)) {
      $dara.Model.validateArray(this.failedUsers);
    }
    if(Array.isArray(this.resetUsers)) {
      $dara.Model.validateArray(this.resetUsers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResetUserPasswordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 32D05B39-E6EE-4D7A-9FD0-762A26859D0D
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the password reset operation for the convenience users.
   */
  resetUsersResult?: ResetUserPasswordResponseBodyResetUsersResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resetUsersResult: 'ResetUsersResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resetUsersResult: ResetUserPasswordResponseBodyResetUsersResult,
    };
  }

  validate() {
    if(this.resetUsersResult && typeof (this.resetUsersResult as any).validate === 'function') {
      (this.resetUsersResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


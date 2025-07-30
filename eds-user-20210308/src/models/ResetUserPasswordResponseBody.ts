// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetUserPasswordResponseBodyResetUsersResultFailedUsers extends $dara.Model {
  /**
   * @remarks
   * The ID of the convenience user whose password failed to be reset.
   * 
   * @example
   * test123
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
   * The information about the convenience users whose passwords failed to be reset.
   */
  failedUsers?: ResetUserPasswordResponseBodyResetUsersResultFailedUsers[];
  /**
   * @remarks
   * The convenience users to which the system sent a password reset email.
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
   * The ID of the request.
   * 
   * @example
   * 32D05B39-E6EE-4D7A-9FD0-762A26859D0D
   */
  requestId?: string;
  /**
   * @remarks
   * The result of resetting the password of the convenience user.
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


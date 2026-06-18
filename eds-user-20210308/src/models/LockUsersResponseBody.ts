// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LockUsersResponseBodyLockUsersResultFailedUsers extends $dara.Model {
  /**
   * @remarks
   * The username of the convenience account that failed to lock.
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

export class LockUsersResponseBodyLockUsersResult extends $dara.Model {
  /**
   * @remarks
   * A list of convenience accounts that failed to lock.
   */
  failedUsers?: LockUsersResponseBodyLockUsersResultFailedUsers[];
  /**
   * @remarks
   * A list of successfully locked convenience accounts.
   */
  lockedUsers?: string[];
  static names(): { [key: string]: string } {
    return {
      failedUsers: 'FailedUsers',
      lockedUsers: 'LockedUsers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedUsers: { 'type': 'array', 'itemType': LockUsersResponseBodyLockUsersResultFailedUsers },
      lockedUsers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.failedUsers)) {
      $dara.Model.validateArray(this.failedUsers);
    }
    if(Array.isArray(this.lockedUsers)) {
      $dara.Model.validateArray(this.lockedUsers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LockUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result of the LockUsers operation.
   */
  lockUsersResult?: LockUsersResponseBodyLockUsersResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      lockUsersResult: 'LockUsersResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lockUsersResult: LockUsersResponseBodyLockUsersResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.lockUsersResult && typeof (this.lockUsersResult as any).validate === 'function') {
      (this.lockUsersResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


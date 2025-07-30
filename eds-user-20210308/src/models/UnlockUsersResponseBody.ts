// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnlockUsersResponseBodyUnlockUsersResultFailedUsers extends $dara.Model {
  /**
   * @remarks
   * The ID of the convenience user that failed to be unlocked.
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

export class UnlockUsersResponseBodyUnlockUsersResult extends $dara.Model {
  /**
   * @remarks
   * The convenience users that failed to be unlocked.
   */
  failedUsers?: UnlockUsersResponseBodyUnlockUsersResultFailedUsers[];
  /**
   * @remarks
   * The convenience users that were unlocked.
   */
  unlockedUsers?: string[];
  static names(): { [key: string]: string } {
    return {
      failedUsers: 'FailedUsers',
      unlockedUsers: 'UnlockedUsers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedUsers: { 'type': 'array', 'itemType': UnlockUsersResponseBodyUnlockUsersResultFailedUsers },
      unlockedUsers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.failedUsers)) {
      $dara.Model.validateArray(this.failedUsers);
    }
    if(Array.isArray(this.unlockedUsers)) {
      $dara.Model.validateArray(this.unlockedUsers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UnlockUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 023F4EC4-3602-4A3E-A514-4970847D59DB
   */
  requestId?: string;
  /**
   * @remarks
   * The result of unlocking the convenience user.
   */
  unlockUsersResult?: UnlockUsersResponseBodyUnlockUsersResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      unlockUsersResult: 'UnlockUsersResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      unlockUsersResult: UnlockUsersResponseBodyUnlockUsersResult,
    };
  }

  validate() {
    if(this.unlockUsersResult && typeof (this.unlockUsersResult as any).validate === 'function') {
      (this.unlockUsersResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


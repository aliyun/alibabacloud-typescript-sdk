// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveUsersResponseBodyRemoveUsersResultFailedUsers extends $dara.Model {
  /**
   * @remarks
   * The ID of the convenience user that failed to be removed.
   * 
   * @example
   * test2
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
   * test2 is an invalid username.
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

export class RemoveUsersResponseBodyRemoveUsersResult extends $dara.Model {
  /**
   * @remarks
   * The convenience users that failed to be removed.
   */
  failedUsers?: RemoveUsersResponseBodyRemoveUsersResultFailedUsers[];
  /**
   * @remarks
   * The convenience users that were removed.
   */
  removedUsers?: string[];
  static names(): { [key: string]: string } {
    return {
      failedUsers: 'FailedUsers',
      removedUsers: 'RemovedUsers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedUsers: { 'type': 'array', 'itemType': RemoveUsersResponseBodyRemoveUsersResultFailedUsers },
      removedUsers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.failedUsers)) {
      $dara.Model.validateArray(this.failedUsers);
    }
    if(Array.isArray(this.removedUsers)) {
      $dara.Model.validateArray(this.removedUsers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveUsersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result of removing the convenience user.
   */
  removeUsersResult?: RemoveUsersResponseBodyRemoveUsersResult;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      removeUsersResult: 'RemoveUsersResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      removeUsersResult: RemoveUsersResponseBodyRemoveUsersResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.removeUsersResult && typeof (this.removeUsersResult as any).validate === 'function') {
      (this.removeUsersResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


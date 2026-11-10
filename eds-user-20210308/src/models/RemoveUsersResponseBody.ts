// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveUsersResponseBodyRemoveUsersResultFailedUsers extends $dara.Model {
  /**
   * @remarks
   * The convenience user that failed to be deleted.
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
   * The collection of information about users that failed to be deleted.
   */
  failedUsers?: RemoveUsersResponseBodyRemoveUsersResultFailedUsers[];
  /**
   * @remarks
   * The list of usernames of convenience users for which asynchronous deletion tasks already exist and have not finished. This request does not create duplicate deletion tasks for these users. The return of this field does not indicate that the users have been deleted.
   */
  processingUsers?: string[];
  /**
   * @remarks
   * The convenience users that were successfully deleted.
   */
  removedUsers?: string[];
  /**
   * @remarks
   * The list of usernames of convenience users for which asynchronous deletion tasks have been successfully accepted and created in this request. Asynchronous deletion is used when UnbindDesktops is set to true. Task acceptance does not mean that the convenience users have been deleted.
   */
  submittedUsers?: string[];
  static names(): { [key: string]: string } {
    return {
      failedUsers: 'FailedUsers',
      processingUsers: 'ProcessingUsers',
      removedUsers: 'RemovedUsers',
      submittedUsers: 'SubmittedUsers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedUsers: { 'type': 'array', 'itemType': RemoveUsersResponseBodyRemoveUsersResultFailedUsers },
      processingUsers: { 'type': 'array', 'itemType': 'string' },
      removedUsers: { 'type': 'array', 'itemType': 'string' },
      submittedUsers: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.failedUsers)) {
      $dara.Model.validateArray(this.failedUsers);
    }
    if(Array.isArray(this.processingUsers)) {
      $dara.Model.validateArray(this.processingUsers);
    }
    if(Array.isArray(this.removedUsers)) {
      $dara.Model.validateArray(this.removedUsers);
    }
    if(Array.isArray(this.submittedUsers)) {
      $dara.Model.validateArray(this.submittedUsers);
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
   * The result of the convenience user deletion operation.
   */
  removeUsersResult?: RemoveUsersResponseBodyRemoveUsersResult;
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


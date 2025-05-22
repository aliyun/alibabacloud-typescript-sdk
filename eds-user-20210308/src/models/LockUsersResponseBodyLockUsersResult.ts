// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LockUsersResponseBodyLockUsersResultFailedUsers } from "./LockUsersResponseBodyLockUsersResultFailedUsers";


export class LockUsersResponseBodyLockUsersResult extends $dara.Model {
  /**
   * @remarks
   * The convenience users that failed to be locked.
   */
  failedUsers?: LockUsersResponseBodyLockUsersResultFailedUsers[];
  /**
   * @remarks
   * The convenience users that were locked.
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


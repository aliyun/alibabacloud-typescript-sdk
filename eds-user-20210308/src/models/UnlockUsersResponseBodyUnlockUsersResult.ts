// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UnlockUsersResponseBodyUnlockUsersResultFailedUsers } from "./UnlockUsersResponseBodyUnlockUsersResultFailedUsers";


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


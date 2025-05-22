// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ResetUserPasswordResponseBodyResetUsersResultFailedUsers } from "./ResetUserPasswordResponseBodyResetUsersResultFailedUsers";


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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RemoveUsersResponseBodyRemoveUsersResultFailedUsers } from "./RemoveUsersResponseBodyRemoveUsersResultFailedUsers";


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


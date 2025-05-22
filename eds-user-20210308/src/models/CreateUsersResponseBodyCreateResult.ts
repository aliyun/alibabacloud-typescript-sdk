// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateUsersResponseBodyCreateResultCreatedUsers } from "./CreateUsersResponseBodyCreateResultCreatedUsers";
import { CreateUsersResponseBodyCreateResultFailedUsers } from "./CreateUsersResponseBodyCreateResultFailedUsers";


export class CreateUsersResponseBodyCreateResult extends $dara.Model {
  /**
   * @remarks
   * Details of the created convenience users.
   */
  createdUsers?: CreateUsersResponseBodyCreateResultCreatedUsers[];
  /**
   * @remarks
   * Details of the convenience users that failed to be created.
   */
  failedUsers?: CreateUsersResponseBodyCreateResultFailedUsers[];
  static names(): { [key: string]: string } {
    return {
      createdUsers: 'CreatedUsers',
      failedUsers: 'FailedUsers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdUsers: { 'type': 'array', 'itemType': CreateUsersResponseBodyCreateResultCreatedUsers },
      failedUsers: { 'type': 'array', 'itemType': CreateUsersResponseBodyCreateResultFailedUsers },
    };
  }

  validate() {
    if(Array.isArray(this.createdUsers)) {
      $dara.Model.validateArray(this.createdUsers);
    }
    if(Array.isArray(this.failedUsers)) {
      $dara.Model.validateArray(this.failedUsers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


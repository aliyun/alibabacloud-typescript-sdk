// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListByUserGroupIdResponseBodyResultUserGroupModels } from "./ListByUserGroupIdResponseBodyResultUserGroupModels";


export class ListByUserGroupIdResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * List of failed user groups.
   */
  failedUserGroupIds?: string[];
  /**
   * @remarks
   * The details of the user group that was queried.
   */
  userGroupModels?: ListByUserGroupIdResponseBodyResultUserGroupModels[];
  static names(): { [key: string]: string } {
    return {
      failedUserGroupIds: 'FailedUserGroupIds',
      userGroupModels: 'UserGroupModels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedUserGroupIds: { 'type': 'array', 'itemType': 'string' },
      userGroupModels: { 'type': 'array', 'itemType': ListByUserGroupIdResponseBodyResultUserGroupModels },
    };
  }

  validate() {
    if(Array.isArray(this.failedUserGroupIds)) {
      $dara.Model.validateArray(this.failedUserGroupIds);
    }
    if(Array.isArray(this.userGroupModels)) {
      $dara.Model.validateArray(this.userGroupModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


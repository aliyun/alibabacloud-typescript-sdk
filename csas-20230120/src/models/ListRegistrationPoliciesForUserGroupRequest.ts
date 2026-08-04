// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRegistrationPoliciesForUserGroupRequest extends $dara.Model {
  /**
   * @remarks
   * A collection of user group IDs. You can specify up to 100 user group IDs.
   * 
   * This parameter is required.
   */
  userGroupIds?: string[];
  static names(): { [key: string]: string } {
    return {
      userGroupIds: 'UserGroupIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.userGroupIds)) {
      $dara.Model.validateArray(this.userGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRegistrationPoliciesForUserGroupResponseBodyUserGroupsPolicies } from "./ListRegistrationPoliciesForUserGroupResponseBodyUserGroupsPolicies";


export class ListRegistrationPoliciesForUserGroupResponseBodyUserGroups extends $dara.Model {
  policies?: ListRegistrationPoliciesForUserGroupResponseBodyUserGroupsPolicies[];
  /**
   * @example
   * usergroup-6f1ef2fc56b6****
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      policies: 'Policies',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policies: { 'type': 'array', 'itemType': ListRegistrationPoliciesForUserGroupResponseBodyUserGroupsPolicies },
      userGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policies)) {
      $dara.Model.validateArray(this.policies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


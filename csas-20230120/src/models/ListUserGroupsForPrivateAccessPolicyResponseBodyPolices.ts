// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListUserGroupsForPrivateAccessPolicyResponseBodyPolicesUserGroups } from "./ListUserGroupsForPrivateAccessPolicyResponseBodyPolicesUserGroups";


export class ListUserGroupsForPrivateAccessPolicyResponseBodyPolices extends $dara.Model {
  /**
   * @example
   * pa-policy-1b0d0e8b4bcf****
   */
  policyId?: string;
  userGroups?: ListUserGroupsForPrivateAccessPolicyResponseBodyPolicesUserGroups[];
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      userGroups: 'UserGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'string',
      userGroups: { 'type': 'array', 'itemType': ListUserGroupsForPrivateAccessPolicyResponseBodyPolicesUserGroups },
    };
  }

  validate() {
    if(Array.isArray(this.userGroups)) {
      $dara.Model.validateArray(this.userGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


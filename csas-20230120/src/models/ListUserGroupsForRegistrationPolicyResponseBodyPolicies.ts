// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListUserGroupsForRegistrationPolicyResponseBodyPoliciesUserGroups } from "./ListUserGroupsForRegistrationPolicyResponseBodyPoliciesUserGroups";


export class ListUserGroupsForRegistrationPolicyResponseBodyPolicies extends $dara.Model {
  /**
   * @example
   * reg-policy-f25c9e5872e5****
   */
  policyId?: string;
  userGroups?: ListUserGroupsForRegistrationPolicyResponseBodyPoliciesUserGroups[];
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      userGroups: 'UserGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'string',
      userGroups: { 'type': 'array', 'itemType': ListUserGroupsForRegistrationPolicyResponseBodyPoliciesUserGroups },
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListUserGroupsForRegistrationPolicyResponseBodyPolicies } from "./ListUserGroupsForRegistrationPolicyResponseBodyPolicies";


export class ListUserGroupsForRegistrationPolicyResponseBody extends $dara.Model {
  policies?: ListUserGroupsForRegistrationPolicyResponseBodyPolicies[];
  /**
   * @example
   * D89009C7-54C6-51B6-BAE7-3F373920C6BF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policies: 'Policies',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policies: { 'type': 'array', 'itemType': ListUserGroupsForRegistrationPolicyResponseBodyPolicies },
      requestId: 'string',
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


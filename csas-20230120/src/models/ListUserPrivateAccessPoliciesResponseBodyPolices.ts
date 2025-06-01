// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListUserPrivateAccessPoliciesResponseBodyPolicesCustomUserAttributes } from "./ListUserPrivateAccessPoliciesResponseBodyPolicesCustomUserAttributes";


export class ListUserPrivateAccessPoliciesResponseBodyPolices extends $dara.Model {
  customUserAttributes?: ListUserPrivateAccessPoliciesResponseBodyPolicesCustomUserAttributes[];
  /**
   * @example
   * device_attribute_name
   */
  deviceAttributeName?: string;
  /**
   * @example
   * user_group_name
   */
  matchedUserGroup?: string;
  /**
   * @example
   * private_access_policy_name
   */
  name?: string;
  /**
   * @example
   * Allow
   */
  policyAction?: string;
  /**
   * @example
   * pa-policy-1b0d0e8b4bcf****
   */
  policyId?: string;
  /**
   * @example
   * 1
   */
  priority?: number;
  /**
   * @example
   * Custom
   */
  userGroupMode?: string;
  static names(): { [key: string]: string } {
    return {
      customUserAttributes: 'CustomUserAttributes',
      deviceAttributeName: 'DeviceAttributeName',
      matchedUserGroup: 'MatchedUserGroup',
      name: 'Name',
      policyAction: 'PolicyAction',
      policyId: 'PolicyId',
      priority: 'Priority',
      userGroupMode: 'UserGroupMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customUserAttributes: { 'type': 'array', 'itemType': ListUserPrivateAccessPoliciesResponseBodyPolicesCustomUserAttributes },
      deviceAttributeName: 'string',
      matchedUserGroup: 'string',
      name: 'string',
      policyAction: 'string',
      policyId: 'string',
      priority: 'number',
      userGroupMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customUserAttributes)) {
      $dara.Model.validateArray(this.customUserAttributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


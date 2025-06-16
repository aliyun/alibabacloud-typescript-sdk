// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListUserPrivateAccessPoliciesResponseBodyPolicesCustomUserAttributes } from "./ListUserPrivateAccessPoliciesResponseBodyPolicesCustomUserAttributes";


export class ListUserPrivateAccessPoliciesResponseBodyPolices extends $dara.Model {
  /**
   * @remarks
   * Set of custom user group attributes. Multiple custom user group attributes are in an OR relationship, effective as a union.
   */
  customUserAttributes?: ListUserPrivateAccessPoliciesResponseBodyPolicesCustomUserAttributes[];
  /**
   * @remarks
   * Associated security baseline.
   * 
   * @example
   * device_attribute_name
   */
  deviceAttributeName?: string;
  /**
   * @remarks
   * Associated user group.
   * 
   * @example
   * user_group_name
   */
  matchedUserGroup?: string;
  /**
   * @remarks
   * Intranet access policy name.
   * 
   * @example
   * private_access_policy_name
   */
  name?: string;
  /**
   * @remarks
   * Action of the intranet access policy. Values:
   * - **Block**: Block.
   * - **Allow**: Allow.
   * 
   * @example
   * Allow
   */
  policyAction?: string;
  /**
   * @remarks
   * Intranet access policy ID.
   * 
   * @example
   * pa-policy-1b0d0e8b4bcf****
   */
  policyId?: string;
  /**
   * @remarks
   * Priority of the intranet access policy. The number 1 indicates the highest priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * List of trusted process group IDs.
   */
  trustedProcessGroupIds?: string[];
  /**
   * @remarks
   * List of trusted software IDs.
   */
  trustedSoftwareIds?: string[];
  /**
   * @remarks
   * Type of the user group for the intranet access policy. Values:
   * - **Normal**: Normal user group.
   * - **Custom**: Custom user group.
   * 
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
      trustedProcessGroupIds: 'TrustedProcessGroupIds',
      trustedSoftwareIds: 'TrustedSoftwareIds',
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
      trustedProcessGroupIds: { 'type': 'array', 'itemType': 'string' },
      trustedSoftwareIds: { 'type': 'array', 'itemType': 'string' },
      userGroupMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.customUserAttributes)) {
      $dara.Model.validateArray(this.customUserAttributes);
    }
    if(Array.isArray(this.trustedProcessGroupIds)) {
      $dara.Model.validateArray(this.trustedProcessGroupIds);
    }
    if(Array.isArray(this.trustedSoftwareIds)) {
      $dara.Model.validateArray(this.trustedSoftwareIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


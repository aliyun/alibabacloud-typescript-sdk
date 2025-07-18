// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserPrivateAccessPoliciesResponseBodyPolicesCustomUserAttributes extends $dara.Model {
  /**
   * @remarks
   * The identity provider ID of the user group. This value exists when the custom user group type is **department**.
   * 
   * @example
   * 12
   */
  idpId?: number;
  /**
   * @remarks
   * Relation of the user group. Values:
   * - **Equal**: Equal.
   * - **Unequal**: Not equal.
   * 
   * @example
   * Equal
   */
  relation?: string;
  /**
   * @remarks
   * Type of the user group. Values:
   * - **username**: Username.
   * - **department**: Department.
   * - **email**: Email.
   * - **telephone**: Telephone.
   * 
   * @example
   * department
   */
  userGroupType?: string;
  /**
   * @remarks
   * The value of the user group attribute.
   * - When the user group type is **username**, it represents the value of the username. The length is 1 to 128 characters, supporting Chinese and case-sensitive English letters, and can include numbers, periods (.), underscores (_), and hyphens (-).
   * - When the user group type is **department**, it represents the value of the department. For example: OU=Department1,OU=SASE DingTalk.
   * - When the user group type is **email**, it represents the value of the email. For example: username@example.com.
   * - When the user group type is **telephone**, it represents the value of the phone number. For example: 13900001234.
   * 
   * @example
   * OU=部门1,OU=SASE钉钉
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      idpId: 'IdpId',
      relation: 'Relation',
      userGroupType: 'UserGroupType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idpId: 'number',
      relation: 'string',
      userGroupType: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class ListUserPrivateAccessPoliciesResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of authorized policies.
   */
  polices?: ListUserPrivateAccessPoliciesResponseBodyPolices[];
  /**
   * @remarks
   * ID of the request.
   * 
   * @example
   * 9D852F87-AFB5-51B8-AACD-F7D0EFB8277D
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of authorized policies.
   * 
   * @example
   * 20
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      polices: 'Polices',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      polices: { 'type': 'array', 'itemType': ListUserPrivateAccessPoliciesResponseBodyPolices },
      requestId: 'string',
      totalNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.polices)) {
      $dara.Model.validateArray(this.polices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


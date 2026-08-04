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
   * The relationship of the user group. Valid values:
   * - **Equal**: equal to.
   * - **Unequal**: not equal to.
   * 
   * @example
   * Equal
   */
  relation?: string;
  /**
   * @remarks
   * The type of the user group. Valid values:
   * - **username**: the username.
   * - **department**: the department.
   * - **email**: the email address.
   * - **telephone**: the mobile phone number.
   * 
   * @example
   * department
   */
  userGroupType?: string;
  /**
   * @remarks
   * The value of the user group attribute.
   * - When the user group type is **username**, this parameter indicates the value of the username. The value must be 1 to 128 characters in length, and can contain Chinese characters, uppercase letters, lowercase letters, digits, periods (.), underscores (_), and hyphens (-).
   * - When the user group type is **department**, this parameter indicates the value of the department. For example: OU=Department1,OU=SASE DingTalk.
   * - When the user group type is **email**, this parameter indicates the value of the email address. For example: username@example.com.
   * - When the user group type is **telephone**, this parameter indicates the value of the mobile phone number. For example: 13900001234.
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
   * The collection of custom user group attributes. Multiple custom user group attributes have an OR relationship and take effect as a union.
   */
  customUserAttributes?: ListUserPrivateAccessPoliciesResponseBodyPolicesCustomUserAttributes[];
  /**
   * @remarks
   * The associated security baseline.
   * 
   * @example
   * device_attribute_name
   */
  deviceAttributeName?: string;
  /**
   * @remarks
   * The user group to which the policy belongs.
   * 
   * @example
   * user_group_name
   */
  matchedUserGroup?: string;
  /**
   * @remarks
   * The name of the private access policy.
   * 
   * @example
   * private_access_policy_name
   */
  name?: string;
  /**
   * @remarks
   * The action of the private access policy. Valid values:
   * - **Block**: blocks the access.
   * - **Allow**: allows the access.
   * 
   * @example
   * Allow
   */
  policyAction?: string;
  /**
   * @remarks
   * The ID of the private access policy.
   * 
   * @example
   * pa-policy-1b0d0e8b4bcf****
   */
  policyId?: string;
  /**
   * @remarks
   * The priority of the private access policy. The number 1 indicates the highest priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The list of trusted process group IDs.
   */
  trustedProcessGroupIds?: string[];
  /**
   * @remarks
   * The list of trusted software IDs.
   */
  trustedSoftwareIds?: string[];
  /**
   * @remarks
   * The user group type of the private access policy. Valid values:
   * - **Normal**: a normal user group.
   * - **Custom**: a custom user group.
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
   * The list of authorized access policies.
   */
  polices?: ListUserPrivateAccessPoliciesResponseBodyPolices[];
  /**
   * @remarks
   * Id of the request.
   * 
   * @example
   * 9D852F87-AFB5-51B8-AACD-F7D0EFB8277D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of authorized access policies.
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


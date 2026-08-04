// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserGroupsForRegistrationPolicyResponseBodyPoliciesUserGroupsAttributes extends $dara.Model {
  /**
   * @remarks
   * The identity provider ID for the user group. This field appears only when UserGroupType is **department**.
   * 
   * @example
   * 12
   */
  idpId?: number;
  /**
   * @remarks
   * The relation for the user group. Valid values:
   * 
   * - **Equal**: Equal to.
   * 
   * - **Unequal**: Not equal to.
   * 
   * @example
   * Equal
   */
  relation?: string;
  /**
   * @remarks
   * The type of the user group. Valid values:
   * 
   * - **username**: A username.
   * 
   * - **department**: A department.
   * 
   * - **email**: An email address.
   * 
   * - **telephone**: A phone number.
   * 
   * @example
   * department
   */
  userGroupType?: string;
  /**
   * @remarks
   * The value of the user group attribute.
   * 
   * - If UserGroupType is **username**, this is the username. It must be 1–128 characters long and can contain uppercase and lowercase letters, Chinese characters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * - If UserGroupType is **department**, this is the department name. Example: OU=Department 1,OU=SASE DingTalk.
   * 
   * - If UserGroupType is **email**, this is the email address. Example: username\\@example.com.
   * 
   * - If UserGroupType is **telephone**, this is the phone number. Example: 13900001234.
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

export class ListUserGroupsForRegistrationPolicyResponseBodyPoliciesUserGroups extends $dara.Model {
  /**
   * @remarks
   * A collection of user group attributes.
   */
  attributes?: ListUserGroupsForRegistrationPolicyResponseBodyPoliciesUserGroupsAttributes[];
  /**
   * @remarks
   * The time when the user group was created.
   * 
   * @example
   * 2022-09-27 18:10:25
   */
  createTime?: string;
  /**
   * @remarks
   * A description of the user group.
   * 
   * @example
   * 这是一条被设备注册策略引用的用户组。
   */
  description?: string;
  /**
   * @remarks
   * The name of the user group.
   * 
   * @example
   * user_group_name
   */
  name?: string;
  /**
   * @remarks
   * The ID of the user group.
   * 
   * @example
   * usergroup-6f1ef2fc56b6****
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      createTime: 'CreateTime',
      description: 'Description',
      name: 'Name',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'array', 'itemType': ListUserGroupsForRegistrationPolicyResponseBodyPoliciesUserGroupsAttributes },
      createTime: 'string',
      description: 'string',
      name: 'string',
      userGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.attributes)) {
      $dara.Model.validateArray(this.attributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserGroupsForRegistrationPolicyResponseBodyPolicies extends $dara.Model {
  /**
   * @remarks
   * The ID of the device registration policy.
   * 
   * @example
   * reg-policy-f25c9e5872e5****
   */
  policyId?: string;
  /**
   * @remarks
   * A collection of user groups associated with the device registration policy.
   */
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

export class ListUserGroupsForRegistrationPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of device registration policies.
   */
  policies?: ListUserGroupsForRegistrationPolicyResponseBodyPolicies[];
  /**
   * @remarks
   * The ID of this request.
   * 
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


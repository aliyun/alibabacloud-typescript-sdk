// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserGroupsForRegistrationPolicyResponseBodyPoliciesUserGroupsAttributes extends $dara.Model {
  /**
   * @example
   * 12
   */
  idpId?: number;
  /**
   * @example
   * Equal
   */
  relation?: string;
  /**
   * @example
   * department
   */
  userGroupType?: string;
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
  attributes?: ListUserGroupsForRegistrationPolicyResponseBodyPoliciesUserGroupsAttributes[];
  /**
   * @example
   * 2022-09-27 18:10:25
   */
  createTime?: string;
  description?: string;
  /**
   * @example
   * user_group_name
   */
  name?: string;
  /**
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


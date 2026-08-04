// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserGroupsForPrivateAccessPolicyResponseBodyPolicesUserGroupsAttributes extends $dara.Model {
  /**
   * @remarks
   * The identity source ID of the user group. This value exists if the custom user group type is **department**.
   * 
   * @example
   * 12
   */
  idpId?: number;
  /**
   * @remarks
   * The relationship of the user group. Values:
   * 
   * - **Equal**: Equal.
   * 
   * - **Unequal**: Unequal.
   * 
   * @example
   * Equal
   */
  relation?: string;
  /**
   * @remarks
   * The type of the user group. Values:
   * 
   * - **username**: username.
   * 
   * - **department**: department.
   * 
   * - **email**: mailbox.
   * 
   * - **telephone**: telephone.
   * 
   * @example
   * department
   */
  userGroupType?: string;
  /**
   * @remarks
   * Value of the user group property.
   * 
   * - If the user group type is **username**, this indicates the username\\"s value. The length is 1 to 128 characters. It supports Chinese characters and uppercase and lowercase English letters. It can contain numbers, periods (.), underscores (_), and hyphens (-).
   * 
   * - If the user group type is **department**, this indicates the department\\"s value, such as OU=Department 1,OU=SASE DingTalk.
   * 
   * - If the user group type is **email**, this indicates the mailbox\\"s value, such as username\\@example.com.
   * 
   * - If the user group type is **telephone**, this indicates the telephone\\"s value, such as 13900001234.
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

export class ListUserGroupsForPrivateAccessPolicyResponseBodyPolicesUserGroups extends $dara.Model {
  /**
   * @remarks
   * Collection of user group properties.
   */
  attributes?: ListUserGroupsForPrivateAccessPolicyResponseBodyPolicesUserGroupsAttributes[];
  /**
   * @remarks
   * User group creation time.
   * 
   * @example
   * 2022-09-27 18:10:25
   */
  createTime?: string;
  /**
   * @remarks
   * User group description.
   * 
   * @example
   * 这是一条被内网访问策略引用的用户组
   */
  description?: string;
  /**
   * @remarks
   * User group name.
   * 
   * @example
   * user_group_name
   */
  name?: string;
  /**
   * @remarks
   * User group ID.
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
      attributes: { 'type': 'array', 'itemType': ListUserGroupsForPrivateAccessPolicyResponseBodyPolicesUserGroupsAttributes },
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

export class ListUserGroupsForPrivateAccessPolicyResponseBodyPolices extends $dara.Model {
  /**
   * @remarks
   * Private network access policy ID.
   * 
   * @example
   * pa-policy-1b0d0e8b4bcf****
   */
  policyId?: string;
  /**
   * @remarks
   * Collection of user groups for the private network access policy.
   */
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

export class ListUserGroupsForPrivateAccessPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * List of private network access policies.
   */
  polices?: ListUserGroupsForPrivateAccessPolicyResponseBodyPolices[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 58D6B23E-E5DA-5418-8F61-51A3B5A30049
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      polices: 'Polices',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      polices: { 'type': 'array', 'itemType': ListUserGroupsForPrivateAccessPolicyResponseBodyPolices },
      requestId: 'string',
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


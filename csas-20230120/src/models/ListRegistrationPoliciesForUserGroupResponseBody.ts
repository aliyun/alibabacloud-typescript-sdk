// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRegistrationPoliciesForUserGroupResponseBodyUserGroupsPoliciesLimitDetailLimitCount extends $dara.Model {
  /**
   * @remarks
   * The total number of allowed device registrations. This field is valid only when LimitType is set to **LimitAll**.
   * 
   * @example
   * 3
   */
  all?: string;
  /**
   * @remarks
   * The number of allowed mobile logons. This field is valid only when LimitType is set to **LimitDiff**.
   * 
   * @example
   * 0
   */
  mobile?: string;
  /**
   * @remarks
   * The number of allowed PC logons. This field is valid only when LimitType is set to **LimitDiff**.
   * 
   * @example
   * 0
   */
  PC?: string;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      mobile: 'Mobile',
      PC: 'PC',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'string',
      mobile: 'string',
      PC: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegistrationPoliciesForUserGroupResponseBodyUserGroupsPoliciesLimitDetail extends $dara.Model {
  /**
   * @remarks
   * Device ownership. Valid values:
   * 
   * - **Company**: Company-owned device.
   * 
   * - **Personal**: Personal device.
   * 
   * @example
   * Company
   */
  deviceBelong?: string;
  /**
   * @remarks
   * The number of allowed device registrations.
   */
  limitCount?: ListRegistrationPoliciesForUserGroupResponseBodyUserGroupsPoliciesLimitDetailLimitCount;
  /**
   * @remarks
   * The device registration limit type. Valid values:
   * 
   * - **Unlimited**: No limit.
   * 
   * - **LimitAll**: Limit by total count.
   * 
   * - **LimitDiff**: Limit by device category.
   * 
   * @example
   * LimitAll
   */
  limitType?: string;
  static names(): { [key: string]: string } {
    return {
      deviceBelong: 'DeviceBelong',
      limitCount: 'LimitCount',
      limitType: 'LimitType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceBelong: 'string',
      limitCount: ListRegistrationPoliciesForUserGroupResponseBodyUserGroupsPoliciesLimitDetailLimitCount,
      limitType: 'string',
    };
  }

  validate() {
    if(this.limitCount && typeof (this.limitCount as any).validate === 'function') {
      (this.limitCount as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegistrationPoliciesForUserGroupResponseBodyUserGroupsPolicies extends $dara.Model {
  /**
   * @remarks
   * The time when the device registration policy was created.
   * 
   * @example
   * 2023-05-16 17:18:46
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the device registration policy.
   * 
   * @example
   * 这是一条设备注册策略。
   */
  description?: string;
  /**
   * @remarks
   * The list of device registration policy limit details.
   */
  limitDetail?: ListRegistrationPoliciesForUserGroupResponseBodyUserGroupsPoliciesLimitDetail[];
  /**
   * @remarks
   * The target type for policy matching. Valid values:
   * 
   * - **UserGroupAll**: Associate with all users.
   * 
   * - **UserGroupNormal**: Associate with specific user groups.
   * 
   * @example
   * UserGroupNormal
   */
  matchMode?: string;
  /**
   * @remarks
   * The name of the device registration policy.
   * 
   * @example
   * registration_policy_name
   */
  name?: string;
  /**
   * @remarks
   * The ID of the device registration policy.
   * 
   * @example
   * reg-policy-dcbfd33cb004****
   */
  policyId?: string;
  /**
   * @remarks
   * The policy priority. The number 0 indicates the highest priority. The number 99 indicates the lowest priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The status of the device registration policy. Valid values:
   * 
   * - **Enabled**: Enabled.
   * 
   * - **Disabled**: Disabled.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The list of users on the device registration policy whitelist.
   */
  whitelist?: string[];
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      limitDetail: 'LimitDetail',
      matchMode: 'MatchMode',
      name: 'Name',
      policyId: 'PolicyId',
      priority: 'Priority',
      status: 'Status',
      whitelist: 'Whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      limitDetail: { 'type': 'array', 'itemType': ListRegistrationPoliciesForUserGroupResponseBodyUserGroupsPoliciesLimitDetail },
      matchMode: 'string',
      name: 'string',
      policyId: 'string',
      priority: 'number',
      status: 'string',
      whitelist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.limitDetail)) {
      $dara.Model.validateArray(this.limitDetail);
    }
    if(Array.isArray(this.whitelist)) {
      $dara.Model.validateArray(this.whitelist);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegistrationPoliciesForUserGroupResponseBodyUserGroups extends $dara.Model {
  /**
   * @remarks
   * The collection of device registration policies.
   */
  policies?: ListRegistrationPoliciesForUserGroupResponseBodyUserGroupsPolicies[];
  /**
   * @remarks
   * The user group ID.
   * 
   * @example
   * usergroup-6f1ef2fc56b6****
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      policies: 'Policies',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policies: { 'type': 'array', 'itemType': ListRegistrationPoliciesForUserGroupResponseBodyUserGroupsPolicies },
      userGroupId: 'string',
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

export class ListRegistrationPoliciesForUserGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of this request.
   * 
   * @example
   * 58D6B23E-E5DA-5418-8F61-51A3B5A30049
   */
  requestId?: string;
  /**
   * @remarks
   * The list of user groups.
   */
  userGroups?: ListRegistrationPoliciesForUserGroupResponseBodyUserGroups[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userGroups: 'UserGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userGroups: { 'type': 'array', 'itemType': ListRegistrationPoliciesForUserGroupResponseBodyUserGroups },
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


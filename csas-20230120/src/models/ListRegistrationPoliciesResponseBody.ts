// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRegistrationPoliciesResponseBodyPoliciesLimitDetailLimitCount extends $dara.Model {
  /**
   * @remarks
   * The total number of device registration limits. This field is valid when the device registration limit type is **LimitAll**.
   * 
   * @example
   * 3
   */
  all?: number;
  /**
   * @remarks
   * The number of mobile client log ons allowed for device registration. This field is valid when the device registration limit type is **LimitDiff**.
   * 
   * @example
   * 0
   */
  mobile?: number;
  /**
   * @remarks
   * The number of PC client log ons allowed for device registration. This field is valid when the device registration limit type is **LimitDiff**.
   * 
   * @example
   * 0
   */
  PC?: number;
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      mobile: 'Mobile',
      PC: 'PC',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'number',
      mobile: 'number',
      PC: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegistrationPoliciesResponseBodyPoliciesLimitDetail extends $dara.Model {
  /**
   * @remarks
   * The device ownership. Valid values:
   * 
   * - **Company**: Company device.
   * 
   * - **Personal**: Personal device.
   * 
   * @example
   * Company
   */
  deviceBelong?: string;
  /**
   * @remarks
   * The number of device registration limits.
   */
  limitCount?: ListRegistrationPoliciesResponseBodyPoliciesLimitDetailLimitCount;
  /**
   * @remarks
   * The type of device registration limit. Valid values:
   * 
   * - **Unlimited**: No limit.
   * 
   * - **LimitAll**: Limit by total number.
   * 
   * - **LimitDiff**: Limit by device categorization.
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
      limitCount: ListRegistrationPoliciesResponseBodyPoliciesLimitDetailLimitCount,
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

export class ListRegistrationPoliciesResponseBodyPolicies extends $dara.Model {
  /**
   * @remarks
   * The creation time of the device registration policy.
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
  limitDetail?: ListRegistrationPoliciesResponseBodyPoliciesLimitDetail[];
  /**
   * @remarks
   * The policy matching target type. Valid values:
   * 
   * - **UserGroupAll**: Associate all users.
   * 
   * - **UserGroupNormal**: Associate some user groups.
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
   * The policy priority for device registration. A value of 0 indicates the highest priority, and 99 indicates the lowest priority.
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
   * A collection of user group IDs for the device registration policy. This field has a value when the policy matching target type is **UserGroupNormal**.
   */
  userGroupIds?: string[];
  /**
   * @remarks
   * The whitelist of users for the device registration policy.
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
      userGroupIds: 'UserGroupIds',
      whitelist: 'Whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      limitDetail: { 'type': 'array', 'itemType': ListRegistrationPoliciesResponseBodyPoliciesLimitDetail },
      matchMode: 'string',
      name: 'string',
      policyId: 'string',
      priority: 'number',
      status: 'string',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      whitelist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.limitDetail)) {
      $dara.Model.validateArray(this.limitDetail);
    }
    if(Array.isArray(this.userGroupIds)) {
      $dara.Model.validateArray(this.userGroupIds);
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

export class ListRegistrationPoliciesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of device registration policies.
   */
  policies?: ListRegistrationPoliciesResponseBodyPolicies[];
  /**
   * @remarks
   * The ID of this request.
   * 
   * @example
   * 7A8FE38A-E29C-5678-B84A-FEDBCB83552F
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of device registration policies.
   * 
   * @example
   * 1
   */
  totalNum?: string;
  static names(): { [key: string]: string } {
    return {
      policies: 'Policies',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policies: { 'type': 'array', 'itemType': ListRegistrationPoliciesResponseBodyPolicies },
      requestId: 'string',
      totalNum: 'string',
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


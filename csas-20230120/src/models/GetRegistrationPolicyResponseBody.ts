// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRegistrationPolicyResponseBodyLimitDetailLimitCount extends $dara.Model {
  /**
   * @remarks
   * The total device registration limit. This parameter is valid when the device registration limit type is **LimitAll**.
   * 
   * @example
   * 0
   */
  all?: number;
  /**
   * @remarks
   * The number of mobile logins allowed by the device registration limit. This parameter is valid when the device registration limit type is **LimitDiff**.
   * 
   * @example
   * 2
   */
  mobile?: number;
  /**
   * @remarks
   * The number of PC logins allowed by the device registration limit. This parameter is valid when the device registration limit type is **LimitDiff**.
   * 
   * @example
   * 2
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

export class GetRegistrationPolicyResponseBodyLimitDetail extends $dara.Model {
  /**
   * @remarks
   * The ownership of the device. Valid values:
   * - **Company**: company-owned device.
   * - **Personal**: personal device.
   * 
   * @example
   * Personal
   */
  deviceBelong?: string;
  /**
   * @remarks
   * The device registration limit count.
   */
  limitCount?: GetRegistrationPolicyResponseBodyLimitDetailLimitCount;
  /**
   * @remarks
   * The type of the device registration limit. Valid values:
   * - **Unlimited**: no limit.
   * - **LimitAll**: limit by total count.
   * - **LimitDiff**: limit by terminal category.
   * 
   * @example
   * LimitDiff
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
      limitCount: GetRegistrationPolicyResponseBodyLimitDetailLimitCount,
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

export class GetRegistrationPolicyResponseBody extends $dara.Model {
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
   * The list of limit details of the device registration policy.
   */
  limitDetail?: GetRegistrationPolicyResponseBodyLimitDetail[];
  /**
   * @remarks
   * The match mode of the policy. Valid values:
   * - **UserGroupAll**: associated with all users.
   * - **UserGroupNormal**: associated with specific user groups.
   * 
   * @example
   * UserGroupAll
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
   * The priority of the device registration policy. The value 0 indicates the highest priority, and the value 99 indicates the lowest priority.
   * 
   * @example
   * 99
   */
  priority?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 47363C2B-1AAA-5954-8847-0E50FCC54117
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the device registration policy. Valid values:
   * - **Enabled**: enabled.
   * - **Disabled**: disabled.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The IDs of the user groups associated with the device registration policy. This parameter is valid when the match mode of the policy is **UserGroupNormal**.
   */
  userGroupIds?: string[];
  /**
   * @remarks
   * The list of whitelisted users in the device registration policy.
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
      requestId: 'RequestId',
      status: 'Status',
      userGroupIds: 'UserGroupIds',
      whitelist: 'Whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      limitDetail: { 'type': 'array', 'itemType': GetRegistrationPolicyResponseBodyLimitDetail },
      matchMode: 'string',
      name: 'string',
      policyId: 'string',
      priority: 'number',
      requestId: 'string',
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


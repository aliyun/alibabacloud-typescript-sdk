// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRegistrationPolicyResponseBodyPolicyLimitDetailLimitCount extends $dara.Model {
  /**
   * @remarks
   * The total restriction count for device registration. This parameter takes effect only when LimitType is set to **LimitAll**.
   * 
   * @example
   * 0
   */
  all?: number;
  /**
   * @remarks
   * The restriction count for mobile logins. This parameter takes effect only when LimitType is set to **LimitDiff**.
   * 
   * @example
   * 3
   */
  mobile?: number;
  /**
   * @remarks
   * The restriction count for PC logins. This parameter takes effect only when LimitType is set to **LimitDiff**.
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

export class CreateRegistrationPolicyResponseBodyPolicyLimitDetail extends $dara.Model {
  /**
   * @remarks
   * The ownership of the device. Valid values:
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
   * The restriction count for device registration.
   */
  limitCount?: CreateRegistrationPolicyResponseBodyPolicyLimitDetailLimitCount;
  /**
   * @remarks
   * The restriction type for device registration. Valid values:
   * 
   * - **Unlimited**: No restrictions.
   * 
   * - **LimitAll**: Limit by total count.
   * 
   * - **LimitDiff**: Limit by device category.
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
      limitCount: CreateRegistrationPolicyResponseBodyPolicyLimitDetailLimitCount,
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

export class CreateRegistrationPolicyResponseBodyPolicy extends $dara.Model {
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
   * A description of the device registration policy.
   * 
   * @example
   * 这是一条设备注册策略
   */
  description?: string;
  /**
   * @remarks
   * The list of device registration limits.
   */
  limitDetail?: CreateRegistrationPolicyResponseBodyPolicyLimitDetail[];
  /**
   * @remarks
   * The target type for policy matching. Valid values:
   * 
   * - **UserGroupAll**: Apply to all users.
   * 
   * - **UserGroupNormal**: Apply to selected user groups.
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
   * The priority of the device registration policy. A value of 0 indicates the highest priority. A value of 99 indicates the lowest priority.
   * 
   * @example
   * 1
   */
  priority?: string;
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
   * The IDs of user groups to which the device registration policy applies. This field has a value only when MatchMode is set to **UserGroupNormal**.
   */
  userGroupIds?: string[];
  /**
   * @remarks
   * The list of usernames in the whitelist for the device registration policy.
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
      limitDetail: { 'type': 'array', 'itemType': CreateRegistrationPolicyResponseBodyPolicyLimitDetail },
      matchMode: 'string',
      name: 'string',
      policyId: 'string',
      priority: 'string',
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

export class CreateRegistrationPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The device registration policy.
   */
  policy?: CreateRegistrationPolicyResponseBodyPolicy;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * FEF1144C-95D1-5F7C-81EF-9DB70EA49FCE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: CreateRegistrationPolicyResponseBodyPolicy,
      requestId: 'string',
    };
  }

  validate() {
    if(this.policy && typeof (this.policy as any).validate === 'function') {
      (this.policy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


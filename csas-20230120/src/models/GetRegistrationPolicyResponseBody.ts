// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRegistrationPolicyResponseBodyLimitDetailLimitCount extends $dara.Model {
  /**
   * @remarks
   * The total limit on the number of device registrations. This field is valid only when the type of device registration limit is **LimitAll**.
   * 
   * @example
   * 0
   */
  all?: number;
  /**
   * @remarks
   * The limit on the number of mobile logons for device registration. This field is valid only when the type of device registration limit is **LimitDiff**.
   * 
   * @example
   * 2
   */
  mobile?: number;
  /**
   * @remarks
   * The limit on the number of PC logons for device registration. This field is valid only when the type of device registration limit is **LimitDiff**.
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
   * The device ownership. Valid values:
   * - **Company**: Corporate device.
   * - **Personal**: Personal device.
   * 
   * @example
   * Personal
   */
  deviceBelong?: string;
  /**
   * @remarks
   * The limit on the number of device registrations.
   */
  limitCount?: GetRegistrationPolicyResponseBodyLimitDetailLimitCount;
  /**
   * @remarks
   * The type of device registration limit. Valid values:
   * - **Unlimited**: Unlimited.
   * - **LimitAll**: Limited by total count.
   * - **LimitDiff**: Limited by endpoint category.
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
   * The time when the device registration policy was created. The time is in the YYYY-MM-DD HH:mm:ss format.
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
   * This is a device registration policy
   */
  description?: string;
  /**
   * @remarks
   * The list of limit details for the device registration policy.
   */
  limitDetail?: GetRegistrationPolicyResponseBodyLimitDetail[];
  /**
   * @remarks
   * The target type for policy matching. Valid values:
   * - **UserGroupAll**: All users.
   * - **UserGroupNormal**: Specific user groups.
   * 
   * @example
   * UserGroupAll
   */
  matchMode?: string;
  /**
   * @remarks
   * The policy name of the device registration policy.
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
   * The policy priority of the device registration policy. A value of 0 indicates the highest priority, and a value of 99 indicates the lowest priority.
   * 
   * @example
   * 99
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 47363C2B-1AAA-5954-8847-0E50FCC54117
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the device registration policy. Valid values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The IDs of the user groups associated with the device registration policy. This field has a value only when the target type for policy matching is **UserGroupNormal**.
   */
  userGroupIds?: string[];
  /**
   * @remarks
   * The list of whitelisted users for the device registration policy.
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


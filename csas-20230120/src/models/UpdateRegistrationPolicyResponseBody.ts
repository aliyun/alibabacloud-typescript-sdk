// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRegistrationPolicyResponseBodyPolicyLimitDetailLimitCount extends $dara.Model {
  /**
   * @remarks
   * The total number of devices that can be registered. This parameter is valid only when LimitType is set to **LimitAll**.
   * 
   * @example
   * 1
   */
  all?: number;
  /**
   * @remarks
   * The number of mobile devices that can be registered. This parameter is valid only when LimitType is set to **LimitDiff**.
   * 
   * @example
   * 0
   */
  mobile?: number;
  /**
   * @remarks
   * The number of PCs that can be registered. This parameter is valid only when LimitType is set to **LimitDiff**.
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

export class UpdateRegistrationPolicyResponseBodyPolicyLimitDetail extends $dara.Model {
  /**
   * @remarks
   * The owner of the device. Valid values:
   * 
   * - **Company**: Corporate device.
   * 
   * - **Personal**: Personal device.
   * 
   * @example
   * Company
   */
  deviceBelong?: string;
  /**
   * @remarks
   * The registration limit count.
   */
  limitCount?: UpdateRegistrationPolicyResponseBodyPolicyLimitDetailLimitCount;
  /**
   * @remarks
   * The registration limit type. Valid values:
   * 
   * - **Unlimited**: No limit.
   * 
   * - **LimitAll**: Limits the total number of devices.
   * 
   * - **LimitDiff**: Limits devices by terminal type.
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
      limitCount: UpdateRegistrationPolicyResponseBodyPolicyLimitDetailLimitCount,
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

export class UpdateRegistrationPolicyResponseBodyPolicy extends $dara.Model {
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
   * 这是一条设备注册策略
   */
  description?: string;
  /**
   * @remarks
   * The list of limit details for the device registration policy.
   */
  limitDetail?: UpdateRegistrationPolicyResponseBodyPolicyLimitDetail[];
  /**
   * @remarks
   * The matching target type of the policy. Valid values:
   * 
   * - **UserGroupAll**: Associates with all users.
   * 
   * - **UserGroupNormal**: Associates with specific user groups.
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
   * 设备注册策略ID
   */
  policyId?: string;
  /**
   * @remarks
   * The priority of the device registration policy. A smaller value indicates a higher priority. The value 0 indicates the highest priority, and 99 indicates the lowest priority.
   * 
   * @example
   * 1
   */
  priority?: string;
  /**
   * @remarks
   * The status of the device registration policy. Valid values:
   * 
   * - **Enabled**
   * 
   * - **Disabled**
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The collection of user group IDs for the device registration policy. This field has a value when the policy target type is **UserGroupNormal**.
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
      status: 'Status',
      userGroupIds: 'UserGroupIds',
      whitelist: 'Whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      limitDetail: { 'type': 'array', 'itemType': UpdateRegistrationPolicyResponseBodyPolicyLimitDetail },
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

export class UpdateRegistrationPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The device registration policy.
   */
  policy?: UpdateRegistrationPolicyResponseBodyPolicy;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 27064ECA-0936-59F3-8A98-EC821E5BD08F
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
      policy: UpdateRegistrationPolicyResponseBodyPolicy,
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


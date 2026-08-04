// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRegistrationPolicyRequestCompanyLimitCount extends $dara.Model {
  /**
   * @remarks
   * The total restriction count for company devices. Valid values: 0 to 100. Default value: 0. This parameter takes effect only when CompanyLimitType is set to **LimitAll**.
   * 
   * @example
   * 1
   */
  all?: number;
  /**
   * @remarks
   * The restriction count for mobile logins by company devices. Valid values: 0 to 100. Default value: 0. This parameter takes effect only when CompanyLimitType is set to **LimitDiff**.
   * 
   * @example
   * 0
   */
  mobile?: number;
  /**
   * @remarks
   * The restriction count for PC logins by company devices. Valid values: 0 to 100. Default value: 0. This parameter takes effect only when CompanyLimitType is set to **LimitDiff**.
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

export class CreateRegistrationPolicyRequestPersonalLimitCount extends $dara.Model {
  /**
   * @remarks
   * The total restriction count for personal devices. Valid values: 0 to 100. Default value: 0. This parameter takes effect only when PersonalLimitType is set to **LimitAll**.
   * 
   * @example
   * 0
   */
  all?: number;
  /**
   * @remarks
   * The restriction count for mobile logins by personal devices. Valid values: 0 to 100. Default value: 0. This parameter takes effect only when PersonalLimitType is set to **LimitDiff**.
   * 
   * @example
   * 3
   */
  mobile?: number;
  /**
   * @remarks
   * The restriction count for PC logins by personal devices. Valid values: 0 to 100. Default value: 0. This parameter takes effect only when PersonalLimitType is set to **LimitDiff**.
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

export class CreateRegistrationPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The restriction count for company devices.
   */
  companyLimitCount?: CreateRegistrationPolicyRequestCompanyLimitCount;
  /**
   * @remarks
   * The restriction type for company devices. Valid values:
   * 
   * - **Unlimited**: No restrictions.
   * 
   * - **LimitAll**: Limit by total count.
   * 
   * - **LimitDiff**: Limit by device category.
   * 
   * This parameter is required.
   * 
   * @example
   * LimitAll
   */
  companyLimitType?: string;
  /**
   * @remarks
   * A description of the device registration policy. The description must be 1 to 128 characters in length. It can contain letters, digits, periods (.), underscores (_), hyphens (-), and spaces.
   * 
   * @example
   * 这是一条设备注册策略
   */
  description?: string;
  /**
   * @remarks
   * The target type for policy matching. Valid values:
   * 
   * - **UserGroupAll**: Apply to all users.
   * 
   * - **UserGroupNormal**: Apply to selected user groups.
   * 
   * This parameter is required.
   * 
   * @example
   * UserGroupAll
   */
  matchMode?: string;
  /**
   * @remarks
   * The name of the device registration policy. The name must be 1 to 128 characters in length. It can contain letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * registration_policy_name
   */
  name?: string;
  /**
   * @remarks
   * The restriction count for personal devices.
   */
  personalLimitCount?: CreateRegistrationPolicyRequestPersonalLimitCount;
  /**
   * @remarks
   * The restriction type for personal devices. Valid values:
   * 
   * - **Unlimited**: No restrictions.
   * 
   * - **LimitAll**: Limit by total count.
   * 
   * - **LimitDiff**: Limit by device category.
   * 
   * This parameter is required.
   * 
   * @example
   * LimitDiff
   */
  personalLimitType?: string;
  /**
   * @remarks
   * The priority of the device registration policy. A value of 0 indicates the highest priority. A value of 99 indicates the lowest priority.
   * 
   * @example
   * 99
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
   * This parameter is required.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The IDs of user groups to which the device registration policy applies. Required if MatchMode is set to **UserGroupNormal**. A maximum of 100 user groups can be specified per policy.
   */
  userGroupIds?: string[];
  /**
   * @remarks
   * The list of usernames in the whitelist for the device registration policy. You can specify up to 1,000 usernames.
   */
  whitelist?: string[];
  static names(): { [key: string]: string } {
    return {
      companyLimitCount: 'CompanyLimitCount',
      companyLimitType: 'CompanyLimitType',
      description: 'Description',
      matchMode: 'MatchMode',
      name: 'Name',
      personalLimitCount: 'PersonalLimitCount',
      personalLimitType: 'PersonalLimitType',
      priority: 'Priority',
      status: 'Status',
      userGroupIds: 'UserGroupIds',
      whitelist: 'Whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyLimitCount: CreateRegistrationPolicyRequestCompanyLimitCount,
      companyLimitType: 'string',
      description: 'string',
      matchMode: 'string',
      name: 'string',
      personalLimitCount: CreateRegistrationPolicyRequestPersonalLimitCount,
      personalLimitType: 'string',
      priority: 'number',
      status: 'string',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      whitelist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.companyLimitCount && typeof (this.companyLimitCount as any).validate === 'function') {
      (this.companyLimitCount as any).validate();
    }
    if(this.personalLimitCount && typeof (this.personalLimitCount as any).validate === 'function') {
      (this.personalLimitCount as any).validate();
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


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRegistrationPolicyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The registration limit for corporate devices.
   */
  companyLimitCountShrink?: string;
  /**
   * @remarks
   * The registration limit type for corporate devices. Valid values:
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
  companyLimitType?: string;
  /**
   * @remarks
   * The description of the device registration policy. The description can be 1 to 128 characters long and can contain Chinese characters, uppercase and lowercase letters, digits, periods (.), underscores (_), hyphens (-), and spaces.
   * 
   * @example
   * 这是一条设备注册策略
   */
  description?: string;
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
   * The name of the device registration policy. The name must be 1 to 128 characters in length and can contain Chinese characters, uppercase and lowercase letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * registration_policy_name
   */
  name?: string;
  /**
   * @remarks
   * The registration limit for personal devices.
   */
  personalLimitCountShrink?: string;
  /**
   * @remarks
   * The registration limit type for personal devices. Valid values:
   * 
   * - **Unlimited**: No limit.
   * 
   * - **LimitAll**: Limits the total number of devices.
   * 
   * - **LimitDiff**: Limits devices by terminal type.
   * 
   * @example
   * LimitDiff
   */
  personalLimitType?: string;
  /**
   * @remarks
   * The ID of the device registration policy. You can obtain the ID by calling one of the following operations:
   * 
   * - [ListRegistrationPolicies](~~ListRegistrationPolicies~~)
   * 
   * - [GetRegistrationPolicy](~~GetRegistrationPolicy~~)
   * 
   * - [CreateRegistrationPolicy](~~CreateRegistrationPolicy~~)
   * 
   * - [UpdateRegistrationPolicy](~~UpdateRegistrationPolicy~~)
   * 
   * This parameter is required.
   * 
   * @example
   * reg-policy-63b2f1844b86****
   */
  policyId?: string;
  /**
   * @remarks
   * The priority of the device registration policy. A smaller value indicates a higher priority. The value 0 indicates the highest priority, and 99 indicates the lowest priority.
   * 
   * @example
   * 0
   */
  priority?: number;
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
   * The IDs of user groups. This parameter is required when MatchMode is set to **UserGroupNormal**. A policy can be associated with up to 100 user groups.
   */
  userGroupIds?: string[];
  /**
   * @remarks
   * The list of whitelisted users for the device registration policy. You can add up to 1,000 usernames.
   */
  whitelist?: string[];
  static names(): { [key: string]: string } {
    return {
      companyLimitCountShrink: 'CompanyLimitCount',
      companyLimitType: 'CompanyLimitType',
      description: 'Description',
      matchMode: 'MatchMode',
      name: 'Name',
      personalLimitCountShrink: 'PersonalLimitCount',
      personalLimitType: 'PersonalLimitType',
      policyId: 'PolicyId',
      priority: 'Priority',
      status: 'Status',
      userGroupIds: 'UserGroupIds',
      whitelist: 'Whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyLimitCountShrink: 'string',
      companyLimitType: 'string',
      description: 'string',
      matchMode: 'string',
      name: 'string',
      personalLimitCountShrink: 'string',
      personalLimitType: 'string',
      policyId: 'string',
      priority: 'number',
      status: 'string',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      whitelist: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
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


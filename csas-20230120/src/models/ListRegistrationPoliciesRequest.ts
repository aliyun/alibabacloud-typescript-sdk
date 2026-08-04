// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRegistrationPoliciesRequest extends $dara.Model {
  /**
   * @remarks
   * The type of company device registration limit. Valid values:
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
  companyLimitType?: string;
  /**
   * @remarks
   * The current page number for paged queries. Values range from 1 to 10000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The policy matching target type. Valid values:
   * 
   * - **UserGroupAll**: Associate all users.
   * 
   * - **UserGroupNormal**: Associate some user groups.
   * 
   * @example
   * UserGroupAll
   */
  matchMode?: string;
  /**
   * @remarks
   * The name of the device registration policy. It can be 1 to 128 characters long. It supports Chinese characters, uppercase and lowercase English letters, numbers, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * registration_policy_name
   */
  name?: string;
  /**
   * @remarks
   * The number of items per page for paged queries. Values range from 1 to 500.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The type of personal device registration limit. Valid values:
   * 
   * - **Unlimited**: No limit.
   * 
   * - **LimitAll**: Limit by total number.
   * 
   * - **LimitDiff**: Limit by device categorization.
   * 
   * @example
   * LimitDiff
   */
  personalLimitType?: string;
  /**
   * @remarks
   * A collection of device registration policy IDs. You can enter up to 100 device registration policy IDs.
   */
  policyIds?: string[];
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
   * The user group ID. Get this value from:
   * 
   * - [ListUserGroups](~~ListUserGroups~~): Batch query user groups.
   * 
   * - [CreateUserGroup](~~CreateUserGroup~~): Create user groups.
   * 
   * @example
   * usergroup-6f1ef2fc56b6****
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      companyLimitType: 'CompanyLimitType',
      currentPage: 'CurrentPage',
      matchMode: 'MatchMode',
      name: 'Name',
      pageSize: 'PageSize',
      personalLimitType: 'PersonalLimitType',
      policyIds: 'PolicyIds',
      status: 'Status',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyLimitType: 'string',
      currentPage: 'number',
      matchMode: 'string',
      name: 'string',
      pageSize: 'number',
      personalLimitType: 'string',
      policyIds: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      userGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProhibitedPoliciesRequestSoftwareId extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the prohibited software is a system built-in entry. Valid values:
   * - **true**: A system built-in prohibited software entry shared by all Alibaba Cloud accounts. Modification and deletion are not supported.
   * - **false**: Custom prohibited software under the current Alibaba Cloud account.
   * 
   * @example
   * false
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The prohibited software ID. You can obtain the value from the following operations:
   * - [ListProhibitedSoftware](~~ListProhibitedSoftware~~): Lists prohibited software.
   * - [CreateProhibitedSoftware](~~CreateProhibitedSoftware~~): Creates custom prohibited software.
   * 
   * @example
   * swb-83995ff2ae38****
   */
  softwareId?: string;
  static names(): { [key: string]: string } {
    return {
      isDefault: 'IsDefault',
      softwareId: 'SoftwareId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDefault: 'boolean',
      softwareId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProhibitedPoliciesRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page in a paged query. Valid values: 1 to 10000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Specifies whether the policy is enabled. Valid values:
   * - **true**: Enabled. The policy is delivered to endpoints and takes effect.
   * - **false**: Disabled. The policy configuration is retained but not delivered to endpoints.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The effective scope. Valid values:
   * - **UserGroupAll**: Applies to all users under the current Alibaba Cloud account. No user group needs to be specified.
   * - **UserGroupNormal**: Applies only to users in the user groups specified by UserGroupIds.
   * 
   * @example
   * UserGroupAll
   */
  matchMode?: string;
  /**
   * @remarks
   * Policy Name of the software prohibition policy. Fuzzy match is supported. Policy Name can be up to 128 characters in length and can contain Chinese characters, uppercase and lowercase letters, digits, periods (.), underscores (_), and hyphens (-). Spaces are not supported.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The object type of the controlled target. Valid values:
   * - **App**: Controls by prohibited software. The controlled objects are specified by SoftwareIds.
   * - **Tag**: Controls by prohibited software tag. The controlled objects are specified by TagIds. All prohibited software under the tag is controlled.
   * 
   * @example
   * App
   */
  objectType?: string;
  /**
   * @remarks
   * The number of entries per page in a paged query. Valid values: 1 to 500.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The collection of software prohibition policy IDs. Duplicate values are not allowed.
   */
  policyIds?: string[];
  /**
   * @remarks
   * The action to take. Valid values:
   * - **Ban**: Blocks the software from running and displays a pop-up notification on the endpoint to alert the user.
   * - **BanSilent**: Blocks the software from running without notifying the user. The blocking is silent.
   * - **Warn**: Only displays a pop-up notification on the endpoint to alert the user without blocking the software from running.
   * 
   * @example
   * Ban
   */
  policyType?: string;
  /**
   * @remarks
   * The unique identifier of the prohibited software.
   */
  softwareId?: ListProhibitedPoliciesRequestSoftwareId;
  /**
   * @remarks
   * The name of the prohibited software. Fuzzy match is supported. The name can be up to 128 characters in length and can contain Chinese characters, uppercase and lowercase letters, digits, periods (.), underscores (_), and hyphens (-). Spaces are not supported.
   * 
   * @example
   * Thunder
   */
  softwareName?: string;
  /**
   * @remarks
   * The prohibited software tag ID, used to filter policies that reference this tag. You can obtain the value from the following operations:
   * - [ListProhibitedTags](~~ListProhibitedTags~~): Lists prohibited software tags.
   * - [CreateProhibitedTag](~~CreateProhibitedTag~~): Creates a custom prohibited software tag.
   * 
   * @example
   * tag-d3f64e8bdd4a****
   */
  tagId?: string;
  /**
   * @remarks
   * The name of the prohibited software tag. Fuzzy match is supported. The name can be up to 128 characters in length and can contain Chinese characters, uppercase and lowercase letters, digits, periods (.), underscores (_), and hyphens (-). Spaces are not supported.
   * 
   * @example
   * CloudProduct
   */
  tagName?: string;
  /**
   * @remarks
   * The user group ID, used to filter policies whose effective scope includes this user group. You can obtain the value from the following operations:
   * - [ListUserGroups](~~ListUserGroups~~): Lists user groups.
   * - [CreateUserGroup](~~CreateUserGroup~~): Creates a user group.
   * 
   * @example
   * usergroup-9d4f2a7b3c1e****
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      enabled: 'Enabled',
      matchMode: 'MatchMode',
      name: 'Name',
      objectType: 'ObjectType',
      pageSize: 'PageSize',
      policyIds: 'PolicyIds',
      policyType: 'PolicyType',
      softwareId: 'SoftwareId',
      softwareName: 'SoftwareName',
      tagId: 'TagId',
      tagName: 'TagName',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      enabled: 'boolean',
      matchMode: 'string',
      name: 'string',
      objectType: 'string',
      pageSize: 'number',
      policyIds: { 'type': 'array', 'itemType': 'string' },
      policyType: 'string',
      softwareId: ListProhibitedPoliciesRequestSoftwareId,
      softwareName: 'string',
      tagId: 'string',
      tagName: 'string',
      userGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyIds)) {
      $dara.Model.validateArray(this.policyIds);
    }
    if(this.softwareId && typeof (this.softwareId as any).validate === 'function') {
      (this.softwareId as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


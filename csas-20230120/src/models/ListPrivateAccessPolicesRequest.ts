// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrivateAccessPolicesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the private access application. This parameter cannot be used together with the private access tag ID for filtering. You can obtain the value from the following sources:
   *  - [ListPrivateAccessApplications](~~ListPrivateAccessApplications~~): List private access applications.
   *  - [CreatePrivateAccessApplication](~~CreatePrivateAccessApplication~~): Create a private access application.
   * 
   * @example
   * pa-application-e12860ef6c48****
   */
  applicationId?: string;
  /**
   * @remarks
   * The name of the private access application.
   * 
   * @example
   * Office
   */
  applicationName?: string;
  /**
   * @remarks
   * The page number of the current page returned during paging in a paged query. Valid values: 1 to 10000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Policy Name of the private access policy. Policy Name must be 1 to 128 characters in length, and can contain Chinese characters, uppercase and lowercase letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * private_access_policy_name
   */
  name?: string;
  /**
   * @remarks
   * The Settings for the number of entries per page during paging in a paged query. Valid values: 1 to 1000.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The action of the private access policy. Valid values:
   * - **Block**: Block.
   * - **Allow**: Allow.
   * 
   * @example
   * Allow
   */
  policyAction?: string;
  /**
   * @remarks
   * The IDs of the private access policies. You can specify up to 100 private access policy IDs.
   */
  policyIds?: string[];
  /**
   * @remarks
   * The status of the private access policy. Valid values:
   * - **Enabled**: Enabled.
   * - **Disabled**: Disabled.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The ID of the private access tag. This parameter cannot be used together with the application ID for filtering. You can obtain the value from the following sources:
   *  - [ListPrivateAccessTags](~~ListPrivateAccessTags~~): List private access tags.
   *  - [CreatePrivateAccessTag](~~CreatePrivateAccessTag~~): Create a private access tag.
   * 
   * @example
   * tag-c0cb77857a99****
   */
  tagId?: string;
  /**
   * @remarks
   * The name of the tag.
   * 
   * @example
   * Cloud products
   */
  tagName?: string;
  /**
   * @remarks
   * The ID of the user group. You can obtain the value from the following sources:
   * - [ListUserGroups](~~ListUserGroups~~): List user groups.
   * - [CreateUserGroup](~~CreateUserGroup~~): Create a user group.
   * 
   * @example
   * usergroup-6f1ef2fc56b6****
   */
  userGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      applicationName: 'ApplicationName',
      currentPage: 'CurrentPage',
      name: 'Name',
      pageSize: 'PageSize',
      policyAction: 'PolicyAction',
      policyIds: 'PolicyIds',
      status: 'Status',
      tagId: 'TagId',
      tagName: 'TagName',
      userGroupId: 'UserGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      applicationName: 'string',
      currentPage: 'number',
      name: 'string',
      pageSize: 'number',
      policyAction: 'string',
      policyIds: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      tagId: 'string',
      tagName: 'string',
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


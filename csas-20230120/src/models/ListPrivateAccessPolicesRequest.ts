// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrivateAccessPolicesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the private access application. The application ID cannot be used together with the private access tag ID for filtering. Sources of the value:
   *  - [ListPrivateAccessApplications](~~ListPrivateAccessApplications~~): Queries private access applications by batch.
   *  - [CreatePrivateAccessApplication](~~CreatePrivateAccessApplication~~): Creates a private access application.
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
   * 办公
   */
  applicationName?: string;
  /**
   * @remarks
   * The page number of the current page that is returned during paginated queries. Valid values: 1 to 10000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The name of the private access policy. The name must be 1 to 128 characters in length and supports Chinese characters and uppercase and lowercase English letters. It can contain digits, periods (.), underscores (_), and hyphens (-).
   * 
   * @example
   * private_access_policy_name
   */
  name?: string;
  /**
   * @remarks
   * The number of entries per page that is set during paginated queries. Valid values: 1 to 1000.
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
   * The collection of private access policy IDs. You can specify up to 100 private access policy IDs.
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
   * The ID of the private access tag. The tag ID cannot be used together with the application ID for filtering. Sources of the value:
   *  - [ListPrivateAccessTags](~~ListPrivateAccessTags~~): Queries private access tags by batch.
   *  - [CreatePrivateAccessTag](~~CreatePrivateAccessTag~~): Creates a private access tag.
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
   * 云产品
   */
  tagName?: string;
  /**
   * @remarks
   * The ID of the user group. Sources of the value:
   * - [ListUserGroups](~~ListUserGroups~~): Queries user groups by batch.
   * - [CreateUserGroup](~~CreateUserGroup~~): Creates a user group.
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


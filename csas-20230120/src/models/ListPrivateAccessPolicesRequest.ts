// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrivateAccessPolicesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the office application. Either the ID or tag of the office application is used for queries. You can obtain the value by calling the following operations:
   * 
   * *   [ListPrivateAccessApplications](~~ListPrivateAccessApplications~~): queries office applications.
   * *   [CreatePrivateAccessApplication](~~CreatePrivateAccessApplication~~): creates an office application.
   * 
   * @example
   * pa-application-e12860ef6c48****
   */
  applicationId?: string;
  /**
   * @remarks
   * The name of the office application.
   * 
   * @example
   * Office
   */
  applicationName?: string;
  /**
   * @remarks
   * The page number. Valid values: 1 to 10000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The name of the private access policy. The value must be 1 to 128 characters in length and can contain letters, digits, hyphens (-), underscores (_), and periods (.).
   * 
   * @example
   * private_access_policy_name
   */
  name?: string;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 1000.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The action in the private access policy. Valid values:
   * 
   * *   **Block**
   * *   **Allow**
   * 
   * @example
   * Allow
   */
  policyAction?: string;
  /**
   * @remarks
   * The IDs of the private access policies. You can enter up to 100 IDs.
   */
  policyIds?: string[];
  /**
   * @remarks
   * The status of the private access policy. Valid values:
   * 
   * *   **Enabled**
   * *   **Disabled**
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The ID of the tag for the office application. Either the ID or tag of the office application is used for queries. You can obtain the value by calling the following operations:
   * 
   * *   [ListPrivateAccessTags](~~ListPrivateAccessTags~~): queries tags for office applications.
   * *   [CreatePrivateAccessTag](~~CreatePrivateAccessTag~~): creates a tag for office applications.
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
   * Cloud service
   */
  tagName?: string;
  /**
   * @remarks
   * The ID of the user group. You can obtain the value by calling the following operations:
   * 
   * *   [ListUserGroups](~~ListUserGroups~~): queries user groups.
   * *   [CreateUserGroup](~~CreateUserGroup~~): creates a user group.
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

